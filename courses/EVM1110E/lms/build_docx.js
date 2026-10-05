// Build student summary documents (Markdown subset -> DOCX) for LMS upload.
// usage: NODE_PATH=<node_modules with docx> node build_docx.js <in.md> <out.docx>
// Supported: # / ## / ### headings, paragraphs, "- " bullets, "1. " numbered lists,
// "> " callouts, pipe tables, **bold**, *italic*.
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, AlignmentType, LevelFormat, Footer, PageNumber,
} = require("docx");

const [, , IN, OUT] = process.argv;
const FONT = "Arial", NAVY = "172849", TEAL = "2E8B74", GREY = "5A6478", LIGHT = "E8F4F0", HEAD = "D6ECE5";
const PAGE_W = 11906, MARGIN = 1134, CONTENT_W = PAGE_W - 2 * MARGIN;

function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const t = m[0];
    if (t.startsWith("**")) out.push(new TextRun({ text: t.slice(2, -2), bold: true, ...base }));
    else out.push(new TextRun({ text: t.slice(1, -1), italics: true, ...base }));
    last = m.index + t.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out;
}

function table(lines) {
  const rows = lines.filter((l) => !/^\|\s*-/.test(l)).map((l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
  const n = rows[0].length;
  // column widths: proportional to max text length, clamped
  const len = Array.from({ length: n }, (_, j) => Math.min(60, Math.max(8, ...rows.map((r) => (r[j] || "").length))));
  const sum = len.reduce((a, b) => a + b, 0);
  const widths = len.map((x) => Math.floor((x / sum) * CONTENT_W));
  widths[n - 1] += CONTENT_W - widths.reduce((a, b) => a + b, 0);
  const border = { style: BorderStyle.SINGLE, size: 4, color: "B7C4D6" };
  const borders = { top: border, bottom: border, left: border, right: border };
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: widths,
    rows: rows.map((r, i) => new TableRow({
      tableHeader: i === 0,
      children: widths.map((w, j) => new TableCell({
        width: { size: w, type: WidthType.DXA },
        borders,
        shading: i === 0 ? { type: ShadingType.CLEAR, fill: HEAD, color: "auto" } : undefined,
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: runs(r[j] || "", { size: 20, bold: i === 0 ? true : undefined, color: i === 0 ? NAVY : undefined }) })],
      })),
    })),
  });
}

const src = fs.readFileSync(IN, "utf8").split("\n");
const body = [];
let numId = 0;
for (let i = 0; i < src.length; i++) {
  const l = src[i];
  if (!l.trim()) continue;
  if (l.startsWith("|")) {
    const blk = [];
    while (i < src.length && src[i].startsWith("|")) blk.push(src[i++]);
    i--; body.push(table(blk));
    body.push(new Paragraph({ spacing: { before: 0, after: 80 }, children: [] }));
    continue;
  }
  let m;
  if ((m = l.match(/^# (.*)/))) { body.push(new Paragraph({ heading: HeadingLevel.TITLE, children: runs(m[1]) })); continue; }
  if ((m = l.match(/^## (.*)/))) { body.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: runs(m[1]) })); continue; }
  if ((m = l.match(/^### (.*)/))) { body.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: runs(m[1]) })); continue; }
  if ((m = l.match(/^> ?(.*)/))) {
    body.push(new Paragraph({
      shading: { type: ShadingType.CLEAR, fill: LIGHT, color: "auto" },
      border: { left: { style: BorderStyle.SINGLE, size: 18, color: TEAL, space: 8 } },
      indent: { left: 200, right: 100 }, spacing: { before: 80, after: 160 },
      children: runs(m[1], { size: 20, color: "333F55" }),
    }));
    continue;
  }
  if ((m = l.match(/^- (.*)/))) { body.push(new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 60 }, children: runs(m[1]) })); continue; }
  if ((m = l.match(/^(\d+)\. (.*)/))) {
    if (m[1] === "1") numId++;
    body.push(new Paragraph({ numbering: { reference: "numbers", level: 0, instance: numId }, spacing: { after: 60 }, children: runs(m[2]) }));
    continue;
  }
  // subtitle line directly under title
  if (i > 0 && src.slice(0, i).filter((x) => x.trim()).length === 1) {
    body.push(new Paragraph({ spacing: { after: 240 }, border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: TEAL, space: 6 } }, children: runs(l, { color: GREY, size: 21 }) }));
    continue;
  }
  body.push(new Paragraph({ spacing: { after: 120 }, children: runs(l) }));
}

const doc = new Document({
  creator: "EVM1110E",
  title: (src.find((x) => x.startsWith("# ")) || "").slice(2),
  styles: {
    default: { document: { run: { font: FONT, size: 22 }, paragraph: { spacing: { line: 300 } } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal", run: { size: 34, bold: true, color: NAVY, font: FONT }, paragraph: { spacing: { after: 80 } } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 27, bold: true, color: NAVY, font: FONT }, paragraph: { spacing: { before: 300, after: 120 }, outlineLevel: 0, keepNext: true } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 24, bold: true, color: TEAL, font: FONT }, paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1, keepNext: true } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] },
      { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 300 } } } }] },
    ],
  },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: 16838 }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "EVM1110E · Tài liệu tóm tắt dành cho sinh viên · Trang ", size: 16, color: GREY }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: GREY })] })] }) },
    children: body,
  }],
});
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(OUT, b); console.log("wrote", OUT); });
