// Convert MKT1107 study-doc markdown files to .docx for LMS upload.
// usage: node build.js <src_dir> <out_dir> <img_dir>
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { marked } = require("marked");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, AlignmentType, LevelFormat, ImageRun,
  Header, Footer, PageNumber, TableLayoutType,
} = require("docx");

const [SRC, OUT, IMG] = process.argv.slice(2);
const HERE = __dirname;
const FONT = "Times New Roman";
const SIZE = 26; // 13pt
const CONTENT_W = 11906 - 2 * 1134; // A4, 2 cm margins

const TITLES = {
  1: "Tổng quan về nghiên cứu Marketing",
  2: "Tham khảo và trích dẫn tài liệu",
  3: "Hỗ trợ của AI trong nghiên cứu khoa học và marketing",
  4: "Thiết kế nghiên cứu",
  5: "Các phương pháp thu thập dữ liệu",
  6: "Chọn mẫu để nghiên cứu",
  7: "Đo lường",
  8: "Thiết kế bảng câu hỏi",
  9: "Phân tích dữ liệu",
  10: "Báo cáo kết quả nghiên cứu",
};

// ---------- mermaid → png ----------
let imgCount = 0;
function renderMermaid(code, base) {
  // portrait page: lay long left-to-right flows out top-down
  code = /flowchart\s+TD/.test(code) && base === "Bai05" ? code.replace(/^flowchart\s+TD/m, "flowchart LR") : code.replace(/^flowchart\s+LR/m, "flowchart TD");
  const id = `${base}_fig${++imgCount}`;
  const mmd = path.join(IMG, id + ".mmd");
  const png = path.join(IMG, id + ".png");
  fs.writeFileSync(mmd, code);
  execFileSync(path.join(HERE, "node_modules/.bin/mmdc"),
    ["-p", path.join(HERE, "pp.json"), "-i", mmd, "-o", png, "-s", "3", "-b", "white",
     "-c", path.join(HERE, "mmd.json")], { stdio: "ignore" });
  const buf = fs.readFileSync(png);
  const w = buf.readUInt32BE(16), h = buf.readUInt32BE(20);
  return { buf, w, h };
}

// ---------- inline ----------
function inlineRuns(tokens, style = {}) {
  const runs = [];
  for (const t of tokens || []) {
    switch (t.type) {
      case "strong": runs.push(...inlineRuns(t.tokens, { ...style, bold: true })); break;
      case "em": runs.push(...inlineRuns(t.tokens, { ...style, italics: true })); break;
      case "del": runs.push(...inlineRuns(t.tokens, { ...style, strike: true })); break;
      case "codespan":
        runs.push(new TextRun({ text: decode(t.text), font: "Courier New", size: SIZE - 2, ...style })); break;
      case "link": runs.push(...inlineRuns(t.tokens, { ...style, color: "1F4E79", underline: {} })); break;
      case "br": runs.push(new TextRun({ break: 1 })); break;
      case "text":
        if (t.tokens) runs.push(...inlineRuns(t.tokens, style));
        else runs.push(new TextRun({ text: decode(t.text), font: FONT, size: SIZE, ...style }));
        break;
      case "escape": runs.push(new TextRun({ text: decode(t.text), font: FONT, size: SIZE, ...style })); break;
      case "html": break;
      default:
        runs.push(new TextRun({ text: decode(t.raw || t.text || ""), font: FONT, size: SIZE, ...style }));
    }
  }
  return runs;
}
function decode(s) {
  return String(s).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
const SP = { after: 120, line: 300 };

// ---------- blocks ----------
let listCounter = 0;
function blocks(tokens, base, ctx = {}) {
  const out = [];
  for (const t of tokens) {
    switch (t.type) {
      case "space": case "html": break;
      case "heading": {
        const lvl = [null, HeadingLevel.HEADING_1, HeadingLevel.HEADING_1, HeadingLevel.HEADING_2,
          HeadingLevel.HEADING_3, HeadingLevel.HEADING_4][t.depth];
        out.push(new Paragraph({ heading: lvl, children: inlineRuns(t.tokens), keepNext: true }));
        break;
      }
      case "paragraph":
        out.push(new Paragraph({ children: inlineRuns(t.tokens), spacing: SP,
          indent: ctx.quote ? { left: 567 } : undefined,
          border: ctx.quote ? { left: { style: BorderStyle.SINGLE, size: 12, color: "8EA9C1", space: 8 } } : undefined }));
        break;
      case "blockquote":
        out.push(...blocks(t.tokens, base, { ...ctx, quote: true }));
        break;
      case "hr":
        out.push(new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "999999", space: 1 } }, spacing: SP }));
        break;
      case "code":
        if (t.lang === "mermaid") out.push(...figure(renderMermaid(t.text, base)));
        else out.push(...codeBox(t.text));
        break;
      case "list": out.push(...list(t, base, 0)); break;
      case "table": out.push(table(t)); out.push(new Paragraph({ spacing: { after: 60 } })); break;
      default:
        out.push(new Paragraph({ children: [new TextRun({ text: t.raw, font: FONT, size: SIZE })] }));
    }
  }
  return out;
}

function figure({ buf, w, h }) {
  const maxW = 15.5 / 2.54 * 96, maxH = 17 / 2.54 * 96; // px at 96 dpi
  let dw = w / 3, dh = h / 3; // rendered at scale 3
  const k = Math.min(1, maxW / dw, maxH / dh);
  dw *= k; dh *= k;
  return [new Paragraph({ alignment: AlignmentType.CENTER, spacing: SP,
    children: [new ImageRun({ type: "png", data: buf, transformation: { width: Math.round(dw), height: Math.round(dh) },
      altText: { title: "Sơ đồ", description: "Sơ đồ quy trình", name: "Sơ đồ" } })] })];
}

function codeBox(text) {
  const lines = text.split("\n");
  return lines.map((ln, i) => new Paragraph({
    shading: { type: ShadingType.CLEAR, color: "auto", fill: "F2F4F7" },
    indent: { left: 284, right: 284 },
    spacing: { before: i === 0 ? 60 : 0, after: i === lines.length - 1 ? 160 : 0, line: 276 },
    children: [new TextRun({ text: ln || " ", font: "Courier New", size: 21 })],
  }));
}

function list(t, base, level) {
  const out = [];
  const ref = t.ordered ? "num" : "bul";
  const instance = ++listCounter;
  for (const item of t.items) {
    const inl = [], nested = [];
    for (const c of item.tokens) {
      if (c.type === "list") nested.push(c);
      else if (c.type === "text" || c.type === "paragraph") inl.push(...(c.tokens || [{ type: "text", text: c.text }]));
      else if (c.type !== "checkbox" && c.type !== "space") nested.push(c);
    }
    const children = [];
    if (item.task) children.push(new TextRun({ text: (item.checked ? "☑" : "☐") + "  ", font: "Segoe UI Symbol", size: SIZE }));
    children.push(...inlineRuns(inl));
    out.push(new Paragraph({
      children, spacing: { after: 60, line: 300 },
      ...(item.task
        ? { indent: { left: 567 + level * 567, hanging: 340 } }
        : { numbering: { reference: ref, level, instance } }),
    }));
    for (const n of nested) {
      if (n.type === "list") out.push(...list(n, base, level + 1));
      else out.push(...blocks([n], base));
    }
  }
  return out;
}

function plainLen(cell) { return (cell.text || "").replace(/[*_`]/g, "").length; }

function table(t) {
  const ncol = t.header.length;
  // column widths proportional to content length, floor 12%
  const lens = t.header.map((h, j) => Math.max(plainLen(h), ...t.rows.map(r => plainLen(r[j] || {}))));
  const capped = lens.map(l => Math.min(Math.max(l, 6), 60));
  const sum = capped.reduce((a, b) => a + b, 0);
  let widths = capped.map(l => Math.max(Math.round(CONTENT_W * l / sum), Math.round(CONTENT_W * 0.12)));
  const s2 = widths.reduce((a, b) => a + b, 0);
  widths = widths.map(w => Math.round(w * CONTENT_W / s2));
  widths[ncol - 1] += CONTENT_W - widths.reduce((a, b) => a + b, 0);
  const border = { style: BorderStyle.SINGLE, size: 4, color: "A6A6A6" };
  const borders = { top: border, bottom: border, left: border, right: border };
  const mkCell = (cell, j, head) => new TableCell({
    width: { size: widths[j], type: WidthType.DXA }, borders,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    shading: head ? { type: ShadingType.CLEAR, color: "auto", fill: "DCE6F1" } : undefined,
    children: [new Paragraph({ spacing: { after: 0, line: 276 },
      children: inlineRuns(cell.tokens, head ? { bold: true } : {}).map(r => r) })],
  });
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED,
    rows: [
      new TableRow({ tableHeader: true, children: t.header.map((c, j) => mkCell(c, j, true)) }),
      ...t.rows.map(r => new TableRow({ cantSplit: true, children: r.map((c, j) => mkCell(c, j, false)) })),
    ],
  });
}

// ---------- document ----------
function numberingConfig() {
  const lv = (i, fmt, text) => ({
    level: i, format: fmt, text, alignment: AlignmentType.LEFT,
    style: { paragraph: { indent: { left: 567 + i * 567, hanging: 340 } } },
  });
  return { config: [
    { reference: "bul", levels: [lv(0, LevelFormat.BULLET, "•"), lv(1, LevelFormat.BULLET, "–"), lv(2, LevelFormat.BULLET, "·")] },
    { reference: "num", levels: [lv(0, LevelFormat.DECIMAL, "%1."), lv(1, LevelFormat.LOWER_LETTER, "%2."), lv(2, LevelFormat.LOWER_ROMAN, "%3.")] },
  ] };
}

async function build(file) {
  const n = parseInt(file.match(/Bai(\d+)/)[1], 10);
  let md = fs.readFileSync(path.join(SRC, file), "utf8").replace(/<!--[\s\S]*?-->\s*/g, "");
  imgCount = 0;
  const base = `Bai${String(n).padStart(2, "0")}`;
  const tokens = marked.lexer(md, { gfm: true });
  const title = `Bài ${n}: ${TITLES[n]}`;
  const body = [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 },
      children: [new TextRun({ text: "MKT1107 NGHIÊN CỨU MARKETING", font: FONT, size: 24, bold: true, color: "1F4E79" })] }),
    new Paragraph({ heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER, children: [new TextRun({ text: title })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 },
      children: [new TextRun({ text: "Tài liệu học tập", font: FONT, size: 26, italics: true, color: "595959" })] }),
    ...blocks(tokens, base),
  ];
  const doc = new Document({
    creator: "Đoàn Nguyễn Bảo Quyên",
    title: `MKT1107 · ${title} — Tài liệu học tập`,
    styles: {
      default: { document: { run: { font: FONT, size: SIZE }, paragraph: { spacing: SP } } },
      paragraphStyles: [
        { id: "Title", name: "Title", basedOn: "Normal", run: { font: FONT, size: 36, bold: true, color: "1F4E79" }, paragraph: { spacing: { after: 60 } } },
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { font: FONT, size: 30, bold: true, color: "1F4E79" }, paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { font: FONT, size: 27, bold: true, color: "2E5D8A" }, paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 1 } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { font: FONT, size: 26, bold: true, italics: true, color: "404040" }, paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } },
        { id: "Heading4", name: "Heading 4", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { font: FONT, size: 26, bold: true }, paragraph: { spacing: { before: 160, after: 60 }, outlineLevel: 3 } },
      ],
    },
    numbering: numberingConfig(),
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: `MKT1107 · ${title}`, font: FONT, size: 18, color: "7F7F7F" })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ children: ["Trang ", PageNumber.CURRENT, " / ", PageNumber.TOTAL_PAGES], font: FONT, size: 18, color: "7F7F7F" })] })] }) },
      children: body,
    }],
  });
  const outName = `MKT1107_Bai${String(n).padStart(2, "0")}_${slug(TITLES[n])}.docx`;
  fs.writeFileSync(path.join(OUT, outName), await Packer.toBuffer(doc));
  console.log("wrote", outName);
}
function slug(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D")
    .replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true }); fs.mkdirSync(IMG, { recursive: true });
  const files = fs.readdirSync(SRC).filter(f => /^Bai\d+\.md$/.test(f)).sort();
  for (const f of files) await build(f);
})();
