# Nội dung bài giảng — Buổi 6: Financial Acumen in KAM

EVM1110E · Buổi 6 · Dùng cho các đoạn S1, S2, S4, S5, S7 của giáo án (`W06_lesson_plan.md`)

> **Ghi chú cho GV**
> - **Góc nhìn:** Nova tính giá trị của khách hàng **với Nova** và chi phí phục vụ — để quan hệ công bằng **hai chiều**.
> - Mọi con số là **giả định**; công thức CLV là **dạng đơn giản cho học tập** `[VERIFY]`.
> - Ma trận là **biến thể của môn** từ Shapiro et al. (1987) — trục dọc biên lợi nhuận gộp.
> - **Thuật ngữ:** giữ tiếng Anh (customer lifetime value – CLV, customer equity, retention rate, discount rate, gross margin, cost-to-serve, whale curve).
> - Mã **F01–F07** trỏ tới `buoi-06_tu-lieu-tong-hop.md`. Năm khách hàng dùng lại từ Buổi 2.

---

## S1 — Khởi động (5 phút)

*[Chiếu slide 2: "Địa ốc Sông Xanh: doanh thu cho Nova 3,5 tỷ/năm. Ngân hàng An Phát: 2,3 tỷ/năm." (Buổi 2, giả định)]*

Giơ tay: *"Khách hàng nào **đáng giá hơn** với Nova?"*

*[Chốt: "Doanh thu chỉ là một phần. Cần biết: **lãi bao nhiêu**, **tốn bao nhiêu để phục vụ**, và **ở lại bao lâu**. Hôm nay ta tính."]*

---

## S2 — Lý thuyết 1 (25 phút)

### §1. 6.1 — Customer Lifetime Value

#### 1.1 Vì sao CLV (F01)

Gupta et al. (2006): khi doanh thu đến từ **quan hệ dài hạn**, marketing nhằm tối đa hóa **CLV** và **customer equity** (tổng CLV của mọi khách hàng); CLV dùng để **phân bổ nguồn lực** cho thu hút, giữ chân, bán thêm. → Nối Buổi 2: chọn Key Account là quyết định **phân bổ nguồn lực**.

#### 1.2 Công thức đơn giản dùng trong môn (dạng học tập — `[VERIFY]`)

CLV ≈ Σ (từ năm 1 đến năm T) **m × r^(t−1) / (1 + d)^t**

- **m** — đóng góp ròng mỗi năm = lợi nhuận gộp − cost-to-serve riêng của khách hàng
- **r** — tỷ lệ giữ chân (xác suất tái ký mỗi năm); năm 1 coi như chắc chắn
- **d** — tỷ lệ chiết khấu (giá trị tiền theo thời gian)
- **T** — số năm xem xét (ví dụ 5)

*Berger & Nasr (1998) trình bày nhiều mô hình CLV cho các trường hợp khác nhau; ta dùng dạng đơn giản nhất.*

#### 1.3 Tính mẫu An Phát cùng lớp (GIẢ ĐỊNH)

Doanh thu 2.300 triệu/năm · biên lợi nhuận gộp 18% → lợi nhuận gộp 414 triệu · cost-to-serve riêng 80 triệu → **m = 334 triệu** · r = 85% · d = 12% · T = 5.

| Năm | Tính | Giá trị hiện tại (triệu) |
|---|---|---|
| 1 | 334 / 1,12 | 298,2 |
| 2 | 334 × 0,85 / 1,12² | 226,3 |
| 3 | 334 × 0,85² / 1,12³ | 171,8 |
| 4 | 334 × 0,85³ / 1,12⁴ | 130,4 |
| 5 | 334 × 0,85⁴ / 1,12⁵ | 98,9 |
| **CLV 5 năm** | | **≈ 926** |

*[Hỏi: "Nếu r giảm còn 70%, CLV giảm nhiều hay ít?" — Chốt: "Rất nhiều. Vì thế **giữ chân** — chất lượng quan hệ ở Buổi 4 — là tiền thật."]*

#### 1.4 Giới hạn

- Kết quả **phụ thuộc giả định** (r, d, m) → ghi rõ giả định, thử **độ nhạy**.
- CLV không đo được hết giá trị **vô hình** (uy tín, hồ sơ năng lực, học hỏi) — ghi bên cạnh, không bỏ.

→ Chuyển sang **S3 — Thực hành 1** (phiếu `W06_activity_S3_tinh_clv.md`).

---

## S4 — Lý thuyết 2 (22 phút)

### §2. 6.2 — Cost-to-serve

#### 2.1 Doanh số cao không có nghĩa lợi nhuận cao (F03)

Shapiro, Rangan, Moriarty & Ross (1987): lợi nhuận trên từng đơn hàng, từng khách hàng **khác nhau rất lớn**, nhiều khi quản lý không hiểu vì sao — vì **giá thực nhận** và **chi phí phục vụ** khác nhau.

#### 2.2 Cost-to-serve phụ thuộc hành vi khách hàng (F05)

Doanh nghiệp thường biết rõ chi phí làm ra sản phẩm nhưng **ít biết chi phí phục vụ khách hàng**; chi phí phục vụ **phụ thuộc hành vi của khách hàng** (dẫn Kaplan & Narayanan, 2001). Nghiên cứu Kanthal của Kaplan (1989), theo dẫn lại: 20% khách hàng tạo **225%** lợi nhuận, 10% khách hàng gây lỗ bằng **125%** lợi nhuận — “**whale curve**” *(chưa kiểm chứng chéo)*.

#### 2.3 Cost-to-serve của agency sự kiện (nhận định)

| Thành phần | Ví dụ |
|---|---|
| Giờ làm việc của đội KAM, họp | Số buổi họp, số người tham gia |
| Sửa concept nhiều vòng | 2 vòng hay 6 vòng |
| Phát sinh ngoài phạm vi không tính tiền (scope creep) | Thêm hạng mục sát ngày |
| **Chi phí vốn do trả chậm** | Thanh toán sau 90 ngày trong khi Nova phải đặt cọc nhà cung cấp trước (Buổi 7) |
| Chi phí đấu thầu lại mỗi năm | Làm đề xuất, pitch |
| Nhân sự cấp cao phải có mặt | CEO, trưởng bộ phận |

**Minh họa quốc tế (F07, chưa KCC; không phải event agency):** khảo sát 273 lãnh đạo agency ở Mỹ: 97% gặp khách trả chậm; 57% mất 1.000–5.000 USD/tháng do scope creep.

*[Ví dụ tính nhanh: Sông Xanh trả sau 90 ngày trên 3.500 triệu, chi phí vốn 12%/năm → khoảng 3.500 × 12% × 90/365 ≈ **104 triệu**/năm chỉ riêng chi phí vốn.]*

---

## S5 — Lý thuyết 3 (13 phút)

### §3. Ma trận biên lợi nhuận gộp × cost-to-serve (biến thể của môn)

#### 3.1 Nguồn gốc (F03, F04)

Ma trận của Shapiro et al. (1987) dùng hai trục **giá thực nhận** và **chi phí phục vụ**; Ang & Taylor (2005) ghi nhận đây là mô hình đầu tiên gần với **lợi nhuận khách hàng**: khách chi phí phục vụ thấp mà trả giá cao là có lợi nhất. Môn dùng **biên lợi nhuận gộp** thay cho giá thực nhận (quyết định GV 3).

#### 3.2 Bốn ô và hướng hành động (tên ô theo nguồn thứ cấp `[VERIFY]`; hướng hành động là nhận định)

| | Cost-to-serve **thấp** | Cost-to-serve **cao** |
|---|---|---|
| **Biên lợi nhuận gộp cao** | **Passive** — lợi nhất; giữ gìn, đầu tư quan hệ | **Carriage trade** — lãi nếu giá bù được chi phí; kiểm soát chi phí phục vụ |
| **Biên lợi nhuận gộp thấp** | **Bargain basement** — phục vụ chuẩn hóa, hiệu quả | **Aggressive** — nguy cơ lỗ; **cùng khách** giảm chi phí hoặc điều chỉnh phạm vi, giá |

#### 3.3 “Bilateral benefits and fair relationships” (F06)

> *“We do not sell unprofitably to any customer. We analyze our cost-to-serve customer figures to be sure of this.”* (câu tự đánh giá trong bài của McDonald)

Nhưng **không ép khách**: nhiều chi phí phục vụ giảm được **khi cùng khách hàng** thay đổi cách làm — lịch duyệt rõ, gộp sự kiện, lịch thanh toán theo tiến độ, phạm vi viết rõ. *[Nói: "Công bằng là cả hai cùng thấy quan hệ đáng giữ."]*

→ Chuyển sang **S6 — Thực hành 2** (phiếu `W06_activity_S6_ma_tran_cost_to_serve.md`).

---

## S7 — Tổng hợp (3 phút)

1. **6.1:** CLV = giá trị hiện tại của đóng góp ròng trong nhiều năm; **rất nhạy với tỷ lệ giữ chân** → quan hệ là tiền thật.
2. **6.2:** Doanh số ≠ lợi nhuận; **cost-to-serve** phụ thuộc hành vi khách hàng; agency có nhiều chi phí ẩn.
3. **Ma trận** biên lợi nhuận gộp × cost-to-serve giúp chọn hành động; mục tiêu là quan hệ **có lợi cho cả hai**.

**Liên hệ SMP:** phần **B. Value Opportunities** — CLV và vị trí trên ma trận của khách hàng dự án cũ (số giả định ghi rõ). Đây cũng là nền cho câu hỏi “logic tài chính” ở Buổi 14–15.

---

## Tài liệu tham khảo cho buổi này

- Ang, L., & Taylor, B. (2005). Managing customer profitability using portfolio matrices. *Journal of Database Marketing & Customer Strategy Management, 12*(4), 298–304.
- Berger, P. D., & Nasr, N. I. (1998). Customer lifetime value: Marketing models and applications. *Journal of Interactive Marketing, 12*(1), 17–30.
- Gupta, S., Hanssens, D., Hardie, B., Kahn, W., Kumar, V., Lin, N., Ravishanker, N., & Sriram, S. (2006). Modeling customer lifetime value. *Journal of Service Research, 9*(2), 139–155.
- Shapiro, B. P., Rangan, V. K., Moriarty, R. T., & Ross, E. B. (1987). Manage customers for profits (not just sales). *Harvard Business Review, 65*(5), 101–108.

Nguồn khác: `buoi-06_tu-lieu-tong-hop.md`, mục 6.
