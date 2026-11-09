# D11b – GHI CHÚ GV CHO ĐỀ GIỮA KỲ (KHÔNG PHÁT CHO SINH VIÊN)

Đi kèm `D11_De_giua_ky_SV.md`. Cấu trúc học theo đề `01`, `02` của môn GTKD: phần cho SV và phần ghi chú GV tách riêng; ghi chú GV nêu lý do thiết kế và cách tránh trùng lặp giữa các nhóm.

## 1. Lý do thiết kế

| Quyết định trong đề | Lý do | Căn cứ |
|---|---|---|
| Làm trên **danh mục Hải Đăng chung**, mỗi nhóm một Key Account | Mọi nhóm thực hành và bị đánh giá đủ phần KAM trên cùng một nền dữ liệu, nên hai lớp chấm được trên cùng tiêu chí | P4, TT-04, QT-14 |
| Sáu phần của bài ứng với **G1–G6**, mỗi phần ghi rõ buổi luyện | SV thấy mỗi buổi trên lớp "nuôi" phần nào của bài, và mỗi buổi học có lý do để đi | D01, TT-02 |
| Phần 6 bắt buộc **phân biệt và nối các công cụ** | Nhắm thẳng vào lỗi nhầm Grid, Salience, ma trận ưu tiên và Kraljic | TT-01 |
| **Thẻ biến cố riêng cho từng nhóm**, hai lớp hai bộ thẻ | (1) Phân hóa: bài bậc 9–10 phải cập nhật kết luận theo dữ kiện mới, không chỉ lặp lại bài trên lớp. (2) Liêm chính: dữ kiện riêng làm bài chép hoặc bài AI chung chung lộ ngay. (3) Nhóm cùng Key Account ở hai lớp không thể chép nhau | QT-14, `shared/ai_era_integrity.md` (personalized inputs) |
| **Phụ lục P2: ảnh sản phẩm trên lớp B1–B8** | Bằng chứng quá trình; gắn bài với bối cảnh lớp học. Đồng thời sửa lỗi L30 khóa trước (thiếu phụ lục nhưng không bị phát hiện sớm) | `ai_era_integrity.md` (process evidence, class-context coupling); D13 Đ4 |
| **Tệp Excel gốc** | Kiểm tra được CLV và CTS; tách được lỗi tính toán với lỗi khái niệm | E08; D13 G3 |
| **Giải thích ngắn 5 phút** ở B10 hoặc B11 với nhóm được chọn | Phần được giám sát trực tiếp duy nhất của bài giữa kỳ; công bố trước như một quy định chung | `ai_era_integrity.md` (defense sampling) |
| **Mức AI: D** (được dùng, phải khai báo) | Theo chính sách AI của GV (4/10/2026). Không dùng công cụ phát hiện AI | Passport `ai_use_policy`; CLAUDE.md non-negotiable 5 |
| Tối đa 12 trang, video 8–10 phút | Đủ cho 6 phần mà không kéo dài thời gian chấm. GV chấm 12 bài (2 lớp) trong 8 ngày, từ 19/12 đến 26/12 | D01 |

## 2. Các điểm GV đã duyệt (9/11/2026, theo đề xuất)

D11 cần hai điều chỉnh nhỏ trong mô tả bậc của D13. **Trọng số không đổi.**

1. **G6 thêm thẻ biến cố.**
   - Bậc 7 hiện tại: "Có một bảng tổng hợp: công cụ → kết luận → quyết định".
   - Đề xuất thêm: "**và cập nhật ít nhất 2 công cụ theo thẻ biến cố**".
   - Bậc 10 đổi thành: "Bảng tổng hợp **sau thẻ biến cố** dẫn tới một ưu tiên hành động rõ ràng".
2. **G7 gồm cả trang tóm tắt.**
   - Bậc 7 của G7 ("mở đầu bằng quyết định Key Account cần đưa ra") áp dụng cho **cả video lẫn trang tóm tắt**. Hai phần này phải nói cùng một quyết định.

Đã cập nhật vào D13 (G6 bậc 7 và 10; G7 bậc 7).
3. **Hệ quả khi thiếu phụ lục bắt buộc** (sẽ ghi vào D17). Đề xuất:
   - **Thiếu P1 hoặc không ghi %:** mọi thành viên **mặc định 100%**; không khiếu nại về tỷ lệ (GV sửa 9/11/2026, thay mức 80% đã đề xuất trước).
   - **Thiếu P2 hoặc P3:** G6 tối đa bậc 6, vì không có bằng chứng truy vết hoặc giả định.
   - **Thiếu P4:** chỉ xử lý khi có dấu hiệu dùng AI mà không khai báo; GV mời nhóm giải thích 5 phút.

   Đã duyệt; sẽ ghi vào D17.

## 3. Cách chia Key Account cho các nhóm (Buổi 2)

**Đề xuất:**
1. Mỗi lớp 6 nhóm, 6 khách được chọn (KH1, KH2, KH3, KH5, KH6, KH7). Mỗi khách đúng một nhóm.
2. **Bốc thăm thứ tự chọn** ngay đầu phần thực hành B2.
3. Nhóm chọn sau cùng có thể nhận khách "khó" (KH5, KH6). D13 đã có quy tắc chấm theo **chất lượng lập luận**, không theo việc khách có "đúng" là Key Account hay không (đáp án `01b`, mục 3). GV nói rõ điều này với lớp trước khi bốc thăm.
4. Ghi kết quả chọn của mỗi lớp vào sổ sau buổi (D21). Thẻ biến cố phát ở B8 theo kết quả này.

GV đã duyệt cách chia này. Giải thích ngắn 5 phút ở B10/B11: GV giữ.

## 4. Thẻ biến cố (phát ở B8, mỗi nhóm một thẻ)

**Nguyên tắc soạn thẻ:**
- Mọi thẻ là **giả định**, không mâu thuẫn với hồ sơ Hải Đăng.
- Mỗi thẻ buộc nhóm cập nhật **ít nhất 2 công cụ**.
- Hai bộ thẻ cho cùng một khách có **độ khó tương đương**, nhưng chạm vào **công cụ khác nhau**.

| Khách | Thẻ bộ A (lớp B01E) | Công cụ bị ảnh hưởng | Thẻ bộ B (lớp B02E) | Công cụ bị ảnh hưởng |
|---|---|---|---|---|
| **KH1 Phúc An** | Phòng Mua sắm thông báo: hồ sơ thầu năm tới tăng tỷ trọng giá từ 40% lên 60% | DMU (người gác cổng mạnh hơn); CLV/CTS (áp lực biên); giới hạn đàm phán | Hội trường thứ nhất trong hai địa điểm đủ sức chứa ở Đà Nẵng đã nhận một hội nghị khác vào tháng 4 | Kraljic (hội trường thành nút thắt); Grid/Salience (địa điểm còn lại có quyền lực hơn); kế hoạch đàm phán |
| **KH2 Mầm** | Nhà sáng lập muốn tự làm khai trương cho 10 trong 25 cửa hàng mới bằng đội nội bộ | CLV (doanh thu giảm); CVP (format chuẩn còn giá trị gì); đồng kiến tạo | Kế toán trưởng đề nghị đổi thời hạn thanh toán từ 30 lên 60 ngày | CTS (chi phí vốn tăng); ma trận biên × CTS; giới hạn đàm phán |
| **KH3 MedNord** | Đợt đánh giá nhà cung cấp tháng 3 thêm tiêu chí báo cáo phát thải của mỗi sự kiện | Ma trận ưu tiên (HSSEQ nặng hơn); CVP; chỉ số quá trình | Phiên dịch viên y khoa duy nhất đã đặt trước báo hủy, còn 10 tuần đến hội nghị | Kraljic (nút thắt); kế hoạch dự phòng; quan hệ với chuyên viên Quan hệ khoa học |
| **KH5 VíXanh** | Vòng gọi vốn lùi 2 quý; ngân sách sự kiện quý 1 giảm một nửa | CLV (r, m); ma trận chọn Key Account (còn là Key Account?); CVP | Trường đại học có nhiều sinh viên nhất trong chuỗi từ chối cấp không gian | Grid/Salience (trường là bên có quyền lực); kế hoạch sự kiện; **không** đưa trường vào Kraljic |
| **KH6 Tân Tiến** | Người kế nhiệm mời thêm 2 agency chào giá lễ kỷ niệm 20 năm | DMU (người quyết định mới); chất lượng quan hệ; Bow-tie → Diamond | Đơn vị giữ tư liệu hình ảnh 20 năm báo giá gấp đôi dự kiến | Kraljic (nút thắt); CTS hoặc biên; đàm phán |
| **KH7 Lys Paris** | Trụ sở khu vực yêu cầu dùng nhà sản xuất không gian trải nghiệm do agency khu vực chỉ định | Kraljic (mất quyền chọn nhà cung cấp); quan hệ với trụ sở khu vực; CVP (Advisory) | KOL làm đẹp chính gặp khủng hoảng truyền thông, 3 tuần trước ngày ra mắt | Grid/Salience; Kraljic (KOL); kế hoạch dự phòng; chỉ số |

**Dùng thẻ để chấm (G6):**
- **Bậc 7:** cập nhật đúng 2 công cụ bị ảnh hưởng.
- **Bậc 9:** nói rõ kết luận nào của bài **đã thay đổi**, và vì sao.
- **Bậc 10:** đưa ra một hành động ưu tiên, nêu ai trong DMU cần gặp trước.
- **Bẫy:** thẻ KH5-B. Nhóm nào đưa trường đại học vào Kraljic thì G6 tối đa ở bậc 5.

## 5. Gợi ý đáp án theo phần

Đáp án số liệu đã có trong bản GV `01b`:
- CTS, m, CLV của 8 khách;
- ma trận biên × CTS;
- chọn Key Account;
- ma trận ưu tiên (XĐ-02 đã chốt: năm nguồn; ô "Hiệu quả quy trình" = Advisory về tổ chức, quy trình);
- Kraljic và các bẫy.

Bài có thể tính CLV khác `01b` nếu giả định khác có lý do. Kiểm tra lại bằng **Excel của nhóm**. Lệch hơn 5% so với đúng công thức thì ghi "tính sai" (D13 Đ5).

## 6. Lỗi thường gặp (dự kiến, dựa trên khóa trước)

| Lỗi | Tiêu chí bị ảnh hưởng |
|---|---|
| PESTEL của ngành sự kiện thay vì của khách hàng | G2 dừng ở bậc 5 |
| Lẫn CTS với chi phí làm sự kiện | G3 dừng ở bậc 5 |
| CLV không chiết khấu năm 1 | G3 không qua bậc 7 |
| Chọn Key Account theo doanh thu lớn nhất (bẫy KH4) | G1 không qua bậc 7 |
| Đưa giấy phép, trường đại học, nhà tài trợ, mẫu thử vào Kraljic | G5 bậc 5; G6 bậc 5 |
| CVP giới thiệu Hải Đăng thay vì nói về khách hàng | G4 bậc 5 |
| Trang tóm tắt kể lại quá trình làm bài | G7 không qua bậc 7 |

## 7. Việc GV làm theo mốc

| Mốc | Việc |
|---|---|
| B1 (18/11) | Công bố đề D11 + rubric D13 + hồ sơ Hải Đăng; nói rõ: không nhận bài trễ; có giải thích ngắn 5 phút; mức AI là D |
| B2 (21/11) | Bốc thăm, chốt Key Account từng nhóm |
| B8 (12/12) | Phát thẻ biến cố. **Bộ A cho B01E, bộ B cho B02E**; hai lớp học cùng phòng, cách nhau 30 phút, nên thu lại thẻ thừa |
| 18/12, 23:59 | Hạn nộp. Sáng 19/12, chụp danh sách bài đã nộp trên LMS |
| 19–26/12 | Chấm thử 2 bài (mỗi lớp 1 bài), rồi chấm toàn bộ (D13, mục 3.2); kiểm tra phổ điểm (D13, mục 3.1) |
| B10 / B11 | Mời 2–3 nhóm mỗi lớp giải thích 5 phút. Chọn theo bốc thăm, công bố là quy định chung |
| B12 (26/12) | Trả điểm + nhận xét chung (bài tổng kết theo mẫu GTKD `09`, D14) |

## Bảng tự kiểm (hạng mục 4 – D11)

| QT / YC | Trạng thái | Bằng chứng |
|---|---|---|
| D01: hạn 18/12, một mốc, không nhận bài trễ | ✅ | Đầu đề, mục 4 và checklist |
| QT-15 | ✅ | "Không có lần nộp lại" |
| D13: 7 tiêu chí, trọng số, thang 5–10, điểm cá nhân theo % đóng góp | ✅ | Đề mục 5; ví dụ 80% → 6,4 |
| QT-14: hai lớp một chuẩn; phân hóa | ✅ | Cùng đề và rubric; thẻ biến cố tương đương độ khó; bậc 9–10 gắn với thẻ |
| TT-04 / P4: KAM trên danh mục chung; CLO1 | ✅ | Nhiệm vụ 1–6 |
| TT-01: phân biệt công cụ | ✅ | Nhiệm vụ 6; checklist; bẫy KH5-B |
| TT-02: mỗi buổi nuôi bài đánh giá | ✅ | Cột "Buổi luyện"; phụ lục P2 |
| U14: bài tập trên lớp không giao về nhà | ✅ | Bài giữa kỳ là bài đánh giá riêng; P2 chỉ dùng ảnh sản phẩm đã làm trên lớp |
| Non-negotiable 5: không dùng công cụ phát hiện AI | ✅ | Đề mục 6; ghi chú mục 1 |
| QT-06: không bịa | ✅ | Thẻ biến cố là giả định, không mâu thuẫn hồ sơ (đã đối chiếu từng khách) |
| QT-13: không có case thật | ✅ | Không nhắc case minh họa |
| QT-08: hỏi khi chưa rõ | ✅ | GV đã duyệt mục 2 và mục 3 |
| Phụ thuộc chưa xong | ➖ | D09 bảng thuật ngữ; D14 hướng dẫn chấm; D21 sổ sau buổi |
