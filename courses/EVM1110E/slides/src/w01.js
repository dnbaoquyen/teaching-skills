// Build EVM1110E Buổi 1 deck in the style of MKT1107 W1_slides_v2.pptx
// usage: node w01.js <Font> <outfile>
const pptxgen = require("pptxgenjs");
const React = require("react");
const RDS = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");

const FONT = process.argv[2] || "Alexandria";
const OUT = process.argv[3] || "W01_slides.pptx";

const BG = "172849", CARD = "22395F", TX = "FBFAF4", MU = "A9B6D3", NAVY = "172849";
const TEAL = "49B296", YEL = "FFD23B", PINK = "FF5178", PUR = "962B7C", BLUE = "09A1E5", ORA = "FF9259";

const iconCache = {};
async function icon(name, color = NAVY) {
  const k = name + color;
  if (iconCache[k]) return iconCache[k];
  const svg = RDS.renderToStaticMarkup(React.createElement(fa[name], { color: "#" + color, size: 256 }));
  const buf = await sharp(Buffer.from(svg)).resize(256, 256).png().toBuffer();
  return (iconCache[k] = "image/png;base64," + buf.toString("base64"));
}

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
pres.title = "Bài 1: Hệ sinh thái các bên liên quan bên ngoài của sự kiện";
pres.author = "Đoàn Nguyễn Bảo Quyên";
pres.theme = { headFontFace: FONT, bodyFontFace: FONT };
pres.defineSlideMaster({
  title: "CONTENT",
  background: { color: BG },
  slideNumber: { x: 12.15, y: 6.95, w: 0.8, h: 0.45, color: MU, fontFace: FONT, fontSize: 14, align: "right" },
});
pres.defineSlideMaster({ title: "TITLE", background: { color: BG } });

let n = 0;
const T = (s, text, x, y, w, h, o = {}) =>
  s.addText(text, { x, y, w, h, fontFace: FONT, color: TX, fontSize: 18, valign: "middle", margin: 0.05, isTextBox: true, ...o });
const box = (s, x, y, w, h, fill = CARD, o = {}) =>
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: fill }, line: { color: fill }, rectRadius: 0.08, ...o });
const circ = (s, x, y, d, fill) => s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } });
const num = (s, k, x, y, d, fill, fs = 16) => {
  circ(s, x, y, d, fill);
  T(s, String(k), x, y, d, d, { align: "center", bold: true, color: NAVY, fontSize: fs, margin: 0 });
};
async function ic(s, name, x, y, d, fill, color = NAVY) {
  circ(s, x, y, d, fill);
  const p = d * 0.22;
  s.addImage({ data: await icon(name, color), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, altText: "" });
}
function slide(title) {
  n++;
  const s = pres.addSlide({ masterName: "CONTENT" });
  if (title) T(s, title, 0.6, 0.35, 12.13, 1.3, { fontSize: 28, bold: true, valign: "top" });
  return s;
}
function notes(s, { say, gv, ask, next }) {
  let t = "Nói: " + say;
  if (gv) t += "\n(GV: " + gv + ")";
  t += "\n\nHỏi lớp: " + (ask || "—") + "\n\nChuyển ý: " + (next || "—");
  s.addNotes(t);
}
const src = (s, text, y = 6.55) => T(s, text, 0.6, y, 11.4, 0.4, { fontSize: 12, color: MU, italic: true });

(async () => {
  // ---------- 1 Title
  n++;
  let s = pres.addSlide({ masterName: "TITLE" });
  T(s, "Bài 1: Hệ sinh thái các bên liên quan bên ngoài của sự kiện", 0.6, 1.8, 8.6, 2.5, { fontSize: 40, bold: true, valign: "bottom" });
  T(s, "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 1\nGiảng viên: Đoàn Nguyễn Bảo Quyên", 0.6, 4.55, 8.9, 1.2, { fontSize: 18, color: MU, valign: "top" });
  [[9.9, 1.3, 1.5, TEAL], [11.3, 2.2, 1.0, YEL], [10.2, 3.1, 2.0, PINK], [12.0, 3.6, 0.7, PUR], [9.8, 5.3, 0.9, BLUE], [11.1, 5.0, 1.3, ORA]].forEach(([x, y, d, c]) => circ(s, x, y, d, c));
  notes(s, {
    say: "Chào các bạn. Đây là học phần EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện, Buổi 1 — Bài 1: Hệ sinh thái các bên liên quan bên ngoài của sự kiện. Giảng viên: Đoàn Nguyễn Bảo Quyên.",
    gv: "Chưa giới thiệu môn. Chuyển ngay sang slide 2. Kiểm tra nhanh các nhóm đã ngồi theo 6 nhóm chia sẵn chưa.",
    next: "Tôi bắt đầu bằng một câu chuyện có thật ở Úc.",
  });

  // ---------- 2 ISAF hook
  s = slide("Một sự kiện, hai kết luận: ban tổ chức nói thành công, người bán hàng nói lỗ");
  await ic(s, "FaShip", 0.9, 2.0, 1.9, BLUE);
  T(s, "vs", 2.9, 2.55, 0.9, 0.8, { align: "center", fontSize: 24, bold: true, color: MU });
  await ic(s, "FaPizzaSlice", 3.8, 2.0, 1.9, PINK);
  T(s, "Ban tổ chức", 0.6, 4.0, 2.5, 0.5, { align: "center", bold: true, color: BLUE, fontSize: 18 });
  T(s, "Quầy hàng ở lễ hội", 3.4, 4.0, 2.7, 0.5, { align: "center", bold: true, color: PINK, fontSize: 18 });
  const isaf = [
    ["Giải thuyền buồm thế giới ISAF, Fremantle (Úc), 12/2011: 789 vận động viên, 76 quốc gia", BLUE],
    ["Tốn AU$17,6 triệu tiền thuế. Bộ trưởng Du lịch: hơn 7.800 người đến, lợi ích AU$38,6 triệu", PUR],
    ["Chủ quầy pizza: “Họ hứa 200.000–250.000 người. Họ đâu rồi?” — lỗ khoảng 4–5 nghìn AU$", ORA],
  ];
  for (let i = 0; i < 3; i++) {
    num(s, i + 1, 6.5, 1.9 + i * 1.05, 0.7, isaf[i][1], 18);
    T(s, isaf[i][0], 7.4, 1.8 + i * 1.05, 5.4, 0.95, { fontSize: 17, valign: "middle" });
  }
  box(s, 6.5, 5.15, 6.23, 1.0, YEL);
  T(s, "Sự kiện này thành công — với ai?", 6.8, 5.15, 5.7, 1.0, { fontSize: 24, bold: true, color: NAVY });
  src(s, "Nguồn: Holmes, Hughes, Mair & Carlsen (2015, tr. 29–30). Số liệu là phát biểu của các bên, chưa kiểm chứng chéo.", 6.45);
  notes(s, {
    say: "Tháng 12 năm 2011, thành phố cảng Fremantle ở Tây Úc tổ chức Giải vô địch thuyền buồm thế giới ISAF: 789 vận động viên từ 76 quốc gia. Sự kiện tốn 17,6 triệu đô Úc tiền thuế. Sau sự kiện, Bộ trưởng Du lịch bang nói có hơn 7.800 người đến, đem lại 38,6 triệu đô lợi ích kinh tế. Giám đốc sự kiện nói: những người phàn nàn chỉ là những người muốn kiếm tiền từ sự kiện. Nhưng một chủ quầy pizza trong lễ hội đi kèm đã đóng quầy và nói: họ hứa với chúng tôi 200.000 đến 250.000 người trong 16 ngày — họ đâu rồi? Ông lỗ khoảng bốn, năm nghìn đô. Vậy: sự kiện này thành công — với ai?",
    gv: "Nguồn đã đối chiếu trực tiếp: Holmes et al. (2015), Events and Sustainability, Routledge, tr. 29–31 (NotebookLM ghi nhầm là Getz & Page, 2012). Các con số là phát biểu của từng bên trong sách, không phải số liệu kiểm toán — chưa kiểm chứng chéo, đừng trình bày như sự thật đã đo. Câu trả lời mong đợi: thành công với ban tổ chức và chính quyền bang, thất bại với người bán hàng và doanh nghiệp địa phương; sự kiện có nhiều bên với mục tiêu khác nhau. Ghi lên bảng: “thành công với ai?”.",
    ask: "“Sự kiện này thành công hay thất bại? Thành công với ai, thất bại với ai?” — 1 phút nghĩ một mình, 1 phút trao đổi với bạn bên cạnh, gọi 2–3 bạn.",
    next: "Các bạn vừa chỉ ra: thành công của một sự kiện phụ thuộc vào nhiều bên, và họ không cùng một mục tiêu.",
  });

  // ---------- 3
  s = slide("Sự kiện thành hay bại phụ thuộc vào những bên ta không trực tiếp quản lý");
  const res = [["FaMapMarkerAlt", "Địa điểm", "khách sạn, trung tâm hội nghị", TEAL], ["FaMoneyBillWave", "Tiền", "khách hàng, nhà tài trợ", YEL], ["FaBullhorn", "Sự chú ý", "báo chí, KOL", PINK], ["FaStamp", "Giấy phép", "cơ quan quản lý", BLUE], ["FaTools", "Thiết bị", "nhà cung cấp AV, LED", ORA]];
  for (let i = 0; i < 5; i++) {
    const x = 0.6 + i * 2.47;
    box(s, x, 1.95, 2.25, 3.2);
    await ic(s, res[i][0], x + 0.6, 2.2, 1.05, res[i][3]);
    T(s, res[i][1], x + 0.1, 3.4, 2.05, 0.6, { align: "center", bold: true, fontSize: 20 });
    T(s, res[i][2], x + 0.1, 4.0, 2.05, 0.9, { align: "center", fontSize: 15, color: MU, valign: "top" });
  }
  T(s, "Nghề agency: điều phối những bên mình không quản lý để sự kiện xảy ra — và khách hàng quay lại.", 0.6, 5.5, 12.13, 0.9, { fontSize: 20, bold: true, color: YEL });
  notes(s, {
    say: "Một công ty tổ chức sự kiện — agency — không tự làm ra sự kiện. Địa điểm là của khách sạn hay trung tâm hội nghị. Tiền là của khách hàng và nhà tài trợ. Sự chú ý là của báo chí và KOL. Giấy phép là của cơ quan quản lý. Thiết bị là của nhà cung cấp âm thanh, ánh sáng, màn LED. Nghề agency là điều phối những bên mình không quản lý để sự kiện xảy ra — và khách hàng quay lại.",
    gv: "Ý chính của cả môn. Nói chậm câu màu vàng.",
    next: "Vì vậy môn học này chỉ tập trung vào một vùng: các bên nằm ngoài agency.",
  });

  // ---------- 4 scope
  s = slide("Môn học chỉ xét các bên liên quan bên ngoài agency");
  box(s, 0.6, 1.9, 6.0, 4.6);
  box(s, 0.6, 1.9, 6.0, 0.7, TEAL);
  T(s, "Trong môn này", 0.85, 1.9, 5.5, 0.7, { bold: true, color: NAVY, fontSize: 20 });
  T(s, [
    { text: "Khách hàng (Key Account)", options: { bullet: true, breakLine: true } },
    { text: "Nhà đầu tư, nhà tài trợ", options: { bullet: true, breakLine: true } },
    { text: "Nhà cung cấp, địa điểm", options: { bullet: true, breakLine: true } },
    { text: "Báo chí, KOL/influencer", options: { bullet: true, breakLine: true } },
    { text: "Khách mời, công chúng, cộng đồng", options: { bullet: true, breakLine: true } },
    { text: "Cơ quan quản lý", options: { bullet: true } },
  ], 0.9, 2.75, 5.5, 3.6, { fontSize: 18, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.85, 1.9, 5.88, 4.6);
  box(s, 6.85, 1.9, 5.88, 0.7, PINK);
  T(s, "Không thuộc môn này", 7.1, 1.9, 5.4, 0.7, { bold: true, color: NAVY, fontSize: 20 });
  T(s, "Nhân sự, crew, tình nguyện viên", 7.15, 2.85, 5.4, 0.5, { fontSize: 18, bold: true });
  T(s, "→ môn Quản lý đội nhóm trong tổ chức sự kiện", 7.15, 3.35, 5.4, 0.6, { fontSize: 16, color: MU });
  T(s, "Quản lý, an toàn đám đông", 7.15, 4.2, 5.4, 0.5, { fontSize: 18, bold: true });
  T(s, "→ môn Quản trị rủi ro sự kiện", 7.15, 4.7, 5.4, 0.6, { fontSize: 16, color: MU });
  notes(s, {
    say: "Môn học này chỉ xét các bên liên quan bên ngoài agency: khách hàng — Key Account, nhà đầu tư và nhà tài trợ, nhà cung cấp và địa điểm, báo chí và KOL, khách mời, công chúng, cộng đồng, và cơ quan quản lý. Không thuộc môn này: nhân sự, crew, tình nguyện viên — đó là môn Quản lý đội nhóm trong tổ chức sự kiện; và quản lý, an toàn đám đông — đó là môn Quản trị rủi ro sự kiện.",
    gv: "Phạm vi “chỉ bên ngoài” là quyết định GV đã ghi trong passport (CLO4 bỏ chữ “nội bộ”). Nhắc lại phạm vi này mỗi khi SV liệt kê nhân sự.",
    next: "Trong các bên ngoài đó, có một bên là trục của cả môn.",
  });

  // ---------- 5 axis
  s = slide("Khách hàng là trục; mọi bên khác phục vụ hành trình của khách hàng");
  circ(s, 5.17, 2.85, 3.0, YEL);
  T(s, "Key Account\n(khách hàng trọng yếu)", 5.17, 2.85, 3.0, 3.0, { align: "center", bold: true, color: NAVY, fontSize: 20 });
  const parts = [["Phần 1 · Buổi 1", "Nền tảng: nhìn thấy hệ sinh thái", 0.6, 1.95, TEAL], ["Phần 2 · Buổi 2–8", "Quản trị quan hệ với Key Account (KAM)", 8.75, 1.95, PINK], ["Phần 3 · Buổi 9–12", "Điều phối nhà tài trợ, nhà cung cấp, địa điểm, truyền thông", 0.6, 4.6, BLUE], ["Phần 4 · Buổi 13–15", "Hoàn thiện và bảo vệ kế hoạch", 8.75, 4.6, ORA]];
  for (const [h, b, x, y, c] of parts) {
    box(s, x, y, 4.0, 1.85);
    T(s, h, x + 0.25, y + 0.15, 3.6, 0.5, { bold: true, color: c, fontSize: 18 });
    T(s, b, x + 0.25, y + 0.65, 3.6, 1.05, { fontSize: 17, valign: "top" });
  }
  notes(s, {
    say: "Hãy hình dung khách hàng ở giữa — Key Account, khách hàng trọng yếu. Phần 1, Buổi 1: nền tảng — nhìn thấy toàn bộ hệ sinh thái. Phần 2, Buổi 2 đến 8: quản trị quan hệ với Key Account — đây là trục của môn, vì khách hàng là bên quyết định doanh thu năm sau của agency. Phần 3, Buổi 9 đến 12: điều phối nhà tài trợ, nhà cung cấp, địa điểm, truyền thông — mỗi bên được gắn vào một điểm chạm trên hành trình của khách hàng. Phần 4, Buổi 13 đến 15: hoàn thiện và bảo vệ kế hoạch.",
    gv: "Lịch học: 13 buổi lên lớp + Buổi 14–15 bảo vệ (passport W14, W15).",
    next: "Vậy hết học phần, các bạn làm được gì?",
  });

  // ---------- 6 outcomes
  s = slide("Hết học phần, nhóm bạn lập và bảo vệ được một kế hoạch quản trị các bên liên quan cho khách hàng thật");
  const outs = [["FaProjectDiagram", "Phân tích hệ sinh thái và quyền lực của các bên liên quan", TEAL], ["FaHandshake", "Xây dựng và đo lường quan hệ với Key Account", YEL], ["FaRoute", "Điều phối nhà tài trợ, nhà cung cấp, địa điểm, truyền thông quanh hành trình khách hàng", BLUE], ["FaUserTie", "Trình bày và bảo vệ kế hoạch bằng thuật ngữ chuyên môn, có đạo đức nghề nghiệp", ORA]];
  for (let i = 0; i < 4; i++) {
    await ic(s, outs[i][0], 0.6, 2.0 + i * 1.18, 0.95, outs[i][2]);
    T(s, outs[i][1], 1.9, 2.0 + i * 1.18, 10.6, 0.95, { fontSize: 20 });
  }
  notes(s, {
    say: "Kết thúc học phần, nhóm các bạn có thể: một, phân tích hệ sinh thái và quyền lực của các bên liên quan; hai, xây dựng và đo lường quan hệ với Key Account; ba, điều phối nhà tài trợ, nhà cung cấp, địa điểm, truyền thông quanh hành trình khách hàng; bốn, trình bày và bảo vệ kế hoạch bằng thuật ngữ chuyên môn, có đạo đức nghề nghiệp. Chi tiết trong đề cương trên LMS.",
    gv: "Đây là CLO1–9 viết lại bằng lời của SV: dòng 1 ≈ CLO2, CLO4; dòng 2 ≈ CLO1; dòng 3 ≈ CLO2, CLO3, CLO5, CLO6; dòng 4 ≈ CLO7, CLO8, CLO9. Không đọc CLO nguyên văn.",
    next: "Cách để đạt được: mỗi buổi thêm một mảnh vào một kế hoạch duy nhất.",
  });

  // ---------- 7 roadmap
  s = slide("Mỗi buổi thêm một mảnh: đến Buổi 13 nhóm đã có gần đủ kế hoạch");
  const road = [["B1", "Bản đồ bên liên quan", TEAL], ["B2", "Chọn Key Account", YEL], ["B3", "DMU & hành trình khách hàng", BLUE], ["B4", "Chất lượng quan hệ", ORA], ["B5", "CVP & đồng kiến tạo", PINK], ["B6", "CLV & cost-to-serve", TEAL], ["B7", "Nhà cung cấp & đàm phán", YEL],
    ["B8", "Cấu trúc quan hệ & đo lường", BLUE], ["B9", "Nhà đầu tư & nhà tài trợ", ORA], ["B10", "Nhà cung ứng & địa điểm", PINK], ["B11", "Truyền thông & KOL", TEAL], ["B12", "Xung đột trong mạng lưới", YEL], ["B13", "Ráp kế hoạch A–E", BLUE], ["B14–15", "Bảo vệ trước “Customer Board”", PINK]];
  for (let i = 0; i < 14; i++) {
    const x = 0.6 + (i % 7) * 1.76, y = 1.9 + Math.floor(i / 7) * 1.85;
    box(s, x, y, 1.62, 1.65);
    T(s, road[i][0], x + 0.12, y + 0.1, 1.4, 0.45, { bold: true, color: road[i][2], fontSize: 18 });
    T(s, road[i][1], x + 0.12, y + 0.55, 1.42, 1.0, { fontSize: 14, valign: "top" });
  }
  box(s, 0.6, 5.7, 5.95, 0.65, ORA);
  T(s, "Giữa kỳ: thuyết trình + làm việc nhóm (ngoài giờ/LMS)", 0.8, 5.7, 5.6, 0.65, { bold: true, color: NAVY, fontSize: 15 });
  box(s, 6.78, 5.7, 5.95, 0.65, PINK);
  T(s, "Cuối kỳ: Stakeholder Management Plan + bảo vệ", 6.98, 5.7, 5.6, 0.65, { bold: true, color: NAVY, fontSize: 15 });
  notes(s, {
    say: "Bài cuối kỳ là một Stakeholder Management Plan — kế hoạch quản trị các bên liên quan — cho một khách hàng từ dự án sự kiện nhóm đã làm ở môn trước. Không làm dự án mới. Mỗi buổi thêm một mảnh: Buổi 1 bản đồ bên liên quan; Buổi 2 chọn Key Account; Buổi 3 người ra quyết định và hành trình khách hàng; Buổi 4 chất lượng quan hệ; Buổi 5 đề xuất giá trị và đồng kiến tạo; Buổi 6 giá trị vòng đời và chi phí phục vụ; Buổi 7 nhà cung cấp và đàm phán; Buổi 8 cấu trúc quan hệ và đo lường; Buổi 9 nhà đầu tư và nhà tài trợ; Buổi 10 nhà cung ứng và địa điểm; Buổi 11 truyền thông và KOL; Buổi 12 xung đột trong mạng lưới; Buổi 13 ráp kế hoạch theo khung A đến E; Buổi 14–15 bảo vệ trước “Customer Board” — hội đồng khách hàng. Giữa kỳ là thuyết trình và đánh giá làm việc nhóm, tổ chức ngoài giờ hoặc trên LMS.",
    gv: "Giữa kỳ A3 ngoài giờ/LMS là quyết định GV (passport). [NEEDS PROFESSOR INPUT: ngày giữa kỳ và hạn nộp SMP; quy định nộp trễ.]",
    next: "Điểm của học phần được chia như sau.",
  });

  // ---------- 8 grading
  s = slide("Một nửa số điểm đến từ kế hoạch cuối kỳ của nhóm");
  const gr = [["Chuyên cần", "10%", MU], ["Bài tập (nộp LMS)", "20%", TEAL], ["Giữa kỳ: thuyết trình + làm việc nhóm", "20%", TEAL], ["Cuối kỳ: Stakeholder Management Plan + bảo vệ", "50%", YEL]];
  for (let i = 0; i < 4; i++) {
    box(s, 0.6, 2.0 + i * 0.95, 7.6, 0.78);
    T(s, gr[i][0], 0.85, 2.0 + i * 0.95, 6.0, 0.78, { fontSize: 18 });
    T(s, gr[i][1], 6.9, 2.0 + i * 0.95, 1.15, 0.78, { fontSize: 24, bold: true, color: gr[i][2], align: "right" });
  }
  T(s, "50%", 8.8, 2.2, 3.9, 1.6, { fontSize: 72, bold: true, color: YEL, align: "center" });
  T(s, "cuối kỳ — xây dần từ hôm nay", 8.8, 3.8, 3.9, 0.6, { fontSize: 18, color: MU, align: "center" });
  T(s, "Bài làm trên lớp không tính điểm, nhưng là nguyên liệu cho kế hoạch.", 0.6, 6.0, 12.1, 0.5, { fontSize: 16, bold: true, color: TEAL });
  notes(s, {
    say: "Chuyên cần 10%. Bài tập nộp LMS 20%. Giữa kỳ: thuyết trình và làm việc nhóm 20%. Cuối kỳ: Stakeholder Management Plan và bảo vệ, 50%. Một nửa số điểm nằm ở kế hoạch cuối kỳ — và kế hoạch đó được xây dần từ hôm nay. Bài làm trên lớp không tính điểm, nhưng là nguyên liệu cho kế hoạch.",
    gv: "Trọng số theo passport/đề cương (AM1 10, AM2 20, AM3+AM9 20, AM7+AM9 50). [NEEDS PROFESSOR INPUT: nội dung AM2 — bài tập nộp LMS gồm những gì, vì các buổi không giao bài về nhà; quy định chuyên cần.]",
    next: "Hai quy ước dùng suốt học phần: AI và trích dẫn.",
  });

  // ---------- 9 AI + APA
  s = slide("Được dùng AI cho kế hoạch, nhưng phải khai báo và tự bảo vệ được; trích dẫn theo APA 7");
  box(s, 0.6, 1.95, 6.2, 4.35);
  await ic(s, "FaRobot", 0.9, 2.2, 0.8, BLUE);
  T(s, "Dùng AI", 1.9, 2.2, 4.5, 0.8, { bold: true, color: BLUE, fontSize: 22 });
  T(s, [
    { text: "Phụ lục khai báo: công cụ, dùng vào việc gì, nhóm đã sửa gì", options: { bullet: true, breakLine: true } },
    { text: "Phần bảo vệ trực tiếp là phần quyết định", options: { bullet: true, breakLine: true } },
    { text: "Tự kiểm chứng mọi số liệu và trích dẫn", options: { bullet: true } },
  ], 0.95, 3.2, 5.6, 2.9, { fontSize: 17, valign: "top", paraSpaceAfter: 8 });
  box(s, 7.1, 1.95, 5.63, 4.35);
  await ic(s, "FaBook", 7.4, 2.2, 0.8, TEAL);
  T(s, "APA 7", 8.4, 2.2, 4.0, 0.8, { bold: true, color: TEAL, fontSize: 22 });
  T(s, "Danh mục tài liệu", 7.45, 3.2, 5.0, 0.4, { fontSize: 15, color: MU });
  T(s, "Holmes, K., Hughes, M., Mair, J., & Carlsen, J. (2015).", 7.45, 3.6, 5.1, 0.75, { fontSize: 16, bold: true, color: YEL, valign: "top" });
  T(s, "Trong bài", 7.45, 4.55, 5.0, 0.4, { fontSize: 15, color: MU });
  T(s, "(Holmes et al., 2015)", 7.45, 4.95, 5.0, 0.5, { fontSize: 18, bold: true, color: YEL });
  notes(s, {
    say: "Với bài cuối kỳ, các bạn được dùng AI, nhưng phải có phụ lục khai báo: dùng công cụ nào, dùng vào việc gì, nhóm đã sửa gì. Phần bảo vệ trực tiếp trước hội đồng mới là phần quyết định — nếu nhóm không giải thích được điều mình viết, kế hoạch không đứng vững. Và tự kiểm chứng mọi số liệu, mọi trích dẫn. Trích dẫn theo APA 7: trong danh mục ghi đủ tác giả và năm — ví dụ Holmes, Hughes, Mair và Carlsen, 2015; trong bài viết ngắn — Holmes và cộng sự, 2015.",
    gv: "Chính sách AI mức D (cho phép kèm công bố) đã được GV duyệt ở tư liệu Buổi 13; chưa ghi vào passport. Không dùng và không nhắc đến công cụ “phát hiện AI” như một biện pháp liêm chính (shared/ai_era_integrity.md).",
    next: "Giờ vào bài. Tôi hỏi các bạn một câu trước.",
  });

  // ---------- 10 question
  s = slide("Trước khi đọc định nghĩa, hãy đoán");
  circ(s, 5.67, 2.0, 2.0, YEL);
  s.addImage({ data: await icon("FaQuestion", NAVY), x: 6.17, y: 2.5, w: 1.0, h: 1.0, altText: "" });
  T(s, "Theo bạn, ai là “bên liên quan” của một sự kiện?", 0.6, 4.4, 12.13, 1.4, { fontSize: 32, bold: true, color: YEL, align: "center" });
  notes(s, {
    say: "Trước khi đọc định nghĩa, hãy đoán: theo bạn, ai là “bên liên quan” của một sự kiện?",
    gv: "Cho 30 giây. Gọi 3–4 SV. Ghi từ khóa lên bảng. Hay gặp: “người trả tiền”, “người tham dự”. Giữ lại để đối chiếu ở slide sau.",
    ask: "“Ai là bên liên quan của một sự kiện? Kể nhanh một bên.”",
    next: "Xem ba nguồn định nghĩa thế nào.",
  });

  // ---------- 11 definitions
  s = slide("Ba nguồn, ba cách nói — cùng một ý: ảnh hưởng hoặc bị ảnh hưởng");
  const defs = [["Freeman (1984)", TEAL, [["Bất kỳ nhóm hoặc cá nhân nào ", false], ["có thể ảnh hưởng đến, hoặc bị ảnh hưởng bởi", true], [", việc đạt mục tiêu của tổ chức", false]], "(Freeman, 1984)"],
    ["Reid & Arcodia (2002)", BLUE, [["Nhóm hoặc cá nhân ", false], ["bị ảnh hưởng hoặc có thể bị ảnh hưởng", true], [" bởi sự tồn tại của sự kiện", false]], "(Reid & Arcodia, 2002, dẫn theo Holmes et al., 2015)"],
    ["Slide bộ môn", ORA, [["Cá nhân hoặc nhóm cá nhân ", false], ["có thể gây ảnh hưởng hoặc bị ảnh hưởng", true], [" bởi các hành động của doanh nghiệp", false]], "(Trần Nguyễn Huỳnh Như, 2023)"]];
  for (let i = 0; i < 3; i++) {
    const x = 0.6 + i * 4.13;
    box(s, x, 1.95, 3.9, 0.65, defs[i][1]);
    T(s, defs[i][0], x + 0.2, 1.95, 3.5, 0.65, { bold: true, color: NAVY, fontSize: 18 });
    box(s, x, 2.75, 3.9, 2.9);
    T(s, defs[i][2].map(([t, b]) => ({ text: t, options: { bold: b, color: b ? defs[i][1] : TX } })), x + 0.2, 2.9, 3.5, 2.6, { fontSize: 18, valign: "top" });
    T(s, defs[i][3], x, 5.75, 3.9, 0.7, { fontSize: 12, color: MU, valign: "top" });
  }
  notes(s, {
    say: "Ba nguồn, ba cách nói. Freeman, năm 1984 — người đặt nền cho lý thuyết bên liên quan: bất kỳ nhóm hoặc cá nhân nào có thể ảnh hưởng đến, hoặc bị ảnh hưởng bởi, việc đạt mục tiêu của tổ chức. Reid và Arcodia, 2002, viết riêng cho sự kiện: nhóm hoặc cá nhân bị ảnh hưởng hoặc có thể bị ảnh hưởng bởi sự tồn tại của sự kiện. Slide bộ môn: cá nhân hoặc nhóm cá nhân có thể gây ảnh hưởng hoặc bị ảnh hưởng bởi các hành động của doanh nghiệp. Cùng một ý: định nghĩa có hai chiều — có thể ảnh hưởng, như nhà tài trợ rút tiền; hoặc bị ảnh hưởng, như cư dân chịu tiếng ồn. So với các bạn đoán lúc nãy: bên liên quan không chỉ là người trả tiền.",
    gv: "Đã đối chiếu: câu Reid & Arcodia (2002, tr. 346) trích nguyên văn trong Holmes et al. (2015, tr. 24) — “Groups or individuals who are affected or could be affected by an event's existence”. Câu slide bộ môn: Chương 2, mục 2.2.1 (ThS. Trần Nguyễn Huỳnh Như; năm ghi theo ngày tạo file 2023 — [NEEDS PROFESSOR INPUT: xác nhận năm]). Freeman (1984) là định nghĩa kinh điển (dịch ý).",
    ask: "“Định nghĩa nào gần với điều bạn đoán nhất? Định nghĩa nào rộng hơn điều bạn đoán?”",
    next: "Môn học gom các ý này thành một định nghĩa làm việc cho agency.",
  });

  // ---------- 12 working definition
  s = slide("Hệ sinh thái bên liên quan bên ngoài: bốn thành tố");
  T(s, "Mạng lưới các tổ chức, cá nhân ngoài agency cùng góp nguồn lực, nhận giá trị, chịu tác động hoặc có quyền cho phép sự kiện — và phụ thuộc lẫn nhau. (định nghĩa làm việc của môn)", 0.6, 1.75, 12.13, 1.0, { fontSize: 16, italic: true, color: MU, valign: "top" });
  const four = [["1", "Ngoài agency", TEAL], ["2", "Có “phần” trong sự kiện: góp, nhận, chịu tác động, cho phép", YEL], ["3", "Phụ thuộc lẫn nhau", BLUE], ["4", "Thay đổi theo giai đoạn", ORA]];
  for (let i = 0; i < 4; i++) {
    const x = 0.6 + i * 3.17;
    box(s, x, 3.0, 2.75, 2.5, four[i][2]);
    T(s, four[i][0], x, 3.15, 2.75, 0.6, { align: "center", bold: true, color: NAVY, fontSize: 26 });
    T(s, four[i][1], x + 0.15, 3.8, 2.45, 1.55, { align: "center", bold: true, color: NAVY, fontSize: 17, valign: "top" });
    if (i < 3) s.addShape(pres.shapes.RIGHT_ARROW, { x: x + 2.8, y: 4.05, w: 0.32, h: 0.4, fill: { color: MU }, line: { color: MU } });
  }
  notes(s, {
    say: "Môn học dùng một định nghĩa làm việc: hệ sinh thái bên liên quan bên ngoài là mạng lưới các tổ chức, cá nhân ngoài agency cùng góp nguồn lực, nhận giá trị, chịu tác động hoặc có quyền cho phép sự kiện — và phụ thuộc lẫn nhau. Bốn thành tố: một, ngoài agency; hai, có “phần” trong sự kiện — góp nguồn lực, nhận giá trị, chịu tác động, hoặc có quyền cho phép; ba, phụ thuộc lẫn nhau; bốn, thay đổi theo giai đoạn.",
    gv: "Định nghĩa làm việc đã được GV duyệt (tư liệu Buổi 1, A05), dựng từ Freeman (1984), Van Niekerk & Getz (2019), Getz, Andersson & Larson (2006). Không trình bày như định nghĩa của một tác giả. Thành tố 4 thêm cho khớp slide 18. Câu NotebookLM đưa ra “The environment for events is analogous to an ecosystem…” (gán Getz & Page 2012, tr. 192) KHÔNG tìm thấy trong sách — không dùng.",
    next: "Chữ “hệ sinh thái” khác chữ “danh sách” ở đâu?",
  });

  // ---------- 13 list vs network
  s = slide("Danh sách thấy từng bên; hệ sinh thái thấy cả những sợi dây nối họ");
  box(s, 0.6, 1.95, 4.0, 4.1);
  T(s, "Danh sách", 0.85, 2.05, 3.5, 0.5, { bold: true, color: MU, fontSize: 18 });
  T(s, ["Khách hàng", "Khách sạn", "Nhà tài trợ", "Báo chí", "KOL"].map((t, i, a) => ({ text: t, options: { bullet: true, breakLine: i < a.length - 1 } })), 0.9, 2.6, 3.4, 3.2, { fontSize: 18, valign: "top", paraSpaceAfter: 6 });
  box(s, 4.9, 1.95, 7.83, 4.1);
  T(s, "Hệ sinh thái", 5.15, 2.05, 3.5, 0.5, { bold: true, color: TEAL, fontSize: 18 });
  const nodes = { KH: [8.3, 3.55, "Khách hàng", YEL], KS: [5.5, 4.7, "Khách sạn", TEAL], NT: [5.5, 2.6, "Nhà tài trợ", PINK], BC: [10.9, 2.6, "Báo chí", BLUE], KOL: [10.9, 4.7, "KOL", ORA] };
  const links = [["NT", "BC"], ["BC", "KOL"], ["KOL", "KH"], ["KH", "KS"], ["NT", "KH"], ["KS", "NT"]];
  for (const [a, b] of links) {
    const A = nodes[a], B = nodes[b];
    const x1 = A[0] + 0.7, y1 = A[1] + 0.35, x2 = B[0] + 0.7, y2 = B[1] + 0.35;
    s.addShape(pres.shapes.LINE, { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1) || 0.01, h: Math.abs(y2 - y1) || 0.01, line: { color: MU, width: 2 }, flipV: (x2 - x1) * (y2 - y1) < 0 });
  }
  for (const k in nodes) {
    const [x, y, t, c] = nodes[k];
    box(s, x, y, 1.4, 0.7, c);
    T(s, t, x, y, 1.4, 0.7, { align: "center", bold: true, color: NAVY, fontSize: 14 });
  }
  T(s, "Khách sạn đột ngột đổi sang phòng nhỏ hơn: những bên nào bị ảnh hưởng dây chuyền?", 0.6, 6.2, 12.13, 0.6, { fontSize: 18, bold: true, color: YEL });
  notes(s, {
    say: "Một danh sách liệt kê từng bên riêng lẻ: khách hàng, khách sạn, nhà tài trợ, báo chí, KOL. Một hệ sinh thái nhìn thêm những sợi dây nối họ: nhà tài trợ quan tâm vì báo chí đưa tin; báo chí đến vì có KOL; KOL nhận lời vì thương hiệu của khách hàng. Kéo một sợi dây, cả mạng rung. Thử nhé: khách sạn đột ngột đổi sang phòng nhỏ hơn — những bên nào bị ảnh hưởng dây chuyền?",
    gv: "Vẽ nhanh chuỗi ảnh hưởng lên bảng khi SV trả lời. Câu trả lời mong đợi: khách mời (chỗ ngồi), nhà cung cấp AV/LED (kích thước màn), nhà tài trợ (gian trưng bày), khách hàng (hình ảnh), có khi cả cơ quan quản lý (sức chứa).",
    ask: "“Khách sạn đổi sang phòng nhỏ hơn: những bên nào bị ảnh hưởng dây chuyền?”",
    next: "Hệ sinh thái của sự kiện có sáu đặc điểm riêng.",
  });

  // ---------- 14 six characteristics
  s = slide("Hệ sinh thái của sự kiện có sáu đặc điểm riêng");
  const six = [["FaHourglassHalf", "Tạm thời, theo dự án", "tập hợp quanh một sự kiện rồi tan", TEAL], ["FaLink", "Phụ thuộc lẫn nhau", "một mắt xích hỏng kéo cả chuỗi", YEL], ["FaBalanceScale", "Mục tiêu có thể xung đột", "tiết kiệm, lợi nhuận, hiển thị, yên tĩnh", PINK],
    ["FaHandshake", "Trao đổi giá trị", "góp nguồn lực để nhận lợi ích", BLUE], ["FaCalendarAlt", "Thay đổi theo giai đoạn", "trước, trong, sau sự kiện", ORA], ["FaBullhorn", "Công khai, lây lan danh tiếng", "sự cố của một bên lan sang tất cả", PUR]];
  for (let i = 0; i < 6; i++) {
    const x = 0.6 + (i % 3) * 4.13, y = 1.95 + Math.floor(i / 3) * 2.3;
    box(s, x, y, 3.9, 2.05);
    await ic(s, six[i][0], x + 0.25, y + 0.3, 0.85, six[i][3], six[i][3] === PUR ? TX : NAVY);
    T(s, six[i][1], x + 1.3, y + 0.25, 2.5, 0.95, { bold: true, fontSize: 17, valign: "middle" });
    T(s, six[i][2], x + 0.25, y + 1.25, 3.5, 0.7, { fontSize: 15, color: MU, valign: "top" });
  }
  notes(s, {
    say: "Sáu đặc điểm. Một, tạm thời, theo dự án: mạng lưới tập hợp quanh một sự kiện rồi tan. Hai, phụ thuộc lẫn nhau: một mắt xích hỏng kéo cả chuỗi. Ba, mục tiêu có thể xung đột: khách hàng muốn tiết kiệm, nhà cung cấp muốn lợi nhuận, nhà tài trợ muốn hiển thị tối đa, cư dân muốn yên tĩnh — như vụ Fremantle. Bốn, trao đổi giá trị: mỗi bên góp nguồn lực để nhận lợi ích. Năm, thay đổi theo giai đoạn: trước, trong, sau sự kiện. Sáu, công khai, lây lan danh tiếng: sự kiện diễn ra trước công chúng, sự cố của một bên — ví dụ KOL dính scandal — lan sang khách hàng và agency.",
    gv: "Sáu đặc điểm là tổng hợp của người soạn (W01 lecture notes §1.3), không phải danh sách của một tác giả. [VERIFY: nếu muốn gọi tên “pulsating organisation” (Toffler, 1990; Hanlon & Cuskelly, 2002) cho đặc điểm 1 thì kiểm tra trích dẫn trước.]",
    ask: "“Đặc điểm nào đã xuất hiện trong vụ Fremantle?” (mong đợi: 3 — xung đột mục tiêu; 6 — lây lan danh tiếng: tranh cãi thương hiệu Perth – Fremantle).",
    next: "Một sự kiện lớn có bao nhiêu bên? Xem Olympic London 2012.",
  });

  // ---------- 15 London 2012
  s = slide("Olympic London 2012 có tám nhóm bên liên quan — không quản lý hết, nhưng phải cân nhắc hết");
  circ(s, 5.42, 2.9, 2.5, YEL);
  T(s, "LOCOG\n(ban tổ chức)", 5.42, 2.9, 2.5, 2.5, { align: "center", bold: true, color: NAVY, fontSize: 18 });
  const lon = [["Chính phủ", 1.0, 2.0], ["Truyền thông", 4.3, 1.75], ["Thể thao", 7.5, 1.75], ["Nhà đóng góp, tài trợ", 10.0, 2.0], ["Nội bộ", 1.0, 5.1], ["Quốc gia & vùng", 4.3, 5.75], ["Thành phố & cộng đồng", 7.5, 5.75], ["Nhóm khác", 10.0, 5.1]];
  const lc = [TEAL, BLUE, ORA, PINK, MU, TEAL, BLUE, ORA];
  lon.forEach(([t, x, y], i) => { box(s, x, y, 2.4, 0.8); T(s, t, x + 0.1, y, 2.2, 0.8, { align: "center", fontSize: 15, bold: true, color: lc[i] }); });
  src(s, "Nguồn: Holmes et al. (2015, Hình 2.3), phỏng theo Theodoraki (2007).", 6.75);
  notes(s, {
    say: "Đây là các bên liên quan của Thế vận hội London 2012, quanh ban tổ chức LOCOG: chính phủ, truyền thông, thể thao, các nhà đóng góp và tài trợ, nội bộ, các quốc gia và vùng, thành phố và cộng đồng, và các nhóm khác. Sách viết: quản lý tất cả các bên này là không thể — nhưng điều đó không có nghĩa là bỏ qua mối quan tâm của họ.",
    gv: "Đã đối chiếu Holmes et al. (2015, tr. 24–25, Hình 2.3). Câu gốc: “Managing all of these stakeholders would be impossible but that does not mean that their concerns should not be considered.” Nhóm “Nội bộ” nằm ngoài phạm vi môn — nhắc nhanh.",
    next: "Với một agency tổ chức sự kiện cho doanh nghiệp, slide bộ môn gom thành sáu nhóm.",
  });

  // ---------- 16 six groups (department slides)
  s = slide("Với agency, có sáu nhóm bên ngoài đứng quanh khách hàng");
  circ(s, 5.17, 2.6, 3.0, YEL);
  T(s, "Khách hàng\n(Key Account)", 5.17, 2.6, 3.0, 3.0, { align: "center", bold: true, color: NAVY, fontSize: 20 });
  const g6 = [["FaUsers", "Khách mời & người tham gia", 0.6, 1.95, TEAL], ["FaTruck", "Nhà cung cấp (vendors)", 0.6, 3.6, BLUE], ["FaUniversity", "Chính quyền & cơ quan cấp phép", 0.6, 5.25, ORA], ["FaMoneyBillWave", "Nhà tài trợ", 8.7, 1.95, PINK], ["FaNewspaper", "Truyền thông & PR", 8.7, 3.6, TEAL], ["FaMicrophone", "Đối tác nội dung: diễn giả, nghệ sĩ, KOL", 8.7, 5.25, YEL]];
  for (const [i_, t, x, y, c] of g6) {
    box(s, x, y, 4.03, 1.35);
    await ic(s, i_, x + 0.2, y + 0.25, 0.85, c);
    T(s, t, x + 1.25, y, 2.7, 1.35, { fontSize: 16, bold: true });
  }
  src(s, "Nguồn: Trần Nguyễn Huỳnh Như (2023), slide bài giảng Chương 2, mục 2.2.1.", 6.75);
  notes(s, {
    say: "Slide bộ môn chia các bên liên quan của sự kiện thành sáu nhóm: khách mời và người tham gia; nhà cung cấp — vendors: sân khấu, âm thanh ánh sáng, vận chuyển, quà tặng; chính quyền và cơ quan cấp phép; nhà tài trợ; truyền thông và PR; và đối tác nội dung — diễn giả, nghệ sĩ, KOL, KOC, mentor. Với góc nhìn agency, đặt khách hàng — Key Account — ở giữa: sáu nhóm còn lại được huy động để phục vụ sự kiện của khách hàng.",
    gv: "Đã đối chiếu slide gốc Chương 2 trên Drive. Lưu ý sửa khi dạy: slide gốc mục 2.3.2 ghi hoán đổi chức năng Cục Nghệ thuật biểu diễn và Cục An toàn vệ sinh lao động — không dùng mục đó (xem source_map.md mục 4). Đặt “khách hàng ở giữa” là cách trình bày của môn.",
    next: "Nhưng một bên không chỉ ở một nhóm.",
  });

  // ---------- 17 one party many roles
  s = slide("Một bên có thể giữ nhiều vai cùng lúc");
  T(s, "Sáu vai theo quan hệ với sự kiện (Getz, Andersson & Larson, 2006)", 0.6, 1.8, 6.0, 0.5, { fontSize: 15, color: MU });
  const roles = [["Đồng minh, cộng tác", TEAL], ["Đồng sản xuất", YEL], ["Bên tạo điều kiện (tài trợ, cấp vốn)", PINK], ["Nhà cung cấp & địa điểm", BLUE], ["Bên chịu tác động", ORA], ["Bên quản lý", MU]];
  roles.forEach(([t, c], i) => { box(s, 0.6, 2.35 + i * 0.68, 5.6, 0.56, c); T(s, t, 0.8, 2.35 + i * 0.68, 5.2, 0.56, { bold: true, color: NAVY, fontSize: 16 }); });
  box(s, 6.6, 1.95, 6.13, 2.15);
  await ic(s, "FaUniversity", 6.85, 2.2, 0.8, ORA);
  T(s, "Chính quyền địa phương", 7.85, 2.2, 4.7, 0.8, { bold: true, fontSize: 18, color: ORA });
  T(s, "cấp kinh phí (tạo điều kiện) · cho thuê địa điểm công (địa điểm) · cấp phép (quản lý)", 6.85, 3.05, 5.7, 0.95, { fontSize: 15, valign: "top" });
  box(s, 6.6, 4.3, 6.13, 2.15);
  await ic(s, "FaHotel", 6.85, 4.55, 0.8, TEAL);
  T(s, "Khách sạn của An Phát (giả định)", 7.85, 4.55, 4.7, 0.8, { bold: true, fontSize: 18, color: TEAL });
  T(s, "địa điểm · nhà cung cấp tiệc · nhà cung cấp AV nội bộ · láng giềng của cư dân", 6.85, 5.4, 5.7, 0.95, { fontSize: 15, valign: "top" });
  notes(s, {
    say: "Getz, Andersson và Larson phân loại bên liên quan theo quan hệ với sự kiện, không theo chức năng: đồng minh và cộng tác; đồng sản xuất; bên tạo điều kiện — như nhà tài trợ, bên cấp vốn; nhà cung cấp và địa điểm; bên chịu tác động — như khán giả, cư dân; và bên quản lý. Điều quan trọng: một bên có thể giữ nhiều vai. Chính quyền địa phương có thể vừa cấp kinh phí, vừa cho thuê địa điểm công, vừa cấp phép. Trong tình huống của chúng ta, khách sạn vừa là địa điểm, vừa cung cấp tiệc, vừa có dịch vụ AV nội bộ, lại vừa là láng giềng của khu dân cư.",
    gv: "Đã đối chiếu Holmes et al. (2015, tr. 26): sáu vai và ví dụ chính quyền (theo Getz, 2012). Holmes ghi năm Getz, Andersson & Larson là 2007; bài gốc trên Event Management thường ghi 2006 — giữ 2006 như W01, [VERIFY năm/số tạp chí]. Ý “một bên nhiều vai” sẽ quay lại ở Buổi 12 (xung đột lợi ích). Ví dụ khách sạn là giả định của môn; AV nội bộ nối sang Buổi 7 (Bottleneck).",
    ask: "“Trong dự án cũ của nhóm, có bên nào giữ hai vai cùng lúc không?”",
    next: "Vai trò quan trọng nhất còn thay đổi theo thời gian.",
  });

  // ---------- 18 phases
  s = slide("Bên nào quan trọng nhất thay đổi theo giai đoạn của sự kiện");
  const ph = [["Trước", "Khách hàng, nhà tài trợ, địa điểm, cơ quan cấp phép", TEAL, "FaClipboardList"], ["Trong", "Nhà cung cấp kỹ thuật, khách mời, diễn giả, KOL", YEL, "FaTheaterMasks"], ["Sau", "Báo chí, khách hàng (đánh giá, tái ký), nhà tài trợ (báo cáo)", PINK, "FaChartPie"]];
  for (let i = 0; i < 3; i++) {
    const x = 0.6 + i * 4.13;
    box(s, x, 2.0, 3.9, 3.9);
    await ic(s, ph[i][3] === "FaChartPie" ? "FaComments" : ph[i][3], x + 1.4, 2.25, 1.1, ph[i][2]);
    T(s, ph[i][0] + " sự kiện", x, 3.5, 3.9, 0.6, { align: "center", bold: true, fontSize: 22, color: ph[i][2] });
    T(s, ph[i][1], x + 0.25, 4.15, 3.4, 1.6, { align: "center", fontSize: 17, valign: "top" });
    if (i < 2) s.addShape(pres.shapes.RIGHT_ARROW, { x: x + 3.92, y: 3.7, w: 0.2, h: 0.4, fill: { color: MU }, line: { color: MU } });
  }
  T(s, "Bản đồ bên liên quan là ảnh chụp tại một thời điểm — cần vẽ lại theo giai đoạn.", 0.6, 6.15, 12.13, 0.55, { fontSize: 17, bold: true, color: YEL });
  notes(s, {
    say: "Trước sự kiện: khách hàng, nhà tài trợ, địa điểm, cơ quan cấp phép nổi bật. Trong sự kiện: nhà cung cấp kỹ thuật, khách mời, diễn giả, KOL. Sau sự kiện: báo chí, khách hàng — người đánh giá và quyết định tái ký — và nhà tài trợ chờ báo cáo. Vì vậy bản đồ bên liên quan là ảnh chụp tại một thời điểm — cần vẽ lại theo giai đoạn.",
    gv: "Ví dụ minh họa thêm (video Boateng, 2021 — chưa đối chiếu, chỉ nói miệng nếu cần): nhà tài trợ “gấp” nhất ở giai đoạn chuẩn bị vì logo phải lên truyền thông sớm.",
    next: "Giờ là cách phân nhóm đầu tiên theo đề cương: primary và secondary.",
  });

  // ---------- 19 primary / secondary
  s = slide("Primary: thiếu họ, sự kiện không diễn ra; secondary: không trực tiếp tham gia nhưng vẫn tác động");
  box(s, 0.6, 1.95, 6.0, 3.3);
  T(s, "Primary — bên liên quan chính", 0.85, 2.1, 5.5, 0.55, { bold: true, color: TEAL, fontSize: 20 });
  T(s, "“Những người và tổ chức mà thiếu sự hỗ trợ của họ, sự kiện sẽ không diễn ra.”", 0.85, 2.75, 5.5, 1.5, { fontSize: 18, italic: true, valign: "top" });
  T(s, "Ví dụ: khách hàng, địa điểm", 0.85, 4.45, 5.5, 0.6, { fontSize: 16, color: MU });
  box(s, 6.85, 1.95, 5.88, 3.3);
  T(s, "Secondary — bên liên quan thứ yếu", 7.1, 2.1, 5.4, 0.55, { bold: true, color: BLUE, fontSize: 20 });
  T(s, "“Nhóm hoặc cá nhân không trực tiếp tham gia sự kiện nhưng vẫn có thể tác động đáng kể đến thành công của nó.”", 7.1, 2.75, 5.4, 1.5, { fontSize: 18, italic: true, valign: "top" });
  T(s, "Ví dụ: báo chí, nhóm lợi ích", 7.1, 4.45, 5.4, 0.6, { fontSize: 16, color: MU });
  box(s, 0.6, 5.45, 12.13, 0.85, YEL);
  T(s, "Câu kiểm tra: Không có họ, sự kiện có diễn ra được không?", 0.85, 5.45, 11.6, 0.85, { fontSize: 22, bold: true, color: NAVY });
  src(s, "Nguồn: Holmes et al. (2015, tr. 24). Gốc của cách chia này cho doanh nghiệp: Clarkson (1995).", 6.4);
  notes(s, {
    say: "Đề cương mục 1.2: phân nhóm ảnh hưởng thành primary và secondary. Primary — bên liên quan chính: những người và tổ chức mà thiếu sự hỗ trợ của họ, sự kiện sẽ không diễn ra. Ví dụ: khách hàng, địa điểm. Secondary — bên liên quan thứ yếu: nhóm hoặc cá nhân không trực tiếp tham gia sự kiện nhưng vẫn có thể tác động đáng kể đến thành công của nó. Ví dụ: báo chí, các nhóm lợi ích. Câu kiểm tra nhanh: không có họ, sự kiện có diễn ra được không? Không → primary. Có → thường là secondary.",
    gv: "Đã đối chiếu nguyên văn Holmes et al. (2015, tr. 24): “primary stakeholders – people and organisations without whose support the event would not take place – and secondary stakeholders – groups or individuals not directly involved in the event but nonetheless can still have a significant impact on its success”. Sách KHÔNG gán câu này cho Clarkson (NotebookLM gán sai). Định nghĩa gốc của Clarkson (1995) cho doanh nghiệp: primary là bên mà thiếu sự tham gia liên tục của họ tổ chức không thể tồn tại; secondary ảnh hưởng hoặc bị ảnh hưởng nhưng không giao dịch và không thiết yếu — [VERIFY số trang 106–107]. Nhắc: nhân sự, TNV thường được xếp primary trong sách nhưng nằm ngoài phạm vi môn.",
    next: "Thử ngay với tình huống của môn.",
  });

  // ---------- 20 quick vote
  s = slide("Giơ tay: 1 ngón = primary, 2 ngón = secondary");
  T(s, "Hội nghị khách hàng thường niên của Ngân hàng An Phát, 600 khách VIP, khách sạn 5 sao, do Nova Events tổ chức (giả định)", 0.6, 1.75, 12.13, 0.8, { fontSize: 16, italic: true, color: MU, valign: "top" });
  const vote = [["Ngân hàng An Phát (khách hàng)", "FaUniversity", TEAL], ["Khách sạn 5 sao (địa điểm)", "FaHotel", YEL], ["Công ty bảo hiểm (nhà tài trợ)", "FaShieldAlt", PINK], ["Báo tài chính", "FaNewspaper", BLUE], ["Cư dân khu phố cạnh khách sạn", "FaHome", ORA]];
  for (let i = 0; i < 5; i++) {
    const y = 2.6 + i * 0.82;
    num(s, i + 1, 0.6, y + 0.05, 0.6, vote[i][2]);
    box(s, 1.4, y, 7.6, 0.7);
    T(s, vote[i][0], 1.6, y, 7.2, 0.7, { fontSize: 19 });
  }
  box(s, 9.4, 2.6, 3.33, 3.98);
  await ic(s, "FaUserFriends", 10.45, 2.9, 1.2, YEL);
  T(s, "1 ngón\nprimary\n\n2 ngón\nsecondary", 9.4, 4.2, 3.33, 2.3, { align: "center", fontSize: 18, bold: true, valign: "top" });
  notes(s, {
    say: "Tình huống của môn — giả định: Nova Events tổ chức Hội nghị khách hàng thường niên cho Ngân hàng An Phát, 600 khách VIP, tại một khách sạn 5 sao. Tôi đọc từng bên, các bạn giơ tay: một ngón là primary, hai ngón là secondary. Một: Ngân hàng An Phát. Hai: khách sạn. Ba: công ty bảo hiểm tài trợ. Bốn: báo tài chính. Năm: cư dân khu phố cạnh khách sạn.",
    gv: "Đếm nhanh từng bên, ghi tỷ lệ lên bảng. Bên số 3 thường chia đôi lớp — đó là chủ đích. Tình huống giả định; quy mô 600 khách thống nhất với Buổi 7–13.",
    ask: "Giơ tay cho từng bên 1–5.",
    next: "Xem đáp án — và vì sao có một bên không có đáp án cố định.",
  });

  // ---------- 21 answer
  s = slide("Đáp án: một bên không có nhãn cố định — tùy bối cảnh");
  const ans = [["Ngân hàng An Phát", "Primary", TEAL, "Người đặt hàng và trả tiền: không có họ, không có sự kiện"], ["Khách sạn", "Primary", TEAL, "Đổi địa điểm phút chót gần như bất khả"], ["Công ty bảo hiểm", "Tùy bối cảnh", YEL, "Primary nếu ngân sách phụ thuộc khoản tài trợ; secondary nếu chỉ là phần cộng thêm"], ["Báo tài chính", "Secondary", BLUE, "Sự kiện vẫn diễn ra; nhưng ảnh hưởng hình ảnh sau sự kiện"], ["Cư dân lân cận", "Secondary", BLUE, "Không giao dịch — nhưng có thể trở nên rất quan trọng (xem phần sau)"]];
  T(s, [{ text: "#", options: {} }], 0.6, 1.85, 0.4, 0.5, { fontSize: 15, color: MU, bold: true });
  T(s, "Bên", 1.0, 1.85, 3.0, 0.5, { fontSize: 15, color: MU, bold: true });
  T(s, "Nhãn", 4.1, 1.85, 2.2, 0.5, { fontSize: 15, color: MU, bold: true });
  T(s, "Lập luận", 6.4, 1.85, 6.3, 0.5, { fontSize: 15, color: MU, bold: true });
  ans.forEach(([b, l, c, r], i) => {
    const y = 2.4 + i * 0.85;
    if (i === 2) box(s, 0.45, y - 0.02, 12.4, 0.8, CARD);
    T(s, String(i + 1), 0.6, y, 0.4, 0.75, { fontSize: 17 });
    T(s, b, 1.0, y, 3.0, 0.75, { fontSize: 17, bold: true });
    T(s, l, 4.1, y, 2.2, 0.75, { fontSize: 17, bold: true, color: c });
    T(s, r, 6.4, y, 6.3, 0.75, { fontSize: 15 });
  });
  notes(s, {
    say: "Đáp án. Ngân hàng An Phát: primary — người đặt hàng và trả tiền; không có họ, không có sự kiện. Khách sạn: primary — đổi địa điểm phút chót gần như bất khả. Công ty bảo hiểm: tùy bối cảnh — primary nếu ngân sách sự kiện phụ thuộc vào khoản tài trợ; secondary nếu đó chỉ là phần cộng thêm. Báo tài chính: secondary — sự kiện vẫn diễn ra nếu báo không đến, nhưng họ ảnh hưởng hình ảnh sau sự kiện. Cư dân lân cận: secondary — không giao dịch, nhưng có thể trở nên rất quan trọng; tôi sẽ quay lại với họ sau giờ giải lao.",
    gv: "Theo W01 lecture notes §2.3. Cư dân để dành làm ví dụ tính động của Salience Model (slide 34).",
    next: "Điều này dẫn tới một nguyên tắc.",
  });

  // ---------- 22 reasoning
  s = slide("Phân loại là một quyết định có lập luận, không phải tra bảng");
  box(s, 0.6, 2.0, 5.3, 3.2);
  T(s, "Hội nghị khách hàng", 0.85, 2.15, 4.8, 0.55, { bold: true, color: BLUE, fontSize: 20 });
  T(s, "Báo chí → secondary", 0.85, 2.8, 4.8, 0.6, { fontSize: 20, bold: true });
  T(s, "Mục tiêu là chăm sóc 600 khách VIP; bài báo là phần cộng thêm", 0.85, 3.45, 4.8, 1.5, { fontSize: 16, color: MU, valign: "top" });
  s.addShape(pres.shapes.RIGHT_ARROW, { x: 6.1, y: 3.25, w: 0.7, h: 0.7, fill: { color: YEL }, line: { color: YEL } });
  box(s, 7.0, 2.0, 5.73, 3.2);
  T(s, "Sự kiện ra mắt sản phẩm", 7.25, 2.15, 5.3, 0.55, { bold: true, color: PINK, fontSize: 20 });
  T(s, "Báo chí → primary", 7.25, 2.8, 5.3, 0.6, { fontSize: 20, bold: true });
  T(s, "KPI hợp đồng là lượng tin bài: không có báo chí, sự kiện thất bại", 7.25, 3.45, 5.3, 1.5, { fontSize: 16, color: MU, valign: "top" });
  T(s, "Luôn ghi một câu lý do cạnh mỗi nhãn P/S.", 0.6, 5.6, 12.13, 0.7, { fontSize: 22, bold: true, color: YEL });
  notes(s, {
    say: "Cùng là báo chí. Trong hội nghị khách hàng, mục tiêu là chăm sóc 600 khách VIP, bài báo là phần cộng thêm — báo chí là secondary. Trong một sự kiện ra mắt sản phẩm mà KPI hợp đồng là lượng tin bài, không có báo chí thì sự kiện thất bại — báo chí là primary. Phân loại là một quyết định có lập luận, không phải tra bảng. Luôn ghi một câu lý do cạnh mỗi nhãn P hay S.",
    gv: "Nói to lập luận — đây là mẫu cho Thực hành 1.",
    next: "Đến lượt các bạn: Thực hành 1.",
  });

  // ---------- 23 practice 1
  s = slide("Thực hành 1 · 15 phút: ai đứng quanh hội nghị của An Phát?");
  const st1 = [["1’", "Đọc tình huống trên phiếu", TEAL], ["9’", "Vẽ sơ đồ trên A0: Nova ở giữa, ≥10 bên bên ngoài, đánh dấu P/S, 1 câu lý do cho 3 bên gây tranh luận, ≥2 mũi tên giữa các bên", YEL], ["5’", "Hai nhóm phân loại khác nhau về cùng một bên trình bày", PINK]];
  for (let i = 0; i < 3; i++) {
    const y = 1.95 + i * 1.3;
    box(s, 0.6, y, 1.2, 1.1, st1[i][2]);
    T(s, st1[i][0], 0.6, y, 1.2, 1.1, { align: "center", bold: true, color: NAVY, fontSize: 24 });
    box(s, 2.0, y, 6.6, 1.1);
    T(s, st1[i][1], 2.2, y, 6.3, 1.1, { fontSize: 16 });
  }
  box(s, 8.9, 1.95, 3.83, 3.7);
  await ic(s, "FaProjectDiagram", 10.25, 2.15, 1.1, TEAL);
  T(s, "Sản phẩm", 8.9, 3.35, 3.83, 0.5, { align: "center", bold: true, fontSize: 18, color: TEAL });
  T(s, "Sơ đồ A0 — giữ lại để đối chiếu ở Thực hành 2", 9.1, 3.85, 3.43, 1.6, { align: "center", fontSize: 16, valign: "top" });
  T(s, "Không liệt kê nhân sự, crew, tình nguyện viên của Nova.", 0.6, 6.0, 12.13, 0.55, { fontSize: 17, bold: true, color: PINK });
  notes(s, {
    say: "Thực hành 1, 15 phút. Một phút đọc tình huống trên phiếu. Chín phút: trên giấy A0, vẽ sơ đồ — Nova Events ở giữa, ít nhất 10 bên liên quan bên ngoài tỏa ra xung quanh; đánh dấu P hoặc S; với 3 bên nhóm tranh luận nhiều nhất, viết 1 câu lý do; vẽ ít nhất 2 mũi tên thể hiện quan hệ giữa các bên với nhau, không qua Nova. Năm phút cuối: hai nhóm phân loại khác nhau về cùng một bên sẽ trình bày. Sản phẩm: sơ đồ A0, giữ lại để đối chiếu ở Thực hành 2. Lưu ý: không liệt kê nhân sự, crew, tình nguyện viên của Nova.",
    gv: "Phiếu: W01_activity_S4_phan_loai_ben_lien_quan.md (in 6 bản). Mốc: phút 40–55. Gợi ý cho nhóm bí: đi theo ba “dòng” — tiền, không gian, sự chú ý. Không nộp, không chấm điểm.",
    next: "Sau Thực hành 1, nghỉ giải lao.",
  });

  // ---------- 24 break
  s = slide("Giải lao 8 phút");
  await ic(s, "FaClock", 5.42, 1.9, 2.5, ORA);
  T(s, "8 phút", 0.6, 4.55, 12.13, 1.0, { align: "center", fontSize: 48, bold: true, color: ORA });
  box(s, 2.17, 5.75, 9.0, 0.8, YEL);
  T(s, "Quay lại lúc: [cần giảng viên xác nhận]", 2.37, 5.75, 8.6, 0.8, { align: "center", bold: true, color: NAVY, fontSize: 20 });
  notes(s, {
    say: "Giải lao 8 phút. Quay lại lúc — tôi sẽ ghi giờ cụ thể lên bảng. Các bạn để nguyên sơ đồ A0 trên bàn.",
    gv: "[NEEDS PROFESSOR INPUT: giờ quay lại cụ thể theo lịch phòng học.] Giáo án: phút 55–63.",
    next: "Sau giải lao: danh sách các bạn có 12–15 bên — không thể chăm sóc tất cả như nhau.",
  });

  // ---------- 25 question
  s = slide("Mười lăm bên, một ngân sách thời gian");
  circ(s, 5.67, 1.9, 2.0, PINK);
  s.addImage({ data: await icon("FaBullseye", NAVY), x: 6.17, y: 2.4, w: 1.0, h: 1.0, altText: "" });
  T(s, "Ai được ưu tiên — và ưu tiên bằng cách nào?", 0.6, 4.3, 12.13, 1.2, { fontSize: 34, bold: true, color: YEL, align: "center" });
  T(s, "Đề cương 1.3: hai công cụ đo quyền lực", 0.6, 5.6, 12.13, 0.6, { fontSize: 18, color: MU, align: "center" });
  notes(s, {
    say: "Danh sách của các bạn ở Thực hành 1 có 12 đến 15 bên. Thời gian và ngân sách có hạn: không thể chăm sóc tất cả như nhau. Câu hỏi: ai được ưu tiên — và ưu tiên bằng cách nào? Đề cương mục 1.3 cho chúng ta hai công cụ đo quyền lực.",
    ask: "“Nếu chỉ được gọi điện cho 3 bên mỗi tuần, bạn chọn ai?”",
    next: "Công cụ thứ nhất: ma trận quyền lực – mức độ quan tâm.",
  });

  // ---------- 26 grid
  s = slide("Power-Interest Grid chia các bên thành bốn cách ứng xử");
  T(s, "Quyền lực →", 0.25, 3.6, 1.6, 0.5, { rotate: 270, fontSize: 16, bold: true, color: MU, align: "center" });
  T(s, "Mức độ quan tâm →", 1.6, 6.55, 7.0, 0.45, { fontSize: 16, bold: true, color: MU, align: "center" });
  const cells = [["Keep satisfied", "Giữ hài lòng", "Đáp ứng, không làm phiền; gặp khi có việc quan trọng", 1.6, 1.85, YEL], ["Manage closely", "Quản lý chặt", "Tham vấn mọi quyết định lớn; họp định kỳ", 5.15, 1.85, PINK], ["Monitor", "Theo dõi", "Nỗ lực tối thiểu: thông tin công khai", 1.6, 4.2, CARD], ["Keep informed", "Thông tin đầy đủ", "Cập nhật định kỳ, lắng nghe, trả lời câu hỏi", 5.15, 4.2, BLUE]];
  for (const [en, vi, act, x, y, c] of cells) {
    box(s, x, y, 3.45, 2.25, c);
    const tc = c === CARD ? TX : NAVY;
    T(s, en, x + 0.2, y + 0.15, 3.1, 0.5, { bold: true, fontSize: 20, color: tc });
    T(s, vi, x + 0.2, y + 0.65, 3.1, 0.45, { fontSize: 16, bold: true, color: c === CARD ? MU : tc });
    T(s, act, x + 0.2, y + 1.15, 3.1, 1.0, { fontSize: 14, color: tc, valign: "top" });
  }
  box(s, 9.0, 1.85, 3.73, 4.6);
  T(s, "Phát triển từ Mendelow (1981)", 9.2, 2.0, 3.35, 0.8, { bold: true, fontSize: 16, color: TEAL, valign: "top" });
  T(s, "Tên gọi khác thường gặp:\nKey players = Manage closely\nMinimal effort = Monitor", 9.2, 2.9, 3.35, 1.5, { fontSize: 14, color: MU, valign: "top" });
  T(s, "Quyền lực: khả năng tác động đến sự kiện. Quan tâm: mức độ họ để ý hoặc chịu ảnh hưởng.", 9.2, 4.5, 3.35, 1.8, { fontSize: 14, valign: "top" });
  notes(s, {
    say: "Hai trục: quyền lực — khả năng tác động đến sự kiện; và mức độ quan tâm — mức độ họ để ý hoặc chịu ảnh hưởng bởi sự kiện. Bốn ô. Quyền lực cao, quan tâm cao: Manage closely — quản lý chặt: tham vấn mọi quyết định lớn, họp định kỳ. Quyền lực cao, quan tâm thấp: Keep satisfied — giữ hài lòng: đáp ứng yêu cầu, không làm phiền quá mức, gặp khi có việc quan trọng. Quyền lực thấp, quan tâm cao: Keep informed — thông tin đầy đủ: cập nhật định kỳ, lắng nghe, trả lời câu hỏi. Quyền lực thấp, quan tâm thấp: Monitor — theo dõi, nỗ lực tối thiểu. Ô Manage closely còn được gọi là Key players; ô Monitor còn gọi là Minimal effort.",
    gv: "Nguồn đã xác minh: Mendelow (1981), ICIS 1981 Proceedings — lưới 2×2 là dạng được giáo trình chiến lược phổ biến lại; ghi “phát triển từ Mendelow”. Tên Key players / Keep satisfied / Keep informed / Minimal effort và các việc cụ thể từng ô lấy từ video Mark N (2019) qua NotebookLM — chưa đối chiếu bản gốc, chỉ dùng làm gợi ý. Giữ tên ô như phiếu S6 để thống nhất.",
    next: "Áp dụng ngay cho tình huống An Phát.",
  });

  // ---------- 27 grid example
  s = slide("Ví dụ: ngân hàng cần quản lý chặt, khách sạn cần giữ hài lòng");
  const mini = [[1.0, 1.95, YEL, "Khách sạn"], [3.45, 1.95, PINK, "Ngân hàng An Phát"], [1.0, 4.1, CARD, "Cư dân lân cận"], [3.45, 4.1, BLUE, "Báo tài chính"]];
  for (const [x, y, c, t] of mini) { box(s, x, y, 2.35, 2.05, c); T(s, t, x + 0.1, y, 2.15, 2.05, { align: "center", bold: true, fontSize: 17, color: c === CARD ? TX : NAVY }); }
  T(s, "Quyền lực ↑ · Quan tâm →", 1.0, 6.25, 4.8, 0.45, { fontSize: 14, color: MU, align: "center" });
  const acts = [["Ngân hàng An Phát", "họp tiến độ hằng tuần với chị Hạnh; xin ý kiến mọi thay đổi kịch bản", PINK], ["Khách sạn", "họp kỹ thuật và an toàn trước sự kiện; gọi 1-1 khi đổi kế hoạch", YEL], ["Báo tài chính", "thông cáo, lịch phỏng vấn, ảnh sau sự kiện", BLUE], ["Cư dân lân cận", "thông báo giờ kết thúc 22h và số điện thoại liên hệ", MU]];
  acts.forEach(([b, a, c], i) => {
    const y = 1.95 + i * 1.1;
    box(s, 6.1, y, 6.63, 0.95);
    T(s, [{ text: b + ": ", options: { bold: true, color: c } }, { text: a }], 6.3, y, 6.3, 0.95, { fontSize: 15 });
  });
  T(s, "(giả định)", 10.9, 6.35, 1.8, 0.4, { fontSize: 13, color: MU, italic: true, align: "right" });
  notes(s, {
    say: "Ví dụ với tình huống An Phát. Ngân hàng An Phát: quyền lực cao — ký hợp đồng, trả tiền; quan tâm cao — sự kiện mang thương hiệu của họ: Manage closely — họp tiến độ hằng tuần với chị Hạnh, xin ý kiến mọi thay đổi kịch bản. Khách sạn: quyền lực cao — kiểm soát không gian, giờ giấc, quy định; quan tâm vừa phải — đây là một hợp đồng trong nhiều hợp đồng: Keep satisfied — họp kỹ thuật và an toàn trước sự kiện, gọi điện riêng khi đổi kế hoạch. Báo tài chính: quan tâm nếu có câu chuyện, quyền lực trực tiếp thấp: Keep informed — thông cáo, lịch phỏng vấn, ảnh sau sự kiện. Cư dân lân cận: lúc này quyền lực và quan tâm đều thấp: Monitor — thông báo giờ kết thúc 22 giờ và số điện thoại liên hệ. Mỗi ô phải có một việc cụ thể, không phải “giao tiếp tốt”.",
    gv: "Ví dụ mẫu theo W01 lecture notes §3.1; việc cụ thể từng ô phỏng theo gợi ý thực hành trong video Mark N (2019) (website/FAQ, bản tin email, họp cộng đồng, họp an toàn, gọi 1-1). Chị Hạnh là GĐ Marketing An Phát ở Buổi 1–7.",
    ask: "“Có ai đặt cư dân ở ô khác không? Vì sao?”",
    next: "Grid dễ dùng — nhưng nó có điểm mù.",
  });

  // ---------- 28 limits
  s = slide("Grid là ảnh chụp tĩnh và không hỏi yêu cầu có chính đáng hay không");
  const lim = ["Chỉ có hai chiều", "Tĩnh: vị trí thay đổi theo thời gian", "Chủ quan: cần bằng chứng cho mỗi vị trí", "Bỏ qua tính chính đáng của yêu cầu"];
  for (let i = 0; i < 4; i++) {
    const y = 1.95 + i * 1.08;
    box(s, 0.6, y, 7.6, 0.9);
    await ic(s, "FaTimes", 0.8, y + 0.15, 0.6, PINK);
    T(s, lim[i], 1.6, y, 6.5, 0.9, { fontSize: 18 });
  }
  box(s, 8.5, 1.95, 4.23, 4.14, YEL);
  T(s, "Mẹo: chấm mỗi bên thành một điểm trên lưới, đừng chỉ xếp vào ô.", 8.75, 1.95, 3.75, 4.14, { fontSize: 22, bold: true, color: NAVY });
  notes(s, {
    say: "Bốn hạn chế của Grid. Một, chỉ có hai chiều. Hai, tĩnh: vị trí thay đổi theo thời gian. Ba, chủ quan: phụ thuộc vào đánh giá của người vẽ, nên cần bằng chứng cho mỗi vị trí. Bốn, không nói gì về tính chính đáng của yêu cầu. Một mẹo: chấm mỗi bên thành một điểm trên lưới, đừng chỉ xếp vào ô — để thấy bên nào sát ranh giới, sắp chuyển ô.",
    gv: "Mẹo “chấm điểm trên lưới” từ video Mark N (2019) — nhận định thực hành, không cần trích nguồn trên slide.",
    ask: "“Grid bỏ sót điều gì?”",
    next: "Công cụ thứ hai bù vào điểm mù đó.",
  });

  // ---------- 29 salience attrs
  s = slide("Salience Model đo ba thuộc tính: quyền lực, tính chính đáng, tính cấp bách");
  const attrs = [["FaFistRaised", "Power", "Quyền lực", "khả năng áp đặt ý chí của mình", PINK], ["FaBalanceScale", "Legitimacy", "Tính chính đáng", "hành động của họ được nhìn nhận là phù hợp", TEAL], ["FaBolt", "Urgency", "Tính cấp bách", "mối quan tâm của họ đòi hỏi phản hồi ngay", YEL]];
  for (let i = 0; i < 3; i++) {
    const x = 0.6 + i * 4.13;
    box(s, x, 1.95, 3.9, 4.0);
    await ic(s, attrs[i][0], x + 1.35, 2.2, 1.2, attrs[i][4]);
    T(s, attrs[i][1], x, 3.55, 3.9, 0.55, { align: "center", bold: true, fontSize: 22, color: attrs[i][4] });
    T(s, attrs[i][2], x, 4.1, 3.9, 0.45, { align: "center", fontSize: 17, color: MU });
    T(s, attrs[i][3], x + 0.25, 4.6, 3.4, 1.2, { align: "center", fontSize: 18, valign: "top" });
  }
  src(s, "Nguồn: Mitchell, Agle & Wood (1997), dẫn theo Holmes et al. (2015, tr. 25).", 6.2);
  notes(s, {
    say: "Mô hình mức độ nổi bật — Stakeholder Salience Model — của Mitchell, Agle và Wood, 1997, đo ba thuộc tính. Power — quyền lực: khả năng áp đặt ý chí của mình. Legitimacy — tính chính đáng: hành động hay yêu cầu của họ được nhìn nhận là phù hợp — theo hợp đồng, luật, chuẩn mực xã hội. Urgency — tính cấp bách: mối quan tâm của họ đòi hỏi phản hồi ngay. Mô hình trả lời câu hỏi: nhà quản lý nên quan tâm đến bên nào nhiều nhất.",
    gv: "Đã đối chiếu nguyên văn Holmes et al. (2015, tr. 25): “Power – the ability of the stakeholder to impose their will; Legitimacy – the perception that the stakeholder's actions are appropriate; Urgency – the immediacy of the stakeholder's concerns.” Bài gốc: Mitchell, Agle & Wood (1997), AMR 22(4), 853–886.",
    next: "Một bên có thể có một, hai hoặc cả ba thuộc tính.",
  });

  // ---------- 30 Venn
  s = slide("Càng nhiều thuộc tính, bên liên quan càng nổi bật");
  const R = 1.55;
  [[4.0, 3.45, PINK], [6.0, 3.45, TEAL], [5.0, 5.05, YEL]].forEach(([cx, cy, c]) =>
    s.addShape(pres.shapes.OVAL, { x: cx - R, y: cy - R, w: 2 * R, h: 2 * R, fill: { color: c, transparency: 55 }, line: { color: c, width: 2 } }));
  T(s, "Power", 2.0, 1.75, 1.6, 0.4, { bold: true, color: PINK, fontSize: 15 });
  T(s, "Legitimacy", 6.6, 1.75, 1.9, 0.4, { bold: true, color: TEAL, fontSize: 15, align: "right" });
  T(s, "Urgency", 6.25, 6.45, 1.6, 0.4, { bold: true, color: YEL, fontSize: 15 });
  const reg = [["Dormant", 2.45, 3.0], ["Discretionary", 6.75, 3.0], ["Demanding", 4.2, 5.85], ["Dominant", 4.2, 2.55], ["Dangerous", 3.05, 4.5], ["Dependent", 5.35, 4.5], ["Definitive", 4.2, 3.75]];
  for (const [t, x, y] of reg) T(s, t, x, y, 1.6, 0.45, { align: "center", bold: true, fontSize: 13, color: t === "Definitive" ? YEL : TX });
  const leg = [["1 thuộc tính · tiềm ẩn", "Dormant · Discretionary · Demanding", MU], ["2 thuộc tính · kỳ vọng", "Dominant · Dangerous · Dependent", TEAL], ["3 thuộc tính · quyết định", "Definitive", YEL]];
  leg.forEach(([h, b, c], i) => { box(s, 8.6, 1.95 + i * 1.5, 4.13, 1.3); T(s, h, 8.8, 2.0 + i * 1.5, 3.8, 0.5, { bold: true, color: c, fontSize: 17 }); T(s, b, 8.8, 2.5 + i * 1.5, 3.8, 0.65, { fontSize: 15, valign: "top" }); });
  notes(s, {
    say: "Ba vòng tròn giao nhau tạo bảy loại. Một thuộc tính — nhóm tiềm ẩn: Dormant — ngủ yên, chỉ có quyền lực; Discretionary — tùy nghi, chỉ có tính chính đáng; Demanding — đòi hỏi, chỉ có tính cấp bách. Hai thuộc tính — nhóm kỳ vọng: Dominant — chi phối, quyền lực và chính đáng; Dangerous — nguy hiểm, quyền lực và cấp bách; Dependent — phụ thuộc, chính đáng và cấp bách. Ba thuộc tính — Definitive, bên quyết định. Càng nhiều thuộc tính, bên liên quan càng nổi bật — càng cần ưu tiên.",
    gv: "Tên bảy loại theo Mitchell, Agle & Wood (1997). Holmes et al. (2015) chỉ nêu ba thuộc tính và “most salient = đủ cả ba”, không liệt kê bảy tên — tên lấy từ bài gốc (đã có trong W01, kinh điển).",
    next: "Mỗi loại có một ví dụ trong sự kiện.",
  });

  // ---------- 31 table 7 types
  s = slide("Mỗi loại salience có một gương mặt quen trong sự kiện");
  const ty = [["Dormant", "P", "Cơ quan quản lý khi mọi thủ tục đã ổn", MU], ["Discretionary", "L", "Hội đoàn từ thiện muốn được mời tham dự", MU], ["Demanding", "U", "Một người liên tục phàn nàn trên mạng nhưng ít ảnh hưởng", MU], ["Dominant", "P + L", "Nhà tài trợ chính có hợp đồng", TEAL], ["Dangerous", "P + U", "Nhà cung cấp dọa ngừng thi công sát giờ G để ép giá", PINK], ["Dependent", "L + U", "Cư dân quanh địa điểm phản ánh tiếng ồn", TEAL], ["Definitive", "P + L + U", "Khách hàng yêu cầu đổi kịch bản 48 giờ trước sự kiện", YEL]];
  ty.forEach(([t, a, e, c], i) => {
    const y = 1.85 + i * 0.66;
    if (i % 2 === 0) box(s, 0.45, y, 12.43, 0.6, CARD);
    T(s, t, 0.65, y, 2.6, 0.6, { bold: true, color: c, fontSize: 17 });
    T(s, a, 3.3, y, 1.8, 0.6, { fontSize: 16, color: MU });
    T(s, e, 5.1, y, 7.6, 0.6, { fontSize: 16 });
  });
  T(s, "(minh họa)", 10.9, 6.55, 1.8, 0.4, { fontSize: 13, color: MU, italic: true, align: "right" });
  notes(s, {
    say: "Dormant: cơ quan quản lý khi mọi thủ tục đã ổn — có quyền lực nhưng đang “ngủ”. Discretionary: một hội đoàn từ thiện muốn được mời tham dự — chính đáng, nhưng không có quyền lực và không gấp. Demanding: một người liên tục phàn nàn trên mạng xã hội nhưng ít ảnh hưởng. Dominant: nhà tài trợ chính có hợp đồng. Dangerous: nhà cung cấp dọa ngừng thi công ngay trước giờ G để ép giá. Dependent: cư dân quanh địa điểm phản ánh tiếng ồn. Definitive: khách hàng yêu cầu đổi kịch bản 48 giờ trước sự kiện.",
    gv: "Ví dụ minh họa của người soạn (W01 lecture notes §3.2), không trích từ nguồn.",
    next: "Kiểm tra nhanh một tình huống.",
  });

  // ---------- 32 quick check salience
  s = slide("Giơ 1–4 ngón: nhà cung cấp LED này thuộc loại nào?");
  box(s, 0.6, 1.95, 7.2, 3.3);
  await ic(s, "FaExclamationTriangle", 0.9, 2.25, 1.0, ORA);
  T(s, "Đơn vị LED duy nhất có màn đúng kích thước dọa dừng lắp đặt 6 giờ trước giờ G nếu Nova không trả thêm 30% ngoài hợp đồng.", 2.15, 2.15, 5.4, 2.9, { fontSize: 19, valign: "top" });
  T(s, "(giả định)", 0.9, 4.75, 2.0, 0.4, { fontSize: 13, color: MU, italic: true });
  const opt = [["1", "Dominant", TEAL], ["2", "Dangerous", PINK], ["3", "Dependent", BLUE], ["4", "Definitive", YEL]];
  opt.forEach(([k, t, c], i) => { num(s, k, 8.2, 1.95 + i * 0.85, 0.7, c, 18); box(s, 9.1, 1.95 + i * 0.85, 3.63, 0.7); T(s, t, 9.3, 1.95 + i * 0.85, 3.3, 0.7, { fontSize: 19, bold: true }); });
  notes(s, {
    say: "Tình huống giả định: đơn vị LED duy nhất có màn đúng kích thước dọa dừng lắp đặt 6 giờ trước giờ G nếu Nova không trả thêm 30% ngoài hợp đồng. Họ thuộc loại nào? Giơ 1 ngón: Dominant; 2 ngón: Dangerous; 3 ngón: Dependent; 4 ngón: Definitive.",
    gv: "Đáp án: 2 — Dangerous. Đếm nhanh. Nếu nhiều bạn chọn 4: hỏi “yêu cầu trả thêm ngoài hợp đồng có chính đáng không?”.",
    ask: "Giơ 1–4 ngón.",
    next: "Đáp án.",
  });

  // ---------- 33 answer
  s = slide("Đáp án: Dangerous — có quyền lực và cấp bách, nhưng thiếu chính đáng");
  const chk = [["Power", "có — chỉ họ có màn phù hợp", true, PINK], ["Urgency", "có — 6 giờ trước giờ G", true, YEL], ["Legitimacy", "không — đòi thêm ngoài hợp đồng", false, TEAL]];
  for (let i = 0; i < 3; i++) {
    const y = 1.95 + i * 1.15;
    box(s, 0.6, y, 7.2, 0.95);
    await ic(s, chk[i][2] ? "FaCheck" : "FaTimes", 0.8, y + 0.15, 0.65, chk[i][2] ? TEAL : PINK);
    T(s, [{ text: chk[i][0] + ": ", options: { bold: true, color: chk[i][3] } }, { text: chk[i][1] }], 1.7, y, 6.0, 0.95, { fontSize: 18 });
  }
  box(s, 8.2, 1.95, 4.53, 3.25, YEL);
  T(s, "Không nhượng bộ ngay: bảo vệ bằng điều khoản hợp đồng và phương án dự phòng.", 8.45, 1.95, 4.05, 3.25, { fontSize: 20, bold: true, color: NAVY });
  T(s, "Sẽ học kỹ ở Buổi 7 (ma trận Kraljic) và Buổi 10 (nhà cung ứng).", 0.6, 5.6, 12.13, 0.6, { fontSize: 16, color: MU });
  notes(s, {
    say: "Đáp án: Dangerous — nguy hiểm. Có quyền lực: chỉ họ có màn phù hợp. Có tính cấp bách: 6 giờ trước giờ G. Nhưng thiếu tính chính đáng: đòi thêm ngoài hợp đồng. Hiểu lầm thường gặp: quyền lực cao thì phải chiều theo. Không: với nhóm Dangerous, chiến lược là không nhượng bộ ngay — bảo vệ bằng điều khoản hợp đồng và phương án dự phòng, chuẩn bị từ trước. Buổi 7 và Buổi 10 sẽ học kỹ.",
    gv: "Nối sang Buổi 7 (Bottleneck, back-to-back) và Buổi 10.",
    next: "Bảy loại không đứng yên: một bên có thể “lên hạng”.",
  });

  // ---------- 34 dynamics
  s = slide("Bên liên quan có thể “lên hạng”: cư dân thành Definitive khi báo chí và phường vào cuộc");
  box(s, 0.6, 2.0, 3.4, 2.4, TEAL);
  T(s, "Dependent\nL + U", 0.6, 2.0, 3.4, 2.4, { align: "center", bold: true, color: NAVY, fontSize: 22 });
  s.addShape(pres.shapes.RIGHT_ARROW, { x: 4.2, y: 2.85, w: 1.0, h: 0.7, fill: { color: MU }, line: { color: MU } });
  box(s, 5.4, 2.0, 2.6, 2.4);
  await ic(s, "FaNewspaper", 5.75, 2.25, 0.8, BLUE);
  await ic(s, "FaUniversity", 6.85, 2.25, 0.8, ORA);
  T(s, "+ bài báo\n+ phường kiểm tra", 5.4, 3.2, 2.6, 1.0, { align: "center", fontSize: 15 });
  s.addShape(pres.shapes.RIGHT_ARROW, { x: 8.2, y: 2.85, w: 1.0, h: 0.7, fill: { color: MU }, line: { color: MU } });
  box(s, 9.4, 2.0, 3.33, 2.4, YEL);
  T(s, "Definitive\nP + L + U", 9.4, 2.0, 3.33, 2.4, { align: "center", bold: true, color: NAVY, fontSize: 22 });
  box(s, 0.6, 4.8, 12.13, 1.5);
  await ic(s, "FaDove", 0.85, 5.1, 0.9, TEAL);
  T(s, "“Bên cấp bách nhất có thể là một loài chim quý làm tổ ngay tại địa điểm” — không phải bên có quyền lực nhất.", 2.0, 4.8, 10.5, 1.0, { fontSize: 18, italic: true });
  T(s, "(Holmes et al., 2015, tr. 26)", 2.0, 5.75, 10.5, 0.45, { fontSize: 13, color: MU });
  notes(s, {
    say: "Điểm mạnh của Salience Model: nó động. Cư dân quanh địa điểm phản ánh tiếng ồn: chính đáng và cấp bách, nhưng chưa có quyền lực — Dependent. Rồi một bài báo đưa tin, phường vào cuộc kiểm tra: họ “mượn” được quyền lực — trở thành Definitive. Và người cấp bách nhất không nhất thiết là người quyền lực nhất: sách của Holmes và cộng sự viết, bên quyền lực nhất có thể là khách hàng, chính quyền, truyền thông — nhưng bên cấp bách nhất có thể là một loài chim quý làm tổ ngay tại địa điểm.",
    gv: "Đã đối chiếu Holmes et al. (2015, tr. 26): “the most powerful stakeholders could be the client, government and the media but that does not necessarily make them the most urgent – that could be a rare species of birds that happen to nest at the event site.” Nghiên cứu thực chứng của Parent & Deephouse (2007) cho thấy quyền lực ảnh hưởng mạnh nhất tới độ nổi bật, sau đó đến cấp bách và chính đáng [VERIFY: chưa đọc bản gốc, dẫn qua Bazzanella et al., 2019] — chỉ nói thêm nếu lớp hỏi.",
    ask: "“Nova Events nên làm gì từ khi cư dân còn là Dependent, để không phải đối mặt khi họ đã là Definitive?”",
    next: "Đặt hai công cụ cạnh nhau, ta có một tín hiệu cảnh báo.",
  });

  // ---------- 35 mismatch
  s = slide("Khi Grid và Salience cho kết quả khác nhau, đó là tín hiệu cảnh báo sớm");
  const hdr = ["Bên", "Grid", "Salience", "Cảnh báo"];
  const xs = [0.65, 3.4, 5.6, 7.9], ws = [2.7, 2.1, 2.2, 4.8];
  hdr.forEach((h, i) => T(s, h, xs[i], 1.85, ws[i], 0.5, { bold: true, color: MU, fontSize: 15 }));
  const mm = [["Cư dân lân cận", "Monitor", "Dependent", "Chỉ cần “mượn” quyền lực là thành Definitive"], ["Nhà cung cấp độc quyền", "Keep satisfied", "Dangerous khi đòi tăng giá", "Cần điều khoản hợp đồng và phương án B"], ["KOL dẫn chương trình", "Keep informed", "Quyền lực biểu tượng", "Một bài đăng tiêu cực lan rất nhanh"]];
  mm.forEach((r, i) => {
    const y = 2.45 + i * 1.2;
    box(s, 0.45, y, 12.43, 1.05);
    r.forEach((t, j) => T(s, t, xs[j], y, ws[j], 1.05, { fontSize: 16, bold: j === 0, color: j === 2 ? YEL : TX }));
  });
  T(s, "Đánh dấu ⭐ cho bên “không khớp” trên poster Thực hành 2.", 0.6, 6.15, 12.13, 0.55, { fontSize: 18, bold: true, color: TEAL });
  notes(s, {
    say: "Grid hỏi: họ quan tâm bao nhiêu. Salience hỏi: yêu cầu của họ có chính đáng và có gấp không. Khi hai công cụ cho kết quả khác nhau, đó là tín hiệu cảnh báo sớm. Cư dân lân cận: Monitor trên Grid, nhưng Dependent trên Salience — chỉ cần mượn được quyền lực là thành Definitive. Nhà cung cấp độc quyền: Keep satisfied, nhưng thành Dangerous khi đòi tăng giá — cần điều khoản hợp đồng và phương án B. KOL dẫn chương trình: Keep informed, nhưng có quyền lực biểu tượng — một bài đăng tiêu cực lan rất nhanh. Ở Thực hành 2, các bạn đánh dấu ngôi sao cho một bên “không khớp” như vậy.",
    gv: "Theo phiếu S6 phần GV (các “không khớp” thường gặp). KOL nối sang Buổi 11.",
    next: "Hai công cụ là bước đầu của một việc làm liên tục.",
  });

  // ---------- 36 process
  s = slide("Quản trị bên liên quan là vòng lặp năm việc, không làm một lần rồi thôi");
  const pr = [["Nhận diện các bên", PINK], ["Phân tích và ưu tiên (Grid, Salience)", ORA], ["Chọn cách ứng xử cho từng nhóm", YEL], ["Giao tiếp hai chiều", TEAL], ["Theo dõi, đánh giá, vẽ lại bản đồ", BLUE]];
  pr.forEach(([t, c], i) => { num(s, i + 1, 2.6, 1.95 + i * 0.85, 0.65, c, 18); box(s, 3.45, 1.95 + i * 0.85, 7.0, 0.65); T(s, t, 3.65, 1.95 + i * 0.85, 6.7, 0.65, { fontSize: 18 }); });
  await ic(s, "FaSyncAlt", 10.85, 3.25, 1.3, TEAL);
  T(s, "lặp lại theo giai đoạn", 10.4, 4.6, 2.3, 0.6, { align: "center", fontSize: 14, color: MU });
  notes(s, {
    say: "Quản trị bên liên quan là một vòng lặp năm việc. Một, nhận diện các bên. Hai, phân tích và ưu tiên — bằng Grid và Salience vừa học. Ba, chọn cách ứng xử cho từng nhóm. Bốn, giao tiếp hai chiều — không chỉ gửi thông tin, mà lắng nghe. Năm, theo dõi, đánh giá và vẽ lại bản đồ. Rồi lặp lại theo từng giai đoạn của sự kiện.",
    gv: "Năm bước theo Van Niekerk & Getz (2019) qua video Mark N (2019) trên NotebookLM — [VERIFY: đối chiếu sách Van Niekerk & Getz, 2019, tài liệu tham khảo chính] trước khi gán tên tác giả trước lớp. Trên slide không ghi tác giả.",
    next: "Ba lỗi khiến bản đồ bên liên quan vô dụng.",
  });

  // ---------- 37 errors
  s = slide("Ba lỗi khiến bản đồ bên liên quan vô dụng");
  const er = ["Liệt kê nhân sự, crew, tình nguyện viên của chính agency", "“Bên liên quan = người trả tiền cho mình”", "“Quyền lực cao = phải chiều mọi yêu cầu”"];
  for (let i = 0; i < 3; i++) {
    const y = 2.0 + i * 1.25;
    box(s, 0.6, y, 7.6, 1.05);
    await ic(s, "FaTimes", 0.8, y + 0.2, 0.65, PINK);
    T(s, er[i], 1.65, y, 6.45, 1.05, { fontSize: 18 });
  }
  box(s, 8.5, 2.0, 4.23, 3.55, YEL);
  T(s, "Bản đồ tốt ≠ danh sách dài.", 8.75, 2.0, 3.75, 3.55, { fontSize: 28, bold: true, color: NAVY });
  notes(s, {
    say: "Ba lỗi. Một: liệt kê nhân sự, crew, tình nguyện viên của chính agency — ngoài phạm vi môn. Hai: nghĩ rằng bên liên quan là người trả tiền cho mình — định nghĩa gồm cả người bị ảnh hưởng và người có quyền ngăn cản. Ba: nghĩ rằng quyền lực cao thì phải chiều mọi yêu cầu — nhóm Dangerous có quyền lực nhưng thiếu chính đáng. Bản đồ tốt không phải danh sách dài: mỗi bên có nhãn, có lý do, có việc cụ thể.",
    gv: "Theo W01 lecture notes, mục “Hiểu lầm thường gặp”.",
    next: "Một điều về trách nhiệm với các bên liên quan.",
  });

  // ---------- 38 ethics
  s = slide("Một lời hứa với bên liên quan là một cam kết — có hợp đồng hay không");
  box(s, 0.6, 1.95, 6.0, 2.7);
  await ic(s, "FaFileContract", 0.85, 2.2, 0.85, TEAL);
  T(s, "Có hợp đồng", 1.9, 2.2, 4.5, 0.85, { bold: true, fontSize: 20, color: TEAL });
  T(s, "Quyền lợi ghi rõ; bên kia có thể đòi theo luật.", 0.85, 3.25, 5.5, 1.8, { fontSize: 18, valign: "top" });
  box(s, 6.85, 1.95, 5.88, 2.7);
  await ic(s, "FaComments", 7.1, 2.2, 0.85, PINK);
  T(s, "Chỉ là lời hứa", 8.15, 2.2, 4.4, 0.85, { bold: true, fontSize: 20, color: PINK });
  T(s, "Không kiện được — nhưng mất uy tín. “Họ hứa 200.000 người…”", 7.1, 3.25, 5.4, 1.8, { fontSize: 18, valign: "top" });
  T(s, "Chỉ hứa điều mình kiểm soát được; ghi lại điều đã hứa.", 0.6, 5.0, 12.13, 0.7, { fontSize: 22, bold: true, color: YEL });
  notes(s, {
    say: "Một điều về đạo đức nghề nghiệp. Có hai loại cam kết với bên liên quan. Có hợp đồng: quyền lợi ghi rõ, bên kia có thể đòi theo luật. Chỉ là lời hứa: không kiện được, nhưng mất uy tín — như chủ quầy pizza ở Fremantle: “Họ hứa 200.000 người…”. Uy tín mất rồi thì sự kiện sau không ai tham gia. Nguyên tắc: chỉ hứa điều mình kiểm soát được, và ghi lại điều đã hứa.",
    gv: "Ý “legal stake / moral stake” lấy từ video Boateng (2021) qua NotebookLM — chưa đối chiếu, dùng ở mức ý tưởng, không trích tên. Nối CLO8 (đạo đức và trách nhiệm nghề nghiệp). Không rõ trong sách ai đã hứa con số 200.000 với người bán hàng — đừng khẳng định đó là ban tổ chức.",
    ask: "“Trong dự án cũ, nhóm đã từng hứa điều gì với một bên mà không chắc làm được?”",
    next: "Giờ áp dụng tất cả lên khách hàng thật của nhóm: Thực hành 2.",
  });

  // ---------- 39 practice 2
  s = slide("Thực hành 2 · 33 phút: bản đồ quyền lực quanh khách hàng của nhóm");
  const st2 = [["3’", "Chọn 1 khách hàng từ dự án cũ của nhóm (mã hóa tên nếu cần)", TEAL], ["18’", "Poster A0, 3 khu vực: A danh sách ≥8 bên (P/S) · B Grid + 1 việc cụ thể mỗi ô · C Salience. Đánh dấu ⭐ 1 bên “không khớp”", YEL], ["12’", "Xoay trạm theo chiều kim đồng hồ: mỗi poster nhận 1 câu hỏi (note vàng) + 1 phản biện (note hồng)", PINK]];
  for (let i = 0; i < 3; i++) {
    const y = 1.95 + i * 1.3;
    box(s, 0.6, y, 1.2, 1.1, st2[i][2]);
    T(s, st2[i][0], 0.6, y, 1.2, 1.1, { align: "center", bold: true, color: NAVY, fontSize: 24 });
    box(s, 2.0, y, 6.6, 1.1);
    T(s, st2[i][1], 2.2, y, 6.3, 1.1, { fontSize: 15 });
  }
  box(s, 8.9, 1.95, 3.83, 3.7);
  await ic(s, "FaStar", 10.25, 2.15, 1.1, YEL);
  T(s, "Sản phẩm", 8.9, 3.35, 3.83, 0.5, { align: "center", bold: true, fontSize: 18, color: YEL });
  T(s, "Trang 1 của Stakeholder Management Plan", 9.1, 3.85, 3.43, 1.6, { align: "center", fontSize: 16, valign: "top" });
  T(s, "Không chấp nhận phản biện kiểu “đẹp quá”, “tốt lắm”.", 0.6, 6.0, 12.13, 0.55, { fontSize: 17, bold: true, color: PINK });
  notes(s, {
    say: "Thực hành 2, 33 phút, trên khách hàng thật của nhóm. Ba phút: chọn một khách hàng từ dự án sự kiện nhóm đã làm ở môn trước — mã hóa tên nếu cần bảo mật. Mười tám phút: poster A0 chia ba khu vực: A — danh sách ít nhất 8 bên bên ngoài, đánh dấu P hoặc S; B — Power-Interest Grid, mỗi ô ghi một việc cụ thể nhóm sẽ làm; C — Salience Model, ba vòng tròn. Đánh dấu ngôi sao cho một bên mà Grid và Salience không khớp, và viết một câu: điều đó cảnh báo gì. Mười hai phút: để poster trên bàn, cả nhóm xoay trạm theo chiều kim đồng hồ; mỗi poster nhận một câu hỏi trên giấy note vàng và một phản biện trên giấy note hồng. Không chấp nhận phản biện kiểu “đẹp quá”, “tốt lắm”. Sản phẩm là trang 1 của kế hoạch cuối kỳ.",
    gv: "Phiếu: W01_activity_S6_ban_do_quyen_luc.md. Mốc: phút 85–118. Phòng không dán được poster → mỗi bàn là một trạm. Nhóm không có dự án cũ: dùng tình huống An Phát + biến cố “nhà tài trợ bảo hiểm rút lui 2 tuần trước sự kiện”.",
    next: "Nhận phản biện xong — sửa ngay.",
  });

  // ---------- 40 revise + roadmap
  s = slide("Poster hôm nay là trang 1 của Stakeholder Management Plan");
  box(s, 0.6, 1.95, 5.6, 4.3, YEL);
  T(s, "5 phút: sửa ngay", 0.85, 2.1, 5.1, 0.7, { bold: true, color: NAVY, fontSize: 24 });
  T(s, [
    { text: "Sửa theo phản biện vừa nhận", options: { bullet: true, breakLine: true } },
    { text: "Ghi góc poster: sửa gì, vì sao", options: { bullet: true, breakLine: true } },
    { text: "Chụp ảnh lưu lại (không nộp)", options: { bullet: true } },
  ], 0.85, 2.9, 5.1, 3.1, { fontSize: 19, color: NAVY, valign: "top", paraSpaceAfter: 8 });
  const path = [["B1", "Bản đồ bên liên quan", TEAL], ["B2–8", "Khách hàng (KAM)", PINK], ["B9–12", "Các bên quanh hành trình khách hàng", BLUE], ["B13", "Ráp kế hoạch", ORA], ["B14–15", "Bảo vệ", YEL]];
  path.forEach(([b, t, c], i) => { const y = 1.95 + i * 0.88; box(s, 6.6, y, 6.13, 0.72); T(s, b, 6.8, y, 1.3, 0.72, { bold: true, color: c, fontSize: 18 }); T(s, t, 8.1, y, 4.5, 0.72, { fontSize: 16 }); });
  notes(s, {
    say: "Năm phút: mỗi nhóm về poster của mình, sửa ngay theo phản biện vừa nhận. Ghi ở góc poster: sửa gì, vì sao. Chụp ảnh lưu lại — không cần nộp. Poster này là trang 1 của Stakeholder Management Plan. Buổi 2 đến 8: đi sâu vào một bên — khách hàng. Buổi 9 đến 12: quay lại điều phối các bên còn lại quanh hành trình của khách hàng đó. Buổi 13: ráp kế hoạch. Buổi 14–15: bảo vệ.",
    gv: "Giáo án S7, phút 118–125. Chiếu nửa trái trước (sửa poster), nói nửa phải sau.",
    next: "Trước khi về, ba câu kiểm tra nhanh.",
  });

  // ---------- 41 quick check
  s = slide("Ba câu hỏi kiểm tra nhanh");
  const qq = ["Vì sao cùng một nhà tài trợ có thể là primary ở sự kiện này, secondary ở sự kiện khác?", "Cư dân lân cận: Monitor trên Grid nhưng Dependent trên Salience. Điều đó cảnh báo gì?", "Kể một bên có tính cấp bách cao nhưng không có quyền lực trong một sự kiện bạn biết."];
  qq.forEach((q, i) => { num(s, i + 1, 0.6, 2.0 + i * 1.35, 0.95, [TEAL, BLUE, ORA][i], 26); box(s, 1.8, 2.0 + i * 1.35, 10.93, 0.95); T(s, q, 2.05, 2.0 + i * 1.35, 10.5, 0.95, { fontSize: 18 }); });
  notes(s, {
    say: "Ba câu hỏi kiểm tra nhanh. Một: vì sao cùng một nhà tài trợ có thể là primary ở sự kiện này, secondary ở sự kiện khác? Hai: cư dân lân cận nằm ở ô Monitor trên Grid nhưng là Dependent trên Salience — điều đó cảnh báo gì? Ba: kể một bên có tính cấp bách cao nhưng không có quyền lực trong một sự kiện bạn biết.",
    gv: "Đáp án gợi ý: (1) phân loại theo bối cảnh — ngân sách có phụ thuộc khoản tài trợ không; (2) họ có chính đáng và cấp bách, chỉ thiếu quyền lực — một bài báo hay cơ quan chức năng vào cuộc là thành Definitive; cần chủ động trước; (3) ví dụ cư dân phản ánh tiếng ồn, loài chim làm tổ ở địa điểm, khách khuyết tật cần lối đi. Hỏi miệng, gọi ngẫu nhiên; nếu thiếu giờ bỏ câu 3.",
    ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.",
    next: "Phiếu cuối giờ.",
  });

  // ---------- 42 exit ticket
  s = slide("Trước khi về: hai câu trên phiếu cuối giờ");
  for (const [x, i_, c, t] of [[0.6, "FaSearch", TEAL, "Trong dự án cũ, bên nào bạn đã đánh giá thấp? Theo Salience, nó thiếu thuộc tính nào — điều gì có thể cho nó thêm thuộc tính đó?"], [6.85, "FaQuestion", PINK, "Điều bạn còn mơ hồ nhất sau buổi hôm nay là gì?"]]) {
    box(s, x, 2.0, 5.88, 4.4);
    await ic(s, i_, x + 2.19, 2.3, 1.5, c);
    T(s, t, x + 0.4, 4.0, 5.08, 2.2, { align: "center", fontSize: 18, valign: "top" });
  }
  notes(s, {
    say: "Trước khi về, mỗi bạn trả lời hai câu trên phiếu cuối giờ. Một: trong dự án cũ của nhóm, bên liên quan nào bạn đã đánh giá thấp? Theo Salience Model, nó thiếu thuộc tính nào — và điều gì có thể khiến nó có thêm thuộc tính đó? Hai: điều bạn còn mơ hồ nhất sau buổi hôm nay là gì? Không chấm điểm. Tôi sẽ đọc và mở đầu Buổi 2 bằng vài điều còn mơ hồ nhiều nhất.",
    gv: "Phiếu giấy hoặc Google Form (giáo án S8, phút 125–132). Xem: SV có dùng đúng power/legitimacy/urgency không; còn liệt kê nhân sự nội bộ không.",
    next: "Buổi sau.",
  });

  // ---------- 43 next session
  s = slide("Không có bài về nhà. Buổi 2: vì sao không phải khách hàng nào cũng là Key Account");
  box(s, 0.6, 2.0, 6.0, 4.0);
  await ic(s, "FaChessKnight", 0.9, 2.3, 1.0, YEL);
  T(s, "Buổi 2 · KAM mindset", 2.1, 2.3, 4.3, 1.0, { bold: true, fontSize: 20, color: YEL });
  T(s, "Có một bên mà nếu mất, agency mất luôn doanh thu năm sau: khách hàng. Nhưng không phải khách hàng nào cũng đáng đầu tư như nhau.", 0.9, 3.5, 5.4, 2.4, { fontSize: 17, valign: "top" });
  box(s, 6.85, 2.0, 5.88, 4.0);
  await ic(s, "FaClipboardList", 7.15, 2.3, 1.0, TEAL);
  T(s, "Mang theo", 8.35, 2.3, 4.2, 1.0, { bold: true, fontSize: 20, color: TEAL });
  T(s, [{ text: "Ảnh poster hôm nay", options: { bullet: true, breakLine: true } }, { text: "Hồ sơ dự án cũ: brief, kế hoạch, báo cáo", options: { bullet: true } }], 7.15, 3.5, 5.3, 2.4, { fontSize: 18, valign: "top", paraSpaceAfter: 8 });
  notes(s, {
    say: "Không có bài về nhà. Buổi 2: trong tất cả các bên liên quan, có một bên mà nếu mất, agency mất luôn doanh thu năm sau — khách hàng. Nhưng không phải khách hàng nào cũng là Key Account, cũng đáng đầu tư như nhau. Buổi sau mang theo ảnh poster hôm nay và hồ sơ dự án cũ: brief, kế hoạch, báo cáo.",
    gv: "Môn không giao bài về nhà (thiết kế đã duyệt). [NEEDS PROFESSOR INPUT: nếu AM2 “bài tập nộp LMS” có bài cho Buổi 1 thì thêm vào đây.]",
    next: "Tài liệu tham khảo của buổi học.",
  });

  // ---------- 44 references
  s = slide("Tài liệu tham khảo");
  const I = (t) => ({ text: t, options: { italic: true } }), P = (t) => ({ text: t, options: {} });
  const refs = [
    [P("Clarkson, M. B. E. (1995). A stakeholder framework for analyzing and evaluating corporate social performance. "), I("Academy of Management Review, 20"), P("(1), 92–117.")],
    [P("Freeman, R. E. (1984). "), I("Strategic management: A stakeholder approach"), P(". Pitman.")],
    [P("Getz, D., Andersson, T., & Larson, M. (2006). Festival stakeholder roles: Concepts and case studies. "), I("Event Management, 10"), P("(2), 103–122.")],
    [P("Holmes, K., Hughes, M., Mair, J., & Carlsen, J. (2015). "), I("Events and sustainability"), P(". Routledge.")],
    [P("Mendelow, A. L. (1981). Environmental scanning: The impact of the stakeholder concept. "), I("ICIS 1981 Proceedings"), P(", 20. https://aisel.aisnet.org/icis1981/20/")],
    [P("Mitchell, R. K., Agle, B. R., & Wood, D. J. (1997). Toward a theory of stakeholder identification and salience: Defining the principle of who and what really counts. "), I("Academy of Management Review, 22"), P("(4), 853–886.")],
    [P("Trần Nguyễn Huỳnh Như. (2023). "), I("Chương 2: Khách hàng trọng yếu trong sự kiện"), P(" [Slide bài giảng].")],
    [P("Van Niekerk, M., & Getz, D. (2019). "), I("Event stakeholders: Theory and methods for event management and tourism"), P(". Goodfellow Publishers.")],
  ];
  const runs = [];
  refs.forEach((r, i) => r.forEach((x, j) => runs.push({ text: x.text, options: { ...x.options, breakLine: j === r.length - 1 && i < refs.length - 1 } })));
  T(s, runs, 0.6, 1.75, 12.13, 5.1, { fontSize: 14, valign: "top", paraSpaceAfter: 6 });
  notes(s, {
    say: "Đây là tài liệu tham khảo của buổi học, trình bày theo APA 7. Tài liệu tham khảo chính của học phần là Van Niekerk và Getz, 2019; giáo trình chính là tài liệu nội bộ.",
    gv: "Sửa nguồn so với NotebookLM: “Events and sustainability-1.pdf” là Holmes et al. (2015), không phải Getz & Page (2012). [VERIFY: số tạp chí của Getz et al. (2006) — 10(2) hay 10(2–3); năm và tên chính thức của slide bộ môn; NEEDS PROFESSOR INPUT: tên đơn vị phát hành slide.] Reid & Arcodia (2002) và Theodoraki (2007) dẫn qua Holmes et al. (2015) nên không liệt kê riêng.",
    next: "—",
  });

  await pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, n, "slides");
})();
