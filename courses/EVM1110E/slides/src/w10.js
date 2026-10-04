// EVM1110E Buổi 10 — Building Solutions: Supplier & Venue Management (Phần 3, buổi 2/4)
// usage: NODE_PATH=<node_modules> node w10.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W10_slides.pptx";
const L = make(FONT, "Bài 10: Chọn và quản lý nhà cung cấp, địa điểm");
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
  let s = L.titleSlide("Bài 10: Chọn và quản lý nhà cung cấp, địa điểm", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 10\nBuilding Solutions: Supplier & Venue Management\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 10 — Bài 10: Chọn và quản lý nhà cung cấp, địa điểm. Buổi 9 ta đưa đối tác của Key Account vào sự kiện. Hôm nay Nova quay về vị trí bên mua: chọn khách sạn, chọn nhà cung cấp — để giữ lời hứa với An Phát.", gv: "Phần 3, buổi 2/4. Mở đầu bằng 2–3 “điều còn mơ hồ” từ phiếu cuối giờ Buổi 9 (≤3 phút). Ranh giới (quyết định GV 3): Buổi 7 = chiến lược; Buổi 10 = tác nghiệp; PCCC, an toàn đám đông → môn Quản trị rủi ro sự kiện.", next: "Nhớ lại Buổi 7." });

  // 2 hook
  s = slide("Tình huống AV ở Buổi 7 đã được quyết định từ lúc chọn và ký");
  box(s, 0.6, 1.95, 5.9, 4.3);
  await ic(s, "FaHistory", 0.9, 2.2, 0.95, PINK);
  T(s, "Buổi 7 · 3 tuần trước gala", 2.05, 2.2, 4.3, 0.95, { bold: true, fontSize: 18, color: PINK });
  T(s, "Khách sạn báo AV nội bộ tăng giá 30% và không cho mang AV ngoài vào.\n\nKết luận: tình huống này được quyết định từ lúc chọn và ký với khách sạn.", 0.9, 3.35, 5.3, 2.8, { fontSize: 17, valign: "top" });
  box(s, 6.83, 1.95, 5.9, 4.3, TX);
  await ic(s, "FaCalendarAlt", 7.13, 2.2, 0.95, TEAL);
  T(s, "Hôm nay · tháng 7", 8.28, 2.2, 4.3, 0.95, { bold: true, fontSize: 18, color: NAVY });
  T(s, "Anh Minh vừa duyệt concept gala 600 khách. Nova có 3 tuần để chọn khách sạn và nhà cung cấp.\n\nGiơ tay: (A) gọi 3 khách sạn quen hỏi giá, hay (B) gửi một bộ yêu cầu bằng văn bản giống nhau cho cả ba?", 7.13, 3.35, 5.3, 2.8, { fontSize: 17, color: NAVY, valign: "top" });
  notes(s, {
    say: "Nhớ Buổi 7: ba tuần trước gala 12/12, khách sạn báo AV nội bộ tăng giá 30% và không cho mang AV ngoài vào. Ta đã kết luận: tình huống đó được quyết định từ lúc chọn và ký với khách sạn. Hôm nay ta quay lại đúng lúc đó. Tháng 7. Anh Minh vừa duyệt concept gala 600 khách. Nova có ba tuần để chọn khách sạn và các nhà cung cấp. Giơ tay: bạn sẽ gọi ba khách sạn quen hỏi giá, hay gửi một bộ yêu cầu bằng văn bản giống nhau cho cả ba?",
    gv: "Giáo án S1 (phút 0–5). Chốt: “Gọi điện nhanh hơn. Nhưng khi anh Minh hỏi ‘vì sao chọn khách sạn này’, Nova cần trả lời bằng tiêu chí và hồ sơ, không phải bằng cảm giác.” Mọi tên, con số là giả định.",
    ask: "“(A) gọi điện hay (B) gửi yêu cầu bằng văn bản?”",
    next: "Ba câu hỏi của hôm nay.",
  });

  // 3 three questions
  s = slide("Buổi 10 trả lời ba câu hỏi: mua thế nào, chọn địa điểm ra sao, nhà cung cấp chạm Key Account ở đâu");
  const q3 = [["10.1", "Mua thế nào?", "Quy trình RFP/RFQ và chọn nhà cung cấp từ góc nhìn đơn vị tổ chức", "FaFileContract", TEAL], ["10.2", "Chọn địa điểm ra sao?", "Site check, tiêu chí chọn địa điểm, sơ đồ không gian", "FaMapMarkedAlt", YEL], ["10.3", "Chạm Key Account ở đâu?", "Phân bổ nhà cung cấp vào giai đoạn mua và sau mua của Key Account", "FaRoute", PINK]];
  for (let i = 0; i < 3; i++) { const [k, a, b, icn, c] = q3[i], x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 4.3); await ic(s, icn, x + 1.4, 2.15, 1.1, c); T(s, k, x + 0.2, 3.35, 3.5, 0.5, { align: "center", fontSize: 16, color: MU }); T(s, a, x + 0.2, 3.8, 3.5, 0.6, { align: "center", bold: true, fontSize: 21, color: c }); T(s, b, x + 0.25, 4.45, 3.4, 1.7, { align: "center", fontSize: 16, valign: "top" }); }
  notes(s, {
    say: "Ba câu hỏi. Mục 10.1 — mua thế nào: quy trình RFP, RFQ và chọn nhà cung cấp từ góc nhìn đơn vị tổ chức. Mục 10.2 — chọn địa điểm ra sao: site check, tiêu chí, sơ đồ không gian. Mục 10.3 — nhà cung cấp chạm Key Account ở đâu: phân bổ họ vào giai đoạn mua và sau mua của An Phát.",
    gv: "Đề cương Session 10: 10.1 procurement process (RFP/RFQ) and vendor selection from the organizer's perspective; 10.2 site check, venue selection criteria, space mapping; 10.3 allocating vendors to the purchase/post-purchase stages of the Key Account.",
    next: "Vì sao agency phải mua ngoài?",
  });

  // 4 outsourcing
  s = slide("Agency thuê ngoài vì chi phí, thời gian, chuyên môn — nhưng quan hệ với nhà cung cấp vẫn phải quản lý");
  const os = [["FaCoins", "Chi phí", "Thuê theo sự kiện rẻ hơn tự sở hữu", TEAL], ["FaClock", "Thời gian", "Cao điểm sự kiện cần nhiều người hơn bình thường", YEL], ["FaTools", "Chuyên môn, thiết bị", "Kỹ năng, thiết bị không cần dùng quanh năm", BLUE], ["FaShieldAlt", "Rủi ro", "Mỗi nhà cung cấp tự đánh giá rủi ro mảng của mình", ORA], ["FaStar", "Chất lượng", "Chuyên gia làm tốt hơn", PINK]];
  for (let i = 0; i < 5; i++) { const [icn, a, b, c] = os[i], x = 0.6 + i * 2.47; box(s, x, 1.95, 2.25, 2.85); await ic(s, icn, x + 0.62, 2.1, 1.0, c); T(s, a, x + 0.1, 3.2, 2.05, 0.5, { align: "center", bold: true, fontSize: 16, color: c }); T(s, b, x + 0.12, 3.7, 2.0, 1.0, { align: "center", fontSize: 13.5, valign: "top" }); }
  box(s, 0.6, 5.0, 12.13, 1.25, YEL);
  T(s, "“Outsourcing an activity does not make the cost problem go away, as considerable time is spent in managing the relationship with the outsourcing provider.”", 0.85, 5.0, 11.7, 1.25, { fontSize: 16, bold: true, italic: true, color: NAVY });
  src(s, "Nguồn: Dowson, Albert & Lomax (2023, tr. 217–218) (V15).", 6.45);
  notes(s, {
    say: "Vì sao agency phải mua ngoài? Dowson và cộng sự nêu năm lý do. Chi phí: thuê theo sự kiện rẻ hơn tự sở hữu. Thời gian: cao điểm sự kiện cần nhiều người hơn bình thường. Chuyên môn và thiết bị không cần dùng quanh năm. Rủi ro: mỗi nhà cung cấp tự đánh giá rủi ro trong mảng của mình. Và chất lượng. Nhưng câu quan trọng nhất cho môn này: thuê ngoài không làm vấn đề chi phí biến mất, vì phải tốn nhiều thời gian quản lý quan hệ với bên được thuê. Đó là lý do hôm nay là một buổi của môn quản trị quan hệ.",
    gv: "V15 Dowson ch.9, định nghĩa: “Outsourcing is the transfer of an organizational function to a third party.” Silvers (2008, tr. 176) gọi nhà tổ chức là “general contractor” — tổng thầu quản lý mọi nhà cung cấp.",
    next: "Từ Buổi 7 sang Buổi 10.",
  });

  // 5 B7 vs B10
  s = slide("Buổi 7 là chiến lược, Buổi 10 là tác nghiệp");
  table(s, 0.6, 1.95, [2.3, 4.92, 4.91], ["", "Buổi 7 — chiến lược", "Buổi 10 — tác nghiệp"], [
    ["Câu hỏi", "Hạng mục quan trọng và rủi ro đến đâu? Quan hệ nên thế nào?", "Mời ai, hỏi gì, chấm thế nào, kiểm tra tại chỗ ra sao?"],
    ["Công cụ", "Kraljic, Procurement vs Buying, customer of choice", "RFI – RFP – RFQ, bảng chấm điểm, site check, sơ đồ mặt bằng"],
    ["Đầu ra", "Chiến lược cho từng hạng mục", "Nhà cung cấp được chọn + hồ sơ giải thích được"],
  ], { hc: [CARD, PUR, TEAL], rh: 0.82, fs: 15, firstCol: YEL });
  box(s, 0.6, 5.55, 12.13, 0.75, CARD);
  T(s, "Ô Kraljic quyết định cách mua: Non-critical → hỏi giá nhanh; Strategic (ballroom tháng 12) → RFP, site check, đàm phán quan hệ.", 0.85, 5.55, 11.7, 0.75, { fontSize: 16, color: YEL, bold: true });
  notes(s, {
    say: "Buổi 7 là tầng chiến lược: hạng mục này quan trọng và rủi ro đến đâu, quan hệ với nhà cung cấp nên thế nào — công cụ là Kraljic, Procurement và Buying, customer of choice. Buổi 10 là tầng tác nghiệp: mời ai, hỏi gì, chấm thế nào, kiểm tra tại chỗ ra sao. Đầu ra hôm nay là nhà cung cấp được chọn, kèm hồ sơ giải thích được. Ô Kraljic quyết định cách mua: hạng mục không quan trọng thì hỏi giá nhanh; hạng mục chiến lược như ballroom tháng 12 thì cần RFP, site check và đàm phán quan hệ.",
    gv: "Lecture notes §1.1. Dowson (2023, tr. 228) định nghĩa purchasing = mua đứt bằng tiền; procurement = có được bằng mọi cách (thuê, mượn, trao đổi) — khác cách CIPS ở Buổi 7; nếu SV hỏi, nói rõ có nhiều cách định nghĩa.",
    next: "Ba loại yêu cầu.",
  });

  // 6 RFI RFP RFQ
  s = slide("RFI hỏi “ai”, RFP hỏi “giải pháp”, RFQ hỏi “giá”");
  table(s, 0.6, 1.95, [2.2, 3.1, 3.2, 3.63], ["", "Hỏi gì", "Khi nào dùng", "Ví dụ gala An Phát"], [
    ["RFI", "Nhà cung cấp là ai, làm được gì", "Chưa biết thị trường; lọc danh sách", "Tìm đơn vị livestream về 80 chi nhánh"],
    ["RFP", "Giải pháp + giá, chấm theo nhiều tiêu chí", "Hạng mục phức tạp, nhiều cách làm", "Ballroom + F&B; AV và livestream"],
    ["RFQ", "Giá cho thông số đã rõ", "Hạng mục chuẩn, nhiều nhà cung cấp", "In backdrop, thuê xe 45 chỗ, quà theo mẫu"],
  ], { hc: [CARD, TEAL, BLUE, YEL], rh: 0.82, fs: 15, firstCol: YEL });
  T(s, "request for information · request for proposal · request for quotation", 0.6, 5.6, 12.13, 0.45, { fontSize: 14, color: MU, italic: true });
  src(s, "Bảng do người soạn tổng hợp; Silvers (2008, Bảng 7.6, tr. 176) liệt kê RFI, RFP, RFQ cùng IFB, RFB, RFO, tender brief (V16). RFQ: CIPS (V01).", 6.45);
  notes(s, {
    say: "Ba loại yêu cầu. RFI — request for information: hỏi nhà cung cấp là ai, làm được gì; dùng khi chưa biết thị trường. Ví dụ: tìm đơn vị livestream về 80 chi nhánh. RFP — request for proposal: hỏi giải pháp kèm giá, chấm theo nhiều tiêu chí; dùng cho hạng mục phức tạp — ballroom kèm F&B, AV và livestream. RFQ — request for quotation: hỏi giá cho thông số đã rõ; dùng cho hạng mục chuẩn — in backdrop, thuê xe 45 chỗ.",
    gv: "Lecture notes §1.2. Nếu trễ giờ: rút ví dụ RFI (giáo án).",
    next: "Ba cách mua.",
  });

  // 7 three options
  s = slide("Ba cách mua: ba báo giá, đấu thầu, nhà cung cấp ưu tiên");
  const op = [["Ba báo giá", "Mời ít nhất 3 bên báo giá cho thông số rõ", "In ấn, xe, quà", TEAL, "FaCopy"], ["Đấu thầu", "Hồ sơ mời thầu chính thức, tiêu chí công khai, chấm điểm", "Khách sạn, AV – livestream", YEL, "FaGavel"], ["Nhà cung cấp ưu tiên", "Đã qua đấu thầu hoặc đánh giá → quan hệ dài hạn", "Đơn vị AV quen của Nova", BLUE, "FaHandshake"]];
  for (let i = 0; i < 3; i++) { const [a, b, c, col, icn] = op[i], x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.0); await ic(s, icn, x + 0.25, 2.15, 0.9, col); T(s, a, x + 1.3, 2.15, 2.5, 0.9, { bold: true, fontSize: 18, color: col }); T(s, b, x + 0.25, 3.2, 3.4, 1.0, { fontSize: 15, valign: "top" }); T(s, "Gala: " + c, x + 0.25, 4.3, 3.4, 0.55, { fontSize: 14, color: MU, italic: true }); }
  box(s, 0.6, 5.15, 12.13, 1.1, PINK);
  T(s, "Cảnh báo của giáo trình: nhà cung cấp “ưu tiên” ở công ty nhỏ đôi khi chỉ là “vì anh rể tôi làm chủ”. Ưu tiên phải có lý do ghi lại được.", 0.85, 5.15, 11.7, 1.1, { fontSize: 16, bold: true, color: NAVY });
  src(s, "Nguồn: Dowson et al. (2023, tr. 229–230) (V15); CIPS: “at least three suppliers” (V01). Một nguồn (single source): khi chỉ một bên đủ năng lực.", 6.45);
  notes(s, {
    say: "Dowson và cộng sự nêu ba cách mua. Ba báo giá: mời ít nhất ba bên báo giá cho thông số rõ — CIPS cũng nói “at least three suppliers”. Đấu thầu: hồ sơ mời thầu chính thức, tiêu chí công khai, chấm điểm. Nhà cung cấp ưu tiên: bên đã qua đấu thầu hoặc đánh giá, rồi được giữ quan hệ dài hạn. Giáo trình cảnh báo vui: ở công ty nhỏ, “ưu tiên” đôi khi chỉ vì anh rể tôi làm chủ. Ưu tiên phải có lý do ghi lại được. Và còn trường hợp một nguồn — khi chỉ một bên đủ năng lực.",
    gv: "V15 tr. 230: “such as using a supplier because your brother-in-law owns it”. CIPS (V01) còn liệt kê đấu thầu rộng rãi, hai giai đoạn, hạn chế — [VERIFY: tiêu đề từng phương thức trên trang CIPS]. Một câu về Key Account (quyết định GV 7): quy trình mua của An Phát có thể chịu quy định nội bộ hoặc pháp luật — hỏi anh Khoa ngay từ đầu.",
    next: "Một nguồn đến từ đâu?",
  });

  // 8 lose AV choice
  s = slide("Nova mất quyền chọn AV ngay lúc ký với khách sạn");
  const ch = [["Chọn khách sạn", TEAL], ["Khách sạn có AV độc quyền", ORA], ["AV thành “một nguồn” — không còn so giá", PINK]];
  ch.forEach(([t, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 2.1, 3.9, 1.5, c); T(s, t, x + 0.2, 2.1, 3.5, 1.5, { align: "center", bold: true, fontSize: 18, color: NAVY }); if (i < 2) arrow(s, x + 3.92, 2.65, 0.2, 0.4, MU); });
  box(s, 0.6, 3.9, 12.13, 1.3, CARD);
  T(s, "“…suppliers (e.g., hotels, convention centers) that have preferred or exclusive vendors, which may limit an organizer’s choices (or increase costs) … must be identified and analyzed when evaluating bids.”", 0.85, 3.9, 11.7, 1.3, { fontSize: 16, italic: true });
  box(s, 0.6, 5.4, 12.13, 0.85, YEL);
  T(s, "→ Câu hỏi về nhà cung cấp độc quyền phải nằm trong RFP gửi khách sạn — trước khi ký.", 0.85, 5.4, 11.7, 0.85, { fontSize: 18, bold: true, color: NAVY });
  src(s, "Nguồn: Silvers (2008, tr. 175) (V16); BizBash (V07).", 6.45);
  notes(s, {
    say: "Câu hỏi: lúc nào Nova mất quyền chọn AV? Lúc ký với khách sạn. Nếu khách sạn có AV độc quyền, AV trở thành một nguồn — không còn so giá được. Silvers viết: địa điểm có nhà cung cấp ưu tiên hoặc độc quyền có thể giới hạn lựa chọn hoặc làm tăng chi phí của nhà tổ chức, và phải được phân tích ngay khi đánh giá hồ sơ. Vậy câu hỏi về nhà cung cấp độc quyền phải nằm trong RFP gửi khách sạn — trước khi ký.",
    gv: "Hỏi lớp trước khi hiện hộp vàng. Alt-text: ba ô nối bằng mũi tên.",
    ask: "“Lúc nào Nova mất quyền chọn AV?”",
    next: "RFP tốt trông thế nào?",
  });

  // 9 RFP 8 parts
  s = slide("RFP tốt mang Key Account và khách của Key Account vào");
  const rp = [["Về An Phát và mục tiêu gala", TEAL], ["Hồ sơ khách: 600 lãnh đạo doanh nghiệp, kỳ vọng, nhu cầu đặc biệt", TEAL], ["Ngày, giờ, giờ dựng – tháo (load-in/out)", YEL], ["Bố trí: bàn tròn, sân khấu, LED, khu nhà tài trợ; xin sơ đồ mặt bằng", YEL], ["F&B, phòng ngủ (nếu có)", YEL], ["Chính sách nhà cung cấp độc quyền; phụ thu mang ngoài vào", PINK], ["Điều khoản: cọc, hủy, thay đổi số khách", PINK], ["Tiêu chí chấm và hạn trả lời", BLUE]];
  rp.forEach(([t, c], i) => { const col = i < 4 ? 0 : 1, row = i % 4, x = 0.6 + col * 6.13, y = 1.95 + row * 0.92; num(s, i + 1, x, y + 0.08, 0.6, c, 17); box(s, x + 0.75, y, 5.15, 0.78); T(s, t, x + 0.95, y, 4.85, 0.78, { fontSize: 15 }); });
  T(s, "Bảo mật: thông tin về khách của An Phát chỉ chia sẻ ở mức cần thiết.", 0.6, 5.7, 12.13, 0.45, { fontSize: 15, color: YEL, bold: true });
  src(s, "Khung rút gọn do người soạn dựng từ mẫu RFP APEX của Events Industry Council (V05): mục tiêu, hồ sơ người tham dự, lịch sử sự kiện, đính kèm PER kỳ trước.", 6.45);
  notes(s, {
    say: "Một RFP tốt mang Key Account và khách của Key Account vào. Mẫu RFP APEX của Events Industry Council có các phần mục tiêu sự kiện, hồ sơ người tham dự, lịch sử sự kiện — và đề nghị đính kèm báo cáo sau sự kiện kỳ trước. Nghĩa là nhà cung cấp chỉ đề xuất đúng khi hiểu An Phát và khách của An Phát. Khung tám phần cho RFP gửi khách sạn: về An Phát và mục tiêu gala; hồ sơ khách; ngày giờ và giờ dựng – tháo; bố trí và xin sơ đồ mặt bằng; F&B; chính sách nhà cung cấp độc quyền; điều khoản cọc, hủy, thay đổi số khách; và tiêu chí chấm, hạn trả lời. Lưu ý bảo mật thông tin khách.",
    gv: "Lecture notes §1.4. Dowson (2023, Hình 5.3, tr. 105–106) có mẫu “venue search brief” đầy đủ (ngân sách, số khách mỗi phiên, phòng chính/phụ, F&B, yêu cầu khác) — có thể chiếu thêm nếu muốn.",
    next: "Đặc tả thế nào cho đủ?",
  });

  // 10 three specs
  s = slide("Đặc tả theo ba lớp: dịch vụ để làm gì, cần gì, đạt chuẩn nào");
  defCards(s, [
    ["Theo chức năng", TEAL, "Dịch vụ để làm gì.\n\nVí dụ: “Livestream gala tới 80 chi nhánh để nhân viên cùng xem phần vinh danh.”", "(specification by function)"],
    ["Kỹ thuật", YEL, "Nhân sự, thiết bị, số lượng, số ngày.\n\nVí dụ: 3 máy quay, 1 đường truyền dự phòng, 1 kỹ thuật viên trực.", "(technical specification)"],
    ["Theo kết quả", PINK, "Chuẩn an toàn, chất lượng, bền vững; KPI kiểm chứng được.\n\nVí dụ: đứt tín hiệu không quá 30 giây; có biên bản thử trước 1 ngày.", "(specification by performance)"],
  ], "Đặc tả càng rõ, báo giá càng sát — và hồ sơ các bên mới so được với nhau. (Dowson et al., 2023, tr. 234–236)");
  notes(s, {
    say: "Dowson và cộng sự chia đặc tả thành ba lớp. Theo chức năng: dịch vụ để làm gì — livestream gala tới 80 chi nhánh để nhân viên cùng xem phần vinh danh. Kỹ thuật: nhân sự, thiết bị, số lượng — ba máy quay, một đường truyền dự phòng. Theo kết quả: chuẩn an toàn, chất lượng, KPI kiểm chứng được — đứt tín hiệu không quá 30 giây, có biên bản thử trước một ngày. Đặc tả càng rõ, báo giá càng sát, và hồ sơ các bên mới so được với nhau.",
    gv: "V15 tr. 234: “The more detailed this document is … the more accurate a costing will be provided in return.” Ví dụ KPI là giả định.",
    next: "Tốc độ trả lời cũng là thông tin.",
  });

  // 11 speed
  s = slide("Tốc độ trả lời RFP cho biết cách nhà cung cấp sẽ phục vụ sau này");
  box(s, 0.6, 1.95, 4.9, 4.3);
  T(s, "80%", 0.6, 2.2, 4.9, 1.6, { fontSize: 66, bold: true, color: TEAL, align: "center" });
  T(s, "người tổ chức muốn địa điểm trả lời RFP trong vòng 4 ngày", 0.9, 3.9, 4.3, 1.3, { fontSize: 18, align: "center", valign: "top" });
  T(s, "Cvent 2025 (V06) · chưa KCC · nguồn có lợi ích thương mại", 0.8, 5.5, 4.5, 0.6, { fontSize: 12, color: MU, align: "center" });
  box(s, 5.75, 1.95, 6.98, 4.3, YEL);
  T(s, "Hồ sơ dự thầu phải được giữ bảo mật để đối xử công bằng với mọi bên.\n\nKhông gửi brief tìm địa điểm cho nhiều đơn vị trung gian cùng lúc — địa điểm sẽ rối và khó chịu.", 6.0, 2.05, 6.5, 4.1, { fontSize: 17, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: V06; Dowson et al. (2023, tr. 111, 230) (V14, V15).", 6.45);
  notes(s, {
    say: "Khảo sát của Cvent: 80% người tổ chức muốn địa điểm trả lời RFP trong vòng 4 ngày. Câu hỏi: tốc độ trả lời RFP nói gì về cách nhà cung cấp sẽ phục vụ ta sau này? Hai nguyên tắc từ giáo trình. Hồ sơ dự thầu phải được giữ bảo mật để đối xử công bằng với mọi bên. Và không gửi brief tìm địa điểm cho nhiều đơn vị trung gian cùng lúc — địa điểm sẽ rối và khó chịu.",
    gv: "V06 chưa KCC, Cvent bán phần mềm gửi RFP. V14 tr. 111: “What you should not do is to brief more than one agency at the same time…”.",
    ask: "“Tốc độ trả lời RFP nói gì về nhà cung cấp?”",
    next: "Chấm thế nào?",
  });

  // 12 weighted scoring
  s = slide("Chấm điểm có trọng số biến lựa chọn thành lời giải thích");
  table(s, 0.6, 1.95, [6.0, 1.6], ["Tiêu chí (giả định)", "Trọng số"], [
    ["Không gian phù hợp khách của An Phát", "20"],
    ["Kỹ thuật – AV – livestream (gồm độc quyền)", "15"],
    ["Lịch và điều khoản hợp đồng", "15"],
    ["Dịch vụ, F&B", "10"],
    ["Tổng chi phí (thuê + AV + phụ thu)", "40"],
  ], { hc: [TEAL, YEL], rh: 0.52, fs: 15 });
  box(s, 8.45, 1.95, 4.28, 1.9, PINK);
  T(s, "Trước khi chấm: điều kiện bắt buộc (đạt / không đạt)\nCòn trống 12/12? Đủ diện tích dùng được?", 8.65, 1.95, 3.88, 1.9, { fontSize: 15, bold: true, color: NAVY });
  box(s, 8.45, 4.0, 4.28, 1.4);
  T(s, "Điểm = Σ (điểm 1–5 × trọng số) / 5 → thang 100", 8.65, 4.0, 3.88, 1.4, { fontSize: 16, bold: true, color: YEL });
  box(s, 0.6, 5.88, 12.13, 0.5, CARD);
  T(s, "Silvers: trọng số làm giảm “ảnh hưởng và sở thích cá nhân” trong quyết định.", 0.85, 5.88, 11.7, 0.5, { fontSize: 15, italic: true });
  src(s, "Trọng số 60/40 là GIẢ ĐỊNH (quyết định GV 6). Silvers (2008, tr. 176–177, Hình 7.5) (V16); Dowson et al. (2023, Bảng 9.6) (V15).", 6.5);
  notes(s, {
    say: "Cách làm phổ biến là bảng chấm điểm có trọng số. Ví dụ giả định: chất lượng – năng lực 60, tổng chi phí 40. Không gian phù hợp khách của An Phát 20; kỹ thuật, AV, livestream 15; lịch và điều khoản 15; dịch vụ, F&B 10; tổng chi phí 40 — không chỉ giá thuê mà cả AV và phụ thu. Trước khi chấm, kiểm tra điều kiện bắt buộc: còn trống ngày 12/12 không, đủ diện tích dùng được không. Trượt điều kiện bắt buộc thì điểm cao cũng không cứu được. Điểm bằng tổng điểm nhân trọng số, chia 5. Silvers viết: trọng số làm giảm ảnh hưởng của sở thích cá nhân trong quyết định. Silvers còn có ví dụ chấm bốn khách sạn, trong đó có tiêu chí an ninh và kế hoạch khẩn cấp.",
    gv: "V16 tr. 176: “It is widely recommended that selection criteria be assigned numerical importance ratings that will result in a quantitative score that eliminates (or at least lessens) personal influence or preference…” (decision matrix, MAUT). Dowson Bảng 9.6: chất lượng, đáp ứng đặc tả, chi phí so ngân sách, khả năng đáp ứng lịch, kinh nghiệm. Học thuật kinh điển (Dickson 1966; Weber et al. 1991; Ho et al. 2010 — V04) chỉ nêu tên.",
    next: "Bốn nguyên tắc.",
  });

  // 13 four principles
  s = slide("Bốn nguyên tắc: value for money, công bằng, có dấu vết, phản hồi bên trượt");
  const pr = [["FaBalanceScale", "Value for money", "Không phải giá thấp nhất", TEAL], ["FaEquals", "Đối xử công bằng", "Cùng yêu cầu, cùng hạn, cùng tiêu chí; khai báo quan hệ trước đó", YEL], ["FaFolderOpen", "Có dấu vết (audit trail)", "Ai chấm, chấm gì, vì sao — anh Minh, anh Khoa có thể hỏi lại", BLUE], ["FaReply", "Phản hồi bên trượt", "Bên trượt hôm nay là đối tác ngày mai (customer of choice)", PINK]];
  for (let i = 0; i < 4; i++) { const [icn, a, b, c] = pr[i], x = 0.6 + i * 3.08; box(s, x, 1.95, 2.9, 3.6); await ic(s, icn, x + 0.95, 2.15, 1.0, c); T(s, a, x + 0.15, 3.3, 2.6, 0.75, { align: "center", bold: true, fontSize: 16, color: c }); T(s, b, x + 0.15, 4.05, 2.6, 1.4, { align: "center", fontSize: 14, valign: "top" }); }
  box(s, 0.6, 5.7, 12.13, 0.6, CARD);
  T(s, "Dowson: “The company that is appointed must be the highest scorer.”", 0.85, 5.7, 11.7, 0.6, { fontSize: 15, italic: true, color: YEL });
  src(s, "Nguồn: CIPS — Tender evaluation (V02); Dowson et al. (2023, tr. 231) (V15).", 6.45);
  notes(s, {
    say: "Bốn nguyên tắc đánh giá hồ sơ của CIPS. Value for money — không phải giá thấp nhất. Đối xử công bằng — cùng yêu cầu, cùng hạn, cùng tiêu chí; Dowson thêm: người chấm phải khai báo thiên vị và quan hệ trước đó với nhà cung cấp. Có dấu vết — ai chấm, chấm gì, vì sao; anh Minh và anh Khoa đều có thể hỏi lại. Và phản hồi cho bên trượt — nối Buổi 7: bên trượt hôm nay là đối tác ngày mai. Dowson còn nói thẳng: bên được chọn phải là bên điểm cao nhất. Nếu kết quả không như ý, sửa tiêu chí từ đầu, không sửa điểm ở cuối.",
    gv: "V15 tr. 231: “ensure that professional relationships are maintained, and any bias or prior relationship is acknowledged.” Hiểu lầm: “chấm điểm là thủ tục” → bảng chấm là lời giải thích Nova đưa cho Key Account.",
    next: "Thực hành 1.",
  });

  // 14 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: chấm hồ sơ 3 khách sạn cho gala của An Phát", [["4’", "Trọng số: được chuyển tối đa 10 điểm giữa các tiêu chí, ghi 1 câu lý do", TEAL], ["8’", "Kiểm tra điều kiện bắt buộc trước; chấm A, B, C từ 1–5; tính điểm", YEL], ["5’", "Chọn 1 khách sạn (có thể có điều kiện); viết 1 câu báo anh Minh + 1 câu phản hồi khách sạn trượt", PINK]], "FaHotel", "Sản phẩm", "Bảng chấm trên A3 + 2 câu — khách sạn được chọn dùng ở Thực hành 2", "Ngân sách địa điểm + F&B + AV: tối đa 1,50 tỷ. Cần ~860–920 m² dùng được.");
  notes(s, {
    say: "Thực hành 1, 20 phút. Nova đã gửi cùng một RFP cho ba khách sạn 5 sao ở Quận 1. Ngân sách An Phát duyệt cho địa điểm, F&B và AV: tối đa 1,5 tỷ. Bốn phút: đặt trọng số — được chuyển tối đa 10 điểm giữa các tiêu chí, ghi một câu lý do. Tám phút: kiểm tra điều kiện bắt buộc trước, rồi chấm A, B, C từ 1 đến 5 và tính điểm. Năm phút: chọn một khách sạn — có thể có điều kiện — và viết một câu báo anh Minh, một câu phản hồi cho một khách sạn trượt.",
    gv: "Phiếu W10_activity_S3_cham_ho_so_khach_san.md (A: 1.200 m² brochure ~950 dùng được, 4 cột, AV độc quyền, 1,45 tỷ; B: 1.000 m² không cột, Nova là lựa chọn thứ hai đến 15/8, 1,52 tỷ — vượt ngân sách; C: ~700 + 200 m², chỉ dựng từ 14h ngày 12/12, 1,44 tỷ). Mốc phút 30–50. Khách sạn B “khách khác giữ chỗ tạm” = Nova đang ở “second option” (Dowson tr. 111). Ghi lựa chọn của 6 nhóm lên bảng.",
    next: "Giải lao.",
  });

  // 15 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 50–58.", next: "Sau giải lao: một sân vận động." });

  // 16 My Dinh
  s = slide("Một địa điểm phục vụ nhiều bên thuê — hãy hỏi lịch trước và sau ngày của mình");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaFutbol", 0.85, 2.15, 0.9, BLUE);
  T(s, "Sân vận động quốc gia Mỹ Đình, cuối 2024", 1.95, 2.15, 5.8, 0.9, { bold: true, fontSize: 18, color: BLUE });
  T(s, bullets(["Concert tối 7/12/2024", "Một tuần sau (15/12): trận ASEAN Cup Việt Nam – Indonesia", "VFF xin đổi sân nhà về Việt Trì"]), 0.9, 3.25, 6.8, 2.8, { fontSize: 17, valign: "top", paraSpaceAfter: 8 });
  box(s, 8.15, 1.95, 4.58, 4.3, YEL);
  T(s, "Agency luôn hỏi:\n\n• Trước và sau ngày của tôi có sự kiện gì?\n• Giờ dựng – tháo thế nào?\n• Ai chịu trách nhiệm trả lại mặt bằng?", 8.35, 2.05, 4.18, 4.1, { fontSize: 16, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Tuổi Trẻ (11/11/2024); Thanh Niên; Thể thao & Văn hóa (V10) — đã kiểm chứng chéo. [VERIFY: tiêu đề bài báo trước khi phát cho SV]", 6.45);
  notes(s, {
    say: "Mục 10.2. Cuối 2024, sân vận động quốc gia Mỹ Đình tổ chức concert tối 7/12, một tuần trước trận ASEAN Cup của đội tuyển Việt Nam gặp Indonesia. VFF xin đổi sân nhà về Việt Trì. Hỏi: nếu Nova là agency của concert đó, ta cần hỏi địa điểm điều gì? Nếu Nova làm cho bên thuê sau, ta cần hỏi gì? Một địa điểm phục vụ nhiều bên thuê. Luôn hỏi: trước và sau ngày của tôi có sự kiện gì, giờ dựng – tháo thế nào, ai chịu trách nhiệm trả lại mặt bằng. Nhớ khách sạn C ở Thực hành 1: tiệc cưới tối 11/12, chỉ dựng được từ 14 giờ ngày 12/12.",
    gv: "V10 đã KCC. Ảnh sân Mỹ Đình chỉ dùng khi GV chấp nhận — slide dùng chữ.",
    ask: "“Agency của bên thuê sau cần hỏi gì?”",
    next: "Vì sao chọn địa điểm trước.",
  });

  // 17 venue first
  s = slide("Chọn địa điểm trước — vì địa điểm quyết định nhà cung cấp");
  defCards(s, [
    ["Dowson et al. (2023)", TEAL, "“The MVP (Most Valuable Player) of an event is the venue and location. … All the intricate planning cannot make up for a less than ideal venue.”", "(V14, tr. 104)"],
    ["BizBash (Blumin)", YEL, "“The venue is often the first step in a search because that influences which vendors are used.”", "(V07)"],
    ["Cvent 2026", BLUE, "Thông số phòng (50%), hình ảnh (48%), sơ đồ mặt bằng (46%) ảnh hưởng nhiều nhất đến quyết định gửi RFP.", "(V06 · chưa KCC)"],
  ], "Khách sạn có AV độc quyền → Nova mất quyền chọn AV. Khách sạn cho mang AV ngoài → Nova chọn được đơn vị quen.");
  notes(s, {
    say: "Vì sao chọn địa điểm trước? Dowson và cộng sự: địa điểm là cầu thủ xuất sắc nhất của sự kiện — mọi kế hoạch tỉ mỉ cũng không bù được một địa điểm kém. BizBash dẫn một chuyên gia: địa điểm thường là bước đầu tiên vì nó quyết định nhà cung cấp nào được dùng. Khảo sát Cvent: thông số phòng, hình ảnh và sơ đồ mặt bằng là những thứ ảnh hưởng nhiều nhất đến quyết định gửi RFP. Ví dụ: khách sạn có AV độc quyền thì Nova mất quyền chọn AV.",
    gv: "V14 tr. 104 (Selina Arnall, Events Manager Hack). V06 chưa KCC. Nếu trễ giờ: bỏ cặp số 97%/94% ở slide sau.",
    next: "Giá và quan hệ.",
  });

  // 18 97 94
  s = slide("Giá quan trọng, nhưng quan hệ với địa điểm cũng có giá");
  const pz = [["97%", "sẵn sàng đổi sang địa điểm thứ hai nếu tiết kiệm từ 20% trở xuống", TEAL], ["94%", "sẵn sàng trả thêm để giữ địa điểm ưu tiên", PINK]];
  pz.forEach(([a, b, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.4); T(s, a, x, 2.1, 3.9, 1.4, { fontSize: 60, bold: true, color: c, align: "center" }); T(s, b, x + 0.25, 3.6, 3.4, 1.4, { fontSize: 17, align: "center", valign: "top" }); });
  box(s, 8.86, 1.95, 3.87, 3.4, YEL);
  T(s, "Mâu thuẫn không?\n\nKhông hẳn: giá quan trọng — nhưng quan hệ với địa điểm (customer of choice, Buổi 7) cũng có giá trị.", 9.06, 2.05, 3.47, 3.2, { fontSize: 16, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Cvent Planner Sourcing Report 2025 (V06) · chưa KCC · nguồn có lợi ích thương mại.", 6.45);
  notes(s, {
    say: "Một nghịch lý từ khảo sát Cvent: 97% người tổ chức sẵn sàng đổi sang địa điểm thứ hai nếu tiết kiệm từ 20% trở xuống; nhưng 94% sẵn sàng trả thêm để giữ địa điểm ưu tiên. Hai con số này mâu thuẫn không? Không hẳn: giá quan trọng — nhưng quan hệ với địa điểm cũng có giá trị. Đúng tinh thần customer of choice ở Buổi 7.",
    gv: "Nếu trễ giờ: bỏ slide này (giáo án).",
    ask: "“Hai con số này mâu thuẫn không?”",
    next: "Hình ảnh của địa điểm.",
  });

  // 19 image test
  s = slide("Với một ngân hàng, địa điểm quá xa hoa có thể thành tin xấu — hãy làm “phép thử trang báo”");
  box(s, 0.6, 1.95, 6.0, 4.3);
  await ic(s, "FaNewspaper", 0.85, 2.15, 0.9, PINK);
  T(s, "“AIG effect” (2008)", 1.95, 2.15, 4.5, 0.9, { bold: true, fontSize: 19, color: PINK });
  T(s, "Vài ngày sau khi nhận gói cứu trợ, một công ty con của AIG tổ chức sự kiện tại khách sạn sang trọng ở California. Báo chí chỉ trích dữ dội; nhiều doanh nghiệp sau đó hủy đặt chỗ vì sợ bị đưa tin.", 0.9, 3.2, 5.5, 2.9, { fontSize: 15.5, valign: "top" });
  box(s, 6.85, 1.95, 5.88, 4.3, YEL);
  T(s, "“Would it pass the test of appearing in a national newspaper?”\n\nCâu hỏi cho gala An Phát: một ngân hàng tri ân khách VIP ở khách sạn 5 sao — trên báo sẽ trông thế nào? Chọn địa điểm cũng là quản trị hình ảnh của Key Account.", 7.05, 2.05, 5.48, 4.1, { fontSize: 16, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Dowson et al. (2023, tr. 99, 245–246) (V14, V15). Áp vào An Phát là nhận định.", 6.45);
  notes(s, {
    say: "Một tiêu chí hay bị quên: hình ảnh. Dowson kể “AIG effect” năm 2008: vài ngày sau khi nhận gói cứu trợ khổng lồ, một công ty con của tập đoàn bảo hiểm AIG tổ chức sự kiện ở khách sạn sang trọng tại California. Báo chí chỉ trích dữ dội; sau đó nhiều doanh nghiệp hủy đặt chỗ vì sợ bị đưa tin. Giáo trình đề nghị phép thử: sự kiện này có qua được nếu lên trang báo quốc gia không? Với gala An Phát: một ngân hàng tri ân khách VIP ở khách sạn 5 sao — trên báo sẽ trông thế nào? Chọn địa điểm cũng là quản trị hình ảnh của Key Account.",
    gv: "V15 tr. 245 (Godwin, 2009): chi phí sự kiện 443.000 USD; AIG nhận 85 tỷ USD từ Fed — có thể nêu nếu lớp hỏi. Dowson tr. 99 hỏi: “What would this look like as a story in the Daily Mail?” Không suy diễn tình hình An Phát — chỉ đặt câu hỏi.",
    next: "Vậy tiêu chí chọn địa điểm là gì?",
  });

  // 20 six criteria
  s = slide("Sáu nhóm tiêu chí chọn địa điểm cho sự kiện của Key Account");
  table(s, 0.6, 1.95, [3.3, 4.6, 4.23], ["Nhóm tiêu chí", "Hỏi gì", "Vì sao quan trọng với An Phát"], [
    ["1. Phù hợp khách & hình ảnh", "Vị trí, đẳng cấp, phong cách hợp văn hóa doanh nghiệp", "600 lãnh đạo doanh nghiệp VIP"],
    ["2. Sức chứa và bố trí", "Diện tích dùng được, cột, trần, tầm nhìn", "Không khách nào “ngồi sau cột”"],
    ["3. Kỹ thuật", "Điện, rigging, Wi‑Fi, livestream", "Chị Lan: livestream 80 chi nhánh"],
    ["4. Dịch vụ, độc quyền", "AV, hoa, F&B nội bộ; phụ thu", "Chi phí và chất lượng"],
    ["5. Lịch và điều khoản", "Lịch trước – sau, giờ dựng, hủy, cọc", "Rủi ro bị động sát ngày"],
    ["6. Tổng chi phí", "Thuê + F&B + AV + phụ thu", "Anh Khoa duyệt ngân sách"],
  ], { hc: [YEL, TEAL, BLUE], rh: 0.5, hh: 0.5, fs: 14, firstCol: YEL });
  src(s, "Người soạn tổng hợp từ Dowson et al. (2023, tr. 102–103 — các điều kiện “phải có”) (V14), V06, V07.", 6.45);
  notes(s, {
    say: "Sáu nhóm tiêu chí cho sự kiện của Key Account. Một: phù hợp với khách và hình ảnh — Dowson nhấn mạnh phong cách địa điểm phải hợp văn hóa doanh nghiệp của khách. Hai: sức chứa và bố trí — diện tích dùng được, cột, trần, tầm nhìn. Ba: kỹ thuật — điện, treo thiết bị, Wi‑Fi, livestream cho chị Lan. Bốn: dịch vụ và nhà cung cấp độc quyền. Năm: lịch và điều khoản. Sáu: tổng chi phí — anh Khoa duyệt.",
    gv: "Lecture notes §2.3; nay có thêm căn cứ Dowson (2023, tr. 102–103): danh sách “must-haves” gồm vị trí, giao thông, hình ảnh – phong cách – fit with corporate culture, loại địa điểm, không khí, quy mô tương đối, sức chứa và bố trí, tiện ích và công nghệ, tiếp cận, chi phí/value for money, chỗ ở.",
    next: "Một câu chuyện đạo đức.",
  });

  // 21 castle ethics
  s = slide("Khi khách muốn một địa điểm vì sở thích cá nhân — agency phục vụ ai?");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaChessRook", 0.85, 2.15, 0.9, PUR, TX);
  T(s, "Câu chuyện “lâu đài”", 1.95, 2.15, 5.8, 0.9, { bold: true, fontSize: 19, color: YEL });
  T(s, "Người phụ trách phía khách muốn tổ chức sự kiện ở một lâu đài. Agency thấy lâu đài không hợp sự kiện — và nhận ra người đó chỉ muốn được ở lâu đài.\n\nAgency đặt cho người đó một chuyến nghỉ ở lâu đài, và đặt sự kiện ở địa điểm phù hợp hơn.", 0.9, 3.2, 6.8, 2.9, { fontSize: 16, valign: "top" });
  box(s, 8.15, 1.95, 4.58, 4.3, PINK);
  T(s, "“Consider the ethical aspects of such actions!”\n\nThảo luận: tổ chức của khách có biết không? Nova có đang tạo “agency effects” (Buổi 9)?", 8.35, 2.05, 4.18, 4.1, { fontSize: 16, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Dowson et al. (2023, tr. 105) (V14).", 6.45);
  notes(s, {
    say: "Một câu chuyện trong giáo trình. Người phụ trách phía khách muốn tổ chức sự kiện ở một lâu đài. Agency tìm hiểu và thấy lâu đài không hợp với sự kiện — và nhận ra người đó chỉ muốn được ở lâu đài. Agency đặt cho người đó một chuyến nghỉ ở lâu đài, và đặt sự kiện ở địa điểm phù hợp hơn. Tác giả viết: hãy cân nhắc khía cạnh đạo đức của hành động này! Thảo luận hai phút: tổ chức của khách có biết không? Ai trả tiền chuyến nghỉ? Nova có đang tiếp tay cho “agency effects” — người ra quyết định đặt lợi ích riêng lên trên tổ chức — mà ta đã gặp ở Buổi 9?",
    gv: "V14 tr. 105. Không có đáp án duy nhất; hướng chốt: minh bạch với tổ chức của khách; quà, lợi ích cá nhân cho người ra quyết định phải theo quy định của cả hai bên. Nối CLO8 (đạo đức nghề nghiệp) nếu đề cương có. Có thể bỏ nếu trễ giờ.",
    ask: "“Tổ chức của khách có biết không? Ai trả tiền chuyến nghỉ?”",
    next: "Đơn vị tìm địa điểm kiếm tiền thế nào?",
  });

  // 22 venue search agencies
  s = slide("Đơn vị tìm địa điểm “miễn phí” vì địa điểm trả hoa hồng — hãy hỏi họ làm việc với ai");
  const va = [["8–15%", "hoa hồng địa điểm trả cho đơn vị tìm địa điểm", TEAL], ["Vàng / Đồng", "địa điểm trả mức cao thường xuất hiện trong danh sách ngắn nhiều hơn", PINK]];
  va.forEach(([a, b, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.0); T(s, a, x, 2.05, 3.9, 1.3, { fontSize: i ? 38 : 48, bold: true, color: c, align: "center" }); T(s, b, x + 0.25, 3.35, 3.4, 1.4, { fontSize: 15, align: "center", valign: "top" }); });
  box(s, 8.86, 1.95, 3.87, 3.0, YEL);
  T(s, "Hỏi: có địa điểm hay chuỗi khách sạn nào họ không làm việc cùng?\n\nGiữ chỗ: lựa chọn thứ nhất / thứ hai (first / second option).", 9.06, 2.05, 3.47, 2.8, { fontSize: 15, bold: true, color: NAVY, valign: "top" });
  box(s, 0.6, 5.15, 12.13, 1.1, CARD);
  T(s, "Lưu cả danh sách địa điểm bị loại và lý do — “for the purpose of corporate governance, procurement requirements and transparent decision-making”.", 0.85, 5.15, 11.7, 1.1, { fontSize: 15.5 });
  src(s, "Nguồn: Dowson et al. (2023, tr. 110–111) (V14). Bối cảnh Anh; thị trường Việt Nam chưa có số liệu.", 6.45);
  notes(s, {
    say: "Nhiều agency nhờ đơn vị tìm địa điểm. Dịch vụ trông như miễn phí, vì địa điểm trả hoa hồng — theo Dowson, từ 8 đến 15%. Nhưng có đơn vị đặt mức hoa hồng khác nhau theo hạng Vàng, Đồng — và địa điểm trả mức cao lại hay xuất hiện trong danh sách ngắn hơn. Vậy hãy hỏi: có địa điểm hay chuỗi khách sạn nào họ không làm việc cùng? Địa điểm được giữ chỗ theo lựa chọn thứ nhất hoặc thứ hai — như khách sạn B ở Thực hành 1: Nova đang là lựa chọn thứ hai. Và lưu cả danh sách địa điểm bị loại, kèm lý do — để minh bạch với Key Account.",
    gv: "V14 tr. 110–111. Không có số liệu thị trường Việt Nam — [NEEDS PROFESSOR INPUT: kinh nghiệm thực tế về hoa hồng địa điểm ở Việt Nam nếu GV muốn bổ sung].",
    next: "Site check.",
  });

  // 23 site check
  s = slide("Site check là đi để hỏi, không phải đi để chụp ảnh");
  table(s, 0.6, 1.95, [6.2, 5.93], ["Câu hỏi site check", "Ảnh hưởng đến An Phát"], [
    ["Sức chứa tối đa, giấy phép? (chi tiết PCCC: môn Quản trị rủi ro)", "Không vượt giới hạn chính thức"],
    ["Nhà cung cấp độc quyền? Phụ thu mang ngoài vào?", "Chi phí, chất lượng AV"],
    ["AV, rigging, máy phát dự phòng? Wi‑Fi cho kỹ thuật?", "Livestream không bị đứt"],
    ["Khu hậu cần, khu chuẩn bị F&B? Giờ tập kết, thang hàng?", "Phục vụ đúng giờ; sân khấu kịp dựng"],
    ["Bãi đỗ xe? Quy định gắn thương hiệu?", "Khách VIP; nhận diện An Phát và nhà tài trợ"],
    ["Ngày thử chuông báo cháy? Nhà vệ sinh?", "Không bất ngờ giữa gala"],
  ], { hc: [TEAL, YEL], rh: 0.52, hh: 0.5, fs: 14 });
  src(s, "Nguồn: BizBash (V07) [VERIFY: năm đăng]; Dowson et al. (2023, Hình 5.5, tr. 114–116) (V14).", 6.45);
  notes(s, {
    say: "Site check là đi để hỏi. BizBash có 11 câu không bao giờ được quên; mẫu site visit của Dowson có thêm vài câu thú vị. Sức chứa tối đa và giấy phép. Nhà cung cấp độc quyền và phụ thu. AV, treo thiết bị, máy phát dự phòng, Wi‑Fi cho kỹ thuật. Khu hậu cần, khu chuẩn bị F&B, giờ tập kết, thang hàng. Bãi đỗ xe, quy định gắn thương hiệu. Và hai câu của Dowson: ngày nào thử chuông báo cháy — câu này được thêm vào sau một lần chuông kêu giữa đêm vì nồi hơi hỏng. Và: luôn kiểm tra nhà vệ sinh!",
    gv: "V14 tr. 116: “There’s no substitute for a physical inspection of the venue … always inspect [the toilets]!” Phạm vi: PCCC, lối thoát nạn → môn Quản trị rủi ro. Site check cùng anh Minh, chị Lan là điểm chạm trước mua (10.3).",
    next: "Một bài học từ mưa.",
  });

  // 24 case rain
  s = slide("Mặt bằng ngoài trời sau mưa: site check phải hỏi cả thời tiết và tầm nhìn");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaCloudShowersHeavy", 0.85, 2.15, 0.9, BLUE);
  T(s, "“Những thành phố mơ màng Summer 2026”, Hà Nội, 12/7/2026", 1.95, 2.15, 5.8, 0.9, { bold: true, fontSize: 16, color: BLUE });
  T(s, bullets(["Mưa lớn: khu vực không đảm bảo vệ sinh, khán giả lội bùn", "Sân khấu thấp, màn LED nhỏ, tầm nhìn hạn chế", "Ban tổ chức xin lỗi, cam kết rà soát “từ việc đánh giá điều kiện mặt bằng, xây dựng các phương án ứng phó với thời tiết…”"]), 0.9, 3.2, 6.8, 2.9, { fontSize: 15.5, valign: "top", paraSpaceAfter: 8 });
  box(s, 8.15, 1.95, 4.58, 4.3, YEL);
  T(s, "Site check trước đó thiếu câu hỏi nào?\n\nGợi ý: thoát nước khi mưa · phương án B · tầm nhìn từ cuối khán đài.\n\nPhương án B nằm trong hợp đồng với ai?", 8.35, 2.05, 4.18, 4.1, { fontSize: 16, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Tiền Phong (13/7/2026) (V11) — chưa KCC. [VERIFY: đối chiếu thêm một báo]", 6.45);
  notes(s, {
    say: "Một ví dụ Việt Nam. Concert Những thành phố mơ màng Summer 2026 ở Hà Nội, 12/7: mưa lớn làm khu vực không đảm bảo vệ sinh, khán giả lội bùn; sân khấu thấp, màn LED nhỏ, tầm nhìn hạn chế. Ban tổ chức xin lỗi và cam kết rà soát từ khâu đánh giá điều kiện mặt bằng đến phương án ứng phó thời tiết. Hỏi: site check trước đó thiếu câu hỏi nào? Và phương án B nằm trong hợp đồng với ai — địa điểm hay nhà cung cấp?",
    gv: "V11 một báo — chưa KCC; không nêu tên đơn vị tổ chức. Dowson ch.5 nhấn ba yếu tố bố trí: không gian, di chuyển, không khí — trong đó có tầm nhìn tới sân khấu (tr. 122).",
    ask: "“Site check trước đó thiếu câu hỏi nào?”",
    next: "Bố trí không gian.",
  });

  // 25 space movement atmosphere
  s = slide("Bố trí mặt bằng xoay quanh ba điều: không gian, di chuyển, không khí");
  const sma = [["Không gian", "Đủ chỗ cho mọi hoạt động; cả khu hậu cần (văn phòng, kho, phòng chờ nghệ sĩ, khu báo chí)", TEAL, "FaExpandArrowsAlt"], ["Di chuyển (ICE)", "Ingress — vào · Circulation — đi lại · Egress — ra; đủ chỗ xếp hàng ở lối vào", YEL, "FaWalking"], ["Không khí", "Khu ồn không cạnh khu yên; mọi khách nhìn và nghe được sân khấu", PINK, "FaTheaterMasks"]];
  for (let i = 0; i < 3; i++) { const [a, b, c, icn] = sma[i], x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.6); await ic(s, icn, x + 1.4, 2.15, 1.1, c); T(s, a, x + 0.2, 3.35, 3.5, 0.6, { align: "center", bold: true, fontSize: 20, color: c }); T(s, b, x + 0.25, 4.0, 3.4, 1.45, { align: "center", fontSize: 14.5, valign: "top" }); }
  box(s, 0.6, 5.7, 12.13, 0.6, CARD);
  T(s, "Gala An Phát: khu nhà tài trợ (Buổi 9) không đặt cạnh sân khấu lúc phát biểu; khách VIP có lối vào riêng.", 0.85, 5.7, 11.7, 0.6, { fontSize: 15, color: YEL, bold: true });
  src(s, "Nguồn: Dowson et al. (2023, tr. 119–122) (V14). Ví dụ gala là nhận định.", 6.45);
  notes(s, {
    say: "Dowson nêu ba điều khi bố trí mặt bằng. Không gian: đủ chỗ cho mọi hoạt động — kể cả khu hậu cần như văn phòng ban tổ chức, kho, phòng chờ nghệ sĩ, khu báo chí. Di chuyển — viết tắt ICE: vào, đi lại, ra; lối vào phải đủ chỗ xếp hàng và đón khách. Không khí: khu ồn không đặt cạnh khu yên, và mọi khách phải nhìn, nghe được sân khấu. Với gala An Phát: khu nhà tài trợ không nên đặt sát sân khấu lúc ông Tuấn phát biểu; khách VIP có lối vào riêng.",
    gv: "V14. Quản lý đám đông chi tiết (Dowson ch.6, Purple Guide) → môn Quản trị rủi ro.",
    next: "Cần bao nhiêu mét vuông?",
  });

  // 26 space estimate
  s = slide("Diện tích trên brochure không phải diện tích dùng được — và quy tắc ước lượng vênh nhau");
  table(s, 0.6, 1.95, [3.3, 3.0, 3.0], ["Kiểu bố trí", "Social Tables (V08)", "Price 2004, qua Dowson"], [
    ["Nhà hát", "≈ 0,6–0,7 m²*", "2 m²"],
    ["Bàn tròn tiệc / cabaret", "≈ 1,0–1,1 m²*", "4 m²"],
    ["Bàn họp", "—", "8–12 m²"],
  ], { hc: [YEL, TEAL, PINK], rh: 0.62, fs: 15, firstCol: YEL });
  box(s, 10.1, 1.95, 2.63, 2.75, PINK);
  T(s, "600 khách bàn tròn:\n~610–670 m² hay ~2.400 m²?", 10.25, 1.95, 2.33, 2.75, { fontSize: 15, bold: true, color: NAVY, align: "center" });
  box(s, 0.6, 4.9, 12.13, 1.35, CARD);
  T(s, "Bài học: không tin một con số. Xin bảng sức chứa và sơ đồ chính thức của địa điểm, hỏi “diện tích này là gì?” (tổng sàn hay sảnh dùng được), và đo khi site check. Một trung tâm hội nghị ở TP.HCM được ghi từ “hơn 4.000 m²” đến “khoảng 10.000 m²” trên các trang khác nhau.", 0.85, 4.9, 11.7, 1.35, { fontSize: 15 });
  src(s, "*Quy đổi từ sq ft (đứng 6, bàn tròn 11–12; nhà hát 6–8 — blog, chưa KCC); 1 m² ≈ 10,76 sq ft. Dowson et al. (2023, tr. 120) (V14). Ví dụ trung tâm hội nghị: V12, không nêu tên.", 6.45);
  notes(s, {
    say: "Cần bao nhiêu mét vuông? Quy tắc: sức chứa xấp xỉ diện tích dùng được chia diện tích mỗi người theo kiểu bố trí. Nhưng các quy tắc vênh nhau rất nhiều. Theo blog Social Tables, bàn tròn tiệc khoảng 1,0 đến 1,1 mét vuông mỗi khách. Theo Price, 2004, được giáo trình Dowson dẫn: cabaret hoặc bàn tiệc 4 mét vuông mỗi khách. Với 600 khách: khoảng 610–670 mét vuông chỉ cho khu bàn — hay khoảng 2.400 mét vuông? Chênh nhau gần bốn lần. Bài học: không tin một con số. Xin bảng sức chứa và sơ đồ chính thức của địa điểm, hỏi “diện tích này là gì”, và đo khi site check. Ví dụ: cùng một trung tâm hội nghị ở TP.HCM, các trang ghi từ hơn 4.000 đến khoảng 10.000 mét vuông.",
    gv: "Tính trên bảng cùng lớp (giáo án). Phiếu Thực hành 1 dùng 860–920 m² theo V08 (610–670 m² khu bàn + ~250 m² sân khấu, lối đi, buffet, nhà tài trợ). Chưa xác định Price (2004) và Social Tables có dùng cùng định nghĩa “diện tích mỗi người” không — [NEEDS PROFESSOR INPUT: giữ số V08 cho phiếu, hay đổi theo giáo trình]. Không nêu tên địa điểm thật (quyết định GV 4). Sức chứa chính thức theo giấy phép → môn Quản trị rủi ro.",
    ask: "“Ballroom 1.200 m² có chắc chứa thoải mái 600 khách?”",
    next: "Sơ đồ mặt bằng làm thế nào?",
  });

  // 27 site plan 3 steps
  s = slide("Dựng sơ đồ theo tỷ lệ, rồi xin góp ý của địa điểm, nhà cung cấp và Key Account");
  const sp = [["1", "Xin sơ đồ chi tiết", "Kích thước, sức chứa, lối vào – ra, điểm cố định (cột, ổ điện)", TEAL], ["2", "Xếp bố trí", "Đặt hoạt động chính trước; khu bổ trợ cạnh nhau; khu VIP, báo chí ở vị trí tốt; hậu cần khuất tầm mắt", YEL], ["3", "Xin góp ý", "Quản lý địa điểm, nhà cung cấp từng làm ở đây — và khách hàng", PINK]];
  sp.forEach(([k, a, b, c], i) => { const x = 0.6 + i * 4.13; num(s, k, x, 2.0, 0.8, c, 22); T(s, a, x + 0.95, 2.0, 2.9, 0.8, { bold: true, fontSize: 18, color: c }); box(s, x, 2.95, 3.9, 2.0); T(s, b, x + 0.2, 3.05, 3.5, 1.8, { fontSize: 15, valign: "top" }); });
  box(s, 0.6, 5.15, 12.13, 1.1, YEL);
  T(s, "Bước 3 là quản trị quan hệ: gửi sơ đồ cho anh Minh, chị Lan duyệt trước khi chốt với khách sạn.", 0.85, 5.15, 11.7, 1.1, { fontSize: 17, bold: true, color: NAVY });
  src(s, "Nguồn: Dowson et al. (2023, tr. 122–124) (V14).", 6.45);
  notes(s, {
    say: "Dowson nêu ba bước dựng sơ đồ. Một: xin sơ đồ chi tiết của địa điểm — kích thước, lối vào ra, điểm cố định như cột, ổ điện. Hai: xếp bố trí — đặt hoạt động chính trước; khu bổ trợ cạnh nhau; khu VIP và báo chí ở vị trí tốt; hậu cần khuất tầm mắt. Ba: xin góp ý của quản lý địa điểm, nhà cung cấp từng làm ở đây, và khách hàng. Bước ba chính là quản trị quan hệ: gửi sơ đồ cho anh Minh, chị Lan duyệt trước khi chốt với khách sạn.",
    gv: "V14 tr. 124: “It’s always a sensible idea to share the proposed layout with your client to ensure it meets their expectations.” Dowson còn khuyên làm nhiều loại bản đồ: cho khách và cho nhân sự, nhà cung cấp (Bảng 5.2).",
    next: "Sau khi chọn: làm việc với địa điểm.",
  });

  // 28 sales vs ops
  s = slide("Nhân viên kinh doanh hứa cả thế giới — nhân viên vận hành mới cho biết điều gì làm được");
  box(s, 0.6, 1.95, 5.9, 2.4, ORA);
  T(s, "“At first this will be with sales staff who may promise you the earth, but operational staff will tell you that it’s not that simple.”", 0.85, 1.95, 5.4, 2.4, { fontSize: 17, italic: true, bold: true, color: NAVY });
  box(s, 6.83, 1.95, 5.9, 2.4);
  T(s, bullets(["Gặp nhân viên vận hành trước khi ký", "Gửi function sheet: lịch, phòng, bố trí, AV, ăn kiêng, người ký duyệt", "Góp ý ngay trong ngày, không để thành khiếu nại sau khi về"]), 7.05, 2.05, 5.5, 2.2, { fontSize: 15.5, valign: "top", paraSpaceAfter: 6 });
  box(s, 0.6, 4.55, 12.13, 1.7, CARD);
  T(s, "Nối Buổi 8 (Diamond): với khách sạn cũng cần nhiều cặp đối ứng — KAMer của Nova ↔ sales khách sạn; producer ↔ quản lý vận hành; kỹ thuật ↔ kỹ thuật khách sạn.", 0.85, 4.55, 11.7, 1.7, { fontSize: 16, color: YEL, bold: true });
  src(s, "Nguồn: Dowson et al. (2023, tr. 116–118, Hình 5.7 — function sheet) (V14). Nối Diamond là nhận định.", 6.45);
  notes(s, {
    say: "Chọn xong mới là lúc làm việc thật với địa điểm. Dowson viết: lúc đầu bạn làm việc với nhân viên kinh doanh — họ có thể hứa cả thế giới; nhân viên vận hành mới cho bạn biết không đơn giản vậy. Nên: gặp nhân viên vận hành trước khi ký; gửi function sheet — lịch, phòng, bố trí, AV, ăn kiêng, người được ký duyệt; góp ý ngay trong ngày để xử lý tại chỗ, không để thành khiếu nại sau khi về. Nối Buổi 8: với khách sạn cũng cần mô hình kim cương — nhiều cặp đối ứng, không chỉ một sợi dây giữa KAMer và sales.",
    gv: "V14 tr. 117: “make sure you give feedback to staff during and after the event, so problems that arise can be easily and immediately addressed”. Mẫu function sheet: Hình 5.7.",
    next: "Và hợp đồng.",
  });

  // 29 contract clauses
  s = slide("Đọc kỹ những điều khoản chuyển rủi ro: hủy, giảm số khách, thay đổi, bất khả kháng");
  const cl = [["Hủy & attrition", "Phạt khi hủy; phạt khi số khách thấp hơn cam kết; hạn chốt số", PINK], ["Thay đổi dịch vụ", "Thỏa thuận cách đổi phạm vi và giá (variation to services)", YEL], ["Cọc & thanh toán", "Lịch cọc; người có thẩm quyền ký duyệt chi — cả phía khách", BLUE], ["Bất khả kháng & chấm dứt", "Khi nào được hủy không chịu trách nhiệm", TEAL], ["Bồi hoàn & bảo hiểm", "Ai chịu khi có thiệt hại; yêu cầu giấy chứng nhận bảo hiểm", ORA], ["Phí phát sinh", "Photo, Internet, phụ thu trong ngày", PUR]];
  cl.forEach(([a, b, c], i) => { const col = i % 3, row = Math.floor(i / 3), x = 0.6 + col * 4.13, y = 1.95 + row * 1.7; box(s, x, y, 3.9, 0.55, c); T(s, a, x + 0.15, y, 3.6, 0.55, { bold: true, fontSize: 15, color: c === PUR ? TX : NAVY }); box(s, x, y + 0.6, 3.9, 0.95); T(s, b, x + 0.15, y + 0.6, 3.6, 0.95, { fontSize: 14 }); });
  box(s, 0.6, 5.45, 12.13, 0.85, YEL);
  T(s, "“Once the contract is agreed (not necessarily signed, as verbal agreements can be binding), you are liable for up to the full amount.”", 0.85, 5.45, 11.7, 0.85, { fontSize: 15, bold: true, italic: true, color: NAVY });
  src(s, "Nguồn: Silvers (2008, Bảng 3.3, tr. 61–62) (V16); Dowson et al. (2023, tr. 222–223, 247) (V15). Bối cảnh Anh/Mỹ — [VERIFY: pháp chế theo luật Việt Nam].", 6.45);
  notes(s, {
    say: "Hợp đồng với địa điểm và nhà cung cấp. Silvers liệt kê các điều khoản quan trọng; Dowson thêm việc cần làm. Hủy và attrition — phạt khi số khách thấp hơn cam kết; nhớ khách sạn A chỉ cho giảm 5%, khách sạn B cho giảm 10%. Thay đổi dịch vụ: thỏa thuận trước cách đổi phạm vi và giá. Cọc và thanh toán, người có thẩm quyền ký duyệt — cả phía khách. Bất khả kháng và chấm dứt. Bồi hoàn và bảo hiểm. Và phí phát sinh trong ngày. Một câu đáng nhớ của Dowson: khi hợp đồng đã được đồng ý — chưa chắc đã ký, vì thỏa thuận miệng cũng có thể ràng buộc — bạn có thể phải chịu đến toàn bộ số tiền.",
    gv: "V16 tr. 62 (Hilliard): hợp đồng chỉ gồm những gì trong “bốn góc tờ giấy” — điều đã nói miệng phải ghi lại; tham khảo pháp chế trước khi ký. Các nguồn theo bối cảnh Anh/Mỹ — với luật Việt Nam (ví dụ hiệu lực thỏa thuận miệng) [VERIFY: pháp chế]. Nối Buổi 7 (đàm phán) và Buổi 9 (hợp đồng tài trợ 70/30).",
    next: "10.3: nhà cung cấp chạm Key Account ở đâu?",
  });

  // 30 Lemon Verhoef
  s = slide("Hành trình có ba giai đoạn và bốn loại điểm chạm — đối tác cũng là điểm chạm");
  const st3 = [["Trước mua", TEAL], ["Mua", YEL], ["Sau mua", PINK]];
  st3.forEach(([t, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 0.8, c); T(s, t, x, 1.95, 3.9, 0.8, { align: "center", bold: true, fontSize: 20, color: NAVY }); if (i < 2) arrow(s, x + 3.92, 2.15, 0.2, 0.4, MU); });
  const tp = [["Brand-owned", "do doanh nghiệp sở hữu", BLUE], ["Partner-owned", "do đối tác sở hữu", ORA], ["Customer-owned", "do khách tự làm", TEAL], ["Social / external", "bên ngoài", PUR]];
  tp.forEach(([a, b, c], i) => { const x = 0.6 + i * 3.08; box(s, x, 3.05, 2.9, 1.5); T(s, a, x + 0.15, 3.1, 2.6, 0.7, { align: "center", bold: true, fontSize: 17, color: c }); T(s, b, x + 0.15, 3.8, 2.6, 0.6, { align: "center", fontSize: 14 }); });
  box(s, 0.6, 4.8, 12.13, 1.45, CARD);
  T(s, "“Partners can include marketing agencies…”\nKhách sạn, AV, nhà in… là điểm chạm do đối tác sở hữu — trên hành trình của An Phát.", 0.85, 4.8, 11.7, 1.45, { fontSize: 17 });
  src(s, "Nguồn: Lemon & Verhoef (2016), Journal of Marketing (V09).", 6.45);
  notes(s, {
    say: "Mục 10.3. Lemon và Verhoef, 2016: hành trình khách hàng có ba giai đoạn — trước mua, mua, sau mua. Điểm chạm có bốn loại: do doanh nghiệp sở hữu, do đối tác sở hữu, do khách tự làm, và bên ngoài. Các tác giả viết: đối tác có thể gồm cả agency. Vậy khách sạn, AV, nhà in là điểm chạm do đối tác sở hữu — trên hành trình của An Phát.",
    gv: "V09 đã đọc toàn văn; đã dùng ở Buổi 3/8.",
    next: "Hôm nay đổi vai.",
  });

  // 31 role swap
  s = slide("Hôm nay An Phát là khách hàng của Nova");
  box(s, 0.6, 1.95, 5.9, 4.3);
  T(s, "Buổi 3, Buổi 9", 0.85, 2.05, 5.4, 0.6, { bold: true, fontSize: 18, color: MU });
  T(s, "Hành trình của KHÁCH CỦA AN PHÁT\n(600 lãnh đạo doanh nghiệp)\n\nNova + An Phát thiết kế điểm chạm cho họ", 0.85, 2.75, 5.4, 3.3, { fontSize: 18, valign: "top" });
  box(s, 6.83, 1.95, 5.9, 4.3, YEL);
  T(s, "Buổi 10", 7.08, 2.05, 5.4, 0.6, { bold: true, fontSize: 18, color: NAVY });
  T(s, "Hành trình của AN PHÁT với Nova\n\nKhách sạn, AV, nhà in… là điểm chạm do đối tác sở hữu mà anh Minh, chị Lan, anh Khoa nhìn thấy", 7.08, 2.75, 5.4, 3.3, { fontSize: 18, bold: true, color: NAVY, valign: "top" });
  notes(s, {
    say: "Đổi vai. Ở Buổi 3 và Buổi 9 ta vẽ hành trình của khách của An Phát — 600 lãnh đạo doanh nghiệp; Nova và An Phát cùng thiết kế điểm chạm cho họ. Hôm nay: An Phát là khách hàng của Nova. Khách sạn, AV, nhà in là điểm chạm do đối tác sở hữu trên hành trình mua của An Phát — mà anh Minh, chị Lan, anh Khoa nhìn thấy.",
    gv: "Quyết định GV 2 (phương án A). Alt-text: hai hành trình lồng nhau.",
    next: "Hành trình mua của An Phát.",
  });

  // 32 journey table
  s = slide("Nhà cung cấp chạm An Phát ở cả giai đoạn mua và sau mua");
  table(s, 0.6, 1.95, [2.0, 4.6, 5.53], ["Giai đoạn", "An Phát trải qua gì", "Nhà cung cấp chạm An Phát ở đâu"], [
    ["Trước mua", "Brief, đề xuất, báo giá, site check cùng Nova", "Khách sạn đón đoàn site check"],
    ["Mua", "Ký hợp đồng; tổng duyệt; ngày 12/12", "Khách sạn (sảnh, F&B), AV – livestream, backdrop, xe, nhiếp ảnh, lễ tân, quà"],
    ["Sau mua", "Nghiệm thu, báo cáo sau sự kiện (PER), hóa đơn, thanh toán, khiếu nại, đề xuất năm sau", "Album ảnh, bản ghi livestream, đối soát số khách thực tế, hồ sơ thanh toán gửi anh Khoa"],
  ], { hc: [YEL, TEAL, PINK], rh: 0.92, fs: 15, firstCol: YEL });
  T(s, "Giai đoạn sau mua hay bị quên — nhưng là thứ anh Minh nhớ khi quyết định tái ký.", 0.6, 5.75, 12.13, 0.5, { fontSize: 16, bold: true, color: PINK });
  src(s, "Hành trình do người soạn dựng từ V09 và V05 (PER — Buổi 8).", 6.45);
  notes(s, {
    say: "Hành trình mua của An Phát với Nova. Trước mua: brief, đề xuất, báo giá, site check cùng Nova — khách sạn đón đoàn. Mua: ký hợp đồng, tổng duyệt, ngày 12/12 — khách sạn, AV, livestream, backdrop, xe, nhiếp ảnh, lễ tân, quà. Sau mua: nghiệm thu, báo cáo sau sự kiện, hóa đơn, thanh toán, khiếu nại, đề xuất năm sau — album ảnh, bản ghi livestream, đối soát số khách thực tế với khách sạn, hồ sơ thanh toán gửi anh Khoa. Giai đoạn sau mua hay bị quên — nhưng hồ sơ thanh toán chậm, ảnh gửi muộn cũng là trải nghiệm của An Phát, và là thứ anh Minh nhớ khi quyết định có tái ký.",
    gv: "Lecture notes §3.2.",
    next: "Lỗi của ai?",
  });

  // 33 supplier fault = agency fault
  s = slide("Trong mắt Key Account, lỗi của nhà cung cấp là lỗi của agency");
  const ft = [["FaImage", "Backdrop in sai logo", "Chị Vy (thương hiệu) hỏi Nova", PINK], ["FaFileInvoiceDollar", "Hóa đơn khách sạn tính dư 30 khách", "Anh Khoa (ngân sách) hỏi Nova", ORA], ["FaWifi", "Livestream đứt giữa phần vinh danh", "Chị Lan (80 chi nhánh) hỏi Nova", YEL]];
  for (let i = 0; i < 3; i++) { const [icn, a, b, c] = ft[i], x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.0); await ic(s, icn, x + 1.4, 2.1, 1.1, c); T(s, a, x + 0.2, 3.3, 3.5, 0.8, { align: "center", bold: true, fontSize: 16, color: c }); T(s, b, x + 0.2, 4.1, 3.5, 0.7, { align: "center", fontSize: 15 }); }
  box(s, 0.6, 5.15, 12.13, 1.1, YEL);
  T(s, "An Phát ký với Nova, không ký với nhà in hay khách sạn → quản lý nhà cung cấp là quản lý trải nghiệm của Key Account.", 0.85, 5.15, 11.7, 1.1, { fontSize: 17, bold: true, color: NAVY });
  notes(s, {
    say: "An Phát ký với Nova, không ký với nhà in hay khách sạn. Backdrop in sai logo — chị Vy hỏi Nova. Hóa đơn khách sạn tính dư 30 khách — anh Khoa hỏi Nova. Livestream đứt giữa phần vinh danh — chị Lan hỏi Nova. Vì vậy quản lý nhà cung cấp là quản lý trải nghiệm của Key Account.",
    gv: "Lecture notes §3.3 — nhận định của người soạn. Silvers (2008, tr. 176): nhà tổ chức như “general contractor” quản lý mọi nhà cung cấp; tr. 175: có thể có trách nhiệm pháp lý khi giới thiệu nhà cung cấp kém năng lực.",
    next: "Bốn câu hỏi phân bổ.",
  });

  // 34 four questions
  s = slide("Bốn câu hỏi phân bổ nhà cung cấp");
  const fq = [["FaStream", "Chạm An Phát ở giai đoạn nào — mua hay sau mua?", TEAL], ["FaEye", "Ai của An Phát nhìn thấy họ? (anh Minh, ông Tuấn, chị Lan, chị Vy, anh Khoa, khách)", YEL], ["FaUnlink", "Nếu họ làm hỏng, quan hệ Nova – An Phát bị ảnh hưởng thế nào?", PINK], ["FaTasks", "Nova quản lý bằng gì: điều khoản, checklist, người phụ trách, chỉ số, đánh giá sau sự kiện?", BLUE]];
  for (let i = 0; i < 4; i++) { const y = 1.95 + i * 1.05; num(s, i + 1, 0.6, y + 0.05, 0.8, fq[i][2], 22); await ic(s, fq[i][0], 1.55, y + 0.05, 0.8, fq[i][2]); box(s, 2.55, y, 10.18, 0.9); T(s, fq[i][1], 2.8, y, 9.8, 0.9, { fontSize: 18, bold: true }); }
  T(s, "Chiếu suốt Thực hành 2. Dowson: thỏa thuận phản hồi hai chiều với nhà cung cấp ngay trong hợp đồng.", 0.6, 6.25, 12.13, 0.45, { fontSize: 14, color: MU, italic: true });
  notes(s, {
    say: "Bốn câu hỏi phân bổ. Một: nhà cung cấp này chạm An Phát ở giai đoạn nào — mua hay sau mua? Hai: ai của An Phát nhìn thấy họ? Ba: nếu họ làm hỏng, quan hệ Nova – An Phát bị ảnh hưởng thế nào? Bốn: Nova quản lý bằng gì — điều khoản hợp đồng, checklist, người phụ trách, chỉ số, đánh giá sau sự kiện?",
    gv: "Lecture notes §3.4. Dowson (2023, tr. 247): “Agree feedback processes as part of the contract, from your organization to the supplier, and from the supplier to you.” Để slide này trên màn hình suốt S6.",
    next: "Thực hành 2.",
  });

  // 35 practice 2
  s = await L.practice("Thực hành 2 · 30 phút: phân bổ nhà cung cấp vào giai đoạn mua và sau mua của An Phát", [["3’", "Mở đầu: dùng khách sạn nhóm đã chọn (mặc định B) + AV, in ấn, xe, nhiếp ảnh, lễ tân, quà", TEAL], ["15’", "Bảng trên A1: ≥ 5 nhà cung cấp (có khách sạn và AV), ≥ 2 dòng sau mua; đủ 6 cột; đánh dấu ⚠️ dòng rủi ro nhất", YEL], ["8’", "Xoay trạm 2 vòng × 4’: vai anh Khoa (ngân sách – mua sắm) — 1 câu hỏi (note vàng) + 1 lo ngại (note hồng)", PINK], ["4’", "Về bàn, đọc note, sửa một dòng", BLUE]], "FaSitemap", "Sản phẩm", "Bảng phân bổ đã sửa — mẫu cho trang “nhà cung cấp và địa điểm” trong SMP", "6 cột: nhà cung cấp · giai đoạn · điểm chạm · ai thấy · hỏng thì sao · quản lý bằng gì", YEL);
  notes(s, {
    say: "Thực hành 2, 30 phút. Nova đã chọn khách sạn — mặc định là B. Ngoài khách sạn còn AV – livestream, in ấn – backdrop, xe đưa đón khách VIP, nhiếp ảnh – quay phim, lễ tân thời vụ, quà tặng. Mười lăm phút: trên A1, lập bảng ít nhất 5 nhà cung cấp, bắt buộc có khách sạn và AV, ít nhất 2 dòng ở giai đoạn sau mua; đủ 6 cột; đánh dấu một dòng rủi ro nhất. Tám phút: xoay trạm 2 vòng; tại mỗi bàn các bạn đóng vai anh Khoa — ngân sách, mua sắm của An Phát — để lại một câu hỏi và một lo ngại về chi phí, hồ sơ, thanh toán hoặc trách nhiệm khi có sự cố. Bốn phút cuối: về bàn, sửa một dòng.",
    gv: "Phiếu W10_activity_S6_phan_bo_nha_cung_cap.md. Mốc phút 93–123. Chiếu slide 34 trong lúc làm. Nếu trễ giờ: xoay trạm 1 vòng. Ghi các câu hỏi “anh Khoa” lặp lại nhiều nhất lên bảng khi chốt.",
    next: "Tổng hợp.",
  });

  // 36 summary
  s = slide("Ba ý của Buổi 10 — và một trang mới cho kế hoạch");
  const sm = [["10.1", "Chọn cách mua theo hạng mục (ba báo giá, đấu thầu, nhà cung cấp ưu tiên). RFP tốt mang Key Account và khách của Key Account vào. Chấm có trọng số: value for money, công bằng, có dấu vết, phản hồi bên trượt", TEAL], ["10.2", "Chọn địa điểm trước vì địa điểm quyết định nhà cung cấp — và hình ảnh của Key Account. Site check là đi để hỏi; diện tích dùng được, không tin một con số; đọc kỹ điều khoản chuyển rủi ro", YEL], ["10.3", "Nhà cung cấp là điểm chạm do đối tác sở hữu trên hành trình mua của Key Account. Quản lý họ ở cả giai đoạn mua và sau mua", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.25; box(s, 0.6, y, 1.3, 1.05, c); T(s, k, 0.6, y, 1.3, 1.05, { align: "center", bold: true, color: NAVY, fontSize: 22 }); box(s, 2.1, y, 10.63, 1.05); T(s, t, 2.35, y, 10.2, 1.05, { fontSize: 14.5 }); });
  box(s, 0.6, 5.85, 12.13, 0.8, BLUE);
  T(s, "Kế hoạch cuối kỳ: trang “nhà cung cấp và địa điểm” — hạng mục chính, cách mua, 3 tiêu chí chọn, bảng phân bổ theo giai đoạn của Key Account.", 0.85, 5.85, 11.7, 0.8, { fontSize: 15, bold: true, color: NAVY });
  notes(s, {
    say: "Ba ý của Buổi 10. Mục 10.1: chọn cách mua theo hạng mục; RFP tốt mang Key Account và khách của Key Account vào; chấm có trọng số theo bốn nguyên tắc. Mục 10.2: chọn địa điểm trước vì địa điểm quyết định nhà cung cấp — và cả hình ảnh của Key Account; site check là đi để hỏi; không tin một con số diện tích; đọc kỹ điều khoản chuyển rủi ro. Mục 10.3: nhà cung cấp là điểm chạm do đối tác sở hữu trên hành trình mua của Key Account — quản lý họ ở cả giai đoạn mua và sau mua. Kế hoạch cuối kỳ thêm một trang: nhà cung cấp và địa điểm, với khách hàng dự án cũ. Làm dần trên lớp, không giao về nhà.",
    next: "Ba câu kiểm tra nhanh.",
  });

  // 37 quick check
  s = L.quickCheck(["RFP và RFQ khác nhau thế nào? Cho mỗi loại một hạng mục ở gala.", "Vì sao câu hỏi về nhà cung cấp độc quyền phải nằm trong RFP gửi khách sạn?", "Kể một nhà cung cấp chạm An Phát ở giai đoạn sau mua. Ai của An Phát nhìn thấy?"]);
  notes(s, { say: "Ba câu kiểm tra nhanh. Một: RFP và RFQ khác nhau thế nào — cho mỗi loại một hạng mục ở gala. Hai: vì sao câu hỏi về nhà cung cấp độc quyền phải nằm trong RFP gửi khách sạn? Ba: kể một nhà cung cấp chạm An Phát ở giai đoạn sau mua — ai của An Phát nhìn thấy?", gv: "Gợi ý: (1) RFP = giải pháp + giá, nhiều tiêu chí (ballroom, AV); RFQ = giá cho thông số rõ (backdrop, xe); (2) ký xong thì AV thành một nguồn, mất quyền so giá; (3) khách sạn đối soát số khách → anh Khoa; nhiếp ảnh gửi album → chị Vy, anh Minh.", ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.", next: "Phiếu cuối giờ." });

  // 38 exit
  s = await L.exitTicket("Với sự kiện trong dự án cũ của nhóm, nêu 1 hạng mục bạn mua bằng RFQ và 1 hạng mục bằng RFP. Vì sao khác nhau?", "Một câu hỏi site check bạn sẽ không bao giờ quên hỏi. Câu đó bảo vệ Key Account thế nào?");
  notes(s, { say: "Phiếu cuối giờ, cá nhân. Một: với sự kiện trong dự án cũ của nhóm, nêu một hạng mục bạn sẽ mua bằng RFQ và một hạng mục bằng RFP — vì sao khác nhau? Hai: một câu hỏi site check bạn sẽ không bao giờ quên hỏi — câu đó bảo vệ Key Account thế nào?", gv: "Xem: (a) RFQ cho thông số rõ, RFP cho giải pháp; (b) câu hỏi site check cụ thể (độc quyền, giờ dựng, diện tích dùng được, lịch trước – sau), không chung chung; (c) nối được với Key Account, không chỉ với Nova.", next: "Buổi sau." });

  // 39 next
  s = await L.nextSession("Không có bài về nhà. Buổi 11: báo chí và KOL kể lại sự kiện của Key Account", "Buổi 11 · Báo chí và KOL", "Hôm nay ta chọn và quản lý những đối tác làm ra sự kiện. Buổi sau là những đối tác kể lại sự kiện: báo chí, KOL, influencer — và cách để họ kể đúng câu chuyện của Key Account.", ["Ảnh bảng chấm khách sạn và bảng phân bổ nhà cung cấp", "Hồ sơ dự án cũ (phần truyền thông, KOL nếu có)"]);
  notes(s, { say: "Không có bài về nhà. Hôm nay ta chọn và quản lý những đối tác làm ra sự kiện. Buổi sau là những đối tác kể lại sự kiện: báo chí, KOL, influencer — và cách để họ kể đúng câu chuyện của Key Account. Mang theo ảnh bảng chấm khách sạn, bảng phân bổ nhà cung cấp, và hồ sơ dự án cũ — phần truyền thông.", gv: "Câu nối theo giáo án. [NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 10 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 40 refs
  s = L.refs([
    [["Chartered Institute of Procurement & Supply. (n.d.). "], ["Tender evaluation", 1], [". https://www.cips.org"]],
    [["Dowson, R., Albert, B., & Lomax, D. (2023). "], ["Event planning and management: Principles, planning and practice", 1], [" (3rd ed.). Kogan Page. (Chương 5, 9)"]],
    [["Events Industry Council. (n.d.). "], ["APEX RFP templates", 1], [". https://news.eventscouncil.org/apex/rfp-templates/"]],
    [["Ho, W., Xu, X., & Dey, P. K. (2010). Multi-criteria decision making approaches for supplier evaluation and selection: A literature review. "], ["European Journal of Operational Research, 202", 1], ["(1), 16–24."]],
    [["Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. "], ["Journal of Marketing, 80", 1], ["(6), 69–96."]],
    [["Silvers, J. R. (2008). "], ["Risk management for meetings and events", 1], [". Butterworth-Heinemann. (Chương 3, 7)"]],
    [["Weber, C. A., Current, J. R., & Benton, W. C. (1991). Vendor selection criteria and methods. "], ["European Journal of Operational Research, 50", 1], ["(1), 2–18."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 10, theo APA 7. Chương 5 và 9 của Dowson và cộng sự là phần đọc thêm.", gv: "Trang hiệp hội, khảo sát và báo chí (V01, V03, V06–V08, V10–V12): danh mục APA đầy đủ trong buoi-10_tu-lieu-tong-hop.md, mục 6 và 8. [VERIFY: phụ đề sách Dowson theo trang bìa.]", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
