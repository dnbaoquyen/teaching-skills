// EVM1110E Buổi 2 — KAM mindset & Key Account selection
// usage: NODE_PATH=<node_modules> node w02.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W02_slides.pptx";
const L = make(FONT, "Bài 2: Tư duy KAM và chọn Key Account");
const { T, box, circ, num, ic, slide, notes, src, bullets, arrow } = L;
const { TEAL, YEL, PINK, PUR, BLUE, ORA, NAVY, CARD, TX, MU } = C;

(async () => {
  // 1
  let s = L.titleSlide("Bài 2: Tư duy KAM và chọn Key Account", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 2\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 2 — Bài 2: Tư duy KAM và chọn Key Account. Đây là buổi đầu tiên của Phần 2 — phần trục của môn học.", gv: "Trước khi vào bài: đọc 2–3 “điều còn mơ hồ” nhiều nhất từ phiếu cuối giờ Buổi 1 và trả lời ngắn (≤3 phút, lấy từ thời gian S2).", next: "Bắt đầu bằng một khách hàng có thật trong sổ sách của Nova." });

  // 2 hook
  s = slide("Khách hàng đem doanh thu lớn nhất có phải Key Account?");
  await ic(s, "FaBuilding", 0.6, 1.95, 1.4, ORA);
  T(s, "Địa ốc Sông Xanh (giả định)", 2.2, 1.95, 4.6, 0.6, { bold: true, fontSize: 20, color: ORA });
  const facts = [["Doanh thu cho Nova: 3,5 tỷ đồng/năm — lớn nhất", TEAL], ["Đấu thầu từng sự kiện theo giá", PINK], ["Trả tiền sau khoảng 90 ngày", PINK], ["Năm nào cũng đổi agency", PINK]];
  facts.forEach(([t, c], i) => { num(s, i + 1, 0.6, 3.6 + i * 0.72, 0.55, c); T(s, t, 1.35, 3.55 + i * 0.72, 5.6, 0.65, { fontSize: 18 }); });
  box(s, 7.3, 1.95, 5.43, 4.6);
  T(s, "Giơ tay", 7.55, 2.1, 5.0, 0.6, { bold: true, fontSize: 20, color: YEL });
  [["Có", TEAL], ["Không", PINK], ["Chưa biết", BLUE]].forEach(([t, c], i) => { box(s, 7.6, 2.9 + i * 1.15, 4.83, 0.9, c); T(s, t, 7.8, 2.9 + i * 1.15, 4.4, 0.9, { fontSize: 22, bold: true, color: NAVY }); });
  notes(s, {
    say: "Năm nay khách hàng đem doanh thu lớn nhất cho Nova là Địa ốc Sông Xanh: 3,5 tỷ đồng. Nhưng họ đấu thầu từng sự kiện theo giá, trả tiền sau khoảng 90 ngày, và năm nào cũng đổi agency. Đó có phải Key Account của Nova? Giơ tay: Có — Không — Chưa biết.",
    gv: "Tình huống giả định (khớp phiếu S6 và Buổi 6). Đếm tay, ghi tỷ lệ lên bảng; không chốt đáp án — để đến slide 19–25. Câu chốt tạm: “Key Account không phải khách lớn nhất, mà là khách đáng đầu tư quan hệ nhất — và cũng muốn đầu tư lại vào ta.”",
    ask: "“Sông Xanh có phải Key Account của Nova? Có, không, hay chưa biết?”",
    next: "Để trả lời, trước hết phải biết KAM là gì — và nó khác bán hàng ở đâu.",
  });

  // 3 definitions
  s = slide("Hai nguồn, cùng một ý: KAM là chiến lược quan hệ dài hạn, không phải một hoạt động bán");
  const defs = [["Slide bộ môn — Key account", TEAL, "Người hoặc tổ chức mà doanh nghiệp đã xây dựng mối quan hệ không chỉ là quan hệ kinh doanh tiêu chuẩn, dựa trên mức độ tin cậy.", "(Trần Nguyễn Huỳnh Như, 2023, Chương 1)"],
    ["Slide bộ môn — KAM", YEL, "Chiến lược kinh doanh nhằm phát triển lâu dài, bền vững thông qua quan hệ đối tác có lợi nhuận với các khách hàng quan trọng về mặt chiến lược; là một phần tích hợp của chiến lược doanh nghiệp.", "(Trần Nguyễn Huỳnh Như, 2023, Chương 1)"],
    ["Marcos et al. (2018)", BLUE, "“KAM is an integrated process for the profitable management of customer relationships.”", "(Marcos et al., 2018, tr. 20)"]];
  defs.forEach(([h, c, t, r], i) => {
    const x = 0.6 + i * 4.13;
    box(s, x, 1.95, 3.9, 0.65, c); T(s, h, x + 0.2, 1.95, 3.5, 0.65, { bold: true, color: NAVY, fontSize: 16 });
    box(s, x, 2.75, 3.9, 3.0); T(s, t, x + 0.2, 2.9, 3.5, 2.75, { fontSize: 16, valign: "top" });
    T(s, r, x, 5.85, 3.9, 0.5, { fontSize: 12, color: MU, valign: "top" });
  });
  T(s, "Ba điểm chung: chiến lược · dài hạn, có lợi nhuận · số ít khách hàng chọn lọc", 0.6, 6.35, 12.13, 0.5, { fontSize: 17, bold: true, color: YEL });
  notes(s, {
    say: "Slide bộ môn định nghĩa Key Account là người hoặc tổ chức mà doanh nghiệp đã xây dựng mối quan hệ không chỉ là quan hệ kinh doanh tiêu chuẩn, mà dựa trên mức độ tin cậy. Và KAM — quản trị khách hàng trọng yếu — là một chiến lược kinh doanh nhằm phát triển lâu dài, bền vững thông qua quan hệ đối tác có lợi nhuận với các khách hàng quan trọng về mặt chiến lược; KAM không phải một quy trình biệt lập mà là một phần tích hợp của chiến lược doanh nghiệp. Giáo trình của Marcos và cộng sự viết ngắn hơn: KAM là một quá trình tích hợp để quản trị có lợi nhuận các mối quan hệ khách hàng. Ba điểm chung: chiến lược; dài hạn và có lợi nhuận; và chỉ dành cho số ít khách hàng được chọn lọc.",
    gv: "Đã đối chiếu: slide gốc Chương 1, mục 1.1.1 (Drive của GV); Marcos, Davies, Guesalaga & Holt (2018), Implementing KAM, Kogan Page, Chương 1 (câu nguyên văn, tr. 20). Giáo trình này là tài liệu đọc thêm của môn.",
    ask: "“Trong ba định nghĩa, chữ nào cho thấy KAM không dành cho mọi khách hàng?”",
    next: "Vậy KAM khác bán hàng ở đâu?",
  });

  // 4 knobs
  s = slide("KAM không phải “bán hàng xịn hơn”: khách hàng lớn không muốn bị bán hàng");
  box(s, 0.6, 1.95, 6.2, 4.4, YEL);
  T(s, "“Most companies think that KAM is ‘selling with knobs on’.”", 0.9, 2.1, 5.6, 2.6, { fontSize: 26, bold: true, color: NAVY, italic: true });
  T(s, "— Malcolm McDonald, Cranfield", 0.9, 4.8, 5.6, 0.6, { fontSize: 16, color: NAVY });
  T(s, "Khách hàng lớn cần người hiểu", 7.1, 1.95, 5.6, 0.6, { bold: true, fontSize: 20, color: TEAL });
  const need = [["FaMoneyBillWave", "tài chính"], ["FaProjectDiagram", "quy trình"], ["FaSitemap", "tổ chức"], ["FaUsers", "văn hóa"]];
  for (let i = 0; i < 4; i++) { const x = 7.1 + (i % 2) * 2.85, y = 2.7 + Math.floor(i / 2) * 1.35; box(s, x, y, 2.65, 1.15); await ic(s, need[i][0], x + 0.15, y + 0.2, 0.75, TEAL); T(s, need[i][1], x + 1.05, y, 1.5, 1.15, { fontSize: 18, bold: true }); }
  T(s, "… và đưa ra giải pháp tạo lợi thế cho họ.", 7.1, 5.55, 5.6, 0.7, { fontSize: 18, bold: true, color: YEL });
  notes(s, {
    say: "Malcolm McDonald ở Cranfield viết: phần lớn các công ty nghĩ KAM là “bán hàng có gắn thêm núm vặn” — tức là bán hàng xịn hơn, chăm sóc kỹ hơn. Sai. Khách hàng lớn không muốn bị bán hàng. Họ cần người hiểu tài chính, quy trình, tổ chức và văn hóa của họ — và đưa ra giải pháp tạo lợi thế cho họ.",
    gv: "Nguồn B05: McDonald, Cranfield Executive Development Blog (đã đọc khi soạn tư liệu Buổi 2). “Selling with knobs on” là thành ngữ Anh: bản “nâng cấp” của cùng một thứ.",
    next: "Thế giới bán hàng B2B đã đổi như thế nào để KAM ra đời?",
  });

  // 5 four shifts
  s = slide("Giá trị trong B2B đã dịch chuyển theo bốn hướng — bán hàng cũ không theo kịp");
  const sh = [["Giá trị nằm trong sản phẩm", "Giá trị khi sử dụng", TEAL], ["Từng lần mua rời rạc", "Trao đổi liên tục", YEL], ["Xung đột vì lợi ích riêng", "Hợp tác dựa trên tin cậy", PINK], ["Ranh giới rõ ràng", "Ranh giới mờ, cùng một đội", BLUE]];
  T(s, "Từ", 0.6, 1.8, 4.9, 0.45, { fontSize: 15, color: MU, bold: true }); T(s, "Sang", 7.0, 1.8, 5.7, 0.45, { fontSize: 15, color: MU, bold: true });
  sh.forEach(([a, b, c], i) => { const y = 2.3 + i * 1.0; box(s, 0.6, y, 5.2, 0.8); T(s, a, 0.85, y, 4.8, 0.8, { fontSize: 18 }); arrow(s, 6.05, y + 0.18, 0.7, 0.45, c); box(s, 7.0, y, 5.73, 0.8, c); T(s, b, 7.25, y, 5.3, 0.8, { fontSize: 18, bold: true, color: NAVY }); });
  src(s, "Nguồn: Marcos et al. (2018, Hình 1.2, tr. 7).", 6.4);
  notes(s, {
    say: "Giáo trình Marcos và cộng sự mô tả bốn dịch chuyển trong cách tạo giá trị ở thị trường doanh nghiệp. Từ giá trị nằm trong sản phẩm, sang giá trị khi sử dụng. Từ từng lần mua rời rạc, sang trao đổi liên tục giữa nhà cung cấp và khách hàng. Từ xung đột vì lợi ích riêng, sang hợp tác dựa trên tin cậy. Từ ranh giới rõ ràng, sang ranh giới mờ — người ngoài nhìn vào không phân biệt được ai là người của nhà cung cấp, ai là người của khách hàng. Vì vậy bán hàng B2B đã chuyển từ những hoạt động có cấu trúc, dễ dự đoán, sang vai trò quản trị quan hệ phức tạp.",
    gv: "Đã đối chiếu Marcos et al. (2018): Hình 1.2 “Shifts in focus in value creation” (tr. 7) — value within product → value in use; discrete interactions → ongoing exchanges; instrumental conflict → trusted collaboration; clear → blurred boundaries; và đoạn tr. 3 về chuyển từ selling sang consultative selling và account management. Millman & Wilson (1995) — tên bài “From key account selling to key account management” — là mốc học thuật cho chuyển dịch này.",
    ask: "“Với một gala cuối năm, ‘giá trị khi sử dụng’ của khách hàng là gì?” (gợi ý: khách VIP quay lại giao dịch, không phải sân khấu đẹp)",
    next: "Vậy cụ thể KAM khác Sales ở những khía cạnh nào?",
  });

  // 6 Homburg four dimensions
  s = slide("KAM được nhận diện qua bốn khía cạnh: hoạt động, người tham gia, nguồn lực, mức chính thức hóa");
  const dims = [["FaClipboardList", "Activities", "Hoạt động", "làm gì riêng cho khách hàng này", TEAL], ["FaUsers", "Actors", "Người tham gia", "ai, ở cấp nào, hai bên", YEL], ["FaLayerGroup", "Resources", "Nguồn lực", "dành riêng hay dùng chung", PINK], ["FaFileContract", "Formalization", "Chính thức hóa", "có quy trình, kế hoạch, đánh giá", BLUE]];
  for (let i = 0; i < 4; i++) { const x = 0.6 + i * 3.1; box(s, x, 1.95, 2.88, 4.0); await ic(s, dims[i][0], x + 0.94, 2.2, 1.0, dims[i][4]); T(s, dims[i][1], x, 3.35, 2.88, 0.5, { align: "center", bold: true, fontSize: 19, color: dims[i][4] }); T(s, dims[i][2], x, 3.85, 2.88, 0.45, { align: "center", fontSize: 16, color: MU }); T(s, dims[i][3], x + 0.2, 4.4, 2.48, 1.4, { align: "center", fontSize: 16, valign: "top" }); }
  src(s, "Nguồn: Homburg, Workman & Jensen (2002).", 6.2);
  notes(s, {
    say: "Homburg, Workman và Jensen, 2002, mô tả KAM qua bốn khía cạnh. Activities — hoạt động: agency làm gì riêng cho khách hàng này. Actors — người tham gia: ai, ở cấp nào, ở cả hai bên. Resources — nguồn lực: dành riêng cho khách hàng hay dùng chung. Formalization — mức chính thức hóa: có quy trình, kế hoạch, đánh giá hay tùy từng người.",
    gv: "Bốn khía cạnh theo Homburg et al. (2002), Journal of Marketing 66(2) — đã có trong tư liệu B04. [VERIFY: toàn văn nếu trích tám cách tiếp cận KAM — không dùng ở đây.]",
    next: "Đặt Sales và KAM cạnh nhau theo các khía cạnh đó.",
  });

  // 7 table
  s = slide("Sales và KAM khác nhau ở mục tiêu, thời gian và cách tạo giá trị");
  const rows = [["Mục tiêu", "Chốt hợp đồng, doanh số kỳ này", "Giá trị dài hạn cho cả hai bên"], ["Thời gian", "Từng sự kiện, từng quý", "Nhiều năm (3–5 năm)"], ["Hoạt động", "Chào giá, đấu thầu, chăm sóc", "Hiểu sâu, kế hoạch riêng, đồng kiến tạo"], ["Người tham gia", "Một người bán ↔ một người mua", "Nhiều người, nhiều cấp hai bên"], ["Nguồn lực", "Chung cho mọi khách", "Dành riêng cho khách này"], ["Chính thức hóa", "Tùy người", "Quy trình, kế hoạch, đánh giá định kỳ"], ["Tạo giá trị", "Dịch vụ tốt, giá tốt", "Lợi thế cho khách hàng và khách của họ"]];
  T(s, "Khía cạnh", 0.65, 1.8, 2.6, 0.45, { bold: true, color: MU, fontSize: 15 }); T(s, "Sales", 3.3, 1.8, 4.5, 0.45, { bold: true, color: PINK, fontSize: 15 }); T(s, "KAM", 7.95, 1.8, 4.8, 0.45, { bold: true, color: TEAL, fontSize: 15 });
  rows.forEach(([a, b, c], i) => { const y = 2.3 + i * 0.6; if (i % 2 === 0) box(s, 0.45, y, 12.43, 0.56); T(s, a, 0.65, y, 2.6, 0.56, { bold: true, fontSize: 15 }); T(s, b, 3.3, y, 4.5, 0.56, { fontSize: 15 }); T(s, c, 7.95, y, 4.8, 0.56, { fontSize: 15 }); });
  T(s, "(tổng hợp của môn)", 10.9, 6.55, 1.8, 0.4, { fontSize: 13, color: MU, italic: true, align: "right" });
  notes(s, {
    say: "Đặt cạnh nhau. Mục tiêu: Sales chốt hợp đồng, doanh số kỳ này; KAM tạo giá trị dài hạn cho cả hai bên. Thời gian: từng sự kiện, từng quý — so với nhiều năm, ba đến năm năm. Hoạt động: chào giá, đấu thầu, chăm sóc — so với hiểu sâu khách hàng, lập kế hoạch riêng, đồng kiến tạo. Người tham gia: một người bán với một người mua — so với nhiều người, nhiều cấp ở cả hai bên. Nguồn lực: dùng chung cho mọi khách — so với dành riêng. Chính thức hóa: tùy người — so với có quy trình, kế hoạch, đánh giá định kỳ. Và cách tạo giá trị: dịch vụ tốt, giá tốt — so với tạo lợi thế cho khách hàng và cho khách của họ.",
    gv: "Bảng là tổng hợp của người soạn (đã duyệt, tư liệu Buổi 2 quyết định 3), dựa trên B02–B05; bốn dòng giữa theo Homburg et al. (2002). Slide gốc Chương 1, mục 1.2 cũng có bảng so sánh Sales – KAM nhưng là hình, không trích được chữ — GV có thể chèn hình gốc nếu muốn.",
    next: "Áp vào Nova và An Phát.",
  });

  // 8 Nova An Phát
  s = slide("Với An Phát: chờ brief gala mỗi năm, hay đề xuất một chương trình cả năm?");
  box(s, 0.6, 1.95, 6.0, 4.4); box(s, 0.6, 1.95, 6.0, 0.7, PINK); T(s, "Cách Sales", 0.85, 1.95, 5.5, 0.7, { bold: true, color: NAVY, fontSize: 20 });
  T(s, bullets(["Tháng 10 gọi hỏi “năm nay có gala không?”", "Làm đề xuất, chào giá, giảm giá khi bị ép", "Làm xong gala, chờ năm sau"]), 0.9, 2.85, 5.5, 3.3, { fontSize: 18, valign: "top", paraSpaceAfter: 10 });
  box(s, 6.85, 1.95, 5.88, 4.4); box(s, 6.85, 1.95, 5.88, 0.7, TEAL); T(s, "Cách KAM", 7.1, 1.95, 5.4, 0.7, { bold: true, color: NAVY, fontSize: 20 });
  T(s, bullets(["Hiểu mục tiêu năm tới: giữ khách doanh nghiệp", "Đề xuất chương trình khách hàng cả năm", "Đầu mối nhiều cấp; đánh giá chung sau mỗi sự kiện"]), 7.15, 2.85, 5.4, 3.3, { fontSize: 18, valign: "top", paraSpaceAfter: 10 });
  T(s, "(giả định)", 10.9, 6.45, 1.8, 0.4, { fontSize: 13, color: MU, italic: true, align: "right" });
  notes(s, {
    say: "Nova đã làm gala cho An Phát bốn năm. Cách Sales: tháng 10 gọi chị Hạnh hỏi “năm nay ngân hàng có làm gala không ạ?”, làm đề xuất, chào giá, giảm giá khi bị ép, làm xong gala thì chờ năm sau. Cách KAM: hiểu mục tiêu năm tới của An Phát — giữ khách doanh nghiệp tốt; đề xuất một chương trình khách hàng cả năm thay vì một đêm gala; có đầu mối nhiều cấp ở hai bên; và sau mỗi sự kiện, cùng An Phát đánh giá chung.",
    gv: "Theo W02 lecture notes §1.4. Chị Hạnh là GĐ Marketing An Phát (Buổi 1–7).",
    next: "Còn một cách nữa để thấy khác biệt: vòng đời khách hàng.",
  });

  // 8b customer lifecycle
  s = slide("Sales dừng ở chốt hợp đồng; KAM bắt đầu từ đó — giữ chân, trung thành, giới thiệu");
  const lc = [["Tiếp cận", "Reach", PINK], ["Thu hút", "Acquisition", PINK], ["Chốt", "Conversion", PINK], ["Giữ chân", "Retention", TEAL], ["Trung thành", "Loyalty", TEAL]];
  lc.forEach(([v, e, c], i) => { const x = 0.6 + i * 2.5; box(s, x, 2.0, 2.2, 1.5, c); T(s, v, x, 2.05, 2.2, 0.8, { align: "center", bold: true, fontSize: 19, color: NAVY }); T(s, e, x, 2.8, 2.2, 0.5, { align: "center", fontSize: 14, color: NAVY, italic: true }); if (i < 4) arrow(s, x + 2.22, 2.55, 0.26, 0.4); });
  T(s, "Phần Sales giỏi", 0.6, 3.6, 7.2, 0.45, { fontSize: 15, bold: true, color: PINK, align: "center" });
  T(s, "Phần KAM phải làm", 8.1, 3.6, 4.6, 0.45, { fontSize: 15, bold: true, color: TEAL, align: "center" });
  box(s, 0.6, 4.3, 12.13, 1.85);
  T(s, [{ text: "Bài học từ một agency ở Anh: ", options: { bold: true, color: YEL } }, { text: "thắng ở tiếp cận, thu hút, chốt — nhưng giao dịch vụ không đạt kỳ vọng nên không giữ được khách, mất luôn giá trị vòng đời khách hàng. Giữa “chốt” và “giữ chân” còn một bước bị quên: giao dịch vụ." }], 0.85, 4.3, 11.7, 1.85, { fontSize: 17 });
  src(s, "Nguồn: vòng đời khách hàng của Buttle (2009), áp dụng trong Drakeley (2022).", 6.4);
  notes(s, {
    say: "Một cách khác để thấy khác biệt giữa Sales và KAM: vòng đời khách hàng của Buttle — tiếp cận, thu hút, chốt, giữ chân, trung thành. Bán hàng giỏi ở ba bước đầu. KAM chịu trách nhiệm hai bước sau — giữ chân và trung thành — và xa hơn là biến khách thành người giới thiệu agency. Drakeley, người từng điều hành một agency sự kiện ở Anh, phân tích hai dự án của chính mình: agency thắng ở tiếp cận, thu hút và chốt hợp đồng, nhưng giao dịch vụ không đạt kỳ vọng nên không giữ được khách — mất luôn giá trị vòng đời khách hàng. Bà chỉ ra: giữa “chốt” và “giữ chân” còn một bước bị quên trong mô hình — giao dịch vụ.",
    gv: "Theo Drakeley (2022), chương do GV cung cấp: Hình 5 vòng đời khách hàng (Buttle, 2009), Bảng 4 áp dụng cho hai case, nhận xét “missing stage… Service Delivery”, và thang khách hàng prospect → advocate (Christopher et al., 1991). [VERIFY: thông tin xuất bản của chương Drakeley — tên sách, nhà xuất bản.] Nối Buổi 6 (CLV).",
    ask: "“Trong dự án cũ, nhóm đã đi đến bước nào của vòng đời với khách hàng?”",
    next: "KAM có lợi cho ai?",
  });

  // 9 benefits both sides
  s = slide("KAM có lợi cho cả hai phía — agency và khách hàng");
  const ag = ["Hiểu và gần khách hàng chiến lược, thành đối tác lâu dài", "Nguồn thông tin thị trường giá trị từ khách lớn", "Giảm nguy cơ mất một khách hàng rất quan trọng", "Lợi thế cạnh tranh bền vững, khác biệt với đối thủ"];
  const cl = ["Một đầu mối duy nhất, thông tin thống nhất", "Cùng xác định cơ hội và giải pháp cho dự án", "Quan hệ trung thành có thể đem lại chi phí tốt hơn", "Nâng năng lực cạnh tranh nhờ quan hệ chặt với nhà cung cấp"];
  for (const [x, h, c, list, i_] of [[0.6, "Agency được gì", TEAL, ag, "FaBuilding"], [6.85, "Khách hàng được gì", YEL, cl, "FaUserTie"]]) {
    box(s, x, 1.95, 5.88, 4.5);
    await ic(s, i_, x + 0.25, 2.1, 0.8, c);
    T(s, h, x + 1.25, 2.1, 4.4, 0.8, { bold: true, fontSize: 20, color: c });
    T(s, bullets(list), x + 0.3, 3.05, 5.35, 3.3, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  }
  src(s, "Nguồn: Trần Nguyễn Huỳnh Như (2023), Chương 1, mục 1.4.1.", 6.6);
  notes(s, {
    say: "Slide bộ môn liệt kê lợi ích hai phía. Với agency: gần và hiểu khách hàng chiến lược, trở thành đối tác lâu dài; khách lớn là nguồn thông tin thị trường rất giá trị; giảm nguy cơ mất một khách hàng quan trọng — điều có thể đe dọa tài chính công ty; và xây lợi thế cạnh tranh bền vững. Với khách hàng: một đầu mối duy nhất, thông tin tập trung và thống nhất; cùng xác định cơ hội và giải pháp; quan hệ trung thành có thể đem lại chi phí tốt hơn; và nâng năng lực cạnh tranh nhờ quan hệ chặt với nhà cung cấp.",
    gv: "Đã đối chiếu slide gốc Chương 1, mục 1.4.1 (lợi ích với Agency và với Client). Viết gọn lại, giữ ý.",
    next: "Nhưng KAM không miễn phí.",
  });

  // 10 when not to do KAM
  s = slide("KAM tốn kém: không phải ngành nào, khách hàng nào cũng đáng làm KAM");
  T(s, "Khi KAM khó được biện minh", 0.6, 1.85, 6.0, 0.5, { bold: true, fontSize: 18, color: PINK });
  const no = ["Cách tạo giá trị đơn giản, dịch vụ ít phức tạp", "Thị trường hàng hóa hóa: khách dễ đổi nhà cung cấp", "Vòng đời sản phẩm ngắn", "Giá là yếu tố quyết định chọn nhà cung cấp"];
  for (let i = 0; i < 4; i++) { const y = 2.4 + i * 0.95; box(s, 0.6, y, 6.0, 0.8); await ic(s, "FaTimes", 0.75, y + 0.12, 0.56, PINK); T(s, no[i], 1.5, y, 5.0, 0.8, { fontSize: 16 }); }
  T(s, "Cái giá khi triển khai KAM", 6.95, 1.85, 5.8, 0.5, { bold: true, fontSize: 18, color: YEL });
  box(s, 6.95, 2.4, 5.78, 3.65);
  T(s, bullets(["Chọn và phân bổ nhân sự chuyên trách", "Đào tạo kỹ năng cho người làm với khách", "Đổi chỉ số hiệu suất theo khách hàng", "Văn hóa lấy khách hàng làm trung tâm", "Có thể phải tái cơ cấu, mở kênh liên lạc mới"]), 7.2, 2.55, 5.3, 3.4, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  src(s, "Nguồn: Marcos et al. (2018, tr. 8); Trần Nguyễn Huỳnh Như (2023), Chương 1, mục 1.4.", 6.35);
  notes(s, {
    say: "KAM tốn nhiều nguồn lực. Giáo trình Marcos và cộng sự nói KAM khó được biện minh khi: cách tạo giá trị đơn giản, dịch vụ ít phức tạp; thị trường bị hàng hóa hóa, khách dễ đổi nhà cung cấp; vòng đời sản phẩm ngắn; và khi giá là yếu tố quyết định chọn nhà cung cấp. Slide bộ môn liệt kê cái giá khi triển khai: chọn và phân bổ nhân sự chuyên trách; chi phí đào tạo kỹ năng; xác định lại chỉ số hiệu suất theo khách hàng; xây văn hóa lấy khách hàng làm trung tâm; và có thể phải tái cơ cấu, mở kênh liên lạc mới giữa các bộ phận.",
    gv: "Đã đối chiếu Marcos et al. (2018), mục “Why should your company consider implementing KAM (or not)?” (tr. 7–8) và slide gốc Chương 1 “Khó khăn khi triển khai KAM tại DN”. Nối sang slide sau: vì tốn kém nên phải chọn.",
    ask: "“Dòng nào trong cột trái mô tả đúng Sông Xanh?” (giá là yếu tố quyết định)",
    next: "Hai hiểu lầm cần gỡ trước khi thực hành.",
  });

  // 11 misconceptions
  s = slide("KAM không có nghĩa là chiều khách, cũng không chỉ là chăm VIP kỹ hơn");
  const mis = [["“KAM = chăm sóc khách VIP chu đáo hơn”", "KAM là cách vận hành quan hệ, có kế hoạch và nguồn lực riêng"], ["“Làm KAM là phải chiều khách”", "KAM hướng tới lợi ích hai phía; Buổi 6 sẽ tính chi phí phục vụ"]];
  for (let i = 0; i < 2; i++) { const y = 2.0 + i * 2.15; box(s, 0.6, y, 5.6, 1.85); await ic(s, "FaTimes", 0.85, y + 0.5, 0.8, PINK); T(s, mis[i][0], 1.85, y, 4.2, 1.85, { fontSize: 18, bold: true }); arrow(s, 6.35, y + 0.65, 0.6, 0.55, YEL); box(s, 7.1, y, 5.63, 1.85, TEAL); T(s, mis[i][1], 7.35, y, 5.2, 1.85, { fontSize: 18, bold: true, color: NAVY }); }
  notes(s, {
    say: "Hai hiểu lầm. Một: KAM là chăm sóc khách VIP chu đáo hơn. Không — KAM là một cách vận hành quan hệ, có kế hoạch và nguồn lực riêng. Hai: làm KAM là phải chiều khách. Không — KAM hướng tới lợi ích hai phía; Buổi 6 chúng ta sẽ tính chi phí phục vụ để biết khi nào chiều khách là lỗ.",
    next: "Đến lượt các bạn: Thực hành 1.",
  });

  // 12 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: hành vi nào là Sales, hành vi nào là KAM?", [["8’", "Phân loại 8 hành vi của Nova với An Phát: S hay K, mỗi hành vi một lý do theo bảng ở slide 7", TEAL], ["8’", "Chọn 2 hành vi S, viết lại thành hành vi K cụ thể: ai làm, làm gì, khi nào", YEL], ["4’", "Hoàn thành câu: “Với An Phát, Nova làm KAM khi …”", PINK]], "FaClipboardList", "Sản phẩm", "Bảng phân loại trên A3 — chụp ảnh lưu lại", null);
  notes(s, {
    say: "Thực hành 1, 20 phút. Tám phút: phân loại tám hành vi của Nova với An Phát — S là Sales, K là KAM — mỗi hành vi một lý do dựa trên bảng ở slide 7. Tám phút: chọn hai hành vi S, viết lại thành hành vi K cụ thể: ai làm, làm gì, khi nào. Bốn phút: hoàn thành câu “Với An Phát, Nova làm KAM khi…”. Sản phẩm: bảng trên giấy A3, chụp ảnh lưu lại.",
    gv: "Phiếu W02_activity_S3_sales_hay_kam.md. Mốc phút 30–50. Đáp án tham khảo trong phần GV của phiếu. Chiếu lại slide 7 trong lúc nhóm làm.",
    next: "Sau thực hành, giải lao.",
  });

  // 13 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút. Tôi ghi giờ quay lại lên bảng.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 50–58.", next: "Sau giải lao: Nova chỉ đủ người giỏi cho hai khách hàng — chọn ai?" });

  // 14 question
  s = await L.question("Năm khách hàng, đủ người giỏi cho hai", "Nova nên đầu tư quan hệ sâu với ai?", "FaBullseye", PINK, "Đề cương 2.2: ba tiêu chí nâng một khách hàng lên Key Account");
  notes(s, { say: "Năm tới Nova chỉ đủ người giỏi để làm KAM thật sự với tối đa hai khách hàng. Có năm ứng viên. Nova nên đầu tư quan hệ sâu với ai? Đề cương mục 2.2 cho chúng ta ba tiêu chí.", ask: "“Bạn sẽ dùng tiêu chí gì đầu tiên?” (thường: doanh thu)", next: "Trước hết: vì sao phải chọn ít?" });

  // 15 close friends
  s = slide("Key Account giống bạn thân: không ai có một trăm người bạn thân");
  await ic(s, "FaUserFriends", 0.6, 2.0, 1.6, TEAL);
  T(s, "“How many intimate friends can you really have? … only with a few. However, it is common to find companies that claim to have more than 100 key accounts!”", 2.5, 1.95, 10.2, 1.9, { fontSize: 18, italic: true });
  T(s, "(Marcos et al., 2018, tr. 42)", 2.5, 3.85, 10.2, 0.45, { fontSize: 13, color: MU });
  box(s, 0.6, 4.55, 12.13, 1.75, YEL);
  T(s, "“One of the quickest ways to go bankrupt is to ‘delight’ your customers!” — McDonald", 0.9, 4.55, 11.6, 1.0, { fontSize: 20, bold: true, italic: true, color: NAVY });
  T(s, "Chọn theo tiềm năng lợi nhuận khoảng 3 năm và thế mạnh cạnh tranh của mình.", 0.9, 5.45, 11.6, 0.7, { fontSize: 17, color: NAVY });
  notes(s, {
    say: "Giáo trình so sánh Key Account với bạn thân: bạn có thể có bao nhiêu người bạn thân thật sự — người bạn hiểu rõ, tin tưởng, có mặt khi họ cần? Chỉ vài người. Vậy mà nhiều công ty tuyên bố có hơn 100 Key Account! McDonald còn nói mạnh hơn: một trong những cách nhanh nhất để phá sản là cố làm mọi khách hàng “hài lòng tuyệt đối”. Phải chọn — theo tiềm năng lợi nhuận trong khoảng ba năm và thế mạnh cạnh tranh của chính mình.",
    gv: "Đã đối chiếu Marcos et al. (2018), mục “Selection of key accounts”, tr. 42 (đã kiểm với bản đầy đủ của giáo trình). Câu McDonald và ý “3 năm” từ B05 (Cranfield blog).",
    next: "Và khi mỗi người tự chọn Key Account thì chuyện gì xảy ra?",
  });

  // 16 case wood
  s = slide("Mười bảy người bán, sáu mươi “Key Account”: khi mỗi người tự chọn");
  box(s, 0.6, 1.95, 5.5, 4.35);
  T(s, "17", 0.6, 2.1, 2.7, 1.2, { align: "center", fontSize: 54, bold: true, color: BLUE });
  T(s, "nhân viên kinh doanh", 0.6, 3.3, 2.7, 0.5, { align: "center", fontSize: 15, color: MU });
  T(s, "60", 3.3, 2.1, 2.7, 1.2, { align: "center", fontSize: 54, bold: true, color: PINK });
  T(s, "“Key Account”", 3.3, 3.3, 2.7, 0.5, { align: "center", fontSize: 15, color: MU });
  T(s, "Một công ty chế biến gỗ quốc tế: mỗi người chọn 3–4 khách hàng của mình, mỗi người một lý do.", 0.85, 4.0, 5.0, 2.1, { fontSize: 16, valign: "top" });
  const why = [["quy mô doanh thu", TEAL], ["quan hệ tin cậy nhiều năm", YEL], ["uy tín trong ngành", ORA], ["tiềm năng tăng trưởng", BLUE]];
  T(s, "Lý do mỗi người đưa ra", 6.5, 1.95, 6.2, 0.5, { bold: true, fontSize: 17, color: MU });
  why.forEach(([t, c], i) => { box(s, 6.5, 2.5 + i * 0.72, 6.23, 0.6, c); T(s, t, 6.7, 2.5 + i * 0.72, 5.8, 0.6, { fontSize: 17, bold: true, color: NAVY }); });
  T(s, "Bài học: một quy trình, một bộ tiêu chí chung cho cả công ty — do lãnh đạo đặt, các bộ phận cùng tham gia.", 6.5, 5.45, 6.23, 0.95, { fontSize: 16, bold: true, color: YEL });
  src(s, "Nguồn: Marcos et al. (2018, tr. 43–44).", 6.55);
  notes(s, {
    say: "Một tình huống trong giáo trình: một công ty chế biến gỗ quốc tế mời toàn bộ 17 nhân viên kinh doanh, nhờ mỗi người chỉ ra Key Account trong phần mình phụ trách. Mỗi người chọn ba, bốn khách hàng — tổng cộng 60 “Key Account”. Hỏi lý do: người chọn vì quy mô doanh thu, người chọn vì quan hệ tin cậy nhiều năm, người chọn vì công ty đó có uy tín trong ngành, người chọn vì tiềm năng tăng trưởng. Giám đốc rất lo: phải giảm số lượng để đầu tư đủ cho từng khách, và phải có một quy trình, một bộ tiêu chí chung cho cả công ty. Giáo trình khuyên: lãnh đạo đặt quy trình, với sự tham gia của các bộ phận làm việc với khách hàng.",
    gv: "Đã đối chiếu Marcos et al. (2018), Case study “Selecting key accounts”, tr. 43–44. Liên hệ: ở agency, account manager nào cũng muốn khách của mình là “key”.",
    ask: "“Nếu Nova để mỗi account manager tự chọn, bạn đoán sẽ có bao nhiêu Key Account?”",
    next: "Bộ tiêu chí chung đó gồm ba câu hỏi.",
  });

  // 17 three questions
  s = slide("Ba câu hỏi để chọn Key Account");
  const q3 = [["1", "Khách hàng này có thật sự hấp dẫn không?", "Customer attractiveness", TEAL], ["2", "Công ty ta có vị thế cạnh tranh mạnh với khách hàng này không?", "Supplier's competitive position", YEL], ["3", "Khách hàng có sẵn lòng cùng đầu tư vào quan hệ đối tác với ta không?", "Willingness to co-invest", PINK]];
  q3.forEach(([k, a, b, c], i) => { const y = 1.95 + i * 1.45; num(s, k, 0.6, y + 0.15, 0.95, c, 26); box(s, 1.8, y, 10.93, 1.25); T(s, a, 2.05, y + 0.05, 10.5, 0.7, { fontSize: 20, bold: true }); T(s, b, 2.05, y + 0.7, 10.5, 0.45, { fontSize: 15, color: c, italic: true }); });
  src(s, "Nguồn: Marcos et al. (2018, tr. 44); Guesalaga (n.d.), Cranfield.", 6.4);
  notes(s, {
    say: "Khung chọn Key Account của nhóm tác giả Cranfield gồm ba giai đoạn, trả lời ba câu hỏi — đúng ba tiêu chí của đề cương. Một: khách hàng này có thật sự hấp dẫn không — customer attractiveness. Hai: công ty ta có vị thế cạnh tranh mạnh để làm việc với khách hàng này không — supplier's competitive position. Ba: khách hàng có sẵn lòng cùng đầu tư vào một quan hệ đối tác với ta không — willingness to co-invest.",
    gv: "Đã đối chiếu nguyên văn Marcos et al. (2018, tr. 44): “1 Is this customer a very attractive one? 2 Does our company have a strong competitive position to deal with this customer? 3 Is this customer willing to co-invest in a partnering relationship with us?” Cùng nội dung trong B07 (Guesalaga, Cranfield blog). Đây là nguồn gốc của ba tiêu chí trong đề cương 2.2.",
    next: "Hai câu đầu được vẽ thành một ma trận.",
  });

  // 18 matrix
  s = slide("Hai trục đầu tạo thành ma trận; câu thứ ba là kích thước vòng tròn");
  s.addShape(L.pres.shapes.LINE, { x: 1.4, y: 1.95, w: 0, h: 4.3, line: { color: MU, width: 2 } });
  s.addShape(L.pres.shapes.LINE, { x: 1.4, y: 6.25, w: 6.4, h: 0, line: { color: MU, width: 2 } });
  T(s, "Sức hấp dẫn của khách hàng →", -1.25, 3.88, 4.0, 0.45, { rotate: 270, fontSize: 14, color: MU, align: "center" });
  T(s, "Vị thế cạnh tranh của agency →", 1.4, 6.3, 6.4, 0.45, { fontSize: 14, color: MU, align: "center" });
  const bub = [["B", 6.3, 2.1, 0.6, PINK], ["F", 4.6, 2.6, 1.3, TEAL], ["A", 3.0, 3.9, 0.7, MU], ["C", 5.6, 4.7, 0.6, MU], ["E", 2.2, 5.3, 0.5, MU]];
  bub.forEach(([t, x, y, d, c]) => { circ(s, x, y, d, c); T(s, t, x, y, d, d, { align: "center", bold: true, color: NAVY, fontSize: 14, margin: 0 }); });
  box(s, 8.3, 1.95, 4.43, 4.3);
  T(s, [{ text: "B: ", options: { bold: true, color: PINK } }, { text: "hấp dẫn và vị thế đều cao, nhưng ít muốn cùng đầu tư (vòng nhỏ)", options: {} }], 8.5, 2.1, 4.0, 1.5, { fontSize: 16, valign: "top" });
  T(s, [{ text: "F: ", options: { bold: true, color: TEAL } }, { text: "thấp hơn một chút ở hai trục, nhưng rất muốn cùng đầu tư (vòng lớn)", options: {} }], 8.5, 3.6, 4.0, 1.5, { fontSize: 16, valign: "top" });
  T(s, "Cả hai đều là ứng viên tốt nhất.", 8.5, 5.15, 4.0, 0.9, { fontSize: 16, bold: true, color: YEL, valign: "top" });
  src(s, "Phỏng theo Marcos et al. (2018, Hình 2.4, tr. 52–53); vị trí các vòng là minh họa.", 6.75);
  notes(s, {
    say: "Hai câu đầu được điều chỉnh từ ma trận danh mục GE–McKinsey: trục dọc là sức hấp dẫn của khách hàng, trục ngang là vị thế cạnh tranh của ta — mỗi trục chấm từ 1 đến 10. Câu thứ ba — sẵn lòng cùng đầu tư — được thể hiện bằng kích thước vòng tròn: vòng càng lớn, khách càng muốn cùng đầu tư. Trong ví dụ của giáo trình, hai ứng viên tốt nhất là B và F. B cao ở cả hai trục nhưng ít muốn cùng đầu tư. F thấp hơn một chút, nhưng rất muốn cùng đầu tư. Ban lãnh đạo dùng ma trận này để quyết định có thông tin hơn.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 2.4 và đoạn giải thích tr. 52–53 (B cao hai trục nhưng ít muốn co-invest; F thấp hơn nhưng co-invest cao; “best candidates… are customers B and F”). Tọa độ trên slide là vẽ lại minh họa, không phải số liệu. Ở lớp, W02 lecture notes trình bày tiêu chí 3 như một “cổng” — đó là cách trình bày của môn (đã duyệt), tương thích với hình này.",
    next: "Mỗi trục được chấm bằng những tiêu chí con nào?",
  });

  // 19 attractiveness factors
  s = slide("Sức hấp dẫn: chọn 4–7 yếu tố, cân bằng định lượng – định tính, hiện tại – tương lai");
  const hx = [3.3, 8.1], hy = [2.4, 4.3];
  T(s, "Quá khứ, hiện tại", 3.3, 1.85, 4.6, 0.45, { bold: true, color: MU, fontSize: 15, align: "center" }); T(s, "Tương lai", 8.1, 1.85, 4.6, 0.45, { bold: true, color: MU, fontSize: 15, align: "center" });
  T(s, "Định lượng", 0.6, 2.4, 2.5, 1.7, { bold: true, color: MU, fontSize: 16 }); T(s, "Định tính", 0.6, 4.3, 2.5, 1.7, { bold: true, color: MU, fontSize: 16 });
  const cellsA = [["Quy mô doanh thu · lợi nhuận · ổn định nhu cầu · chi phí phục vụ", TEAL], ["Tiềm năng tăng trưởng · biên lợi nhuận tương lai · giá trị vòng đời (CLV)", YEL], ["Chất lượng quan hệ · niềm tin · độ tin cậy · lòng trung thành · uy tín", BLUE], ["Phù hợp chiến lược · phù hợp văn hóa · định hướng hợp tác · mở thị trường mới", PINK]];
  cellsA.forEach(([t, c], i) => { const x = hx[i % 2], y = hy[Math.floor(i / 2)]; box(s, x, y, 4.6, 1.7, c); T(s, t, x + 0.2, y, 4.2, 1.7, { fontSize: 16, bold: true, color: NAVY }); });
  src(s, "Phỏng theo Marcos et al. (2018, Hình 2.3, tr. 45); cách xếp vào ô là gợi ý của môn.", 6.25);
  notes(s, {
    say: "Sức hấp dẫn của khách hàng có thể đo bằng nhiều yếu tố, xếp theo hai chiều: thời gian — quá khứ, hiện tại hay tương lai; và bản chất — định lượng hay định tính. Định lượng, hiện tại: quy mô doanh thu, lợi nhuận, độ ổn định nhu cầu, chi phí phục vụ. Định lượng, tương lai: tiềm năng tăng trưởng, biên lợi nhuận tương lai, giá trị vòng đời khách hàng. Định tính, hiện tại: chất lượng quan hệ, niềm tin, độ tin cậy, lòng trung thành, uy tín. Định tính, tương lai: phù hợp chiến lược, phù hợp văn hóa, định hướng hợp tác, khả năng mở thị trường mới. Lời khuyên của giáo trình: chọn bốn đến bảy yếu tố, và cân bằng giữa định lượng và định tính, giữa hiện tại và tương lai.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 2.3 “Customer attractiveness factors” (tr. 45) và khuyến nghị “a handful of factors (four to seven)… balance” (tr. 47). Bản trích xuất không giữ được vị trí từng yếu tố trong hình, nên cách xếp vào 4 ô là của người soạn [VERIFY với hình gốc nếu chiếu hình]. Tiêu chí con cho agency ở phiếu S6 (ngân sách sự kiện/năm, thanh toán đúng hạn…) là nhận định đã duyệt.",
    next: "Trục thứ hai: vị thế cạnh tranh của ta.",
  });

  // 20 competitive position
  s = slide("Vị thế cạnh tranh: nhìn từ phía khách hàng, ta mạnh hơn đối thủ ở đâu?");
  const cp = [["Chi phí phục vụ", "FaMoneyBillWave", TEAL], ["Hiểu biết về khách hàng", "FaLightbulb", YEL], ["Uy tín doanh nghiệp", "FaStar", ORA], ["Gần người ra quyết định", "FaUserTie", PINK], ["Đáp ứng yêu cầu dịch vụ", "FaCheck", BLUE], ["Hậu cần, giao hàng", "FaTruck", TEAL], ["Chuyên môn kỹ thuật", "FaTools", YEL], ["Văn hóa đổi mới", "FaRocket", ORA]];
  for (let i = 0; i < 8; i++) { const x = 0.6 + (i % 4) * 3.1, y = 1.95 + Math.floor(i / 4) * 2.0; box(s, x, y, 2.88, 1.8); await ic(s, cp[i][1], x + 1.04, y + 0.15, 0.8, cp[i][2]); T(s, cp[i][0], x + 0.1, y + 1.0, 2.68, 0.75, { align: "center", fontSize: 16, bold: true }); }
  T(s, "Chọn 4–7 yếu tố; dùng dữ liệu khách quan và góc nhìn bên ngoài để tránh tự đánh giá cao mình.", 0.6, 6.0, 12.13, 0.55, { fontSize: 16, bold: true, color: YEL });
  src(s, "Nguồn: Marcos et al. (2018, tr. 47–48, 53).", 6.6);
  notes(s, {
    say: "Đối thủ của ta cũng nhắm vào chính những khách hàng hấp dẫn đó. Nếu ta không có vị thế tốt, đầu tư vào quan hệ có thể lãng phí. Giáo trình gợi ý các yếu tố: chi phí phục vụ; hiểu biết về khách hàng; uy tín doanh nghiệp; mức độ gần với nhóm ra quyết định của khách; khả năng đáp ứng yêu cầu dịch vụ; năng lực hậu cần, giao hàng; chuyên môn kỹ thuật; và văn hóa đổi mới. Cũng chọn bốn đến bảy yếu tố, nhìn từ phía khách hàng. Và vì rất khó tự đánh giá mình khách quan, nên dùng dữ liệu khách quan và góc nhìn bên ngoài.",
    gv: "Đã đối chiếu Marcos et al. (2018), Stage 2 “Competitive position” (tr. 47–48; tám yếu tố) và khuyến nghị dùng dữ liệu khách quan, cố vấn bên ngoài (tr. 53). Với agency sự kiện (nhận định): “hậu cần” ≈ mạng lưới nhà cung cấp, “chuyên môn kỹ thuật” ≈ năng lực đúng loại sự kiện. “Gần người ra quyết định” nối sang Buổi 3 (DMU).",
    next: "Mỗi yếu tố được chấm và nhân với trọng số.",
  });

  // 21 weighted scoring example
  s = slide("Chấm có trọng số: mỗi yếu tố một điểm, mỗi điểm một bằng chứng");
  T(s, "Ví dụ: vị thế cạnh tranh của Nova với An Phát (giả định)", 0.6, 1.8, 12.13, 0.5, { fontSize: 16, color: MU, italic: true });
  const sc = [["Hiểu biết về An Phát", "30%", "4", "4 năm làm gala, biết khách VIP của ngân hàng"], ["Gần người ra quyết định", "30%", "2", "chỉ quen chị Hạnh và 1 người"], ["Kết quả sự kiện đã làm", "20%", "4", "gala 3 năm liền không sự cố lớn"], ["Năng lực chương trình cả năm", "20%", "3", "mới làm sự kiện đơn lẻ"]];
  ["Yếu tố", "Trọng số", "Điểm 1–5", "Bằng chứng"].forEach((h, i) => T(s, h, [0.65, 4.4, 5.7, 7.0][i], 2.35, [3.7, 1.2, 1.2, 5.7][i], 0.45, { bold: true, color: MU, fontSize: 15 }));
  sc.forEach((r, i) => { const y = 2.85 + i * 0.72; box(s, 0.45, y, 12.43, 0.62); r.forEach((t, j) => T(s, t, [0.65, 4.4, 5.7, 7.0][j], y, [3.7, 1.2, 1.2, 5.7][j], 0.62, { fontSize: 15, bold: j === 2, color: j === 2 ? YEL : TX })); });
  box(s, 0.6, 5.85, 12.13, 0.75, YEL);
  T(s, "Điểm = 4×30% + 2×30% + 4×20% + 3×20% = 3,2/5 → vị thế khá; điểm yếu: chỉ quen một hai người", 0.85, 5.85, 11.7, 0.75, { fontSize: 17, bold: true, color: NAVY });
  notes(s, {
    say: "Cách chấm: mỗi yếu tố có trọng số, tổng 100%; mỗi khách hàng được chấm điểm cho từng yếu tố; nhân lên rồi cộng lại. Ví dụ giả định: vị thế của Nova với An Phát. Hiểu biết về An Phát, trọng số 30%, điểm 4 — bốn năm làm gala, biết khách VIP của ngân hàng. Gần người ra quyết định, 30%, điểm 2 — chỉ quen chị Hạnh và một người nữa. Kết quả sự kiện đã làm, 20%, điểm 4. Năng lực làm chương trình cả năm, 20%, điểm 3. Tổng: 3,2 trên 5 — vị thế khá. Và điểm yếu lộ ra ngay: Nova chỉ quen một hai người ở An Phát. Buổi 8 sẽ xử lý điểm yếu này. Quy tắc: mỗi điểm phải có một bằng chứng.",
    gv: "Giáo trình dùng thang 1–10 (Marcos et al., 2018, tr. 50); phiếu S6 của lớp dùng thang 1–5 cho nhanh — nói rõ điều này. Số liệu giả định, khớp W02 lecture notes §2.4. Tính kiểm: 1,2 + 0,6 + 0,8 + 0,6 = 3,2.",
    ask: "“Nếu đổi trọng số ‘gần người ra quyết định’ lên 50%, điểm thay đổi thế nào?”",
    next: "Câu hỏi thứ ba khác hẳn hai câu đầu: nó hỏi về phía khách hàng.",
  });

  // 22 co-invest
  s = slide("Câu thứ ba hỏi từ phía khách hàng: họ có chọn ta không?");
  box(s, 0.6, 1.95, 4.4, 4.4, PINK);
  T(s, "Choose me and I will choose you", 0.85, 2.1, 3.9, 2.2, { fontSize: 26, bold: true, color: NAVY, italic: true });
  T(s, "(Guesalaga, n.d., Cranfield)", 0.85, 4.35, 3.9, 0.5, { fontSize: 14, color: NAVY });
  T(s, "Một khách hàng hấp dẫn, ta có vị thế tốt — nhưng họ không muốn đầu tư lại thì khó thành Key Account.", 0.85, 4.85, 3.9, 1.4, { fontSize: 14, color: NAVY, valign: "top" });
  T(s, "Năm câu hỏi đo mức sẵn lòng cùng đầu tư", 5.3, 1.9, 7.4, 0.5, { bold: true, fontSize: 17, color: YEL });
  const q5 = ["Khách hàng sẵn lòng cùng đầu tư vào quan hệ với ta đến mức nào?", "Khách hàng muốn cùng tạo ra sản phẩm, dịch vụ, giải pháp với ta đến mức nào?", "Khách hàng sẵn lòng cùng xây chiến lược kinh doanh với ta đến mức nào?", "Khách hàng xem ta là nhà cung cấp then chốt đến mức nào?", "Khách hàng muốn thiết lập quan hệ đối tác với ta đến mức nào?"];
  q5.forEach((q, i) => { const y = 2.5 + i * 0.78; num(s, i + 1, 5.3, y + 0.07, 0.55, [TEAL, YEL, ORA, BLUE, PINK][i], 15); box(s, 6.0, y, 6.73, 0.68); T(s, q, 6.2, y, 6.4, 0.68, { fontSize: 14 }); });
  src(s, "Nguồn: Marcos et al. (2018, Bảng 2.3, tr. 51), mỗi câu chấm 1–10, mặc định trọng số 20%.", 6.5);
  notes(s, {
    say: "Câu thứ ba hỏi từ phía khách hàng — nhóm Cranfield gọi là “choose me and I will choose you”: chọn tôi thì tôi chọn bạn. Theo giáo trình, đây là tiêu chí mới nhất, đưa vào sau khi phỏng vấn các lãnh đạo làm KAM: KAM hiệu quả ngày nay cần cùng sáng tạo, cùng phát triển, cùng đầu tư. Giáo trình đo bằng năm câu hỏi: khách sẵn lòng cùng đầu tư vào quan hệ với ta đến mức nào; muốn cùng tạo ra sản phẩm, dịch vụ, giải pháp đến mức nào; sẵn lòng cùng xây chiến lược kinh doanh đến mức nào; xem ta là nhà cung cấp then chốt đến mức nào; và muốn thiết lập quan hệ đối tác đến mức nào.",
    gv: "Đã đối chiếu Marcos et al. (2018): Stage 3 (tr. 48–49) và Bảng 2.3 phần III (tr. 51), năm câu nguyên văn tiếng Anh, chấm 1–10, trọng số mặc định 20% mỗi câu. Cụm “Choose me and I will choose you” là tên bài blog Cranfield của Guesalaga (B07), không có trong phần sách đã đọc.",
    next: "Với một agency sự kiện, “cùng đầu tư” trông như thế nào?",
  });

  // 23 co-invest signs
  s = slide("Với agency sự kiện, đồng đầu tư có bốn biểu hiện quan sát được");
  const sg = [["FaFileContract", "Hợp đồng khung nhiều năm thay vì đấu thầu từng sự kiện", TEAL], ["FaComments", "Chia sẻ thông tin: mục tiêu kinh doanh, dữ liệu khách mời, kết quả sau sự kiện", YEL], ["FaUserTie", "Cử đầu mối cấp cao; mời agency vào họp kế hoạch năm", PINK], ["FaHandshake", "Chấp nhận thí điểm cùng làm: chia chi phí, chia rủi ro", BLUE]];
  for (let i = 0; i < 4; i++) { const x = 0.6 + (i % 2) * 6.25, y = 1.95 + Math.floor(i / 2) * 2.05; box(s, x, y, 5.88, 1.85); await ic(s, sg[i][0], x + 0.25, y + 0.45, 0.95, sg[i][2]); T(s, sg[i][1], x + 1.45, y, 4.25, 1.85, { fontSize: 17 }); }
  T(s, "Ví dụ tương tự: Techcombank từ nhà tài trợ concert (2024) thành nhà đồng đầu tư (2025).", 0.6, 6.15, 12.13, 0.55, { fontSize: 16, bold: true, color: YEL });
  notes(s, {
    say: "Với agency sự kiện, khách hàng muốn cùng đầu tư thường thể hiện qua bốn dấu hiệu: chấp nhận hợp đồng khung nhiều năm thay vì đấu thầu từng sự kiện; chia sẻ thông tin — mục tiêu kinh doanh, dữ liệu khách mời, kết quả sau sự kiện; cử đầu mối cấp cao và mời agency vào họp kế hoạch năm; và chấp nhận thí điểm cùng làm, chia chi phí, chia rủi ro. Một ví dụ thật nhưng là tương tự: Techcombank từ nhà tài trợ một concert năm 2024 đã trở thành nhà đồng đầu tư năm 2025. Đó là quan hệ nhà sản xuất – nhà tài trợ, không phải agency – khách hàng, nhưng cho thấy khi đối tác muốn đầu tư lại, quan hệ đổi hẳn chất.",
    gv: "Bốn biểu hiện là nhận định của người soạn (đã duyệt, tư liệu Buổi 2). Techcombank – Yeah1: B08 = U08, U11 trong tư liệu Buổi 9 — nhắc rõ là “tương tự”. Câu của một lãnh đạo ngành dịch vụ chuyên nghiệp trong Marcos et al. (2018, tr. 49): mức sẵn lòng cùng đầu tư là “a signal of commitment”.",
    next: "Khi khách hàng không muốn cùng đầu tư, chuyện gì xảy ra? Một tình huống thật.",
  });

  // 23b Drakeley case
  s = slide("Thắng thầu chưa chắc là thắng: một năm làm việc, không lời, không giữ được khách");
  box(s, 0.6, 1.95, 6.5, 4.4);
  T(s, "Agency sự kiện ở Anh, 2016 — chương trình 15 sự kiện trong 12 tháng cho một cơ quan công", 0.85, 2.05, 6.0, 0.95, { fontSize: 16, bold: true, color: YEL, valign: "top" });
  T(s, bullets(["Sau ký, khách muốn phạm vi lớn hơn trong cùng ngân sách", "Khách đổi nội dung liên tục, không hỏi agency; từ chối mọi đề xuất điều chỉnh của agency", "Agency không được chuyển ngân sách, không được tìm tài trợ thêm", "Hoàn thành đủ 15 sự kiện — nhưng gần như không có lợi nhuận, đội kiệt sức, hết dự án là hết quan hệ"]), 0.9, 3.05, 6.0, 3.2, { fontSize: 15, valign: "top", paraSpaceAfter: 6 });
  box(s, 7.4, 1.95, 5.33, 4.4, PINK);
  T(s, "Bài học cho việc chọn Key Account", 7.65, 2.1, 4.9, 0.6, { bold: true, fontSize: 18, color: NAVY });
  T(s, "“Make sure you are clear about who has the responsibility and the power and if it’s not the right balance, then maybe it’s not the right project for you to be delivering.”", 7.65, 2.75, 4.9, 2.4, { fontSize: 16, italic: true, color: NAVY, valign: "top" });
  T(s, "→ Kiểm tra mức sẵn lòng hợp tác trước khi ký, không phải sau.", 7.65, 5.25, 4.9, 1.0, { fontSize: 16, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Drakeley (2022), Case study 1 — trải nghiệm của tác giả với agency của mình.", 6.5);
  notes(s, {
    say: "Một tình huống thật, do chính người điều hành agency kể lại. Năm 2016, một agency sự kiện ở Anh thắng thầu một chương trình 15 sự kiện trong 12 tháng cho một cơ quan công, để khuyến khích người dân đi xe đạp. Ngay sau khi ký, khách hàng muốn phạm vi lớn hơn nhưng trong cùng ngân sách. Khách đổi nội dung liên tục mà không hỏi agency, nhưng từ chối mọi đề xuất điều chỉnh của agency; agency không được chuyển ngân sách giữa các sự kiện, không được tìm tài trợ thêm. Kết quả: agency làm đủ 15 sự kiện, khán giả phản hồi tốt, nhưng gần như không có lợi nhuận, đội ngũ kiệt sức, và hết dự án là hết quan hệ. Bài học của tác giả: hãy rõ ai có trách nhiệm và ai có quyền — nếu không cân bằng, có thể đó không phải dự án dành cho bạn. Với chọn Key Account: kiểm tra mức sẵn lòng hợp tác trước khi ký, không phải sau.",
    gv: "Đã đọc toàn văn Drakeley (2022), Case study 1 (tr. 18–20 bản PDF) và danh sách “best practices” cuối chương (tr. 35–36) — câu trích nguyên văn. Lưu ý: khách hàng là cơ quan công, đấu thầu một lần — không phải Key Account theo nghĩa của môn; dùng như phản ví dụ về thiếu “đồng đầu tư”. Nối Buổi 6 (chi phí phục vụ) và Buổi 7 (điều khoản). [VERIFY: thông tin xuất bản của chương.]",
    ask: "“Ở bước chấm ba tiêu chí, dấu hiệu nào lẽ ra đã cảnh báo agency?”",
    next: "Thử nhanh một ứng viên.",
  });

  // 24 quick vote
  s = slide("Giơ 1–3 ngón: ứng viên này yếu nhất ở tiêu chí nào?");
  box(s, 0.6, 1.95, 7.2, 3.6);
  await ic(s, "FaGlobe", 0.9, 2.25, 1.0, BLUE);
  T(s, "Hãng hàng không Sao Việt (giả định): ngân sách sự kiện lớn, muốn hợp đồng khung 3 năm và cùng thiết kế chương trình khách hàng thân thiết. Nhưng Nova chưa từng làm sự kiện quốc tế 2.000 khách; đối thủ là các agency quốc tế đã làm cho ngành hàng không.", 2.15, 2.15, 5.45, 3.3, { fontSize: 16, valign: "top" });
  [["1", "Sức hấp dẫn", TEAL], ["2", "Vị thế cạnh tranh của Nova", YEL], ["3", "Sẵn lòng cùng đầu tư", PINK]].forEach(([k, t, c], i) => { num(s, k, 8.2, 2.1 + i * 1.05, 0.75, c, 18); box(s, 9.1, 2.1 + i * 1.05, 3.63, 0.75); T(s, t, 9.3, 2.1 + i * 1.05, 3.3, 0.75, { fontSize: 17, bold: true }); });
  notes(s, {
    say: "Một ứng viên giả định: Hãng hàng không Sao Việt — ngân sách sự kiện lớn, muốn hợp đồng khung ba năm và cùng thiết kế chương trình khách hàng thân thiết. Nhưng Nova chưa từng làm sự kiện quốc tế 2.000 khách, và đối thủ là các agency quốc tế đã làm cho ngành hàng không. Ứng viên này yếu nhất ở tiêu chí nào? Giơ một ngón: sức hấp dẫn; hai ngón: vị thế cạnh tranh của Nova; ba ngón: sẵn lòng cùng đầu tư.",
    gv: "Đáp án: 2 — vị thế cạnh tranh. Hấp dẫn cao (ngân sách, hợp đồng khung), co-invest cao (cùng thiết kế); điểm yếu là năng lực và đối thủ. Tình huống mới, không trùng ứng viên trong phiếu S6 và bài trắc nghiệm.",
    ask: "Giơ 1–3 ngón.",
    next: "Đáp án.",
  });

  // 25 answer
  s = slide("Đáp án: vị thế cạnh tranh — khách hấp dẫn và muốn đầu tư, nhưng Nova chưa đủ sức");
  const an = [["Sức hấp dẫn", "cao — ngân sách lớn, hợp đồng khung", true], ["Sẵn lòng cùng đầu tư", "cao — muốn cùng thiết kế chương trình", true], ["Vị thế cạnh tranh", "thấp — chưa có năng lực, đối thủ mạnh hơn", false]];
  for (let i = 0; i < 3; i++) { const y = 1.95 + i * 1.15; box(s, 0.6, y, 7.2, 0.95); await ic(s, an[i][2] ? "FaCheck" : "FaTimes", 0.8, y + 0.15, 0.65, an[i][2] ? TEAL : PINK); T(s, [{ text: an[i][0] + ": ", options: { bold: true } }, { text: an[i][1] }], 1.7, y, 6.0, 0.95, { fontSize: 17 }); }
  box(s, 8.2, 1.95, 4.53, 3.25, YEL);
  T(s, "Lựa chọn: đầu tư nâng năng lực có thời hạn — hoặc chưa nhận làm Key Account.", 8.45, 1.95, 4.05, 3.25, { fontSize: 19, bold: true, color: NAVY });
  notes(s, {
    say: "Đáp án: vị thế cạnh tranh. Sao Việt hấp dẫn và muốn cùng đầu tư, nhưng Nova chưa đủ năng lực, đối thủ mạnh hơn. Nova có hai lựa chọn: đầu tư nâng năng lực có thời hạn — ví dụ liên kết với một đối tác có kinh nghiệm quốc tế — hoặc chưa nhận làm Key Account. Ba tiêu chí giúp ta thấy không chỉ ai, mà vì sao.",
    next: "Còn những khách hàng không được chọn thì sao?",
  });

  // 26 not chosen
  s = slide("Không chọn không có nghĩa là bỏ: phục vụ chuẩn hóa, vẫn có lời — và chọn lại định kỳ");
  box(s, 0.6, 1.95, 6.0, 4.3);
  await ic(s, "FaLayerGroup", 0.85, 2.2, 0.85, TEAL);
  T(s, "Khách hàng không phải Key Account", 1.9, 2.2, 4.5, 0.85, { bold: true, fontSize: 18, color: TEAL });
  T(s, bullets(["Vẫn phục vụ tốt và có lời", "Theo quy trình chuẩn, ít nguồn lực riêng", "Buổi 6: dùng CLV và chi phí phục vụ để quyết định chính xác hơn"]), 0.9, 3.25, 5.5, 2.9, { fontSize: 17, valign: "top", paraSpaceAfter: 8 });
  box(s, 6.85, 1.95, 5.88, 4.3);
  await ic(s, "FaSyncAlt", 7.1, 2.2, 0.85, YEL);
  T(s, "Chọn là việc làm lại định kỳ", 8.15, 2.2, 4.4, 0.85, { bold: true, fontSize: 18, color: YEL });
  T(s, "“…we have to keep re-qualifying and revalidating…”", 7.15, 3.25, 5.4, 1.1, { fontSize: 17, italic: true, valign: "top" });
  T(s, "Đội liên chức năng cùng chấm; mời góc nhìn bên ngoài.", 7.15, 4.45, 5.4, 1.6, { fontSize: 17, valign: "top" });
  src(s, "Nguồn: Marcos et al. (2018, tr. 43, 53).", 6.45);
  notes(s, {
    say: "Không được chọn làm Key Account không có nghĩa là bỏ khách hàng. Họ vẫn được phục vụ tốt và có lời — nhưng theo quy trình chuẩn, ít nguồn lực riêng. Buổi 6 sẽ dùng giá trị vòng đời khách hàng và chi phí phục vụ để quyết định chính xác hơn. Và chọn Key Account không phải làm một lần: một lãnh đạo ngành vận tải biển trong giáo trình nói “chúng tôi phải liên tục xét lại và xác nhận lại”. Việc chấm nên do một đội liên chức năng cùng làm, có cả góc nhìn từ bên ngoài.",
    gv: "Đã đối chiếu Marcos et al. (2018): trích dẫn lãnh đạo ngành vận tải biển (“keep re-qualifying and revalidating”, tr. 43) và khuyến nghị đội liên chức năng, cách tiếp cận “720 độ”, góc nhìn bên ngoài (tr. 53). Ý “phục vụ chuẩn hóa” là nhận định đã duyệt (W02 lecture notes §3.4).",
    next: "Ba lỗi hay gặp khi chọn Key Account.",
  });

  // 27 errors
  s = slide("Ba lỗi khi chọn Key Account");
  const er = ["Key Account = khách hàng lớn nhất", "Mỗi người tự chọn khách của mình, mỗi người một lý do", "Chấm điểm không có bằng chứng — hoặc quên hỏi khách có muốn chọn ta không"];
  for (let i = 0; i < 3; i++) { const y = 2.0 + i * 1.25; box(s, 0.6, y, 7.6, 1.05); await ic(s, "FaTimes", 0.8, y + 0.2, 0.65, PINK); T(s, er[i], 1.65, y, 6.45, 1.05, { fontSize: 18 }); }
  box(s, 8.5, 2.0, 4.23, 3.55, YEL);
  T(s, "Key Account = đáng đầu tư và muốn cùng đầu tư.", 8.75, 2.0, 3.75, 3.55, { fontSize: 26, bold: true, color: NAVY });
  notes(s, {
    say: "Ba lỗi. Một: coi Key Account là khách hàng lớn nhất — như Sông Xanh ở đầu buổi. Hai: để mỗi người tự chọn khách của mình, mỗi người một lý do — như công ty gỗ với 60 “Key Account”. Ba: chấm điểm không có bằng chứng, hoặc quên hỏi xem khách có muốn chọn ta không. Key Account là khách hàng đáng đầu tư — và muốn cùng đầu tư.",
    gv: "Quay lại kết quả giơ tay ở slide 2: “Bây giờ Sông Xanh có phải Key Account không?” — mong đợi: chưa qua tiêu chí 3 (đấu thầu theo giá, đổi agency hằng năm).",
    next: "Giờ các bạn chọn Key Account cho Nova: Thực hành 2.",
  });

  // 28 practice 2
  s = await L.practice("Thực hành 2 · 30 phút: Nova chọn tối đa hai Key Account", [["3’", "Đọc 5 ứng viên: An Phát, Sông Xanh, MediPharm, Bright Future, Bếp Việt", TEAL], ["15’", "Chấm hai trục có trọng số, đánh giá đồng đầu tư kèm bằng chứng; đặt lên ma trận; chọn ≤2 Key Account, ghi cách phục vụ 3 khách còn lại", YEL], ["8’", "Xoay trạm 2 vòng, vai anh Đức — CEO Nova: 1 câu hỏi (note vàng) + 1 lo ngại (note hồng)", PINK], ["4’", "Về bàn, sửa một điểm", BLUE]], "FaStar", "Sản phẩm", "Bảng chấm + ma trận trên A1 — mẫu cho đoạn “vì sao chọn Key Account” trong kế hoạch", "Mỗi điểm số phải có một bằng chứng từ phiếu.", YEL);
  notes(s, {
    say: "Thực hành 2, 30 phút. Ba phút đọc năm ứng viên: An Phát, Sông Xanh, MediPharm, Bright Future, Bếp Việt. Mười lăm phút: chấm hai trục có trọng số — thang 1 đến 5 — đánh giá mức sẵn lòng cùng đầu tư kèm bằng chứng; đặt năm khách lên ma trận; chọn tối đa hai Key Account, và ghi Nova phục vụ ba khách còn lại theo cách nào. Tám phút: xoay trạm hai vòng; các bạn đóng vai anh Đức — CEO Nova — để lại một câu hỏi trên note vàng và một lo ngại trên note hồng. Bốn phút: về bàn, sửa một điểm. Mỗi điểm số phải có một bằng chứng từ phiếu.",
    gv: "Phiếu W02_activity_S6_chon_key_account.md. Mốc phút 93–123. Chiếu slide 19–22 trong lúc chấm. Anh Đức là CEO Nova.",
    next: "Tổng hợp buổi học.",
  });

  // 29 summary
  s = slide("Ba ý của Buổi 2 — và trang 2 của kế hoạch");
  const sm = [["2.1", "KAM không phải bán hàng xịn hơn: quan hệ dài hạn, hai chiều, nhiều người, có kế hoạch và nguồn lực riêng", TEAL], ["2.2", "Chọn bằng hai trục có trọng số — sức hấp dẫn, vị thế cạnh tranh — và câu hỏi đồng đầu tư", YEL], ["→", "Key Account là khách đáng đầu tư và muốn cùng đầu tư, không phải khách lớn nhất", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.25; box(s, 0.6, y, 1.3, 1.05, c); T(s, k, 0.6, y, 1.3, 1.05, { align: "center", bold: true, color: NAVY, fontSize: 22 }); box(s, 2.1, y, 10.63, 1.05); T(s, t, 2.35, y, 10.2, 1.05, { fontSize: 18 }); });
  box(s, 0.6, 5.85, 12.13, 0.8, BLUE);
  T(s, "Kế hoạch cuối kỳ: một đoạn “khách hàng dự án cũ đạt ba tiêu chí đến đâu, vì sao chọn làm Key Account”.", 0.85, 5.85, 11.7, 0.8, { fontSize: 16, bold: true, color: NAVY });
  notes(s, {
    say: "Ba ý của Buổi 2. Một — mục 2.1: KAM không phải bán hàng xịn hơn, mà là quản trị quan hệ dài hạn, hai chiều, nhiều người, có kế hoạch và nguồn lực riêng. Hai — mục 2.2: chọn Key Account bằng hai trục chấm có trọng số — sức hấp dẫn và vị thế cạnh tranh — và câu hỏi đồng đầu tư. Ba: Key Account là khách hàng đáng đầu tư và muốn cùng đầu tư, không phải khách lớn nhất. Với kế hoạch cuối kỳ: nhóm viết một đoạn — khách hàng từ dự án cũ đạt ba tiêu chí đến đâu, và vì sao chọn làm Key Account.",
    next: "Ba câu kiểm tra nhanh.",
  });

  // 30 quick check
  s = L.quickCheck(["Nêu hai khía cạnh khiến KAM khác Sales, mỗi khía cạnh một ví dụ của agency.", "Vì sao khách hàng doanh thu lớn nhất có thể không phải Key Account?", "Kể một dấu hiệu cho thấy khách hàng sẵn lòng cùng đầu tư vào quan hệ với agency."]);
  notes(s, {
    say: "Ba câu kiểm tra nhanh. Một: nêu hai khía cạnh khiến KAM khác Sales, mỗi khía cạnh một ví dụ của agency. Hai: vì sao khách hàng doanh thu lớn nhất có thể không phải Key Account? Ba: kể một dấu hiệu cho thấy khách hàng sẵn lòng cùng đầu tư vào quan hệ với agency.",
    gv: "Gợi ý: (1) bất kỳ hai dòng trong bảng slide 7; (2) có thể trượt vị thế hoặc đồng đầu tư; biên thấp, chi phí phục vụ cao (nối Buổi 6); (3) hợp đồng khung, chia sẻ dữ liệu, đầu mối cấp cao, thí điểm chung.",
    ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.",
    next: "Phiếu cuối giờ.",
  });

  // 31 exit
  s = await L.exitTicket("Một điểm khác biệt giữa Sales và KAM, kèm ví dụ từ dự án sự kiện cũ của nhóm.", "Khách hàng trong dự án cũ đạt ba tiêu chí đến đâu? Tiêu chí nào yếu nhất?");
  notes(s, {
    say: "Phiếu cuối giờ, hai câu. Một: một điểm khác biệt giữa Sales và KAM, kèm ví dụ từ dự án sự kiện cũ của nhóm bạn. Hai: khách hàng trong dự án cũ đạt ba tiêu chí đến đâu — tiêu chí nào yếu nhất? Không chấm điểm.",
    gv: "Giáo án S8. Xem: khác biệt có nói về quan hệ, thời gian, giá trị cho khách hàng không; SV có mặc định khách cũ là Key Account không.",
    next: "Buổi sau.",
  });

  // 32 next
  s = await L.nextSession("Không có bài về nhà. Buổi 3: hiểu khách hàng hơn chính họ", "Buổi 3 · Thế giới của khách hàng", "Đã chọn Key Account thì phải hiểu họ: ngành và đối thủ của họ, hành trình của khách họ, và ai thật sự quyết định.", ["Ảnh bảng chấm hôm nay", "Hồ sơ dự án cũ: brief, kế hoạch, báo cáo"]);
  notes(s, { say: "Không có bài về nhà. Buổi 3: đã chọn Key Account thì phải hiểu họ hơn chính họ — ngành và đối thủ của họ, hành trình của khách họ, và ai thật sự quyết định. Mang theo ảnh bảng chấm hôm nay và hồ sơ dự án cũ.", gv: "[NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 2 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 33 refs
  s = L.refs([
    [["Drakeley, C. (2022). "], ["Managing event stakeholders: Expect the unexpected", 1], [" [Chương sách]."]],
    [["Guesalaga, R. (n.d.). "], ["Adopting key account management – Choose me and I will choose you", 1], [". Cranfield School of Management Executive Development Blog."]],
    [["Homburg, C., Workman, J. P., Jr., & Jensen, O. (2002). A configurational perspective on key account management. "], ["Journal of Marketing, 66", 1], ["(2), 38–60."]],
    [["Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). "], ["Implementing key account management: Designing customer-centric processes for mutual growth", 1], [". Kogan Page."]],
    [["McDonald, M. (n.d.). "], ["Why many companies get key account management hopelessly wrong", 1], [". Cranfield School of Management Executive Development Blog."]],
    [["McDonald, M., Millman, T., & Rogers, B. (1997). Key account management: Theory, practice and challenges. "], ["Journal of Marketing Management, 13", 1], ["(8), 737–757."]],
    [["Millman, T., & Wilson, K. (1995). From key account selling to key account management. "], ["Journal of Marketing Practice: Applied Marketing Science, 1", 1], ["(1), 9–21."]],
    [["Trần Nguyễn Huỳnh Như. (2023). "], ["Chương 1: Tổng quan về quản lý khách hàng trong sự kiện", 1], [" [Slide bài giảng]."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 2, theo APA 7. Chương 2 của Marcos và cộng sự là phần đọc thêm cho cách chọn Key Account.", gv: "Techcombank – Yeah1: nguồn báo chí trong tư liệu Buổi 9 (U08, U11) — không liệt kê lại ở đây.", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
