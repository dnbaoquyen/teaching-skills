// EVM1110E Buổi 9 — Resource Matching: Investors & Sponsors (Phần 3, buổi 1/4)
// usage: NODE_PATH=<node_modules> node w09.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W09_slides.pptx";
const L = make(FONT, "Bài 9: Ghép nguồn lực — nhà tài trợ và nhà đầu tư");
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
// simple table: header colors per column, rows of strings
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
  let s = L.titleSlide("Bài 9: Ghép nguồn lực — nhà tài trợ và nhà đầu tư", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 9\nResource Matching: Investors & Sponsors\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 9 — Bài 9: Ghép nguồn lực, nhà tài trợ và nhà đầu tư. Hôm nay ta mở Phần 3 của môn: điều phối các bên liên quan để phục vụ hành trình của Key Account. Bên liên quan đầu tiên: nhà tài trợ và nhà đầu tư.", gv: "Mở đầu bằng 2–3 “điều còn mơ hồ” từ phiếu cuối giờ Buổi 8 (≤3 phút). Góc nhìn (quyết định GV 27/9): Nova làm sự kiện CHO An Phát; nhà tài trợ là đối tác của An Phát; case concert chỉ là lớp tham chiếu.", next: "Một tin xấu và hai lời đề nghị." });

  // 2 hook
  s = slide("Ngân sách giảm 10%, hai đối tác muốn “có mặt” — cứu cánh hay rắc rối?");
  box(s, 0.6, 1.95, 7.0, 4.3, TX);
  await ic(s, "FaEnvelopeOpenText", 0.9, 2.2, 1.0, TEAL);
  T(s, "Anh Minh · tháng 6", 2.1, 2.2, 5.3, 1.0, { fontSize: 16, color: MU });
  T(s, "“Ngân sách gala năm nay giảm khoảng 10%, nhưng chất lượng không được giảm. Bảo hiểm Bình An và GlobalCard đều ngỏ ý muốn có mặt ở gala.”", 0.95, 3.35, 6.4, 2.0, { fontSize: 19, color: NAVY, italic: true, valign: "top" });
  T(s, "600 khách là lãnh đạo doanh nghiệp VIP. (giả định)", 0.95, 5.45, 6.4, 0.6, { fontSize: 15, color: PINK, bold: true });
  box(s, 7.9, 1.95, 4.83, 4.3);
  T(s, "Giơ tay: với Nova, hai đối tác này là…", 8.15, 2.1, 4.4, 1.0, { bold: true, fontSize: 17, color: YEL, valign: "top" });
  [["Cứu cánh", TEAL], ["Rắc rối", PINK], ["Cả hai", YEL]].forEach(([t, c], i) => { box(s, 8.2, 3.3 + i * 0.95, 4.23, 0.78, c); T(s, t, 8.4, 3.3 + i * 0.95, 3.8, 0.78, { fontSize: 20, bold: true, color: NAVY }); });
  notes(s, {
    say: "Tháng 6. Anh Minh — Giám đốc Marketing mới của An Phát mà ta gặp ở Buổi 8 — báo Nova: ngân sách gala cuối năm giảm khoảng 10%, nhưng chất lượng không được giảm. Cùng tuần đó, hai đối tác của ngân hàng là Bảo hiểm Bình An và tổ chức thẻ GlobalCard ngỏ ý muốn có mặt ở gala. Giơ tay: với Nova, hai đối tác này là cứu cánh, rắc rối, hay cả hai?",
    gv: "Giáo án S1 (phút 0–5). Ghi số phiếu lên bảng. Chốt: “Cả hai. Nhà tài trợ có thể bù phần ngân sách bị cắt — và nếu làm khéo còn làm sự kiện hay hơn. Làm vụng thì 600 khách VIP thấy mình được mời đến để nghe bán hàng.” Mọi tên, con số là giả định.",
    ask: "“Cứu cánh, rắc rối, hay cả hai?”",
    next: "Hôm nay mở một phần mới của môn.",
  });

  // 3 part 3 map
  s = slide("Phần 3: mỗi bên liên quan được gắn vào hành trình của Key Account");
  circ(s, 5.17, 2.55, 3.0, YEL);
  T(s, "Key Account\nAn Phát\n+ khách của An Phát", 5.17, 2.55, 3.0, 3.0, { align: "center", bold: true, color: NAVY, fontSize: 17 });
  const p3 = [["Buổi 9", "Nhà tài trợ · nhà đầu tư", 0.6, 1.95, TEAL, "FaHandHoldingUsd"], ["Buổi 10", "Nhà cung cấp · địa điểm", 9.0, 1.95, BLUE, "FaTruck"], ["Buổi 11", "Báo chí · KOL", 0.6, 4.6, ORA, "FaBullhorn"], ["Buổi 12", "Cả mạng lưới: tận dụng và xung đột", 9.0, 4.6, PINK, "FaProjectDiagram"]];
  for (const [a, b, x, y, c, icn] of p3) { box(s, x, y, 3.73, 1.65, CARD); await ic(s, icn, x + 0.2, y + 0.3, 1.0, c); T(s, a, x + 1.35, y + 0.15, 2.3, 0.55, { bold: true, fontSize: 18, color: c }); T(s, b, x + 1.35, y + 0.7, 2.3, 0.85, { fontSize: 15, valign: "top" }); }
  box(s, 0.6, 6.4, 12.13, 0.5, CARD);
  T(s, "Buổi 13: gom tất cả vào Kế hoạch quản trị các bên liên quan (SMP).", 0.8, 6.4, 11.7, 0.5, { fontSize: 15, color: YEL, bold: true });
  notes(s, {
    say: "Phần 1 và 2 của môn xoay quanh quan hệ giữa Nova và Key Account. Phần 3 thêm các bên khác — nhưng luôn đặt Key Account và khách của Key Account ở giữa. Buổi 9: nhà tài trợ và nhà đầu tư. Buổi 10: nhà cung cấp và địa điểm. Buổi 11: báo chí và KOL. Buổi 12: cả mạng lưới — tận dụng nó và xử lý xung đột. Buổi 13 gom tất cả vào Kế hoạch quản trị các bên liên quan.",
    gv: "Đề cương PART 3 “Coordinating stakeholders to support the customer journey”, Session 9–12; Buổi 13 SMP.",
    next: "Ba câu hỏi của hôm nay.",
  });

  // 4 three questions
  s = slide("Buổi 9 trả lời ba câu hỏi: nhận ai, đề xuất gì, đặt họ ở đâu");
  const q3 = [["9.1", "Nhận ai?", "Vai trò, lợi ích hữu hình và vô hình của nhà tài trợ, nhà đầu tư", "FaUserCheck", TEAL], ["9.2", "Đề xuất gì?", "Đề xuất tài trợ win-win và cách tính ROI", "FaFileSignature", YEL], ["9.3", "Đặt ở đâu?", "Gắn nhà tài trợ vào điểm chạm để làm giàu trải nghiệm của khách của Key Account", "FaRoute", PINK]];
  for (let i = 0; i < 3; i++) { const [k, a, b, icn, c] = q3[i], x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 4.3); await ic(s, icn, x + 1.4, 2.15, 1.1, c); T(s, k, x + 0.2, 3.35, 3.5, 0.5, { align: "center", fontSize: 16, color: MU }); T(s, a, x + 0.2, 3.8, 3.5, 0.6, { align: "center", bold: true, fontSize: 22, color: c }); T(s, b, x + 0.25, 4.45, 3.4, 1.7, { align: "center", fontSize: 16, valign: "top" }); }
  notes(s, {
    say: "Ba câu hỏi. Mục 9.1 — nhận ai: vai trò và lợi ích của nhà tài trợ, nhà đầu tư. Mục 9.2 — đề xuất gì: thiết kế đề xuất tài trợ win-win và tính ROI. Mục 9.3 — đặt họ ở đâu: gắn nhà tài trợ vào điểm chạm để làm giàu trải nghiệm của khách hàng của Key Account.",
    gv: "Đề cương Session 9: 9.1 Strategic roles, tangible and intangible benefits; 9.2 Designing Win-Win sponsorship proposals and calculating ROI; 9.3 Mapping Sponsors to Touchpoints for the Customer's customer.",
    next: "Tài trợ là gì?",
  });

  // 5 definitions
  s = slide("Tài trợ là mua quyền gắn tên với một sự kiện — và bắt đầu từ mục tiêu của nhà tài trợ");
  defCards(s, [
    ["Meenaghan (1983)", TEAL, "Quản trị tài trợ theo mục tiêu: “objective-setting as the cornerstone of sponsorship management”.", "(U01)"],
    ["Cornwell (2020)", YEL, "“Sponsorship is an investment that gives the sponsor the right of association with a property.” Mua quyền xong mới bắt đầu khai thác.", "(U22, tr. 92)"],
    ["Farrelly & Quester (2005)", BLUE, "Tài trợ lớn vận hành như một liên minh đồng tiếp thị (co-marketing alliance) giữa hai tổ chức, không chỉ là mua bán.", "(U20)"],
  ], "Tổng hợp: nhà tài trợ trả tiền để mua quyền gắn tên — nhằm đạt mục tiêu của mình — qua một quan hệ đối tác.");
  notes(s, {
    say: "Ba định nghĩa. Meenaghan, 1983 — công trình nền tảng: đặt mục tiêu là nền móng của quản trị tài trợ. Cornwell, 2020: tài trợ là một khoản đầu tư cho nhà tài trợ quyền gắn tên mình với một sự kiện, một đội bóng, một chương trình — gọi chung là property, bên được tài trợ. Mua quyền xong mới bắt đầu khai thác. Farrelly và Quester: tài trợ lớn vận hành như một liên minh đồng tiếp thị giữa hai tổ chức. Tổng hợp: nhà tài trợ mua quyền gắn tên, để đạt mục tiêu của họ, qua một quan hệ đối tác.",
    gv: "U01 đọc tóm tắt; U22 Cornwell (2020) tr. 92 nguyên văn; U20 Farrelly & Quester (2005), Business Horizons. Thuật ngữ: property / sponsee = bên được tài trợ.",
    next: "Quan hệ tài trợ đi qua sáu bước.",
  });

  // 6 sponsoring process model
  s = slide("Quan hệ tài trợ đi qua sáu bước — và lặp lại khi hợp đồng kết thúc");
  const pm = [["Quyết định ban đầu", "Độc quyền ngành hàng, quyền lợi, thời hạn, số tiền", TEAL], ["Khán giả mục tiêu", "Khách, nhân viên, đối tác của cả hai bên", BLUE], ["Mục tiêu", "Nhận thức · cảm xúc · hành vi · tài chính", YEL], ["Gắn kết", "Hợp đồng → leveraging → activation", ORA], ["Đo & đánh giá", "Từng hợp đồng và cả danh mục", PINK], ["Quyết định tiếp theo", "Tái ký · không tái ký · chấm dứt sớm", PUR]];
  pm.forEach(([a, b, c], i) => { const x = 0.6 + i * 2.05; box(s, x, 2.1, 1.85, 0.95, c); T(s, a, x + 0.08, 2.1, 1.69, 0.95, { align: "center", bold: true, fontSize: 15, color: i === 5 ? TX : NAVY }); box(s, x, 3.15, 1.85, 1.7); T(s, b, x + 0.1, 3.2, 1.65, 1.6, { align: "center", fontSize: 13.5, valign: "top" }); if (i < 5) arrow(s, x + 1.86, 2.4, 0.18, 0.35, MU); });
  s.addShape(L.pres.shapes.LINE, { x: 1.5, y: 5.15, w: 10.75, h: 0, line: { color: MU, width: 2, dashType: "dash", beginArrowType: "triangle" } });
  T(s, "Kết thúc một quan hệ → hai bên đi tìm đối tác mới (mô hình lặp)", 1.5, 5.2, 10.75, 0.45, { align: "center", fontSize: 14, color: MU, italic: true });
  box(s, 0.6, 5.75, 12.13, 0.6, YEL);
  T(s, "Agency có mặt ở cả sáu bước — thay mặt Key Account.", 0.8, 5.75, 11.7, 0.6, { fontSize: 17, bold: true, color: NAVY });
  src(s, "Nguồn: Cornwell (2020, Hình 2.2, tr. 28–30), theo Cornwell & Kwon (2019). Hình vẽ lại, rút gọn.", 6.45);
  notes(s, {
    say: "Cornwell tóm quan hệ tài trợ thành sáu bước. Một: quyết định ban đầu — gồm có độc quyền ngành hàng hay không, quyền lợi, thời hạn, số tiền. Hai: khán giả mục tiêu — không chỉ khách, mà cả nhân viên và đối tác của hai bên. Ba: mục tiêu — nhận thức, cảm xúc, hành vi hay tài chính. Bốn: gắn kết — gồm những gì ghi trong hợp đồng, rồi leveraging, rồi activation; hai khái niệm này ta học kỹ ở mục 9.2. Năm: đo lường và đánh giá. Sáu: quyết định tiếp theo — tái ký, không tái ký, hay chấm dứt sớm. Và mô hình lặp lại: một quan hệ kết thúc thì cả hai bên đi tìm đối tác mới. Agency có mặt ở cả sáu bước — thay mặt Key Account.",
    gv: "U22: Cornwell (2020, tr. 29–30): “It is important to note that a contractual agreement precedes decisions on leveraging…”. Tr. 29 nêu “agency effects”: người ra quyết định có thể chọn tài trợ vì lợi ích cá nhân (vé, gặp người nổi tiếng) — nối Buổi 3 (DMU), dùng nếu lớp hỏi. “Agency” ở đây là thuật ngữ lý thuyết người đại diện, không phải event agency.",
    next: "Còn nhà đầu tư khác gì?",
  });

  // 7 sponsor vs investor
  s = slide("Nhà tài trợ mua quyền lợi; nhà đầu tư chia sẻ rủi ro và lợi nhuận");
  table(s, 0.6, 1.95, [2.4, 4.86, 4.87], ["", "Nhà tài trợ (sponsor)", "Nhà đầu tư (investor)"], [
    ["Đưa gì", "Tiền, hiện vật, dịch vụ", "Vốn cho sự kiện hoặc cho đơn vị sở hữu sự kiện"],
    ["Nhận gì", "Quyền lợi đã thỏa thuận: hiển thị, kích hoạt, tiếp cận khán giả", "Phần lợi nhuận — hoặc phần lỗ — của sự kiện"],
    ["Rủi ro", "Chủ yếu rủi ro hình ảnh và hiệu quả truyền thông", "Thêm rủi ro tài chính: sự kiện lỗ thì mất vốn"],
    ["Câu hỏi chính", "“Quyền lợi này giúp tôi đạt mục tiêu không?”", "“Sự kiện này có sinh lời không?”"],
  ], { hc: [CARD, TEAL, ORA], rh: 0.78, fs: 15, firstCol: YEL });
  T(s, "Định nghĩa làm việc của môn (quyết định GV) — không phải định nghĩa chuẩn từ một nguồn học thuật.", 0.6, 5.95, 12.13, 0.45, { fontSize: 14, color: MU, italic: true });
  notes(s, {
    say: "Định nghĩa làm việc của môn. Nhà tài trợ đưa tiền, hiện vật, dịch vụ — và nhận quyền lợi đã thỏa thuận: hiển thị, kích hoạt, tiếp cận khán giả. Rủi ro chủ yếu là hình ảnh và hiệu quả truyền thông. Câu hỏi của họ: quyền lợi này giúp tôi đạt mục tiêu không? Nhà đầu tư đưa vốn — và nhận phần lợi nhuận, hoặc phần lỗ. Thêm rủi ro tài chính. Câu hỏi của họ: sự kiện này có sinh lời không?",
    gv: "Lecture notes §1.2. Quyết định GV 3 (27/9/2026). Tư liệu học thuật về “nhà đầu tư trong sự kiện” còn thiếu (mục 5 tư liệu) — nói rõ đây là định nghĩa làm việc.",
    next: "Ranh giới này đang mờ đi.",
  });

  // 8 Techcombank
  s = slide("Techcombank: từ nhà tài trợ kim cương đến “nhà đồng đầu tư”");
  const tl = [["2024", "Nhà tài trợ kim cương “Anh trai vượt ngàn chông gai” và các đêm concert do Yeah1 sản xuất", TEAL], ["2025", "Yeah1: Techcombank đồng hành “không chỉ với vai trò nhà tài trợ, mà trở thành ‘nhà đồng đầu tư’” — không phải đầu tư cổ phần", ORA]];
  tl.forEach(([y, t, c], i) => { const x = 0.6 + i * 6.13; circ(s, x, 2.0, 1.1, c); T(s, y, x, 2.0, 1.1, 1.1, { align: "center", bold: true, color: NAVY, fontSize: 18 }); box(s, x + 1.3, 1.95, 4.6, 2.3); T(s, t, x + 1.5, 2.05, 4.2, 2.1, { fontSize: 16, valign: "top" }); });
  arrow(s, 6.35, 2.35, 0.35, 0.4, MU);
  box(s, 0.6, 4.5, 12.13, 1.5, CARD);
  T(s, [{ text: "Phía bên được tài trợ: ", options: { bold: true, color: YEL } }, { text: "năm 2024 Yeah1 có doanh thu hơn 1.000 tỷ đồng, trong đó 845 tỷ từ quảng cáo và tư vấn truyền thông; lãi sau thuế hơn 126 tỷ, tăng 378%." }], 0.85, 4.5, 11.7, 1.5, { fontSize: 17 });
  src(s, "Nguồn: Znews (20/1/2025), Báo Đầu tư, Tuổi Trẻ (U08); Tuổi Trẻ (23/1/2025) (U11) — đã kiểm chứng chéo. Tuổi Trẻ 3/1/2025 mang tính PR.", 6.45);
  notes(s, {
    say: "Case tham chiếu. Năm 2024, Techcombank là nhà tài trợ kim cương của “Anh trai vượt ngàn chông gai” và các đêm concert do Yeah1 sản xuất. Với các dự án năm 2025, Yeah1 cho biết Techcombank đồng hành không chỉ với vai trò nhà tài trợ mà trở thành “nhà đồng đầu tư” — theo hình thức mới, không phải mua cổ phần. Nhìn sang phía bên được tài trợ: năm 2024 Yeah1 có doanh thu hơn 1.000 tỷ, trong đó 845 tỷ từ quảng cáo và tư vấn truyền thông. Câu hỏi: vì sao một ngân hàng muốn chuyển từ nhà tài trợ sang nhà đồng đầu tư?",
    gv: "Gợi ý: khi sự kiện thành công vượt kỳ vọng, nhà tài trợ chỉ nhận quyền lợi cố định, còn nhà đầu tư nhận thêm phần lợi nhuận — đổi lại chịu rủi ro lỗ. Nhắc góc nhìn: “agency nhìn thấy gì?” → đề xuất tài trợ phải được thiết kế như một sản phẩm, không phải lời xin tiền. Logo thật chỉ dùng khi GV chấp nhận — slide dùng tên chữ.",
    ask: "“Vì sao một ngân hàng muốn chuyển từ nhà tài trợ sang nhà đồng đầu tư?”",
    next: "Một thỏa thuận tốt có lợi cho ai?",
  });

  // 9 four parties
  s = slide("Một thỏa thuận tài trợ tốt có lợi cho bốn bên — không chỉ nhà tài trợ");
  table(s, 0.6, 1.95, [2.75, 4.69, 4.69], ["Bên", "Lợi ích hữu hình", "Lợi ích vô hình"], [
    ["Nhà tài trợ", "Khách tiềm năng, doanh số, mở tài khoản/thẻ, dữ liệu (có đồng ý)", "Nhận biết, thái độ tích cực, liên tưởng hình ảnh"],
    ["Key Account (An Phát)", "Bù ngân sách; thêm nội dung, tiện ích cho khách", "Hình ảnh “hệ sinh thái đối tác”; quan hệ đối tác bền hơn"],
    ["Khách của An Phát", "Quà, dịch vụ, tư vấn hữu ích", "Trải nghiệm tốt hơn, cảm giác được quan tâm"],
    ["Agency (Nova)", "Đủ ngân sách giữ chất lượng; phí dịch vụ kích hoạt", "Vị thế đối tác tạo giá trị (Buổi 5 — CVP)"],
  ], { hc: [YEL, TEAL, BLUE], rh: 0.82, fs: 14.5, firstCol: YEL });
  notes(s, {
    say: "Từ góc agency, một thỏa thuận tốt phải có lợi cho bốn bên. Nhà tài trợ: hữu hình là khách tiềm năng, doanh số, mở tài khoản, dữ liệu — có sự đồng ý của khách; vô hình là nhận biết, thái độ, liên tưởng hình ảnh. An Phát: bù ngân sách, thêm tiện ích cho khách; và hình ảnh một hệ sinh thái đối tác. Khách của An Phát: quà, dịch vụ, tư vấn hữu ích; và trải nghiệm tốt hơn. Nova: đủ ngân sách để giữ chất lượng, có thể thu phí dịch vụ kích hoạt; và vị thế đối tác tạo giá trị — nối Buổi 5, CVP.",
    gv: "Lecture notes §1.3. Hiểu lầm: “nhà tài trợ càng lớn càng tốt” → phải phù hợp với Key Account và khách của Key Account.",
    next: "Lợi ích hữu hình trông thế nào trong thực tế?",
  });

  // 10 behaviour
  s = slide("Ngân hàng tài trợ để đổi lấy hành vi của khách: gửi tiền, mở thẻ, dùng ứng dụng");
  const bh = [["Techcombank", "Vé 0 đồng qua ứng dụng, gắn tính năng sinh lời tự động", "Tỷ lệ CASA ở mức ~40%; số dư sinh lời tự động +35% so với quý trước (VPBankS)", "Đã KCC", TEAL], ["VIB", "Nhà tài trợ kim cương “Anh trai Say Hi”", "Số thẻ tăng kép 44%/năm trong 6 năm (VPBankS)", "Chưa KCC", YEL], ["VPBank", "Nhà tài trợ danh vị tour G-Dragon Hà Nội", "Chủ thẻ VPBank Mastercard được mua vé sớm một ngày", "Nội dung tài trợ", BLUE]];
  bh.forEach(([a, b, c, k, col], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 0.7, col); T(s, a, x + 0.2, 1.95, 3.5, 0.7, { bold: true, fontSize: 19, color: NAVY }); box(s, x, 2.75, 3.9, 3.2); T(s, b, x + 0.2, 2.85, 3.5, 1.0, { fontSize: 15, color: MU, valign: "top" }); T(s, c, x + 0.2, 3.85, 3.5, 1.5, { fontSize: 16, bold: true, valign: "top" }); T(s, k, x + 0.2, 5.4, 3.5, 0.45, { fontSize: 13, italic: true, color: col }); });
  T(s, "Đọc đúng: CASA ở mức 40%, không phải tăng 40% · tăng thẻ 6 năm ≠ do một chương trình.", 0.6, 6.0, 12.13, 0.45, { fontSize: 15, color: PINK, bold: true });
  src(s, "Nguồn: U08 (Báo Đầu tư, Znews), U09 (Báo Đầu tư), U10 (VnExpress — ghi rõ “Nội dung được tài trợ”).", 6.5);
  notes(s, {
    say: "Lợi ích hữu hình mà ngân hàng nhắm tới là hành vi của khách. Techcombank: vé 0 đồng qua ứng dụng, gắn với tính năng sinh lời tự động; công ty chứng khoán VPBankS đánh giá tỷ lệ CASA giữ ở mức khoảng 40%. Đọc đúng: ở mức 40%, không phải tăng 40%. VIB: theo VPBankS, số thẻ tăng kép 44% mỗi năm trong 6 năm — nhưng có thể quy hết cho một chương trình tài trợ không? Không — nối Buổi 8: phải tách tác động. VPBank: chủ thẻ được mua vé sớm một ngày — quyền lợi đổi lấy hành vi mở thẻ.",
    gv: "U09 chưa KCC (một nguồn). U10 là nội dung tài trợ — chỉ dùng để mô tả cơ chế quyền lợi. Nếu trễ giờ: bỏ VIB (giáo án). [NEEDS PROFESSOR INPUT — chỉ trong ghi chú, chưa chiếu: một đề án sinh viên 2025 (U25) có hợp đồng ngân hàng trả tiền theo số tài khoản mở thành công, nghiệm thu 2 đợt — ví dụ B2B nhỏ về quyền lợi gắn hành vi. Chờ GV cho phép.]",
    ask: "“Có thể quy hết mức tăng thẻ 6 năm cho một chương trình tài trợ không?”",
    next: "Ở Việt Nam, vai trò này còn lớn hơn.",
  });

  // 11 role in VN
  s = slide("Ở Việt Nam, nhà tài trợ thường quyết định sự kiện có khả thi hay không");
  const vn = [["≥ 50%", "chi phí liveshow nên do nhà tài trợ gánh — theo một số bầu show", "Nhân Dân, 7/9/2026 (U14) · chưa KCC", TEAL], ["35%", "chuyên gia sự kiện toàn cầu tìm thêm tài trợ trước áp lực chi phí", "Amex GBT 2026 Forecast (U15) · chưa KCC", ORA]];
  vn.forEach(([a, b, r, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.6); T(s, a, x, 2.05, 3.9, 1.3, { fontSize: 50, bold: true, color: c, align: "center" }); T(s, b, x + 0.25, 3.4, 3.4, 1.4, { fontSize: 16, align: "center", valign: "top" }); T(s, r, x + 0.2, 4.85, 3.5, 0.6, { fontSize: 12, color: MU, align: "center" }); });
  box(s, 8.86, 1.95, 3.87, 3.6, YEL);
  T(s, "Nối Buổi 1: nhà tài trợ là bên liên quan chính hay phụ tùy bối cảnh. Khi ngân sách phụ thuộc vào họ, họ trở thành bên chính.", 9.06, 1.95, 3.47, 3.6, { fontSize: 16, bold: true, color: NAVY });
  notes(s, {
    say: "Ở Việt Nam, với nhiều liveshow và concert tầm trung, nhà tài trợ quyết định sự kiện có khả thi hay không. Theo một số bầu show trên báo Nhân Dân, chỉ nên làm khi nhà tài trợ gánh ít nhất 50% chi phí. Trên thế giới, trước áp lực chi phí, 35% chuyên gia sự kiện tìm thêm tài trợ. Nối Buổi 1: nhà tài trợ là bên liên quan chính hay phụ tùy bối cảnh — khi ngân sách phụ thuộc vào họ, họ trở thành bên chính.",
    gv: "Hai con số chưa KCC — nói rõ. Gala An Phát không bán vé, nên tài trợ chỉ bù ngân sách; nhưng vẫn phải giữ An Phát là bên chính.",
    next: "Quan hệ tài trợ thành công cần gì?",
  });

  // 12 partnership success
  s = slide("Hai bên có mục tiêu khác nhau; quan hệ bền khi có niềm tin, cam kết và mục tiêu hội tụ");
  box(s, 0.6, 1.95, 3.9, 3.0, TEAL); T(s, "Bên được tài trợ muốn", 0.8, 2.0, 3.5, 0.5, { bold: true, fontSize: 16, color: NAVY });
  T(s, bullets(["Tiền, hiện vật cho hoạt động", "Nhận biết, bán vé, bán hàng", "Độ phủ truyền thông"]), 0.8, 2.55, 3.5, 2.3, { fontSize: 15, color: NAVY, valign: "top", paraSpaceAfter: 4 });
  box(s, 8.83, 1.95, 3.9, 3.0, ORA); T(s, "Nhà tài trợ muốn", 9.03, 2.0, 3.5, 0.5, { bold: true, fontSize: 16, color: NAVY });
  T(s, bullets(["Nhận biết, hình ảnh, doanh số", "Quan hệ với khách hàng, đối tác", "Gắn kết nhân viên"]), 9.03, 2.55, 3.5, 2.3, { fontSize: 15, color: NAVY, valign: "top", paraSpaceAfter: 4 });
  const ps = [["Niềm tin", TEAL], ["Cam kết", YEL], ["Tương thích chiến lược", BLUE], ["Hội tụ mục tiêu", ORA], ["Hài lòng", PINK]];
  ps.forEach(([t, c], i) => { box(s, 4.75, 1.95 + i * 0.6, 3.83, 0.52, c); T(s, t, 4.85, 1.95 + i * 0.6, 3.63, 0.52, { align: "center", bold: true, fontSize: 15, color: NAVY }); });
  box(s, 0.6, 5.15, 12.13, 1.1, CARD);
  T(s, "Farrelly & Quester (2005): cam kết của nhà tài trợ — đo bằng tiền chi thêm cho kích hoạt — dẫn tới hài lòng về kinh tế; nhà tài trợ thấy nỗ lực của mình không được đáp lại thì kém hài lòng.", 0.85, 5.15, 11.7, 1.1, { fontSize: 15 });
  src(s, "Nguồn: Cornwell (2020, Hình 3.3, tr. 46–47) (U22); Farrelly & Quester (2005), Industrial Marketing Management (U19).", 6.45);
  notes(s, {
    say: "Hai bên có mục tiêu khác nhau. Bên được tài trợ muốn tiền, bán vé, độ phủ truyền thông. Nhà tài trợ muốn nhận biết, hình ảnh, doanh số, quan hệ với khách và đối tác, cả gắn kết nhân viên. Cornwell tổng hợp năm đặc điểm của quan hệ thành công: niềm tin, cam kết, tương thích chiến lược, hội tụ mục tiêu, và hài lòng. Nghiên cứu của Farrelly và Quester với nhà tài trợ giải bóng bầu dục Úc: cam kết của nhà tài trợ — đo bằng tiền chi thêm cho kích hoạt — dẫn tới hài lòng về kinh tế; và nếu nhà tài trợ thấy nỗ lực của mình không được bên kia đáp lại, họ kém hài lòng. Nghe quen không? Đây là niềm tin – cam kết của Morgan và Hunt ở Buổi 4.",
    gv: "Nối Buổi 4 (Morgan & Hunt 1994). U19: nhà tài trợ “protected” của AFL. Với gala An Phát: “bên được tài trợ” là An Phát (chủ sự kiện) — Nova thay mặt An Phát đáp lại cam kết của nhà tài trợ.",
    next: "Mặt trái: hình ảnh đi theo hai chiều.",
  });

  // 13 image transfer
  s = slide("Tài trợ là chuyển giao hình ảnh hai chiều — liên đới sai có thể làm sự kiện sụp");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaExclamationTriangle", 0.85, 2.15, 0.9, PINK);
  T(s, "Happy Day Concert, Đà Lạt, 3/2025", 1.95, 2.15, 5.8, 0.9, { bold: true, fontSize: 19, color: PINK });
  T(s, bullets(["Thương hiệu đơn vị tổ chức bị các trang cờ bạc cắt ghép để quảng cáo", "Nhiều nghệ sĩ rút lui sát giờ diễn", "Hai đêm diễn bị dừng; dời lịch với sự chấp thuận của Sở VHTTDL Lâm Đồng"]), 0.9, 3.2, 6.8, 2.9, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  box(s, 8.15, 1.95, 4.58, 4.3, YEL);
  T(s, "Thương hiệu bị giả mạo liên đới — không phải nhà tài trợ cờ bạc thật. Vậy mà sự kiện vẫn sụp.\n\nVới agency: thẩm định nhà tài trợ và theo dõi thương hiệu trên mạng là một phần của quản trị quan hệ.", 8.35, 2.05, 4.18, 4.1, { fontSize: 16, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Tuổi Trẻ (7/3/2025); Công an Nhân dân (7/3/2025) (U12) — đã kiểm chứng chéo.", 6.45);
  notes(s, {
    say: "Mặt trái. Tháng 3/2025, Happy Day Concert ở Đà Lạt: thương hiệu của đơn vị tổ chức bị các trang cờ bạc cắt ghép để quảng cáo. Nhiều nghệ sĩ rút lui sát giờ; hai đêm diễn bị dừng, sau đó dời lịch với sự chấp thuận của Sở Văn hóa Thể thao và Du lịch Lâm Đồng. Lưu ý: đây là thương hiệu bị giả mạo liên đới, không phải nhà tài trợ cờ bạc thật. Vậy mà sự kiện vẫn sụp. Với agency: thẩm định nhà tài trợ và theo dõi thương hiệu trên mạng là một phần của quản trị quan hệ.",
    gv: "U12. Nối Thực hành 1: ứng viên Nhanh Tiền (từng bị báo chí phản ánh về cách đòi nợ). Xử lý khủng hoảng chi tiết để Buổi 12.",
    next: "Và một điểm pháp lý mới.",
  });

  // 14 legal
  s = slide("Luật Quảng cáo 2025: đơn vị tổ chức chương trình cũng là “người phát hành quảng cáo”");
  const lg = [["Điều 2 khoản 7", "“Người phát hành quảng cáo … bao gồm cơ quan báo chí, nhà xuất bản, chủ trang thông tin điện tử, người tổ chức chương trình văn hóa, thể thao …”", TEAL], ["Điều 6", "“Việc hợp tác giữa các chủ thể trong hoạt động quảng cáo phải thông qua hợp đồng quảng cáo theo quy định của pháp luật.”", YEL], ["Điều 23 khoản 2 điểm đ", "Bài đăng mạng xã hội phải có dấu hiệu phân biệt nội dung “quảng cáo hoặc được tài trợ”.", ORA]];
  lg.forEach(([a, b, c], i) => { const y = 1.95 + i * 1.18; box(s, 0.6, y, 2.9, 1.02, c); T(s, a, 0.75, y, 2.6, 1.02, { bold: true, fontSize: 15, color: NAVY }); box(s, 3.65, y, 9.08, 1.02); T(s, b, 3.85, y, 8.7, 1.02, { fontSize: 15, italic: i < 2 }); });
  box(s, 0.6, 5.55, 12.13, 0.75, PINK);
  T(s, "Logo, clip nhà tài trợ trên màn LED gala → cần hợp đồng và kiểm duyệt nội dung. Chỉ nhận diện rủi ro — hỏi pháp chế.", 0.8, 5.55, 11.7, 0.75, { fontSize: 15, bold: true, color: NAVY });
  src(s, "Nguồn: Luật số 75/2025/QH15 sửa đổi Luật Quảng cáo (thông qua 16/6/2025, hiệu lực 1/1/2026) (U23). [VERIFY: pháp chế]", 6.45);
  notes(s, {
    say: "Một điểm pháp lý mới. Luật Quảng cáo sửa đổi năm 2025, có hiệu lực từ 1/1/2026. Điều 2 khoản 7 định nghĩa người phát hành quảng cáo — trong đó có người tổ chức chương trình văn hóa, thể thao. Điều 6: hợp tác trong hoạt động quảng cáo phải thông qua hợp đồng quảng cáo. Điều 23: bài đăng mạng xã hội phải phân biệt nội dung quảng cáo hoặc được tài trợ. Vậy khi logo, clip của nhà tài trợ chạy trên màn LED gala, An Phát hoặc Nova có thể đang ở vai người phát hành quảng cáo — cần hợp đồng và kiểm duyệt nội dung. Ta chỉ nhận diện rủi ro; chi tiết hỏi pháp chế.",
    gv: "Đã đối chiếu nguyên văn Luật 75/2025/QH15 (4/10/2026). Việc áp vai “người phát hành quảng cáo” cho gala hội nghị khách hàng là NHẬN ĐỊNH — [VERIFY: pháp chế; nghị định hướng dẫn]. Luật 75 cũng bãi bỏ Mục 2 Chương IV Luật Thương mại 2005 (quảng cáo thương mại). Phạm vi: chỉ nhận diện rủi ro cho Key Account.",
    next: "Vậy agency đứng ở đâu?",
  });

  // 15 agency position
  s = slide("Agency không xin tài trợ cho mình — agency biến đối tác của Key Account thành giá trị cho khách");
  box(s, 4.67, 1.85, 4.0, 1.1, YEL); T(s, "KEY ACCOUNT · An Phát", 4.67, 1.85, 4.0, 1.1, { align: "center", bold: true, fontSize: 18, color: NAVY });
  box(s, 0.6, 3.6, 3.6, 1.3, ORA); T(s, "NHÀ TÀI TRỢ\nBình An · GlobalCard", 0.6, 3.6, 3.6, 1.3, { align: "center", bold: true, fontSize: 16, color: NAVY });
  box(s, 9.13, 3.6, 3.6, 1.3, BLUE); T(s, "KHÁCH CỦA AN PHÁT\n600 lãnh đạo doanh nghiệp", 9.13, 3.6, 3.6, 1.3, { align: "center", bold: true, fontSize: 16, color: NAVY });
  box(s, 4.67, 5.05, 4.0, 1.25, TEAL); T(s, "AGENCY · Nova\nthiết kế quyền lợi, kích hoạt, đo lường — thay mặt An Phát", 4.77, 5.05, 3.8, 1.25, { align: "center", bold: true, fontSize: 14, color: NAVY });
  const ln = (x, y, w, h, o = {}) => s.addShape(L.pres.shapes.LINE, { x, y, w, h, line: { color: MU, width: 2, endArrowType: "triangle", ...o }, ...(o.flipV ? { flipV: true } : {}) });
  s.addShape(L.pres.shapes.LINE, { x: 2.4, y: 2.4, w: 2.27, h: 1.2, flipV: true, line: { color: MU, width: 2 } });
  T(s, "đối tác của", 1.6, 2.45, 2.0, 0.45, { fontSize: 13, color: MU, italic: true });
  s.addShape(L.pres.shapes.LINE, { x: 8.67, y: 2.4, w: 2.26, h: 1.2, line: { color: MU, width: 2 } });
  T(s, "khách hàng của", 9.7, 2.45, 2.3, 0.45, { fontSize: 13, color: MU, italic: true });
  ln(4.2, 4.25, 0.9, 0.8);
  s.addShape(L.pres.shapes.LINE, { x: 8.67, y: 4.6, w: 1.2, h: 0.95, flipV: true, line: { color: TEAL, width: 3, endArrowType: "triangle" } });
  T(s, "trải nghiệm tại điểm chạm", 9.7, 5.2, 3.0, 0.45, { fontSize: 13, color: TEAL, bold: true });
  notes(s, {
    say: "Góc nhìn của môn. Nhà tài trợ là đối tác của An Phát. Khách — 600 lãnh đạo doanh nghiệp — là khách hàng của An Phát. Nova ở giữa: thiết kế quyền lợi, kích hoạt và đo lường — thay mặt An Phát — sao cho mỗi lần nhà tài trợ xuất hiện, khách của An Phát được thêm một điều gì đó. Nova không xin tài trợ cho mình. Nova giúp An Phát biến quan hệ đối tác của An Phát thành giá trị cho khách của An Phát.",
    gv: "Lecture notes §1.6. Alt-text: sơ đồ bốn khối — Key Account ở trên, nhà tài trợ bên trái, khách của Key Account bên phải, agency ở dưới nối nhà tài trợ với khách qua điểm chạm. Hiểu lầm: “nhà tài trợ = người cho tiền để in logo”.",
    next: "Trước khi nhận, phải đánh giá.",
  });

  // 16 100-point
  s = slide("Đánh giá một nhà tài trợ tiềm năng trên 100 điểm — giá trị trùng nhau nặng nhất");
  const sc = [["Chuẩn bị", 10, "Đã hiểu tổ chức, người quyết định, quy trình xét tài trợ của họ?", TEAL], ["Quan hệ", 10, "Đã từng hợp tác? Liên lạc thẳng thắn, tin cậy?", TEAL], ["Giá trị trùng nhau", 30, "Giá trị hai bên giống nhau? Xung đột giá trị → 0 điểm", PINK], ["Khán giả", 20, "Khách của sự kiện trùng khách mục tiêu của nhà tài trợ?", BLUE], ["Mục tiêu", 20, "Mục tiêu của họ đạt được ở sự kiện này mà không hại hình ảnh mình?", BLUE], ["Cộng hưởng", 10, "Có tạo giá trị với các đối tác khác của sự kiện?", BLUE]];
  sc.forEach(([a, p, d, c], i) => { const y = 1.95 + i * 0.68; box(s, 0.6, y, 2.8, 0.58, c); T(s, a, 0.75, y, 2.0, 0.58, { bold: true, fontSize: 15, color: NAVY }); T(s, String(p), 2.65, y, 0.7, 0.58, { bold: true, fontSize: 17, color: NAVY, align: "right" }); box(s, 3.55, y, 9.18, 0.58); T(s, d, 3.75, y, 8.8, 0.58, { fontSize: 14.5 }); });
  T(s, "Nền tảng (10 + 10 + 30) · Mức liên quan (20 + 20 + 10) · > 50 điểm: có khả năng hợp tác thành công", 0.6, 6.05, 12.13, 0.4, { fontSize: 14, color: YEL, bold: true });
  src(s, "Nguồn: Cornwell (2020, Bảng 3.1, tr. 38–40) (U22) — vốn viết cho bên đi tìm tài trợ; Nova dùng thay mặt An Phát (nhận định).", 6.5);
  notes(s, {
    say: "Trước khi nhận, phải đánh giá. Cornwell đề xuất hệ thống 100 điểm. Phần nền tảng: chuẩn bị — 10 điểm, ta đã hiểu tổ chức và người quyết định của họ chưa; quan hệ — 10 điểm; và giá trị trùng nhau — 30 điểm, nặng nhất. Nếu giá trị hai bên xung đột: không điểm. Phần mức liên quan: khán giả — 20, mục tiêu — 20, cộng hưởng với các đối tác khác — 10. Trên 50 điểm thì có khả năng hợp tác thành công. Cornwell nhấn mạnh: giá trị của bảng là quá trình suy nghĩ, không chỉ con số cuối cùng.",
    gv: "U22 tr. 40: “The value of assessing the potential of a sponsor prospect is as much the process of thinking about the aspects as it is arriving at a number.” Phiếu Thực hành 1 dùng thang 1–5 cho 3 tiêu chí (phù hợp An Phát, phù hợp khách, rủi ro) — bảng này là thấu kính bổ sung, không bắt buộc. Nhanh Tiền: “giá trị trùng nhau” gần 0.",
    next: "Thực hành 1.",
  });

  // 17 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: chọn nhà tài trợ cho gala của An Phát", [["8’", "Chấm 1–5 cho 5 ứng viên: phù hợp với An Phát · phù hợp với khách của An Phát · rủi ro", TEAL], ["7’", "Chọn 2 ứng viên; mỗi ứng viên ghi 1 lợi ích hữu hình + 1 vô hình cho 4 bên", YEL], ["5’", "Nhanh Tiền đề nghị “góp vốn, chia lợi nhuận” — hợp lý không? Viết 1 câu từ chối gửi anh Minh", PINK]], "FaBalanceScale", "Sản phẩm", "Bảng chấm trên A3 + 2 nhà tài trợ mang sang Thực hành 2", "Chọn theo phù hợp và rủi ro — không theo số tiền.");
  notes(s, {
    say: "Thực hành 1, 20 phút. Các bạn là Nova. Anh Minh gửi 5 bên muốn tài trợ gala, tổng cộng hơn 2 tỷ — gấp 10 lần phần ngân sách bị cắt. Nhưng anh Minh không cần nhiều tiền nhất; anh cần gala tốt nhất cho 600 khách VIP. Tám phút: chấm 1 đến 5 cho từng ứng viên — phù hợp với An Phát, phù hợp với khách của An Phát, và rủi ro. Bảy phút: chọn 2 ứng viên, ghi lợi ích hữu hình và vô hình cho bốn bên. Năm phút: đề nghị góp vốn, chia lợi nhuận của Nhanh Tiền có hợp lý không — và viết một câu từ chối gửi anh Minh.",
    gv: "Phiếu W09_activity_S3_chon_nha_tai_tro.md (5 ứng viên: Bình An 400tr, GlobalCard 300tr, Xe điện Sao Việt 500tr, Sổ Xanh 80tr, Nhanh Tiền 800tr). Mốc phút 30–50. Chốt 3 ý: (1) chọn theo phù hợp và rủi ro; (2) với đối tác lâu năm của Key Account, thường là thiết kế lại quyền lợi, không phải nhận/từ chối; (3) nhà đầu tư chỉ có nghĩa khi sự kiện có doanh thu, lợi nhuận để chia — gala không bán vé.",
    next: "Giải lao.",
  });

  // 18 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 50–58.", next: "Sau giải lao: Bình An hỏi một câu." });

  // 19 question
  s = await L.question("Bình An hỏi Nova một câu", "“Gói 400 triệu của các bạn mang lại gì cho tôi?”", "FaQuestion", ORA, "Nếu Nova chỉ trả lời “logo trên backdrop và 2 phút phát biểu”, Bình An sẽ trả giá 100 triệu.");
  notes(s, {
    say: "Bình An hỏi Nova: gói 400 triệu của các bạn mang lại gì cho tôi? Nếu Nova chỉ trả lời: logo trên backdrop và 2 phút phát biểu — Bình An sẽ trả giá 100 triệu. Mục 9.2: viết một đề xuất mà Bình An thấy đáng tiền, An Phát thấy an toàn, và khách thấy có ích.",
    gv: "Lecture notes §2 mở đoạn.",
    next: "Đề xuất bắt đầu từ đâu?",
  });

  // 20 proposal 7 parts
  s = slide("Đề xuất tài trợ win-win có bảy phần — bắt đầu từ mục tiêu của nhà tài trợ");
  const pp = [["Mục tiêu của nhà tài trợ", "Họ muốn gì: nhận biết, thái độ, khách tiềm năng, doanh số, quan hệ", TEAL], ["Khán giả", "Khách của Key Account: bao nhiêu, là ai, vì sao có giá trị với nhà tài trợ", TEAL], ["Gói quyền lợi", "Theo hạng; gắn với điểm chạm trên hành trình", YEL], ["Kế hoạch kích hoạt", "Nhà tài trợ làm gì ở điểm chạm; ngân sách ngoài phí quyền", YEL], ["Cam kết đo lường", "ROO + ROI; ai cấp dữ liệu; báo cáo khi nào", ORA], ["Điều khoản", "Quyền, nghĩa vụ, độc quyền, rủi ro; đo lường ghi vào hợp đồng", ORA], ["Giá", "Phí quyền + phần kích hoạt nhà tài trợ tự chi", PINK]];
  pp.forEach(([a, b, c], i) => { const y = 1.9 + i * 0.6; num(s, i + 1, 0.6, y + 0.03, 0.48, c, 15); box(s, 1.2, y, 3.6, 0.52); T(s, a, 1.35, y, 3.4, 0.52, { fontSize: 15, bold: true }); box(s, 4.95, y, 7.78, 0.52); T(s, b, 5.1, y, 7.5, 0.52, { fontSize: 14.5 }); });
  src(s, "Nguồn: Cornwell (2020, tr. 37–38) — các thành phần đề xuất (U22); U01, U04–U07. Gộp thành 7 phần là quyết định của người soạn.", 6.25);
  T(s, "Hồ sơ xin tài trợ mô tả sự kiện của mình; đề xuất win-win mô tả mục tiêu của nhà tài trợ.", 0.6, 6.6, 12.13, 0.4, { fontSize: 14, color: YEL, bold: true });
  notes(s, {
    say: "Đề xuất win-win có bảy phần. Một: mục tiêu của nhà tài trợ. Hai: khán giả — khách của Key Account là ai, vì sao có giá trị với nhà tài trợ. Ba: gói quyền lợi theo hạng, gắn với điểm chạm. Bốn: kế hoạch kích hoạt — nhà tài trợ làm gì ở điểm chạm, với ngân sách riêng ngoài phí quyền. Năm: cam kết đo lường — ROO và ROI, ai cấp dữ liệu, báo cáo khi nào. Sáu: điều khoản — quyền, nghĩa vụ, độc quyền ngành hàng, rủi ro, và kỳ vọng đo lường ghi vào hợp đồng. Bảy: giá. Các bạn đã học “hồ sơ xin tài trợ” ở môn trước: hồ sơ đó mô tả sự kiện của mình. Đề xuất win-win bắt đầu từ mục tiêu của nhà tài trợ.",
    gv: "Cornwell (2020, tr. 37) liệt kê: mở đầu thu hút; lý do nhà tài trợ nên tham gia — phản ánh mục tiêu của nhà tài trợ; tổng quan sự kiện theo những gì nhà tài trợ quan tâm; kinh nghiệm hợp tác; điều khoản (quyền lợi, thời hạn, phí, tiền/hiện vật, độc quyền, rủi ro, bảo hiểm); kỳ vọng nhà tài trợ đóng góp; đo lường; liên hệ và lời kêu gọi hành động. Nay cấu trúc 7 phần có nguồn đối chiếu (trước ghi “người soạn tự dựng”). Slide bộ môn (U24) có 7 thành phần hồ sơ xin tài trợ — dùng để so sánh.",
    next: "Gói chuẩn hay may đo?",
  });

  // 21 standard vs tailored
  s = slide("Gói đồng – bạc – vàng giúp bù chi phí; đề xuất may đo mới tối đa giá trị");
  const tv = [["Gói chuẩn", "Bên nhỏ: mọi nhà tài trợ nhận cùng danh sách quyền lợi theo hạng", "Tư duy “bù chi phí” · dễ làm · hạn chế sáng tạo", PINK, "FaThList"], ["Đề xuất may đo", "Bên lớn: thiết kế theo nhu cầu từng nhà tài trợ, rồi thương lượng", "Tư duy “tối đa giá trị” · tốn công · hợp với đối tác lâu năm", TEAL, "FaPencilRuler"]];
  for (let i = 0; i < 2; i++) { const [a, b, c, col, icn] = tv[i], x = 0.6 + i * 6.13; box(s, x, 1.95, 5.9, 3.3); await ic(s, icn, x + 0.3, 2.15, 1.0, col); T(s, a, x + 1.5, 2.15, 4.2, 1.0, { bold: true, fontSize: 21, color: col }); T(s, b, x + 0.3, 3.3, 5.3, 1.0, { fontSize: 16, valign: "top" }); T(s, c, x + 0.3, 4.35, 5.3, 0.8, { fontSize: 15, color: MU, valign: "top" }); }
  box(s, 0.6, 5.45, 12.13, 0.85, YEL);
  T(s, "Bình An là đối tác lâu năm của An Phát → may đo. Câu hỏi đúng: “Bình An mang lại giá trị gì cho khách của An Phát?”", 0.8, 5.45, 11.7, 0.85, { fontSize: 16, bold: true, color: NAVY });
  src(s, "Nguồn: Cornwell (2020, tr. 36–37) (U22).", 6.45);
  notes(s, {
    say: "Cornwell phân biệt hai cách. Bên được tài trợ nhỏ thường dùng gói chuẩn — đồng, bạc, vàng: mọi nhà tài trợ nhận cùng danh sách quyền lợi. Dễ làm, nhưng là tư duy bù chi phí, và hạn chế sáng tạo. Bên lớn may đo theo nhu cầu từng nhà tài trợ rồi thương lượng — tư duy tối đa giá trị. Bình An là đối tác lâu năm của An Phát, nên Nova nên may đo. Và câu hỏi Cornwell khuyên mọi bên tự hỏi: nhà tài trợ này mang lại giá trị gì cho chúng ta — với An Phát là: cho khách của An Phát.",
    gv: "U22 tr. 36: “Small properties tend to orient to covering costs, while large properties focus more on maximizing value.” và câu hỏi “What value will this sponsor bring to us?”.",
    next: "Điều gì làm giá tài trợ cao hơn?",
  });

  // 22 price drivers
  s = slide("Giá tài trợ tăng theo những gì nhà tài trợ dùng được trước sự kiện — logo chỉ là mặc định");
  const pd = [["Đẩy giá chào", ["Độ phủ truyền thông", "Lượng người tham dự", "Quyền tiếp cận tài sản của sự kiện: hình ảnh, người nổi tiếng, dữ liệu khách — dùng được trước sự kiện"], TEAL], ["Mặc định, không đẩy giá", ["Logo, biển hiệu tại chỗ", "Khu tiếp khách, phát tài liệu", "Logo ở “tâm điểm”, đồng phục"], MU], ["Quyết định giá chốt", ["Mức phù hợp với nhà tài trợ", "Khả năng may đo kích hoạt", "Sẵn sàng đo lường, năng lực quản lý"], YEL]];
  pd.forEach(([a, items, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 0.7, c); T(s, a, x + 0.2, 1.95, 3.5, 0.7, { bold: true, fontSize: 17, color: NAVY }); box(s, x, 2.75, 3.9, 3.0); T(s, bullets(items), x + 0.2, 2.85, 3.5, 2.8, { fontSize: 15, valign: "top", paraSpaceAfter: 6 }); });
  box(s, 0.6, 5.9, 12.13, 0.5, CARD);
  T(s, "Gala An Phát: dữ liệu khách chỉ có khi khách đồng ý — Nova không bán danh sách khách.", 0.8, 5.9, 11.7, 0.5, { fontSize: 15, bold: true, color: PINK });
  src(s, "Nguồn: Cornwell (2020, Hình 3.1, tr. 40–41), theo Wishart et al. (2012) — 300 đề xuất tài trợ nhỏ và vừa (U22).", 6.5);
  notes(s, {
    say: "Điều gì làm giá tài trợ cao hơn? Nghiên cứu 300 đề xuất tài trợ nhỏ và vừa, được Cornwell dẫn: độ phủ truyền thông và lượng người tham dự đẩy giá chào. Và một yếu tố thú vị: quyền tiếp cận tài sản của sự kiện — hình ảnh, người nổi tiếng, dữ liệu khách — vì nhà tài trợ dùng được trước sự kiện. Còn logo, biển hiệu tại chỗ là mặc định phải có, không đẩy giá. Giá chốt thì phụ thuộc mức phù hợp, khả năng may đo kích hoạt, và sẵn sàng đo lường. Với gala An Phát: dữ liệu khách chỉ có khi khách đồng ý — Nova không bán danh sách khách của An Phát.",
    gv: "U22 tr. 40: “True on-site elements that are confined to the event did not drive price but were rather expected or basic essentials.” Nghiên cứu chỉ xét giá chào trong đề xuất công khai. Dữ liệu cá nhân: [VERIFY: văn bản hiện hành về bảo vệ dữ liệu cá nhân — lecture notes §3.3]. Nếu trễ giờ có thể lướt nhanh slide này.",
    next: "Mua quyền xong — rồi sao?",
  });

  // 23 win-win circles
  s = slide("Win-win là khi nhà tài trợ, Key Account và khách đều được lợi — agency giữ cân bằng");
  circ(s, 3.6, 1.85, 3.3, TEAL); circ(s, 6.0, 1.85, 3.3, YEL); circ(s, 4.8, 3.5, 3.3, BLUE);
  T(s, "Nhà tài trợ\nđạt mục tiêu", 3.7, 2.2, 2.0, 1.1, { fontSize: 15, bold: true, color: NAVY, align: "center" });
  T(s, "An Phát\ngiữ hình ảnh, bù ngân sách", 7.25, 2.2, 1.95, 1.2, { fontSize: 14, bold: true, color: NAVY, align: "center" });
  T(s, "Khách\nthấy có ích", 5.45, 5.45, 2.0, 0.9, { fontSize: 15, bold: true, color: NAVY, align: "center" });
  circ(s, 5.92, 3.55, 1.05, PINK); T(s, "Nova", 5.92, 3.55, 1.05, 1.05, { align: "center", bold: true, fontSize: 14, color: NAVY });
  box(s, 9.6, 1.95, 3.13, 4.3);
  T(s, "Thiếu một vòng:\n\n• Thiếu khách → khách thấy bị bán hàng\n• Thiếu An Phát → rủi ro uy tín cho ngân hàng\n• Thiếu nhà tài trợ → không tái ký", 9.8, 2.05, 2.8, 4.1, { fontSize: 15, valign: "top" });
  notes(s, {
    say: "Win-win ở đây là ba vòng: nhà tài trợ đạt mục tiêu; An Phát giữ hình ảnh và bù được ngân sách; khách thấy có ích. Nova đứng ở giao điểm và giữ cân bằng. Thiếu một vòng là hỏng: thiếu khách — khách thấy mình bị mời đến để nghe bán hàng; thiếu An Phát — rủi ro uy tín rơi vào ngân hàng; thiếu nhà tài trợ — năm sau không tái ký.",
    gv: "Alt-text: ba vòng tròn giao nhau (nhà tài trợ, An Phát, khách); vòng nhỏ “Nova” ở giữa. Nối U20 (hội tụ mục tiêu).",
    next: "Phần hay bị quên nhất: kích hoạt.",
  });

  // 24 leverage vs activation
  s = slide("Leveraging là mọi chi tiêu đi kèm; activation là phần làm khách tương tác với nhà tài trợ");
  box(s, 0.6, 1.95, 7.6, 4.3, CARD);
  T(s, "LEVERAGING — mọi hoạt động truyền thông đi kèm để khai thác quan hệ tài trợ", 0.85, 2.05, 7.1, 0.9, { bold: true, fontSize: 16, color: BLUE, valign: "top" });
  box(s, 0.85, 3.0, 3.4, 3.0, MU); T(s, "Không kích hoạt\n(tiếp nhận thụ động)\n\nbiển hiệu · xướng tên · quảng cáo chạy song song", 0.95, 3.0, 3.2, 3.0, { fontSize: 14.5, color: NAVY, align: "center" });
  box(s, 4.45, 3.0, 3.5, 3.0, TEAL); T(s, "ACTIVATION\n(khách tham gia, tương tác)\n\nminigame · trải nghiệm · tư vấn theo lịch hẹn", 4.55, 3.0, 3.3, 3.0, { fontSize: 14.5, color: NAVY, bold: true, align: "center" });
  box(s, 8.45, 1.95, 4.28, 4.3, YEL);
  T(s, "Case O2 (Anh): mỗi chương trình gắn tài trợ làm giảm tỷ lệ khách rời bỏ 10–19%; khách tham gia nhiều chương trình: giảm 18–28%.\n\n→ Đo riêng từng hoạt động mới biết cái nào đáng tiền.", 8.65, 2.05, 3.88, 4.1, { fontSize: 15, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Cornwell (2020, tr. 92–94) (U22), dẫn Weeks et al. (2008) và Cahill & Meenaghan (2013).", 6.45);
  notes(s, {
    say: "Cornwell phân biệt hai khái niệm hay bị dùng lẫn. Leveraging: mọi hoạt động truyền thông đi kèm để khai thác quan hệ tài trợ — quảng cáo, khuyến mãi, PR, mạng xã hội, tiếp khách. Activation là một phần của leveraging: những hoạt động làm khán giả tham gia, tương tác với nhà tài trợ. Biển hiệu, xướng tên chỉ được tiếp nhận thụ động — không phải activation. Vì sao phân biệt? Để đo riêng. Case O2 ở Anh: mỗi chương trình gắn với tài trợ làm giảm tỷ lệ khách rời bỏ 10 đến 19%; khách tham gia nhiều chương trình thì giảm 18 đến 28%. Đo riêng từng hoạt động mới biết cái nào đáng tiền.",
    gv: "U22 tr. 93, định nghĩa activation: “communications that promote the engagement, involvement, or participation of the sponsorship audience with the sponsor” (Weeks et al., 2008). Lecture notes §2.2 dùng “activation” theo nghĩa rộng (= leveraging) — khi giảng, nói rõ hai nghĩa.",
    next: "Chi bao nhiêu cho kích hoạt?",
  });

  // 25 activation ratio
  s = slide("Không có tỷ lệ kích hoạt lý tưởng — nhưng không kích hoạt thì quyền lợi bị bỏ phí");
  const ar = [["1:1 – 8:1", "tỷ lệ chi kích hoạt / phí quyền được khuyến nghị trong các nghiên cứu trước", "O’Reilly & Lafrance Horning (2013) (U04)", TEAL], ["0,81:1", "tỷ lệ trung bình toàn cầu thực tế; 43% không biết mình chi bao nhiêu; 18% đạt 1:1", "WFA – Lumency (U05) · chưa KCC", PINK]];
  ar.forEach(([a, b, r, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.4); T(s, a, x, 2.05, 3.9, 1.2, { fontSize: 42, bold: true, color: c, align: "center" }); T(s, b, x + 0.25, 3.25, 3.4, 1.4, { fontSize: 15, align: "center", valign: "top" }); T(s, r, x + 0.2, 4.7, 3.5, 0.55, { fontSize: 12, color: MU, align: "center" }); });
  box(s, 8.86, 1.95, 3.87, 3.4, YEL);
  T(s, "“There is no ideal leveraging ratio, but there is a need to leverage.”\n— Cornwell (2020, tr. 108)", 9.06, 1.95, 3.47, 3.4, { fontSize: 17, bold: true, italic: true, color: NAVY });
  box(s, 0.6, 5.55, 12.13, 0.75, CARD);
  T(s, "Cơ hội cho agency: đề xuất luôn cả phần thiết kế kích hoạt, để quyền lợi không bị “mua rồi bỏ đó”.", 0.85, 5.55, 11.7, 0.75, { fontSize: 16, bold: true, color: TEAL });
  notes(s, {
    say: "Chi bao nhiêu cho kích hoạt? Các nghiên cứu trước khuyến nghị chi cho kích hoạt từ 1 đến 8 lần phí quyền. Thực tế toàn cầu — theo báo cáo của Hiệp hội các nhà quảng cáo thế giới và Lumency: trung bình chỉ 0,81 lần; 43% nhà tài trợ không biết mình chi bao nhiêu. Nhưng O’Reilly và Lafrance Horning thấy rằng doanh nghiệp không quyết theo con số tỷ lệ, mà theo chất lượng chiến lược. Cornwell kết luận: không có tỷ lệ lý tưởng, nhưng phải kích hoạt. Đây là cơ hội cho agency: đề xuất luôn phần thiết kế kích hoạt.",
    gv: "U05 chưa KCC (bài của đơn vị đồng thực hiện báo cáo). U22 tr. 109: “it is not the leveraging ratio that matters but the connectivity and creativity of the link built between the sponsor and the sponsored.”",
    next: "Agency phục vụ nhà tài trợ những gì?",
  });

  // 26 servicing
  s = slide("Phục vụ nhà tài trợ (servicing) là phần việc agency làm thay Key Account");
  const sv = [["FaFileAlt", "Báo cáo cuối chương trình"], ["FaBrain", "Số liệu khách nhớ nhà tài trợ"], ["FaUsers", "Hồ sơ khán giả mục tiêu"], ["FaHandshake", "Cùng làm kích hoạt"], ["FaGift", "Đề xuất chương trình kích hoạt"], ["FaShieldAlt", "Bảo vệ quyền tài trợ, chống ambush"]];
  for (let i = 0; i < 6; i++) { const col = i % 3, row = Math.floor(i / 3), x = 0.6 + col * 2.75, y = 1.95 + row * 2.1; box(s, x, y, 2.55, 1.95); await ic(s, sv[i][0], x + 0.85, y + 0.15, 0.85, [TEAL, YEL, BLUE, ORA, PINK, PUR][i], i === 5 ? TX : NAVY); T(s, sv[i][1], x + 0.1, y + 1.05, 2.35, 0.85, { align: "center", fontSize: 14.5, bold: true, valign: "top" }); }
  box(s, 8.95, 1.95, 3.78, 4.0, YEL);
  T(s, "Với gala An Phát: An Phát giữ quan hệ với Bình An; Nova làm phần phục vụ — và báo cáo về cho An Phát.\n\nAmbush: chi tiết ở Buổi 12.", 9.15, 2.05, 3.38, 3.8, { fontSize: 16, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Cornwell (2020, tr. 108), dẫn O’Reilly & Huybers (2015) — khảo sát nhà tài trợ, bên được tài trợ và agency ở Canada (U22).", 6.45);
  notes(s, {
    say: "Cornwell dẫn nghiên cứu ở Canada với nhà tài trợ, bên được tài trợ và agency: các nhóm việc phục vụ nhà tài trợ gồm báo cáo cuối chương trình, số liệu khách còn nhớ nhà tài trợ, hồ sơ khán giả mục tiêu, cùng làm kích hoạt, đề xuất chương trình kích hoạt, bảo vệ quyền tài trợ và chống ambush — tức là đối thủ chen vào hưởng lợi mà không trả tiền. Với gala An Phát: An Phát giữ quan hệ với Bình An; Nova làm phần phục vụ — và báo cáo về cho An Phát. Ambush ta học ở Buổi 12.",
    gv: "U22 tr. 108 nói “nine categories” nhưng câu liệt kê 8 mục (thêm “audience loyalty statistics”) — slide gộp còn 6. Farrelly, Quester & Greyser (2005) (U21): phòng vệ ambush tốt nhất là kích hoạt nhiều lớp và quan hệ dài hạn.",
    next: "Và đo lường.",
  });

  // 27 ROI ROO table
  s = slide("Đo tài trợ bằng nhiều loại “lợi tức” — ROI chỉ là một");
  table(s, 0.6, 1.95, [2.0, 6.0, 4.13], ["Loại", "Đo gì", "Ví dụ ở gala An Phát"], [
    ["ROI", "Lợi tức tài chính: (lợi ích − chi phí) / chi phí", "Hợp đồng bảo hiểm mới quy cho gala"],
    ["ROO", "Tiến tới mục tiêu phi tài chính: nhận biết, thái độ, độ phủ", "% khách biết Bình An có giải pháp cho doanh nghiệp"],
    ["ROP", "Tập con của ROO: giá trị xã hội", "Chương trình an toàn lao động cho doanh nghiệp khách"],
    ["ROE", "Gắn kết cảm xúc giữa khách và thương hiệu", "Số khách tham gia phiên trải nghiệm"],
  ], { hc: [YEL, TEAL, BLUE], rh: 0.68, fs: 14.5, firstCol: YEL });
  T(s, "Chỉ 37% có quy trình chuẩn đo lợi tức tài trợ; 40% ghi kỳ vọng đo lường vào hợp đồng (Bắc Mỹ, 2018).", 0.6, 5.82, 12.13, 0.55, { fontSize: 15, bold: true, color: PINK });
  src(s, "Nguồn: Cornwell (2020, Bảng 9.1, tr. 149–151) (U22); ANA & MASB (2018) (U06). Ví dụ gala là giả định.", 6.45);
  notes(s, {
    say: "Đo tài trợ không chỉ có ROI. Cornwell tổng hợp nhiều loại lợi tức. ROI: lợi tức tài chính. ROO — return on objectives: tiến tới mục tiêu phi tài chính, như nhận biết, thái độ, độ phủ truyền thông. ROP — return on purpose: một phần của ROO, về giá trị xã hội. ROE — return on engagement: gắn kết cảm xúc giữa khách và thương hiệu. Khảo sát ANA ở Bắc Mỹ năm 2018: chỉ 37% có quy trình chuẩn đo lợi tức tài trợ, chỉ 40% ghi kỳ vọng đo lường vào hợp đồng. Nghĩa là 60% không ghi — và đó là cơ hội cho agency.",
    gv: "Quyết định GV 4: dạy ROI + ROO. ROP, ROE là mở rộng — có thể chỉ nhắc tên. Cornwell Bảng 9.1 còn có ROX (experience) và ROR (relationships). U06 số liệu Bắc Mỹ, 2018 — cũ.",
    next: "Nối với khung của Buổi 8.",
  });

  // 28 ladder for sponsor
  s = slide("Khung 6 cấp của Buổi 8 cũng dùng được cho nhà tài trợ");
  const ld = [["0 Đúng người", "Số doanh nghiệp thuộc phân khúc mục tiêu của Bình An có mặt", PINK], ["1 Hài lòng", "Điểm đánh giá phiên chuyên đề", YEL], ["2 Learning", "% khách biết thêm về quản trị rủi ro doanh nghiệp", YEL], ["3 Behaviour", "Số doanh nghiệp đồng ý hẹn tư vấn sau sự kiện", YEL], ["4 Impact", "Số hợp đồng mới trong 3 tháng (dữ liệu của Bình An)", BLUE], ["5 ROI", "Lợi ích quy tiền so với tổng chi phí tài trợ", BLUE]];
  ld.forEach(([a, b, c], i) => { const y = 5.65 - i * 0.68; box(s, 0.6 + i * 0.35, y, 3.2, 0.56, c); T(s, a, 0.75 + i * 0.35, y, 2.9, 0.56, { fontSize: 14, bold: true, color: NAVY }); box(s, 4.05 + i * 0.35, y, 8.68 - i * 0.35, 0.56); T(s, b, 4.2 + i * 0.35, y, 8.4 - i * 0.35, 0.56, { fontSize: 14 }); });
  src(s, "Khung ROI 6 cấp (Buổi 8; Phillips et al., 2008). Ví dụ chỉ số là giả định.", 6.45);
  notes(s, {
    say: "Nối Buổi 8: khung 6 cấp dùng được cho nhà tài trợ. Cấp 0, đúng người: bao nhiêu doanh nghiệp thuộc phân khúc mục tiêu của Bình An có mặt. Cấp 1, hài lòng: khách đánh giá phiên chuyên đề. Cấp 2, learning: bao nhiêu phần trăm khách biết thêm về quản trị rủi ro doanh nghiệp. Cấp 3, behaviour: bao nhiêu doanh nghiệp đồng ý hẹn tư vấn sau sự kiện. Cấp 4, impact: số hợp đồng mới trong 3 tháng — đây là dữ liệu của Bình An. Cấp 5: ROI. Giống Buổi 8: Nova cam kết và báo cáo được cấp 0 đến 3; cấp 4–5 phải thống nhất với nhà tài trợ từ đầu.",
    gv: "Lecture notes §2.3. Quyết định GV 4.",
    next: "Tính thử ROI.",
  });

  // 29 ROI example
  s = slide("ROI năm đầu có thể âm — vì vậy phải thống nhất mục tiêu và cách đo ngay trong đề xuất");
  const st = [["Chi phí", "Phí quyền 250 + kích hoạt 150 = 400 triệu", TEAL], ["Kết quả", "60 doanh nghiệp hẹn tư vấn → 20% ký = 12 hợp đồng × 50 triệu lãi gộp = 600 triệu", YEL], ["Tách tác động", "Chỉ ½ số hợp đồng quy được cho gala → 300 triệu", ORA], ["ROI", "(300 − 400) / 400 = −25% năm đầu", PINK]];
  st.forEach(([a, b, c], i) => { const y = 1.95 + i * 0.95; box(s, 0.6, y, 2.6, 0.8, c); T(s, a, 0.75, y, 2.3, 0.8, { bold: true, fontSize: 17, color: NAVY }); box(s, 3.35, y, 9.38, 0.8); T(s, b, 3.55, y, 9.0, 0.8, { fontSize: 17, bold: i === 3 }); });
  box(s, 0.6, 5.85, 12.13, 0.55, CARD);
  T(s, "“The main challenge in calculating ROI for sponsorship … isolating the effects of sponsorship from everything else.” — Cornwell (2020, tr. 150)", 0.8, 5.85, 11.7, 0.55, { fontSize: 14, italic: true });
  src(s, "SỐ GIẢ ĐỊNH, chỉ minh họa (lecture notes §2.3).", 6.45);
  notes(s, {
    say: "Tính thử — mọi con số là giả định. Bình An trả phí quyền 250 triệu, tự chi thêm 150 triệu kích hoạt: tổng chi phí 400 triệu. Sáu mươi doanh nghiệp hẹn tư vấn; giả sử 20% ký — 12 hợp đồng, mỗi hợp đồng lãi gộp năm đầu 50 triệu: 600 triệu. Nhưng chỉ một nửa có thể quy cho gala — đó là tách tác động, khó khăn chính của ROI tài trợ theo Cornwell. Còn 300 triệu. ROI bằng 300 trừ 400, chia 400: âm 25% năm đầu. Con số âm không có nghĩa là tài trợ thất bại: có thể mục tiêu chính của Bình An là ROO — thái độ, quan hệ với An Phát. Đó là lý do phải thống nhất mục tiêu và cách đo ngay trong đề xuất, và ghi vào hợp đồng.",
    gv: "Tính từng bước trên bảng (giáo án: “nên dùng bảng”). Tỷ lệ kích hoạt ở ví dụ: 150/250 = 0,6:1. Nếu tính hợp đồng tái tục năm thứ hai thì có thể dương.",
    ask: "“Nếu tính cả năm thứ hai, ROI đổi thế nào?”",
    next: "Và vì sao quan hệ tài trợ rạn nứt.",
  });

  // 30 Farrelly 2010
  s = slide("Quan hệ tài trợ thường rạn vì năm khoảng cách — agency có thể lấp từ đầu");
  const fr = [["Lệch ý đồ", "Nhà tài trợ nghĩ chiến lược; bên được tài trợ chỉ nghĩ chiến thuật", "Bắt đầu đề xuất từ mục tiêu của nhà tài trợ"], ["Không thích ứng", "Nhà tài trợ đổi mục tiêu; bên kia chỉ làm đúng cam kết cũ", "Họp định kỳ, cập nhật mục tiêu"], ["Thiếu bằng chứng", "Nhà tài trợ cần số liệu để trình lãnh đạo", "Cam kết đo lường ghi vào hợp đồng"], ["Bất cân xứng cam kết", "Nhà tài trợ chi thêm kích hoạt; bên kia không đáp lại", "Nova phục vụ, cùng làm kích hoạt"], ["Khoảng cách năng lực", "Bên được tài trợ giỏi “bán quyền”, yếu “quản lý quan hệ”", "Agency bù năng lực cho Key Account"]];
  table(s, 0.6, 1.95, [2.9, 5.0, 4.23], ["Khoảng cách", "Biểu hiện", "Agency phòng từ đầu"], fr, { hc: [PINK, ORA, TEAL], rh: 0.6, hh: 0.5, fs: 14, firstCol: YEL });
  src(s, "Nguồn: Cornwell (2020, tr. 186–187), dẫn Farrelly (2010) — 24 phỏng vấn sâu ở Úc (U22). Cột “agency phòng từ đầu” là nhận định.", 6.45);
  notes(s, {
    say: "Vì sao quan hệ tài trợ rạn nứt? Cornwell dẫn Farrelly, 24 phỏng vấn sâu trong 4 năm ở Úc, với cả nhà tài trợ lớn như Nike, Coca-Cola. Năm khoảng cách. Lệch ý đồ: nhà tài trợ nghĩ chiến lược, bên được tài trợ chỉ nghĩ chiến thuật. Không thích ứng: nhà tài trợ đổi mục tiêu, bên kia chỉ làm đúng cam kết cũ. Thiếu bằng chứng: nhà tài trợ cần số liệu để trình lãnh đạo. Bất cân xứng cam kết: nhà tài trợ chi thêm cho kích hoạt mà bên kia không đáp lại. Và khoảng cách năng lực: bên được tài trợ giỏi bán quyền nhưng yếu quản lý quan hệ. Cột bên phải là những gì agency có thể làm ngay từ đầu — chính là nội dung hôm nay.",
    gv: "U22 tr. 187, Farrelly (2010): “a culture built on securing rather than managing sponsorships”. Nối Buổi 12 (xung đột mạng lưới). Nếu trễ giờ: chỉ đọc cột 1 và 3.",
    next: "9.3: đặt nhà tài trợ ở đâu trên hành trình.",
  });

  // 31 principle
  s = slide("Nhà tài trợ phải làm giàu hành trình của khách, không làm gián đoạn");
  box(s, 0.6, 1.95, 12.13, 1.4, YEL);
  T(s, "“Sponsorships should enhance the attendee journey, not disrupt it.” — Bizzabo (U07)", 0.85, 1.95, 11.7, 1.4, { fontSize: 24, bold: true, italic: true, color: NAVY, align: "center" });
  const pr3 = [["57%", "nhà tài trợ đánh giá cao trải nghiệm thương hiệu (tiệc chọn lọc, buổi gặp riêng) hơn gian hàng", TEAL], ["84%", "nhà tài trợ coi networking của người tham dự là quan trọng", BLUE]];
  pr3.forEach(([a, b, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 3.55, 3.9, 2.7); T(s, a, x, 3.6, 3.9, 1.1, { fontSize: 44, bold: true, color: c, align: "center" }); T(s, b, x + 0.25, 4.7, 3.4, 1.5, { fontSize: 15, align: "center", valign: "top" }); });
  box(s, 8.86, 3.55, 3.87, 2.7);
  T(s, "Cornwell (2019): suốt nhiều thập kỷ tài trợ được đo như quảng cáo; tiềm năng gắn kết thật còn bỏ ngỏ.", 9.06, 3.6, 3.47, 2.6, { fontSize: 15, valign: "top" });
  src(s, "Nguồn: Bizzabo (5/8/2026) — khảo sát của chính Bizzabo, chưa KCC (U07); Cornwell (2019), Journal of Advertising (U03).", 6.45);
  notes(s, {
    say: "Mục 9.3. Nguyên tắc: nhà tài trợ phải làm giàu hành trình của khách, không làm gián đoạn. Khảo sát của Bizzabo: 57% nhà tài trợ đánh giá cao trải nghiệm thương hiệu — tiệc chọn lọc, buổi gặp riêng — hơn gian hàng; 84% coi networking của người tham dự là quan trọng. Cornwell, 2019: suốt nhiều thập kỷ, tài trợ được đặt mục tiêu và đo như quảng cáo; tiềm năng tạo gắn kết thật còn bị bỏ ngỏ.",
    gv: "U07 chưa KCC, nguồn có lợi ích thương mại (nền tảng công nghệ sự kiện).",
    next: "Hành trình của khách An Phát.",
  });

  // 32 journey
  s = slide("Mỗi giai đoạn trước – trong – sau đều có điểm chạm cho nhà tài trợ");
  table(s, 0.6, 1.95, [1.7, 4.1, 6.33], ["Giai đoạn", "Điểm chạm", "Gắn nhà tài trợ: làm giàu, không làm phiền"], [
    ["Trước", "Thư mời · đăng ký · xác nhận · di chuyển", "GlobalCard: ưu đãi xe đưa đón cho chủ thẻ doanh nghiệp (giống quyền mua vé sớm của VPBank)"],
    ["Trong", "Check-in · phiên hội nghị · giải lao · networking · gala · quà", "Bình An: phiên chuyên đề quản trị rủi ro do chuyên gia trình bày; tư vấn theo lịch hẹn, không chào mời tại bàn tiệc"],
    ["Sau", "Thư cảm ơn · khảo sát · gặp chuyên viên quan hệ khách hàng", "Gửi tài liệu chuyên đề; chỉ liên hệ khách đã đồng ý"],
  ], { hc: [YEL, TEAL, BLUE], rh: 1.1, fs: 15, firstCol: YEL });
  src(s, "Nối Buổi 3 (hành trình khách hàng). Ví dụ là giả định (lecture notes §3.2); VPBank: U10.", 6.45);
  notes(s, {
    say: "Nối Buổi 3: hành trình của khách An Phát. Trước sự kiện: thư mời, đăng ký, xác nhận, di chuyển — GlobalCard có thể tặng ưu đãi xe đưa đón cho chủ thẻ doanh nghiệp, giống cách VPBank cho chủ thẻ mua vé sớm. Trong sự kiện: check-in, phiên hội nghị, giải lao, networking, gala, quà — Bình An có thể có một phiên chuyên đề quản trị rủi ro doanh nghiệp do chuyên gia trình bày, và góc tư vấn theo lịch hẹn — không chào mời tại bàn tiệc. Sau sự kiện: thư cảm ơn, khảo sát — gửi tài liệu chuyên đề, và chỉ liên hệ khách đã đồng ý.",
    gv: "Lecture notes §3.2.",
    next: "Điểm chạm của nhà tài trợ phải bảo vệ An Phát.",
  });

  // 33 protect KA
  s = slide("Điểm chạm của nhà tài trợ phải bảo vệ Key Account — rủi ro uy tín rơi vào An Phát trước tiên");
  const pk = [["Bán kèm bảo hiểm", "Thông tư 67/2023/TT-BTC (hiệu lực 2/11/2023): ngân hàng không được tư vấn, giới thiệu, chào bán bảo hiểm liên kết đầu tư trong 60 ngày trước và sau giải ngân khoản vay", "Đã KCC (U13)", PINK, "FaBan"], ["Dữ liệu khách", "Chia sẻ danh sách khách của An Phát cho nhà tài trợ cần sự đồng ý của khách", "[VERIFY: văn bản hiện hành về bảo vệ dữ liệu cá nhân]", ORA, "FaUserLock"], ["Nội dung tài trợ", "Bài đăng mạng xã hội có nội dung tài trợ phải gắn nhãn (Luật Quảng cáo 2025, Điều 23)", "U23 · [VERIFY: pháp chế]", YEL, "FaTag"]];
  for (let i = 0; i < 3; i++) { const [a, b, r, c, icn] = pk[i], x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.75); await ic(s, icn, x + 0.2, 2.1, 0.8, c); T(s, a, x + 1.15, 2.1, 2.6, 0.8, { bold: true, fontSize: 17, color: c }); T(s, b, x + 0.2, 3.05, 3.5, 2.0, { fontSize: 14.5, valign: "top" }); T(s, r, x + 0.2, 5.05, 3.5, 0.55, { fontSize: 12, color: MU, valign: "top" }); }
  box(s, 0.6, 5.85, 12.13, 0.55, CARD);
  T(s, "Điểm chạm của Bình An nên là kiến thức và tư vấn theo lịch hẹn — không phải bán hàng tại gala.", 0.8, 5.85, 11.7, 0.55, { fontSize: 15, bold: true, color: TEAL });
  notes(s, {
    say: "Điểm chạm của nhà tài trợ phải bảo vệ Key Account. Một: bán kèm bảo hiểm. Thông tư 67 năm 2023 cấm ngân hàng tư vấn, giới thiệu, chào bán bảo hiểm liên kết đầu tư trong 60 ngày trước và sau giải ngân khoản vay. Quy định này nhắm vào hoạt động bán bảo hiểm của ngân hàng, không trực tiếp vào sự kiện — nhưng nó cho thấy khách và cơ quan quản lý rất nhạy cảm với chuyện ngân hàng bán kèm bảo hiểm. Nếu Bình An chào bán tại gala, rủi ro uy tín rơi vào An Phát trước tiên. Hai: dữ liệu khách — chia sẻ danh sách cần sự đồng ý của khách. Ba: bài đăng có nội dung tài trợ phải gắn nhãn. Kết luận: điểm chạm của Bình An nên là kiến thức và tư vấn theo lịch hẹn.",
    gv: "Lecture notes §3.3 — nhận định của người soạn về việc áp U13 vào sự kiện. [VERIFY: quy định hiện hành về hoạt động giới thiệu bảo hiểm tại sự kiện do ngân hàng tổ chức cho khách hàng doanh nghiệp — hỏi pháp chế.] Phạm vi: chỉ nhận diện rủi ro.",
    next: "Năm câu hỏi cho mỗi điểm chạm.",
  });

  // 34 checklist
  s = slide("Checklist 5 câu cho mỗi điểm chạm của nhà tài trợ");
  const ck = [["FaSmile", "Khách được lợi gì?", TEAL], ["FaBullseye", "Nhà tài trợ đạt mục tiêu nào — ROO hay ROI, cấp mấy?", YEL], ["FaBellSlash", "Có làm phiền, làm gián đoạn trải nghiệm không?", ORA], ["FaShieldAlt", "Có rủi ro pháp lý, uy tín cho Key Account không?", PINK], ["FaRuler", "Đo bằng chỉ số gì, ai cấp dữ liệu?", BLUE]];
  for (let i = 0; i < 5; i++) { const y = 1.95 + i * 0.88; num(s, i + 1, 0.6, y, 0.72, ck[i][2], 20); await ic(s, ck[i][0], 1.5, y, 0.72, ck[i][2]); box(s, 2.4, y, 10.33, 0.72); T(s, ck[i][1], 2.65, y, 9.9, 0.72, { fontSize: 19, bold: true }); }
  T(s, "Chiếu suốt Thực hành 2.", 0.6, 6.4, 12.13, 0.45, { fontSize: 15, color: MU, italic: true });
  notes(s, {
    say: "Năm câu hỏi cho mỗi điểm chạm. Một: khách được lợi gì? Hai: nhà tài trợ đạt mục tiêu nào — ROO hay ROI, cấp mấy trong khung 6 cấp? Ba: có làm phiền, làm gián đoạn trải nghiệm không? Bốn: có rủi ro pháp lý, uy tín cho An Phát không? Năm: đo bằng chỉ số gì, ai cấp dữ liệu?",
    gv: "Lecture notes §3.4. Để slide này trên màn hình suốt S6.",
    next: "Thực hành 2.",
  });

  // 35 practice 2
  s = await L.practice("Thực hành 2 · 30 phút: bản đồ điểm chạm tài trợ cho khách của An Phát", [["3’", "Mở đầu: dùng 2 nhà tài trợ nhóm đã chọn (mặc định Bình An, GlobalCard)", TEAL], ["15’", "Vẽ trên A1: ≥ 5 điểm chạm trước – trong – sau, mỗi nhà tài trợ ≥ 2; đủ 6 cột; đánh dấu ⭐ một điểm chạm tốt nhất", YEL], ["8’", "Xoay trạm 2 vòng × 4’: vai “hội đồng An Phát” — 1 câu hỏi (note vàng) + 1 lo ngại (note hồng)", PINK], ["4’", "Về bàn, đọc note, sửa một điểm chạm", BLUE]], "FaMapMarkedAlt", "Sản phẩm", "Bản đồ 6 cột đã sửa — mẫu cho trang “nhà tài trợ” trong SMP", "6 cột: giai đoạn · điểm chạm · kích hoạt · khách được gì · NTT đạt gì · rủi ro", YEL);
  notes(s, {
    say: "Thực hành 2, 30 phút. Hai nhà tài trợ đã vào. Giờ Nova phải cho anh Minh thấy họ xuất hiện ở đâu trên hành trình của 600 khách — và mỗi lần xuất hiện, khách được gì. Mười lăm phút: vẽ ít nhất 5 điểm chạm trước, trong, sau; mỗi nhà tài trợ ít nhất 2; đủ 6 cột; đánh dấu sao một điểm chạm nhóm tự hào nhất. Tám phút: xoay trạm 2 vòng theo chiều kim đồng hồ; tại mỗi bàn, các bạn đóng vai hội đồng An Phát — để lại một câu hỏi trên note vàng và một lo ngại trên note hồng. Bốn phút cuối: về bàn, sửa một điểm chạm.",
    gv: "Phiếu W09_activity_S6_ban_do_diem_cham.md. Mốc phút 93–123. Chiếu slide 34 (checklist) trong lúc làm. Nếu trễ giờ: xoay trạm 1 vòng.",
    next: "Tổng hợp.",
  });

  // 36 summary
  s = slide("Ba ý của Buổi 9 — và một trang mới cho kế hoạch");
  const sm = [["9.1", "Nhà tài trợ mua quyền gắn tên để đạt mục tiêu; nhà đầu tư chia sẻ rủi ro – lợi nhuận. Lợi ích phải có cho cả bốn bên; tài trợ là chuyển giao hình ảnh hai chiều", TEAL], ["9.2", "Đề xuất win-win bắt đầu từ mục tiêu của nhà tài trợ, có kế hoạch kích hoạt, kết thúc bằng cam kết đo lường (ROI + ROO) ghi vào hợp đồng", YEL], ["9.3", "Gắn nhà tài trợ vào điểm chạm để làm giàu hành trình của khách của Key Account — và bảo vệ Key Account khỏi rủi ro pháp lý, uy tín", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.25; box(s, 0.6, y, 1.3, 1.05, c); T(s, k, 0.6, y, 1.3, 1.05, { align: "center", bold: true, color: NAVY, fontSize: 22 }); box(s, 2.1, y, 10.63, 1.05); T(s, t, 2.35, y, 10.2, 1.05, { fontSize: 15 }); });
  box(s, 0.6, 5.85, 12.13, 0.8, BLUE);
  T(s, "Kế hoạch cuối kỳ: với khách hàng dự án cũ — 1–2 nhà tài trợ phù hợp, quyền lợi gắn điểm chạm, chỉ số ROO/ROI.", 0.85, 5.85, 11.7, 0.8, { fontSize: 15, bold: true, color: NAVY });
  notes(s, {
    say: "Ba ý của Buổi 9. Mục 9.1: nhà tài trợ mua quyền gắn tên để đạt mục tiêu; nhà đầu tư chia sẻ rủi ro và lợi nhuận. Lợi ích phải có cho cả bốn bên, và tài trợ là chuyển giao hình ảnh hai chiều. Mục 9.2: đề xuất win-win bắt đầu từ mục tiêu của nhà tài trợ, có kế hoạch kích hoạt, kết thúc bằng cam kết đo lường ROI và ROO ghi vào hợp đồng. Mục 9.3: gắn nhà tài trợ vào điểm chạm để làm giàu hành trình của khách của Key Account — và bảo vệ Key Account. Kế hoạch cuối kỳ thêm một trang: với khách hàng dự án cũ, 1–2 nhà tài trợ phù hợp, quyền lợi gắn điểm chạm, chỉ số ROO và ROI. Làm dần trên lớp, không giao về nhà.",
    next: "Ba câu kiểm tra nhanh.",
  });

  // 37 quick check
  s = L.quickCheck(["Nhà tài trợ và nhà đầu tư khác nhau ở điểm nào? Vì sao gala An Phát không hợp với nhà đầu tư?", "Leveraging và activation khác nhau thế nào? Cho một ví dụ activation ở gala.", "Vì sao ROI tài trợ năm đầu có thể âm mà tài trợ vẫn không thất bại?"]);
  notes(s, { say: "Ba câu kiểm tra nhanh. Một: nhà tài trợ và nhà đầu tư khác nhau ở điểm nào — vì sao gala An Phát không hợp với nhà đầu tư? Hai: leveraging và activation khác nhau thế nào — cho một ví dụ activation ở gala. Ba: vì sao ROI tài trợ năm đầu có thể âm mà tài trợ vẫn không thất bại?", gv: "Gợi ý: (1) quyền lợi vs rủi ro – lợi nhuận; gala không bán vé, không có lợi nhuận để chia; (2) leveraging = mọi chi tiêu đi kèm; activation = phần làm khách tương tác, ví dụ phiên chuyên đề có hỏi đáp, minigame; (3) mục tiêu chính có thể là ROO; lợi ích tài chính đến muộn (tái tục); phải tách tác động.", ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.", next: "Phiếu cuối giờ." });

  // 38 exit
  s = await L.exitTicket("Với khách hàng trong dự án cũ của nhóm, nhà tài trợ phù hợp nhất là loại doanh nghiệp nào? Khách của khách hàng đó được gì?", "Viết 1 chỉ số ROO và 1 chỉ số ROI bạn sẽ ghi vào hợp đồng tài trợ đó.");
  notes(s, { say: "Phiếu cuối giờ, cá nhân. Một: với khách hàng trong dự án cũ của nhóm, nhà tài trợ phù hợp nhất là loại doanh nghiệp nào — và khách của khách hàng đó được gì từ nhà tài trợ này? Hai: viết 1 chỉ số ROO và 1 chỉ số ROI bạn sẽ ghi vào hợp đồng tài trợ đó.", gv: "Xem: (a) nói được lợi ích cho khách của Key Account, không chỉ cho nhà tài trợ; (b) phân biệt đúng ROO (mục tiêu) và ROI (tài chính); (c) chỉ số đo được thật.", next: "Buổi sau." });

  // 39 next
  s = await L.nextSession("Không có bài về nhà. Buổi 10: nhà cung cấp và địa điểm trên hành trình của Key Account", "Buổi 10 · Nhà cung cấp và địa điểm", "Hôm nay ta đưa đối tác của Key Account vào sự kiện. Buổi sau quay lại phía mua: chọn nhà cung cấp và địa điểm (RFP/RFQ, khảo sát địa điểm) và gắn họ vào các giai đoạn trên hành trình.", ["Ảnh bản đồ điểm chạm và bảng chấm nhà tài trợ", "Hồ sơ dự án cũ (phần nhà cung cấp, địa điểm)"]);
  notes(s, { say: "Không có bài về nhà. Hôm nay ta đưa đối tác của Key Account vào sự kiện. Buổi 10 quay lại phía mua: quy trình chọn nhà cung cấp và địa điểm — RFP, RFQ, khảo sát địa điểm — và gắn họ vào các giai đoạn trên hành trình của Key Account. Mang theo ảnh bản đồ điểm chạm, bảng chấm nhà tài trợ, và hồ sơ dự án cũ — phần nhà cung cấp và địa điểm.", gv: "Câu nối theo giáo án. [NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 9 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 40 refs
  s = L.refs([
    [["Association of National Advertisers. (2018). "], ["Sponsorship measurement needs improvement: Study", 1], [" [Press release]."]],
    [["Cornwell, T. B. (2019). Less “sponsorship as advertising” and more sponsorship-linked marketing as authentic engagement. "], ["Journal of Advertising, 48", 1], ["(1), 49–60."]],
    [["Cornwell, T. B. (2020). "], ["Sponsorship in marketing: Effective partnerships in sports, arts and events", 1], [" (2nd ed.). Routledge."]],
    [["Farrelly, F. J., & Quester, P. G. (2005). Examining important relationship quality constructs of the focal sponsorship exchange. "], ["Industrial Marketing Management, 34", 1], ["(3), 211–219."]],
    [["Farrelly, F., & Quester, P. (2005). Investigating large-scale sponsorship relationships as co-marketing alliances. "], ["Business Horizons, 48", 1], ["(1), 55–62."]],
    [["Meenaghan, J. A. (1983). Commercial sponsorship. "], ["European Journal of Marketing, 17", 1], ["(7), 5–73."]],
    [["O’Reilly, N., & Lafrance Horning, D. (2013). Leveraging sponsorship: The activation ratio. "], ["Sport Management Review, 16", 1], ["(4), 424–437."]],
    [["Quốc hội. (2025). "], ["Luật số 75/2025/QH15 sửa đổi, bổ sung một số điều của Luật Quảng cáo", 1], ["."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 9, theo APA 7. Chương 2, 3, 6, 9 và 11 của Cornwell là phần đọc thêm.", gv: "Báo chí, case và văn bản khác (U05, U07–U15, U21, U24): danh mục APA đầy đủ trong buoi-09_tu-lieu-tong-hop.md, mục 6 và 8–9.", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
