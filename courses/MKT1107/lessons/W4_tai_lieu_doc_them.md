# Tài liệu đọc thêm — Bài 3 (phần 1): AI là gì và vì sao phải kiểm chứng AI

MKT1107 Nghiên cứu Marketing · Tự học sau Buổi 4 (đề cương dành 18 giờ tự học cho Bài 3, chia cho Buổi 4–5)

> Tài liệu này mở rộng những phần trên lớp chỉ nhắc qua. Đọc trước Buổi 5, cùng với tài liệu học tập
> Bài 3 mục 3.5–3.8. Các câu hỏi tự kiểm tra ở cuối giúp bạn ôn. Nguồn chính: tài liệu học tập Bài 3, slide
> UEF Bài 3 và video bài giảng "Unlock AI's Potential in Market Research".

## 1. AI, học máy, học sâu, AI tạo sinh: bốn khái niệm lồng nhau

Bốn thuật ngữ này hay bị dùng lẫn. Cách dễ nhớ là hình dung bốn vòng tròn lồng nhau:

| Khái niệm | Nằm trong | Nói gọn | Ví dụ quen thuộc |
|---|---|---|---|
| **Trí tuệ nhân tạo** (AI) | — | Máy làm được việc vốn cần trí tuệ con người — bằng luật viết sẵn hoặc bằng học | Máy chơi cờ, trợ lý ảo |
| **Học máy** (machine learning) | AI | Máy tự rút ra quy tắc từ dữ liệu và đáp án mẫu | Bộ lọc thư rác, gợi ý sản phẩm |
| **Học sâu** (deep learning) | Học máy | Học máy dùng mạng nơ-ron nhiều lớp | Nhận diện khuôn mặt, chuyển giọng nói thành chữ |
| **AI tạo sinh / mô hình ngôn ngữ lớn** (generative AI / LLM) | Học sâu | Tạo ra nội dung mới (văn bản, hình ảnh) "trông hợp lý" | Chatbot |

**Điều cần nhớ:** không phải mọi AI đều là chatbot, và không phải phần mềm tự động nào cũng là AI. Câu hỏi
phân biệt: **ai viết ra quy tắc — con người hay máy?**

## 2. Vì sao chatbot có thể bịa tài liệu tham khảo?

Một mô hình ngôn ngữ lớn được huấn luyện trên một lượng văn bản khổng lồ, trong đó có rất nhiều bài báo
và danh mục tài liệu tham khảo. Khi trả lời, nó tạo ra từng phần câu trả lời theo cách **có khả năng
xuất hiện nhất** dựa trên những gì đã học — nó **không** mở một thư viện ra tra cứu.

Vì vậy, khi bạn hỏi "liệt kê 5 bài báo về…", mô hình tạo ra những dòng có **hình dạng** của một trích
dẫn: họ tác giả quen thuộc trong lĩnh vực, năm, tên bài nghe hợp lý, tên tạp chí, số tập, số trang, có khi
cả DOI. Có dòng trùng với một bài có thật; có dòng là sự ghép nối nghe rất hợp lý nhưng không tồn tại.
Hiện tượng này gọi là **ảo giác** (hallucination).

Một số chatbot có tính năng tìm kiếm trên web và kèm đường link nguồn. Điều đó giúp giảm trích dẫn bịa,
nhưng **không** bảo đảm phần tóm tắt nội dung là đúng. Tên và tính năng các công cụ thay đổi rất nhanh, nên
nguyên tắc không đổi: **kiểm chứng từng nguồn trước khi dùng**.

## 3. Thẻ hướng dẫn: kiểm chứng một trích dẫn do AI đưa ra

Giữ thẻ này bên cạnh khi viết tổng quan tài liệu (M3) và các phần sau của dự án.

| Bước | Câu hỏi | Cách làm | Nếu không đạt |
|---|---|---|---|
| 1 | Bài có thật không? | Gõ tên bài trong dấu ngoặc kép vào Google Scholar; không thấy thì tìm theo tác giả + từ khóa; tài liệu tiếng Việt thì tìm thêm trên trang web của tạp chí | Chưa tìm thấy sau khi thử mọi cách → **Không xác minh được** → không dùng |
| 2 | Đúng chi tiết không? | So tác giả, năm, tên tạp chí, tập (số), trang với bản trên Google Scholar hoặc trang tạp chí | **Sai chi tiết** → sửa theo bản gốc |
| 3 | DOI có dẫn đúng bài không? | Mở `https://doi.org/` + DOI | DOI báo lỗi hoặc dẫn sang bài khác → sửa theo bản gốc, hoặc không dùng nếu không tìm được bài |
| 4 | Nội dung có đúng như AI nói không? | Đọc phần tóm tắt (abstract) — tốt nhất là cả bài | **Sai chi tiết** → viết lại theo bài gốc; chỉ trích những gì bài thực sự nói |

**Ba nguyên tắc:**

1. Không xác minh được thì **không trích**.
2. Chỉ trích những gì **bạn đã đọc** — không trích một bài chỉ dựa vào câu tóm tắt của AI.
3. Ghi lại cả quá trình vào **nhật ký AI**: công cụ, ngày, câu lệnh, tóm tắt kết quả, cách kiểm chứng,
   phần đã sửa / loại bỏ.

## 4. Hai nguồn gốc lịch sử nên biết

Hai tài liệu sau đều có thật và kiểm chứng được — một bài tập nhỏ: tự tra chúng trên Google Scholar theo
thẻ hướng dẫn ở mục 3.

- **Turing (1950), "Computing machinery and intelligence".** Bài báo mở đầu bằng câu hỏi "Máy móc có thể
  suy nghĩ không?" và đề xuất một phép thử — sau này gọi là **phép thử Turing**: nếu người đối thoại không
  phân biệt được mình đang trò chuyện với máy hay với người, có thể coi máy đó "thông minh".
- **Đề xuất cho hội thảo Dartmouth (McCarthy và cộng sự, 1955; in lại năm 2006).** Văn bản đề xuất hội
  thảo mùa hè năm 1956 tại Đại học Dartmouth (Mỹ), nơi thuật ngữ "artificial intelligence" được dùng
  chính thức — thường được xem là thời điểm AI trở thành một lĩnh vực nghiên cứu.

**Suy ngẫm:** chatbot ngày nay trò chuyện trôi chảy đến mức nhiều người không phân biệt được với người
thật. Điều đó có nghĩa là chatbot "hiểu" bạn không? Liên hệ với bốn cấp độ AI ở mục 5.

## 5. Bốn cấp độ AI — và một cách phân loại khác

Trên lớp chúng ta dùng cách chia **bốn cấp theo khả năng** (Hintze, 2016): máy phản ứng → bộ nhớ hạn chế →
lý thuyết tâm trí → tự nhận thức. Hầu hết AI hiện nay, kể cả chatbot, thuộc cấp **bộ nhớ hạn chế**.

Bạn cũng sẽ gặp cách chia theo **phạm vi năng lực**:

- **AI hẹp** (narrow AI) — giỏi một việc hoặc một nhóm việc cụ thể: chơi cờ, nhận diện khuôn mặt, tạo văn
  bản. Mọi AI đang được sử dụng hiện nay đều là AI hẹp.
- **AI tổng quát** (general AI) — làm được mọi việc trí tuệ mà con người làm được, linh hoạt như con người.
  Hiện vẫn là mục tiêu nghiên cứu và còn nhiều tranh luận.

Hai cách chia trả lời hai câu hỏi khác nhau: "AI **nhớ và hiểu** được đến đâu?" và "AI **làm được bao
nhiêu loại việc**?".

## 6. AI trong nghiên cứu thị trường — và ba rủi ro đạo đức

Video bài giảng "Unlock AI's Potential in Market Research" nêu những việc AI đang hỗ trợ nghiên cứu thị
trường (video nói ở mức nguyên tắc, không nêu tên doanh nghiệp hay số liệu):

| Việc | AI làm gì | Người nghiên cứu vẫn phải làm |
|---|---|---|
| Phân tích cảm xúc người tiêu dùng | Xử lý bình luận trên mạng xã hội, phân loại khen / chê theo chủ đề | Đọc một mẫu bình luận để kiểm tra AI phân loại có đúng không |
| Phân tích dự báo | Dự báo doanh số, khả năng thành công của sản phẩm mới từ dữ liệu mua hàng | Hiểu giả định của mô hình; đối chiếu với thực tế thị trường |
| Tự động hóa thu thập và xử lý | Khảo sát tự động, làm sạch dữ liệu, mã hóa, gom chủ đề ban đầu | Quyết định chủ đề cuối cùng; tự diễn giải kết quả |
| Hỗ trợ ra quyết định | Gợi ý chiến lược cá nhân hóa, mô phỏng kịch bản thị trường | Nhà quản trị ra quyết định — như Buổi 1: nghiên cứu không ra quyết định thay nhà quản trị |

Video nhấn mạnh **ba rủi ro đạo đức** và cách giảm thiểu:

1. **Quyền riêng tư dữ liệu** — thông tin cá nhân phải được bảo vệ và sử dụng có đạo đức.
2. **Thiên lệch thuật toán** — AI có thể duy trì, thậm chí làm trầm trọng thêm định kiến có sẵn trong dữ
   liệu huấn luyện. Ví dụ minh họa trong video: một công cụ AI phân tích xu hướng tuyển dụng có thể ưu ái
   một số nhóm nhân khẩu học nếu dữ liệu huấn luyện đã thiên vị.
3. **Thiếu minh bạch** — khó biết AI xử lý thế nào và vì sao ra kết quả đó.

**Cách giảm thiểu:** quản lý dữ liệu có trách nhiệm · minh bạch quy trình · thường xuyên kiểm tra (kiểm
toán) thuật toán.

**Áp dụng cho dự án của nhóm bạn:**

- Không đưa họ tên, số điện thoại, mã số sinh viên hay câu trả lời có thể nhận diện người tham gia lên
  công cụ AI. Ẩn danh dữ liệu trước.
- Không dùng chatbot để tự chạy hay diễn giải phân tích thống kê — phân tích chạy trên phần mềm thống kê
  (sẽ học ở Bài 9).
- "Kiểm toán thuật toán" ở quy mô một nhóm sinh viên là: **kiểm chứng từng kết quả AI đưa cho bạn, và ghi
  lại cách kiểm chứng**.

## 7. Video tham khảo

- "Unlock AI's Potential in Market Research" — ứng dụng AI trong nghiên cứu thị trường và rủi ro đạo đức
  (tiếng Anh; video trên YouTube, tìm theo đúng tên video).

## 8. Câu hỏi tự kiểm tra

1. Viết hai "công thức" của lập trình truyền thống và học máy. Cho một ví dụ của mỗi loại **trong
   marketing**.
2. Một ứng dụng giao đồ ăn tự gửi mã giảm giá cho mọi khách hàng không đặt đơn trong 30 ngày. Đây là
   lập trình truyền thống hay học máy? Nếu muốn chuyển thành học máy thì cần thay đổi gì?
3. Vì sao "AI chỉ tốt bằng dữ liệu nó đã học"? Liên hệ với việc chọn mẫu khảo sát của nhóm bạn.
4. Sắp xếp các mốc sau theo thời gian: Deep Blue thắng Kasparov · ChatGPT ra mắt · hội thảo Dartmouth ·
   Turing đề xuất phép thử Turing. Mốc nào đánh dấu AI trở thành một lĩnh vực nghiên cứu?
5. Trong chuỗi giá trị AI, bạn làm việc ở tầng nào? Hai tầng nào quyết định chất lượng câu trả lời mà bạn
   không nhìn thấy?
6. Bạn của bạn nói: "Chatbot này hiểu cảm xúc của mình, chắc nó là AI cấp 3." Bạn trả lời thế nào?
7. Kể bốn kiểu trích dẫn sai do AI tạo ra. Kiểu nào khó phát hiện nhất, vì sao?
8. Nhóm bạn không tìm thấy một bài AI gợi ý trên Google Scholar. Đã đủ để kết luận AI bịa chưa? Nhóm nên
   làm gì tiếp?

*Gợi ý đáp án câu 2: lập trình truyền thống — quy tắc "không đặt trong 30 ngày → gửi mã" do con người viết.
Chuyển thành học máy: cho máy học từ dữ liệu khách hàng cũ (ai đã rời bỏ, ai quay lại) để tự dự đoán khách
nào sắp rời bỏ và nên gửi ưu đãi nào.*

*Gợi ý đáp án câu 4: Turing (1950) → Dartmouth (1956) → Deep Blue (1997) → ChatGPT (cuối 2022); Dartmouth
đánh dấu AI trở thành một lĩnh vực nghiên cứu.*

## Tài liệu tham khảo (APA 7)

Hintze, A. (2016, November 14). *Understanding the four types of AI, from reactive robots to self-aware
beings*. The Conversation. https://theconversation.com/understanding-the-four-types-of-ai-from-reactive-robots-to-self-aware-beings-67616

McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (2006). A proposal for the Dartmouth summer
research project on artificial intelligence, August 31, 1955. *AI Magazine, 27*(4), 12–14.
https://doi.org/10.1609/aimag.v27i4.1904

Russell, S., & Norvig, P. (2021). *Artificial intelligence: A modern approach* (4th ed.). Pearson.

Turing, A. M. (1950). Computing machinery and intelligence. *Mind, 59*(236), 433–460.
https://doi.org/10.1093/mind/LIX.236.433
