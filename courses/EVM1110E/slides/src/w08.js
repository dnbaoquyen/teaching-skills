// EVM1110E Buổi 8 — Governing the KA relationship: Bow-tie → Diamond; results- vs process-driven metrics; joint review
// usage: NODE_PATH=<node_modules> node w08.js <Font> <out.pptx>
const { make, C } = require("./lib");
const FONT = process.argv[2] || "Alexandria", OUT = process.argv[3] || "W08_slides.pptx";
const L = make(FONT, "Bài 8: Quản trị quan hệ nhiều cấp và đo hiệu quả đa chiều");
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
const TRI = () => L.pres.shapes.ISOSCELES_TRIANGLE;
// bow-tie: two triangles tip to tip, centred at (cx, cy)
function bowtie(s, cx, cy, w, h, cl, cr) {
  s.addShape(TRI(), { x: cx - w / 2 - (h - w / 2) / 2, y: cy - w / 4, w: h, h: w / 2, rotate: 90, fill: { color: cl }, line: { color: cl } });
  s.addShape(TRI(), { x: cx - (h - w / 2) / 2, y: cy - w / 4, w: h, h: w / 2, rotate: 270, fill: { color: cr }, line: { color: cr } });
}

(async () => {
  // 1
  let s = L.titleSlide("Bài 8: Quản trị quan hệ nhiều cấp và đo hiệu quả đa chiều", "EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Buổi 8\nGiảng viên: Đoàn Nguyễn Bảo Quyên");
  notes(s, { say: "Chào các bạn. Buổi 8 — Bài 8: Quản trị quan hệ nhiều cấp và đo hiệu quả đa chiều. Buổi 7 ta thấy KAMer đàm phán được nhờ quan hệ tốt. Hôm nay: tổ chức quan hệ đó thế nào để không phụ thuộc một người, đo nó bằng gì, và cùng khách hàng kiểm tra nó ra sao.", gv: "Mở đầu bằng 2–3 “điều còn mơ hồ” từ phiếu cuối giờ Buổi 7 (≤3 phút). Ranh giới (quyết định GV 5): chỉ bàn ai của agency gặp ai của Key Account, không bàn quản lý đội KAM nội bộ.", next: "Bắt đầu bằng một tin nhắn." });

  // 2 hook
  s = slide("Đầu mối duy nhất nghỉ việc — Nova còn gọi được cho ai?");
  box(s, 0.6, 1.95, 7.0, 4.3, TX);
  await ic(s, "FaCommentDots", 0.9, 2.2, 1.0, TEAL);
  T(s, "Chị Hạnh · 5/1, 8:12", 2.1, 2.2, 5.3, 1.0, { fontSize: 16, color: MU });
  T(s, "“Chị chuyển sang ngân hàng khác từ 1/2 nhé. Giám đốc Marketing mới là anh Minh.”", 0.95, 3.4, 6.4, 1.6, { fontSize: 21, color: NAVY, italic: true, valign: "top" });
  T(s, "Nova chưa từng gặp anh Minh. (giả định)", 0.95, 5.4, 6.4, 0.6, { fontSize: 15, color: PINK, bold: true });
  box(s, 7.9, 1.95, 4.83, 4.3);
  T(s, "Giơ tay: ngoài chị Hạnh, Nova quen bao nhiêu người ở An Phát?", 8.15, 2.1, 4.4, 1.2, { bold: true, fontSize: 17, color: YEL, valign: "top" });
  [["0", PINK], ["1–2", YEL], ["3 trở lên", TEAL]].forEach(([t, c], i) => { box(s, 8.2, 3.4 + i * 0.9, 4.23, 0.75, c); T(s, t, 8.4, 3.4 + i * 0.9, 3.8, 0.75, { fontSize: 20, bold: true, color: NAVY }); });
  notes(s, {
    say: "Tháng 1, gala 12/12 của An Phát vừa thành công. Sáng 5/1, KAMer của Nova nhận tin nhắn của chị Hạnh: “Chị chuyển sang ngân hàng khác từ 1/2 nhé. Giám đốc Marketing mới là anh Minh.” Nova chưa từng gặp anh Minh. Giơ tay: ngoài chị Hạnh, Nova quen bao nhiêu người ở An Phát — 0, 1–2, hay 3 trở lên? Và trong dự án cũ của nhóm, nếu người liên hệ phía khách hàng nghỉ việc ngày mai, nhóm còn gọi được cho ai?",
    gv: "Giáo án S1 (phút 0–5). Ghi số phiếu lên bảng. Phiếu S3/S6 ghi Nova làm cho An Phát “3 năm”, Buổi 3–4 dùng “4 năm” — [NEEDS PROFESSOR INPUT: thống nhất số năm].",
    ask: "“Dự án cũ của nhóm: người liên hệ nghỉ việc ngày mai thì gọi cho ai?”",
    next: "Làm tốt nhiều năm chưa chắc đã đủ.",
  });

  // 3 three questions
  s = slide("Buổi 8 trả lời ba câu hỏi: tổ chức, đo lường, cùng kiểm tra");
  const q3 = [["8.1", "Tổ chức", "Từ một sợi dây (Bow-tie) sang nhiều cặp đối ứng (Diamond)", "FaProjectDiagram", TEAL], ["8.2", "Đo lường", "Chỉ số kết quả và chỉ số quá trình", "FaTachometerAlt", YEL], ["8.3", "Cùng kiểm tra", "Đánh giá chung, kiểm tra sức khỏe quan hệ", "FaHandshake", PINK]];
  for (let i = 0; i < 3; i++) { const [k, a, b, icn, c] = q3[i], x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 4.3); await ic(s, icn, x + 1.4, 2.15, 1.1, c); T(s, k, x + 0.2, 3.35, 3.5, 0.5, { align: "center", fontSize: 16, color: MU }); T(s, a, x + 0.2, 3.8, 3.5, 0.6, { align: "center", bold: true, fontSize: 22, color: c }); T(s, b, x + 0.25, 4.45, 3.4, 1.6, { align: "center", fontSize: 16, valign: "top" }); }
  notes(s, {
    say: "Làm tốt nhiều năm chưa chắc đã đủ. Nếu toàn bộ quan hệ nằm trong một sợi dây, sợi dây đứt là mất khách. Buổi 8 trả lời ba câu hỏi. Mục 8.1 — tổ chức: từ một sợi dây sang nhiều cặp đối ứng. Mục 8.2 — đo lường: chỉ số kết quả và chỉ số quá trình. Mục 8.3 — cùng khách hàng kiểm tra quan hệ định kỳ.",
    gv: "Đề cương Session 8 (8.1 Bow-tie → Diamond; 8.2 results-driven vs process-driven metrics; 8.3 relationship health check, joint account review).",
    next: "8.1: hai hình ảnh.",
  });

  // 4 definitions
  s = slide("Bow-tie là quan hệ qua một điểm; Diamond là nhiều người hai bên làm việc trực tiếp");
  defCards(s, [
    ["Marcos et al. (2018)", TEAL, "Giai đoạn đầu: KAMgr và người mua quan hệ “điểm – điểm” — bow-tie. Về sau, nhiều người hai bên có quan hệ; KAMgr lùi về “điều phối” — diamond.", "(tr. 243, Hình 10.2)"],
    ["McDonald, Millman & Rogers (1997)", YEL, "Nhóm Cranfield mô tả quan hệ key account phát triển qua nhiều giai đoạn, dựa trên phỏng vấn cả người bán lẫn đầu mối phía khách hàng.", "(T01; mô hình bow-tie/diamond qua T03)"],
    ["Kim Tasso", BLUE, "“…if anything happens to the key person in your firm or client-side you are at risk of losing that relationship.”", "(T05)"],
  ], "Tổng hợp: Bow-tie = một sợi dây qua hai người; Diamond = nhiều sợi dây giữa hai tổ chức, KAMer điều phối.");
  notes(s, {
    say: "Giáo trình Marcos và cộng sự mô tả mô hình kinh điển: giai đoạn đầu, KAMer và người mua có quan hệ điểm – điểm — hình nơ bướm, bow-tie; phần còn lại của hai tổ chức đứng phía sau. Khi quan hệ phát triển, nhiều người hai bên có quan hệ với nhau; KAMer và người mua lùi về phía sau để điều phối — hình kim cương, diamond. Nhóm Cranfield — McDonald, Millman và Rogers — mô tả quan hệ key account đi qua nhiều giai đoạn. Kim Tasso nói rủi ro của bow-tie: nếu người chủ chốt ở phía mình hoặc phía khách hàng có chuyện gì, ta có thể mất quan hệ.",
    gv: "ĐÃ CÓ NGUỒN TRỰC TIẾP: Marcos et al. (2018), Chương 10, Hình 10.2 “Diamonds and bow ties” và tr. 243: “a ‘point to point’ bow tie relationship emerges… This is a diamond structure… the established model to describe supplier and customer relationships in KAM.” T01 (bài gốc) chưa đọc toàn văn; T03, T05 là nguồn thứ cấp.",
    next: "Hình ảnh hai mô hình.",
  });

  // 5 visual
  s = slide("Bow-tie: mọi thông tin đi qua một điểm — Diamond: các cặp đối ứng làm việc trực tiếp");
  box(s, 0.6, 1.95, 5.9, 4.3, CARD);
  T(s, "Bow-tie", 0.8, 2.0, 5.5, 0.55, { bold: true, fontSize: 20, color: PINK });
  bowtie(s, 3.55, 3.95, 4.8, 2.4, BLUE, TEAL);
  T(s, "Nova", 1.0, 3.7, 1.2, 0.5, { fontSize: 15, bold: true, color: NAVY }); T(s, "An Phát", 4.85, 3.7, 1.4, 0.5, { fontSize: 15, bold: true, color: NAVY });
  T(s, "KAMer ↔ chị Hạnh", 0.8, 5.55, 5.5, 0.5, { fontSize: 15, align: "center", color: YEL, bold: true });
  box(s, 6.83, 1.95, 5.9, 4.3, CARD);
  T(s, "Diamond", 7.03, 2.0, 5.5, 0.55, { bold: true, fontSize: 20, color: TEAL });
  s.addShape(L.pres.shapes.DIAMOND, { x: 7.98, y: 2.6, w: 3.6, h: 2.8, fill: { color: BLUE }, line: { color: BLUE } });
  s.addShape(L.pres.shapes.RIGHT_TRIANGLE, { x: 9.78, y: 2.6, w: 1.8, h: 1.4, flipH: true, flipV: false, fill: { color: TEAL }, line: { color: TEAL } });
  s.addShape(L.pres.shapes.RIGHT_TRIANGLE, { x: 9.78, y: 4.0, w: 1.8, h: 1.4, flipH: true, flipV: true, fill: { color: TEAL }, line: { color: TEAL } });
  [3.1, 3.55, 4.0, 4.45, 4.9].forEach((y) => s.addShape(L.pres.shapes.LINE, { x: 9.3, y, w: 0.96, h: 0, line: { color: YEL, width: 2 } }));
  T(s, "Nova", 8.15, 3.75, 1.0, 0.5, { fontSize: 14, bold: true, color: NAVY }); T(s, "An Phát", 10.45, 3.75, 1.1, 0.5, { fontSize: 14, bold: true, color: NAVY });
  T(s, "Nhiều cặp đối ứng; KAMer điều phối", 7.03, 5.55, 5.5, 0.5, { fontSize: 15, align: "center", color: YEL, bold: true });
  src(s, "Phỏng theo Marcos et al. (2018, Hình 10.2, tr. 243). Hình vẽ minh họa.", 6.45);
  notes(s, {
    say: "Bên trái: bow-tie. Hai tổ chức chỉ chạm nhau ở một điểm — KAMer của Nova và chị Hạnh. Các bộ phận khác đứng phía sau, mọi thông tin đi qua một điểm. Bên phải: diamond. Các bộ phận tương ứng của hai bên làm việc trực tiếp — mỗi đường vàng là một cặp đối ứng; KAMer điều phối toàn bộ.",
    gv: "Hình vẽ lại theo ý Hình 10.2 của giáo trình (alt-text: bên trái hai tam giác chạm nhau ở một điểm; bên phải hai tam giác ghép cạnh, nối bằng nhiều đường song song).",
    next: "Bow-tie có sai không?",
  });

  // 6 stages roadmap
  s = slide("Bow-tie → Diamond là một lộ trình theo giai đoạn quan hệ, không phải “sai → đúng”");
  const stg = [["Khám phá", "exploratory", MU], ["Cơ bản", "basic", TEAL], ["Hợp tác", "co-operative", YEL], ["Phụ thuộc lẫn nhau", "interdependent", ORA], ["Tích hợp", "integrated", PINK]];
  stg.forEach(([a, b, c], i) => { const x = 0.6 + i * 2.47; box(s, x, 2.3, 2.25, 1.6, c); T(s, a, x + 0.1, 2.35, 2.05, 0.95, { align: "center", bold: true, fontSize: 17, color: NAVY }); T(s, b, x + 0.1, 3.25, 2.05, 0.5, { align: "center", fontSize: 13, italic: true, color: NAVY }); });
  box(s, 0.6, 4.1, 4.72, 0.7, BLUE); T(s, "hợp với Bow-tie", 0.8, 4.1, 4.3, 0.7, { fontSize: 16, bold: true, color: NAVY });
  box(s, 7.98, 4.1, 4.75, 0.7, TEAL); T(s, "hợp với Diamond", 8.18, 4.1, 4.3, 0.7, { fontSize: 16, bold: true, color: NAVY });
  box(s, 0.6, 5.05, 12.13, 1.2);
  T(s, "Mới làm sự kiện đầu tiên đã đòi gặp Ban giám đốc, kết nối mọi bộ phận — vừa tốn nguồn lực, vừa có thể làm khách khó chịu. Diamond là đích đến khi quan hệ đủ sâu và Key Account đáng đầu tư (Buổi 2, Buổi 6).", 0.85, 5.05, 11.7, 1.2, { fontSize: 16 });
  src(s, "Các giai đoạn: Marcos et al. (2018, tr. 101, dẫn McDonald & Rogers, 2017). Ghép giai đoạn – mô hình: theo T03 (nguồn thứ cấp).", 6.45);
  notes(s, {
    say: "Giáo trình nêu quan hệ key account thường đi từ giai đoạn khám phá, sang cơ bản, hợp tác, phụ thuộc lẫn nhau và tích hợp. Giai đoạn đầu hợp với bow-tie; khi đã gắn kết sâu thì hợp với diamond. Vậy bow-tie không sai — nó là điểm xuất phát. Mới làm sự kiện đầu tiên mà đã đòi gặp Ban giám đốc, đòi kết nối mọi bộ phận thì vừa tốn nguồn lực, vừa có thể làm khách khó chịu. Diamond là đích đến khi quan hệ đủ sâu và Key Account đáng đầu tư.",
    gv: "ĐÓNG [VERIFY] tên giai đoạn: Marcos et al. (2018, tr. 101): “key account relationships usually evolve from an exploratory phase into more collaborative and extensive stages: basic, co-operative, interdependent, and integrated” (dẫn McDonald & Rogers, 2017). Việc ghép “giai đoạn đầu ↔ bow-tie, gắn kết sâu ↔ diamond” vẫn theo T03 (thứ cấp). Quyết định GV: lộ trình, không phải sai → đúng.",
    next: "Nhưng vì sao phải đi?",
  });

  // 7 pros cons
  s = slide("Bow-tie đứt khi người chủ chốt ở bất kỳ bên nào rời đi");
  const pc = [["Bow-tie", ["Đơn giản, KAMer kiểm soát được nhiều, ít bất ngờ"], ["Người chủ chốt ở phía mình hoặc phía khách rời đi → có thể mất quan hệ", "Người khác trong agency không được tham gia"], PINK], ["Diamond", ["Quan hệ sâu, hiểu khách hơn", "Cơ hội giải pháp lớn hơn", "Không phụ thuộc một người"], ["Tốn nguồn lực", "Nhiều quyết định nằm ngoài tầm kiểm soát của KAMer"], TEAL]];
  pc.forEach(([a, pro, con, c], i) => { const x = 0.6 + i * 6.13; box(s, x, 1.95, 5.9, 0.7, c); T(s, a, x + 0.2, 1.95, 5.5, 0.7, { bold: true, fontSize: 20, color: NAVY }); box(s, x, 2.75, 5.9, 3.5); T(s, [{ text: "Ưu: ", options: { bold: true, color: TEAL, breakLine: true } }, ...pro.map((t) => ({ text: "• " + t, options: { breakLine: true } })), { text: "Nhược: ", options: { bold: true, color: PINK, breakLine: true } }, ...con.map((t, j) => ({ text: "• " + t, options: { breakLine: j < con.length - 1 } }))], x + 0.25, 2.85, 5.4, 3.3, { fontSize: 15, valign: "top", paraSpaceAfter: 4 }); });
  src(s, "Nguồn: T03 (pharmaphorum), T04 (SBI), T05 (Kim Tasso).", 6.45);
  notes(s, {
    say: "Bow-tie: ưu điểm là đơn giản, KAMer kiểm soát được nhiều, ít bất ngờ. Nhược: người chủ chốt ở phía mình hoặc phía khách rời đi là có thể mất quan hệ; và người khác trong agency không được tham gia. Diamond: quan hệ sâu, hiểu khách hơn, có cơ hội giải pháp lớn, không phụ thuộc một người. Nhược: tốn nguồn lực, và nhiều quyết định nằm ngoài tầm kiểm soát của KAMer.",
    gv: "W08 lecture notes §1.2 (bảng).",
    next: "Và quan hệ thường kéo dài hơn người.",
  });

  // 8 tenure
  s = slide("Quan hệ với agency kéo dài hơn nhiệm kỳ của người ra quyết định");
  const tn = [["~10 năm", "quan hệ khách hàng – agency trải nghiệm (trung bình mọi agency ~7 năm; 2016: 3,2 năm)", TEAL, "ANA & 4As (2025), T07"], ["4,3 năm", "nhiệm kỳ trung bình của CMO tại Fortune 500 năm 2024", PINK, "Spencer Stuart (2025), T08"]];
  tn.forEach(([a, b, c, r], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.6); T(s, a, x, 2.1, 3.9, 1.3, { fontSize: 44, bold: true, color: c, align: "center" }); T(s, b, x + 0.25, 3.45, 3.4, 1.5, { fontSize: 15, align: "center", valign: "top" }); T(s, r, x, 5.05, 3.9, 0.4, { fontSize: 12, color: MU, align: "center" }); });
  box(s, 8.86, 1.95, 3.87, 3.6, YEL);
  T(s, "Một quan hệ 10 năm có thể đi qua 2–3 người ở cùng một ghế. Mỗi lần đổi người là một lần quan hệ có thể đứt.", 9.06, 1.95, 3.47, 3.6, { fontSize: 18, bold: true, color: NAVY });
  T(s, "Số liệu Mỹ, doanh nghiệp rất lớn — chưa kiểm chứng chéo; không suy rộng nguyên xi cho Việt Nam.", 0.6, 5.8, 12.13, 0.5, { fontSize: 15, color: MU, italic: true });
  notes(s, {
    say: "Theo ANA và 4As năm 2025, quan hệ khách hàng – agency trung bình khoảng 7 năm — năm 2016 chỉ 3,2 năm; agency trải nghiệm có quan hệ dài nhất, khoảng 10 năm. Trong khi đó, nhiệm kỳ trung bình của giám đốc marketing tại Fortune 500 năm 2024 là 4,3 năm. Phép tính đơn giản: một quan hệ 10 năm có thể đi qua hai ba người ở cùng một ghế. Mỗi lần đổi người là một lần quan hệ có thể đứt. Đây là số liệu Mỹ, doanh nghiệp rất lớn — không suy rộng nguyên xi cho Việt Nam.",
    gv: "T07 (một nghiên cứu gốc, MediaPost đưa lại cùng số), T08. Chưa KCC độc lập. Nối T13: “An account that runs through a single client contact ends when that contact changes jobs.”",
    next: "Ở Việt Nam, điều này còn tinh tế hơn.",
  });

  // 9 Vietnam
  s = slide("Ở Việt Nam, “quan hệ” làm Bow-tie vừa bền vừa mong manh");
  const vn = [["Thể diện", TEAL], ["Có qua có lại", YEL], ["Tình cảm", PINK]];
  vn.forEach(([a, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 1.1, c); T(s, a, x + 0.2, 1.95, 3.5, 1.1, { bold: true, fontSize: 22, color: NAVY, align: "center" }); });
  box(s, 0.6, 3.3, 5.9, 2.95);
  T(s, [{ text: "Bền: ", options: { bold: true, color: TEAL } }, { text: "tình cảm giữa KAMer và một đầu mối có thể rất bền — Bow-tie “chạy tốt” nhiều năm." }], 0.85, 3.4, 5.4, 2.75, { fontSize: 17, valign: "top" });
  box(s, 6.83, 3.3, 5.9, 2.95);
  T(s, [{ text: "Mong manh: ", options: { bold: true, color: PINK } }, { text: "tình cảm gắn với con người, không gắn với tổ chức. Người mới có thể coi agency là “người của sếp cũ”." }], 7.08, 3.4, 5.4, 2.75, { fontSize: 17, valign: "top" });
  src(s, "Nguồn: Pham & Pham (2025) (T17); McMillan & Woodruff (1999) (T18). Hàm ý: nhận định của người soạn.", 6.45);
  notes(s, {
    say: "Nhớ Buổi 4: “quan hệ” trong kinh doanh Việt Nam gồm thể diện, có qua có lại, tình cảm. Nhận định: tình cảm giữa KAMer và một đầu mối có thể rất bền, nên bow-tie thường chạy tốt nhiều năm. Nhưng tình cảm gắn với con người, không gắn với tổ chức. Khi đầu mối rời đi, người mới có thể coi agency là “người của sếp cũ”. Diamond chuyển một phần quan hệ cá nhân thành quan hệ giữa hai tổ chức.",
    gv: "W08 lecture notes §1.5 — nhận định đã duyệt.",
    next: "Thêm một lưu ý thực tế của giáo trình.",
  });

  // 10 realism (Fig 10.3)
  s = slide("Vẽ Diamond cho thực tế: kích thước hai bên theo giá trị agency tạo ra, không theo mong muốn");
  box(s, 0.6, 1.95, 5.9, 4.3, CARD);
  bowtie(s, 3.0, 4.0, 2.4, 1.2, BLUE, BLUE);
  s.addShape(TRI(), { x: 2.9, y: 2.6, w: 2.8, h: 1.7, rotate: 270, fill: { color: TEAL }, line: { color: TEAL } });
  T(s, "Agency nhỏ", 0.8, 5.35, 2.6, 0.5, { fontSize: 14, bold: true, color: BLUE }); T(s, "Key Account lớn", 3.7, 5.35, 2.6, 0.5, { fontSize: 14, bold: true, color: TEAL });
  box(s, 6.83, 1.95, 5.9, 4.3);
  T(s, "Mất cân đối thường gặp", 7.08, 2.05, 5.4, 0.5, { bold: true, fontSize: 18, color: YEL });
  T(s, bullets(["Khách hàng lớn hơn agency rất nhiều (tài chính, địa bàn, nhân sự)", "Người mua coi agency là nhà cung cấp nhỏ", "Người mua chưa thấy agency tạo ra giá trị"]), 7.08, 2.6, 5.4, 2.1, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  T(s, "→ Đừng nản. Tập trung vào giá trị mình tạo ra (Buổi 5).", 7.08, 4.9, 5.4, 1.2, { fontSize: 17, bold: true, color: TEAL, valign: "top" });
  src(s, "Nguồn: Marcos et al. (2018, Hình 10.3, tr. 244–245). Hình vẽ minh họa.", 6.45);
  notes(s, {
    say: "Giáo trình thêm một lưu ý thực tế. Mô hình bow-tie và diamond vẽ hai tam giác bằng nhau — nhưng thực tế thường lệch. Khách hàng lớn hơn agency rất nhiều; người mua coi agency là nhà cung cấp nhỏ; hoặc chưa thấy agency tạo ra giá trị. Một ngân hàng như An Phát lớn hơn Nova rất nhiều. Giáo trình khuyên: đừng nản — vẽ lại hai tam giác theo khả năng tạo lợi nhuận và giá trị của mình, và tập trung vào giá trị đó.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 10.3 “Diamonds and bow ties (scaled by value)” và tr. 244–245: “If your relationship is out of scale (you are dwarfed by the customer) do not be disheartened. Always focus on the value that you can produce.”",
    next: "Vậy Diamond của một event agency trông thế nào?",
  });

  // 11 textbook links + KAMgr role
  s = slide("KAMer vẫn là đầu mối chính — nhưng phải nói chuyện được ở mọi cấp, trong và ngoài agency");
  box(s, 0.6, 1.95, 5.9, 4.3);
  T(s, "Bên trong agency", 0.85, 2.05, 5.4, 0.5, { bold: true, fontSize: 18, color: TEAL });
  T(s, bullets(["Điều phối các bộ phận: sản xuất, sáng tạo, tài chính", "Gặp được lãnh đạo agency: báo cáo về quan hệ, xin hỗ trợ khi cần"]), 0.85, 2.6, 5.4, 3.5, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  box(s, 6.83, 1.95, 5.9, 4.3);
  T(s, "Với Key Account", 7.08, 2.05, 5.4, 0.5, { bold: true, fontSize: 18, color: YEL });
  T(s, bullets(["Liên hệ chặt với đầu mối chính", "Kết nối trực tiếp các bộ phận khác khi cần — để có thông tin và xây gắn kết cá nhân", "Nếu được, tiếp xúc lãnh đạo khách hàng để truyền đạt giá trị chiến lược"]), 7.08, 2.6, 5.4, 3.5, { fontSize: 16, valign: "top", paraSpaceAfter: 8 });
  src(s, "Nguồn: Marcos et al. (2018, tr. 111–112, Hình 4.7 “Relationship links between the supplier and a key account”), áp vào agency.", 6.45);
  notes(s, {
    say: "Giáo trình mô tả vai trò KAMer trong Diamond. KAMer vẫn là đầu mối chính — đôi khi là đầu mối duy nhất — nhưng phải nói chuyện được ở mọi cấp. Bên trong agency: điều phối sản xuất, sáng tạo, tài chính; gặp được lãnh đạo agency để báo cáo và xin hỗ trợ. Với Key Account: liên hệ chặt với đầu mối chính; kết nối trực tiếp các bộ phận khác khi cần — để có thông tin cập nhật và xây gắn kết cá nhân; và nếu được, tiếp xúc lãnh đạo khách hàng để truyền đạt giá trị chiến lược.",
    gv: "Đã đối chiếu Marcos et al. (2018), Chương 4, mục “The role of the key account manager and interaction with the customer” (tr. 111–112) và Hình 4.7. Ví dụ trong sách là doanh nghiệp hàng tiêu dùng (purchasing manager, trade marketing, supply chain) — slide đã chuyển sang agency. Ranh giới: không bàn tuyển dụng, đánh giá đội KAM (quyết định GV 5).",
    next: "Cụ thể: ai của Nova gặp ai của An Phát.",
  });

  // 12 who meets whom
  s = slide("Diamond của event agency: mỗi cặp một mục đích, một nhịp gặp");
  const wm = [["Nova", "An Phát", "Nội dung chính", "Nhịp gặp"], ["CEO", "Phó TGĐ Khối Marketing", "Định hướng hợp tác nhiều năm", "1–2 lần/năm + sự kiện lớn"], ["KAMer", "GĐ Marketing", "Kế hoạch năm, ngân sách, ưu tiên", "Hằng tháng + đánh giá định kỳ"], ["Producer", "Truyền thông nội bộ / Sự kiện", "Kịch bản, tiến độ, chất lượng", "Theo dự án"], ["Creative Lead", "Brand team", "Ý tưởng, nhận diện thương hiệu", "Theo dự án"], ["Kế toán dự án", "Tài chính / Mua sắm", "Hợp đồng, thanh toán, chứng từ", "Theo dự án + cuối năm"]];
  const ws = [2.4, 3.1, 3.6, 3.03], xs = [0.6, 3.0, 6.1, 9.7];
  wm.forEach((r, i) => { const y = 1.9 + i * 0.75; r.forEach((c, j) => { if (i === 0) { T(s, c, xs[j], y, ws[j], 0.55, { bold: true, fontSize: 15, color: YEL }); } else { box(s, xs[j], y, ws[j] - 0.08, 0.66, j === 0 ? TEAL : j === 1 ? BLUE : CARD); T(s, c, xs[j] + 0.1, y, ws[j] - 0.28, 0.66, { fontSize: 14, bold: j < 2, color: j < 2 ? NAVY : TX }); } }); });
  src(s, "Nhận định của người soạn (dựa trên T04, T06). [NEEDS PROFESSOR INPUT: ví dụ sơ đồ tiếp xúc thực tế của event agency Việt Nam.]", 6.45);
  notes(s, {
    say: "Một sơ đồ tham khảo cho Nova – An Phát. CEO Nova gặp Phó Tổng Giám đốc phụ trách Khối Marketing: định hướng hợp tác nhiều năm — một hai lần mỗi năm và các sự kiện lớn. KAMer gặp Giám đốc Marketing: kế hoạch năm, ngân sách, ưu tiên — hằng tháng và đánh giá định kỳ. Producer gặp trưởng ban truyền thông nội bộ hay sự kiện: kịch bản, tiến độ, chất lượng. Creative Lead gặp brand team. Kế toán dự án gặp tài chính, mua sắm. Mỗi cặp phải có mục đích và nhịp gặp; KAMer vẫn điều phối.",
    gv: "W08 lecture notes §1.6. Dấu hiệu đã đạt Diamond: agency được mời vào họp nội bộ của khách như lập kế hoạch năm (T04) — nối thẻ 6 của Thực hành 1 Buổi 4.",
    next: "Một vai đặc biệt: lãnh đạo agency.",
  });

  // 13 executive engagement
  s = slide("Lãnh đạo agency là thành viên của đội khách hàng — nhưng phải nắm thông tin trước khi gặp khách");
  box(s, 0.6, 1.95, 6.0, 4.3);
  T(s, "Từ “executive sponsorship” sang “executive engagement”", 0.85, 2.05, 5.5, 0.9, { bold: true, fontSize: 17, color: TEAL, valign: "top" });
  T(s, "“Strategic account management is a team sport and requires cross-functional, multi-tiered vertical level engagement and strong accountability.” — SAMA (T06)", 0.85, 3.0, 5.5, 1.6, { fontSize: 15, italic: true, valign: "top" });
  T(s, "Việc của lãnh đạo (giáo trình): chọn key account · đặt mục tiêu · phân bổ nguồn lực · mở đường tới lãnh đạo khách · gặp gỡ cấp cao với cấp cao", 0.85, 4.65, 5.5, 1.5, { fontSize: 14, color: MU, valign: "top" });
  box(s, 6.85, 1.95, 5.88, 4.3, PINK);
  T(s, "Rủi ro khi lãnh đạo không nắm việc", 7.1, 2.05, 5.4, 0.5, { bold: true, fontSize: 17, color: NAVY });
  T(s, "“Our VP of sales doesn’t really know what is going on with the customer on a daily basis, and in some meetings that is so evident that customers get upset… we lose credibility.”", 7.1, 2.65, 5.4, 2.4, { fontSize: 15, italic: true, color: NAVY, valign: "top" });
  T(s, "— KAMgr ngành in ấn, trong Marcos et al. (2018, tr. 111)", 7.1, 5.2, 5.4, 0.6, { fontSize: 12, color: NAVY });
  src(s, "Nguồn: T06 (SAMA, 2021); Marcos et al. (2018, tr. 110–111).", 6.45);
  notes(s, {
    say: "SAMA khuyến nghị chuyển từ executive sponsorship — lãnh đạo chỉ đứng tên, chỉ xuất hiện khi có sự cố — sang executive engagement: lãnh đạo là thành viên có trách nhiệm của đội khách hàng. Giáo trình liệt kê việc của lãnh đạo: chọn key account, đặt mục tiêu, phân bổ nguồn lực, mở đường tới lãnh đạo phía khách hàng, gặp gỡ cấp cao với cấp cao. Nhưng có rủi ro: một KAMgr ngành in ấn kể, phó chủ tịch bán hàng không nắm chuyện hằng ngày với khách, và trong vài buổi họp điều đó lộ rõ đến mức khách khó chịu — công ty mất uy tín. Vậy: trước khi CEO Nova gặp ông Tuấn, KAMer phải brief cho CEO.",
    gv: "T06 nguyên văn. Marcos et al. (2018), “Top management support” (tr. 110–111): danh sách hoạt động của lãnh đạo và hộp trích dẫn “The role of top managers in KAM”.",
    next: "Kiểm tra nhanh.",
  });

  // 14 vote
  s = slide("Giơ 1–2 ngón: đây là Bow-tie hay Diamond?");
  box(s, 0.6, 1.95, 7.2, 3.6);
  await ic(s, "FaGolfBall", 0.9, 2.25, 1.0, YEL);
  T(s, "CEO Nova chơi golf với ông Tuấn mỗi tháng và rất thân. Mọi việc khác của An Phát vẫn đi qua KAMer và chị Hạnh.", 2.15, 2.15, 5.45, 3.2, { fontSize: 18, valign: "top" });
  T(s, "(giả định)", 0.9, 5.05, 2.0, 0.4, { fontSize: 13, color: MU, italic: true });
  [["1", "Bow-tie", PINK], ["2", "Diamond", TEAL]].forEach(([k, t, c], i) => { num(s, k, 8.2, 2.2 + i * 1.3, 0.9, c, 22); box(s, 9.3, 2.2 + i * 1.3, 3.43, 0.9); T(s, t, 9.5, 2.2 + i * 1.3, 3.1, 0.9, { fontSize: 20, bold: true }); });
  notes(s, {
    say: "Tình huống giả định: CEO Nova chơi golf với ông Tuấn mỗi tháng và rất thân. Mọi việc khác của An Phát vẫn đi qua KAMer và chị Hạnh. Đây là bow-tie hay diamond? Một ngón bow-tie, hai ngón diamond.",
    gv: "Đáp án: 1 — vẫn là Bow-tie (hai sợi dây đơn lẻ, không có các cặp đối ứng làm việc theo mục đích).",
    ask: "Giơ 1 hoặc 2 ngón.",
    next: "Đáp án.",
  });

  // 15 answer + misconceptions
  s = slide("Đáp án: vẫn là Bow-tie — chỉ là nơ bướm ở tầng cao hơn");
  const ms = [["“Có quan hệ tốt với sếp là đủ”", "Vẫn là Bow-tie, chỉ ở tầng cao hơn"], ["“Diamond = càng nhiều người gặp khách càng tốt”", "Mỗi cặp cần mục đích và nhịp gặp; nhiều người nói nhiều thông điệp còn nguy hiểm hơn"], ["“Diamond cho mọi khách hàng”", "Chỉ cho Key Account đủ giai đoạn và đáng đầu tư"]];
  for (let i = 0; i < 3; i++) { const y = 1.95 + i * 1.45; box(s, 0.6, y, 5.6, 1.25); await ic(s, "FaTimes", 0.8, y + 0.27, 0.7, PINK); T(s, ms[i][0], 1.7, y, 4.4, 1.25, { fontSize: 16, bold: true }); arrow(s, 6.35, y + 0.42, 0.6, 0.45, YEL); box(s, 7.1, y, 5.63, 1.25, TEAL); T(s, ms[i][1], 7.3, y, 5.25, 1.25, { fontSize: 15, bold: true, color: NAVY }); }
  notes(s, {
    say: "Đáp án: vẫn là bow-tie — chỉ là nơ bướm ở tầng cao hơn. Ba hiểu lầm. Một: có quan hệ tốt với sếp là đủ — sai, đó vẫn là bow-tie. Hai: diamond là càng nhiều người gặp khách càng tốt — sai, mỗi cặp cần mục đích và nhịp gặp; nhiều người nói nhiều thông điệp khác nhau còn nguy hiểm hơn bow-tie. Ba: diamond cho mọi khách hàng — sai, chỉ cho Key Account đủ giai đoạn và đáng đầu tư.",
    gv: "W08 lecture notes §1.7.",
    next: "Thực hành 1.",
  });

  // 16 practice 1
  s = await L.practice("Thực hành 1 · 20 phút: từ Bow-tie sang Diamond với An Phát", [["5’", "Vẽ sơ đồ tiếp xúc hiện tại trên A1; Bow-tie hay Diamond? Giai đoạn nào?", TEAL], ["10’", "Thiết kế Diamond mục tiêu 6 tháng: tối đa 5 cặp đối ứng — ai ↔ ai · mục đích · nhịp gặp", YEL], ["5’", "3 việc trong 30 ngày để anh Minh không coi Nova là “agency của sếp cũ” — ai làm, trước hay sau 1/2", PINK]], "FaProjectDiagram", "Sản phẩm", "Sơ đồ hiện tại + Diamond mục tiêu — đội Nova mang vào Thực hành 2", "Chỉ bàn ai của Nova gặp ai của An Phát.");
  notes(s, {
    say: "Thực hành 1, 20 phút. Năm phút: trên A1, vẽ sơ đồ tiếp xúc hiện tại giữa Nova và An Phát — mỗi đường là một quan hệ làm việc thật; kết luận bow-tie hay diamond, giai đoạn nào. Mười phút: thiết kế diamond mục tiêu trong 6 tháng, tối đa 5 cặp đối ứng — ai với ai, mục đích, nhịp gặp. Năm phút: ba việc Nova làm trong 30 ngày để anh Minh không coi Nova là agency của sếp cũ — ai làm, trước hay sau ngày 1/2.",
    gv: "Phiếu W08_activity_S3_so_do_tiep_xuc.md. Mốc phút 30–50. Nếu nhóm đưa CEO đi gặp mọi người: “CEO có bao nhiêu giờ mỗi năm cho An Phát?”",
    next: "Giải lao.",
  });

  // 17 break
  s = await L.breakSlide(8);
  notes(s, { say: "Giải lao 8 phút.", gv: "[NEEDS PROFESSOR INPUT: giờ quay lại.] Giáo án: phút 50–58. GV xếp 3 cặp nhóm cho Thực hành 2.", next: "Sau giải lao: anh Minh hỏi một câu." });

  // 18 question
  s = await L.question("Câu hỏi của người mới", "“Ba năm qua, Nova đã mang lại gì cho ngân hàng?”", "FaQuestionCircle", PINK, "Đề cương 8.2: đo hiệu quả quan hệ đa chiều");
  notes(s, { say: "Anh Minh mới về. Anh hỏi: “Ba năm qua, Nova đã mang lại gì cho ngân hàng?” Nova trả lời bằng gì — bằng cảm giác “khách vui lắm”, hay bằng số?", ask: "“Nova có những con số nào?”", next: "Có hai loại chỉ số." });

  // 19 results vs process
  s = slide("Chỉ số kết quả xác nhận điều đã xảy ra; chỉ số quá trình báo trước điều sắp xảy ra");
  const rp = [["Results-driven", "chỉ số kết quả · lagging", ["Tài chính: tăng trưởng doanh thu, lợi nhuận, giá trị vòng đời (Buổi 6)", "Quan hệ: hài lòng, trung thành, chất lượng quan hệ (Buổi 4)"], TEAL], ["Process-driven", "chỉ số quá trình · leading", ["Phục vụ khách: gói dịch vụ, giải pháp, cost to serve", "Cùng phát triển: đồng kiến tạo, chia sẻ thông tin, đầu tư chung (Buổi 5)", "Trải nghiệm: trước – trong – sau mua (Buổi 3)"], YEL]];
  rp.forEach(([a, b, items, c], i) => { const x = 0.6 + i * 6.13; box(s, x, 1.95, 5.9, 0.95, c); T(s, a, x + 0.2, 1.95, 5.5, 0.55, { bold: true, fontSize: 20, color: NAVY }); T(s, b, x + 0.2, 2.45, 5.5, 0.4, { fontSize: 14, italic: true, color: NAVY }); box(s, x, 3.0, 5.9, 2.65); T(s, bullets(items), x + 0.2, 3.1, 5.5, 2.45, { fontSize: 15, valign: "top", paraSpaceAfter: 8 }); });
  T(s, "Chỉ số quá trình là đèn báo trên taplô; chỉ số kết quả là đồng hồ cây số.", 0.6, 5.85, 12.13, 0.55, { fontSize: 18, bold: true, color: YEL });
  src(s, "Nguồn: Marcos et al. (2018, Hình 8.1, tr. 192–193) — thuật ngữ “results-driven / processes-driven metrics” của đề cương.", 6.5);
  notes(s, {
    say: "Đề cương mục 8.2 dùng đúng thuật ngữ của giáo trình Marcos và cộng sự. Results-driven — chỉ số kết quả: tài chính gồm tăng trưởng doanh thu, lợi nhuận, giá trị vòng đời — Buổi 6; quan hệ gồm hài lòng, trung thành, chất lượng quan hệ — Buổi 4. Đây là chỉ số trễ: biết khi đã xảy ra. Process-driven — chỉ số quá trình: phục vụ khách, cùng phát triển, trải nghiệm khách hàng — báo trước kết quả. Chỉ số quá trình là đèn báo trên taplô, chỉ số kết quả là đồng hồ cây số. Chỉ nhìn đồng hồ cây số thì khi biết xe hỏng đã quá muộn.",
    gv: "Đã đối chiếu Marcos et al. (2018), Hình 8.1 và tr. 192–193. Khung này nối Buổi 3, 4, 5, 6 với Buổi 8. Nhãn leading/lagging là cách nói bổ sung của W08 lecture notes §2.1.",
    next: "Chỉ số kết quả về quan hệ đo thế nào?",
  });

  // 20 relational performance
  s = slide("Kết quả về quan hệ đo bằng ba thứ: hài lòng, trung thành, và chất lượng quan hệ");
  const rl = [["Hài lòng", "Đánh giá mọi mặt của quan hệ: dịch vụ, giao hàng, giao tiếp, nhân sự, xử lý khiếu nại, giá trị tài chính nhận được…", "Khảo sát bên thứ ba; nhiều người phía khách cùng trả lời", TEAL], ["Trung thành", "Thái độ: ý định mua lại, giới thiệu, không muốn đổi · Hành vi: mua thêm, tỷ trọng chi tiêu dành cho mình (share of wallet)", "Khảo sát (thái độ) + dữ liệu doanh số (hành vi)", YEL], ["Chất lượng quan hệ", "Xung đột · niềm tin · cam kết (Buổi 4)", "Nên đo cả hai phía để thấy khoảng cách", PINK]];
  rl.forEach(([a, b, c, col], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 0.7, col); T(s, a, x + 0.2, 1.95, 3.5, 0.7, { bold: true, fontSize: 19, color: NAVY }); box(s, x, 2.75, 3.9, 2.4); T(s, b, x + 0.2, 2.85, 3.5, 2.2, { fontSize: 14, valign: "top" }); box(s, x, 5.25, 3.9, 1.0, CARD); T(s, c, x + 0.2, 5.25, 3.5, 1.0, { fontSize: 13, color: MU, italic: true }); });
  src(s, "Nguồn: Marcos et al. (2018, tr. 201–206; Hình 8.2–8.4; bộ câu khảo sát thang 1–7).", 6.45);
  notes(s, {
    say: "Giáo trình đo kết quả về quan hệ bằng ba thứ. Hài lòng: đánh giá mọi mặt của quan hệ — dịch vụ, giao hàng, giao tiếp, nhân sự, xử lý khiếu nại, cả giá trị tài chính nhận được; thường khảo sát qua bên thứ ba, nhiều người phía khách cùng trả lời. Trung thành: có thành phần thái độ — ý định mua lại, giới thiệu, không muốn đổi — và thành phần hành vi — mua thêm, tỷ trọng chi tiêu của khách dành cho mình. Chất lượng quan hệ: xung đột, niềm tin, cam kết — đúng ba trụ cột Buổi 4; giáo trình khuyên đo cả hai phía để thấy khoảng cách.",
    gv: "Đã đối chiếu Marcos et al. (2018): Hình 8.2 “The dimensions of customer satisfaction” (tr. 202), bộ câu khảo sát (tr. 202–204); Hình 8.3 “The two types of customer loyalty” (tr. 204) — “customer’s share of total purchases captured by the supplier firm”; tr. 205: “a good option is to get both perspectives to identify possible gaps” — khẳng định nguyên tắc đo hai chiều của Buổi 4.",
    next: "Nghiên cứu nói gì về quan hệ giữa hai loại chỉ số?",
  });

  // 21 research chain
  s = slide("Nghiên cứu: thực hành KAM tạo ra kết quả thông qua quan hệ");
  const ch = [["Định hướng, thực hành KAM", TEAL], ["Năng lực quan hệ, năng lực KAM", YEL], ["Lợi thế cạnh tranh", ORA], ["Hiệu quả thị trường và tài chính", PINK]];
  ch.forEach(([t, c], i) => { const x = 0.6 + i * 3.1; box(s, x, 2.2, 2.75, 1.8, c); T(s, t, x + 0.15, 2.2, 2.45, 1.8, { align: "center", bold: true, fontSize: 17, color: NAVY }); if (i < 3) arrow(s, x + 2.78, 2.9, 0.3, 0.4, MU); });
  box(s, 0.6, 4.3, 12.13, 1.95);
  T(s, bullets(["Thực hành KAM ảnh hưởng đến hiệu quả thông qua năng lực quan hệ và kết quả quan hệ (Tzempelikos & Gounaris, 2015)", "Khảo sát 568 doanh nghiệp B2B châu Âu: sự hài lòng của Key Account bổ trợ lợi thế khác biệt hóa, tăng hiệu quả tài chính (Fakhreddin et al., 2025)"]), 0.85, 4.4, 11.7, 1.75, { fontSize: 15, valign: "top", paraSpaceAfter: 8 });
  src(s, "Nguồn: T09, T10 — đọc tóm tắt [VERIFY chi tiết biến đo T09].", 6.45);
  notes(s, {
    say: "Vì sao phải đo cả hai loại? Nghiên cứu cho thấy chuỗi: định hướng và thực hành KAM, qua năng lực quan hệ và năng lực KAM, tạo lợi thế cạnh tranh, rồi mới đến hiệu quả thị trường và tài chính. Tzempelikos và Gounaris, 2015: thực hành KAM ảnh hưởng đến hiệu quả thông qua năng lực quan hệ và các kết quả quan hệ. Fakhreddin và cộng sự, 2025, khảo sát 568 doanh nghiệp B2B châu Âu: sự hài lòng của Key Account bổ trợ cho lợi thế khác biệt hóa, làm tăng hiệu quả tài chính.",
    gv: "T09, T10 — đọc tóm tắt. [VERIFY: các thực hành KAM ở cấp “control” trong T09 — đọc toàn văn trước khi trích chi tiết.]",
    next: "Áp vào Nova – An Phát.",
  });

  // 22 indicator set
  s = slide("Bộ chỉ số cho quan hệ Nova – An Phát");
  const ks = [["Kết quả", ["Doanh thu từ An Phát/năm", "Biên lợi nhuận trên An Phát (Buổi 6)", "Tỷ trọng ngân sách sự kiện của An Phát mà Nova nắm", "Số năm quan hệ, tái ký"], TEAL], ["Quá trình", ["Số đầu mối và số cấp Nova có quan hệ", "Nhịp gặp lãnh đạo hai bên", "Số buổi đánh giá định kỳ đúng hạn", "Thời gian phản hồi; hài lòng sau mỗi sự kiện", "Nova có được mời vào họp kế hoạch năm?"], YEL]];
  ks.forEach(([a, items, c], i) => { const x = 0.6 + i * 6.13; box(s, x, 1.95, 5.9, 0.7, c); T(s, a, x + 0.2, 1.95, 5.5, 0.7, { bold: true, fontSize: 20, color: NAVY }); box(s, x, 2.75, 5.9, 3.5); T(s, bullets(items), x + 0.2, 2.85, 5.5, 3.3, { fontSize: 16, valign: "top", paraSpaceAfter: 8 }); });
  src(s, "W08 lecture notes §2.1 (giả định). Gợi ý: che tiêu đề cột, cho lớp đoán chỉ số nào thuộc cột nào.", 6.45);
  notes(s, {
    say: "Bộ chỉ số cho Nova – An Phát. Kết quả: doanh thu từ An Phát mỗi năm; biên lợi nhuận trên An Phát — nối cost-to-serve Buổi 6; tỷ trọng ngân sách sự kiện của An Phát mà Nova nắm; số năm quan hệ, tái ký. Quá trình: số đầu mối và số cấp Nova có quan hệ; nhịp gặp lãnh đạo hai bên; số buổi đánh giá định kỳ đúng hạn; thời gian phản hồi; hài lòng sau mỗi sự kiện; và Nova có được mời vào họp kế hoạch năm của An Phát không.",
    gv: "Cho lớp đoán nhanh từng chỉ số thuộc cột nào trước khi lật.",
    next: "Còn từng sự kiện thì đo bằng gì?",
  });

  // 23 ROI ladders
  s = slide("Đo từng sự kiện: ROI Methodology đặt mục tiêu từ trên xuống, đo từ dưới lên");
  const l5 = ["1 Reaction", "2 Learning", "3 Application", "4 Impact", "5 ROI"], l6 = ["0 Đúng người", "1 Hài lòng", "2 Learning (+ quan hệ)", "3 Behaviour", "4 Impact (tách riêng)", "5 ROI / sứ mệnh"];
  T(s, "5 cấp · ROI Institute", 0.6, 1.85, 5.5, 0.45, { bold: true, fontSize: 16, color: TEAL });
  l5.forEach((t, i) => { const y = 5.7 - i * 0.72; box(s, 0.6 + i * 0.35, y, 3.6, 0.6, TEAL); T(s, t, 0.75 + i * 0.35, y, 3.3, 0.6, { fontSize: 14, bold: true, color: NAVY }); });
  T(s, "6 cấp · Event ROI Institute", 6.6, 1.85, 6.0, 0.45, { bold: true, fontSize: 16, color: YEL });
  l6.forEach((t, i) => { const y = 5.95 - i * 0.68; box(s, 6.6 + i * 0.35, y, 4.1, 0.56, i === 0 ? PINK : YEL); T(s, t, 6.75 + i * 0.35, y, 3.8, 0.56, { fontSize: 14, bold: true, color: NAVY }); });
  src(s, "Nguồn: Phillips, Breining & Phillips (2008) (T11); Event ROI Institute (T11). Phát triển từ mô hình Kirkpatrick (1959).", 6.7);
  notes(s, {
    say: "Quan hệ được xây bằng từng sự kiện, nên agency cần đo giá trị mỗi sự kiện giao cho Key Account. Phương pháp phổ biến là ROI Methodology, phát triển từ mô hình đánh giá đào tạo của Kirkpatrick, được Jack Phillips và ROI Institute đưa vào vận hành. Bản 5 cấp: phản ứng, học được gì, áp dụng, tác động, ROI. Event ROI Institute dùng bản 6 cấp, thêm cấp 0 — đúng người tham dự; cấp 2 có cả học về quan hệ; cấp 4 phải tách riêng tác động của sự kiện; và với sự kiện hiệp hội, nhà nước, sứ mệnh thay cho ROI. Chung một logic: đặt mục tiêu từ trên xuống, đo từ dưới lên.",
    gv: "T11 (sách Phillips et al., 2008; Event ROI Institute). Quyết định GV: dạy cả hai phiên bản. Thực tế hầu hết tổ chức chỉ đo cấp 1 (T11). Amex GBT: khoảng 1/4 tổ chức có chỉ số ROI trong chính sách sự kiện; đề xuất Return on Experience (T12, chưa KCC) [VERIFY 24%/26%].",
    next: "Khung 6 cấp khác gì?",
  });

  // 24 six-level differences
  s = slide("Khung 6 cấp thêm “đúng người”, “học về quan hệ”, và “sứ mệnh thay ROI”");
  const d6 = [["0", "Đúng người tham dự", "Mời những người có khoảng trống lớn nhất về hiểu biết và hành vi", PINK], ["2", "Học về quan hệ", "Learning gồm cả relationship learning — người tham dự hiểu và gắn với tổ chức hơn", YEL], ["5", "Sứ mệnh thay ROI", "Sự kiện hiệp hội, nhà nước: đo theo mục tiêu sứ mệnh", TEAL]];
  d6.forEach(([k, a, b, c], i) => { const y = 1.95 + i * 1.2; num(s, k, 0.6, y + 0.07, 0.85, c, 22); box(s, 1.65, y, 6.4, 1.0); T(s, a, 1.85, y, 2.3, 1.0, { bold: true, fontSize: 16, color: c }); T(s, b, 4.15, y, 3.8, 1.0, { fontSize: 14 }); });
  box(s, 8.3, 1.95, 4.43, 3.4, YEL);
  T(s, "“Meetings and events create value to stakeholders by influencing the behavior of the participants.”", 8.5, 2.05, 4.03, 2.4, { fontSize: 17, italic: true, bold: true, color: NAVY, valign: "top" });
  T(s, "— Event ROI Institute (T11)", 8.5, 4.6, 4.03, 0.5, { fontSize: 13, color: NAVY });
  T(s, "Khách hài lòng 4,5/5 mới là cấp 1 — và chỉ là biến đại diện. Sự kiện thành công khi người tham dự làm điều gì đó khác đi.", 0.6, 5.6, 12.13, 0.8, { fontSize: 16, bold: true, color: PINK });
  notes(s, {
    say: "Ba điểm khác của khung 6 cấp. Cấp 0 — đúng người tham dự: mời những người có khoảng trống lớn nhất về hiểu biết và hành vi. Cấp 2 — gồm cả học về quan hệ. Cấp 5 — với sự kiện hiệp hội, nhà nước, sứ mệnh thay cho ROI. Event ROI Institute nói: sự kiện tạo giá trị cho các bên bằng cách tác động đến hành vi của người tham dự. Vậy khách hài lòng 4,5 trên 5 mới là cấp 1 — và chỉ là biến đại diện. Sự kiện thành công khi người tham dự làm điều gì đó khác đi.",
    gv: "T11 nguyên văn. W08 lecture notes §2.2, §2.4.",
    next: "Phiên bản nào hợp với Việt Nam?",
  });

  // 25 Vietnam fit
  s = slide("Với agency Việt Nam: khung 6 cấp, bản rút gọn");
  const vf = [["Khoảng cách quyền lực cao", "PDI 70 (Mỹ 40)", "Lãnh đạo khách quyết định danh sách mời → cấp 0 đo được"], ["Tập thể, coi trọng quan hệ", "IDV 20; thể diện, có qua có lại, tình cảm", "Giá trị lớn là quan hệ → cấp 2 có “học về quan hệ”"], ["Quan hệ dài hạn có giá trị kinh tế", "McMillan & Woodruff (1999)", "Kết quả đến muộn → chấp nhận ước lượng của người tham dự"], ["Né tránh bất định thấp", "UAI 30", "Bộ đo nặng khó duy trì → vài KPI then chốt"], ["Nhiều sự kiện nhà nước, hiệp hội", "Buổi 7", "Sứ mệnh thay cho ROI"]];
  vf.forEach((r, i) => { const y = 1.95 + i * 0.85; [[0.6, 3.6, TEAL], [4.3, 3.2, CARD], [7.6, 5.13, CARD]].forEach(([x, w, c], j) => { box(s, x, y, w - 0.1, 0.75, c); T(s, r[j], x + 0.15, y, w - 0.4, 0.75, { fontSize: 13, bold: j === 0, color: j === 0 ? NAVY : TX }); }); });
  src(s, "Nhận định của người soạn (đã duyệt), dựa trên T11, T12, T16 (Hofstede), T17, T18. Điểm quốc gia là xu hướng — không đóng khung từng khách hàng.", 6.3);
  notes(s, {
    say: "Phiên bản nào hợp với kinh doanh Việt Nam? Nhận định đã được duyệt. Khoảng cách quyền lực cao — Hofstede: Việt Nam 70, Mỹ 40 — lãnh đạo khách quyết định danh sách mời, nên cấp 0 biến “mời đúng người” thành chỉ số đo được. Tập thể, coi trọng quan hệ — giá trị lớn của nhiều sự kiện là quan hệ, nên cấp 2 có “học về quan hệ”. Quan hệ dài hạn có giá trị kinh tế — kết quả đến muộn, nên chấp nhận ước lượng của người tham dự. Né tránh bất định thấp — bộ đo nặng khó duy trì, nên dùng vài KPI then chốt. Nhiều sự kiện nhà nước, hiệp hội — sứ mệnh thay cho ROI. Lưu ý: điểm Hofstede là xu hướng quốc gia, không dùng để đóng khung một khách hàng.",
    gv: "W08 lecture notes §2.3. [VERIFY: chưa có nguồn thực nghiệm về độ lệch khảo sát do thể diện tại Việt Nam — vì vậy khuyên bổ sung chỉ số hành vi quan sát được.]",
    next: "Agency cam kết đến đâu?",
  });

  // 26 commit split
  s = slide("Agency cam kết và báo cáo cấp 0–3; cấp 4–5 thống nhất và đo cùng Key Account");
  [["0 Đúng người", PINK], ["1 Hài lòng", YEL], ["2 Learning", YEL], ["3 Behaviour", YEL], ["4 Impact", BLUE], ["5 ROI / sứ mệnh", BLUE]].forEach(([t, c], i) => { const y = 5.65 - i * 0.68; box(s, 0.6 + i * 0.4, y, 4.2, 0.56, c); T(s, t, 0.75 + i * 0.4, y, 3.9, 0.56, { fontSize: 14, bold: true, color: NAVY }); });
  box(s, 7.3, 1.95, 5.43, 1.9, BLUE);
  T(s, "Cấp 4–5: chỉ đo khi Key Account đồng ý chia sẻ dữ liệu — thống nhất từ đầu trong buổi đánh giá chung (8.3).", 7.5, 1.95, 5.03, 1.9, { fontSize: 16, bold: true, color: NAVY });
  box(s, 7.3, 4.05, 5.43, 2.2, YEL);
  T(s, "Cấp 0–3: Nova kiểm soát được nhiều → chủ động cam kết và báo cáo. Bổ sung chỉ số hành vi quan sát được (đặt lịch gặp sau sự kiện).", 7.5, 4.05, 5.03, 2.2, { fontSize: 16, bold: true, color: NAVY });
  src(s, "W08 lecture notes §2.3 — cách dùng khuyến nghị (đã duyệt).", 6.45);
  notes(s, {
    say: "Cách dùng khuyến nghị. Cấp 0 đến 3: Nova kiểm soát được nhiều, nên chủ động cam kết và báo cáo — và bổ sung chỉ số hành vi quan sát được, như số doanh nghiệp đặt lịch gặp sau sự kiện. Cấp 4 và 5: tác động và ROI nằm trong dữ liệu của ngân hàng — chỉ đo khi An Phát đồng ý chia sẻ dữ liệu, và thống nhất từ đầu trong buổi đánh giá chung. Agency chủ động đề xuất bộ chỉ số là một giá trị cộng thêm — nối Buổi 5.",
    gv: "Hiểu lầm: “chỉ số là việc của khách hàng” → Key Account thường còn yếu trong đo lường (T12).",
    next: "8.3: đánh giá chung.",
  });

  // 27 joint review
  s = slide("Đánh giá chung là họp hai bên, không phải khách chấm điểm agency");
  const ag = [["Hỏi thăm quan hệ", TEAL], ["Đã hứa gì – đã làm gì", YEL], ["Kết quả theo chỉ số đã thống nhất", ORA], ["Đánh giá hai chiều", PINK], ["Đề xuất quý tới + đặt lịch buổi sau", BLUE]];
  ag.forEach(([t, c], i) => { const y = 1.95 + i * 0.85; num(s, i + 1, 0.6, y + 0.04, 0.65, c, 18); box(s, 1.4, y, 5.6, 0.72); T(s, t, 1.6, y, 5.3, 0.72, { fontSize: 16, bold: true }); });
  box(s, 7.3, 1.95, 5.43, 4.3);
  T(s, "Giáo trình: biến kết quả đo thành hiểu biết", 7.5, 2.05, 5.03, 0.5, { bold: true, fontSize: 16, color: YEL });
  T(s, "Phân tích kết quả khảo sát, rồi xin họp với khách để hiểu “vì sao” — qua các cặp chức năng (kỹ sư với kỹ sư, pháp chế với pháp chế). Làm vậy vừa hiểu khách hơn, vừa xây gắn kết cá nhân — tức là vẽ thêm các cạnh của Diamond.", 7.5, 2.6, 5.03, 3.5, { fontSize: 15, valign: "top" });
  src(s, "Nguồn: T13 (khảo sát 165 agency kỹ thuật số: 66% có QBR chính thức — chưa KCC); Marcos et al. (2018, tr. 214–215).", 6.45);
  notes(s, {
    say: "Đề cương mục 8.3. Nhiều agency họp đánh giá theo quý — QBR. Một khảo sát 165 agency kỹ thuật số: 66% có QBR chính thức cho tất cả hoặc một phần khách hàng. Với event agency, nhịp có thể theo quý hoặc theo mùa sự kiện của Key Account. Chương trình năm phần: hỏi thăm quan hệ; đã hứa gì, đã làm gì; kết quả theo chỉ số đã thống nhất; đánh giá hai chiều; đề xuất quý tới và đặt lịch buổi sau ngay tại chỗ. Giáo trình gợi ý thêm: sau khi phân tích khảo sát, xin họp với khách để hiểu “vì sao”, qua các cặp chức năng tương ứng. Vừa hiểu khách hơn, vừa xây gắn kết cá nhân — tức là vẽ thêm các cạnh của Diamond.",
    gv: "T13 (agency kỹ thuật số, không phải event agency — chưa KCC). Marcos et al. (2018), “Linking performance to insights” (tr. 214–215): “request a meeting with the customer to discuss the findings… inter-company conversations across the different functional areas… establishes social ties and interpersonal bonds”. Ai dự: lãnh đạo hai bên (T06).",
    next: "Phần thứ tư — đánh giá hai chiều.",
  });

  // 28 two-way
  s = slide("Đánh giá hai chiều cho agency cơ hội góp ý mà không làm ai mất thể diện");
  const tw = [["82%", "doanh nghiệp đánh giá agency định kỳ", TEAL], ["59%", "dùng đánh giá hai chiều (360 độ): agency cũng đánh giá khách hàng", YEL]];
  tw.forEach(([a, b, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 1.95, 3.9, 3.3); T(s, a, x, 2.1, 3.9, 1.3, { fontSize: 50, bold: true, color: c, align: "center" }); T(s, b, x + 0.25, 3.45, 3.4, 1.6, { fontSize: 16, align: "center", valign: "top" }); });
  box(s, 8.86, 1.95, 3.87, 3.3, PINK);
  T(s, "Dịp chính thức để nói về duyệt kịch bản chậm, đổi brief sát ngày — như một phần của quy trình, không phải lời phàn nàn.", 9.06, 1.95, 3.47, 3.3, { fontSize: 16, bold: true, color: NAVY });
  T(s, "Thực hành tốt: người điều phối trung lập · mẫu đánh giá thống nhất · kế hoạch hành động sau đánh giá.", 0.6, 5.45, 12.13, 0.6, { fontSize: 16, color: YEL });
  src(s, "Nguồn: ANA (2009), T14 — khảo sát ở Mỹ, nguồn cũ.", 6.45);
  notes(s, {
    say: "Khảo sát của ANA ở Mỹ năm 2009: 82% doanh nghiệp đánh giá agency định kỳ; 59% dùng đánh giá hai chiều — agency cũng đánh giá khách hàng. Thực hành tốt: người điều phối trung lập, mẫu đánh giá thống nhất, kế hoạch hành động sau đánh giá. Nhận định: với văn hóa coi trọng thể diện, đây là dịp chính thức để agency nói những điều khách làm khiến chất lượng giảm — duyệt kịch bản chậm, đổi brief sát ngày — như một phần của quy trình, không phải lời phàn nàn. Đây chính là xung đột chức năng ở Buổi 4.",
    gv: "T14 nguyên văn: “Two-way, or 360-degree, evaluations in which the agency also evaluates the client are used by a majority of firms (59 percent).” Nguồn 2009 — nói rõ là cũ.",
    next: "Dữ liệu cho buổi đánh giá đến từ đâu?",
  });

  // 29 PER
  s = slide("Mỗi sự kiện một báo cáo; nhiều báo cáo là trí nhớ của quan hệ");
  const pr = [["Họp ngay sau sự kiện", TEAL], ["Hoàn thành báo cáo trong 60 ngày", YEL], ["Nhiều báo cáo = lịch sử của sự kiện", PINK]];
  pr.forEach(([t, c], i) => { const x = 0.6 + i * 4.13; box(s, x, 2.0, 3.9, 1.5, c); T(s, t, x + 0.2, 2.0, 3.5, 1.5, { align: "center", bold: true, fontSize: 18, color: NAVY }); if (i < 2) arrow(s, x + 3.92, 2.55, 0.2, 0.4, MU); });
  box(s, 0.6, 3.8, 12.13, 1.1, CARD);
  T(s, "“A collection of PERs over time will provide the complete history for an event.” — APEX Post-Event Report (T15)", 0.85, 3.8, 11.7, 1.1, { fontSize: 17, italic: true });
  T(s, "Khi đầu mối phía khách thay người, báo cáo sau sự kiện là thứ giúp anh Minh hiểu ba năm qua.", 0.6, 5.15, 12.13, 0.8, { fontSize: 18, bold: true, color: YEL });
  src(s, "Nguồn: Convention Industry Council (2005), mẫu APEX PER — vốn dùng giữa nhà tổ chức và địa điểm; áp dụng logic cho agency – Key Account là nhận định.", 6.45);
  notes(s, {
    say: "Mẫu APEX Post-Event Report của ngành: họp trực tiếp ngay sau sự kiện, hoàn thành báo cáo trong 60 ngày, và nhiều báo cáo cộng lại thành lịch sử của sự kiện. Mẫu này vốn dùng giữa nhà tổ chức và địa điểm. Agency mượn logic cho quan hệ với Key Account: báo cáo sau từng sự kiện là dữ liệu đầu vào cho buổi đánh giá chung — và khi đầu mối thay người, đó là trí nhớ của quan hệ. Chính là thứ giúp anh Minh hiểu ba năm qua.",
    gv: "T15 nguyên văn. Mẫu 2003/2005 — nói rõ là mẫu cũ, dùng logic, không dùng nguyên mẫu.",
    next: "Và dấu hiệu cảnh báo sớm.",
  });

  // 30 warning signs
  s = slide("Khách hàng hiếm khi báo trước là sẽ rời đi — hãy theo dõi năm dấu hiệu");
  const ws2 = [["FaHourglassHalf", "Trả lời chậm hơn"], ["FaCalendarTimes", "Bỏ buổi đánh giá"], ["FaLevelDownAlt", "Giao quan hệ cho người cấp thấp hơn"], ["FaMoneyBillWave", "Thanh toán chậm"], ["FaUserSlash", "Đầu mối phía khách thay người"]];
  for (let i = 0; i < 5; i++) { const x = 0.6 + i * 2.47; box(s, x, 1.95, 2.25, 2.8); await ic(s, ws2[i][0], x + 0.62, 2.15, 1.0, i === 4 ? PINK : ORA); T(s, ws2[i][1], x + 0.12, 3.3, 2.0, 1.3, { align: "center", fontSize: 15, bold: true, valign: "top" }); }
  box(s, 0.6, 5.0, 12.13, 1.25, PINK);
  T(s, "“An account that runs through a single client contact ends when that contact changes jobs.” — tin nhắn của chị Hạnh là dấu hiệu lớn nhất.", 0.85, 5.0, 11.7, 1.25, { fontSize: 17, bold: true, color: NAVY });
  src(s, "Nguồn: T13 (88% agency theo dõi ít nhất một chỉ số “sức khỏe” khách hàng — chưa KCC).", 6.45);
  notes(s, {
    say: "Theo khảo sát T13, 88% agency theo dõi ít nhất một chỉ số sức khỏe khách hàng. Khách hàng hiếm khi báo trước là sẽ rời đi. Năm dấu hiệu thường gặp: trả lời chậm hơn; bỏ buổi đánh giá; giao quan hệ cho người cấp thấp hơn; thanh toán chậm; và đầu mối phía khách thay người. Tin nhắn của chị Hạnh là dấu hiệu lớn nhất trong danh sách này — và Nova chỉ có một sợi dây.",
    gv: "T13 nguyên văn câu trích. Hiểu lầm: “không có vấn đề thì không cần họp” → khoảng lặng giữa các lần gặp là lúc dễ mất khách nhất (T13).",
    next: "Một lưu ý đạo đức.",
  });

  // 31 ethics
  s = slide("Mở rộng quan hệ minh bạch — không “đi cửa sau” qua đầu người đầu mối");
  box(s, 0.6, 1.95, 6.0, 3.6);
  await ic(s, "FaCheck", 0.85, 2.2, 0.85, TEAL);
  T(s, "Nên", 1.9, 2.2, 4.5, 0.85, { bold: true, fontSize: 20, color: TEAL });
  T(s, bullets(["Báo đầu mối trước khi gặp sếp hoặc bộ phận khác của khách", "Báo cáo số liệu cả tốt lẫn xấu", "Giữ bí mật dữ liệu khách chia sẻ trong buổi đánh giá"]), 0.9, 3.2, 5.5, 2.2, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  box(s, 6.85, 1.95, 5.88, 3.6);
  await ic(s, "FaTimes", 7.1, 2.2, 0.85, PINK);
  T(s, "Không", 8.15, 2.2, 4.4, 0.85, { bold: true, fontSize: 20, color: PINK });
  T(s, bullets(["Vượt mặt đầu mối để “nói chuyện thẳng với sếp”", "Chọn lọc phiếu khảo sát để điểm hài lòng đẹp hơn", "Mang quan hệ cá nhân của KAMer cũ đi khi đổi việc"]), 7.15, 3.2, 5.4, 2.2, { fontSize: 16, valign: "top", paraSpaceAfter: 6 });
  T(s, "Diamond xây bằng sự đồng ý của khách — không bằng việc đi vòng qua người đang làm việc với mình.", 0.6, 5.85, 12.13, 0.6, { fontSize: 18, bold: true, color: YEL });
  notes(s, {
    say: "Mở rộng quan hệ phải minh bạch. Nên: báo đầu mối trước khi gặp sếp hoặc bộ phận khác của khách; báo cáo số liệu cả tốt lẫn xấu; giữ bí mật dữ liệu khách chia sẻ trong buổi đánh giá. Không: vượt mặt đầu mối để nói chuyện thẳng với sếp — mất thể diện của người đầu mối, mất niềm tin; chọn lọc phiếu khảo sát cho điểm đẹp; và không mang quan hệ cá nhân với khách đi khi đổi việc như tài sản riêng. Diamond xây bằng sự đồng ý của khách — không bằng việc đi vòng qua người đang làm việc với mình.",
    gv: "Nguyên tắc nghề nghiệp, nối Buổi 4 (thể diện, niềm tin – integrity) và CLO8. [NEEDS PROFESSOR INPUT: nếu muốn nêu quy định về cam kết không lôi kéo khách hàng khi nghỉ việc, cần mẫu hợp đồng lao động cụ thể.]",
    next: "Thực hành 2: buổi đánh giá chung đầu tiên với anh Minh.",
  });

  // 32 practice 2
  s = await L.practice("Thực hành 2 · 30 phút: 10 phút với anh Minh — buổi đánh giá chung đầu tiên", [["3’", "Phát thẻ vai: 3 cặp — đội Nova (CEO, KAMer, Producer) và đội An Phát (anh Minh, chị Lan, anh Khoa); mỗi nhóm 1 người quan sát", TEAL], ["8’", "Chuẩn bị: đội Nova dựng chương trình 10 phút theo 5 phần, dùng sơ đồ Thực hành 1 và bảng dữ liệu 6 cấp", YEL], ["10’", "Họp: Nova dẫn; biên bản 3 dòng — thống nhất gì · chỉ số nào theo dõi chung · buổi sau khi nào, ai dự", PINK], ["9’", "Lật thẻ (3’) và tổng kết toàn lớp (6’)", BLUE]], "FaClipboardCheck", "Sản phẩm", "Biên bản 3 dòng + phiếu quan sát", "Gala: cấp 0–3 có dữ liệu; cấp 4–5 là dữ liệu của ngân hàng.", YEL);
  notes(s, {
    say: "Thực hành 2, 30 phút. Ngày 20/2, anh Minh đồng ý dành 10 phút gặp Nova; trong Quý 1 anh phải rà soát mọi nhà cung cấp dịch vụ marketing. Ba cặp: đội Nova — CEO anh Đức, KAMer chị Thảo, Producer; đội An Phát — anh Minh, chị Lan, anh Khoa; mỗi nhóm cử một người quan sát. Tám phút chuẩn bị: đội Nova dựng chương trình 10 phút theo 5 phần, dùng sơ đồ Thực hành 1 và bảng dữ liệu 6 cấp. Mười phút họp, Nova dẫn, kết thúc bằng biên bản ba dòng: thống nhất gì, chỉ số nào sẽ theo dõi chung, buổi đánh giá sau khi nào và ai dự. Rồi lật thẻ và tổng kết. Nhớ: dữ liệu gala có cấp 0 đến 3; cấp 4–5 là dữ liệu của ngân hàng.",
    gv: "Phiếu W08_activity_S6_danh_gia_chung.md (bảng dữ liệu: 540/600 khách; 4,5/5; 72% “biết thêm”; 35 doanh nghiệp đặt lịch gặp trong 2 tuần). Mốc phút 95–125. Chiếu slide 26 và 27.",
    next: "Tổng hợp.",
  });

  // 33 summary
  s = slide("Ba ý của Buổi 8 — và một trang mới cho kế hoạch");
  const sm = [["8.1", "Bow-tie → Diamond là lộ trình theo giai đoạn; Diamond đưa quan hệ từ người với người thành tổ chức với tổ chức — vẽ theo giá trị thực", TEAL], ["8.2", "Đo cả chỉ số kết quả (xác nhận) và quá trình (báo trước); từng sự kiện: khung 6 cấp rút gọn — agency cam kết 0–3, cùng khách thống nhất 4–5", YEL], ["8.3", "Đánh giá chung định kỳ, hai chiều, có số liệu; biến kết quả đo thành hiểu biết; theo dõi dấu hiệu cảnh báo sớm", PINK]];
  sm.forEach(([k, t, c], i) => { const y = 1.95 + i * 1.25; box(s, 0.6, y, 1.3, 1.05, c); T(s, k, 0.6, y, 1.3, 1.05, { align: "center", bold: true, color: NAVY, fontSize: 22 }); box(s, 2.1, y, 10.63, 1.05); T(s, t, 2.35, y, 10.2, 1.05, { fontSize: 15 }); });
  box(s, 0.6, 5.85, 12.13, 0.8, BLUE);
  T(s, "Kế hoạch cuối kỳ: sơ đồ tiếp xúc hiện tại → mục tiêu, 3 chỉ số quá trình + 3 chỉ số kết quả, nhịp đánh giá chung — với khách hàng dự án cũ.", 0.85, 5.85, 11.7, 0.8, { fontSize: 15, bold: true, color: NAVY });
  notes(s, {
    say: "Ba ý của Buổi 8. Mục 8.1: bow-tie sang diamond là lộ trình theo giai đoạn; diamond đưa quan hệ từ người với người thành tổ chức với tổ chức — và vẽ theo giá trị thực mình tạo ra. Mục 8.2: đo cả chỉ số kết quả và chỉ số quá trình; với từng sự kiện, dùng khung 6 cấp rút gọn — agency cam kết cấp 0 đến 3, cùng khách thống nhất cấp 4–5. Mục 8.3: đánh giá chung định kỳ, hai chiều, có số liệu; biến kết quả đo thành hiểu biết; theo dõi dấu hiệu cảnh báo sớm. Kế hoạch cuối kỳ: thêm sơ đồ tiếp xúc, chỉ số, và nhịp đánh giá chung cho khách hàng dự án cũ.",
    next: "Ba câu kiểm tra nhanh.",
  });

  // 34 quick check
  s = L.quickCheck(["Vì sao Bow-tie không “sai” — và khi nào nên chuyển sang Diamond?", "Cho một chỉ số quá trình và một chỉ số kết quả trong quan hệ agency – Key Account.", "Vì sao đánh giá chung phải là hai chiều?"]);
  notes(s, { say: "Ba câu kiểm tra nhanh. Một: vì sao bow-tie không sai — và khi nào nên chuyển sang diamond? Hai: cho một chỉ số quá trình và một chỉ số kết quả trong quan hệ agency – Key Account. Ba: vì sao đánh giá chung phải là hai chiều?", gv: "Gợi ý: (1) hợp giai đoạn đầu; chuyển khi quan hệ đủ sâu và Key Account đáng đầu tư; (2) quá trình: nhịp gặp lãnh đạo, số đầu mối; kết quả: doanh thu, tái ký, share of wallet; (3) để agency góp ý mà không mất thể diện; để thấy khoảng cách cảm nhận hai phía (Buổi 4).", ask: "Gọi ngẫu nhiên 1 bạn cho mỗi câu.", next: "Phiếu cuối giờ." });

  // 35 exit
  s = await L.exitTicket("Quan hệ với khách hàng trong dự án cũ là Bow-tie hay Diamond? Nếu người đầu mối nghỉ việc, nhóm còn gọi được ai?", "Một chỉ số quá trình nhóm có thể đề xuất theo dõi chung với khách hàng đó là gì?");
  notes(s, { say: "Phiếu cuối giờ. Một: quan hệ với khách hàng trong dự án cũ là bow-tie hay diamond — nếu người đầu mối nghỉ việc, nhóm còn gọi được ai? Hai: một chỉ số quá trình nhóm có thể đề xuất theo dõi chung với khách hàng đó là gì?", gv: "Xem: (a) SV nhận ra bow-tie thật trong dự án của mình; (b) chỉ số quá trình đo được, có nhịp, hai bên cùng thấy.", next: "Buổi sau." });

  // 36 next
  s = await L.nextSession("Không có bài về nhà. Buổi 9: ghép nhà đầu tư và nhà tài trợ vào hành trình của Key Account", "Buổi 9 · Nhà đầu tư và nhà tài trợ", "Mở đầu Phần 3: điều phối các bên liên quan. Ghép nhà tài trợ, nhà đầu tư vào hành trình của An Phát để tạo thêm giá trị cho khách của An Phát.", ["Ảnh sơ đồ Diamond và biên bản họp", "Hồ sơ dự án cũ (phần nhà tài trợ, nếu có)"]);
  notes(s, { say: "Không có bài về nhà. Buổi 9 mở đầu Phần 3 của môn — điều phối các bên liên quan. Ta ghép nhà đầu tư và nhà tài trợ vào hành trình của An Phát để tạo thêm giá trị cho khách của An Phát. Mang theo ảnh sơ đồ diamond, biên bản họp và hồ sơ dự án cũ — phần nhà tài trợ nếu có.", gv: "[NEEDS PROFESSOR INPUT: nếu AM2 có bài cho Buổi 8 thì thêm vào đây.]", next: "Tài liệu tham khảo." });

  // 37 refs
  s = L.refs([
    [["Association of National Advertisers. (2025, April). "], ["New ANA and 4As report reveals client-agency relationship tenure has doubled since 2016", 1], [" [Press release]."]],
    [["Côté, D. (2021, October 26). "], ["From executive sponsorship to executive engagement", 1], [". Strategic Account Management Association."]],
    [["Fakhreddin, F., Foroudi, P., & Kooli, K. (2025). The influence of key account management on competitive advantage and firm performance. "], ["Industrial Marketing Management, 124", 1], [", 266–286."]],
    [["Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). "], ["Implementing key account management: Designing customer-centric processes for mutual growth", 1], [". Kogan Page."]],
    [["McDonald, M., Millman, T., & Rogers, B. (1997). Key account management: Theory, practice and challenges. "], ["Journal of Marketing Management, 13", 1], ["(8), 737–757."]],
    [["Phillips, J. J., Breining, M. T., & Phillips, P. P. (2008). "], ["Return on investment in meetings and events", 1], [". Elsevier/Butterworth-Heinemann."]],
    [["Spencer Stuart. (2025). "], ["CMO tenure study 2025: The evolution of marketing leadership", 1], ["."]],
    [["Tzempelikos, N., & Gounaris, S. (2015). Linking key account management practices to performance outcomes. "], ["Industrial Marketing Management, 45", 1], [", 22–34."]],
  ]);
  notes(s, { say: "Tài liệu tham khảo của Buổi 8, theo APA 7. Chương 4, 8 và 10 của Marcos và cộng sự là phần đọc thêm.", gv: "Các nguồn khác (T03–T05, T12–T18): danh mục APA đầy đủ trong buoi-08_tu-lieu-tong-hop.md, mục 6.", next: "—" });

  await L.pres.writeFile({ fileName: OUT });
  console.log("wrote", OUT, L.n, "slides");
})();
