# Thực hành 1 — Tính CLV của hai khách hàng

EVM1110E · Buổi 6 · Đoạn S3 (20 phút)

## Vì sao chúng ta làm bài này

Yêu cầu 6.1: **tính CLV để định hướng dài hạn.** So với An Phát (CLV 5 năm ≈ 926 triệu, tính mẫu trên lớp).

## Dữ liệu (GIẢ ĐỊNH — dùng lại khách hàng Buổi 2)

| | **Địa ốc Sông Xanh** | **Thực phẩm Bếp Việt** |
|---|---|---|
| Doanh thu cho Nova/năm | 3.500 triệu | 1.800 triệu |
| Biên lợi nhuận gộp | 10% (đấu thầu theo giá) | 16% |
| Cost-to-serve riêng/năm | 250 triệu (chi phí vốn do trả sau 90 ngày ~104; đấu thầu lại ~60; phát sinh ngoài phạm vi ~86) | 110 triệu (thí điểm, học mảng mới) |
| Tỷ lệ tái ký mỗi năm (r) | 40% | 75% |

Chiết khấu d = 12%; T = 5 năm. Công thức (slide 5): CLV ≈ Σ m × r^(t−1) / (1,12)^t, với m = lợi nhuận gộp − cost-to-serve.

## Nhiệm vụ

**Bước 1 — Tính m (3 phút).** Tính m cho hai khách hàng.

**Bước 2 — Tính CLV 5 năm (10 phút).** Chia đôi nhóm: một nửa tính Sông Xanh, một nửa tính Bếp Việt (dùng bảng 5 dòng như slide 6).

**Bước 3 — Độ nhạy và kết luận (7 phút).** (a) Nếu Bếp Việt tăng r lên 85% nhờ quan hệ tốt, CLV thay đổi thế nào (ước lượng)? (b) Viết **2 câu** so sánh ba khách hàng (An Phát, Sông Xanh, Bếp Việt) cho anh Đức — CEO Nova.

## Tổ chức

- **Nhóm:** 6 nhóm · **Thời gian:** 20 phút (3 · 10 · 7) · **Cần có:** máy tính cầm tay/điện thoại, A3.

## Nộp gì

Không nộp, không tính điểm. Chụp ảnh lưu lại.

---
---

# Phần dành cho giảng viên — Thực hành 1

**Kỹ thuật:** Bài tính theo nhóm + phân tích độ nhạy. **CLO:** CLO1, CLO4 · **Bloom:** Vận dụng → Phân tích

## Đáp án tham khảo (làm tròn)

- **Sông Xanh:** lợi nhuận gộp 350; m = 350 − 250 = **100** triệu. CLV: 89,3 + 31,9 + 11,4 + 4,1 + 1,5 ≈ **138 triệu**.
- **Bếp Việt:** lợi nhuận gộp 288; m = 288 − 110 = **178** triệu. CLV 5 năm ≈ **416 triệu** (r = 75%). Nếu r = 85%: ≈ **494 triệu** *(ước lượng: 178/334 × 926)*.
- **An Phát:** ≈ **926 triệu** (mẫu).

**Kết luận mẫu:** *“Sông Xanh có doanh thu lớn nhất nhưng CLV nhỏ nhất vì biên thấp, chi phí phục vụ cao và gần như không tái ký. An Phát có CLV cao nhất; Bếp Việt đáng đầu tư nếu tăng được tỷ lệ tái ký.”*

## Tình huống thất bại

| Nếu… | Thì… |
|---|---|
| Nhóm dùng doanh thu thay cho m | Hỏi: “Nova giữ lại bao nhiêu sau khi trả nhà cung cấp và chi phí phục vụ?” |
| Quên chiết khấu | Hỏi: “1 đồng năm thứ 5 có bằng 1 đồng hôm nay?” |
| Coi CLV là con số chính xác | Nhắc: CLV là **ước lượng theo giả định** — ghi rõ giả định |

**3 ý GV chốt:**
1. Khách hàng doanh thu lớn nhất có thể có **CLV nhỏ nhất**.
2. **Tỷ lệ giữ chân** thay đổi CLV rất mạnh — quan hệ tốt (Buổi 4) là tiền thật.
3. Luôn nói CLV **kèm giả định**.
