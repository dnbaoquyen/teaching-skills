// EVM1110E Buổi 6 — Financial acumen in KAM: CLV, cost-to-serve, margin × cost-to-serve matrix, fair relationships
// usage: NODE_PATH=<node_modules> node w06.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W06_slides.pptx";
const L = make(FONT, "Bài 6: Tài chính trong KAM");
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
// simple table: header row + rows; widths array
function table(s, x, y, widths, rowH, header, rows, o = {}) {
  let cx = x;
  header.forEach((h, j) => { T(s, h, cx, y, widths[j], 0.45, { fontSize: 14, bold: true, color: o.hc || YEL, align: j ? "center" : "left" }); cx += widths[j]; });
  rows.forEach((r, i) => {
    const yy = y + 0.5 + i * (rowH + 0.08), tot = widths.reduce((a, b) => a + b, 0);
    box(s, x, yy, tot, rowH, r.fill || CARD);
    let xx = x;
    r.cells.forEach((c, j) => { T(s, c, xx + 0.1, yy, widths[j] - 0.2, rowH, { fontSize: o.fs || 16, bold: !!r.bold || j === 0, color: r.color || TX, align: j ? "center" : "left" }); xx += widths[j]; });
  });
}

(async () => {
  // 1
  let s = L.titleSlide("Bài 6: Tài chính trong KAM", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 6\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 6 — Bài 6: Tài chính trong KAM. Buổi 5 ta tạo giá trị cho khách hàng. Hôm nay là mặt kia: khách hàng này đáng bao nhiêu với Nova, phục vụ họ tốn bao nhiêu, và làm sao để quan hệ công bằng cho cả hai.", gv: "Mở đầu bằng 2–3 “điều còn mơ hồ” từ phiếu cuối giờ Buổi 5 (≤3 phút). Nhắc SV chuẩn bị máy tính cầm tay.", next: "Bắt đầu bằng hai khách hàng của Nova." });

  // 2 hook
  s = slide("Khách hàng mang lại doanh thu lớn nhất có phải khách hàng đáng giá nhất?");
  const hk = [["Địa ốc Sông Xanh", "3.500", PINK, "FaCity"], ["Ngân hàng An Phát", "2.300", TEAL, "FaUniversity"]];
  for (let i = 0; i < 2; i++) { const x = 0.6 + i * 3.75; box(s, x, 1.95, 3.55, 4.3); await ic(s, hk[i][3], x + 1.2, 2.15, 1.1, hk[i][2]); T(s, hk[i][0], x + 0.15, 3.4, 3.25, 0.7, { align: "center", bold: true, fontSize: 19, color: hk[i][2] }); T(s, hk[i][1], x + 0.15, 4.15, 3.25, 0.9, { align: "center", bold: true, fontSize: 36 }); T(s, "triệu doanh thu/năm cho Nova", x + 0.15, 5.1, 3.25, 0.6, { align: "center", fontSize: 14, color: MU }); }
  box(s, 8.2, 1.95, 4.53, 4.3);
  T(s, "Giơ tay: khách hàng nào đáng giá hơn với Nova?", 8.45, 2.1, 4.1, 1.2, { bold: true, fontSize: 18, color: YEL, valign: "top" });
  [["Sông Xanh", PINK], ["An Phát", TEAL]].forEach(([t, c], i) => { box(s, 8.5, 3.5 + i * 1.2, 3.93, 0.95, c); T(s, t, 8.7, 3.5 + i * 1.2, 3.5, 0.95, { fontSize: 22, bold: true, color: NAVY }); });
  T(s, "(giả định — hai khách hàng từ Buổi 2)", 0.6, 6.35, 7.0, 0.4, { fontSize: 13, color: MU, italic: true });
  notes(s, {
    say: "Hai khách hàng của Nova, giả định, từ Buổi 2. Địa ốc Sông Xanh mang lại 3.500 triệu doanh thu mỗi năm. Ngân hàng An Phát: 2.300 triệu. Khách hàng nào đáng giá hơn với Nova? Giơ tay.",
    gv: "Giáo án S1 (phút 0–5). Đa số sẽ chọn Sông Xanh — để mở đến slide 3.",
    ask: "“Sông Xanh hay An Phát? Cần biết thêm gì để trả lời?”",
    next: "Doanh thu chỉ là một phần.",
  });

  // 3 answer frame
  s = slide("Doanh thu chỉ là một phần: còn lãi bao nhiêu, phục vụ tốn bao nhiêu, và ở lại bao lâu");
  const q3 = [["Lãi bao nhiêu?", "biên lợi nhuận gộp", "FaPercent", TEAL], ["Phục vụ tốn bao nhiêu?", "cost-to-serve", "FaTools", YEL], ["Ở lại bao lâu?", "tỷ lệ giữ chân", "FaHourglassHalf", PINK]];
  for (let i = 0; i < 3; i++) { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.6); await ic(s, q3[i][2], x + 1.4, 2.15, 1.1, q3[i][3]); T(s, q3[i][0], x + 0.2, 3.4, 3.5, 0.8, { align: "center", bold: true, fontSize: 21, color: q3[i][3] }); T(s, q3[i][1], x + 0.2, 4.25, 3.5, 0.6, { align: "center", fontSize: 16, color: MU, italic: true }); }
  T(s, "Đề cương 6.1: CLV cho định hướng dài hạn · 6.2: cost-to-serve, ma trận biên lợi nhuận — lợi ích hai phía và quan hệ công bằng.", 0.6, 5.8, 12.13, 0.8, { fontSize: 17, bold: true, color: YEL });
  notes(s, {
    say: "Chưa trả lời được. Doanh thu chỉ là một phần. Cần biết thêm ba điều: lãi bao nhiêu — biên lợi nhuận gộp; phục vụ tốn bao nhiêu — cost-to-serve; và ở lại bao lâu — tỷ lệ giữ chân. Đề cương Buổi 6 có hai mục: 6.1, giá trị vòng đời khách hàng cho định hướng dài hạn; 6.2, cost-to-serve và ma trận biên lợi nhuận — để quan hệ có lợi cho cả hai và công bằng.",
    gv: "Đề cương Session 6: 6.1 Calculating Customer Lifetime Value (CLV) for long-term orientation; 6.2 Cost-to-serve analysis and Gross margin matrix: ensuring bilateral benefits and fair relationships.",
    next: "Giáo trình đặt các con số này trong một khung đo hiệu quả KAM.",
  });

  // 4 framework
  s = slide("Giáo trình đo hiệu quả KAM bằng kết quả tài chính, kết quả quan hệ — và các quá trình phía trước");
  box(s, 0.6, 1.95, 5.9, 0.6, TEAL); T(s, "Chỉ số kết quả", 0.8, 1.95, 5.5, 0.6, { bold: true, fontSize: 17, color: NAVY });
  box(s, 0.6, 2.65, 2.85, 2.9, CARD); T(s, [{ text: "Tài chính", options: { bold: true, color: YEL, breakLine: true } }, { text: "Tăng trưởng doanh thu", options: { breakLine: true } }, { text: "Lợi nhuận", options: { breakLine: true } }, { text: "Giá trị vòng đời ★", options: { bold: true, color: YEL } }], 0.8, 2.75, 2.5, 2.7, { fontSize: 15, valign: "top", paraSpaceAfter: 6 });
  box(s, 3.65, 2.65, 2.85, 2.9, CARD); T(s, [{ text: "Quan hệ", options: { bold: true, color: TEAL, breakLine: true } }, { text: "Hài lòng", options: { breakLine: true } }, { text: "Trung thành", options: { breakLine: true } }, { text: "Chất lượng quan hệ (B4)" }], 3.85, 2.75, 2.5, 2.7, { fontSize: 15, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.83, 1.95, 5.9, 0.6, BLUE); T(s, "Chỉ số quá trình", 7.03, 1.95, 5.5, 0.6, { bold: true, fontSize: 17, color: NAVY });
  box(s, 6.83, 2.65, 1.85, 2.9, CARD); T(s, [{ text: "Phục vụ khách", options: { bold: true, color: YEL, breakLine: true } }, { text: "Gói dịch vụ", options: { breakLine: true } }, { text: "Giải pháp", options: { breakLine: true } }, { text: "Cost to serve ★", options: { bold: true, color: YEL } }], 6.93, 2.75, 1.7, 2.7, { fontSize: 13, valign: "top", paraSpaceAfter: 6 });
  box(s, 8.85, 2.65, 1.85, 2.9, CARD); T(s, [{ text: "Cùng phát triển", options: { bold: true, color: PINK, breakLine: true } }, { text: "Đồng kiến tạo (B5)", options: { breakLine: true } }, { text: "Chia sẻ thông tin", options: { breakLine: true } }, { text: "Đầu tư chung" }], 8.95, 2.75, 1.7, 2.7, { fontSize: 13, valign: "top", paraSpaceAfter: 6 });
  box(s, 10.88, 2.65, 1.85, 2.9, CARD); T(s, [{ text: "Trải nghiệm", options: { bold: true, color: ORA, breakLine: true } }, { text: "Trước mua", options: { breakLine: true } }, { text: "Trong mua", options: { breakLine: true } }, { text: "Sau mua (B3)" }], 10.98, 2.75, 1.7, 2.7, { fontSize: 13, valign: "top", paraSpaceAfter: 6 });
  T(s, "★ Hôm nay: giá trị vòng đời và cost to serve. Phần còn lại: Buổi 8.", 0.6, 5.75, 12.13, 0.55, { fontSize: 17, bold: true, color: YEL });
  src(s, "Nguồn: Marcos et al. (2018, Hình 8.1, tr. 192–193).", 6.45);
  notes(s, {
    say: "Giáo trình Marcos và cộng sự đề xuất một khung đo hiệu quả KAM ở cấp từng khách hàng. Bên trái — chỉ số kết quả: tài chính gồm tăng trưởng doanh thu, lợi nhuận, giá trị vòng đời; quan hệ gồm hài lòng, trung thành, chất lượng quan hệ — Buổi 4. Bên phải — chỉ số quá trình, đi trước kết quả: phục vụ khách hàng, trong đó có cost to serve; cùng phát triển với khách — đồng kiến tạo ở Buổi 5; và trải nghiệm khách hàng theo ba giai đoạn — Buổi 3. Hôm nay ta học hai ô có ngôi sao: giá trị vòng đời và cost to serve. Phần còn lại ở Buổi 8.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 8.1 “Measuring KAM performance” và đoạn giải thích (tr. 192–193). Khung này cho thấy các buổi 3–6 nối với nhau và dẫn sang Buổi 8.",
    next: "Mục 6.1: CLV là gì?",
  });

  // 5 CLV definitions
  s = slide("CLV là giá trị hôm nay của toàn bộ lợi nhuận tương lai từ một khách hàng");
  defCards(s, [
    ["Marcos et al. (2018)", TEAL, "Ước lượng giá trị hiện tại của một quan hệ khách hàng, dựa trên doanh thu và chi phí dự kiến trong một khoảng thời gian, và một tỷ lệ chiết khấu đổi tiền tương lai thành tiền hôm nay.", "(tr. 191, 197)"],
    ["Gupta et al. (2006)", YEL, "Khi doanh thu đến từ quan hệ dài hạn, marketing nhằm tối đa hóa CLV và customer equity — tổng CLV của mọi khách hàng; CLV dùng để phân bổ nguồn lực.", "(Journal of Service Research, 9(2))"],
    ["Ý nghĩa với KAM", BLUE, "Thước đo tài chính nhìn về phía trước — phản ánh bản chất lâu dài, chiến lược của quan hệ key account.", "(Marcos et al., 2018, tr. 191, 193)"],
  ], "Tổng hợp: CLV = lợi nhuận dự kiến từ khách hàng trong nhiều năm, quy về tiền hôm nay — để quyết định đầu tư nguồn lực vào ai.");
  notes(s, {
    say: "Ba cách nói. Giáo trình: CLV là ước lượng giá trị hiện tại của một quan hệ khách hàng, dựa trên doanh thu và chi phí dự kiến, cộng một tỷ lệ chiết khấu đổi tiền tương lai thành tiền hôm nay. Gupta và cộng sự, 2006: khi doanh thu đến từ quan hệ dài hạn, marketing nhằm tối đa hóa CLV và customer equity — tổng CLV của mọi khách hàng — và CLV dùng để phân bổ nguồn lực. Với KAM, giáo trình nói CLV là thước đo tài chính nhìn về phía trước, phản ánh bản chất lâu dài và chiến lược của quan hệ. Gộp lại: CLV là lợi nhuận dự kiến trong nhiều năm, quy về tiền hôm nay — để quyết định đầu tư nguồn lực vào ai. Nối Buổi 2: chọn Key Account là quyết định phân bổ nguồn lực.",
    gv: "Đã đối chiếu Marcos et al. (2018): tr. 191 (“customer lifetime value estimates the future revenues and costs associated with a customer relationship and converts the resulting amount into ‘today’s money’”), tr. 193 (“explicitly account for the long-lasting and strategic nature of KAM”), tr. 197 (định nghĩa đầy đủ). F01 Gupta et al. (2006) — đọc tóm tắt.",
    next: "Công thức trong giáo trình.",
  });

  // 6 textbook formula
  s = slide("Công thức của giáo trình: cộng dồn lợi nhuận từng năm, chiết khấu về hiện tại");
  box(s, 0.6, 1.95, 6.6, 2.4, TX);
  T(s, [{ text: "CLV = Σ", options: { bold: true } }, { text: " (r", options: {} }, { text: "t", options: { subscript: true } }, { text: " − e", options: {} }, { text: "t", options: { subscript: true } }, { text: ") / (1 + i)", options: {} }, { text: "t", options: { superscript: true } }], 0.7, 1.95, 6.4, 1.6, { fontSize: 28, color: NAVY, align: "center" });
  T(s, "t = 1 … n", 0.9, 3.45, 6.0, 0.7, { fontSize: 18, color: NAVY, align: "center" });
  const lg = [["rₜ", "doanh thu dự kiến từ khách hàng năm t"], ["eₜ", "chi phí dự kiến năm t (gồm chi phí phục vụ)"], ["i", "tỷ lệ chiết khấu (thường là lãi suất)"], ["n", "số năm của “vòng đời”"]];
  lg.forEach(([a, b], i) => { const y = 1.95 + i * 0.62; box(s, 7.5, y, 1.0, 0.52, YEL); T(s, a, 7.5, y, 1.0, 0.52, { align: "center", bold: true, color: NAVY, fontSize: 17 }); T(s, b, 8.65, y, 4.1, 0.52, { fontSize: 15 }); });
  box(s, 0.6, 4.6, 12.13, 1.6);
  T(s, [{ text: "Khác với lợi nhuận năm nay: ", options: { bold: true, color: YEL } }, { text: "CLV dùng dự báo tương lai — từ dữ liệu nội bộ, nhưng cả kế hoạch tăng trưởng, đầu tư của khách hàng và xu hướng ngành. Hiểu thế giới của khách hàng (Buổi 3) là đầu vào của CLV." }], 0.85, 4.6, 11.7, 1.6, { fontSize: 17 });
  src(s, "Nguồn: Marcos et al. (2018, tr. 197).", 6.45);
  notes(s, {
    say: "Công thức trong giáo trình: CLV bằng tổng, từ năm 1 đến năm n, của doanh thu dự kiến trừ chi phí dự kiến năm t, chia cho một cộng i mũ t. r t là doanh thu dự kiến; e t là chi phí dự kiến, gồm cả chi phí phục vụ; i là tỷ lệ chiết khấu, thường là lãi suất; n là số năm của vòng đời. Điểm khác với lợi nhuận năm nay: CLV dùng dự báo tương lai — không chỉ từ dữ liệu nội bộ, mà cả kế hoạch tăng trưởng, đầu tư của khách hàng và xu hướng ngành. Vì vậy hiểu thế giới của khách hàng ở Buổi 3 là đầu vào của CLV.",
    gv: "Đã đối chiếu Marcos et al. (2018, tr. 197): công thức và chú giải rt, et, i, t, n; đoạn “it is not the historical data but forecasts of future revenues and expenses that need to be analysed… new information that comes from the key customer (eg purchases forecast, growth plans…)”. Chữ r trong công thức sách là doanh thu (revenues) — không nhầm với r = tỷ lệ giữ chân ở slide sau.",
    next: "Môn dùng một dạng đơn giản hơn, thêm tỷ lệ giữ chân.",
  });

  // 7 course formula
  s = slide("Dạng dùng trên lớp: đóng góp ròng × khả năng còn giữ được khách, chiết khấu về hiện tại");
  box(s, 0.6, 1.95, 6.6, 2.4, TX);
  T(s, [{ text: "CLV ≈ Σ m × p", options: { bold: true } }, { text: "t−1", options: { superscript: true } }, { text: " / (1 + d)", options: {} }, { text: "t", options: { superscript: true } }], 0.7, 1.95, 6.4, 1.6, { fontSize: 28, color: NAVY, align: "center" });
  T(s, "t = 1 … T", 0.9, 3.45, 6.0, 0.7, { fontSize: 18, color: NAVY, align: "center" });
  const lg2 = [["m", "đóng góp ròng/năm = lợi nhuận gộp − cost-to-serve riêng"], ["p", "tỷ lệ giữ chân (khả năng tái ký mỗi năm); năm 1 coi như chắc chắn"], ["d", "tỷ lệ chiết khấu"], ["T", "số năm xem xét (ví dụ 5)"]];
  lg2.forEach(([a, b], i) => { const y = 1.95 + i * 0.62; box(s, 7.5, y, 1.0, 0.52, TEAL); T(s, a, 7.5, y, 1.0, 0.52, { align: "center", bold: true, color: NAVY, fontSize: 17 }); T(s, b, 8.65, y, 4.1, 0.52, { fontSize: 14 }); });
  box(s, 0.6, 4.6, 12.13, 1.6);
  T(s, [{ text: "Hai điểm khác: ", options: { bold: true, color: YEL } }, { text: "(1) tính trên đóng góp ròng, không trên doanh thu; (2) thêm tỷ lệ giữ chân — vì hợp đồng sự kiện ký từng năm, khách có thể không quay lại." }], 0.85, 4.6, 11.7, 1.6, { fontSize: 17 });
  src(s, "Dạng học tập của môn: m ≈ (rₜ − eₜ) của giáo trình, nhân thêm xác suất giữ chân (như các mô hình CLV trong Gupta et al., 2006). [VERIFY ký hiệu với F01]", 6.45);
  notes(s, {
    say: "Trên lớp ta dùng dạng đơn giản: CLV xấp xỉ tổng của m nhân p mũ t trừ 1, chia một cộng d mũ t. m là đóng góp ròng mỗi năm — lợi nhuận gộp trừ cost-to-serve riêng của khách hàng. p là tỷ lệ giữ chân — khả năng khách tái ký mỗi năm; năm 1 coi như chắc chắn. d là tỷ lệ chiết khấu. T là số năm xem xét, ví dụ 5. Hai điểm khác với tính doanh thu thông thường: một, tính trên đóng góp ròng, không trên doanh thu; hai, thêm tỷ lệ giữ chân — vì hợp đồng sự kiện thường ký từng năm, khách có thể không quay lại.",
    gv: "Quyết định GV 2 (28/9/2026): công thức đơn giản, [VERIFY] trước khi lên slide. Đã đối chiếu với công thức giáo trình (tr. 197): m tương ứng (rt − et) khi giả định doanh thu, chi phí không đổi; phần nhân p^(t−1) là kỳ vọng theo khả năng giữ chân — dạng thường gặp trong Gupta et al. (2006) [VERIFY ký hiệu với toàn văn F01]. Đổi ký hiệu r → p để không trùng với rt của giáo trình; phiếu S3 đang dùng chữ r — nhắc SV r trong phiếu = p trên slide.",
    next: "Tính An Phát cùng nhau.",
  });

  // 8 An Phát calc
  s = slide("CLV 5 năm của An Phát khoảng 926 triệu — dù doanh thu chỉ 2,3 tỷ/năm");
  T(s, "Doanh thu 2.300 · biên gộp 18% → lợi nhuận gộp 414 · cost-to-serve 80 → m = 334 · p = 85% · d = 12% · T = 5", 0.6, 1.85, 12.13, 0.55, { fontSize: 16, color: YEL, bold: true });
  table(s, 0.6, 2.45, [1.6, 5.4, 3.5], 0.5, ["Năm", "Tính", "Giá trị hiện tại (triệu)"], [
    { cells: ["1", "334 / 1,12", "298,2"] }, { cells: ["2", "334 × 0,85 / 1,12²", "226,3"] }, { cells: ["3", "334 × 0,85² / 1,12³", "171,8"] }, { cells: ["4", "334 × 0,85³ / 1,12⁴", "130,4"] }, { cells: ["5", "334 × 0,85⁴ / 1,12⁵", "98,9"] }, { cells: ["CLV", "", "≈ 926"], fill: TEAL, color: NAVY, bold: true }]);
  box(s, 11.3, 2.95, 1.43, 3.5, YEL);
  T(s, "Tính cùng lớp", 11.35, 2.95, 1.33, 3.5, { fontSize: 15, bold: true, color: NAVY, align: "center" });
  T(s, "(đơn vị: triệu đồng; số liệu giả định)", 8.7, 6.5, 4.03, 0.4, { fontSize: 12, color: MU, italic: true, align: "right" });
  notes(s, {
    say: "Tính cùng nhau, số liệu giả định. An Phát: doanh thu 2.300 triệu một năm; biên lợi nhuận gộp 18% — lợi nhuận gộp 414 triệu; cost-to-serve riêng 80 triệu; vậy m bằng 334 triệu. Tỷ lệ giữ chân 85%, chiết khấu 12%, 5 năm. Năm 1: 334 chia 1,12 — 298,2. Năm 2: 334 nhân 0,85, chia 1,12 bình phương — 226,3. Năm 3: 171,8. Năm 4: 130,4. Năm 5: 98,9. Cộng lại: khoảng 926 triệu.",
    gv: "Viết từng dòng lên bảng; cho SV bấm máy năm 2 và 3. Tính kiểm: 298,2 + 226,3 + 171,8 + 130,4 + 98,9 = 925,6 ≈ 926. Số khớp W06 lecture notes §1.3 và phiếu S3.",
    ask: "“Bạn nào bấm năm 3 nhanh nhất?”",
    next: "Nếu tỷ lệ giữ chân giảm thì sao?",
  });

  // 9 sensitivity
  s = slide("Tỷ lệ giữ chân giảm từ 85% xuống 70%, CLV mất khoảng 206 triệu");
  const yr = [[298.2, 298.2], [226.3, 186.4], [171.8, 116.5], [130.4, 72.8], [98.9, 45.5]];
  const base = 6.0, sc = 3.6 / 300;
  yr.forEach(([a, b], i) => { const x = 1.0 + i * 1.75; box(s, x, base - a * sc, 0.65, a * sc, TEAL, { rectRadius: 0.03 }); box(s, x + 0.7, base - b * sc, 0.65, b * sc, PINK, { rectRadius: 0.03 }); T(s, "Năm " + (i + 1), x, base + 0.05, 1.35, 0.4, { fontSize: 13, color: MU, align: "center" }); });
  T(s, [{ text: "■ ", options: { color: TEAL } }, { text: "p = 85%  " }, { text: "■ ", options: { color: PINK } }, { text: "p = 70%" }], 1.0, 1.9, 6.0, 0.45, { fontSize: 15 });
  box(s, 9.9, 1.95, 2.83, 2.1, TEAL); T(s, [{ text: "p = 85%", options: { breakLine: true, fontSize: 16 } }, { text: "≈ 926", options: { bold: true, fontSize: 30 } }], 9.9, 1.95, 2.83, 2.1, { align: "center", color: NAVY });
  box(s, 9.9, 4.2, 2.83, 2.1, PINK); T(s, [{ text: "p = 70%", options: { breakLine: true, fontSize: 16 } }, { text: "≈ 719", options: { bold: true, fontSize: 30 } }], 9.9, 4.2, 2.83, 2.1, { align: "center", color: NAVY });
  T(s, "Quan hệ tốt (Buổi 4) là tiền thật. (triệu đồng, giả định)", 0.6, 6.5, 9.0, 0.45, { fontSize: 15, bold: true, color: YEL });
  notes(s, {
    say: "Nếu tỷ lệ giữ chân của An Phát giảm từ 85% xuống 70%, mọi thứ khác giữ nguyên. Năm 1 không đổi. Năm 2 còn 186,4; năm 3 còn 116,5; năm 4 còn 72,8; năm 5 còn 45,5. CLV từ khoảng 926 xuống khoảng 719 triệu — mất khoảng 206 triệu, gần một phần tư. Không đổi giá, không đổi chi phí — chỉ đổi khả năng khách quay lại. Vì thế chất lượng quan hệ ở Buổi 4 là tiền thật.",
    gv: "Tính kiểm p = 70%: 298,2 + 186,4 + 116,5 + 72,8 + 45,5 = 719,4. Chênh lệch 925,6 − 719,4 = 206,2. Cột vẽ theo tỷ lệ.",
    next: "Một ca thật trong giáo trình: khách lãi nhất hôm nay, CLV thấp nhất.",
  });

  // 10 Construmart
  s = slide("Khách hàng lãi nhất năm nay có thể có CLV thấp nhất");
  table(s, 0.6, 1.9, [3.4, 2.8, 2.8], 0.75, ["Construmart (ẩn tên)", "Lợi nhuận 2017", "CLV 8 năm (NPV cộng dồn)"], [
    { cells: ["Nhà phân phối A", "500", "18.737"], color: TX }, { cells: ["Nhà phân phối B", "2.800", "9.311"], fill: PINK, color: NAVY }, { cells: ["Nhà phân phối C", "1.600", "12.044"] }]);
  box(s, 9.85, 1.95, 2.88, 4.35, YEL);
  T(s, "B lãi nhất năm nay — nhưng có CLV thấp nhất. A lãi ít nhất — nhưng có CLV cao nhất.", 10.05, 1.95, 2.5, 4.35, { fontSize: 18, bold: true, color: NAVY });
  T(s, "Đơn vị tiền tệ trong sách (£, $); lãi suất chiết khấu 10%.", 0.6, 5.25, 9.0, 0.45, { fontSize: 14, color: MU, italic: true });
  src(s, "Nguồn: Marcos et al. (2018, case study, Bảng 8.3a–8.3b, tr. 197–200).", 6.45);
  notes(s, {
    say: "Giáo trình kể ca Construmart — một nhà cung cấp vật liệu xây dựng, tên đã đổi — với ba nhà phân phối lớn. Giám đốc thương mại tính lợi nhuận năm 2017: B lãi nhất, 2.800; C 1.600; A chỉ 500. Kết luận hiển nhiên: đầu tư vào B? Nhưng khi tính CLV 8 năm, kết quả ngược lại: A có CLV cao nhất — khoảng 18.700; C khoảng 12.000; còn B thấp nhất — khoảng 9.300.",
    gv: "Đã đối chiếu Marcos et al. (2018), case study “Customer lifetime value of three key accounts” (tr. 197–200): Bảng 8.3a (profitability 2017: A 500, B 2.800, C 1.600) và Bảng 8.3b (cumulative NPV 2025: A 18.737; B 9.311; C 12.044; interest 10%). Đơn vị theo sách (£, $).",
    ask: "“Vì sao? Đoán trước khi xem slide sau.”",
    next: "Vì sao?",
  });

  // 11 why
  s = slide("Lý do nằm ở kế hoạch tương lai của khách hàng — không nằm trong số liệu quá khứ");
  const why = [["A", "Từ công ty khu vực thành công ty toàn quốc: mua lại doanh nghiệp nhỏ, tuyển người giỏi, xây hệ thống phân phối dựa trên công nghệ", TEAL], ["B", "Doanh nghiệp gia đình, quy mô vừa, không muốn đầu tư nâng cấp mô hình kinh doanh", PINK], ["C", "Tập trung một phân khúc ngách — sẽ rất có lãi, và là ứng viên tự nhiên cho hoạt động cùng tạo giá trị", YEL]];
  why.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.3; box(s, 0.6, y, 1.1, 1.1, c); T(s, k, 0.6, y, 1.1, 1.1, { align: "center", bold: true, fontSize: 28, color: NAVY }); box(s, 1.9, y, 10.83, 1.1); T(s, t, 2.1, y, 10.45, 1.1, { fontSize: 17 }); });
  box(s, 0.6, 5.95, 12.13, 0.7, BLUE);
  T(s, "Bài học: phân tích cả lợi nhuận quá khứ và lợi nhuận tương lai — “nhìn qua kính chắn gió, không chỉ gương chiếu hậu”.", 0.8, 5.95, 11.7, 0.7, { fontSize: 16, bold: true, color: NAVY });
  src(s, "Nguồn: Marcos et al. (2018, tr. 198, 200).", 6.7);
  notes(s, {
    say: "Lý do nằm ở kế hoạch tương lai của khách hàng. A đang chuyển từ công ty khu vực thành công ty toàn quốc: mua lại doanh nghiệp nhỏ, tuyển người giỏi, xây hệ thống phân phối dựa trên công nghệ. B là doanh nghiệp gia đình quy mô vừa, không muốn đầu tư nâng cấp. C tập trung một phân khúc ngách — sẽ rất có lãi, và là ứng viên tự nhiên để cùng tạo giá trị. Bài học: phân tích cả lợi nhuận quá khứ và lợi nhuận tương lai. Giáo trình gọi cách nhìn chỉ dựa vào quá khứ là nhìn gương chiếu hậu.",
    gv: "Đã đối chiếu Marcos et al. (2018, tr. 200): “Customer B (a family-owned, medium-sized local distributor) was not willing to invest… Customer A was planning to evolve from a regional player into a national one… Customer C planned to focus on a specific niche…”; tr. 198 “looking forward rather than using the ‘rear-view mirror’”. Nửa câu “kính chắn gió” là cách nói của người soạn.",
    next: "Nhưng CLV cũng có giới hạn.",
  });

  // 12 limits
  s = slide("CLV là ước lượng theo giả định — luôn ghi rõ giả định và thử độ nhạy");
  const lm = [["FaSlidersH", "Phụ thuộc giả định p, d, m → ghi rõ, thử vài kịch bản", TEAL], ["FaGem", "Không đo hết giá trị vô hình: uy tín, hồ sơ năng lực, học hỏi → ghi bên cạnh, không bỏ", YEL], ["FaCalendarAlt", "Dự báo xa thì kém chắc chắn → dùng 3–5 năm, cập nhật hằng năm", PINK]];
  for (let i = 0; i < 3; i++) { const y = 1.95 + i * 1.45; box(s, 0.6, y, 12.13, 1.25); await ic(s, lm[i][0], 0.85, y + 0.2, 0.85, lm[i][2]); T(s, lm[i][1], 1.95, y, 10.6, 1.25, { fontSize: 19 }); }
  notes(s, {
    say: "CLV là ước lượng theo giả định. Một: phụ thuộc giả định về tỷ lệ giữ chân, chiết khấu, đóng góp ròng — nên ghi rõ, và thử vài kịch bản. Hai: không đo hết giá trị vô hình — uy tín, hồ sơ năng lực, học hỏi mảng mới như với Bếp Việt; ghi bên cạnh, đừng bỏ. Ba: dự báo càng xa càng kém chắc chắn — dùng 3 đến 5 năm và cập nhật hằng năm.",
    gv: "W06 lecture notes §1.4. Ý thứ ba là nhận định của người soạn.",
    next: "Thực hành 1: tính CLV hai khách hàng khác.",
  });

  // 13 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: CLV của Sông Xanh và Bếp Việt", [["3’", "Tính m cho hai khách hàng: lợi nhuận gộp − cost-to-serve", TEAL], ["10’", "Chia đôi nhóm: một nửa tính CLV 5 năm Sông Xanh, một nửa Bếp Việt (bảng 5 dòng như slide 8)", YEL], ["7’", "Độ nhạy: Bếp Việt tăng p lên 85% thì sao? Viết 2 câu so sánh 3 khách hàng cho anh Đức — CEO Nova", PINK]], "FaCalculator", "Sản phẩm", "Hai bảng CLV + 2 câu kết luận cho CEO Nova", "Dùng m, không dùng doanh thu. Ghi rõ giả định.");
  notes(s, {
    say: "Thực hành 1, 20 phút. Ba phút: tính m cho Sông Xanh và Bếp Việt — lợi nhuận gộp trừ cost-to-serve. Mười phút: chia đôi nhóm, một nửa tính CLV 5 năm Sông Xanh, một nửa Bếp Việt, dùng bảng năm dòng như slide 8. Bảy phút: độ nhạy — nếu Bếp Việt tăng tỷ lệ giữ chân lên 85% nhờ quan hệ tốt thì CLV thay đổi thế nào; và viết hai câu so sánh ba khách hàng cho anh Đức, CEO Nova. Dùng m, không dùng doanh thu. Ghi rõ giả định.",
    gv: "Phiếu W06_activity_S3_tinh_clv.md (chữ r trong phiếu = p trên slide). Mốc phút 30–50. Đáp án: Sông Xanh m = 100, CLV ≈ 138; Bếp Việt m = 178, CLV ≈ 416; p = 85% → ≈ 493. Kết luận mẫu: doanh thu lớn nhất, CLV nhỏ nhất.",
    next: "Giải lao.",
  });

  // 14 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 50–58. Trước giải lao, gọi 1 nhóm đọc kết quả Sông Xanh (≈138 triệu) để cả lớp thấy sự tương phản.", next: "Sau giải lao: phục vụ tốn bao nhiêu." });

  // 15 question
  s = await L.question("Chi phí không ai ghi hóa đơn", "Phục vụ khách hàng nào làm Nova tốn công nhất?", "FaReceipt", ORA, "Đề cương 6.2: cost-to-serve");
  notes(s, { say: "Sau giải lao. Phục vụ khách hàng nào làm Nova tốn công nhất? Không phải chi phí làm sự kiện — mà chi phí để phục vụ chính khách hàng đó.", ask: "“Kể một khách hàng ‘tốn công’ bạn từng gặp — tốn ở đâu?”", next: "Doanh số cao chưa chắc lợi nhuận cao." });

  // 16 Shapiro
  s = slide("Doanh số cao không có nghĩa là lợi nhuận cao");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaChartBar", 0.9, 2.2, 1.0, BLUE);
  T(s, "Shapiro, Rangan, Moriarty & Ross (1987)", 2.1, 2.2, 5.6, 1.0, { bold: true, fontSize: 18, color: BLUE });
  T(s, "Lợi nhuận trên từng đơn hàng, từng khách hàng khác nhau rất lớn — nhiều khi quản lý không hiểu vì sao. Hai nguyên nhân: giá thực nhận khác nhau, và chi phí phục vụ khác nhau.", 0.9, 3.4, 6.7, 2.7, { fontSize: 18, valign: "top" });
  box(s, 8.2, 1.95, 4.53, 4.3, YEL);
  T(s, "Tên bài: “Manage customers for profits (not just sales)”", 8.45, 1.95, 4.05, 4.3, { fontSize: 20, bold: true, color: NAVY });
  src(s, "Nguồn: Shapiro et al. (1987), Harvard Business Review, 65(5).", 6.45);
  notes(s, {
    say: "Shapiro và cộng sự, 1987, trên Harvard Business Review: lợi nhuận trên từng đơn hàng, từng khách hàng khác nhau rất lớn — và nhiều khi quản lý không hiểu vì sao. Hai nguyên nhân: giá thực nhận khác nhau, và chi phí phục vụ khác nhau. Tên bài nói hết: quản trị khách hàng vì lợi nhuận, không chỉ vì doanh số.",
    gv: "F03 — đã đọc tóm tắt/trang HBR khi soạn tư liệu.",
    next: "Cost to serve là gì?",
  });

  // 17 cost to serve definition
  s = slide("Cost to serve là chi phí phục vụ, quản trị quan hệ với một khách hàng — và nó phụ thuộc hành vi của khách");
  defCards(s, [
    ["Marcos et al. (2018)", TEAL, "Định lượng chi phí gắn với việc phục vụ, quản trị quan hệ khách hàng hằng ngày: thăm khách, soạn tài liệu, trả lời yêu cầu, xử lý khiếu nại, mời lãnh đạo cấp cao gặp khách…", "(tr. 210; gợi ý dùng activity-based costing)"],
    ["Guerreiro et al. (dẫn Kaplan)", YEL, "Doanh nghiệp thường biết rõ chi phí làm ra sản phẩm nhưng ít biết chi phí phục vụ khách hàng; chi phí phục vụ phụ thuộc hành vi của khách hàng.", "(F05, dẫn Kaplan & Narayanan, 2001)"],
    ["“Whale curve”", PINK, "Nghiên cứu Kanthal (Kaplan, 1989): 20% khách hàng tạo 225% tổng lợi nhuận; 10% khách hàng gây lỗ bằng 125% tổng lợi nhuận.", "(dẫn lại qua F05 — chưa kiểm chứng chéo)"],
  ], "Tổng hợp: cùng một doanh thu, khách hàng khác nhau “ăn” lợi nhuận khác nhau — vì cách họ làm việc với agency.", 15);
  notes(s, {
    say: "Giáo trình: cost to serve là định lượng chi phí gắn với việc phục vụ, quản trị quan hệ khách hàng hằng ngày — thăm khách, soạn tài liệu, trả lời yêu cầu, xử lý khiếu nại, mời lãnh đạo cấp cao gặp khách; có thể dùng phương pháp tính chi phí theo hoạt động. Guerreiro và cộng sự, dẫn Kaplan: doanh nghiệp thường biết rõ chi phí làm ra sản phẩm nhưng ít biết chi phí phục vụ khách hàng — và chi phí đó phụ thuộc hành vi của khách. Một con số hay được dẫn — chưa kiểm chứng chéo: ở công ty Kanthal, 20% khách hàng tạo ra 225% tổng lợi nhuận, còn 10% khách hàng gây lỗ bằng 125% tổng lợi nhuận — đường cong “cá voi”.",
    gv: "Đã đối chiếu Marcos et al. (2018, tr. 210) “Cost to serve” và hộp trích dẫn (“effective KAM can significantly reduce the cost to serve by virtue of learning how the customer’s business really works”). F05: bài hội thảo, tin cậy trung bình; whale curve dẫn lại — ghi “chưa kiểm chứng chéo” khi nói.",
    next: "Chi phí phục vụ nằm ở ba giai đoạn.",
  });

  // 18 Table 8.1 three stages
  s = slide("Chi phí phục vụ nằm ở cả ba giai đoạn: trước bán, trong bán, sau bán");
  const st = [["Trước bán", "Hiểu nhu cầu, phân tích, thiết kế giải pháp, trình bày, theo đuổi đến khi ký", ["Quy trình mua dài, nhiều vòng, nhiều người", "Khách đòi lãnh đạo cấp cao có mặt khi đàm phán"], TEAL], ["Trong bán", "Sản xuất, lưu kho, xử lý đơn, giao hàng gắn với dịch vụ đã bán", ["Yêu cầu riêng, đặc tả riêng", "Điều kiện giao, thời điểm riêng → chi phí tài chính"], YEL], ["Sau bán", "Hỗ trợ kỹ thuật, đào tạo, triển khai, điều chỉnh đề nghị ban đầu", ["Khách cần giám sát, tư vấn sát khi triển khai", "Điều chỉnh cho nhiều địa điểm"], PINK]];
  st.forEach(([a, b, items, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 0.7, c); T(s, a, x + 0.2, 1.95, 3.5, 0.7, { bold: true, fontSize: 20, color: NAVY }); box(s, x, 2.75, 3.9, 3.55); T(s, b, x + 0.2, 2.85, 3.5, 1.2, { fontSize: 15, valign: "top", color: MU }); T(s, "Vì sao khác nhau giữa các khách:", x + 0.2, 4.0, 3.5, 0.45, { fontSize: 14, bold: true, color: c }); T(s, bullets(items), x + 0.2, 4.45, 3.5, 1.8, { fontSize: 14, valign: "top", paraSpaceAfter: 4 }); });
  src(s, "Nguồn: Marcos et al. (2018, Bảng 8.1, tr. 195), rút gọn.", 6.45);
  notes(s, {
    say: "Giáo trình chia chi phí liên quan đến một key account thành ba giai đoạn. Trước bán: hiểu nhu cầu, phân tích, thiết kế giải pháp, trình bày, theo đuổi đến khi ký — khác nhau vì có khách có quy trình mua dài, nhiều vòng, nhiều người, hay đòi lãnh đạo cấp cao của nhà cung cấp có mặt. Trong bán: chi phí gắn với việc giao dịch vụ đã bán — khác nhau vì yêu cầu riêng, điều kiện giao riêng. Sau bán: hỗ trợ, đào tạo, triển khai, điều chỉnh — khác nhau vì có khách cần giám sát, tư vấn sát, hay triển khai ở nhiều địa điểm.",
    gv: "Đã đối chiếu Marcos et al. (2018), Bảng 8.1 “Costs involved in KAM” (tr. 195) — bản gốc cho doanh nghiệp sản xuất (production, storage…); slide rút gọn và giữ các nguồn biến động áp dụng được cho dịch vụ.",
    next: "Với agency sự kiện, chi phí phục vụ ẩn ở đâu?",
  });

  // 19 agency six costs
  s = slide("Agency sự kiện có sáu loại chi phí phục vụ ẩn — không nằm trong báo giá");
  const ac = [["Giờ đội KAM, số buổi họp", "FaUserClock", TEAL], ["Sửa concept nhiều vòng: 2 hay 6 vòng", "FaRedo", YEL], ["Phát sinh ngoài phạm vi không tính tiền (scope creep)", "FaPlusCircle", ORA], ["Chi phí vốn do trả chậm, trong khi phải đặt cọc nhà cung cấp", "FaMoneyBillWave", PINK], ["Đấu thầu lại mỗi năm: đề xuất, pitch", "FaFileSignature", BLUE], ["Nhân sự cấp cao phải có mặt", "FaUserTie", PUR]];
  for (let i = 0; i < 6; i++) { const x = 0.6 + (i % 2) * 6.13, y = 1.95 + Math.floor(i / 2) * 1.45; box(s, x, y, 5.9, 1.25); await ic(s, ac[i][1], x + 0.2, y + 0.2, 0.85, ac[i][2], ac[i][2] === PUR ? TX : NAVY); T(s, ac[i][0], x + 1.25, y, 4.5, 1.25, { fontSize: 17 }); }
  src(s, "Nhận định của môn (quyết định GV 4, 28/9/2026), xếp theo trước bán – trong bán – sau bán của Marcos et al. (2018, Bảng 8.1).", 6.45);
  notes(s, {
    say: "Với agency sự kiện, sáu loại chi phí phục vụ ẩn — không nằm trong báo giá. Một: giờ làm việc của đội KAM, số buổi họp. Hai: sửa concept nhiều vòng — hai vòng hay sáu vòng. Ba: phát sinh ngoài phạm vi không tính tiền — scope creep, như ca Drakeley ở Buổi 2. Bốn: chi phí vốn do khách trả chậm, trong khi agency phải đặt cọc nhà cung cấp trước. Năm: đấu thầu lại mỗi năm — làm đề xuất, pitch. Sáu: nhân sự cấp cao phải có mặt.",
    gv: "W06 lecture notes §2.3 — nhận định đã duyệt. Đặt cọc nhà cung cấp nối Buổi 7 (back-to-back) và Buổi 10.",
    next: "Tính thử một loại: chi phí vốn do trả chậm.",
  });

  // 20 quick calc
  s = slide("Sông Xanh trả sau 90 ngày: Nova tốn khoảng 104 triệu chi phí vốn mỗi năm");
  box(s, 0.6, 1.95, 7.6, 2.3, TX);
  T(s, "3.500 × 12% × 90 / 365 ≈ 104 triệu", 0.8, 1.95, 7.2, 2.3, { fontSize: 32, bold: true, color: NAVY, align: "center" });
  const cl = [["3.500", "doanh thu/năm (triệu)"], ["12%", "chi phí vốn/năm"], ["90/365", "thời gian Nova “cho vay”"]];
  cl.forEach(([a, b], i) => { const x = 0.6 + i * 2.6; box(s, x, 4.45, 2.4, 1.8); T(s, a, x, 4.55, 2.4, 0.8, { fontSize: 24, bold: true, color: YEL, align: "center" }); T(s, b, x + 0.1, 5.35, 2.2, 0.8, { fontSize: 14, color: MU, align: "center", valign: "top" }); });
  box(s, 8.5, 1.95, 4.23, 4.3, PINK);
  T(s, "Gần một phần ba lợi nhuận gộp của Sông Xanh (350 triệu) — chỉ vì thời hạn thanh toán.", 8.75, 1.95, 3.75, 4.3, { fontSize: 20, bold: true, color: NAVY });
  T(s, "(giả định)", 0.6, 6.4, 3.0, 0.4, { fontSize: 13, color: MU, italic: true });
  notes(s, {
    say: "Tính nhanh, giả định. Sông Xanh trả sau 90 ngày trên doanh thu 3.500 triệu; chi phí vốn của Nova 12% một năm. 3.500 nhân 12% nhân 90 trên 365 — khoảng 104 triệu mỗi năm. Đó là gần một phần ba lợi nhuận gộp của Sông Xanh — 350 triệu — chỉ vì thời hạn thanh toán. Nhớ McMillan và Woodruff ở Buổi 4: “tín dụng” là giá trị của quan hệ — nhưng nó có giá.",
    gv: "Tính kiểm: 3.500 × 0,12 × 90/365 = 103,6. Lợi nhuận gộp Sông Xanh = 3.500 × 10% = 350; 104/350 ≈ 30%. Khớp phiếu S3 (thành phần cost-to-serve của Sông Xanh).",
    next: "Agency trên thế giới cũng gặp chuyện này.",
  });

  // 21 F07
  s = slide("Agency ở nhiều nơi cùng gặp trả chậm và phát sinh ngoài phạm vi");
  const st2 = [["97%", "lãnh đạo agency gặp khách trả chậm", PINK], ["57%", "mất 1.000–5.000 USD/tháng do scope creep", ORA], ["16%", "yêu cầu khách trả đủ trước", TEAL]];
  st2.forEach(([a, b, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.4); T(s, a, x, 2.15, 3.9, 1.4, { fontSize: 54, bold: true, color: c, align: "center" }); T(s, b, x + 0.25, 3.6, 3.4, 1.5, { fontSize: 17, align: "center", valign: "top" }); });
  box(s, 0.6, 5.55, 12.13, 0.75, CARD);
  T(s, "Khảo sát 273 lãnh đạo agency ở Mỹ — không phải agency sự kiện, không phải Việt Nam. Chỉ minh họa xu hướng.", 0.85, 5.55, 11.7, 0.75, { fontSize: 15, color: YEL });
  src(s, "Nguồn: F07 = S19 (tư liệu Buổi 7). Chưa kiểm chứng chéo.", 6.5);
  notes(s, {
    say: "Minh họa quốc tế — chưa kiểm chứng chéo. Một khảo sát 273 lãnh đạo agency ở Mỹ: 97% gặp khách trả chậm; 57% mất 1.000 đến 5.000 đô la mỗi tháng do scope creep; chỉ 16% yêu cầu khách trả đủ trước. Nói rõ: đây không phải agency sự kiện, không phải Việt Nam — chỉ minh họa xu hướng.",
    gv: "F07/S19 — số liệu một nguồn, “chưa kiểm chứng chéo”. Không có số liệu công khai về cost-to-serve của event agency Việt Nam (tư liệu Buổi 6, mục 5).",
    next: "Cùng một mức lãi có thể đến từ hai câu chuyện rất khác.",
  });

  // 22 M vs Z
  s = slide("Cùng lãi 500, hai khách hàng kể hai câu chuyện khác nhau");
  table(s, 0.6, 1.9, [3.6, 2.2, 2.2], 0.48, ["Phân tích lợi nhuận", "Khách M", "Khách Z"], [
    { cells: ["Doanh thu sản phẩm", "15.000", "10.200"] }, { cells: ["Doanh thu dịch vụ", "0", "1.000"] }, { cells: ["Lợi nhuận gộp", "4.200", "4.450"] }, { cells: ["Chi phí trước bán", "2.300", "1.450"], fill: TEAL, color: NAVY }, { cells: ["Chi phí sau bán", "1.400", "2.500"], fill: PINK, color: NAVY }, { cells: ["Lợi nhuận", "500", "500"], bold: true }]);
  box(s, 8.85, 1.95, 3.88, 4.4);
  T(s, "Câu hỏi đúng", 9.05, 2.05, 3.5, 0.5, { fontSize: 17, bold: true, color: YEL });
  T(s, bullets(["M: tăng biên được không, hay giảm chi phí trước bán?", "Z: bán thêm dịch vụ được không, mà làm hậu mãi hiệu quả hơn?"]), 9.05, 2.6, 3.5, 3.6, { fontSize: 16, valign: "top", paraSpaceAfter: 10 });
  src(s, "Nguồn: Marcos et al. (2018, Bảng 8.2, tr. 196), rút gọn.", 6.5);
  notes(s, {
    say: "Giáo trình đưa hai khách hàng M và Z, cùng mang lại lợi nhuận 500. Nhưng M bán khối lượng lớn, biên thấp, tốn nhiều công trước bán. Z mua ít hơn, biên cao hơn, có thêm dịch vụ, và tốn nhiều công sau bán. Cùng con số cuối, nhưng câu hỏi quản trị khác nhau. Với M: tăng biên được không, hay làm khâu trước bán hiệu quả hơn? Với Z: bán thêm dịch vụ được không, mà làm hậu mãi hiệu quả hơn?",
    gv: "Đã đối chiếu Marcos et al. (2018), Bảng 8.2 “Example of profitability analysis for two customers” và đoạn giải thích (tr. 196): biên đóng góp M 28%, Z 41%. Slide rút bớt các dòng khối lượng, đơn giá, giá vốn.",
    next: "Kiểm tra nhanh với năm khách hàng của Nova.",
  });

  // 23 vote
  s = slide("Giơ 1–4 ngón: MediPharm nằm ở ô nào?");
  box(s, 0.6, 1.95, 7.2, 3.6);
  await ic(s, "FaPills", 0.9, 2.25, 1.0, BLUE);
  T(s, "MediPharm: doanh thu 1.200 triệu · biên gộp 28% · cost-to-serve 120 triệu (10% doanh thu) — tuân thủ khắt khe, nhiều vòng duyệt pháp chế.", 2.15, 2.15, 5.45, 3.0, { fontSize: 18, valign: "top" });
  T(s, "Ngưỡng: biên 15% · cost-to-serve/doanh thu 5% (giả định)", 0.9, 5.05, 6.8, 0.4, { fontSize: 13, color: MU, italic: true });
  [["1", "Biên cao · chi phí thấp", TEAL], ["2", "Biên cao · chi phí cao", YEL], ["3", "Biên thấp · chi phí thấp", BLUE], ["4", "Biên thấp · chi phí cao", PINK]].forEach(([k, t, c], i) => { num(s, k, 8.2, 1.95 + i * 0.9, 0.72, c, 18); box(s, 9.1, 1.95 + i * 0.9, 3.63, 0.72); T(s, t, 9.3, 1.95 + i * 0.9, 3.3, 0.72, { fontSize: 16, bold: true }); });
  notes(s, {
    say: "Năm khách hàng của Nova, giả định. MediPharm: doanh thu 1.200 triệu, biên lợi nhuận gộp 28%, cost-to-serve 120 triệu — 10% doanh thu — vì tuân thủ khắt khe, nhiều vòng duyệt pháp chế. Ngưỡng chia ô: biên 15%, cost-to-serve trên doanh thu 5%. MediPharm nằm ở ô nào? Giơ một đến bốn ngón.",
    gv: "Đáp án: 2 — biên cao, chi phí cao (28% > 15%; 10% > 5%).",
    ask: "Giơ 1–4 ngón.",
    next: "Đáp án — và tên các ô.",
  });

  // 24 matrix
  s = slide("Ma trận biên lợi nhuận gộp × cost-to-serve: bốn ô, bốn hướng hành động");
  const mx = [["Passive", "Lợi nhất — giữ gìn, đầu tư quan hệ", "Bright Future · An Phát", TEAL, 0, 0], ["Carriage trade", "Lãi nếu giá bù được chi phí — kiểm soát chi phí phục vụ", "MediPharm", YEL, 1, 0], ["Bargain basement", "Phục vụ chuẩn hóa, hiệu quả", "—", BLUE, 0, 1], ["Aggressive", "Nguy cơ lỗ — cùng khách giảm chi phí, điều chỉnh phạm vi, giá", "Sông Xanh", PINK, 1, 1]];
  mx.forEach(([a, b, c, col, cx, cy]) => { const x = 1.6 + cx * 5.6, y = 1.95 + cy * 2.15; box(s, x, y, 5.4, 1.95, col); T(s, a, x + 0.2, y + 0.1, 5.0, 0.55, { bold: true, fontSize: 20, color: NAVY }); T(s, b, x + 0.2, y + 0.65, 5.0, 0.75, { fontSize: 15, color: NAVY, valign: "top" }); T(s, c, x + 0.2, y + 1.4, 5.0, 0.45, { fontSize: 14, bold: true, italic: true, color: NAVY }); });
  T(s, "Biên cao", 0.45, 2.4, 1.1, 0.9, { fontSize: 13, color: MU, align: "center" });
  T(s, "Biên thấp", 0.45, 4.55, 1.1, 0.9, { fontSize: 13, color: MU, align: "center" });
  T(s, "Cost-to-serve thấp", 1.6, 6.15, 5.4, 0.4, { fontSize: 13, color: MU, align: "center" });
  T(s, "Cost-to-serve cao", 7.2, 6.15, 5.4, 0.4, { fontSize: 13, color: MU, align: "center" });
  src(s, "Biến thể của môn từ Shapiro et al. (1987) — trục dọc là biên lợi nhuận gộp thay cho giá thực nhận; Ang & Taylor (2005). Tên ô [VERIFY]. Bếp Việt: biên 16%, chi phí 6,1% — sát ranh giới.", 6.55);
  notes(s, {
    say: "Đáp án: MediPharm ở ô biên cao, chi phí cao. Ma trận này là biến thể của môn từ Shapiro và cộng sự, 1987: trục ngang là cost-to-serve, trục dọc là biên lợi nhuận gộp. Bốn ô. Passive — biên cao, chi phí thấp: lợi nhất; giữ gìn, đầu tư quan hệ — Bright Future, An Phát. Carriage trade — biên cao, chi phí cao: lãi nếu giá bù được chi phí; kiểm soát chi phí phục vụ — MediPharm. Bargain basement — biên thấp, chi phí thấp: phục vụ chuẩn hóa, hiệu quả. Aggressive — biên thấp, chi phí cao: nguy cơ lỗ; cùng khách giảm chi phí, điều chỉnh phạm vi, giá — Sông Xanh. Bếp Việt nằm sát ranh giới.",
    gv: "Quyết định GV 3: ma trận Shapiro et al. (1987), trục dọc = biên lợi nhuận gộp, ghi rõ là biến thể của môn; tên bốn ô theo nguồn thứ cấp [VERIFY]. Đặt khách theo dữ liệu phiếu S6: An Phát 18%/3,5%; Bright Future 20%/3,3%; MediPharm 28%/10%; Sông Xanh 10%/7,1%; Bếp Việt 16%/6,1% (trên ngưỡng biên, trên ngưỡng chi phí → về số là Carriage trade, nhưng sát ranh giới). Ang & Taylor (2005): ma trận Shapiro là mô hình đầu tiên gần với lợi nhuận khách hàng. [NEEDS PROFESSOR INPUT: tên gốc “Gross margin matrix” trong đề cương.]",
    next: "Giáo trình thêm một góc nhìn: công bằng cho cả hai.",
  });

  // 25 Fig 8.6 fair zone
  s = slide("Quan hệ bền khi nằm trong “vùng công bằng”: giá khách trả tương xứng với chi phí phục vụ");
  box(s, 1.6, 1.95, 5.6, 4.3, CARD);
  s.addShape(L.pres.shapes.LINE, { x: 1.6, y: 1.95, w: 5.6, h: 4.3, flipV: true, line: { color: YEL, width: 34, transparency: 40 } });
  T(s, "Có lợi cho agency", 1.8, 2.05, 2.6, 0.9, { fontSize: 15, bold: true, color: TEAL });
  T(s, "Có lợi cho khách hàng", 4.6, 5.2, 2.5, 0.9, { fontSize: 15, bold: true, color: PINK, align: "right" });
  T(s, "Vùng công bằng", 3.2, 3.75, 2.4, 0.5, { fontSize: 15, bold: true, color: NAVY, rotate: -37, align: "center" });
  T(s, "Giá trung bình khách trả →", -0.55, 3.88, 3.7, 0.45, { fontSize: 13, color: MU, rotate: 270, align: "center" });
  T(s, "Chi phí phục vụ khách →", 1.6, 6.3, 5.6, 0.4, { fontSize: 13, color: MU, align: "center" });
  box(s, 7.5, 1.95, 5.23, 4.3);
  T(s, bullets(["Góc trên trái: giá cao, phục vụ ít tốn — agency được lợi", "Góc dưới phải: giá thấp, phục vụ rất tốn — khách được lợi", "Đường chéo: cả hai cùng có lợi", "Lệch xa đường chéo = dấu hiệu mất cân bằng quyền lực"]), 7.75, 2.1, 4.8, 4.0, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  src(s, "Nguồn: Marcos et al. (2018, Hình 8.6, tr. 210–211). Đề cương 6.2: “bilateral benefits and fair relationships”.", 6.7);
  notes(s, {
    say: "Giáo trình thêm một góc nhìn — gần nhất với chữ “công bằng” trong đề cương. Trục ngang: chi phí phục vụ khách hàng. Trục dọc: giá trung bình khách trả. Góc trên trái — giá cao, phục vụ ít tốn — agency được lợi. Góc dưới phải — giá thấp, phục vụ rất tốn — khách được lợi. Dải chéo ở giữa là vùng công bằng, cả hai cùng có lợi. Lệch xa đường chéo là dấu hiệu mất cân bằng quyền lực — nhớ sáu kiểu quan hệ ở Buổi 4. Giả định của giáo trình: quan hệ key account dễ kéo dài và phát triển hơn khi cả hai bên cùng được lợi một cách công bằng.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 8.6 “The cost to serve vs average price analysis” (tr. 211) và đoạn tr. 210–211: “such an approach may help to uncover a situation of power imbalance… to move towards a fair distribution of financial costs and benefits”; “key account relationships are more likely to last and grow when both parties benefit from them in a fair way”. Đây là nguồn trực tiếp cho “ensuring bilateral benefits and fair relationships” của đề cương 6.2.",
    next: "Vậy làm gì với khách hàng ở ô bất lợi?",
  });

  // 26 do not sell unprofitably, but reduce with customer
  s = slide("Không bán lỗ cho khách hàng nào — nhưng giảm chi phí phục vụ cùng khách hàng, không ép khách");
  box(s, 0.6, 1.95, 5.6, 2.3, YEL);
  T(s, "“We do not sell unprofitably to any customer. We analyze our cost-to-serve customer figures to be sure of this.”", 0.85, 2.0, 5.1, 1.8, { fontSize: 17, italic: true, bold: true, color: NAVY, valign: "top" });
  T(s, "— câu tự đánh giá trong bài của McDonald (SAMA)", 0.85, 3.75, 5.1, 0.45, { fontSize: 13, color: NAVY });
  box(s, 0.6, 4.4, 5.6, 1.85, CARD);
  T(s, "Giáo trình: KAM tốt tự nó giảm chi phí phục vụ — vì agency hiểu khách hơn, bán cho cùng những người, cùng một chỗ.", 0.85, 4.4, 5.1, 1.85, { fontSize: 16 });
  T(s, "Giảm chi phí phục vụ cùng khách hàng", 6.5, 1.95, 6.23, 0.5, { fontSize: 18, bold: true, color: TEAL });
  const rd = [["Lịch duyệt rõ, giới hạn số vòng sửa", "FaCalendarCheck"], ["Gộp sự kiện thành hợp đồng năm", "FaLayerGroup"], ["Thanh toán theo tiến độ", "FaMoneyCheckAlt"], ["Phạm vi viết rõ; phát sinh có quy trình", "FaFileContract"]];
  for (let i = 0; i < 4; i++) { const y = 2.55 + i * 0.95; box(s, 6.5, y, 6.23, 0.8); await ic(s, rd[i][1], 6.65, y + 0.1, 0.6, TEAL); T(s, rd[i][0], 7.4, y, 5.2, 0.8, { fontSize: 16 }); }
  src(s, "Nguồn: McDonald (n.d.), SAMA (F06); Marcos et al. (2018, tr. 210). Ví dụ hành động: nhận định của môn.", 6.45);
  notes(s, {
    say: "McDonald, trong một bảng tự đánh giá: chúng tôi không bán lỗ cho khách hàng nào — chúng tôi phân tích chi phí phục vụ từng khách để chắc chắn điều đó. Nhưng không có nghĩa là ép khách. Giáo trình dẫn một chuyên gia: KAM tốt tự nó giảm chi phí phục vụ — vì agency hiểu khách hơn, bán cho cùng những người, cùng một chỗ. Nhiều chi phí phục vụ giảm được khi cùng khách thay đổi cách làm: lịch duyệt rõ, giới hạn số vòng sửa; gộp sự kiện thành hợp đồng năm; thanh toán theo tiến độ; phạm vi viết rõ, phát sinh có quy trình. Công bằng là khi cả hai cùng thấy quan hệ đáng giữ.",
    gv: "F06 — câu McDonald trong bảng tự đánh giá (Z05, Buổi 13). Marcos et al. (2018, tr. 210), hộp “Cost to serve: an important metric and a consequence of good KAM”. Quyết định GV 5 (thông điệp bilateral).",
    next: "Ba lỗi thường gặp.",
  });

  // 27 errors
  s = slide("Ba lỗi khi làm tài chính khách hàng");
  const er = ["Xếp hạng khách theo doanh thu, không theo đóng góp ròng", "Chỉ nhìn lợi nhuận năm nay, quên kế hoạch tương lai của khách", "Thấy khách lỗ là tăng giá hoặc bỏ — không ngồi lại cùng khách"];
  for (let i = 0; i < 3; i++) { const y = 2.0 + i * 1.25; box(s, 0.6, y, 7.6, 1.05); await ic(s, "FaTimes", 0.8, y + 0.2, 0.65, PINK); T(s, er[i], 1.65, y, 6.45, 1.05, { fontSize: 17 }); }
  box(s, 8.5, 2.0, 4.23, 3.55, YEL);
  T(s, "Doanh thu là con số của khách; CLV là con số của quan hệ.", 8.75, 2.0, 3.75, 3.55, { fontSize: 22, bold: true, color: NAVY });
  notes(s, {
    say: "Ba lỗi. Một: xếp hạng khách theo doanh thu, không theo đóng góp ròng — Sông Xanh trông như khách tốt nhất. Hai: chỉ nhìn lợi nhuận năm nay, quên kế hoạch tương lai của khách — như Construmart suýt đầu tư vào B. Ba: thấy khách lỗ là tăng giá hoặc bỏ — không ngồi lại cùng khách. Doanh thu là con số của khách; CLV là con số của quan hệ.",
    gv: "Câu chốt là của người soạn.",
    next: "Một lưu ý đạo đức.",
  });

  // 28 ethics
  s = slide("Minh bạch chi phí với khách hàng — không “thu lại” bằng phát sinh ngầm");
  box(s, 0.6, 1.95, 6.0, 3.6);
  await ic(s, "FaCheck", 0.85, 2.2, 0.85, TEAL);
  T(s, "Nên", 1.9, 2.2, 4.5, 0.85, { bold: true, fontSize: 20, color: TEAL });
  T(s, bullets(["Nói rõ phần nào trong giá, phần nào phát sinh", "Đưa số liệu chi phí phục vụ khi đề nghị đổi cách làm", "Giữ bí mật số liệu tài chính của khách"]), 0.9, 3.2, 5.5, 2.2, { fontSize: 17, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.85, 1.95, 5.88, 3.6);
  await ic(s, "FaTimes", 7.1, 2.2, 0.85, PINK);
  T(s, "Không", 8.15, 2.2, 4.4, 0.85, { bold: true, fontSize: 20, color: PINK });
  T(s, bullets(["Bù lỗ bằng cách cắt chất lượng mà không báo", "Đội giá phát sinh vì khách “không biết giá”", "Ưu ái khách CLV cao bằng cách làm ẩu cho khách khác"]), 7.15, 3.2, 5.4, 2.2, { fontSize: 17, valign: "top", paraSpaceAfter: 6 });
  T(s, "Phân hạng khách để phân bổ nguồn lực — không phải để đối xử thiếu chuyên nghiệp với ai.", 0.6, 5.85, 12.13, 0.6, { fontSize: 18, bold: true, color: YEL });
  notes(s, {
    say: "Tài chính khách hàng dễ bị dùng sai. Nên: nói rõ phần nào trong giá, phần nào là phát sinh; đưa số liệu chi phí phục vụ khi đề nghị khách đổi cách làm; giữ bí mật số liệu tài chính của khách. Không: bù lỗ bằng cách cắt chất lượng mà không báo; đội giá phát sinh vì khách không biết giá; ưu ái khách có CLV cao bằng cách làm ẩu cho khách khác. Phân hạng khách là để phân bổ nguồn lực — không phải để đối xử thiếu chuyên nghiệp với ai.",
    gv: "Nối CLO8 và Buổi 4 (ethical interaction capability, Buổi 5). Nguyên tắc nghề nghiệp, không phải quy định pháp lý.",
    next: "Thực hành 2: ma trận cho năm khách hàng.",
  });

  // 29 practice 2
  s = await L.practice("Thực hành 2 · 30 phút: ma trận năm khách hàng và hành động hai bên cùng lợi", [["3’", "Đọc bảng 5 khách hàng; ngưỡng biên 15%, cost-to-serve/doanh thu 5%", TEAL], ["13’", "A1: đặt 5 khách lên ma trận (chấm to theo doanh thu); chọn 2 khách ở ô bất lợi, mỗi khách 1 hành động bàn cùng khách: Nova được gì · khách được gì", YEL], ["8’", "Xoay trạm: vòng 1 vai anh Đức (CEO Nova) — 1 câu hỏi về lợi nhuận; vòng 2 vai anh Khoa (An Phát) — 1 lo ngại về công bằng", PINK], ["6’", "Về bàn, sửa một hành động; GV chốt", BLUE]], "FaThLarge", "Sản phẩm", "Ma trận A1 + 2 hành động hai bên cùng lợi", "Mục tiêu không phải “cắt khách lỗ” mà tìm hành động cả hai cùng thấy hợp lý.", YEL);
  notes(s, {
    say: "Thực hành 2, 30 phút. Ba phút: đọc bảng năm khách hàng; ngưỡng biên 15%, cost-to-serve trên doanh thu 5%. Mười ba phút: trên A1, đặt năm khách lên ma trận, chấm to theo doanh thu; chọn hai khách ở ô bất lợi, mỗi khách một hành động Nova bàn cùng khách — Nova được gì, khách được gì. Tám phút: xoay trạm hai vòng — vòng một đóng vai anh Đức, CEO Nova, để lại một câu hỏi về lợi nhuận; vòng hai đóng vai anh Khoa của An Phát, để lại một lo ngại: đề xuất này có công bằng với khách không. Sáu phút: về bàn sửa một hành động. Mục tiêu không phải cắt khách lỗ, mà tìm hành động cả hai cùng thấy hợp lý.",
    gv: "Phiếu W06_activity_S6_ma_tran_cost_to_serve.md. Mốc phút 93–123. Chiếu slide 24 (ma trận) và 25 (vùng công bằng).",
    next: "Tổng hợp.",
  });

  // 30 summary
  s = slide("Ba ý của Buổi 6 — và phần B của kế hoạch");
  const sm = [["6.1", "CLV = đóng góp ròng nhiều năm, chiết khấu về hôm nay; rất nhạy với tỷ lệ giữ chân; cần cả kế hoạch tương lai của khách", TEAL], ["6.2", "Doanh số ≠ lợi nhuận; cost-to-serve phụ thuộc hành vi khách, ở cả trước – trong – sau bán; agency có nhiều chi phí ẩn", YEL], ["Ma trận", "Biên × cost-to-serve để chọn hành động; vùng công bằng: giá tương xứng chi phí — lợi cho cả hai", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.25; box(s, 0.6, y, 1.6, 1.05, c); T(s, k, 0.6, y, 1.6, 1.05, { align: "center", bold: true, color: NAVY, fontSize: 20 }); box(s, 2.4, y, 10.33, 1.05); T(s, t, 2.65, y, 9.9, 1.05, { fontSize: 16 }); });
  box(s, 0.6, 5.85, 12.13, 0.8, BLUE);
  T(s, "Kế hoạch cuối kỳ: phần B. Value Opportunities — CLV và vị trí trên ma trận của khách hàng dự án cũ (ghi rõ giả định).", 0.85, 5.85, 11.7, 0.8, { fontSize: 16, bold: true, color: NAVY });
  notes(s, {
    say: "Ba ý của Buổi 6. Mục 6.1: CLV là đóng góp ròng nhiều năm, chiết khấu về hôm nay; rất nhạy với tỷ lệ giữ chân; và cần cả kế hoạch tương lai của khách. Mục 6.2: doanh số không phải lợi nhuận; cost-to-serve phụ thuộc hành vi khách, nằm ở cả trước, trong và sau bán; agency có nhiều chi phí ẩn. Ma trận biên lợi nhuận và cost-to-serve giúp chọn hành động; vùng công bằng là khi giá tương xứng với chi phí — có lợi cho cả hai. Với kế hoạch cuối kỳ: phần B — Value Opportunities — CLV và vị trí trên ma trận của khách hàng dự án cũ, ghi rõ giả định. Đây cũng là nền cho câu hỏi về logic tài chính ở Buổi 14–15.",
    next: "Ba câu kiểm tra nhanh.",
  });

  // 31 quick check
  s = L.quickCheck(["Vì sao CLV tính trên đóng góp ròng chứ không trên doanh thu?", "Kể ba loại cost-to-serve ẩn của agency sự kiện.", "Trong hình “vùng công bằng”, khách ở góc dưới phải nghĩa là gì — và nên làm gì?"]);
  notes(s, { say: "Ba câu kiểm tra nhanh. Một: vì sao CLV tính trên đóng góp ròng chứ không trên doanh thu? Hai: kể ba loại cost-to-serve ẩn của agency sự kiện. Ba: trong hình vùng công bằng, khách ở góc dưới phải nghĩa là gì — và nên làm gì?", gv: "Gợi ý: (1) doanh thu chưa trừ giá vốn và chi phí phục vụ; (2) sửa nhiều vòng, scope creep, trả chậm, đấu thầu lại, nhân sự cấp cao, giờ họp; (3) giá thấp, phục vụ rất tốn — khách được lợi, agency chịu thiệt; ngồi lại cùng khách để giảm chi phí phục vụ hoặc điều chỉnh giá, phạm vi.", ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.", next: "Phiếu cuối giờ." });

  // 32 exit
  s = await L.exitTicket("Nếu tỷ lệ tái ký của An Phát giảm từ 85% xuống 70%, CLV thay đổi thế nào? Vì sao?", "Hai cost-to-serve lớn nhất với khách hàng dự án cũ là gì? Có cách nào cùng khách hàng giảm chúng?");
  notes(s, { say: "Phiếu cuối giờ. Một: nếu tỷ lệ tái ký của An Phát giảm từ 85% xuống 70%, CLV thay đổi thế nào — vì sao? Hai: hai thành phần cost-to-serve lớn nhất với khách hàng trong dự án cũ của nhóm là gì — có cách nào cùng khách hàng giảm chúng?", gv: "Xem: (a) hiểu CLV nhạy với tỷ lệ giữ chân; (b) đề xuất giảm chi phí cùng khách hàng, không chỉ tăng giá.", next: "Buổi sau." });

  // 33 next
  s = await L.nextSession("Không có bài về nhà. Buổi 7: ngồi vào bàn đàm phán với phòng mua sắm", "Buổi 7 · Mua sắm và đàm phán", "Biết khách hàng đáng bao nhiêu và tốn bao nhiêu, ta mới đàm phán được. Buổi sau: phòng mua sắm của khách hàng, ma trận Kraljic, và đàm phán dựa trên giá trị.", ["Máy tính cầm tay", "Ảnh ma trận và bảng CLV", "Hồ sơ dự án cũ"]);
  notes(s, { say: "Không có bài về nhà. Biết khách hàng đáng bao nhiêu và tốn bao nhiêu, ta mới đàm phán được. Buổi 7: hiểu phòng mua sắm của khách hàng, ma trận Kraljic, và đàm phán dựa trên giá trị. Mang theo máy tính, ảnh ma trận và bảng CLV, hồ sơ dự án cũ.", gv: "[NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 6 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 34 refs
  s = L.refs([
    [["Ang, L., & Taylor, B. (2005). Managing customer profitability using portfolio matrices. "], ["Journal of Database Marketing & Customer Strategy Management, 12", 1], ["(4), 298–304."]],
    [["Berger, P. D., & Nasr, N. I. (1998). Customer lifetime value: Marketing models and applications. "], ["Journal of Interactive Marketing, 12", 1], ["(1), 17–30."]],
    [["Guerreiro, R., Bio, S. R., & Merschmann, E. V. V. (n.d.). "], ["Cost-to-serve measurement and customer profitability analysis: A case study at a food industry in Brazil", 1], [" [Bài hội thảo]. Intercostos."]],
    [["Gupta, S., Hanssens, D., Hardie, B., Kahn, W., Kumar, V., Lin, N., Ravishanker, N., & Sriram, S. (2006). Modeling customer lifetime value. "], ["Journal of Service Research, 9", 1], ["(2), 139–155."]],
    [["Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). "], ["Implementing key account management: Designing customer-centric processes for mutual growth", 1], [". Kogan Page."]],
    [["McDonald, M. (n.d.). "], ["How to create financially quantified value propositions in six (actionable!) steps", 1], [". Strategic Account Management Association."]],
    [["Shapiro, B. P., Rangan, V. K., Moriarty, R. T., & Ross, E. B. (1987). Manage customers for profits (not just sales). "], ["Harvard Business Review, 65", 1], ["(5), 101–108."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 6, theo APA 7. Chương 8 của Marcos và cộng sự là phần đọc thêm.", gv: "Khảo sát agency (F07): xem S19 trong buoi-07_tu-lieu-tong-hop.md. Danh sách tác giả Gupta et al. (2006) [VERIFY].", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
