# MKT1107 — Bộ prompt NotebookLM (bản 2: chỉ trích xuất VIDEO)

**Thay đổi so với bản 1:** Claude đã có trực tiếp đề cương và 10 file slide UEF (xem
`slide_review.md`). Vì vậy NotebookLM **không cần trích lại nội dung slide**. Nhiệm vụ của
NotebookLM giờ chỉ còn lấy từ **video**:

1. **Phần slide bị thiếu** so với đề cương (ưu tiên số 1).
2. **Ví dụ, tình huống, bài tập, câu hỏi** giảng viên trong video dùng — chất liệu cho hoạt động
   nhóm 45' và speaker note.
3. **Đối chiếu** những điểm slide có thể sai.

## Bước 0 — Cấu hình lại notebook (làm 1 lần)

**Configure chat** → độ dài **Dài hơn (Longer)** → hướng dẫn tùy chỉnh (thay đoạn cũ):

```
Bạn là trợ lý trích xuất nội dung VIDEO cho học phần MKT1107 Nghiên cứu Marketing.
Nguyên tắc bắt buộc:
1. Chỉ dùng các nguồn đang được chọn. Không bổ sung kiến thức bên ngoài.
2. Ưu tiên đầy đủ hơn ngắn gọn: giữ nguyên định nghĩa, công thức, số liệu, các bước, ví dụ
   như người giảng trình bày. Không tóm tắt chung chung.
3. Mỗi ý ghi [Tên video] + một cụm từ nguyên văn ngắn (giữ tiếng Anh gốc) làm bằng chứng,
   vì transcript không có mốc thời gian.
4. Không có trong nguồn: ghi "Không có trong nguồn". Video nói không rõ: ghi "[KHÔNG RÕ]".
   Các video nói khác nhau: trình bày cả hai, ghi "KHÁC NHAU GIỮA VIDEO".
5. Viết tiếng Việt, giữ thuật ngữ tiếng Anh trong ngoặc đơn. Ví dụ nước ngoài giữ nguyên tên
   doanh nghiệp, quốc gia, số liệu — không tự Việt hóa, không tự thêm ví dụ.
```

**Chọn nguồn trước mỗi lần hỏi** (cột Sources bên trái):
- **Bỏ chọn** đề cương và 10 file slide PDF — để NotebookLM không diễn giải lại slide.
- **Chỉ tick** các video của buổi đó (danh sách trong từng khối bên dưới, theo `video_map.md`).
- Luôn bỏ chọn video giới thiệu khóa học Tepper.

## Khung prompt chung (dán cho mọi buổi)

Dán khung này, thay `[KHỐI BUỔI]` bằng khối của buổi tương ứng ở phần sau.

```
Chỉ dựa trên các VIDEO đang được chọn, trích xuất CHI TIẾT TỐI ĐA theo yêu cầu dưới đây.

[KHỐI BUỔI]

Trình bày theo đúng thứ tự các mục trong khối trên. Trong mỗi mục, nêu lần lượt (mục nào video
không có thì ghi "Không có trong nguồn"):
A. Khái niệm, định nghĩa — gần nguyên văn, kèm thuật ngữ tiếng Anh.
B. Quy trình, phân loại, công thức — đủ các bước, ký hiệu, điều kiện áp dụng.
C. Ví dụ và tình huống — đủ tên doanh nghiệp/sản phẩm, bối cảnh, số liệu, kết luận.
D. Ưu điểm – nhược điểm, khi nào dùng / không dùng, lỗi thường gặp người giảng cảnh báo.
E. Câu hỏi, bài tập, quiz, hoạt động người giảng đưa ra — chép đủ đề và đáp án/gợi ý nếu có.

Cuối câu trả lời, thêm mục F. KHOẢNG TRỐNG: những mục trong khối trên mà video không đề cập.
Nếu câu trả lời quá dài, dừng ở cuối một mục, ghi "CÒN TIẾP — mục tiếp theo: …" và chờ tôi.
```

Khi bị cắt: `Tiếp tục từ mục [tên mục], giữ nguyên cấu trúc A–F.`

## Khối riêng theo buổi

Ký hiệu: ⭐ = **phần slide UEF đang thiếu**, cần lấy kỹ nhất.

**Buổi 1 — Bài 1** · Video: Unit 1 Part 1; Marketing Research Essentials Intro, Models &
Intelligence; Marketing Research One Shot (NEP); The Data-Driven Decision Framework…; The
Intelligence Gap…; Research Foundations…; The Importance of Research Design – Introduction
```
BUỔI 1 — TỔNG QUAN VỀ NGHIÊN CỨU MARKETING
1. Định nghĩa nghiên cứu marketing: chép NGUYÊN VĂN mọi định nghĩa video nêu và nguồn của
   định nghĩa (đặc biệt định nghĩa của AMA – American Marketing Association, nếu có).
2. Tiến trình nghiên cứu marketing: video chia thành bao nhiêu bước, tên từng bước.
3. Ví dụ doanh nghiệp thực tế cho từng loại: nghiên cứu khám phá, mô tả, nhân quả; định tính
   và định lượng; nghiên cứu cơ bản và ứng dụng.
4. Hệ thống thông tin marketing (MIS), tình báo marketing (marketing intelligence), hệ thống hỗ
   trợ ra quyết định (MDSS): ví dụ doanh nghiệp sử dụng.
5. Người thực hiện và người sử dụng nghiên cứu: ví dụ công ty nghiên cứu, ví dụ quyết định
   quản trị dựa trên nghiên cứu.
6. Tình huống: doanh nghiệp ra quyết định SAI vì không nghiên cứu hoặc nghiên cứu sai.
```

**Buổi 2–3 — Bài 2** · Video: Research Source Mastery… (2026); Academic Writing for 2026…
*(Quy tắc APA 7 lấy từ slide và tài liệu APA chính thức, KHÔNG lấy từ NotebookLM.)*
```
BUỔI 2–3 — TÌM, ĐÁNH GIÁ VÀ SỬ DỤNG TÀI LIỆU THAM KHẢO
1. Cách tìm tài liệu học thuật: công cụ, cơ sở dữ liệu, từ khóa, mẹo tìm kiếm được nêu.
2. Tiêu chí đánh giá nguồn đáng tin cậy và cách kiểm chứng dữ liệu.
3. Cách liên kết tổng quan tài liệu với câu hỏi nghiên cứu; cách tìm khoảng trống nghiên cứu
   (research gap).
4. Đạo văn: định nghĩa, ví dụ, cách tránh.
```

**Buổi 4–5 — Bài 3** · Video: Unlock AI's Potential in Market Research
```
BUỔI 4–5 — AI TRONG NGHIÊN CỨU MARKETING
1. Các ứng dụng AI cụ thể trong nghiên cứu thị trường (thu thập, phân tích, dự báo, phân tích
   cảm xúc…) — kèm ví dụ doanh nghiệp/công cụ.
2. Ứng dụng AI trong ngành sản xuất (nếu có).
3. Rủi ro, hạn chế, vấn đề đạo đức và quyền riêng tư khi dùng AI trong nghiên cứu.
4. Cách người giảng khuyên kiểm chứng kết quả do AI tạo ra.
```

**Buổi 6 — Bài 4** · Video: Unit 2 Part 2; Research Foundations…; The Importance of Research
Design (Module 1, Video 1–8)
```
BUỔI 6 — THIẾT KẾ NGHIÊN CỨU VÀ ĐỀ CƯƠNG NGHIÊN CỨU
⭐1. Các thành phần của một đề cương/đề xuất nghiên cứu (research proposal): đặc biệt KẾ HOẠCH
    PHÂN TÍCH DỮ LIỆU, GIỚI HẠN NGHIÊN CỨU, THỜI BIỂU, NGÂN SÁCH/KINH PHÍ, BÁO CÁO.
⭐2. Mẫu hoặc ví dụ đề cương, thời biểu, bảng kinh phí nếu video có.
3. Phân biệt vấn đề quản trị (management/decision problem) và vấn đề nghiên cứu (research
   problem): tất cả ví dụ cặp tương ứng.
4. Ví dụ mục tiêu, câu hỏi, giả thuyết nghiên cứu tốt và chưa tốt.
5. Khi nào chọn thiết kế khám phá / mô tả / nhân quả — ví dụ cho từng loại.
```

**Buổi 7 — Bài 5** · Video: Unit 3; Research Design – Secondary (2a, 2b), Observational (3),
Ethnography (4), Focus Groups (5); Observational Research…; Qualitative Research;
Mixed-Methods Research…
```
BUỔI 7 — CÁC PHƯƠNG PHÁP THU THẬP DỮ LIỆU
⭐1. Thảo luận nhóm tập trung (focus group): quy trình, số người, vai trò người điều phối,
    ưu – nhược điểm, ví dụ.
⭐2. Phỏng vấn sâu (in-depth interview): quy trình, kỹ thuật hỏi, ví dụ.
⭐3. Dân tộc học (ethnography) và nghiên cứu định tính khác.
⭐4. Nghiên cứu định lượng: khảo sát trực tiếp / điện thoại / thư / trực tuyến; nhóm cố định
    (panel); thử nghiệm (experiment) — quy trình, ưu – nhược, ví dụ.
5. Phương pháp hỗn hợp (mixed methods): khi nào dùng, cách kết hợp.
6. Quan sát: ví dụ và các lưu ý đạo đức, quyền riêng tư được nhắc.
7. Dữ liệu thứ cấp: nguồn cụ thể được nhắc; cách đánh giá chất lượng.
```

**Buổi 8 — Bài 6** · Video: Sampling Frame & Sample Size…; Unit 2 Part 2
```
BUỔI 8 — CHỌN MẪU
⭐1. MỌI công thức tính cỡ mẫu (theo trung bình, theo tỷ lệ, có/không biết tổng thể), ý nghĩa
    từng ký hiệu và VÍ DỤ TÍNH bằng số.
2. Quy tắc kinh nghiệm về cỡ mẫu được nêu.
3. Sai số khung mẫu, sai số chọn mẫu và sai số không do chọn mẫu: định nghĩa, ví dụ.
4. Ví dụ minh họa cho từng phương pháp chọn mẫu xác suất và phi xác suất.
```

**Buổi 9 — Bài 7** · Video: Measurement and Questionnaire Design – Intro (M2 V1); Question Type
Quiz Review (M2 V2); Measuring Attitudes and WTP (M2 V3); Unit 4; Struggling with Research
Variables?
```
BUỔI 9 — ĐO LƯỜNG
⭐1. Thang đo tỷ lệ (ratio scale): định nghĩa, ví dụ.
⭐2. Các phép toán / thống kê được phép dùng cho từng cấp thang đo (định danh, thứ tự, khoảng,
    tỷ lệ).
⭐3. Sai số đo lường: sai số hệ thống và sai số ngẫu nhiên — định nghĩa, nguồn gốc, ví dụ.
⭐4. Giá trị (validity) và độ tin cậy (reliability): các loại, cách đánh giá, ví dụ.
5. Đo lường thái độ: Likert, đối nghĩa, Stapel và thang khác; đo mức sẵn lòng chi trả (WTP).
6. Biến nghiên cứu: biến độc lập, phụ thuộc, trung gian, điều tiết — ví dụ.
7. Toàn bộ câu hỏi trong "Question Type Quiz" kèm đáp án.
```

**Buổi 10–12 — Bài 8** · Video: M2 V1; Questionnaire Construction (M2 V4); Survey Design Tips to
Reduce Bias; Unit 4 *(hỏi 1 lần, rồi Claude tự chia cho 3 buổi)*
```
BUỔI 10–12 — THIẾT KẾ BẢNG CÂU HỎI
⭐1. Cấu trúc và thứ tự câu hỏi trong bảng hỏi (phần mở đầu, câu gạn lọc, kỹ thuật phễu, vị
    trí câu nhạy cảm và câu nhân khẩu học).
⭐2. Hình thức trình bày bảng hỏi (bố cục, độ dài, "nguyên tắc 5 phút", bảng hỏi trực tuyến).
⭐3. Thử nghiệm (pilot test / pre-test): cách làm, cỡ mẫu thử, cần kiểm tra gì, cách sửa.
4. Các lỗi đặt câu hỏi: dẫn dắt, câu hỏi kép, mơ hồ, bắt ước đoán, thang không cân bằng —
   chép mọi ví dụ SAI và cách SỬA.
5. Các dạng câu hỏi (mở, đóng, nhiều lựa chọn, xếp hạng, thang đo) kèm ví dụ.
6. Các nguồn sai lệch khảo sát (survey bias) và cách giảm.
```

**Buổi 13 — Bài 9** · Video: Module 3 SPSS V1–V6; Unit 5; The Correlation vs. Causation Trap…
*(Module 4 hồi quy và Module 5 EFA/cụm: hỏi riêng ở mục điểm cộng bên dưới)*
```
BUỔI 13 — PHÂN TÍCH DỮ LIỆU
⭐1. Thao tác SPSS TỪNG BƯỚC (menu, lệnh, tùy chọn) cho: nhập/khai báo biến, mã hóa, thống kê
    tần số, thống kê mô tả, bảng chéo (Crosstabs) + Chi-square, T-test (độc lập và cặp),
    ANOVA, tương quan.
⭐2. Với mỗi kiểm định: khi nào dùng (theo loại biến/thang đo), giả thuyết H0/H1, điều kiện,
    cách đọc bảng kết quả (output), ngưỡng sig./p-value, cách diễn giải thành câu.
⭐3. Ví dụ dữ liệu và kết quả mẫu người giảng dùng.
4. Làm sạch dữ liệu, xử lý dữ liệu thiếu, mã hóa câu hỏi mở.
5. Tương quan và nhân quả: các bẫy diễn giải, ví dụ.
6. Ghi rõ: video có hướng dẫn Excel / Google Sheets không? Có Cronbach's Alpha không?
```

**Bài 10 — tự học e-learning** · Video: Unit 5; This Marketing Strategy Got Him a Massive Promotion
```
BÀI 10 — BÁO CÁO KẾT QUẢ NGHIÊN CỨU
⭐1. Nguyên tắc trình bày BẢNG số liệu (tiêu đề, đơn vị, nguồn, làm tròn, thứ tự…).
⭐2. Nguyên tắc trình bày BIỂU ĐỒ: chọn loại biểu đồ theo mục đích, lỗi thường gặp.
3. Cấu trúc báo cáo cho nhà quản trị; cách viết tóm tắt cho lãnh đạo, kết luận, đề xuất.
4. Cách thuyết trình kết quả nghiên cứu (nếu có).
```

## Prompt riêng — tài liệu điểm cộng (tùy chọn)

Tick Module 4 (Regression V1–V7) và Module 5 (Cluster/Factor Analysis V1, V3–V10):
```
Chỉ dựa trên các VIDEO đang được chọn, tóm tắt theo dạng HƯỚNG DẪN TỰ HỌC cho sinh viên năm 2
muốn phân tích nâng cao: (1) hồi quy đơn và bội, (2) phân tích nhân tố khám phá (EFA),
(3) phân tích cụm. Với mỗi kỹ thuật: dùng khi nào, điều kiện dữ liệu, thao tác SPSS từng bước,
cách đọc kết quả, lỗi thường gặp. Ghi rõ nếu video không nhắc Cronbach's Alpha.
```

## Prompt riêng — đối chiếu những điểm slide có thể sai (tùy chọn, tick TẤT CẢ video)

```
Chỉ dựa trên các VIDEO đang được chọn, cho biết video nói gì về từng điểm sau. Trích nguyên
văn và ghi tên video; không có thì ghi "Không có trong nguồn":
1. Định nghĩa nghiên cứu marketing của AMA (American Marketing Association).
2. Số bước của tiến trình nghiên cứu marketing.
3. Thang Likert được xem là thang thứ tự hay thang khoảng; có điều kiện gì không.
4. Công thức tính cỡ mẫu theo tỷ lệ.
5. Mode (yếu vị) dùng khi nào trong nghiên cứu marketing.
6. Cách diễn đạt kết luận kiểm định: "chấp nhận H0" hay "không bác bỏ H0".
```

## Gửi kết quả cho Claude

- Ghi đầu tin nhắn: `Kết quả NotebookLM — Buổi X` và dán **nguyên văn**, giữ tên video và cụm
  trích dẫn.
- Thứ tự ưu tiên: **Buổi 1** (để bắt đầu soạn) → **Buổi 6, 7, 9, 12, 13, Bài 10** (các buổi có
  phần slide bị thiếu) → các buổi còn lại.
