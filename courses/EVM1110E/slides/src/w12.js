// EVM1110E Buổi 12 — Leverage & Resolving Network Conflicts (Phần 3, buổi 4/4)
// usage: NODE_PATH=<node_modules> node w12.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W12_slides.pptx";
const L = make(FONT, "Bài 12: Tận dụng mạng lưới và xử lý xung đột");
const { T, box, circ, num, ic, slide, notes, src, bullets, arrow } = L;
const { TEAL, YEL, PINK, PUR, BLUE, ORA, NAVY, CARD, TX, MU } = C;

function defCards(s, defs, synth, fs = 16) {
  const w = (12.13 - (defs.length - 1) * 0.23) / defs.length;
  defs.forEach(([h, c, t, r], i) => {
    const x = 0.6 + i * (w + 0.23);
    box(s, x, 1.95, w, 0.65, c); T(s, h, x + 0.2, 1.95, w - 0.4, 0.65, { bold: true, color: NAVY, fontSize: 16 });
    box(s, x, 2.75, w, 2.95); T(s, t, x + 0.2, 2.9, w - 0.4, 2.7, { fontSize: fs, valign: "top" });
    T(s, r, x, 5.75, w, 0.45, { fontSize: 12, color: MU, valign: "top" });
  });
  if (synth) { box(s, 0.6, 6.2, 12.13, 0.75, YEL); T(s, synth, 0.8, 6.2, 11.4, 0.75, { fontSize: 16, bold: true, color: NAVY }); }
}
function table(s, x, y, colW, head, rows, o = {}) {
  const rh = o.rh || 0.62, hh = o.hh || 0.6, fs = o.fs || 14, hc = o.hc || TEAL;
  let cx = x;
  head.forEach((h, j) => { box(s, cx, y, colW[j] - 0.06, hh, Array.isArray(hc) ? hc[j] : hc); T(s, h, cx + 0.1, y, colW[j] - 0.26, hh, { bold: true, color: NAVY, fontSize: fs }); cx += colW[j]; });
  rows.forEach((r, i) => {
    cx = x; const yy = y + hh + 0.08 + i * (rh + 0.08);
    r.forEach((t, j) => { box(s, cx, yy, colW[j] - 0.06, rh, j === 0 && o.firstCol ? o.firstCol : CARD); T(s, t, cx + 0.12, yy, colW[j] - 0.3, rh, { fontSize: fs, bold: j === 0, color: j === 0 && o.firstCol ? NAVY : TX }); cx += colW[j]; });
  });
}

(async () => {
  // 1
  let s = L.titleSlide("Bài 12: Tận dụng mạng lưới và xử lý xung đột", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 12\nLeverage & Resolving Network Conflicts\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 12 — Bài 12: Tận dụng mạng lưới và xử lý xung đột. Đây là buổi cuối của Phần 3. Buổi 9, 10, 11 ta học từng bên: nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL. Hôm nay ta nhìn cả mạng lưới — và những lúc các bên va nhau.", gv: "Phần 3, buổi 4/4. Nhắc SV mở các trang SMP đã làm (dùng ở Thực hành 2 — buổi chạy thử bảo vệ). Mở đầu bằng 2–3 “điều còn mơ hồ” từ phiếu Buổi 11 (≤3 phút).", next: "Một đêm diễn không diễn ra." });

  // 2 hook
  s = slide("Một mạng lưới vỡ ở một mối nối là vỡ cả");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaTheaterMasks", 0.85, 2.15, 0.9, PINK);
  T(s, "“Về đây bốn cánh chim trời”, Hà Nội, 28/12/2025", 1.95, 2.15, 5.8, 0.9, { bold: true, fontSize: 17, color: PINK });
  T(s, bullets(["Khán giả đã vào; sân khấu, âm thanh ánh sáng đã dựng xong", "40 nghệ sĩ không lên sân khấu", "Báo chí đưa tin nguyên nhân: tranh chấp thanh toán giữa nghệ sĩ và nhà sản xuất"]), 0.9, 3.2, 6.8, 2.9, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  box(s, 8.15, 1.95, 4.58, 4.3);
  T(s, "Giơ tay: vấn đề nằm ở…", 8.4, 2.05, 4.1, 0.6, { bold: true, fontSize: 17, color: YEL });
  [["A · Nhà tổ chức", ORA], ["B · Nghệ sĩ", BLUE], ["C · Cả hai", PUR], ["D · Khoảng trống giữa các bên", TEAL]].forEach(([t, c], i) => { box(s, 8.4, 2.8 + i * 0.83, 4.08, 0.7, c); T(s, t, 8.55, 2.8 + i * 0.83, 3.8, 0.7, { fontSize: 16, bold: true, color: c === PUR ? TX : NAVY }); });
  src(s, "Nguồn: Báo Văn hóa (3/1/2026); Nhân Dân (23/1/2026); Dân trí (31/12/2025) (Y09). Vụ việc đang được xử lý theo pháp luật — không quy lỗi cá nhân.", 6.45);
  notes(s, {
    say: "Tối 28/12/2025, Hà Nội. Khán giả đã vào Cung thi đấu; sân khấu, âm thanh ánh sáng đã dựng xong. Nhưng 40 nghệ sĩ không lên sân khấu. Báo chí đưa tin nguyên nhân là tranh chấp thanh toán giữa nghệ sĩ và nhà sản xuất. Giơ tay: vấn đề nằm ở nhà tổ chức, nghệ sĩ, cả hai — hay ở khoảng trống giữa các bên?",
    gv: "Giáo án S1. Chốt: “Ta không phán xử ai — vụ việc đang được xử lý theo pháp luật. Nhưng địa điểm, âm thanh ánh sáng, khán giả — những bên không tranh chấp — đều chịu thiệt. Một mạng lưới vỡ ở một mối nối là vỡ cả.” Không dùng ảnh chân dung, không nêu tên cá nhân.",
    ask: "“A, B, C hay D?”",
    next: "Mạng lưới của An Phát.",
  });

  // 3 network map
  s = slide("Sau Buổi 9–11, An Phát đứng giữa một mạng lưới — Nova ở mọi mối nối");
  circ(s, 5.17, 2.6, 3.0, YEL);
  T(s, "AN PHÁT\n+ 600 khách VIP", 5.17, 2.6, 3.0, 3.0, { align: "center", bold: true, color: NAVY, fontSize: 18 });
  const nb = [["Nhà tài trợ (Buổi 9)", "Bình An · GlobalCard", 0.6, 1.95, TEAL], ["Nhà cung cấp – địa điểm (Buổi 10)", "Khách sạn B · AV – livestream · nhà in · xe", 8.73, 1.95, BLUE], ["Báo chí – KOL (Buổi 11)", "Nhà báo kinh tế · TS. Nam · chị Mai Anh", 4.67, 5.75, ORA]];
  nb.forEach(([a, b, x, y, c]) => { box(s, x, y, 4.0, y > 5 ? 1.0 : 1.5, c); T(s, a, x + 0.15, y + 0.05, 3.7, 0.5, { bold: true, fontSize: 15, color: NAVY }); T(s, b, x + 0.15, y + 0.5, 3.7, y > 5 ? 0.45 : 0.9, { fontSize: 14, color: NAVY, valign: "top" }); });
  s.addShape(L.pres.shapes.LINE, { x: 4.6, y: 2.7, w: 0.8, h: 0.5, line: { color: MU, width: 2 } });
  s.addShape(L.pres.shapes.LINE, { x: 7.95, y: 2.7, w: 0.78, h: 0.5, flipV: true, line: { color: MU, width: 2 } });
  s.addShape(L.pres.shapes.LINE, { x: 6.67, y: 5.6, w: 0, h: 0.15, line: { color: MU, width: 2 } });
  box(s, 0.6, 3.75, 3.6, 1.6, CARD); T(s, "Nova ở mọi mối nối — và các bên cũng quan hệ với nhau", 0.75, 3.75, 3.3, 1.6, { fontSize: 15, bold: true, color: YEL });
  box(s, 9.13, 3.75, 3.6, 1.6, CARD); T(s, "Khách sạn ↔ AV, nhà tài trợ ↔ báo chí, diễn giả ↔ khách… có lúc lợi ích va nhau", 9.28, 3.75, 3.3, 1.6, { fontSize: 14.5 });
  notes(s, {
    say: "An Phát ở giữa, cùng 600 khách VIP. Quanh đó: nhà tài trợ — Bình An, GlobalCard, Buổi 9. Nhà cung cấp và địa điểm — khách sạn B, AV, nhà in, xe, Buổi 10. Báo chí và KOL — nhà báo kinh tế, TS. Nam, chị Mai Anh, Buổi 11. Nova nằm ở mọi mối nối. Và các bên này cũng quan hệ với nhau — có lúc lợi ích của họ va nhau.",
    gv: "Alt-text: sơ đồ hình sao ba nhánh, An Phát ở giữa. Mọi tên là giả định.",
    next: "Mạng lưới này đáng giá gì?",
  });

  // 4 relational view
  s = slide("Một phần giá trị của agency nằm trong quan hệ, không chỉ trong agency");
  defCards(s, [
    ["Dyer & Singh (1998)", TEAL, "Nguồn lực then chốt của doanh nghiệp có thể vượt ra ngoài ranh giới doanh nghiệp, nằm trong quan hệ giữa các doanh nghiệp — tạo ra “relational rents”.", "(Y01 — relational view)"],
    ["Morgan & Hunt (1994)", YEL, "Quan hệ thành công cần cam kết và niềm tin (đã học ở Buổi 4).", "(Y02)"],
    ["Dowson et al. (2023)", PINK, "Khi nhiều bên cùng chi mà có bên phải trả nhiều hơn thỏa thuận ban đầu, họ “may choose not to do business with the others again”.", "(V15, tr. 224)"],
  ], "Leverage = giá trị do quan hệ dài hạn tạo ra — không phải dùng thế lớn để ép đối tác.");
  notes(s, {
    say: "Mục 12.1. Dyer và Singh, 1998, quan điểm quan hệ: nguồn lực then chốt của doanh nghiệp có thể nằm ngoài ranh giới doanh nghiệp — trong quan hệ giữa các doanh nghiệp, tạo ra lợi ích gọi là relational rents. Morgan và Hunt, Buổi 4: quan hệ thành công cần cam kết và niềm tin. Và mặt trái, theo Dowson: khi nhiều bên cùng chi mà có bên phải trả nhiều hơn thỏa thuận ban đầu, họ có thể không bao giờ làm việc với nhau nữa. Leverage của môn này là giá trị do quan hệ dài hạn tạo ra — không phải dùng thế lớn để ép đối tác.",
    gv: "Quyết định GV 3 (định nghĩa leverage). Y01, Y02 đọc tóm tắt.",
    next: "Bốn nguồn giá trị.",
  });

  // 5 four rents
  s = slide("Bốn nguồn relational rents trong mạng lưới của Nova");
  table(s, 0.6, 1.95, [4.0, 8.13], ["Nguồn (Dyer & Singh)", "Ví dụ trong mạng lưới của Nova"], [
    ["Tài sản đặc thù cho quan hệ", "Nova thuộc sơ đồ, quy trình bếp, giờ dựng của khách sạn quen"],
    ["Thói quen chia sẻ tri thức", "Họp rút kinh nghiệm chung với nhà cung cấp sau mỗi sự kiện"],
    ["Nguồn lực bổ trợ", "Đơn vị livestream quen + AV khách sạn làm được việc mỗi bên không làm một mình"],
    ["Quản trị hiệu quả", "Hợp đồng khung, cam kết dài hạn, cơ chế xử lý tranh chấp đã thống nhất"],
  ], { hc: [YEL, TEAL], rh: 0.62, fs: 15, firstCol: YEL });
  box(s, 0.6, 5.55, 12.13, 0.7, CARD);
  T(s, "Ví dụ thật: Techcombank — nhà tài trợ concert 2024, “nhà đồng đầu tư” 2025 (Buổi 9): quan hệ dài hạn mở ra cấu trúc hợp tác mới.", 0.85, 5.55, 11.7, 0.7, { fontSize: 15, color: YEL, bold: true });
  src(s, "Nguồn: Dyer & Singh (1998) (Y01). Ví dụ Nova: nhận định của người soạn. Techcombank: U08.", 6.45);
  notes(s, {
    say: "Bốn nguồn relational rents, và ví dụ với Nova. Tài sản đặc thù cho quan hệ: Nova thuộc sơ đồ, quy trình bếp, giờ dựng của khách sạn quen. Thói quen chia sẻ tri thức: họp rút kinh nghiệm chung với nhà cung cấp sau mỗi sự kiện. Nguồn lực bổ trợ: đơn vị livestream quen cộng AV khách sạn làm được việc mỗi bên không làm một mình. Quản trị hiệu quả: hợp đồng khung, cơ chế xử lý tranh chấp đã thống nhất. Nhờ quan hệ lâu năm, Nova làm được cho An Phát những việc agency khác không làm được. Ví dụ thật: Techcombank từ nhà tài trợ thành nhà đồng đầu tư.",
    gv: "Lecture notes §1.2. Hiểu lầm: “quan hệ lâu năm thì không cần hợp đồng chặt” → quản trị hiệu quả là một nguồn giá trị.",
    next: "Đối tác thành công làm gì?",
  });

  // 6 Mohr Spekman
  s = slide("Đối tác thành công giao tiếp tốt và cùng giải quyết vấn đề");
  const ms = [["Thuộc tính", "Cam kết · phối hợp · niềm tin", TEAL, "FaHandshake"], ["Giao tiếp", "Chất lượng thông tin · chia sẻ · cùng tham gia", YEL, "FaComments"], ["Xử lý xung đột", "Cùng giải quyết vấn đề (joint problem solving)", PINK, "FaPuzzlePiece"]];
  for (let i = 0; i < 3; i++) { const [a, b, c, icn] = ms[i], x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.2); await ic(s, icn, x + 1.4, 2.15, 1.1, c); T(s, a, x + 0.2, 3.35, 3.5, 0.6, { align: "center", bold: true, fontSize: 20, color: c }); T(s, b, x + 0.25, 3.95, 3.4, 1.1, { align: "center", fontSize: 15.5, valign: "top" }); }
  box(s, 0.6, 5.35, 12.13, 0.9, YEL);
  T(s, "Minh bạch (giao tiếp) và cùng giải quyết xung đột là hai mặt của một quan hệ bền.", 0.85, 5.35, 11.7, 0.9, { fontSize: 17, bold: true, color: NAVY });
  src(s, "Nguồn: Mohr & Spekman (1994), Strategic Management Journal (Y03) — đọc tóm tắt; các kỹ thuật xử lý xung đột khác [VERIFY].", 6.45);
  notes(s, {
    say: "Mohr và Spekman, 1994, nghiên cứu đặc điểm của quan hệ đối tác thành công. Thuộc tính: cam kết, phối hợp, niềm tin. Giao tiếp: chất lượng thông tin, chia sẻ, cùng tham gia. Và cách xử lý xung đột: cùng giải quyết vấn đề — joint problem solving. Minh bạch và cùng giải quyết xung đột là hai mặt của một quan hệ bền.",
    gv: "Y03 đọc tóm tắt; kiểm định trên quan hệ nhà sản xuất – đại lý. [VERIFY: các kỹ thuật khác ngoài joint problem solving.]",
    next: "Vì sao minh bạch khó?",
  });

  // 7 bullwhip
  s = slide("Mỗi lần truyền miệng là một lần lệch");
  const bw = [["Anh Minh", 0.9], ["Nova", 1.2], ["Khách sạn", 1.5], ["Bếp", 1.85]];
  bw.forEach(([t, h], i) => { const x = 0.6 + i * 3.08; box(s, x, 4.2 - h, 2.6, h, [TEAL, YEL, ORA, PINK][i]); T(s, t, x, 4.25, 2.6, 0.5, { align: "center", bold: true, fontSize: 16 }); if (i < 3) arrow(s, x + 2.65, 3.4, 0.35, 0.4, MU); });
  box(s, 0.6, 5.0, 12.13, 1.25, CARD);
  T(s, "Ẩn dụ từ chuỗi cung ứng: thông tin qua mỗi mắt xích bị bóp méo, càng xa càng lệch (bullwhip effect). Yêu cầu “bàn chay cho 12 khách” có thể đến bếp thành “12 suất chay” — hay “bàn 12 chay”?", 0.85, 5.0, 11.7, 1.25, { fontSize: 15.5 });
  src(s, "ẨN DỤ — Lee, Padmanabhan & Whang (1997), Management Science (Y06); không phải nghiên cứu về sự kiện (quyết định GV 7). Ví dụ giả định.", 6.45);
  notes(s, {
    say: "Một ẩn dụ từ chuỗi cung ứng: hiệu ứng roi da. Thông tin truyền qua mỗi mắt xích bị bóp méo, càng đi xa càng lệch. Yêu cầu của anh Minh đi qua Nova, qua khách sạn, đến bếp. “Bàn chay cho 12 khách” có thể đến bếp thành “12 suất chay”, hay “bàn số 12 ăn chay”. Mỗi lần truyền miệng là một lần lệch.",
    gv: "Quyết định GV 7: một slide, ghi rõ là ẩn dụ. Nếu trễ giờ: bỏ slide này (giáo án). Alt-text: bốn cột cao dần nối bằng mũi tên.",
    next: "Khi thiếu minh bạch.",
  });

  // 8 warning signs
  s = slide("Thiếu minh bạch thì những bên không tranh chấp cũng chịu thiệt");
  box(s, 0.6, 1.95, 7.3, 4.3);
  T(s, "Theo báo chí đưa tin (“Về đây bốn cánh chim trời”)", 0.85, 2.05, 6.8, 0.6, { bold: true, fontSize: 16, color: YEL });
  T(s, bullets(["Một số nghệ sĩ cho biết chưa nhận thanh toán, chưa có hợp đồng chính thức, được hẹn nhiều lần", "Một nhạc sĩ trả lại cát-sê trước 4 ngày khi thấy “dấu hiệu không ổn”", "Một luật sư nhận xét thị trường thiếu ký quỹ, bảo lãnh, bảo hiểm hủy sự kiện"]), 0.85, 2.7, 6.8, 3.4, { fontSize: 15.5, valign: "top", paraSpaceAfter: 8 });
  box(s, 8.15, 1.95, 4.58, 4.3, YEL);
  T(s, "Nếu Nova là agency của một nhà tài trợ show này — tín hiệu cảnh báo nào thấy được trước?\n\nGợi ý: hợp đồng chưa ký sát ngày · lịch thanh toán không rõ · các bên không nói chuyện với nhau.", 8.35, 2.05, 4.18, 4.1, { fontSize: 15.5, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Báo Văn hóa (3/1/2026); Nhân Dân (23/1/2026) — ý kiến chuyên gia, chưa KCC (Y09). Không quy lỗi cá nhân.", 6.45);
  notes(s, {
    say: "Theo báo chí đưa tin về đêm diễn đó: một số nghệ sĩ cho biết chưa nhận thanh toán, chưa có hợp đồng chính thức, được hẹn nhiều lần; một nhạc sĩ trả lại cát-sê trước 4 ngày khi thấy dấu hiệu không ổn. Một luật sư nhận xét thị trường thiếu ký quỹ, bảo lãnh, bảo hiểm hủy sự kiện. Hỏi: nếu Nova là agency của một nhà tài trợ show này, tín hiệu cảnh báo nào có thể thấy trước?",
    gv: "Y09. Chỉ nêu sự kiện đã đưa tin; vụ việc đang được xử lý. Nối Buổi 10: Dowson khuyên kiểm tra năng lực tài chính của đối tác trước khi ký.",
    ask: "“Tín hiệu cảnh báo nào thấy được trước?”",
    next: "Công cụ minh bạch.",
  });

  // 9 ESG
  s = slide("Minh bạch là mọi bên cùng đọc một phiên bản đúng — APEX ESG");
  const es = [["Narrative", "Tổng quan sự kiện", TEAL], ["Function Schedule", "Lịch từng hoạt động", YEL], ["Function Set-up Order", "Yêu cầu cho từng hoạt động", ORA]];
  es.forEach(([a, b, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 1.6, c); T(s, a, x + 0.2, 2.0, 3.5, 0.7, { align: "center", bold: true, fontSize: 18, color: NAVY }); T(s, b, x + 0.2, 2.7, 3.5, 0.7, { align: "center", fontSize: 15, color: NAVY }); });
  box(s, 0.6, 3.75, 12.13, 1.1, CARD);
  T(s, "Trường bắt buộc: ngày sửa đổi · đầu mối chính · họp trước sự kiện · họp sau sự kiện.", 0.85, 3.75, 11.7, 1.1, { fontSize: 17, bold: true, color: YEL });
  const ap = [["RFP", "Buổi 10"], ["ESG", "Buổi 12"], ["PER", "Buổi 8"]];
  ap.forEach(([a, b], i) => { const x = 2.6 + i * 3.0; box(s, x, 5.1, 2.3, 1.0, [BLUE, TEAL, PUR][i]); T(s, a + " · " + b, x, 5.1, 2.3, 1.0, { align: "center", bold: true, fontSize: 16, color: i === 2 ? TX : NAVY }); if (i < 2) arrow(s, x + 2.35, 5.4, 0.55, 0.4, MU); });
  src(s, "Nguồn: Convention Industry Council (2005), APEX Event Specifications Guide (Y07) [VERIFY: có bản mới hơn 2005]. Bộ APEX xuyên suốt môn.", 6.45);
  notes(s, {
    say: "Công cụ minh bạch của ngành: APEX Event Specifications Guide — ESG. Định nghĩa: tài liệu nhà tổ chức dùng để truyền đạt rõ ràng, chính xác mọi yêu cầu của sự kiện tới địa điểm và nhà cung cấp. Ba phần: Narrative — tổng quan; Function Schedule — lịch từng hoạt động; Function Set-up Order — yêu cầu cho từng hoạt động. Trường bắt buộc có ngày sửa đổi, đầu mối chính, họp trước và họp sau sự kiện. Bộ APEX xuyên suốt môn: RFP ở Buổi 10, ESG hôm nay, báo cáo sau sự kiện ở Buổi 8. Minh bạch không phải kể hết cho mọi người — mà là mọi bên cùng đọc một phiên bản đúng, biết ai đổi gì, khi nào.",
    gv: "Y07 nguyên văn: “the document used by an event organizer to convey information clearly and accurately to appropriate venue(s) and/or suppliers regarding all requirements for an event”. Dowson (2023, Hình 5.7) có mẫu function sheet tương tự (Buổi 10).",
    next: "Giới hạn của minh bạch.",
  });

  // 10 limits
  s = slide("Minh bạch về yêu cầu, lịch, thanh toán — bảo mật về khách và giá");
  box(s, 0.6, 1.95, 6.0, 4.3);
  await ic(s, "FaEye", 0.85, 2.15, 0.85, TEAL);
  T(s, "Chia sẻ với cả mạng lưới", 1.9, 2.15, 4.5, 0.85, { bold: true, fontSize: 18, color: TEAL });
  T(s, bullets(["Yêu cầu, thông số, sơ đồ", "Lịch, giờ dựng, mốc duyệt", "Mọi thay đổi — kèm ngày sửa đổi", "Lịch thanh toán với từng nhà cung cấp", "Ai là đầu mối, leo thang đến ai"]), 0.9, 3.15, 5.5, 3.0, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.85, 1.95, 5.88, 4.3);
  await ic(s, "FaLock", 7.1, 2.15, 0.85, PINK);
  T(s, "Bảo mật", 8.15, 2.15, 4.4, 0.85, { bold: true, fontSize: 18, color: PINK });
  T(s, bullets(["Danh sách, thông tin cá nhân khách của An Phát (trừ phần cần thiết, có đồng ý)", "Giá của nhà cung cấp khác", "Thông tin nội bộ của An Phát"]), 7.15, 3.15, 5.4, 3.0, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  src(s, "Nhận định của người soạn (lecture notes §1.5). Dữ liệu cá nhân: [VERIFY: văn bản hiện hành].", 6.45);
  notes(s, {
    say: "Giới hạn của minh bạch. Chia sẻ với cả mạng lưới: yêu cầu, thông số, sơ đồ; lịch, giờ dựng, mốc duyệt; mọi thay đổi kèm ngày sửa đổi; lịch thanh toán; ai là đầu mối, leo thang đến ai. Bảo mật: danh sách và thông tin cá nhân khách của An Phát — trừ phần cần thiết, có sự đồng ý; giá của nhà cung cấp khác; và thông tin nội bộ của An Phát.",
    gv: "Lecture notes §1.5 — nhận định. Hiểu lầm: “minh bạch là chia sẻ mọi thứ”.",
    next: "Thực hành 1.",
  });

  // 11 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: tuần cuối trước gala — bốn tin trong một buổi sáng", [["7’", "Mỗi tin: deliverable nào bị đe dọa? bên đó giữ vai nào (nhiều vai?)? lợi ích thật đằng sau là gì?", TEAL], ["8’", "Xếp ưu tiên 4 xung đột; với 2 xung đột ưu tiên nhất: giải pháp cùng giải quyết + nếu không được thì leo thang đến ai", YEL], ["5’", "Viết tin nhắn 3–4 câu chị Thảo gửi anh Minh: chuyện gì · ảnh hưởng · Nova đề xuất · cần anh Minh quyết gì", PINK]], "FaInbox", "Sản phẩm", "Bảng phân tích trên A3 + tin nhắn — mẫu cho phần “xung đột” trong SMP", "T-5 ngày: Bình An · khách sạn B · TS. Nam · nhà in.");
  notes(s, {
    say: "Thực hành 1, 20 phút. T trừ 5 ngày trước gala. Chị Thảo, KAMer của Nova, nhận bốn tin trong một buổi sáng. Bình An muốn đặt bàn tư vấn ngay cạnh khu tiệc, khác thỏa thuận đã ký. Khách sạn B có tiệc cưới kéo dài, giờ dựng lùi sang 13 giờ; đơn vị livestream và bếp tranh nhau khu hậu cần. Một báo điện tử nêu tên TS. Nam là thành viên hội đồng quản trị của một công ty đang bị thanh tra, chưa có kết luận. Nhà in báo trễ backdrop một ngày vì file được duyệt muộn, đề nghị phụ phí in gấp 15 triệu. Bảy phút phân tích; tám phút ưu tiên và giải pháp; năm phút viết tin nhắn gửi anh Minh.",
    gv: "Phiếu W12_activity_S3_tuan_cuoi_truoc_gala.md. Mốc phút 30–50. Ghi thứ tự ưu tiên của 6 nhóm lên bảng. Gợi ý: tin 3 (TS. Nam) dùng ở S5 — SCCT; tin 4: lỗi duyệt muộn có thể từ phía An Phát — minh bạch hai chiều.",
    next: "Giải lao.",
  });

  // 12 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 50–58.", next: "Sau giải lao: vì sao xung đột xảy ra." });

  // 13 multiple roles
  s = slide("Bên liên quan chủ chốt thường giữ nhiều vai cùng lúc");
  const rl = ["Cơ quan quản lý", "Bên hỗ trợ", "Đồng sản xuất", "Nhà cung cấp", "Cộng tác", "Khán giả", "Bên chịu tác động"];
  rl.forEach((t, i) => { const x = 0.6 + i * 1.75; box(s, x, 2.0, 1.6, 1.3, [TEAL, YEL, BLUE, ORA, PINK, PUR, MU][i]); T(s, t, x + 0.05, 2.0, 1.5, 1.3, { align: "center", bold: true, fontSize: 14, color: i === 5 ? TX : NAVY }); });
  box(s, 0.6, 3.6, 12.13, 2.65, CARD);
  T(s, "Getz, Andersson & Larson (2006): bên liên quan chủ chốt của lễ hội giữ nhiều vai cùng lúc. Sự kiện được tạo ra trong và bởi một tập hợp quan hệ bên liên quan được quản lý.\n\nMột bên nhiều vai → lợi ích của các vai có thể đi ngược nhau → nguồn gốc của xung đột lợi ích.", 0.85, 3.7, 11.7, 2.45, { fontSize: 16.5, valign: "top" });
  src(s, "Nguồn: Getz, Andersson & Larson (2006), Event Management (Y04) — đọc tóm tắt.", 6.45);
  notes(s, {
    say: "Mục 12.2. Getz, Andersson và Larson, 2006, phân vai trò bên liên quan của lễ hội thành bảy loại: cơ quan quản lý, bên hỗ trợ, đồng sản xuất, nhà cung cấp, cộng tác, khán giả, bên chịu tác động. Phát hiện chính: bên liên quan chủ chốt giữ nhiều vai cùng lúc. Một bên nhiều vai thì lợi ích của các vai có thể đi ngược nhau — đó là nguồn gốc của xung đột lợi ích.",
    gv: "Y04. Donald Getz là tác giả giáo trình chính của môn (Event Stakeholders, 2019).",
    next: "Trong mạng lưới An Phát.",
  });

  // 14 conflict table
  s = slide("Xung đột lợi ích sinh ra từ vai chồng chéo — ngay trong mạng lưới An Phát");
  table(s, 0.6, 1.95, [2.6, 2.6, 3.0, 3.93], ["Bên", "Vai 1", "Vai 2", "Xung đột có thể"], [
    ["Khách sạn", "Địa điểm", "Nhà cung cấp AV độc quyền", "Ưu tiên doanh thu AV hơn livestream của An Phát"],
    ["Bảo hiểm Bình An", "Nhà tài trợ", "Đối tác kinh doanh của An Phát", "Muốn bán hàng tại gala ↔ trải nghiệm khách VIP"],
    ["Chị Mai Anh", "Diễn giả", "Khách hàng của An Phát", "Muốn quảng bá công ty mình ↔ nội dung trung lập"],
  ], { hc: [YEL, TEAL, BLUE, PINK], rh: 0.72, fs: 14.5, firstCol: YEL });
  box(s, 0.6, 5.15, 12.13, 1.1, CARD);
  T(s, "Định nghĩa làm việc của môn: xung đột lợi ích là khi lợi ích của một bên liên quan bên ngoài — hoặc các vai khác nhau của cùng một bên — đi ngược những gì Nova đã cam kết với Key Account.", 0.85, 5.15, 11.7, 1.1, { fontSize: 15, color: YEL });
  src(s, "Ví dụ giả định từ Buổi 9–11. Định nghĩa: quyết định GV 4.", 6.45);
  notes(s, {
    say: "Trong mạng lưới An Phát. Khách sạn vừa là địa điểm vừa là nhà cung cấp AV độc quyền — có thể ưu tiên doanh thu AV hơn livestream của An Phát. Bình An vừa là nhà tài trợ vừa là đối tác kinh doanh của An Phát — muốn bán hàng tại gala, đi ngược trải nghiệm khách VIP. Chị Mai Anh vừa là diễn giả vừa là khách hàng của An Phát — muốn quảng bá công ty mình, trong khi nội dung cần trung lập. Định nghĩa làm việc của môn: xung đột lợi ích là khi lợi ích của một bên bên ngoài — hoặc các vai khác nhau của cùng một bên — đi ngược những gì Nova đã cam kết với Key Account.",
    gv: "Quyết định GV 4.",
    next: "Xung đột có bình thường không?",
  });

  // 15 political market square
  s = slide("Mạng lưới sự kiện là một “quảng trường chợ chính trị” — xung đột là bình thường");
  box(s, 0.6, 1.95, 6.0, 4.3);
  await ic(s, "FaStore", 0.85, 2.15, 0.9, ORA);
  T(s, "Political market square", 1.95, 2.15, 4.5, 0.9, { bold: true, fontSize: 19, color: ORA });
  T(s, "Mạng lưới làm sự kiện là một không gian mở: có bên trung tâm, có bên ngoại vi; mỗi bên tham gia để theo đuổi lợi ích của mình. Có lợi ích, xung đột, quyền lực — và không có ai có quyền hợp pháp với toàn mạng lưới.", 0.9, 3.2, 5.5, 2.9, { fontSize: 15.5, valign: "top" });
  box(s, 6.85, 1.95, 5.88, 4.3, YEL);
  T(s, "Quá trình chính trị: gác cổng · đàm phán · xây liên minh · xây niềm tin · xây bản sắc.\n\nBản sắc chung giúp giảm xáo trộn.\n\nNhiệm vụ của Nova: không xóa xung đột — quản lý nó.", 7.05, 2.05, 5.48, 4.1, { fontSize: 16, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Larson & Wikström (2001), Event Management, đã đọc toàn văn (Y11); Larson (2002) (Y05).", 6.45);
  notes(s, {
    say: "Larson và Wikström, 2001, mô tả mạng lưới làm sự kiện là một quảng trường chợ chính trị: không gian mở, có bên trung tâm, có bên ngoại vi; mỗi bên tham gia để theo đuổi lợi ích riêng. Có lợi ích, xung đột, quyền lực — và không ai có quyền hợp pháp với toàn mạng lưới. Larson, 2002, nêu các quá trình chính trị: gác cổng, đàm phán, xây liên minh, xây niềm tin, xây bản sắc — và bản sắc chung giúp giảm xáo trộn. Nhiệm vụ của Nova: không xóa xung đột, mà quản lý nó.",
    gv: "Y11 nguyên văn: project network “does not have any legitimate authority for the network as a whole” (dẫn Hellgren & Stjernberg, 1995). Case trong bài: World Championships in Athletics 1995, Storsjöyran.",
    next: "Đồng thuận hay xung đột?",
  });

  // 16 consensus vs conflict
  s = slide("Đồng thuận và xung đột không phải hai cực — chúng đan xen trong mọi quan hệ");
  table(s, 0.6, 1.95, [4.0, 4.0], ["Đồng thuận", "Xung đột"], [
    ["Lợi ích chung", "Lợi ích khác nhau"], ["Hài hòa", "Căng thẳng"], ["Hợp tác", "Trò chơi quyền lực"], ["Cam kết chung", "Cam kết riêng"], ["Niềm tin", "Nghi ngờ"], ["Đối thoại", "Đàm phán"],
  ], { hc: [TEAL, PINK], rh: 0.44, hh: 0.5, fs: 15 });
  box(s, 8.85, 1.95, 3.88, 2.0, YEL);
  T(s, "Chính danh thấp → thiên về xung đột\nChính danh cao → thiên về đồng thuận", 9.0, 1.95, 3.6, 2.0, { fontSize: 15, bold: true, color: NAVY });
  box(s, 8.85, 4.1, 3.88, 2.15);
  T(s, "Hai chiến lược:\n• Xây tính chính danh — khi chưa được thừa nhận\n• Xây cam kết chung — khi đã có chính danh", 9.0, 4.15, 3.6, 2.05, { fontSize: 14.5, valign: "top" });
  src(s, "Nguồn: Larson & Wikström (2001, Bảng 1, tr. 53; kết luận tr. 62–63) (Y11). Dùng làm khung chẩn đoán từng quan hệ trong SMP.", 6.45);
  notes(s, {
    say: "Larson và Wikström đưa ra sáu chiều để nhìn một quan hệ: lợi ích chung hay khác nhau; hài hòa hay căng thẳng; hợp tác hay trò chơi quyền lực; cam kết chung hay riêng; niềm tin hay nghi ngờ; đối thoại hay đàm phán. Kết luận: đồng thuận và xung đột không phải hai cực — chúng đan xen trong mọi quan hệ. Một phát hiện quan trọng: dự án có tính chính danh thấp thì thiên về xung đột; chính danh cao thì thiên về đồng thuận. Và hai chiến lược: xây tính chính danh khi chưa được thừa nhận, xây cam kết chung khi đã có chính danh. Với Nova: làm việc lần đầu với một nhà cung cấp, việc đầu tiên là xây chính danh.",
    gv: "Y11 — đã đọc toàn văn. Bảng 6 chiều dùng tốt ở Thực hành 2 và Buổi 13 (SMP): mỗi quan hệ đang ở cột nào? Nhận định: “Nova lần đầu làm việc → xây chính danh” là áp dụng của người soạn.",
    next: "Vậy Nova làm gì khi xung đột xảy ra?",
  });

  // 17 five steps
  s = slide("Năm bước bảo vệ deliverables khi mạng lưới xung đột");
  const fs5 = [["Deliverable nào bị đe dọa?", "Bắt đầu từ cam kết với Key Account, không từ bên đang to tiếng nhất", TEAL], ["Ai liên quan, giữ vai gì, nổi bật đến đâu?", "Quyền lực – chính đáng – cấp bách (Mitchell et al., Buổi 1)", YEL], ["Lợi ích đằng sau lập trường?", "Bình An đòi bàn cạnh khu tiệc — thứ họ cần là khách hẹn gặp (Buổi 7)", ORA], ["Cùng giải quyết — hoặc leo thang", "Joint problem solving; nếu không được: người phụ trách → lãnh đạo Nova → Key Account", PINK], ["Thông báo Key Account + cập nhật ESG", "Chuyện gì · ảnh hưởng · Nova đề xuất · cần quyết gì", BLUE]];
  fs5.forEach(([a, b, c], i) => { const y = 1.95 + i * 0.86; box(s, 0.6 + i * 0.3, y, 0.7, 0.74, c); T(s, String(i + 1), 0.6 + i * 0.3, y, 0.7, 0.74, { align: "center", bold: true, fontSize: 20, color: NAVY }); box(s, 1.45 + i * 0.3, y, 4.6, 0.74); T(s, a, 1.6 + i * 0.3, y, 4.35, 0.74, { fontSize: 15, bold: true }); T(s, b, 6.2 + i * 0.3, y, 6.53 - i * 0.3, 0.74, { fontSize: 13.5, color: MU }); });
  src(s, "Quy trình do người soạn dựng từ Mohr & Spekman (Y03), đàm phán tích hợp (Buổi 7), Mitchell, Agle & Wood (Buổi 1). Chiếu suốt Thực hành 2.", 6.45);
  notes(s, {
    say: "Năm bước bảo vệ deliverables. Một: deliverable nào bị đe dọa — bắt đầu từ cam kết với Key Account, không từ bên đang to tiếng nhất. Hai: ai liên quan, giữ vai gì, nổi bật đến đâu — quyền lực, chính đáng, cấp bách, Buổi 1. Ba: lợi ích đằng sau lập trường — Bình An đòi bàn tư vấn cạnh khu tiệc, nhưng thứ họ cần là khách hẹn gặp, Buổi 7. Bốn: cùng giải quyết; nếu không được, leo thang theo thứ tự đã thống nhất. Năm: thông báo minh bạch cho Key Account và cập nhật ESG cho mọi bên.",
    gv: "Lecture notes §2.3 — nhận định. Alt-text: năm bậc thang. Hiểu lầm: “giải quyết xung đột = chọn bên đúng” → bảo vệ deliverable; giải pháp tốt thường đáp ứng lợi ích của cả hai bên. Nếu trễ giờ: bỏ ví dụ Mỹ Đình (giáo án) — đã bỏ khỏi deck, chỉ nhắc miệng nếu cần.",
    next: "Bước 5 quan trọng nhất.",
  });

  // 18 tell the client
  s = slide("Giấu Key Account là cách mất niềm tin nhanh nhất");
  const msg = [["Chuyện gì", "Khách sạn B lùi giờ dựng ngày 12/12 từ 8h sang 13h vì tiệc cưới tối 11/12.", TEAL], ["Ảnh hưởng", "Thời gian dựng sân khấu và thử livestream còn 5 tiếng thay vì 10.", YEL], ["Nova đề xuất", "Dựng trước phần LED tại phòng phụ; thử livestream từ 13h30; bổ sung 4 kỹ thuật viên (chi phí Nova chịu).", ORA], ["Cần anh quyết", "Đồng ý lùi tổng duyệt sang 16h, hay yêu cầu khách sạn bồi hoàn theo hợp đồng?", PINK]];
  msg.forEach(([a, b, c], i) => { const y = 1.95 + i * 1.0; box(s, 0.6, y, 2.6, 0.85, c); T(s, a, 0.75, y, 2.3, 0.85, { bold: true, fontSize: 16, color: NAVY }); box(s, 3.35, y, 9.38, 0.85); T(s, b, 3.55, y, 9.0, 0.85, { fontSize: 15.5 }); });
  box(s, 0.6, 6.0, 12.13, 0.4, CARD);
  T(s, "Ví dụ giả định. Key Account phát hiện muộn còn mất niềm tin hơn (Morgan & Hunt; Mohr & Spekman).", 0.85, 6.0, 11.7, 0.4, { fontSize: 13.5, color: MU, italic: true });
  notes(s, {
    say: "Bước năm — báo Key Account. Tin nhắn bốn ý. Chuyện gì: khách sạn B lùi giờ dựng từ 8 giờ sang 13 giờ vì tiệc cưới tối hôm trước. Ảnh hưởng: thời gian dựng và thử livestream còn 5 tiếng thay vì 10. Nova đề xuất: dựng trước phần LED tại phòng phụ, thử livestream từ 13 giờ 30, bổ sung 4 kỹ thuật viên. Cần anh quyết: đồng ý lùi tổng duyệt sang 16 giờ, hay yêu cầu khách sạn bồi hoàn theo hợp đồng? Giấu khách để khỏi mất điểm — Key Account phát hiện muộn còn mất niềm tin hơn.",
    gv: "Ví dụ giả định, dựng từ tin 2 của Thực hành 1. Ai chịu chi phí bổ sung là quyết định thương mại của Nova — ví dụ chỉ minh họa.",
    next: "Khi một bên gây sự cố.",
  });

  // 19 SCCT clusters
  s = slide("Trách nhiệm mà khách quy cho Key Account quyết định cách phản hồi");
  table(s, 0.6, 1.95, [3.5, 3.5, 5.13], ["Nhóm", "Trách nhiệm quy cho tổ chức", "Ví dụ"], [
    ["Nạn nhân (victim)", "Rất thấp", "Tin đồn, giả mạo thương hiệu, thiên tai"],
    ["Tai nạn (accidental)", "Thấp", "Lỗi kỹ thuật không lường trước"],
    ["Có thể ngăn ngừa (preventable)", "Rất cao", "Lỗi con người, sai phạm, bỏ qua dấu hiệu"],
  ], { hc: [YEL, TEAL, BLUE], rh: 0.6, fs: 15, firstCol: YEL });
  box(s, 0.6, 4.85, 12.13, 1.4, CARD);
  T(s, "Mức đe dọa danh tiếng còn tăng theo lịch sử khủng hoảng và danh tiếng quan hệ trước đó.\nMột diễn giả vướng vụ việc: ban đầu An Phát gần nhóm “nạn nhân” — nhưng nếu thông tin đã có từ trước mà không ai kiểm tra, khách thấy đó là lỗi “có thể ngăn ngừa” (lý do của due diligence, Buổi 11).", 0.85, 4.85, 11.7, 1.4, { fontSize: 14.5 });
  src(s, "Nguồn: Coombs (2007), Corporate Reputation Review (Y08). Áp vào mạng lưới An Phát: nhận định của người soạn.", 6.45);
  notes(s, {
    say: "Khi một bên trong mạng lưới gây sự cố. Coombs, 2007, lý thuyết truyền thông khủng hoảng theo tình huống — SCCT: mức đe dọa danh tiếng phụ thuộc trách nhiệm mà bên liên quan quy cho tổ chức. Nhóm nạn nhân: trách nhiệm rất thấp — tin đồn, bị giả mạo. Nhóm tai nạn: thấp — lỗi kỹ thuật không lường trước. Nhóm có thể ngăn ngừa: rất cao — lỗi con người, sai phạm. Mức đe dọa còn tăng theo lịch sử khủng hoảng và danh tiếng trước đó. Một diễn giả vướng vụ việc: ban đầu An Phát gần nhóm nạn nhân. Nhưng nếu thông tin đã có từ trước mà không ai kiểm tra, khách thấy đó là lỗi có thể ngăn ngừa — đó là lý do của due diligence ở Buổi 11.",
    gv: "Y08. Ranh giới (giáo án): SCCT chỉ ở mức phối hợp bên liên quan, không dạy toàn bộ truyền thông khủng hoảng. Nối Happy Day Concert (Buổi 9): thương hiệu bị giả mạo → gần nhóm nạn nhân.",
    next: "Các cách phản hồi.",
  });

  // 20 strategies
  s = slide("Phủ nhận, giảm nhẹ hay xây lại — chọn theo mức trách nhiệm");
  const rs = [["Deny", "Phủ nhận, chỉ ra người gây ra", "Hợp khi là tin đồn, thông tin sai", PINK], ["Diminish", "Bào chữa, giải thích, giảm mức nghiêm trọng", "Hợp với nhóm tai nạn", YEL], ["Rebuild", "Xin lỗi, bồi thường, sửa sai", "Cần khi trách nhiệm cao", TEAL], ["Bolstering", "Nhắc việc tốt, tri ân, quan tâm người bị ảnh hưởng", "Bổ trợ cho các cách trên", BLUE]];
  rs.forEach(([a, b, c, col], i) => { const x = 0.6 + i * 3.08; box(s, x, 1.95, 2.9, 0.75, col); T(s, a, x, 1.95, 2.9, 0.75, { align: "center", bold: true, fontSize: 19, color: NAVY }); box(s, x, 2.8, 2.9, 2.2); T(s, b, x + 0.15, 2.9, 2.6, 1.2, { align: "center", fontSize: 15, valign: "top" }); T(s, c, x + 0.15, 4.1, 2.6, 0.8, { align: "center", fontSize: 13.5, color: MU, italic: true, valign: "top" }); });
  box(s, 0.6, 5.2, 12.13, 1.05, YEL);
  T(s, "Môn PR (Bài 6): “nói sớm và nói sự thật” — không nói dối, chối bỏ, che giấu. Phủ nhận chỉ dùng khi thông tin thật sự sai.", 0.85, 5.2, 11.7, 1.05, { fontSize: 16, bold: true, color: NAVY });
  src(s, "Nguồn: Coombs (2007) (Y08); slide môn PR trong TCSK, Bài 6 (Y12).", 6.45);
  notes(s, {
    say: "Coombs nêu các nhóm chiến lược phản hồi. Phủ nhận — deny: phủ nhận, chỉ ra người gây ra; hợp khi là tin đồn, thông tin sai. Giảm nhẹ — diminish: bào chữa, giải thích; hợp với nhóm tai nạn. Xây lại — rebuild: xin lỗi, bồi thường, sửa sai; cần khi trách nhiệm cao. Và bổ trợ — bolstering: nhắc việc tốt, tri ân, bày tỏ quan tâm đến người bị ảnh hưởng. Môn PR các bạn đã học nguyên tắc: nói sớm và nói sự thật — không nói dối, chối bỏ, che giấu. Phủ nhận chỉ dùng khi thông tin thật sự sai.",
    gv: "Y08, Y12. Ghép “hợp khi” với nhóm trách nhiệm là gợi ý của SCCT, rút gọn.",
    next: "Ai nói gì với ai.",
  });

  // 21 crisis matrix
  s = slide("Ma trận phản hồi: mỗi đối tượng một thông điệp, một kênh, một người nói");
  table(s, 0.6, 1.95, [2.5, 3.6, 2.4, 1.6, 2.03], ["Đối tượng", "Thông điệp chính", "Kênh", "Khi nào", "Ai nói"], [
    ["600 khách", "Chuyện gì, ảnh hưởng gì đến họ, An Phát làm gì", "Thư, tin nhắn riêng", "Sớm nhất", "An Phát"],
    ["Nhà tài trợ", "Ảnh hưởng đến quyền lợi; phương án bù", "Gọi trực tiếp", "Trước khi công bố", "An Phát + Nova"],
    ["Nhà cung cấp", "Thay đổi yêu cầu, lịch (cập nhật ESG)", "ESG, họp nhanh", "Ngay", "Nova"],
    ["Báo chí", "Thông tin đã xác minh", "Thông cáo, trả lời phỏng vấn", "Khi có thông tin", "Người phát ngôn An Phát"],
  ], { hc: [YEL, TEAL, BLUE, ORA, PINK], rh: 0.62, fs: 13, firstCol: YEL });
  box(s, 0.6, 5.65, 12.13, 0.6, CARD);
  T(s, "Nova soạn ma trận và bản nháp — An Phát quyết và phát ngôn.", 0.85, 5.65, 11.7, 0.6, { fontSize: 16, bold: true, color: YEL });
  src(s, "Khung: slide môn PR trong TCSK, Bài 6 — ma trận đối tượng × thông điệp × phương tiện × thời gian × người phát ngôn (Y12). Nội dung gala: giả định.", 6.45);
  notes(s, {
    say: "Môn PR các bạn đã học ma trận: đối tượng, thông điệp chính, phương tiện, thời gian, người phát ngôn. Áp vào mạng lưới gala. 600 khách: chuyện gì, ảnh hưởng gì đến họ, An Phát làm gì — gửi riêng, sớm nhất, An Phát nói. Nhà tài trợ: ảnh hưởng đến quyền lợi và phương án bù — gọi trực tiếp trước khi công bố. Nhà cung cấp: thay đổi yêu cầu, lịch — cập nhật ESG ngay, Nova nói. Báo chí: thông tin đã xác minh — người phát ngôn của An Phát. Nova soạn ma trận và bản nháp; An Phát quyết và phát ngôn.",
    gv: "Y12 (slide bộ môn bài 6, ba giai đoạn trước – trong – sau). Nội dung ma trận gala là giả định.",
    next: "Vai trò của Nova.",
  });

  // 22 Nova's role + press response
  s = slide("Khi một đối tác gây sự cố: Nova xác minh và khuyến nghị — Key Account quyết");
  box(s, 0.6, 1.95, 6.0, 4.3);
  T(s, "Nova làm", 0.85, 2.05, 5.5, 0.55, { bold: true, fontSize: 18, color: TEAL });
  T(s, bullets(["Xác minh sự việc, không phản ứng theo tin đồn", "Giữ deliverables: diễn giả dự phòng, đổi kịch bản", "Đưa phương án và khuyến nghị mức phản hồi", "Ghi vào báo cáo sau sự kiện (Buổi 8)"]), 0.85, 2.65, 5.5, 3.5, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  box(s, 6.85, 1.95, 5.88, 2.3, YEL);
  T(s, "Nova không nói thay An Phát.\n\nVụ Kera: thương hiệu hợp tác gỡ hình ảnh; công ty quản lý chấm dứt hợp đồng (X06).", 7.05, 2.05, 5.48, 2.1, { fontSize: 15.5, bold: true, color: NAVY, valign: "top" });
  box(s, 6.85, 4.4, 5.88, 1.85);
  T(s, "Báo chí đưa tin chưa chính xác? Luật Báo chí 2025 (Điều 36): tổ chức có quyền gửi ý kiến phản hồi bằng văn bản; báo phải đăng hoặc trả lời lý do.", 7.05, 4.45, 5.48, 1.75, { fontSize: 14.5, valign: "top" });
  src(s, "Nguồn: X06 (Buổi 11); Luật số 126/2025/QH15, Điều 34, 36 — đã đối chiếu nguyên văn (Y13). Vai trò Nova: nhận định.", 6.45);
  notes(s, {
    say: "Vai trò của Nova khi một đối tác gây sự cố. Xác minh sự việc, không phản ứng theo tin đồn. Giữ deliverables — có diễn giả dự phòng không, đổi kịch bản thế nào. Đưa phương án và khuyến nghị mức phản hồi. Và ghi vào báo cáo sau sự kiện để lần sau không lặp lại. Nova không nói thay An Phát. Trong vụ Kera, các đối tác đã phản hồi bằng cách gỡ hình ảnh, chấm dứt hợp đồng. Nếu báo chí đưa tin chưa chính xác về một bên — ví dụ diễn giả — Luật Báo chí 2025, Điều 36: tổ chức có quyền gửi ý kiến phản hồi bằng văn bản; báo phải đăng hoặc trả lời bằng văn bản lý do không đăng.",
    gv: "Nối tin 3 của Thực hành 1 (TS. Nam, “đang bị thanh tra, chưa có kết luận”): chưa có kết luận → xác minh, không vội đổi diễn giả, nhưng chuẩn bị phương án dự phòng; An Phát quyết. Điều 34: cải chính khi báo thông tin sai sự thật.",
    next: "Năm câu hỏi.",
  });

  // 23 checklist
  s = slide("Năm câu hỏi khi một bên trong mạng lưới gây sự cố");
  const ck = [["FaCheckDouble", "Sự việc đã được xác minh chưa?", TEAL], ["FaBalanceScale", "Trong mắt khách của An Phát, ai chịu trách nhiệm (SCCT)?", YEL], ["FaLifeRing", "Deliverable nào bị ảnh hưởng? Phương án dự phòng?", ORA], ["FaCommentDots", "Nova khuyến nghị An Phát phản hồi ở mức nào?", PINK], ["FaSitemap", "Ai báo cho ai, khi nào (cập nhật ESG, ma trận)?", BLUE]];
  for (let i = 0; i < 5; i++) { const y = 1.95 + i * 0.88; num(s, i + 1, 0.6, y, 0.72, ck[i][2], 20); await ic(s, ck[i][0], 1.5, y, 0.72, ck[i][2]); box(s, 2.4, y, 10.33, 0.72); T(s, ck[i][1], 2.65, y, 9.9, 0.72, { fontSize: 18.5, bold: true }); }
  notes(s, {
    say: "Năm câu hỏi khi một bên gây sự cố. Một: sự việc đã được xác minh chưa? Hai: trong mắt khách của An Phát, ai chịu trách nhiệm? Ba: deliverable nào bị ảnh hưởng, phương án dự phòng là gì? Bốn: Nova khuyến nghị An Phát phản hồi ở mức nào? Năm: ai báo cho ai, khi nào?",
    gv: "Lecture notes §3.4.",
    next: "Thực hành 2 — chạy thử bảo vệ SMP.",
  });

  // 24 practice 2
  s = await L.practice("Thực hành 2 · 30 phút: mạng lưới bên liên quan trong SMP của nhóm — chạy thử bảo vệ", [["3’", "Mở các trang SMP đã làm (Buổi 7–11); chưa có thì dùng mạng lưới An Phát", TEAL], ["13’", "A1: Key Account của nhóm ở giữa, ≥ 5 bên bên ngoài; ◆ bên nhiều vai; 2 xung đột (deliverable · lợi ích · phòng trước · xử lý); 1 cơ chế minh bạch", YEL], ["10’", "Xoay trạm 2 vòng × 5’: 1 người ở lại trình bày 1 phút; vai hội đồng bảo vệ SMP — 1 câu hỏi (vàng) + 1 điểm yếu (hồng)", PINK], ["4’", "Về bàn, sửa một điểm; ghi câu hỏi khó nhất", BLUE]], "FaProjectDiagram", "Sản phẩm", "Trang “mạng lưới bên liên quan và xung đột” của SMP + danh sách câu hỏi bảo vệ", "Dùng năm bước (slide 17) và bảng đồng thuận – xung đột (slide 16).", YEL);
  notes(s, {
    say: "Thực hành 2, 30 phút — đây là buổi chạy thử bảo vệ SMP. Mười ba phút: trên A1, đặt khách hàng của nhóm ở giữa, vẽ ít nhất 5 bên bên ngoài; đánh dấu bên giữ nhiều vai; vẽ 2 xung đột có thể xảy ra, mỗi xung đột ghi deliverable bị đe dọa, lợi ích thật, cách phòng trước và cách xử lý; ghi một cơ chế minh bạch cho cả mạng lưới. Mười phút: xoay trạm 2 vòng, mỗi vòng 5 phút; một người ở lại trình bày 1 phút; các bạn đóng vai hội đồng bảo vệ — để lại một câu hỏi phản biện và một điểm yếu. Bốn phút cuối: sửa một điểm, ghi lại câu hỏi khó nhất.",
    gv: "Phiếu W12_activity_S6_mang_luoi_smp.md (phương án B — quyết định GV). Mốc phút 93–123. Ghi các câu hỏi phản biện lặp lại lên bảng — danh sách ôn tập bảo vệ. Nếu trễ giờ: xoay 1 vòng (tiết kiệm 5 phút).",
    next: "Tổng hợp.",
  });

  // 25 summary
  s = slide("Ba ý của Buổi 12");
  const sm = [["12.1", "Giá trị của Nova nằm một phần trong quan hệ dài hạn với mạng lưới (tài sản đặc thù, chia sẻ tri thức, năng lực bổ trợ, quản trị). Minh bạch = mọi bên đọc một phiên bản đúng (ESG); bảo mật thông tin khách và giá", TEAL], ["12.2", "Xung đột thường đến từ một bên nhiều vai; đồng thuận và xung đột đan xen. Năm bước: deliverable → ai, vai gì → lợi ích đằng sau → cùng giải quyết, leo thang → báo Key Account", YEL], ["Sự cố", "Phân loại theo mức trách nhiệm (SCCT); Nova xác minh, khuyến nghị, soạn ma trận — Key Account quyết và phát ngôn; giữ deliverables", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.3; box(s, 0.6, y, 1.4, 1.1, c); T(s, k, 0.6, y, 1.4, 1.1, { align: "center", bold: true, color: NAVY, fontSize: 20 }); box(s, 2.2, y, 10.53, 1.1); T(s, t, 2.45, y, 10.1, 1.1, { fontSize: 14.5 }); });
  notes(s, {
    say: "Ba ý của Buổi 12. Mục 12.1: giá trị của Nova nằm một phần trong quan hệ dài hạn với mạng lưới; minh bạch là mọi bên đọc một phiên bản đúng, và bảo mật thông tin khách và giá. Mục 12.2: xung đột thường đến từ một bên nhiều vai; đồng thuận và xung đột đan xen; năm bước bảo vệ deliverables. Và sự cố: phân loại theo mức trách nhiệm; Nova xác minh, khuyến nghị, soạn ma trận — Key Account quyết và phát ngôn.",
    next: "Phần 3 khép lại.",
  });

  // 26 part 3 closes
  s = slide("Phần 3 khép lại: mạng lưới bên ngoài phục vụ hành trình của Key Account");
  const p3 = [["Buổi 9", "Nhà tài trợ", "Điểm chạm làm giàu trải nghiệm khách", TEAL], ["Buổi 10", "Nhà cung cấp – địa điểm", "Điểm chạm ở giai đoạn mua, sau mua", BLUE], ["Buổi 11", "Báo chí – KOL", "Khuếch đại điểm chạm trước sự kiện", ORA], ["Buổi 12", "Cả mạng lưới", "Minh bạch, xử lý xung đột, sự cố", PINK]];
  p3.forEach(([a, b, c, col], i) => { const x = 0.6 + i * 3.08; box(s, x, 1.95, 2.9, 0.65, col); T(s, a, x, 1.95, 2.9, 0.65, { align: "center", bold: true, fontSize: 17, color: NAVY }); box(s, x, 2.7, 2.9, 1.9); T(s, b, x + 0.15, 2.8, 2.6, 0.6, { align: "center", bold: true, fontSize: 16, color: col }); T(s, c, x + 0.15, 3.4, 2.6, 1.1, { align: "center", fontSize: 14.5, valign: "top" }); });
  box(s, 0.6, 4.85, 12.13, 1.4, YEL);
  T(s, "Buổi 13: ráp tất cả thành Stakeholder Management Plan xoay quanh Key Account Plan — đưa điều phối bên liên quan bên ngoài vào phần Value Delivery.", 0.85, 4.85, 11.7, 1.4, { fontSize: 17, bold: true, color: NAVY });
  notes(s, {
    say: "Phần 3 khép lại. Buổi 9: nhà tài trợ — điểm chạm làm giàu trải nghiệm khách. Buổi 10: nhà cung cấp và địa điểm — điểm chạm ở giai đoạn mua và sau mua. Buổi 11: báo chí và KOL — khuếch đại điểm chạm trước sự kiện. Buổi 12: cả mạng lưới — minh bạch, xử lý xung đột, sự cố. Buổi 13 ráp tất cả thành Stakeholder Management Plan xoay quanh Key Account Plan.",
    gv: "Đề cương 13.2: Value Delivery. Value Planning Framework A–E (Marcos et al., 2018, Ch.3) là khung của Buổi 13.",
    next: "Phiếu cuối giờ.",
  });

  // 27 exit
  s = await L.exitTicket("Trong SMP của nhóm, bên liên quan bên ngoài nào giữ nhiều vai nhất? Điều đó có thể gây xung đột gì với deliverable cam kết cho khách hàng?", "Một câu hỏi phản biện nhóm nhận được hôm nay mà chưa trả lời được. Nhóm sẽ bổ sung gì trước buổi bảo vệ?");
  notes(s, { say: "Phiếu cuối giờ, cá nhân. Một: trong SMP của nhóm, bên liên quan bên ngoài nào giữ nhiều vai nhất — điều đó có thể gây xung đột gì với deliverable cam kết cho khách hàng? Hai: một câu hỏi phản biện nhóm nhận được hôm nay mà chưa trả lời được — nhóm sẽ bổ sung gì trước buổi bảo vệ?", gv: "Xem: (a) nhận ra xung đột do vai chồng chéo, không chỉ “bên kia xấu”; (b) nối với deliverable của Key Account; (c) câu hỏi phản biện cụ thể, kế hoạch bổ sung khả thi.", next: "Buổi sau." });

  // 28 next
  s = await L.nextSession("Không có bài về nhà. Buổi 13: ráp Stakeholder Management Plan", "Buổi 13 · Stakeholder Management Plan", "Phần 3 khép lại. Buổi sau ta ráp nhà tài trợ, nhà cung cấp – địa điểm, báo chí – KOL và cách giữ cả mạng lưới làm việc cho Key Account thành Stakeholder Management Plan xoay quanh Key Account Plan.", ["Toàn bộ trang SMP đã làm (Buổi 7–12)", "Danh sách câu hỏi phản biện hôm nay"]);
  notes(s, { say: "Không có bài về nhà. Buổi 13 ta ráp tất cả thành Stakeholder Management Plan xoay quanh Key Account Plan. Mang theo toàn bộ trang SMP đã làm và danh sách câu hỏi phản biện hôm nay.", gv: "Câu nối theo giáo án. [NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 12 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 29 refs
  s = L.refs([
    [["Coombs, W. T. (2007). Protecting organization reputations during a crisis: The development and application of situational crisis communication theory. "], ["Corporate Reputation Review, 10", 1], ["(3), 163–176."]],
    [["Dyer, J. H., & Singh, H. (1998). The relational view: Cooperative strategy and sources of interorganizational competitive advantage. "], ["Academy of Management Review, 23", 1], ["(4), 660–679."]],
    [["Getz, D., Andersson, T., & Larson, M. (2006). Festival stakeholder roles: Concepts and case studies. "], ["Event Management, 10", 1], ["(2), 103–122."]],
    [["Larson, M., & Wikström, E. (2001). Organizing events: Managing conflict and consensus in a political market square. "], ["Event Management, 7", 1], ["(1), 51–65."]],
    [["Lee, H. L., Padmanabhan, V., & Whang, S. (1997). Information distortion in a supply chain: The bullwhip effect. "], ["Management Science, 43", 1], ["(4), 546–558."]],
    [["Mohr, J., & Spekman, R. (1994). Characteristics of partnership success. "], ["Strategic Management Journal, 15", 1], ["(2), 135–152."]],
    [["Morgan, R. M., & Hunt, S. D. (1994). The commitment-trust theory of relationship marketing. "], ["Journal of Marketing, 58", 1], ["(3), 20–38."]],
    [["Convention Industry Council. (2005). "], ["The APEX event specifications guide template", 1], ["."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 12, theo APA 7.", gv: "Larson (2002) (Y05), báo chí (Y09), slide bộ môn (Y12), Luật Báo chí 2025 (Y13): danh mục đầy đủ trong buoi-12_tu-lieu-tong-hop.md, mục 6 và 8.", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
