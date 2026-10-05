# Bài giảng — Buổi 5: Bài 3 (tiếp) · AI trong nghiên cứu: hạn chế, ứng dụng, công cụ và câu lệnh

MKT1107 Nghiên cứu Marketing · Buổi 5 · 150 phút · Giảng viên: Đoàn Nguyễn Bảo Quyên

> Bài giảng viết theo các phân đoạn (S1–S8) của `W5_lesson_plan.md`. Chữ nghiêng trong ngoặc là
> **ghi chú cho giảng viên** (cách nói, lúc dừng, lúc hỏi) — không phải nội dung đọc to.
> Độ dài mỗi phần tính theo khoảng 120–140 từ/phút nói.
>
> **Nguồn:** tài liệu học tập Bài 3 mục 3.5–3.8 (`tai_lieu_hoc_tap/Bai03.md` — nội dung chuẩn, bài
> giảng nhất quán với tài liệu này); slide UEF Bài 3 #7–#21; video "Unlock AI's Potential in Market
> Research" (qua bản trích NotebookLM — ví dụ thiên lệch tuyển dụng, phân tích cảm xúc, dự báo, khảo
> sát tự động); đề cương MKT1107. Tình huống ghi **(giả định)** là do Claude dựng để minh họa. Mọi chỗ
> cần giảng viên kiểm tra gắn `[VERIFY]` và được tổng hợp ở cuối tài liệu.
>
> **Lưu ý chung:** tên và tính năng công cụ AI thay đổi rất nhanh. Bài giảng nhấn vào **nguyên tắc**
> (kiểm chứng, chọn công cụ theo việc, cấu trúc câu lệnh, khai báo) — những thứ ít thay đổi.

---

## S1 · Khởi động (0–10') — "AI đã bịa bao nhiêu trích dẫn?"

*(Chiếu slide 2. Trước giờ học, hỏi nhanh 2–3 nhóm xem ai sẵn sàng báo cáo; ưu tiên một nhóm phát hiện
nhiều trích dẫn sai và một nhóm phát hiện ít.)*

Buổi trước, mỗi nhóm đã dùng công cụ AI để tìm và tóm tắt tài liệu cho đề tài, rồi **kiểm chứng từng
trích dẫn** AI đưa ra. Hôm nay chúng ta bắt đầu bằng kết quả của chính các bạn.

*(Mời 1–2 nhóm, mỗi nhóm khoảng 2 phút, trả lời ba câu:)*

1. Nhóm dùng công cụ gì, câu lệnh ra sao?
2. AI đưa ra **bao nhiêu** tài liệu? Bao nhiêu tài liệu **có thật và đúng** như AI mô tả, bao nhiêu
   **có thật nhưng sai thông tin** (sai năm, sai tác giả, sai nội dung), bao nhiêu **không tồn tại**?
3. Nhóm phát hiện tài liệu bịa bằng cách nào?

*(Ghi lên bảng ba cột: **Đúng · Có thật nhưng sai · Không tồn tại**, điền số của các nhóm báo cáo.
Hỏi cả lớp: "Nhóm nào gặp ít nhất một trích dẫn không tồn tại? Giơ tay." Đếm nhanh, ghi số lên bảng.
Không bình luận lỗi gắn với tên nhóm — nói về "kiểu lỗi".)*

*(Những kiểu sai thường gặp để gọi tên nếu nhóm chưa nói: tên bài nghe rất hợp lý nhưng không tìm được
trên Google Scholar; tác giả có thật nhưng không viết bài đó; DOI dẫn sang bài khác; năm/tạp chí sai;
tóm tắt "nói thay" bài báo những điều bài báo không nói.)*

Điều đáng chú ý không phải là con số, mà là **giọng văn**: tài liệu bịa được trình bày tự tin, đúng
định dạng APA, y như tài liệu thật. Nếu nhóm không kiểm, nó đã đi thẳng vào bài nộp — và trích một tài
liệu không tồn tại là lỗi của người nộp bài.

Câu chốt (ghi lên bảng): **"Trôi chảy không có nghĩa là đúng."** Hôm nay chúng ta học tiếp nửa sau
của Bài 3: vì sao AI sai như vậy, AI làm được gì, dùng công cụ nào cho việc nào, và cách ra lệnh để
AI giúp mình tốt hơn — mà vẫn đúng quy định.

*(Chuyển sang slide 3 — lộ trình phần 2 và 3 của Bài 3 [UEF #2].)*

---

## S2 · 3.5 Ưu điểm và hạn chế của AI (10–28')

### 2.1 Ưu điểm (khoảng 3')

*(Chiếu slide 4. Đi nhanh — sinh viên đã cảm nhận được ưu điểm qua Buổi 4.)*

Theo tài liệu học tập, AI có sáu ưu điểm chính:

1. **Xử lý khối lượng lớn dữ liệu rất nhanh** — đọc hàng nghìn bình luận trong vài phút.
2. **Làm việc liên tục, không mệt mỏi.**
3. **Tự động hóa việc lặp lại:** tóm tắt, dịch, định dạng.
4. **Gợi ý ý tưởng, mở rộng góc nhìn** khi nhóm bị bí.
5. **Phát hiện mẫu hình** trong dữ liệu mà con người dễ bỏ sót.
6. **Hỗ trợ người không chuyên** tiếp cận kỹ thuật phức tạp.

Video bài giảng nhấn thêm một ý đáng nhớ: AI **giải phóng nhà nghiên cứu khỏi việc xử lý dữ liệu thủ
công** để dành thời gian cho phần quan trọng hơn — **diễn giải kết quả và suy nghĩ chiến lược**. Nói
cách khác: AI lấy đi phần việc tay chân, không lấy đi phần việc của bộ óc.

*(Ghi chú cho giảng viên: slide UEF #7 ghi "Xử lý siêu dữ liệu (Big Data) chính xác" và "Giảm thiểu lỗi
do con người" — nên nói rõ "giảm lỗi thao tác", không phải "luôn chính xác"; ngay sau đây là ảo giác.)*

### 2.2 Hạn chế — bảy điểm, ba điểm nguy hiểm nhất (khoảng 2')

*(Chiếu slide 5. Slide UEF #7 chỉ có 4 hạn chế; dùng đủ 7 theo tài liệu học tập.)*

1. **Ảo giác (hallucination)** — tạo thông tin sai nhưng trình bày rất tự tin.
2. **Thiên lệch** theo dữ liệu huấn luyện.
3. **Kiến thức có hạn thời gian** — có thể không biết sự kiện mới.
4. **Thiếu hiểu biết bối cảnh** địa phương, văn hóa, ngành cụ thể.
5. **Khó giải thích** vì sao đưa ra kết quả — kiểu "hộp đen".
6. **Rủi ro bảo mật và quyền riêng tư** khi đưa dữ liệu cá nhân lên công cụ.
7. **Phụ thuộc** — dùng thay vì học làm người dùng mất kỹ năng tư duy.

UEF #7 có thêm "chi phí triển khai cao" — đúng với doanh nghiệp xây hệ thống AI riêng, ít liên quan
đến sinh viên dùng công cụ có sẵn.

Với người làm nghiên cứu, ba hạn chế nguy hiểm nhất là **ảo giác, thiên lệch và quyền riêng tư**. Ta
đi sâu từng cái.

### 2.3 Ảo giác: vì sao AI bịa, và cách kiểm trong hai phút (khoảng 5')

*(Chiếu slide 6.)*

Nhắc lại điều đã học ở Buổi 4: AI tạo sinh tạo ra văn bản **"trông hợp lý" dựa trên xác suất** — nó
không tra cứu một kho sự thật. Khi các bạn hỏi "cho tôi 5 bài báo về ý định mua mỹ phẩm nội địa", AI
biết một bài báo "trông như thế nào": tên tác giả, năm, tên bài có từ khóa, tạp chí, DOI. Nó có thể
**ghép** những mảnh đó thành một tài liệu chưa từng tồn tại. Đó là lý do các bạn thấy ở Buổi 4: tài
liệu bịa luôn **đúng định dạng**.

**Giải phẫu một trích dẫn bịa** *(ví dụ giả định, chiếu trên slide — ghi rõ "giả định")*:

> Nguyễn, T. H., & Trần, M. A. (2021). Ảnh hưởng của KOL đến ý định mua mỹ phẩm nội địa của sinh viên
> TP.HCM. *Tạp chí Nghiên cứu Marketing Việt Nam, 12*(3), 45–60.

Có vẻ thật: tên tác giả Việt phổ biến, chủ đề sát đề tài, đủ số tập, số trang. Nhưng: tên tạp chí có
thể không tồn tại; không có DOI; không tìm thấy trên Google Scholar.

**Quy trình kiểm 3 bước** (dùng cho mọi tài liệu AI gợi ý):

1. **Tìm đúng tên bài** (đặt trong ngoặc kép) trên Google Scholar hoặc trang tạp chí.
2. **Mở bản gốc** (ít nhất trang tóm tắt) — bài có thật không? tác giả, năm, tạp chí có khớp không?
3. **Khớp nội dung** — bài có thực sự nói điều AI tóm tắt không? Nếu có DOI, mở DOI xem có dẫn đúng
   bài không.

Không qua được bước nào thì **không trích**. Và đừng hỏi lại chính AI "tài liệu này có thật không?" —
nó có thể trả lời "có" một cách tự tin.

*(Hỏi: "Ở Buổi 4, nhóm nào đã hỏi lại AI để kiểm tra và được AI khẳng định là có thật?" — thường có
vài tay giơ lên. Dùng để nhấn mạnh: kiểm chứng phải đi ra **ngoài** công cụ.)*

> **Lỗi hiểu thường gặp — "Công cụ có trích dẫn nguồn thì không cần kiểm."** Công cụ có dẫn nguồn
> giúp kiểm **dễ hơn**, không thay việc kiểm: nguồn có thể có thật nhưng không nói điều công cụ tóm
> tắt, hoặc là một trang web không đáng tin.

### 2.4 Thiên lệch: ví dụ AI phân tích tuyển dụng (khoảng 4')

*(Chiếu slide 8.)*

Bài trước đã học: AI học quy tắc **từ dữ liệu** (Russell & Norvig, 2021). Hệ quả: **dữ liệu thiên lệch thì kết quả thiên lệch**.

Video bài giảng đưa một ví dụ: nếu một công cụ AI được dùng để phân tích **xu hướng tuyển dụng** và
được huấn luyện trên dữ liệu tuyển dụng trong quá khứ — mà trong quá khứ công ty chủ yếu tuyển một
nhóm người nhất định (ví dụ một giới tính, một độ tuổi, một nhóm trường) — thì AI sẽ "học" rằng nhóm đó
là "ứng viên tốt" và **ưu ái nhóm nhân khẩu học đó**, dẫn đến kết quả bất công hoặc phân biệt đối xử.
AI không "có ý" phân biệt; nó chỉ lặp lại — và khuếch đại — định kiến có sẵn trong dữ liệu.

*(Ghi chú cho giảng viên: video chỉ nêu nguyên tắc, không có tên doanh nghiệp hay số liệu — dạy như ví
dụ minh họa. Nếu muốn dẫn một trường hợp thật được báo chí đưa tin, cần nguồn gốc `[VERIFY]`.)*

*(Hỏi: "Một công ty dùng AI lọc CV, dữ liệu huấn luyện là CV của những người được tuyển 10 năm qua.
Rủi ro là gì?" — chờ 1–2 câu trả lời.)*

**Thiên lệch chạm đến dự án của chính các bạn** *(slide 9)* — không cần đến AI tuyển dụng:

- Trợ lý AI được huấn luyện phần lớn trên **nguồn tiếng Anh và thị trường phương Tây**. Hỏi "các yếu tố
  ảnh hưởng đến ý định mua trà sữa", câu trả lời có thể nghiêng về nghiên cứu ở Mỹ, châu Âu, bỏ sót
  bối cảnh Việt Nam (giá, kênh bán qua ứng dụng giao đồ ăn, văn hóa uống cùng bạn bè).
- AI có xu hướng **đồng ý với người hỏi**: câu lệnh "Chứng minh rằng KOL làm tăng ý định mua" sẽ nhận
  về lập luận ủng hộ, không phải đánh giá khách quan. Đây chính là lỗi "khảo sát để chứng minh ý sếp"
  ở Bài 1 — chỉ là bây giờ do chính mình gây ra.

Cách giảm: nêu rõ bối cảnh Việt Nam trong câu lệnh; yêu cầu AI nêu **cả bằng chứng ủng hộ và phản
bác**; đối chiếu với tài liệu trong nước (Google Scholar với từ khóa tiếng Việt).

### 2.5 Quyền riêng tư (khoảng 2')

*(Chiếu slide 10.)*

Video bài giảng gọi chung ba rủi ro đạo đức của AI: **quyền riêng tư dữ liệu, thiên lệch, và thiếu
minh bạch**. Riêng với dự án của các bạn, quyền riêng tư sẽ trở thành vấn đề thật từ Buổi 11–13, khi
nhóm có dữ liệu khảo sát/phỏng vấn:

- **Không tải lên công cụ AI** tên, số điện thoại, email, mã số sinh viên, hay câu trả lời có thể nhận
  ra người tham gia.
- **Ẩn danh trước** (thay tên bằng mã "PV01, PV02…"), rồi mới nhờ AI gợi ý mã hóa chủ đề.
- **Đọc điều khoản** của công cụ: dữ liệu có được dùng để huấn luyện mô hình không?

Nhắc lại nguyên tắc đạo đức ở Bài 1: người trả lời đồng ý tham gia **nghiên cứu của nhóm**, không đồng
ý để câu trả lời của họ được gửi cho một công ty công nghệ.

*(Ghi chú cho giảng viên: nếu muốn nêu căn cứ pháp lý, đối chiếu Nghị định 13/2023/NĐ-CP về bảo vệ dữ
liệu cá nhân và Luật Bảo vệ dữ liệu cá nhân 2025 `[VERIFY: số hiệu, ngày hiệu lực]`. Trên slide chỉ ghi
chung "quy định pháp luật về bảo vệ dữ liệu cá nhân".)*

### 2.6 Ba cách giảm rủi ro và quy tắc vàng (khoảng 2')

*(Chiếu slide 11.)*

Video đề xuất ba bước giảm rủi ro đạo đức — áp dụng cho doanh nghiệp, nhưng dịch sang việc của sinh
viên rất dễ:

| Video (doanh nghiệp) | Với nhóm sinh viên |
|---|---|
| Quản lý và xử lý dữ liệu có trách nhiệm | Ẩn danh dữ liệu người trả lời; không tải dữ liệu cá nhân lên công cụ |
| Minh bạch trong quy trình AI | Khai báo công cụ, mục đích; nộp nhật ký AI |
| Kiểm tra (kiểm toán) thuật toán định kỳ | Kiểm chứng từng kết quả AI với nguồn gốc |

**Quy tắc vàng (ghi lên bảng):** *AI là trợ lý, không phải tác giả. Bạn chịu trách nhiệm hoàn toàn về
mọi nội dung nộp đi, kể cả phần do AI gợi ý.*

*(Hỏi một bạn: "Dự án của nhóm bạn có thể bị thiên lệch ở chỗ nào nếu dựa vào AI?" Một câu trả lời là
đủ.)*

---

## S3 · 3.6 Ứng dụng của AI (28–45')

### 3.1 Bức tranh đa ngành (khoảng 2')

*(Chiếu slide 12 — giữ hình UEF #8, bổ sung ô "Sản xuất".)*

Đề cương liệt kê ứng dụng của AI trong nhiều ngành: giao thông (xe tự lái, tối ưu tuyến đường), sản
xuất, y tế (hỗ trợ chẩn đoán, phát triển thuốc), tài chính – ngân hàng (đánh giá rủi ro tín dụng, phát
hiện gian lận), truyền thông (cá nhân hóa nội dung), trợ lý ảo, giáo dục (cá nhân hóa lộ trình học).
Không cần nhớ hết danh sách. Điểm chung: AI được dùng ở chỗ có **nhiều dữ liệu** và **việc lặp lại
cần nhận diện mẫu hình**.

*(Ghi chú cho giảng viên: slide UEF #8 thiếu "sản xuất" dù đề cương có (3.6.2) → bổ sung ở slide 13.
Ví dụ "IBM Watson chẩn đoán bệnh" trên UEF #8 nên bỏ tên riêng hoặc nói "các hệ thống hỗ trợ chẩn
đoán" — hiệu quả thực tế của Watson trong y tế từng gây tranh cãi `[VERIFY nếu giữ]`.)*

### 3.2 Trong sản xuất và kinh doanh (khoảng 2')

*(Chiếu slide 13.)*

- **Kiểm tra chất lượng bằng thị giác máy:** camera và AI phát hiện sản phẩm lỗi trên dây chuyền.
- **Bảo trì dự đoán:** dự báo máy móc sắp hỏng từ dữ liệu cảm biến để sửa trước.
- **Dự báo nhu cầu:** ước lượng lượng hàng cần sản xuất, nhập kho.
- **Chăm sóc khách hàng:** chatbot trả lời câu hỏi thường gặp.

Nối với marketing: dự báo nhu cầu là chỗ sản xuất và nghiên cứu marketing gặp nhau — dữ liệu bán hàng
và hành vi khách hàng đi vào cùng một mô hình dự báo.

### 3.3 Trong nghiên cứu khoa học (khoảng 4')

*(Chiếu slide 14. Đây là bảng quan trọng nhất của S3 — vì nó là "bản đồ" các nhóm sẽ dùng AI trong dự
án.)*

| Giai đoạn nghiên cứu | AI có thể hỗ trợ | Người nghiên cứu vẫn phải làm |
|---|---|---|
| Hình thành ý tưởng | Gợi ý hướng, đặt câu hỏi phản biện | Chọn vấn đề có ý nghĩa với quyết định quản trị |
| Tìm và đọc tài liệu | Tìm bài báo liên quan, tóm tắt, so sánh | Mở từng bài gốc, kiểm tra bài có thật và nói đúng như tóm tắt |
| Thiết kế công cụ | Gợi ý câu hỏi, phát hiện câu hỏi kép, câu hỏi dẫn dắt | Dựa trên thang đo đã công bố; thử trên người thật |
| Phân tích dữ liệu định tính | Gợi ý mã hóa, nhóm chủ đề ban đầu | Đọc lại dữ liệu gốc, quyết định chủ đề cuối cùng |
| Viết báo cáo | Góp ý văn phong, ngữ pháp, cấu trúc | Tự viết lập luận và diễn giải kết quả |

Đọc cột phải trước. Mỗi dòng của cột phải là một việc **không thể giao cho AI** — vì nó đòi hỏi
**phán đoán** và **trách nhiệm**. Hôm nay, trong phần thực hành, các bạn sẽ làm dòng đầu tiên: dùng AI
**đặt câu hỏi phản biện** cho vấn đề nghiên cứu, còn nhóm **chọn** nghe hay không.

*(Ghi chú cho giảng viên: slide UEF #9 có ô "Phát hiện quy luật" lặp hai lần và tiêu đề lặp chữ
"Khoa Học Học"; ô "Tự động hóa tri thức — đề xuất giả thuyết mới" dễ khiến sinh viên nghĩ AI tự làm
nghiên cứu. Thay bằng bảng trên.)*

### 3.4 Trong nghiên cứu marketing (khoảng 6')

*(Chiếu slide 15 — dùng sơ đồ UEF #10 làm nền, bổ sung 3 ứng dụng theo video.)*

Video bài giảng nêu ba nhóm ứng dụng AI trong nghiên cứu thị trường:

1. **Phân tích cảm xúc người tiêu dùng (consumer sentiment analysis):** AI xử lý bình luận, bài đăng
   trên mạng xã hội để nhận diện thái độ tích cực/tiêu cực về thương hiệu — còn gọi là **lắng nghe mạng
   xã hội (social listening)**.
2. **Phân tích dự báo (predictive analytics):** phân tích lịch sử mua hàng để **dự báo doanh số**,
   khả năng khách hàng rời bỏ, hoặc dự đoán khả năng thành công của một sản phẩm mới.
3. **Tự động hóa thu thập và phân tích dữ liệu:** chatbot, **khảo sát tự động** chạy liên tục, thu thập
   dữ liệu web; AI hỗ trợ làm sạch, mã hóa, phân tích chủ đề. Video nêu tình huống: một hệ thống khảo
   sát tự động liên tục thu phản hồi khách hàng, AI phân tích để nhận diện **xu hướng mới nổi** và
   **điểm cần cải thiện**.

Tài liệu học tập bổ sung: **phân khúc khách hàng** từ dữ liệu hành vi mua, **phân tích câu trả lời mở**
số lượng lớn, **thử nghiệm A/B** và cá nhân hóa nội dung quảng cáo. UEF #10 có thêm "quản trị giá" (dự
báo tác động của giảm giá đến doanh số).

Vòng quy trình video mô tả: **AI phân tích dữ liệu khách hàng → đề xuất chiến lược hoặc mô phỏng kịch
bản → doanh nghiệp ra quyết định**. Để ý mũi tên cuối: người ra quyết định vẫn là doanh nghiệp — đúng
như Bài 1: nghiên cứu (kể cả có AI) không ra quyết định thay nhà quản trị.

*(Ghi chú cho giảng viên: video không nêu tên doanh nghiệp hay số liệu nào cho các ứng dụng này — không
thêm ví dụ thương hiệu thật có số liệu.)*

**Ví dụ (giả định) — slide 16:** một thương hiệu mỹ phẩm nội địa thu thập **20.000 bình luận** trên
sàn thương mại điện tử. AI phân loại bình luận theo chủ đề (bao bì, mùi hương, giao hàng, giá) và cảm
xúc. Nhóm nghiên cứu **đọc mẫu ngẫu nhiên vài trăm bình luận** để kiểm tra AI phân loại có đúng không
— ví dụ "thơm muốn xỉu" có bị xếp nhầm vào tiêu cực không, câu mỉa mai "giao nhanh ghê, 2 tuần mới tới"
có bị xếp nhầm vào tích cực không. Chỉ khi tỷ lệ đúng chấp nhận được, nhóm mới dùng kết quả — và dùng
để **đặt giả thuyết** cho khảo sát tiếp theo, không phải để kết luận.

*(Hỏi: "Vì sao tiếng lóng và câu mỉa mai đặc biệt khó với AI khi phân tích bình luận tiếng Việt?" →
nối lại hạn chế "thiếu hiểu biết bối cảnh địa phương".)*

### 3.5 Câu hỏi nhanh (khoảng 3')

*(Chiếu slide 17. Đọc từng việc; cả lớp giơ tay: 1 ngón = "giao được cho AI (có kiểm tra)", 2 ngón =
"nhóm phải tự làm".)*

1. Gợi ý từ khóa tiếng Anh để tìm tài liệu trên Google Scholar. → **1** (có kiểm tra kết quả tìm).
2. Quyết định nghiên cứu nhóm theo hướng định tính hay định lượng. → **2** (AI có thể nêu ý, nhóm quyết
   định).
3. Phát hiện câu hỏi kép trong bản nháp bảng hỏi. → **1** (rồi thử với người thật).
4. Viết đoạn diễn giải "kết quả cho thấy…" cho bảng thống kê. → **2** (tự diễn giải; không dùng chatbot
   diễn giải kết quả thống kê).

*(Câu 2 là cầu nối sang thực hành hôm nay.)*

---

## Giải lao (45–60')

---

## S4 · 3.7 Công cụ AI hỗ trợ nghiên cứu (60–70')

### 4.1 Hai nhóm công cụ (khoảng 4')

*(Chiếu slide 19.)*

Đề cương và slide UEF chia công cụ thành hai nhóm. Tài liệu học tập giữ cách chia này, gọi tên theo
**chức năng** để các bạn chọn đúng — vì tên công cụ đổi rất nhanh:

| | Nhóm 1: Trợ lý đa năng (chatbot) | Nhóm 2: Công cụ chuyên cho tài liệu học thuật |
|---|---|---|
| Ví dụ | ChatGPT, Gemini, Claude, Copilot | Google Scholar, Semantic Scholar, Elicit, Consensus, Research Rabbit, NotebookLM |
| Mạnh ở | Giải thích khái niệm, gợi ý ý tưởng, góp ý văn phong, phản biện | Tìm bài báo có thật, liên kết đến nguồn gốc, tóm tắt từ tài liệu bạn cung cấp |
| Rủi ro chính | Bịa nguồn, bịa số liệu | Phạm vi cơ sở dữ liệu có hạn; tóm tắt vẫn có thể sai |
| Không dùng để | Lấy danh mục tài liệu tham khảo | Thay thế việc đọc bài gốc |

Đề cương (3.7.1–3.7.2) nêu nhóm 1 gồm ChatGPT, Gemini (tiền thân Google Bard), Copilot (tiền thân Bing
Chat); nhóm 2 gồm NotebookLM, Elicit, Perplexity, Consensus, iAsk. **Perplexity** và **iAsk** là công
cụ tìm kiếm – trả lời có kèm nguồn: tiện để định hướng, nhưng nguồn kèm theo có thể là trang web không
học thuật — vẫn phải mở và đánh giá như đã học ở Buổi 2.

`[VERIFY: tên, tình trạng miễn phí/giới hạn và tính năng của từng công cụ tại thời điểm dạy; slide
UEF #13 mô tả iAsk là "tối ưu hóa câu hỏi" và Elicit là "tìm đối thủ/xu hướng" — chưa chuẩn, không dùng
nguyên văn.]`

**NotebookLM** đáng nói riêng một câu: nó trả lời **dựa trên tài liệu bạn tải lên** và chỉ ra đoạn
trích — nên rất hợp để hỏi đáp trên bộ bài báo nhóm đã tải về và đã kiểm chứng. Nhưng nó chỉ tốt bằng
bộ tài liệu đầu vào.

### 4.2 Chọn công cụ theo việc cần làm (khoảng 4')

*(Chiếu slide 20.)*

| Việc cần làm | Công cụ phù hợp | Cách kiểm chứng |
|---|---|---|
| Hiểu một khái niệm mới | Trợ lý đa năng | Đối chiếu giáo trình |
| Tìm bài báo cho tổng quan tài liệu | Google Scholar, Semantic Scholar, Elicit, Consensus | Mở bài gốc, kiểm tra DOI |
| Tìm các bài liên quan đến một bài đã có | Research Rabbit, "Cited by" trên Google Scholar | Đọc tóm tắt từng bài |
| Tóm tắt, hỏi đáp trên bộ tài liệu nhóm đã tải về | NotebookLM | Xem đoạn trích dẫn công cụ chỉ ra |
| Góp ý bảng hỏi | Trợ lý đa năng | Thử bảng hỏi với 3–5 người thật |
| Phân tích thống kê | **Phần mềm thống kê** (SPSS, Jamovi, Excel, R…) | So sánh với bảng kết quả gốc của phần mềm |

*(Hỏi: "Ở Buổi 4, nhóm nào đã dùng chatbot để lấy danh mục tài liệu? Nhìn lại bảng: lẽ ra nên dùng
công cụ nào?")*

### 4.3 Chatbot không thay phần mềm thống kê (khoảng 2')

*(Chiếu slide 21 — UEF #12.)*

Hai lưu ý quan trọng — viết thành quy định của học phần:

1. **Tên và tính năng công cụ thay đổi liên tục;** có công cụ miễn phí giới hạn lượt dùng. Kiểm tra
   điều khoản trước khi tải dữ liệu lên.
2. **Không dùng chatbot để tự chạy phân tích số liệu định lượng hay diễn giải kết quả thống kê thay
   bạn.** Chatbot có thể tính sai hoặc bịa số mà trông vẫn hợp lý. Phân tích phải chạy trên phần mềm
   thống kê, và các bạn phải tự hiểu, tự giải thích được từng con số trong báo cáo (Buổi 13).

UEF #12 tóm gọn: nên dùng LLM để tổng hợp bức tranh chung, hỗ trợ phân tích **định tính** (gợi ý chủ
đề, tóm tắt phỏng vấn — sau khi ẩn danh), khơi gợi ý tưởng, biên tập, dịch; **không** dùng để phân
tích dữ liệu định lượng hay diễn giải kết quả thống kê; luôn kiểm chứng.

---

## S5 · 3.8 Cách đặt câu lệnh (prompt) hỗ trợ nghiên cứu (70–88')

### 5.1 Sáu nguyên tắc chung (khoảng 3')

*(Chiếu slide 22.)*

Một **câu lệnh (prompt)** là yêu cầu bạn gửi cho công cụ AI. Câu lệnh mơ hồ nhận về câu trả lời
chung chung — và chung chung là nơi ảo giác dễ xảy ra nhất. Sáu nguyên tắc (theo tài liệu học tập):

1. **Cụ thể:** nói rõ bạn là ai, cần gì, để làm gì.
2. **Cung cấp bối cảnh:** đề tài, đối tượng nghiên cứu, thị trường Việt Nam.
3. **Yêu cầu định dạng:** bảng, gạch đầu dòng, số từ.
4. **Chia nhỏ việc lớn** thành nhiều bước và hỏi tiếp — hội thoại nhiều lượt (slide UEF #14 gọi là
   "chain prompting").
5. **Yêu cầu AI nói rõ khi không chắc** và không bịa nguồn.
6. **Luôn kiểm chứng** kết quả trước khi dùng.

*(Ghi chú cho giảng viên: UEF #14 có nguyên tắc "Sử dụng hàm 'System' — tương tác với cài đặt gốc".
Với sinh viên dùng giao diện chat thông thường, nói đơn giản: nhiều công cụ cho phép đặt **hướng dẫn
chung** áp dụng cho mọi cuộc trò chuyện, ví dụ "luôn nói rõ khi không chắc chắn". Không đi sâu.)*

### 5.2 Các "nút vặn" của một câu lệnh (khoảng 2')

*(Chiếu slide 23 — gộp UEF #16 và #17.)*

Ngoài nội dung, có thể điều chỉnh: **vai trò** AI đóng (nhà nghiên cứu, người phản biện…), **người
đọc** (sinh viên năm hai, giám đốc marketing), **giọng điệu** (học thuật, thân thiện), **độ dài và
nền tảng** (100 từ, báo cáo, email), và **cấu trúc** câu trả lời (theo thời gian · so sánh – tương
phản · nguyên nhân – kết quả · vấn đề – giải pháp · tường thuật).

### 5.3 Bốn khung câu lệnh (khoảng 8')

*(Chiếu slide 24 — bảng tổng quan; sau đó mỗi khung 1 slide, đọc to ví dụ, chỉ vào từng thành phần.)*

| Khung | Thành phần | Phù hợp khi |
|---|---|---|
| **R-T-F** | Role (vai trò) – Task (nhiệm vụ) – Format (định dạng) | Việc đơn giản, cần kết quả nhanh |
| **T-A-G** | Task (nhiệm vụ) – Action (hành động) – Goal (mục tiêu) | Cần AI hiểu kết quả dùng để làm gì |
| **B-A-B** | Before (hiện trạng) – After (mong muốn) – Bridge (cách đi từ hiện trạng đến mong muốn) | Cần cải thiện một sản phẩm đã có (bảng hỏi, đoạn văn) |
| **C-A-R-E** | Context (bối cảnh) – Action (hành động) – Result (kết quả mong đợi) – Example (ví dụ mẫu) | Việc phức tạp, muốn kết quả theo đúng mẫu |

Khung không phải công thức thần kỳ — nó là **danh sách kiểm tra** để không quên nói với AI điều nó cần
biết. Bốn ví dụ dưới đây lấy từ tài liệu học tập, đều gắn với dự án nghiên cứu.

**R-T-F — hiểu khái niệm** *(slide 25)*:

> Bạn là giảng viên nghiên cứu marketing **(R)**. Hãy giải thích sự khác nhau giữa nghiên cứu khám phá
> và nghiên cứu mô tả cho sinh viên năm hai **(T)**. Trình bày bằng bảng so sánh 4 tiêu chí, mỗi loại
> một ví dụ về ngành trà sữa tại Việt Nam **(F)**.

**T-A-G — tìm hướng tổng quan tài liệu** *(slide 26)*:

> Nhóm tôi nghiên cứu các yếu tố ảnh hưởng đến ý định mua mỹ phẩm nội địa của sinh viên **(T)**. Hãy
> liệt kê các lý thuyết và biến thường được dùng trong chủ đề này và gợi ý từ khóa tiếng Anh để tìm
> trên Google Scholar **(A)**. Mục tiêu là định hướng việc tìm tài liệu; không liệt kê bài báo cụ thể
> nếu bạn không chắc chắn bài đó tồn tại **(G)**.

*(Chỉ vào câu cuối: đó là nguyên tắc 5 được viết thẳng vào câu lệnh. Và để ý: câu lệnh xin **lý thuyết,
biến, từ khóa** — những thứ dùng để **tự đi tìm** — chứ không xin danh mục tài liệu.)*

**B-A-B — cải thiện bảng hỏi** *(slide 27)*:

> Đây là 5 câu hỏi khảo sát nhóm tôi đang có: [dán câu hỏi] **(Before)**. Chúng tôi muốn các câu hỏi rõ
> ràng, trung lập, mỗi câu chỉ hỏi một ý **(After)**. Hãy chỉ ra câu nào là câu hỏi kép, câu nào dẫn
> dắt, giải thích lý do và đề xuất cách sửa **(Bridge)**.

**C-A-R-E — thiết kế hướng dẫn phỏng vấn** *(slide 28)*:

> Nhóm tôi làm nghiên cứu định tính về lý do sinh viên chọn ứng dụng giao đồ ăn, phỏng vấn sâu 8 sinh
> viên **(C)**. Hãy gợi ý 8–10 câu hỏi mở cho buổi phỏng vấn 30 phút **(A)**. Kết quả chia 3 phần: mở
> đầu, nội dung chính, kết thúc; mỗi câu chính có 1 câu hỏi gợi mở thêm **(R)**. Ví dụ một câu: "Bạn kể
> lại lần gần nhất bạn đặt đồ ăn qua ứng dụng?" **(E)**.

*(Ghi chú cho giảng viên — vì sao không dùng ví dụ trên slide UEF #18–#21: (1) ví dụ R-T-F yêu cầu AI
"cung cấp cơ sở lý thuyết… dạng bảng gồm tác giả, năm, trích dẫn" — đúng kiểu câu lệnh sinh ra trích
dẫn bịa mà lớp vừa phân tích ở S1; (2) ví dụ T-A-G trộn "Đóng vai chuyên gia" (thuộc Role) vào phần
Action; (3) ví dụ C-A-R-E yêu cầu AI "tổng hợp các nghiên cứu liên quan" — lại là xin danh mục tài liệu,
và phần "Example" không phải ví dụ mẫu đầu ra. Giữ phần khung và template của UEF, thay phần ví dụ bằng
ví dụ trong tài liệu học tập. Có thể dùng ví dụ R-T-F gốc của UEF như **ví dụ cần sửa** nếu dư giờ.)*

### 5.4 Sửa câu lệnh theo cặp (khoảng 5')

*(Chiếu slide 29. Kịch bản trong `W5_activity_sua_cau_lenh.md`.)*

Câu lệnh gốc: **"Viết bảng hỏi về trà sữa."** — câu ôn tập số 6 trong tài liệu học tập. Theo cặp,
2 phút: (1) chỉ ra câu lệnh thiếu gì; (2) viết lại theo R-T-F. Mời 2–3 cặp đọc to; cả lớp chỉ ra từng
thành phần R, T, F.

*(Đáp án mong đợi và lỗi thường gặp: xem phiếu hoạt động.)*

---

## S6 · Đạo đức, quy định AI của học phần và trích dẫn AI (88–98')

### 6.1 Ranh giới giữa hỗ trợ và làm thay (khoảng 2')

*(Chiếu slide 30 — UEF #15, bổ sung theo tài liệu học tập.)*

| Nên | Không nên |
|---|---|
| Dùng AI để hiểu bài, gợi ý ý tưởng, góp ý văn phong | Nộp nguyên văn nội dung AI viết như bài của mình |
| Kiểm chứng mọi nguồn, số liệu, khái niệm | Trích dẫn tài liệu chỉ vì AI nói nó tồn tại |
| Khai báo rõ công cụ và cách đã dùng | Dùng AI tạo dữ liệu khảo sát, phỏng vấn giả |
| Ẩn danh dữ liệu trước khi đưa lên công cụ | Tải tên, số điện thoại, câu trả lời có thể nhận diện người tham gia lên công cụ AI |
| Tự viết lập luận và diễn giải kết quả | Để AI quyết định kết luận nghiên cứu thay mình |

Nhấn dòng thứ ba: **dùng AI tạo câu trả lời khảo sát giả** là bịa dữ liệu — vi phạm nặng nhất trong
nghiên cứu, dù "chỉ để cho đủ mẫu".

### 6.2 Năm quy định dùng AI của học phần (khoảng 3')

*(Chiếu slide 31. Đọc chậm — đây là quy định áp dụng cho M3, M4, giữa kỳ, cuối kỳ.)*

1. **Được phép dùng AI** để hỗ trợ học tập và làm dự án, trong phạm vi gợi ý, giải thích, góp ý.
2. **Khai báo:** mỗi bài nộp có dùng AI phải ghi rõ công cụ, mục đích, phần nào có hỗ trợ của AI.
3. **Nhật ký AI:** lưu các câu lệnh chính và cách nhóm đã kiểm chứng, chỉnh sửa kết quả — **bắt đầu nộp
   từ M3**.
4. **Tự kiểm chứng:** nhóm chịu trách nhiệm về tính chính xác của mọi nội dung; nguồn bịa hoặc số liệu
   bịa là vi phạm liêm chính học thuật dù do AI tạo ra.
5. **Đánh giá dựa trên quá trình:** giảng viên đánh giá qua nhật ký AI, các bản nháp theo mốc và khả
   năng nhóm giải thích bài làm của mình — **không dùng phần mềm "phát hiện AI"**.

*(Nếu sinh viên hỏi vì sao không dùng phần mềm phát hiện AI: các công cụ này cho kết quả không đáng
tin, có thể "bắt nhầm" bài người viết thật, và thiên lệch với người viết không phải bản ngữ (Liang et
al., 2023). Cách công bằng hơn là xem **quá trình**: nhật ký, bản nháp, và việc nhóm giải thích được bài
của mình.)*

`[NEEDS PROFESSOR INPUT: khoa/trường có quy định chung về AI trong học tập không — nếu có, nêu thêm 1
câu đối chiếu.]`

### 6.3 Trích dẫn AI theo APA 7 (khoảng 2')

*(Chiếu slide 32.)*

Khi dùng nguyên văn hoặc diễn giải nội dung do AI tạo ra, ghi rõ trong bài câu lệnh đã dùng và trích
dẫn công cụ theo APA 7 (American Psychological Association, 2020; McAdoo, 2023):

```
Tác giả (nhà phát triển). (Năm phiên bản). Tên công cụ (Phiên bản) [Mô tả]. URL

OpenAI. (2023). ChatGPT (phiên bản ngày 14/3) [Mô hình ngôn ngữ lớn]. https://chat.openai.com/chat
Trong bài: (OpenAI, 2023)
```

Hai điểm cần nhớ: (1) ghi đúng **năm và phiên bản của công cụ nhóm thực dùng**, không chép nguyên ví
dụ; (2) AI **không phải nguồn học thuật** — trích dẫn AI để minh bạch, còn lập luận khoa học vẫn phải
dựa trên tài liệu gốc đã kiểm chứng.

*(Ghi chú cho giảng viên: UEF #15 chỉ ghi "(OpenAI, 2023)" — thiếu mục danh mục đầy đủ. Mẫu trên theo
McAdoo (2023), APA Style Blog `[VERIFY: APA có cập nhật hướng dẫn mới hơn không]`.)*

### 6.4 Nhật ký AI (khoảng 1')

*(Chiếu slide 33.)*

Nhật ký AI có 5 cột: **Ngày · Công cụ · Câu lệnh chính · AI trả về gì (tóm tắt) · Nhóm đã kiểm chứng,
giữ, sửa, bỏ gì và vì sao.** Cột cuối là cột quan trọng nhất — nó cho thấy phần đóng góp của nhóm. Nhật
ký Buổi 4 và phần thực hành hôm nay đi thẳng vào M3.

### 6.5 Kiểm tra nhanh (khoảng 2')

*(Chỉ định phát biểu, mỗi câu 1 bạn.)*

1. **Nhóm muốn nhờ AI gợi ý chủ đề từ 8 bản ghi phỏng vấn. Phải làm gì trước?**
   *Mong đợi:* ẩn danh — xóa tên, số điện thoại, chi tiết nhận diện; kiểm tra điều khoản công cụ; sau
   đó tự đọc lại dữ liệu gốc để quyết định chủ đề cuối cùng.
2. **AI gợi ý một bài báo rất sát đề tài. Trước khi đưa vào M3, nhóm làm gì?**
   *Mong đợi:* tìm tên bài trên Google Scholar → mở bản gốc → khớp tác giả, năm, nội dung, DOI; không
   qua được thì không trích; ghi vào nhật ký AI.

---

## S7 · Thực hành nhóm "Xưởng câu lệnh" (98–143')

*(Xem phiếu `W5_activity_xuong_cau_lenh.md` — kịch bản, 5 chặng, phiếu nhóm, mẫu nhật ký AI, cách phản
hồi.)*

Tóm tắt: mỗi nhóm viết **cùng một yêu cầu** cho dự án theo **T-A-G** và **C-A-R-E**, chạy trên cùng
một công cụ, so sánh kết quả theo 4 tiêu chí; dùng AI **phản biện vấn đề nghiên cứu** của nhóm và tự
quyết định nhận/bác từng ý; **chốt hướng định tính hay định lượng** theo 5 câu hỏi; ghi nhật ký AI
suốt quá trình. 3–4 nhóm chia sẻ cuối giờ.

---

## S8 · Kết buổi (143–148')

*(Phát phiếu ra về — giấy nhỏ.)*

Trước khi về, mỗi bạn viết hai dòng:

1. **Khung câu lệnh nhóm mình sẽ dùng tiếp cho dự án là khung nào, vì sao?**
2. **Một điều AI trả lời sai hoặc không dùng được trong buổi hôm nay.**

*(Thu lại; dùng câu 2 làm ví dụ mở đầu Buổi 6 nếu có ví dụ hay.)*

**Bài tập — hoàn thành M3: Tổng quan tài liệu và nhật ký AI** (nhóm, 5%, đã giao ở Buổi 4) — nộp trên
LMS sau Buổi 5 `[NEEDS PROFESSOR INPUT: hạn nộp cụ thể]`. Không có đề mới; nhắc checklist 6 mục (theo
tài liệu học tập Bài 3):

- [ ] Phần tổng quan tài liệu dài 2–3 trang, tổng hợp **theo chủ đề**, không liệt kê từng bài
- [ ] Mọi tài liệu trích dẫn đều đã được nhóm mở và đọc bản gốc; có DOI hoặc đường dẫn kiểm tra được
- [ ] Trích dẫn và danh mục tài liệu tham khảo đúng APA 7 (Bài 2)
- [ ] Nhật ký AI: công cụ, câu lệnh chính, kết quả AI trả về, cách nhóm kiểm chứng và chỉnh sửa
- [ ] Khai báo phần nào của bài có hỗ trợ của AI
- [ ] Nêu hướng dự kiến: **định tính** (báo cáo 3 chương) hay **định lượng** (báo cáo 5 chương), kèm
      lý do ngắn

**Nối sang buổi sau:** "Buổi 6 chúng ta học thiết kế nghiên cứu và bắt đầu viết **đề cương** — vấn
đề, mục tiêu, câu hỏi nghiên cứu. Hướng định tính/định lượng các bạn vừa chốt sẽ quyết định đề cương
trông như thế nào. Mang theo bản M3."

---

## Tổng hợp [VERIFY] / [NEEDS PROFESSOR INPUT]

1. `[VERIFY]` Tên, tình trạng miễn phí/giới hạn, tính năng các công cụ AI tại thời điểm dạy (S4); mô tả
   iAsk/Elicit trên UEF #13 chưa chuẩn.
2. `[VERIFY]` Ví dụ thiên lệch tuyển dụng (S2.4): video không nêu doanh nghiệp/số liệu → ví dụ minh
   họa; nếu dẫn trường hợp thật phải có nguồn gốc.
3. `[VERIFY]` Căn cứ pháp lý bảo vệ dữ liệu cá nhân (S2.5): Nghị định 13/2023/NĐ-CP; Luật Bảo vệ dữ
   liệu cá nhân 2025.
4. `[VERIFY]` Ví dụ "IBM Watson chẩn đoán bệnh" trên UEF #8 (S3.1) — bỏ tên riêng hoặc kiểm tra.
5. `[VERIFY]` Hướng dẫn trích dẫn AI theo APA 7 (S6.3) — kiểm tra cập nhật mới nhất.
6. `[NEEDS PROFESSOR INPUT]` Hạn nộp M3, mục nộp trên LMS, quy định nộp trễ; quy định chung của
   khoa/trường về AI (nếu có).
7. Ví dụ trích dẫn bịa (S2.3), 20.000 bình luận mỹ phẩm (S3.4) là **tình huống giả định**.

## Tài liệu tham khảo (APA 7)

American Psychological Association. (2020). *Publication manual of the American Psychological
Association* (7th ed.). https://doi.org/10.1037/0000165-000

Liang, W., Yuksekgonul, M., Mao, Y., Wu, E., & Zou, J. (2023). GPT detectors are biased against
non-native English writers. *Patterns, 4*(7), Article 100779.
https://doi.org/10.1016/j.patter.2023.100779

McAdoo, T. (2023, April 7). *How to cite ChatGPT*. APA Style Blog.
https://apastyle.apa.org/blog/how-to-cite-chatgpt

Russell, S., & Norvig, P. (2021). *Artificial intelligence: A modern approach* (4th ed.). Pearson.
