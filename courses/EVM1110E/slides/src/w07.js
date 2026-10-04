// EVM1110E Buổi 7 — Understanding procurement: Kraljic (agency as buyer), Procurement vs Buying, value-based negotiation
// usage: NODE_PATH=<node_modules> node w07.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W07_slides.pptx";
const L = make(FONT, "Bài 7: Mua sắm và đàm phán dựa trên giá trị");
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
// Kraljic 2x2: cells [[title, line, color]] order: Leverage(top-left), Strategic(top-right), Non-critical(bottom-left), Bottleneck(bottom-right)
function kraljic(s, x, y, w, h, cells, fs = 15) {
  const cw = (w - 0.15) / 2, ch = (h - 0.15) / 2;
  cells.forEach(([t, d, c], i) => { const cx = x + (i % 2) * (cw + 0.15), cy = y + Math.floor(i / 2) * (ch + 0.15); box(s, cx, cy, cw, ch, c); const tc = c === CARD ? MU : NAVY; T(s, t, cx + 0.15, cy + 0.08, cw - 0.3, 0.5, { bold: true, fontSize: fs + 3, color: tc, valign: "top" }); if (d) T(s, d, cx + 0.15, cy + 0.6, cw - 0.3, ch - 0.7, { fontSize: fs, color: tc, valign: "top" }); });
  T(s, "Profit impact ↑", x - 1.55, y + h / 2 - 0.25, 1.5, 0.5, { fontSize: 12, color: MU, align: "right" });
  T(s, "Supply risk →", x, y + h + 0.03, w, 0.4, { fontSize: 12, color: MU, align: "center" });
}

(async () => {
  // 1
  let s = L.titleSlide("Bài 7: Mua sắm và đàm phán dựa trên giá trị", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 7\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 7 — Bài 7: Mua sắm và đàm phán dựa trên giá trị. Từ Buổi 2 đến Buổi 6, ta nhìn Nova ở vai người bán cho An Phát. Hôm nay lật sang mặt kia: Nova là người mua — và điều đó quyết định Nova đàm phán với An Phát mạnh hay yếu.", gv: "Mở đầu bằng 2–3 “điều còn mơ hồ” từ phiếu cuối giờ Buổi 6 (≤3 phút). Góc nhìn bắt buộc: agency (khung đã duyệt 27/9/2026).", next: "Bắt đầu bằng một cuộc gọi khó." });

  // 2 hook
  s = slide("Ba tuần trước gala, khách sạn báo AV nội bộ tăng giá 30% — Nova làm gì?");
  box(s, 0.6, 1.95, 6.6, 4.3);
  await ic(s, "FaPhoneVolume", 0.9, 2.2, 1.0, PINK);
  T(s, "Tình huống (giả định)", 2.1, 2.2, 4.9, 1.0, { fontSize: 16, color: MU });
  T(s, bullets(["Hội nghị + gala 600 khách cho An Phát, 12/12, khách sạn 5 sao Quận 1", "Đơn vị AV nội bộ của khách sạn tăng giá 30%", "Hợp đồng venue không cho mang AV bên ngoài vào"]), 0.95, 3.45, 6.05, 2.7, { fontSize: 18, valign: "top", paraSpaceAfter: 8 });
  const op = [["A", "Chấp nhận, tự chịu phần chênh", TEAL], ["B", "Báo An Phát xin tăng ngân sách", YEL], ["C", "Đổi khách sạn", ORA], ["D", "Đàm phán với khách sạn", PINK]];
  op.forEach(([k, t, c], i) => { num(s, k, 7.5, 1.95 + i * 1.08, 0.85, c, 20); box(s, 8.5, 1.95 + i * 1.08, 4.23, 0.85); T(s, t, 8.7, 1.95 + i * 1.08, 3.9, 0.85, { fontSize: 17, bold: true }); });
  notes(s, {
    say: "Các bạn là Nova Events. An Phát đã chốt hội nghị khách hàng và gala tối 12/12 tại một khách sạn 5 sao ở Quận 1, khoảng 600 khách. Ba tuần trước sự kiện, khách sạn báo: đơn vị AV nội bộ tăng giá 30%, và hợp đồng không cho mang AV bên ngoài vào. Các bạn làm gì? A — chấp nhận, tự chịu phần chênh. B — báo An Phát xin tăng ngân sách. C — đổi khách sạn. D — đàm phán với khách sạn. Giơ tay.",
    gv: "Giáo án S1 (phút 0–5). Ghi số phiếu A/B/C/D lên bảng; chưa chữa. Tình huống giả định (W07 lecture notes S1).",
    ask: "Giơ tay A, B, C hay D.",
    next: "Không phương án nào dễ.",
  });

  // 3 answer frame
  s = slide("Không phương án nào dễ — vì vấn đề đã được quyết định từ lúc chọn và ký với nhà cung cấp");
  const ab = [["A", "Nova mất lợi nhuận", TEAL], ["B", "Đem uy tín với An Phát ra đổi", YEL], ["C", "Tháng 12 gần như không còn ballroom", ORA], ["D", "Nova đang ở thế yếu", PINK]];
  ab.forEach(([k, t, c], i) => { const x = 0.6 + i * 3.1; box(s, x, 1.95, 2.85, 2.6); num(s, k, x + 1.0, 2.15, 0.85, c, 20); T(s, t, x + 0.15, 3.15, 2.55, 1.3, { align: "center", fontSize: 17, valign: "top" }); });
  box(s, 0.6, 4.8, 12.13, 1.45, YEL);
  T(s, "Tình huống này không xảy ra ba tuần trước sự kiện. Nó xảy ra lúc Nova ký hợp đồng venue có điều khoản “AV nội bộ bắt buộc”. Hôm nay: học cách nhìn thấy trước.", 0.85, 4.8, 11.7, 1.45, { fontSize: 18, bold: true, color: NAVY });
  notes(s, {
    say: "Không phương án nào dễ. A: Nova mất lợi nhuận. B: báo khách hàng xin thêm tiền là đem uy tín ra đổi. C: tháng 12 gần như không còn ballroom trống. D: đàm phán thì Nova đang ở thế yếu. Tình huống này không xảy ra ba tuần trước sự kiện. Nó xảy ra lúc Nova ký hợp đồng venue có điều khoản AV nội bộ bắt buộc. Hôm nay ta học cách nhìn thấy trước nó.",
    gv: "W07 lecture notes S1 (chốt). Quay lại tình huống ở slide 14.",
    next: "Trước hết: agency đứng ở đâu?",
  });

  // 4 agency both seller and buyer
  s = slide("Agency vừa là người bán, vừa là người mua");
  const bx = [["Nhà cung cấp", "venue · AV · F&B · nghệ sĩ · in ấn · vận chuyển", BLUE, 0.6], ["Agency — Nova", "các bạn", YEL, 4.75], ["Key Account — An Phát", "khách hàng trọng yếu", TEAL, 8.9]];
  bx.forEach(([a, b, c, x]) => { box(s, x, 2.3, 3.83, 2.0, c); T(s, a, x + 0.15, 2.4, 3.53, 0.9, { align: "center", bold: true, fontSize: 20, color: NAVY }); T(s, b, x + 0.15, 3.3, 3.53, 0.85, { align: "center", fontSize: 14, color: NAVY, valign: "top" }); });
  T(s, "⇄", 4.43, 2.9, 0.32, 0.7, { fontSize: 26, color: MU, align: "center" }); T(s, "⇄", 8.58, 2.9, 0.32, 0.7, { fontSize: 26, color: MU, align: "center" });
  box(s, 0.6, 4.55, 8.0, 0.75, PINK); T(s, "Buổi 7: agency là NGƯỜI MUA", 0.8, 4.55, 7.6, 0.75, { fontSize: 18, bold: true, color: NAVY });
  box(s, 4.75, 5.45, 7.98, 0.75, TEAL); T(s, "Buổi 2–6: agency là NGƯỜI BÁN (KAM)", 4.95, 5.45, 7.6, 0.75, { fontSize: 18, bold: true, color: NAVY });
  notes(s, {
    say: "Từ Buổi 2 đến Buổi 6, ta nhìn Nova ở vai người bán cho An Phát — đó là KAM. Hôm nay lật sang mặt kia: để giao được giá trị đã hứa với An Phát, Nova phải mua phần lớn nguồn lực của sự kiện từ nhà cung cấp — venue, AV, F&B, nghệ sĩ, in ấn, vận chuyển. Nova đứng ở giữa.",
    gv: "Khung góc nhìn đã duyệt (W07_khung_goc_nhin.md, mục 2). Nhà cung cấp là nhóm bên liên quan bên ngoài agency phải quản trị song song với Key Account.",
    ask: "“Trong hợp đồng 2,4 tỷ với An Phát, bao nhiêu tiền thực sự ở lại Nova?”",
    next: "Câu trả lời: không nhiều.",
  });

  // 5 fee share
  s = slide("Phần lớn giá trị hợp đồng đi qua agency để trả cho nhà cung cấp");
  box(s, 0.6, 2.2, 12.13, 1.2, CARD);
  box(s, 0.6, 2.2, 1.0, 1.2, YEL); T(s, "5–10%", 0.6, 2.2, 1.0, 1.2, { fontSize: 14, bold: true, color: NAVY, align: "center" });
  box(s, 1.7, 2.2, 11.03, 1.2, BLUE); T(s, "Phần còn lại: chi cho nhà cung cấp", 1.9, 2.2, 10.6, 1.2, { fontSize: 20, bold: true, color: NAVY });
  T(s, "Phí quản lý (management fee) trong một số báo giá công khai của agency Việt Nam — dải tham chiếu, chưa kiểm chứng chéo.", 0.6, 3.5, 12.13, 0.6, { fontSize: 14, color: MU, italic: true });
  box(s, 0.6, 4.3, 12.13, 1.8, YEL);
  T(s, "Chất lượng sự kiện An Phát nhìn thấy phần lớn do nhà cung cấp làm ra → quản trị nhà cung cấp là một phần của quản trị Key Account.", 0.85, 4.3, 11.7, 1.8, { fontSize: 20, bold: true, color: NAVY });
  src(s, "Nguồn: S18 (báo giá công khai của agency VN); S25 (BizBash: markup ≥10% ở agency Mỹ). Cả hai chưa kiểm chứng chéo.", 6.35);
  notes(s, {
    say: "Một số báo giá công khai của agency Việt Nam nêu phí quản lý khoảng 5 đến 10% tổng ngân sách. Một bài báo ngành ở Mỹ nêu agency làm trọn gói thường markup từ 10% trở lên. Cả hai chưa kiểm chứng chéo — chỉ là dải tham chiếu. Ý chính: phần lớn giá trị hợp đồng đi qua tay agency để trả cho nhà cung cấp. Chất lượng sự kiện mà An Phát nhìn thấy phần lớn do nhà cung cấp làm ra. Vì vậy quản trị nhà cung cấp là một phần của quản trị Key Account.",
    gv: "S18, S25 — chưa KCC. [NEEDS PROFESSOR INPUT: nếu có, thay dải 5–10% bằng tỷ lệ thực tế từ một dự toán agency đã ẩn danh.] Thanh ngang vẽ minh họa, không theo tỷ lệ chính xác.",
    next: "Và thị trường nhà cung cấp đang nghiêng về phía người bán.",
  });

  // 6 cost & scarcity
  s = slide("Chi phí đầu vào tăng đều và địa điểm cao cấp khan hiếm");
  const st = [["+4,5%", "chi phí/người/ngày của meetings & events toàn cầu năm 2024", TEAL, "S04"], ["138 USD", "chi phí/người/ngày khu vực châu Á – Thái Bình Dương (+4,5%)", YEL, "S04"], ["28%", "chuyên gia coi khả năng có địa điểm là thách thức năm 2026", PINK, "S05"]];
  st.forEach(([a, b, c, r], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.6); T(s, a, x, 2.1, 3.9, 1.4, { fontSize: 46, bold: true, color: c, align: "center" }); T(s, b, x + 0.25, 3.55, 3.4, 1.5, { fontSize: 16, align: "center", valign: "top" }); T(s, r, x, 5.05, 3.9, 0.4, { fontSize: 12, color: MU, align: "center" }); });
  T(s, "Sau đại dịch: địa điểm kín lịch sớm, điều khoản hủy và attrition khắt khe hơn, F&B minimum cao, đặt cọc lớn hơn (S08, S11).", 0.6, 5.75, 12.13, 0.7, { fontSize: 16, color: YEL });
  src(s, "Nguồn: GBTA (2025), Skift Meetings, Prevue (S04 — một báo cáo gốc, chưa KCC); Amex GBT (2025) (S05).", 6.5);
  notes(s, {
    say: "Thị trường nhà cung cấp đang nghiêng về phía người bán. Chi phí trên mỗi người mỗi ngày của meetings và events toàn cầu tăng 4,5% năm 2024; khu vực châu Á – Thái Bình Dương khoảng 138 đô la. Theo Amex GBT, 28% chuyên gia coi khả năng có địa điểm là thách thức năm 2026. Sau đại dịch, địa điểm kín lịch sớm, điều khoản hủy và attrition khắt khe hơn, F&B tối thiểu cao, đặt cọc lớn hơn.",
    gv: "S04: GBTA (2025) cùng các báo ngành dẫn — một báo cáo gốc, chưa KCC; dự báo toàn cầu +3,7% (2025), +2,4% (2026). S05: Amex GBT 2026 Forecast. Xu hướng thiếu địa điểm đã KCC (S04, S05, S08).",
    next: "Và nhiều hạng mục bị khóa bởi độc quyền.",
  });

  // 7 exclusivity
  s = slide("Nhiều hạng mục bị khóa bởi điều khoản độc quyền hoặc cấu trúc thị trường");
  const ex = [["FaVolumeUp", "AV nội bộ bắt buộc", "Nhiều khách sạn bắt buộc dùng AV nội bộ (đã KCC); khách sạn thường nhận hoa hồng 35–50% hóa đơn AV (chưa KCC)", ORA, "S08–S10"], ["FaTicketAlt", "Bán vé độc quyền", "Theo cáo buộc của DOJ, Live Nation–Ticketmaster nắm ~80% bán vé sơ cấp tại các địa điểm concert lớn ở Mỹ; bồi thẩm đoàn kết luận độc quyền (4/2026)", PINK, "S13"], ["FaMapMarkedAlt", "Việt Nam", "Thiếu địa điểm chuyên dụng cho sự kiện lớn; Trung tâm Hội nghị Quốc gia tự công bố tháng cuối năm có hơn 70 tiệc tất niên", TEAL, "S20, S24"]];
  for (let i = 0; i < 3; i++) { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 4.3); await ic(s, ex[i][0], x + 1.4, 2.15, 1.1, ex[i][3]); T(s, ex[i][1], x + 0.2, 3.35, 3.5, 0.6, { align: "center", bold: true, fontSize: 19, color: ex[i][3] }); T(s, ex[i][2], x + 0.25, 3.95, 3.4, 2.0, { fontSize: 14, valign: "top" }); T(s, ex[i][4], x, 5.85, 3.9, 0.35, { fontSize: 12, color: MU, align: "center" }); }
  src(s, "Nguồn: xem mã S trong buoi-07_tu-lieu-tong-hop.md. Live Nation: NPR, CNN (15/4/2026) — đã KCC.", 6.45);
  notes(s, {
    say: "Nhiều hạng mục bị khóa. Một: AV nội bộ bắt buộc — nhiều khách sạn yêu cầu; một số nguồn nói khách sạn nhận hoa hồng 35 đến 50% hóa đơn AV — chưa kiểm chứng chéo. Hai: bán vé độc quyền — theo cáo buộc của Bộ Tư pháp Mỹ, Live Nation – Ticketmaster nắm khoảng 80% bán vé sơ cấp tại các địa điểm concert lớn; tháng 4 năm 2026 bồi thẩm đoàn kết luận họ độc quyền. Ba: Việt Nam thiếu địa điểm chuyên dụng cho sự kiện lớn; Trung tâm Hội nghị Quốc gia tự công bố tháng cuối năm có hơn 70 tiệc tất niên.",
    gv: "S08–S10 (AV nội bộ; hoa hồng 35–50% chưa KCC), S13 (đã KCC), S20 (đã KCC), S24 (nguồn tự công bố). Câu chốt §1: agency không chọn được thị trường nhà cung cấp, nhưng chọn được cách nhìn từng hạng mục và cách xây quan hệ tương ứng.",
    ask: "“Trong dự án cũ, có hạng mục nào nhóm không được chọn nhà cung cấp?”",
    next: "Công cụ kinh điển để nhìn từng hạng mục: ma trận Kraljic.",
  });

  // 8 Kraljic origin
  s = slide("Kraljic: mua hàng phải trở thành quản trị nguồn cung");
  defCards(s, [
    ["Kraljic (1983), HBR", TEAL, "Tên bài: “Purchasing must become supply management” — mua hàng không chỉ là đặt đơn cho rẻ, mà là quản trị nguồn cung như một phần của chiến lược.", "(S01)"],
    ["CIPS", YEL, "Công cụ chiến lược để nhận diện và giảm rủi ro nguồn cung, phân loại các hạng mục mua theo hai trục.", "(Chartered Institute of Procurement & Supply, S01)"],
    ["Marcos et al. (2018)", BLUE, "“Today, the model is one of the dominant strategic tools guiding purchasing activities in organizations.”", "(tr. 242)"],
  ], "Tổng hợp: Kraljic giúp người mua quyết định hạng mục nào cần quan hệ chặt, hạng mục nào cần khai thác sức mua — và Nova cũng là người mua.");
  notes(s, {
    say: "Đề cương mục 7.1. Peter Kraljic công bố mô hình năm 1983 trên Harvard Business Review, tên bài: mua hàng phải trở thành quản trị nguồn cung. CIPS — Viện Mua sắm và Cung ứng Chartered — mô tả đây là công cụ chiến lược để nhận diện và giảm rủi ro nguồn cung. Giáo trình KAM của môn viết: ngày nay mô hình là một trong những công cụ chiến lược chủ đạo của hoạt động mua hàng. Nova cũng là người mua — nên Nova dùng được.",
    gv: "S01 (CIPS; Kraljic 1983 — trang HBR). Marcos et al. (2018), Chương 10, Hình 10.1 và tr. 242. LƯU Ý: giáo trình dùng Kraljic theo chiều phòng mua của khách hàng nhìn nhà cung cấp; khung đã duyệt của môn (quyết định GV 3) dùng chiều agency là người mua — slide giữ khung của môn.",
    next: "Hai trục — đọc theo góc agency.",
  });

  // 9 two axes
  s = slide("Hai trục: hạng mục tác động bao nhiêu, và khó mua đến đâu");
  const ax = [["Profit impact", "tác động lợi nhuận", "Mức hạng mục đóng góp vào khả năng sinh lời", ["Chiếm bao nhiêu ngân sách?", "Khách của An Phát có nhìn thấy, cảm nhận không?", "Nếu kém, An Phát có coi cả sự kiện thất bại?"], TEAL], ["Supply risk", "rủi ro nguồn cung", "Mức khó tìm nguồn, mức tổn thương khi nguồn cung gặp sự cố", ["Bao nhiêu nhà cung cấp đủ năng lực, ở đây, lúc này?", "Bỏ ngang thì thay trong bao lâu?", "Có ràng buộc độc quyền, mùa cao điểm?"], PINK]];
  ax.forEach(([a, b, d, qs, c], i) => { const x = 0.6 + i * 6.13; box(s, x, 1.95, 5.9, 0.85, c); T(s, a + " · " + b, x + 0.2, 1.95, 5.5, 0.85, { bold: true, fontSize: 19, color: NAVY }); box(s, x, 2.95, 5.9, 3.3); T(s, d, x + 0.2, 3.05, 5.5, 0.8, { fontSize: 15, color: MU, italic: true, valign: "top" }); T(s, bullets(qs), x + 0.2, 3.85, 5.5, 2.3, { fontSize: 16, valign: "top", paraSpaceAfter: 6 }); });
  src(s, "Định nghĩa trục: CIPS (S01); Marcos et al. (2018, tr. 242). Câu hỏi cho agency: nhận định của môn [VERIFY cách đọc profit impact theo góc agency].", 6.45);
  notes(s, {
    say: "Hai trục. Profit impact — tác động lợi nhuận: mức hạng mục đóng góp vào khả năng sinh lời. Với agency, hỏi: hạng mục chiếm bao nhiêu ngân sách; khách của An Phát có nhìn thấy, cảm nhận không; nếu kém, An Phát có coi cả sự kiện thất bại không. Supply risk — rủi ro nguồn cung: mức khó tìm nguồn và mức tổn thương khi nguồn cung gặp sự cố. Hỏi: có bao nhiêu nhà cung cấp đủ năng lực ở đây, lúc này; bỏ ngang thì thay trong bao lâu; có độc quyền, có rơi vào mùa cao điểm không. Trong sự kiện, rủi ro nguồn cung nặng hơn sản xuất, vì ngày sự kiện không dời được.",
    gv: "Giáo trình (tr. 242): “Supply risk: what would be the impact on the business if these purchased goods and services were disrupted? Profit impact: what do these purchased goods and services do to help us make profit and generate cash?” Nhận định của người soạn: với agency, profit impact đọc rộng thành tác động lên giá trị giao cho Key Account + lợi nhuận hợp đồng. [VERIFY — GV quyết định có giữ không.]",
    next: "Bốn ô.",
  });

  // 10 four cells
  s = slide("Mỗi ô có một chiến lược riêng — “Non-critical” không có nghĩa là không quan trọng");
  kraljic(s, 2.1, 1.95, 7.2, 4.4, [["Leverage", "Nhiều nhà cung cấp, dễ thay → khai thác sức mua: so giá, giá mục tiêu, đàm phán khối lượng", YEL], ["Strategic", "Ít nhà cung cấp, tác động lớn → quan hệ đối tác dài hạn dựa trên hiệu quả", TEAL], ["Non-critical", "Nhiều lựa chọn, rủi ro thấp → chuẩn hóa, gom đơn, đơn giản thủ tục", BLUE], ["Bottleneck", "Giá trị nhỏ nhưng ít người thay → đảm bảo nguồn cung, tìm dự phòng", PINK]], 14);
  box(s, 9.6, 1.95, 3.13, 4.4, CARD);
  T(s, "Non-critical = không khó mua. Thư mời in sai tên khách VIP vẫn là sự cố — chỉ là in lại được ngay.", 9.8, 2.1, 2.75, 4.1, { fontSize: 16, bold: true, color: YEL, valign: "top" });
  src(s, "Nguồn: CIPS (S01); Marcos et al. (2018, Hình 10.1, tr. 242).", 6.75);
  notes(s, {
    say: "Bốn ô. Strategic — tác động cao, rủi ro cao: ít nhà cung cấp, tác động lớn; chiến lược là quan hệ đối tác dài hạn dựa trên hiệu quả. Leverage — tác động cao, rủi ro thấp: nhiều nhà cung cấp, dễ thay; khai thác sức mua — so giá, giá mục tiêu, đàm phán khối lượng. Bottleneck — tác động thấp, rủi ro cao: giá trị không lớn nhưng ít người thay, dễ bị tăng giá đột ngột; đảm bảo nguồn cung, tìm dự phòng. Non-critical — cả hai thấp: chuẩn hóa, gom đơn. Lưu ý: Non-critical không có nghĩa là không quan trọng — mà là không khó mua.",
    gv: "CIPS (S01) và Marcos et al. (2018, Hình 10.1): Strategic “collaborate/joint innovation, develop long-term relationships”; Leverage “exploit purchase power, targeted pricing/hard negotiation”; Bottleneck “production-based scarcity, innovate/strive to eliminate”; Non-critical “standardize, focus on process efficiency”. Giữ thuật ngữ tiếng Anh (quyết định GV 6).",
    next: "Cách dùng của môn: hai bước.",
  });

  // 11 two-step
  s = slide("Xếp hạng mục trước, rồi mới suy ra vị thế nhà cung cấp");
  box(s, 0.6, 2.0, 5.6, 3.0, TEAL);
  num(s, 1, 0.85, 2.2, 0.85, TX, 22);
  T(s, "Xếp hạng mục", 1.9, 2.2, 4.1, 0.85, { bold: true, fontSize: 21, color: NAVY });
  T(s, "Từng hạng mục cụ thể gắn với sự kiện của Key Account vào ma trận theo hai trục. Ví dụ: “ballroom 600 khách tối 12/12”, không phải “khách sạn”.", 0.85, 3.2, 5.1, 1.7, { fontSize: 16, color: NAVY, valign: "top" });
  arrow(s, 6.35, 3.25, 0.6, 0.5, YEL);
  box(s, 7.1, 2.0, 5.63, 3.0, YEL);
  num(s, 2, 7.35, 2.2, 0.85, TX, 22);
  T(s, "Suy ra vị thế, chọn quan hệ", 8.4, 2.2, 4.2, 0.85, { bold: true, fontSize: 20, color: NAVY });
  T(s, "Từ ô của hạng mục → nhà cung cấp hạng mục đó mạnh hay yếu so với Nova → chiến lược quan hệ phù hợp.", 7.35, 3.2, 5.1, 1.7, { fontSize: 16, color: NAVY, valign: "top" });
  T(s, "Một nhà cung cấp có thể cung ứng nhiều hạng mục ở nhiều ô khác nhau.", 0.6, 5.3, 12.13, 0.6, { fontSize: 18, bold: true, color: PINK });
  src(s, "Cách dùng thống nhất của môn (quyết định GV 4, 27/9/2026): đúng mô hình gốc — xếp hạng mục mua — và sát cách nói ở agency.", 6.3);
  notes(s, {
    say: "Mô hình gốc phân loại hạng mục mua. Ngoài nghề, agency quen nói “nhà cung cấp này là chiến lược”. Để vừa đúng học thuật vừa sát thực tế, môn dùng hai bước. Bước một: xếp từng hạng mục cụ thể gắn với sự kiện của Key Account — ví dụ “ballroom 600 khách tối 12/12”, không phải “khách sạn”. Bước hai: từ ô của hạng mục, suy ra nhà cung cấp hạng mục đó mạnh hay yếu so với Nova, rồi chọn chiến lược quan hệ. Nhớ: một nhà cung cấp có thể cung ứng nhiều hạng mục ở nhiều ô.",
    gv: "Quyết định GV 4 (W07_khung_goc_nhin.md mục 5). Bảng vị thế – chiến lược quan hệ chi tiết: W07 lecture notes §2.4.",
    next: "Ví dụ: một khách sạn, ba hạng mục.",
  });

  // 12 one hotel three items
  s = slide("Một khách sạn, ba hạng mục, ba ô");
  kraljic(s, 2.1, 1.95, 6.0, 4.4, [["Leverage", "", YEL], ["Strategic", "", TEAL], ["Non-critical", "", CARD], ["Bottleneck", "", PINK]], 14);
  const pts = [["Ballroom 600 khách tối 12/12", 5.25, 2.6], ["80 phòng ngủ (ngoài mùa)", 2.3, 2.6], ["80 phòng tháng 12 →", 2.3, 3.35], ["AV nội bộ bắt buộc", 5.25, 4.85]];
  pts.forEach(([t, x, y], i) => { circ(s, x, y + 0.08, 0.3, i === 2 ? MU : NAVY); T(s, t, x + 0.35, y - 0.05, 2.5, 0.55, { fontSize: 14, bold: true, color: NAVY }); });
  box(s, 8.4, 1.95, 4.33, 4.4);
  T(s, bullets(["Ballroom: hai trục đều cao — mùa tiệc cuối năm, không đổi sát ngày → Strategic", "Phòng ngủ: Leverage ngoài mùa, dịch sang Bottleneck vào tháng 12", "AV nội bộ: rủi ro đến từ điều khoản hợp đồng, không từ thị trường → Bottleneck"]), 8.6, 2.05, 3.95, 4.2, { fontSize: 15, valign: "top", paraSpaceAfter: 8 });
  src(s, "Ví dụ giả định (W07 lecture notes §2.5). Chấm vẽ minh họa.", 6.75);
  notes(s, {
    say: "Ví dụ giả định. Khách sạn cung ứng ba hạng mục. Ballroom cho gala 600 khách tối 12/12: tác động cao — là sân khấu của cả sự kiện; rủi ro cao — tháng 12 là mùa tiệc cuối năm, không thể đổi sát ngày. Vậy Strategic. Khối 80 phòng ngủ: ngoài mùa cao điểm có nhiều khách sạn lân cận — Leverage; nhưng tháng 12 có thể dịch sang Bottleneck. AV nội bộ bắt buộc: không chiếm nhiều ngân sách, nhưng không được mang AV ngoài vào nên chỉ còn một nhà cung cấp — Bottleneck. Rủi ro đến từ điều khoản hợp đồng, không phải từ thị trường. Vậy câu “khách sạn là nhà cung cấp chiến lược” là nói thiếu.",
    gv: "GV nói to lập luận. W07 lecture notes §2.5.",
    next: "Kiểm tra nhanh.",
  });

  // 13 vote
  s = slide("Giơ 1–4 ngón: màn LED lớn và sân khấu gala nằm ở ô nào?");
  box(s, 0.6, 1.95, 7.2, 3.6);
  await ic(s, "FaTv", 0.9, 2.25, 1.0, BLUE);
  T(s, "Màn LED lớn + sân khấu gala cho 600 khách. Được mang đơn vị ngoài vào (khách sạn tính phí kết nối). TP.HCM có nhiều đơn vị đủ năng lực, nhưng tháng 12 lịch dày.", 2.15, 2.15, 5.45, 3.2, { fontSize: 17, valign: "top" });
  T(s, "(giả định — hạng mục 4 của Thực hành 1)", 0.9, 5.05, 5.0, 0.4, { fontSize: 13, color: MU, italic: true });
  [["1", "Strategic", TEAL], ["2", "Leverage", YEL], ["3", "Bottleneck", PINK], ["4", "Non-critical", BLUE]].forEach(([k, t, c], i) => { num(s, k, 8.2, 1.95 + i * 0.9, 0.72, c, 18); box(s, 9.1, 1.95 + i * 0.9, 3.63, 0.72); T(s, t, 9.3, 1.95 + i * 0.9, 3.3, 0.72, { fontSize: 18, bold: true }); });
  notes(s, {
    say: "Giả định: màn LED lớn và sân khấu gala cho 600 khách. Được mang đơn vị ngoài vào, khách sạn tính phí kết nối. TP.HCM có nhiều đơn vị đủ năng lực, nhưng tháng 12 lịch dày. Ô nào? Một ngón Strategic, hai Leverage, ba Bottleneck, bốn Non-critical.",
    gv: "Không có một đáp án duy nhất — đó là điểm dạy. Hợp lý nhất: Leverage (tác động cao — khách nhìn thấy; nhiều nhà cung cấp) nếu giữ chỗ sớm; có thể dịch về Strategic nếu chốt muộn trong tháng 12. Chấp nhận câu trả lời có lập luận theo hai trục.",
    ask: "Giơ 1–4 ngón; mời một bạn mỗi phía lập luận.",
    next: "Đáp án — và quay lại cuộc gọi về AV.",
  });

  // 14 answer & back to S1
  s = slide("Đáp án: Leverage nếu giữ chỗ sớm — và AV nội bộ vào Bottleneck ngay lúc ký hợp đồng venue");
  box(s, 0.6, 1.95, 6.0, 4.3);
  T(s, "LED + sân khấu", 0.85, 2.05, 5.5, 0.55, { bold: true, fontSize: 19, color: YEL });
  T(s, bullets(["Tác động cao: khách nhìn thấy cả đêm", "Rủi ro thấp–vừa: nhiều đơn vị, được mang vào", "Chốt muộn tháng 12 → rủi ro tăng → gần Strategic", "Ô phụ thuộc thời điểm Nova hành động"]), 0.85, 2.7, 5.5, 3.4, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.85, 1.95, 5.88, 4.3, PINK);
  T(s, "Quay lại cuộc gọi về AV", 7.1, 2.05, 5.4, 0.55, { bold: true, fontSize: 19, color: NAVY });
  T(s, "AV tăng 30% mà Nova bó tay — vì hạng mục AV đã vào ô Bottleneck lúc ký điều khoản “AV nội bộ bắt buộc”. Muốn không bó tay: xử lý trước khi ký — đưa báo giá AV vào đàm phán venue, hoặc đàm phán quyền mang AV ngoài vào.", 7.1, 2.7, 5.4, 3.4, { fontSize: 16, color: NAVY, valign: "top" });
  src(s, "Nguồn: W07 lecture notes §2.5; S08–S10.", 6.45);
  notes(s, {
    say: "LED và sân khấu: tác động cao — khách nhìn thấy cả đêm; rủi ro thấp đến vừa — nhiều đơn vị, được mang vào. Nên là Leverage nếu Nova giữ chỗ sớm; chốt muộn tháng 12 thì rủi ro tăng, gần Strategic. Ô phụ thuộc thời điểm Nova hành động. Quay lại cuộc gọi về AV: vì sao tăng 30% mà Nova bó tay? Vì hạng mục AV đã vào ô Bottleneck ngay lúc ký điều khoản AV nội bộ bắt buộc. Muốn không bó tay, phải xử lý trước khi ký: đưa báo giá AV vào đàm phán venue, hoặc đàm phán quyền mang AV ngoài vào.",
    gv: "W07 lecture notes §2.5 (đoạn quay lại S1); S08, S09, S10.",
    next: "Ma trận không đứng yên.",
  });

  // 15 not static + misconceptions
  s = slide("Ma trận là ảnh chụp: mùa, quy mô và điều khoản làm hạng mục đổi ô");
  const mv = [["Mùa cao điểm", "tháng 10–12, lễ tết → rủi ro tăng", TEAL], ["Quy mô", "200 khách: Leverage · 40.000 khách: gần như luôn Strategic/Bottleneck", YEL], ["Điều khoản", "độc quyền → Bottleneck ngay lập tức", PINK], ["Hành động của agency", "giữ chỗ sớm, dự phòng, cam kết nhiều năm → kéo hạng mục ra khỏi Bottleneck", BLUE]];
  mv.forEach(([a, b, c], i) => { const y = 1.95 + i * 0.85; box(s, 0.6, y, 2.9, 0.72, c); T(s, a, 0.75, y, 2.65, 0.72, { bold: true, fontSize: 15, color: NAVY }); box(s, 3.65, y, 4.3, 0.72); T(s, b, 3.8, y, 4.05, 0.72, { fontSize: 14 }); });
  box(s, 8.2, 1.95, 4.53, 3.25);
  T(s, "Hiểu lầm", 8.4, 2.0, 4.1, 0.5, { bold: true, fontSize: 17, color: PINK });
  T(s, bullets(["“Kraljic xếp nhà cung cấp” → xếp hạng mục", "“Tốn tiền nhất là Strategic” → chi tiêu ≠ rủi ro", "“Xếp một lần là xong” → theo từng sự kiện, rà soát định kỳ"]), 8.4, 2.5, 4.15, 2.65, { fontSize: 14, valign: "top", paraSpaceAfter: 6 });
  src(s, "Nguồn: S01 (lưu ý từ các phê bình mô hình); S20, S23, S24; W07 lecture notes §2.6–2.7.", 5.45);
  notes(s, {
    say: "Kết quả xếp ô là ảnh chụp tại một thời điểm. Bốn thứ làm hạng mục đổi ô: mùa cao điểm — tháng 10 đến 12 và lễ tết; quy mô — địa điểm cho 200 khách là Leverage, cho 40.000 khách gần như luôn là Strategic hay Bottleneck; điều khoản — độc quyền đẩy hạng mục sang Bottleneck ngay lập tức; và hành động của chính agency — giữ chỗ sớm, có dự phòng đã thẩm định, cam kết nhiều năm có thể kéo hạng mục ra khỏi Bottleneck. Ba hiểu lầm: Kraljic xếp nhà cung cấp — sai, xếp hạng mục; tốn tiền nhất là Strategic — sai, chi tiêu không bằng rủi ro; xếp một lần là xong — sai, xếp theo từng sự kiện và rà soát định kỳ.",
    gv: "Giáo trình gợi ý tương tự cho ô Bottleneck: “innovate/strive to eliminate” (Hình 10.1). Mức tăng giá mùa cao điểm 20–40% (S18, blog agency) — chưa KCC, không đưa lên slide.",
    next: "Thực hành 1.",
  });

  // 16 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: Kraljic cho sự kiện của An Phát", [["10’", "Chấm 1–5 hai trục cho 10 hạng mục; đặt vào ma trận 2×2 trên A1", TEAL], ["6’", "Chọn 3 hạng mục ở 3 ô khác nhau: vị thế nhà cung cấp so với Nova + 1 hành động quan hệ (Procurement hay Buying?)", YEL], ["4’", "Nếu dời sự kiện sang 15/4: đánh dấu ➜ hạng mục đổi ô, 1 câu lý do", PINK]], "FaThLarge", "Sản phẩm", "Ma trận A1 — đội Nova mang theo vào Thực hành 2", "Xếp hạng mục, không xếp tên công ty.");
  notes(s, {
    say: "Thực hành 1, 20 phút. Mười phút: chấm từ 1 đến 5 hai trục cho 10 hạng mục, đặt vào ma trận trên A1. Sáu phút: chọn ba hạng mục ở ba ô khác nhau — viết vị thế nhà cung cấp so với Nova, và một hành động quan hệ cụ thể, ghi rõ là việc của cấp Procurement hay Buying. Bốn phút: nếu sự kiện dời sang 15 tháng 4, đánh dấu hạng mục nào đổi ô và một câu lý do. Xếp hạng mục, không xếp tên công ty.",
    gv: "Phiếu W07_activity_S3_kraljic_su_kien_key_account.md. Mốc phút 30–50; 46–50 chốt với 2 nhóm xếp khác nhau (LED, ca sĩ). Lưu ý: phiếu ghi An Phát là Key Account “3 năm”, các buổi khác dùng “4 năm” — [NEEDS PROFESSOR INPUT: thống nhất].",
    next: "Giải lao.",
  });

  // 17 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 50–58. GV xếp 3 cặp nhóm cho Thực hành 2 trong giờ giải lao.", next: "Sau giải lao: Nova làm 40 sự kiện một năm." });

  // 18 question
  s = await L.question("Bốn mươi sự kiện một năm", "Nova có nên đi tìm nhà cung cấp từ đầu cho mỗi sự kiện?", "FaRedoAlt", BLUE, "Đề cương 7.2: Procurement và Buying");
  notes(s, { say: "Ở Thực hành 1 các bạn xếp hạng mục cho một sự kiện. Nhưng Nova làm 40 sự kiện một năm. Nếu mỗi sự kiện lại đi tìm nhà cung cấp từ đầu thì sao?", ask: "“Được gì, mất gì?”", next: "Vì vậy agency cần hai cấp làm việc với nhà cung cấp." });

  // 19 definitions
  s = slide("Procurement là dài hạn và hướng giá trị; Buying là từng giao dịch và hướng chi phí");
  defCards(s, [
    ["CIPS", TEAL, "“…procurement is a long-term approach to acquiring goods and services, and purchasing is the short-term direct purchasing of products and services.”", "(S03)"],
    ["Marcos et al. (2018) — Procurement", YEL, "Chiến lược · cấp lãnh đạo · tầm nhìn · tập trung vào giá trị · cởi mở với đổi mới", "(Hình 10.6, tr. 247)"],
    ["Marcos et al. (2018) — Buying", PINK, "Vận hành · quản lý cấp giữa–dưới · thực thi · tập trung vào chi phí · ngại rủi ro", "(Hình 10.6, tr. 247)"],
  ], "Tổng hợp: Procurement quyết định làm với ai, theo khung nào, cho cả năm; Buying làm đúng cho từng sự kiện.");
  notes(s, {
    say: "Đề cương mục 7.2. CIPS: procurement là cách tiếp cận dài hạn để có hàng hóa, dịch vụ — gồm tìm nguồn, đàm phán, quản lý hợp đồng, phát triển nhà cung cấp; purchasing hay buying là mua trực tiếp ngắn hạn, hoàn tất giao dịch. Giáo trình so sánh: procurement là chiến lược, cấp lãnh đạo, có tầm nhìn, tập trung vào giá trị, cởi mở với đổi mới; buying là vận hành, quản lý cấp giữa–dưới, thực thi, tập trung vào chi phí, ngại rủi ro. Gộp lại: Procurement quyết định làm với ai, theo khung nào, cho cả năm; Buying làm đúng cho từng sự kiện.",
    gv: "S03 (CIPS) nguyên văn. Marcos et al. (2018), Hình 10.5 “Procurement hierarchy” và Hình 10.6 “Procurement vs buying activities” (tr. 246–247) — sách mô tả hai cấp này ở phía khách hàng; theo khung của môn (quyết định GV, mục 3), ta áp dụng hai cấp **bên trong agency**.",
    next: "Hai cấp bên trong Nova.",
  });

  // 20 two levels inside agency
  s = slide("Agency cần hai cấp làm việc với nhà cung cấp");
  const lv = [["", "Procurement — chiến lược", "Buying — thực thi"], ["Câu hỏi", "Làm với ai, khung nào, cả năm?", "Sự kiện này: cái gì, của ai, giá, khi nào?"], ["Chu kỳ", "Năm / quý", "Từng sự kiện"], ["Người làm", "Ban giám đốc, trưởng sản xuất", "Producer, quản lý dự án, kế toán dự án"], ["Việc chính", "Kraljic · danh sách nhà cung cấp ưu tiên · thỏa thuận khung · đánh giá định kỳ", "Báo giá · hợp đồng · cọc · nghiệm thu · thanh toán · ghi nhận hiệu quả"]];
  lv.forEach((r, i) => { const y = 1.95 + i * 0.85, hh = i === 4 ? 1.1 : 0.72; r.forEach((c, j) => { const x = [0.6, 2.85, 7.85][j], w = [2.1, 4.85, 4.88][j]; if (i === 0) { if (j) { box(s, x, y, w, 0.72, j === 1 ? TEAL : YEL); T(s, c, x + 0.15, y, w - 0.3, 0.72, { bold: true, fontSize: 17, color: NAVY }); } } else { box(s, x, y, w, hh, CARD); T(s, c, x + 0.15, y, w - 0.3, hh, { fontSize: 14, bold: j === 0, color: j === 0 ? MU : TX }); } }); });
  src(s, "Nguồn: W07 lecture notes §3.2; S11 (EGG Events có Global Procurement Director); S25 (preferred supplier program).", 6.45);
  notes(s, {
    say: "Hai cấp bên trong Nova. Procurement hỏi: làm việc với ai, theo điều kiện khung nào, cho cả năm — chu kỳ năm hoặc quý — ban giám đốc, trưởng bộ phận sản xuất làm — việc chính: phân tích Kraljic, lập danh sách nhà cung cấp ưu tiên, ký thỏa thuận khung, đánh giá nhà cung cấp định kỳ. Buying hỏi: cho sự kiện này, đặt cái gì, của ai, giá bao nhiêu, khi nào — chu kỳ từng sự kiện — producer, quản lý dự án, kế toán dự án làm — việc chính: báo giá, hợp đồng, đặt cọc, nghiệm thu, thanh toán, và ghi nhận hiệu quả nhà cung cấp sau sự kiện.",
    gv: "W07 lecture notes §3.2. Ở agency lớn có thể có vị trí procurement riêng (S11). [NEEDS PROFESSOR INPUT: ví dụ thực tế của agency Việt Nam về cấp Procurement — khoảng trống C2.]",
    next: "Cấp Procurement làm gì với từng ô.",
  });

  // 21 procurement per cell
  s = slide("Cấp Procurement quyết định chiến lược cho từng ô");
  kraljic(s, 2.1, 1.95, 10.63, 4.4, [["Leverage", "Danh sách 2–3 nhà cung cấp ưu tiên; so giá định kỳ; gom khối lượng cả năm — vẫn giữ chuẩn chất lượng vì Key Account nhìn thấy", YEL], ["Strategic", "Chọn 1–2 đối tác; chia sẻ lịch sự kiện của Key Account sớm; cam kết khối lượng nhiều năm; họp đánh giá hai chiều", TEAL], ["Non-critical", "Mẫu đơn hàng chuẩn; giao cấp Buying tự quyết trong hạn mức", BLUE], ["Bottleneck", "Danh sách dự phòng đã thẩm định; điều khoản khung về giá và hủy; theo dõi hợp đồng venue có độc quyền", PINK]], 15);
  src(s, "Nhận định của người soạn, dựa trên chiến lược gốc CIPS (S01); W07 lecture notes §3.3.", 6.75);
  notes(s, {
    say: "Cấp Procurement quyết định chiến lược cho từng ô. Strategic: chọn một hai đối tác; chia sẻ lịch sự kiện của các Key Account càng sớm càng tốt; cam kết khối lượng nhiều năm để được ưu tiên; họp đánh giá định kỳ hai chiều. Bottleneck: danh sách dự phòng đã thẩm định; điều khoản khung về giá và hủy; theo dõi các hợp đồng venue có điều khoản độc quyền. Leverage: danh sách 2–3 nhà cung cấp ưu tiên, so giá định kỳ, gom khối lượng — nhưng vẫn giữ chuẩn chất lượng, vì An Phát nhìn thấy hạng mục này. Non-critical: mẫu đơn hàng chuẩn, giao cấp Buying tự quyết trong hạn mức.",
    gv: "Giới hạn với ô Leverage (nhận định): CIPS khuyến nghị “khai thác toàn bộ sức mua”; với agency, ép giá tới mức nhà cung cấp cắt chất lượng là tự làm hại mình.",
    next: "Trong thị trường nghiêng về người bán, agency phải chủ động làm một việc nữa.",
  });

  // 22 customer of choice
  s = slide("Agency chủ động trở thành “customer of choice” — khách hàng được nhà cung cấp ưu tiên");
  const cc = [["FaCompressArrowsAlt", "Gom chi tiêu, thu gọn số nhà cung cấp", TEAL], ["FaCalendarAlt", "Cam kết dài hạn: cùng khách sạn nhiều năm có thể được miễn phụ thu AV", YEL], ["FaFileContract", "Quy mô và hợp đồng khung", ORA], ["FaHandHoldingUsd", "Giữ cam kết thanh toán, cọc đúng hạn", PINK]];
  for (let i = 0; i < 4; i++) { const x = 0.6 + (i % 2) * 3.55, y = 1.95 + Math.floor(i / 2) * 2.1; box(s, x, y, 3.35, 1.9); await ic(s, cc[i][0], x + 0.2, y + 0.2, 0.75, cc[i][2]); T(s, cc[i][1], x + 0.2, y + 1.0, 2.95, 0.85, { fontSize: 14, valign: "top" }); }
  box(s, 7.85, 1.95, 4.88, 4.0, YEL);
  T(s, "“Being a customer of choice and having less suppliers that you work with will enable preferential rates and prioritisation.”", 8.1, 2.1, 4.4, 2.8, { fontSize: 17, italic: true, bold: true, color: NAVY, valign: "top" });
  T(s, "— CWT (S06)", 8.1, 5.0, 4.4, 0.5, { fontSize: 14, color: NAVY });
  src(s, "Nguồn: S06 (CWT); S05 (Grundfos); S09 (Smart Meetings). Chỉ trình bày hành động của agency (quyết định GV 5).", 6.25);
  notes(s, {
    say: "Thị trường nghiêng về người bán, nên agency phải chủ động trở thành khách hàng được nhà cung cấp ưu tiên — customer of choice. Bốn hành động: gom chi tiêu, thu gọn số nhà cung cấp; cam kết dài hạn — đặt cùng khách sạn nhiều năm có thể được miễn phụ thu AV; quy mô và hợp đồng khung; và giữ cam kết thanh toán, cọc đúng hạn. CWT viết: là customer of choice và làm việc với ít nhà cung cấp hơn sẽ giúp có giá ưu đãi và được ưu tiên phục vụ.",
    gv: "S06 (CWT, nguyên văn); S05 (quản lý ngành hàng Grundfos: dồn booking cho preferred suppliers “gom chi tiêu và tăng sức đàm phán”); S09 (miễn phụ thu AV). Quyết định GV 5: chỉ nói agency làm gì — không phân tích cách nhà cung cấp chấm điểm agency.",
    next: "Hai cấp phải nối với nhau.",
  });

  // 23 feedback loop
  s = slide("Dữ liệu từ từng sự kiện nuôi các quyết định chiến lược");
  const lp = [["Buying", "từng sự kiện: đúng hẹn? phát sinh? xử lý sự cố?", YEL, 0.6], ["Đánh giá nhà cung cấp", "ghi lại sau mỗi sự kiện", ORA, 4.75], ["Procurement", "cập nhật danh sách ưu tiên, thỏa thuận khung", TEAL, 8.9]];
  lp.forEach(([a, b, c, x], i) => { box(s, x, 2.0, 3.83, 2.0, c); T(s, a, x + 0.15, 2.1, 3.53, 0.8, { align: "center", bold: true, fontSize: 19, color: NAVY }); T(s, b, x + 0.15, 2.9, 3.53, 1.0, { align: "center", fontSize: 14, color: NAVY, valign: "top" }); if (i < 2) arrow(s, x + 3.87, 2.8, 0.25, 0.4, MU); });
  box(s, 0.6, 4.35, 12.13, 1.6, CARD);
  T(s, "“Supplier feedback, performance insights, and negotiation lessons shouldn’t disappear when an event ends.” — Virginie Raimondi, Global Procurement Director, EGG Events", 0.85, 4.35, 11.7, 1.6, { fontSize: 17, italic: true });
  src(s, "Nguồn: S11 (Skift Meetings, 4/8/2026). Ranh giới: RFP/RFQ, tiêu chí chọn nhà cung cấp, site check để Buổi 10.", 6.25);
  notes(s, {
    say: "Hai cấp phải nối với nhau. Dữ liệu từ từng sự kiện — nhà cung cấp có đúng hẹn không, phát sinh bao nhiêu, xử lý sự cố ra sao — được ghi lại, và trở thành đầu vào để cấp Procurement đánh giá nhà cung cấp, cập nhật danh sách ưu tiên. Giám đốc mua sắm toàn cầu của EGG Events nói: phản hồi về nhà cung cấp, hiểu biết về hiệu quả và bài học đàm phán không nên biến mất khi sự kiện kết thúc.",
    gv: "S11. Buổi 7 chỉ giới thiệu phân cấp và tập trung cấp chiến lược; quy trình thực thi chi tiết để Buổi 10.",
    next: "Khi hai cấp gãy thì sao? Bốn tình huống thật.",
  });

  // 24 four cases
  s = slide("Khi hai cấp gãy, sự kiện sụp — hoặc agency mất quyền mặc cả");
  const cs = [["Về đây bốn cánh chim trời", "Hà Nội, 12/2025", "Theo giám đốc âm nhạc: cọc 50% trễ hơn 10 ngày, lùi đợt thanh toán; ekip và nhiều nghệ sĩ rút", PINK, "S15"], ["K-Pop Festival Open Air #2", "Hà Nội, 12/2023", "2 ngày trước show, một ca sĩ chưa nhận cọc, chưa có hợp đồng ký đủ; show dừng", ORA, "S16"], ["Marriott – Hilton", "Mỹ, 2018", "Đơn phương giảm hoa hồng cho trung gian từ 10% xuống 7%", BLUE, "S14"], ["Vietravel – Vietravel Airlines", "Việt Nam, 2019–2026", "Lập hãng bay năm 2020 để “hoàn thiện hệ sinh thái”; 2025 thoái toàn bộ vốn", TEAL, "S21"]];
  cs.forEach(([a, b, d, c, r], i) => { const x = 0.6 + (i % 2) * 6.13, y = 1.95 + Math.floor(i / 2) * 2.2; box(s, x, y, 5.9, 2.0); box(s, x, y, 0.18, 2.0, c); T(s, a, x + 0.35, y + 0.1, 5.4, 0.5, { bold: true, fontSize: 17, color: c }); T(s, b + " · " + r, x + 0.35, y + 0.58, 5.4, 0.4, { fontSize: 12, color: MU }); T(s, d, x + 0.35, y + 0.98, 5.4, 0.95, { fontSize: 14, valign: "top" }); });
  src(s, "Chỉ nêu sự kiện đã được báo chí đưa tin; không quy lỗi cá nhân. Vietravel: không gán động cơ “chủ động nguồn cung”.", 6.45);
  notes(s, {
    say: "Bốn tình huống thật, mỗi cái một câu hỏi. “Về đây bốn cánh chim trời”: theo giám đốc âm nhạc, nhà sản xuất trả cọc 50% trễ hơn 10 ngày, liên tục lùi đợt thanh toán; ekip và nhiều nghệ sĩ rút, show hủy khi khán giả đã vào khán đài — nghệ sĩ là hạng mục Strategic; cấp Buying không giữ cam kết thì quan hệ chiến lược sụp. K-Pop Festival Open Air số 2: đến hai ngày trước show, một ca sĩ chưa nhận cọc, chưa có hợp đồng ký đủ; show dừng. Marriott và Hilton năm 2018 đơn phương giảm hoa hồng cho trung gian từ 10% xuống 7% — nhà cung cấp tập trung có thể đổi luật chơi. Vietravel lập hãng bay năm 2020 để hoàn thiện hệ sinh thái, đến 2025 thoái toàn bộ vốn. Câu hỏi: với hạng mục rủi ro cao, agency nên xây đối tác hay tự sở hữu?",
    gv: "S15, S16 (KCC qua nhiều báo), S14 (KCC về mức cắt 10% → 7%), S21. Vietravel: doanh nghiệp không nói là để chủ động nguồn cung — chỉ đặt vấn đề dạng câu hỏi. [NEEDS PROFESSOR INPUT: case agency VN xây đối tác chiến lược thành công với nhà cung cấp — khoảng trống B3.]",
    ask: "“Mỗi case: hạng mục nào, ô nào, cấp nào gãy?”",
    next: "Sang mục 7.3: ngồi vào bàn với An Phát.",
  });

  // 25 who is who
  s = slide("Trong mục 7.3: Key Account là người mua, KAMer là người của agency");
  box(s, 0.6, 2.0, 5.6, 2.6, TEAL);
  await ic(s, "FaUniversity", 0.9, 2.25, 1.0, NAVY, TEAL);
  T(s, "Customer (Buyer)", 2.1, 2.25, 3.9, 0.5, { bold: true, fontSize: 19, color: NAVY });
  T(s, "= Key Account — Ngân hàng An Phát", 2.1, 2.75, 3.9, 0.9, { fontSize: 16, color: NAVY, valign: "top" });
  box(s, 7.13, 2.0, 5.6, 2.6, YEL);
  await ic(s, "FaUserTie", 7.43, 2.25, 1.0, NAVY, YEL);
  T(s, "KAMer", 8.63, 2.25, 3.9, 0.5, { bold: true, fontSize: 19, color: NAVY });
  T(s, "= người của agency — Nova Events", 8.63, 2.75, 3.9, 0.9, { fontSize: 16, color: NAVY, valign: "top" });
  T(s, "⇄", 6.25, 2.9, 0.85, 0.8, { fontSize: 34, color: MU, align: "center" });
  box(s, 0.6, 4.85, 12.13, 1.4);
  T(s, "Cuộc gọi khó nhất của KAMer: “Năm nay bên mình cần giảm 15%.” KAMer trả lời tốt nhờ hiểu biết về nhà cung cấp vừa học ở 7.1–7.2.", 0.85, 4.85, 11.7, 1.4, { fontSize: 18 });
  notes(s, {
    say: "Đề cương mục 7.3. Trong môn này: Customer — người mua — là Key Account, Ngân hàng An Phát. KAMer là người của agency, Nova. Cuộc gọi khó nhất của một KAMer thường bắt đầu bằng câu: “Năm nay bên mình cần giảm 15%.” Hôm nay các bạn sẽ thấy: KAMer trả lời tốt câu đó nhờ hiểu biết về nhà cung cấp vừa học.",
    gv: "Quyết định GV 1 (27/9/2026). Ghi chú: Chương 10 giáo trình viết cho đúng tình huống này — KAMgr đối diện bộ phận mua của khách hàng — và gợi ý KAMgr tự hỏi “phòng mua của khách đặt mình ở ô nào trên ma trận Kraljic” (tr. 242–243). Theo quyết định GV 3, không trình bày góc nhìn phòng mua như một góc nhìn độc lập; nếu GV muốn, có thể nêu miệng như câu hỏi KAMer tự đặt. [NEEDS PROFESSOR INPUT]",
    next: "Hai kiểu đàm phán.",
  });

  // 26 distributive vs integrative
  s = slide("Đàm phán dựa trên giá trị là làm to chiếc bánh trước khi chia");
  const dv = [["Distributive", "đàm phán phân phối", ["Chia một chiếc bánh cố định", "Thường chỉ một vấn đề: giá", "Giữ thông tin, nhượng từng bước"], PINK], ["Integrative", "đàm phán tích hợp", ["“Expand the pie before dividing it”", "Nhiều vấn đề: giá, phạm vi, thời hạn, thanh toán, mức dịch vụ, rủi ro", "Tìm lợi ích sau lập trường; đánh đổi qua nhiều vấn đề"], TEAL]];
  dv.forEach(([a, b, items, c], i) => { const x = 0.6 + i * 4.25; box(s, x, 1.95, 4.0, 0.85, c); T(s, a + " · " + b, x + 0.2, 1.95, 3.6, 0.85, { bold: true, fontSize: 16, color: NAVY }); box(s, x, 2.95, 4.0, 3.3); T(s, bullets(items), x + 0.2, 3.05, 3.6, 3.1, { fontSize: 15, valign: "top", paraSpaceAfter: 8 }); });
  box(s, 9.1, 1.95, 3.63, 4.3, YEL);
  T(s, "“When companies believe they can make the pie grow, they collaborate, but when they think the size of the pie is fixed, then they fight over the size of the slices.”", 9.3, 2.05, 3.25, 3.4, { fontSize: 14, italic: true, bold: true, color: NAVY, valign: "top" });
  T(s, "— GS. Carlos Mena, trong Marcos et al. (2018, tr. 249)", 9.3, 5.45, 3.25, 0.7, { fontSize: 12, color: NAVY, valign: "top" });
  src(s, "Nguồn: PON, Harvard Law School (S12). Value-based negotiation = cách dùng của môn, xây trên integrative bargaining [VERIFY].", 6.45);
  notes(s, {
    say: "Hai kiểu đàm phán, theo Program on Negotiation của Harvard. Distributive — phân phối: chia một chiếc bánh cố định, bên này được thì bên kia mất; thường chỉ một vấn đề là giá; giữ thông tin, nhượng từng bước. Integrative — tích hợp: làm to chiếc bánh trước khi chia; nhiều vấn đề trên bàn — giá, phạm vi, thời hạn hợp đồng, lịch thanh toán, mức dịch vụ, rủi ro; tìm lợi ích đằng sau lập trường; nhượng ở vấn đề mình ít coi trọng để được ở vấn đề mình coi trọng. Giáo sư Carlos Mena, trong giáo trình, nói: khi các công ty tin có thể làm to chiếc bánh, họ hợp tác; khi nghĩ chiếc bánh cố định, họ tranh nhau từng miếng.",
    gv: "S12 (PON). Marcos et al. (2018, tr. 248–249), phỏng vấn GS. Carlos Mena. Định nghĩa “value-based negotiation” của môn: KAMer đàm phán theo kiểu tích hợp, mọi nhượng bộ neo vào giá trị Key Account nhận được và vào rủi ro nhượng bộ tạo ra [VERIFY — chưa có nguồn chuẩn cho quan hệ agency–client]. Giáo trình khuyên đọc Fisher & Ury, Getting to Yes (tr. 261).",
    next: "Để đàm phán giá trị, hai bên phải dùng đúng bốn chữ.",
  });

  // 27 cost price value risk
  s = slide("Phân biệt rõ bốn chữ: chi phí, giá, giá trị và rủi ro");
  const cpv = [["Chi phí", "Cost", "Tổng chi phí agency bỏ ra để cung cấp gói sản phẩm – dịch vụ", BLUE], ["Giá", "Price", "Mức agency chào Key Account để có gói đó", YEL], ["Giá trị", "Value", "Lợi ích (cứng và mềm) Key Account nhận được khi mua", TEAL]];
  cpv.forEach(([a, b, d, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 2.35, c); T(s, a, x + 0.2, 2.0, 3.5, 0.6, { bold: true, fontSize: 21, color: NAVY }); T(s, b, x + 0.2, 2.55, 3.5, 0.4, { fontSize: 14, italic: true, color: NAVY }); T(s, d, x + 0.2, 3.0, 3.5, 1.2, { fontSize: 15, color: NAVY, valign: "top" }); });
  box(s, 0.6, 4.45, 12.13, 1.8, PINK);
  T(s, [{ text: "Rủi ro — cho agency: ", options: { bold: true } }, { text: "nguy cơ pháp lý, thương mại, uy tín khi cung cấp thêm dịch vụ.", options: { breakLine: true } }, { text: "Rủi ro — cho Key Account: ", options: { bold: true } }, { text: "nguy cơ khi giao phần quan trọng của mình cho agency." }], 0.85, 4.45, 11.7, 1.8, { fontSize: 17, color: NAVY });
  src(s, "Nguồn: Marcos et al. (2018, Hình 10.8, tr. 255–256), áp vào quan hệ agency – Key Account.", 6.45);
  notes(s, {
    say: "Giáo trình nhắc: trong đàm phán, bốn chữ này hay bị dùng lẫn. Chi phí — tổng chi phí agency bỏ ra để cung cấp. Giá — mức agency chào Key Account. Giá trị — lợi ích cứng và mềm Key Account nhận được. Và rủi ro — hai phía: với agency là nguy cơ pháp lý, thương mại, uy tín khi cung cấp thêm; với Key Account là nguy cơ khi giao phần quan trọng của mình cho agency. Người mua muốn giá thấp, nhưng cũng muốn chắc chắn nhà cung cấp không làm hỏng việc của họ. KAMer phải lượng hóa rủi ro từ góc của khách hàng.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 10.8 “Cost: price: value: risk” và tr. 256: “Buyers strive for low prices but they equally want assurance… KAMgrs should always quantify risk from the buyer perspective”. Đây là nguồn trực tiếp cho “distinguishing Risk and Value” của đề cương 7.3.",
    next: "Tách Risk và Value bằng kết quả Kraljic.",
  });

  // 28 risk vs value via Kraljic
  s = slide("Nhượng ở Leverage và Non-critical; bảo vệ Strategic và Bottleneck bằng dữ kiện");
  box(s, 0.6, 1.95, 6.0, 4.3, TEAL);
  T(s, "VALUE — nhượng có điều kiện", 0.85, 2.05, 5.5, 0.6, { bold: true, fontSize: 19, color: NAVY });
  T(s, "Leverage · Non-critical", 0.85, 2.6, 5.5, 0.45, { fontSize: 15, italic: true, color: NAVY });
  T(s, bullets(["Điều chỉnh được mà khách ít nhận ra", "Ví dụ: gom tuyến xe, chuẩn hóa in ấn, đổi quà", "Đổi lại: thời hạn hợp đồng, lịch thanh toán, chốt sớm"]), 0.85, 3.15, 5.5, 3.0, { fontSize: 16, color: NAVY, valign: "top", paraSpaceAfter: 8 });
  box(s, 6.85, 1.95, 5.88, 4.3, PINK);
  T(s, "RISK — giải thích, đổi chỗ khác", 7.1, 2.05, 5.4, 0.6, { bold: true, fontSize: 19, color: NAVY });
  T(s, "Strategic · Bottleneck", 7.1, 2.6, 5.4, 0.45, { fontSize: 15, italic: true, color: NAVY });
  T(s, bullets(["Cắt hoặc đổi = chuyển rủi ro sang chính sự kiện của khách", "Giải thích bằng dữ kiện: không có địa điểm thay, điều khoản độc quyền, cọc đã trả", "Đề xuất giảm chi phí ở chỗ khác"]), 7.1, 3.15, 5.4, 3.0, { fontSize: 16, color: NAVY, valign: "top", paraSpaceAfter: 8 });
  src(s, "Nhận định của môn (khung đã duyệt, mục 3). Quản trị nhà cung cấp tốt tạo nên sức mạnh đàm phán của agency với Key Account.", 6.45);
  notes(s, {
    say: "Đây là mối nối giữa 7.1 và 7.3. Khi An Phát đưa yêu cầu — giảm giá, đổi nhà cung cấp, cắt hạng mục — KAMer hỏi: yêu cầu này chạm vào hạng mục ở ô nào? Nếu chạm Leverage hay Non-critical: đó là vùng Value — điều chỉnh được mà khách ít nhận ra; nhượng, nhưng có điều kiện — đổi lại thời hạn hợp đồng, lịch thanh toán, chốt sớm. Nếu chạm Strategic hay Bottleneck: vùng Risk — cắt hay đổi là chuyển rủi ro sang chính sự kiện của khách; không nhượng im lặng; giải thích bằng dữ kiện, và đề xuất giảm ở chỗ khác. Quản trị nhà cung cấp tốt là năng lực tạo nên sức mạnh đàm phán của agency. KAMer không biết hạng mục nào là Bottleneck sẽ nhượng nhầm chỗ — và trả giá vào ngày sự kiện.",
    gv: "W07 lecture notes §4.3 — câu chốt nói to.",
    next: "Bộ công cụ của KAMer ngoài việc giảm giá.",
  });

  // 29 toolkit
  s = slide("KAMer có bốn công cụ ngoài việc giảm giá");
  const tk = [["FaSearchDollar", "Minh bạch lý do chi phí", "Benchmark theo thị trường, mùa, định dạng; cân nhắc ngày thấp điểm (S10, S04)", TEAL], ["FaFileSignature", "Đàm phán điều khoản, không chỉ giá", "Attrition, hủy, bất khả kháng, lịch thanh toán, mức dịch vụ — phản ánh điều khoản nhà cung cấp vào hợp đồng với Key Account (S11)", YEL], ["FaChartLine", "Nói bằng giá trị: ROI và ROE", "Chỉ 24% tổ chức có chỉ số ROI trong chính sách sự kiện; Amex GBT đề xuất Return on Experience (S05, chưa KCC)", ORA], ["FaWallet", "Hiểu dòng tiền của mình", "Nhà cung cấp đòi cọc sớm, khách trả chậm; mỗi nhượng bộ giá ăn thẳng vào biên mỏng (S15, S19, S21)", PINK]];
  for (let i = 0; i < 4; i++) { const x = 0.6 + (i % 2) * 6.13, y = 1.95 + Math.floor(i / 2) * 2.2; box(s, x, y, 5.9, 2.0); await ic(s, tk[i][0], x + 0.2, y + 0.2, 0.85, tk[i][3]); T(s, tk[i][1], x + 1.25, y + 0.15, 4.5, 0.6, { bold: true, fontSize: 17, color: tk[i][3] }); T(s, tk[i][2], x + 1.25, y + 0.75, 4.5, 1.2, { fontSize: 14, valign: "top" }); }
  src(s, "[VERIFY: chuyển điều khoản nhà cung cấp sang hợp đồng khách hàng — đối chiếu Bộ luật Dân sự 2015, Luật Thương mại hiện hành trước khi dạy chi tiết.]", 6.45);
  notes(s, {
    say: "Bốn công cụ ngoài việc giảm giá. Một: minh bạch lý do chi phí — benchmark theo thị trường, mùa, định dạng; cân nhắc ngày thấp điểm. Hai: đàm phán điều khoản, không chỉ giá — attrition, hủy, bất khả kháng, lịch thanh toán, mức dịch vụ; với agency, các điều khoản đã ký với nhà cung cấp phải được phản ánh vào hợp đồng với Key Account, nếu không agency đứng giữa và gánh phần chênh. Ba: nói bằng giá trị — chỉ 24% tổ chức có chỉ số ROI trong chính sách sự kiện; Amex GBT đề xuất đo Return on Experience. Bốn: hiểu dòng tiền của mình — nhà cung cấp Strategic đòi cọc sớm, khách thường trả chậm; mỗi nhượng bộ giá ăn thẳng vào một biên lợi nhuận rất mỏng.",
    gv: "W07 lecture notes §4.4. S11 (Brian Santor: “…some of the biggest financial and legal protections come from negotiating contract terms…”). Nối Buổi 6 (chi phí vốn do trả chậm). [NEEDS PROFESSOR INPUT: biên lợi nhuận thực tế của một event agency VN — khoảng trống D3.] Pháp lý: khoảng trống D2 — nhờ giảng viên luật kinh tế góp ý.",
    next: "Giáo trình còn gợi ý một công cụ nữa: cách tính giá trong hợp đồng.",
  });

  // 30 contract options
  s = slide("Cách tính giá cũng là một lựa chọn: theo chi phí, theo giá trị, hay theo kết quả");
  const co = [["Cost-plus", "Chi phí + biên. Dễ quản lý, dễ so giá — khách mặc cả trên biên của agency", "Phí quản lý % trên ngân sách", BLUE], ["Value-based", "Giá theo giá trị tạo ra cho khách. Rủi ro tăng cho cả hai, cần chứng minh giá trị", "Gói chương trình năm, giá theo mục tiêu của An Phát", YEL], ["Outcome-based", "Trả theo kết quả thực tế. Lợi lớn hơn nhưng agency chịu rủi ro lỗ", "Phần phí thưởng theo chỉ số đã thống nhất", PINK]];
  co.forEach(([a, b, c, col], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 0.75, col); T(s, a, x + 0.2, 1.95, 3.5, 0.75, { bold: true, fontSize: 19, color: NAVY }); box(s, x, 2.85, 3.9, 2.1); T(s, b, x + 0.2, 2.95, 3.5, 1.9, { fontSize: 15, valign: "top" }); box(s, x, 5.05, 3.9, 1.2, CARD); T(s, [{ text: "Ở agency: ", options: { bold: true, color: col } }, { text: c }], x + 0.2, 5.05, 3.5, 1.2, { fontSize: 14 }); });
  T(s, "Độ phức tạp và rủi ro – phần thưởng tăng dần →", 0.6, 6.35, 12.13, 0.4, { fontSize: 13, color: MU, align: "center" });
  src(s, "Nguồn: Marcos et al. (2018, Hình 10.9, tr. 257–258). Dòng “Ở agency”: ví dụ của người soạn.", 6.75);
  notes(s, {
    say: "Giáo trình gợi ý: cách tính giá cũng là một lựa chọn để đàm phán. Cost-plus: chi phí cộng biên — dễ quản lý, dễ so giá; khách mặc cả trên biên của agency. Ở agency: phí quản lý tính phần trăm trên ngân sách. Value-based: giá theo giá trị tạo ra cho khách — rủi ro tăng cho cả hai, cần chứng minh giá trị. Ví dụ: gói chương trình năm, giá theo mục tiêu của An Phát. Outcome-based: trả theo kết quả thực tế — lợi lớn hơn nhưng agency chịu rủi ro lỗ. Ví dụ: một phần phí thưởng theo chỉ số đã thống nhất. Đi từ trái sang phải, độ phức tạp, rủi ro và phần thưởng đều tăng.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 10.9 “Supplier and customer risk and reward” và tr. 257–258 (cost ‘plus’ based – value based – results (outcome) based; gain share; “a core fee… with targets set which generate bonuses”). Ví dụ agency là của người soạn. Nối Buổi 5 (value appraisal) và Buổi 8 (đo hiệu quả).",
    next: "Nói thế nào để chuyển cuộc đàm phán từ giá sang giá trị?",
  });

  // 31 sentence templates
  s = slide("Một câu nói có thể chuyển cuộc đàm phán từ giá sang giá trị");
  const sn = [["“15% đó là mục tiêu cho cả danh mục hay riêng sự kiện này? Năm nay ưu tiên số một của anh/chị cho hội nghị là gì?”", "tìm lợi ích sau lập trường", TEAL], ["“Có ba chỗ bên em giảm được mà khách mời gần như không nhận ra… Còn ballroom và AV thì em xin giải thích vì sao cắt ở đó là chuyển rủi ro sang chính sự kiện của mình.”", "tách Risk và Value", YEL], ["“Nếu mình chốt hợp đồng hai năm, bên em giữ được giá ballroom năm sau. Phần tiết kiệm đó em chuyển vào báo giá.”", "đánh đổi qua nhiều vấn đề", ORA], ["“Bên em đồng ý giãn lịch thanh toán, nhưng khoản cọc cho khách sạn và nghệ sĩ phải được chuyển trước ngày 15/11.”", "chuyển điều khoản nhà cung cấp", PINK]];
  sn.forEach(([a, b, c], i) => { const y = 1.95 + i * 1.12; box(s, 0.6, y, 9.3, 1.0); T(s, a, 0.8, y, 8.95, 1.0, { fontSize: 13, italic: true }); box(s, 10.05, y, 2.68, 1.0, c); T(s, b, 10.15, y, 2.48, 1.0, { fontSize: 14, bold: true, color: NAVY, align: "center" }); });
  src(s, "W07 lecture notes §4.5. Gợi ý: che cột phải, cho lớp đoán mỗi câu dùng kỹ thuật nào.", 6.5);
  notes(s, {
    say: "Bốn mẫu câu. Một: “15% đó là mục tiêu cho cả danh mục hay riêng sự kiện này? Năm nay ưu tiên số một của anh chị cho hội nghị là gì?” — tìm lợi ích sau lập trường. Hai: “Có ba chỗ bên em giảm được mà khách mời gần như không nhận ra: xe, in ấn, quà. Còn ballroom và AV thì em xin giải thích vì sao cắt ở đó là chuyển rủi ro sang chính sự kiện của mình.” — tách Risk và Value. Ba: “Nếu mình chốt hợp đồng hai năm, bên em giữ được giá ballroom năm sau, phần tiết kiệm em chuyển vào báo giá.” — đánh đổi qua nhiều vấn đề. Bốn: “Bên em đồng ý giãn lịch thanh toán, nhưng khoản cọc cho khách sạn và nghệ sĩ phải được chuyển trước 15/11.” — chuyển điều khoản nhà cung cấp sang hợp đồng khách hàng.",
    gv: "Cho lớp đoán kỹ thuật trước khi lật cột phải. Chuyển sang Thực hành 2.",
    next: "Ba hiểu lầm về đàm phán dựa trên giá trị.",
  });

  // 32 misconceptions 7.3
  s = slide("Ba hiểu lầm về đàm phán dựa trên giá trị");
  const m3 = [["“Đàm phán giá trị là không bao giờ giảm giá”", "Có giảm — ở đúng chỗ, và đổi lấy một điều có giá trị"], ["“Hạng mục nào cũng gọi là ‘rủi ro’ để khỏi giảm”", "Khách mất lòng tin; lập luận rủi ro phải gắn dữ kiện cụ thể"], ["“Key Account ép giá là đối thủ”", "Khách cũng chịu áp lực cắt ngân sách; mục tiêu là quan hệ dài hạn"]];
  for (let i = 0; i < 3; i++) { const y = 1.95 + i * 1.4; box(s, 0.6, y, 5.6, 1.2); await ic(s, "FaTimes", 0.8, y + 0.25, 0.7, PINK); T(s, m3[i][0], 1.7, y, 4.4, 1.2, { fontSize: 16, bold: true }); arrow(s, 6.35, y + 0.4, 0.6, 0.45, YEL); box(s, 7.1, y, 5.63, 1.2, TEAL); T(s, m3[i][1], 7.3, y, 5.25, 1.2, { fontSize: 16, bold: true, color: NAVY }); }
  T(s, "“Dropping your price is not adding value.” — Marcos et al. (2018, tr. 261)", 0.6, 6.2, 12.13, 0.5, { fontSize: 17, bold: true, color: YEL });
  notes(s, {
    say: "Ba hiểu lầm. Một: đàm phán giá trị là không bao giờ giảm giá — sai; có giảm, nhưng ở đúng chỗ, và đổi lấy một điều có giá trị. Hai: hạng mục nào cũng gọi là rủi ro để khỏi giảm — sai; khách sẽ mất lòng tin; lập luận rủi ro chỉ thuyết phục khi gắn với dữ kiện cụ thể. Ba: Key Account ép giá là đối thủ — sai; khách cũng chịu áp lực cắt ngân sách; mục tiêu là giữ quan hệ dài hạn, không phải thắng một ván. Giáo trình tóm lại: giảm giá không phải là tạo thêm giá trị.",
    gv: "W07 lecture notes §4.6; Marcos et al. (2018), “Tips…” mẹo 5 (tr. 261). Cắt ngân sách là thách thức của 30% chuyên gia năm 2026 (S05).",
    next: "Một lưu ý đạo đức.",
  });

  // 33 ethics
  s = slide("Agency đứng giữa hai bên — minh bạch về khoản mình hưởng từ nhà cung cấp");
  box(s, 0.6, 1.95, 6.0, 3.6);
  await ic(s, "FaCheck", 0.85, 2.2, 0.85, TEAL);
  T(s, "Nên", 1.9, 2.2, 4.5, 0.85, { bold: true, fontSize: 20, color: TEAL });
  T(s, bullets(["Nói rõ cách tính phí: phí quản lý hay markup", "Chọn nhà cung cấp theo năng lực và giá trị cho khách", "Báo sớm khi điều khoản nhà cung cấp tạo rủi ro cho khách"]), 0.9, 3.2, 5.5, 2.2, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.85, 1.95, 5.88, 3.6);
  await ic(s, "FaTimes", 7.1, 2.2, 0.85, PINK);
  T(s, "Không", 8.15, 2.2, 4.4, 0.85, { bold: true, fontSize: 20, color: PINK });
  T(s, bullets(["Nhận hoa hồng ẩn từ nhà cung cấp mà khách không biết", "Ép nhà cung cấp đến mức họ cắt chất lượng", "Trả chậm nhà cung cấp để giữ tiền của khách"]), 7.15, 3.2, 5.4, 2.2, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  T(s, "Niềm tin của Key Account (Buổi 4) mất ngay khi họ phát hiện agency hưởng lợi ngầm.", 0.6, 5.85, 12.13, 0.6, { fontSize: 18, bold: true, color: YEL });
  notes(s, {
    say: "Agency đứng giữa hai bên nên dễ có xung đột lợi ích. Nên: nói rõ cách tính phí — phí quản lý hay markup; chọn nhà cung cấp theo năng lực và giá trị cho khách; báo sớm khi điều khoản nhà cung cấp tạo rủi ro cho khách. Không: nhận hoa hồng ẩn từ nhà cung cấp mà khách không biết; ép nhà cung cấp đến mức họ cắt chất lượng; trả chậm nhà cung cấp để giữ tiền của khách — nhớ “Về đây bốn cánh chim trời”. Niềm tin của Key Account mất ngay khi họ phát hiện agency hưởng lợi ngầm.",
    gv: "Nối CLO8 và Buổi 4 (niềm tin: integrity). Ví dụ hoa hồng AV của khách sạn (S10, chưa KCC) cho thấy cấu trúc hoa hồng có tồn tại trong ngành. [NEEDS PROFESSOR INPUT: nếu muốn dẫn quy định pháp luật hoặc quy định nội bộ ngân hàng về xung đột lợi ích, cần văn bản cụ thể.] Nguyên tắc nghề nghiệp, không phải tư vấn pháp lý.",
    next: "Thực hành 2: đàm phán với An Phát.",
  });

  // 34 practice 2
  s = await L.practice("Thực hành 2 · 30 phút: An Phát đòi giảm 15% — đàm phán dựa trên giá trị", [["3’", "Phát thẻ vai: 3 cặp — nhóm An Phát (người mua) và đội KAM Nova; mỗi nhóm 1 người quan sát", TEAL], ["6’", "Chuẩn bị: mục tiêu, điều sẵn sàng đổi, “điểm dừng”. Đội Nova mang ma trận Thực hành 1", YEL], ["10’", "Đàm phán: An Phát mở đầu; kết thúc bằng biên bản 3 dòng", PINK], ["11’", "Lật thẻ (3’) và tổng kết toàn lớp (8’): mỗi yêu cầu chạm ô nào? Nova đổi được gì?", BLUE]], "FaHandshake", "Sản phẩm", "Biên bản 3 dòng: thống nhất gì · mỗi bên đổi được gì · bước tiếp theo", "Yêu cầu: giảm 15% · đổi AV sang đơn vị quen · giãn thanh toán.", YEL);
  notes(s, {
    say: "Thực hành 2, 30 phút. Tình huống: hôm nay là 20/10, Nova đã ký hợp đồng 2,4 tỷ với An Phát cho gala 12/12. An Phát mời họp gấp với ba yêu cầu: giảm 15%; đổi AV sang một đơn vị quen của ngân hàng vì rẻ hơn; và giãn lịch thanh toán. Họ muốn giữ nguyên ca sĩ và chất lượng gala. Ba cặp: một nhóm là An Phát, một nhóm là đội KAM Nova; mỗi nhóm cử một người quan sát. Sáu phút chuẩn bị — đội Nova mang ma trận Kraljic từ Thực hành 1. Mười phút đàm phán, kết thúc bằng biên bản ba dòng. Rồi lật thẻ và tổng kết: mỗi yêu cầu chạm vào ô nào; Nova nhượng ở đâu và đổi lại được gì.",
    gv: "Phiếu W07_activity_S6_dam_phan_gia_tri.md (thẻ vai mật: ngân sách thật bị cắt 10%; CEO mới phát biểu ở gala — không chấp nhận rủi ro AV; sẵn sàng ký 2 năm nếu được hỏi đúng). Mốc phút 93–123. Chiếu slide 28 và 31 trong lúc chuẩn bị.",
    next: "Tổng hợp.",
  });

  // 35 summary
  s = slide("Ba ý của Buổi 7 — và một trang mới cho kế hoạch");
  const sm = [["7.1", "Xếp hạng mục theo profit impact × supply risk, rồi suy ra vị thế nhà cung cấp; ô đổi theo mùa, quy mô, điều khoản", TEAL], ["7.2", "Procurement: làm với ai, khung nào, cả năm; Buying: làm đúng từng sự kiện và ghi lại hiệu quả; agency chủ động là customer of choice", YEL], ["7.3", "Phân biệt chi phí – giá – giá trị – rủi ro; nhượng ở Leverage/Non-critical, bảo vệ Strategic/Bottleneck bằng dữ kiện, luôn đổi lấy điều có giá trị", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.25; box(s, 0.6, y, 1.3, 1.05, c); T(s, k, 0.6, y, 1.3, 1.05, { align: "center", bold: true, color: NAVY, fontSize: 22 }); box(s, 2.1, y, 10.63, 1.05); T(s, t, 2.35, y, 10.2, 1.05, { fontSize: 15 }); });
  box(s, 0.6, 5.85, 12.13, 0.8, BLUE);
  T(s, "Kế hoạch cuối kỳ: các hạng mục nhà cung cấp chính của dự án cũ nằm ở ô nào — và nhóm quản trị chúng ra sao để bảo vệ giá trị cho khách?", 0.85, 5.85, 11.7, 0.8, { fontSize: 15, bold: true, color: NAVY });
  notes(s, {
    say: "Ba ý của Buổi 7. Mục 7.1: xếp hạng mục theo tác động lợi nhuận và rủi ro nguồn cung, rồi suy ra vị thế nhà cung cấp; ô đổi theo mùa, quy mô, điều khoản. Mục 7.2: Procurement quyết định làm với ai, theo khung nào, cho cả năm; Buying làm đúng từng sự kiện và ghi lại hiệu quả; agency chủ động trở thành customer of choice. Mục 7.3: phân biệt chi phí, giá, giá trị, rủi ro; nhượng ở Leverage và Non-critical, bảo vệ Strategic và Bottleneck bằng dữ kiện, và luôn đổi nhượng bộ lấy một điều có giá trị. Với kế hoạch cuối kỳ: thêm một trang về các hạng mục nhà cung cấp chính của dự án cũ.",
    next: "Ba câu kiểm tra nhanh.",
  });

  // 36 quick check
  s = L.quickCheck(["Vì sao nói “khách sạn là nhà cung cấp chiến lược” là nói thiếu?", "Khác nhau giữa cấp Procurement và cấp Buying trong agency là gì?", "Khi An Phát đòi đổi AV sang đơn vị rẻ hơn, KAMer nên trả lời theo vùng Risk hay Value? Vì sao?"]);
  notes(s, { say: "Ba câu kiểm tra nhanh. Một: vì sao nói “khách sạn là nhà cung cấp chiến lược” là nói thiếu? Hai: khác nhau giữa cấp Procurement và Buying trong agency là gì? Ba: khi An Phát đòi đổi AV sang đơn vị rẻ hơn, KAMer nên trả lời theo vùng Risk hay Value — vì sao?", gv: "Gợi ý: (1) Kraljic xếp hạng mục; cùng khách sạn có hạng mục ở nhiều ô; (2) dài hạn, khung, cả năm vs từng sự kiện; (3) Risk — AV là Bottleneck do điều khoản venue và phiên CEO phát biểu; giải thích phí kết nối, trách nhiệm khi sự cố, đề xuất giảm ở chỗ khác.", ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.", next: "Phiếu cuối giờ." });

  // 37 exit
  s = await L.exitTicket("Một hạng mục nhà cung cấp trong dự án cũ: nằm ở ô nào lúc sự kiện diễn ra? Nhóm đã làm theo kiểu Procurement hay chỉ Buying?", "Trong đóng vai, một yêu cầu của Key Account mà đội Nova không nên nhượng là gì? Vì sao (ô nào)?");
  notes(s, { say: "Phiếu cuối giờ. Một: chọn một hạng mục nhà cung cấp trong dự án cũ — nó nằm ở ô nào lúc sự kiện diễn ra; nhóm đã làm việc với nhà cung cấp theo kiểu Procurement hay chỉ Buying? Hai: trong đóng vai, một yêu cầu của Key Account mà đội Nova không nên nhượng là gì — vì sao, gắn với ô nào?", gv: "Xem: (a) SV xếp hạng mục hay vẫn xếp tên công ty; (b) dùng cả hai trục, không chỉ chi phí; (c) câu 2 gắn lập luận rủi ro với dữ kiện.", next: "Buổi sau." });

  // 38 next
  s = await L.nextSession("Không có bài về nhà. Buổi 8: tổ chức quan hệ với Key Account ở nhiều cấp", "Buổi 8 · Đội KAM và đo hiệu quả", "Hôm nay KAMer đàm phán được nhờ quan hệ tốt với cả Key Account lẫn nhà cung cấp. Buổi sau: từ bow-tie sang diamond — quan hệ nhiều cấp — và đo hiệu quả quan hệ.", ["Ảnh ma trận Kraljic và biên bản đàm phán", "Hồ sơ dự án cũ"]);
  notes(s, { say: "Không có bài về nhà. Hôm nay KAMer đàm phán được nhờ quan hệ tốt với cả Key Account lẫn nhà cung cấp. Buổi 8: làm sao tổ chức quan hệ với Key Account ở nhiều cấp — từ mô hình bow-tie sang diamond — và đo hiệu quả của quan hệ đó.", gv: "[NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 7 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 39 refs
  s = L.refs([
    [["American Express Global Business Travel. (2025). "], ["2026 global meetings & events forecast", 1], ["."]],
    [["Chartered Institute of Procurement & Supply. (n.d.). "], ["Kraljic matrix – What is the Kraljic matrix?", 1], [" CIPS."]],
    [["Chartered Institute of Procurement & Supply. (n.d.). "], ["What is procurement?", 1], [" CIPS."]],
    [["CWT. (n.d.). "], ["How meetings & events programs can navigate a volatile planning environment", 1], ["."]],
    [["Global Business Travel Association. (2025, July 21). "], ["Global business travel and events prices set to stabilize through 2025 and 2026", 1], [" [Press release]."]],
    [["Kraljic, P. (1983, September). Purchasing must become supply management. "], ["Harvard Business Review", 1], ["."]],
    [["Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). "], ["Implementing key account management: Designing customer-centric processes for mutual growth", 1], [". Kogan Page."]],
    [["PON Staff. (2026, June 15). "], ["Expanding the pie: Integrative versus distributive bargaining", 1], [". Program on Negotiation at Harvard Law School."]],
    [["Scofidio, B. (2026, August 4). Procurement to planners: We’re not the enemy. "], ["Skift Meetings", 1], ["."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 7, theo APA 7. Chương 10 của Marcos và cộng sự là phần đọc thêm.", gv: "Báo chí về các case (S13–S16, S21) và báo giá agency (S18): danh mục APA đầy đủ trong buoi-07_tu-lieu-tong-hop.md, mục 6. Kraljic (1983) mới đọc trang HBR, chưa đọc toàn văn — GV đang tìm bản PDF.", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
