# Tài liệu đọc thêm — Bài 7: Đo lường

MKT1107 Nghiên cứu Marketing · Tự học sau Buổi 9 (đề cương dành 18 giờ tự học cho Bài 7)

> Tài liệu này mở rộng những phần trên lớp chỉ nhắc qua. Đọc cùng tài liệu học tập Bài 7, trước Buổi 10;
> các câu hỏi tự kiểm tra ở cuối giúp bạn ôn. Phần đánh dấu **(điểm cộng)** là kiến thức ngoài phạm vi bắt
> buộc, dành cho nhóm muốn phân tích sâu hơn.

## 1. Phát biểu nào được phép với từng cấp thang đo?

Khi viết Chương 4, mỗi câu nhận xét về số liệu phải hợp lệ với cấp thang đo của biến. Bảng dưới đây
dùng các ví dụ giả định.

| Cấp thang đo | Câu hỏi ví dụ | Phát biểu **không hợp lệ** | Phát biểu **hợp lệ** |
|---|---|---|---|
| Định danh | "Bạn đã học những học phần nào sau đây?" (chọn nhiều) | "Nghiên cứu Marketing được học nhiều nhất vì trung vị lựa chọn là 3,2" | "70% đã học Nghiên cứu Marketing, 40% đã học Marketing số" |
| Thứ tự | "Xếp hạng 3 thương hiệu trà sữa A, B, C theo mức yêu thích" | "B được yêu thích nhất vì thứ hạng trung bình là 1,52" | "60% người trả lời xếp B ở hạng 1" |
| Quãng (khoảng) | "Mức hài lòng với dịch vụ giao hàng của ứng dụng X (1–5)" | "Khu vực A (4,5) hài lòng gấp đôi khu vực B (2,3)" | "Điểm hài lòng trung bình ở khu vực A cao hơn khu vực B" |
| Tỷ lệ | "Mỗi tháng bạn chi bao nhiêu tiền cho ăn uống?" | — (mọi phép tính đều được phép) | "Nhóm đi làm thêm chi trung bình 3 triệu đồng, gấp 1,5 lần nhóm không đi làm thêm" |

**Vì sao "gấp đôi" sai trên thang quãng?** Điểm 0 của thang 1–5 do người thiết kế đặt. Nếu đổi thang
thành −2…+2 (trừ mỗi điểm đi 3), điểm 4,5 thành +1,5 còn 2,3 thành −0,7 — không còn "gấp đôi" nữa. Một
tỷ lệ thay đổi khi chỉ đổi cách đánh số thì không mang ý nghĩa.

**Lưu ý:** so sánh **số người** ("số người chọn A nhiều gấp đôi số người chọn B") là so sánh tần số —
hợp lệ ở mọi cấp thang đo. Điều bị cấm ở thang quãng là nói "gấp đôi" trên chính **giá trị đo** (điểm
hài lòng).

## 2. Hai dạng thang đo thái độ khác

Ngoài Likert, đối nghĩa và Stapel, bạn có thể gặp:

**Thang tổng không đổi (constant sum).** Người trả lời chia một tổng điểm cố định (thường 100) cho các
thuộc tính theo mức quan trọng.

```markdown
Hãy chia 100 điểm cho các yếu tố sau theo mức quan trọng khi bạn chọn quán cà phê:
Giá ____  Không gian ____  Vị trí ____  Chất lượng đồ uống ____   (Tổng = 100)
```

Ưu điểm: buộc người trả lời đánh đổi, thấy được mức quan trọng **tương đối**. Hạn chế: khó làm, người trả
lời dễ cộng sai tổng; thứ tự liệt kê có thể ảnh hưởng (mục đầu tiên hay được cho nhiều điểm). Trên bảng
hỏi trực tuyến nên bật chức năng tự kiểm tra tổng.

**Thang ý định mua (purchase intention).** Thường 5 mức: Chắc chắn sẽ mua · Có lẽ sẽ mua · Có thể mua
hoặc không · Có lẽ sẽ không mua · Chắc chắn sẽ không mua. Người trả lời thường **nói sẽ mua nhiều hơn
thực tế**. Vì vậy một số người làm nghiên cứu dùng quy tắc kinh nghiệm để "hiệu chỉnh" — ví dụ, một người
giảng trong video bài giảng chỉ tính khoảng 80% số người chọn "chắc chắn sẽ mua" và 30% số người chọn "có
lẽ sẽ mua" là sẽ mua thật. Đây là **quy tắc kinh nghiệm của người giảng, không phải quy luật** — tỷ lệ
thực tế khác nhau theo ngành hàng và thị trường. Bài học chính: đừng đọc thẳng tỷ lệ "sẽ mua" thành dự
báo doanh số.

## 3. Đảo mã câu phát biểu ngược chiều

Nhiều thang đo kế thừa có câu **ngược chiều** — đồng ý nghĩa là thái độ tiêu cực — để phát hiện người
khoanh bừa. Trước khi tính điểm trung bình của khái niệm, phải **đảo mã** các câu này.

**Công thức:** mã mới = (số bậc của thang + 1) − mã cũ. Với Likert 5 điểm: **mã mới = 6 − mã cũ**
(5 → 1, 4 → 2, 3 → 3, 2 → 4, 1 → 5).

*Ví dụ (giả định) — hài lòng với một siêu thị:*

| Mã | Phát biểu | Trả lời | Sau đảo mã |
|---|---|---|---|
| HL1 | Nhân viên siêu thị thân thiện | 4 | 4 |
| HL2 | Hàng hóa được sắp xếp dễ tìm | 5 | 5 |
| HL3 (R) | Thời gian chờ thanh toán quá lâu | 5 | 1 |
| | **Trung bình** | 4,7 (sai) | **3,3** (đúng) |

**Cách làm trên phần mềm** (tên menu có thể khác theo phiên bản):
- **Excel / Google Sheets:** tạo cột mới, ví dụ `=6-D2`, kéo xuống cho cả cột.
- **SPSS:** Transform → Compute Variable (biểu thức `6 - HL3`) hoặc Transform → Recode into Different
  Variables.

**Nguyên tắc:**
- **Neo thang** luôn cùng chiều cho mọi câu (1 = hoàn toàn không đồng ý … 5 = hoàn toàn đồng ý). Chỉ nội
  dung phát biểu mới được ngược chiều.
- Trong bảng thang đo, đánh dấu **(R)** sau mã biến; trong sổ mã hóa (Buổi 12) ghi rõ biến nào đã đảo.
- Tạo **biến mới** khi đảo mã, giữ nguyên biến gốc để kiểm tra lại.
- Tổng hay trung bình điểm thái độ chỉ có ý nghĩa khi **so sánh** (giữa cửa hàng, nhóm khách, thời điểm).

## 4. Biến trung gian và biến điều tiết

| | Biến trung gian (mediator) | Biến điều tiết (moderator) |
|---|---|---|
| Vị trí | Nằm **giữa** X và Y: X → M → Y | Tác động **lên mối quan hệ** X → Y |
| Trả lời câu hỏi | **Vì sao / bằng cách nào** X ảnh hưởng Y? | X ảnh hưởng Y **mạnh/yếu khi nào, với ai**? |
| Hình ảnh dễ nhớ | Cây cầu — tác động đi qua nó | Núm vặn âm lượng — làm mạnh lên, yếu đi hoặc đổi chiều |
| Ví dụ (thời gian học → điểm thi) | Phương pháp học | Kiến thức nền |
| Ví dụ marketing (giả định) | Nhận thức về giá → **giá trị cảm nhận** → ý định mua | Nhận thức về giá → ý định mua, **mạnh hơn ở sinh viên có thu nhập thấp** |

Phân biệt này theo Baron và Kenny (1986). **Với dự án của học phần:** mô hình chính nên đơn giản — một số
biến độc lập trỏ vào một biến phụ thuộc. Kiểm định biến trung gian/điều tiết cần kỹ thuật vượt phạm vi bắt
buộc (**điểm cộng**), và phải có cơ sở lý thuyết từ tổng quan tài liệu. Nhớ rằng kiểm định mô hình bằng dữ
liệu khảo sát cho thấy **liên hệ**, không chứng minh **nhân quả**.

## 5. Thiết kế thang có thể tự tạo ra sai lệch hệ thống

Các thí nghiệm về thiết kế bảng hỏi cho thấy câu trả lời thay đổi khi chỉ thay đổi **hình thức** của
thang, dù câu hỏi giữ nguyên. Ví dụ minh họa từ video bài giảng:

- **Con số âm:** cùng một câu hỏi đánh giá, thang đánh số −4…+4 và thang 0…8 (cùng 9 bậc, cùng nhãn hai
  đầu) cho tỷ lệ người chọn nửa thấp của thang **khác nhau rõ rệt** — người trả lời ngại chọn số âm vì
  đọc nó như "rất tệ".
- **Khung đáp án:** hỏi thời gian xem TV mỗi ngày với khung đáp án "thấp" (từ "dưới 0,5 giờ" đến "trên 2,5
  giờ") và khung "cao" (từ "dưới 2,5 giờ" đến "trên 4,5 giờ") — với khung cao, nhiều người hơn báo xem
  trên 2,5 giờ. Người trả lời coi khoảng giữa của khung là "mức bình thường".
- **Danh sách gợi ý:** khi đưa sẵn danh sách lý do, nhiều người chọn một lý do mà nếu hỏi mở họ sẽ không
  tự nghĩ ra.

**Áp dụng cho bảng hỏi của nhóm:** dùng thang cân bằng; dùng con số dương (1–5) cho thang Likert; khung
đáp án cho câu tần suất/chi tiêu dựa trên số liệu thật (từ phỏng vấn thử hoặc dữ liệu thứ cấp); cân nhắc
khi nào cần hỏi mở, khi nào đưa danh sách.

## 6. Độ tin cậy và giá trị trong nghiên cứu định tính

Nghiên cứu định tính không dùng Cronbach's Alpha. Thay vào đó, nhóm định tính bảo đảm chất lượng bằng:

| Kỹ thuật | Cách làm trong dự án của nhóm |
|---|---|
| **Tam giác đạc** (triangulation) | Đối chiếu nhiều nguồn: phỏng vấn nhiều kiểu người tham gia; kết hợp với dữ liệu thứ cấp; hai thành viên cùng mã hóa một bản ghi rồi so sánh |
| **Kiểm chứng bởi người tham gia** (member checking) | Gửi lại phần tóm tắt/diễn giải cho người được phỏng vấn để họ xác nhận đã hiểu đúng ý |
| **Mô tả chi tiết** (thick description) | Mô tả rõ bối cảnh, trích nguyên văn lời người tham gia khi trình bày kết quả |
| **Tự phản tư** (reflexivity) | Ghi lại định kiến, kỳ vọng của nhóm trước khi phỏng vấn để tránh "dẫn" người tham gia |

Ghi các kỹ thuật nhóm dùng vào chương phương pháp (Chương 2 của báo cáo định tính).

## 7. Cách tìm và kế thừa thang đo

1. **Bắt đầu từ bài đã đọc.** Mở phần phương pháp (Method/Measures) hoặc phụ lục của các bài báo dùng ở
   M2–M3 — thường có bảng thang đo kèm nguồn gốc.
2. **Tìm thêm trên Google Scholar** với từ khóa dạng "[tên khái niệm tiếng Anh] scale", "[khái niệm]
   measurement items", hoặc tên khái niệm kèm "Vietnam" để tìm nghiên cứu trong bối cảnh tương tự.
3. **Ưu tiên** thang đo đã dùng trong nhiều nghiên cứu, có báo cáo độ tin cậy (ví dụ Alpha ≥ 0,7).
4. **Trích dẫn nguồn gốc**, không chỉ bài bạn đọc được thang đo. Nếu bài A dùng lại thang của bài B, ghi
   "B (năm), được A (năm) sử dụng" hoặc tìm đọc bài B.
5. **Dịch theo ý**, nhờ người khác dịch ngược sang tiếng Anh để kiểm tra; ghi rõ đã điều chỉnh gì.
6. **Không tự ý gộp** hai biến quan sát thành một câu (dễ tạo câu hỏi kép).
7. **Dùng AI có trách nhiệm:** AI có thể gợi ý thang đo nhưng hay bịa tác giả, năm, hoặc diễn đạt khác bản
   gốc. Khai báo trong nhật ký AI và mở bài gốc đối chiếu từng biến quan sát.

## 8. Mở rộng (điểm cộng): kiểm định độ tin cậy và giá trị bằng số liệu

- **Cronbach's Alpha** — kiểm tra nhất quán nội bộ của từng khái niệm sau khi thu dữ liệu. Thường xem là
  đạt khi ≥ 0,7; 0,6 có thể chấp nhận trong nghiên cứu khám phá (Hair và cộng sự, 2019). Alpha cao **chưa
  chứng minh** thang đo có giá trị.
- **Phân tích nhân tố khám phá (EFA)** — kiểm tra các biến quan sát có nhóm lại đúng theo khái niệm dự kiến
  không (giá trị hội tụ, phân biệt). Ngoài phạm vi học phần; nhóm muốn tìm hiểu có thể đọc Hair và cộng sự
  (2019) hoặc Nguyễn (2011).

## 9. Video tham khảo (tiếng Anh, trong danh mục video của học phần)

- *Measurement & Questionnaire Design Intro* (Marketing Research Module 2, Video 1) — đo lường và bốn cấp
  thang đo.
- *Question Type Quiz Review* (Marketing Research Module 2, Video 2) — luyện nhận diện cấp thang đo và
  phát biểu hợp lệ.
- *Measuring Attitudes and WTP* (Marketing Research Module 2, Video 3) — thang thái độ, đảo mã, sai lệch do
  thiết kế thang. Các ví dụ và con số trong video là ví dụ minh họa ở thị trường Mỹ.
- *Struggling with Research Variables?* — biến độc lập, phụ thuộc, trung gian, điều tiết.
- *How to Make Qualitative Research Trustworthy? Triangulation & Member Checking* — dành cho nhóm định
  tính.

## 10. Câu hỏi tự kiểm tra

1. Một khảo sát hỏi "Bạn thuộc nhóm tuổi nào: □ 18–20 □ 21–23 □ 24 trở lên". Biến này ở cấp thang đo nào?
   Nhóm có tính được tuổi trung bình chính xác không? Nên hỏi thế nào nếu cần tuổi trung bình?
2. Viết một phát biểu hợp lệ và một phát biểu không hợp lệ cho biến "xếp hạng 4 kênh mua sắm theo mức ưa
   thích".
3. Một thang đo "Lòng trung thành với quán cà phê" gồm 4 câu, trong đó câu thứ 4 là "Tôi sẵn sàng chuyển
   sang quán khác nếu có khuyến mãi". Một người trả lời 5, 5, 4, 5. Tính điểm trung bình đúng.
4. Phân biệt sai lệch hệ thống và sai lệch ngẫu nhiên bằng một ví dụ trong khảo sát Google Forms của nhóm
   bạn. Loại nào ảnh hưởng đến giá trị, loại nào ảnh hưởng đến độ tin cậy?
5. Trong mô hình "Chất lượng dịch vụ → Sự hài lòng → Lòng trung thành", "Sự hài lòng" đóng vai trò biến
   gì? Nếu thêm "Thu nhập" làm thay đổi độ mạnh của quan hệ chất lượng dịch vụ → hài lòng, "Thu nhập" là
   biến gì?
6. Nhóm định tính của bạn sẽ dùng kỹ thuật nào để bảo đảm kết quả đáng tin cậy? Mô tả cụ thể cách làm.

*Gợi ý đáp án:* (1) Thứ tự; không; hỏi số tuổi cụ thể. (3) Câu 4 ngược chiều → 6 − 5 = 1; trung bình
(5 + 5 + 4 + 1)/4 = 3,75. (5) Trung gian; điều tiết.

## Tài liệu tham khảo (APA 7)

Baron, R. M., & Kenny, D. A. (1986). The moderator–mediator variable distinction in social
psychological research: Conceptual, strategic, and statistical considerations. *Journal of Personality
and Social Psychology, 51*(6), 1173–1182.

Brown, T. J., Suter, T. A., & Churchill, G. A. (2014). *Basic marketing research: Customer insights and
managerial action* (8th ed.). Cengage Learning.

Hair, J. F., Black, W. C., Babin, B. J., & Anderson, R. E. (2019). *Multivariate data analysis* (8th
ed.). Cengage Learning.

Malhotra, N. K. (2019). *Marketing research: An applied orientation* (7th ed.). Pearson.

Nguyễn, Đ. T. (2011). *Phương pháp nghiên cứu khoa học trong kinh doanh*. NXB Lao động – Xã hội.
