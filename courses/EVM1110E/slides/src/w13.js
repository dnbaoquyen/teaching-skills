// EVM1110E Buổi 13 — Building the SMP around the Key Account Plan (Phần 4, buổi 1/3)
// usage: NODE_PATH=<node_modules> node w13.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W13_slides.pptx";
const L = make(FONT, "Bài 13: Xây dựng SMP quanh Key Account Plan");
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
    const fc = Array.isArray(o.firstCol) ? o.firstCol[i] : o.firstCol;
    r.forEach((t, j) => { box(s, cx, yy, colW[j] - 0.06, rh, j === 0 && fc ? fc : CARD); T(s, t, cx + 0.12, yy, colW[j] - 0.3, rh, { fontSize: fs, bold: j === 0, color: j === 0 && fc ? NAVY : TX }); cx += colW[j]; });
  });
}
const AE = [["A", "Value Insights", TEAL], ["B", "Value Opportunities", BLUE], ["C", "Value Propositions", YEL], ["D", "Value Delivery", ORA], ["E", "Executive Summary", PINK]];

(async () => {
  // 1
  let s = L.titleSlide("Bài 13: Xây dựng SMP quanh Key Account Plan", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 13\nBuilding the SMP around the Key Account Plan\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 13 — mở Phần 4. Hôm nay là buổi xưởng: ít lý thuyết, nhiều thời gian để mỗi nhóm ráp tất cả các trang đã làm thành một bản kế hoạch, theo đúng cấu trúc của đề thi.", gv: "Phần 4, buổi 1/3. Nhắc SV bày tất cả trang SMP đã làm (Buổi 1–12, giấy hoặc ảnh chụp) lên bàn. Đề thi chính thức đã công bố — SV nên có đề trên máy.", next: "Câu hỏi đầu tiên của Customer Board." });

  // 2 hook
  s = slide("Customer Board sẽ hỏi: kế hoạch này mang lại cho chúng tôi bao nhiêu giá trị?");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaUserTie", 0.85, 2.15, 0.9, YEL);
  T(s, "Buổi 14–15. Nhóm bạn là KAM Director của agency. Customer Board ngồi đối diện.", 1.95, 2.15, 5.8, 0.9, { bold: true, fontSize: 17, color: YEL });
  T(s, bullets(["15 phút trình bày + 15 phút hỏi đáp", "Hội đồng hỏi về logic tài chính: giá trị, CLV, cost-to-serve, giả định", "…và chiến lược điểm chạm: trước – trong – sau, vai trò các bên liên quan bên ngoài"]), 0.9, 3.2, 6.8, 2.9, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  box(s, 8.15, 1.95, 4.58, 4.3);
  T(s, "Giơ tay: câu hỏi đầu tiên là…", 8.4, 2.05, 4.1, 0.6, { bold: true, fontSize: 17, color: YEL });
  [["A · “Nhóm đã làm những gì?”", ORA], ["B · “Chúng tôi được bao nhiêu giá trị?”", TEAL], ["C · “Nhóm có bao nhiêu slide?”", BLUE]].forEach(([t, c], i) => { box(s, 8.4, 2.8 + i * 1.05, 4.08, 0.9, c); T(s, t, 8.55, 2.8 + i * 1.05, 3.8, 0.9, { fontSize: 16, bold: true, color: NAVY }); });
  src(s, "Nguồn: Đề thi cuối kỳ EVM1110E, HK1A 2026–2027, mục 5 (Z10).", 6.45);
  notes(s, {
    say: "Buổi 14 và 15, nhóm bạn bước vào phòng với vai KAM Director của agency. Customer Board ngồi đối diện. 15 phút trình bày, 15 phút hỏi đáp. Câu hỏi đầu tiên nhiều khả năng là gì? A — nhóm đã làm những gì; B — kế hoạch này mang lại cho chúng tôi bao nhiêu giá trị; C — nhóm có bao nhiêu slide?",
    gv: "Đề thi mục 5: hội đồng hỏi trực tiếp, tập trung vào logic tài chính (giá trị, CLV, cost-to-serve, giả định) và chiến lược điểm chạm. Chốt: “Khách hàng quan tâm đến giá trị cho họ. Hôm nay: ráp mọi trang đã làm thành một kế hoạch trả lời được câu B.” Customer Board là giảng viên (đề thi) — không nói số người.",
    ask: "“A, B hay C?”",
    next: "Đề thi yêu cầu gì.",
  });

  // 3 what the exam asks
  s = slide("Đề thi: một khách hàng cũ, một bản kế hoạch, một buổi bảo vệ");
  defCards(s, [
    ["Khách hàng", TEAL, "01 tổ chức từ dự án sự kiện nhóm đã làm ở học phần trước.\nKhông làm dự án mới.", "Đề thi mục 1"],
    ["Vai", YEL, "Nhóm là agency tổ chức sự kiện. Lập SMP xoay quanh Key Account Plan cho khách hàng đó.", "Đề thi mục 1"],
    ["Phạm vi", ORA, "Chỉ bên liên quan bên ngoài: khách hàng, nhà đầu tư – tài trợ, nhà cung cấp – địa điểm, báo chí – KOL, cơ quan quản lý…", "Không đi sâu: nhân sự nội bộ, an toàn đám đông, PCCC"],
    ["Sản phẩm", PINK, "Bản kế hoạch A4 (20–30 trang nội dung chính) + slide; bảo vệ trước Customer Board.", "Đề thi mục 2, 4, 5"],
  ], "Tiểu luận nhóm (AM7) + đánh giá làm việc nhóm (AM9) — thang 10, 11 tiêu chí.", 15);
  notes(s, {
    say: "Đề thi chính thức nói bốn điều. Khách hàng: một tổ chức từ dự án sự kiện nhóm đã làm — không làm dự án mới. Vai: nhóm là agency, lập Kế hoạch quản trị các bên liên quan xoay quanh Key Account Plan cho khách hàng đó. Phạm vi: chỉ các bên bên ngoài; không đi sâu nhân sự nội bộ, an toàn đám đông, phòng cháy chữa cháy. Sản phẩm: bản kế hoạch A4, 20 đến 30 trang nội dung chính, cộng slide, và bảo vệ trước Customer Board.",
    gv: "Đề thi mục 1–5 (Z10). Phạm vi loại trừ khớp lưu ý HSSEQ ở Buổi 5 (an toàn đám đông thuộc môn Quản trị rủi ro).",
    next: "SMP và KAP liên quan thế nào.",
  });

  // 4 SMP = KAP + external
  s = slide("SMP của môn = Key Account Plan ở lõi + điều phối bên liên quan bên ngoài");
  circ(s, 3.9, 1.95, 4.6, CARD);
  circ(s, 4.95, 3.0, 2.5, YEL);
  T(s, "KEY ACCOUNT PLAN\n(A–C + quan hệ ở D)", 4.95, 3.0, 2.5, 2.5, { align: "center", bold: true, color: NAVY, fontSize: 14 });
  [["Nhà đầu tư – tài trợ", 0.6, 2.2, TEAL], ["Nhà cung cấp – địa điểm", 9.13, 2.2, BLUE], ["Báo chí – KOL", 0.6, 4.6, ORA], ["Cơ quan quản lý…", 9.13, 4.6, PUR]].forEach(([t, x, y, c]) => { box(s, x, y, 3.6, 1.0, c); T(s, t, x + 0.15, y, 3.3, 1.0, { bold: true, fontSize: 16, color: c === PUR ? TX : NAVY, align: "center" }); });
  arrow(s, 4.25, 2.5, 0.45, 0.4); arrow(s, 4.25, 4.9, 0.45, 0.4);
  s.addShape(L.pres.shapes.LEFT_ARROW, { x: 8.6, y: 2.5, w: 0.45, h: 0.4, fill: { color: MU }, line: { color: MU } });
  s.addShape(L.pres.shapes.LEFT_ARROW, { x: 8.6, y: 4.9, w: 0.45, h: 0.4, fill: { color: MU }, line: { color: MU } });
  box(s, 0.6, 6.15, 12.13, 0.7, YEL);
  T(s, "Vòng ngoài không phải chương riêng: mọi bên đều phục vụ hành trình của khách hàng — nằm trong phần D (13.2).", 0.8, 6.15, 11.7, 0.7, { fontSize: 16, bold: true, color: NAVY });
  notes(s, {
    say: "Key Account Plan là phần lõi: kế hoạch cho một khách hàng quan trọng — hiểu họ, tạo giá trị gì cho họ, thực hiện ra sao. Stakeholder Management Plan của môn là Key Account Plan cộng với việc điều phối các bên bên ngoài — nhà đầu tư và tài trợ, nhà cung cấp và địa điểm, báo chí và KOL, cơ quan quản lý — để giao giá trị cho Key Account. Vòng ngoài không phải chương riêng: nó nằm trong phần D.",
    gv: "Alt-text: hai vòng tròn đồng tâm; KAP ở lõi, bốn nhóm bên ngoài trỏ vào. Đề cương 13.1–13.2; đề thi mục 1 và phần D.",
    next: "Vì sao phải lập kế hoạch.",
  });

  // 5 why plan
  s = slide("Phần bị làm yếu nhất trong key account plan là hiểu thế giới của khách hàng");
  box(s, 0.6, 1.95, 6.0, 4.3);
  await ic(s, "FaChartLine", 0.85, 2.15, 0.9, TEAL);
  T(s, "Nghiên cứu ở Cranfield KAM Best Practice Club", 1.95, 2.15, 4.5, 0.9, { bold: true, fontSize: 17, color: TEAL });
  T(s, bullets(["Công ty áp dụng tốt các công cụ lập kế hoạch key account có khả năng triển khai KAM thành công cao hơn rõ rệt", "Không tổ chức nào tự chấm kế hoạch của mình cao", "Phần làm kém nhất: hiểu thế giới của khách hàng"]), 0.9, 3.2, 5.5, 2.95, { fontSize: 15.5, valign: "top", paraSpaceAfter: 8 });
  box(s, 6.85, 1.95, 5.88, 4.3);
  await ic(s, "FaQuoteLeft", 7.1, 2.15, 0.9, YEL);
  T(s, "“The Value Planning Framework we use for key account planning starts with understanding the customer’s world.”", 8.2, 2.15, 4.3, 1.9, { italic: true, fontSize: 16, color: YEL, valign: "top" });
  T(s, "Kế hoạch là một quy trình, tầm nhìn khoảng ba năm — không phải tài liệu viết một lần.", 7.1, 4.3, 5.4, 1.4, { fontSize: 16, bold: true });
  src(s, "Nguồn: Marcos et al. (2018, tr. 71–72, 81); Ryals & Rogers (2007): 78 công ty quốc tế (Z03).", 6.45);
  notes(s, {
    say: "Vì sao phải lập kế hoạch cẩn thận? Nghiên cứu với các thành viên Cranfield KAM Best Practice Club: công ty áp dụng tốt công cụ lập kế hoạch key account có khả năng triển khai KAM thành công cao hơn rõ rệt. Nhưng không tổ chức nào tự chấm kế hoạch của mình cao, và phần làm kém nhất là hiểu thế giới của khách hàng. Vì vậy khung của Cranfield bắt đầu từ đó. Kế hoạch có tầm nhìn khoảng ba năm — nó là quy trình, không phải tài liệu viết một lần.",
    gv: "Marcos et al. (2018), Ch.3, tr. 71–72 (nghiên cứu Cranfield KAM Best Practice Club) và tr. 81 (“the key account plan should be working to a three-year time horizon”). Z02 (blog Holt) ghi 3–5 năm. Câu trích nguyên văn tr. 72.",
    next: "Khung Value Planning.",
  });

  // 6 framework
  s = slide("Value Planning Framework: năm phần, khách hàng ở điểm bắt đầu");
  const fx = [["A", "Value Insights", "Phân tích thế giới của khách hàng", TEAL, 0.6, 1.95], ["B", "Value Opportunities", "Phân tích thế giới của nhà cung cấp: cơ hội của ta với khách hàng này", BLUE, 6.77, 1.95], ["D", "Value Delivery", "Chứng minh, lập kế hoạch, định lượng và giao giá trị", ORA, 0.6, 3.95], ["C", "Value Proposition", "Tạo và bán giá trị — do khách hàng dẫn dắt", YEL, 6.77, 3.95]];
  fx.forEach(([k, h, t, c, x, y]) => { box(s, x, y, 5.96, 1.75); num(s, k, x + 0.2, y + 0.2, 0.8, c, 22); T(s, h, x + 1.2, y + 0.15, 4.6, 0.6, { bold: true, fontSize: 18, color: c }); T(s, t, x + 1.2, y + 0.75, 4.6, 0.9, { fontSize: 15, valign: "top" }); });
  arrow(s, 6.4, 2.6, 0.32, 0.4); arrow(s, 6.4, 4.6, 0.32, 0.4, MU);
  s.addShape(L.pres.shapes.DOWN_ARROW, { x: 9.55, y: 3.72, w: 0.4, h: 0.22, fill: { color: MU }, line: { color: MU } });
  box(s, 0.6, 5.85, 12.13, 0.65, PINK);
  T(s, "E · Executive Summary — bước cuối cùng; công cụ để được lãnh đạo ủng hộ", 0.8, 5.85, 11.7, 0.65, { bold: true, fontSize: 17, color: NAVY });
  src(s, "Nguồn: Marcos et al. (2018, Hình 3.4, tr. 72–73), theo Davies & Holt (2013), gốc từ Ryals & McDonald (2010).", 6.6);
  notes(s, {
    say: "Khung Value Planning chia việc lập kế hoạch thành năm phần. A — Value Insights: phân tích thế giới của khách hàng. B — Value Opportunities: nhìn sang phía nhà cung cấp — cơ hội, phương án của ta với khách hàng này. C — Value Proposition: tạo đề xuất giá trị do khách hàng dẫn dắt, nói về việc giúp khách đạt mục tiêu kinh doanh, không khoe sản phẩm. D — Value Delivery: giao giá trị và đo thành công cho cả khách hàng lẫn ta. E — Executive Summary: bước cuối, thường bị làm ẩu, nhưng là công cụ để được lãnh đạo ủng hộ.",
    gv: "Marcos et al. (2018, tr. 72): “first presented by Davies and Holt in 2013… foundation in the KAM planning process developed by Ryals and McDonald… now also includes customer-led value proposition development”. Alt-text: bốn ô A→B→C→D theo vòng, ô E ở dưới. Đã đọc toàn văn Ch.3 — thay cho “định nghĩa làm việc” của Z09 ở các phần có nguồn.",
    next: "Bộ công cụ của từng phần.",
  });

  // 7 toolkit vs exam
  s = slide("Giáo trình có bộ công cụ cho từng phần; đề thi chọn công cụ của môn");
  table(s, 0.6, 1.95, [1.0, 5.4, 5.73], ["Phần", "Value Planning Toolkit (giáo trình)", "Đề thi yêu cầu (công cụ đã học)"], [
    ["A", "A1 PESTEL · A2 đối thủ của khách hàng · A3 phân tích nội bộ khách hàng · A4 SWOT 9 ô", "PESTEL, đối thủ của khách hàng · DMU/GRASP · hành trình khách hàng · Grid, Salience"],
    ["B", "B1 đối thủ của ta · B2 nội bộ ta · B3 SWOT 9 ô của ta · B4 bản đồ quan hệ, ra quyết định", "Ba tiêu chí Key Account · chất lượng quan hệ · CLV · cost-to-serve · cơ hội và rủi ro"],
    ["C", "C1 Value propositions", "CVP: Future state – Offering 7P – Value appraisal · năm nguồn giá trị · đồng kiến tạo"],
    ["D", "D1 kế hoạch hành động · D2 giao và ghi nhận giá trị · D3 tài chính", "Kraljic, đàm phán · Bow-tie → Diamond · chỉ số · ROI 6 cấp · đánh giá chung · bên ngoài"],
    ["E", "E1 tóm tắt — một trang", "Tối đa một trang, đặt đầu kế hoạch"],
  ], { rh: 0.7, fs: 13.5, firstCol: [TEAL, BLUE, YEL, ORA, PINK] });
  src(s, "Nguồn: Marcos et al. (2018, Hình 3.5, tr. 73–82); Đề thi EVM1110E, mục 2 và Đề tài (Z10).", 6.55);
  notes(s, {
    say: "Giáo trình có bộ công cụ cho từng phần. Đề thi chọn công cụ mà lớp mình đã học. Phần A gần như trùng: PESTEL và đối thủ của khách hàng; đề thi thêm DMU – GRASP, hành trình, Grid và Salience. Phần B khác nhiều nhất: giáo trình phân tích phía nhà cung cấp — đối thủ của ta, nội bộ ta, SWOT của ta; đề thi hỏi vì sao đây là Key Account, chất lượng quan hệ, CLV và cost-to-serve. Cả hai cùng hỏi một câu: ta có cơ hội gì với khách hàng này, đáng đầu tư đến đâu. Khi viết, theo đề thi.",
    gv: "Đối chiếu Marcos et al. (2018) Hình 3.5 với Đề thi mục “Đề tài”. SWOT 9 ô (tr. 76–77) không bắt buộc trong đề — nhóm có thể dùng để rút nhu cầu ở phần A. Đã kiểm tra: bảng kết thúc y = 6.15, nguồn ở 6.55.",
    next: "Mỗi phần trả lời một câu hỏi.",
  });

  // 8 questions per part
  s = slide("Mỗi phần trả lời một câu hỏi của Customer Board");
  table(s, 0.6, 1.95, [3.0, 9.13], ["Phần", "Câu hỏi trong đề thi"], [
    ["A · Value Insights", "Khách hàng là ai, ở hoàn cảnh nào? Môi trường và đối thủ tạo ra nhu cầu gì? Ai quyết định? Khách của khách hàng đi hành trình nào?"],
    ["B · Value Opportunities", "Vì sao là Key Account? Quan hệ hiện tại ra sao? CLV, cost-to-serve bao nhiêu, giả định nào? Cơ hội và rủi ro lớn nhất?"],
    ["C · Value Propositions", "Agency đề xuất giá trị gì, từ nguồn nào, định lượng được bao nhiêu? Đồng kiến tạo theo bước nào?"],
    ["D · Value Delivery", "Quản trị quan hệ thế nào? Mỗi bên bên ngoài gắn điểm chạm nào, tạo giá trị gì, quản lý bằng gì? Xung đột nào, bảo vệ cam kết ra sao?"],
    ["E · Executive Summary", "Trong một trang, Customer Board cần biết gì để đồng ý với kế hoạch?"],
  ], { rh: 0.72, fs: 14, firstCol: [TEAL, BLUE, YEL, ORA, PINK] });
  src(s, "Nguồn: Đề thi EVM1110E, phần Đề tài (Z10) — rút gọn.", 6.55);
  notes(s, {
    say: "Đề thi viết sẵn câu hỏi cho từng phần. A: khách hàng là ai, ở hoàn cảnh nào, môi trường và đối thủ tạo ra nhu cầu gì, ai quyết định, khách của họ đi hành trình nào. B: vì sao là Key Account, quan hệ hiện tại ra sao, CLV và cost-to-serve bao nhiêu với giả định nào, cơ hội và rủi ro lớn nhất. C: đề xuất giá trị gì, từ nguồn nào, bao nhiêu, đồng kiến tạo thế nào. D: quản trị quan hệ ra sao, mỗi bên bên ngoài gắn điểm chạm nào, tạo giá trị gì, quản lý bằng gì, xung đột và bảo vệ cam kết. E: trong một trang, hội đồng cần biết gì để đồng ý?",
    gv: "Nguyên văn đầy đủ ở Đề thi, phần “Đề tài”. Các câu hỏi này cũng là tiêu đề mục gợi ý cho bản kế hoạch.",
    next: "Thứ tự viết và thứ tự đọc.",
  });

  // 9 write order
  s = slide("Viết A → D rồi mới viết E — nhưng đặt E ở trang đầu");
  [["Thứ tự viết", "A → B → C → D → E", "E là bước cuối: chỉ tóm tắt được điều đã phân tích xong", TEAL], ["Thứ tự đọc", "E → A → B → C → D", "Đề thi: E tối đa 1 trang, đặt đầu kế hoạch — hội đồng đọc E trước", PINK]].forEach(([h, seq, t, c], i) => {
    const x = 0.6 + i * 6.17; box(s, x, 1.95, 5.96, 3.6);
    T(s, h, x + 0.25, 2.05, 5.4, 0.6, { bold: true, fontSize: 19, color: c });
    AE.forEach(([k, , col], j) => { const order = i === 0 ? j : (j + 4) % 5; const kk = AE[order]; num(s, kk[0], x + 0.3 + j * 1.1, 2.85, 0.8, kk[2], 20); if (j < 4) arrow(s, x + 1.12 + j * 1.1, 3.05, 0.26, 0.4); });
    T(s, t, x + 0.25, 3.95, 5.4, 1.4, { fontSize: 16, valign: "top" });
  });
  box(s, 0.6, 5.75, 12.13, 0.75, YEL);
  T(s, "Giáo trình: tóm tắt một trang, dùng bốn tiêu đề A, B, C, D — ngắn, có trọng tâm.", 0.8, 5.75, 11.7, 0.75, { fontSize: 16, bold: true, color: NAVY });
  src(s, "Nguồn: Marcos et al. (2018, tr. 72, 82); Đề thi EVM1110E, mục 2.", 6.6);
  notes(s, {
    say: "Viết theo thứ tự A, B, C, D rồi mới viết E — vì E chỉ tóm tắt được điều đã phân tích xong. Nhưng đặt E ở trang đầu: đề thi yêu cầu Executive Summary tối đa một trang, đặt đầu kế hoạch. Hội đồng đọc E trước. Giáo trình gợi ý: gói trong một trang, dùng bốn tiêu đề A, B, C, D.",
    gv: "Marcos et al. (2018, tr. 82): “The best way to construct it is to confine it to one page using the four main section headings”. Alt-text: hai dãy năm vòng tròn có mũi tên — A→E và E→D.",
    next: "Khi thiếu dữ liệu thì sao.",
  });

  // 10 assumptions
  s = slide("Giả định có lý do là câu trả lời hợp lệ — con số bịa thì không");
  box(s, 0.6, 1.95, 6.0, 2.2);
  await ic(s, "FaQuoteLeft", 0.85, 2.15, 0.8, TEAL);
  T(s, "“But do make sure to make it clear in your plan that these are assumptions!”", 1.85, 2.1, 4.55, 1.9, { italic: true, fontSize: 16, color: TEAL });
  box(s, 6.85, 1.95, 5.88, 2.2);
  await ic(s, "FaGavel", 7.1, 2.15, 0.8, PINK);
  T(s, "Đề thi: mọi số liệu phải có nguồn, hoặc ghi rõ “Giả định: … vì …”. Không bịa số liệu về khách hàng.", 8.1, 2.1, 4.45, 1.9, { fontSize: 16, bold: true });
  box(s, 0.6, 4.35, 12.13, 1.55, CARD);
  T(s, [{ text: "Mẫu: ", options: { bold: true, color: YEL } }, { text: "Giả định: ngân sách sự kiện năm sau của khách hàng giảm 10% ", options: {} }, { text: "vì ", options: { bold: true, color: YEL } }, { text: "báo cáo thường niên ghi kế hoạch cắt giảm chi phí; ", options: {} }, { text: "kiểm chứng bằng ", options: { bold: true, color: YEL } }, { text: "hỏi đầu mối Marketing trước khi chốt ngân sách.", options: {} }], 0.85, 4.35, 11.7, 1.55, { fontSize: 17 });
  box(s, 0.6, 6.05, 12.13, 0.6, YEL);
  T(s, "Các giả định chính → Phụ lục 3 (bắt buộc). Hội đồng sẽ hỏi: “Nếu giả định này sai thì sao?”", 0.8, 6.05, 11.7, 0.6, { fontSize: 15.5, bold: true, color: NAVY });
  notes(s, {
    say: "Khách hàng của các bạn là từ dự án cũ. Có nhiều điều các bạn không biết chắc: ngân sách năm sau, doanh thu, số khách. Cranfield khuyên: được đặt giả định — nhưng phải ghi rõ trong kế hoạch rằng đó là giả định. Đề thi nói thẳng hơn: mọi số liệu phải có nguồn, hoặc ghi “Giả định: … vì …”, không bịa số liệu về khách hàng. Mẫu: giả định, vì, kiểm chứng bằng. Các giả định chính đi vào Phụ lục 3 — và hội đồng sẽ hỏi nếu giả định sai thì sao.",
    gv: "Trích Z01 (Davies, KAM Forum). Đề thi mục 3 và Phụ lục bắt buộc (3). Tiêu chí 9 chấm “độ nhạy giả định”. Ví dụ “giảm 10%” là minh họa cách viết, không phải dữ liệu thật.",
    next: "Bộ khung An Phát.",
  });

  // 11 An Phát skeleton
  s = slide("Bộ khung Nova – An Phát cho thấy cách ráp, không phải bài để chép");
  table(s, 0.6, 1.95, [0.9, 11.23], ["Phần", "Hai, ba dòng (GIẢ ĐỊNH)"], [
    ["A", "Ngân hàng TMCP, mảng khách hàng doanh nghiệp VIP; GĐ Marketing mới thay người cũ; DMU 5 vai; khách của An Phát: 600 lãnh đạo doanh nghiệp"],
    ["B", "Hấp dẫn và sẵn sàng đồng đầu tư; CLV 5 năm ≈ 926 triệu (Buổi 6); rủi ro: đổi đầu mối, ngân sách giảm ~10%"],
    ["C", "Nova giúp An Phát giữ và mở rộng quan hệ với khách DN VIP — từ một gala/năm sang chương trình khách hàng cả năm"],
    ["D", "Bow-tie → Diamond; ROI 6 cấp (0–3 Nova cam kết, 4–5 đo cùng An Phát); tài trợ, khách sạn, AV, báo kinh tế; 5 bước xử lý xung đột"],
    ["E", "Năm câu (slide 22)"],
  ], { rh: 0.68, fs: 14.5, firstCol: [TEAL, BLUE, YEL, ORA, PINK] });
  src(s, "Mọi tên, con số là giả định của case An Phát (Buổi 2–12). Dùng chức danh, không dùng họ tên — đúng quy định của đề thi.", 6.55);
  notes(s, {
    say: "Đây là bộ khung Nova – An Phát, ráp từ các buổi trước. A: ngân hàng, mảng khách doanh nghiệp VIP, giám đốc marketing mới, DMU năm vai, khách của An Phát là 600 lãnh đạo doanh nghiệp. B: hấp dẫn, sẵn sàng đồng đầu tư; CLV 5 năm khoảng 926 triệu; rủi ro đổi đầu mối, ngân sách giảm. C: giữ và mở rộng quan hệ với khách VIP — từ một gala thành chương trình cả năm. D: Bow-tie sang Diamond, ROI 6 cấp, các bên bên ngoài, năm bước xử lý xung đột. Đây là khung, không phải bài mẫu. Khách hàng của nhóm bạn khác — phần A của bạn phải khác hoàn toàn.",
    gv: "Lecture notes §1.5; quyết định GV 6 (không phát bài mẫu SMP hoàn chỉnh). CLV 926 triệu: deck W06 slide “CLV 5 năm của An Phát” (giả định). Đã thay họ tên nhân vật bằng chức danh để làm mẫu cho quy định “dùng chức danh” của đề thi.",
    next: "Thực hành 1.",
  });

  // 12 practice 1
  s = await L.practice("Thực hành 1 · 30 phút: ráp khung A–E từ các trang đã làm", [["3’", "Bày tất cả trang đã làm (Buổi 1–12) lên bàn; A1 kẻ 5 ô A–E", TEAL], ["10’", "Một câu cho mỗi ô A–D (E để trống — viết ở Thực hành 2)", YEL], ["12’", "Bảng truy vết: trang đã làm → phần nào → còn thiếu gì → giả định → ai hoàn thiện. Phần không có trang nào: 🔴", PINK], ["5’", "Ba giả định quan trọng nhất: “Giả định: … vì …; kiểm chứng bằng …”", BLUE]], "FaPuzzlePiece", "Sản phẩm", "Khung A–E + bảng truy vết + 3 giả định = mục lục làm việc của SMP", "Bảng truy vết và danh sách giả định là nháp của Phụ lục 2 và 3.", YEL);
  notes(s, {
    say: "Thực hành 1, 30 phút. Ba phút: bày tất cả trang đã làm lên bàn, kẻ năm ô A đến E trên giấy A1. Mười phút: viết một câu cho mỗi ô A đến D; E để trống, viết ở Thực hành 2. Mười hai phút: bảng truy vết — trang nào đi vào phần nào, còn thiếu gì, giả định gì, ai hoàn thiện; phần nào không có trang nào thì đánh dấu đỏ. Năm phút: ba giả định quan trọng nhất. Bảng truy vết và giả định chính là nháp của Phụ lục 2 và Phụ lục 3 trong đề thi.",
    gv: "Phiếu W13_activity_S3_rap_khung_A_E.md. Mốc phút 25–55. Ghi lên bảng các phần 🔴 của 6 nhóm. Chụp ảnh khung (Phụ lục 2 yêu cầu ảnh chụp các trang làm trên lớp).",
    next: "Giải lao.",
  });

  // 13 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại]", next: "Phần C — giá trị có số." });

  // 14 VP monetary + CVP
  s = slide("Value proposition là đóng góp của agency vào kết quả của khách hàng — quy ra tiền");
  box(s, 0.6, 1.95, 12.13, 1.5);
  T(s, "“…the translation of the supplier’s offers into monetary terms that demonstrate their contribution to the customer’s profitability.”", 0.85, 1.95, 11.6, 1.5, { italic: true, fontSize: 18, color: YEL });
  [["Future state", "Khách hàng muốn ở đâu — mục tiêu của họ, bằng ngôn ngữ của họ", TEAL], ["Offering (7P)", "Agency làm gì để đưa họ đến đó; bằng chứng", BLUE], ["Value appraisal", "Giá trị bao nhiêu — có số, có nguồn hoặc giả định", ORA]].forEach(([h, t, c], i) => {
    const x = 0.6 + i * 4.12; box(s, x, 3.65, 3.89, 0.65, c); T(s, h, x + 0.15, 3.65, 3.6, 0.65, { bold: true, color: NAVY, fontSize: 17 });
    box(s, x, 4.4, 3.89, 1.6); T(s, t, x + 0.2, 4.45, 3.5, 1.5, { fontSize: 15.5, valign: "top" });
    if (i < 2) arrow(s, x + 3.9, 4.0, 0.2, 0.3);
  });
  src(s, "Nguồn: McDonald, SAMA (Z05); cấu trúc CVP — Buổi 5 (Marcos et al., 2018, Ch.5); Đề thi, tiêu chí 4.", 6.2);
  notes(s, {
    say: "Phần C. McDonald định nghĩa value proposition là việc dịch đề xuất của nhà cung cấp ra tiền, để chứng minh đóng góp vào lợi nhuận của khách hàng. Với tổ chức không vì lợi nhuận, thay lợi nhuận bằng mục tiêu của họ. Cấu trúc CVP đã học ở Buổi 5, cũng là tiêu chí 4 của đề thi: Future state — khách muốn ở đâu; Offering 7P — agency làm gì để đưa họ đến đó; Value appraisal — giá trị bao nhiêu.",
    gv: "Z05 (định nghĩa — không dùng số liệu 5%/1%/25%, quyết định GV 7). Lỗi Buổi 5: future state là giải pháp của agency (“gala hoành tráng”); value appraisal chỉ có “khách hài lòng”.",
    next: "Giá trị đến từ đâu.",
  });

  // 15 five sources
  s = slide("Đề thi hỏi giá trị đến từ năm nguồn — đã học ở Buổi 5");
  table(s, 0.6, 1.95, [3.6, 8.53], ["Nguồn giá trị", "Ví dụ với Key Account của agency sự kiện (GIẢ ĐỊNH)"], [
    ["1 · Top line", "Khách DN của khách hàng gắn bó hơn → giao dịch tăng sau sự kiện (đo ở ROI cấp 4–5)"],
    ["2 · Bottom line", "Gộp sự kiện cả năm, đàm phán nhà cung cấp → giảm chi phí cho khách hàng"],
    ["3 · Uy tín, liên tục (HSSEQ)", "Due diligence KOL, hợp đồng chặt, xử lý xung đột sớm → tránh sự cố uy tín"],
    ["4 · Advisory", "Chia sẻ dữ liệu, insight từ các sự kiện → khách hàng ra quyết định tốt hơn"],
    ["5 · Khách của khách hàng", "Trải nghiệm tốt hơn cho khách mời, nhà tài trợ, người tham dự"],
  ], { rh: 0.68, fs: 14.5, firstCol: [TEAL, YEL, ORA, PINK, BLUE] });
  src(s, "Nguồn: Marcos et al. (2018, Hình 5.4, tr. 124); Đề thi, Đề tài phần C. Không đi sâu an toàn đám đông (ngoài phạm vi đề thi).", 6.55);
  notes(s, {
    say: "Đề thi hỏi: giá trị đến từ nguồn nào — top line, bottom line, HSSEQ, advisory, khách của khách hàng. Đây là năm nguồn đã học ở Buổi 5. Top line: giúp khách tăng doanh thu. Bottom line: giảm chi phí. HSSEQ: uy tín và tính liên tục — tránh sự cố. Advisory: tư vấn, chia sẻ insight — nguồn agency hay quên nhất. Và khách của khách hàng. Không cần đủ năm nguồn; chọn nguồn mạnh nhất và định lượng.",
    gv: "Năm nguồn thay cho cách chia bốn (tăng/giảm/tránh chi phí + cảm xúc) trong lecture notes §2.1 bản cũ — để khớp đề thi tiêu chí 4. Ánh xạ: tăng giá trị ≈ top line; giảm chi phí ≈ bottom line; tránh chi phí ≈ HSSEQ. Ví dụ là nhận định của người soạn.",
    next: "Tính giá trị có số.",
  });

  // 16 formula + sensitivity
  s = slide("Mỗi con số trong giá trị phải có nguồn hoặc giả định — và chịu được câu “nếu sai thì sao?”");
  box(s, 0.6, 1.95, 12.13, 1.45, CARD);
  T(s, [{ text: "Giá trị ước tính = ", options: { bold: true, color: YEL } }, { text: "(số khách DN giữ thêm × lợi nhuận bình quân mỗi khách/năm) + chi phí tránh được − chi phí chương trình", options: {} }], 0.85, 1.95, 11.7, 1.45, { fontSize: 18 });
  const dd = [["Nguồn", "Báo cáo thường niên, website, tin chính thức, dữ liệu dự án cũ", TEAL, "FaBook"], ["Giả định", "“Giả định: … vì …” — ghi vào Phụ lục 3", YEL, "FaFlask"], ["Độ nhạy", "Ví dụ Buổi 6: tỷ lệ giữ chân 85% → 70%, CLV của An Phát mất ≈ 206 triệu", PINK, "FaBalanceScale"]];
  for (let i = 0; i < 3; i++) { const [h, t, c, icn] = dd[i]; const x = 0.6 + i * 4.12; box(s, x, 3.6, 3.89, 2.55); await ic(s, icn, x + 0.2, 3.75, 0.75, c); T(s, h, x + 1.1, 3.75, 2.6, 0.75, { bold: true, fontSize: 18, color: c }); T(s, t, x + 0.2, 4.6, 3.5, 1.45, { fontSize: 15, valign: "top" }); }
  src(s, "Công thức minh họa (GIẢ ĐỊNH) — lecture notes §2.1. Ví dụ độ nhạy: deck Buổi 6. Tiêu chí 9: “độ nhạy giả định”.", 6.35);
  notes(s, {
    say: "Một công thức minh họa: giá trị ước tính bằng số khách doanh nghiệp giữ thêm nhân lợi nhuận bình quân mỗi khách mỗi năm, cộng chi phí tránh được, trừ chi phí chương trình. Mỗi con số trong đó có nguồn hoặc là giả định ghi rõ. Và chuẩn bị cho câu hỏi “nếu sai thì sao?”. Nhớ ví dụ Buổi 6: tỷ lệ giữ chân của An Phát giảm từ 85% xuống 70%, CLV mất khoảng 206 triệu. Đó là độ nhạy — tiêu chí 9 của đề thi chấm đúng điều này cho từng cá nhân.",
    gv: "Đề thi tiêu chí 9 (cá nhân, 10%): “CLV, cost-to-serve, giá trị định lượng, độ nhạy giả định” — mức Xuất sắc: “nêu được nguồn/giả định và tác động khi giả định thay đổi”. Nếu trễ giờ: bỏ tính trên bảng, giữ công thức.",
    ask: "“Trong SMP của nhóm, con số nào nhạy nhất?”",
    next: "Mỗi lời hứa cần một dòng đo.",
  });

  // 17 promise → measure
  s = slide("Mỗi lời hứa ở phần C cần một dòng đo ở phần D");
  box(s, 0.6, 1.95, 12.13, 1.4);
  T(s, "“It is the supplier’s job to advise how the value that they promise within their value proposition will be captured (in ROI and KPI measures).”", 0.85, 1.95, 11.6, 1.4, { italic: true, fontSize: 18, color: YEL });
  table(s, 0.6, 3.55, [4.0, 4.0, 4.13], ["Lời hứa ở C", "Đo bằng gì ở D", "Ai đo, khi nào"], [
    ["Giữ thêm khách DN VIP", "Tỷ lệ khách DN quay lại năm sau (ROI cấp 4)", "Đo cùng An Phát · đánh giá chung cuối năm"],
    ["Giảm chi phí sự kiện", "Chi phí/khách so với năm trước", "Nova báo cáo · sau mỗi sự kiện"],
  ], { rh: 0.75, fs: 14.5, hc: [YEL, ORA, TEAL] });
  src(s, "Nguồn: Davies, Cranfield (Z06); ROI 6 cấp, đánh giá chung — Buổi 8. Ví dụ là GIẢ ĐỊNH. Đề thi tiêu chí 5: “mỗi lời hứa ở C có cách đo”.", 6.4);
  notes(s, {
    say: "Davies nói: việc của nhà cung cấp là chỉ ra giá trị đã hứa sẽ được ghi nhận thế nào — bằng ROI và KPI. Vậy mỗi lời hứa ở phần C cần một dòng đo ở phần D: đo bằng gì, ai đo, khi nào. Ví dụ: hứa giữ thêm khách doanh nghiệp VIP — đo tỷ lệ khách quay lại năm sau, ROI cấp 4, đo cùng An Phát ở đánh giá chung cuối năm. Rubric tiêu chí 5, mức xuất sắc: mỗi lời hứa ở C có cách đo.",
    gv: "Z06. Đề thi tiêu chí 5 (8%). Đã kiểm tra: bảng kết thúc y ≈ 5.98, nguồn 6.4.",
    next: "Kế hoạch hành động.",
  });

  // 18 D.1 action plan
  s = slide("Kế hoạch hành động của giáo trình: mỗi việc có chủ, nguồn lực, KPI và hạn");
  const cols = [["Việc chính", TEAL], ["Người phụ trách", YEL], ["Bộ phận, bên phối hợp", ORA], ["Nguồn lực", BLUE], ["Đo tiến độ", PINK], ["KPI khi xong", TEAL], ["Hạn", YEL], ["Ngày xong", ORA]];
  cols.forEach(([h, c], i) => { const x = 0.6 + i * 1.52; box(s, x, 1.95, 1.44, 1.0, c); T(s, h, x + 0.06, 1.95, 1.32, 1.0, { bold: true, fontSize: 13.5, color: NAVY, align: "center" }); });
  box(s, 0.6, 3.1, 12.13, 1.15);
  T(s, "Ví dụ (GIẢ ĐỊNH): chốt nhà tài trợ đối tác cho chương trình khách hàng cả năm · Account Director · An Phát (Marketing) + nhà tài trợ · 2 người × 3 tuần · bản ghi nhớ ký · hợp đồng có KPI điểm chạm · [hạn] · —", 0.85, 3.1, 11.7, 1.15, { fontSize: 15 });
  [["D1", "Kế hoạch hành động — các cột trên", TEAL], ["D2", "Giao và ghi nhận giá trị cho cả hai bên", ORA], ["D3", "Tài chính — dự phóng khoảng ba năm", YEL]].forEach(([k, t, c], i) => { const x = 0.6 + i * 4.12; box(s, x, 4.45, 3.89, 1.3); num(s, k, x + 0.2, 4.7, 0.8, c, 16); T(s, t, x + 1.15, 4.45, 2.6, 1.3, { fontSize: 15 }); });
  src(s, "Nguồn: Marcos et al. (2018, tr. 81–82), mục D.1–D.3. Ví dụ là GIẢ ĐỊNH; [hạn] do nhóm điền theo lịch của khách hàng.", 6.0);
  notes(s, {
    say: "Giáo trình gợi ý kế hoạch hành động thường là một bảng tính, mỗi việc có tám cột: việc chính, người phụ trách, bộ phận hoặc bên phối hợp, nguồn lực, đo tiến độ, KPI khi xong, hạn, và ngày xong. Phần D của giáo trình có ba mảnh: D1 kế hoạch hành động, D2 ghi nhận giá trị đã giao cho cả hai bên, D3 dự phóng tài chính khoảng ba năm. Với SMP, cột “bên phối hợp” là chỗ các bên bên ngoài xuất hiện.",
    gv: "Marcos et al. (2018, tr. 81): danh sách cột của action plan; tr. 82: D.2 “captures the value gained by you and your key account”, D.3 “projection of the financial outcomes… three-year time horizon”. Ô [hạn] để trống có chủ ý — không tự đặt ngày.",
    next: "Phần D, mảnh 1: quan hệ với Key Account.",
  });

  // 19 D part 1
  s = slide("Phần D, mảnh 1: quản trị quan hệ với Key Account (tiêu chí 5 — 8%)");
  const d1 = [["Mua sắm, đàm phán", "Kraljic: hạng mục agency mua để giao giá trị; đàm phán giá trị với Key Account", "Buổi 7", TEAL, "FaHandshake"], ["Tiếp xúc nhiều cấp", "Bow-tie → Diamond: cặp đối ứng, nhịp gặp", "Buổi 8", BLUE, "FaProjectDiagram"], ["Chỉ số", "Kết quả + quá trình; ROI 6 cấp (0–3 agency cam kết, 4–5 đo cùng khách)", "Buổi 8", YEL, "FaTachometerAlt"], ["Đánh giá chung", "Họp hai bên định kỳ, hai chiều", "Buổi 8", PINK, "FaSyncAlt"]];
  for (let i = 0; i < 4; i++) { const [h, t, b, c, icn] = d1[i]; const x = 0.6 + i * 3.08; box(s, x, 1.95, 2.9, 3.9); await ic(s, icn, x + 0.95, 2.1, 1.0, c); T(s, h, x + 0.15, 3.2, 2.6, 0.6, { bold: true, fontSize: 16.5, color: c, align: "center" }); T(s, t, x + 0.2, 3.8, 2.5, 1.6, { fontSize: 14.5, align: "center", valign: "top" }); T(s, b, x, 5.45, 2.9, 0.35, { fontSize: 12, color: MU, align: "center" }); }
  box(s, 0.6, 6.05, 12.13, 0.7, YEL);
  T(s, "Mức Kém của rubric: chỉ số yếu — chỉ đo “hài lòng”. Mức Xuất sắc: tiếp xúc nhiều cấp, chỉ số đo được, có lịch đánh giá chung.", 0.8, 6.05, 11.7, 0.7, { fontSize: 15, bold: true, color: NAVY });
  notes(s, {
    say: "Phần D có hai mảnh. Mảnh 1 — quan hệ với Key Account, tiêu chí 5, 8%. Bốn thứ: chiến lược mua sắm và đàm phán theo Kraljic, Buổi 7; tiếp xúc nhiều cấp từ Bow-tie sang Diamond; chỉ số kết quả và quá trình, ROI 6 cấp; và đánh giá chung định kỳ, Buổi 8. Rubric chấm thấp kế hoạch chỉ đo “hài lòng”. Mức xuất sắc: tiếp xúc nhiều cấp, chỉ số đo được, có lịch đánh giá chung.",
    gv: "Đề thi tiêu chí 5 — trích mức Xuất sắc và Trung bình. Trang SMP đã làm ở Buổi 7–8 đi vào đây.",
    next: "Mảnh 2: bên liên quan bên ngoài.",
  });

  // 20 D part 2 — 4 questions
  s = slide("Phần D, mảnh 2: mỗi bên liên quan bên ngoài trả lời bốn câu (tiêu chí 6 — 10%)");
  const q4 = [["1", "Gắn vào điểm chạm nào?", "Trước – trong – sau; đối tác sở hữu hay bên ngoài", TEAL], ["2", "Tạo giá trị gì?", "…cho khách của Key Account", YEL], ["3", "Quản lý bằng gì?", "Hợp đồng, ESG, KPI, người phụ trách", BLUE], ["4", "Rủi ro, xung đột?", "…và cách bảo vệ deliverables cho khách hàng", PINK]];
  q4.forEach(([k, h, t, c], i) => { const y = 1.95 + i * 0.95; num(s, k, 0.6, y, 0.8, c, 22); box(s, 1.6, y, 11.13, 0.8); T(s, h, 1.85, y, 4.0, 0.8, { bold: true, fontSize: 18, color: c }); T(s, t, 5.9, y, 6.6, 0.8, { fontSize: 16 }); });
  box(s, 0.6, 5.85, 12.13, 0.95, YEL);
  T(s, "Mức Xuất sắc: đủ ba nhóm (tài trợ – đầu tư · cung cấp – địa điểm · báo chí – KOL); ≥ 2 xung đột và cách bảo vệ deliverables; có cơ chế minh bạch.", 0.8, 5.85, 11.7, 0.95, { fontSize: 15.5, bold: true, color: NAVY });
  notes(s, {
    say: "Mảnh 2 — các bên bên ngoài, tiêu chí 6, 10%. Mỗi bên trả lời bốn câu. Một: gắn vào điểm chạm nào trên hành trình — trước, trong hay sau; đối tác sở hữu hay bên ngoài. Hai: tạo giá trị gì cho khách của Key Account. Ba: quản lý bằng gì — hợp đồng, ESG, KPI, người phụ trách. Bốn: rủi ro, xung đột, và cách bảo vệ deliverables. Mức xuất sắc: đủ ba nhóm, ít nhất hai xung đột kèm cách bảo vệ deliverables, và một cơ chế minh bạch.",
    gv: "Đề thi tiêu chí 6 — trích mức Xuất sắc. Lemon & Verhoef (2016) cho các loại điểm chạm. Để slide này chiếu suốt Thực hành 2.",
    next: "13.2 là một bảng.",
  });

  // 21 13.2 one table
  s = slide("13.2 là một bảng trong phần D, không phải ba chương rời");
  table(s, 0.6, 1.95, [3.2, 1.4, 7.53], ["Nhóm bên liên quan", "Buổi", "Trang SMP đã có"], [
    ["Nhà đầu tư – tài trợ", "9", "Bản đồ điểm chạm tài trợ; đề xuất win-win; leverage và activation"],
    ["Nhà cung cấp – địa điểm", "10", "Chấm hồ sơ (ma trận trọng số); phân bổ theo giai đoạn mua – sau mua"],
    ["Báo chí – KOL", "11", "Chọn diễn giả, KOL (due diligence); khuếch đại điểm chạm trước sự kiện"],
    ["Cả mạng lưới", "12", "Mạng lưới, bên nhiều vai, xung đột, cơ chế minh bạch, ma trận sự cố"],
  ], { rh: 0.72, fs: 15, firstCol: [TEAL, BLUE, ORA, PINK] });
  box(s, 0.6, 5.9, 12.13, 0.8, YEL);
  T(s, "Mọi bên cùng phục vụ một hành trình của khách hàng — đó là lý do chúng nằm chung một bảng.", 0.8, 5.9, 11.7, 0.8, { fontSize: 16.5, bold: true, color: NAVY });
  notes(s, {
    say: "13.2 không phải thêm ba chương rời. Đó là một bảng trong phần D. Nhà đầu tư và tài trợ — trang Buổi 9. Nhà cung cấp và địa điểm — Buổi 10. Báo chí và KOL — Buổi 11. Cả mạng lưới — Buổi 12. Mọi bên cùng phục vụ một hành trình của khách hàng.",
    gv: "Lecture notes §2.2. Đã kiểm tra: bảng kết thúc y ≈ 5.75, hộp vàng 5.9.",
    next: "Phần E.",
  });

  // 22 exec summary
  s = slide("Executive Summary: năm câu cho người quyết định — đọc riêng vẫn hiểu");
  const es = [["Khách hàng là ai, đang cần gì", "từ A", TEAL], ["Cơ hội lớn nhất", "từ B", BLUE], ["Agency đề xuất gì — một câu", "từ C", YEL], ["Giá trị có số, đo bằng gì", "C + D; ghi giả định", ORA], ["Customer Board cần quyết gì", "ngân sách, cam kết, chia sẻ dữ liệu…", PINK]];
  es.forEach(([h, t, c], i) => { const y = 1.95 + i * 0.85; num(s, i + 1, 0.6, y, 0.72, c, 20); box(s, 1.5, y, 11.23, 0.72); T(s, h, 1.75, y, 6.2, 0.72, { bold: true, fontSize: 17.5 }); T(s, t, 8.0, y, 4.5, 0.72, { fontSize: 15, color: MU }); });
  box(s, 0.6, 6.25, 12.13, 0.6, PINK);
  T(s, "Rubric mức Kém: kể lại quá trình làm bài; thiếu giá trị có số hoặc việc cần quyết.", 0.8, 6.25, 11.7, 0.6, { fontSize: 15, bold: true, color: NAVY });
  notes(s, {
    say: "Executive Summary — năm câu. Một: khách hàng là ai, đang cần gì. Hai: cơ hội lớn nhất. Ba: agency đề xuất gì, trong một câu. Bốn: giá trị có số và đo bằng gì, ghi giả định. Năm: Customer Board cần quyết gì — ngân sách, cam kết, chia sẻ dữ liệu. Rubric tiêu chí 1: tối đa một trang, nêu nhu cầu, đề xuất, giá trị có số, việc cần quyết; đọc riêng vẫn hiểu. Mức kém: kể lại quá trình làm bài.",
    gv: "Khung 5 câu là đề xuất của người soạn; khớp mức Xuất sắc của tiêu chí 1 (“nêu rõ nhu cầu khách hàng, đề xuất, giá trị có số và việc cần quyết; đọc riêng vẫn hiểu”). Để chiếu suốt Thực hành 2.",
    next: "Mười lỗi.",
  });

  // 23 ten errors
  s = slide("Mười lỗi khiến key account plan thất bại — nhóm sinh viên dễ gặp ba lỗi");
  const er = ["Kế hoạch là của riêng KAM", "KAM làm một mình", "Lãnh đạo không quan tâm", "Làm một lần rồi bỏ", "Quá ngắn hạn, giao dịch", "Không rà soát, cập nhật", "Toàn nói về nhà cung cấp, ít hiểu khách hàng", "Giữ kế hoạch cho riêng mình", "Coi là điền ô", "Không ai sở hữu"];
  const hot = [1, 6, 8];
  er.forEach((t, i) => { const col = i < 5 ? 0 : 1, row = i % 5; const x = 0.6 + col * 6.17, y = 1.95 + row * 0.82; const h = hot.includes(i); box(s, x, y, 5.96, 0.7, h ? YEL : CARD); num(s, i + 1, x + 0.1, y + 0.08, 0.54, h ? PINK : MU, 14); T(s, t, x + 0.8, y, 5.0, 0.7, { fontSize: 16, bold: h, color: h ? NAVY : TX }); });
  src(s, "Nguồn: Holt, Cranfield (Z02). Ô vàng: ba lỗi dễ gặp với nhóm sinh viên (nhận định) — gắn với tiêu chí 2 (“điền ô”, “nói về agency”) và tiêu chí 11.", 6.2);
  notes(s, {
    say: "Cranfield liệt kê mười lỗi khiến key account plan thất bại. Với nhóm sinh viên, ba lỗi dễ gặp nhất: một người viết — KAM làm một mình; toàn nói về mình, ít hiểu khách hàng; và coi kế hoạch là điền ô. Rubric phạt đúng các lỗi này: tiêu chí 2 mức kém là “nói về agency thay vì khách hàng”, mức trung bình là “liệt kê công cụ như điền ô”. Và tiêu chí 11 chấm từng người có hiểu cả phần không do mình viết.",
    gv: "Z02. Ánh xạ sang rubric là nhận định của người soạn.",
    ask: "“Nhóm bạn đang có nguy cơ mắc lỗi nào?”",
    next: "Rubric chính thức.",
  });

  // 24 rubric
  s = slide("Rubric: 60% bản kế hoạch, 40% thuyết trình và bảo vệ — 30% là điểm cá nhân");
  table(s, 0.6, 1.95, [0.6, 4.6, 0.85], ["#", "Phần I — Bản kế hoạch (điểm nhóm)", "%"], [
    ["1", "Executive Summary (E)", "5"], ["2", "Value Insights (A)", "12"], ["3", "Value Opportunities (B)", "10"], ["4", "Value Propositions (C)", "10"], ["5", "Value Delivery — quan hệ Key Account", "8"], ["6", "Value Delivery — bên ngoài (13.2)", "10"], ["7", "Trình bày, nguồn, liêm chính", "5"],
  ], { rh: 0.45, hh: 0.5, fs: 13.5, hc: TEAL });
  table(s, 6.8, 1.95, [0.6, 4.68, 0.85], ["#", "Phần II — Thuyết trình, bảo vệ", "%"], [
    ["8", "Trình bày — vai KAM Director (nhóm)", "10"], ["9", "Bảo vệ logic tài chính (cá nhân)", "10"], ["10", "Bảo vệ chiến lược điểm chạm (cá nhân)", "10"], ["11", "Phản biện, làm việc nhóm (cá nhân)", "10"],
  ], { rh: 0.45, hh: 0.5, fs: 13.5, hc: PINK });
  box(s, 6.8, 4.65, 5.93, 1.5, YEL);
  T(s, "Tiêu chí 9–11: mỗi người một điểm. Đánh giá làm việc nhóm (AM9) dựa vào phụ lục đóng góp của từng thành viên.", 7.0, 4.65, 5.55, 1.5, { fontSize: 15, bold: true, color: NAVY });
  src(s, "Nguồn: Đề thi EVM1110E, mục 6 và Tiêu chí đánh giá (Z10). Mô tả các mức Xuất sắc – Kém: xem đề thi.", 6.55);
  notes(s, {
    say: "Rubric chính thức có 11 tiêu chí. Phần I — bản kế hoạch, 60%, điểm chung của nhóm: E 5%, A 12%, B 10%, C 10%, D quan hệ Key Account 8%, D bên ngoài 10%, trình bày và liêm chính 5%. Phần II — 40%: trình bày 10% là điểm nhóm; ba tiêu chí còn lại là điểm cá nhân — bảo vệ logic tài chính, bảo vệ chiến lược điểm chạm, phản biện và làm việc nhóm, mỗi tiêu chí 10%. Nghĩa là 30% điểm của bạn phụ thuộc vào câu trả lời của chính bạn.",
    gv: "Đề thi mục 6. Phần A nặng nhất (12%) — khớp nhận định của Cranfield rằng hiểu thế giới khách hàng là phần làm kém nhất. Đã kiểm tra: bảng trái kết thúc y ≈ 6.0; bảng phải ≈ 4.5; hộp vàng 4.65–6.15.",
    next: "Hình thức và nộp bài.",
  });

  // 25 format & submission
  s = slide("Hình thức và nộp bài: đúng định dạng là điểm dễ lấy nhất");
  defCards(s, [
    ["Định dạng", TEAL, "A4 · Times New Roman 13 · giãn dòng 1,3 · lề trên, dưới 2 cm; trái 3 cm; phải 2 cm · đánh số trang", "Đề thi mục 2"],
    ["Độ dài", BLUE, "Nội dung chính 20–30 trang — không kể bìa, mục lục, tài liệu tham khảo, phụ lục", "Đề thi mục 2"],
    ["Nộp", YEL, "LMS, trước 23:59 ngày 14/10/2026: 1 PDF kế hoạch + 1 file slide (.pdf hoặc .pptx)\nTên file: EVM1110E_ Nhom[số]_SMP / _Slide", "Đề thi mục 4"],
    ["Nộp trễ", PINK, "Trễ 1 ngày trừ 20% số điểm. Không được nộp trễ quá 3 ngày.", "Đề thi mục 4"],
  ], "Bìa: trường, khoa; tên, mã môn; lớp; tên nhóm; họ tên, MSSV; tên khách hàng (được viết tắt); giảng viên; ngày nộp.", 14.5);
  notes(s, {
    say: "Hình thức. Khổ A4, Times New Roman 13, giãn dòng 1,3, lề trên dưới 2 phân, trái 3, phải 2, đánh số trang. Nội dung chính 20 đến 30 trang, không tính bìa, mục lục, tài liệu tham khảo và phụ lục. Nộp trên LMS trước 23 giờ 59 ngày 14 tháng 10 năm 2026: một file PDF kế hoạch và một file slide, đặt tên theo mẫu. Nộp trễ một ngày trừ 20%; không nộp trễ quá ba ngày. Bìa ghi đủ thông tin; tên khách hàng được viết tắt.",
    gv: "Đề thi mục 2 và 4 — chép nguyên các thông số; không thêm. Slide tham khảo — có thể lướt nhanh vì SV đã có đề.",
    next: "Bốn phụ lục bắt buộc.",
  });

  // 26 appendices
  s = slide("Bốn phụ lục bắt buộc — ba phụ lục bắt đầu ngay trên lớp hôm nay");
  const ap = [["1", "Phân công và tự đánh giá đóng góp của từng thành viên", "Căn cứ chấm AM9", TEAL, "FaUsers"], ["2", "Bảng truy vết các trang đã làm trên lớp (Buổi 1–13), kèm ảnh chụp", "Nháp: Thực hành 1", YEL, "FaCameraRetro"], ["3", "Danh sách các giả định chính", "Nháp: Thực hành 1", BLUE, "FaFlask"], ["4", "Công bố sử dụng công cụ AI (nếu có)", "Slide tiếp theo", PINK, "FaRobot"]];
  for (let i = 0; i < 4; i++) { const [k, t, b, c, icn] = ap[i]; const x = 0.6 + i * 3.08; box(s, x, 1.95, 2.9, 3.95); num(s, k, x + 0.2, 2.1, 0.7, c, 20); await ic(s, icn, x + 1.95, 2.1, 0.75, c); T(s, t, x + 0.2, 3.0, 2.5, 2.0, { fontSize: 15.5, bold: true, valign: "top" }); T(s, b, x + 0.2, 5.2, 2.5, 0.55, { fontSize: 13.5, color: c }); }
  box(s, 0.6, 6.1, 12.13, 0.7, YEL);
  T(s, "Thiếu phụ lục bắt buộc → tiêu chí 7 rơi xuống mức Kém.", 0.8, 6.1, 11.7, 0.7, { fontSize: 16, bold: true, color: NAVY });
  notes(s, {
    say: "Đề thi yêu cầu bốn phụ lục. Một: phân công và tự đánh giá đóng góp của từng thành viên — đây là căn cứ chấm làm việc nhóm. Hai: bảng truy vết các trang đã làm trên lớp từ Buổi 1 đến 13, kèm ảnh chụp. Ba: danh sách giả định chính. Bốn: công bố sử dụng AI nếu có. Phụ lục 2 và 3 các bạn bắt đầu ngay ở Thực hành 1 hôm nay. Thiếu phụ lục bắt buộc thì tiêu chí 7 rơi xuống mức kém.",
    gv: "Đề thi mục 2 (Phụ lục bắt buộc) và tiêu chí 7 (mức Kém: “thiếu phụ lục bắt buộc”).",
    next: "AI.",
  });

  // 27 AI policy
  s = slide("Được dùng AI — chỉ cần khai báo, và phải tự trả lời được khi bị hỏi");
  box(s, 0.6, 1.95, 12.13, 0.95, YEL);
  T(s, "“Cho phép, chỉ cần khai báo và phải hiểu bài thông qua việc trả lời được các câu hỏi vấn đáp.” — Giảng viên học phần", 0.8, 1.95, 11.7, 0.95, { fontSize: 16.5, bold: true, color: NAVY });
  table(s, 0.6, 3.1, [3.4, 4.2, 4.53], ["Công cụ", "Dùng cho phần nào, việc gì", "Nhóm đã kiểm tra và sửa gì"], [
    ["(tên công cụ)", "VD: phần A — gợi ý dàn ý PESTEL", "VD: thay 3 xu hướng không có nguồn bằng số liệu từ báo cáo thường niên"],
  ], { rh: 0.95, fs: 14.5, hc: [TEAL, BLUE, PINK] });
  [["Mọi thành viên tự giải thích được mọi phần của kế hoạch", TEAL], ["Customer Board có thể chỉ định người trả lời", PINK]].forEach(([t, c], i) => { const x = 0.6 + i * 6.17; box(s, x, 4.95, 5.96, 1.0, CARD); circ(s, x + 0.2, 5.2, 0.5, c); T(s, t, x + 0.9, 4.95, 4.9, 1.0, { fontSize: 15.5, bold: true }); });
  src(s, "Nguồn: Giảng viên (4/10/2026); Đề thi mục 3 và 5; tiêu chí 11. Ví dụ trong bảng là minh họa.", 6.2);
  notes(s, {
    say: "Về AI, quy định rất rõ: được dùng, chỉ cần khai báo, và phải hiểu bài — thể hiện qua việc trả lời được câu hỏi vấn đáp. Phụ lục khai báo có ba cột: công cụ nào, dùng cho phần nào và việc gì, nhóm đã kiểm tra và sửa gì. Đề thi yêu cầu mọi thành viên tự giải thích được mọi phần của kế hoạch, và hội đồng có thể chỉ định người trả lời. AI không biết khách hàng của các bạn, không có mặt ở dự án cũ, và không đứng trả lời Customer Board thay các bạn.",
    gv: "Quyết định GV ngày 4/10/2026 (thay mức D đề xuất trước đó). Mẫu phụ lục: theo ba cột của đề thi mục 3. Không nhắc và không dùng công cụ phát hiện AI (shared/ai_era_integrity.md) — vấn đáp là cơ chế xác nhận.",
    next: "Buổi bảo vệ diễn ra thế nào.",
  });

  // 28 defense
  s = slide("Buổi bảo vệ: 15 phút trình bày, 15 phút hỏi đáp — ai cũng phải trả lời");
  const df = [["15’", "Trình bày", "Vai KAM Director; cấu trúc E → A → D; đúng giờ; tập trung vào giá trị cho khách hàng (tiêu chí 8)", TEAL], ["15’", "Hỏi đáp", "Logic tài chính: giá trị, CLV, cost-to-serve, giả định (tiêu chí 9) · Điểm chạm trước – trong – sau, vai trò bên ngoài (tiêu chí 10)", PINK], ["≥ 1", "Mỗi thành viên", "Trả lời ít nhất 1 câu; hội đồng có thể chỉ định người; hiểu cả phần không do mình viết (tiêu chí 11)", YEL]];
  df.forEach(([k, h, t, c], i) => { const y = 1.95 + i * 1.3; box(s, 0.6, y, 1.4, 1.15, c); T(s, k, 0.6, y, 1.4, 1.15, { align: "center", bold: true, fontSize: 24, color: NAVY }); box(s, 2.2, y, 10.53, 1.15); T(s, h, 2.45, y, 2.5, 1.15, { bold: true, fontSize: 17, color: c }); T(s, t, 5.0, y, 7.5, 1.15, { fontSize: 15 }); });
  box(s, 0.6, 5.95, 12.13, 0.7, CARD);
  T(s, "Slide và trình bày bằng tiếng Việt. Không đưa thông tin cá nhân của người thật tại khách hàng — dùng chức danh.", 0.8, 5.95, 11.7, 0.7, { fontSize: 15, color: MU });
  notes(s, {
    say: "Buổi bảo vệ. 15 phút trình bày trong vai KAM Director, tập trung vào giá trị cho khách hàng. 15 phút hỏi đáp: logic tài chính — giá trị, CLV, cost-to-serve, giả định; và điểm chạm — trước, trong, sau, vai trò các bên bên ngoài. Mỗi thành viên trả lời ít nhất một câu; hội đồng có thể chỉ định người. Ngôn ngữ là tiếng Việt. Và không đưa thông tin cá nhân của người thật tại khách hàng — dùng chức danh.",
    gv: "Đề thi mục 3 và 5; tiêu chí 8–11. [NEEDS PROFESSOR INPUT: thứ tự nhóm bảo vệ ở Buổi 14 và 15.]",
    next: "Thực hành 2.",
  });

  // 29 practice 2
  s = await L.practice("Thực hành 2 · 35 phút: viết phần D, phần E — và chạy thử Customer Board", [["12’", "Bảng phần D: ≥ 1 bên mỗi nhóm × 4 câu (slide 20); 2 xung đột + cách bảo vệ deliverables", ORA], ["5’", "Executive Summary 5 câu trên A3 (slide 22) — có số, có việc cần quyết", PINK], ["10’", "Xoay trạm 2 vòng × 5’: vai Customer Board — 1 câu hỏi tài chính (vàng) + 1 câu hỏi điểm chạm (hồng); người trả lời do trạm chỉ định", YEL], ["5’", "Về bàn, sửa; ghi câu hỏi khó nhất vào danh sách ôn bảo vệ", BLUE]], "FaUserTie", "Sản phẩm", "Bảng Value Delivery + Executive Summary nháp + danh sách câu hỏi bảo vệ", "Người trả lời do trạm chỉ định — tập đúng luật của buổi bảo vệ.", PINK);
  notes(s, {
    say: "Thực hành 2, 35 phút. Mười hai phút: bảng phần D — mỗi nhóm bên ngoài ít nhất một bên, trả lời bốn câu, cộng hai xung đột và cách bảo vệ deliverables. Năm phút: Executive Summary năm câu trên A3. Mười phút: xoay trạm hai vòng; các bạn đóng vai Customer Board, để lại một câu hỏi tài chính trên giấy vàng và một câu hỏi điểm chạm trên giấy hồng. Trạm chỉ định người trả lời — giống luật buổi bảo vệ. Năm phút cuối: về bàn sửa, ghi câu hỏi khó nhất.",
    gv: "Phiếu W13_activity_S6_value_delivery_exec_summary.md. Mốc phút 85–120 (3’ mở đầu không ghi trên slide). Ghi các câu hỏi tài chính lặp lại lên bảng. Nếu trễ giờ: xoay 1 vòng.",
    next: "Tổng hợp.",
  });

  // 30 summary
  s = slide("Ba ý của Buổi 13");
  const sm = [["13.1", "SMP = Key Account Plan + điều phối bên ngoài, theo Value Planning Framework: bắt đầu từ thế giới của khách hàng; mọi con số có nguồn hoặc “Giả định: … vì …”", TEAL], ["C → D", "Phần C có số, từ năm nguồn giá trị; mỗi lời hứa có một dòng đo ở D. 13.2 là một bảng: mỗi bên bên ngoài gắn điểm chạm, giá trị, cách quản lý, rủi ro", YEL], ["E", "Viết cuối, đặt đầu, một trang. Bốn phụ lục bắt buộc; khai báo AI; mỗi người tự bảo vệ được mọi phần", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.3; box(s, 0.6, y, 1.4, 1.1, c); T(s, k, 0.6, y, 1.4, 1.1, { align: "center", bold: true, color: NAVY, fontSize: 20 }); box(s, 2.2, y, 10.53, 1.1); T(s, t, 2.45, y, 10.1, 1.1, { fontSize: 15 }); });
  notes(s, {
    say: "Ba ý của Buổi 13. Một: SMP là Key Account Plan cộng điều phối bên ngoài, theo Value Planning Framework — bắt đầu từ thế giới của khách hàng; mọi con số có nguồn hoặc giả định. Hai: phần C có số, từ năm nguồn giá trị; mỗi lời hứa có một dòng đo ở D; 13.2 là một bảng. Ba: phần E viết cuối, đặt đầu, một trang; bốn phụ lục bắt buộc; khai báo AI; mỗi người tự bảo vệ được mọi phần.",
    gv: "Việc nhóm cần làm trước hạn nộp: điền các ô 🔴 trong bảng truy vết; sửa theo note của Customer Board; chạy checklist tự rà soát; hoàn thiện bốn phụ lục.",
    next: "Phiếu cuối giờ.",
  });

  // 31 exit
  s = await L.exitTicket("Phần nào trong A–E của SMP nhóm bạn đang yếu nhất? Nhóm cần thông tin gì, từ đâu để hoàn thiện?", "Viết 1 câu value proposition cho khách hàng của nhóm, có con số — ghi rõ đâu là giả định.");
  notes(s, { say: "Phiếu cuối giờ, cá nhân, không chấm điểm. Một: phần nào trong A đến E của nhóm bạn đang yếu nhất — cần thông tin gì, từ đâu? Hai: viết một câu value proposition cho khách hàng của nhóm, có con số, ghi rõ đâu là giả định.", gv: "Xem: (a) nhận ra phần yếu cụ thể; (b) value proposition nói về giá trị cho khách hàng, không chỉ “dịch vụ của chúng tôi”; (c) có số và phân biệt số thật với giả định.", next: "Buổi sau." });

  // 32 next
  s = await L.nextSession("Buổi 14–15: các bạn là KAM Director trước Customer Board", "Hạn nộp: 23:59 · 14/10/2026", "Buổi sau các bạn không còn là sinh viên trình bày bài tập. Hội đồng sẽ hỏi hai điều: giá trị này bao nhiêu tiền — và các bạn chạm vào khách hàng của họ ở đâu, bằng ai.", ["Checklist tự rà soát SMP", "Bảng truy vết + ảnh chụp các trang", "Danh sách câu hỏi bảo vệ hôm nay"]);
  notes(s, { say: "Buổi 14 và 15, các bạn là KAM Director trước Customer Board. Hạn nộp bản kế hoạch và slide trên LMS: 23 giờ 59 ngày 14 tháng 10 năm 2026. Hội đồng sẽ hỏi hai điều: giá trị này bao nhiêu tiền, và các bạn chạm vào khách hàng của họ ở đâu, bằng ai.", gv: "Câu nối theo giáo án. Hạn nộp theo đề thi mục 4. [NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 13 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 33 refs
  s = L.refs([
    [["Davies, M. (n.d.). "], ["Creating compelling customer value propositions", 1], [". Cranfield School of Management Executive Development Blog."]],
    [["Holt, S. (n.d.). "], ["World class key account planning", 1], [". Cranfield School of Management Executive Development Blog."]],
    [["Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. "], ["Journal of Marketing, 80", 1], ["(6), 69–96."]],
    [["Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). "], ["Implementing key account management: Designing customer-centric processes for mutual growth", 1], [". Kogan Page."]],
    [["McDonald, M. (n.d.). "], ["How to create financially quantified value propositions in six (actionable!) steps", 1], [". Strategic Account Management Association."]],
    [["Ryals, L. J., & Rogers, B. (2007). Key account planning: Benefits, barriers and best practice. "], ["Journal of Strategic Marketing, 15", 1], [", 209–222."]],
    [["Ryals, L., & McDonald, M. (2010). "], ["Key account plans", 1], [". Routledge."]],
    [["Trường Đại học Kinh tế – Tài chính TP.HCM. (2026). "], ["Đề thi học kỳ 1A năm học 2026–2027: EVM1110E", 1], [" [Tài liệu nội bộ]."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 13, theo APA 7.", gv: "Danh mục đầy đủ Z01–Z10 trong buoi-13_tu-lieu-tong-hop.md, mục 6 và 8.", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
