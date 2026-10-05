# Bài giảng — Buổi 10: Bài 8 Thiết kế bảng câu hỏi (phần 1) · Vai trò và toàn bộ quy trình 8 bước

MKT1107 Nghiên cứu Marketing · Buổi 10 · 150 phút · Giảng viên: Đoàn Nguyễn Bảo Quyên

> Bài giảng viết theo các phân đoạn (S1–S9) của `W10_lesson_plan.md`. Chữ nghiêng trong ngoặc là
> **ghi chú cho giảng viên** (cách nói, lúc dừng, lúc hỏi) — không phải nội dung đọc to.
> Độ dài mỗi phần tính theo khoảng 120–140 từ/phút nói.
>
> **Nguồn:** tài liệu học tập Bài 8 (`tai_lieu_hoc_tap/Bai08.md` — nội dung chuẩn, đã sửa lỗi); slide UEF
> Bài 8 (21 slide, dừng ở 8.2.6 thành phần 1); kết quả NotebookLM từ các video Questionnaire Construction,
> Survey Design Tips to Reduce Bias, Marketing Research Unit 4 (ví dụ sai – sửa, nguyên tắc sắp xếp, thử
> nghiệm); đề cương MKT1107. Ví dụ trong video (Wendy's, Burger King, Best Buy…) đã được **chuyển sang
> bối cảnh Việt Nam (giả định)**. Tình huống ghi **(giả định)** là do Claude dựng để minh họa. Ví dụ
> xuyên suốt: đề tài *ý định mua mỹ phẩm nội địa của sinh viên TP.HCM* — cùng ví dụ với Bài 4, 6, 7.
> Mọi chỗ cần giảng viên kiểm tra đều gắn `[VERIFY]` và được tổng hợp ở cuối tài liệu.
>
> **Phạm vi Buổi 10:** đi **toàn bộ** 8 bước ở mức đủ để nhóm viết bản nháp đầy đủ ngay trên lớp. Buổi 11
> đi sâu 8.2.1–8.2.4, Buổi 12 đi sâu 8.2.5–8.2.8. Khi sinh viên hỏi sâu về một bước, trả lời ngắn và
> hẹn "Buổi 11/12 mình đi kỹ".

---

## S1 · Khởi động (0–10') — Kiểm tra bảng thang đo / khung chủ đề

*(Chiếu slide 2. Mời trước 2 nhóm — một nhóm định lượng, một nhóm định tính — mỗi nhóm 1 phút chiếu
bài tập Buổi 9. Các nhóm khác mở bảng của mình ra đối chiếu.)*

Tuần trước các bạn đã làm xong phần khó nhất về mặt "đo cái gì": nhóm định lượng có **bảng thang đo**
— mỗi khái niệm trong mô hình có các biến quan sát, có mã, có nguồn kế thừa; nhóm định tính có **khung
chủ đề** — các khái niệm cần tìm hiểu và các khía cạnh của từng khái niệm. Hôm nay, bảng đó sẽ biến
thành một **bảng câu hỏi thật** mà người ngoài có thể trả lời được.

Trước khi biến, kiểm tra nhanh ba điều. Hai nhóm vừa trình bày — và tất cả các nhóm tự soát bảng của
mình:

1. **Mỗi khái niệm có từ 3 biến quan sát trở lên, có mã biến (GIA1, GIA2…) và có nguồn kế thừa không?**
2. **Cấp thang đo của mỗi biến có khớp với kỹ thuật phân tích dự kiến không?** (Ví dụ: muốn tính
   trung bình thì không thể đo bằng thang định danh.)
3. **Nhóm định tính:** mỗi chủ đề đã có các khía cạnh cụ thể chưa, hay mới chỉ là một từ chung chung
   như "trải nghiệm"?

*(Phản hồi mỗi nhóm một câu, ưu tiên chỉ ra một điểm cần sửa trước giờ thực hành. Lỗi hay gặp: khái
niệm chỉ có 1–2 biến; biến quan sát dịch sát chữ từ tiếng Anh nên khó hiểu; nhóm định tính viết sẵn
câu hỏi Có/Không thay vì chủ đề. Nếu nhiều nhóm chưa làm: ghi lại, chuyển sang phương án dự phòng ở S8.)*

*(Chiếu slide 3. Chuyển ý bằng một câu hỏi.)*

Một câu hỏi cho cả lớp: **nếu câu hỏi trong bảng khảo sát bị đặt sai, người trả lời có bỏ trống
không?** *(Chờ 2–3 câu trả lời.)*

Thường là **không**. Người ta vẫn tích vào một ô nào đó. Bảng tính vẫn đầy số, biểu đồ vẫn đẹp —
nhưng con số đó không đo điều mình cần đo. Người giảng trong các video bài giảng hay nhắc câu
*"garbage in, garbage out"* — đưa rác vào thì nhận rác ra. Và nguy hiểm nhất là rác trông giống hệt dữ
liệu tốt. Không có phần mềm thống kê nào "cứu" được một câu hỏi sai. Cho nên hôm nay là buổi quyết
định chất lượng dữ liệu của cả dự án.

---

## S2 · Bảng câu hỏi là gì, cần gì, đi qua mấy bước (10–22')

### 2.1 Mục tiêu buổi học

*(Slide 4. Nói nhanh.)* Cuối buổi hôm nay, mỗi nhóm sẽ ra về với **một bản nháp đầy đủ** — định lượng
là bảng hỏi đủ ba phần, nếu kịp thì dựng luôn trên Google Forms; định tính là dàn bài phỏng vấn. Để
làm được, mình đi qua cả 8 bước thiết kế, nhưng chỉ dừng lâu ở những chỗ quyết định bản nháp: bảng ánh
xạ, cấu trúc ba phần, và các lỗi đặt câu hỏi. Buổi 11 và 12 sẽ quay lại đi sâu từng bước để sửa bản
nháp này thành bản phát hành.

### 2.2 Vai trò của bảng câu hỏi (8.1)

*(Slide 5 [UEF #3].)*

**Bảng câu hỏi** là tập hợp các câu hỏi được sắp xếp theo trình tự hợp lý, dùng để thu thập dữ liệu
từ người trả lời **một cách thống nhất** — ai cũng được hỏi cùng một câu, cùng một cách, nên câu trả
lời mới so sánh và cộng dồn được.

Câu quan trọng nhất của 8.1: **bảng hỏi là cầu nối giữa mục tiêu nghiên cứu và dữ liệu.** Từ đó suy ra
hai hệ quả mà cả buổi hôm nay xoay quanh:

- Câu hỏi nào **không phục vụ mục tiêu** nào thì không nên có.
- Mục tiêu nào **không có câu hỏi** nào thì sẽ không có dữ liệu để trả lời — và chương kết quả sẽ thiếu.

Hai loại công cụ tương ứng với hai hướng dự án:

| | Bảng câu hỏi (định lượng) | Dàn bài thảo luận (định tính) |
|---|---|---|
| Câu hỏi | Cố định, chủ yếu là câu hỏi đóng | Linh hoạt, chủ yếu là câu hỏi mở |
| Người dùng | Người trả lời tự điền hoặc phỏng vấn viên đọc nguyên văn | Người phỏng vấn dùng làm khung, có thể hỏi thêm |
| Dữ liệu | Con số, dễ mã hóa | Lời nói, cần gỡ băng và mã hóa theo chủ đề |

*(Hỏi nhanh: "Nhóm định tính có cần học bảng hỏi không?" → Có. Dàn bài phỏng vấn vẫn đi qua gần như
đủ 8 bước: vẫn cần ánh xạ mục tiêu – câu hỏi, vẫn có phần mở đầu – nội dung chính – kết thúc, vẫn phải
tránh câu dẫn dắt và câu kép. Khác ở chỗ câu hỏi mở và có câu **gợi mở thêm** (probing).)*

### 2.3 Hai yêu cầu cơ bản

*(Slide 6 [UEF #4].)*

1. **Đầy đủ** — thu đủ thông tin cần cho mục tiêu nghiên cứu **và** cho kế hoạch phân tích. Thiếu thì
   không trả lời được câu hỏi nghiên cứu, hoặc kết luận sai.
2. **Thu hút, dễ trả lời** — người trả lời sẵn lòng trả lời **hết** và trả lời **trung thực**: ngắn
   gọn, rõ ràng, không gây khó chịu.

Hai yêu cầu này **kéo nhau theo hai hướng**. Muốn đầy đủ thì có xu hướng hỏi thêm; muốn dễ trả lời thì
phải hỏi ít đi. Nghệ thuật thiết kế bảng hỏi là giữ đúng những câu cần, bỏ hết những câu "hỏi cho
biết".

### 2.4 "Nguyên tắc 5 phút"

*(Slide 7.)*

Một người giảng trong video bài giảng nói thẳng: *không ai có nghĩa vụ trả lời khảo sát của bạn.* Người
trả lời bận, mệt, đang lướt điện thoại. Ông đưa ra một **quy tắc kinh nghiệm**: một khảo sát chỉ có
khoảng **5 phút** sự chú ý của người trả lời — tương đương khoảng **hai trang giấy** câu hỏi. Quá mức
đó, người trả lời bắt đầu "tích bừa" — chọn cùng một mức cho cả cột cho nhanh xong.

Lưu ý: đây là **quy tắc kinh nghiệm của người giảng**, không phải một chuẩn cố định. Tài liệu học tập
của lớp mình ghi độ dài hợp lý cho khảo sát trực tuyến là **khoảng 5–10 phút**. Vậy mục tiêu cho nhóm:
**dưới 10 phút, càng gần 5 phút càng tốt** — và con số này phải được **bấm giờ thật** khi phỏng vấn
thử, không phải đoán.

Hệ quả thực tế: mô hình của nhóm có 4–5 khái niệm × 3–5 biến là đã khoảng 15–25 câu Likert. Cộng
thêm gạn lọc, hành vi và nhân khẩu học là chạm ngưỡng. **Không còn chỗ cho câu "tiện thì hỏi luôn".**

`[VERIFY: "5 phút ≈ 2 trang" và "tối đa 2 câu hỏi mở" là quy tắc kinh nghiệm trong video, chưa có nguồn
học thuật; bài giảng nêu như vậy.]`

### 2.5 Tổng quan quy trình 8 bước

*(Slide 8 [UEF #5] — thêm mũi tên quay lại và nhãn buổi học.)*

1. **8.2.1** Xác định cụ thể vấn đề cần thu thập
2. **8.2.2** Xác định dạng phỏng vấn
3. **8.2.3** Đánh giá nội dung câu hỏi
4. **8.2.4** Xác định hình thức trả lời
5. **8.2.5** Xác định cách dùng thuật ngữ
6. **8.2.6** Xác định cấu trúc bảng câu hỏi
7. **8.2.7** Xác định hình thức bảng câu hỏi
8. **8.2.8** Thử lần thứ nhất, sửa chữa, bản nháp cuối cùng

Hai điều cần nói rõ:

- Quy trình **không hoàn toàn tuyến tính**: khi thử nghiệm phát hiện lỗi, nhóm **quay lại** các bước
  trước (thường là bước 3–5) để sửa. Bản nháp hôm nay sẽ còn được sửa ít nhất hai lần.
- Lịch của mình: **hôm nay** đi cả 8 bước để có bản nháp; **Buổi 11** đi sâu bước 1–4 và sửa theo kết
  quả phỏng vấn thử; **Buổi 12** đi sâu bước 5–8 và chuẩn bị nhập liệu. Phát hành bảng hỏi **sau Buổi
  11**, thu xong dữ liệu **trước Buổi 13**.

Chuyển ý: Bước 1 là bước các nhóm hay bỏ qua nhất — và cũng là bước quyết định bảng hỏi có "đầy đủ"
hay không.

---

## S3 · Từ mục tiêu đến câu hỏi: bước 1–4 (22–45')

### 3.1 Bước 1 — Xác định cụ thể vấn đề cần thu thập: bảng ánh xạ (khoảng 9')

*(Slide 9 [UEF #6], slide 10.)*

Nhiều nhóm thiết kế bảng hỏi bằng cách mở Google Forms rồi nghĩ ra câu hỏi. Cách đó gần như chắc chắn
sinh ra câu thừa và bỏ sót câu cần. Cách làm đúng là đi **ngược**: từ mục tiêu, câu hỏi nghiên cứu và
mô hình đã có trong đề cương, liệt kê **chính xác từng thông tin cần thu**, rồi mới viết câu hỏi. Công
cụ là **bảng ánh xạ** bốn cột:

**Mục tiêu / câu hỏi nghiên cứu → Thông tin cần thu → Câu hỏi trong bảng hỏi → Kỹ thuật phân tích**

*Ví dụ (giả định) — đề tài ý định mua mỹ phẩm nội địa của sinh viên TP.HCM (mô hình đã dùng ở Bài 4
và Bài 7):*

| Mục tiêu / câu hỏi nghiên cứu | Thông tin cần thu | Câu hỏi | Kỹ thuật phân tích |
|---|---|---|---|
| (Lọc đúng đối tượng) | Có phải sinh viên đang học tại TP.HCM | C1 (gạn lọc) | — |
| Mô tả hành vi mua mỹ phẩm nội địa | Đã từng mua chưa; số lần mua trong 3 tháng qua; nơi mua | C2–C4 | Tần số, tỷ lệ |
| Đo đánh giá của sinh viên về giá và chất lượng | Nhận thức về giá (GIA1–GIA3); chất lượng cảm nhận (CL1–CL3) | C5–C10 | Trung bình, độ lệch chuẩn |
| Đo ý định mua | Ý định mua (YD1–YD3) | C11–C13 | Trung bình, độ lệch chuẩn |
| Xem xét mối liên hệ giữa nhận thức về giá và ý định mua (H1) | GIA, YD | C5–C7, C11–C13 | Tương quan (nhị biến) |
| So sánh ý định mua giữa nam và nữ (H2) | YD, giới tính | C11–C13, C15 | Kiểm định khác biệt |
| Mô tả đặc điểm mẫu | Giới tính, năm học, mức chi tiêu hằng tháng | C15–C17 | Tần số, tỷ lệ |

*(Chỉ vào cột cuối.)* Để ý cột **kỹ thuật phân tích**: đây là chỗ nối với Bài 7 (cấp thang đo) và Bài
9 (phân tích). Nếu cột này ghi "kiểm định khác biệt theo giới tính" thì bảng hỏi **bắt buộc** phải có
câu hỏi giới tính. Nếu ghi "trung bình" thì biến đó phải đo bằng thang quãng (ví dụ Likert 5 điểm) chứ
không thể là câu định danh. Phân tích trong học phần dừng ở mô tả, đơn biến và nhị biến; nhóm nào làm
thêm hồi quy thì là điểm cộng — nhưng câu hỏi vẫn là những câu này.

*(Slide 11.)* Bảng ánh xạ bắt được **hai lỗi**:

- **Câu thừa** — câu hỏi không nằm ở dòng nào. Ví dụ "Bạn thích màu son nào nhất?" nghe vui nhưng
  không phục vụ mục tiêu nào → cắt. Người giảng trong video có một quy tắc dễ nhớ: *nếu câu hỏi không
  giúp ra quyết định thì đừng hỏi.*
- **Mục tiêu thiếu câu** — một mục tiêu có trong đề cương nhưng không có câu hỏi nào thu dữ liệu cho
  nó. Phát hiện lúc này thì sửa mất 1 phút; phát hiện khi đã thu xong 150 phiếu thì không sửa được nữa.

**Nhóm định tính** lập bảng ánh xạ ba cột: *mục tiêu → chủ đề / khía cạnh (từ khung chủ đề Buổi 9) →
câu hỏi chính + câu gợi mở*. Cột phân tích là "mã hóa theo chủ đề" cho mọi dòng.

### 3.2 Bước 2 — Xác định dạng phỏng vấn (khoảng 4')

*(Slide 12 [UEF #7], slide 13.)*

Cách thu thập quyết định cách viết câu hỏi. Bốn dạng:

| Dạng phỏng vấn | Ưu điểm | Nhược điểm | Ảnh hưởng đến thiết kế |
|---|---|---|---|
| Trực diện | Giải thích được; dùng hình ảnh, thẻ trả lời; hỏi được lâu | Tốn kém; người trả lời dễ trả lời theo hướng "đẹp" | Có thể dài hơn, cần hướng dẫn cho phỏng vấn viên |
| Điện thoại | Nhanh, chi phí vừa | Không dùng hình ảnh; khó hỏi câu nhiều lựa chọn dài | Câu ngắn, ít lựa chọn, tổng thời gian ngắn |
| Thư | Không có ảnh hưởng của người phỏng vấn | Tỷ lệ hồi đáp thấp, chậm | Hướng dẫn phải thật rõ vì không ai giải thích |
| Trực tuyến (web, email, mạng xã hội) | Rẻ, nhanh; tự động rẽ nhánh, bắt buộc trả lời; dữ liệu vào thẳng bảng tính | Khó kiểm soát người trả lời; dễ trả lời qua loa | Câu gạn lọc chặt, câu kiểm tra sự chú ý, tối ưu cho điện thoại |

Với dự án định lượng của lớp, dạng gần như chắc chắn là **khảo sát trực tuyến** (Google Forms hoặc
tương tự). Điểm cần nhớ: trực tuyến là dạng **rẻ nhất nhưng người trả lời chú ý ít nhất** — vừa trả
lời vừa nhắn tin, xem video. Không có ai đứng cạnh để giải thích câu khó hiểu. Vì vậy với khảo sát
trực tuyến, ba thứ phải làm kỹ hơn: **câu gạn lọc** (để lọc đúng người khi phát link qua mạng xã hội),
**hướng dẫn trả lời rõ ràng**, và **ngắn**.

Nhóm định tính: phỏng vấn sâu **trực tiếp** hoặc **trực tuyến qua gọi video**; cả hai đều cần xin phép
ghi âm ở phần mở đầu.

### 3.3 Bước 3 — Đánh giá nội dung câu hỏi (khoảng 5')

*(Slide 14 [UEF #8].)* Với **mỗi** câu hỏi, tự hỏi bốn câu:

| Câu hỏi kiểm tra | Nếu "không" thì xử lý thế nào |
|---|---|
| 1. Câu này có **cần thiết** không (phục vụ mục tiêu nào)? | Bỏ câu hỏi — bảng ánh xạ đã làm việc này |
| 2. Người trả lời có **hiểu** câu hỏi không? | Viết lại đơn giản hơn, giải thích thuật ngữ |
| 3. Người trả lời có **thông tin** để trả lời không (nhớ được, biết được)? | Thêm câu gạn lọc ("Bạn đã từng dùng… chưa?"); rút ngắn khoảng thời gian hỏi lại; thêm "Không nhớ" |
| 4. Người trả lời có **sẵn lòng** trả lời không? | Câu nhạy cảm: hỏi theo khoảng, đặt cuối bảng hỏi, cam kết ẩn danh, cho phép "Không muốn trả lời" |

Thêm một yêu cầu: câu hỏi phải **thu đúng dữ liệu cần**. Cần biết tần suất mua thì đừng hỏi "Bạn có
hay mua không?" mà hỏi "Trong 3 tháng qua, bạn mua bao nhiêu lần?".

*(Slide 15 [UEF #9 — đổi ví dụ].)* **Câu nhạy cảm** — với sinh viên, thường là tiền: thu nhập, chi
tiêu, nợ. Thay vì hỏi "Thu nhập hàng tháng của bạn là bao nhiêu?", hỏi theo khoảng và đặt cuối bảng:

```
Mức chi tiêu hàng tháng của bạn (không tính học phí):
□ Dưới 3 triệu đồng   □ Từ 3 đến dưới 5 triệu   □ Từ 5 đến dưới 7 triệu
□ Từ 7 triệu trở lên   □ Không muốn trả lời
```

*(Ghi chú cho giảng viên: slide UEF #9 dùng ví dụ "Bạn bao nhiêu tuổi?" và gọi là "xâm phạm quyền
riêng tư". Với sinh viên, tuổi ít nhạy cảm; giữ ý "hỏi theo khoảng" nhưng dùng ví dụ chi tiêu như tài
liệu học tập.)*

### 3.4 Bước 4 — Xác định hình thức trả lời (khoảng 5', lướt — Buổi 11 đi sâu)

*(Slide 16 [UEF #10 + #13].)*

- **Câu hỏi đóng** — cho sẵn phương án: nhị phân, nhiều lựa chọn – một đáp án, nhiều lựa chọn – nhiều
  đáp án, xếp hạng, thang đo (Likert, đối nghĩa — Bài 7). Dễ trả lời, dễ mã hóa, dễ phân tích; nhưng
  có thể bỏ sót ý nằm ngoài danh sách.
- **Câu hỏi mở** — người trả lời tự diễn đạt. Thu được ý ngoài dự kiến; nhưng khó mã hóa và tốn công
  trả lời nên nhiều người bỏ trống. Trong bảng hỏi định lượng, chỉ nên có **1–2 câu mở** (ví dụ góp ý
  cuối bảng). Người giảng trong video cũng khuyên "tối đa hai câu mở" — quy tắc kinh nghiệm. Trong
  phỏng vấn định tính thì ngược lại: câu mở kèm **câu gợi mở thêm** ("Bạn có thể kể thêm…?", "Vì sao
  bạn nghĩ vậy?") là công cụ chính.

*(Slide 17 [UEF #11 đã sửa + #12].)* Hai lưu ý cho câu đóng, sẽ gặp lại ở phần lỗi:

- Phương án phải **đầy đủ** (thêm "Khác: ____" khi cần) và **loại trừ nhau**.
- Với câu xếp hạng, **số bậc phải bằng số mục**: 3 mục thì "1 = quan trọng nhất, 3 = ít quan trọng
  nhất".

*(Ghi chú cho giảng viên: slide UEF #11 ghi "1 = Quan trọng nhất, 5 = Ít nhất" nhưng chỉ có 3 mục —
đã sửa thành 1–3 trên slide 17. Có thể dùng chính lỗi này làm câu hỏi: "Slide gốc có lỗi gì?")*

---

## S4 · Kiểm tra nhanh (45–50')

*(Slide 18. Chiếu một bảng ánh xạ rút gọn của đề tài giả định "trà sữa gần trường" — 3 mục tiêu, 6 câu
hỏi. Cặp 30 giây; chỉ định 2 bạn trả lời.)*

| Mục tiêu | Câu hỏi |
|---|---|
| M1. Mô tả tần suất và mức chi cho trà sữa | C1 Số lần mua trong 7 ngày qua · C2 Số tiền trung bình mỗi lần |
| M2. Đo mức hài lòng với cửa hàng X | C3–C5 Hài lòng về vị, giá, phục vụ (Likert 5 điểm) |
| M3. So sánh mức hài lòng giữa sinh viên năm 1 và các năm khác | — |
| (không thuộc mục tiêu nào) | C6 Bạn thích nghe thể loại nhạc nào khi uống trà sữa? |

**Câu hỏi:** (1) Câu nào thừa? (2) Mục tiêu nào thiếu câu hỏi — cần thêm câu gì?

*Đáp án mong đợi:* (1) C6 thừa → cắt (trừ khi nhóm bổ sung một mục tiêu cần nó và có lý do). (2) M3
thiếu câu **năm học** (đặt ở phần thông tin cá nhân cuối bảng); kỹ thuật phân tích: kiểm định khác
biệt. *(Câu chốt: "Bước 1 mất 10 phút, nhưng tiết kiệm cho nhóm một lần khảo sát lại.")*

---

## Giải lao (50–65')

---

## S5 · Sắp xếp bảng hỏi: cấu trúc 3 phần và hình thức trực tuyến (65–78')

### 5.1 Bước 6 — Cấu trúc ba phần (khoảng 8')

*(Slide 20 [UEF #20].)*

Hình dung bảng hỏi như một **cuộc trò chuyện**: chào hỏi, giới thiệu mình là ai, hỏi chuyện nhẹ trước,
chuyện chính sau, chuyện riêng tư sau cùng — khi người ta đã thoải mái. Bảng hỏi có ba phần:

| Phần | Nội dung | Lưu ý |
|---|---|---|
| **1. Mở đầu (giới thiệu + gạn lọc)** | Lời chào; người thực hiện; mục đích nghiên cứu; thời gian trả lời dự kiến; cam kết ẩn danh, tự nguyện; câu hỏi gạn lọc | **Thuyết phục** người trả lời tham gia và **lọc đúng đối tượng** |
| **2. Nội dung chính** | Các câu hỏi phục vụ mục tiêu: hành vi, các thang đo khái niệm | Sắp xếp theo phễu, dễ trước khó sau |
| **3. Thông tin cá nhân** | Giới tính, năm học, mức chi tiêu… và lời cảm ơn | Để cuối; chỉ hỏi thông tin thực sự dùng trong phân tích |

*(Slide 21 [UEF #21].)* **Phần mở đầu** có hai nhiệm vụ. Nhiệm vụ **thuyết phục**: nói rõ ai làm, làm
để làm gì, mất bao lâu, dữ liệu được giữ thế nào. Ghi đúng thời gian — nếu ghi "3 phút" mà thực tế 12
phút, người trả lời sẽ bỏ giữa chừng và mất lòng tin. Nhiệm vụ **sàng lọc**: câu gạn lọc.

*Ví dụ (giả định) — phần mở đầu:*

```
Xin chào bạn! Chúng tôi là nhóm sinh viên học phần Nghiên cứu Marketing,
Trường Đại học Kinh tế – Tài chính TP.HCM. Chúng tôi đang tìm hiểu ý kiến của sinh viên
về mỹ phẩm nội địa. Khảo sát mất khoảng 7 phút. Mọi câu trả lời được giữ ẩn danh
và chỉ dùng cho mục đích học tập. Bạn có thể dừng bất kỳ lúc nào.

Câu gạn lọc: Hiện bạn có phải là sinh viên đang học tại TP.HCM không?
□ Có (tiếp tục)   □ Không (cảm ơn và kết thúc)
```

*(Slide 22.)* **Câu gạn lọc đứng đầu tiên.** Lý do rất thực tế: link khảo sát sẽ được chia sẻ qua mạng
xã hội và đến tay cả những người không thuộc đối tượng. Gạn lọc ở đầu thì người không phù hợp được cảm
ơn và kết thúc ngay, không mất thời gian của họ, và không làm bẩn dữ liệu của mình. Đặt gạn lọc ở giữa
hay cuối là phí thời gian của người trả lời — và nhiều nhóm sẽ phải tự tay lọc lại phiếu.

Ví dụ trong video (chuyển sang bối cảnh Việt Nam): muốn đánh giá chất lượng một chuỗi cơm gà X, câu đầu
tiên là *"Trong 3 tháng qua, bạn đã từng ăn tại cơm gà X chưa?"* Chưa từng → không hỏi đánh giá chất
lượng, vì người đó không có thông tin để trả lời (nhớ lại 4 câu kiểm tra ở bước 3).

*(Slide 23.)* **Phần nội dung chính** sắp xếp theo bốn nguyên tắc:

1. **Phễu — từ chung đến riêng:** hỏi hành vi chung trước ("Trong 3 tháng qua bạn mua mỹ phẩm nội địa
   bao nhiêu lần?"), đánh giá cụ thể sau (các thang đo GIA, CL, YD). Lý do: câu trước có thể "mồi" cho
   câu sau — hỏi chi tiết trước rồi hỏi đánh giá chung thì người trả lời bị kéo theo những gì vừa
   nghĩ tới.
2. **Dễ trước, khó sau:** câu đầu tiên sau gạn lọc phải dễ, nhẹ nhàng — câu "khởi động".
3. **Nhóm theo chủ đề:** các biến của cùng một khái niệm đặt cạnh nhau, có tiêu đề ngắn dẫn dắt. Đừng
   nhảy từ đánh giá sản phẩm sang thông tin cá nhân rồi quay lại sản phẩm.
4. **Rẽ nhánh hợp lý:** người "chưa từng mua" được chuyển sang phần khác, không phải trả lời câu không
   liên quan.

*(Slide 24.)* **Câu nhân khẩu học và câu nhạy cảm để cuối cùng.** Hai lý do. Thứ nhất, các câu này
**ít hấp dẫn** và đôi khi **gây phòng thủ** — hỏi ngay đầu làm người ta ngại, dễ bỏ. Thứ hai, **hiệu ứng
thứ tự (hiệu ứng mồi)**: một câu gây cảm xúc mạnh ở đầu có thể ảnh hưởng đến cách trả lời các câu sau.
Video có ví dụ minh họa: hỏi quan điểm chính trị ngay đầu khảo sát làm lệch cả những đánh giá sản phẩm
không liên quan phía sau. Đến cuối bảng, người trả lời đã đầu tư thời gian và thấy an toàn hơn; nhắc
lại cam kết ẩn danh ngay trước phần này.

Và chỉ hỏi thông tin **thực sự dùng trong phân tích** — kiểm tra lại bảng ánh xạ: câu "quê quán" có
nằm ở dòng nào không?

**Nhóm định tính** — dàn bài phỏng vấn có cấu trúc tương tự: (1) **mở đầu**: giới thiệu, mục đích, thời
lượng dự kiến, xin phép ghi âm, cam kết ẩn danh, câu xác nhận người tham gia đúng đối tượng; (2) **câu
khởi động** nhẹ nhàng; (3) **câu hỏi chính theo chủ đề**, đi từ chung đến riêng, mỗi câu có 1–2 câu gợi
mở thêm; (4) **kết thúc**: "Bạn còn điều gì muốn chia sẻ thêm không?", cảm ơn; thông tin cơ bản của người
tham gia (năm học, giới tính nếu cần) ghi ở cuối.

### 5.2 Bước 7 — Hình thức bảng hỏi trực tuyến (khoảng 5')

*(Slide 25 — slide bổ sung, deck UEF không có. Nếu có thể, mở Google Forms trên máy chiếu và chỉ nhanh
từng chức năng.)*

Nguyên tắc chung: đánh số câu liên tục, có tiêu đề từng phần, hướng dẫn rõ ở đầu mỗi phần (chọn một
hay nhiều đáp án; chiều của thang đo), không ngắt một câu sang hai trang, đủ khoảng trắng. Với Google
Forms hoặc công cụ tương tự:

| Nên làm | Vì sao |
|---|---|
| Dùng dạng **lưới trắc nghiệm** cho các câu Likert cùng thang đo | Gọn, nhất quán, trả lời nhanh |
| **Chia phần (section)**, dùng **rẽ nhánh** theo câu trả lời | Câu gạn lọc "Không" → chuyển tới phần cảm ơn; người chỉ thấy câu liên quan |
| Bật **bắt buộc trả lời** cho các câu chính (trừ câu nhạy cảm) | Giảm dữ liệu thiếu |
| Thêm **1 câu kiểm tra sự chú ý** ("Để chứng tỏ bạn đang đọc kỹ, hãy chọn mức 2 cho câu này") | Loại câu trả lời qua loa |
| **Kiểm tra hiển thị trên điện thoại** | Phần lớn người trả lời dùng điện thoại; lưới rộng dễ bị cắt |
| **Không thu email / tên** nếu không cần | Bảo đảm ẩn danh (đạo đức nghiên cứu, Bài 1) |

*(Nhấn mạnh dòng cuối: Google Forms có tùy chọn thu thập email — tắt đi, trừ khi có lý do và đã nói rõ
trong phần mở đầu.)* Mã hóa sẵn (ghi mã biến GIA1, GIA2… và mã số phương án) sẽ học ở Buổi 12 cùng Bài 9.

---

## S6 · Năm lỗi đặt câu hỏi — bắt lỗi nhanh (78–93')

*(Xem phiếu `W10_activity_bat_loi_nhanh.md` — kịch bản và đáp án. Slide 26–32. Mỗi lỗi khoảng 2': chiếu
câu sai → cặp 20 giây → chỉ định 1 bạn gọi tên lỗi và đề xuất sửa → chiếu câu sửa và nói 1 câu nguyên
tắc. Buổi 12 sẽ đi kỹ đủ 6 nguyên tắc của 8.2.5; hôm nay chỉ cần nhận ra lỗi để không viết sai trong bản
nháp.)*

### 6.1 Bước 5 trong một câu

*(Slide 26 [UEF #14].)* Cách đặt câu quyết định người trả lời hiểu gì và trả lời ra sao. Tài liệu học
tập nêu **6 nguyên tắc**: đơn giản – quen thuộc · rõ ràng – cụ thể · tránh câu hỏi kép · tránh dẫn dắt
· thang đo cân bằng · tránh bắt ước đoán. Nguyên tắc thứ nhất (dùng từ đơn giản, tránh thuật ngữ như
"omnichannel") gần như ai cũng biết; hôm nay tập trung vào **năm lỗi** hay gặp nhất trong bài sinh
viên, cộng một lỗi nằm ở **phương án trả lời**.

### 6.2 Lỗi 1 — Câu hỏi dẫn dắt (leading question)

*(Slide 27 [UEF #17 — thay thương hiệu].)*

> ❌ "Vì sao bạn thích bánh mì của tiệm X — làm từ thịt tươi mỗi ngày — hơn các tiệm khác?"

**Vấn đề:** câu hỏi đã **giả định** người trả lời thích, và còn "quảng cáo" luôn ưu điểm. Người trả lời
bị đẩy về một đáp án.

> ✅ "Bạn đánh giá bánh mì của các tiệm sau như thế nào?" (danh sách các tiệm, xếp ngẫu nhiên, cùng một
> thang đo)

Các biến thể hay gặp trong bài sinh viên (chuyển từ ví dụ trong video):

- "Bạn có đồng ý rằng học trực tuyến rất nhàm chán không?" → "Bạn đánh giá thế nào về các buổi học trực
  tuyến của mình?"
- "Bạn thích điểm gì ở sản phẩm mới của chúng tôi?" (giả định đã thích) → "Trải nghiệm của bạn với sản
  phẩm mới như thế nào?"
- "Như phần lớn sinh viên có ý thức, bạn có ủng hộ việc dùng ống hút giấy không?" → bỏ cụm "như phần lớn
  sinh viên có ý thức" — cụm này tạo **áp lực xã hội** để trả lời "có".

*(Ghi chú cho giảng viên: slide UEF #17 dùng "Cô gái Hà Lan" làm ví dụ tiêu cực; theo quy ước học phần,
thay bằng thương hiệu giả định. Tài liệu học tập 8.2.5 dùng "sữa thương hiệu Y" — có thể dùng song song.)*

### 6.3 Lỗi 2 — Câu hỏi kép (double-barreled question): phải TÁCH thành hai câu

*(Slide 28 [UEF #16 — đã sửa].)*

> ❌ "Bạn thấy kem thương hiệu X có ngon và bổ dưỡng không?"

**Vấn đề:** hỏi **hai ý** trong một câu. Người thấy kem ngon nhưng không bổ dưỡng không biết trả lời
thế nào; và dù họ trả lời gì, nhóm cũng không biết câu trả lời đó nói về vị ngon hay về dinh dưỡng.

> ✅ Tách thành **hai câu riêng**, mỗi câu một thang đo:
> - "Kem X có vị ngon." (1 = Hoàn toàn không đồng ý … 5 = Hoàn toàn đồng ý)
> - "Kem X bổ dưỡng." (1 = Hoàn toàn không đồng ý … 5 = Hoàn toàn đồng ý)

**Lưu ý — cách sửa sai trên slide gốc:** slide UEF #16 đưa "giải pháp" là gộp thành **một** câu với 4
phương án (ngon và bổ / ngon nhưng không bổ / không ngon nhưng bổ / không ngon cũng không bổ). Cách đó
**không đúng tinh thần** nguyên tắc: vẫn là một câu đo hai khái niệm, không đưa vào thang Likert được,
và sẽ rối khi phân tích. **Cách chuẩn là tách thành hai câu.**

Dấu hiệu nhận biết nhanh: chữ **"và"**, **"hoặc"**, dấu phẩy nối hai tính từ trong một câu hỏi. Thêm
ví dụ:

- "Bạn thấy học trực tuyến thú vị và bổ ích không?" → (1) "…thú vị?" (2) "…bổ ích?"
- "Bạn đánh giá thế nào về dịch vụ chăm sóc khách hàng và quy trình thanh toán của sàn X?" → hai câu.
- "Ai là người dọn dẹp và sửa chữa đồ đạc trong nhà bạn?" → hai câu.

*(Hỏi lớp: "Trong bảng thang đo của nhóm mình, có biến quan sát nào có chữ 'và' không?" — rất hay gặp
khi dịch thang đo tiếng Anh, ví dụ "Sản phẩm có chất lượng tốt và bền".)*

### 6.4 Lỗi 3 — Câu hỏi mơ hồ (và phủ định kép)

*(Slide 29 [UEF #15].)*

> ❌ "Bạn có thường xuyên đặt đồ ăn qua ứng dụng không?"

**Vấn đề:** "thường xuyên" mỗi người hiểu một khác — người này là mỗi ngày, người kia là mỗi tuần.

> ✅ "Trong 7 ngày qua, bạn đặt đồ ăn qua ứng dụng bao nhiêu lần?" □ 0 □ 1–2 □ 3–4 □ 5 lần trở lên

Thêm hai ví dụ:

- "Gia đình bạn có bao nhiêu người?" — tính cả ông bà ở quê? anh chị đã ra ở riêng? → "Hiện có bao nhiêu
  người cùng sống trong nhà bạn (kể cả bạn)?"
- **Phủ định kép:** "Bạn có không đồng ý rằng sản phẩm X không hiệu quả?" — người trả lời phải "gỡ" hai
  lần phủ định → "Bạn đánh giá mức độ hiệu quả của sản phẩm X như thế nào?"

### 6.5 Lỗi 4 — Bắt người trả lời ước đoán

*(Slide 30 [UEF #19].)*

> ❌ "Trong năm qua, bạn đã đi xem phim ở rạp bao nhiêu lần?"

**Vấn đề:** không ai nhớ và cộng dồn chính xác cả năm — người trả lời phải **đoán**, tạo sai lệch lớn.

> ✅ "Trong 3 tháng vừa qua, bạn đã đi xem phim ở rạp bao nhiêu lần?" □ 0 □ 1–2 □ 3–5 □ 6 lần trở lên
> — nếu cần con số cả năm, **nhà nghiên cứu** tự quy đổi.

Hai dạng khác của lỗi này (chuyển từ ví dụ trong video):

- Hỏi chuyện **quá xa**: "Lần đầu tiên bạn uống trà sữa là vào dịp nào?" → "Lần gần đây nhất bạn uống
  trà sữa là khi nào?"
- Bắt **tính toán**: "Trong năm qua, bao nhiêu phần trăm quãng đường bạn đi xe máy là để đi học?" →
  "Quãng đường từ nơi ở đến trường của bạn khoảng bao nhiêu km?" (theo khoảng)

*(Ghi chú cho giảng viên: video còn nêu "bắt dự đoán tương lai" — ví dụ "Bạn có đăng ký dịch vụ X trong
tương lai không?". Cẩn thận khi nói: mô hình của nhiều nhóm có khái niệm **ý định mua**, đo bằng thang
đo đã kiểm định — đó **không** phải lỗi. Lỗi là bắt người trả lời đoán một hành vi hoặc con số cụ thể
mà họ không có cơ sở để biết.)*

### 6.6 Lỗi 5 — Thang đo không cân bằng

*(Slide 31 [UEF #18 — đã sửa].)*

> ❌ "Bạn thích sữa đậu nành Z ở mức nào?" □ Vô cùng thích □ Rất thích □ Thích □ Tạm được □ Không thích

**Vấn đề:** 3 mức tích cực, chỉ 1 mức tiêu cực — kết quả bị đẩy về phía "thích" ngay từ thiết kế.

> ✅ □ Rất thích □ Thích □ Bình thường □ Không thích □ Rất không thích (số mức tích cực = số mức tiêu
> cực, có mức trung lập ở giữa)

*(Ghi chú cho giảng viên: slide UEF #18 có lỗi chữ "đối tượng nghiêng" → "đối tượng nghiêng về một
phía", và gắn nhãn "(Loaded Question)" — lỗi này đúng tên là **thang đo không cân bằng (unbalanced
scale)**; "loaded question" là câu hỏi có cài sẵn giả định, gần với lỗi dẫn dắt. Thương hiệu "Tribeco"
thay bằng thương hiệu giả định Z.)*

### 6.7 Thêm một lỗi ở phương án: chồng lấn và bỏ sót

*(Slide 32 — slide bổ sung.)*

> ❌ "Mức chi tiêu hàng tháng của bạn: □ Dưới 2 triệu □ 2–4 triệu □ 4–6 triệu"

**Hai vấn đề:** **chồng lấn** — người chi đúng 4 triệu chọn ô nào? **Không bao quát** — người chi 7 triệu
không có ô.

> ✅ □ Dưới 2 triệu □ Từ 2 đến dưới 4 triệu □ Từ 4 đến dưới 6 triệu □ Từ 6 triệu trở lên □ Không muốn
> trả lời

Tương tự: "Bạn đang ở: □ Nhà riêng □ Ký túc xá" → thiếu nhà trọ, căn hộ thuê, ở cùng người thân… →
thêm phương án và luôn có **"Khác: ____"**.

*(Câu chốt S6: "Người trả lời vẫn sẽ tích vào một ô — dù câu hỏi sai. Lỗi không tự lộ ra trong dữ liệu;
nó chỉ lộ ra khi mình đọc lại câu hỏi bằng con mắt của người trả lời. Đó là việc của nhóm chéo trong
phần thực hành, và của buổi phỏng vấn thử.")*

---

## S7 · Bước 8 — Thử trước khi phát hành (93–98')

*(Slide 33 — slide bổ sung. Giới thiệu ngắn; Buổi 12 đi kỹ.)*

**Thử nghiệm (pilot)** là cho một nhóm nhỏ người **giống đối tượng khảo sát** trả lời trước khi phát
hành chính thức. Đây là bước **không được bỏ qua**, vì bảng hỏi đã phát hành thì không sửa được nữa —
mọi phiếu đã thu theo câu cũ sẽ không gộp được với phiếu thu theo câu mới. Ví dụ quen thuộc trong video:
in 1.000 phiếu rồi mới phát hiện câu hỏi sai — mất cả tiền in lẫn thời gian.

Bài tập tuần này chính là **lần thử thứ nhất**: mỗi nhóm **phỏng vấn thử 3–5 người ngoài lớp**, thuộc
đối tượng khảo sát. Cách làm:

1. Người thử **không phải** thành viên nhóm, không phải bạn cùng lớp MKT1107 — vì các bạn đã biết câu hỏi
   "muốn hỏi gì", nên không phát hiện được chỗ khó hiểu.
2. Nhờ họ **nói to suy nghĩ** khi trả lời ("Câu này mình hiểu là…"). Một bạn trong nhóm ngồi cạnh,
   **không giải thích**, chỉ ghi lại.
3. **Bấm giờ** từ đầu đến cuối — đối chiếu với "nguyên tắc 5 phút" và con số ghi ở phần mở đầu.
4. Sau khi xong, hỏi: câu nào khó hiểu, khó trả lời, hoặc thấy khó chịu? có phương án nào thiếu?
5. Ghi vào bảng **"câu gốc – vấn đề phát hiện – câu đã sửa"**. Bảng này sẽ đưa vào chương phương pháp.
6. **Không ghi** họ tên hay thông tin định danh của người thử.

Nhóm định tính: phỏng vấn thử 1–2 người bằng dàn bài, xem câu nào người tham gia trả lời "Có/Không" rồi
dừng (cần đổi thành câu mở), câu nào cần thêm câu gợi mở, và tổng thời lượng.

Tài liệu học tập ghi thử nghiệm với 5–10 người: lần thử tuần này (3–5 người) là vòng đầu trước khi nộp
giữa kỳ; sau khi sửa ở Buổi 11–12 nhóm thử thêm để đủ. Dữ liệu phỏng vấn thử **không gộp** vào dữ liệu
chính thức nếu bảng hỏi đã thay đổi. `[NEEDS PROFESSOR INPUT: xác nhận cách diễn đạt 3–5 người (lộ
trình) và 5–10 người (tài liệu học tập).]`

*(Video phân biệt hai mức: pre-test — vài người, kiểm tra câu chữ; pilot survey — chạy thử cả quy trình
với mẫu lớn hơn, kiểm tra thời gian, lỗi kỹ thuật, tỷ lệ bỏ giữa chừng. Buổi 10 không cần đi sâu; nếu
sinh viên hỏi, trả lời 1 câu và hẹn Buổi 12. `[VERIFY: cỡ mẫu pilot trong video không có nguồn — không
nêu con số]`)*

---

## S8 · Thực hành nhóm "Xưởng bảng hỏi" (98–143')

*(Xem phiếu `W10_activity_xuong_bang_hoi.md` — kịch bản, bốn chặng, khung bản nháp, checklist săn lỗi
chéo, cách phản hồi. Để slide 34 trên màn hình trong chặng 1–2, slide 35 trong chặng 3.)*

Tóm tắt bốn chặng: (1) bảng ánh xạ — 8'; (2) viết bản nháp đầy đủ 3 phần, ĐL dựng trên Google Forms
nếu kịp — 22'; (3) nhóm chéo săn lỗi theo checklist — 10'; (4) sửa nhanh, ghi 3 lỗi đã sửa — 5'.

---

## S9 · Kết buổi (143–148')

*(Mời 2 nhóm, mỗi nhóm 30 giây: "Lỗi đắt giá nhất mà nhóm bạn tìm ra cho nhóm mình là gì?" Ghi lên bảng;
gom thành 2–3 lỗi chung để mở đầu Buổi 11.)*

**Bài tập về nhà — trước Buổi 11:** *(Slide 36.)*

1. **Hoàn thiện bản nháp** theo checklist và góp ý của nhóm chéo.
2. **Phỏng vấn thử 3–5 người ngoài lớp**, ghi bảng "câu gốc – vấn đề – câu đã sửa".
3. **Nộp bài giữa kỳ trên LMS trước Buổi 11:** Chương 1–3 (định lượng) hoặc Chương 1–2 (định tính),
   **kèm bản nháp bảng hỏi / dàn bài phỏng vấn** — nên là bản đã sửa sau phỏng vấn thử. Giảng viên góp ý
   trước khi nhóm phát hành. `[NEEDS PROFESSOR INPUT: hạn nộp (ngày, giờ), tên mục nộp trên LMS, định
   dạng file, thang chấm, có yêu cầu đính kèm bảng ghi phỏng vấn thử không, quy định nộp trễ]`
4. Đọc `Bai08.md` mục 8.2.1–8.2.4 và `W10_tai_lieu_doc_them.md`.

*(Nhắc quy định AI một câu: nếu dùng AI để gợi ý hay rà câu hỏi, khai báo trong nhật ký AI; AI cũng hay
viết câu kép và câu dẫn dắt — nhóm tự kiểm tra bằng checklist.)*

**Nối sang buổi sau:** "Buổi 11, mỗi nhóm mang bảng ghi phỏng vấn thử. Mình sẽ đi sâu bước 1–4, sửa bảng
hỏi theo kết quả thử và góp ý giữa kỳ, rồi phát hành — từ đó các bạn có khoảng hai tuần để thu dữ liệu,
xong trước Buổi 13."

---

## Tổng hợp [VERIFY] / [NEEDS PROFESSOR INPUT]

1. `[VERIFY]` "Nguyên tắc 5 phút" (≈ 2 trang) và "tối đa 2 câu hỏi mở" — quy tắc kinh nghiệm của người
   giảng trong video, đã nêu như vậy và đối chiếu với tài liệu học tập (5–10 phút; 1–2 câu mở) (S2.4, S3.4).
2. `[VERIFY]` Phân biệt pre-test / pilot survey và cỡ mẫu pilot trong video — không nêu con số (S7).
3. Ví dụ hiệu ứng mồi (câu chính trị đầu khảo sát) — **ví dụ minh họa** trong video, không trình bày như
   kết quả nghiên cứu có số liệu (S5.1).
4. Các ví dụ sai – sửa trong video (Wendy's, Burger King, Best Buy, khu đất trong phim, dịch vụ trông trẻ,
   quãng đường lái xe) đã chuyển thành **ví dụ giả định bối cảnh Việt Nam** với thương hiệu giả định X, Y, Z (S5–S6).
5. `[NEEDS PROFESSOR INPUT]` Cách diễn đạt số người phỏng vấn thử: 3–5 (lộ trình, Buổi 10) và 5–10 (tài
   liệu học tập, 8.2.8) (S7).
6. `[NEEDS PROFESSOR INPUT]` Hạn nộp giữa kỳ, tên mục LMS, định dạng, thang chấm, quy định nộp trễ (S9).

## Tài liệu tham khảo (APA 7)

Bojei, J., Che Wel, C. A., & Oh, T. H. (2012). *Marketing research*. Open University Malaysia.

Brown, T. J., Suter, T. A., & Churchill, G. A. (2014). *Basic marketing research: Customer insights and
managerial action* (8th ed.). Cengage Learning.

Malhotra, N. K. (2019). *Marketing research: An applied orientation* (7th ed.). Pearson.
