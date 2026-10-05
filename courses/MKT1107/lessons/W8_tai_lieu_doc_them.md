# Tài liệu đọc thêm — Bài 6: Chọn mẫu để nghiên cứu

MKT1107 Nghiên cứu Marketing · Tự học sau Buổi 8

> Tài liệu này mở rộng những phần trên lớp chỉ nhắc qua và giúp nhóm viết phần chọn mẫu cho dự án. Đọc
> cùng tài liệu học tập Bài 6; các câu hỏi tự kiểm tra ở cuối giúp bạn ôn. Các tình huống ghi "(giả
> định)" là ví dụ minh họa, không phải số liệu thật.

## 1. Vì sao hỏi vài trăm người lại nói được về cả triệu người?

Hãy nghĩ đến việc nếm một nồi canh. Bạn không cần ăn hết nồi để biết canh mặn hay nhạt — **một thìa là
đủ**, với điều kiện nồi canh **đã được khuấy đều**. Nếu chưa khuấy, thìa múc trên mặt có thể nhạt hơn
hẳn phần dưới đáy.

- "Khuấy đều" trong nghiên cứu chính là **chọn ngẫu nhiên** từ một khung mẫu đầy đủ: ai cũng có cơ hội
  được chọn, nên mẫu phản ánh đám đông.
- Mẫu thuận tiện giống như **múc thìa ở chỗ dễ múc nhất** — dù múc nhiều thìa ở cùng một chỗ, bạn vẫn chỉ
  biết vị canh ở chỗ đó.

Đó là lý do công thức cỡ mẫu chỉ đúng với mẫu xác suất, và tăng cỡ mẫu thuận tiện không làm mẫu đại diện
hơn.

## 2. Cỡ mẫu thay đổi thế nào theo độ tin cậy và sai số?

Bảng dưới tính theo công thức tỷ lệ **n = Z² × p(1 − p) / e²** với p = 0,5 (trường hợp chưa biết tỷ lệ),
đã làm tròn lên. Z = 1,645 (90%), 1,96 (95%), 2,576 (99%).

| Sai số cho phép (e) | Độ tin cậy 90% | Độ tin cậy 95% | Độ tin cậy 99% |
|---|---|---|---|
| ±10% | 68 | 97 | 166 |
| ±5% | 271 | 385 | 664 |
| ±4% | 423 | 601 | 1.037 |
| ±3% | 752 | 1.068 | 1.844 |

**Đọc bảng:**
- Đi xuống một cột: sai số càng nhỏ, cỡ mẫu tăng rất nhanh — giảm sai số một nửa thì cỡ mẫu tăng **4 lần**.
- Đi ngang một dòng: muốn chắc chắn hơn (độ tin cậy cao hơn), cỡ mẫu cũng tăng.
- Dòng ±5%, 95% (385) là mức tham chiếu thường gặp nhất trong các bài nghiên cứu.

## 3. Mở rộng: khi đám đông nhỏ — hiệu chỉnh đám đông hữu hạn

Các công thức trên lớp dùng cho **đám đông lớn**. Khi đám đông nhỏ (ví dụ sinh viên một khoa, khách hàng
thành viên một cửa hàng), có thể điều chỉnh giảm cỡ mẫu bằng công thức hiệu chỉnh đám đông hữu hạn
(finite population correction), được trình bày trong các giáo trình nghiên cứu marketing như Malhotra
(2019):

```
n điều chỉnh = n / (1 + (n − 1) / N)

n: cỡ mẫu tính theo công thức thông thường (ví dụ 385)
N: quy mô đám đông
```

| Quy mô đám đông (N) | Cỡ mẫu sau hiệu chỉnh (từ n = 385) |
|---|---|
| 500 | 385 / (1 + 384/500) ≈ 217,8 → 218 |
| 2.000 | 385 / (1 + 384/2.000) ≈ 323,0 → 323 |
| 10.000 | 385 / (1 + 384/10.000) ≈ 370,8 → 371 |
| 20.000 | 385 / (1 + 384/20.000) ≈ 377,7 → 378 |

**Nhận xét:** khi đám đông lớn dần, cỡ mẫu sau hiệu chỉnh tiến rất gần 385 và gần như không đổi nữa. Một
người giảng trong video bài giảng nêu quy tắc kinh nghiệm: "đám đông trên khoảng 20.000 thì cỡ mẫu cần
thiết gần như không tăng thêm" — bảng trên cho thấy vì sao. Phần này là **mở rộng**, không bắt buộc; công
thức hiệu chỉnh cũng chỉ áp dụng cho mẫu xác suất.

## 4. Khảo sát trực tuyến: những sai lệch cần biết

Phần lớn nhóm sẽ khảo sát bằng Google Forms hoặc công cụ tương tự. Ba rủi ro thường gặp:

| Rủi ro | Biểu hiện | Cách giảm |
|---|---|---|
| **Sai số khung mẫu** | Chỉ người trong các nhóm mạng xã hội nhóm tiếp cận được mới có cơ hội trả lời | Mô tả rõ các kênh đã dùng; không gọi đó là đám đông |
| **Tự chọn tham gia** (self-selection) | Người quan tâm chủ đề, hoặc có trải nghiệm rất tốt/rất xấu, trả lời nhiều hơn | Lời giới thiệu trung lập; đa dạng kênh; dùng định mức để giữ cơ cấu |
| **Không phản hồi** | Nhiều người nhận link nhưng không trả lời; người không trả lời có thể khác người trả lời | Bảng hỏi ngắn, rõ; nhắc lại một lần; bảo đảm ẩn danh; báo cáo số người được mời và số người trả lời (nếu biết) |

Một số mẹo kỹ thuật: bật giới hạn **một lần trả lời** cho mỗi người (nếu công cụ cho phép và không làm
mất tính ẩn danh); đặt **câu hỏi gạn lọc** ở đầu; thêm câu hỏi "Bạn biết đến khảo sát này qua kênh nào?"
để biết phiếu đến từ đâu.

## 5. Viết phần chọn mẫu trong chương phương pháp

**Ví dụ (giả định) — định lượng:**

> *Đám đông nghiên cứu là sinh viên đại học hệ chính quy đang học tại TP.HCM, đã mua trà sữa ít nhất một
> lần trong 3 tháng gần nhất. Do không có khung mẫu đầy đủ, nghiên cứu sử dụng phương pháp chọn mẫu phi
> xác suất — định mức theo năm học kết hợp thuận tiện. Bảng hỏi được gửi trực tiếp tại ba trường đại học
> và qua các nhóm lớp trên mạng xã hội trong hai tuần. Hai câu hỏi gạn lọc đầu bảng hỏi loại những người
> không phải sinh viên hệ chính quy hoặc chưa mua trà sữa trong 3 tháng qua. Bảng hỏi gồm 24 biến quan
> sát; theo quy tắc tối thiểu 5 quan sát cho mỗi biến (Hair et al., 2019), cỡ mẫu tối thiểu là 120. Nhóm
> đặt mục tiêu 200 phiếu hợp lệ và dự trù 15% phiếu không hợp lệ, tức thu khoảng 236 phiếu.*

**Ví dụ (giả định) — định tính:**

> *Người tham gia là sinh viên đang học tại TP.HCM đã chuyển từ uống trà sữa sang cà phê trong 6 tháng
> qua. Nghiên cứu chọn mẫu theo phương pháp phán đoán kết hợp phát triển mầm: ba người tham gia đầu tiên
> được chọn theo tiêu chí trên, sau đó giới thiệu thêm người phù hợp. Nghiên cứu thực hiện 8 cuộc phỏng
> vấn sâu, cân đối giới tính và năm học, và dừng khi các cuộc phỏng vấn cuối không còn xuất hiện ý mới.*

**Câu hạn chế** (đưa vào mục giới hạn của nghiên cứu): *"Mẫu được chọn theo phương pháp phi xác suất nên
kết quả không thể khái quát hóa thống kê cho toàn bộ đám đông nghiên cứu."*

## 6. Câu hỏi tự kiểm tra

1. Giải thích bằng lời (không dùng ký hiệu): khi nào một mẫu được làm cẩn thận cho kết quả chính xác hơn
   một cuộc tổng điều tra?
2. Viết đám đông nghiên cứu đủ 4 yếu tố cho đề tài: "mức độ hài lòng với ứng dụng giao đồ ăn của nhân viên
   văn phòng".
3. Một nhóm dùng danh sách thành viên câu lạc bộ thể thao của trường làm khung mẫu cho "sinh viên của
   trường". Sai số khung mẫu xuất hiện ở đâu?
4. Tính cỡ mẫu để ước lượng tỷ lệ với độ tin cậy 95%, sai số ±6%, chưa biết p.
5. Một mẫu 300 người lấp đủ bảng định mức theo giới tính và nơi ở. Có thể nói "mẫu đại diện cho đám đông"
   không? Vì sao?
6. Kể hai cách nhóm bạn có thể giảm sai lệch không phản hồi khi khảo sát trực tuyến.

*Gợi ý câu 4: n = 3,8416 × 0,25 / 0,0036 ≈ 266,8 → 267.*
*Gợi ý câu 5: mẫu có cơ cấu giống đám đông theo hai đặc điểm đã chọn, nhưng người trả lời không được chọn
ngẫu nhiên — vẫn là phi xác suất, không có cơ sở thống kê để khái quát hóa.*

## 7. Video tham khảo

Xem trong danh sách video của học phần, theo tên:

- *Sampling Frame & Sample Size* — khung mẫu, các yếu tố quyết định cỡ mẫu, sai lệch chọn mẫu.
- *Marketing Research | Unit: 2 | Part 2* — các phương pháp chọn mẫu xác suất và phi xác suất (ví dụ bốc
  thăm, xe buýt).

Lưu ý: các video dùng ví dụ nước ngoài và không trình bày công thức tính cỡ mẫu; công thức theo tài liệu
học tập Bài 6.

## Tài liệu tham khảo (APA 7)

Hair, J. F., Black, W. C., Babin, B. J., & Anderson, R. E. (2019). *Multivariate data analysis* (8th
ed.). Cengage Learning.

Malhotra, N. K. (2019). *Marketing research: An applied orientation* (7th ed.). Pearson.
