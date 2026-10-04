// EVM1110E Buổi 11 — Spreading Value: Media & Influencers (Phần 3, buổi 3/4)
// usage: NODE_PATH=<node_modules> node w11.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W11_slides.pptx";
const L = make(FONT, "Bài 11: Lan tỏa giá trị — báo chí và người có ảnh hưởng");
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
  let s = L.titleSlide("Bài 11: Lan tỏa giá trị — báo chí và người có ảnh hưởng", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 11\nSpreading Value: Media & Influencers\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 11 — Bài 11: Lan tỏa giá trị, báo chí và người có ảnh hưởng. Buổi 10 ta chọn những đối tác làm ra sự kiện. Hôm nay là những đối tác kể lại sự kiện — và kể trước cả khi sự kiện diễn ra.", gv: "Phần 3, buổi 3/4. Mở đầu bằng 2–3 “điều còn mơ hồ” từ phiếu cuối giờ Buổi 10 (≤3 phút). Ranh giới (quyết định GV 3): hôm nay là phòng ngừa; xử lý khủng hoảng → Buổi 12; pháp lý chỉ nhận diện rủi ro.", next: "Anh Minh có một mong muốn." });

  // 2 hook
  s = slide("Anh Minh muốn chính các CEO đến gala — Nova mời ai giúp?");
  box(s, 0.6, 1.95, 7.0, 4.3, TX);
  await ic(s, "FaCommentDots", 0.9, 2.2, 1.0, TEAL);
  T(s, "Anh Minh · tháng 9", 2.1, 2.2, 5.3, 1.0, { fontSize: 16, color: MU });
  T(s, "“Năm ngoái mời 600 khách, chỉ 62% xác nhận, và gần một phần ba cử cấp dưới đi thay. Năm nay tôi muốn chính các CEO đến. Nova có ý tưởng gì không?”", 0.95, 3.35, 6.4, 2.2, { fontSize: 18.5, color: NAVY, italic: true, valign: "top" });
  T(s, "Số liệu giả định.", 0.95, 5.6, 6.4, 0.45, { fontSize: 14, color: PINK, bold: true });
  box(s, 7.9, 1.95, 4.83, 4.3);
  T(s, "Giơ tay: Nova nên…", 8.15, 2.1, 4.4, 0.6, { bold: true, fontSize: 17, color: YEL });
  [["A · Ca sĩ 3 triệu follower làm MC", PINK], ["B · Chuyên gia kinh tế làm diễn giả chính", TEAL], ["C · Nhà báo kinh tế phỏng vấn diễn giả trước", BLUE]].forEach(([t, c], i) => { box(s, 8.2, 2.85 + i * 1.08, 4.23, 0.92, c); T(s, t, 8.35, 2.85 + i * 1.08, 4.0, 0.92, { fontSize: 15.5, bold: true, color: NAVY }); });
  notes(s, {
    say: "Anh Minh nhắn Nova: năm ngoái mời 600 khách, chỉ 62% xác nhận, và gần một phần ba cử cấp dưới đi thay. Năm nay tôi muốn chính các CEO đến. Nova có ý tưởng gì không? Giơ tay: Nova nên mời một ca sĩ 3 triệu follower làm MC, một chuyên gia kinh tế uy tín làm diễn giả chính, hay nhờ một nhà báo kinh tế phỏng vấn diễn giả trước sự kiện?",
    gv: "Giáo án S1 (phút 0–5). Chốt: “Không có đáp án đúng tuyệt đối. Nhưng câu hỏi đúng không phải ‘ai nổi tiếng nhất’, mà là CEO của khách hàng An Phát tin ai, đọc gì.” Số liệu giả định.",
    ask: "“A, B hay C?”",
    next: "Ba câu hỏi của hôm nay.",
  });

  // 3 three questions
  s = slide("Buổi 11 trả lời ba câu hỏi: chọn ai, ký và đo thế nào, khuếch đại ở đâu");
  const q3 = [["11.1 – 11.2", "Chọn ai?", "Phân loại KOL, chất lượng nội dung, cộng hưởng; nhắm khán giả và bản đồ nhà báo", "FaUserCheck", TEAL], ["11.3", "Ký và đo thế nào?", "Booking, thanh toán, báo cáo đo lường chiến dịch", "FaFileSignature", YEL], ["11.4", "Khuếch đại ở đâu?", "Dùng báo chí, KOL để khuếch đại điểm chạm trước sự kiện", "FaBullhorn", PINK]];
  for (let i = 0; i < 3; i++) { const [k, a, b, icn, c] = q3[i], x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 4.3); await ic(s, icn, x + 1.4, 2.15, 1.1, c); T(s, k, x + 0.2, 3.35, 3.5, 0.5, { align: "center", fontSize: 16, color: MU }); T(s, a, x + 0.2, 3.8, 3.5, 0.6, { align: "center", bold: true, fontSize: 22, color: c }); T(s, b, x + 0.25, 4.45, 3.4, 1.7, { align: "center", fontSize: 15.5, valign: "top" }); }
  notes(s, {
    say: "Ba câu hỏi. Mục 11.1 và 11.2 — chọn ai: phân loại KOL, chất lượng nội dung, mức cộng hưởng; nhắm khán giả và bản đồ nhà báo. Mục 11.3 — ký và đo thế nào: booking, thanh toán, báo cáo đo lường. Mục 11.4 — khuếch đại ở đâu: dùng báo chí và KOL cho các điểm chạm trước sự kiện của khách An Phát.",
    gv: "Đề cương Session 11: 11.1 Classifying KOLs/Influencers, content quality, community resonance; 11.2 Audience targeting and Journalist mapping; 11.3 Booking management, payment, campaign measurement reports; 11.4 Practice: Media/KOLs to amplify Touchpoints in the Pre-purchase stage.",
    next: "Influencer marketing là gì?",
  });

  // 4 definition
  s = slide("Influencer marketing là trả công cho người khác nói về mình — và từ 2026 họ có nghĩa vụ pháp lý");
  defCards(s, [
    ["Campbell & Farrell (2020)", TEAL, "“Influencer marketing is the practice of compensating individuals for posting about a product or service on social media.”\n\nChữ quan trọng: compensating — có trả công.", "(X01)"],
    ["Luật Quảng cáo 2025", YEL, "“Người chuyển tải sản phẩm quảng cáo là người trực tiếp quảng cáo, khuyến nghị, xác nhận sản phẩm, hàng hóa, dịch vụ trên mạng …”", "(Luật 75/2025/QH15, Điều 2 khoản 8 — X05)"],
    ["Môn PR trong TCSK", BLUE, "PR là “người khác nói về mình”, quảng cáo là “mình nói về mình”. Khi trả tiền để người khác nói, ranh giới đó mờ đi — và phải gắn nhãn.", "(X15 — slide bộ môn)"],
  ], "Tổng hợp: KOL được trả công để nói về sản phẩm → là một bên liên quan có quyền, nghĩa vụ, hợp đồng.");
  notes(s, {
    say: "Campbell và Farrell, 2020: influencer marketing là việc trả công cho cá nhân để họ đăng bài về sản phẩm, dịch vụ trên mạng xã hội. Chữ quan trọng là trả công. Ở Việt Nam, Luật Quảng cáo sửa đổi có hiệu lực từ 1/1/2026 gọi họ là người chuyển tải sản phẩm quảng cáo — người trực tiếp quảng cáo, khuyến nghị, xác nhận sản phẩm trên mạng. Môn PR trong tổ chức sự kiện các bạn đã học câu: PR là người khác nói về mình, quảng cáo là mình nói về mình. Khi trả tiền để người khác nói, ranh giới đó mờ đi — và luật yêu cầu gắn nhãn.",
    gv: "X01 đọc tóm tắt. X05 đã đối chiếu nguyên văn Luật 75/2025/QH15 (4/10/2026), Điều 2 khoản 8. Câu “PR là người khác nói về mình” trong slide bộ môn dẫn PGS-TS Tạ Ngọc Tấn — chỉ nhắc như kiến thức SV đã học.",
    next: "Phân loại theo quy mô.",
  });

  // 5 size
  s = slide("Phân loại theo quy mô chỉ là khoảng tham khảo — các nguồn còn vênh nhau");
  table(s, 0.6, 1.95, [2.6, 3.4, 3.9], ["Nhóm", "Người theo dõi (tham khảo)", "Điểm mạnh thường gặp"], [
    ["Nano", "~1k – 10k", "Gần gũi, tương tác cao"],
    ["Micro", "~10k – 100k", "Cộng đồng ngách"],
    ["Macro", "~100k – 1 triệu", "Độ phủ lớn"],
    ["Mega / người nổi tiếng", "> 1 triệu", "Nhận biết rộng"],
  ], { hc: [YEL, TEAL, BLUE], rh: 0.62, fs: 15, firstCol: YEL });
  box(s, 10.7, 1.95, 2.03, 3.3, PINK);
  T(s, "TikTok nano: ER 10,3% hay 11,9%?\n\nCùng một báo cáo, hai con số.", 10.8, 1.95, 1.83, 3.3, { fontSize: 14, bold: true, color: NAVY, align: "center" });
  box(s, 0.6, 5.4, 12.13, 0.85, CARD);
  T(s, "Bài học: luôn hỏi nguồn và cách tính tỷ lệ tương tác (ER); kiểm tra người theo dõi ảo trước khi chọn.", 0.85, 5.4, 11.7, 0.85, { fontSize: 16, bold: true, color: YEL });
  src(s, "Nguồn: HypeAuditor (2025) (X04) — chưa KCC, nguồn có lợi ích thương mại; >75% influencer Instagram là nano. Ngưỡng khác nhau giữa các nguồn.", 6.45);
  notes(s, {
    say: "Cách phân loại quen thuộc theo số người theo dõi: nano, micro, macro, mega. Nhưng ngưỡng khác nhau giữa các nguồn — chỉ dùng như khoảng tham khảo. Theo HypeAuditor 2025, hơn 75% influencer Instagram là nano, nhóm có tỷ lệ tương tác cao nhất. Và một bài học đọc số liệu: cùng báo cáo đó ghi tỷ lệ tương tác của nano TikTok là 10,3% ở một chỗ và 11,9% ở chỗ khác. Luôn hỏi nguồn và cách tính; và kiểm tra người theo dõi ảo trước khi chọn.",
    gv: "Quyết định GV 7: ngưỡng là khoảng tham khảo. X04 khuyến nghị dùng công cụ phát hiện gian lận. Không dùng con số “thị trường influencer Việt Nam 110 triệu USD” (không có nguồn gốc).",
    next: "Câu hỏi quan trọng hơn quy mô.",
  });

  // 6 roles
  s = slide("Câu hỏi đúng: Nova đang mua khán giả, sự bảo chứng hay nội dung?");
  table(s, 0.6, 1.95, [3.2, 4.1, 4.83], ["Vai trò", "Nova mua gì", "Với gala An Phát"], [
    ["Khán giả (audience)", "Tiếp cận người theo dõi của họ", "Ít giá trị: khách đã được mời đích danh"],
    ["Người bảo chứng (endorser)", "Uy tín của họ “đứng sau” sự kiện", "Chuyên gia kinh tế làm diễn giả → CEO muốn đến"],
    ["Người làm nội dung", "Khả năng sản xuất nội dung", "Video tóm tắt phiên chuyên đề gửi khách"],
  ], { hc: [YEL, TEAL, BLUE], rh: 0.72, fs: 15, firstCol: YEL });
  box(s, 0.6, 5.0, 12.13, 1.25, CARD);
  T(s, "Bổ sung: KOC — người dùng thật chia sẻ trải nghiệm · Chuyên gia, diễn giả — KOL của giới chuyên môn, quan trọng với sự kiện B2B.\nHỏi: với 600 CEO, ai là KOL của họ?", 0.85, 5.0, 11.7, 1.25, { fontSize: 15.5 });
  src(s, "Nguồn: Campbell & Farrell (2020) — ba thành phần chức năng (X01). KOC, chuyên gia/diễn giả: nhận định của người soạn.", 6.45);
  notes(s, {
    say: "Campbell và Farrell chỉ ra ba thành phần chức năng. Khán giả: Nova mua quyền tiếp cận người theo dõi của họ — với gala An Phát, ít giá trị, vì khách đã được mời đích danh. Người bảo chứng: uy tín của họ đứng sau sự kiện — một chuyên gia kinh tế làm diễn giả có thể khiến CEO muốn đến. Người làm nội dung: khả năng sản xuất nội dung — ví dụ video tóm tắt phiên chuyên đề. Thêm hai nhóm: KOC — người dùng thật chia sẻ trải nghiệm; và chuyên gia, diễn giả — KOL của giới chuyên môn. Câu hỏi: với 600 CEO, ai là KOL của họ?",
    gv: "Lecture notes §1.3. Ghi câu trả lời của lớp lên bảng.",
    ask: "“Với 600 CEO, ai là KOL của họ?”",
    next: "Khách tin ai?",
  });

  // 7 credibility
  s = slide("Khách tin người có chuyên môn, đáng tin và giống mình");
  const cr = [["Chuyên môn", "Người này có hiểu biết thật về điều đang nói?", TEAL, "FaGraduationCap"], ["Đáng tin", "Người này có trung thực, khách quan?", YEL, "FaShieldAlt"], ["Hấp dẫn", "Người này có thu hút về ngoại hình, phong cách?", MU, "FaStar"], ["Tương đồng", "Người theo dõi thấy người này giống mình?", PINK, "FaUsers"]];
  for (let i = 0; i < 4; i++) { const [a, b, c, icn] = cr[i], x = 0.6 + i * 3.08; box(s, x, 1.95, 2.9, 3.0); await ic(s, icn, x + 0.95, 2.1, 1.0, c); T(s, a, x + 0.15, 3.2, 2.6, 0.6, { align: "center", bold: true, fontSize: 18, color: c }); T(s, b, x + 0.15, 3.8, 2.6, 1.05, { align: "center", fontSize: 14.5, valign: "top" }); }
  box(s, 0.6, 5.15, 12.13, 1.1, YEL);
  T(s, "Với ngân hàng: chuyên môn và đáng tin nặng hơn hấp dẫn. Tương đồng quan trọng hơn quy mô: một CEO logistics có thể thuyết phục 600 CEO hơn một ca sĩ triệu follower.", 0.85, 5.15, 11.7, 1.1, { fontSize: 16, bold: true, color: NAVY });
  src(s, "Nguồn: Ohanian (1990) — chuyên môn, đáng tin, hấp dẫn (X02); Lou & Yuan (2019) — giá trị thông tin, tương đồng → niềm tin (X03). Nhận định về ngân hàng: người soạn.", 6.45);
  notes(s, {
    say: "Khách tin ai? Ohanian, 1990, đo độ tin cậy của người đại diện theo ba chiều: chuyên môn, đáng tin, hấp dẫn. Lou và Yuan, 2019, thêm: giá trị thông tin của nội dung và sự tương đồng giữa influencer với người theo dõi làm tăng niềm tin vào nội dung có thương hiệu. Với ngân hàng, chuyên môn và đáng tin nặng hơn hấp dẫn. Và tương đồng quan trọng hơn quy mô: một CEO logistics chia sẻ kinh nghiệm vay vốn mở rộng kho có thể thuyết phục 600 CEO hơn một ca sĩ triệu follower.",
    gv: "X02, X03 đọc tóm tắt. Nhắc 5C của thông điệp ở môn PR (X15): Credibility — uy tín của nguồn phát.",
    next: "Mặt trái của uy tín.",
  });

  // 8 Kera
  s = slide("Khi KOL mất uy tín, người hợp tác với họ mất theo");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaGavel", 0.85, 2.15, 0.9, PINK);
  T(s, "Vụ kẹo Kera (2024–2025)", 1.95, 2.15, 5.8, 0.9, { bold: true, fontSize: 19, color: PINK });
  T(s, bullets(["6 buổi livestream quảng cáo kẹo với tuyên bố “một viên kẹo tương đương một đĩa rau luộc”", "Giám định: không có 10 loại bột rau củ như công bố; thu lợi bất chính 12,4 tỷ đồng", "11/2025: ba người có ảnh hưởng mỗi người 2 năm tù về tội “lừa dối khách hàng”", "Trước đó: thương hiệu hợp tác gỡ hình ảnh; công ty quản lý chấm dứt hợp đồng"]), 0.9, 3.15, 6.8, 3.0, { fontSize: 15, valign: "top", paraSpaceAfter: 6 });
  box(s, 8.15, 1.95, 4.58, 4.3, YEL);
  T(s, "Nếu một trong những người này từng làm MC gala của An Phát tháng 12/2024 — khách của An Phát nghĩ gì?\n\nChuyển giao hình ảnh là hai chiều (Buổi 9) → kiểm tra trước khi ký.", 8.35, 2.05, 4.18, 4.1, { fontSize: 16, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: VnExpress, Thanh Niên (19/11/2025); Dân trí (20/5/2025); VTC News (X06) — đã kiểm chứng chéo. Chỉ nêu sự kiện và phán quyết đã công bố.", 6.45);
  notes(s, {
    say: "Case thật. Từ 12/12/2024 đến 16/1/2025, có 6 buổi livestream quảng cáo kẹo Kera với tuyên bố như một viên kẹo tương đương một đĩa rau luộc. Giám định cho thấy sản phẩm không có 10 loại bột rau củ như công bố; thu lợi bất chính 12,4 tỷ đồng. Tháng 11/2025, Tòa án nhân dân TP.HCM tuyên ba người có ảnh hưởng mỗi người 2 năm tù về tội lừa dối khách hàng. Trước đó, một thương hiệu đã gỡ hình ảnh, công ty quản lý chấm dứt hợp đồng. Hỏi: nếu một trong những người này từng làm MC gala của An Phát tháng 12/2024, khách của An Phát nghĩ gì? Chuyển giao hình ảnh là hai chiều — vì vậy Nova phải kiểm tra trước khi ký.",
    gv: "Quyết định GV 4: chỉ nêu sự kiện và phán quyết; không bình luận đời tư; không dùng ảnh chân dung. Tên ba cá nhân có trong nguồn (X06) — slide không nêu tên; GV tự quyết có nêu khi nói hay không.",
    ask: "“Khách của An Phát nghĩ gì?”",
    next: "Rủi ro riêng của ngân hàng.",
  });

  // 9 finfluencer
  s = slide("Với ngân hàng, “KOL tài chính” là một rủi ro đặc thù");
  box(s, 0.6, 1.95, 6.0, 4.3);
  await ic(s, "FaChartLine", 0.85, 2.15, 0.9, ORA);
  T(s, "UBCKNN, 4/2026", 1.95, 2.15, 4.5, 0.9, { bold: true, fontSize: 19, color: ORA });
  T(s, "Cảnh báo tổ chức, cá nhân trên mạng xã hội đưa khuyến nghị mua, bán, nắm giữ cổ phiếu dù không được cấp phép tư vấn đầu tư; đã xử phạt một doanh nghiệp.", 0.9, 3.2, 5.5, 2.9, { fontSize: 16, valign: "top" });
  box(s, 6.85, 1.95, 5.88, 2.6, YEL);
  T(s, "Câu hỏi của Nova: người này sẽ nói gì trên sân khấu của An Phát — kiến thức, hay “nên mua mã này”?", 7.05, 1.95, 5.48, 2.6, { fontSize: 17, bold: true, color: NAVY });
  box(s, 6.85, 4.7, 5.88, 1.55, CARD);
  T(s, "Xu hướng: 8/2025 khởi động chương trình “Tín nhiệm người có ảnh hưởng” — hướng tới đánh giá, chứng nhận uy tín, minh bạch của KOL/KOC.", 7.05, 4.7, 5.48, 1.55, { fontSize: 14.5 });
  src(s, "Nguồn: Nhân Dân, VietnamPlus (17/4/2026) (X07) — đã KCC; Tuổi Trẻ (12/8/2025) (X08) — chưa KCC.", 6.45);
  notes(s, {
    say: "Rủi ro đặc thù khi Key Account là ngân hàng. Tháng 4/2026, Ủy ban Chứng khoán Nhà nước cảnh báo các tổ chức, cá nhân trên mạng xã hội đưa khuyến nghị mua bán cổ phiếu dù không được cấp phép tư vấn đầu tư, và đã xử phạt một doanh nghiệp. Một KOL tài chính nhiều follower chưa chắc là lựa chọn an toàn cho ngân hàng. Câu hỏi của Nova: người này sẽ nói gì trên sân khấu của An Phát — kiến thức, hay “nên mua mã này”? Xu hướng: tháng 8/2025 có chương trình “Tín nhiệm người có ảnh hưởng”, hướng tới đánh giá, chứng nhận uy tín của KOL.",
    gv: "X07 đã KCC. X08 chưa KCC, chưa rõ đã có kết quả chứng nhận — không dùng như tiêu chuẩn bắt buộc. Nối Thực hành 1: ứng viên “Hưng Finance”.",
    next: "11.2: khán giả trước, kênh sau.",
  });

  // 10 audience first
  s = slide("Hiểu khán giả trước, chọn kênh sau");
  box(s, 0.6, 1.95, 6.0, 4.3, TEAL);
  T(s, "Barcelona Principles 4.0 — Nguyên tắc 2", 0.85, 2.05, 5.5, 0.6, { bold: true, fontSize: 17, color: NAVY });
  T(s, "Xác định và hiểu mọi nhóm khán giả – bên liên quan là bước thiết yếu để lập kế hoạch, xây quan hệ và tạo tác động.", 0.85, 2.75, 5.5, 3.3, { fontSize: 18, color: NAVY, valign: "top" });
  box(s, 6.85, 1.95, 5.88, 4.3);
  T(s, "600 lãnh đạo doanh nghiệp của An Phát:", 7.05, 2.05, 5.48, 0.6, { bold: true, fontSize: 17, color: YEL });
  T(s, bullets(["Đọc báo gì? Báo kinh tế, tạp chí doanh nghiệp?", "Nghe ai? Đồng nghiệp CEO, chuyên gia, hiệp hội?", "Bận thế nào? Ai sắp lịch cho họ — trợ lý?", "Điều gì khiến họ đến trực tiếp, không cử người thay?"]), 7.05, 2.75, 5.48, 3.3, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  src(s, "Nguồn: AMEC (2025), Barcelona Principles 4.0 (X13).", 6.45);
  notes(s, {
    say: "Mục 11.2. Nguyên tắc 2 của Barcelona Principles 4.0: xác định và hiểu mọi nhóm khán giả – bên liên quan là bước thiết yếu để lập kế hoạch, xây quan hệ và tạo tác động. Với An Phát, khán giả trước sự kiện là 600 lãnh đạo doanh nghiệp. Họ đọc báo gì? Nghe ai? Bận thế nào — ai sắp lịch cho họ? Và điều gì khiến họ đến trực tiếp thay vì cử người thay?",
    gv: "X13 đã đọc bản PDF chính thức. Gợi ý: trợ lý của CEO cũng là một khán giả của điểm chạm “thư mời” — nối Buổi 3 (DMU).",
    next: "Bản đồ nhà báo.",
  });

  // 11 journalist map
  s = slide("Bản đồ nhà báo có ba trục: mảng phụ trách, độc giả, mức quan hệ");
  table(s, 0.6, 1.95, [2.8, 4.9, 4.43], ["Trục", "Hỏi gì", "Vì sao"], [
    ["Mảng (beat)", "Ngân hàng – tài chính? Doanh nghiệp? Giải trí?", "86% nhà báo từ chối ngay pitch lệch mảng hoặc lệch độc giả"],
    ["Độc giả", "Độc giả của họ có trùng khách của An Phát?", "Khuếch đại đúng người"],
    ["Mức quan hệ", "Chưa biết / đã giới thiệu / đã làm việc", "85% muốn được tự giới thiệu qua email, kể cả khi chưa có câu chuyện"],
  ], { hc: [YEL, TEAL, BLUE], rh: 0.72, fs: 15, firstCol: YEL });
  box(s, 0.6, 5.0, 12.13, 1.25, CARD);
  T(s, "72% nhà báo coi thông cáo báo chí là nguồn hữu ích nhất PR cung cấp. Nối Buổi 8: quan hệ với nhà báo, như với Key Account, phải xây trước khi cần.", 0.85, 5.0, 11.7, 1.25, { fontSize: 16, color: YEL, bold: true });
  src(s, "Nguồn: Cision (2025), khảo sát >3.000 nhà báo ở 19 thị trường (X09) — chưa KCC, không có số liệu Việt Nam. Ba trục: đề xuất của người soạn.", 6.45);
  notes(s, {
    say: "Bản đồ nhà báo có ba trục. Mảng phụ trách: ngân hàng – tài chính, doanh nghiệp hay giải trí? Khảo sát Cision 2025 với hơn 3.000 nhà báo: 86% từ chối ngay lời mời viết bài lệch mảng hoặc lệch độc giả. Độc giả: có trùng khách của An Phát không? Mức quan hệ: chưa biết, đã giới thiệu, hay đã làm việc — 85% nhà báo muốn được tự giới thiệu qua email, kể cả khi chưa có câu chuyện. Và 72% coi thông cáo báo chí là nguồn hữu ích nhất PR cung cấp. Nối Buổi 8: quan hệ với nhà báo cũng phải xây trước khi cần.",
    gv: "X09 chưa KCC (thông cáo của công ty bán giải pháp PR). Môn PR (X15, bài 2): khi đã có danh sách — tìm đúng nhà báo viết về lĩnh vực của tổ chức, hỏi họ thích nhận thông tin qua kênh nào.",
    next: "Thông cáo báo chí — nhắc lại.",
  });

  // 12 press release
  s = slide("Thông cáo báo chí viết theo kim tự tháp ngược: đoạn đầu đủ 5W1H, đứng độc lập được");
  s.addShape(L.pres.shapes.ISOSCELES_TRIANGLE, { x: 0.8, y: 1.95, w: 5.2, h: 4.2, rotate: 180, fill: { color: TEAL }, line: { color: TEAL } });
  T(s, "Đoạn mở đầu: 5W1H", 1.4, 2.15, 4.0, 0.6, { align: "center", bold: true, fontSize: 16, color: NAVY });
  T(s, "Chi tiết, trích dẫn", 2.0, 3.25, 2.8, 0.6, { align: "center", bold: true, fontSize: 14, color: NAVY });
  T(s, "Thông tin công ty", 2.55, 4.3, 1.7, 0.7, { align: "center", bold: true, fontSize: 11, color: NAVY });
  box(s, 6.5, 1.95, 6.23, 4.3);
  T(s, bullets(["Tít chính ngắn, mang thông điệp; tít phụ nếu cần", "Trích dẫn người có thẩm quyền của An Phát", "Người liên hệ: có quyền trả lời báo chí — ghi cả người của agency", "Lý tưởng 1 trang A4; không cường điệu, hạn chế thuật ngữ", "Gửi xong thì theo dõi, không chờ"]), 6.75, 2.1, 5.8, 4.0, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  src(s, "Nhắc lại từ môn PR trong tổ chức sự kiện, Bài 3 (X15). Alt-text: tam giác ngược, thông tin quan trọng nhất ở trên.", 6.45);
  notes(s, {
    say: "Nhắc lại kiến thức các bạn đã học ở môn PR trong tổ chức sự kiện. Thông cáo báo chí viết theo kim tự tháp ngược: đoạn mở đầu đủ 5W1H — ai, cái gì, khi nào, ở đâu, vì sao, như thế nào — và đứng độc lập được, vì biên tập viên thường cắt từ dưới lên. Tiếp theo là chi tiết và trích dẫn người có thẩm quyền của An Phát. Cuối là thông tin công ty và người liên hệ — người có quyền trả lời báo chí; ghi cả người của agency. Lý tưởng một trang A4. Và gửi xong thì theo dõi, không chờ.",
    gv: "X15 (slide bộ môn, bài 3). Ai ký, ai đứng tên người liên hệ là quyết định của An Phát — Nova soạn, An Phát duyệt.",
    next: "Họp báo và phỏng vấn: luật mới.",
  });

  // 13 press law
  s = slide("Luật Báo chí 2025: người được phỏng vấn được xem lại câu trả lời; họp báo theo quy định của Chính phủ");
  const lw = [["Điều 33", "Người phỏng vấn báo trước mục đích, câu hỏi. Người được phỏng vấn có quyền yêu cầu xem lại nội dung trả lời trước khi đăng.", TEAL], ["Điều 33 khoản 3", "Nhà báo không được dùng phát biểu tại hội nghị, hội thảo có nhà báo dự để chuyển thành bài phỏng vấn nếu không được người phát biểu đồng ý.", YEL], ["Điều 37", "Tổ chức có quyền họp báo “theo quy định của Chính phủ”; cơ quan quản lý có quyền đình chỉ họp báo có dấu hiệu vi phạm.", BLUE]];
  lw.forEach(([a, b, c], i) => { const y = 1.95 + i * 1.15; box(s, 0.6, y, 2.6, 1.0, c); T(s, a, 0.75, y, 2.3, 1.0, { bold: true, fontSize: 15, color: NAVY }); box(s, 3.35, y, 9.38, 1.0); T(s, b, 3.55, y, 9.0, 1.0, { fontSize: 15 }); });
  box(s, 0.6, 5.45, 12.13, 0.8, PINK);
  T(s, "→ Briefing người phát ngôn của An Phát trước gala có báo: nói gì, không nói gì, xin xem lại trước khi đăng.", 0.85, 5.45, 11.7, 0.8, { fontSize: 16, bold: true, color: NAVY });
  src(s, "Nguồn: Luật số 126/2025/QH15 (thông qua 10/12/2025, hiệu lực 1/7/2026) — đã đối chiếu nguyên văn (X10). Thủ tục họp báo: [VERIFY: nghị định hướng dẫn].", 6.45);
  notes(s, {
    say: "Luật Báo chí 2025 có hiệu lực từ 1/7/2026. Điều 33: người phỏng vấn phải báo trước mục đích và câu hỏi; người được phỏng vấn có quyền yêu cầu xem lại nội dung trả lời trước khi đăng. Khoản 3: nhà báo không được dùng phát biểu tại hội nghị, hội thảo có nhà báo dự để chuyển thành bài phỏng vấn nếu người phát biểu không đồng ý. Điều 37: tổ chức có quyền họp báo theo quy định của Chính phủ; cơ quan quản lý có quyền đình chỉ họp báo có dấu hiệu vi phạm. Với Nova: trước gala có báo, phải briefing người phát ngôn của An Phát — nói gì, không nói gì, và quyền xin xem lại trước khi đăng.",
    gv: "Đã đối chiếu nguyên văn (4/10/2026). Luật 2025 KHÔNG tự ghi mốc 24 giờ; theo PLO, nghị định hướng dẫn (NĐ 237/2026) quy định thủ tục — [VERIFY: nguyên văn nghị định]. Luật Báo chí 2016 đã hết hiệu lực từ 1/7/2026. Điều 31 khoản 5: chế độ người phát ngôn bắt buộc chỉ áp dụng cho cơ quan hành chính nhà nước. Nếu trễ giờ: lướt nhanh (giáo án cho phép rút phần họp báo).",
    next: "Một nguyên tắc đạo đức.",
  });

  // 14 ethics
  s = slide("Quan hệ với nhà báo dựa trên thông tin có giá trị — không dựa trên vụ lợi");
  box(s, 0.6, 1.95, 12.13, 1.6, YEL);
  T(s, "Thông tin có giá trị cho độc giả của họ · đúng mảng · đúng lúc. Agency không đặt nhà báo vào thế vụ lợi.", 0.85, 1.95, 11.7, 1.6, { fontSize: 22, bold: true, color: NAVY, align: "center" });
  box(s, 0.6, 3.75, 6.0, 2.5);
  T(s, "Đạo đức nghề báo", 0.85, 3.85, 5.5, 0.5, { bold: true, fontSize: 17, color: TEAL });
  T(s, "Quy định đạo đức nghề nghiệp người làm báo Việt Nam yêu cầu hành nghề trung thực, khách quan, không vụ lợi.", 0.85, 4.4, 5.5, 1.75, { fontSize: 15.5, valign: "top" });
  box(s, 6.85, 3.75, 5.88, 2.5);
  T(s, "Trả tiền để đăng = quảng cáo", 7.1, 3.85, 5.4, 0.5, { bold: true, fontSize: 17, color: PINK });
  T(s, "Nội dung trả tiền phải được nhận diện là quảng cáo (Luật Quảng cáo 2025). Trang “đăng bài theo yêu cầu, có báo giá” không phải earned media.", 7.1, 4.4, 5.4, 1.75, { fontSize: 15.5, valign: "top" });
  src(s, "Nguồn: Hội Nhà báo Việt Nam (2016), QĐ 483/QĐ-HNBVN (X11) [VERIFY: nguyên văn Điều 3]; X05. Quyết định GV 6: một slide nguyên tắc.", 6.45);
  notes(s, {
    say: "Một nguyên tắc. Quan hệ với nhà báo dựa trên thông tin có giá trị cho độc giả của họ, đúng mảng, đúng lúc. Agency không đặt nhà báo vào thế vụ lợi. Quy định đạo đức nghề nghiệp người làm báo Việt Nam yêu cầu hành nghề trung thực, khách quan, không vụ lợi. Và nội dung trả tiền để đăng là quảng cáo — phải được nhận diện là quảng cáo. Trong Thực hành 2 có một “trang tin đăng bài theo yêu cầu, có báo giá” — đó không phải báo chí tự viết.",
    gv: "Quyết định GV 6: một slide nguyên tắc, không bàn chi tiết thực tiễn nhạy cảm. Slide môn PR bài 2 có mục “sai phạm điển hình của nhà báo” — không dùng ở đây.",
    next: "Thực hành 1.",
  });

  // 15 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: chọn diễn giả/KOL cho gala của An Phát", [["8’", "Chấm 1–5 cho 5 ứng viên: chuyên môn · đáng tin · tương đồng với khách của An Phát · rủi ro; ghi Nova “mua” khán giả, bảo chứng hay nội dung", TEAL], ["7’", "Chọn tối đa 2 ứng viên trong ngân sách 350 triệu; mỗi người 1 điều kiện đưa vào brief/hợp đồng", YEL], ["5’", "Viết 1 câu giải thích với anh Minh vì sao loại một ứng viên — nói về khách của An Phát, không chê ứng viên", PINK]], "FaMicrophoneAlt", "Sản phẩm", "Bảng chấm trên A3 + ứng viên được chọn dùng ở Thực hành 2", "Chọn theo tin cậy, tương đồng và rủi ro — không theo số follower.");
  notes(s, {
    say: "Thực hành 1, 20 phút. Nova có khoảng 350 triệu cho diễn giả, KOL. Năm ứng viên: một chuyên gia kinh tế; một KOL tài chính 1,2 triệu follower; một CEO logistics là khách hàng doanh nghiệp của An Phát; một ca sĩ 3,5 triệu follower từng bị xử phạt vì quảng cáo sai; và một nhóm 20 KOC doanh nhân trẻ. Tám phút: chấm 1 đến 5 theo chuyên môn, đáng tin, tương đồng với khách của An Phát, và rủi ro; ghi Nova mua khán giả, bảo chứng hay nội dung. Bảy phút: chọn tối đa 2 người trong ngân sách, mỗi người một điều kiện. Năm phút: viết một câu giải thích vì sao loại một ứng viên.",
    gv: "Phiếu W11_activity_S3_chon_dien_gia_kol.md. Mốc phút 30–50. Ghi lựa chọn của 6 nhóm lên bảng. Chị Mai Anh muốn 5 phút giới thiệu công ty mình → điều kiện: chia sẻ kinh nghiệm, không quảng cáo; xung đột lợi ích với khách khác của An Phát? (nối Buổi 12, một bên nhiều vai — Y04).",
    next: "Giải lao.",
  });

  // 16 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 50–58.", next: "Sau giải lao: ký với họ thế nào." });

  // 17 booking 8 steps
  s = slide("Booking là một quy trình tám bước, không phải một cuộc gọi");
  const bk = [["Brief", "Mục tiêu, khán giả, thông điệp, điều không được nói", TEAL], ["Due diligence", "Lịch sử nội dung, vụ việc, xung đột lợi ích, người theo dõi thật", PINK], ["Báo giá", "Qua cá nhân hay công ty quản lý?", YEL], ["Hợp đồng", "Nghĩa vụ luật định, duyệt, chấm dứt", ORA], ["Duyệt nội dung", "An Phát (chị Vy) duyệt trước", BLUE], ["Thực hiện", "Đúng lịch, đúng nhãn", TEAL], ["Nghiệm thu, thanh toán", "Chứng từ đúng hình thức hợp đồng", YEL], ["Báo cáo", "Outputs – outcomes – impact", PUR]];
  bk.forEach(([a, b, c], i) => { const col = i % 4, row = Math.floor(i / 4), x = 0.6 + col * 3.08, y = 1.95 + row * 2.1; num(s, i + 1, x, y, 0.6, c, 17); T(s, a, x + 0.7, y, 2.2, 0.6, { bold: true, fontSize: 16, color: c === PUR ? MU : c }); box(s, x, y + 0.7, 2.9, 1.25); T(s, b, x + 0.15, y + 0.7, 2.6, 1.25, { fontSize: 14 }); });
  src(s, "Quy trình do người soạn dựng từ X05, X06, X12, X13 (nhận định). Alt-text: tám ô đánh số theo thứ tự.", 6.45);
  notes(s, {
    say: "Mục 11.3. Booking là một quy trình tám bước. Một: brief — mục tiêu, khán giả, thông điệp, và điều không được nói, ví dụ khuyến nghị đầu tư. Hai: due diligence — kiểm tra lịch sử nội dung, vụ việc pháp lý, xung đột lợi ích, người theo dõi thật hay ảo. Ba: báo giá — qua cá nhân hay công ty quản lý. Bốn: hợp đồng. Năm: duyệt nội dung — An Phát, chị Vy duyệt trước. Sáu: thực hiện đúng lịch, đúng nhãn. Bảy: nghiệm thu và thanh toán với chứng từ đúng. Tám: báo cáo.",
    gv: "Lecture notes §2.1 — nhận định của người soạn.",
    next: "Due diligence.",
  });

  // 18 due diligence
  s = slide("Due diligence bảo vệ Key Account trước khi ký");
  const dd = [["FaHistory", "Lịch sử nội dung", "Họ từng nói gì về tài chính, sức khỏe, chính trị?", TEAL], ["FaBalanceScale", "Vụ việc", "Từng bị xử phạt, kiện tụng, khủng hoảng?", PINK], ["FaRandom", "Xung đột lợi ích", "Đang làm cho ngân hàng, công ty tài chính đối thủ?", ORA], ["FaUserFriends", "Người theo dõi", "Thật hay ảo? Có trùng khách của An Phát?", BLUE]];
  for (let i = 0; i < 4; i++) { const [icn, a, b, c] = dd[i], x = 0.6 + i * 3.08; box(s, x, 1.95, 2.9, 3.2); await ic(s, icn, x + 0.95, 2.1, 1.0, c); T(s, a, x + 0.15, 3.2, 2.6, 0.6, { align: "center", bold: true, fontSize: 17, color: c }); T(s, b, x + 0.15, 3.8, 2.6, 1.25, { align: "center", fontSize: 14.5, valign: "top" }); }
  box(s, 0.6, 5.35, 12.13, 0.9, YEL);
  T(s, "Thực hành 1: ca sĩ Ngọc Diệp từng bị xử phạt vì quảng cáo sai công dụng — due diligence lẽ ra phải thấy ngay.", 0.85, 5.35, 11.7, 0.9, { fontSize: 16, bold: true, color: NAVY });
  src(s, "Nhận định của người soạn từ X04 (kiểm tra gian lận người theo dõi), X06, X07. Tình huống Thực hành 1 là giả định.", 6.45);
  notes(s, {
    say: "Due diligence — kiểm tra trước khi ký — bảo vệ Key Account. Bốn câu hỏi. Lịch sử nội dung: họ từng nói gì về tài chính, sức khỏe, chính trị? Vụ việc: từng bị xử phạt, kiện tụng, khủng hoảng? Xung đột lợi ích: có đang làm cho một ngân hàng, công ty tài chính đối thủ? Người theo dõi: thật hay ảo, có trùng khách của An Phát? Trong Thực hành 1, ca sĩ Ngọc Diệp từng bị xử phạt vì quảng cáo sai công dụng — due diligence lẽ ra phải thấy ngay.",
    gv: "Lecture notes §2.1 bước 2. Nối Buổi 9: thẩm định nhà tài trợ (Happy Day Concert).",
    next: "Từ 2026, nghĩa vụ của KOL nằm trong luật.",
  });

  // 19 legal duties into contract
  s = slide("Từ 2026, nghĩa vụ của người có ảnh hưởng phải đi vào hợp đồng");
  box(s, 0.6, 1.95, 6.0, 4.3, TEAL);
  T(s, "Luật Quảng cáo 2025, Điều 15a", 0.85, 2.05, 5.5, 0.55, { bold: true, fontSize: 17, color: NAVY });
  T(s, bullets(["Xác minh độ tin cậy của người quảng cáo; kiểm tra tài liệu sản phẩm", "“Trường hợp chưa sử dụng hoặc chưa hiểu rõ … thì không được giới thiệu”", "Thông báo về việc quảng cáo ngay trước và trong khi thực hiện", "Bài trên mạng phân biệt nội dung quảng cáo hoặc được tài trợ (Điều 23)"]), 0.85, 2.65, 5.55, 3.5, { fontSize: 14.5, color: NAVY, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.85, 1.95, 5.88, 4.3);
  T(s, "Điều khoản gợi ý cho hợp đồng", 7.1, 2.05, 5.4, 0.55, { bold: true, fontSize: 17, color: YEL });
  T(s, bullets(["Phạm vi, lịch, định dạng nội dung", "Duyệt nội dung; gắn nhãn theo luật", "Không khuyến nghị đầu tư, không chào bán sản phẩm tài chính", "Quyền dùng hình ảnh; bảo mật thông tin khách", "Điều khoản đạo đức và chấm dứt khi có vụ việc", "Bàn giao số liệu; thanh toán và chứng từ"]), 7.1, 2.65, 5.4, 3.5, { fontSize: 14.5, valign: "top", paraSpaceAfter: 4 });
  src(s, "Nguồn: Luật 75/2025/QH15, Điều 15a khoản 2–3, Điều 23 — đã đối chiếu nguyên văn (X05). Điều khoản gợi ý: nhận định. [VERIFY: pháp chế — nghị định; quảng cáo dịch vụ ngân hàng]", 6.45);
  notes(s, {
    say: "Từ 1/1/2026, Điều 15a Luật Quảng cáo quy định nghĩa vụ của người có ảnh hưởng khi quảng cáo: xác minh độ tin cậy của người quảng cáo, kiểm tra tài liệu sản phẩm; trường hợp chưa sử dụng hoặc chưa hiểu rõ thì không được giới thiệu; thông báo về việc quảng cáo ngay trước và trong khi thực hiện. Điều 23: bài trên mạng phải phân biệt nội dung quảng cáo hoặc được tài trợ. Các nghĩa vụ này phải đi vào brief và hợp đồng Nova ký thay An Phát. Điều khoản gợi ý: phạm vi, lịch; duyệt nội dung, gắn nhãn; không khuyến nghị đầu tư, không chào bán sản phẩm tài chính; quyền dùng hình ảnh, bảo mật thông tin khách; điều khoản đạo đức và chấm dứt khi có vụ việc — bài học từ vụ Kera; bàn giao số liệu; thanh toán và chứng từ.",
    gv: "Đã đối chiếu nguyên văn Luật 75/2025/QH15 (4/10/2026). Điều 6: hợp tác trong hoạt động quảng cáo phải thông qua hợp đồng quảng cáo. Nếu An Phát/Nova tổ chức sự kiện có logo nhà tài trợ: có thể ở vai “người phát hành quảng cáo” (Điều 2 khoản 7 — Buổi 9). Chỉ nhận diện rủi ro.",
    next: "Thanh toán.",
  });

  // 20 payment
  s = slide("Hình thức hợp đồng quyết định chứng từ thanh toán — anh Khoa sẽ hỏi");
  const py = [["Ký với cá nhân", "Tổ chức chi trả thường khấu trừ 10% thuế TNCN trước khi trả — nhưng chưa chắc là nghĩa vụ cuối cùng", TEAL], ["Ký với công ty quản lý", "Hóa đơn của công ty; trách nhiệm thuế ở phía công ty", BLUE]];
  py.forEach(([a, b, c], i) => { const x = 0.6 + i * 6.13; box(s, x, 1.95, 5.9, 0.7, c); T(s, a, x + 0.2, 1.95, 5.5, 0.7, { bold: true, fontSize: 18, color: NAVY }); box(s, x, 2.75, 5.9, 2.0); T(s, b, x + 0.25, 2.85, 5.4, 1.8, { fontSize: 16, valign: "top" }); });
  box(s, 0.6, 4.95, 12.13, 1.3, YEL);
  T(s, "Cục Thuế lưu ý: bản chất thu nhập (tiền công hay kinh doanh) căn cứ vào hợp đồng. Payment không chỉ là chuyển khoản — là hồ sơ An Phát phải giải trình.", 0.85, 4.95, 11.7, 1.3, { fontSize: 16, bold: true, color: NAVY });
  src(s, "Nguồn: Dân trí (20/7/2026) (X12). [VERIFY: kế toán — quy định khấu trừ hiện hành]. Chỉ nêu nguyên tắc, không tính thuế chi tiết.", 6.45);
  notes(s, {
    say: "Thanh toán. Ký với cá nhân: tổ chức chi trả thường khấu trừ 10% thuế thu nhập cá nhân trước khi trả — nhưng Cục Thuế lưu ý khấu trừ 10% chưa chắc là nghĩa vụ cuối cùng. Ký với công ty quản lý: hóa đơn của công ty, trách nhiệm thuế ở phía công ty. Bản chất thu nhập — tiền công hay kinh doanh — căn cứ vào hợp đồng. Vì vậy payment không chỉ là chuyển khoản; đó là hồ sơ An Phát phải giải trình — và anh Khoa sẽ hỏi.",
    gv: "X12 (Dân trí + trang tư vấn, chưa phải văn bản gốc). [VERIFY: kế toán]. Không tính thuế chi tiết trên lớp.",
    next: "Đo lường.",
  });

  // 21 Barcelona
  s = slide("Đo truyền thông bằng outputs, outcomes, impact — không dùng AVE");
  const bp = [["1", "Mục tiêu rõ, đo được"], ["2", "Hiểu khán giả – bên liên quan"], ["3", "Đo mọi kênh liên quan"], ["4", "Định tính + định lượng"], ["5", "Không dùng AVE; đo kết quả và tác động"], ["6", "Báo cáo outputs, outcomes, impact"], ["7", "Đạo đức, minh bạch dữ liệu và phương pháp"]];
  bp.forEach(([k, t], i) => { const col = i < 4 ? 0 : 1, row = i < 4 ? i : i - 4, x = 0.6 + col * 6.13, y = 1.95 + row * 0.8; num(s, k, x, y + 0.05, 0.6, i === 4 ? PINK : TEAL, 17); box(s, x + 0.75, y, 5.15, 0.68, i === 4 ? PINK : CARD); T(s, t, x + 0.95, y, 4.85, 0.68, { fontSize: 15, bold: i === 4, color: i === 4 ? NAVY : TX }); });
  box(s, 6.73, 4.35, 6.0, 1.9, YEL);
  T(s, "AVE: quy bài báo ra “nếu mua quảng cáo diện tích này thì tốn bao nhiêu”. AMEC: “AVEs are not the value of communication.”", 6.93, 4.35, 5.6, 1.9, { fontSize: 15, bold: true, color: NAVY });
  src(s, "Nguồn: AMEC (2025), Barcelona Principles 4.0; AMEC (2020), BP 3.0 — nguyên tắc 5 (X13). Môn PR bài 7: “kết quả đầu ra” và “hiệu quả” (X15).", 6.45);
  notes(s, {
    say: "Đo lường. Bảy nguyên tắc Barcelona của AMEC, phiên bản 4.0 năm 2025, rút gọn. Một: mục tiêu rõ, đo được. Hai: hiểu khán giả. Ba: đo mọi kênh. Bốn: kết hợp định tính và định lượng. Năm — quan trọng: không dùng AVE. AVE là quy bài báo ra số tiền nếu mua quảng cáo diện tích đó. AMEC nói rõ từ bản 3.0: AVE không phải giá trị của truyền thông. Sáu: báo cáo outputs, outcomes, impact. Bảy: đạo đức, minh bạch dữ liệu và phương pháp. Môn PR các bạn đã học cũng chia đánh giá thành kết quả đầu ra và hiệu quả — nhận thức, thái độ, hành vi.",
    gv: "X13 đã đọc bản PDF chính thức (4.0) và bản trình bày 3.0 do GV cung cấp. BP 3.0 nguyên tắc 5 còn nói: không thay AVE bằng thước đo tương tự; “costs are not the value of communication”.",
    next: "Báo cáo cho anh Minh.",
  });

  // 22 report mapping
  s = slide("Báo cáo cho anh Minh mở đầu bằng outcome, không bằng lượt xem");
  table(s, 0.6, 1.95, [2.3, 6.4, 3.43], ["Barcelona", "Ví dụ giai đoạn trước sự kiện của An Phát", "Gần với cấp (Buổi 8)"], [
    ["Outputs", "Số bài đúng mảng; số bài của diễn giả; lượt tiếp cận", "Trước cấp 0"],
    ["Outcomes", "Tỷ lệ xác nhận; tỷ lệ CEO đến trực tiếp; số khách đăng ký phiên chuyên đề", "Cấp 0 – 2"],
    ["Impact", "Cuộc hẹn kinh doanh sau sự kiện; khách mở rộng quan hệ với An Phát", "Cấp 3 – 5 (cần dữ liệu An Phát)"],
  ], { hc: [YEL, TEAL, BLUE], rh: 0.75, fs: 15, firstCol: YEL });
  box(s, 0.6, 5.25, 12.13, 1.0, PINK);
  T(s, "Không mở đầu bằng “25 bài báo, 2 triệu lượt xem”. Mở đầu bằng: “tỷ lệ CEO đến trực tiếp tăng từ … lên …”.", 0.85, 5.25, 11.7, 1.0, { fontSize: 17, bold: true, color: NAVY });
  src(s, "Ánh xạ Barcelona ↔ khung ROI 6 cấp là gần đúng — nhận định của người soạn (quyết định GV 5).", 6.45);
  notes(s, {
    say: "Báo cáo cho anh Minh. Outputs: số bài đúng mảng, số bài của diễn giả, lượt tiếp cận. Outcomes: tỷ lệ xác nhận, tỷ lệ CEO đến trực tiếp, số khách đăng ký phiên chuyên đề — gần với cấp 0 đến 2 của khung Buổi 8. Impact: cuộc hẹn kinh doanh sau sự kiện, khách mở rộng quan hệ với An Phát — cấp 3 đến 5, cần dữ liệu của An Phát. Báo cáo không mở đầu bằng 25 bài báo, 2 triệu lượt xem. Mở đầu bằng: tỷ lệ CEO đến trực tiếp tăng từ bao nhiêu lên bao nhiêu.",
    gv: "Quyết định GV 5: ánh xạ gần đúng, ghi rõ là nhận định. Dùng bảng: cho lớp phân loại ví dụ output/outcome (giáo án).",
    next: "11.4: khuếch đại trước sự kiện.",
  });

  // 23 prepurchase
  s = slide("Với khách của An Phát, “mua” là quyết định dành một buổi tối — và đến trực tiếp");
  const pp = [["Trước mua", "Nhận thư mời → tìm hiểu → quyết định có đến, có cử người thay không", TEAL], ["Mua", "Ngày 12/12: có mặt, tham gia", YEL], ["Sau mua", "Nhớ, kể lại, quan hệ với An Phát", PINK]];
  pp.forEach(([a, b, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 0.8, c); T(s, a, x, 1.95, 3.9, 0.8, { align: "center", bold: true, fontSize: 20, color: NAVY }); box(s, x, 2.85, 3.9, 1.5); T(s, b, x + 0.2, 2.9, 3.5, 1.4, { fontSize: 15, align: "center", valign: "top" }); if (i < 2) arrow(s, x + 3.92, 2.15, 0.2, 0.4, MU); });
  box(s, 0.6, 4.6, 12.13, 1.65, CARD);
  T(s, "Điểm chạm “social/external” (báo chí, người khác) và “partner-owned” ảnh hưởng mạnh đến quyết định ở giai đoạn trước mua. Báo chí và diễn giả cho khách một lý do để đến — trước khi họ đến.", 0.85, 4.6, 11.7, 1.65, { fontSize: 16.5 });
  src(s, "Nguồn: Lemon & Verhoef (2016) (X14 / V09). Áp vào khách của An Phát: quyết định GV 2 (phương án C).", 6.45);
  notes(s, {
    say: "Mục 11.4. Lemon và Verhoef: giai đoạn trước mua chịu ảnh hưởng mạnh của điểm chạm bên ngoài — báo chí, người khác — và điểm chạm do đối tác sở hữu. Với khách của An Phát, “mua” là quyết định dành một buổi tối cho An Phát — và đến trực tiếp hay cử người thay. Báo chí và diễn giả cho khách một lý do để đến, trước khi họ đến.",
    gv: "Quyết định GV 2 (phương án C): trục chính là giai đoạn trước sự kiện của 600 khách VIP.",
    next: "Bốn điểm chạm trước sự kiện.",
  });

  // 24 timeline
  s = slide("Bốn điểm chạm trước sự kiện có thể khuếch đại");
  const tlp = [["T-6 tuần", "Thư mời, save the date", "Tên diễn giả chính trong thư mời (bảo chứng)", TEAL], ["T-5 → T-3", "Tìm hiểu chương trình", "Bài phỏng vấn diễn giả trên báo kinh tế (earned)", YEL], ["T-3 tuần", "Xác nhận, đăng ký phiên", "Video ngắn của diễn giả gửi riêng khách mời", ORA], ["T-1 tuần", "Nhắc lịch, chuẩn bị", "Câu hỏi khảo sát trước của diễn giả", PINK]];
  s.addShape(L.pres.shapes.LINE, { x: 0.9, y: 2.45, w: 11.5, h: 0, line: { color: MU, width: 3, endArrowType: "triangle" } });
  tlp.forEach(([a, b, c, col], i) => { const x = 0.6 + i * 3.08; circ(s, x + 1.1, 2.15, 0.6, col); T(s, a, x, 2.85, 2.9, 0.5, { align: "center", bold: true, fontSize: 17, color: col }); box(s, x, 3.4, 2.9, 2.85); T(s, b, x + 0.15, 3.5, 2.6, 0.8, { align: "center", bold: true, fontSize: 15, valign: "top" }); T(s, c, x + 0.15, 4.35, 2.6, 1.8, { align: "center", fontSize: 14.5, valign: "top", color: YEL }); });
  src(s, "Mốc thời gian giả định, dựng theo Buổi 3, 9 (lecture notes §3.2). Alt-text: trục thời gian bốn mốc.", 6.45);
  notes(s, {
    say: "Bốn điểm chạm trước sự kiện. T trừ 6 tuần: thư mời — đặt tên diễn giả chính ngay trong thư mời, đó là bảo chứng. T trừ 5 đến T trừ 3: khách tìm hiểu chương trình — một bài phỏng vấn diễn giả trên báo kinh tế. T trừ 3 tuần: xác nhận và đăng ký phiên — một video ngắn của diễn giả gửi riêng khách mời. T trừ 1 tuần: nhắc lịch — một câu hỏi khảo sát trước của diễn giả, để khách thấy phiên chuyên đề được làm cho chính họ.",
    gv: "Lecture notes §3.2 (giả định).",
    next: "Earned hay paid?",
  });

  // 25 earned vs paid
  s = slide("Earned đáng tin hơn, paid kiểm soát được hơn — và paid phải gắn nhãn");
  table(s, 0.6, 1.95, [3.2, 4.47, 4.46], ["", "Earned — báo chí tự viết", "Paid — trả tiền (KOL, bài có phí)"], [
    ["Kiểm soát nội dung", "Thấp", "Cao (duyệt được)"],
    ["Độ tin cậy với khách", "Cao hơn", "Phụ thuộc người đăng"],
    ["Nghĩa vụ", "Cung cấp thông tin đúng, đúng mảng", "Gắn nhãn quảng cáo / được tài trợ"],
    ["Ví dụ gala", "Nhà báo kinh tế phỏng vấn diễn giả", "Video của diễn giả có phí, gắn nhãn"],
  ], { hc: [CARD, TEAL, ORA], rh: 0.75, fs: 15, firstCol: YEL });
  src(s, "Bảng: nhận định của người soạn; nghĩa vụ gắn nhãn: Luật 75/2025/QH15, Điều 23 (X05).", 6.45);
  notes(s, {
    say: "Earned và paid. Earned — báo chí tự viết: kiểm soát nội dung thấp, nhưng độ tin cậy với khách cao hơn; nghĩa vụ của Nova là cung cấp thông tin đúng, đúng mảng. Paid — trả tiền cho KOL hoặc bài có phí: kiểm soát cao, duyệt được; độ tin cậy phụ thuộc người đăng; và phải gắn nhãn quảng cáo hoặc được tài trợ. Ví dụ gala: nhà báo kinh tế phỏng vấn diễn giả là earned; video của diễn giả có trả phí là paid, phải gắn nhãn.",
    gv: "Lecture notes §3.3 — nhận định.",
    next: "Năm câu hỏi khuếch đại.",
  });

  // 26 five questions
  s = slide("Năm câu hỏi khuếch đại cho mỗi điểm chạm");
  const fq = [["FaMapMarkerAlt", "Điểm chạm nào của khách An Phát?", TEAL], ["FaUserTie", "Ai khuếch đại — và vì sao khách tin họ?", YEL], ["FaGift", "Khách được gì: thông tin, lý do để đến?", ORA], ["FaShieldAlt", "Điều khoản, nguyên tắc nào bảo vệ An Phát?", PINK], ["FaChartBar", "Đo bằng output nào, outcome nào?", BLUE]];
  for (let i = 0; i < 5; i++) { const y = 1.95 + i * 0.88; num(s, i + 1, 0.6, y, 0.72, fq[i][2], 20); await ic(s, fq[i][0], 1.5, y, 0.72, fq[i][2]); box(s, 2.4, y, 10.33, 0.72); T(s, fq[i][1], 2.65, y, 9.9, 0.72, { fontSize: 19, bold: true }); }
  T(s, "Chiếu suốt Thực hành 2.", 0.6, 6.4, 12.13, 0.45, { fontSize: 15, color: MU, italic: true });
  notes(s, {
    say: "Năm câu hỏi cho mỗi điểm chạm. Một: điểm chạm nào của khách An Phát? Hai: ai khuếch đại — và vì sao khách tin họ? Ba: khách được gì — thông tin, lý do để đến? Bốn: điều khoản, nguyên tắc nào bảo vệ An Phát — gắn nhãn, duyệt nội dung, không khuyến nghị đầu tư? Năm: đo bằng output nào, outcome nào?",
    gv: "Lecture notes §3.4. Để slide này trên màn hình suốt S6.",
    next: "Thực hành 2.",
  });

  // 27 practice 2
  s = await L.practice("Thực hành 2 · 30 phút: khuếch đại điểm chạm trước sự kiện cho khách của An Phát", [["3’", "Mở đầu: diễn giả nhóm đã chọn (mặc định TS. Nam, chị Mai Anh) + danh sách 5 nhà báo/kênh", TEAL], ["15’", "Bảng trên A1: ≥ 4 điểm chạm trước sự kiện; ≥ 1 nhà báo, ≥ 1 diễn giả/KOL; đủ 6 cột; đánh dấu ⭐", YEL], ["8’", "Xoay trạm 2 vòng × 4’: vai chị Vy (Thương hiệu An Phát) — 1 câu hỏi (note vàng) + 1 lo ngại (note hồng)", PINK], ["4’", "Về bàn, đọc note, sửa một dòng", BLUE]], "FaBullhorn", "Sản phẩm", "Kế hoạch khuếch đại đã sửa — mẫu cho trang “báo chí và KOL” trong SMP", "6 cột: điểm chạm · ai · khách được gì · bảo vệ An Phát · output + outcome · earned/paid", YEL);
  notes(s, {
    say: "Thực hành 2, 30 phút. Thư mời gửi lúc T trừ 6 tuần, hạn xác nhận T trừ 3 tuần. Mục tiêu của anh Minh: tỷ lệ CEO đến trực tiếp tăng rõ. Mười lăm phút: trên A1, chọn ít nhất 4 điểm chạm trước sự kiện; dùng ít nhất một nhà báo trong danh sách và ít nhất một diễn giả từ Thực hành 1; đủ 6 cột; đánh dấu sao điểm chạm nhóm tin sẽ kéo CEO đến nhiều nhất. Tám phút: xoay trạm 2 vòng; tại mỗi bàn các bạn đóng vai chị Vy — Trưởng nhóm Thương hiệu An Phát — để lại một câu hỏi và một lo ngại. Bốn phút cuối: sửa một dòng.",
    gv: "Phiếu W11_activity_S6_khuech_dai_truoc_su_kien.md. Mốc phút 93–123. Chiếu slide 26 trong lúc làm. Kênh E (“đăng bài theo yêu cầu, có báo giá”) là bẫy — nếu dùng thì là paid, phải gắn nhãn. Nếu trễ giờ: xoay trạm 1 vòng.",
    next: "Tổng hợp.",
  });

  // 28 summary
  s = slide("Ba ý của Buổi 11 — và một trang mới cho kế hoạch");
  const sm = [["11.1–11.2", "Chọn KOL theo vai trò, độ tin cậy, tương đồng với khách của Key Account và rủi ro — không theo số follower. Nhắm khán giả trước; bản đồ nhà báo theo mảng × độc giả × mức quan hệ", TEAL], ["11.3", "Booking là quy trình: brief → due diligence → hợp đồng (nghĩa vụ luật định, duyệt, chấm dứt) → thanh toán có chứng từ → báo cáo outputs – outcomes – impact, không dùng AVE", YEL], ["11.4", "Báo chí và KOL khuếch đại điểm chạm trước sự kiện — cho khách một lý do để đến — và luôn bảo vệ Key Account", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.25; box(s, 0.6, y, 1.6, 1.05, c); T(s, k, 0.6, y, 1.6, 1.05, { align: "center", bold: true, color: NAVY, fontSize: 18 }); box(s, 2.4, y, 10.33, 1.05); T(s, t, 2.65, y, 9.9, 1.05, { fontSize: 14.5 }); });
  box(s, 0.6, 5.85, 12.13, 0.8, BLUE);
  T(s, "Kế hoạch cuối kỳ: trang “báo chí và KOL” — khán giả mục tiêu, 3 nhà báo/KOL phù hợp, điều khoản bắt buộc, 3 chỉ số outcome.", 0.85, 5.85, 11.7, 0.8, { fontSize: 15, bold: true, color: NAVY });
  notes(s, {
    say: "Ba ý của Buổi 11. Mục 11.1 và 11.2: chọn KOL theo vai trò, độ tin cậy, tương đồng với khách của Key Account và rủi ro — không theo số follower; nhắm khán giả trước, rồi lập bản đồ nhà báo. Mục 11.3: booking là quy trình — brief, due diligence, hợp đồng có nghĩa vụ luật định, thanh toán có chứng từ, báo cáo outputs – outcomes – impact, không dùng AVE. Mục 11.4: báo chí và KOL khuếch đại điểm chạm trước sự kiện — cho khách một lý do để đến — và luôn bảo vệ Key Account. Kế hoạch cuối kỳ thêm trang báo chí và KOL. Làm dần trên lớp, không giao về nhà.",
    next: "Ba câu kiểm tra nhanh.",
  });

  // 29 quick check
  s = L.quickCheck(["Với 600 CEO, vì sao “tương đồng” có thể quan trọng hơn “số follower”?", "Kể 2 điều khoản Nova nhất định đưa vào hợp đồng với KOL, theo Luật Quảng cáo 2025.", "Cho 1 output và 1 outcome của giai đoạn trước sự kiện. Vì sao không dùng AVE?"]);
  notes(s, { say: "Ba câu kiểm tra nhanh. Một: với 600 CEO, vì sao tương đồng có thể quan trọng hơn số follower? Hai: kể 2 điều khoản Nova nhất định đưa vào hợp đồng với KOL, theo Luật Quảng cáo 2025. Ba: cho một output và một outcome của giai đoạn trước sự kiện — và vì sao không dùng AVE?", gv: "Gợi ý: (1) khách tin người giống mình (Lou & Yuan); khách đã được mời đích danh, không cần “khán giả” của KOL; (2) xác minh thông tin, gắn nhãn trước và trong khi quảng cáo, duyệt nội dung, chấm dứt khi vi phạm; (3) output: số bài đúng mảng; outcome: tỷ lệ CEO đến trực tiếp; AVE đo chi phí giả định, không đo giá trị.", ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.", next: "Phiếu cuối giờ." });

  // 30 exit
  s = await L.exitTicket("Với khách hàng trong dự án cũ của nhóm, bạn chọn loại KOL/diễn giả nào? Bạn đang “mua” khán giả, sự bảo chứng hay nội dung của họ?", "Viết 1 điều khoản bạn nhất định đưa vào hợp đồng với KOL đó, và 1 chỉ số outcome (không phải output) bạn sẽ báo cáo.");
  notes(s, { say: "Phiếu cuối giờ, cá nhân. Một: với khách hàng trong dự án cũ của nhóm, bạn chọn loại KOL hay diễn giả nào — bạn đang mua khán giả, sự bảo chứng hay nội dung của họ? Hai: viết một điều khoản bạn nhất định đưa vào hợp đồng với người đó, và một chỉ số outcome — không phải output — bạn sẽ báo cáo cho khách hàng.", gv: "Xem: (a) chọn theo phù hợp với khách của Key Account; (b) điều khoản cụ thể; (c) phân biệt output và outcome.", next: "Buổi sau." });

  // 31 next
  s = await L.nextSession("Không có bài về nhà. Buổi 12: khi mạng lưới các bên liên quan xung đột", "Buổi 12 · Tận dụng mạng lưới và xử lý xung đột", "Hôm nay ta chọn và ký với những người kể chuyện cho Key Account. Buổi sau: khi nhà tài trợ, nhà cung cấp, báo chí, KOL xung đột hoặc gặp sự cố — agency xử lý và biến xung đột thành cơ hội thế nào.", ["Ảnh bảng chấm diễn giả và kế hoạch khuếch đại", "Bảng nhà tài trợ (Buổi 9) và nhà cung cấp (Buổi 10)"]);
  notes(s, { say: "Không có bài về nhà. Hôm nay ta chọn và ký với những người kể chuyện cho Key Account. Buổi 12: khi các bên liên quan — nhà tài trợ, nhà cung cấp, báo chí, KOL — xung đột với nhau hoặc gặp sự cố, agency xử lý và biến xung đột thành cơ hội thế nào. Mang theo sản phẩm của Buổi 9, 10 và 11.", gv: "Câu nối theo giáo án. [NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 11 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 32 refs
  s = L.refs([
    [["AMEC. (2025). "], ["Barcelona Principles V4.0", 1], [". International Association for Measurement and Evaluation of Communication."]],
    [["Campbell, C., & Farrell, J. R. (2020). More than meets the eye: The functional components underlying influencer marketing. "], ["Business Horizons, 63", 1], ["(4), 469–479."]],
    [["Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. "], ["Journal of Marketing, 80", 1], ["(6), 69–96."]],
    [["Lou, C., & Yuan, S. (2019). Influencer marketing: How message value and credibility affect consumer trust of branded content on social media. "], ["Journal of Interactive Advertising, 19", 1], ["(1), 58–73."]],
    [["Ohanian, R. (1990). Construction and validation of a scale to measure celebrity endorsers’ perceived expertise, trustworthiness, and attractiveness. "], ["Journal of Advertising, 19", 1], ["(3), 39–52."]],
    [["Quốc hội. (2025a). "], ["Luật số 75/2025/QH15 sửa đổi, bổ sung một số điều của Luật Quảng cáo", 1], ["."]],
    [["Quốc hội. (2025b). "], ["Luật Báo chí", 1], [" (Luật số 126/2025/QH15)."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 11, theo APA 7.", gv: "Khảo sát, báo chí và văn bản nghề nghiệp (X04, X06–X12, X15): danh mục APA đầy đủ trong buoi-11_tu-lieu-tong-hop.md, mục 6 và 8.", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
