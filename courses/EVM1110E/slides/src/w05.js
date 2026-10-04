// EVM1110E Buổi 5 — Customer value propositions (CVP), five sources of value, value co-creation
// usage: NODE_PATH=<node_modules> node w05.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W05_slides.pptx";
const L = make(FONT, "Bài 5: Đề xuất giá trị và đồng kiến tạo với Key Account");
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

(async () => {
  // 1
  let s = L.titleSlide("Bài 5: Đề xuất giá trị và đồng kiến tạo với Key Account", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 5\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 5 — Bài 5: Đề xuất giá trị và đồng kiến tạo với Key Account. Buổi 4 ta đo quan hệ. Quan hệ tốt là nền — nhưng khách hàng ở lại vì giá trị. Hôm nay: viết đề xuất giá trị, tìm giá trị ở đâu, và cùng khách hàng tạo ra giá trị.", gv: "Mở đầu bằng 2–3 “điều còn mơ hồ” từ phiếu cuối giờ Buổi 4 (≤3 phút).", next: "Bắt đầu bằng trang đầu hồ sơ năng lực của Nova." });

  // 2 hook
  s = slide("Đọc trang đầu hồ sơ năng lực này, chị Hạnh có biết An Phát sẽ được gì không?");
  box(s, 0.6, 1.95, 7.3, 4.3, TX);
  T(s, "NOVA EVENTS", 0.9, 2.15, 6.7, 0.7, { fontSize: 26, bold: true, color: NAVY });
  T(s, "Sáng tạo – Chuyên nghiệp – Tận tâm", 0.9, 2.95, 6.7, 0.8, { fontSize: 24, color: PINK, bold: true });
  T(s, "Hơn 10 năm kinh nghiệm · 500 sự kiện · đội ngũ trẻ, nhiệt huyết · giải pháp trọn gói từ ý tưởng đến thực hiện", 0.9, 3.85, 6.7, 1.6, { fontSize: 18, color: NAVY, valign: "top" });
  T(s, "(giả định)", 0.9, 5.7, 2.0, 0.4, { fontSize: 13, color: MU, italic: true });
  box(s, 8.2, 1.95, 4.53, 4.3);
  T(s, "Giơ tay: chị Hạnh biết An Phát sẽ được gì?", 8.45, 2.1, 4.1, 1.2, { bold: true, fontSize: 18, color: YEL, valign: "top" });
  [["Có", TEAL], ["Không", PINK]].forEach(([t, c], i) => { box(s, 8.5, 3.5 + i * 1.2, 3.93, 0.95, c); T(s, t, 8.7, 3.5 + i * 1.2, 3.5, 0.95, { fontSize: 22, bold: true, color: NAVY }); });
  notes(s, {
    say: "Trang đầu hồ sơ năng lực của Nova — giả định, nhưng rất giống thật: Sáng tạo – Chuyên nghiệp – Tận tâm. Hơn 10 năm kinh nghiệm, 500 sự kiện, đội ngũ trẻ nhiệt huyết, giải pháp trọn gói. Đọc xong, chị Hạnh có biết An Phát sẽ được gì không? Giơ tay.",
    gv: "Giáo án S1 (phút 0–5). Chốt ở slide 3.",
    ask: "“Có hay không? Câu nào trên trang nói về An Phát?”",
    next: "Không câu nào nói về An Phát.",
  });

  // 3 answer
  s = slide("Hồ sơ năng lực nói về agency; đề xuất giá trị nói về khách hàng");
  box(s, 0.6, 1.95, 5.9, 3.7, PINK);
  T(s, "Hồ sơ năng lực", 0.9, 2.1, 5.3, 0.6, { bold: true, fontSize: 21, color: NAVY });
  T(s, "“Chúng tôi là ai, làm được gì, đã làm bao nhiêu”", 0.9, 2.8, 5.3, 2.6, { fontSize: 19, color: NAVY, italic: true, valign: "top" });
  box(s, 6.83, 1.95, 5.9, 3.7, TEAL);
  T(s, "Đề xuất giá trị (CVP)", 7.13, 2.1, 5.3, 0.6, { bold: true, fontSize: 21, color: NAVY });
  T(s, "“An Phát sẽ ở đâu sau 1–3 năm, nhờ cái gì, đo bằng con số nào”", 7.13, 2.8, 5.3, 2.6, { fontSize: 19, color: NAVY, italic: true, valign: "top" });
  T(s, "“The aim of marketing is to know and understand the customer so well the product or service fits him and sells itself.” — Peter Drucker", 0.6, 5.85, 12.13, 0.8, { fontSize: 16, italic: true, color: YEL });
  src(s, "Câu Drucker theo Marcos et al. (2018, tr. 119).", 6.7);
  notes(s, {
    say: "Không câu nào nói về An Phát. Hồ sơ năng lực trả lời: chúng tôi là ai, làm được gì, đã làm bao nhiêu. Đề xuất giá trị — CVP — trả lời: An Phát sẽ ở đâu sau một đến ba năm, nhờ cái gì, đo bằng con số nào. Chương 5 giáo trình mở đầu bằng câu của Peter Drucker: mục đích của marketing là hiểu khách hàng rõ đến mức sản phẩm, dịch vụ tự vừa với họ và tự bán được.",
    gv: "Câu Drucker là epigraph của Chương 5, Marcos et al. (2018, tr. 119).",
    next: "Vậy CVP là gì — theo các nguồn?",
  });

  // 4 definitions
  s = slide("CVP là lời hứa về một tương lai tốt hơn cho khách hàng — kèm bằng chứng");
  defCards(s, [
    ["Slide bộ môn", TEAL, "Mô tả giá trị nhà cung cấp đưa ra: sản phẩm, dịch vụ, đặc tính sẽ cung cấp; đồng thời đưa bằng chứng chứng minh những lời “hứa” về giá trị sẽ mang lại hiệu quả cho khách hàng.", "(Trần Nguyễn Huỳnh Như, 2023, Chương 4, mục 4.1)"],
    ["Marcos et al. (2018)", YEL, "“A value proposition summarizes an improved future scenario offered by a supplier to its key account… and supports this position with evidence…”", "(tr. 120, phỏng theo Davies, 2017)"],
    ["McDonald (SAMA)", BLUE, "“The translation of the supplier’s offers into monetary terms that demonstrate their contribution to the customer’s profitability.”", "(McDonald, n.d.)"],
  ], "Tổng hợp: CVP = tương lai tốt hơn của khách hàng + điều agency đưa ra + bằng chứng và con số chứng minh.", 15);
  notes(s, {
    say: "Ba định nghĩa. Slide bộ môn: CVP mô tả giá trị nhà cung cấp đưa ra — sản phẩm, dịch vụ, đặc tính — đồng thời đưa bằng chứng chứng minh những lời hứa về giá trị sẽ hiệu quả với khách hàng. Giáo trình Marcos và cộng sự: đề xuất giá trị tóm tắt một viễn cảnh tương lai tốt hơn mà nhà cung cấp đưa ra cho key account, mô tả sản phẩm, dịch vụ và tinh thần quan hệ sẽ cung cấp, và chứng minh bằng bằng chứng. McDonald: chuyển đề nghị của nhà cung cấp thành tiền — cho thấy đóng góp vào lợi nhuận của khách hàng. Gộp lại: CVP là tương lai tốt hơn của khách hàng, cộng điều agency đưa ra, cộng bằng chứng và con số chứng minh.",
    gv: "Đã đối chiếu: slide gốc Chương 4 mục 4.1; Marcos et al. (2018, tr. 120) — định nghĩa đầy đủ: “…It describes products, services and the relationship ethos that will be provided, and supports this position with evidence to demonstrate how these value promises will deliver a sustainable competitive performance” (phỏng theo Davies, 2017, Infinite Value); E04 McDonald (SAMA).",
    next: "CVP ngắn — phần chi tiết nằm bên dưới.",
  });

  // 5 iceberg
  s = slide("CVP là phần nổi của tảng băng: tóm tắt ngắn, sắc — phương án chi tiết nằm bên dưới");
  s.addShape(L.pres.shapes.ISOSCELES_TRIANGLE, { x: 2.2, y: 1.95, w: 3.6, h: 1.6, fill: { color: TX }, line: { color: TX } });
  box(s, 0.6, 3.6, 6.8, 0.06, BLUE);
  s.addShape(L.pres.shapes.TRAPEZOID, { x: 0.9, y: 3.7, w: 6.2, h: 2.6, fill: { color: BLUE }, line: { color: BLUE }, flipV: true });
  T(s, "Value proposition\n(tóm tắt)", 2.2, 2.55, 3.6, 0.95, { align: "center", fontSize: 15, bold: true, color: NAVY });
  T(s, "Phương án chi tiết (offer)\nđầy đủ thông tin, kỹ thuật, giải thích", 1.4, 4.3, 5.2, 1.4, { align: "center", fontSize: 16, bold: true, color: NAVY });
  box(s, 7.7, 1.95, 5.03, 4.35);
  T(s, bullets(["Như một bản tóm tắt cho lãnh đạo: 2–3 đoạn", "Đặt ở đầu mọi bài trình bày, tài liệu, cuộc nói chuyện", "Khách “bị cuốn” bởi lời hứa → mới đọc tiếp phương án", "Đừng lạc vào chi tiết: luôn quay về CVP"]), 7.95, 2.1, 4.6, 4.1, { fontSize: 17, valign: "top", paraSpaceAfter: 10 });
  src(s, "Nguồn: Marcos et al. (2018, Hình 5.1, tr. 119–120); Trần Nguyễn Huỳnh Như (2023), Chương 4 — “Value Proposition (tóm tắt) / Phương án chi tiết”.", 6.45);
  notes(s, {
    say: "Giáo trình ví CVP như tảng băng. Phần nổi là đề xuất giá trị — một bản tóm tắt cho lãnh đạo, chỉ hai ba đoạn, ngắn và sắc, đặt ở đầu mọi bài trình bày, tài liệu, cuộc nói chuyện. Phần chìm là phương án chi tiết — đầy đủ, kỹ thuật, giải thích. Khi khách bị cuốn bởi lời hứa, họ mới đọc tiếp phương án. Đừng lạc vào chi tiết; luôn quay về CVP. Slide bộ môn có đúng cặp này: Value Proposition — tóm tắt ngắn gọn; Phương án chi tiết — đầy đủ thông tin.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 5.1 và đoạn tr. 119–120 (“effectively an executive summary… two or three paragraphs”; “exactly like an iceberg”); slide gốc Chương 4 mục 4.1.",
    next: "Nhưng phần lớn CVP ngoài thực tế không thuyết phục. Vì sao?",
  });

  // 6 Anderson three types
  s = slide("Phần lớn CVP tuyên bố mà không chứng minh — hãy chọn “trọng tâm cộng hưởng”");
  const ty = [["All benefits", "Liệt kê mọi lợi ích", "Dễ hứa lợi ích không có thật với khách hàng này", PINK], ["Favorable points of difference", "Điểm khác biệt có lợi so với đối thủ", "Khác biệt chưa chắc có giá trị với khách hàng này", ORA], ["Resonating focus", "1–2 điểm khác biệt tạo giá trị lớn nhất cho khách hàng", "Cần hiểu sâu khách hàng — nên dùng", TEAL]];
  ty.forEach(([a, b, c, col], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 0.85, col); T(s, a, x + 0.2, 1.95, 3.5, 0.85, { bold: true, fontSize: 17, color: NAVY }); box(s, x, 2.95, 3.9, 3.0); T(s, b, x + 0.2, 3.05, 3.5, 1.3, { fontSize: 17, bold: true, valign: "top" }); T(s, c, x + 0.2, 4.4, 3.5, 1.45, { fontSize: 15, color: MU, valign: "top" }); });
  src(s, "Nguồn: Anderson, Narus & van Rossum (2006), HBR 84(3) — exhibit “Which Alternative Conveys Value to Customers?”; khách hàng coi nhiều CVP là “marketing puffery”.", 6.2);
  notes(s, {
    say: "Anderson, Narus và van Rossum, 2006, trên Harvard Business Review: không có sự thống nhất CVP là gì; phần lớn CVP tuyên bố tiết kiệm và lợi ích mà không chứng minh, nên khách hàng coi là “marketing puffery” — quảng cáo thổi phồng. Họ chia ba kiểu. All benefits: liệt kê mọi lợi ích — dễ hứa điều không có thật với khách hàng này. Favorable points of difference: điểm khác biệt có lợi so với đối thủ — nhưng khác biệt chưa chắc có giá trị với khách hàng này. Resonating focus — trọng tâm cộng hưởng: một hai điểm khác biệt tạo giá trị lớn nhất cho khách hàng. Kiểu thứ ba cần hiểu sâu khách hàng — và đó là kiểu nên dùng.",
    gv: "E02 — đã đối chiếu bản đầy đủ (HBR reprint R0603F, tr.2–3 bản reprint): ba kiểu all benefits / favorable points of difference / resonating focus; bài còn phân biệt points of parity, points of difference, points of contention. Hồ sơ năng lực ở slide 2 là kiểu “all benefits” (đáp án bước 1 của Thực hành 1).",
    next: "Một CVP tốt có ba phần.",
  });

  // 7 three components
  s = slide("CVP có ba phần: tương lai của khách hàng, phương án của agency, đánh giá giá trị");
  const cp = [["Mong muốn tương lai của khách hàng", "Customer future state", "Khách hàng có thể mong đợi gì nếu mua đề xuất — phần quan trọng nhất", TEAL, "FaFlagCheckered"], ["Phương án cung cấp", "Supplier offer", "“How” và “what” — cốt lõi của lời đề nghị, có minh chứng đáng tin", YEL, "FaBoxOpen"], ["Cam kết / đánh giá giá trị", "Value appraisal", "Chi phí, mức hoàn vốn, chỉ số chứng minh hiệu quả thực tế", PINK, "FaCalculator"]];
  for (let i = 0; i < 3; i++) { const [a, b, c, col, icn] = cp[i], x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 4.3); await ic(s, icn, x + 1.4, 2.15, 1.1, col); T(s, a, x + 0.2, 3.35, 3.5, 0.95, { align: "center", bold: true, fontSize: 18, color: col }); T(s, b, x + 0.2, 4.3, 3.5, 0.45, { align: "center", fontSize: 14, italic: true, color: MU }); T(s, c, x + 0.25, 4.8, 3.4, 1.4, { align: "center", fontSize: 15, valign: "top" }); if (i < 2) arrow(s, x + 3.92, 3.85, 0.2, 0.4, MU); }
  src(s, "Nguồn: Marcos et al. (2018, Hình 5.3, tr. 122–123); Trần Nguyễn Huỳnh Như (2023), Chương 4, mục 4.2. Đề cương 5.1.", 6.45);
  notes(s, {
    say: "Đề cương mục 5.1. Giáo trình và slide bộ môn cùng chia CVP thành ba phần. Một — mong muốn tương lai của khách hàng, customer future state: khách có thể mong đợi gì nếu mua đề xuất; đây là phần quan trọng nhất. Hai — phương án cung cấp, supplier offer: phần “how” và “what”, cốt lõi của lời đề nghị, phải có minh chứng đáng tin. Ba — đánh giá giá trị, value appraisal: ở mức tổng quát, khách phải trả bao nhiêu, hoàn vốn ra sao, và vì sao đáng.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 5.3 “Three main components of a customer value proposition” và tr. 122–123; slide gốc Chương 4 mục 4.2 (“Mong muốn tương lai của khách hàng – Phương án cung cấp – Cam kết giá trị”). THAY ĐỔI so với gói W05 đã duyệt: cấu trúc ba phần trước ghi là “định nghĩa làm việc của môn” — nay đã có nguồn công khai (giáo trình) và nguồn nội bộ (slide bộ môn).",
    next: "Phần một: viết tương lai của khách hàng thế nào.",
  });

  // 8 future state
  s = slide("Phần mở đầu nói bằng ngôn ngữ của khách hàng — về điều đối thủ khó đưa ra");
  box(s, 0.6, 1.95, 6.6, 4.3);
  await ic(s, "FaFlagCheckered", 0.9, 2.2, 1.0, TEAL);
  T(s, "Một future state tốt", 2.1, 2.2, 4.9, 1.0, { bold: true, fontSize: 20, color: TEAL });
  T(s, bullets(["Nói bằng ngôn ngữ của khách hàng, về vấn đề và mục tiêu chiến lược của họ", "Thú vị nhưng thực tế, đáng tin, hấp dẫn, đúng lúc", "Mô tả điều đối thủ có lẽ không đưa ra được"]), 0.9, 3.4, 6.1, 2.7, { fontSize: 17, valign: "top", paraSpaceAfter: 8 });
  box(s, 7.5, 1.95, 5.23, 4.3, PINK);
  await ic(s, "FaExclamationTriangle", 7.8, 2.2, 1.0, NAVY, PINK);
  T(s, "Cảnh báo", 9.0, 2.2, 3.5, 1.0, { bold: true, fontSize: 20, color: NAVY });
  T(s, "Nếu đối thủ cũng đưa ra đúng điều đó, người mua chuyên nghiệp sẽ đặt hai bên đấu giá với nhau — và dịch vụ của bạn bị hàng hóa hóa.", 7.8, 3.4, 4.7, 2.7, { fontSize: 17, color: NAVY, valign: "top" });
  src(s, "Nguồn: Marcos et al. (2018, tr. 122–123); Trần Nguyễn Huỳnh Như (2023), Chương 4, mục 4.2.", 6.45);
  notes(s, {
    say: "Phần mở đầu — future state — phải nói bằng ngôn ngữ của khách hàng, về vấn đề quan trọng với họ và mục tiêu chiến lược họ theo đuổi. Cách viết: thú vị nhưng thực tế, đáng tin, hấp dẫn và đúng lúc. Quan trọng nhất: mô tả điều mà đối thủ có lẽ không đưa ra được. Cảnh báo của giáo trình: nếu đối thủ cũng đưa ra đúng điều đó, người mua chuyên nghiệp sẽ đặt hai bên đấu giá — và dịch vụ của bạn bị hàng hóa hóa. Nhớ thẻ “An Phát vẫn mời hai agency khác chào giá” ở Buổi 4?",
    gv: "Đã đối chiếu Marcos et al. (2018, tr. 122–123) và slide gốc Chương 4 (bốn ý ✓ của “Mong muốn tương lai của khách hàng”). Future state của An Phát dựa trên thế giới của An Phát ở Buổi 3 (tín dụng bị giới hạn → giữ khách DN VIP bằng cách khác).",
    next: "Phần hai: phương án của agency — dùng 7Ps.",
  });

  // 9 7Ps
  s = slide("Phương án của agency dịch vụ có 7P — và với dịch vụ, “con người trở thành sản phẩm”");
  const ps = [["Product", "chương trình, sự kiện", TEAL], ["Price", "phí, điều khoản, SLA, hợp đồng", TEAL], ["Place", "kênh, địa điểm, có mặt tại khách", TEAL], ["Promotion", "truyền thông, PR, mạng xã hội", TEAL], ["People", "toàn bộ đội ngũ khách tiếp xúc", PINK], ["Process", "cách làm việc phức tạp “trơn tru, không kịch tính”", PINK], ["Physical evidence", "văn phòng, website, giải thưởng, bài viết", PINK]];
  ps.forEach(([a, b, c], i) => { const x = 0.6 + (i % 4) * 3.07, y = 1.95 + Math.floor(i / 4) * 2.0; box(s, x, y, 2.9, 1.8, c); T(s, a, x + 0.15, y + 0.15, 2.6, 0.6, { bold: true, fontSize: 18, color: NAVY }); T(s, b, x + 0.15, y + 0.8, 2.6, 0.9, { fontSize: 14, color: NAVY, valign: "top" }); });
  box(s, 9.81, 3.95, 2.92, 1.8, YEL);
  T(s, "“Khách hàng không muốn mũi khoan ¼ inch — họ muốn cái lỗ ¼ inch.” — Levitt", 9.95, 3.95, 2.65, 1.8, { fontSize: 14, bold: true, color: NAVY });
  src(s, "Nguồn: Marcos et al. (2018, Hình 5.5, tr. 125–126; Levitt tr. 128); Booms & Bitner (1981); Trần Nguyễn Huỳnh Như (2023), Chương 4.", 6.0);
  notes(s, {
    say: "Phần hai — phương án — dùng mô hình 7P. Bốn P gốc: product — chương trình, sự kiện; price — không chỉ phí mà cả điều khoản, cam kết mức dịch vụ, hợp đồng; place — kênh và địa điểm tiếp cận khách, kể cả có mặt ngay tại khách; promotion — cách agency truyền thông. Ba P mở rộng cho dịch vụ: people — toàn bộ đội ngũ khách tiếp xúc; process — cách làm những việc phức tạp diễn ra trơn tru, không kịch tính; physical evidence — văn phòng, website, giải thưởng, bài viết: làm cái vô hình thành hữu hình. Giáo trình nói: khi chuyển sang dịch vụ, “con người trở thành sản phẩm”. Và câu của Theodore Levitt: khách không muốn mũi khoan một phần tư inch — họ muốn cái lỗ một phần tư inch.",
    gv: "Đã đối chiếu Marcos et al. (2018): Hình 5.5 và giải thích từng P (tr. 125–126; “your ‘people become your product’”; process “seamlessly and without drama”); Levitt (tr. 128: “People don’t want a quarter-inch drill, they want a quarter-inch hole”). LỖI SLIDE GỐC: slide bộ môn ghi “cái khoan 1.4 inch… cái lỗ 1,4 inch” — đúng ra là ¼ inch (quarter-inch). 7Ps gốc: Booms & Bitner (1981) (E03).",
    ask: "“Với An Phát, P nào là điểm mạnh nhất của Nova?”",
    next: "Phần ba: đánh giá giá trị.",
  });

  // 10 value appraisal
  s = slide("Đánh giá giá trị đóng lại CVP bằng con số — và thường là phần khách đọc đầu tiên");
  box(s, 0.6, 1.95, 5.9, 4.3);
  T(s, "Chỉ số tài chính tổng quát", 0.85, 2.05, 5.4, 0.55, { bold: true, fontSize: 18, color: TEAL });
  T(s, bullets(["Phí chương trình", "Thời gian hoàn vốn ước tính", "Thời gian đến khi có kết quả", "So với chi tiêu hiện tại"]), 0.85, 2.7, 5.4, 2.4, { fontSize: 17, valign: "top", paraSpaceAfter: 6 });
  T(s, "Ví dụ trong sách: đắt hơn nhà cung cấp hiện tại 30%, nhưng tiết kiệm hơn gấp đôi tổng phí.", 0.85, 5.1, 5.4, 1.0, { fontSize: 15, color: YEL, valign: "top" });
  box(s, 6.83, 1.95, 5.9, 4.3);
  T(s, "CPIs — chỉ số hiệu quả then chốt", 7.08, 2.05, 5.4, 0.55, { bold: true, fontSize: 18, color: PINK });
  T(s, "Gắn với nguồn giá trị, và là chỉ số khách hàng đang quan tâm hôm nay. Slide bộ môn gọi chung là KPIs — để làm hài lòng những người ra quyết định ở cả hai phía.", 7.08, 2.7, 5.4, 2.2, { fontSize: 16, valign: "top" });
  T(s, "“They trusted us to deliver our value promise, and we have.”", 7.08, 4.95, 5.4, 1.1, { fontSize: 16, italic: true, color: YEL, valign: "top" });
  src(s, "Nguồn: Marcos et al. (2018, tr. 127–128); Trần Nguyễn Huỳnh Như (2023), Chương 4, mục 4.2 — “Đánh giá giá trị… KPIs”.", 6.45);
  notes(s, {
    say: "Phần ba — đánh giá giá trị — đóng lại CVP bằng con số. Giáo trình nói đây thường là phần khách đọc đầu tiên — như ta lật ngay đến trang giá. Chỉ số tài chính tổng quát: phí chương trình; thời gian hoàn vốn ước tính; thời gian đến khi có kết quả; và so với chi tiêu hiện tại — ví dụ trong sách: đắt hơn nhà cung cấp hiện tại 30%, nhưng tiết kiệm được hơn gấp đôi tổng phí. Thêm các CPI — chỉ số hiệu quả then chốt — gắn với nguồn giá trị và là chỉ số khách quan tâm hôm nay. Slide bộ môn gọi chung là KPIs. Mục tiêu cuối: khách nói được “họ tin chúng tôi giữ lời hứa về giá trị — và chúng tôi đã giữ”.",
    gv: "Đã đối chiếu Marcos et al. (2018), “Quantifying customer value” (tr. 127–128): danh sách bốn chỉ số; “critical performance measures (CPIs)… should link to the five value sources”. Slide gốc Chương 4: “✓ KPIs”. Nối Buổi 8 (đo hiệu quả KAM) và Buổi 14 (hội đồng hỏi logic tài chính).",
    next: "Giáo trình gộp tất cả thành bốn bước.",
  });

  // 11 four-step construct
  s = slide("Bốn bước dựng một CVP: tương lai → phương án → bằng chứng → giá trị");
  const fs4 = [["1", "Tương lai của khách hàng", "5 nguồn giá trị", TEAL], ["2", "Phương án của agency", "mô hình 7P", YEL], ["3", "Bằng chứng, uy tín", "ca tương tự: vì sao · ở đâu · làm gì", ORA], ["4", "Đánh giá giá trị", "KPIs · CPIs", PINK]];
  fs4.forEach(([k, a, b, c], i) => { const x = 0.6 + i * 3.1; box(s, x, 2.0, 2.85, 3.7, c); num(s, k, x + 1.0, 2.2, 0.85, TX, 22); T(s, a, x + 0.15, 3.25, 2.55, 1.1, { align: "center", bold: true, fontSize: 18, color: NAVY }); T(s, b, x + 0.15, 4.4, 2.55, 1.1, { align: "center", fontSize: 15, color: NAVY, valign: "top" }); if (i < 3) arrow(s, x + 2.87, 3.65, 0.21, 0.4, MU); });
  T(s, "Bước 3 là phần slide bộ môn chưa tách riêng: ca đã làm, nhất là trong ngành của khách.", 0.6, 5.9, 12.13, 0.55, { fontSize: 16, bold: true, color: YEL });
  src(s, "Nguồn: Marcos et al. (2018, Hình 5.8, tr. 133–134).", 6.5);
  notes(s, {
    say: "Giáo trình gộp lại thành bốn bước. Bước một: mô tả tương lai của khách hàng, dùng năm nguồn giá trị — ta học sau giải lao. Bước hai: phương án của agency, dùng 7P. Bước ba: bằng chứng và uy tín — các ca đã làm, nhất là trong ngành của khách hoặc ngành tương tự. Bước bốn: đánh giá giá trị — KPI và CPI; càng chính xác càng tốt, vì phần này phải thuyết phục được lãnh đạo, tài chính, pháp chế ở cả hai phía — nên cẩn thận với mọi lời hứa.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 5.8 “Customer value proposition construct process” và Step 1–4 (tr. 133–134). Bước 3 (Evidence and credibility) bổ sung cho cấu trúc ba phần của slide bộ môn.",
    next: "Một CVP thật trong giáo trình.",
  });

  // 12 textbook case
  s = slide("Một CVP thật: “Tăng trưởng bền vững của bạn từ quan hệ đối tác của chúng ta”");
  box(s, 0.6, 1.95, 6.3, 4.4);
  T(s, "Nhà sản xuất thiết bị điều khiển → một nhà phân phối lớn (ẩn tên)", 0.85, 2.05, 5.8, 0.75, { fontSize: 15, color: MU, valign: "top" });
  T(s, [{ text: "Future state: ", options: { bold: true, color: TEAL } }, { text: "trở thành nhà cung cấp hệ thống điều khiển cao cấp; ước tính thận trọng doanh thu +15–20%/năm, lợi nhuận hoạt động +5–10%, trong 18 tháng", options: { breakLine: true } }, { text: "Bằng chứng: ", options: { bold: true, color: ORA } }, { text: "chương trình đã chạy 3 năm với các đối tác chọn lọc", options: { breakLine: true } }, { text: "Giá trị: ", options: { bold: true, color: PINK } }, { text: "KPI gắn với bốn trụ cột" }], 0.85, 2.85, 5.8, 3.4, { fontSize: 15, valign: "top", paraSpaceAfter: 8 });
  T(s, "Bốn trụ cột của chương trình", 7.2, 1.95, 5.53, 0.5, { bold: true, fontSize: 17, color: YEL });
  [["Tăng doanh số", "→ top line", TEAL], ["Hiệu quả vận hành", "→ bottom line", YEL], ["Hệ thống chất lượng", "→ uy tín, liên tục (HSSEQ)", ORA], ["Hỗ trợ chiến lược, quản lý", "→ advisory", PINK]].forEach(([a, b, c], i) => { const y = 2.55 + i * 0.95; box(s, 7.2, y, 5.53, 0.8, c); T(s, a, 7.4, y, 2.9, 0.8, { fontSize: 15, bold: true, color: NAVY }); T(s, b, 10.2, y, 2.45, 0.8, { fontSize: 14, color: NAVY }); });
  src(s, "Nguồn: Marcos et al. (2018, case study tr. 134–135). Cột “→ nguồn giá trị” là ánh xạ của người soạn.", 6.5);
  notes(s, {
    say: "Giáo trình đưa một CVP thật, đã ẩn tên. Một nhà sản xuất thiết bị điều khiển viết cho một nhà phân phối lớn. Future state: chúng tôi hiểu mong muốn của bạn có một doanh nghiệp an toàn, bền vững; mục tiêu trở thành nhà cung cấp hệ thống điều khiển cao cấp; ước tính thận trọng doanh thu tăng 15 đến 20% mỗi năm, lợi nhuận hoạt động tăng 5 đến 10%, trong 18 tháng. Phương án: chương trình đối tác chiến lược với bốn trụ cột — tăng doanh số, hiệu quả vận hành, hệ thống chất lượng, hỗ trợ chiến lược và quản lý. Bằng chứng: chương trình đã chạy ba năm với các đối tác chọn lọc. Giá trị: KPI gắn với bốn trụ cột. Để ý: bốn trụ cột khớp gần như đúng bốn nguồn giá trị ta sẽ học.",
    gv: "Đã đối chiếu Marcos et al. (2018), Case study “Your sustainable growth from our partnership” (tr. 134–135). Ánh xạ bốn trụ cột → nguồn giá trị là của người soạn, dùng làm cầu nối sang mục 5.2.",
    next: "Áp vào Nova – An Phát.",
  });

  // 13 Nova CVP example
  s = slide("CVP của Nova cho An Phát: giữ khách doanh nghiệp VIP bằng kiến thức và trải nghiệm không lỗi");
  const nv = [["Tương lai", "An Phát giữ và mở rộng quan hệ với khách doanh nghiệp VIP khi cạnh tranh bằng lãi suất khó hơn", TEAL], ["Phương án", "Chương trình cả năm: 4 hội thảo quý về quản trị dòng tiền + gala · offline + livestream ổn định 80 chi nhánh · đội Nova cố định · quy trình duyệt và đánh giá chung", YEL], ["Bằng chứng", "4 năm gala cho An Phát; dữ liệu tham dự các năm", ORA], ["Giá trị", "Tỷ lệ CEO đến trực tiếp · số cuộc hẹn kinh doanh sau sự kiện (An Phát báo) · chi phí gộp so với từng sự kiện rời", PINK]];
  nv.forEach(([a, b, c], i) => { const y = 1.95 + i * 1.08; box(s, 0.6, y, 2.3, 0.92, c); T(s, a, 0.6, y, 2.3, 0.92, { align: "center", bold: true, fontSize: 17, color: NAVY }); box(s, 3.1, y, 9.63, 0.92); T(s, b, 3.3, y, 9.3, 0.92, { fontSize: 15 }); });
  box(s, 0.6, 6.3, 12.13, 0.6, BLUE);
  T(s, "Trọng tâm cộng hưởng: kiến thức quản trị dòng tiền + livestream không lỗi.", 0.8, 6.3, 11.0, 0.6, { fontSize: 16, bold: true, color: NAVY });
  T(s, "(giả định)", 11.6, 6.3, 1.1, 0.6, { fontSize: 12, color: NAVY, italic: true });
  notes(s, {
    say: "Áp vào Nova – An Phát, giả định. Tương lai: An Phát giữ và mở rộng quan hệ với khách doanh nghiệp VIP khi cạnh tranh bằng lãi suất khó hơn. Phương án: chương trình cả năm — bốn hội thảo quý về quản trị dòng tiền cộng gala; offline cộng livestream ổn định cho 80 chi nhánh; đội Nova cố định; quy trình duyệt và đánh giá chung. Bằng chứng: bốn năm làm gala cho An Phát, dữ liệu tham dự các năm. Giá trị: tỷ lệ CEO đến trực tiếp; số cuộc hẹn kinh doanh sau sự kiện, do An Phát báo; chi phí gộp so với từng sự kiện rời. Trọng tâm cộng hưởng: kiến thức quản trị dòng tiền, và livestream không lỗi — điểm đau của chị Lan.",
    gv: "W05 lecture notes §1.3 và đáp án phiếu S3 — giả định. Livestream nối Buổi 3–4 (chị Lan).",
    next: "Mười mẹo của giáo trình — bốn mẹo quan trọng nhất.",
  });

  // 14 tips
  s = slide("Bốn mẹo từ giáo trình: hiểu khách, khác biệt, giữ lời, viết sắc");
  const tp = [["Kế hoạch KAM nghiên cứu kỹ là nền của CVP hấp dẫn", "FaMapMarkedAlt", TEAL], ["KAM đòi hỏi CVP riêng — cần đổi mới, lấy ý tưởng cả từ người “không làm sales”", "FaLightbulb", YEL], ["Làm đúng điều đã hứa — báo cho cả tổ chức biết mình đã hứa gì", "FaHandshake", ORA], ["Giữ CVP sắc nét: bắt đầu bằng gạch đầu dòng, hình vẽ; thử với người khác rồi mới viết hoàn chỉnh", "FaPenFancy", PINK]];
  for (let i = 0; i < 4; i++) { const x = 0.6 + (i % 2) * 6.13, y = 1.95 + Math.floor(i / 2) * 2.0; box(s, x, y, 5.9, 1.8); await ic(s, tp[i][1], x + 0.25, y + 0.45, 0.9, tp[i][2]); T(s, tp[i][0], x + 1.35, y, 4.4, 1.8, { fontSize: 16 }); }
  box(s, 0.6, 6.0, 12.13, 0.65, YEL);
  T(s, "“Dropping your price is not a source of value!” — giảm giá không phải là nguồn giá trị.", 0.8, 6.0, 11.7, 0.65, { fontSize: 16, bold: true, color: NAVY });
  notes(s, {
    say: "Giáo trình có mười mẹo; slide bộ môn chọn tám. Bốn mẹo quan trọng nhất cho ta. Một: kế hoạch KAM nghiên cứu kỹ là nền của một CVP hấp dẫn — không có hiểu khách hàng ở Buổi 3 thì không có CVP. Hai: KAM đòi hỏi CVP riêng cho từng khách — cần đổi mới, và lấy ý tưởng cả từ những người không làm sales. Ba: làm đúng điều đã hứa — và báo cho cả tổ chức biết mình đã hứa gì. Bốn: giữ CVP sắc nét — bắt đầu bằng gạch đầu dòng và hình vẽ, thử với người khác rồi mới viết hoàn chỉnh. Và một câu trong phần kết của chương: giảm giá không phải là một nguồn giá trị.",
    gv: "Đã đối chiếu Marcos et al. (2018), “Ten tips…” (tr. 135–136) — mẹo 1, 2, 9, 10 — và “Final thoughts” 6 (tr. 139). Slide gốc Chương 4 mục 4.3 “Mẹo để tối ưu phương án” là bản dịch 8 trong 10 mẹo. Chính tả slide gốc cần sửa: “giá tác động”, “trng CVP”.",
    next: "Thực hành 1: viết lại một CVP.",
  });

  // 15 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: viết lại CVP của Nova", [["4’", "Chẩn đoán: CVP hiện tại thuộc kiểu nào? Gạch chân các câu nói về Nova thay vì về An Phát", TEAL], ["12’", "Viết lại trên A3 theo 3 phần: tương lai (1–2 câu) · 7P (đủ 7 ô) · 2 chỉ số giá trị (ghi giả định). In đậm 1–2 điểm trọng tâm", YEL], ["4’", "Tóm CVP thành một câu chị Hạnh có thể nói lại với ông Tuấn", PINK]], "FaEdit", "Sản phẩm", "CVP ba phần trên A3 + một câu cho ông Tuấn", "Tương lai là mục tiêu kinh doanh của An Phát — không phải “một gala hoành tráng”.");
  notes(s, {
    say: "Thực hành 1, 20 phút. Bốn phút: chẩn đoán CVP hiện tại của Nova — thuộc kiểu nào; gạch chân các câu nói về Nova thay vì về An Phát. Mười hai phút: viết lại trên A3 theo ba phần — tương lai một hai câu; đủ bảy ô 7P; và hai chỉ số giá trị, ghi rõ giả định; in đậm một hai điểm trọng tâm. Bốn phút: tóm CVP thành một câu chị Hạnh có thể nói lại với ông Tuấn. Nhớ: tương lai là mục tiêu kinh doanh của An Phát — không phải “một gala hoành tráng”.",
    gv: "Phiếu W05_activity_S3_viet_lai_cvp.md. Mốc phút 30–50. Chiếu slide 7 và 9 trong lúc làm.",
    next: "Giải lao.",
  });

  // 16 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 50–58.", next: "Sau giải lao: tìm giá trị ở đâu." });

  // 17 question
  s = await L.question("Tìm giá trị ở đâu?", "Ngoài một sự kiện thành công, Nova còn có thể mang lại cho An Phát điều gì?", "FaGem", PUR, "Đề cương 5.2: năm nguồn giá trị");
  notes(s, { say: "Sau giải lao. Ngoài một sự kiện thành công, Nova còn có thể mang lại cho An Phát điều gì? Hãy nghĩ thật rộng.", ask: "“Mỗi bàn nói một ý trong 30 giây.”", next: "Giáo trình gom thành năm nguồn." });

  // 18 five sources
  s = slide("Giá trị có năm nguồn — đề cương và giáo trình trùng nhau");
  const fv = [["1", "Top line", "tăng doanh thu, thị phần, ngân sách", TEAL], ["2", "Bottom line", "giảm chi phí, lãng phí", YEL], ["3", "Uy tín và tính liên tục kinh doanh", "HSSEQ: sức khỏe, an toàn, an ninh, môi trường, chất lượng", ORA], ["4", "Chiến lược, tổ chức, tư vấn", "advisory", PINK], ["5", "Khách hàng của khách hàng", "the customer’s customer", BLUE]];
  fv.forEach(([k, a, b, c], i) => { const x = 0.6 + i * 2.47; box(s, x, 1.95, 2.25, 4.1, c); num(s, k, x + 0.7, 2.15, 0.85, TX, 22); T(s, a, x + 0.12, 3.15, 2.0, 1.35, { align: "center", bold: true, fontSize: 17, color: NAVY }); T(s, b, x + 0.12, 4.5, 2.0, 1.45, { align: "center", fontSize: 13, color: NAVY, valign: "top" }); });
  src(s, "Nguồn: Marcos et al. (2018, Hình 5.4, tr. 124); đề cương 5.2. Slide bộ môn Chương 4 tách HSSEQ và “Business reputation and continuity” thành hai ô.", 6.3);
  notes(s, {
    say: "Đề cương mục 5.2: năm nguồn giá trị. Giáo trình có đúng năm nguồn. Một — top line: giúp khách tăng doanh thu, mở thị trường, hay với tổ chức phi lợi nhuận là tăng ngân sách. Hai — bottom line: giúp khách giảm chi phí, lãng phí. Ba — uy tín và tính liên tục kinh doanh, mô tả bằng chữ viết tắt HSSEQ: sức khỏe, an toàn, an ninh, môi trường, chất lượng; vi phạm có thể làm mất cả thương hiệu. Bốn — chiến lược, tổ chức và tư vấn khác: agency có chuyên môn thì có thể tư vấn như một công ty tư vấn. Năm — khách hàng của khách hàng: giá trị cho người tiêu dùng cuối — nhu cầu con người như ăn uống, sức khỏe, thuộc về cộng đồng, tài chính, học hỏi.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 5.4 “The five sources of value” và tr. 124–125: “Business reputation and continuity. This value can be described using the acronym HSSEQ.” GIẢI QUYẾT Q2: đề cương (5 nguồn, có HSSEQ) khớp giáo trình; slide gốc Chương 4 vẽ HSSEQ và “Business reputation and continuity” thành hai ô nên trông như 6 nguồn — thực chất là một. THAY ĐỔI so với gói W05: năm nguồn trước ghi “định nghĩa làm việc của môn” — nay có nguồn công khai.",
    next: "Năm nguồn với Nova – An Phát.",
  });

  // 19 five sources applied
  s = slide("Năm nguồn giá trị Nova có thể mang lại cho An Phát");
  const ap = [["Top line", "Khách DN gắn bó hơn → giao dịch với An Phát tăng", TEAL], ["Bottom line", "Gộp sự kiện cả năm, đàm phán nhà cung cấp → giảm chi phí", YEL], ["Uy tín, liên tục (HSSEQ)", "Bảo vệ dữ liệu khách mời; sự kiện xanh; chất lượng ổn định; giảm rủi ro uy tín", ORA], ["Advisory", "Insight về hành vi khách VIP, xu hướng sự kiện B2B", PINK], ["Khách của khách hàng", "600 khách VIP được kiến thức, kết nối, trải nghiệm", BLUE]];
  ap.forEach(([a, b, c], i) => { const y = 1.95 + i * 0.86; box(s, 0.6, y, 3.4, 0.74, c); T(s, a, 0.8, y, 3.1, 0.74, { bold: true, fontSize: 16, color: NAVY }); box(s, 4.2, y, 8.53, 0.74); T(s, b, 4.4, y, 8.2, 0.74, { fontSize: 16 }); });
  T(s, "Không đi sâu an toàn đám đông — thuộc môn Quản trị rủi ro.", 0.6, 6.35, 9.0, 0.45, { fontSize: 14, color: MU, italic: true });
  T(s, "(giả định)", 10.9, 6.35, 1.83, 0.45, { fontSize: 13, color: MU, italic: true, align: "right" });
  notes(s, {
    say: "Năm nguồn với Nova – An Phát, giả định. Top line: khách doanh nghiệp gắn bó hơn, giao dịch với An Phát tăng. Bottom line: gộp sự kiện cả năm, đàm phán nhà cung cấp, giảm chi phí. Uy tín và tính liên tục: bảo vệ dữ liệu khách mời, sự kiện xanh, chất lượng ổn định — giảm rủi ro uy tín cho một ngân hàng. Advisory: insight về hành vi khách VIP, xu hướng sự kiện B2B. Khách của khách hàng: 600 khách VIP được kiến thức, kết nối, trải nghiệm — và An Phát được lợi. Slide này chiếu suốt Thực hành 2.",
    gv: "W05 lecture notes §2 (bảng). HSSEQ: không đi sâu an toàn đám đông (môn Quản trị rủi ro). Giáo trình gợi ý xây một “cơ sở dữ liệu” ý tưởng theo năm nguồn cho mọi key account (tr. 125).",
    next: "Kiểm tra nhanh.",
  });

  // 20 vote
  s = slide("Giơ 1–5 ngón: đây là nguồn giá trị nào?");
  box(s, 0.6, 1.95, 7.2, 3.6);
  await ic(s, "FaChartPie", 0.9, 2.25, 1.0, PUR);
  T(s, "Nova tổng hợp 4 năm khảo sát khách mời, gửi An Phát một báo cáo ngắn: khách DN VIP quan tâm chủ đề gì, đến vào giờ nào, rời đi lúc nào.", 2.15, 2.15, 5.45, 3.2, { fontSize: 18, valign: "top" });
  T(s, "(giả định)", 0.9, 5.05, 2.0, 0.4, { fontSize: 13, color: MU, italic: true });
  [["1", "Top line", TEAL], ["2", "Bottom line", YEL], ["3", "Uy tín, liên tục", ORA], ["4", "Advisory", PINK], ["5", "Khách của khách hàng", BLUE]].forEach(([k, t, c], i) => { num(s, k, 8.2, 1.95 + i * 0.78, 0.65, c, 17); box(s, 9.05, 1.95 + i * 0.78, 3.68, 0.65); T(s, t, 9.25, 1.95 + i * 0.78, 3.35, 0.65, { fontSize: 17, bold: true }); });
  notes(s, {
    say: "Tình huống giả định: Nova tổng hợp bốn năm khảo sát khách mời, gửi An Phát một báo cáo ngắn — khách doanh nghiệp VIP quan tâm chủ đề gì, đến vào giờ nào, rời đi lúc nào. Đây là nguồn giá trị nào? Giơ một đến năm ngón.",
    gv: "Đáp án chính: 4 — advisory. Chấp nhận thêm 1 (top line) nếu SV lập luận được báo cáo giúp An Phát giữ khách.",
    ask: "Giơ 1–5 ngón.",
    next: "Đáp án.",
  });

  // 21 answer
  s = slide("Đáp án: advisory — nguồn giá trị agency hay quên nhất");
  box(s, 0.6, 1.95, 7.2, 3.6);
  T(s, bullets(["Nova có dữ liệu và kinh nghiệm mà An Phát không có", "Chia sẻ insight = tư vấn, dù không ai gọi đó là “tư vấn”", "Giáo trình hỏi: nhà cung cấp có chuyên môn — điều gì ngăn họ trở thành một lựa chọn tư vấn đáng tin?"]), 0.9, 2.1, 6.7, 3.3, { fontSize: 18, valign: "top", paraSpaceAfter: 10 });
  box(s, 8.2, 1.95, 4.53, 3.6, PINK);
  T(s, "Insight biến agency từ người thực hiện thành người đáng hỏi ý kiến.", 8.45, 1.95, 4.05, 3.6, { fontSize: 21, bold: true, color: NAVY });
  src(s, "Nguồn: Marcos et al. (2018, tr. 124). Dữ liệu khảo sát dùng ở mức tổng hợp, không lộ thông tin cá nhân khách mời.", 5.85);
  notes(s, {
    say: "Đáp án chính: advisory. Nova có dữ liệu và kinh nghiệm mà An Phát không có. Chia sẻ insight là tư vấn — dù không ai gọi đó là tư vấn. Giáo trình hỏi: một nhà cung cấp có chuyên môn sâu thì điều gì ngăn họ trở thành một lựa chọn tư vấn đáng tin, như các công ty tư vấn? Insight biến agency từ người thực hiện thành người đáng hỏi ý kiến — nhớ “critical friend” ở Buổi 4. Lưu ý: dữ liệu khảo sát chỉ dùng ở mức tổng hợp, không lộ thông tin cá nhân khách mời.",
    gv: "Marcos et al. (2018, tr. 124): “As a supplier with considerable expertise… what is stopping this source of value being offered as a very credible alternative?” Ghi chú dữ liệu nối HSSEQ và slide đạo đức.",
    next: "Nguồn giá trị thứ năm qua một ví dụ thật.",
  });

  // 22 customer's customer VPBank
  s = slide("Giá trị cho khách của khách hàng: ngân hàng dùng sự kiện để tạo đặc quyền cho chủ thẻ");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaCreditCard", 0.9, 2.2, 1.0, BLUE);
  T(s, "VPBank · G-DRAGON 2025 World Tour, Hà Nội", 2.1, 2.2, 5.6, 1.0, { bold: true, fontSize: 18, color: BLUE });
  T(s, bullets(["VPBank là nhà tài trợ danh vị — “presented by VPBank”", "Chủ thẻ VPBank Mastercard được mua vé sớm một ngày trước khi mở bán chung", "Giá trị không chỉ cho ngân hàng mà cho khách của ngân hàng"]), 0.9, 3.4, 6.7, 2.7, { fontSize: 17, valign: "top", paraSpaceAfter: 8 });
  box(s, 8.2, 1.95, 4.53, 4.3, YEL);
  T(s, "Với An Phát: 600 khách VIP nhận được gì mà họ không tự mua được?", 8.45, 1.95, 4.05, 4.3, { fontSize: 20, bold: true, color: NAVY });
  src(s, "Nguồn: VnExpress (5/10/2025, nội dung được tài trợ); Tuổi Trẻ. Mô tả cơ chế quyền lợi, không phải bằng chứng hiệu quả. Quan hệ ngân hàng – nhà tổ chức tour: ví dụ tương tự.", 6.45);
  notes(s, {
    say: "Nguồn giá trị thứ năm — khách của khách hàng. VPBank là nhà tài trợ danh vị của G-DRAGON 2025 World Tour tại Hà Nội. Quyền lợi kích hoạt: chủ thẻ VPBank Mastercard được mua vé sớm một ngày trước khi mở bán chung. Giá trị ở đây tạo ra cho khách của ngân hàng — chủ thẻ — không chỉ cho ngân hàng. Với An Phát: 600 khách VIP nhận được gì mà họ không tự mua được?",
    gv: "U10 (Buổi 9). VnExpress ghi rõ “Nội dung được tài trợ” — chỉ dùng để mô tả cơ chế. Đây là quan hệ ngân hàng – nhà tổ chức tour, dùng như ví dụ tương tự.",
    ask: "“Khách VIP của An Phát không tự mua được điều gì?”",
    next: "Sang mục 5.3: cùng khách hàng tạo ra giá trị.",
  });

  // 23 value in use / spheres
  s = slide("Giá trị không nằm sẵn trong sản phẩm — nó được tạo ra khi khách hàng sử dụng");
  box(s, 0.6, 1.95, 5.9, 2.0, CARD);
  T(s, [{ text: "Value in exchange: ", options: { bold: true, color: MU } }, { text: "giá trị nằm trong sản phẩm, trao tay là xong" }], 0.85, 1.95, 5.4, 2.0, { fontSize: 17 });
  arrow(s, 3.2, 4.05, 0.5, 0.4, YEL);
  box(s, 0.6, 4.55, 5.9, 1.75, TEAL);
  T(s, [{ text: "Value in use: ", options: { bold: true } }, { text: "giá trị tạo ra trong quá trình dùng — trước, trong và sau khi mua" }], 0.85, 4.55, 5.4, 1.75, { fontSize: 17, color: NAVY });
  circ(s, 7.0, 2.2, 3.0, BLUE); circ(s, 9.5, 2.2, 3.0, PINK);
  T(s, "Agency", 7.2, 3.2, 1.6, 1.0, { fontSize: 17, bold: true, color: NAVY, align: "center" });
  T(s, "Khách hàng", 10.75, 3.2, 1.6, 1.0, { fontSize: 17, bold: true, color: NAVY, align: "center" });
  T(s, "Vùng chung", 9.25, 3.2, 1.0, 1.0, { fontSize: 13, bold: true, color: TX, align: "center" });
  T(s, "Ba “vùng” tạo giá trị: của agency, của khách hàng, và vùng chung khi hai bên tương tác.", 7.0, 5.35, 5.73, 0.95, { fontSize: 15, color: YEL, valign: "top" });
  src(s, "Nguồn: Marcos et al. (2018, tr. 141–142, 144).", 6.45);
  notes(s, {
    say: "Đề cương mục 5.3. Giáo trình bắt đầu bằng một dịch chuyển: từ value in exchange — giá trị nằm trong sản phẩm, trao tay là xong — sang value in use — giá trị được tạo ra khi khách hàng sử dụng, trước, trong và sau khi mua. Với sự kiện, điều này rất rõ: giá trị của gala nằm trong trải nghiệm của 600 khách, không nằm trong hợp đồng. Giá trị được tạo ở ba vùng: của agency, của khách hàng, và vùng chung khi hai bên tương tác. Đồng kiến tạo là làm việc trong vùng chung đó.",
    gv: "Đã đối chiếu Marcos et al. (2018), Chương 6: “Foundations of value co-creation: value in exchange vs value in use” (tr. 141–142) và “value creation can occur within at least three spheres: the provider, the customer, and the joint sphere” (tr. 144).",
    next: "Vậy đồng kiến tạo là gì?",
  });

  // 24 co-creation definitions
  s = slide("Đồng kiến tạo là khách hàng cùng làm — không chỉ duyệt");
  defCards(s, [
    ["Marcos et al. (2018)", TEAL, "Đồng kiến tạo giá trị là một năng lực, được xây dựng qua sự gắn kết tập trung của cả tổ chức nhà cung cấp lẫn khách hàng và từng cá nhân.", "(tr. 141)"],
    ["Marcos-Cuevas et al. (2016)", YEL, "Cơ chế chung: “sustained purposeful engagement” — gắn kết có mục đích, bền bỉ, qua các thực hành cụ thể.", "(Industrial Marketing Management, 56)"],
    ["Slide bộ môn", BLUE, "Mục 4.4 “Đồng sáng tạo cùng khách hàng trọng yếu” — có trong mục lục; bản PDF không có nội dung chữ.", "(Trần Nguyễn Huỳnh Như, 2023, Chương 4)"],
  ], "Tổng hợp: đồng kiến tạo = agency và khách hàng cùng làm, có mục đích chung, qua những thực hành lặp lại đến thành năng lực.");
  notes(s, {
    say: "Giáo trình định nghĩa đồng kiến tạo giá trị là một năng lực — được xây qua sự gắn kết tập trung của cả hai tổ chức và từng cá nhân. Bài báo gốc của Marcos-Cuevas và cộng sự, 2016, gọi cơ chế chung là “sustained purposeful engagement” — gắn kết có mục đích và bền bỉ. Slide bộ môn có mục 4.4 “Đồng sáng tạo cùng khách hàng trọng yếu” nhưng bản PDF không có nội dung chữ. Gộp lại: đồng kiến tạo là agency và khách hàng cùng làm, có mục đích chung, qua những thực hành lặp lại cho đến khi thành năng lực.",
    gv: "Đã đối chiếu Marcos et al. (2018, tr. 141): “We conceptualize value co-creation as a capability that is built through the focused engagement of both the supplier and the customer organizations and individuals.” E05 (Marcos-Cuevas et al., 2016) — đã đọc toàn văn; Javier Marcos là tác giả chính của cả hai. [NEEDS PROFESSOR INPUT: nội dung mục 4.4 slide bộ môn nếu GV có bản gốc.]",
    next: "Bốn thực hành trong đề cương.",
  });

  // 25 four practices
  s = slide("Bốn thực hành trong đề cương — định nghĩa nguyên văn và ví dụ với An Phát");
  const pr = [["Co-diagnosis", "“Collecting and organizing information for collaborative use”", "Cùng đọc khảo sát khách mời 3 năm", TEAL], ["Co-ideation", "“Generating and suggesting ideas, communicating and sharing, engaging”", "Workshop ý tưởng với chị Hạnh, chị Vy", YEL], ["Co-design", "“Developing concepts and knowledge”", "Cùng thiết kế hành trình khách VIP", ORA], ["Co-testing", "“Prototyping and improving the offering, giving feedback”", "Thí điểm hội thảo quý; chạy thử livestream với chị Lan", PINK]];
  pr.forEach(([a, b, c, col], i) => { const y = 1.95 + i * 1.08; box(s, 0.6, y, 2.6, 0.92, col); T(s, a, 0.8, y, 2.3, 0.92, { bold: true, fontSize: 17, color: NAVY }); box(s, 3.4, y, 5.4, 0.92); T(s, b, 3.6, y, 5.0, 0.92, { fontSize: 14, italic: true }); box(s, 9.0, y, 3.73, 0.92); T(s, c, 9.2, y, 3.4, 0.92, { fontSize: 14 }); });
  src(s, "Nguồn: Marcos et al. (2018, Bảng 6.1, tr. 148); Marcos-Cuevas et al. (2016). Cột ví dụ: giả định. Chiếu suốt Thực hành 2.", 6.35);
  notes(s, {
    say: "Bốn thực hành trong đề cương, định nghĩa nguyên văn. Co-diagnosis: thu thập và sắp xếp thông tin để cùng dùng — ví dụ cùng đọc khảo sát khách mời ba năm. Co-ideation: tạo và đề xuất ý tưởng, trao đổi, chia sẻ, gắn kết — workshop ý tưởng với chị Hạnh, chị Vy. Co-design: phát triển khái niệm và tri thức — cùng thiết kế hành trình khách VIP. Co-testing: làm mẫu thử, cải tiến, góp ý — thí điểm một hội thảo quý, chạy thử livestream với chị Lan.",
    gv: "Đã đối chiếu Marcos et al. (2018), Bảng 6.1 “Co-creation practices and underpinning capabilities” (tr. 148) — định nghĩa trùng nguyên văn E05. Ví dụ là giả định (W05 lecture notes §3.1).",
    next: "Bốn thực hành nằm trong một khung lớn hơn.",
  });

  // 26 three groups
  s = slide("Đồng kiến tạo có ba nhóm thực hành: kết nối, phát triển, củng cố");
  const gr = [["Kết nối", "Connecting · linking", ["Co-diagnosis", "Co-ideation", "Co-evaluation — nhận xét, chọn ý tưởng"], TEAL], ["Phát triển", "Developing · materializing", ["Co-design", "Co-testing", "Co-launching — thông tin, quảng bá, lan tỏa"], YEL], ["Củng cố", "Reinforcing · institutionalizing", ["Embedding — xây quy tắc, chuẩn mực, cấu trúc để giữ giá trị đã tạo"], PINK]];
  gr.forEach(([a, b, items, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 1.3, c); T(s, a, x + 0.2, 2.0, 3.5, 0.7, { bold: true, fontSize: 22, color: NAVY }); T(s, b, x + 0.2, 2.65, 3.5, 0.5, { fontSize: 13, italic: true, color: NAVY }); box(s, x, 3.4, 3.9, 2.8); T(s, bullets(items), x + 0.25, 3.5, 3.45, 2.6, { fontSize: 16, valign: "top", paraSpaceAfter: 8 }); });
  src(s, "Nguồn: Marcos et al. (2018, Bảng 6.1, Hình 6.2, tr. 148–151) — tên nhóm trong sách; tên thứ hai theo Marcos-Cuevas et al. (2016). Không cần theo thứ tự tuyến tính.", 6.4);
  notes(s, {
    say: "Bốn thực hành nằm trong ba nhóm. Kết nối: co-diagnosis, co-ideation, và co-evaluation — cùng nhận xét, chọn ý tưởng. Phát triển: co-design, co-testing, và co-launching — cùng đưa ra thị trường, quảng bá. Củng cố: embedding — xây quy tắc, chuẩn mực, cấu trúc để giữ giá trị đã tạo, để đồng kiến tạo thành cách làm việc. Giáo trình nhấn: các thực hành không cần đi theo thứ tự tuyến tính; có thể diễn ra đồng thời và liên tục.",
    gv: "Đã đối chiếu Marcos et al. (2018): Bảng 6.1, Hình 6.2, và đoạn “three core capabilities (Connecting, Developing and Reinforcing)” (tr. 148–151); “do not need to happen in a linear order”. Bài báo E05 dùng tên Linking – Materializing – Institutionalizing; W05 lecture notes §3.2 dùng tên của bài báo — slide ghi cả hai.",
    next: "Để làm được, tổ chức cần những năng lực nào?",
  });

  // 27 six capabilities
  s = slide("Sáu năng lực tương tác giúp agency đồng kiến tạo với khách hàng");
  const cap = [["Individuated", "hiểu nhu cầu nói ra và nhu cầu ẩn của từng khách", TEAL], ["Relational", "gắn kết xã hội, cảm xúc với người ra quyết định", YEL], ["Ethical", "quy trình công bằng, không cơ hội → niềm tin", ORA], ["Empowered", "khách được tác động đến chương trình nghị sự và cách tạo giá trị", PINK], ["Developmental", "xây tri thức, năng lực cho việc kết hợp nguồn lực", BLUE], ["Concerted", "điều phối khách hàng với nhiều phòng ban và đối tác", PUR]];
  cap.forEach(([a, b, c], i) => { const x = 0.6 + (i % 3) * 4.13, y = 1.95 + Math.floor(i / 3) * 2.15; box(s, x, y, 3.9, 1.95, c); T(s, a, x + 0.2, y + 0.15, 3.5, 0.6, { bold: true, fontSize: 19, color: c === PUR ? TX : NAVY }); T(s, b, x + 0.2, y + 0.8, 3.5, 1.05, { fontSize: 15, color: c === PUR ? TX : NAVY, valign: "top" }); });
  src(s, "Nguồn: Marcos et al. (2018, Hình 6.1, tr. 145–147, dẫn Karpen, Bove & Lukas, 2011).", 6.4);
  notes(s, {
    say: "Giáo trình nêu sáu năng lực tương tác. Individuated: hiểu cả nhu cầu nói ra và nhu cầu ẩn của từng khách. Relational: gắn kết xã hội và cảm xúc với người ra quyết định. Ethical: quy trình công bằng, không cơ hội — để niềm tin xuất hiện. Empowered: khách được tác động đến chương trình nghị sự của quan hệ và cách tạo ra giá trị. Developmental: xây tri thức và năng lực để kết hợp nguồn lực. Concerted: điều phối khách hàng cùng nhiều phòng ban và đối tác. Để ý: relational và ethical chính là Buổi 4.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 6.1 “Interaction capabilities for value co-creation” và danh sách 1–6 (tr. 145–147), dẫn Karpen et al. (2011). Ví dụ trong sách: Amazon (individuated), Nike “Consumer Decides” (empowered), Microsoft – AstraZeneca (concerted).",
    next: "Một ca đồng kiến tạo — có cả tài trợ sự kiện ngành.",
  });

  // 28 UFS case
  s = slide("Unilever Food Solutions đồng kiến tạo với đầu bếp — và dùng cả sự kiện ngành");
  box(s, 0.6, 1.95, 6.6, 4.3);
  await ic(s, "FaUtensils", 0.9, 2.2, 1.0, YEL);
  T(s, "Unilever Food Solutions (UFS)", 2.1, 2.2, 4.9, 1.0, { bold: true, fontSize: 19, color: YEL });
  T(s, bullets(["Thị trường dịch vụ ăn uống bị hàng hóa hóa", "Chuyển từ nhà sản xuất thực phẩm sang nhà cung cấp giải pháp: tài trợ sự kiện ngành, gợi ý công thức, phân tích chi phí món ăn", "Ba gói dịch vụ: “Your Guests”, “Your Menu”, “Your Kitchen”"]), 0.9, 3.35, 6.1, 2.8, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  box(s, 7.5, 1.95, 5.23, 4.3, TEAL);
  T(s, "Đầu bếp của UFS làm việc cùng đội marketing và vận hành của khách: co-diagnosis, co-ideation, co-design.", 7.75, 2.1, 4.75, 2.2, { fontSize: 17, bold: true, color: NAVY, valign: "top" });
  T(s, "Mục đích chung đến từ văn hóa nghề giống nhau: đầu bếp nói chuyện với đầu bếp.", 7.75, 4.35, 4.75, 1.8, { fontSize: 16, color: NAVY, valign: "top" });
  src(s, "Nguồn: Marcos et al. (2018, tr. 142–144, 154).", 6.45);
  notes(s, {
    say: "Giáo trình kể ca Unilever Food Solutions. Thị trường dịch vụ ăn uống bị hàng hóa hóa. UFS chuyển từ nhà sản xuất thực phẩm sang nhà cung cấp giải pháp: tài trợ các sự kiện ngành, giúp khách công thức và cách trình bày món, phân tích chi phí món ăn. Họ xây ba gói dịch vụ: “Your Guests” — hiểu khách của nhà hàng; “Your Menu” — thực đơn vừa bổ dưỡng vừa có lãi; “Your Kitchen” — tối ưu vận hành bếp. Đầu bếp của UFS làm việc cùng đội marketing và vận hành của khách — co-diagnosis, co-ideation, co-design. Giáo trình giải thích: mục đích chung đến từ văn hóa nghề giống nhau — đầu bếp nói chuyện với đầu bếp. Với Nova: người làm sự kiện nói chuyện với người làm thương hiệu, truyền thông của An Phát.",
    gv: "Đã đối chiếu Marcos et al. (2018), hộp “Unilever Food Solutions: co-creating inspiration for your customers” (tr. 142–144) và đoạn về “similar professional cultures” (tr. 154). Số liệu trong sách (65 nước, 5.400 nhân viên…) không đưa lên slide.",
    next: "Điều kiện để đồng kiến tạo thành công.",
  });

  // 29 conditions & Techcombank
  s = slide("Điều kiện đầu tiên là cùng mục đích — và đồng kiến tạo tốn công nên dành cho Key Account");
  box(s, 0.6, 1.95, 6.0, 4.3);
  T(s, "Điều kiện", 0.85, 2.05, 5.5, 0.55, { bold: true, fontSize: 18, color: TEAL });
  T(s, bullets(["Cùng mục đích — cùng thấy kết quả mong đợi", "Một “sự kiện thúc đẩy” khiến hai bên cùng hành động", "Thỏa thuận chia sẻ rủi ro – lợi ích khi đầu tư lớn", "Niềm tin, quan hệ cá nhân — cần nhưng chưa đủ"]), 0.85, 2.7, 5.5, 3.4, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  box(s, 6.85, 1.95, 5.88, 4.3, YEL);
  T(s, "Ví dụ Việt Nam", 7.1, 2.05, 5.4, 0.55, { bold: true, fontSize: 18, color: NAVY });
  T(s, "Techcombank với các concert “Anh trai vượt ngàn chông gai” năm 2025: Yeah1 cho biết Techcombank tham gia không chỉ là nhà tài trợ mà là “nhà đồng đầu tư” — không phải đầu tư cổ phần.", 7.1, 2.7, 5.4, 3.4, { fontSize: 16, color: NAVY, valign: "top" });
  src(s, "Nguồn: Marcos et al. (2018, tr. 153–154); Znews (20/1/2025); Báo Đầu tư. Quan hệ ngân hàng – nhà sản xuất: ví dụ tương tự.", 6.45);
  notes(s, {
    say: "Điều kiện. Một: cùng mục đích — hai bên cùng thấy kết quả mong đợi. Hai: giáo trình nói về “compelling events” — một sự kiện thúc đẩy khiến hai bên cùng hành động, như khi khách lớn đòi một dịch vụ mới. Ba: khi đầu tư lớn, cần thỏa thuận chia sẻ rủi ro và lợi ích. Bốn: niềm tin và quan hệ cá nhân — cần nhưng chưa đủ; phải có thực hành cụ thể. Ví dụ Việt Nam: Techcombank với các concert “Anh trai vượt ngàn chông gai” năm 2025 — Yeah1 cho biết Techcombank không chỉ là nhà tài trợ mà là nhà đồng đầu tư, theo hình thức mới, không phải đầu tư cổ phần. Đồng kiến tạo tốn công — nên dành cho Key Account.",
    gv: "Đã đối chiếu Marcos et al. (2018): “compelling events”, “co-creation readiness” (tr. 153); “High levels of interaction… trust are necessary but not sufficient conditions” (tr. 153); “Common purpose is often facilitated by agreed mechanisms to share the risk and the benefits” (tr. 154). Techcombank = U08 (Buổi 9), đã KCC (Znews, Báo Đầu tư). Blog Cranfield (Marcos): “alignment of purpose”.",
    next: "Ba lỗi thường gặp.",
  });

  // 30 errors
  s = slide("Ba lỗi khi làm CVP và đồng kiến tạo");
  const er = ["Future state là giải pháp của agency (“gala hoành tráng”), không phải mục tiêu của khách", "Value appraisal chỉ có “khách hài lòng” — không có con số", "Gọi là đồng kiến tạo nhưng khách chỉ “duyệt”"];
  for (let i = 0; i < 3; i++) { const y = 2.0 + i * 1.25; box(s, 0.6, y, 7.6, 1.05); await ic(s, "FaTimes", 0.8, y + 0.2, 0.65, PINK); T(s, er[i], 1.65, y, 6.45, 1.05, { fontSize: 17 }); }
  box(s, 8.5, 2.0, 4.23, 3.55, YEL);
  T(s, "Không có value appraisal thì CVP chỉ là lời hứa.", 8.75, 2.0, 3.75, 3.55, { fontSize: 22, bold: true, color: NAVY });
  notes(s, {
    say: "Ba lỗi. Một: future state là giải pháp của agency — “một gala hoành tráng” — không phải mục tiêu kinh doanh của khách. Hai: value appraisal chỉ có “khách hài lòng” — không có con số; hài lòng là chỉ số yếu, Buổi 8 sẽ học cách đo tốt hơn. Ba: gọi là đồng kiến tạo nhưng khách chỉ duyệt — không cùng làm. Không có value appraisal thì CVP chỉ là lời hứa.",
    gv: "Theo phần “Tình huống thất bại” của phiếu S3 và S6.",
    next: "Một lưu ý đạo đức.",
  });

  // 31 ethics
  s = slide("Đồng kiến tạo dùng dữ liệu và ý tưởng của khách hàng — phải rõ quyền và sự đồng ý");
  box(s, 0.6, 1.95, 6.0, 3.6);
  await ic(s, "FaCheck", 0.85, 2.2, 0.85, TEAL);
  T(s, "Nên", 1.9, 2.2, 4.5, 0.85, { bold: true, fontSize: 20, color: TEAL });
  T(s, bullets(["Hỏi An Phát trước khi liên hệ khách VIP", "Dùng dữ liệu ở mức tổng hợp", "Thống nhất từ đầu: ý tưởng chung thuộc về ai"]), 0.9, 3.2, 5.5, 2.2, { fontSize: 17, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.85, 1.95, 5.88, 3.6);
  await ic(s, "FaTimes", 7.1, 2.2, 0.85, PINK);
  T(s, "Không", 8.15, 2.2, 4.4, 0.85, { bold: true, fontSize: 20, color: PINK });
  T(s, bullets(["Hứa con số trong CVP mà không kiểm soát được", "Mang ý tưởng làm cùng An Phát sang bán cho ngân hàng khác", "Khảo sát khách mời ngoài mục đích được đồng ý"]), 7.15, 3.2, 5.4, 2.2, { fontSize: 17, valign: "top", paraSpaceAfter: 6 });
  T(s, "Giáo trình: “Deliver what you promise” — và cẩn thận với mọi lời hứa trong value appraisal.", 0.6, 5.85, 12.13, 0.6, { fontSize: 18, bold: true, color: YEL });
  notes(s, {
    say: "Đồng kiến tạo dùng dữ liệu và ý tưởng của khách hàng. Nên: hỏi An Phát trước khi liên hệ khách VIP; dùng dữ liệu ở mức tổng hợp; thống nhất từ đầu ý tưởng làm chung thuộc về ai. Không: hứa con số trong CVP mà mình không kiểm soát được; mang ý tưởng làm cùng An Phát sang bán cho ngân hàng khác; khảo sát khách mời ngoài mục đích được đồng ý. Giáo trình nhắc: làm đúng điều đã hứa — và cẩn thận với mọi lời hứa trong phần đánh giá giá trị.",
    gv: "Marcos et al. (2018): mẹo 9 “Deliver what you promise” (tr. 136); Step 4 “be careful regarding your value proposition claims!” (tr. 133). [NEEDS PROFESSOR INPUT: quy định về sở hữu trí tuệ ý tưởng/concept trong hợp đồng agency — nếu muốn nêu, cần văn bản hoặc mẫu hợp đồng cụ thể (mẫu #61 trong notebook).] Slide là nguyên tắc nghề nghiệp, không phải tư vấn pháp lý.",
    next: "Thực hành 2: kế hoạch đồng kiến tạo.",
  });

  // 32 practice 2
  s = await L.practice("Thực hành 2 · 30 phút: kế hoạch đồng kiến tạo cho chương trình cả năm", [["3’", "Đọc tình huống: chị Hạnh muốn An Phát tham gia từ đầu nhưng lo tốn thời gian của đội", TEAL], ["13’", "A1: bảng 4 bước co-diagnosis → co-testing: làm gì · ai của An Phát, bao lâu · đầu ra · nguồn giá trị chính; thêm 1 điều kiện thành công", YEL], ["8’", "Xoay trạm 2 vòng, vai chị Hạnh: 1 câu hỏi (note vàng) + 1 lo ngại về thời gian, dữ liệu khách, thương hiệu (note hồng)", PINK], ["6’", "Về bàn, sửa một bước; GV chốt", BLUE]], "FaUsers", "Sản phẩm", "Kế hoạch đồng kiến tạo 4 bước — mẫu cho phần C của kế hoạch", "Mỗi bước: An Phát cùng làm gì — không chỉ “duyệt”.", YEL);
  notes(s, {
    say: "Thực hành 2, 30 phút. Ba phút: đọc tình huống — chị Hạnh đồng ý thử chương trình cả năm, muốn An Phát tham gia từ đầu, nhưng lo tốn thời gian của đội. Mười ba phút: trên A1, lập bảng bốn bước từ co-diagnosis đến co-testing — làm gì, ai của An Phát tham gia và mất bao lâu, đầu ra, nguồn giá trị chính; thêm một điều kiện để thành công. Tám phút: xoay trạm hai vòng, đóng vai chị Hạnh — một câu hỏi và một lo ngại. Sáu phút: về bàn sửa một bước. Mỗi bước phải trả lời: An Phát cùng làm gì — không chỉ duyệt.",
    gv: "Phiếu W05_activity_S6_dong_kien_tao.md. Mốc phút 91–121. Chiếu slide 19 (năm nguồn với An Phát) và 25 (bốn thực hành).",
    next: "Tổng hợp.",
  });

  // 33 summary
  s = slide("Ba ý của Buổi 5 — và phần C của kế hoạch");
  const sm = [["5.1", "CVP = tương lai của khách hàng + phương án 7P + bằng chứng + đánh giá giá trị có con số; chọn trọng tâm cộng hưởng", TEAL], ["5.2", "Năm nguồn giá trị: top line · bottom line · uy tín, liên tục (HSSEQ) · advisory · khách của khách hàng", YEL], ["5.3", "Đồng kiến tạo: co-diagnosis → co-ideation → co-design → co-testing; khách cùng làm, cùng mục đích", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.25; box(s, 0.6, y, 1.3, 1.05, c); T(s, k, 0.6, y, 1.3, 1.05, { align: "center", bold: true, color: NAVY, fontSize: 22 }); box(s, 2.1, y, 10.63, 1.05); T(s, t, 2.35, y, 10.2, 1.05, { fontSize: 16 }); });
  box(s, 0.6, 5.85, 12.13, 0.8, BLUE);
  T(s, "Kế hoạch cuối kỳ: đây là phần C. Value Propositions cho khách hàng từ dự án cũ (Buổi 13).", 0.85, 5.85, 11.7, 0.8, { fontSize: 17, bold: true, color: NAVY });
  notes(s, {
    say: "Ba ý của Buổi 5. Mục 5.1: CVP gồm tương lai của khách hàng, phương án 7P, bằng chứng, và đánh giá giá trị có con số; chọn trọng tâm cộng hưởng. Mục 5.2: năm nguồn giá trị — top line, bottom line, uy tín và tính liên tục với HSSEQ, advisory, và khách của khách hàng. Mục 5.3: đồng kiến tạo qua co-diagnosis, co-ideation, co-design, co-testing — khách cùng làm, với cùng mục đích. Với kế hoạch cuối kỳ, đây là phần C — Value Propositions.",
    next: "Ba câu kiểm tra nhanh.",
  });

  // 34 quick check
  s = L.quickCheck(["Ba phần của một CVP là gì? Phần nào quan trọng nhất?", "Nguồn giá trị nào chứa HSSEQ? Cho một ví dụ HSSEQ với khách hàng là ngân hàng.", "Khác nhau giữa co-ideation và co-design là gì?"]);
  notes(s, { say: "Ba câu kiểm tra nhanh. Một: ba phần của một CVP là gì — phần nào quan trọng nhất? Hai: nguồn giá trị nào chứa HSSEQ — cho một ví dụ với khách hàng là ngân hàng. Ba: khác nhau giữa co-ideation và co-design là gì?", gv: "Gợi ý: (1) tương lai của khách hàng – phương án – đánh giá giá trị; tương lai quan trọng nhất; (2) uy tín và tính liên tục kinh doanh; ví dụ bảo vệ dữ liệu khách mời; (3) co-ideation tạo và chia sẻ ý tưởng; co-design phát triển ý tưởng thành khái niệm cụ thể.", ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.", next: "Phiếu cuối giờ." });

  // 35 exit
  s = await L.exitTicket("Viết một câu CVP cho khách hàng dự án cũ của nhóm theo kiểu trọng tâm cộng hưởng.", "Nguồn giá trị nào (trong năm nguồn) nhóm chưa từng nghĩ tới với khách hàng đó?");
  notes(s, { say: "Phiếu cuối giờ. Một: viết một câu CVP cho khách hàng dự án cũ của nhóm theo kiểu trọng tâm cộng hưởng. Hai: nguồn giá trị nào trong năm nguồn nhóm chưa từng nghĩ tới với khách hàng đó?", gv: "Xem: (a) CVP nói về giá trị cho khách hàng, có 1–2 điểm trọng tâm; (b) SV nhận ra advisory hoặc khách của khách hàng.", next: "Buổi sau." });

  // 36 next
  s = await L.nextSession("Không có bài về nhà. Buổi 6: khách hàng này đáng bao nhiêu với Nova?", "Buổi 6 · Tài chính trong KAM", "Giá trị cho khách hàng phải đi cùng giá trị cho agency. Buổi sau: giá trị vòng đời khách hàng (CLV) và chi phí phục vụ (cost-to-serve).", ["Máy tính cầm tay", "Ảnh CVP và kế hoạch đồng kiến tạo", "Hồ sơ dự án cũ"]);
  notes(s, { say: "Không có bài về nhà. Giá trị cho khách hàng phải đi cùng giá trị cho agency. Buổi 6: khách hàng này đáng bao nhiêu với Nova — giá trị vòng đời khách hàng, CLV — và phục vụ họ tốn bao nhiêu — cost-to-serve. Mang theo máy tính cầm tay, ảnh CVP và kế hoạch đồng kiến tạo, và hồ sơ dự án cũ.", gv: "[NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 5 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 37 refs
  s = L.refs([
    [["Anderson, J. C., Narus, J. A., & van Rossum, W. (2006). Customer value propositions in business markets. "], ["Harvard Business Review, 84", 1], ["(3), 90–99."]],
    [["Booms, B. H., & Bitner, M. J. (1981). Marketing strategies and organization structures for service firms. In J. H. Donnelly & W. R. George (Eds.), "], ["Marketing of services", 1], [" (pp. 47–51). American Marketing Association."]],
    [["Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). "], ["Implementing key account management: Designing customer-centric processes for mutual growth", 1], [". Kogan Page."]],
    [["Marcos-Cuevas, J., Nätti, S., Palo, T., & Baumann, J. (2016). Value co-creation practices and capabilities: Sustained purposeful engagement across B2B systems. "], ["Industrial Marketing Management, 56", 1], [", 97–107."]],
    [["McDonald, M. (n.d.). "], ["How to create financially quantified value propositions in six (actionable!) steps", 1], [". Strategic Account Management Association."]],
    [["Trần Nguyễn Huỳnh Như. (2023). "], ["Chương 4: Customer value propositions (CVP)", 1], [" [Slide bài giảng]."]],
    [["VnExpress. (2025, October 5). "], ["Cơ hội mua vé sớm concert G-Dragon khi mở thẻ VPBank Mastercard", 1], [" [Nội dung được tài trợ]."]],
    [["Znews. (2025, January 20). "], ["Techcombank lại rót tiền cho concert mới của các anh trai", 1], ["."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 5, theo APA 7. Chương 5 và 6 của Marcos và cộng sự là phần đọc thêm.", gv: "Tên bài VnExpress và Znews lấy theo đường dẫn trong tư liệu Buổi 9 (U08, U10) — [VERIFY tiêu đề chính xác trước khi phát cho SV]. [VERIFY năm slide bộ môn.]", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
