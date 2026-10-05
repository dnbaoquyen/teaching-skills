# Kết quả NotebookLM — Buổi 9 (nguyên văn giảng viên gửi, chưa chỉnh sửa)

BUỔI 9 — ĐO LƯỜNG
1. THANG ĐO TỶ LỆ (RATIO SCALE)
A. Khái niệm, định nghĩa

* Thang đo tỷ lệ (Ratio Scale): "Ratio scales are very similar to interval scales with the key difference being that there's a meaningful zero point... Zero matters (0 dollars, 0 inches, 0 years)". Đây là cấp thang đo cao nhất, có đầy đủ đặc tính của thang đo khoảng nhưng có thêm một điểm gốc "0" tuyệt đối/có ý nghĩa thực sự (meaningful/true zero point) đại diện cho sự vắng mặt hoàn toàn của thuộc tính được đo.

B. Quy trình, phân loại, công thức

* Đặc điểm & Phép toán:
   * Điểm gốc \(0\) cố định (ví dụ: \(0\) đô-la nghĩa là không có tiền, \(0\) tuổi nghĩa là chưa sinh ra, \(0\) kg nghĩa là không có khối lượng).
   * Cho phép thực hiện tất cả các phép toán đại số: Cộng, trừ, nhân, chia, và so sánh tỷ lệ/bội số ("gấp 2 lần", "gấp 3 lần", "bằng một nửa" - double, triple, half, quarter).
   * Cho phép tính toán tất cả các chỉ số thống kê: Tần số (frequency), Trung vị (median), Yếu vị (mode), Giá trị trung bình (mean), Độ lệch chuẩn (standard deviation).

C. Ví dụ và tình huống

* Mức sẵn lòng chi trả (Willingness to Pay - WTP): Đo lường WTP bằng giá trị tiền đô-la thực tế. Nếu Nhóm A sẵn sàng trả \($10\) và Nhóm B sẵn sàng trả \($5\), ta có phát biểu hoàn toàn hợp lệ: "Nhóm A sẵn sàng trả gấp 2 lần (\($10 = 2 \times $5\)) so với Nhóm B".
* Thu nhập gia đình (Total Household Income): So sánh nhóm có thu nhập dưới \($9,999\) và nhóm có thu nhập \($40,000\) trở lên.
* Thời gian di chuyển (Travel Time): Số phút di chuyển đến phòng khám bác sĩ (ví dụ: 15 phút so với 30 phút).
* Các ví dụ khác trong video: Chiều cao (Height - inches), Tuổi (Age - years), Doanh số (Sales units), Cân nặng (Weight - kg).

D. Ưu điểm – nhược điểm, khi nào dùng / không dùng, lỗi thường gặp

* Ưu điểm: Cung cấp lượng thông tin toán học tối đa, cho phép chạy mọi kiểm định thống kê cao cấp (T-Test, ANOVA, Hồi quy, Phân tích đa biến).
* Hạn chế / Lưu ý: Bắt buộc đối tượng phải có khả năng lượng hóa chính xác bằng số (số tiền, số tuổi, số lượng) thay vì các khái niệm trừu tượng trong đầu.

E. Câu hỏi, bài tập, quiz, hoạt động người giảng đưa ra

* Câu hỏi kiểm tra trong video: "Có thể phát biểu rằng số hộ gia đình có thu nhập trung bình dưới \($9,999\) nhiều gấp 2 lần số hộ có thu nhập \($40,000\) trở lên hay không?" \(\rightarrow\) Đáp án: Có, vì thu nhập thuộc thang đo tỷ lệ có điểm 0 tuyệt đối.

2. CÁC PHÉP TOÁN / THỐNG KÊ ĐƯỢC PHÉP DÙNG CHO TỪNG CẤP THANG ĐO
A. Khái niệm, định nghĩa

* Đo lường (Measurement): "The whole point of measurement is to take an idea that is this fuzzy construct in somebody's head and convert it into a numerical representation... so that we can analyze it, interpret it, and compare people or products". Là quá trình chuyển đổi một khái niệm trừu tượng/mơ hồ trong đầu người tiêu dùng thành dạng biểu diễn con số để phân tích và so sánh.
* 4 Cấp thang đo cơ bản (4 Types of Scales): Định danh (Nominal), Thứ tự (Ordinal), Khoảng (Interval), Tỷ lệ (Ratio).

B. Quy trình, phân loại, các phép toán & thống kê được phép dùng cho từng cấp thang đo

```
┌────────────────────────────────────────────────────────────────────────┐
│                          4 CẤP THANG ĐO                                │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌─────────────────┬─────────────┴──────────────┬──────────────────┐
    ▼                 ▼                            ▼                  ▼
┌──────────────┐  ┌──────────────┐          ┌──────────────┐   ┌──────────────┐
│  Nominal     │  │   Ordinal    │          │   Interval   │   │    Ratio     │
│  (Định danh) │  │  (Thứ tự)    │          │  (Khoảng)    │   │  (Tỷ lệ)     │
└──────┬───────┘  └──────┬───────┘          └──────┬───────┘   └──────┬───────┘
       │                 │                         │                  │
       ├─ Phân loại      ├─ Phân loại              ├─ Phân loại       ├─ Phân loại
       └─ Đếm tần số     ├─ Đếm tần số             ├─ Đếm tần số      ├─ Đếm tần số
                         ├─ Trung vị (Median)      ├─ Trung vị        ├─ Trung vị
                         └─ Xếp hạng               ├─ Trung bình      ├─ Trung bình
                                                   ├─ Độ lệch chuẩn   ├─ Độ lệch chuẩn
                                                   └─ Cộng / Trừ      └─ Mọi phép toán
                                                                         (Cộng, trừ,
                                                                          nhân, chia,
                                                                          tỷ lệ gấp đôi)

```

1. Thang đo Định danh (Nominal Scale):
   * Đặc điểm: Chỉ phân loại, gán nhãn hoặc chỉ ra sự hiện diện/vắng mặt (presence/absence, yes/no, categories). Không có thứ tự, không có hơn kém.
   * Phép toán / Thống kê ĐƯỢC PHÉP: Đếm số lượng quan sát, tính tần số (counts/frequencies), phần trăm (percentages), Yếu vị (Mode), kiểm định Chi-square (\(Wait, \chi^2\)).
   * Phép toán / Thống kê KHÔNG ĐƯỢC PHÉP: KHÔNG tính giá trị trung bình (mean), trung vị (median), độ lệch chuẩn, không thực hiện các phép toán cộng/trừ/nhân/chia.
2. Thang đo Thứ tự (Ordinal Scale):
   * Đặc điểm: Xác định thứ tự ưu tiên hoặc thứ hạng (ordered preference: 1st, 2nd, 3rd) nhưng khoảng cách giữa các mức lựa chọn KHÔNG ĐỒNG NHẤT / KHÔNG CÓ KHOẢNG CÁCH CỐ ĐỊNH (no fixed/uniform gap).
   * Phép toán / Thống kê ĐƯỢC PHÉP: Đếm tần số (counts/frequencies), phần trăm (percentages), Trung vị (Median), Yếu vị (Mode), xếp hạng.
   * Phép toán / Thống kê KHÔNG ĐƯỢC PHÉP: KHÔNG ĐƯỢC TÍNH giá trị trung bình (mean) hay độ lệch chuẩn. Phát biểu dạng "thứ hạng trung bình là 1.52" là HOÀN TOÀN SAI VỀ THỐNG KÊ (vì thứ hạng chỉ có 1st, 2nd, 3rd, không có rank 1.52).
3. Thang đo Khoảng (Interval Scale):
   * Đặc điểm: Có thứ tự và khoảng cách giữa các mức lựa chọn là ĐỒNG NHẤT / BẰNG NHẤU (uniform distance/gap, thường có từ 5 đến 7 lựa chọn), nhưng KHÔNG CÓ ĐIỂM 0 TUYỆT ĐỐI (no meaningful/true zero point).
   * Phép toán / Thống kê ĐƯỢC PHÉP: Tính giá trị trung bình (mean), Trung vị (median), Yếu vị (mode), Độ lệch chuẩn (standard deviation), phép cộng, phép trừ, kiểm định T-test, ANOVA, Hồi quy.
   * Phép toán / Thống kê KHÔNG ĐƯỢC PHÉP: KHÔNG ĐƯỢC so sánh tỷ lệ gấp đôi/gấp ba (double/half/triple) vì không có điểm 0 thực sự (ví dụ: điểm 4.5 không thể kết luận là hài lòng gấp đôi điểm 2.25).
4. Thang đo Tỷ lệ (Ratio Scale):
   * Đặc điểm: Có thứ tự, khoảng cách đồng nhất và CÓ ĐIỂM 0 TUYỆT ĐỐI/CÓ Ý NGHĨA (meaningful zero point).
   * Phép toán / Thống kê ĐƯỢC PHÉP: TẤT CẢ các phép toán và thống kê (Cộng, trừ, nhân, chia, so sánh tỷ lệ gấp đôi/gấp ba, Trung bình, Trung vị, Độ lệch chuẩn, T-Test, ANOVA, Hồi quy, Phân tích đa biến).

C. Ví dụ và tình huống

* Nominal: Chọn giữa hai cầu thủ Hines Ward hay Troy Polamalu; Giới tính (Nam/Nữ); Tên trường đại học; Môn học đã đăng ký.
* Ordinal: Xếp hạng loại trái cây yêu thích (1. Đào, 2. Chuối, 3. Táo); Trình độ học vấn (Chưa có bằng, Bằng THPT, Bằng Đại học, Sau Đại học).
* Interval: Thang đo đánh giá độ hài lòng đại lý xe Toyota từ 1 (Rất không hài lòng) đến 5 (Rất hài lòng); Thang đo khả năng mua hàng; Nhiệt độ Celsius (\(20^\circ\text{C}, 30^\circ\text{C}\)); Điểm IQ (\(100, 120\)); Thời gian trên đồng hồ (\(3\text{ PM}, 6\text{ PM}\)).
* Ratio: Mức sẵn lòng chi trả (\($0, $5, $10\)); Thu nhập gia đình; Cân nặng; Số lần ghé thăm trang web; Số giờ xem TV.

D. Ưu điểm – nhược điểm, khi nào dùng / không dùng, lỗi thường gặp

* Lỗi thường gặp do người giảng cảnh báo:
   1. Lỗi tính trung bình cho thang Thứ tự (Ordinal): Tính điểm trung bình thứ hạng (ví dụ: "thứ hạng trung bình 1.52") $\rightarrow$ Cảnh báo: Chỉ được báo cáo tỷ lệ phần trăm (ví dụ: "60% chọn Carlsberg là thương hiệu yêu thích số 1").
   2. Lỗi so sánh "gấp đôi" trên thang Khoảng (Interval): Khẳng định đại lý A có điểm hài lòng $4.5$ thì khách hàng "hài lòng gấp đôi" đại lý B có điểm $2.3$ $\rightarrow$ Cảnh báo: Điểm $0$ trên thang khoảng là tùy ý (nếu đổi thang sang $-2$ đến $+2$ thì điểm $4.5$ trở thành $+1.5$ và $2.3$ trở thành $-0.7$, khiến phép nhân gấp đôi trở nên hoàn toàn vô lý).

E. Câu hỏi, bài tập, quiz, hoạt động người giảng đưa ra

* Bài tập phân loại 4 cấp thang đo trên hệ thống Canvas.

3. SAI SỐ ĐO LƯỜNG: SAI SỐ HỆ THỐNG VÀ SAI SỐ NGẪU NHIÊN
A. Khái niệm, định nghĩa

* Sai số đo lường (Measurement Error / Measurement Bias): Phát sinh khi dữ liệu thu thập không phản ánh đúng giá trị thực tế do công cụ đo lường bị lỗi, câu hỏi mơ hồ, cấu trúc thang đo bị lệch hoặc thái độ người trả lời.
* Sai số hệ thống (Systematic Error / Bias): Là sự chênh lệch chệch hẳn về một hướng nhất định do các yếu tố cố định trong thiết kế thang đo hoặc cấu trúc câu hỏi gây ra, lặp đi lặp lại một cách ổn định.
* Sai số ngẫu nhiên (Random Error): Là những biến động ngẫu nhiên, không lường trước được do sự mệt mỏi, xao nhãng, hoặc bối cảnh tâm lý chốc lát của người trả lời tại thời điểm khảo sát.

B. Quy trình, phân loại, nguồn gốc sai số

* Nguồn gốc gây ra Sai số hệ thống (Systematic Error Sources):
   1. Định dạng con số âm trên thang đo (Negative vs. Positive anchors): Khi sử dụng số âm (như thang Stapel \(-4\) đến \(+4\)), \(17%\) người tham gia chọn 5 ô đầu; nhưng khi đổi sang thang số dương (\(0\) đến \(8\)), có tới \(44%\) chọn 5 ô đầu vì người dùng bị tâm lý e ngại con số âm (coi số âm là tiêu cực).
   2. Thiết kế khung tần suất (Low vs. High frequency scale bias):
      * Khung tần suất thấp (\(\le 0.5\text{h}\) đến \(>2.5\text{h}\)): Chỉ \(16%\) người tham gia thừa nhận xem TV \(>2.5\text{h}\).
      * Khung tần suất cao (\(\le 2.5\text{h}\) đến \(>4.5\text{h}\)): Có tới \(37%\) thừa nhận xem TV \(>2.5\text{h}\).
      * Nguyên nhân: Người trả lời có xu hướng tránh các lựa chọn cực đoan ở hai đầu khung thang đo (avoid extreme responses) và dùng cấu trúc khung thang đo như một tín hiệu chuẩn mực xã hội.
   3. Hiệu ứng gợi ý (Aided vs. Unaided scales): Khi cung cấp sẵn danh sách đáp án gợi ý (Aided), \(62%\) chọn yếu tố "tự suy nghĩ"; khi để câu hỏi mở không gợi ý (Unaided), chỉ có \(5%\) tự nghĩ ra yếu tố đó.
* Nguồn gốc gây ra Sai số ngẫu nhiên (Random Error Sources):
   * "Respondents are busy, distracted, bored, unmotivated, and tired... they don't care about your stupid survey" (Người tham gia bận rộn, xao nhãng, chán nản, thiếu động lực và mệt mỏi), dẫn đến việc chọn bừa một dãy số (ví dụ: khoanh toàn bộ số 4 từ trên xuống dưới - "circling fours down the page").

C. Ví dụ và tình huống

* Thang Stapel đánh giá mức độ thành công cuộc sống:
   * Thang A (\(-4\) đến \(+4\)): Chỉ \(17%\) chọn 5 ô đầu tiên.
   * Thang B (\(0\) đến \(8\)): Có \(44%\) chọn 5 ô đầu tiên.
* Khảo sát thời gian xem TV ngày thường: Khung thang đo tần suất cao làm tăng gấp đôi tỷ lệ người thừa nhận xem TV nhiều do dịch chuyển tâm lý về khoảng giữa của thang.
* Khảo sát chất lượng siêu thị Giant Eagle: Nhầm lẫn giữa các câu hỏi thuận chiều và câu hỏi ngược chiều làm sai lệch tổng điểm thái độ nếu không thực hiện bước đảo mã (reverse coding).

D. Ưu điểm – nhược điểm, lời cảnh báo của người giảng

* Lời cảnh báo của người giảng: "Garbage in, garbage out" — Nếu thiết kế câu hỏi gây ra sai số hệ thống, dữ liệu thu về sẽ hoàn toàn là rác, dẫn đến các quyết định kinh doanh sai lầm nghiêm trọng.

E. Câu hỏi, bài tập, quiz, hoạt động người giảng đưa ra

* Thí nghiệm so sánh thang Stapel (\(-4 \rightarrow +4\) vs. \(0 \rightarrow 8\)): Giảng viên minh họa sự thay đổi tỷ lệ phản hồi \(17%\) vs \(44%\) để nhắc nhở về rủi ro sai số hệ thống khi chọn nhãn con số.

4. GIÁ TRỊ (VALIDITY) VÀ ĐỘ TIN CẬY (RELIABILITY)
A. Khái niệm, định nghĩa

* Giá trị / Độ hiệu lực (Validity): "Validity refers to the accuracy and trustworthiness of your findings. It's about ensuring that your research truly reflects the reality you're studying". Là tính chính xác và độ tin cậy của phát hiện, đảm bảo công cụ nghiên cứu thực sự đo lường đúng khái niệm/thực tế cần đo.
* Độ tin cậy (Reliability): "Reliability refers to the consistency of your research methods and findings over time". Là tính nhất quán của phương pháp và kết quả nghiên cứu khi tiến hành lặp lại qua thời gian hoặc giữa các nhà nghiên cứu khác nhau.

B. Các loại, kỹ thuật đánh giá & Quy trình

* Kỹ thuật đánh giá Độ giá trị & Độ tin cậy trong Nghiên cứu Định tính:
   1. Tam giác đạc (Triangulation): "Triangulation involves using multiple data sources or methods to cross-verify results" (Sử dụng nhiều nguồn dữ liệu, nhiều phương pháp hoặc nhiều nhà nghiên cứu để kiểm chứng chéo kết quả).
   2. Kiểm chứng bởi thành viên (Member checking): "Member checking allows participants to review and confirm the accuracy of your interpretations" (Gửi lại bản tổng hợp/diễn giải cho chính người tham gia để họ kiểm tra và xác nhận độ chính xác).
   3. Mô tả chi tiết / dày (Thick description): Cung cấp bối cảnh chi tiết và trích dẫn trực tiếp lời nói/cảm xúc nguyên bản của đối tượng.
   4. Tự phản xạ & Bỏ qua thiên lệch (Reflexivity & Mitigating Researcher Bias): Nhà nghiên cứu tự nhận thức và ghi chép lại các thiên vị, kinh nghiệm cá nhân để tránh làm sai lệch quá trình phân tích dữ liệu.
* Kỹ thuật đánh giá trong Phân tích Định lượng / SPSS:
   1. Chỉ số KMO (Kaiser-Meyer-Olkin): Đo lường độ thích hợp của mẫu cho phân tích nhân tố (yêu cầu \(\text{KMO} \ge 0.6\)).
   2. Kiểm định Bartlett (Bartlett's Test of Sphericity): Kiểm định mối tương quan giữa các biến (yêu cầu \(p < 0.05\)).
   3. Ma trận tương quan đối đường chéo (Anti-image Correlation Matrix): Yêu cầu các giá trị trên đường chéo (Measure of Sampling Adequacy - MSA) phải \(> 0.5\).
   4. Tổng phương sai trích (Total Variance Explained): Độ giá trị hội tụ của các nhân tố rút ra (yêu cầu giải thích tích lũy \(> 50%\), giá trị Eigenvalue \(> 1\)).

C. Ví dụ và tình huống

* Ví dụ Kiểm chứng Định tính trong Y tế: Nghiên cứu trải nghiệm của bệnh nhân tại bệnh viện. Nhà nghiên cứu mã hóa các chủ đề như "sự giao tiếp", "thời gian chờ đợi", "sự đồng cảm", sau đó gửi lại cho bệnh nhân duyệt (member checking) và kết hợp quan sát thực tế với phỏng vấn sâu (triangulation) để đảm bảo độ giá trị.
* Ví dụ Kiểm định độ giá trị thang đo Kem đánh răng trong SPSS: Chạy phân tích nhân tố EFA cho 6 câu hỏi, đạt \(\text{KMO} = 0.660 > 0.6\), Bartlett \(p = .000 < 0.05\), các đường chéo Anti-image \(> 0.5\), trích ra 2 nhân tố giải thích \(82%\) tổng phương sai.

D. Ưu điểm – nhược điểm, khi nào dùng / không dùng, lỗi thường gặp

* Lỗi thường gặp: Bỏ qua bước kiểm định độ giá trị/độ tin cậy mà vội vàng đưa dữ liệu vào phân tích hồi quy hoặc phân tích cụm, dẫn đến mô hình bị sai lệch.

E. Câu hỏi, bài tập, quiz, hoạt động người giảng đưa ra

* Bài tập kiểm định KMO & Anti-image trong SPSS: Giảng viên yêu cầu sinh viên kiểm tra 3 điều kiện thống kê trước khi tiến hành rút nhân tố.

5. ĐO LƯỜNG THÁI ĐỘ VÀ MỨC SẴN LÒNG CHI TRẢ (WTP)
A. Khái niệm, định nghĩa

* Thái độ (Attitudes): "Attitudes are mental states that have strong influence on behavior". Là trạng thái tinh thần có ảnh hưởng mạnh mẽ đến hành vi mua hàng thực tế.
* Mức sẵn lòng chi trả (Willingness to Pay - WTP): Là số tiền tối đa mà một người tiêu dùng sẵn lòng bỏ ra để sở hữu một sản phẩm hoặc dịch vụ.

B. Quy trình, phân loại các thang đo thái độ & WTP

```
                       ┌────────────────────────────────────────┐
                       │          ĐO LƯỜNG THÁI ĐỘ              │
                       └───────────────────┬────────────────────┘
                                           │
      ┌────────────────┬───────────────────┼───────────────────┬────────────────┐
      ▼                ▼                   ▼                   ▼                ▼
┌───────────┐  ┌───────────────┐   ┌───────────────┐   ┌───────────────┐  ┌───────────┐
│ Likert    │  │ Semantic Diff │   │ Stapel        │   │ Constant Sum  │  │ Purchase  │
│ (Đồng ý)  │  │ (Đối nghĩa)   │   │ (Đơn cực)     │   │ (Tổng 100 pt) │  │ Intention │
└───────────┘  └───────────────┘   └───────────────┘   └───────────────┘  └───────────┘

```

1. Thang đo Likert (Likert Scale - Agreement Based):
   * Đo lường mức độ đồng ý hoặc không đồng ý đối với một chuỗi các phát biểu, thường gồm 5 mức (Strongly Disagree, Disagree, Neutral, Agree, Strongly Agree).
   * Công thức đảo mã (Reverse Coding): Với các câu hỏi ngược chiều (ví dụ: "Hàng thanh toán di chuyển quá chậm"), phải đảo lại mã trước khi tính tổng điểm thái độ: \[\text{Mã mới} = (\text{Số mức thang} + 1) - \text{Mã cũ}\] (Ví dụ thang 5 mức: \(\text{Mã mới} = 6 - \text{Mã cũ}\). Điểm 5 thành 1, điểm 1 thành 5).
   * Quy tắc so sánh: Tổng điểm thái độ tuyệt đối (ví dụ: 24 điểm) không có ý nghĩa đơn độc, chỉ có giá trị khi so sánh (so sánh giữa các cửa hàng, so sánh theo thời gian, hoặc so sánh giữa các nhóm khách hàng).
2. Thang đo Đối nghĩa (Semantic Differential Scale):
   * Sử dụng các cặp từ tính từ/tính chất trái ngược nhau đặt ở hai đầu cực của thang đo (ví dụ: Dễ sử dụng \(\leftrightarrow\) Khó sử dụng; Giá rẻ \(\leftrightarrow\) Giá đắt).
3. Thang đo Stapel (Stapel Scale):
   * Thang đo đơn cực sử dụng các số nguyên từ âm đến dương (ví dụ \(-4\) đến \(+4\)) xoay quanh một từ nhãn duy nhất để đo độ mạnh và hướng của thái độ.
4. Thang đo Tổng không đổi (Constant Sum Scale):
   * Yêu cầu người tham gia phân bổ một tổng số điểm cố định (thường là 100 điểm) cho các thuộc tính khác nhau để thể hiện độ quan trọng tương đối.
   * Hạn chế: Rất khó thực hiện, người dùng lười toán (dễ cộng sai tổng \(\neq 100\)), bị ảnh hưởng mạnh bởi thứ tự liệt kê (ô đầu tiên thường bị gán số điểm lớn nhất).
5. Thang đo Ý định mua (Purchase Intention Scale):
   * Thang 5 mức: Definitely would buy, Probably would buy, Might or might not buy, Probably would not buy, Definitely would not buy.
   * Công thức hiệu chỉnh dự báo Quy mô thị trường (Calibration Rule):
      * \(80%\) số người chọn "Definitely would buy" sẽ thực sự mua.
      * \(30%\) số người chọn "Probably would buy" sẽ thực sự mua.
      * \(0%\) cho các nhóm còn lại. \[\text{Tỷ lệ mua thực tế ước tính} = (0.80 \times % \text{Definitely}) + (0.30 \times % \text{Probably})\]
6. Các phương pháp đo lường Mức sẵn lòng chi trả (Willingness to Pay - WTP):
   * Câu hỏi mở WTP (Open-ended WTP): Khách hàng tự điền số tiền. Rủi ro: Khách hàng thiếu thông tin sẽ điền các con số ngẫu nhiên/vô lý (crazy answers).
   * Câu hỏi dạng Khoảng/Khung (Bucket choices): Cho các khoảng giá (\($0-1.99, $2-2.99...\)). Rủi ro: Khách hàng không biết sẽ chọn mốc ở giữa (middle option).
   * Phương pháp Van Westendorp (Price Sensitivity Meter): Hỏi 4 câu hỏi giá (Quá rẻ - Too cheap, Giá tốt/Hợp lý - Good deal, Bắt đầu đắt - Expensive, Quá đắt - Too expensive) với ô nhập tự do để tìm Điểm giá tối ưu (Optimal Price Point - OPP) và Khoảng giá tối ưu (Optimal Price Range).
   * Phương pháp Gabor-Granger: Đưa ra mức giá cố định, nếu đồng ý ("Yes") thì tăng giá, nếu từ chối ("No") thì giảm giá cho đến khi tìm được mức giá tối đa người dùng chấp nhận.
   * Phân tích Đánh đổi Conjoint (Conjoint Analysis): Kỹ thuật tốt nhất đo lường WTP bằng cách bắt người dùng đánh đổi giữa các gói thuộc tính và giá cả.

C. Ví dụ và tình huống

* Ví dụ Đảo mã Likert cho chuỗi cửa hàng Giant Eagle: Khảo sát 6 phát biểu. Câu "Hàng thanh toán di chuyển chậm" nhận điểm 5 (nghĩa là thái độ rất tiêu cực). Áp dụng công thức đảo mã: \(6 - 5 = 1\). Sau khi đảo mã cho tất cả các câu ngược chiều, tổng điểm thu được là 24. So sánh 24 điểm của cửa hàng A với 22 điểm quý trước (thái độ tăng) hoặc 27 điểm của cửa hàng B.
* Ví dụ Dự báo quy mô thị trường từ Thang Ý định mua: Khảo sát 100 người: 10 người chọn "Definitely buy", 10 người chọn "Probably buy", 80 người chọn các ô còn lại. \[\text{Dự báo số người mua} = (10 \times 80%) + (10 \times 30%) = 8 + 3 = 11 \text{ người } (11%)\] Nếu tổng thị trường tiềm năng là 100 triệu dân \(\rightarrow\) Quy mô mua thực tế dự báo là 11 triệu khách hàng.
* Ví dụ Gabor-Granger cho Ứng dụng Sức khỏe: Mức giá tối ưu tìm được là \($5.99/\text{tháng}\) với \(38%\) đăng ký (doanh thu \($27,312 / 1,000\) khách), tối ưu hơn mức \($9.99/\text{tháng}\) (chỉ \(21%\) đăng ký).
* Ví dụ Conjoint Ống nghe Kỹ thuật số: Khách hàng sẵn sàng trả thêm \($120\) cho ống nghe có thiết kế phím điều khiển nằm trên ống dây (tube controls) vì mức độ ưu chuộng đậm nét, dù số người chọn thiết kế này ít hơn thiết kế trên mặt ống nghe.

D. Ưu điểm – nhược điểm, khi nào dùng / không dùng, lỗi thường gặp

* Lời cảnh báo quan trọng nhất của người giảng khi thiết kế Bảng hỏi: "NO ONE CARES ABOUT YOUR STUPID SURVEY" — Người trả lời bận rộn, mệt mỏi và không quan tâm đến khảo sát của bạn. Nếu thiết kế câu hỏi confusing, typos, hoặc dùng thang Constant Sum quá rối rắm, bạn sẽ chỉ thu về dữ liệu rác.

E. Câu hỏi, bài tập, quiz, hoạt động người giảng đưa ra

* Bài tập đảo mã trong SPSS: Luyện tập tính toán biến mới bằng công thức \(6 - x\) cho các phát biểu ngược chiều.

6. BIẾN NGHIÊN CỨU: BIẾN ĐỘC LẬP, PHỤ THUỘC, TRUNG GIAN, ĐIỀU TIẾT
A. Khái niệm, định nghĩa

* Biến độc lập (Independent Variable - IV): Là biến số mà nhà nghiên cứu thao tác, thay đổi hoặc lựa chọn để quan sát sự tác động của nó lên biến số khác (nguyên nhân dự kiến).
* Biến phụ thuộc (Dependent Variable - DV): Là biến số kết quả/đầu ra được đo lường, chịu sự ảnh hưởng hoặc biến thiên do biến độc lập gây ra.
* Biến điều tiết (Moderating Variable): Là biến số làm thay đổi ĐỘ MẠNH (strength) hoặc HƯỚNG (direction) của mối quan hệ giữa biến độc lập và biến phụ thuộc (trả lời câu hỏi: Mối quan hệ này mạnh/yếu khi nào hoặc đối với ai?).
* Biến trung gian (Mediating Variable): Là biến số giải thích CƠ CHẾ hoặc QUÁ TRÌNH (mechanism/process) mà thông qua đó biến độc lập tác động đến biến phụ thuộc (trả lời câu hỏi: TẠI SAO và BẰNG CÁCH NÀO biến IV lại dẫn đến biến DV?).

B. Quy trình, phân loại & Sơ đồ mối quan hệ giữa các biến

```
                                  ┌──────────────────────────┐
                                  │   Biến điều tiết         │
                                  │  (Moderating Variable)   │
                                  └────────────┬─────────────┘
                                               │ (Thay đổi độ mạnh/hướng)
                                               ▼
┌────────────────────────┐        ┌──────────────────────────┐        ┌────────────────────────┐
│   Biến độc lập (IV)    ├───────►│   Biến trung gian        ├───────►│   Biến phụ thuộc (DV)  │
│ (Independent Variable) │        │   (Mediating Variable)   │        │  (Dependent Variable)  │
└────────────────────────┘        └──────────────────────────┘        └────────────────────────┘
                                    (Giải thích cơ chế TẠI SAO)

```

C. Ví dụ và tình huống cụ thể (Trích xuất từ các video)

1. Ví dụ 1 (Mối quan hệ giữa Thời gian học và Điểm thi - Video "Struggling with Research Variables?"):
   * Biến độc lập (IV): Thời gian học tập (Study time).
   * Biến phụ thuộc (DV): Điểm số bài thi (Exam scores).
   * Biến điều tiết (Moderating Variable): Động lực học tập (Motivation) hoặc Kiến thức nền tảng có sẵn (Prior knowledge) — làm thay đổi độ mạnh tác động của giờ học lên điểm thi.
   * Biến trung gian (Mediating Variable): Thói quen/phương pháp học tập (Study habits) — giải thích cơ chế vì sao tăng thời gian học lại dẫn tới điểm thi cao hơn.
2. Ví dụ 2 (Tác động của Khuyến mãi / Giá đến Doanh số trong SPSS):
   * Biến độc lập (IV): Giá bán sản phẩm (Price), Chi phí quảng cáo (Ad spend).
   * Biến phụ thuộc (DV): Doanh số bán hàng (Sales units).
   * Biến điều tiết (Moderating / Dummy Variable): Đối thủ cạnh tranh gia nhập thị trường (Competitor Entry: \(0 =\) Chưa có, \(1 =\) Đã gia nhập) làm thay đổi độ nhạy cảm giá (price elasticity - độ dốc đường cầu).
   * Biến điều tiết (Interaction Term trong Hồi quy): Môn học được lựa chọn ôn tập (Course studied: \(0 =\) Regression, \(1 =\) Marketing Research) điều tiết tác động của số giờ học lên điểm thi môn Marketing Research (Video Regression Interaction Example).

D. Ưu điểm – nhược điểm, khi nào dùng / không dùng, lỗi thường gặp

* Phân biệt Lỗi thường gặp: Nhầm lẫn giữa Biến trung gian (Mediating - đóng vai trò là cầu nối truyền tải tác động) và Biến điều tiết (Moderating - đóng vai trò là chất xúc tác làm tăng/giảm hoặc đảo chiều tác động).

E. Câu hỏi, bài tập, quiz, hoạt động người giảng đưa ra

* Bài tập xây dựng giả thuyết trong video: Đặt giả thuyết "Thời gian học tập tăng dẫn đến điểm thi cao hơn" và xác định các biến IV, DV, Mediating, Moderating tương ứng.

7. TOÀN BỘ CÂU HỎI TRONG "QUESTION TYPE QUIZ" KÈM ĐÁP ÁN
Dưới đây là toàn bộ 4 câu hỏi kiểm tra loại thang đo trong video "Question Type Quiz Review (Marketing Research Module 2, Video 2)" kèm đáp án và giải thích chi tiết từ người giảng:
Câu hỏi 1:

* Đề bài: "Rank the brands according to preference: Heineken, Carlsberg, Corona" (Hãy xếp hạng các thương hiệu bia theo thứ tự ưu thích của bạn).
* Đáp án: Thang đo Thứ tự (Ordinal Scale).
* Giải thích từ người giảng:
   * Người trả lời cho biết thương hiệu nào là lựa chọn thứ 1, thứ 2 và thứ 3, nhưng không cho biết mức độ chênh lệch ưu thích giữa các thương hiệu là bao nhiêu (khoảng cách không đồng nhất).
* Phát biểu HỢP LỆ & KHÔNG HỢP LỆ:
   * ❌ Phát biểu KHÔNG HỢP LỆ: "Carlsberg là thương hiệu được ưu thích nhất vì thứ hạng trung bình là 1.52" (Vì thang thứ tự không thể tính giá trị trung bình; không tồn tại thứ hạng 1.52).
   * ✅ Phát biểu HỢP LỆ: "Carlsberg là thương hiệu được ưu thích nhất, được \(60%\) người tham gia xếp hạng ở vị trí số 1" (Đếm tần số và tính tỷ lệ phần trăm).

Câu hỏi 2:

* Đề bài: "What is your total household income?" (Tổng thu nhập gia đình của bạn là bao nhiêu?).
* Đáp án: Thang đo Tỷ lệ (Ratio Scale).
* Giải thích từ người giảng:
   * Khái niệm tiền đô-la có điểm \(0\) tuyệt đối/có ý nghĩa (\(0\) đô-la nghĩa là không có thu nhập).
* Phát biểu HỢP LỆ:
   * ✅ Phát biểu HỢP LỆ: "Số hộ gia đình có thu nhập trung bình dưới \($9,999\) nhiều gấp 2 lần (twice as many) số hộ có thu nhập từ \($40,000\) trở lên". Việc tính giá trị trung bình và so sánh bội số gấp 2 lần là hoàn toàn hợp lệ.

Câu hỏi 3:

* Đề bài: "How satisfied are you with the service of Toyota dealers in your area? (Options: Very Dissatisfied, Dissatisfied, Neutral, Satisfied, Very Satisfied)" (Bạn hài lòng thế nào với dịch vụ đại lý Toyota trong khu vực?).
* Đáp án: Thang đo Khoảng (Interval Scale).
* Giải thích từ người giảng:
   * Khoảng cách giữa các mức lựa chọn được giả định là đồng nhất, nhưng không có điểm \(0\) tuyệt đối.
* Phát biểu HỢP LỆ & KHÔNG HỢP LỆ:
   * ❌ Phát biểu KHÔNG HỢP LỆ: "Khách hàng ở Pittsburgh có điểm trung bình \(4.5\) hài lòng GẤP ĐÔI (twice as satisfied) so với khách hàng ở Monroeville có điểm \(2.3\)". (Vì thang đo khoảng không có điểm \(0\) thực sự; nếu chuyển thang sang \(-2\) đến \(+2\), điểm \(4.5\) trở thành \(+1.5\) và \(2.3\) trở thành \(-0.7\), làm phép nhân gấp đôi trở nên vô nghĩa).
   * ✅ Phát biểu HỢP LỆ: "Điểm hài lòng trung bình của khách hàng đại lý Pittsburgh là \(4.5\), cao hơn so với đại lý Monroeville là \(2.3\)". (Tính giá trị trung bình và so sánh hơn/kém là hợp lệ).

Câu hỏi 4:

* Đề bài: "Which of the following courses have you taken? (Check boxes: Marketing Research, Data Driven Marketing, Marketing Strategy, Internet Marketing...)" (Bạn đã học những khóa học nào dưới đây?).
* Đáp án: Thang đo Định danh (Nominal Scale).
* Giải thích từ người giảng:
   * Đây là dạng câu hỏi tích chọn danh mục (chỉ phân loại có/không), không có thứ tự hay hơn kém.
* Phát biểu HỢP LỆ & KHÔNG HỢP LỆ:
   * ❌ Phát biểu KHÔNG HỢP LỆ: "Môn Marketing Research là môn tự chọn được học nhiều nhất vì số trung vị lựa chọn là 3.2" (Thang định danh không thể tính trung vị hay trung bình).
   * ✅ Phát biểu HỢP LỆ: "\(70%\) người tham gia cho biết họ đã học môn Marketing Research, trong khi chỉ có \(40%\) học môn Internet Marketing" (Đếm tần số và so sánh tỷ lệ phần trăm).

F. KHOẢNG TRỐNG
Dưới me là các mục trong yêu cầu mà các video YouTube đang được chọn không đề cập đến:

1. Công thức toán học lý thuyết chính thức cho kiểm định độ tin cậy Cronbach's Alpha: Các video bài giảng đề cập đến độ tin cậy trong nghiên cứu định tính (triangulation, member checking) và kiểm định KMO/EFA trong SPSS, nhưng không trình bày công thức đại số Cronbach's Alpha.
2. Kỹ thuật tính toán ma trận xoay (Rotated Component Matrix / Varimax) bằng tay: Video hướng dẫn thực hành và thao tác trên phần mềm SPSS chứ không trình bày công thức biến đổi ma trận đại số tuyến tính bằng tay.
3. Mã mốc thời gian (Timestamps): Transcript của các video YouTube trong nguồn không chứa mã thời gian (phút:giây), do đó các đoạn trích dẫn được neo bằng chỉ số trích dẫn nguồn `[i]` tương ứng.
