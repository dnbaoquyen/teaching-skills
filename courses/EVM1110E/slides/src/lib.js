// Shared design helpers for EVM1110E decks (style of MKT1107 W1_slides_v2.pptx)
const pptxgen = require("pptxgenjs");
const React = require("react");
const RDS = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");

const C = { BG: "172849", CARD: "22395F", TX: "FBFAF4", MU: "A9B6D3", NAVY: "172849", TEAL: "49B296", YEL: "FFD23B", PINK: "FF5178", PUR: "962B7C", BLUE: "09A1E5", ORA: "FF9259" };

function make(FONT, title) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.title = title;
  pres.author = "Đoàn Nguyễn Bảo Quyên";
  pres.theme = { headFontFace: FONT, bodyFontFace: FONT };
  pres.defineSlideMaster({ title: "CONTENT", background: { color: C.BG }, slideNumber: { x: 12.15, y: 6.95, w: 0.8, h: 0.45, color: C.MU, fontFace: FONT, fontSize: 14, align: "right" } });
  pres.defineSlideMaster({ title: "TITLE", background: { color: C.BG } });
  const cache = {};
  const L = {
    pres, C, n: 0,
    async icon(name, color = C.NAVY) {
      const k = name + color;
      if (cache[k]) return cache[k];
      if (!fa[name]) throw new Error("icon " + name);
      const svg = RDS.renderToStaticMarkup(React.createElement(fa[name], { color: "#" + color, size: 256 }));
      const buf = await sharp(Buffer.from(svg)).resize(256, 256).png().toBuffer();
      return (cache[k] = "image/png;base64," + buf.toString("base64"));
    },
    T(s, text, x, y, w, h, o = {}) {
      return s.addText(text, { x, y, w, h, fontFace: FONT, color: C.TX, fontSize: 18, valign: "middle", margin: 0.05, isTextBox: true, ...o });
    },
    box(s, x, y, w, h, fill = C.CARD, o = {}) {
      return s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: fill }, line: { color: fill }, rectRadius: 0.08, ...o });
    },
    circ(s, x, y, d, fill) { return s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } }); },
    num(s, k, x, y, d, fill, fs = 16) { L.circ(s, x, y, d, fill); L.T(s, String(k), x, y, d, d, { align: "center", bold: true, color: C.NAVY, fontSize: fs, margin: 0 }); },
    async ic(s, name, x, y, d, fill, color = C.NAVY) {
      L.circ(s, x, y, d, fill);
      const p = d * 0.22;
      s.addImage({ data: await L.icon(name, color), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, altText: "" });
    },
    arrow(s, x, y, w = 0.32, h = 0.4, col = C.MU) { s.addShape(pres.shapes.RIGHT_ARROW, { x, y, w, h, fill: { color: col }, line: { color: col } }); },
    slide(title) {
      L.n++;
      const s = pres.addSlide({ masterName: "CONTENT" });
      if (title) L.T(s, title, 0.6, 0.35, 12.13, 1.3, { fontSize: 28, bold: true, valign: "top" });
      return s;
    },
    titleSlide(title, sub) {
      L.n++;
      const s = pres.addSlide({ masterName: "TITLE" });
      L.T(s, title, 0.6, 1.8, 8.6, 2.5, { fontSize: 40, bold: true, valign: "bottom" });
      L.T(s, sub, 0.6, 4.55, 8.9, 1.2, { fontSize: 18, color: C.MU, valign: "top" });
      [[9.9, 1.3, 1.5, C.TEAL], [11.3, 2.2, 1.0, C.YEL], [10.2, 3.1, 2.0, C.PINK], [12.0, 3.6, 0.7, C.PUR], [9.8, 5.3, 0.9, C.BLUE], [11.1, 5.0, 1.3, C.ORA]].forEach(([x, y, d, c]) => L.circ(s, x, y, d, c));
      return s;
    },
    notes(s, { say, gv, ask, next }) {
      let t = "Nói: " + say;
      if (gv) t += "\n(GV: " + gv + ")";
      t += "\n\nHỏi lớp: " + (ask || "—") + "\n\nChuyển ý: " + (next || "—");
      s.addNotes(t);
    },
    src(s, text, y = 6.55) { L.T(s, text, 0.6, y, 11.4, 0.4, { fontSize: 12, color: C.MU, italic: true }); },
    bullets(items) { return items.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < items.length - 1 } })); },
    // standard components
    async question(title, q, iconName, fill, sub) {
      const s = L.slide(title);
      L.circ(s, 5.67, 1.9, 2.0, fill);
      s.addImage({ data: await L.icon(iconName), x: 6.17, y: 2.4, w: 1.0, h: 1.0, altText: "" });
      L.T(s, q, 0.6, 4.3, 12.13, 1.3, { fontSize: 32, bold: true, color: C.YEL, align: "center" });
      if (sub) L.T(s, sub, 0.6, 5.65, 12.13, 0.6, { fontSize: 18, color: C.MU, align: "center" });
      return s;
    },
    async breakSlide(min) {
      const s = L.slide("Giải lao " + min + " phút");
      await L.ic(s, "FaClock", 5.42, 1.9, 2.5, C.ORA);
      L.T(s, min + " phút", 0.6, 4.55, 12.13, 1.0, { align: "center", fontSize: 48, bold: true, color: C.ORA });
      L.box(s, 2.17, 5.75, 9.0, 0.8, C.YEL);
      L.T(s, "Quay lại lúc: [cần giảng viên xác nhận]", 2.37, 5.75, 8.6, 0.8, { align: "center", bold: true, color: C.NAVY, fontSize: 20 });
      return s;
    },
    async practice(title, steps, iconName, prodTitle, prodText, warn, col) {
      const s = L.slide(title);
      const h = steps.length > 3 ? 0.95 : 1.1, gap = steps.length > 3 ? 1.08 : 1.3;
      steps.forEach(([t, d, c], i) => {
        const y = 1.95 + i * gap;
        L.box(s, 0.6, y, 1.2, h, c);
        L.T(s, t, 0.6, y, 1.2, h, { align: "center", bold: true, color: C.NAVY, fontSize: 24 });
        L.box(s, 2.0, y, 6.6, h);
        L.T(s, d, 2.2, y, 6.3, h, { fontSize: 15 });
      });
      L.box(s, 8.9, 1.95, 3.83, 3.7);
      await L.ic(s, iconName, 10.25, 2.15, 1.1, col || C.TEAL);
      L.T(s, prodTitle, 8.9, 3.35, 3.83, 0.5, { align: "center", bold: true, fontSize: 18, color: col || C.TEAL });
      L.T(s, prodText, 9.1, 3.85, 3.43, 1.6, { align: "center", fontSize: 16, valign: "top" });
      if (warn) L.T(s, warn, 0.6, 6.15, 12.13, 0.55, { fontSize: 17, bold: true, color: C.PINK });
      return s;
    },
    quickCheck(qs) {
      const s = L.slide("Ba câu hỏi kiểm tra nhanh");
      qs.forEach((q, i) => { L.num(s, i + 1, 0.6, 2.0 + i * 1.35, 0.95, [C.TEAL, C.BLUE, C.ORA][i], 26); L.box(s, 1.8, 2.0 + i * 1.35, 10.93, 0.95); L.T(s, q, 2.05, 2.0 + i * 1.35, 10.5, 0.95, { fontSize: 18 }); });
      return s;
    },
    async exitTicket(q1, q2) {
      const s = L.slide("Trước khi về: hai câu trên phiếu cuối giờ");
      for (const [x, i_, c, t] of [[0.6, "FaSearch", C.TEAL, q1], [6.85, "FaQuestion", C.PINK, q2]]) {
        L.box(s, x, 2.0, 5.88, 4.4);
        await L.ic(s, i_, x + 2.19, 2.3, 1.5, c);
        L.T(s, t, x + 0.4, 4.0, 5.08, 2.2, { align: "center", fontSize: 18, valign: "top" });
      }
      return s;
    },
    async nextSession(title, h1, b1, bring) {
      const s = L.slide(title);
      L.box(s, 0.6, 2.0, 6.0, 4.0);
      await L.ic(s, "FaChessKnight", 0.9, 2.3, 1.0, C.YEL);
      L.T(s, h1, 2.1, 2.3, 4.3, 1.0, { bold: true, fontSize: 20, color: C.YEL });
      L.T(s, b1, 0.9, 3.5, 5.4, 2.4, { fontSize: 17, valign: "top" });
      L.box(s, 6.85, 2.0, 5.88, 4.0);
      await L.ic(s, "FaClipboardList", 7.15, 2.3, 1.0, C.TEAL);
      L.T(s, "Mang theo", 8.35, 2.3, 4.2, 1.0, { bold: true, fontSize: 20, color: C.TEAL });
      L.T(s, L.bullets(bring), 7.15, 3.5, 5.3, 2.4, { fontSize: 18, valign: "top", paraSpaceAfter: 8 });
      return s;
    },
    refs(list) {
      // list: array of arrays of [text, italic]
      const s = L.slide("Tài liệu tham khảo");
      const runs = [];
      list.forEach((r, i) => r.forEach(([t, it], j) => runs.push({ text: t, options: { italic: !!it, breakLine: j === r.length - 1 && i < list.length - 1 } })));
      L.T(s, runs, 0.6, 1.75, 12.13, 5.1, { fontSize: 14, valign: "top", paraSpaceAfter: 6 });
      return s;
    },
  };
  return L;
}
module.exports = { make, C };
