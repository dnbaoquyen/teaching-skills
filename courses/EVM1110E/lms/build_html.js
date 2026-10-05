// Markdown subset -> printable HTML (for PDF via headless Chromium).
// usage: node build_html.js <in.md> <out.html>
// Same subset as build_docx.js: headings, paragraphs, bullets, numbered lists, callouts, tables, **bold**, *italic*.
const fs = require("fs");
const [, , IN, OUT] = process.argv;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const inline = (s) => esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
const src = fs.readFileSync(IN, "utf8").split("\n");
let html = [], list = null, nonEmpty = 0;
const close = () => { if (list) { html.push(`</${list}>`); list = null; } };
for (let i = 0; i < src.length; i++) {
  const l = src[i];
  if (!l.trim()) { close(); continue; }
  nonEmpty++;
  let m;
  if (l.startsWith("|")) {
    close();
    const rows = [];
    while (i < src.length && src[i].startsWith("|")) { if (!/^\|\s*-/.test(src[i])) rows.push(src[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim())); i++; }
    i--;
    html.push("<table><thead><tr>" + rows[0].map((c) => `<th>${inline(c)}</th>`).join("") + "</tr></thead><tbody>" +
      rows.slice(1).map((r) => "<tr>" + r.map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>").join("") + "</tbody></table>");
    continue;
  }
  if ((m = l.match(/^# (.*)/))) { close(); html.push(`<h1>${inline(m[1])}</h1>`); continue; }
  if ((m = l.match(/^## (.*)/))) { close(); html.push(`<h2>${inline(m[1])}</h2>`); continue; }
  if ((m = l.match(/^### (.*)/))) { close(); html.push(`<h3>${inline(m[1])}</h3>`); continue; }
  if ((m = l.match(/^> ?(.*)/))) { close(); html.push(`<div class="note">${inline(m[1])}</div>`); continue; }
  if ((m = l.match(/^- (.*)/))) { if (list !== "ul") { close(); html.push("<ul>"); list = "ul"; } html.push(`<li>${inline(m[1])}</li>`); continue; }
  if ((m = l.match(/^\d+\. (.*)/))) { if (list !== "ol") { close(); html.push("<ol>"); list = "ol"; } html.push(`<li>${inline(m[1])}</li>`); continue; }
  close();
  html.push(nonEmpty === 2 ? `<p class="sub">${inline(l)}</p>` : `<p>${inline(l)}</p>`);
}
close();
const title = (src.find((x) => x.startsWith("# ")) || "").slice(2);
fs.writeFileSync(OUT, `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>${esc(title)}</title>
<style>
@page { size: A4; margin: 20mm 20mm 18mm; @bottom-center { content: counter(page); } }
body { font-family: Arial, "Liberation Sans", sans-serif; font-size: 11pt; line-height: 1.5; color: #1d2433; }
h1 { color: #172849; font-size: 17pt; margin: 0 0 4px; }
p.sub { color: #5a6478; border-bottom: 2px solid #2e8b74; padding-bottom: 6px; margin-bottom: 14px; }
h2 { color: #172849; font-size: 13.5pt; margin: 18px 0 6px; break-after: avoid; }
h3 { color: #2e8b74; font-size: 12pt; margin: 12px 0 4px; break-after: avoid; }
.note { background: #e8f4f0; border-left: 4px solid #2e8b74; padding: 8px 12px; margin: 8px 0 12px; font-size: 10pt; color: #333f55; }
table { border-collapse: collapse; width: 100%; margin: 6px 0 12px; font-size: 10pt; break-inside: auto; }
th, td { border: 1px solid #b7c4d6; padding: 4px 7px; vertical-align: top; text-align: left; }
th { background: #d6ece5; color: #172849; }
tr { break-inside: avoid; }
ul, ol { margin: 4px 0 10px; padding-left: 24px; } li { margin-bottom: 3px; }
</style></head><body>${html.join("\n")}</body></html>`);
console.log("wrote", OUT);
