# MKT1107 — Bộ prompt trích xuất nội dung video bằng NotebookLM

Mục đích: lấy từ các video bài giảng đã tải lên NotebookLM **toàn bộ nội dung chuyên môn**
của từng buổi, đủ chi tiết để soạn bài giảng đầy đủ, dàn ý slide + speaker note, hoạt động
thực hành nhóm 45' và bài tập theo lộ trình dự án nghiên cứu nhóm.

## Bước 0 — Cấu hình notebook (làm 1 lần)

Trong NotebookLM, bấm biểu tượng **cấu hình khung chat** (Configure chat / ⚙ cạnh ô chat):

- **Độ dài câu trả lời:** chọn **Dài hơn (Longer)**.
- **Vai trò / hướng dẫn tùy chỉnh (Custom):** dán đoạn sau:

```
Bạn là trợ lý trích xuất nội dung học thuật cho học phần MKT1107 Nghiên cứu Marketing.
Nguyên tắc bắt buộc:
1. Chỉ dùng thông tin trong các nguồn đã tải lên. Không bổ sung kiến thức bên ngoài.
2. Ưu tiên đầy đủ hơn ngắn gọn. Không tóm tắt chung chung; giữ nguyên định nghĩa, số liệu,
   ví dụ, công thức, các bước như giảng viên trình bày.
3. Mỗi ý kèm trích dẫn nguồn (tên video, mốc thời gian nếu có).
4. Phân biệt rõ: nội dung giảng viên nói trong video / nội dung từ đề cương.
5. Thông tin không có trong nguồn: ghi "Không có trong nguồn". Chỗ video nói không rõ:
   ghi "[KHÔNG RÕ – mm:ss]".
6. Viết bằng tiếng Việt; giữ thuật ngữ tiếng Anh trong ngoặc đơn khi giảng viên dùng.
```

Nếu notebook có nhiều video, trước mỗi lần hỏi hãy **chỉ tick chọn các video liên quan đến
buổi đó** ở cột Nguồn (Sources) bên trái — kết quả sẽ chi tiết hơn nhiều.

## Bước 1 — Bản đồ video ↔ buổi học (hỏi 1 lần)

```
Dựa CHỈ trên các nguồn đã tải lên, lập bảng ánh xạ giữa đề cương chi tiết học phần MKT1107 và
các video:

| Buổi | Bài và mục con theo đề cương | Video nguồn (tên video + mốc thời gian bắt đầu–kết thúc) | Mức độ bao phủ (Đầy đủ / Một phần / Không có) | Ghi chú |

Danh sách buổi cần đối chiếu:
- Buổi 1: Bài 1 Tổng quan về nghiên cứu Marketing (1.1–1.5)
- Buổi 2: Bài 2 Tham khảo và trích dẫn tài liệu (2.1)
- Buổi 3: Bài 2 (tiếp) (2.2–2.3, APA 7th)
- Buổi 4: Bài 3 AI trong nghiên cứu khoa học và marketing (3.1–3.4)
- Buổi 5: Bài 3 (tiếp) (3.5–3.8)
- Buổi 6: Bài 4 Thiết kế nghiên cứu (4.1–4.3)
- Buổi 7: Bài 5 Các phương pháp thu thập dữ liệu (5.1–5.2)
- Buổi 8: Bài 6 Chọn mẫu để nghiên cứu (6.1–6.5)
- Buổi 9: Bài 7 Đo lường (7.1–7.4)
- Buổi 10–12: Bài 8 Thiết kế bảng câu hỏi (8.1–8.2.8)
- Buổi 13: Bài 9 Phân tích dữ liệu (9.1–9.3)
- Tự học e-learning: Bài 10 Báo cáo kết quả nghiên cứu (10.1–10.3)

Yêu cầu:
- Mục con nào trong đề cương KHÔNG có video đề cập: ghi rõ "KHÔNG CÓ TRONG VIDEO".
- Nội dung video không thuộc mục nào của đề cương: liệt kê riêng ở cuối.
- Nếu một video trải qua nhiều bài, chia theo mốc thời gian.
```

## Bước 2 — Trích xuất chi tiết từng buổi (lặp lại cho mỗi buổi)

Dán **khung chung** bên dưới, rồi thay `[KHỐI BUỔI]` bằng khối tương ứng ở phần "Khối riêng
theo buổi". Bài 8 (Buổi 10–12) nên hỏi **một lần cho mỗi buổi**.

```
Dựa CHỈ trên các nguồn đã tải lên, trích xuất CHI TIẾT TỐI ĐA nội dung cho:

[KHỐI BUỔI]

Trình bày theo ĐÚNG các mục con của đề cương ở trên (ví dụ 6.4.1, 6.4.2…). Trong MỖI mục con,
trình bày lần lượt (bỏ qua phần nào nguồn không có, nhưng ghi "Không có trong nguồn"):

A. Nội dung giảng viên trình bày, theo đúng trình tự trong video.
B. Khái niệm và định nghĩa — gần nguyên văn, kèm thuật ngữ tiếng Anh nếu có, kèm tác giả/nguồn
   định nghĩa nếu giảng viên nêu.
C. Phân loại, mô hình, quy trình, công thức — đầy đủ các bước, ký hiệu, điều kiện áp dụng.
D. Ví dụ minh họa — chép đầy đủ: tên doanh nghiệp/thương hiệu, bối cảnh, số liệu, cách giải
   hoặc kết luận như trong video.
E. So sánh, ưu điểm – nhược điểm, khi nào dùng / khi nào không dùng.
F. Nội dung chỉ xuất hiện trên màn hình (slide, bảng, sơ đồ, chữ viết) mà giảng viên có nhắc
   tới — mô tả lại; nếu chỉ biết là có hình nhưng không rõ nội dung, ghi "[CÓ HÌNH – mm:ss]".

Sau khi đi hết các mục con, bổ sung:

G. Lưu ý của giảng viên: lỗi sinh viên hay mắc, điểm nhấn mạnh, mẹo, cảnh báo.
H. Câu hỏi giảng viên đặt ra cho người học, tình huống thảo luận, bài tập, trò chơi được nhắc
   trong video — chép đầy đủ đề bài và đáp án/gợi ý nếu có.
I. Nội dung có thể áp dụng trực tiếp vào việc một nhóm sinh viên tự làm một nghiên cứu
   marketing nhỏ (chỉ nêu những gì có trong nguồn).
J. Kiến thức nền cần có và liên kết với bài trước / bài sau mà giảng viên nhắc đến.
K. Khoảng trống: mục con của đề cương không có trong video; chỗ video nói không rõ; chỗ các
   nguồn mâu thuẫn nhau.

Quy tắc trình bày: trích dẫn [tên video, mm:ss] cho từng ý. Nếu câu trả lời quá dài, dừng ở
cuối một mục con, ghi "CÒN TIẾP — mục tiếp theo: x.x.x" và chờ tôi yêu cầu viết tiếp.
```

Khi bị cắt, gõ: `Tiếp tục từ mục [x.x.x], giữ nguyên cấu trúc A–K.`

## Khối riêng theo buổi

**Buổi 1**
```
BUỔI 1 — BÀI 1: TỔNG QUAN VỀ NGHIÊN CỨU MARKETING
1.1 Định nghĩa nghiên cứu Marketing · 1.2 Phân loại (theo mục tiêu, theo tính chất…) ·
1.3 Tiến trình nghiên cứu Marketing · 1.4 Hệ thống thông tin marketing (báo cáo nội bộ, tình báo
marketing, hệ thống hỗ trợ ra quyết định MDSS, hệ thống nghiên cứu marketing) · 1.5 Người thực
hiện (the doers) và người sử dụng (the users)
Chú ý thêm: các ví dụ doanh nghiệp dùng nghiên cứu marketing để ra quyết định; từng bước của
tiến trình nghiên cứu kèm ví dụ; mục 1.2.1 và 1.2.2 trong đề cương trùng tên — cho biết video
thực tế phân loại theo những tiêu chí nào.
```

**Buổi 2**
```
BUỔI 2 — BÀI 2: THAM KHẢO VÀ TRÍCH DẪN TÀI LIỆU
2.1 Cách trích dẫn và liệt kê tài liệu tham khảo
Chú ý thêm: phân biệt trích dẫn trực tiếp / gián tiếp; cách tìm tài liệu (công cụ, cơ sở dữ
liệu được nhắc); tiêu chí đánh giá nguồn tin cậy; đạo văn và cách tránh; công cụ quản lý trích
dẫn (nếu có nhắc).
```

**Buổi 3**
```
BUỔI 3 — BÀI 2 (tiếp): TRÍCH DẪN THEO APA 7th
2.2 Tổng quan trích dẫn APA 7th (2.2.1 Tác giả · 2.2.2 Tên cơ quan tổ chức · 2.2.3 Một số
trường hợp khác) · 2.3 Cách ghi tài liệu tham khảo (2.3.1 Nguyên tắc chung · 2.3.2 Ví dụ)
Chú ý thêm: chép NGUYÊN VĂN, đúng từng dấu chấm phẩy, mọi ví dụ trích dẫn trong bài và mục
tài liệu tham khảo được trình bày (1 tác giả, 2 tác giả, ≥3 tác giả, tổ chức, sách, bài báo,
website, tài liệu tiếng Việt…); các lỗi định dạng hay gặp.
```

**Buổi 4**
```
BUỔI 4 — BÀI 3: AI TRONG NGHIÊN CỨU KHOA HỌC VÀ MARKETING
3.1 Khái niệm AI · 3.2 Lịch sử phát triển AI · 3.3 Chuỗi giá trị Generative AI · 3.4 Phân loại
AI (phản ứng, bộ nhớ hạn chế, lý thuyết tâm trí, tự nhận thức)
Chú ý thêm: mọi mốc năm, tên người, sự kiện trong lịch sử AI chép đúng như video; các tầng của
chuỗi giá trị Gen AI và ví dụ doanh nghiệp ở mỗi tầng.
```

**Buổi 5**
```
BUỔI 5 — BÀI 3 (tiếp)
3.5 Ưu điểm và nhược điểm AI · 3.6 Ứng dụng AI theo ngành (giao thông, sản xuất, y tế, tài
chính ngân hàng, truyền thông, trợ lý ảo, giáo dục, nghiên cứu khoa học và marketing) · 3.7 Công
cụ AI hỗ trợ nghiên cứu (nhóm 1: ChatGPT, Gemini, Copilot; nhóm 2: NotebookLM, Elicit,
Perplexity, Consensus, iAsk) · 3.8 Cách đặt câu lệnh (prompt) hỗ trợ nghiên cứu
Chú ý thêm: với mỗi công cụ — dùng để làm gì, thao tác demo trong video (từng bước), điểm mạnh,
hạn chế; chép NGUYÊN VĂN mọi prompt mẫu và cấu trúc prompt giảng viên giới thiệu; cảnh báo về
AI bịa trích dẫn, đạo đức và quy định sử dụng AI.
```

**Buổi 6**
```
BUỔI 6 — BÀI 4: THIẾT KẾ NGHIÊN CỨU
4.1 Một số khái niệm · 4.2 Vấn đề nghiên cứu (tổng quan, quá trình xác định, yếu tố môi trường) ·
4.3 Đề cương nghiên cứu marketing (4.3.1 Vấn đề nghiên cứu · 4.3.2 Phương pháp thu thập ·
4.3.3 Chọn mẫu · 4.3.4 Bảng câu hỏi · 4.3.5 Kế hoạch phân tích · 4.3.6 Giới hạn · 4.3.7 Thời
biểu · 4.3.8 Kinh phí · 4.3.9 Báo cáo tổng kết)
Chú ý thêm: phân biệt vấn đề quản trị và vấn đề nghiên cứu; ví dụ vấn đề / mục tiêu / câu hỏi
nghiên cứu tốt và chưa tốt; mẫu đề cương, mẫu thời biểu, mẫu bảng kinh phí nếu có.
```

**Buổi 7**
```
BUỔI 7 — BÀI 5: CÁC PHƯƠNG PHÁP THU THẬP DỮ LIỆU
5.1 Dữ liệu thứ cấp (khái niệm, đặc điểm, phân loại, tiêu chuẩn đánh giá) · 5.2 Dữ liệu sơ cấp
(5.2.1 Nghiên cứu định tính · 5.2.2 Nghiên cứu định lượng)
Chú ý thêm: các nguồn dữ liệu thứ cấp cụ thể được nhắc (tên tổ chức, website, báo cáo); các
kỹ thuật định tính (phỏng vấn sâu, thảo luận nhóm…) và định lượng (khảo sát, thực nghiệm…) —
quy trình thực hiện, ưu nhược điểm, khi nào chọn; so sánh định tính và định lượng.
```

**Buổi 8**
```
BUỔI 8 — BÀI 6: CHỌN MẪU ĐỂ NGHIÊN CỨU
6.1 Lý do chọn mẫu · 6.2 Khái niệm (đám đông, đám đông nghiên cứu, phần tử, đơn vị, khung mẫu,
hiệu quả chọn mẫu) · 6.3 Quy trình chọn mẫu · 6.4 Phương pháp xác suất (ngẫu nhiên đơn giản, hệ
thống, phân tầng, theo nhóm) · 6.5 Phương pháp phi xác suất (thuận tiện, phán đoán, phát triển
mầm, định mức)
Chú ý thêm: chép đầy đủ mọi CÔNG THỨC tính cỡ mẫu, ý nghĩa từng ký hiệu và VÍ DỤ TÍNH bằng số;
quy tắc kinh nghiệm về cỡ mẫu; ví dụ minh họa cho từng phương pháp chọn mẫu.
```

**Buổi 9**
```
BUỔI 9 — BÀI 7: ĐO LƯỜNG
7.1 Khái niệm và ý nghĩa đo lường · 7.2 Các loại thang đo (định danh, thứ tự, khoảng, tỷ lệ) ·
7.3 Cấp thang đo và độ mạnh · 7.4 Đánh giá đo lường (sai lệch, giá trị và độ tin cậy)
Chú ý thêm: ví dụ câu hỏi cho từng loại thang đo; các phép toán/thống kê dùng được cho từng
thang đo; thang Likert, thang đo ngữ nghĩa và các thang khác được nhắc; ví dụ thang đo kế thừa
từ nghiên cứu trước; các loại giá trị và độ tin cậy.
```

**Buổi 10**
```
BUỔI 10 — BÀI 8: THIẾT KẾ BẢNG CÂU HỎI (phần tổng quan)
8.1 Vai trò của bảng câu hỏi · 8.2 Quy trình thiết kế bảng hỏi — trình bày TỔNG QUAN đủ 8 bước
8.2.1–8.2.8
Chú ý thêm: bảng hỏi mẫu hoàn chỉnh nếu video có (chép cấu trúc: phần gạn lọc, phần chính,
phần thông tin cá nhân); dàn bài phỏng vấn định tính mẫu nếu có.
```

**Buổi 11**
```
BUỔI 11 — BÀI 8 (tiếp): ĐI SÂU 8.2.1–8.2.4
8.2.1 Xác định vấn đề cần thu thập · 8.2.2 Dạng phỏng vấn · 8.2.3 Đánh giá nội dung câu hỏi ·
8.2.4 Hình thức trả lời
Chú ý thêm: các dạng câu hỏi (mở, đóng, đa lựa chọn, thang đo…) kèm ví dụ; tiêu chí đánh giá
một câu hỏi; ví dụ câu hỏi SAI và cách sửa.
```

**Buổi 12**
```
BUỔI 12 — BÀI 8 (tiếp): ĐI SÂU 8.2.5–8.2.8
8.2.5 Cách dùng thuật ngữ · 8.2.6 Cấu trúc bảng câu hỏi · 8.2.7 Hình thức bảng câu hỏi ·
8.2.8 Thử lần thứ nhất, sửa chữa, bản nháp cuối cùng
Chú ý thêm: lỗi dùng từ (câu hỏi dẫn dắt, câu hỏi kép, từ mơ hồ…) kèm ví dụ sai/đúng; thứ tự
các phần của bảng hỏi; cách thực hiện phỏng vấn thử (pilot); cách tạo bảng hỏi online nếu có
nhắc; nội dung về nhập liệu, mã hóa dữ liệu nếu video có.
```

**Buổi 13**
```
BUỔI 13 — BÀI 9: PHÂN TÍCH DỮ LIỆU
9.1 Hiệu chỉnh dữ liệu · 9.2 Mã hóa dữ liệu (kiểu mã hóa, nguyên tắc) · 9.3 Phân tích dữ liệu
(9.3.1 mô tả · 9.3.2 đơn biến · 9.3.3 nhị biến)
Chú ý thêm: thao tác phần mềm TỪNG BƯỚC (tên menu, lệnh, tùy chọn) với SPSS/Excel/công cụ
khác được dùng; bảng kết quả (output) mẫu và cách đọc, cách diễn giải; các kiểm định nhị biến
được dạy (ví dụ bảng chéo, Chi-square, T-test, ANOVA, tương quan…) — điều kiện dùng, giả
thuyết, ngưỡng sig.; mã hóa dữ liệu định tính nếu có; mọi nội dung về Cronbach's Alpha, EFA,
hồi quy nếu video có (đánh dấu là nội dung nâng cao).
```

**Bài 10 (tự học e-learning)**
```
BÀI 10: BÁO CÁO KẾT QUẢ NGHIÊN CỨU (dùng cho tài liệu tự học)
10.1 Bản báo cáo nghiên cứu marketing (vai trò, phân loại) · 10.2 Nội dung báo cáo dành cho
người sử dụng · 10.3 Nguyên tắc soạn báo cáo (trình bày bảng, trình bày biểu đồ)
Chú ý thêm: cấu trúc chương mục của báo cáo / tiểu luận được giới thiệu; ví dụ bảng, biểu đồ
đúng và sai; cách viết kết luận và hàm ý quản trị.
```

## Gửi kết quả cho Claude

- Dán **nguyên văn** câu trả lời của NotebookLM, giữ cả trích dẫn và mốc thời gian.
- Ghi rõ đầu tin nhắn: `Kết quả NotebookLM — Buổi X`.
- Kèm ảnh chụp những slide/sơ đồ mà NotebookLM ghi `[CÓ HÌNH]` hoặc không mô tả được.
