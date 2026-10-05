# Phiếu bài tập: tính cỡ mẫu, bước nhảy, phân bổ tầng và bảng định mức

MKT1107 · Buổi 8 · Phân đoạn S8 — Thực hành nhóm, Phần A (20')

## Vì sao làm phiếu này

Phần chọn mẫu trong đề cương và chương phương pháp của nhóm cần những con số **có căn cứ**: cỡ mẫu bao
nhiêu, chia cho từng nhóm bao nhiêu người, chọn người thế nào. Phiếu này giúp bạn luyện từng phép tính
trên những tình huống nhỏ trước khi áp dụng cho dự án của nhóm ở Phần B.

## Cách làm

- Làm theo nhóm; **mỗi người tự tính rồi so kết quả** với bạn trong nhóm.
- Dùng máy tính bỏ túi, Excel hoặc Google Sheets đều được. Trong Excel, hàm `ROUNDUP(số; 0)` làm tròn
  lên (dấu phân cách `,` hay `;` tùy cài đặt máy).
- Ghi **cả cách tính**, không chỉ kết quả.
- Thời gian: 15 phút làm, 5 phút chữa bài. Nếu không kịp, **ưu tiên A1, A4, A5**.

**Nhắc lại công thức** (mẫu xác suất, đám đông lớn):

- Ước lượng tỷ lệ: **n = Z² × p(1 − p) / e²** — chưa biết p thì dùng p = 0,5; độ tin cậy 95% → Z = 1,96.
- Bước nhảy (chọn mẫu hệ thống): **k = N / n**.
- Cỡ mẫu luôn **làm tròn lên**.

Các tình huống dưới đây đều là **tình huống giả định**.

---

## A1. Cỡ mẫu khi ước lượng tỷ lệ

Một chuỗi đồ uống muốn ước lượng **tỷ lệ sinh viên dùng ví điện tử để thanh toán đồ uống**, với độ tin
cậy 95%.

(a) Chưa biết tỷ lệ này, sai số cho phép **±5%**. Cần bao nhiêu người trả lời?

&nbsp;

(b) Chưa biết tỷ lệ này, sai số cho phép **±4%**. Cần bao nhiêu người trả lời?

&nbsp;

(c) Sai số giảm từ 5% xuống 4%, cỡ mẫu tăng khoảng bao nhiêu phần trăm? Vì sao tăng nhiều như vậy?

&nbsp;

(d) Một nghiên cứu trước cho biết tỷ lệ này khoảng **20%**. Với sai số ±5%, cỡ mẫu là bao nhiêu? So với
câu (a), lớn hơn hay nhỏ hơn — vì sao?

&nbsp;

(e) Nhóm dự kiến khoảng **15% phiếu không hợp lệ**. Với kết quả câu (a) và (b), cần phát ít nhất bao
nhiêu phiếu để vẫn đủ số phiếu hợp lệ?

&nbsp;

## A2. Chọn mẫu hệ thống — bước nhảy k

Một nhà sách có danh sách **2.400 khách hàng thành viên**, cần chọn **120 người** theo phương pháp hệ
thống.

(a) Tính bước nhảy k.

&nbsp;

(b) Số ngẫu nhiên bốc được để bắt đầu là **13**. Liệt kê số thứ tự của 4 người đầu tiên và của người cuối
cùng được chọn.

&nbsp;

(c) Nhà sách muốn phỏng vấn trực tiếp tại cửa hàng: mỗi ngày có khoảng **600 khách**, nhóm cần **50
người/ngày**. Mô tả cách chọn người để phỏng vấn.

&nbsp;

(d) Một danh sách sinh viên ký túc xá được xếp theo phòng, mỗi phòng 4 người, và người đầu tiên của mỗi
phòng luôn là trưởng phòng. Điều gì xảy ra nếu dùng k = 4? Nên xử lý thế nào?

&nbsp;

## A3. Phân bổ mẫu phân tầng

Một khoa có 4 ngành: **Marketing 900**, **Quản trị kinh doanh 750**, **Logistics 450**, **Thương mại
điện tử 300** sinh viên. Cần mẫu **n = 240**, phân tầng theo ngành.

| Ngành | Số sinh viên | Tỷ trọng | (a) Phân bổ tỷ lệ | (b) Phân bổ không tỷ lệ (chia đều) |
|---|---|---|---|---|
| Marketing | 900 | | | |
| Quản trị kinh doanh | 750 | | | |
| Logistics | 450 | | | |
| Thương mại điện tử | 300 | | | |
| **Tổng** | | | | |

(c) Khi nào nên dùng cách phân bổ (b)? Khi tính kết quả chung cho cả khoa từ cách (b), cần lưu ý gì?

&nbsp;

(d) Nếu mục tiêu là đo **chi tiêu cho cà phê** của sinh viên, nên phân tầng theo **ngành** hay theo
**nơi ở** (ký túc xá / ở cùng gia đình / thuê trọ)? Giải thích bằng nguyên tắc chia tầng.

&nbsp;

## A4. Bảng định mức hai thuộc tính

Khảo sát **n = 300** người mua mỹ phẩm nội địa trực tuyến. Theo số liệu tham khảo: **nữ 70%, nam 30%**;
nhóm tuổi **18–24: 50%**, **25–34: 30%**, **35–44: 20%**. Giả định hai đặc điểm độc lập nhau.

| Nhóm tuổi | Nữ | Nam | Tổng |
|---|---|---|---|
| 18–24 (50%) | | | |
| 25–34 (30%) | | | |
| 35–44 (20%) | | | |
| **Tổng** | | | **300** |

(e) Mẫu lấp đủ bảng định mức này có phải mẫu xác suất không? Vì sao?

&nbsp;

## A5. Phát hiện lỗi

Một bảng định mức n = 100 theo tuổi và giới tính (nam/nữ 50/50 trong mỗi nhóm tuổi) được trình bày như
sau:

| Nhóm tuổi | Nam | Nữ | Tổng |
|---|---|---|---|
| 18–30 (30%) | 15 | 15 | 30 |
| 31–40 (40%) | 15 | 15 | 30 |
| 41–50 (30%) | 20 | 20 | 40 |
| **Tổng** | **50** | **50** | **100** |

Bảng này sai ở đâu? Sửa lại cho đúng. Vì sao lỗi này khó phát hiện nếu chỉ cộng theo cột?

&nbsp;

---

## Nộp gì

Không nộp. Giữ phiếu để ôn tập — các dạng bài này dùng lại khi nhóm viết phần cỡ mẫu và bảng định mức
cho dự án (Phần B).

## Thảo luận chung

- Vì sao công thức cỡ mẫu chỉ đúng với mẫu xác suất? Nếu nhóm dùng mẫu thuận tiện, con số 385 còn ý
  nghĩa gì?
- Trong dự án của nhóm bạn, đặc điểm nào phù hợp để làm định mức?
