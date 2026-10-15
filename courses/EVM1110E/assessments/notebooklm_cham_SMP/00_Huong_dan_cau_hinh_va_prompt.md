# EVM1110E · Hướng dẫn chấm bản kế hoạch SMP cuối kỳ bằng NotebookLM

**Ngày soạn:** 15/10/2026 · **Trạng thái:** BẢN 1, chờ giảng viên duyệt · **Lớp:** 7 nhóm

## 0. Đọc trước: NotebookLM làm được gì và không làm được gì

| NotebookLM làm | Giảng viên làm |
|---|---|
| Đọc bài, tìm bằng chứng theo từng mục con, ghi trang | Duyệt mọi điểm số; điểm cuối cùng là của giảng viên |
| Đề xuất điểm Phần I (tiêu chí 1–7) theo bảng mô tả chi tiết | Kiểm tra định dạng (font, lề, số trang) và ảnh chụp ở Phụ lục 2 |
| Kiểm tra tính toán CLV, cost-to-serve | Chấm Phần II (tiêu chí 8–11) tại buổi bảo vệ |
| Soạn câu hỏi vấn đáp riêng cho từng nhóm và từng thành viên | Áp trừ điểm nộp trễ |
| So sánh 7 phiếu chấm để phát hiện chấm lệch | Quyết định khi kết quả hai lần chấm khác nhau |

Ba nguyên tắc:
1. **NotebookLM chỉ đề xuất.** Không công bố điểm khi giảng viên chưa đọc phiếu chấm và đối chiếu bằng chứng.
2. **Mọi điểm phải có bằng chứng.** Một mục con không có trang và trích dẫn thì giảng viên không chấp nhận.
3. **Không dùng NotebookLM hay công cụ nào khác để “phát hiện AI”.** Theo quy định của môn, sinh viên được dùng AI nếu khai báo, và mức hiểu bài được kiểm tra bằng vấn đáp.

**Dữ liệu sinh viên.** Trước khi tải bài lên NotebookLM, giảng viên cần kiểm tra quy định của Trường về việc đưa bài làm của sinh viên lên công cụ AI bên ngoài. `[NEEDS PROFESSOR INPUT]` Nên dùng tài khoản Google do Trường cấp. Nếu được, xóa họ tên và MSSV ở trang bìa trước khi tải lên (chấm ẩn danh). Ở Phụ lục 1, thay họ tên bằng “Thành viên 1, 2, …” và giữ bảng đối chiếu ở máy của giảng viên.

## 1. Chuẩn bị nguồn

Tất cả các file nằm trong thư mục `courses/EVM1110E/assessments/`.

| # | Nguồn | File | Ghi chú |
|---|---|---|---|
| R1 | Đề thi chính thức (yêu cầu, rubric, câu hỏi phần A–E) | `EVM1110E_De_thi_cuoi_ky_SMP.docx` | Căn cứ chính (xem lưu ý bên dưới) |
| R2 | Bảng mô tả mức điểm chi tiết | `notebooklm_cham_SMP/01_Bang_mo_ta_muc_diem_chi_tiet.pdf` | Bảng chấm chính |
| R3 | Kiến thức môn học Buổi 1–13 | `notebooklm_cham_SMP/02_Kien_thuc_mon_hoc_B1-13.pdf` | Để kiểm tra khái niệm (CLV, Kraljic, GRASP…) đúng như đã dạy |
| G1 | Bản kế hoạch của nhóm | `EVM1110E_Nhom[số]_SMP.pdf` | Ẩn danh trang bìa nếu được |
| G2 | Slide của nhóm | `EVM1110E_Nhom[số]_Slide.pdf` | Chỉ dùng cho câu hỏi vấn đáp, không chấm Phần I |

Lưu ý R1: nếu NotebookLM không nhận file .docx, mở đề thi bằng Google Docs rồi thêm nguồn từ Google Drive. `[VERIFY: loại file NotebookLM hỗ trợ tại thời điểm dùng]`

Đổi tên file bài nộp cho thống nhất trước khi tải lên, ví dụ `Nhom3_SMP.pdf`. NotebookLM hiển thị tên file khi trích dẫn, nên tên rõ ràng giúp đối chiếu bằng chứng dễ hơn.

## 2. Cấu trúc sổ ghi chú: 7 sổ chấm và 1 sổ hiệu chỉnh

| Sổ | Nguồn | Mục đích |
|---|---|---|
| `EVM1110E SMP – Nhóm 1` … `Nhóm 7` (7 sổ) | R1, R2, R3 + G1, G2 của **đúng một nhóm** | Chấm Phần I, soạn câu hỏi vấn đáp |
| `EVM1110E SMP – Hiệu chỉnh 7 nhóm` (1 sổ) | R1, R2 + **7 phiếu chấm** (xuất từ 7 sổ trên) | So sánh, phát hiện chấm lệch, tách các nhóm |

**Vì sao mỗi nhóm một sổ:** nếu để 7 bài trong cùng một sổ, câu trả lời có thể lấy nhầm bằng chứng của nhóm khác. Một sổ một nhóm giúp mọi trích dẫn chắc chắn thuộc về đúng nhóm đó.

**Vì sao cần sổ hiệu chỉnh:** mỗi sổ chấm độc lập nên không biết các nhóm khác. Sổ hiệu chỉnh đặt 7 phiếu chấm cạnh nhau để kiểm tra hai điều: cùng mức bằng chứng có được cùng mức điểm không, và những chỗ điểm gần nhau có thật sự tương đương không.

## 3. Cấu hình chat (làm cho cả 8 sổ)

Trong mỗi sổ: **Configure chat** (biểu tượng điều chỉnh ở khung Chat) → mục tiêu **Custom** → độ dài **Longer** → dán đoạn hướng dẫn bên dưới → Save.

Bản đầy đủ dài khoảng 1.650 ký tự; bản rút gọn khoảng 360 ký tự. `[VERIFY: giới hạn ký tự của ô hướng dẫn tùy chỉnh tại thời điểm dùng]` Nếu ô không nhận đủ bản đầy đủ, dùng **bản rút gọn** ở mục 3.2.

### 3.1. Bản đầy đủ

```
Bạn là trợ lý chấm bài cho giảng viên học phần EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện (UEF). Bạn chấm bản Kế hoạch quản trị các bên liên quan (SMP) của MỘT nhóm sinh viên. Nhóm đóng vai agency tổ chức sự kiện, lập SMP xoay quanh Key Account Plan cho một khách hàng từ dự án cũ.

Căn cứ chấm, theo thứ tự ưu tiên:
1. Đề thi cuối kỳ EVM1110E (rubric 11 tiêu chí, yêu cầu, câu hỏi phần A–E). Khi có mâu thuẫn, đề thi là căn cứ.
2. Bảng mô tả mức điểm chi tiết (mục con 0–1–2, trần điểm, cách quy đổi).
3. Kiến thức môn học Buổi 1–13: dùng để kiểm tra khái niệm và công thức có đúng như đã dạy không.

Quy tắc bắt buộc:
- Chỉ dùng nội dung trong các nguồn. Không suy đoán điều bài làm không viết.
- Mỗi điểm mục con phải kèm số trang (nếu có) và một trích dẫn ngắn từ bài làm. Không tìm thấy bằng chứng: chấm 0, ghi "không tìm thấy".
- Chấm theo bài làm, không theo độ dài hay văn phong. Bài dài mà không có bằng chứng thì không được điểm cao.
- Phân biệt "có nhắc tên công cụ" (thường là 1) với "dùng công cụ để rút ra kết luận cho khách hàng cụ thể" (mới là 2).
- Tự tính lại mọi phép tính tài chính (CLV, cost-to-serve, ROI) từ số liệu đầu vào của nhóm. Ghi rõ phép tính.
- Áp trần điểm đúng như bảng mô tả. Mức điểm làm tròn đến 0,25.
- Không đánh giá việc sinh viên có dùng AI hay không. Chỉ kiểm tra phụ lục công bố có tồn tại khi đề thi yêu cầu.
- Không đoán định dạng (font, lề, số trang, ảnh chụp). Ghi "giảng viên kiểm tra".
- Không chấm tiêu chí 8–11 (phần bảo vệ trực tiếp).
- Kết quả là đề xuất cho giảng viên, không phải điểm cuối cùng.
- Trả lời bằng tiếng Việt, ưu tiên bảng, đúng định dạng được yêu cầu trong câu hỏi.
```

### 3.2. Bản rút gọn (khi ô hướng dẫn giới hạn ký tự)

```
Trợ lý chấm SMP môn EVM1110E. Căn cứ: đề thi (ưu tiên), bảng mô tả mức điểm chi tiết, kiến thức Buổi 1–13. Chỉ dùng nguồn. Mỗi điểm phải có trang và trích dẫn; không có thì 0. Tự tính lại số liệu tài chính. Áp trần điểm, làm tròn 0,25. Không đánh giá dùng AI, không đoán định dạng, không chấm tiêu chí 8–11. Kết quả chỉ là đề xuất. Trả lời tiếng Việt, dạng bảng.
```

## 4. Quy trình chấm trong một sổ nhóm

Chạy lần lượt P0 → P9 trong **cùng một sổ**, mỗi prompt một lượt. Sau mỗi kết quả, bấm **Save to note**. Ghi chú này là nguyên liệu cho phiếu chấm.

| Bước | Prompt | Thời gian (ước tính) |
|---|---|---|
| P0 | Kiểm tra nguồn và cấu trúc bài | 2 phút |
| P1–P7 | Chấm tiêu chí 1 đến 7, mỗi prompt một tiêu chí | 3–5 phút mỗi tiêu chí |
| P8 | Tổng hợp phiếu chấm Phần I | 2 phút |
| P9 | Câu hỏi vấn đáp cho buổi bảo vệ | 3 phút |

**Kiểm tra độ ổn định:** với 2 tiêu chí nặng nhất (tiêu chí 2 và 3), chạy lại prompt trong một chat mới (xóa lịch sử chat trước). Nếu hai lần lệch nhau hơn 0,5 mức điểm, giảng viên đọc trực tiếp phần đó của bài.

### P0. Kiểm tra nguồn và cấu trúc

```
Bước kiểm tra trước khi chấm. Chỉ dùng bản kế hoạch SMP của nhóm (không dùng slide).
1. Liệt kê các phần chính theo thứ tự xuất hiện, kèm trang bắt đầu: Executive Summary, A, B, C, D, Tài liệu tham khảo, các phụ lục.
2. Executive Summary có nằm ở đầu kế hoạch không? Dài khoảng bao nhiêu trang?
3. Có đủ 4 phụ lục bắt buộc theo đề thi không: (1) phân công và tự đánh giá đóng góp; (2) bảng truy vết các trang làm trên lớp Buổi 1–13; (3) danh sách giả định chính; (4) công bố sử dụng AI (nếu có). Ghi trang của từng phụ lục, hoặc "không tìm thấy".
4. Khách hàng của nhóm là ai (ghi như bài viết, có thể là tên viết tắt), thuộc ngành gì, sự kiện cũ là gì.
5. Có chỗ nào nêu họ tên, số điện thoại hay email của người thật tại khách hàng không? Ghi trang.
6. Có phần nào bị thiếu hoặc khó đọc (ví dụ bảng bị vỡ, trang chỉ có hình) không?
Trình bày thành một bảng. Chưa chấm điểm.
```

### Khung chung cho P1–P7

Mỗi prompt P1–P7 dùng chung cách trình bày kết quả sau (đã viết sẵn trong từng prompt):

| Mã | Mục con | Điểm 0–1–2 | Trang | Trích dẫn ngắn | Lý do |
|---|---|---|---|---|---|

Sau bảng: tổng mục con / tối đa → mức thô → trần áp dụng (nếu có) → **mức điểm** → **điểm quy đổi** = mức × trọng số. Cuối cùng là một câu mạnh nhất và một câu yếu nhất của bài ở tiêu chí này, dùng cho bước hiệu chỉnh.

### P1. Tiêu chí 1: Executive Summary (5%)

```
Chấm TIÊU CHÍ 1 – Executive Summary (phần E), trọng số 5%, theo mục 2 của bảng mô tả mức điểm chi tiết (mục con E1–E6) và mô tả mức điểm tiêu chí 1 trong đề thi.
Trình bày bảng: Mã | Mục con | Điểm 0–1–2 | Trang | Trích dẫn ngắn | Lý do.
Sau bảng ghi: tổng điểm mục con/12 → mức thô (thang 10) → trần điểm áp dụng (nếu có, nêu lý do) → mức điểm (làm tròn 0,25) → điểm quy đổi = mức × 0,05.
Thêm: (a) chép nguyên văn câu nêu giá trị có số và câu nêu việc Customer Board cần quyết (nếu có); (b) một điểm mạnh nhất và một điểm yếu nhất, mỗi điểm một câu.
```

### P2. Tiêu chí 2: Value Insights (12%)

```
Chấm TIÊU CHÍ 2 – Value Insights (phần A), trọng số 12%, theo mục 3 của bảng mô tả mức điểm chi tiết (mục con A1–A7) và mô tả mức điểm tiêu chí 2 trong đề thi.
Lưu ý khi chấm:
- A1, A2: PESTEL và đối thủ phải là CỦA KHÁCH HÀNG. Nếu bài phân tích thị trường sự kiện hoặc đối thủ của agency, chấm 0 cho mục đó và ghi rõ.
- A3: kiểm tra GRASP theo định nghĩa trong kiến thức Buổi 3 (G là mục tiêu của agency với người đó; R vai trò; A điều hấp dẫn họ ở phương án; S tình trạng quan hệ; P trình độ và quyền lực). Ghi số người được phân tích.
- A4: hành trình phải là của KHÁCH CỦA KHÁCH HÀNG, có ba giai đoạn và loại điểm chạm (brand-owned, partner-owned, customer-owned, social/external).
- A6: liệt kê các nhu cầu nhóm rút ra, và mỗi nhu cầu dựa trên công cụ nào. Nếu các công cụ đứng rời nhau, không dẫn tới nhu cầu, chấm A6 tối đa 1.
Trình bày bảng: Mã | Mục con | Điểm 0–1–2 | Trang | Trích dẫn ngắn | Lý do.
Sau bảng: tổng/14 → mức thô → trần (nếu có) → mức điểm → điểm quy đổi = mức × 0,12.
Thêm một điểm mạnh nhất và một điểm yếu nhất.
```

### P3. Tiêu chí 3: Value Opportunities (10%)

```
Chấm TIÊU CHÍ 3 – Value Opportunities (phần B), trọng số 10%, theo mục 4 của bảng mô tả mức điểm chi tiết (mục con B1–B6) và mô tả mức điểm tiêu chí 3 trong đề thi.
Bắt buộc kiểm tra tính toán:
1. Chép nguyên số liệu đầu vào CLV của nhóm (đóng góp ròng hoặc doanh thu và biên lợi nhuận, cost-to-serve, tỷ lệ giữ chân, tỷ lệ chiết khấu, số năm).
2. Tự tính lại CLV theo công thức của môn: CLV ≈ Σ m × r^(t−1) / (1+d)^t, năm 1 coi như chắc chắn, với m = lợi nhuận gộp − cost-to-serve. Trình bày từng năm.
3. So với kết quả của nhóm: lệch bao nhiêu %. Lệch trên 5% ghi "tính sai". Nếu nhóm dùng công thức khác, nêu công thức đó và nhận xét nó có phù hợp không.
4. Mỗi số liệu đầu vào có nguồn hoặc "Giả định: … vì …" không? Liệt kê số liệu không có cả hai.
5. Nhóm có thử kịch bản độ nhạy không (ví dụ tỷ lệ giữ chân giảm)? Kết quả là gì?
Sau đó trình bày bảng: Mã | Mục con | Điểm 0–1–2 | Trang | Trích dẫn ngắn | Lý do.
Sau bảng: tổng/12 → mức thô → trần (nếu có) → mức điểm → điểm quy đổi = mức × 0,10.
Thêm một điểm mạnh nhất và một điểm yếu nhất.
```

### P4. Tiêu chí 4: Value Propositions (10%)

```
Chấm TIÊU CHÍ 4 – Value Propositions (phần C), trọng số 10%, theo mục 5 của bảng mô tả mức điểm chi tiết (mục con C1–C6) và mô tả mức điểm tiêu chí 4 trong đề thi.
Lưu ý khi chấm:
- Chép nguyên văn câu future state. Nếu đó là giải pháp của agency (ví dụ "một sự kiện hoành tráng") thay vì mục tiêu của khách hàng, C1 tối đa 1.
- C2: kiểm tra đủ 7P (Product, Price, Place, Promotion, People, Process, Physical evidence). Ghi P nào thiếu.
- C3, C4: liệt kê mọi con số giá trị nhóm đưa ra, mỗi con số thuộc nguồn giá trị nào trong năm nguồn, có nguồn hoặc giả định không.
- C6: các bước đồng kiến tạo có cho thấy khách hàng cùng làm (co-diagnosis, co-ideation, co-design, co-testing…) hay chỉ duyệt?
Trình bày bảng: Mã | Mục con | Điểm 0–1–2 | Trang | Trích dẫn ngắn | Lý do.
Sau bảng: tổng/12 → mức thô → trần (nếu có) → mức điểm → điểm quy đổi = mức × 0,10.
Thêm: danh sách các LỜI HỨA giá trị ở phần C (đánh số C-1, C-2, …), dùng cho prompt P5. Cuối cùng là một điểm mạnh nhất và một điểm yếu nhất.
```

### P5. Tiêu chí 5: Value Delivery, quan hệ Key Account (8%)

```
Chấm TIÊU CHÍ 5 – Value Delivery: quản trị quan hệ với Key Account (phần D), trọng số 8%, theo mục 6 của bảng mô tả mức điểm chi tiết (mục con D1–D6) và mô tả mức điểm tiêu chí 5 trong đề thi.
Lưu ý khi chấm:
- D1: Kraljic phải xếp HẠNG MỤC mua của sự kiện (không xếp tên công ty), kèm chiến lược đàm phán với Key Account (tách rủi ro và giá trị, nhượng có điều kiện).
- D2: liệt kê các cặp đối ứng agency – khách hàng, mục đích, nhịp gặp.
- D3, D4: liệt kê chỉ số, phân loại kết quả hay quá trình, cấp mấy trong ROI 6 cấp. Nếu chỉ có chỉ số hài lòng, áp trần 6.
- D6: lấy danh sách lời hứa C-1, C-2, … từ kết quả chấm tiêu chí 4 (hoặc tự lập lại từ phần C). Lập bảng truy vết: Lời hứa | Chỉ số đo ở phần D | Trang | Có/Không.
Trình bày bảng: Mã | Mục con | Điểm 0–1–2 | Trang | Trích dẫn ngắn | Lý do.
Sau bảng: tổng/12 → mức thô → trần (nếu có) → mức điểm → điểm quy đổi = mức × 0,08.
Thêm một điểm mạnh nhất và một điểm yếu nhất.
```

### P6. Tiêu chí 6: Value Delivery, bên liên quan bên ngoài (10%)

```
Chấm TIÊU CHÍ 6 – Value Delivery: điều phối các bên liên quan bên ngoài (phần D, 13.2), trọng số 10%, theo mục 7 của bảng mô tả mức điểm chi tiết (mục con X1–X7) và mô tả mức điểm tiêu chí 6 trong đề thi.
Trước khi chấm, lập bảng mọi bên liên quan bên ngoài trong bài:
Bên | Nhóm (tài trợ–đầu tư / cung cấp–địa điểm / báo chí–KOL / khác) | Điểm chạm (trước/trong/sau) | Giá trị cho khách của khách hàng | Cách quản lý | Rủi ro | Trang.
Ô nào bài không nêu thì ghi "—".
Sau đó liệt kê các xung đột nhóm nêu: Xung đột | Các bên | Deliverable bị đe dọa | Cách bảo vệ | Trang. Nêu cơ chế minh bạch (nếu có).
Rồi chấm bảng: Mã | Mục con | Điểm 0–1–2 | Trang | Trích dẫn ngắn | Lý do. Với X2–X5: 2 khi mọi bên đều đạt, 1 khi chỉ một phần các bên đạt.
Sau bảng: tổng/14 → mức thô → trần (nếu có) → mức điểm → điểm quy đổi = mức × 0,10.
Thêm một điểm mạnh nhất và một điểm yếu nhất.
```

### P7. Tiêu chí 7: Trình bày, nguồn, liêm chính (5%)

```
Chấm TIÊU CHÍ 7 – Trình bày, nguồn và liêm chính học thuật, trọng số 5%, theo mục 8 của bảng mô tả mức điểm chi tiết (mục con P1–P6) và mô tả mức điểm tiêu chí 7 trong đề thi.
Lưu ý khi chấm:
- P2 (định dạng, số trang) và phần ảnh chụp ở Phụ lục 2: KHÔNG chấm. Ghi "giảng viên kiểm tra" và để trống điểm.
- P3: lấy 5 trích dẫn trong bài, kiểm tra có trong danh mục tài liệu tham khảo không; lấy 5 mục trong danh mục, kiểm tra có được trích trong bài không. Nêu lỗi APA 7 thường gặp nếu có.
- P4: liệt kê các con số quan trọng không có nguồn và không ghi giả định.
- P5: dùng kết quả của bước P0.
- Không đánh giá việc nhóm có dùng AI hay không.
Trình bày bảng: Mã | Mục con | Điểm 0–1–2 | Trang | Trích dẫn ngắn | Lý do.
Sau bảng: tính mức thô trên các mục đã chấm (bỏ P2 khỏi tử số và mẫu số) → trần (nếu có) → mức điểm tạm. Ghi rõ "mức điểm tạm, chờ giảng viên kiểm tra P2".
```

### P8. Tổng hợp phiếu chấm Phần I

```
Tổng hợp kết quả chấm tiêu chí 1–7 của nhóm này (từ các ghi chú đã lưu) thành PHIẾU CHẤM theo đúng mẫu sau:

PHIẾU CHẤM PHẦN I – Nhóm [số] – Khách hàng: [tên như bài viết]
Bảng 1: Tiêu chí | Trọng số | Tổng mục con/tối đa | Mức thô | Trần áp dụng | Mức điểm (0–10) | Điểm quy đổi | Xếp loại theo đề thi (Xuất sắc/Tốt/Trung bình/Kém)
Dòng tổng: điểm Phần I trên 6,0.
Bảng 2: Mã mục con | Điểm 0–1–2 (đủ 44 mục con: E1–E6, A1–A7, B1–B6, C1–C6, D1–D6, X1–X7, P1–P6).
Bảng 3: Những việc giảng viên cần kiểm tra (định dạng, ảnh chụp Phụ lục 2, các điểm có trần, các phép tính sai, các mục tìm không thấy bằng chứng).
Phần 4: Ba điểm mạnh và ba điểm yếu lớn nhất của bài, mỗi điểm một câu, kèm trang.

Không thay đổi điểm đã chấm ở các bước trước. Nếu phát hiện mâu thuẫn giữa các bước, ghi vào Bảng 3, không tự sửa.
```

Lưu ghi chú P8 → xuất ra Google Docs hoặc chép vào file `Phieu_cham_NhomX` → dùng cho sổ hiệu chỉnh.

### P9. Câu hỏi vấn đáp cho buổi bảo vệ

Chạy sau P8. Phụ lục 1 cho biết ai viết phần nào, nên câu hỏi được gán **phần không do người đó viết** (theo tiêu chí 11 của đề thi).

```
Soạn bộ câu hỏi vấn đáp cho Customer Board (giảng viên) dùng ở buổi bảo vệ của nhóm này. Dùng bản kế hoạch, slide và phiếu chấm Phần I.
1. Logic tài chính (tiêu chí 9): 4 câu, mỗi câu nhắm vào một con số hoặc giả định cụ thể trong bài (CLV, cost-to-serve, giá trị định lượng, độ nhạy). Ghi trang của con số. Ưu tiên chỗ yếu hoặc chỗ tính sai trong phiếu chấm. Mỗi câu kèm "câu trả lời đạt mức Xuất sắc cần có".
2. Chiến lược điểm chạm (tiêu chí 10): 4 câu về điểm chạm trước – trong – sau và vai trò các bên liên quan bên ngoài, trong đó có 2 câu tình huống giả định ("Nếu … thì nhóm làm gì?"). Mỗi câu kèm "câu trả lời đạt mức Xuất sắc cần có".
3. Phân công theo thành viên (tiêu chí 11): dựa vào Phụ lục 1, lập bảng Thành viên | Phần người đó viết | 2 câu hỏi về phần KHÔNG do người đó viết. Dùng cách gọi trong Phụ lục 1 (ví dụ "Thành viên 1").
4. Hai câu hỏi về kiểm chứng: chọn hai số liệu hoặc nhận định quan trọng, hỏi nhóm lấy từ đâu và đã kiểm tra thế nào.
Không đưa câu hỏi về việc nhóm có dùng AI hay không. Không đưa đáp án cho sinh viên.
```

## 5. Hiệu chỉnh giữa 7 nhóm (sổ `Hiệu chỉnh 7 nhóm`)

Nguồn của sổ: R1, R2 và **7 phiếu chấm** (kết quả P8 của 7 nhóm, đặt tên `Phieu_cham_Nhom1` … `Phieu_cham_Nhom7`). **Không** tải 7 bài làm vào sổ này. Hiệu chỉnh chỉ so sánh phiếu chấm; khi cần xem lại bằng chứng, quay về sổ của nhóm đó.

### H1. Bảng tổng 7 nhóm

```
Dùng 7 phiếu chấm. Lập bảng: Nhóm | Mức điểm tiêu chí 1 | 2 | 3 | 4 | 5 | 6 | 7 | Điểm Phần I (trên 6,0) | Xếp hạng.
Dưới bảng ghi: điểm cao nhất, thấp nhất, khoảng cách, và các cặp nhóm chênh nhau dưới 0,1 điểm Phần I.
Với từng tiêu chí, ghi các nhóm có cùng mức điểm.
```

### H2. Kiểm tra chấm nhất quán

```
Với từng tiêu chí 1–7, so sánh điểm mục con của 7 nhóm (Bảng 2 trong phiếu chấm).
1. Tìm các trường hợp lý do chấm giống nhau nhưng điểm mục con khác nhau, hoặc lý do khác nhau rõ rệt nhưng cùng điểm. Lập bảng: Tiêu chí | Mục con | Nhóm | Điểm | Lý do đã ghi | Vấn đề.
2. Tìm trần điểm áp dụng không đều: cùng tình trạng (ví dụ chỉ đo hài lòng, thiếu một nhóm bên liên quan) nhưng có nhóm bị áp trần, có nhóm không.
3. Với mỗi vấn đề, đề xuất giảng viên xem lại mục nào, của nhóm nào. KHÔNG tự sửa điểm.
```

### H3. Tách các nhóm điểm gần nhau

```
Với mỗi cặp hoặc nhóm có điểm Phần I chênh nhau dưới 0,1, hoặc có cùng mức điểm ở tiêu chí 2, 3 hoặc 6:
1. So sánh lần lượt các mục con theo thứ tự ưu tiên: A6 (rút ra nhu cầu), B3 (tính CLV), B5 (giả định và độ nhạy), C3–C4 (giá trị có số), D6 (lời hứa có cách đo), X6 (xung đột và bảo vệ deliverables).
2. Ở mục con đầu tiên có khác biệt về CHẤT LƯỢNG BẰNG CHỨNG (dựa trên trích dẫn và lý do trong phiếu chấm), nêu nhóm nào tốt hơn và vì sao.
3. Nếu hai nhóm thật sự tương đương ở mọi mục con ưu tiên, ghi "tương đương – giữ cùng điểm". Không tạo khác biệt giả.
4. Đề xuất điều chỉnh (nếu có) theo bước 0,25 trên mức điểm của một tiêu chí, kèm lý do. Giảng viên quyết định.
Trình bày bảng: Cặp nhóm | Mục con quyết định | Nhóm mạnh hơn | Bằng chứng (từ phiếu chấm) | Đề xuất điều chỉnh.
```

### H4. Báo cáo cho giảng viên

```
Tóm tắt kết quả hiệu chỉnh trong một trang:
1. Bảng điểm Phần I của 7 nhóm sau các đề xuất điều chỉnh (ghi rõ đâu là điểm gốc, đâu là đề xuất).
2. Ba tiêu chí cả lớp làm yếu nhất (mức điểm trung bình thấp nhất), mỗi tiêu chí một nhận xét ngắn.
3. Danh sách việc giảng viên cần làm trước khi chốt điểm.
```

**Lưu ý về “phân biệt được 7 nhóm”:** cách chấm này tách các nhóm bằng **bằng chứng**, không bằng cách ép phân phối. Bảng mô tả có 44 mục con, bước điểm 0,25 và trần điểm theo rubric, nên hai nhóm khó trùng điểm trừ khi bài thật sự tương đương. Nếu sau H3 vẫn còn hai nhóm tương đương, giữ cùng điểm là cách chấm công bằng.

## 6. Phần II: phiếu ghi tại buổi bảo vệ (giảng viên chấm)

NotebookLM không chấm Phần II. Mẫu phiếu ghi cho mỗi nhóm:

| Tiêu chí | Loại | Ghi nhận (câu hỏi số, câu trả lời) | Mức điểm 0–10 | × trọng số |
|---|---|---|---|---|
| 8. Trình bày (vai KAM Director, cấu trúc, thời gian 15 phút, slide) | Nhóm | | | × 0,10 |
| 9. Bảo vệ logic tài chính | Thành viên 1 … n | | | × 0,10 |
| 10. Bảo vệ chiến lược điểm chạm | Thành viên 1 … n | | | × 0,10 |
| 11. Phản biện và làm việc nhóm (hiểu cả phần không do mình viết) | Thành viên 1 … n | | | × 0,10 |

Dùng bộ câu hỏi P9. Mỗi thành viên trả lời ít nhất một câu, và Customer Board có thể chỉ định người trả lời. Đánh giá làm việc nhóm (AM9) dựa vào Phụ lục 1.

**Điểm bài thi của mỗi sinh viên** = Phần I (điểm chung của nhóm) + tiêu chí 8 (điểm chung của nhóm) + tiêu chí 9–11 (điểm cá nhân), thang 10. Trừ điểm nộp trễ áp sau cùng.

## 7. Danh sách kiểm tra của giảng viên trước khi chốt điểm

- [ ] Đã kiểm tra quy định của Trường về việc tải bài sinh viên lên NotebookLM.
- [ ] Đã duyệt bảng mô tả mức điểm chi tiết (R2), hoặc đã sửa theo ý giảng viên trước khi tải lên.
- [ ] Đã đọc 7 phiếu chấm, đối chiếu ngẫu nhiên ít nhất 3 trích dẫn mỗi phiếu với bài làm.
- [ ] Đã tự kiểm tra định dạng (P2) và ảnh chụp Phụ lục 2 của 7 nhóm.
- [ ] Đã xem các phép tính CLV mà NotebookLM ghi “tính sai”.
- [ ] Đã xử lý các vấn đề trong H2 và các đề xuất trong H3.
- [ ] Đã áp trừ điểm nộp trễ (nếu có).
- [ ] Điểm cuối cùng do giảng viên quyết định. Không gửi nguyên văn phiếu chấm của NotebookLM cho sinh viên khi chưa đọc lại.
