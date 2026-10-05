# Dàn ý slide + lời giảng — Buổi 4

MKT1107 Nghiên cứu Marketing · Buổi 4 · 32 slide

> Mỗi slide gồm: **Tiêu đề** (viết thành một nhận định — đọc riêng các tiêu đề là thấy mạch bài),
> **Nội dung** (tối đa 3–4 dòng ngắn), **Hình** (mô tả + chú thích thay thế cho người dùng trình đọc
> màn hình), **Lời giảng** (gợi ý nói, câu hỏi, lúc dừng). Nội dung chi tiết nằm trong
> `W4_lecture_notes.md`.
>
> Tái sử dụng slide UEF Bài 3 ở đâu được thì ghi **[UEF #n]** (số thứ tự slide trong file Bài 3).
> Slide UEF cần sửa trước khi dùng:
> - **#1**: bỏ dòng "TÀI LIỆU CHIẾN LƯỢC TỔNG HỢP | BÀI 3"; thêm "Buổi 4" và tên giảng viên.
> - **Mọi slide**: xóa chữ "NotebookLM" ở chân slide.
> - **#4** (lịch sử): sửa "manh nha"; mốc hệ chuyên gia theo tài liệu học tập (1960s–1980s); thêm mốc
>   Deep Blue 1997 và ChatGPT cuối 2022.
> - **#5** (chuỗi giá trị): đổi sang 6 tầng của tài liệu học tập (thêm tầng **dữ liệu**; gộp "kho mô hình
>   & MLOps" vào "nền tảng / công cụ phát triển"; "dịch vụ" ghép vào tầng ứng dụng); bỏ tên doanh nghiệp.
> - **#9** (Trọng tâm 1, dùng ở Buổi 5): tiêu đề lặp chữ "Khoa Học Học"; ô "Phát hiện quy luật" lặp 2 lần.
> - **#18** (R-T-F, dùng ở Buổi 5): ví dụ yêu cầu AI lập bảng "tác giả, năm, trích dẫn" — chính là kiểu
>   câu lệnh dễ sinh trích dẫn bịa; cần thêm dòng "kiểm chứng từng nguồn" hoặc đổi ví dụ.
>
> Màu sắc: nếu dùng màu để phân biệt kết luận kiểm chứng (Đúng / Sai chi tiết / Không xác minh được),
> luôn kèm nhãn chữ — không chỉ dựa vào màu.

---

## S1 · Khởi động — kiểm tra M2 (0–8')

**Slide 1 — Bài 3: AI hỗ trợ nghiên cứu khoa học và marketing** [UEF #1 — đã sửa]
- Nội dung: tên học phần, Buổi 4, giảng viên: **Đoàn Nguyễn Bảo Quyên**.
- Lời giảng: *(Chưa vào bài. Chuyển ngay sang slide 2 — nhìn lại M2.)*

**Slide 2 — M2 đã nộp: ba lỗi APA 7 cần sửa trước khi viết M3**
- Nội dung: 3 dòng Sai → Đúng: `Lê Quang Hùng (2017)` → `Lê, Q. H. (2017)` · `doi:10.13106/...` →
  `https://doi.org/10.13106/...` · trích trong bài ≠ danh mục → mỗi trích dẫn một mục.
- Lời giảng: Thay bằng 3 lỗi thực tế ở bài M2 nếu khác `[NEEDS PROFESSOR INPUT]`. Không nêu tên nhóm.
  "Danh mục này đi tiếp vào M3 — sửa ngay từ bây giờ."

**Slide 3 — Nhóm bạn tìm tài liệu bằng cách nào?**
- Nội dung: một câu hỏi lớn + dòng nhỏ: "Nếu AI đưa cho bạn 5 tài liệu — bạn tin bao nhiêu?"
- Lời giảng: Chỉ định 2 nhóm. Nếu có nhóm dùng chatbot, hỏi tiếp "đã mở từng bài chưa?" — không phê
  phán. Chuyển sang câu đố.

## S2 · Câu đố mở đầu (8–13')

**Slide 4 — Câu trả lời này trông rất chuyên nghiệp: bao nhiêu trích dẫn là đúng?**
- Nội dung: câu lệnh (1 dòng) + 3 trích dẫn trong khung "câu trả lời của AI" (trích dẫn 1, 2, 4 của phụ
  lục B phiếu hoạt động). Dòng cuối: "Giơ 0 – 1 – 2 – 3 ngón."
- Hình: khung giống giao diện trò chuyện, nhãn "Chatbot (giả định)". Chú thích thay thế: "Ảnh minh họa
  một câu trả lời chatbot liệt kê ba bài báo khoa học kèm tác giả, năm, tạp chí và DOI."
- Lời giảng: Để lớp đọc 1 phút. Đếm 3–2–1, cả lớp giơ tay cùng lúc. Ghi kết quả dự đoán lên góc bảng.
  **Không công bố đáp án** — "cuối buổi các bạn tự tìm ra".

**Slide 5 — Hôm nay: hiểu AI hoạt động thế nào để biết vì sao phải kiểm chứng nó** [UEF #2]
- Nội dung: 3 hồi của Bài 3; đánh dấu "Buổi 4: Hồi I + ảo giác" · "Buổi 5: Hồi II–III".
- Lời giảng: "Muốn biết vì sao một cỗ máy viết ra trích dẫn trông như thật mà không thật, phải biết nó
  học như thế nào."

## S3 · AI là gì, và đã phát triển như thế nào (13–43')

**Slide 6 — Phần mềm thông thường làm theo luật người viết; AI tự rút ra luật từ dữ liệu** [UEF #3]
- Nội dung: hai cột: Lập trình truyền thống: **Dữ liệu + Quy tắc → Đáp án** · AI / học máy: **Dữ liệu +
  Đáp án → Quy tắc**. Định nghĩa AI 1 dòng ở trên.
- Hình: giữ hai cột của UEF #3. Chú thích thay thế: "So sánh hai công thức: lập trình truyền thống tạo
  ra đáp án, học máy tạo ra quy tắc."
- Lời giảng: Viết hai công thức lên bảng, giữ suốt buổi. "Khác nhau ở chỗ: ai viết ra quy tắc — người
  hay máy?"

**Slide 7 — Tính học phí là áp luật; nhận ra thư rác là học từ ví dụ**
- Nội dung: trái — học phí = số tín chỉ × đơn giá (luật có sẵn). Phải — hàng nghìn thư đã gắn nhãn "rác
  / không rác" → máy tự rút dấu hiệu.
- Hình: biểu tượng máy tính tiền bên trái; chồng thư có nhãn bên phải. Chú thích thay thế: "Ví dụ lập
  trình truyền thống là tính học phí; ví dụ học máy là bộ lọc thư rác học từ thư đã gắn nhãn."
- Lời giảng: Hỏi: "Bộ lọc xếp nhầm email báo điểm vào thư rác — lỗi do ai?" → không có người viết sai
  luật; máy học từ dữ liệu.

**Slide 8 — Luật thì giải thích được; học máy làm được việc khó nhưng có thể sai mà không biết vì sao**
- Nội dung: bảng 2 dòng: Điểm mạnh · Điểm yếu cho từng cách (theo tài liệu học tập 3.1).
- Lời giảng: Nhấn điểm yếu của học máy: "phụ thuộc chất lượng dữ liệu" — dẫn sang slide 9.

**Slide 9 — AI chỉ tốt bằng dữ liệu nó đã học**
- Nội dung: Dữ liệu thiên lệch → kết quả thiên lệch · Dữ liệu cũ → kết quả lạc hậu. Ví dụ minh họa: AI
  phân tích tuyển dụng học từ dữ liệu có định kiến → ưu ái một số nhóm.
- Lời giảng: Ví dụ tuyển dụng là ví dụ minh họa từ video, không có tên doanh nghiệp hay số liệu. Hỏi câu
  liên hệ (giả định): "AI học từ bình luận mỹ phẩm chủ yếu ở thành phố lớn — dùng để kết luận về sinh
  viên ở tỉnh thì sao?" Nối Buổi 1: "hỏi sai người thì kết luận sai".

**Slide 10 — Hơn 70 năm: từ câu hỏi của Turing đến ChatGPT** [UEF #4 — đã sửa]
- Nội dung: dòng thời gian 6 mốc: 1950 Turing · 1956 Dartmouth · 1960s–1980s hệ chuyên gia, "mùa đông
  AI" · 1990s–2000s học máy, Deep Blue 1997 · 2010s học sâu · 2020s AI tạo sinh, ChatGPT cuối 2022.
- Hình: dòng thời gian ngang, mỗi mốc có nhãn năm bằng chữ. Chú thích thay thế: "Dòng thời gian sáu giai
  đoạn phát triển của AI từ 1950 đến nay."
- Lời giảng: Không đọc hết; mỗi mốc 1 câu. Hệ chuyên gia theo tài liệu học tập (slide UEF gốc ghi
  1960s–1970s).

**Slide 11 — 1950–1980s: AI bắt đầu bằng việc con người viết luật cho máy**
- Nội dung: Turing hỏi "Máy móc có thể suy nghĩ không?" · 1956 thuật ngữ "artificial intelligence" ·
  hệ chuyên gia = hàng nghìn quy tắc "nếu… thì…" · kỳ vọng quá cao → "mùa đông AI".
- Lời giảng: "Thế giới có quá nhiều tình huống ngoài luật — đó là giới hạn của cách viết luật."

**Slide 12 — Bước ngoặt: chuyển từ viết luật sang học từ dữ liệu**
- Nội dung: học máy (1990s–2000s) · Deep Blue thắng Kasparov 1997 · học sâu (2010s): hình ảnh, giọng nói,
  dịch máy → gợi ý sản phẩm, trợ lý ảo.
- Lời giảng: Nối lại slide 6: đây chính là cột bên phải.

**Slide 13 — Từ cuối 2022, ai cũng ra lệnh được cho AI bằng tiếng Việt thông thường**
- Nội dung: AI tạo sinh, mô hình ngôn ngữ lớn (LLM) · ChatGPT ra mắt cuối 2022 · câu hỏi mới về đạo đức và
  liêm chính học thuật.
- Lời giảng: "Đó là lý do học phần nghiên cứu marketing có một bài riêng về AI."

**Slide 14 — AI tạo sinh tạo ra điều nghe hợp lý, không tra cứu sự thật**
- Nội dung: câu chốt (in đậm) + sơ đồ lồng nhau.
- Hình: 4 vòng tròn lồng nhau có nhãn chữ: AI ⊃ Học máy ⊃ Học sâu ⊃ AI tạo sinh / LLM. Chú thích thay
  thế: "AI tạo sinh là một nhánh nhỏ nằm trong học sâu, học sâu nằm trong học máy, học máy nằm trong AI."
- Lời giảng: Giải thích "hình dạng của một trích dẫn": mô hình học được trích dẫn trông như thế nào, nên
  tạo ra thứ có hình dạng đó — có thể trùng bài thật, có thể không. "Nhớ câu đố đầu giờ." Công cụ có tìm
  kiếm web vẫn có thể tóm tắt sai.

## S4 · Kiểm tra nhanh "Luật hay học?" (43–48')

**Slide 15 — Luật hay học? 20 giây với bạn bên cạnh, rồi giơ tay**
- Nội dung: quy ước 1 ngón = lập trình truyền thống (luật) · 2 ngón = học máy (học). 5 tình huống hiện
  lần lượt: lãi tiết kiệm · "Có thể bạn cũng thích" · Google Forms rẽ nhánh · phân loại 20.000 bình luận ·
  chatbot giải thích khái niệm.
- Lời giảng: Đếm 3–2–1 cả lớp giơ cùng lúc. Kịch bản trong lecture notes S4.

**Slide 16 — Tự động không có nghĩa là AI: hỏi "ai viết ra quy tắc?"**
- Nội dung: bảng đáp án 5 tình huống (Luật · Học · Luật · Học · Học) + dấu hiệu nhận biết 1 dòng mỗi tình
  huống.
- Lời giảng: Chữa kỹ tình huống chia rẽ nhất (thường là Google Forms rẽ nhánh). "Buổi 11 các bạn sẽ tự
  cài luật này khi dựng Google Form."

## Giải lao (48–63')

**Slide 17 — Giải lao 15 phút**
- Nội dung: đồng hồ 15 phút; "Quay lại lúc …" `[giảng viên điền giờ]`. "Sau giải lao: mở sẵn Google
  Scholar."

## S5 · Chuỗi giá trị, cấp độ AI, AI trong nghiên cứu thị trường (63–83')

**Slide 18 — Chatbot bạn dùng là tầng trên cùng của một chuỗi sáu tầng** [UEF #5 — đã sửa theo tài liệu học tập]
- Nội dung: 6 tầng từ dưới lên: Phần cứng · Hạ tầng đám mây · **Dữ liệu** · Mô hình nền tảng · Nền tảng /
  công cụ phát triển · Ứng dụng.
- Hình: kim tự tháp 6 bậc, mỗi bậc có nhãn chữ; bậc "Ứng dụng" ghi "bạn ở đây". Chú thích thay thế: "Chuỗi
  giá trị AI gồm sáu tầng; người dùng làm việc ở tầng ứng dụng trên cùng."
- Lời giảng: Đi từ dưới lên, mỗi tầng 1 câu. Không nêu tên doanh nghiệp trên slide.

**Slide 19 — Chất lượng câu trả lời nằm ở hai tầng bạn không nhìn thấy: dữ liệu và mô hình**
- Nội dung: với mỗi công cụ, hỏi hai câu: **Lấy thông tin từ đâu?** · **Cập nhật đến khi nào?**
- Lời giảng: "Chatbot không cho biết nguồn khác hẳn công cụ tìm tài liệu có liên kết đến bài gốc — Buổi 5
  học chọn công cụ theo việc."

**Slide 20 — Bốn cấp độ AI: hầu hết AI hiện nay mới ở cấp 2** [UEF #6]
- Nội dung: bậc thang 4 cấp: Máy phản ứng (Deep Blue) · Bộ nhớ hạn chế (xe tự lái, gợi ý sản phẩm, chatbot)
  · Lý thuyết tâm trí (đang nghiên cứu) · Tự nhận thức (giả thuyết). Nguồn: Hintze (2016).
- Hình: giữ bậc thang UEF #6, thêm nhãn "Đã có / Đang nghiên cứu / Giả thuyết" bằng chữ. Chú thích thay
  thế: "Bốn cấp độ AI từ máy phản ứng đến tự nhận thức; hai cấp đầu đã có."
- Lời giảng: Hỏi "chatbot các bạn dùng ở cấp nào?" — chỉ định 2 bạn.

**Slide 21 — Trôi chảy không có nghĩa là hiểu — càng không có nghĩa là đúng**
- Nội dung: "Chatbot trả lời giọng đồng cảm = mô phỏng ngôn ngữ, không phải cấp 3." · "Một trích dẫn bịa
  cũng được viết rất trôi chảy."
- Lời giảng: Lỗi hiểu thường gặp. Dùng câu trả lời "cấp 3" của sinh viên (nếu có) để dẫn vào.

**Slide 22 — Trong nghiên cứu thị trường, AI làm nhanh phần xử lý — con người kiểm tra và diễn giải**
- Nội dung: 3 ô: Phân tích cảm xúc trên mạng xã hội · Dự báo doanh số / sản phẩm mới · Tự động hóa thu
  thập, làm sạch, mã hóa. Dòng dưới: ví dụ (giả định) 20.000 bình luận → đọc mẫu vài trăm để kiểm tra AI.
- Lời giảng: Nguồn: video "Unlock AI's Potential in Market Research" (không nêu tên doanh nghiệp, số
  liệu). Chỉ giới thiệu — Buổi 5 học đầy đủ.

**Slide 23 — Ba rủi ro đạo đức: quyền riêng tư, thiên lệch, thiếu minh bạch**
- Nội dung: 3 ô + 1 dòng cho dự án: "Không đưa tên, số điện thoại, câu trả lời nhận diện được người tham
  gia lên công cụ AI." · Cách giảm rủi ro: kiểm tra thuật toán thường xuyên.
- Lời giảng: "Ở quy mô một nhóm sinh viên, 'kiểm toán thuật toán' nghĩa là: kiểm chứng từng kết quả AI đưa
  cho mình." Chuyển sang S6.

## S6 · Ảo giác và cách kiểm chứng (83–95')

**Slide 24 — Ảo giác: AI bịa thông tin nhưng trình bày rất tự tin** [UEF #7 (ô "Ảo giác") + #12 (ô cảnh báo)]
- Nội dung: định nghĩa 1 dòng · trích ô cảnh báo UEF #12: "Phải luôn kiểm chứng thông tin (tránh
  Hallucination)".
- Lời giảng: "Đây là hạn chế lớn nhất với người làm nghiên cứu, và nó đến thẳng từ slide 14." Chỉ dùng ô
  "Ảo giác" của UEF #7; cả slide ưu/nhược điểm học ở Buổi 5.

**Slide 25 — Bốn kiểu trích dẫn sai — kiểu khó phát hiện nhất là tóm tắt sai một bài có thật**
- Nội dung: Bịa hoàn toàn · Sai chi tiết (tác giả, năm, tạp chí) · DOI sai / dẫn sang bài khác · Tóm tắt
  sai nội dung.
- Lời giảng: Nhấn kiểu 4 — ba bước kiểm tra đầu đều "qua". Lỗi hiểu: "Có DOI thì chắc chắn thật" — sai.

**Slide 26 — Kiểm chứng một trích dẫn trong bốn bước**
- Nội dung: 1. Có thật? (tên bài trong ngoặc kép trên Google Scholar) · 2. Đúng tác giả / năm / tạp chí? ·
  3. DOI dẫn đúng bài? · 4. Nội dung đúng như AI tóm tắt? (đọc abstract). Kết luận: Đúng · Sai chi tiết ·
  Không xác minh được.
- Hình: 4 bước dạng mũi tên ngang, mỗi bước có biểu tượng kính lúp và nhãn chữ. Chú thích thay thế: "Quy
  trình bốn bước kiểm chứng một trích dẫn do AI đưa ra."
- Lời giảng: **[DEMO]** chuyển sang Google Scholar, làm mẫu với trích dẫn 4 của câu đố (không demo trích
  dẫn 2). Nói thành lời từng bước. Mất mạng → ảnh chụp màn hình chuẩn bị sẵn. "Không xác minh được thì
  không trích."

**Slide 27 — Nhật ký AI ghi lại quá trình của nhóm — không phải để bắt lỗi**
- Nội dung: 6 cột: công cụ · ngày · câu lệnh · tóm tắt kết quả · cách kiểm chứng · phần đã sửa / loại bỏ.
  Dòng dưới: "Được dùng AI · khai báo · nộp nhật ký · tự kiểm chứng. Không dùng phần mềm phát hiện AI."
- Hình: ảnh chụp mẫu nhật ký (phụ lục A phiếu hoạt động) với 1 dòng ví dụ. Chú thích thay thế: "Mẫu bảng
  nhật ký AI sáu cột với một dòng ví dụ."
- Lời giảng: "Dòng đầu tiên của nhật ký nộp kèm M3 các bạn sẽ viết trong 45 phút tới."

## S7 · Thực hành nhóm (95–140')

**Slide 28 — Kiểm chứng AI (45'): hỏi một chatbot, rồi kiểm chứng từng trích dẫn nó đưa ra**
- Nội dung: 4 chặng + thời gian: Hỏi AI, ghi nhật ký (8') · Kiểm chứng từng trích dẫn 4 bước (22') · Tổng
  hợp, ghi phần sửa / loại bỏ (7') · 4–5 nhóm báo cáo (8'). Dòng nhỏ: "Tài khoản miễn phí sẵn có · không
  đưa thông tin cá nhân vào câu lệnh · không có chatbot → dùng câu trả lời mẫu."
- Lời giảng: Kịch bản trong `W4_activity_kiem_chung_ai.md`. Để slide này trên màn hình suốt 45 phút.

**Slide 29 — Lớp mình hôm nay: bao nhiêu trích dẫn AI đưa ra là đúng?**
- Nội dung: bảng trống 4 cột: Tổng · Đúng · Sai chi tiết · Không xác minh được — GV điền từ báo cáo các
  nhóm (hoặc kẻ trên bảng). Dưới: đáp án câu đố đầu giờ (hiện sau).
- Lời giảng: Công bố đáp án câu đố: chỉ trích dẫn 1 đúng hoàn toàn; 2 có thật nhưng tóm tắt sai; 4 không
  xác minh được. Câu chốt: "Mỗi trích dẫn trong bài phải là bài các bạn đã mở và đã đọc."

## S8 · Kết buổi (140–147')

**Slide 30 — Trước khi về: một việc AI làm tốt, một việc bạn sẽ không tin AI nếu chưa kiểm tra**
- Nội dung: 2 câu của phiếu ra về.
- Lời giảng: Thu phiếu; đọc trước Buổi 5.

**Slide 31 — M3: tổng quan tài liệu 2–3 trang + nhật ký AI**
- Nội dung: nhóm · 5% · nộp LMS sau Buổi 5 `[giảng viên điền hạn]` · 3 ý: tổng hợp theo chủ đề · nhật ký AI
  (dòng 1 = hôm nay) · chọn hướng định tính / định lượng kèm lý do.
- Lời giảng: Đề bài đầy đủ trên LMS. "Buổi 5 sẽ có thêm thông tin để chọn hướng."

**Slide 32 — Buổi 5: AI làm tốt việc gì, chọn công cụ nào, đặt câu lệnh ra sao**
- Nội dung: Đọc trước Bài 3 mục 3.5–3.8 · mang máy tính.
- Lời giảng: Câu nối: "Hôm nay thấy AI sai thế nào; tuần sau học cách để AI giúp mình nhiều hơn — kể cả
  phản biện vấn đề nghiên cứu của nhóm."

---

**Kiểm tra số slide:** 32 slide cho ~62 phút giảng (S1–S3, S5–S6) + câu đố, kiểm tra nhanh và thực hành —
khoảng 0,5 slide/phút, trong mức hợp lý. Slide UEF Bài 3 dùng: #1–#7, #12 (một phần). Để dành Buổi 5:
#7 (đầy đủ), #8–#21. Không dùng hôm nay: #8 (ứng dụng đa ngành), #9–#10 (trọng tâm 1–2), #11 (bản đồ công
cụ).

## Slide bổ sung cuối bài

**Slide tài liệu tham khảo** (đặt sau slide cuối, không đánh số trong mạch giảng)
- Nội dung: 4 tài liệu theo APA 7 — Hintze (2016); McCarthy và cộng sự (2006); Russell & Norvig (2021);
  Turing (1950). Xem danh mục đầy đủ trong `W4_lecture_notes.md`.
- Lời giảng: không giảng; nhắc: "Bốn tài liệu này đều kiểm chứng được — thử tự tra một cái trên Google
  Scholar."
