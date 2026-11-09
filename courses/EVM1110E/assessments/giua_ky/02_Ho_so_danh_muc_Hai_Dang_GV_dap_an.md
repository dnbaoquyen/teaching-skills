# HỒ SƠ DANH MỤC HẢI ĐĂNG – BẢN GIẢNG VIÊN (ĐÁP ÁN THAM KHẢO VÀ ĐIỂM CÀI SẴN)

**Tài liệu nội bộ của giảng viên, không phát cho sinh viên.**

Đi kèm `01_Ho_so_danh_muc_Hai_Dang_SV.md`. Hồ sơ này thuộc D11 (hạng mục 1 của lộ trình).

> **Lưu ý khi dùng**
> - Mọi con số đều là **giả định**. Các con số tính toán dưới đây đã được kiểm bằng script theo công thức của môn (Buổi 6).
> - "Đáp án" chỉ là **tham khảo**. Sinh viên có lập luận khác nhưng hợp lý và có căn cứ thì vẫn chấp nhận (cùng nguyên tắc với bài cuối kỳ khóa trước: khác quy ước không phải là sai).

## 1. Mục đích thiết kế: dữ liệu nào phục vụ buổi nào

| Buổi | Dữ liệu dùng | Điểm cài sẵn (để thảo luận và để bắt lỗi nhầm công cụ, TT-01) |
|---|---|---|
| B1 | Mục 4 (sự kiện A hoặc B) | Có cả bên **không mua bán** với agency (cư dân, chính quyền phường, hiệp hội), để sinh viên thấy Grid và Salience xếp **con người hoặc tổ chức có ảnh hưởng**, không xếp hạng mục mua |
| B2 | Bảng tổng hợp + mục 3 | **KH4** có doanh thu lớn nhất nhưng không qua cổng đồng đầu tư. Mẫu "khách lớn nhất chưa chắc là Key Account", nhưng khác ngành và khác số liệu so với Sông Xanh |
| B3 | DMU, dữ kiện môi trường | Mỗi khách có một "người gác cổng" khác nhau (Mua sắm, Tuân thủ, trụ sở khu vực, Kế toán) |
| B4 | Bằng chứng về quan hệ | KH1: xung đột chức năng đã được giải quyết. KH2: xung đột bị né (đổi concept lúc 22 giờ, không ghi nhận phát sinh). KH6: niềm tin cao nhưng sắp đổi người |
| B5 | Ngành + dữ kiện môi trường | Mỗi nhóm khách hàng trên Ma trận nguồn giá trị ưu tiên có ít nhất một khách đại diện (mục 4 dưới đây) |
| B6 | Doanh thu, biên, chi phí phục vụ, ngày thanh toán, tái ký | Khách có CLV cao nhất **không phải** khách có doanh thu cao nhất. Ma trận biên × CTS chia khách vào đủ 4 ô |
| B7 | Bảng hạng mục của sự kiện chính năm tới | Có hạng mục **không phải là hàng hóa agency mua**: giấy phép (KH2), không gian trường đại học (KH5), nhà tài trợ (KH5), mẫu thử do khách tự cung cấp (KH7). Mục đích là bắt lỗi "đưa mọi thứ vào Kraljic" |
| B8 | KH6 (Tổng giám đốc nghỉ hưu); KH3 (chưa gặp Phòng Mua sắm khu vực) | Bow-tie dễ đứt; cần chuyển sang Diamond. D04: cùng một khách chạy qua Grid, Salience, ma trận ưu tiên, Kraljic |

## 2. Số liệu tính sẵn (CTS, CLV, ma trận biên × CTS)

**Cách tính**
- Chi phí vốn = doanh thu × số ngày trả tiền/365 × 12%.
- CTS = các khoản chi phí phục vụ liệt kê trong hồ sơ + chi phí vốn.
- m = lợi nhuận gộp − CTS.
- CLV = Σ (t = 1…5) m × r^(t−1) / 1,12^t. Năm 1 không nhân r nhưng **vẫn chiết khấu** (D02).

Đơn vị: triệu đồng.

| Mã | Doanh thu | Biên gộp | Lợi nhuận gộp | Chi phí vốn | **CTS** | CTS/DT | **m** | r | **CLV 5 năm** | Ô trên ma trận biên × CTS (ngưỡng = trung vị danh mục) |
|---|---|---|---|---|---|---|---|---|---|---|
| KH1 Phúc An | 3.200 | 16% | 512,0 | 47,3 | **168,3** | 5,3% | **343,7** | 85% | **≈ 952** | Biên thấp, CTS thấp → **Bargain basement** |
| KH2 Mầm | 2.100 | 22% | 462,0 | 20,7 | **270,7** | 12,9% | **191,3** | 75% | **≈ 447** | Biên cao, CTS cao → **Carriage trade** |
| KH3 MedNord | 2.600 | 25% | 650,0 | 51,3 | **201,3** | 7,7% | **448,7** | 80% | **≈ 1.142** | Biên cao, CTS cao → **Carriage trade** |
| KH4 Bình Phát | 3.800 | 9% | 342,0 | 112,4 | **302,4** | 8,0% | **39,6** | 40% | **≈ 55** | Biên thấp, CTS cao → **Aggressive** |
| KH5 VíXanh | 1.400 | 28% | 392,0 | 13,8 | **83,8** | 6,0% | **308,2** | 60% | **≈ 567** | Biên cao, CTS thấp → **Passive** |
| KH6 Tân Tiến | 1.700 | 15% | 255,0 | 16,8 | **31,8** | 1,9% | **223,2** | 90% | **≈ 675** | Biên thấp, CTS thấp → **Bargain basement** |
| KH7 Lys Paris | 2.400 | 24% | 576,0 | 35,5 | **170,5** | 7,1% | **405,5** | 70% | **≈ 873** | Biên cao, CTS cao → **Carriage trade** |
| KH8 Kim Ngân | 250 | 20% | 50,0 | 1,2 | **11,2** | 4,5% | **38,8** | 50% | **≈ 61** | Biên thấp (sát ngưỡng), CTS thấp → Bargain basement |

**Trung vị danh mục:** biên gộp 21%; CTS/DT 6,55%.

**Chấp nhận các cách khác:**
- Sinh viên chọn ngưỡng khác (ví dụ trung bình, hoặc ngưỡng ngành giả định) mà có giải thích.
- Riêng KH8 nằm sát ngưỡng biên. Đây là cơ hội để nói "ma trận là ảnh chụp, điểm sát ngưỡng phải ghi chú".
- Tên 4 ô hiện vẫn [VERIFY], theo XĐ của Buổi 6.

**Câu chốt cho Buổi 6:**
- Xếp theo doanh thu: KH4 > KH1 > KH3 > KH7 > KH2.
- Xếp theo CLV: KH3 > KH1 > KH7 > KH6 > KH5 > KH2 > KH4.
- **"Doanh thu lớn nhất (KH4) có CLV gần thấp nhất."**

## 3. Chọn Key Account (Buổi 2): đánh giá tham khảo

| Mã | Sức hấp dẫn của khách | Vị thế của Hải Đăng | Cổng đồng đầu tư | Kết luận tham khảo |
|---|---|---|---|---|
| KH3 | Cao (CLV cao nhất, uy tín ngành, cơ hội mở rộng sang Campuchia) | Trung bình (chưa gặp Phòng Mua sắm khu vực; phải qua đợt đánh giá tháng 3) | **Có** (danh sách ưu tiên 3 năm; đề xuất bền vững được khách dùng lại) | **Key Account mạnh**, nhưng phải đầu tư để vượt qua đợt đánh giá |
| KH1 | Cao | **Cao** (5 năm; được mời họp kế hoạch năm; xung đột về phí giải quyết êm) | **Có** | **Key Account mạnh** |
| KH7 | Khá cao | Trung bình | Không chắc (trụ sở khu vực đang rà soát) | Key Account **có điều kiện**: rủi ro mất khách vì quyết định ở cấp khu vực |
| KH2 | Trung bình (tăng trưởng nhanh, CTS cao) | Khá | **Có** (format khai trương chuẩn, chia chi phí làm thử) | Key Account **tiềm năng**, nếu quản trị được CTS |
| KH6 | Trung bình | **Rất cao** | Thấp đến trung bình | Không phải ưu tiên đầu. Bài học Bow-tie: Tổng giám đốc nghỉ hưu |
| KH5 | Biên cao, khả năng tái ký thấp | Thấp (mới 1 năm) | **Có** (chia doanh thu tài trợ), nhưng ngân sách không chắc | Key Account **tiềm năng** có rủi ro tài chính |
| KH4 | Doanh thu lớn nhưng CLV rất thấp | Thấp | **Không** | **Không phải Key Account** (nằm ngoài danh sách được chọn) |
| KH8 | Thấp | — | Không | Khách giao dịch (nằm ngoài danh sách được chọn) |

**Nguyên tắc chấm khi nhóm được giao khách yếu hơn (KH5, KH6):** chấm theo **chất lượng lập luận**, không theo việc khách đó có "đúng" là Key Account hay không. Nhóm có thể lập luận "khách tiềm năng, cần điều kiện X để thành Key Account" và xây kế hoạch theo hướng đó.

**[CẦN GV XÁC NHẬN] Cách phân khách cho 6 nhóm.** Đề xuất:
- Bốc thăm thứ tự chọn.
- Nhóm chọn trước phải nộp lý do bằng bảng chấm có trọng số.
- Nếu lớp có 7 nhóm: bổ sung một khách nữa, hoặc cho hai nhóm làm cùng một khách với hai thẻ biến cố khác nhau.

## 4. Ma trận nguồn giá trị ưu tiên (Buổi 5): xếp nhóm tham khảo

Định nghĩa theo slide 12 Bài 5 do GV cung cấp.

| Mã | Nhóm khách hàng | 2 nguồn ưu tiên (theo ma trận của GV) | Ghi chú |
|---|---|---|---|
| KH1 | Doanh nghiệp Tài chính | Bottom-line · Advisory | Advisory: Hải Đăng góp ý cách giữ đại lý năm đầu |
| KH2 | Nhóm Tăng trưởng | Top-line · Customer's Customer | Doanh thu 30 ngày đầu của cửa hàng; trải nghiệm của khách đến quán |
| KH3 | Tập đoàn Đa quốc gia | HSSEQ · Advisory | Tuân thủ, bền vững; tư vấn để hội nghị thành sự kiện khoa học uy tín |
| KH4 | Nhóm Tối ưu chi phí | Bottom-line · Hiệu quả quy trình | "Hiệu quả quy trình" chưa thuộc 5 nguồn của đề cương: **XĐ-02** |
| KH5 | **[CẦN GV CHỐT]** Tăng trưởng hay Tài chính | Tăng trưởng → Top-line · Customer's Customer. Tài chính → Bottom-line · Advisory | Cài sẵn để thảo luận: **xếp theo điều khách đang ưu tiên, không xếp theo tên ngành**. Ma trận của GV dùng nhãn "Doanh nghiệp Tài chính" (nhãn theo ngành), nên cần GV chốt cách dạy |
| KH6 | Tối ưu chi phí, có dấu hiệu chuyển sang HSSEQ (áp lực bao bì xanh) | Bottom-line · Hiệu quả quy trình (hoặc HSSEQ) | Chấp nhận nếu có lập luận |
| KH7 | Tập đoàn Đa quốc gia | HSSEQ · Advisory | Advisory: hiểu khách hàng Việt (lời khen của Giám đốc Thương hiệu) |

## 5. Kraljic (Buổi 7): xếp hạng mục tham khảo

Agency là bên **mua**; xếp **theo hạng mục**.

| Khách | Hạng mục | Ô tham khảo | Lý do |
|---|---|---|---|
| KH1 | Hội trường 1.600 khách, Đà Nẵng, tháng 4 | **Strategic** | Tác động lớn tới sự kiện; chỉ 2 lựa chọn vào mùa cao điểm |
| | Ứng dụng bình chọn, check-in | **Bottleneck** | Giá trị nhỏ nhưng chỉ có 1 nhà cung cấp đã tích hợp |
| | Sân khấu, âm thanh, LED (30% giá trị) | **Leverage** | Tác động lớn; có 4 nhà cung cấp |
| | Khách sạn, vé máy bay | Leverage | Nhiều nhà cung cấp |
| | Quà in logo | Non-critical | — |
| KH2 | Bộ dựng dùng lại cho cả năm | Leverage | Gom chi tiêu cả năm, liên quan "customer of choice" |
| | KOL địa phương | Bottleneck | Rủi ro uy tín cao |
| | Âm thanh lưu động | Non-critical | — |
| | **Giấy phép vỉa hè** | **Không xếp** (bẫy) | Không phải hàng hóa mua từ nhà cung cấp. Chính quyền phường là **bên liên quan**, xét bằng Grid/Salience ở B1 |
| KH3 | Phiên dịch song song chuyên ngành y | **Bottleneck** (hoặc Strategic nếu có lý do) | Khan hiếm; phải đặt trước 3 tháng |
| | Phòng hội nghị có dịch cabin | Strategic | Tác động lớn; 3 lựa chọn |
| | Hệ thống đăng ký lưu bằng chứng tuân thủ | Bottleneck | 2 nhà cung cấp; bắt buộc có |
| | Ăn uống theo hạn mức | Leverage / Non-critical | — |
| KH5 | **Không gian trong trường, nhà tài trợ** | **Không xếp** (bẫy) | Trường là bên cấp phép, chủ không gian. Nhà tài trợ là bên **mang tiền vào** (B9), không phải nhà cung cấp |
| | Âm thanh nhỏ, quà tặng | Non-critical | — |
| KH6 | Không gian trưng bày lịch sử | Strategic | 2 lựa chọn; tác động lớn |
| | Phim tư liệu (1 đơn vị giữ tư liệu) | **Bottleneck** | Phụ thuộc một nguồn duy nhất |
| | Nghệ sĩ, tiệc | Leverage | Nhiều lựa chọn |
| KH7 | Không gian trải nghiệm đạt chuẩn tập đoàn | Strategic | 2 nhà sản xuất đạt chuẩn |
| | KOL làm đẹp | Bottleneck (hoặc Strategic) | Rủi ro uy tín cao |
| | Ảnh, video | Non-critical | — |
| | **Mẫu thử** | **Không xếp** (bẫy) | Khách tự cung cấp; agency không mua |

**Câu chốt cho Buổi 7 (TT-01):** "Kraljic xếp **thứ agency mua**. Grid và Salience xếp **người hoặc tổ chức có ảnh hưởng**. Chính quyền, trường đại học, nhà tài trợ không nằm trên Kraljic."

## 6. Gợi ý cho D04 (bài tập đa công cụ, Buổi 8)

Chọn **một khách** (đề xuất KH3 hoặc KH1, vì dữ liệu đầy đủ nhất) và cho cả lớp chạy lần lượt qua các công cụ:

| Công cụ | Đầu vào | Kết quả | Quyết định quản trị |
|---|---|---|---|
| Grid / Salience | Các bên của sự kiện chính năm tới | Ai cần quản lý chặt | Kế hoạch tiếp xúc với từng bên |
| Ma trận chọn KA + CLV | Bảng tổng hợp | Khách này có đáng đầu tư không | Mức đầu tư vào quan hệ |
| Ma trận nguồn giá trị ưu tiên | Nhóm khách hàng | 2 nguồn giá trị cần nhấn | Trọng tâm của CVP |
| Kraljic | Bảng hạng mục | Hạng mục nào phải giữ, hạng mục nào nhượng được | Chiến lược mua và giới hạn đàm phán |

**Câu hỏi so sánh để kết bài:** "Bốn công cụ cho ra bốn quyết định khác nhau. Nếu đổi công cụ cho nhau thì sai ở đâu?"

Câu này dùng lại cho D05 và đề AM2.

## 7. Phụ thuộc và điểm còn chờ GV

- **XĐ-02:** "Hiệu quả quy trình" và số nguồn giá trị, ảnh hưởng mục 4.
- **XĐ-03:** chữ G trong GRASP. Hồ sơ cho đủ dữ kiện để làm theo cả hai cách hiểu: điều người đó muốn, và điều agency muốn đạt với người đó.
- **Mục 3:** cách phân khách cho các nhóm; lớp có 7 nhóm thì xử lý ra sao.
- **Mục 4:** cách xếp KH5.
- **Cập nhật D02:** khi GV duyệt, bảng dữ kiện của danh mục Hải Đăng sẽ được đưa vào D02 cùng với dữ kiện Nova – An Phát, để mọi tài liệu dùng một chuẩn chung (QT-07).

## Bảng tự kiểm (hạng mục 1)

| QT/YC | Trạng thái | Bằng chứng |
|---|---|---|
| P4: danh mục 5–6 khách, khác Nova – An Phát | ✅ | 8 khách (6 được chọn + 2 dùng để phân tích danh mục); ngành, tên, số liệu đều khác. Không dùng ngân hàng |
| U04 / TT-04: mọi nhóm thực hành và bị đánh giá đủ phần KAM | ✅ | Mỗi khách được chọn có đủ dữ liệu cho B2–B8 (bảng mục 1) |
| U01 / TT-01: dữ liệu cài sẵn để phân biệt công cụ | ✅ | Bẫy Kraljic (giấy phép, trường, nhà tài trợ, mẫu thử); cùng một khách chạy qua 4 công cụ (mục 6) |
| U02 / TT-02: tình huống ngành sự kiện, gắn với quyết định quản trị | ✅ | Mọi dữ kiện là việc của agency sự kiện; mục 6 có cột "quyết định quản trị" |
| U07 / S18: giả định có nhãn | ✅ | Đầu tệp SV; mọi dữ kiện môi trường ghi "giả định"; tên hư cấu có câu miễn trừ |
| U09 / QT-01: góc nhìn agency | ✅ | Sinh viên là đội KAM của Hải Đăng; Kraljic từ phía agency mua |
| U12: không đi sâu an toàn đám đông | ✅ | Có câu ranh giới ở mục 4 của bản SV |
| QT-07 / U34: số liệu nhất quán, CLV có ví dụ số | ✅ | Tính bằng script; tổng doanh thu 17,45 tỷ khớp với "khoảng 17,5 tỷ"; công thức chiết khấu cả năm 1 |
| QT-06 / U47: không bịa dữ kiện thật | ✅ | Không có số liệu thị trường thật; không trích luật cụ thể (chỉ ghi "giả định quy định chặt hơn") |
| QT-05: không tự thêm ngoài phạm vi | ✅ | Chỉ dữ liệu phục vụ B1–B8 và giữa kỳ |
| QT-08: hỏi khi chưa rõ | ✅ | Mục 7: 4 điểm chờ GV |
| U31: không có dữ liệu sinh viên | ✅ | — |
| XĐ-02, XĐ-03 | ➖ | Chưa chốt; đã ghi rõ ảnh hưởng |
