// EVM1110E Buổi 4 — Measuring relationship quality: trust, commitment, functional conflict; transactional → relational
// usage: NODE_PATH=<node_modules> node w04.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W04_slides.pptx";
const L = make(FONT, "Bài 4: Đo chất lượng quan hệ với Key Account");
const { T, box, circ, num, ic, slide, notes, src, bullets, arrow } = L;
const { TEAL, YEL, PINK, PUR, BLUE, ORA, NAVY, CARD, TX, MU } = C;

// definition cards: [[header, color, text, cite]], synth line
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
  let s = L.titleSlide("Bài 4: Đo chất lượng quan hệ với Key Account", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 4\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 4 — Bài 4: Đo chất lượng quan hệ với Key Account. Buổi 3 ta đã hiểu thế giới của An Phát và những người ra quyết định. Hôm nay: quan hệ giữa Nova và An Phát đang tốt hay xấu — và đo bằng gì.", gv: "Mở đầu bằng 2–3 “điều còn mơ hồ” từ phiếu cuối giờ Buổi 3 (≤3 phút).", next: "Bắt đầu bằng một câu hỏi về chị Hạnh." });

  // 2 hook vote
  s = slide("Bốn năm, chị Hạnh chưa từng phàn nàn với Nova một lần nào");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaCommentSlash", 0.9, 2.2, 1.1, PINK);
  T(s, "Tình huống (giả định)", 2.2, 2.2, 5.5, 1.1, { fontSize: 16, color: MU });
  T(s, bullets(["Nova tổ chức gala khách hàng VIP cho An Phát 4 năm liền", "Chị Hạnh, GĐ Marketing, chưa từng phàn nàn điều gì", "An Phát vẫn mời 2 agency khác chào giá mỗi năm"]), 0.95, 3.45, 6.75, 2.7, { fontSize: 18, valign: "top", paraSpaceAfter: 8 });
  box(s, 8.2, 1.95, 4.53, 4.3);
  T(s, "Giơ tay: đây là dấu hiệu…", 8.45, 2.1, 4.1, 1.2, { bold: true, fontSize: 18, color: YEL, valign: "top" });
  [["A · Quan hệ rất tốt", TEAL], ["B · Đáng lo", PINK]].forEach(([t, c], i) => { box(s, 8.5, 3.5 + i * 1.2, 3.93, 0.95, c); T(s, t, 8.7, 3.5 + i * 1.2, 3.5, 0.95, { fontSize: 20, bold: true, color: NAVY }); });
  notes(s, {
    say: "Tình huống giả định. Nova tổ chức gala khách hàng VIP cho An Phát bốn năm liền. Chị Hạnh, Giám đốc Marketing, chưa từng phàn nàn điều gì với Nova. Nhưng An Phát vẫn mời hai agency khác chào giá mỗi năm. Đây là dấu hiệu A — quan hệ rất tốt, hay B — đáng lo? Giơ tay.",
    gv: "Đếm nhanh A/B. Không chốt ngay; để câu trả lời mở đến slide 3.",
    ask: "“A hay B? Một bạn mỗi phía giải thích trong 1 câu.”",
    next: "Có thể là cả hai.",
  });

  // 3 answer frame
  s = slide("Không phàn nàn có thể là hài lòng — hoặc là không đủ tin để nói thật");
  box(s, 0.6, 1.95, 5.9, 3.6, TEAL);
  await ic(s, "FaSmile", 0.9, 2.2, 1.0, NAVY, TEAL);
  T(s, "Nếu là hài lòng", 2.1, 2.2, 4.2, 1.0, { bold: true, fontSize: 20, color: NAVY });
  T(s, "Nova làm đúng cam kết; chị Hạnh không có gì cần nói.", 0.9, 3.4, 5.3, 2.0, { fontSize: 18, color: NAVY, valign: "top" });
  box(s, 6.83, 1.95, 5.9, 3.6, PINK);
  await ic(s, "FaUserSecret", 7.13, 2.2, 1.0, NAVY, PINK);
  T(s, "Nếu là im lặng", 8.33, 2.2, 4.2, 1.0, { bold: true, fontSize: 20, color: NAVY });
  T(s, "Có điều chưa hài lòng nhưng không nói với Nova — Nova không biết để sửa, và có thể mất hợp đồng mà không hiểu vì sao.", 7.13, 3.4, 5.3, 2.0, { fontSize: 18, color: NAVY, valign: "top" });
  T(s, "Hôm nay: đo quan hệ bằng ba trụ cột — trong đó có một trụ cột nghe lạ: xung đột.", 0.6, 5.85, 12.13, 0.7, { fontSize: 19, bold: true, color: YEL });
  notes(s, {
    say: "Có thể cả hai. Nếu là hài lòng: Nova làm đúng cam kết, chị Hạnh không có gì cần nói. Nếu là im lặng: có điều chưa hài lòng nhưng không nói với Nova — Nova không biết để sửa, và một ngày có thể mất hợp đồng mà không hiểu vì sao. Cảm giác không đủ để phân biệt hai trường hợp. Hôm nay ta đo quan hệ bằng ba trụ cột — trong đó có một trụ cột nghe lạ: xung đột.",
    gv: "Giáo án S1 (phút 0–5). Chi tiết “mời 2 agency khác chào giá” là thẻ bằng chứng 4 của Thực hành 1.",
    next: "Trước hết: “mối quan hệ” là gì?",
  });

  // 4 relationship definitions
  s = slide("Ba cách nhìn “mối quan hệ”: công nhận lẫn nhau, chuỗi tương tác, mức phụ thuộc");
  defCards(s, [
    ["John Czepiel", TEAL, "“Sự công nhận lẫn nhau về một vài tình trạng đặc biệt giữa các bên trao đổi.”", "(theo Trần Nguyễn Huỳnh Như, 2023, Chương 3)"],
    ["Francis Buttle", YEL, "“Một mối quan hệ bao gồm một loạt các giai đoạn tương tác giữa các bên theo thời gian.”", "(theo Trần Nguyễn Huỳnh Như, 2023, Chương 3)"],
    ["Javier Marcos", BLUE, "Mối quan hệ được thể hiện qua mức độ phụ thuộc của mỗi bên trong mối quan hệ kinh doanh.", "(Trần Nguyễn Huỳnh Như, 2023; Marcos et al., 2018, tr. 92–93)"],
  ], "Tổng hợp: quan hệ = hai bên công nhận nhau là đặc biệt, qua nhiều lần tương tác, với một mức phụ thuộc nhất định.", 17);
  notes(s, {
    say: "Slide bộ môn đưa ba cách nhìn. John Czepiel: mối quan hệ trên thị trường là sự công nhận lẫn nhau về một vài tình trạng đặc biệt giữa các bên trao đổi. Francis Buttle: một mối quan hệ gồm một loạt giai đoạn tương tác giữa các bên theo thời gian. Javier Marcos: mối quan hệ thể hiện qua mức độ phụ thuộc của mỗi bên. Gộp lại: quan hệ là khi hai bên công nhận nhau là đặc biệt, qua nhiều lần tương tác, với một mức phụ thuộc nhất định. Nova và An Phát: bốn năm, nhiều lần tương tác — nhưng có “đặc biệt” với nhau không?",
    gv: "Đã đối chiếu slide gốc Chương 3 (mở đầu). Ý của Marcos khớp giáo trình Marcos et al. (2018, tr. 92–93): hai chiều “situation of dependency/power” và “transactional vs relational”. Câu tổng hợp là của người soạn. Slide gốc có câu của Reid Hoffman không ghi nguồn — không dùng.",
    ask: "“Theo Czepiel, An Phát có coi Nova là ‘đặc biệt’ không? Bằng chứng nào?”",
    next: "Đo quan hệ bằng gì? Ba trụ cột.",
  });

  // 5 three pillars overview
  s = slide("Chất lượng quan hệ có ba trụ cột: xung đột, niềm tin, cam kết");
  const pil = [["Xung đột", "Conflict", "FaBolt", PINK, ["Thù địch khi tương tác", "Cản trở việc ra quyết định"]], ["Niềm tin", "Trust", "FaHandshake", TEAL, ["Chuyên môn", "Trung thực", "Thiện chí"]], ["Cam kết", "Commitment", "FaLink", YEL, ["Hỗ trợ bên kia", "Mong quan hệ tiếp tục"]]];
  for (let i = 0; i < 3; i++) {
    const [a, b, icn, c, items] = pil[i], x = 0.6 + i * 4.13;
    box(s, x, 1.95, 3.9, 4.25);
    await ic(s, icn, x + 1.4, 2.15, 1.1, c);
    T(s, a, x + 0.2, 3.35, 3.5, 0.6, { align: "center", bold: true, fontSize: 22, color: c });
    T(s, b, x + 0.2, 3.9, 3.5, 0.45, { align: "center", fontSize: 15, color: MU, italic: true });
    T(s, bullets(items), x + 0.3, 4.45, 3.3, 1.65, { fontSize: 16, valign: "top", paraSpaceAfter: 4 });
  }
  src(s, "Nguồn: Marcos et al. (2018, Hình 4.2, tr. 96); Trần Nguyễn Huỳnh Như (2023), Chương 3, mục 3.1.2. Đề cương 4.1.", 6.45);
  notes(s, {
    say: "Đề cương mục 4.1: ba trụ cột của chất lượng quan hệ. Giáo trình Marcos và cộng sự gọi chất lượng quan hệ là đánh giá tình trạng hiện tại của quan hệ và kỳ vọng nó sẽ phát triển ra sao — gồm ba chiều. Xung đột: khi nặng thì gây thù địch khi tương tác và cản trở ra quyết định. Niềm tin: dựa trên chuyên môn, sự trung thực và thiện chí. Cam kết: hỗ trợ bên kia và mong quan hệ tiếp tục. Slide bộ môn dùng đúng hình này.",
    gv: "Đã đối chiếu: Marcos et al. (2018), Hình 4.2 “The dimensions of relationship quality” (tr. 96) và đoạn định nghĩa relationship quality (“an assessment of the present state of the relationship… and of the expectations of how this relationship will evolve”, tr. 96). Slide gốc Chương 3 mục 3.1.2 sao lại hình này bằng tiếng Việt. Quyết định Q5 (4/10/2026): dùng định nghĩa của slide; Morgan & Hunt (1994) giữ làm nguồn gốc học thuật.",
    next: "Trụ cột đầu tiên nghe lạ nhất: xung đột.",
  });

  // 6 conflict two faces
  s = slide("Xung đột có hai mặt: rối loạn chức năng làm hỏng quan hệ, xung đột chức năng làm quan hệ tốt lên");
  T(s, "Xung đột là căng thẳng giữa client và agency do khác biệt thực tế hoặc nhận thức được.", 0.6, 1.85, 12.13, 0.6, { fontSize: 18, bold: true, color: YEL });
  box(s, 0.6, 2.6, 5.9, 3.65, CARD);
  await ic(s, "FaTimes", 0.85, 2.8, 0.85, PINK);
  T(s, "Rối loạn chức năng", 1.9, 2.8, 4.4, 0.85, { bold: true, fontSize: 20, color: PINK });
  T(s, bullets(["Tạo thù địch khi tương tác", "Cản trở ra quyết định; bóp méo hoặc che giấu thông tin", "Mức cao → chất lượng quan hệ giảm"]), 0.9, 3.8, 5.4, 2.3, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.83, 2.6, 5.9, 3.65, CARD);
  await ic(s, "FaCheck", 7.08, 2.8, 0.85, TEAL);
  T(s, "Xung đột chức năng", 8.13, 2.8, 4.4, 0.85, { bold: true, fontSize: 20, color: TEAL });
  T(s, bullets(["Thúc đẩy thảo luận hiệu quả, sáng tạo, đổi mới, thích ứng", "Bất đồng xoay quanh cách cùng làm việc và mục tiêu chung", "Mở ra hiểu biết mới"]), 7.13, 3.8, 5.4, 2.3, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  src(s, "Nguồn: Trần Nguyễn Huỳnh Như (2023), Chương 3, mục 3.1.2; Marcos et al. (2018, tr. 96–97).", 6.45);
  notes(s, {
    say: "Slide bộ môn: xung đột là căng thẳng giữa client và agency do khác biệt thực tế hoặc nhận thức được. Có hai mặt. Mặt tiêu cực — xung đột rối loạn chức năng: tạo thù địch, cản trở ra quyết định, dẫn đến bóp méo hoặc che giấu thông tin; mức cao làm chất lượng quan hệ giảm. Mặt tích cực — xung đột chức năng: thúc đẩy thảo luận hiệu quả, sáng tạo, đổi mới và thích ứng — khi bất đồng xoay quanh cách cùng làm việc và đạt mục tiêu chung. Giáo trình nói thêm: trong KAM, có một mức xung đột là điều bình thường — thách thức là tìm đúng cân bằng.",
    gv: "Đã đối chiếu slide gốc Chương 3 (hai khung “Xung đột rối loạn chức năng” / “Xung đột chức năng”) và Marcos et al. (2018, tr. 96–97): “Conflict is tension between a supplier and a buyer due to real or perceived differences…” (dẫn Menon et al., 1996); “In KAM it is expected that a certain amount of conflict will be present… The challenge is to find the right balance”. Câu trích John C. Maxwell trong slide gốc không ghi nguồn — không dùng.",
    ask: "“Bất đồng gần nhất trong nhóm bạn — nó thuộc mặt nào?”",
    next: "Nguồn gốc học thuật của khái niệm xung đột chức năng.",
  });

  // 7 functional conflict Morgan & Hunt
  s = slide("Xung đột chức năng là bất đồng được giải quyết êm thấm — không phải “ít xung đột”");
  box(s, 0.6, 1.95, 7.6, 3.9);
  T(s, "“When disputes are resolved amicably, such disagreements can be referred to as ‘functional conflict,’ because they prevent stagnation, stimulate interest and curiosity, and provide a ‘medium through which problems can be aired and solutions arrived at’.”", 0.9, 2.1, 7.0, 3.0, { fontSize: 17, italic: true, valign: "top" });
  T(s, "— Morgan & Hunt (1994, dẫn Deutsch, 1969)", 0.9, 5.15, 7.0, 0.5, { fontSize: 14, color: MU });
  const fc = [["Tránh trì trệ", TEAL], ["Khơi sự quan tâm", YEL], ["Kênh để nêu vấn đề, tìm giải pháp", PINK]];
  fc.forEach(([t, c], i) => { box(s, 8.5, 1.95 + i * 1.32, 4.23, 1.12, c); T(s, t, 8.7, 1.95 + i * 1.32, 3.85, 1.12, { fontSize: 18, bold: true, color: NAVY }); });
  box(s, 0.6, 6.05, 12.13, 0.75, YEL);
  T(s, "Một quan hệ không có bất đồng nào có thể là quan hệ trì trệ.", 0.8, 6.05, 11.7, 0.75, { fontSize: 18, bold: true, color: NAVY });
  notes(s, {
    say: "Morgan và Hunt, 1994, dẫn Deutsch: khi tranh chấp được giải quyết êm thấm, bất đồng đó được gọi là xung đột chức năng — vì nó ngăn quan hệ trì trệ, khơi sự quan tâm và tò mò, và là kênh để nêu vấn đề và tìm giải pháp. Họ còn dẫn Anderson và Narus: xung đột chức năng là “just another part of doing business” — một phần bình thường của kinh doanh. Vậy xung đột chức năng không phải là “ít xung đột”. Một quan hệ không có bất đồng nào có thể là quan hệ trì trệ.",
    gv: "D01 — đã đọc toàn văn Morgan & Hunt (1994), Journal of Marketing 58(3). Định nghĩa nguyên văn (quyết định GV 2, 28/9/2026). Nối Korstanje (2024): trong tổ chức sự kiện, hợp tác và xung đột không đối lập — “both factors, well combined” làm tăng gắn kết [VERIFY số trang chương].",
    next: "Trụ cột thứ hai: niềm tin.",
  });

  // 8 trust definitions
  s = slide("Niềm tin có hai thành phần: tin vào năng lực, và tin vào thiện chí");
  defCards(s, [
    ["Morgan & Hunt (1994)", TEAL, "“Trust… existing when one party has confidence in an exchange partner’s reliability and integrity.”", "(tr. 23)"],
    ["Niềm tin về chuyên môn", YEL, "Mức độ client (hoặc agency) tin bên kia có kiến thức, chuyên môn để làm hiệu quả, chuyên nghiệp, đáng tin cậy và trung thực.", "(Trần Nguyễn Huỳnh Như, 2023; Marcos et al., 2018, tr. 98)"],
    ["Niềm tin về đạo đức (thiện chí)", BLUE, "Mức độ hai bên tin đối tác có thiện chí, có ý định và động cơ có lợi cho mình.", "(Trần Nguyễn Huỳnh Như, 2023; Marcos et al., 2018, tr. 98)"],
  ], "Tổng hợp: tin rằng bên kia làm được việc, làm đúng lời, và muốn điều tốt cho mình — nên sẵn lòng dựa vào họ.");
  notes(s, {
    say: "Niềm tin. Morgan và Hunt: niềm tin tồn tại khi một bên tin vào độ tin cậy và sự chính trực của đối tác. Slide bộ môn, theo giáo trình Marcos và cộng sự, tách niềm tin thành hai phần. Một — niềm tin về chuyên môn: bên kia có kiến thức, chuyên môn để làm hiệu quả, chuyên nghiệp, đáng tin cậy và trung thực. Hai — niềm tin về đạo đức, hay thiện chí: bên kia có thiện chí, có ý định và động cơ có lợi cho mình. Gộp lại, niềm tin thể hiện ở sự sẵn lòng dựa vào một đối tác mà mình tin. Giáo trình lưu ý: nhiều agency giống nhau về chuyên môn; khác biệt thường nằm ở thiện chí.",
    gv: "Đã đối chiếu: Morgan & Hunt (1994) — nguyên văn (D01; [VERIFY số trang 23 với bản PDF]); Marcos et al. (2018, tr. 97–98): “Trust is the willingness to rely on an exchange partner in whom one has confidence” (dẫn Moorman et al., 1992) và hai thành phần “trust in credibility” / “trust in benevolence”; ví dụ “several suppliers are very similar in terms of their credibility… important differences in terms of their benevolence”. Slide gốc Chương 3 dịch hai thành phần này. Câu trích Arianna Huffington trong slide gốc không ghi nguồn — không dùng.",
    ask: "“Nova mạnh ở loại niềm tin nào với An Phát?”",
    next: "Niềm tin xây lâu, mất nhanh.",
  });

  // 9 trust slow to build
  s = slide("Niềm tin xây rất lâu — và có thể mất rất nhanh");
  box(s, 0.6, 1.95, 7.3, 4.3, CARD);
  T(s, "“…it takes a long time to build trust, and we have a very long track record of destroying it. Our biggest hurdle with customers really is to build that trust…”", 0.9, 2.15, 6.7, 2.9, { fontSize: 19, italic: true, valign: "top" });
  T(s, "— Trưởng bộ phận KAM toàn cầu, ngành dược", 0.9, 5.2, 6.7, 0.6, { fontSize: 14, color: MU });
  box(s, 8.2, 1.95, 4.53, 4.3, TEAL);
  T(s, "Niềm tin giúp", 8.45, 2.1, 4.1, 0.6, { bold: true, fontSize: 19, color: NAVY });
  T(s, bullets(["Giảm cảm nhận rủi ro", "Tin rằng trục trặc ngắn hạn sẽ được giải quyết", "Không cần văn bản hóa mọi thỏa thuận", "Sẵn lòng đầu tư riêng cho quan hệ"]), 8.45, 2.75, 4.1, 3.4, { fontSize: 16, color: NAVY, valign: "top", paraSpaceAfter: 6 });
  src(s, "Nguồn: Marcos et al. (2018, tr. 97).", 6.45);
  notes(s, {
    say: "Một trưởng bộ phận KAM toàn cầu ngành dược nói: phải mất rất lâu mới xây được niềm tin — và ngành chúng tôi có thành tích dài trong việc phá hủy nó. Rào cản lớn nhất với khách hàng chính là xây niềm tin. Giáo trình liệt kê niềm tin giúp gì: giảm cảm nhận rủi ro; tin rằng trục trặc ngắn hạn sẽ được giải quyết về lâu dài; giảm chi phí giao dịch vì không cần văn bản hóa mọi thỏa thuận; và cả hai bên sẵn lòng đầu tư riêng cho quan hệ.",
    gv: "Đã đối chiếu Marcos et al. (2018, tr. 97), hộp “The challenge of building customer trust” và đoạn trước đó. Nối thẻ 8 của Thực hành 1 (Nova giấu việc đổi thiết bị).",
    next: "Trụ cột thứ ba: cam kết.",
  });

  // 10 commitment
  s = slide("Cam kết là muốn giữ quan hệ lâu dài — và chứng minh bằng đầu tư riêng cho khách hàng đó");
  defCards(s, [
    ["Morgan & Hunt (1994)", TEAL, "Một bên tin rằng quan hệ quan trọng đến mức đáng nỗ lực tối đa để giữ; tin rằng quan hệ đáng vun đắp để kéo dài mãi.", "(nguyên văn tiếng Anh trong ghi chú)"],
    ["Slide bộ môn · Marcos et al.", YEL, "Mong muốn phát triển quan hệ ổn định, sẵn sàng hy sinh ngắn hạn để duy trì, và tin vào sự ổn định của quan hệ.", "(Trần Nguyễn Huỳnh Như, 2023; Marcos et al., 2018, tr. 98)"],
    ["Hành vi cam kết", BLUE, "Không chỉ ý định mà cả hành vi: đầu tư nguồn lực riêng cho khách hàng — đội KAM riêng, quy trình riêng, điều kiện riêng.", "(Marcos et al., 2018, tr. 98)"],
  ], "Tổng hợp: cam kết = muốn quan hệ kéo dài + chịu thiệt ngắn hạn + đầu tư riêng. Nói “key account” mà không đầu tư riêng là hiểu sai KAM.");
  notes(s, {
    say: "Cam kết. Morgan và Hunt: một bên tin rằng quan hệ với bên kia quan trọng đến mức đáng nỗ lực tối đa để giữ, đáng vun đắp để kéo dài mãi. Slide bộ môn, theo giáo trình: cam kết là mong muốn phát triển quan hệ ổn định, sẵn sàng hy sinh ngắn hạn để duy trì, và tin vào sự ổn định của quan hệ. Giáo trình nhấn: cam kết không chỉ là ý định, mà là hành vi — đầu tư nguồn lực riêng cho khách hàng đó. Họ viết thẳng: nhiều công ty nói có key account mà không đầu tư gì riêng — đó có lẽ là hiểu sai KAM.",
    gv: "Morgan & Hunt (1994), nguyên văn: “an exchange partner believing that an ongoing relationship with another is so important as to warrant maximum efforts at maintaining it; that is, the committed party believes the relationship is worth working on to ensure that it endures indefinitely.” Marcos et al. (2018, tr. 98) dẫn Anderson & Weitz (1992): “the desire to develop a stable buyer–supplier relationship, a willingness to make short-term sacrifices…”; “idiosyncratic resources”; “managers claim to have key accounts, but without making any idiosyncratic investment; this is probably a mistaken idea of what KAM really is.” Nối Buổi 2 (khoản đầu tư KAM).",
    ask: "“Nova đã đầu tư gì riêng cho An Phát?”",
    next: "Ba trụ cột liên hệ với nhau thế nào?",
  });

  // 11 model
  s = slide("Trong mô hình gốc, xung đột chức năng là kết quả của niềm tin");
  box(s, 0.6, 2.2, 3.4, 1.3, YEL); T(s, "Cam kết", 0.6, 2.2, 3.4, 1.3, { align: "center", bold: true, fontSize: 22, color: NAVY });
  box(s, 0.6, 4.4, 3.4, 1.3, TEAL); T(s, "Niềm tin", 0.6, 4.4, 3.4, 1.3, { align: "center", bold: true, fontSize: 22, color: NAVY });
  box(s, 5.4, 3.3, 3.2, 1.3, BLUE); T(s, "Hợp tác (cooperation)", 5.5, 3.3, 3.0, 1.3, { align: "center", bold: true, fontSize: 19, color: NAVY });
  box(s, 5.4, 5.2, 3.2, 1.1, PINK); T(s, "Xung đột chức năng", 5.5, 5.2, 3.0, 1.1, { align: "center", bold: true, fontSize: 18, color: NAVY });
  const ln = { color: MU, width: 2.5, endArrowType: "triangle" };
  s.addShape(L.pres.shapes.LINE, { x: 4.0, y: 2.85, w: 1.4, h: 0.85, line: ln });
  s.addShape(L.pres.shapes.LINE, { x: 4.0, y: 4.2, w: 1.4, h: 0.85, flipV: true, line: ln });
  s.addShape(L.pres.shapes.LINE, { x: 4.0, y: 5.05, w: 1.4, h: 0.7, line: ln });
  box(s, 9.0, 2.2, 3.73, 4.1, CARD);
  T(s, "“Có niềm tin thì dám nói thẳng; nói thẳng mà giải quyết được thì niềm tin tăng.”", 9.2, 2.35, 3.33, 3.8, { fontSize: 18, bold: true, color: YEL, valign: "top" });
  src(s, "Nguồn: Morgan & Hunt (1994), mô hình KMV — rút gọn còn các biến của bài này.", 6.5);
  notes(s, {
    say: "Trong mô hình của Morgan và Hunt, cam kết và niềm tin là hai biến trung gian then chốt. Hợp tác phát sinh từ cả cam kết và niềm tin. Còn xung đột chức năng là kết quả trực tiếp của niềm tin. Nói đơn giản: có niềm tin thì dám nói thẳng; nói thẳng mà giải quyết được thì niềm tin tăng. Không có niềm tin thì bất đồng hoặc bị giấu đi, hoặc nổ ra.",
    gv: "D01: “functional conflict and uncertainty are the direct results of trust” (Morgan & Hunt, 1994). Sơ đồ rút gọn — mô hình gốc có thêm các tiền đề (chi phí chấm dứt quan hệ, lợi ích, giá trị chung, giao tiếp, hành vi cơ hội) và các kết quả khác (đồng thuận, xu hướng rời bỏ, bất định). Mũi tên Cam kết → Hợp tác vẽ chéo để rõ hai nguồn.",
    next: "Với khách hàng mới thì sao — chưa có niềm tin để bắt đầu?",
  });

  // 12 Anderson & Narus
  s = slide("Với khách hàng mới, hợp tác trước — niềm tin đến sau");
  box(s, 0.6, 1.95, 6.0, 4.3);
  await ic(s, "FaSeedling", 0.9, 2.2, 1.0, TEAL);
  T(s, "Anderson & Narus (1990)", 2.1, 2.2, 4.3, 1.0, { bold: true, fontSize: 20, color: TEAL });
  T(s, "Nghiên cứu quan hệ đối tác giữa nhà phân phối và nhà sản xuất: hợp tác là tiền đề của niềm tin, không chỉ là hệ quả.", 0.9, 3.4, 5.4, 2.7, { fontSize: 18, valign: "top" });
  box(s, 6.85, 1.95, 5.88, 4.3, YEL);
  T(s, "Hàm ý cho agency", 7.1, 2.1, 5.4, 0.6, { bold: true, fontSize: 19, color: NAVY });
  T(s, bullets(["Cùng làm tốt vài việc nhỏ trước khi đề xuất việc lớn", "Giữ đúng những lời hứa đầu tiên — kể cả việc rất nhỏ", "Mỗi lần hợp tác suôn sẻ là một “khoản gửi” vào niềm tin"]), 7.1, 2.8, 5.4, 3.3, { fontSize: 17, color: NAVY, valign: "top", paraSpaceAfter: 8 });
  src(s, "Nguồn: Anderson & Narus (1990). Hàm ý cho agency là nhận định của người soạn.", 6.45);
  notes(s, {
    say: "Anderson và Narus, 1990, nghiên cứu quan hệ đối tác giữa nhà phân phối và nhà sản xuất, và thấy: hợp tác là tiền đề của niềm tin — không chỉ là hệ quả. Hàm ý cho agency: với khách hàng mới, cùng làm tốt vài việc nhỏ trước khi đề xuất việc lớn; giữ đúng những lời hứa đầu tiên, kể cả việc rất nhỏ; mỗi lần hợp tác suôn sẻ là một khoản gửi vào niềm tin.",
    gv: "D02 — đã đọc tóm tắt. Hàm ý là nhận định (đã duyệt). Nối Buổi 2: chị Vy (chưa làm với Nova) — bắt đầu bằng một việc nhỏ.",
    next: "Vì sao phải đo chất lượng quan hệ?",
  });

  // 13 Palmatier
  s = slide("Chất lượng quan hệ ảnh hưởng đến hiệu quả nhiều hơn từng yếu tố riêng lẻ");
  const pm = [["FaChartLine", "Hiệu quả khách quan chịu ảnh hưởng nhiều nhất từ chất lượng quan hệ — thước đo tổng hợp", TEAL], ["FaBuilding", "Marketing quan hệ hiệu quả hơn trong dịch vụ và thị trường doanh nghiệp", BLUE], ["FaUserFriends", "Quan hệ với một cá nhân mạnh hơn quan hệ với công ty — nhưng rủi ro khi người đó rời đi", PINK]];
  for (let i = 0; i < 3; i++) { const y = 1.95 + i * 1.45; box(s, 0.6, y, 12.13, 1.25); await ic(s, pm[i][0], 0.85, y + 0.2, 0.85, pm[i][2]); T(s, pm[i][1], 1.95, y, 10.6, 1.25, { fontSize: 19 }); }
  src(s, "Nguồn: Palmatier, Dant, Grewal & Evans (2006), phân tích tổng hợp (meta-analysis).", 6.45);
  notes(s, {
    say: "Palmatier và cộng sự, 2006, tổng hợp rất nhiều nghiên cứu thực nghiệm. Ba phát hiện cho ta. Một: hiệu quả khách quan của người bán chịu ảnh hưởng nhiều nhất từ chất lượng quan hệ — thước đo tổng hợp — hơn là từng yếu tố riêng như cam kết. Hai: marketing quan hệ hiệu quả hơn trong dịch vụ và thị trường doanh nghiệp — đúng chỗ của agency sự kiện. Ba: quan hệ với một cá nhân mạnh hơn quan hệ với công ty — nhưng nếu chị Hạnh chuyển việc thì sao? Đó là chủ đề Buổi 8.",
    gv: "D03 — đã đọc tóm tắt. Giáo trình Marcos et al. (2018, tr. 191) cũng xếp relationship quality vào nhóm chỉ số kết quả của KAM (Buổi 8).",
    next: "Ở Việt Nam, “quan hệ” còn có một lớp nữa.",
  });

  // 14 Vietnam quan he
  s = slide("Ở Việt Nam, “quan hệ” gồm thể diện, có qua có lại và tình cảm");
  const qh = [["Thể diện", "The dien · face-saving", TEAL], ["Có qua có lại", "Co qua co lai · reciprocity", YEL], ["Tình cảm", "Tinh cam · emotional bonding", PINK]];
  qh.forEach(([a, b, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 1.9, c); T(s, a, x + 0.2, 2.05, 3.5, 0.9, { bold: true, fontSize: 24, color: NAVY }); T(s, b, x + 0.2, 2.95, 3.5, 0.6, { fontSize: 14, color: NAVY, italic: true }); });
  box(s, 0.6, 4.1, 12.13, 2.1);
  T(s, [{ text: "Hàm ý (nhận định): ", options: { bold: true, color: YEL } }, { text: "vì thể diện, bất đồng nên được nêu riêng, đúng người, đúng lúc. Nêu trước đám đông — kể cả trong buổi họp đông người của khách hàng — dễ biến một bất đồng có thể giải quyết thành xung đột rối loạn chức năng." }], 0.85, 4.1, 11.7, 2.1, { fontSize: 18 });
  src(s, "Nguồn: Pham & Pham (2025), BIMTECH Business Perspectives (đọc tóm tắt).", 6.45);
  notes(s, {
    say: "Pham và Pham, 2025, mô tả “quan hệ” trong kinh doanh Việt Nam gồm ba thành tố: thể diện, có qua có lại và tình cảm — khác Guanxi của Trung Quốc và khác relationship marketing phương Tây. Hàm ý cho ta: vì thể diện, bất đồng nên được nêu riêng, đúng người, đúng lúc. Nêu trước đám đông — kể cả trong buổi họp đông người của khách hàng — dễ biến một bất đồng có thể giải quyết thành xung đột rối loạn chức năng.",
    gv: "D06/T17 — đọc tóm tắt; tạp chí mức trung bình. Hàm ý là nhận định (quyết định GV 5). Lưu ý “có qua có lại” không đồng nghĩa với quà biếu — xem slide đạo đức.",
    ask: "“Bạn đã từng thấy một góp ý bị nêu sai chỗ chưa? Chuyện gì xảy ra?”",
    next: "Kiểm tra nhanh trước khi thực hành.",
  });

  // 15 vote
  s = slide("Giơ 1–3 ngón: bằng chứng này làm yếu trụ cột nào?");
  box(s, 0.6, 1.95, 7.2, 3.3);
  await ic(s, "FaExclamationTriangle", 0.9, 2.25, 1.0, ORA);
  T(s, "Nhà cung cấp AV đổi thiết bị sát ngày. Nova không báo An Phát, vì “sự kiện vẫn chạy”. Sau gala, chị Lan tình cờ biết chuyện.", 2.15, 2.15, 5.45, 2.9, { fontSize: 18, valign: "top" });
  T(s, "(giả định — thẻ 8)", 0.9, 4.8, 3.0, 0.4, { fontSize: 13, color: MU, italic: true });
  [["1", "Niềm tin", TEAL], ["2", "Cam kết", YEL], ["3", "Xung đột chức năng", PINK]].forEach(([k, t, c], i) => { num(s, k, 8.2, 2.0 + i * 1.05, 0.8, c, 20); box(s, 9.2, 2.0 + i * 1.05, 3.53, 0.8); T(s, t, 9.4, 2.0 + i * 1.05, 3.2, 0.8, { fontSize: 19, bold: true }); });
  notes(s, {
    say: "Tình huống giả định: nhà cung cấp âm thanh – ánh sáng đổi thiết bị sát ngày. Nova không báo An Phát, vì “sự kiện vẫn chạy”. Sau gala, chị Lan tình cờ biết chuyện. Bằng chứng này làm yếu trụ cột nào? Một ngón: niềm tin. Hai ngón: cam kết. Ba ngón: xung đột chức năng.",
    gv: "Đáp án chính: 1 — niềm tin (integrity/trung thực). Chấp nhận thêm 3 nếu SV lập luận được: bất đồng tiềm ẩn bị che giấu thay vì nêu ra.",
    ask: "Giơ 1–3 ngón.",
    next: "Đáp án.",
  });

  // 16 answer
  s = slide("Đáp án: niềm tin — vì Nova vi phạm sự trung thực, dù sự kiện không hỏng");
  box(s, 0.6, 1.95, 7.2, 3.6);
  T(s, bullets(["Morgan & Hunt: niềm tin = tin vào reliability và integrity", "Giấu thông tin = vi phạm integrity — kể cả khi kết quả vẫn ổn", "Che giấu thông tin cũng là dấu hiệu của xung đột rối loạn chức năng"]), 0.9, 2.1, 6.7, 3.3, { fontSize: 18, valign: "top", paraSpaceAfter: 10 });
  box(s, 8.2, 1.95, 4.53, 3.6, YEL);
  T(s, "Khách hàng tha thứ cho sự cố dễ hơn tha thứ cho việc bị giấu.", 8.45, 1.95, 4.05, 3.6, { fontSize: 21, bold: true, color: NAVY });
  notes(s, {
    say: "Đáp án chính: niềm tin. Theo Morgan và Hunt, niềm tin là tin vào độ tin cậy và sự chính trực. Giấu thông tin là vi phạm sự chính trực — kể cả khi sự kiện vẫn chạy tốt. Và slide bộ môn nói: che giấu thông tin cũng là dấu hiệu của xung đột rối loạn chức năng. Khách hàng tha thứ cho sự cố dễ hơn tha thứ cho việc bị giấu.",
    gv: "Câu cuối là nhận định của người soạn — nói như kinh nghiệm nghề, không như kết quả nghiên cứu.",
    next: "Hai hiểu lầm thường gặp.",
  });

  // 17 misconceptions
  s = slide("Hai hiểu lầm: “xung đột chức năng là ít xung đột” và “không phàn nàn là hài lòng”");
  const mis = [["“Xung đột chức năng = ít xung đột”", "Là bất đồng được giải quyết êm thấm nhờ có niềm tin"], ["“Khách hàng không phàn nàn = hài lòng”", "Có thể là thiếu niềm tin để nói thẳng — phải hỏi, phải đo"]];
  for (let i = 0; i < 2; i++) { const y = 2.0 + i * 2.15; box(s, 0.6, y, 5.6, 1.85); await ic(s, "FaTimes", 0.85, y + 0.5, 0.8, PINK); T(s, mis[i][0], 1.85, y, 4.2, 1.85, { fontSize: 18, bold: true }); arrow(s, 6.35, y + 0.65, 0.6, 0.55, YEL); box(s, 7.1, y, 5.63, 1.85, TEAL); T(s, mis[i][1], 7.35, y, 5.2, 1.85, { fontSize: 18, bold: true, color: NAVY }); }
  notes(s, {
    say: "Hai hiểu lầm. Một: xung đột chức năng là ít xung đột. Không — đó là bất đồng được giải quyết êm thấm nhờ có niềm tin. Hai: khách hàng không phàn nàn là hài lòng. Không — có thể là thiếu niềm tin để nói thẳng. Vì vậy phải hỏi, và phải đo.",
    gv: "W04 lecture notes §1.5.",
    next: "Thực hành 1: chẩn đoán quan hệ Nova – An Phát.",
  });

  // 18 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: chẩn đoán quan hệ Nova – An Phát", [["8’", "Xếp 9 thẻ bằng chứng vào Niềm tin · Cam kết · Xung đột chức năng; đánh dấu + (củng cố) hoặc – (làm yếu); thẻ ở hai cột thì ghi lý do", TEAL], ["7’", "Chấm mỗi trụ cột 1–5. Trụ cột nào yếu nhất? Vì sao — dẫn chữ trong định nghĩa", YEL], ["5’", "Viết một việc Nova làm trong 1 tháng tới để củng cố trụ cột yếu nhất", PINK]], "FaStethoscope", "Sản phẩm", "Bảng A3 chẩn đoán ba trụ cột — có bằng chứng cho từng điểm", "Chấm từ bằng chứng, không từ cảm giác. Mọi thẻ là giả định.");
  notes(s, {
    say: "Thực hành 1, 20 phút. Tám phút: xếp 9 thẻ bằng chứng vào ba cột — niềm tin, cam kết, xung đột chức năng; đánh dấu cộng nếu củng cố, trừ nếu làm yếu; một thẻ có thể ở hai cột, ghi lý do. Bảy phút: chấm mỗi trụ cột từ 1 đến 5; trụ cột nào yếu nhất, vì sao — dẫn chữ trong định nghĩa. Năm phút: viết một việc Nova làm trong một tháng tới để củng cố trụ cột yếu nhất. Chấm từ bằng chứng, không từ cảm giác.",
    gv: "Phiếu W04_activity_S3_chan_doan_quan_he.md (cắt thẻ trước). Mốc phút 30–50. Hỏi khi đi vòng: “Thẻ 4 (mời 2 agency khác chào giá) làm yếu trụ cột nào — hay chỉ là quy trình mua sắm?” Chiếu slide 5 trong lúc làm.",
    next: "Giải lao.",
  });

  // 19 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 50–58.", next: "Sau giải lao: đo bằng gì?" });

  // 20 question
  s = await L.question("Đo một thứ vô hình", "Nova chấm quan hệ 4/5. An Phát chấm bao nhiêu?", "FaBalanceScale", BLUE, "Đề cương 4.1: đo ba trụ cột của chất lượng quan hệ");
  notes(s, { say: "Sau giải lao. Giả sử Nova tự chấm quan hệ với An Phát 4 trên 5. An Phát sẽ chấm bao nhiêu? Ta không biết — trừ khi hỏi.", ask: "“Đoán xem: cao hơn, bằng, hay thấp hơn?”", next: "Nguyên tắc đo: hỏi cả hai phía." });

  // 21 two-way principle
  s = slide("Đo chất lượng quan hệ bằng câu hỏi hai chiều: hỏi cả agency và khách hàng");
  const tw = [["FaExchangeAlt", "Hỏi cả hai phía", "Nova tự chấm và An Phát chấm cùng một bộ câu", TEAL], ["FaRuler", "Thang 1–5", "1 = hoàn toàn không đồng ý · 5 = hoàn toàn đồng ý", YEL], ["FaSearchPlus", "Xem khoảng cách", "Khoảng cách giữa hai phía là tín hiệu cần nói chuyện", PINK]];
  for (let i = 0; i < 3; i++) { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 4.0); await ic(s, tw[i][0], x + 1.4, 2.15, 1.1, tw[i][3]); T(s, tw[i][1], x + 0.2, 3.4, 3.5, 0.7, { align: "center", bold: true, fontSize: 20, color: tw[i][3] }); T(s, tw[i][2], x + 0.25, 4.15, 3.4, 1.7, { align: "center", fontSize: 16, valign: "top" }); }
  src(s, "Công cụ học tập của môn (quyết định GV 3, 28/9/2026); Marcos et al. (2018, tr. 100) cũng khuyên khảo sát “ideally with people from both the supplier and the buyer”.", 6.25);
  notes(s, {
    say: "Nguyên tắc đo. Một: hỏi cả hai phía — Nova tự chấm và An Phát chấm cùng một bộ câu hỏi. Hai: thang 1 đến 5 — 1 là hoàn toàn không đồng ý, 5 là hoàn toàn đồng ý. Ba: xem khoảng cách — khoảng cách giữa hai phía là tín hiệu cần nói chuyện. Giáo trình Marcos và cộng sự cũng khuyên khảo sát, lý tưởng là với người của cả hai phía.",
    gv: "Bộ câu hỏi là công cụ của môn, không phải thang đo đã kiểm định (quyết định GV 3). Marcos et al. (2018, tr. 100): “an option is to conduct a survey, ideally with people from both the supplier and the buyer” — câu này nói về khảo sát các động lực của chất lượng quan hệ (slide 24).",
    next: "Vì sao khoảng cách quan trọng hơn điểm trung bình.",
  });

  // 22 gap example
  s = slide("Khoảng cách giữa hai phía quan trọng hơn điểm trung bình");
  const gp = [["Niềm tin", 4.3, 4.0], ["Cam kết", 4.5, 3.2], ["Xung đột chức năng", 4.0, 2.6]];
  T(s, "Nova tự chấm", 5.0, 1.9, 2.4, 0.45, { fontSize: 15, color: TEAL, bold: true }); T(s, "An Phát chấm", 7.6, 1.9, 2.4, 0.45, { fontSize: 15, color: PINK, bold: true }); T(s, "Khoảng cách", 10.2, 1.9, 2.4, 0.45, { fontSize: 15, color: YEL, bold: true });
  gp.forEach(([a, n, k], i) => { const y = 2.45 + i * 1.15; box(s, 0.6, y, 12.13, 0.95); T(s, a, 0.85, y, 4.0, 0.95, { fontSize: 19, bold: true }); T(s, n.toFixed(1).replace(".", ","), 5.0, y, 2.4, 0.95, { fontSize: 22, bold: true, color: TEAL }); T(s, k.toFixed(1).replace(".", ","), 7.6, y, 2.4, 0.95, { fontSize: 22, bold: true, color: PINK }); const g = (n - k).toFixed(1).replace(".", ","); T(s, g, 10.2, y, 2.4, 0.95, { fontSize: 22, bold: true, color: (n - k) >= 1 ? YEL : TX }); });
  box(s, 0.6, 5.95, 12.13, 0.75, YEL);
  T(s, "Khoảng cách 1,4 ở xung đột chức năng: An Phát không thấy bất đồng được nói ra và giải quyết.", 0.8, 5.95, 11.7, 0.75, { fontSize: 17, bold: true, color: NAVY });
  T(s, "(số liệu giả định)", 10.9, 6.75, 1.83, 0.35, { fontSize: 12, color: MU, italic: true, align: "right" });
  notes(s, {
    say: "Ví dụ giả định. Niềm tin: Nova tự chấm 4,3; An Phát chấm 4,0 — gần nhau. Cam kết: 4,5 và 3,2 — khoảng cách 1,3. Xung đột chức năng: 4,0 và 2,6 — khoảng cách 1,4. Điểm trung bình của An Phát vẫn trên 3 — nhìn qua thì ổn. Nhưng khoảng cách nói điều khác: An Phát không thấy bất đồng được nói ra và giải quyết, và không chắc Nova cam kết như Nova nghĩ.",
    gv: "Số liệu giả định, khớp W04 lecture notes §2.1. Tính kiểm: 4,3−4,0=0,3; 4,5−3,2=1,3; 4,0−2,6=1,4. Ngưỡng tô vàng (≥1,0) là quy ước minh họa.",
    next: "Bộ câu hỏi cụ thể.",
  });

  // 23 nine questions
  s = slide("Chín câu hỏi cho ba trụ cột — công cụ học tập của môn");
  const nq = [["Niềm tin", TEAL, ["T1. Bên kia làm đúng những gì đã cam kết.", "T2. Khi có vấn đề, bên kia nói thật.", "T3. Tôi có thể dựa vào bên kia mà không cần kiểm tra lại mọi thứ."]], ["Cam kết", YEL, ["C1. Quan hệ này đáng để chúng tôi nỗ lực tối đa giữ gìn.", "C2. Chúng tôi muốn tiếp tục làm việc cùng nhau nhiều năm.", "C3. Chúng tôi sẵn sàng dành thời gian, nguồn lực riêng cho quan hệ này."]], ["Xung đột chức năng", PINK, ["F1. Khi bất đồng, hai bên nói thẳng với nhau.", "F2. Bất đồng thường được giải quyết êm thấm.", "F3. Sau mỗi lần bất đồng, cách làm việc tốt hơn."]]];
  nq.forEach(([h, c, qs], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 0.6, c); T(s, h, x + 0.2, 1.95, 3.5, 0.6, { bold: true, fontSize: 17, color: NAVY }); box(s, x, 2.65, 3.9, 3.6); T(s, qs.map((q, j) => ({ text: q, options: { breakLine: j < 2 } })), x + 0.2, 2.75, 3.5, 3.4, { fontSize: 15, valign: "top", paraSpaceAfter: 10 }); });
  src(s, "Dựng từ định nghĩa Morgan & Hunt (1994) và Marcos et al. (2018); không phải thang đo đã kiểm định. Thang 1–5.", 6.45);
  notes(s, {
    say: "Chín câu hỏi — ba câu cho mỗi trụ cột. Niềm tin: bên kia làm đúng những gì đã cam kết; khi có vấn đề, bên kia nói thật; tôi có thể dựa vào bên kia mà không cần kiểm tra lại mọi thứ. Cam kết: quan hệ này đáng để chúng tôi nỗ lực tối đa giữ gìn; chúng tôi muốn tiếp tục làm việc cùng nhau nhiều năm; chúng tôi sẵn sàng dành thời gian, nguồn lực riêng cho quan hệ này. Xung đột chức năng: khi bất đồng, hai bên nói thẳng với nhau; bất đồng thường được giải quyết êm thấm; sau mỗi lần bất đồng, cách làm việc tốt hơn. Đây là công cụ học tập của môn — không phải thang đo đã kiểm định.",
    gv: "W04 lecture notes §2.1 (quyết định GV 3). Ánh xạ: T1 ↔ reliability, T2 ↔ integrity/trung thực, T3 ↔ “willingness to rely”; C1 ↔ “maximum efforts”, C3 ↔ “idiosyncratic investment”; F2 ↔ “resolved amicably”. Dùng lại ở Thực hành 2 và Buổi 8 (đánh giá chung).",
    next: "Đo trụ cột là đo kết quả. Còn các động lực tạo ra chất lượng quan hệ?",
  });

  // 24 drivers
  s = slide("Bốn động lực nâng chất lượng quan hệ — và giáo trình có sẵn bộ câu khảo sát cho chúng");
  const dr = [["Giá trị và mục tiêu chung", "tăng khả năng cam kết", TEAL], ["Chia sẻ thông tin và giao tiếp", "xây niềm tin lâu dài", YEL], ["Hợp tác và có đi có lại", "trao đổi công bằng nguồn lực", ORA], ["Gắn kết cá nhân, quan hệ xã hội", "tăng sự trung thành", PINK]];
  dr.forEach(([a, b, c], i) => { const x = 0.6 + (i % 2) * 3.55, y = 1.95 + Math.floor(i / 2) * 2.15; box(s, x, y, 3.35, 1.95, c); T(s, a, x + 0.2, y + 0.15, 2.95, 1.0, { bold: true, fontSize: 17, color: NAVY, valign: "top" }); T(s, "→ " + b, x + 0.2, y + 1.15, 2.95, 0.65, { fontSize: 14, color: NAVY }); });
  box(s, 7.85, 1.95, 4.88, 4.1);
  T(s, "Ví dụ câu khảo sát (thang 1–7)", 8.1, 2.05, 4.4, 0.55, { bold: true, fontSize: 16, color: YEL });
  T(s, bullets(["“We frequently exchange relevant information with this supplier/buyer.”", "“We always reciprocate to this supplier/buyer when they do something valuable for us.”", "“We get along well with people from this supplier/buyer.”"]), 8.1, 2.65, 4.4, 3.3, { fontSize: 14, italic: true, valign: "top", paraSpaceAfter: 8 });
  src(s, "Nguồn: Marcos et al. (2018, Hình 4.3, tr. 99; bộ câu khảo sát tr. 100–101); Trần Nguyễn Huỳnh Như (2023), Chương 3, mục 3.2.", 6.35);
  notes(s, {
    say: "Ba trụ cột là kết quả. Cái gì tạo ra chúng? Giáo trình nêu bốn động lực. Một: giá trị và mục tiêu chung — tăng khả năng cam kết. Hai: chia sẻ thông tin và giao tiếp — xây niềm tin lâu dài; sẵn lòng chia sẻ thông tin là tín hiệu của niềm tin vào thiện chí. Ba: hợp tác và có đi có lại — trao đổi công bằng. Bốn: gắn kết cá nhân và quan hệ xã hội — tăng sự trung thành, giữ quan hệ ngay cả khi có lúc khách chưa hài lòng. Giáo trình có sẵn bộ 12 câu khảo sát, thang 1 đến 7, mỗi động lực ba câu — ví dụ ở bên phải.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 4.3 “Drivers of relationship quality” (tr. 99), giải thích tr. 98–100, và “Survey on drivers of relationship quality” (tr. 100–101, 12 câu, thang 1–7). Slide gốc Chương 3 mục 3.2 “Đặc điểm của mối quan hệ thành công” dùng bốn ý này. Một KAM consultant được dẫn: “it’s not about the plan, it’s about the planning process and talking to people” (tr. 100). Nếu GV muốn, có thể phát bộ 12 câu này kèm bộ 9 câu của môn.",
    next: "Khi đã thấy khoảng cách — làm sao nói chuyện để bất đồng thành xung đột chức năng?",
  });

  // 25 five steps
  s = slide("Năm bước biến một bất đồng thành xung đột chức năng");
  const st5 = [["Nêu sớm", "trước khi thành bức xúc", TEAL], ["Nêu riêng, đúng người", "giữ thể diện", YEL], ["Nói về vấn đề", "không về con người", ORA], ["Cùng giải quyết", "joint problem solving", PINK], ["Ghi lại, theo dõi", "việc đã thống nhất", BLUE]];
  st5.forEach(([a, b, c], i) => { const x = 0.6 + i * 2.47; box(s, x, 2.0, 2.25, 3.6, c); num(s, i + 1, x + 0.7, 2.2, 0.85, NAVY === c ? TX : TX, 22); T(s, a, x + 0.12, 3.25, 2.0, 1.1, { align: "center", bold: true, fontSize: 18, color: NAVY }); T(s, b, x + 0.12, 4.35, 2.0, 1.0, { align: "center", fontSize: 14, color: NAVY, valign: "top" }); });
  src(s, "Nhận định của môn, dựng từ Morgan & Hunt (1994), Mohr & Spekman (1994) và Pham & Pham (2025). Chiếu suốt Thực hành 2.", 6.0);
  notes(s, {
    say: "Năm bước. Một: nêu sớm — trước khi thành bức xúc. Hai: nêu riêng, đúng người — giữ thể diện. Ba: nói về vấn đề, không về con người. Bốn: cùng giải quyết — joint problem solving. Năm: ghi lại và theo dõi việc đã thống nhất. Slide này sẽ chiếu suốt Thực hành 2.",
    gv: "W04 lecture notes §2.2 — nhận định đã duyệt (Y03 Buổi 12: Mohr & Spekman, 1994 — joint problem solving). Liên hệ Buổi 3: đây là cách khép “disconfirmation” — kỳ vọng không được đáp ứng thì nói ra và sửa.",
    next: "Khi bất đồng không được giải quyết, chuyện gì xảy ra?",
  });

  // 26 case
  s = slide("Khi bất đồng không được giải quyết, cả mạng lưới cùng trả giá");
  box(s, 0.6, 1.95, 7.6, 4.3);
  await ic(s, "FaMicrophoneSlash", 0.9, 2.2, 1.0, PINK);
  T(s, "“Về đây bốn cánh chim trời” · Hà Nội, 28/12/2025", 2.1, 2.2, 5.9, 1.0, { bold: true, fontSize: 18, color: PINK });
  T(s, bullets(["Giám đốc âm nhạc thay mặt 40 nghệ sĩ quyết định không diễn — tranh chấp tài chính với nhà sản xuất", "Một số nghệ sĩ cho biết chưa nhận thanh toán, chưa có hợp đồng chính thức, được hẹn “tới hẹn lui”", "Theo báo chí: không có ký quỹ, bảo lãnh hay bảo hiểm hủy sự kiện"]), 0.9, 3.35, 7.0, 2.8, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  box(s, 8.5, 1.95, 4.23, 4.3, YEL);
  T(s, "Hỏi: tín hiệu cảnh báo nào đã xuất hiện trước? Ai lẽ ra phải nêu ra — và nêu với ai?", 8.75, 2.1, 3.75, 4.0, { fontSize: 19, bold: true, color: NAVY, valign: "top" });
  src(s, "Nguồn: Báo Văn hóa (3/1/2026); Nhân Dân (23/1/2026); Dân trí (31/12/2025). Chỉ nêu sự kiện đã đưa tin.", 6.45);
  notes(s, {
    say: "Một ví dụ ngược của xung đột chức năng. Đêm nhạc “Về đây bốn cánh chim trời”, Hà Nội, 28 tháng 12 năm 2025. Theo Báo Văn hóa: giám đốc âm nhạc thay mặt 40 nghệ sĩ quyết định không diễn, nguyên nhân là tranh chấp tài chính với nhà sản xuất. Một số nghệ sĩ cho biết chưa nhận thanh toán, chưa có hợp đồng chính thức, được hẹn tới hẹn lui. Theo Nhân Dân, luật sư nêu không có ký quỹ, bảo lãnh hay bảo hiểm hủy sự kiện. Bất đồng không được giải quyết, niềm tin mất, một bên rút — và địa điểm, kỹ thuật, khán giả đều chịu thiệt. Câu hỏi: tín hiệu cảnh báo nào đã xuất hiện trước? Ai lẽ ra phải nêu ra — và nêu với ai?",
    gv: "D07 = Y09 (Buổi 12), đã kiểm chứng chéo ba báo độc lập. Vụ việc đang được xử lý theo pháp luật (Nhân Dân: người đại diện đơn vị tổ chức bị khởi tố) — chỉ nêu sự kiện đã đưa tin, không quy lỗi cá nhân. Đây là quan hệ nhà sản xuất – nghệ sĩ, không phải agency – client: dùng như ví dụ tương tự.",
    ask: "“Tín hiệu nào? Ai nên nói, với ai?”",
    next: "Sang mục 4.2: từ giao dịch đến quan hệ đối tác.",
  });

  // 27 typology
  s = slide("Quan hệ người mua – nhà cung cấp có sáu kiểu, theo hai trục: phụ thuộc và mức độ “quan hệ”");
  const ty = [["Inviting buyer", "Người mua mời hợp tác", 0, 0, TEAL], ["Collaborative partnership", "Đối tác hợp tác", 1, 0, YEL], ["Inviting supplier", "Nhà cung cấp mời hợp tác", 2, 0, TEAL], ["Vulnerable supplier", "Nhà cung cấp yếu thế", 0, 1, PINK], ["Competitive interaction", "Tương tác cạnh tranh", 1, 1, ORA], ["Vulnerable buyer", "Người mua yếu thế", 2, 1, PINK]];
  ty.forEach(([a, b, cx, cy, c]) => { const x = 1.6 + cx * 3.75, y = 1.95 + cy * 1.95; box(s, x, y, 3.55, 1.75, c); T(s, a, x + 0.15, y + 0.15, 3.25, 0.75, { bold: true, fontSize: 17, color: NAVY, valign: "top" }); T(s, b, x + 0.15, y + 0.95, 3.25, 0.6, { fontSize: 15, color: NAVY }); });
  T(s, "Quan hệ ↑", 0.45, 2.3, 1.1, 0.9, { fontSize: 13, color: MU, align: "center" });
  T(s, "Giao dịch ↓", 0.45, 4.3, 1.1, 0.9, { fontSize: 13, color: MU, align: "center" });
  T(s, "Nhà cung cấp phụ thuộc", 1.6, 5.9, 3.55, 0.45, { fontSize: 13, color: MU, align: "center" });
  T(s, "Phụ thuộc lẫn nhau (cân bằng)", 5.35, 5.9, 3.55, 0.45, { fontSize: 13, color: MU, align: "center" });
  T(s, "Người mua phụ thuộc", 9.1, 5.9, 3.55, 0.45, { fontSize: 13, color: MU, align: "center" });
  src(s, "Nguồn: Marcos et al. (2018, Hình 4.1, tr. 94, dẫn Tangpong et al., 2015); Trần Nguyễn Huỳnh Như (2023), Chương 3, mục 3.1.1.", 6.45);
  notes(s, {
    say: "Đề cương mục 4.2. Giáo trình xếp quan hệ người mua – nhà cung cấp theo hai trục. Trục ngang: ai phụ thuộc ai — nhà cung cấp phụ thuộc, phụ thuộc lẫn nhau, hay người mua phụ thuộc. Trục dọc: giao dịch rời rạc hay trao đổi quan hệ. Ra sáu kiểu. Hàng dưới, giao dịch: nhà cung cấp yếu thế; tương tác cạnh tranh — hai bên cùng phụ thuộc nhưng giành phần hơn, thắng – thua; người mua yếu thế. Hàng trên, quan hệ: người mua mời hợp tác dù mạnh hơn; đối tác hợp tác — cùng phụ thuộc, cùng tìm thắng – thắng; nhà cung cấp mời hợp tác dù mạnh hơn. Slide bộ môn tóm lại: quan hệ cân bằng thì hợp tác, không cân bằng thì giao dịch.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 4.1 “A typology of buyer–supplier relationships” (tr. 94) và mô tả sáu kiểu (tr. 93–94). Slide gốc Chương 3 mục 3.1.1 (sơ đồ A–B, “Nguồn: Javier Marcos”) là bản rút gọn. Ví dụ cách đo quyền lực trong sách: mức tập trung doanh số của hai bên.",
    ask: "“Nova – An Phát đang ở ô nào? An Phát chiếm bao nhiêu phần doanh thu của Nova, và Nova chiếm bao nhiêu phần ngân sách sự kiện của An Phát?”",
    next: "Dùng sơ đồ này thế nào?",
  });

  // 28 two steps + direction
  s = slide("Biết mình đang ở ô nào, rồi cùng khách hàng chọn ô muốn đến");
  box(s, 0.6, 1.95, 6.0, 4.3);
  num(s, 1, 0.85, 2.15, 0.8, TEAL, 22);
  T(s, "Hiểu lợi ích và rủi ro của vị trí hiện tại; hành động để tận dụng lợi ích, giảm rủi ro", 1.85, 2.05, 4.55, 1.5, { fontSize: 16, valign: "top" });
  num(s, 2, 0.85, 3.85, 0.8, YEL, 22);
  T(s, "Đặt mục tiêu quan hệ sẽ ở đâu trong tương lai — kèm mốc thời gian và hành động; lý tưởng là hai bên cùng thống nhất", 1.85, 3.75, 4.55, 2.3, { fontSize: 16, valign: "top" });
  box(s, 6.85, 1.95, 5.88, 4.3);
  T(s, "Hướng đi thường gặp trong KAM", 7.1, 2.05, 5.4, 0.55, { bold: true, fontSize: 17, color: YEL });
  [["Yếu thế (vulnerable)", PINK], ["Mời hợp tác (inviting)", ORA], ["Đối tác hợp tác", TEAL]].forEach(([t, c], i) => { box(s, 7.1, 2.75 + i * 1.12, 5.4, 0.85, c); T(s, t, 7.3, 2.75 + i * 1.12, 5.0, 0.85, { fontSize: 18, bold: true, color: NAVY }); if (i < 2) T(s, "↓", 9.5, 3.55 + i * 1.12, 0.6, 0.35, { fontSize: 14, color: MU, align: "center" }); });
  src(s, "Nguồn: Marcos et al. (2018, tr. 94–95, 102 và Hình 4.4).", 6.45);
  notes(s, {
    say: "Giáo trình đề xuất hai bước. Bước một: hiểu lợi ích và rủi ro của vị trí hiện tại. Ví dụ nhà cung cấp yếu thế có thể giảm phụ thuộc bằng cách mở rộng danh mục khách hàng, tăng sự phụ thuộc của khách bằng giải pháp riêng, hoặc thuyết phục khách đi theo hướng quan hệ. Bước hai: đặt mục tiêu quan hệ sẽ ở đâu, kèm mốc thời gian và hành động — lý tưởng là hai bên cùng thống nhất. Trong KAM, hướng đi thường gặp là từ yếu thế, sang mời hợp tác, đến đối tác hợp tác.",
    gv: "Đã đối chiếu Marcos et al. (2018): “Using this typology with your key accounts” — Step 1, Step 2 (tr. 94–95); Hình 4.4 “Developing relationships with key accounts” (tr. 102): “a ‘vulnerable’ type of relationship will evolve into an ‘inviting’ type, towards a ‘collaborative partnership’”. Câu hỏi đạo đức trong sách (tr. 95): bên mạnh có nên dùng quyền lực để thu lợi một chiều? — dùng cho slide 34.",
    next: "Học thuật gọi đây là đi từ trao đổi rời rạc sang trao đổi quan hệ.",
  });

  // 29 discrete vs relational + stages
  s = slide("Đi từ trao đổi rời rạc sang trao đổi quan hệ mất thời gian — và đi qua nhiều giai đoạn");
  box(s, 0.6, 1.95, 5.9, 4.3);
  T(s, "Dwyer, Schurr & Oh (1987)", 0.85, 2.05, 5.4, 0.55, { bold: true, fontSize: 17, color: TEAL });
  T(s, "Phần lớn nghiên cứu và chiến lược coi mua – bán là sự kiện rời rạc, không phải quan hệ liên tục. Bài đề xuất một khung phát triển quan hệ người mua – người bán.", 0.85, 2.65, 5.4, 2.0, { fontSize: 16, valign: "top" });
  T(s, "“…develop over time from a state characterized by arm’s-length relationships to relationships based on adaptation and trust.”", 0.85, 4.6, 5.4, 1.5, { fontSize: 15, italic: true, color: YEL, valign: "top" });
  box(s, 6.83, 1.95, 5.9, 4.3);
  T(s, "Các giai đoạn quan hệ key account", 7.08, 2.05, 5.4, 0.55, { bold: true, fontSize: 17, color: TEAL });
  ["Khám phá (exploratory)", "Cơ bản (basic)", "Hợp tác (co-operative)", "Phụ thuộc lẫn nhau (interdependent)", "Tích hợp (integrated)"].forEach((t, i) => { box(s, 7.08 + i * 0.25, 2.7 + i * 0.68, 4.4, 0.58, [MU, TEAL, YEL, ORA, PINK][i]); T(s, t, 7.23 + i * 0.25, 2.7 + i * 0.68, 4.1, 0.58, { fontSize: 15, bold: true, color: NAVY }); });
  src(s, "Nguồn: Dwyer et al. (1987); trích dẫn tr. 95 và các giai đoạn tr. 101 trong Marcos et al. (2018, dẫn Andersson et al., 2002; McDonald & Rogers, 2017).", 6.45);
  notes(s, {
    say: "Dwyer, Schurr và Oh, 1987: phần lớn nghiên cứu và chiến lược coi mua – bán là sự kiện rời rạc, không phải quan hệ liên tục; họ đề xuất khung phát triển quan hệ. Giáo trình dẫn một nhận xét: quan hệ người mua – nhà cung cấp phát triển theo thời gian, từ quan hệ giữ khoảng cách sang quan hệ dựa trên thích ứng và niềm tin. Với key account, giáo trình nêu: quan hệ thường đi từ giai đoạn khám phá sang cơ bản, hợp tác, phụ thuộc lẫn nhau và tích hợp. Quá trình này phức tạp và mất thời gian, vì nó dựa trên quan hệ giữa người với người.",
    gv: "D04 Dwyer et al. (1987) — đọc tóm tắt; KHÔNG nêu tên giai đoạn của Dwyer (quyết định GV 4). Các giai đoạn trên slide là của McDonald & Rogers (2017), theo Marcos et al. (2018, tr. 101): “evolve from an exploratory phase into more collaborative and extensive stages: basic, co-operative, interdependent, and integrated” — nguồn thứ cấp đáng tin (giáo trình môn). Trích dẫn “arm’s-length… adaptation and trust” từ Andersson, Forsgren & Holm (2002, tr. 980), theo Marcos et al. (2018, tr. 95). Chi tiết các giai đoạn để Buổi 8. [NEEDS PROFESSOR INPUT: đồng ý nêu tên năm giai đoạn này ở Buổi 4, hay để dành Buổi 8?]",
    next: "Với agency sự kiện, đi từ giao dịch sang đối tác thay đổi những gì?",
  });

  // 30 agency changes
  s = slide("Với agency sự kiện, đi từ giao dịch sang đối tác thay đổi năm điều");
  const ch = [["Đấu thầu từng sự kiện", "Hợp đồng khung nhiều năm"], ["Brief → đề xuất → làm → xong", "Cùng lập kế hoạch năm, đánh giá chung"], ["Một đầu mối", "Nhiều đầu mối, nhiều cấp (Buổi 8)"], ["Thông tin tối thiểu", "Chia sẻ mục tiêu, dữ liệu"], ["Đo bằng “sự kiện suôn sẻ”", "Đo bằng chất lượng quan hệ + kết quả kinh doanh"]];
  T(s, "Giao dịch", 0.6, 1.85, 5.6, 0.5, { fontSize: 17, bold: true, color: PINK }); T(s, "Đối tác", 7.1, 1.85, 5.63, 0.5, { fontSize: 17, bold: true, color: TEAL });
  ch.forEach(([a, b], i) => { const y = 2.4 + i * 0.82; box(s, 0.6, y, 5.6, 0.7); T(s, a, 0.8, y, 5.2, 0.7, { fontSize: 16 }); arrow(s, 6.4, y + 0.17, 0.5, 0.36, YEL); box(s, 7.1, y, 5.63, 0.7, TEAL); T(s, b, 7.3, y, 5.25, 0.7, { fontSize: 16, bold: true, color: NAVY }); });
  src(s, "Nhận định của môn (W04 lecture notes §3.2). Chiếu ở bước 3 của Thực hành 2.", 6.6);
  notes(s, {
    say: "Với agency sự kiện, đi từ giao dịch sang đối tác thay đổi năm điều. Từ đấu thầu từng sự kiện sang hợp đồng khung nhiều năm. Từ quy trình brief – đề xuất – làm – xong sang cùng lập kế hoạch năm và đánh giá chung. Từ một đầu mối sang nhiều đầu mối, nhiều cấp. Từ chia sẻ thông tin tối thiểu sang chia sẻ mục tiêu, dữ liệu. Và từ đo bằng “sự kiện suôn sẻ” sang đo bằng chất lượng quan hệ cộng kết quả kinh doanh.",
    gv: "Nhận định đã duyệt. Thẻ 6 (Nova chưa từng được mời họp kế hoạch năm) và thẻ 9 (hợp đồng khung 2 năm — An Phát “để xem”) của Thực hành 1 nằm đúng ở bảng này.",
    next: "Một ví dụ thật: bốn năm từ một lần thua thầu.",
  });

  // 31 SAF case
  s = slide("Một công ty dịch vụ chuyên nghiệp đi từ thua thầu đến “người bạn phản biện” trong bốn năm");
  const sf = [["2013", "Thua thầu — nhưng mang đến góc nhìn khác, hiểu văn hóa và cách giao tiếp của khách, tạo uy tín với ban lãnh đạo", TEAL], ["Sau đó", "Quan hệ ở nhiều cấp: lãnh đạo – lãnh đạo, đội account – quản lý cấp giữa; thông tin hai chiều nhất quán", YEL], ["Hiện tại", "Mang cả chuyên môn lẫn hiểu biết thị trường; mở rộng dịch vụ; “thoải mái mang ý tưởng đến để kích thích suy nghĩ của họ”", PINK]];
  sf.forEach(([a, b, c], i) => { const y = 1.95 + i * 1.4; box(s, 0.6, y, 1.9, 1.2, c); T(s, a, 0.6, y, 1.9, 1.2, { align: "center", bold: true, fontSize: 20, color: NAVY }); box(s, 2.7, y, 10.03, 1.2); T(s, b, 2.9, y, 9.65, 1.2, { fontSize: 16 }); });
  box(s, 0.6, 6.15, 12.13, 0.6, YEL);
  T(s, "Thách thức còn lại: tiếp tục có ích với nhau — mang ý tưởng mới, đón trước thách thức của khách.", 0.8, 6.15, 11.7, 0.6, { fontSize: 15, bold: true, color: NAVY });
  notes(s, {
    say: "Giáo trình kể một ca thật — ẩn tên. Một công ty tư vấn, kiểm toán, thuế — gọi là SAF — với một tập đoàn xây dựng. Năm 2013, SAF được mời dự thầu và thua. Nhưng trong quá trình đó, SAF mang đến một góc nhìn khác, hiểu văn hóa và cách khách muốn được giao tiếp, và tạo uy tín với ban lãnh đạo. Sau đó, quan hệ được vun ở nhiều cấp: lãnh đạo với lãnh đạo, đội account với quản lý cấp giữa — thông tin hai chiều nhất quán. Bốn năm sau, SAF mang cả chuyên môn lẫn hiểu biết thị trường, mở rộng dịch vụ, và như người quản lý account nói: thoải mái mang ý tưởng đến để kích thích suy nghĩ của khách — một “critical friend”, người bạn biết phản biện. Thách thức còn lại: tiếp tục có ích với nhau.",
    gv: "Đã đối chiếu Marcos et al. (2018), “Case study and interview: Developing a successful customer relationship” (tr. 113–114). Song song với Nova – An Phát (cũng bốn năm). “Critical friend” chính là xung đột chức năng ở mức cao: dám phản biện vì có niềm tin.",
    ask: "“Sau bốn năm, Nova đã ‘thoải mái mang ý tưởng đến’ An Phát chưa?”",
    next: "Bằng chứng từ Việt Nam: thời gian quan hệ tự nó tạo giá trị.",
  });

  // 32 McMillan & Woodruff
  s = slide("Ở Việt Nam, thời gian quan hệ tự nó tạo ra giá trị kinh tế");
  box(s, 0.6, 1.95, 7.3, 4.3);
  await ic(s, "FaHourglassHalf", 0.9, 2.2, 1.0, YEL);
  T(s, "McMillan & Woodruff (1999)", 2.1, 2.2, 5.6, 1.0, { bold: true, fontSize: 19, color: YEL });
  T(s, "“A longer duration of trading relationship is associated with larger credit, as is prior information gathering.”", 0.9, 3.4, 6.7, 1.6, { fontSize: 18, italic: true, valign: "top" });
  T(s, "Khảo sát doanh nghiệp tư nhân Việt Nam thập niên 1990 — khi khó tìm đối tác và khó cưỡng chế hợp đồng bằng pháp luật.", 0.9, 5.0, 6.7, 1.1, { fontSize: 15, color: MU, valign: "top" });
  box(s, 8.2, 1.95, 4.53, 4.3, TEAL);
  T(s, "Quan hệ càng lâu → bên kia cho “tín dụng” càng lớn: trả chậm, ứng trước, tin mà không cần kiểm tra lại.", 8.45, 1.95, 4.05, 4.3, { fontSize: 19, bold: true, color: NAVY });
  src(s, "Nguồn: McMillan & Woodruff (1999), Quarterly Journal of Economics. Bằng chứng lịch sử — bối cảnh pháp lý nay đã khác.", 6.45);
  notes(s, {
    say: "McMillan và Woodruff, 1999, khảo sát doanh nghiệp tư nhân Việt Nam thập niên 1990 — lúc khó tìm đối tác và khó cưỡng chế hợp đồng bằng pháp luật. Phát hiện: quan hệ giao dịch càng lâu thì tín dụng thương mại cho khách càng lớn; tìm hiểu kỹ trước khi giao dịch cũng vậy. Nghĩa là: thời gian và độ sâu quan hệ tự nó có giá trị kinh tế. Đây là bằng chứng lịch sử — dùng để hiểu gốc rễ, không phải mô tả hiện tại.",
    gv: "D06/T18 — đọc tóm tắt; tạp chí hàng đầu. Nói rõ là bằng chứng thập niên 1990. Nối Buổi 6: “tín dụng” lại có chi phí — trả chậm là cost-to-serve.",
    next: "Ba lỗi khi quản trị quan hệ.",
  });

  // 33 errors
  s = slide("Ba lỗi khi quản trị chất lượng quan hệ");
  const er = ["Chỉ hỏi người mình gặp hằng ngày, rồi kết luận quan hệ tốt", "Giấu sự cố nhỏ để “giữ hình ảnh” — mất niềm tin lớn", "Gọi là key account nhưng không đầu tư gì riêng"];
  for (let i = 0; i < 3; i++) { const y = 2.0 + i * 1.25; box(s, 0.6, y, 7.6, 1.05); await ic(s, "FaTimes", 0.8, y + 0.2, 0.65, PINK); T(s, er[i], 1.65, y, 6.45, 1.05, { fontSize: 18 }); }
  box(s, 8.5, 2.0, 4.23, 3.55, YEL);
  T(s, "Đo quan hệ với cả DMU, không chỉ với chị Hạnh.", 8.75, 2.0, 3.75, 3.55, { fontSize: 22, bold: true, color: NAVY });
  notes(s, {
    say: "Ba lỗi. Một: chỉ hỏi người mình gặp hằng ngày — chị Hạnh — rồi kết luận quan hệ tốt; trong khi chị Lan, anh Khoa, ông Tuấn có thể chấm khác. Hai: giấu sự cố nhỏ để giữ hình ảnh — và mất niềm tin lớn. Ba: gọi là key account nhưng không đầu tư gì riêng — giáo trình gọi đó là hiểu sai KAM. Đo quan hệ với cả nhóm ra quyết định, không chỉ một người.",
    gv: "Lỗi 1 nối Buổi 3 (DMU) và Buổi 8. Lỗi 3: Marcos et al. (2018, tr. 98).",
    next: "Một lưu ý đạo đức.",
  });

  // 34 ethics
  s = slide("Quan hệ tốt dựa trên minh bạch và công bằng — không dựa trên quyền lực hay quà cáp");
  box(s, 0.6, 1.95, 6.0, 3.6);
  await ic(s, "FaCheck", 0.85, 2.2, 0.85, TEAL);
  T(s, "Nên", 1.9, 2.2, 4.5, 0.85, { bold: true, fontSize: 20, color: TEAL });
  T(s, bullets(["Báo sự cố sớm, kèm phương án", "Chia sẻ lợi ích – chi phí công bằng", "Tôn trọng quy định nội bộ của khách về quà tặng, tiếp khách"]), 0.9, 3.2, 5.5, 2.2, { fontSize: 17, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.85, 1.95, 5.88, 3.6);
  await ic(s, "FaTimes", 7.1, 2.2, 0.85, PINK);
  T(s, "Không", 8.15, 2.2, 4.4, 0.85, { bold: true, fontSize: 20, color: PINK });
  T(s, bullets(["Dùng thế mạnh để ép bên kia thiệt một chiều", "Đổi “có qua có lại” thành quà cáp để được chọn", "Hứa riêng với một người điều công ty không làm được"]), 7.15, 3.2, 5.4, 2.2, { fontSize: 17, valign: "top", paraSpaceAfter: 6 });
  T(s, "Giáo trình: bên mạnh hơn nên dùng quyền lực để thu lợi một chiều — hay chọn hợp tác?", 0.6, 5.85, 12.13, 0.6, { fontSize: 18, bold: true, color: YEL });
  notes(s, {
    say: "Quan hệ tốt dựa trên minh bạch và công bằng. Nên: báo sự cố sớm, kèm phương án; chia sẻ lợi ích và chi phí công bằng; tôn trọng quy định nội bộ của khách về quà tặng và tiếp khách. Không: dùng thế mạnh để ép bên kia thiệt một chiều; biến “có qua có lại” thành quà cáp để được chọn; hứa riêng với một người điều công ty không làm được. Giáo trình đặt câu hỏi: khi một bên mạnh hơn, có nên dùng quyền lực để thu lợi một chiều — hay chọn hợp tác, dù điều đó đưa quan hệ về thế phụ thuộc lẫn nhau?",
    gv: "Nối CLO8. Câu hỏi quyền lực: Marcos et al. (2018, tr. 95). Không nêu quy định cụ thể của ngân hàng về quà tặng — [NEEDS PROFESSOR INPUT nếu muốn dẫn quy định pháp luật hiện hành về phòng chống tham nhũng / quà tặng; kiểm tra văn bản trước khi đưa lên slide]. Slide là nguyên tắc nghề nghiệp, không phải tư vấn pháp lý.",
    next: "Thực hành 2: cuộc trò chuyện sau gala.",
  });

  // 35 practice 2
  s = await L.practice("Thực hành 2 · 30 phút: cuộc trò chuyện sau gala", [["3’", "Đọc tình huống: livestream chậm 15 phút lần thứ hai; chị Hạnh chưa nói gì. Phát thẻ vai (thẻ chị Hạnh úp)", TEAL], ["10’", "Chuẩn bị: đoán điểm F1–F3 của hai phía và khoảng cách; câu mở đầu của chị Thảo; 2 phương án cho livestream", YEL], ["10’", "Đóng vai bộ ba: chị Thảo (Nova) – chị Hạnh – người quan sát chấm theo 5 bước", PINK], ["7’", "Cả nhóm: lộ trình 3 bước từ giao dịch sang đối tác — làm gì · với ai · dấu hiệu thành công", BLUE]], "FaComments", "Sản phẩm", "Ghi chú người quan sát + lộ trình 3 bước trên A3", "Không đổ lỗi cho nhà cung cấp: trong mắt An Phát, lỗi là của Nova.", YEL);
  notes(s, {
    say: "Thực hành 2, 30 phút. Ba phút: đọc tình huống — tuần sau gala, Nova nghe gián tiếp rằng chị Lan không hài lòng vì livestream chậm 15 phút, lần thứ hai liên tiếp; chị Hạnh chưa nói gì. Mười phút chuẩn bị: đoán chị Hạnh và Nova chấm ba câu F1 đến F3 bao nhiêu, khoảng cách bao nhiêu; viết câu mở đầu của chị Thảo, KAMer của Nova; và hai phương án cho livestream. Mười phút đóng vai theo bộ ba: chị Thảo, chị Hạnh, và người quan sát chấm theo năm bước. Bảy phút: cả nhóm viết lộ trình ba bước để quan hệ đi từ giao dịch sang đối tác — làm gì, với ai bên An Phát, dấu hiệu thành công. Nhớ: không đổ lỗi cho nhà cung cấp — trong mắt An Phát, lỗi là của Nova.",
    gv: "Phiếu W04_activity_S6_cuoc_tro_chuyen_sau_gala.md. Mốc phút 93–123. Chiếu slide 25 (năm bước) và slide 30 (bảng giao dịch → đối tác). Nếu lộ trình chỉ là “chăm sóc tốt hơn”: yêu cầu bước cụ thể (hợp đồng khung, họp đánh giá chung, gặp ông Tuấn).",
    next: "Tổng hợp.",
  });

  // 36 summary
  s = slide("Ba ý của Buổi 4 — và phần B của kế hoạch");
  const sm = [["4.1", "Ba trụ cột: niềm tin (năng lực + thiện chí), cam kết (muốn giữ + đầu tư riêng), xung đột chức năng (bất đồng giải quyết êm thấm — kết quả của niềm tin)", TEAL], ["Đo", "Hỏi cả hai phía, xem khoảng cách; bất đồng nêu sớm, riêng, cùng giải quyết", YEL], ["4.2", "Sáu kiểu quan hệ; hướng đi: yếu thế → mời hợp tác → đối tác hợp tác; hợp đồng khung, kế hoạch chung, nhiều đầu mối", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.25; box(s, 0.6, y, 1.3, 1.05, c); T(s, k, 0.6, y, 1.3, 1.05, { align: "center", bold: true, color: NAVY, fontSize: 22 }); box(s, 2.1, y, 10.63, 1.05); T(s, t, 2.35, y, 10.2, 1.05, { fontSize: 16 }); });
  box(s, 0.6, 5.85, 12.13, 0.8, BLUE);
  T(s, "Kế hoạch cuối kỳ: đo nhanh ba trụ cột với khách hàng dự án cũ (có bằng chứng) — nền cho phần B. Value Opportunities.", 0.85, 5.85, 11.7, 0.8, { fontSize: 16, bold: true, color: NAVY });
  notes(s, {
    say: "Ba ý của Buổi 4. Mục 4.1: ba trụ cột — niềm tin gồm năng lực và thiện chí; cam kết là muốn giữ quan hệ và đầu tư riêng; xung đột chức năng là bất đồng được giải quyết êm thấm, và là kết quả của niềm tin. Đo: hỏi cả hai phía, xem khoảng cách; bất đồng nêu sớm, nêu riêng, cùng giải quyết. Mục 4.2: sáu kiểu quan hệ; hướng đi từ yếu thế, qua mời hợp tác, đến đối tác hợp tác — bằng hợp đồng khung, kế hoạch chung, nhiều đầu mối. Với kế hoạch cuối kỳ: đo nhanh ba trụ cột với khách hàng dự án cũ, có bằng chứng — nền cho phần B.",
    next: "Ba câu kiểm tra nhanh.",
  });

  // 37 quick check
  s = L.quickCheck(["Vì sao xung đột chức năng không có nghĩa là “ít xung đột”?", "Hai thành phần của niềm tin theo giáo trình là gì? Cho mỗi thành phần một ví dụ ở agency.", "Vì sao khoảng cách giữa điểm của agency và khách hàng quan trọng hơn điểm trung bình?"]);
  notes(s, { say: "Ba câu kiểm tra nhanh. Một: vì sao xung đột chức năng không có nghĩa là ít xung đột? Hai: hai thành phần của niềm tin theo giáo trình là gì — mỗi thành phần một ví dụ ở agency. Ba: vì sao khoảng cách giữa điểm của agency và của khách hàng quan trọng hơn điểm trung bình?", gv: "Gợi ý: (1) là bất đồng được giải quyết êm thấm nhờ niềm tin; không bất đồng có thể là trì trệ; (2) niềm tin về chuyên môn (làm đúng, chuyên nghiệp) và về thiện chí (vì lợi ích của khách); (3) khoảng cách cho thấy hai bên nhìn quan hệ khác nhau — chỗ cần nói chuyện.", ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.", next: "Phiếu cuối giờ." });

  // 38 exit
  s = await L.exitTicket("Viết lại bằng lời của bạn: xung đột chức năng là gì, và vì sao nó cần niềm tin?", "Với khách hàng trong dự án cũ, trụ cột nào yếu nhất? Bằng chứng nào?");
  notes(s, { say: "Phiếu cuối giờ. Một: viết lại bằng lời của bạn — xung đột chức năng là gì, và vì sao nó cần niềm tin? Hai: với khách hàng trong dự án cũ, trụ cột nào yếu nhất — bằng chứng nào?", gv: "Xem: (a) không hiểu nhầm xung đột chức năng là “không có xung đột”; (b) có bằng chứng, không chỉ cảm nhận.", next: "Buổi sau." });

  // 39 next
  s = await L.nextSession("Không có bài về nhà. Buổi 5: khách hàng ở lại vì giá trị", "Buổi 5 · CVP và đồng kiến tạo", "Quan hệ tốt là nền. Nhưng khách hàng ở lại vì giá trị. Buổi sau: viết đề xuất giá trị cho Key Account, và cùng khách hàng tạo ra giá trị.", ["Ảnh bảng chẩn đoán và lộ trình", "Hồ sơ dự án cũ"]);
  notes(s, { say: "Không có bài về nhà. Quan hệ tốt là nền — nhưng khách hàng ở lại vì giá trị. Buổi 5: viết đề xuất giá trị cho Key Account, và cùng khách hàng tạo ra giá trị. Mang theo ảnh bảng chẩn đoán, lộ trình và hồ sơ dự án cũ.", gv: "[NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 4 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 40 refs
  s = L.refs([
    [["Anderson, J. C., & Narus, J. A. (1990). A model of distributor firm and manufacturer firm working partnerships. "], ["Journal of Marketing, 54", 1], ["(1), 42–58."]],
    [["Dwyer, F. R., Schurr, P. H., & Oh, S. (1987). Developing buyer-seller relationships. "], ["Journal of Marketing, 51", 1], ["(2), 11–27."]],
    [["Korstanje, M. E. (2024). Managing events stakeholders. In R. Raj & K. Griffin (Eds.), "], ["Sustainable events management", 1], [". CABI. https://doi.org/10.1079/9781800621381.0005"]],
    [["Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). "], ["Implementing key account management: Designing customer-centric processes for mutual growth", 1], [". Kogan Page."]],
    [["McMillan, J., & Woodruff, C. (1999). Interfirm relationships and informal credit in Vietnam. "], ["The Quarterly Journal of Economics, 114", 1], ["(4), 1285–1320."]],
    [["Morgan, R. M., & Hunt, S. D. (1994). The commitment-trust theory of relationship marketing. "], ["Journal of Marketing, 58", 1], ["(3), 20–38."]],
    [["Palmatier, R. W., Dant, R. P., Grewal, D., & Evans, K. R. (2006). Factors influencing the effectiveness of relationship marketing: A meta-analysis. "], ["Journal of Marketing, 70", 1], ["(4), 136–153."]],
    [["Pham, H. H., & Pham, N. C. (2025). Marketing insights from Quan He. "], ["BIMTECH Business Perspectives", 1], [". https://doi.org/10.1177/25819542251364646"]],
    [["Trần Nguyễn Huỳnh Như. (2023). "], ["Chương 3: Xây dựng mối quan hệ với khách hàng trọng yếu", 1], [" [Slide bài giảng]."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 4, theo APA 7. Chương 4 của Marcos và cộng sự là phần đọc thêm.", gv: "Báo về case “Về đây bốn cánh chim trời”: xem Y09 trong buoi-12_tu-lieu-tong-hop.md. Pham & Pham (2025) rút gọn tên bài — tên đầy đủ trong tư liệu Buổi 8 (T17). [VERIFY năm slide bộ môn.]", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
