// EVM1110E Buổi 3 — Understanding the customer, customer journey, DMU/GRASP
// usage: NODE_PATH=<node_modules> node w03.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W03_slides.pptx";
const L = make(FONT, "Bài 3: Hiểu thế giới của Key Account");
const { T, box, circ, num, ic, slide, notes, src, bullets, arrow } = L;
const { TEAL, YEL, PINK, PUR, BLUE, ORA, NAVY, CARD, TX, MU } = C;

(async () => {
  // 1
  let s = L.titleSlide("Bài 3: Hiểu thế giới của Key Account", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 3\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 3 — Bài 3: Hiểu thế giới của Key Account: môi trường của khách hàng, hành trình của khách hàng, và ai thật sự quyết định.", gv: "Mở đầu bằng 2–3 “điều còn mơ hồ” từ phiếu cuối giờ Buổi 2 (≤3 phút).", next: "Bắt đầu bằng một tin kinh tế." });

  // 2 hook
  s = slide("Tín dụng ngân hàng năm 2026 có phải chuyện của một agency sự kiện?");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaUniversity", 0.9, 2.2, 1.1, BLUE);
  T(s, "Tin thật · VnEconomy, 11/1/2026", 2.2, 2.2, 5.5, 1.1, { fontSize: 16, color: MU });
  T(s, bullets(["Ngân hàng Nhà nước định hướng tín dụng toàn hệ thống tăng khoảng 15% năm 2026", "Chỉ tiêu cho từng ngân hàng dựa trên chấm điểm xếp hạng", "Kiểm soát chặt tín dụng bất động sản"]), 0.95, 3.45, 6.75, 2.7, { fontSize: 18, valign: "top", paraSpaceAfter: 8 });
  box(s, 8.2, 1.95, 4.53, 4.3);
  T(s, "Giơ tay: Nova có cần biết điều này không?", 8.45, 2.1, 4.1, 1.2, { bold: true, fontSize: 18, color: YEL, valign: "top" });
  [["Có", TEAL], ["Không", PINK]].forEach(([t, c], i) => { box(s, 8.5, 3.5 + i * 1.2, 3.93, 0.95, c); T(s, t, 8.7, 3.5 + i * 1.2, 3.5, 0.95, { fontSize: 22, bold: true, color: NAVY }); });
  notes(s, {
    say: "Tin thật, VnEconomy ngày 11 tháng 1 năm 2026: Ngân hàng Nhà nước định hướng tín dụng toàn hệ thống tăng khoảng 15% năm 2026; chỉ tiêu cho từng ngân hàng dựa trên kết quả chấm điểm xếp hạng; và kiểm soát chặt tín dụng bất động sản. Nova là agency sự kiện. Nova có cần biết điều này không? Giơ tay.",
    gv: "Nguồn C05 (đã kiểm chứng chéo: VnEconomy, VnExpress, Pháp Luật TP.HCM, Pháp luật Việt Nam). Câu chốt: “Có — vì An Phát cần biết. Khi tín dụng bị giới hạn, ngân hàng phải giữ khách doanh nghiệp tốt bằng cách khác. Đó có thể chính là lý do An Phát cần một chương trình khách hàng.”",
    ask: "“Nova có cần biết tin này không? Vì sao?”",
    next: "Hôm nay ta nhìn thế giới bằng mắt của khách hàng.",
  });

  // 3 understand better than they do
  s = slide("Phần yếu nhất trong kế hoạch Key Account là hiểu thế giới của khách hàng");
  box(s, 0.6, 1.95, 5.6, 4.35, PINK);
  await ic(s, "FaSearch", 0.9, 2.2, 1.0, NAVY, PINK);
  T(s, "Nghiên cứu ở Cranfield: phần được làm kém nhất trong nhiều kế hoạch Key Account là hiểu thế giới của khách hàng và chiến lược tương lai của họ.", 0.9, 3.35, 5.0, 2.8, { fontSize: 18, bold: true, color: NAVY, valign: "top" });
  box(s, 6.5, 1.95, 6.23, 4.35);
  T(s, "Một khách hàng nói về nhà cung cấp tốt nhất:", 6.75, 2.1, 5.8, 0.5, { fontSize: 15, color: MU });
  T(s, "“They are able to have a discussion with me about how they can help me with my competitive advantage… This is miles away from the usual sell sell sell approach.”", 6.75, 2.65, 5.8, 2.6, { fontSize: 18, italic: true, valign: "top" });
  T(s, "— Giám đốc cấp cao, công ty kỹ thuật toàn cầu", 6.75, 5.35, 5.8, 0.6, { fontSize: 14, color: MU });
  src(s, "Nguồn: Marcos et al. (2018, tr. 60–61).", 6.45);
  notes(s, {
    say: "Giáo trình kể: nghiên cứu ở Cranfield với người làm KAM cho thấy phần được làm kém nhất trong nhiều kế hoạch Key Account chính là phần hiểu thế giới của khách hàng và chiến lược tương lai của họ. Nhiều người nói “tôi hiểu khách hàng rõ lắm” — nhưng thực tế thì không. Còn đây là lời một giám đốc cấp cao của khách hàng nói về nhà cung cấp tốt nhất: họ có thể bàn với tôi về cách giúp tôi tạo lợi thế cạnh tranh — khác xa kiểu “bán, bán, bán” tôi nhận được từ các nhà cung cấp khác.",
    gv: "Đã đối chiếu Marcos et al. (2018), Chương 3: research vignette (tr. 60) và “Voice of the practitioner” (tr. 61).",
    next: "Vậy cần hiểu những gì? Có một công cụ gọi là bánh xe hiểu khách hàng.",
  });

  // 4 wheel
  s = slide("Bánh xe hiểu khách hàng: tám nan quanh một mục tiêu — hiểu khách hàng hơn chính họ");
  circ(s, 5.17, 3.0, 3.0, YEL);
  T(s, "Hiểu khách hàng hơn chính họ", 5.27, 3.0, 2.8, 3.0, { align: "center", bold: true, color: NAVY, fontSize: 19 });
  const sp = [["Ngành và các động lực của ngành", 0.6, 1.95, TEAL], ["Chiến lược và mô hình kinh doanh", 4.65, 1.75, BLUE], ["Đối thủ của khách hàng", 8.7, 1.95, PINK], ["Vận hành của khách hàng", 8.7, 3.95, ORA], ["Khách hàng và nhà cung cấp của họ", 8.7, 5.85, TEAL], ["Năng lực cốt lõi", 4.65, 6.15, BLUE], ["Địa bàn hoạt động", 0.6, 5.85, PINK], ["Người chủ chốt, văn hóa, chính trị nội bộ", 0.6, 3.95, ORA]];
  sp.forEach(([t, x, y, c]) => { box(s, x, y, 4.03, 0.75, c); T(s, t, x + 0.15, y, 3.75, 0.75, { fontSize: 15, bold: true, color: NAVY, align: "center" }); });
  T(s, "Holt (2003, cập nhật 2016), trong Marcos et al. (2018, Hình 3.1, tr. 61)", 0.6, 6.95, 9.0, 0.4, { fontSize: 12, color: MU, italic: true });
  notes(s, {
    say: "Sue Holt ở Cranfield xây dựng Bánh xe hiểu khách hàng — Wheel of Customer Understanding — từ phỏng vấn hơn 50 người làm trong các quan hệ khách hàng – nhà cung cấp chiến lược, một nửa trong số đó chính là khách hàng. Ở trung tâm: hiểu khách hàng hơn chính họ. Tám nan: hiểu ngành và các động lực của ngành; chiến lược và mô hình kinh doanh của khách; đối thủ của khách; vận hành của khách; khách hàng và nhà cung cấp của họ; năng lực cốt lõi; địa bàn hoạt động; và biết người chủ chốt, văn hóa, chính trị nội bộ.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 3.1 và đoạn giới thiệu tr. 60–61 (Holt 2003, cập nhật 2016; hơn 50 người, một nửa là khách hàng). Sách gọi là “nine key areas” — trung tâm và tám nan; bản trích xuất không giữ bố cục hình, cách xếp quanh vòng tròn là của người soạn. Điều này lấp khoảng trống C02 trong tư liệu Buổi 3 (trước đây chỉ biết tên công cụ). Nan “người chủ chốt, văn hóa, chính trị” sẽ là phần DMU/GRASP cuối buổi.",
    ask: "“Nan nào Nova đang biết ít nhất về An Phát?”",
    next: "Đề cương mục 3.1 tập trung vào ba công cụ để đi những nan đầu tiên.",
  });

  // 5 stage A tools
  s = slide("Ba công cụ cho mục 3.1: PESTEL, đối thủ và nội bộ — tất cả là của khách hàng");
  const tools = [["FaGlobe", "PESTEL của khách hàng", "chính sách, kinh tế, xã hội, công nghệ, môi trường, pháp lý của ngành khách hàng", TEAL], ["FaChessKnight", "Đối thủ của khách hàng", "ai đang giành khách hàng của họ", PINK], ["FaSitemap", "Nội bộ khách hàng", "chiến lược, mục tiêu, cơ cấu, người ra quyết định", BLUE]];
  for (let i = 0; i < 3; i++) { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.0); await ic(s, tools[i][0], x + 1.4, 2.15, 1.1, tools[i][3]); T(s, tools[i][1], x, 3.35, 3.9, 0.55, { align: "center", bold: true, fontSize: 19, color: tools[i][3] }); T(s, tools[i][2], x + 0.25, 3.9, 3.4, 1.0, { align: "center", fontSize: 15, valign: "top" }); }
  box(s, 0.6, 5.2, 12.13, 1.15, YEL);
  T(s, "Lời khuyên: nghiên cứu tương xứng với tầm quan trọng của khách · thiếu dữ liệu thì đặt giả định và ghi rõ · xác nhận lại với khách hàng.", 0.85, 5.2, 11.7, 1.15, { fontSize: 17, bold: true, color: NAVY });
  src(s, "Nguồn: Davies (n.d.), Cranfield KAM Forum — Value Planning Framework, Stage A.", 6.5);
  notes(s, {
    say: "Theo Value Planning Framework của Cranfield KAM Forum, bước đầu của kế hoạch Key Account là phân tích thế giới của khách hàng bằng ba công cụ: PESTEL của khách hàng — chính sách, kinh tế, xã hội, công nghệ, môi trường, pháp lý trong ngành của khách; đối thủ của khách hàng — ai đang giành khách hàng của họ; và nội bộ khách hàng — chiến lược, mục tiêu, cơ cấu, người ra quyết định. Ba lời khuyên: nghiên cứu tương xứng với tầm quan trọng của khách; thiếu dữ liệu thì đặt giả định và ghi rõ; và xác nhận lại với khách hàng.",
    gv: "Nguồn C01 (Davies, Cranfield KAM Forum) — đã đọc khi soạn tư liệu; cũng là khung A–E của Buổi 13 (Stage A = Value Insights).",
    next: "Thử PESTEL cho An Phát.",
  });

  // 6 PESTEL An Phát
  s = slide("PESTEL trong KAM là PESTEL của khách hàng, không phải của agency");
  const pe = [["P", "Chính sách nào ảnh hưởng ngân hàng?", "Tín dụng ~15% năm 2026, siết bất động sản (thật)", TEAL], ["E", "Khách doanh nghiệp của An Phát lo gì?", "Chi phí vốn, dòng tiền (giả định)", YEL], ["S", "Chủ doanh nghiệp thay đổi thế nào?", "Thế hệ trẻ, ưa trải nghiệm (giả định)", PINK], ["T", "Ngân hàng số ảnh hưởng quan hệ ra sao?", "Khách ít đến chi nhánh (giả định)", BLUE], ["E", "Xu hướng xanh?", "Tín dụng xanh (giả định)", ORA], ["L", "Quy định nào ràng buộc sự kiện?", "Bảo vệ dữ liệu khách mời (giả định)", PUR]];
  pe.forEach(([k, q, e, c], i) => { const y = 1.85 + i * 0.75; box(s, 0.6, y, 0.75, 0.65, c); T(s, k, 0.6, y, 0.75, 0.65, { align: "center", bold: true, color: c === PUR ? TX : NAVY, fontSize: 20 }); box(s, 1.5, y, 5.3, 0.65); T(s, q, 1.7, y, 5.0, 0.65, { fontSize: 15 }); box(s, 6.95, y, 5.78, 0.65); T(s, e, 7.15, y, 5.4, 0.65, { fontSize: 15, color: e.includes("thật") ? YEL : TX, bold: e.includes("thật") }); });
  notes(s, {
    say: "PESTEL trong KAM là PESTEL của khách hàng. P — chính sách nào ảnh hưởng ngân hàng? Tin thật: tín dụng khoảng 15% năm 2026, siết bất động sản. E — khách doanh nghiệp của An Phát lo gì? Giả định: chi phí vốn, dòng tiền. S — chủ doanh nghiệp thay đổi thế nào? Giả định: thế hệ trẻ, ưa trải nghiệm. T — ngân hàng số: khách ít đến chi nhánh. E — xu hướng xanh: tín dụng xanh. L — quy định nào ràng buộc cách An Phát làm sự kiện: ví dụ bảo vệ dữ liệu khách mời. Chỉ dòng đầu là dữ kiện thật; các dòng khác là giả định — và phải ghi rõ là giả định.",
    gv: "Bảng theo W03 lecture notes §1.2. Dòng L: [VERIFY: văn bản hiện hành về bảo vệ dữ liệu cá nhân trước khi nêu tên luật/nghị định với lớp].",
    next: "Một dữ kiện chỉ có giá trị khi nó trở thành nhu cầu.",
  });

  // 7 fact -> need
  s = slide("Dữ kiện chỉ có giá trị khi thành nhu cầu của khách hàng — và cơ hội cho agency");
  const ch = [["Tín dụng bị giới hạn", "dữ kiện", TEAL], ["Ngân hàng cạnh tranh giữ khách tốt bằng dịch vụ và quan hệ", "hệ quả cho An Phát", YEL], ["An Phát cần sự kiện tạo giá trị thật cho khách doanh nghiệp", "nhu cầu", PINK], ["Nova đề xuất chương trình khách hàng cả năm", "cơ hội cho Nova", BLUE]];
  ch.forEach(([t, k, c], i) => { const x = 0.6 + i * 3.17; box(s, x, 2.2, 2.75, 3.0, c); T(s, k, x + 0.15, 2.35, 2.45, 0.5, { fontSize: 14, color: NAVY, italic: true }); T(s, t, x + 0.15, 2.9, 2.45, 2.2, { fontSize: 18, bold: true, color: NAVY, valign: "top" }); if (i < 3) arrow(s, x + 2.8, 3.5, 0.32, 0.45); });
  T(s, "Mẫu câu: “Vì [dữ kiện] và [dữ kiện], An Phát cần …”", 0.6, 5.6, 12.13, 0.6, { fontSize: 20, bold: true, color: YEL });
  notes(s, {
    say: "Từ dữ kiện đến cơ hội. Dữ kiện: tín dụng bị giới hạn. Hệ quả cho An Phát: các ngân hàng cạnh tranh giữ khách doanh nghiệp tốt bằng dịch vụ và quan hệ, không chỉ bằng khoản vay. Nhu cầu: An Phát cần những sự kiện tạo giá trị thật cho khách doanh nghiệp, không chỉ một bữa tiệc. Cơ hội cho Nova: đề xuất chương trình khách hàng cả năm. Mẫu câu dùng trong thực hành: “Vì dữ kiện này và dữ kiện kia, An Phát cần…”.",
    gv: "Chuỗi suy luận là nhận định của người soạn (W03 lecture notes §1.2) — nói rõ đây là suy luận, cần kiểm chứng với khách hàng.",
    next: "Còn đối thủ — đối thủ của ai?",
  });

  // 8 competitors & brief
  s = slide("Đối thủ của An Phát là ngân hàng khác — và ngay bản brief đã hỏi về điều đó");
  box(s, 0.6, 1.95, 5.6, 4.35);
  await ic(s, "FaChessKnight", 0.85, 2.2, 0.9, PINK);
  T(s, "Đối thủ của ai?", 1.95, 2.2, 4.0, 0.9, { bold: true, fontSize: 20, color: PINK });
  T(s, bullets(["Không phải agency khác của Nova", "Là ngân hàng khác đang giành khách doanh nghiệp VIP của An Phát", "Ví dụ (giả định): ngân hàng X mở hội thảo chuyên đề hằng quý cho khách lớn"]), 0.9, 3.3, 5.1, 2.9, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  box(s, 6.5, 1.95, 6.23, 4.35);
  await ic(s, "FaClipboardList", 6.75, 2.2, 0.9, TEAL);
  T(s, "Cấu trúc một bản brief", 7.85, 2.2, 4.7, 0.9, { bold: true, fontSize: 20, color: TEAL });
  T(s, [{ text: "I. Thông tin công ty: ", options: { bold: true, color: YEL } }, { text: "thông tin cơ bản · khách hàng · đối thủ cạnh tranh", options: { breakLine: true } }, { text: "II. Tổng quan dự án: ", options: { bold: true, color: YEL } }, { text: "mong muốn, quy mô, đối tượng, thời gian, địa điểm, mục đích, KPI", options: { breakLine: true } }, { text: "III. Thông tin chi tiết: ", options: { bold: true, color: YEL } }, { text: "thông điệp, phong cách, ngân sách, deadline" }], 6.8, 3.3, 5.7, 2.9, { fontSize: 15, valign: "top", paraSpaceAfter: 8 });
  src(s, "Nguồn: Trần Nguyễn Huỳnh Như (2023), Chương 2 — cấu trúc một bảng brief.", 6.45);
  notes(s, {
    say: "Đối thủ ở đây là đối thủ của An Phát — các ngân hàng khác đang giành khách doanh nghiệp VIP của An Phát — chứ không phải các agency khác của Nova. Ví dụ giả định: ngân hàng X mở hội thảo chuyên đề hằng quý cho khách lớn. Thực ra ngay bản brief mà khách gửi cho agency cũng đã có phần này. Slide bộ môn mô tả cấu trúc một bản brief: phần I — thông tin công ty: thông tin cơ bản, khách hàng của họ, đối thủ cạnh tranh của họ; phần II — tổng quan dự án: mong muốn, quy mô, đối tượng, thời gian, địa điểm, mục đích, KPI; phần III — thông tin chi tiết: thông điệp, phong cách, ngân sách, deadline. Agency giỏi đọc kỹ phần I, không chỉ phần III.",
    gv: "Đã đối chiếu slide gốc Chương 2 (“Cấu trúc một bảng brief”, mục UNDERSTANDING). Lược bớt vài dòng (tone màu, loại hình, hình thức).",
    ask: "“Trong dự án cũ, nhóm có từng đọc phần ‘khách hàng và đối thủ’ trong brief không?”",
    next: "Khi không có dữ liệu thì sao?",
  });

  // 9 assumptions & misconceptions
  s = slide("Thiếu dữ liệu thì ghi giả định và kiểm chứng sau — không bịa, không bỏ qua");
  const mis = [["“PESTEL là để phân tích thị trường sự kiện”", "Trong KAM, phân tích ngành và đối thủ của khách hàng"], ["“Không có số liệu thì bỏ qua”", "Đặt giả định, ghi rõ, xác nhận lại với khách hàng"]];
  for (let i = 0; i < 2; i++) { const y = 2.0 + i * 2.15; box(s, 0.6, y, 5.6, 1.85); await ic(s, "FaTimes", 0.85, y + 0.5, 0.8, PINK); T(s, mis[i][0], 1.85, y, 4.2, 1.85, { fontSize: 18, bold: true }); arrow(s, 6.35, y + 0.65, 0.6, 0.55, YEL); box(s, 7.1, y, 5.63, 1.85, TEAL); T(s, mis[i][1], 7.35, y, 5.2, 1.85, { fontSize: 18, bold: true, color: NAVY }); }
  notes(s, {
    say: "Hai hiểu lầm. Một: PESTEL là để phân tích thị trường sự kiện. Không — trong KAM, ta phân tích ngành và đối thủ của khách hàng. Hai: không có số liệu thì bỏ qua. Không — đặt giả định, ghi rõ là giả định, và xác nhận lại với khách hàng. Không bịa số, không bỏ trống.",
    gv: "Theo W03 lecture notes §1.4 và C01.",
    next: "Thực hành 1: thế giới của An Phát.",
  });

  // 10 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: thế giới của An Phát", [["7’", "Xếp 8 thẻ dữ kiện vào P · E · S · T · E · L hoặc “đối thủ của An Phát”; thẻ thuộc hai ô thì ghi lý do", TEAL], ["8’", "Viết 3 nhu cầu của An Phát năm tới, mỗi nhu cầu dựa trên ít nhất 2 thẻ", YEL], ["5’", "Với 1 nhu cầu: Nova giúp bằng chương trình gì? Ghi 1 giả định cần hỏi chị Hạnh", PINK]], "FaGlobe", "Sản phẩm", "Bảng A3 — mẫu cho phần A. Value Insights của kế hoạch", "Thẻ 1 là dữ kiện thật; thẻ 2–8 là giả định.");
  notes(s, {
    say: "Thực hành 1, 20 phút. Bảy phút: xếp 8 thẻ dữ kiện vào sáu chữ cái PESTEL hoặc ô “đối thủ của An Phát”; thẻ nào thuộc hai ô thì ghi lý do. Tám phút: viết ba nhu cầu của An Phát năm tới, mỗi nhu cầu dựa trên ít nhất hai thẻ. Năm phút: chọn một nhu cầu — Nova giúp bằng chương trình gì — và ghi một giả định cần hỏi lại chị Hạnh. Thẻ 1 là dữ kiện thật; thẻ 2 đến 8 là giả định.",
    gv: "Phiếu W03_activity_S3_the_gioi_an_phat.md (cắt thẻ trước). Mốc phút 27–47. Chiếu slide 7 (mẫu câu) trong lúc làm.",
    next: "Giải lao.",
  });

  // 11 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 47–55.", next: "Sau giải lao: hành trình của khách hàng." });

  // 12 question
  s = await L.question("Một khách VIP, một đêm gala", "Từ lúc nhận thư mời đến sau gala, khách chạm vào An Phát bao nhiêu lần?", "FaRoute", TEAL, "Đề cương 3.2: Customer journey mapping");
  notes(s, { say: "Một khách VIP của An Phát. Từ lúc nhận thư mời đến sau đêm gala, người đó chạm vào An Phát bao nhiêu lần? Đề cương mục 3.2: vẽ bản đồ hành trình khách hàng.", ask: "“Đếm thử: bạn kể được bao nhiêu điểm chạm?”", next: "Hành trình có ba giai đoạn." });

  // 13 three stages
  s = slide("Hành trình có ba giai đoạn; việc đầu tiên là liệt kê đủ điểm chạm và xếp hạng tầm quan trọng");
  const st = [["Trước khi mua", "Prepurchase", "nhận biết, tìm hiểu, cân nhắc", TEAL], ["Trong khi mua", "Purchase", "lựa chọn, đặt, thanh toán, tham dự", YEL], ["Sau khi mua", "Postpurchase", "sử dụng, đánh giá, quay lại, giới thiệu", PINK]];
  st.forEach(([a, b, d, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 2.6, c); T(s, a, x + 0.2, 2.05, 3.5, 0.7, { bold: true, fontSize: 22, color: NAVY }); T(s, b, x + 0.2, 2.75, 3.5, 0.45, { fontSize: 15, color: NAVY, italic: true }); T(s, d, x + 0.2, 3.25, 3.5, 1.2, { fontSize: 16, color: NAVY, valign: "top" }); if (i < 2) arrow(s, x + 3.92, 3.05, 0.2, 0.4); });
  box(s, 0.6, 4.85, 12.13, 1.4);
  T(s, "“Mục tiêu đầu tiên là xác định tất cả các điểm tiếp xúc có liên quan và đánh giá tầm quan trọng tương đối của chúng trong toàn bộ hành trình của khách hàng.”", 0.85, 4.85, 11.7, 1.4, { fontSize: 17, italic: true });
  src(s, "Nguồn: Lemon & Verhoef (2016); Marcos et al. (2018, Hình 4.5, tr. 104); Trần Nguyễn Huỳnh Như (2023), Chương 3.", 6.45);
  notes(s, {
    say: "Lemon và Verhoef, 2016, chia hành trình khách hàng thành ba giai đoạn: trước khi mua — prepurchase; trong khi mua — purchase; và sau khi mua — postpurchase. Slide bộ môn nói rõ: trong mỗi giai đoạn có một số điểm tiếp xúc giữa nhà cung cấp và khách hàng, và một số quan trọng hơn những cái khác. Mục tiêu đầu tiên là xác định tất cả các điểm tiếp xúc có liên quan và đánh giá tầm quan trọng tương đối của chúng trong toàn bộ hành trình.",
    gv: "Đã đối chiếu: C03 Lemon & Verhoef (2016), Journal of Marketing 80(6) — đã đọc toàn văn khi soạn tư liệu; câu trích nguyên văn từ slide gốc Chương 3, mục “Yếu tố để có được MQH thành công”. Mô tả hoạt động mỗi giai đoạn (dòng nhỏ) là diễn giải cho bối cảnh sự kiện. Marcos et al. (2018, Hình 4.5, tr. 104) dùng cùng ba giai đoạn cho khách B2B: pre-purchase (nhận diện nhu cầu, tìm kiếm, đánh giá), purchase (lựa chọn, đặt hàng, thanh toán), post-purchase (sử dụng, gắn kết, yêu cầu dịch vụ); sách đề xuất quy trình 5 bước xác định điểm chạm (tr. 104–106).",
    next: "Điểm chạm lại chia theo ai sở hữu nó.",
  });

  // 14 four touchpoint types
  s = slide("Điểm chạm có bốn loại — theo ai sở hữu và kiểm soát nó");
  const tp = [["Brand-owned", "do thương hiệu sở hữu", "thư mời của An Phát", "FaUniversity", TEAL], ["Partner-owned", "do đối tác làm", "Nova đón khách tại khách sạn", "FaHandshake", YEL], ["Customer-owned", "khách tự làm", "khách tự chụp ảnh, tự xếp lịch", "FaUserTie", PINK], ["Social / external", "người khác, báo chí, mạng xã hội", "đồng nghiệp kể về gala năm ngoái", "FaComments", BLUE]];
  for (let i = 0; i < 4; i++) { const x = 0.6 + i * 3.1; box(s, x, 1.95, 2.88, 4.1); await ic(s, tp[i][3], x + 0.94, 2.15, 1.0, tp[i][4]); T(s, tp[i][0], x, 3.3, 2.88, 0.5, { align: "center", bold: true, fontSize: 18, color: tp[i][4] }); T(s, tp[i][1], x + 0.15, 3.8, 2.58, 0.7, { align: "center", fontSize: 15, color: MU, valign: "top" }); T(s, "VD: " + tp[i][2], x + 0.15, 4.6, 2.58, 1.3, { align: "center", fontSize: 15, valign: "top" }); }
  T(s, "“Partners can include marketing agencies…” — agency là một loại điểm chạm của thương hiệu.", 0.6, 6.15, 12.13, 0.55, { fontSize: 16, bold: true, color: YEL });
  src(s, "Nguồn: Lemon & Verhoef (2016).", 6.75);
  notes(s, {
    say: "Lemon và Verhoef chia điểm chạm thành bốn loại theo ai sở hữu và kiểm soát nó. Brand-owned — do thương hiệu sở hữu: thư mời của An Phát. Partner-owned — do đối tác làm: Nova đón khách tại khách sạn. Customer-owned — khách tự làm: khách tự chụp ảnh, tự xếp lịch. Social hoặc external — người khác, báo chí, mạng xã hội: đồng nghiệp kể về gala năm ngoái. Bài báo viết rõ: đối tác có thể bao gồm các agency marketing. Tức là Nova là một loại điểm chạm của thương hiệu An Phát.",
    gv: "C03, trích nguyên văn “Partners can include marketing agencies…”. Ví dụ là của môn (giả định).",
    next: "Môn học dùng hai lớp hành trình.",
  });

  // 15 two layers
  s = slide("Môn học có hai lớp hành trình: khách của Key Account, và chính Key Account");
  box(s, 0.6, 1.95, 6.0, 4.3);
  num(s, 1, 0.85, 2.2, 0.8, TEAL, 22);
  T(s, "Khách của Key Account", 1.85, 2.2, 4.5, 0.8, { bold: true, fontSize: 20, color: TEAL });
  T(s, "600 lãnh đạo doanh nghiệp VIP của An Phát: từ nhận thư mời đến sau gala", 0.9, 3.2, 5.4, 1.6, { fontSize: 17, valign: "top" });
  T(s, "Dùng ở Buổi 3, 5, 9, 11", 0.9, 5.3, 5.4, 0.6, { fontSize: 15, color: MU });
  box(s, 6.85, 1.95, 5.88, 4.3);
  num(s, 2, 7.1, 2.2, 0.8, YEL, 22);
  T(s, "Chính Key Account", 8.1, 2.2, 4.4, 0.8, { bold: true, fontSize: 20, color: YEL });
  T(s, "An Phát mua dịch vụ của Nova: brief → đề xuất → hợp đồng → sự kiện → nghiệm thu", 7.15, 3.2, 5.3, 1.6, { fontSize: 17, valign: "top" });
  T(s, "Dùng ở Buổi 10", 7.15, 5.3, 5.3, 0.6, { fontSize: 15, color: MU });
  notes(s, {
    say: "Môn học dùng hai lớp hành trình. Lớp một: hành trình của khách của Key Account — 600 lãnh đạo doanh nghiệp VIP của An Phát, từ lúc nhận thư mời đến sau gala; ta dùng ở Buổi 3, 5, 9 và 11. Lớp hai: hành trình của chính Key Account — An Phát mua dịch vụ của Nova: brief, đề xuất, hợp đồng, sự kiện, nghiệm thu; dùng ở Buổi 10. Hôm nay ta vẽ lớp một.",
    gv: "Hai lớp hành trình là quyết định GV 4 (tư liệu Buổi 3).",
    next: "Một ví dụ hành trình lớp một.",
  });

  // 16 example journey
  s = slide("Hành trình của một khách VIP bắt đầu từ thư mời, không phải từ cửa phòng tiệc");
  s.addShape(L.pres.shapes.LINE, { x: 0.9, y: 3.6, w: 11.6, h: 0, line: { color: MU, width: 3 } });
  const pts = [["Trước", "Nhận thư mời", "B", TEAL], ["Trước", "Đồng nghiệp kể về gala năm ngoái", "S", BLUE], ["Trong", "Được đón tại khách sạn", "P", YEL], ["Trong", "Tự chụp ảnh, đăng mạng", "C", PINK], ["Sau", "Nhận ảnh, thư cảm ơn", "B", TEAL], ["Sau", "Đọc báo đưa tin", "S", BLUE]];
  pts.forEach(([g, t, k, c], i) => { const x = 0.6 + i * 2.05; T(s, g, x, 2.05, 1.9, 0.45, { align: "center", fontSize: 14, color: MU, bold: true }); circ(s, x + 0.6, 3.25, 0.7, c); T(s, k, x + 0.6, 3.25, 0.7, 0.7, { align: "center", bold: true, color: NAVY, fontSize: 18, margin: 0 }); box(s, x, 4.2, 1.9, 1.6); T(s, t, x + 0.1, 4.2, 1.7, 1.6, { align: "center", fontSize: 15 }); });
  T(s, "B brand-owned · P partner-owned · C customer-owned · S social/external", 0.6, 6.0, 9.5, 0.5, { fontSize: 14, color: MU });
  T(s, "(giả định)", 10.9, 6.0, 1.8, 0.5, { fontSize: 13, color: MU, italic: true, align: "right" });
  notes(s, {
    say: "Ví dụ giả định. Trước sự kiện: khách nhận thư mời của An Phát — brand-owned; nghe đồng nghiệp kể về gala năm ngoái — social. Trong sự kiện: được Nova đón tại khách sạn — partner-owned; tự chụp ảnh, đăng mạng — customer-owned. Sau sự kiện: nhận ảnh và thư cảm ơn — brand-owned, dù Nova làm hộ; đọc báo đưa tin — social. Hành trình bắt đầu từ thư mời, không phải từ cửa phòng tiệc.",
    gv: "Theo W03 lecture notes §2.3.",
    next: "Một câu hỏi quan trọng: khách thấy điểm chạm đó là của ai?",
  });

  // 17 Nova does, guest sees An Phát
  s = slide("Nova làm, nhưng khách thấy An Phát");
  await ic(s, "FaEye", 0.6, 2.0, 1.6, YEL);
  T(s, "Phần lớn điểm chạm Nova làm mang tên An Phát. Nova thành công khi thương hiệu của khách hàng tỏa sáng — không phải khi tên Nova xuất hiện nhiều.", 2.5, 1.95, 10.2, 2.0, { fontSize: 22, bold: true });
  box(s, 0.6, 4.3, 12.13, 1.6, CARD);
  T(s, "Hệ quả: một điểm chạm hỏng do Nova (livestream chậm, đón khách lộn xộn) là một điểm trừ cho An Phát trong mắt khách VIP.", 0.85, 4.3, 11.7, 1.6, { fontSize: 19, color: YEL });
  notes(s, {
    say: "Hỏi lại: Nova làm nhiều điểm chạm, nhưng khách thấy đó là của ai? Của An Phát. Nova thành công khi thương hiệu của khách hàng tỏa sáng, không phải khi tên Nova xuất hiện nhiều. Và hệ quả: một điểm chạm hỏng do Nova — livestream chậm, đón khách lộn xộn — là một điểm trừ cho An Phát trong mắt khách VIP.",
    gv: "Ví dụ livestream chậm nối với chị Lan (DMU) và Buổi 4 (chất lượng quan hệ).",
    ask: "“Trong dự án cũ, tên agency của nhóm xuất hiện ở đâu trong mắt khách tham dự?”",
    next: "Kiểm tra nhanh một điểm chạm.",
  });

  // 18 quick vote
  s = slide("Giơ 1–4 ngón: điểm chạm này thuộc loại nào?");
  box(s, 0.6, 1.95, 7.2, 3.3);
  await ic(s, "FaComments", 0.9, 2.25, 1.0, BLUE);
  T(s, "Trước gala, một khách VIP nghe giám đốc tài chính của công ty bạn kể: “Gala An Phát năm ngoái có phiên hỏi đáp với chuyên gia rất đáng đi.”", 2.15, 2.15, 5.45, 2.9, { fontSize: 18, valign: "top" });
  T(s, "(giả định)", 0.9, 4.8, 2.0, 0.4, { fontSize: 13, color: MU, italic: true });
  [["1", "Brand-owned", TEAL], ["2", "Partner-owned", YEL], ["3", "Customer-owned", PINK], ["4", "Social / external", BLUE]].forEach(([k, t, c], i) => { num(s, k, 8.2, 1.95 + i * 0.85, 0.7, c, 18); box(s, 9.1, 1.95 + i * 0.85, 3.63, 0.7); T(s, t, 9.3, 1.95 + i * 0.85, 3.3, 0.7, { fontSize: 19, bold: true }); });
  notes(s, {
    say: "Tình huống giả định: trước gala, một khách VIP nghe giám đốc tài chính công ty mình kể: “Gala An Phát năm ngoái có phiên hỏi đáp với chuyên gia rất đáng đi.” Điểm chạm này thuộc loại nào? Một ngón brand-owned, hai ngón partner-owned, ba ngón customer-owned, bốn ngón social hoặc external.",
    gv: "Đáp án: 4 — social/external (người khác nói về thương hiệu; An Phát và Nova không kiểm soát).",
    ask: "Giơ 1–4 ngón.",
    next: "Đáp án.",
  });

  // 19 answer
  s = slide("Đáp án: social / external — An Phát không kiểm soát, nhưng ảnh hưởng của nó rất lớn");
  box(s, 0.6, 1.95, 7.2, 3.3);
  T(s, bullets(["Người nói là đồng nghiệp, không phải An Phát hay Nova", "Không kiểm soát trực tiếp được", "Nhưng có thể chuẩn bị: làm phiên hỏi đáp năm ngoái thật đáng nhớ"]), 0.9, 2.1, 6.7, 3.0, { fontSize: 18, valign: "top", paraSpaceAfter: 10 });
  box(s, 8.2, 1.95, 4.53, 3.3, YEL);
  T(s, "Điểm chạm social năm nay được tạo ra bởi trải nghiệm năm ngoái.", 8.45, 1.95, 4.05, 3.3, { fontSize: 20, bold: true, color: NAVY });
  notes(s, {
    say: "Đáp án: social hoặc external. Người nói là đồng nghiệp, không phải An Phát hay Nova; ta không kiểm soát trực tiếp được. Nhưng có thể chuẩn bị: điểm chạm social năm nay được tạo ra bởi trải nghiệm năm ngoái. Đó là lý do quan hệ dài hạn quan trọng.",
    next: "Điểm chạm social năm nay được tạo bởi trải nghiệm năm ngoái — vì khách luôn so với kỳ vọng.",
  });

  // 19b expectation disconfirmation
  s = slide("Ở mỗi điểm chạm, khách so điều nhận được với điều họ kỳ vọng");
  const ed = [["Vượt kỳ vọng", "positive disconfirmation", "khách thích thú", TEAL], ["Bằng kỳ vọng", "zero disconfirmation", "khách hài lòng", YEL], ["Dưới kỳ vọng", "negative disconfirmation", "khách không hài lòng", PINK]];
  ed.forEach(([a, b, c2, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 2.5, c); T(s, a, x + 0.2, 2.05, 3.5, 0.7, { bold: true, fontSize: 22, color: NAVY }); T(s, b, x + 0.2, 2.75, 3.5, 0.5, { fontSize: 14, italic: true, color: NAVY }); T(s, "→ " + c2, x + 0.2, 3.35, 3.5, 0.8, { fontSize: 18, bold: true, color: NAVY }); });
  box(s, 0.6, 4.7, 12.13, 1.55);
  T(s, "Slide bộ môn: “khách hàng sẽ đánh giá trải nghiệm … dựa trên sự so sánh giữa kỳ vọng của họ (expectations) và kết quả thực tế mà họ nhận được (performance or outcome)”.", 0.85, 4.7, 11.7, 1.55, { fontSize: 17, italic: true });
  src(s, "Nguồn: Trần Nguyễn Huỳnh Như (2023), Chương 2 — Disconfirmation Theory; Oliver (1996, 2010), dẫn theo Drakeley (2022).", 6.45);
  notes(s, {
    say: "Mỗi điểm chạm đều bị khách đem ra so. Lý thuyết bất xác nhận kỳ vọng — expectation disconfirmation — nói: khách hàng đánh giá trải nghiệm bằng cách so kết quả thực tế với kỳ vọng của họ. Ba kết quả: vượt kỳ vọng — positive disconfirmation — khách thích thú; bằng kỳ vọng — khách hài lòng; dưới kỳ vọng — negative disconfirmation — khách không hài lòng. Slide bộ môn cũng viết đúng ý này. Hệ quả: muốn vượt kỳ vọng thì trước hết phải biết kỳ vọng là gì.",
    gv: "Đã đối chiếu: slide gốc Chương 2, mục 2.3.1 (Disconfirmation Theory — câu trích nguyên văn); ba kết quả theo Drakeley (2022, tr. 4), dẫn Oliver (1996, 2010). Đây là nền cho Buổi 4 (chất lượng quan hệ) và Buổi 8 (đánh giá).",
    ask: "“Livestream năm ngoái của chị Lan bị chậm 15 phút: kết quả nào?”",
    next: "Nhưng kỳ vọng của khách hàng thường không được nói ra.",
  });

  // 19c clarifying expectations
  s = slide("Kỳ vọng của khách hàng thường mờ, ngầm định — agency phải chủ động làm rõ");
  box(s, 0.6, 1.95, 5.3, 4.35);
  T(s, "Kỳ vọng hình thành từ", 0.85, 2.05, 4.8, 0.55, { bold: true, fontSize: 18, color: YEL });
  T(s, bullets(["Truyền miệng", "Nhu cầu riêng", "Trải nghiệm trước đây", "Thông tin agency đã đưa ra"]), 0.9, 2.65, 4.8, 2.2, { fontSize: 17, valign: "top", paraSpaceAfter: 6 });
  T(s, "Với dịch vụ chuyên môn, kỳ vọng thường “fuzzy, implicit and unrealistic”.", 0.85, 4.95, 4.8, 1.2, { fontSize: 15, italic: true, color: MU, valign: "top" });
  T(s, "Bảy bước cụ thể hóa kỳ vọng (slide bộ môn)", 6.2, 1.95, 6.5, 0.5, { bold: true, fontSize: 16, color: TEAL });
  const st7 = ["Thu thập thông tin về kỳ vọng", "Phân tích: mục tiêu, mong muốn, ưu tiên", "Xác định khả năng đáp ứng", "Định rõ và thống nhất kỳ vọng", "Giao tiếp và đồng thuận", "Ghi nhận và theo dõi", "Đánh giá sau cùng"];
  st7.forEach((t, i) => { const y = 2.5 + i * 0.55; num(s, i + 1, 6.2, y + 0.04, 0.42, [TEAL, YEL, ORA, BLUE, PINK, TEAL, YEL][i], 13); box(s, 6.75, y, 5.98, 0.48); T(s, t, 6.9, y, 5.7, 0.48, { fontSize: 14 }); });
  src(s, "Nguồn: Zeithaml et al. (1993) và Ojasalo (2001), dẫn theo Drakeley (2022); Trần Nguyễn Huỳnh Như (2023), Chương 2.", 6.45);
  notes(s, {
    say: "Kỳ vọng của khách hàng hình thành từ bốn nguồn: truyền miệng; nhu cầu riêng; trải nghiệm trước đây; và chính những gì agency đã nói, đã hứa trong hồ sơ năng lực, đề xuất. Với dịch vụ chuyên môn như tổ chức sự kiện, kỳ vọng thường mờ, ngầm định và thiếu thực tế — nên agency phải chủ động làm rõ. Slide bộ môn đưa ra bảy bước: thu thập thông tin về kỳ vọng; phân tích mục tiêu, mong muốn, ưu tiên; xác định khả năng đáp ứng của mình; định rõ và thống nhất kỳ vọng — tính năng, chất lượng, thời gian, phạm vi; giao tiếp và đồng thuận; ghi nhận và theo dõi; và đánh giá sau cùng. Mỗi người trong DMU của An Phát có một bộ kỳ vọng riêng — đó là lý do ta phân tích từng người.",
    gv: "Đã đối chiếu: bốn nguồn hình thành kỳ vọng (Zeithaml, Parasuraman & Berry; Zeithaml et al., 1993) và câu “fuzzy, implicit and unrealistic” (Ojasalo, 2001, tr. 200) — dẫn theo Drakeley (2022, tr. 3–5, 12), chưa đọc bản gốc; bảy bước — slide gốc Chương 2, mục 2.3.1 “Cụ thể hóa kỳ vọng của khách hàng”. Tình huống Drakeley Case 1 (khách mở rộng phạm vi sau khi ký) là minh họa nếu cần, đã dùng ở Buổi 2.",
    ask: "“Trong dự án cũ, kỳ vọng nào của khách hàng nhóm chỉ phát hiện ra khi đã quá muộn?”",
    next: "Vì mỗi người có kỳ vọng riêng, ta phải biết ai tham gia quyết định.",
  });

  // 20 DMU roles
  s = slide("Quyết định mua của một tổ chức do nhiều người: sáu vai trong nhóm ra quyết định (DMU)");
  const roles = [["Người khởi xướng", "nêu nhu cầu", TEAL], ["Người dùng cuối", "dùng dịch vụ", YEL], ["Người ảnh hưởng", "góp ý, đánh giá", ORA], ["Người quyết định", "chọn nhà cung cấp", PINK], ["Người kiểm soát (gatekeeper)", "lọc thông tin, lịch hẹn", BLUE], ["Người thực hiện quy trình mua", "đấu thầu, hợp đồng, thanh toán", PUR]];
  roles.forEach(([a, b, c], i) => { const x = 0.6 + (i % 3) * 4.13, y = 1.95 + Math.floor(i / 3) * 2.05; box(s, x, y, 3.9, 1.85, c); T(s, a, x + 0.2, y + 0.15, 3.5, 0.9, { bold: true, fontSize: 18, color: c === PUR ? TX : NAVY, valign: "top" }); T(s, b, x + 0.2, y + 1.1, 3.5, 0.6, { fontSize: 15, color: c === PUR ? TX : NAVY }); });
  T(s, "Giáo trình thêm vai thứ bảy: người kiểm soát ngân sách (controller) — định ngân sách, ràng buộc tài chính.", 0.6, 6.0, 12.13, 0.45, { fontSize: 15, bold: true, color: YEL });
  src(s, "Nguồn: Trần Nguyễn Huỳnh Như (2023), Chương 3; Marcos et al. (2018, Hình 4.6, tr. 106–107); nền tảng: Webster & Wind (1972).", 6.55);
  notes(s, {
    say: "Webster và Wind, 1972, xem hành vi mua của tổ chức là một quá trình ra quyết định của tổ chức — không phải của một người. Nhóm người tham gia gọi là trung tâm mua hay nhóm ra quyết định — DMU, decision-making unit. Slide bộ môn chỉ ra sáu vai: người khởi xướng — nêu nhu cầu; người dùng cuối — dùng dịch vụ; người ảnh hưởng — góp ý, đánh giá; người quyết định — chọn nhà cung cấp; người kiểm soát hay gatekeeper — lọc thông tin, giữ lịch hẹn; và người thực hiện quy trình mua — đấu thầu, hợp đồng, thanh toán. Một người có thể giữ nhiều vai. Giáo trình Marcos và cộng sự còn tách thêm một vai: người kiểm soát ngân sách — controller — người quyết định ngân sách và các ràng buộc tài chính. Ở An Phát, các bạn đoán ai giữ vai này?",
    gv: "Sáu vai đã đối chiếu slide gốc Chương 3 (sơ đồ: người khởi xướng, người dùng cuối, người kiểm soát/gatekeeper, người ảnh hưởng, người quyết định, người thực hiện quy trình mua). Quyết định Q4 (4/10/2026): dùng sáu vai của slide; khi gán cho Webster & Wind (1972) giữ [VERIFY: danh sách vai trò trong toàn văn]. Dòng mô tả nhỏ là diễn giải của người soạn. Marcos et al. (2018, Hình 4.6, tr. 106–107, dẫn Johnston & Marshall, 2016) liệt kê bảy vai: Initiator, User, Influencer, Gatekeeper, Decider, Controller (“determines the budget for the purchase and other restrictions”), Buyer (“makes the purchase and leads the ordering process”). Buyer ≈ “người thực hiện quy trình mua” của slide; Controller là vai slide không có — gợi ý: anh Khoa (ngân sách – mua sắm) có thể giữ cả Controller lẫn Buyer.",
    next: "Năm người của An Phát.",
  });

  // 21 five people
  s = slide("Năm người của An Phát liên quan đến quyết định chọn Nova");
  const ppl = [["Chị Hạnh", "GĐ Marketing", "làm với Nova 4 năm; chịu áp lực đổi mới", TEAL], ["Ông Tuấn", "Phó TGĐ khối Marketing – Truyền thông", "chỉ bắt tay Nova ở gala; quan tâm giữ khách lớn", PINK], ["Anh Khoa", "Ngân sách – mua sắm", "chỉ gửi hồ sơ thanh toán; khó tính về quy trình", YEL], ["Chị Lan", "Truyền thông nội bộ", "lo livestream 80 chi nhánh; năm ngoái bị chậm", BLUE], ["Chị Vy", "Trưởng nhóm Thương hiệu", "chưa làm việc trực tiếp với Nova", ORA]];
  for (let i = 0; i < 5; i++) { const x = 0.6 + i * 2.47; box(s, x, 1.95, 2.25, 4.3); await ic(s, "FaUserTie", x + 0.62, 2.15, 1.0, ppl[i][3]); T(s, ppl[i][0], x + 0.1, 3.25, 2.05, 0.5, { align: "center", bold: true, fontSize: 18, color: ppl[i][3] }); T(s, ppl[i][1], x + 0.1, 3.75, 2.05, 0.85, { align: "center", fontSize: 13, color: MU, valign: "top" }); T(s, ppl[i][2], x + 0.1, 4.6, 2.05, 1.55, { align: "center", fontSize: 14, valign: "top" }); }
  T(s, "(giả định)", 10.9, 6.4, 1.8, 0.4, { fontSize: 13, color: MU, italic: true, align: "right" });
  notes(s, {
    say: "Năm người của An Phát liên quan đến quyết định chọn Nova — tình huống giả định. Chị Hạnh, Giám đốc Marketing: làm với Nova bốn năm, năm nay chịu áp lực đổi mới. Ông Tuấn, Phó Tổng Giám đốc khối Marketing – Truyền thông: chỉ bắt tay Nova ở gala, quan tâm giữ khách doanh nghiệp lớn. Anh Khoa, ngân sách – mua sắm: chỉ gửi hồ sơ thanh toán, khó tính về quy trình. Chị Lan, truyền thông nội bộ: lo livestream về 80 chi nhánh — năm ngoái bị chậm. Chị Vy, trưởng nhóm thương hiệu: chưa làm việc trực tiếp với Nova.",
    gv: "Nhân vật đã duyệt (tư liệu Buổi 3, quyết định 5), dùng xuyên suốt đến Buổi 13. Hỏi nhanh: mỗi người giữ vai nào trong sáu vai ở slide trước?",
    ask: "“Ai là người quyết định? Ai là gatekeeper?”",
    next: "Để hiểu từng người, ta dùng GRASP.",
  });

  // 22 GRASP official
  s = slide("GRASP: năm câu hỏi về từng thành viên của DMU");
  const gr = [["G", "Goal · Mục tiêu", "Mục tiêu và kế hoạch hành động của chúng ta đối với thành viên DMU này là gì?", TEAL], ["R", "Role · Vai trò", "Vai trò của thành viên này trong đơn vị ra quyết định?", YEL], ["A", "Appeal · Hấp dẫn", "Điều gì hấp dẫn thành viên này về phương án?", ORA], ["S", "State · Tình trạng", "Mối quan hệ với thành viên này như thế nào?", BLUE], ["P", "Power · Quyền lực", "Trình độ và quyền lực của thành viên này như thế nào?", PINK]];
  gr.forEach(([k, h, q, c], i) => { const y = 1.85 + i * 0.9; box(s, 0.6, y, 0.85, 0.78, c); T(s, k, 0.6, y, 0.85, 0.78, { align: "center", bold: true, color: NAVY, fontSize: 24 }); box(s, 1.6, y, 11.13, 0.78); T(s, h, 1.8, y, 3.0, 0.78, { bold: true, fontSize: 17, color: c }); T(s, q, 4.8, y, 7.8, 0.78, { fontSize: 16 }); });
  T(s, "Mẹo: phân tích R, A, S, P trước; để G sau cùng — vì cần bốn chữ kia mới đặt được mục tiêu.", 0.6, 6.4, 12.13, 0.4, { fontSize: 15, bold: true, color: YEL });
  src(s, "Nguồn: Marcos et al. (2018, Bảng 4.1, tr. 107); Trần Nguyễn Huỳnh Như (2023), Chương 3.", 6.85);
  notes(s, {
    say: "GRASP — năm câu hỏi về từng thành viên trong nhóm ra quyết định, theo slide bộ môn. G — Goal: mục tiêu và kế hoạch hành động của chúng ta đối với thành viên này là gì? R — Role: vai trò của người này trong đơn vị ra quyết định. A — Appeal: điều gì hấp dẫn người này về phương án của ta? S — State: mối quan hệ của ta với người này hiện thế nào? P — Power: trình độ và quyền lực của người này. Chú ý chữ G: đó là mục tiêu của chúng ta với người đó. Giáo trình khuyên để G sau cùng — phân tích vai trò, điều hấp dẫn, tình trạng quan hệ và quyền lực trước, rồi mới đặt mục tiêu.",
    gv: "Đã đối chiếu hai nguồn khớp nhau: slide gốc Chương 3 và Marcos et al. (2018), Bảng 4.1 tr. 107 — “G Goal: What are our goals and action plans with respect to this DMU member?”; mẹo tr. 107: “leave the ‘goal’ element until the end, as the examination of the other elements provides inputs that are needed to define the ‘goal’ aspect.” Như vậy G = mục tiêu của agency với người đó là định nghĩa của giáo trình, không chỉ của slide bộ môn. Hệ quả (khuyến nghị, chờ GV xác nhận): cột Goal trong phiếu S6 hiểu theo nghĩa này; câu 3 bài trắc nghiệm B1–B8 nên sửa chữ “Goal” thành “Appeal/mục tiêu của ông Tuấn”.",
    next: "Áp GRASP cho chị Hạnh.",
  });

  // 23 GRASP Hạnh
  s = slide("GRASP của chị Hạnh: người ta gặp nhiều nhất chưa phải người quyết định cuối");
  const gh = [["G", "Nova muốn chị Hạnh đồng ý đưa đề xuất chương trình cả năm lên ông Tuấn — họp riêng trước tháng 9", TEAL], ["R", "Đầu mối chính, người khởi xướng và ảnh hưởng; đề xuất lên lãnh đạo", YEL], ["A", "Ý tưởng mới nhưng an toàn cho thương hiệu ngân hàng", ORA], ["S", "Tin Nova sau 4 năm, nhưng đang chịu áp lực đổi mới", BLUE], ["P", "Cao trong khâu đề xuất; không phải người phê duyệt cuối", PINK]];
  gh.forEach(([k, t, c], i) => { const y = 1.85 + i * 0.9; box(s, 0.6, y, 0.85, 0.78, c); T(s, k, 0.6, y, 0.85, 0.78, { align: "center", bold: true, color: NAVY, fontSize: 24 }); box(s, 1.6, y, 11.13, 0.78); T(s, t, 1.8, y, 10.8, 0.78, { fontSize: 17 }); });
  T(s, "(giả định)", 10.9, 6.45, 1.8, 0.4, { fontSize: 13, color: MU, italic: true, align: "right" });
  notes(s, {
    say: "GRASP của chị Hạnh — giả định. G: Nova muốn chị Hạnh đồng ý đưa đề xuất chương trình cả năm lên ông Tuấn, qua một buổi họp riêng trước tháng 9. R: đầu mối chính, người khởi xướng và người ảnh hưởng; chị đề xuất lên lãnh đạo. A: chị bị hấp dẫn bởi ý tưởng mới nhưng an toàn cho thương hiệu ngân hàng. S: tin Nova sau bốn năm, nhưng đang chịu áp lực đổi mới. P: quyền lực cao trong khâu đề xuất, nhưng không phải người phê duyệt cuối — đó là ông Tuấn.",
    gv: "Ví dụ đã chỉnh theo định nghĩa G của slide bộ môn (W03 lecture notes §3.3 cũ ghi G là mục tiêu của chị Hạnh: hình ảnh ngân hàng, tỷ lệ tham dự — nay chuyển ý đó sang A).",
    next: "Người ra quyết định thường ở cấp cao hơn người ta gặp hằng ngày.",
  });

  // 24 client marketing structure
  s = slide("Ở phía khách hàng, quyết định thường nằm cao hơn người ta gặp hằng ngày");
  const lvl = ["Marketing Director", "Senior Brand Manager / Marketing Manager", "Brand Manager", "Assistant Brand Manager", "Marketing Executive / Intern"];
  lvl.forEach((t, i) => { const w = 6.2 - i * 0.6, x = 0.6 + i * 0.3, y = 1.95 + i * 0.85; box(s, x, y, w, 0.7, [PINK, ORA, YEL, TEAL, BLUE][i]); T(s, t, x + 0.15, y, w - 0.3, 0.7, { fontSize: 15, bold: true, color: NAVY }); });
  box(s, 7.3, 1.95, 5.43, 4.2);
  T(s, "Marketing service", 7.55, 2.1, 5.0, 0.55, { bold: true, fontSize: 18, color: TEAL });
  T(s, bullets(["Research", "Media", "Digital", "E-commerce", "Event / OOH: Manager → Assistant → Executive"]), 7.6, 2.7, 4.9, 3.3, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  src(s, "Nguồn: Trần Nguyễn Huỳnh Như (2023), Chương 3 — Cấu trúc phòng Marketing tại client.", 6.45);
  notes(s, {
    say: "Slide bộ môn vẽ cấu trúc phòng marketing điển hình ở phía khách hàng. Tuyến thương hiệu: Marketing Director, Senior Brand Manager hoặc Marketing Manager, Brand Manager, Assistant Brand Manager, rồi Marketing Executive hoặc Intern. Tuyến dịch vụ marketing: Research, Media, Digital, E-commerce, và Event/OOH — với Manager, Assistant, Executive. Agency thường làm việc hằng ngày với nhóm Event hoặc Executive — nhưng ngân sách và quyết định thường nằm ở Director. Hiểu lầm thường gặp: người liên hệ nhiều nhất là người quyết định.",
    gv: "Đã đối chiếu sơ đồ “Cấu trúc phòng marketing tại client” trong slide gốc Chương 3. Ở An Phát (ngân hàng) cơ cấu khác doanh nghiệp hàng tiêu dùng — dùng sơ đồ để minh họa nguyên tắc, không áp nguyên vào An Phát.",
    ask: "“Trong dự án cũ, nhóm làm việc với ai — và ai ký duyệt?”",
    next: "Ba lỗi khi phân tích khách hàng.",
  });

  // 25 errors
  s = slide("Ba lỗi khi tìm hiểu khách hàng");
  const er = ["Làm PESTEL của ngành sự kiện thay vì của khách hàng", "Coi người liên hệ nhiều nhất là người quyết định", "Chỉ làm hài lòng người quyết định, quên người dùng và gatekeeper"];
  for (let i = 0; i < 3; i++) { const y = 2.0 + i * 1.25; box(s, 0.6, y, 7.6, 1.05); await ic(s, "FaTimes", 0.8, y + 0.2, 0.65, PINK); T(s, er[i], 1.65, y, 6.45, 1.05, { fontSize: 18 }); }
  box(s, 8.5, 2.0, 4.23, 3.55, YEL);
  T(s, "Chị Lan không ký hợp đồng — nhưng livestream chậm thì chị nhớ.", 8.75, 2.0, 3.75, 3.55, { fontSize: 22, bold: true, color: NAVY });
  notes(s, {
    say: "Ba lỗi. Một: làm PESTEL của ngành sự kiện thay vì của khách hàng. Hai: coi người liên hệ nhiều nhất là người quyết định — chị Hạnh liên hệ nhiều nhất, nhưng ông Tuấn phê duyệt, anh Khoa có thể chặn ở khâu mua sắm. Ba: chỉ làm hài lòng người quyết định, quên người dùng và gatekeeper. Chị Lan không ký hợp đồng — nhưng livestream chậm thì chị nhớ, và chị sẽ kể với chị Hạnh.",
    gv: "Theo W03 lecture notes §1.4 và §3.4. Ý “chị Lan kể với chị Hạnh” nối sang Buổi 4 (xung đột chức năng).",
    next: "Một lưu ý đạo đức khi tìm hiểu khách hàng.",
  });

  // 26 ethics
  s = slide("Hiểu khách hàng bằng nguồn công khai và điều khách chia sẻ — không moi, không lạm dụng dữ liệu");
  box(s, 0.6, 1.95, 6.0, 3.6);
  await ic(s, "FaCheck", 0.85, 2.2, 0.85, TEAL);
  T(s, "Nên", 1.9, 2.2, 4.5, 0.85, { bold: true, fontSize: 20, color: TEAL });
  T(s, bullets(["Báo cáo thường niên, tin tức, website", "Điều khách chủ động chia sẻ", "Hỏi lại khi không chắc"]), 0.9, 3.2, 5.5, 2.2, { fontSize: 17, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.85, 1.95, 5.88, 3.6);
  await ic(s, "FaTimes", 7.1, 2.2, 0.85, PINK);
  T(s, "Không", 8.15, 2.2, 4.4, 0.85, { bold: true, fontSize: 20, color: PINK });
  T(s, bullets(["Dò thông tin nội bộ qua người quen", "Dùng danh sách khách mời ngoài mục đích được đồng ý", "Kể chuyện khách này cho khách khác"]), 7.15, 3.2, 5.4, 2.2, { fontSize: 17, valign: "top", paraSpaceAfter: 6 });
  T(s, "Dữ liệu khách mời là của An Phát — Nova chỉ được dùng đúng việc An Phát đồng ý.", 0.6, 5.85, 12.13, 0.6, { fontSize: 18, bold: true, color: YEL });
  notes(s, {
    say: "Hiểu khách hàng sâu không có nghĩa là moi thông tin. Nên: dùng báo cáo thường niên, tin tức, website; những gì khách chủ động chia sẻ; và hỏi lại khi không chắc. Không: dò thông tin nội bộ qua người quen; dùng danh sách khách mời ngoài mục đích được đồng ý; kể chuyện của khách này cho khách khác. Dữ liệu khách mời là của An Phát — Nova chỉ được dùng đúng việc An Phát đồng ý.",
    gv: "Nối CLO8 (đạo đức nghề nghiệp). [VERIFY: nếu nêu tên văn bản pháp luật về bảo vệ dữ liệu cá nhân, kiểm tra văn bản hiện hành trước.] Slide là nguyên tắc nghề nghiệp, không phải tư vấn pháp lý.",
    next: "Thực hành 2: hành trình và DMU.",
  });

  // 27 practice 2
  s = await L.practice("Thực hành 2 · 33 phút: hành trình của khách An Phát và GRASP của An Phát", [["12’", "Nửa trái A1: hành trình 1 khách VIP qua 3 giai đoạn, ≥6 điểm chạm, ghi loại B/P/C/S; khoanh ⚠ 1 điểm dễ hỏng nhất", TEAL], ["7’", "Nửa phải: bảng GRASP cho 5 người; mỗi người 1 việc Nova nên làm; nối người với điểm chạm họ quan tâm nhất", YEL], ["8’", "Xoay trạm 2 vòng, vai chị Hạnh: 1 câu hỏi (note vàng) + 1 “điều Nova hiểu sai về chúng tôi” (note hồng)", PINK], ["3’", "Về bàn, sửa một điểm", BLUE]], "FaRoute", "Sản phẩm", "Bản đồ hành trình + bảng GRASP — mẫu cho phần A của kế hoạch", "Cột G: mục tiêu và kế hoạch của Nova với người đó.", YEL);
  notes(s, {
    say: "Thực hành 2, 33 phút. Mười hai phút: nửa trái tờ A1, vẽ hành trình của một khách VIP qua ba giai đoạn, ít nhất sáu điểm chạm, ghi loại B, P, C hoặc S; khoanh dấu cảnh báo cho một điểm chạm dễ hỏng nhất. Bảy phút: nửa phải, bảng GRASP cho năm người của An Phát; mỗi người một việc Nova nên làm; nối mỗi người với điểm chạm họ quan tâm nhất. Tám phút: xoay trạm hai vòng, các bạn đóng vai chị Hạnh — để lại một câu hỏi và một “điều Nova hiểu sai về chúng tôi”. Ba phút: về bàn sửa một điểm. Nhớ: cột G là mục tiêu và kế hoạch của Nova với người đó.",
    gv: "Phiếu W03_activity_S6_hanh_trinh_va_dmu.md (thẻ nhân vật). Mốc phút 90–123. Nhắc nghĩa cột G theo slide bộ môn (xem ghi chú slide 22).",
    next: "Tổng hợp.",
  });

  // 28 summary
  s = slide("Ba ý của Buổi 3 — và phần A của kế hoạch");
  const sm = [["3.1", "PESTEL và đối thủ của khách hàng → nhu cầu thật; thiếu dữ liệu thì ghi giả định", TEAL], ["3.2", "Ba giai đoạn, bốn loại điểm chạm; hai lớp hành trình — khách của khách hàng, và chính khách hàng", YEL], ["3.3", "Quyết định do DMU; GRASP: mục tiêu của ta, vai trò, điều hấp dẫn, tình trạng quan hệ, quyền lực", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.25; box(s, 0.6, y, 1.3, 1.05, c); T(s, k, 0.6, y, 1.3, 1.05, { align: "center", bold: true, color: NAVY, fontSize: 22 }); box(s, 2.1, y, 10.63, 1.05); T(s, t, 2.35, y, 10.2, 1.05, { fontSize: 18 }); });
  box(s, 0.6, 5.85, 12.13, 0.8, BLUE);
  T(s, "Kế hoạch cuối kỳ: đây là phần A. Value Insights cho khách hàng từ dự án cũ (Buổi 13).", 0.85, 5.85, 11.7, 0.8, { fontSize: 17, bold: true, color: NAVY });
  notes(s, {
    say: "Ba ý của Buổi 3. Mục 3.1: PESTEL và đối thủ của khách hàng giúp tìm nhu cầu thật; thiếu dữ liệu thì ghi giả định. Mục 3.2: hành trình có ba giai đoạn, bốn loại điểm chạm; và hai lớp hành trình. Mục 3.3: quyết định do nhóm ra quyết định; GRASP giúp hiểu từng người — mục tiêu của ta với họ, vai trò, điều hấp dẫn, tình trạng quan hệ, quyền lực. Với kế hoạch cuối kỳ, đây là phần A — Value Insights.",
    next: "Ba câu kiểm tra nhanh.",
  });

  // 29 quick check
  s = L.quickCheck(["Vì sao một agency sự kiện cần biết chính sách tín dụng năm 2026?", "Khác nhau giữa điểm chạm partner-owned và social/external là gì? Mỗi loại một ví dụ.", "Trong GRASP, chữ G hỏi về mục tiêu của ai?"]);
  notes(s, { say: "Ba câu kiểm tra nhanh. Một: vì sao một agency sự kiện cần biết chính sách tín dụng năm 2026? Hai: khác nhau giữa điểm chạm partner-owned và social hay external — mỗi loại một ví dụ. Ba: trong GRASP, chữ G hỏi về mục tiêu của ai?", gv: "Gợi ý: (1) vì nó tạo ra nhu cầu của khách hàng là ngân hàng; (2) partner do đối tác như agency làm thay thương hiệu; social do người khác, báo chí — không kiểm soát; (3) của chúng ta (agency) đối với người đó — theo slide bộ môn và Marcos et al. (2018, Bảng 4.1).", ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.", next: "Phiếu cuối giờ." });

  // 30 exit
  s = await L.exitTicket("Một yếu tố PESTEL của khách hàng trong dự án cũ, và nó tạo ra nhu cầu gì cho khách hàng đó?", "Người có quyền lực cao nhất trong DMU của khách hàng đó là ai? Nhóm đã từng làm việc trực tiếp với người đó chưa?");
  notes(s, { say: "Phiếu cuối giờ. Một: một yếu tố PESTEL của khách hàng trong dự án cũ, và nó tạo ra nhu cầu gì cho khách hàng đó? Hai: người có quyền lực cao nhất trong DMU của khách hàng đó là ai — nhóm đã từng làm việc trực tiếp với người đó chưa?", gv: "Xem: PESTEL có là của khách hàng không; SV có phân biệt người liên hệ nhiều nhất với người quyết định không.", next: "Buổi sau." });

  // 31 next
  s = await L.nextSession("Không có bài về nhà. Buổi 4: quan hệ với Key Account đang tốt hay xấu?", "Buổi 4 · Chất lượng quan hệ", "Hiểu khách hàng rồi, làm sao biết quan hệ đang tốt hay xấu? Đo bằng niềm tin, cam kết — và xung đột chức năng.", ["Ảnh bản đồ hành trình và bảng GRASP", "Hồ sơ dự án cũ"]);
  notes(s, { say: "Không có bài về nhà. Buổi 4: hiểu khách hàng rồi, làm sao biết quan hệ với họ đang tốt hay xấu? Đo bằng niềm tin, cam kết, và xung đột chức năng. Mang theo ảnh bản đồ hành trình, bảng GRASP và hồ sơ dự án cũ.", gv: "[NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 3 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 32 refs
  s = L.refs([
    [["Davies, M. (n.d.). "], ["The value planning framework for key accounts", 1], [". Key Account Management Forum."]],
    [["Drakeley, C. (2022). "], ["Managing event stakeholders: Expect the unexpected", 1], [" [Chương sách]."]],
    [["Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. "], ["Journal of Marketing, 80", 1], ["(6), 69–96."]],
    [["Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). "], ["Implementing key account management: Designing customer-centric processes for mutual growth", 1], [". Kogan Page."]],
    [["Trần Nguyễn Huỳnh Như. (2023). "], ["Chương 2: Khách hàng trọng yếu trong sự kiện", 1], [" [Slide bài giảng]."]],
    [["Trần Nguyễn Huỳnh Như. (2023). "], ["Chương 3: Xây dựng mối quan hệ với khách hàng trọng yếu", 1], [" [Slide bài giảng]."]],
    [["VnEconomy. (2026, January 11). "], ["Năm 2026, tín dụng dự kiến tăng thêm 2,79 triệu tỷ đồng, giảm 183.000 tỷ so với 2025", 1], ["."]],
    [["Webster, F. E., Jr., & Wind, Y. (1972). A general model for understanding organizational buying behavior. "], ["Journal of Marketing, 36", 1], ["(2), 12–19."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 3, theo APA 7. Chương 3 của Marcos và cộng sự là phần đọc thêm về Bánh xe hiểu khách hàng.", gv: "Hai mục slide bộ môn cùng tác giả và năm — theo APA 7 cần thêm a/b (2023a, 2023b) nếu trích trong bài; [VERIFY năm].", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
