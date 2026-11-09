# HỒ SƠ MÔN HỌC – [PHIÊN B]

**Môn:** EVM1110E – Quản trị mối quan hệ trong tổ chức sự kiện (Stakeholders Management for Events)

**Ngày lập:** 9/11/2026

**Phạm vi rà soát:** phiên Claude Code trên repo `dnbaoquyen/teaching-skills`, nhánh `claude/busy-mccarthy-wsbyzs`.

## 0. Quy ước, nguồn và giới hạn của hồ sơ

### 0.1. Ký hiệu nguồn

| Ký hiệu | Là gì | Mức tin cậy khi trích "nguyên văn" |
|---|---|---|
| **TN#n (ngày)** | Tin nhắn thứ n của GV trong phần transcript còn lưu đầy đủ (15/10 → 9/11/2026), kể cả tin gửi giữa lượt (ghi "giữa lượt") | Nguyên văn |
| **TT1** | Bản tóm tắt tự động ở đầu transcript (che phần phiên trước 15/10) | Câu trong ngoặc kép là nguyên văn được TT1 giữ lại; phần còn lại là tóm tắt |
| **TT2** | Bản tóm tắt tự động ngày 9/11 (che 15/10 → 9/11) | Dùng để đối chiếu; ưu tiên TN# |
| **[tệp]** | Quyết định GV mà Claude đã ghi vào tệp repo trong lúc làm việc, ví dụ `lessons/buoi-07_tu-lieu-tong-hop.md` | **Lời ghi lại của Claude, không phải nguyên văn GV**, trừ khi tệp đặt trong ngoặc kép |
| **CLAUDE.md** | Quy tắc của repo (không phải tin nhắn GV) | Nguyên văn |

### 0.2. Phần có thể bị thiếu (trung thực theo nguyên tắc 6)

1. **Toàn bộ giai đoạn soạn bài (khoảng 26/9 → 14/10/2026) đã bị nén qua nhiều lớp tóm tắt.** Giai đoạn này gồm đề cương, tư liệu và gói bài giảng 13 buổi, slide, đề thi, rubric, trắc nghiệm, tóm tắt LMS, hướng dẫn NotebookLM. Hệ quả:
   - Không còn nguyên văn phần lớn tin nhắn và góp ý của GV trong giai đoạn này.
   - Các quyết định chỉ còn dưới dạng Claude đã ghi vào tệp (ví dụ khối "Quyết định của GV (27/9/2026)").
   - Những lần GV chê hoặc bắt sửa trong giai đoạn này **có thể đã mất**. Sổ lỗi chỉ ghi được những lỗi còn dấu vết trong tệp hoặc trong TT1.
2. **Không thấy được tin nhắn đầu tiên của toàn phiên.** Transcript hiện có bắt đầu bằng TT1, và TT1 lại dẫn tới một "prior summary" không còn lưu.
3. **Các tệp GV đã tải lên:**
   - **Còn nhắc tên:** đề cương gốc, slide bộ môn Chương 1–5, 2 Google Sheet NotebookLM, đề thi chính thức, `Kiểm_tra_cá_nhân_Responses.xlsx`, 7 bài SMP, 2 tệp `Thi_cuối_kì*.xlsx`.
   - **Không còn trong phiên:** nội dung đầy đủ của các tệp tải lên ở giai đoạn soạn bài.
4. **Không có hồ sơ GV duyệt từng gói bài giảng W02–W13 sau khi soạn.** Các tệp ghi "chờ GV xác nhận". Passport chỉ ghi W01 `confirmed_by_professor: true`.

### 0.3. Bảo vệ dữ liệu sinh viên (theo CLAUDE.md)

- Tên sinh viên trong lời trích được thay bằng **[SV-1], [SV-2]**.
- Tên các nhóm khóa trước (đặt theo khách hàng của nhóm) được thay bằng **[Nhóm 1]…[Nhóm 7]**.
  - [Nhóm 7] là nhóm không ghi số nhóm.
  - Thay đổi duy nhất trong các câu trích là ở những chỗ này.
- Hồ sơ không ghi điểm của từng sinh viên.

## 1. Thông tin chung

**Đối tượng người học** [PHIÊN B]
- Sinh viên chuyên ngành Quản trị sự kiện, đã học EVM1103 và đã làm dự án sự kiện ở các môn trước.
- Khoảng 40 SV/lớp, khoảng 6 nhóm. Khóa trước nộp 7 bài SMP.
- Nguồn: passport `learner_profile`, `class_size`; TN#8.
- Năm học của sinh viên (năm 3 hay năm 4): [CHƯA CÓ THÔNG TIN] trong phiên B.

**Số tín chỉ, buổi, tiết** [PHIÊN B]
- 3 tín chỉ; 15 buổi; mỗi buổi 3 tiết = 135 phút.
- Số buổi mỗi tuần chưa xác nhận: passport ghi "1 buổi/tuần? — số buổi mỗi tuần chưa xác nhận".
- Nguồn: passport.

**Hình thức học** [PHIÊN B]
- Trực tiếp (`modality: in-person`).
- Tiếng Việt, giữ thuật ngữ tiếng Anh.
- Bài nộp qua LMS.
- Nguồn: passport.

**CLO (ánh xạ PLO)** [PHIÊN B]
- CLO1–CLO9, nguyên văn trong passport `learning_outcomes`.
  - LO1–LO3: theo khung đề cương.
  - LO4 có chú thích: "GV quyết định bỏ phạm vi 'nội bộ'".
  - LO8, LO9: "GV sẽ tự cân đối buổi đáp ứng".
- **Ánh xạ PLO và mức của từng CLO** (ví dụ 4/6, 3/5): [CHƯA CÓ THÔNG TIN] trong tệp phiên B. Các mức này chỉ còn trong TT2, chưa đối chiếu với đề cương.

**Giáo trình và tài liệu** [PHIÊN B]
- **Giáo trình chính:** tài liệu nội bộ UEF.
- **Tài liệu tham khảo chính:** Van Niekerk & Getz (2019).
- **Slide bộ môn Chương 1–5:** ThS. Trần Nguyễn Huỳnh Như.
- **GV cho phép đọc trực tiếp:** *Implementing KAM* (Marcos et al. 2018) và tài liệu Cranfield trên Drive.
- Nguồn: [tệp] `buoi-01_tu-lieu-tong-hop.md`, các quyết định 28/9 và 4/10.

**Đánh giá và tỉ trọng** [PHIÊN B]
- Chuyên cần (AM1) 10%.
- Bài tập (AM2) 20%.
- Giữa kỳ (AM3 + AM9) 20%: tổ chức ngoài giờ hoặc trên LMS.
- Cuối kỳ SMP (AM7 + AM9) 50%.
- Nguồn: passport `assessment_plan`, `policies.grading_scheme`.

**Bối cảnh trường/khoa** [PHIÊN B]
- Khoa Marketing, UEF.
- Đề cương áp dụng từ HK 1A 2025–2026; học kỳ đã dạy là HK1A 2026–2027.
- Nguồn: passport dòng 2; đề thi.

## 2. Cấu trúc nội dung

Mỗi buổi: 135 phút, khoảng ½ lý thuyết và ½ thực hành. Hai hoạt động chính là S3 và S6 (Buổi 1 dùng S4 và S6).

Gói bài giảng mỗi buổi gồm `lessons/WNN_lesson_plan.md`, `WNN_lecture_notes.md`, `WNN_slides_outline.md` và 2 phiếu hoạt động. Ngoài ra có `slides/WNN_slides.pptx` (kèm bản Roboto), tóm tắt LMS và hồ sơ bài giảng PDF.

**Nguồn của các mục tiêu:** câu chữ trong cột "Mục tiêu" chép từ mục "Mục tiêu cụ thể" của `WNN_lesson_plan.md`, có rút gọn.

| Buổi | Tên bài | Mục tiêu (cuối buổi SV có thể…) | Ý chính | Hoạt động | Trạng thái |
|---|---|---|---|---|---|
| 1 | Định hình hệ sinh thái các bên liên quan bên ngoài | Định nghĩa hệ sinh thái; phân loại primary/secondary có lập luận; đặt lên Grid và Salience; áp dụng cho khách hàng dự án cũ | Freeman; Clarkson; Mendelow (1981); Mitchell, Agle & Wood (1997) | S4 sơ đồ tư duy An Phát; S6 poster Grid + Salience, xoay trạm; S7 sửa poster | HOÀN THÀNH (GV duyệt, passport) |
| 2 | KAM Mindset & Key Account Selection | Phân biệt Sales và KAM; giải thích 3 tiêu chí; chấm ứng viên có trọng số | Homburg et al. (2002); khung Cranfield, cổng đồng đầu tư | S3 Sales hay KAM; S6 chọn Key Account | HOÀN THÀNH (gói đã soạn; tệp ghi "chờ GV xác nhận") |
| 3 | Understanding the Customer & Customer Journey | PESTEL và đối thủ **của Key Account**; hành trình 3 giai đoạn với 4 loại điểm chạm; GRASP | Lemon & Verhoef (2016); DMU; GRASP | S3 thế giới An Phát; S6 hành trình + DMU | HOÀN THÀNH* (định nghĩa chữ G chưa thống nhất, xem L01) |
| 4 | Measuring Relationship Quality | Trust, commitment, functional conflict; chẩn đoán và đo hai chiều | Morgan & Hunt (1994) nguyên văn; bộ câu hỏi của môn | S3 chẩn đoán; S6 cuộc trò chuyện sau gala | HOÀN THÀNH (chờ GV xác nhận) |
| 5 | CVP & Value Co-creation | Viết CVP theo Future state – 7Ps – Value appraisal; 5 nguồn giá trị; chu trình đồng kiến tạo | Marcos-Cuevas et al. (2016) | S3 viết lại CVP; S6 đồng kiến tạo | HOÀN THÀNH (chờ GV xác nhận) |
| 6 | Financial Acumen in KAM | Tính CLV; liệt kê cost-to-serve; ma trận biên × CTS | Công thức CLV của môn [VERIFY]; Shapiro (tên ô [VERIFY]) | S3 tính CLV; S6 ma trận CTS | HOÀN THÀNH* (cách diễn đạt "năm 1 chắc chắn" dễ hiểu sai, xem L02) |
| 7 | Understanding Procurement & Value-based Negotiation | Kraljic theo **hạng mục**; Procurement và Buying trong agency; đàm phán tích hợp | `W07_khung_goc_nhin.md` | S3 Kraljic; S6 đóng vai đàm phán | HOÀN THÀNH (soạn lại theo khung 27/9, xem L20) |
| 8 | Governing the KA Relationship & Multi-dimensional Performance Measurement | Bow-tie → Diamond; sơ đồ tiếp xúc; chỉ số kết quả/quá trình; ROI 5 và 6 cấp; đánh giá chung | Event ROI Institute; ROI Institute | S3 sơ đồ tiếp xúc; S6 đánh giá chung | HOÀN THÀNH (chờ GV xác nhận) |
| 9 | Resource Matching: Investors & Sponsors | Phân biệt nhà tài trợ và nhà đầu tư; đánh giá mức phù hợp; đề xuất win-win; ROI và ROO; gắn điểm chạm | Meenaghan (1983); Cornwell (2020) | S3 chọn nhà tài trợ; S6 bản đồ điểm chạm | HOÀN THÀNH (chờ GV xác nhận) |
| 10 | Building Solutions: Supplier & Venue Management | RFI/RFP/RFQ; bảng chấm điểm có trọng số; site check; phân bổ nhà cung cấp theo hành trình mua | Dowson et al. (2023); Silvers (2008) | S3 chấm hồ sơ khách sạn; S6 phân bổ nhà cung cấp | HOÀN THÀNH (chờ GV xác nhận) |
| 11 | Spreading Value: Media & Influencers | Phân loại KOL; bản đồ nhà báo; booking và điều khoản; đo lường | Luật Báo chí 2025, Luật Quảng cáo 2025; Barcelona Principles 4.0 | S3 chọn diễn giả/KOL; S6 khuếch đại trước sự kiện | HOÀN THÀNH (chờ GV xác nhận) |
| 12 | Leverage & Resolving Network Conflicts | Giá trị của hợp tác dài hạn; xung đột lợi ích; quy trình 5 bước; SCCT; phản biện SMP | Dyer & Singh (1998); Larson (2002); APEX ESG | S3 tuần cuối trước gala; S6 chạy thử SMP | HOÀN THÀNH (chờ GV xác nhận) |
| 13 | Building the SMP around the KAP (buổi xưởng) | Value Planning Framework E–A–B–C–D; ráp khung; viết D và E | Cranfield; Marcos Ch.3 | S3 ráp khung A–E; S6 viết D + E, Customer Board | HOÀN THÀNH (deck làm lại theo đề thi, commit 8fbd972) |
| 14–15 | Bảo vệ SMP trước "Customer Board" | — | Đề thi mục 5 | 30 phút/nhóm | Không có giáo án riêng (theo thiết kế) |

**Sản phẩm khác**

| Sản phẩm | Vị trí | Trạng thái |
|---|---|---|
| Đề cương hiệu chỉnh (bản sạch + track changes) | `syllabus/` | DỞ DANG: chưa ghi nhận GV duyệt (`confirmed_by_professor: false`) |
| Đề thi cuối kỳ SMP + rubric 11 tiêu chí | `assessments/EVM1110E_De_thi_cuoi_ky_SMP.docx` | DỞ DANG: còn 5 chỗ "[GV điền…]" (xem L28) |
| Trắc nghiệm cá nhân B1–B8 (10 câu, có đáp án) | `assessments/` | HOÀN THÀNH; đã chấm cho 27 SV khóa trước (TT1). Thành phần điểm tính vào: [CHƯA CÓ THÔNG TIN] |
| Bảng mô tả 44 mục con + hướng dẫn chấm NotebookLM | `assessments/notebooklm_cham_SMP/` | HOÀN THÀNH |
| Checklist tự rà soát SMP (47 câu) | `lessons/W13_checklist_tu_ra_soat_SMP.md` | HOÀN THÀNH |
| 13 tóm tắt LMS | `lms/` | HOÀN THÀNH (commit a00b4a9) |
| Bộ học liệu tổng hợp | `hoc_lieu/` | HOÀN THÀNH (commit a12f173) |
| Công cụ cho AM1, AM2, AM3 | — | CHƯA LÀM |
| Case study từ sự kiện thực tế | — | CHƯA LÀM (chờ GV gửi tài liệu, TN#37) |

## 3. Bộ yêu cầu cốt lõi

Cột "Nguyên văn":
- Đặt trong ngoặc kép: nguyên văn của GV.
- Ghi *[tệp – lời Claude ghi lại]*: không phải nguyên văn.

| Mã | Nhóm | Yêu cầu (nguyên văn) | Diễn giải | Mức độ | Nguồn |
|----|------|----------------------|-----------|------|-------|
| Y01 | Sư phạm | *[tệp – lời Claude ghi lại]* "Mỗi buổi 135 phút: ưu tiên ~1/2 lý thuyết, ~1/2 thực hành (quyết định GV)." | Khung thời gian chuẩn của mọi buổi | BẮT BUỘC | passport `institution_constraints` [PHIÊN B] |
| Y02 | Sư phạm | *[tệp]* "Bài tập trong buổi học làm và hoàn thiện ngay trên lớp, không giao về nhà, không tính điểm (quyết định GV, Buổi 1)." | Không giao bài về nhà; phiếu cuối giờ không chấm | BẮT BUỘC | passport [PHIÊN B] |
| Y03 | Sư phạm | *[tệp]* "Phòng học không dán được poster lên tường — hoạt động poster dùng bàn nhóm làm trạm." | Thay gallery walk bằng xoay trạm tại bàn | BẮT BUỘC (kiểm lại với phòng của lớp mới) | passport [PHIÊN B] |
| Y04 | Sư phạm | *[tệp]* "Không có mẫu giáo án bắt buộc; giáo án phải đủ nội dung học thuật và ứng dụng." | — | BẮT BUỘC | passport [PHIÊN B] |
| Y05 | Sư phạm | *[tệp]* Giữa kỳ AM3 + AM9 "tổ chức ngoài giờ/trên LMS, không chiếm buổi học — quyết định GV" | Không dành buổi học cho giữa kỳ | BẮT BUỘC | passport `assessment_plan` A3 [PHIÊN B] |
| Y06 | Sư phạm | *[tệp]* Dự án xuyên suốt: mỗi nhóm lấy khách hàng từ dự án sự kiện đã làm ở môn trước; mỗi buổi thêm một mảnh vào SMP | Đề thi: "không làm dự án mới" | BẮT BUỘC | passport `learner_profile`; đề thi mục 1 [PHIÊN B] |
| Y07 | Nội dung | *[tệp]* "PHẠM VI (quyết định GV): chỉ quản trị các bên liên quan BÊN NGOÀI. Quan hệ nội bộ (crew, nhân sự, tình nguyện viên) thuộc môn Quản lý đội nhóm…; quản lý đám đông/an toàn đám đông thuộc môn Quản trị rủi ro sự kiện." | Gặp nội dung nội bộ hoặc an toàn thì chỉ nhắc ranh giới, không dạy | BẮT BUỘC | passport [PHIÊN B] |
| Y08 | Nội dung | *[tệp]* "Quy tắc bắt buộc: mọi nội dung dùng agency perspective (nơi sinh viên sẽ làm việc); mọi đánh giá, phân loại, chiến lược đều xuất phát từ agency. Không trình bày bất kỳ phân tích nào từ góc nhìn của nhà cung cấp hoặc của phòng mua hàng khách hàng như một góc nhìn độc lập." | Key Account là bên quan trọng nhất; KAMer là người của agency | BẮT BUỘC | `W07_khung_goc_nhin.md` §5 QĐ3 (27/9); passport [PHIÊN B] |
| Y09 | Nội dung | *[tệp]* "Không đưa góc nhìn nhà cung cấp đánh giá agency (Supplier Preferencing) vào 7.1 — tránh làm sinh viên khó phân biệt." | — | BẮT BUỘC | `W07_khung_goc_nhin.md` QĐ2 [PHIÊN B] |
| Y10 | Nội dung | *[tệp]* Kraljic: "xếp ô theo hạng mục mua… rồi mới suy ra vị thế của nhà cung cấp… Yêu cầu: cân bằng giữa kiến thức học thuật và cách làm thực tế để sinh viên không hiểu sai." Ví dụ "phải là hạng mục cụ thể… (ví dụ 'ballroom 800 khách tháng 12')" | Nêu rõ lỗi "coi ma trận là bảng xếp loại nhà cung cấp"; kết quả xếp là ảnh chụp theo thời điểm | BẮT BUỘC | `W07_khung_goc_nhin.md` QĐ4 [PHIÊN B] |
| Y11 | Nội dung | *[tệp]* "Customer of choice" là "hành động của agency: gom chi tiêu, thu gọn danh mục nhà cung cấp, cam kết dài hạn" | — | BẮT BUỘC | `W07_khung_goc_nhin.md` QĐ5 [PHIÊN B] |
| Y12 | Nội dung (thuật ngữ) | *[tệp]* "giữ thuật ngữ gốc tiếng Anh cho ma trận Kraljic (Strategic, Leverage, Bottleneck, Non-critical; supply risk, profit impact), không đặt tên tiếng Việt chính thức; chỉ giải thích nghĩa bằng tiếng Việt lần đầu xuất hiện." | Áp dụng cho mọi mô hình | BẮT BUỘC | `W07_khung_goc_nhin.md` QĐ6 [PHIÊN B] |
| Y13 | Nội dung | *[tệp]* 7.3: "Customer (Buyer) = Key Account (client); KAMer = event agency." | — | BẮT BUỘC | `W07_khung_goc_nhin.md` QĐ1 [PHIÊN B] |
| Y14 | Nội dung | *[tệp]* Buổi 8: "dạy Bow-tie → Diamond như một lộ trình theo giai đoạn quan hệ… không trình bày theo kiểu 'Bow-tie sai, Diamond đúng'"; ROI "giới thiệu cả hai phiên bản (5 cấp… và 6 cấp…), kèm phân tích phiên bản nào phù hợp hơn với… Việt Nam" | Diamond chỉ ở mức "ai của agency gặp ai của Key Account"; không quản lý đội KAM | BẮT BUỘC | `buoi-08_tu-lieu-tong-hop.md` QĐ 27/9 [PHIÊN B] |
| Y15 | Nội dung | *[tệp]* Buổi 4: trụ cột theo "định nghĩa nguyên văn Morgan & Hunt (1994); functional conflict là kết quả của trust"; đo bằng "bộ câu hỏi đơn giản của môn… ghi rõ không phải thang đo đã kiểm định"; "không nêu tên giai đoạn khi chưa kiểm tra toàn văn" | — | BẮT BUỘC | `buoi-04` QĐ 28/9 [PHIÊN B] |
| Y16 | Nội dung | *[tệp]* Giữ **5 nguồn giá trị theo đề cương** "(vì đề thi chấm theo đề cương)", ghi chú mục thứ 6 của slide | — | BẮT BUỘC | `source_map.md` Q2; `buoi-01` QĐ 4/10 [PHIÊN B] |
| Y17 | Nội dung (nguồn) | *[tệp]* "giáo trình chính là tài liệu nội bộ UEF; Van Niekerk & Getz (2019) gọi là tài liệu tham khảo chính" | Đã sửa trong W01 (xem L24) | BẮT BUỘC | `buoi-01` QĐ3 (28/9) [PHIÊN B] |
| Y18 | Nội dung (nguồn) | *[tệp]* Marcos et al. (2018): "dùng làm tài liệu đọc thêm" **[ĐÃ THAY THẾ]** → GV "cho phép Claude đọc trực tiếp *Implementing KAM* và tài liệu Cranfield trên Drive" | Hiện hành: được đọc và trích trực tiếp | ƯU TIÊN | `buoi-02` QĐ2 (28/9) → `buoi-01` QĐ 4/10 [PHIÊN B] |
| Y19 | Nội dung (nguồn) | *[tệp]* Slide bộ môn: "Q1 được trích slide bộ môn (ThS. Trần Nguyễn Huỳnh Như)" | GRASP, CVP 3 phần, nguồn giá trị có nguồn nội bộ | BẮT BUỘC | `buoi-01` QĐ 4/10 [PHIÊN B] |
| Y20 | Nội dung (case) | *[tệp]* Case thật "chỉ nêu sự kiện đã đưa tin, không quy lỗi cá nhân"; GEM Center là "ví dụ vênh thông số, không nêu tên" | Mọi case thật | BẮT BUỘC | `buoi-12` QĐ6; `buoi-10` QĐ4 [PHIÊN B] |
| Y21 | Nội dung | *[tệp]* Buổi 10: PCCC/an toàn đám đông "chỉ nhắc 'hỏi giấy phép, sức chứa chính thức'"; đơn vị m² (sq ft ở chú thích); quy định mua sắm của Key Account "chỉ một câu… không đi sâu Luật Đấu thầu" | — | BẮT BUỘC | `buoi-10` QĐ3, 5, 7 [PHIÊN B] |
| Y22 | Nội dung | *[tệp]* Buổi 11: Barcelona Principles 4.0 "không dùng AVE"; đạo đức với nhà báo "một slide nguyên tắc… không bàn chi tiết thực tiễn nhạy cảm"; ngưỡng KOL "dạy như khoảng tham khảo" | Xử lý khủng hoảng do KOL hoặc nhà báo để sang Buổi 12 | BẮT BUỘC | `buoi-11` QĐ3, 5–7 [PHIÊN B] |
| Y23 | Nội dung | *[tệp]* Buổi 12: Leverage "không phải dùng quyền lực ép đối tác"; SCCT "chỉ dùng ở mức phối hợp bên liên quan"; bullwhip "một slide ngắn, ghi rõ là ẩn dụ" | — | BẮT BUỘC | `buoi-12` QĐ3, 5, 7 [PHIÊN B] |
| Y24 | Nội dung | *[tệp]* Buổi 9 góc nhìn hai lớp: nhà tài trợ là "đối tác của Key Account"; case concert "chỉ là lớp tham chiếu, luôn hỏi 'agency nhìn thấy gì và làm gì'"; dạy ROI + ROO | — | BẮT BUỘC | `buoi-09` QĐ2, 4 [PHIÊN B] |
| Y25 | Nội dung | *[tệp]* Buổi 6: CLV "công thức đơn giản… với ví dụ số giả định; `[VERIFY]` công thức trước khi lên slide"; ma trận Shapiro với trục biên gộp, "tên bốn ô giữ `[VERIFY]`"; thông điệp bilateral | — | BẮT BUỘC | `buoi-06` QĐ2, 3, 5 [PHIÊN B] |
| Y26 | Nội dung | *[tệp]* Buổi 5: HSSEQ "không đi sâu an toàn đám đông" | — | BẮT BUỘC | `buoi-05` QĐ4 [PHIÊN B] |
| Y27 | Nội dung (mạch truyện) | *[tệp]* "ở Buổi 1–6, chị Hạnh vẫn là GĐ Marketing An Phát; chuyển giao sang anh Minh ở Buổi 8"; quy mô An Phát "600 khách" | Giữ nhất quán khi soạn thêm | BẮT BUỘC | `buoi-01` QĐ2, 6 [PHIÊN B] |
| Y28 | Nội dung | *[tệp]* Buổi 13: ví dụ An Phát "chỉ trình bày bộ khung (2–3 dòng mỗi phần), không phát bài mẫu hoàn chỉnh"; "Không dùng số liệu Z05"; checklist "chỉ để sinh viên tự rà soát, không phải rubric chấm" | — | BẮT BUỘC | `buoi-13` QĐ4, 6, 7 [PHIÊN B] |
| Y29 | Quy trình | *[tệp]* Quy trình tư liệu GV giao (27/9): "chỉ tìm, chọn lọc, tổng hợp tư liệu… Không soạn bài giảng, slide, kịch bản"; "mọi số liệu… cần ≥ 2 nguồn độc lập; chỉ 1 nguồn → ghi 'chưa kiểm chứng chéo'"; "12–20 nguồn"; "Ưu tiên 2021 → nay" | Tư liệu trước, soạn bài sau; mỗi bước GV duyệt | BẮT BUỘC | `W07_khung_goc_nhin.md` §7 [PHIÊN B] |
| Y30 | Quy trình / điều cấm | "Trong đề cương đã bao gồm rubric chấm điểm. Về việc sử dụng AI: Cho phép, chỉ cần khai báo và phải hiểu bài thông qua việc trả lời được các câu hỏi vấn đáp. Tôi bổ sung thêm đề thi chính thức của môn này để bạn lấy thêm thông tin." | Chính sách AI hiện hành. Thay cho mức "D" Claude đề xuất **[ĐÃ THAY THẾ]** | BẮT BUỘC | `buoi-13` §8, nguyên văn GV 4/10/2026 [PHIÊN B] |
| Y31 | Định dạng (tài liệu SV) | "…hãy soạn cho tôi 13 tài liệu dùng để upload lên LMS cho sinh viên có thể nắm trọng tâm kiến thức (không bao gồm những slide như nghỉ giải lao, speaker note,...) kiểu tài liệu tóm tắt những kiến thức trọng tâm, tôi không muốn dùng nội dung bài trình chiếu để sinh viên dùng chung." | Tài liệu SV khác deck; không chứa ghi chú của GV | BẮT BUỘC | TT1 [PHIÊN B] |
| Y32 | Định dạng (chấm) | "Tạo cho tôi một hướng dẫn cấu hình cho sổ ghi chú NotebookLM để chấm điểm… kèm theo prompt chấm điểm bám sát đề thi và rubrik môn học. Điểm phải phân biệt được giữa 7 nhóm sinh viên của lớp." | Công cụ chấm phải phân hóa | BẮT BUỘC | TT1 [PHIÊN B] |
| Y33 | Định dạng (vấn đáp) | **Hiện hành:** "Làm lại phần câu hỏi vấn đáp cá nhân, mỗi cá nhân chỉ cần 1 câu hỏi, làm lại phần câu hỏi cá nhân cho cả nhóm 1, 3, 5". **[ĐÃ THAY THẾ]:** "…hãy đặt 2 câu hỏi chung để nhóm thảo luận và 6 câu hỏi cá nhân cho mỗi thành viên nhóm để chấm điểm vấn đáp." | 2 câu chung + 1 câu cá nhân/người | BẮT BUỘC | TN giữa lượt 15/10 09:15; TT1 [PHIÊN B] |
| Y34 | Định dạng (vấn đáp) | "Đối với các câu hỏi có thể đưa ra câu trả lời gợi ý" | Mỗi câu kèm "Gợi ý" hoặc "Cần nghe" | BẮT BUỘC | TN#4 (15/10) [PHIÊN B] |
| Y35 | Định dạng (vấn đáp) | "Tổng hợp lại danh sách 2 câu hỏi chung cho mỗi nhóm kèm câu hỏi cá nhân cho từng người. Thêm 1 câu hỏi vớt điểm" | — | BẮT BUỘC | TN#7 (15/10) [PHIÊN B] |
| Y36 | Định dạng (vấn đáp) | "Câu hỏi dự phòng (câu hỏi vớt) chỉ cần 1 câu với tư cách tương tự câu hỏi chung để nhóm có thể thảo luận với nhau." | Câu vớt là câu thảo luận nhóm, không phải câu cá nhân | BẮT BUỘC | TN#10 (17/10) [PHIÊN B] |
| Y37 | Sư phạm (vấn đáp) | "Nếu cho nhóm 6 cơ hội trình bày lại trong 5 phút để vớt điểm thì tôi cần hỏi câu gì cho nhóm trả lời? (Nhóm trả lời tốt câu hỏi chung 1, không trả lời được câu hỏi 2, 2 câu cá nhân không trả lời được)" | Câu vớt nhắm vào điểm yếu đã lộ ra khi vấn đáp | GỢI Ý | TN#6 (15/10) [PHIÊN B] |
| Y38 | Định dạng (chấm) | "Dựa vào bài làm của 7 nhóm, dựa vào rubrik và đề thi, hãy chấm điểm bài làm cho từng nhóm. Phải có nhận xét cụ thể, nhất là đối với những vấn đề nhóm chỉ liệt kê bề nổi do lạm dụng AI." | Nhận xét phải có bằng chứng và số trang. Không dùng công cụ phát hiện AI (CLAUDE.md) | BẮT BUỘC | TN#8 (15/10) [PHIÊN B] |
| Y39 | Định dạng (chấm) | "Dựa vào tất cả các nội dung bài giảng, đề cương, đề thi, rubrik,... để đối chiếu và chấm điểm thật chi tiết cho 7 nhóm." | Đối chiếu với kiến thức đã dạy, không chỉ với rubric | BẮT BUỘC | TN#12 (25/10) [PHIÊN B] |
| Y40 | Quy định thi | "…nhóm này vi phạm vi qui 1 nhóm phải có 4 thành viên trở lên…" | GV áp dụng nhóm tối thiểu 4 người, nhưng đề thi chưa ghi (L29) | BẮT BUỘC (cần ghi vào đề) | TN#13 (25/10) [PHIÊN B] |
| Y41 | Chấm (nghi vấn) | "…hãy chấm điểm thật kĩ trên từng câu từng chữ và tất cả các số liệu của nhóm." | Rà toàn văn khi có dấu hiệu không tự làm | BẮT BUỘC | TN#13 [PHIÊN B] |
| Y42 | Chấm (quyết định GV) | "Lấy mức điểm 5.8/10 cho [SV-1] và 5.4/10 cho [SV-2]. Hãy chấm điểm trên mức trần chặt chẽ nhất cho nhóm này" + "Điểm 5.8 và 5.4 của [SV-1] và [SV-2] được dùng cho điểm cuối kì." | GV quyết điểm; Claude căn trần chặt nhất có căn cứ | BẮT BUỘC (tiền lệ) | TN#14, TN#19 (25/10) [PHIÊN B] |
| Y43 | Chấm (quyết định GV) | "Lập bảng chấm điểm lại cho cả 7 nhóm với nhóm [Nhóm 6] phải áp dụng mức trần khắt khe nhất. Nhóm [Nhóm 3] và nhóm [Nhóm 5] sẽ được chấm nới lỏng hơn vì cả 2 nhóm này đều hiểu bài và có phần thi vấn đáp tối nhất… [Nhóm 3] làm tốt hơn [Nhóm 5]" | Kết quả vấn đáp được phép ảnh hưởng mức nới lỏng (xem L04) | BẮT BUỘC (tiền lệ) | TN#15 (25/10) [PHIÊN B] |
| Y44 | Chấm (giữa kỳ) | "Đọc kĩ tất cả các file, xem tỉ lệ đóng góp vào bài của từng thành viên để qui đổi thành số điểm tương ứng với điểm chấm cho nhóm tương ứng với tỉ lệ đóng góp 100%." | Điểm cá nhân = điểm nhóm × tỷ lệ đóng góp | BẮT BUỘC | TN#16 [PHIÊN B] |
| Y45 | Chấm (giữa kỳ) | "Tôi cần chấm điểm cho từng cá nhân cho phần thi giữa kì (không bao gồm tiêu chí từ 9 - 11) mà chỉ bao gồm phần trăm đóng góp… Nhóm nào không ghi tỉ lệ đóng góp thì mặc định thành viên nào cũng đóng góp 100%." | Giữa kỳ lấy từ bài viết | BẮT BUỘC | TN#17 [PHIÊN B] |
| Y46 | Chấm (thang) | "Chấm điểm nhóm theo thang điểm 10" **[ĐÃ THAY THẾ cho bước quy đổi]** → "Đưa điểm nhóm về thang điểm 30 (điểm cũ đang xx/10 thì bây giờ chuyển về tỉ lệ yy/30) tương ứng" | Thang 10 rồi ×3 | BẮT BUỘC | TN#18, TN#24 [PHIÊN B] |
| Y47 | Chấm (phân phối) | "Phân phối lại điểm của các nhóm với mức trần tối đa là 8.5 cho nhóm làm tốt nhất" + "Nhóm [Nhóm 5] 8.5 điểm." | Nhân mọi nhóm với cùng hệ số | BẮT BUỘC (tiền lệ) | TN#20, TN#21 [PHIÊN B] |
| Y48 | Định dạng (giữa kỳ) | "…kèm theo 1 câu nhận xét chung và chi tiết điểm số từng hạng mục (giống nhau giữa các thành viên), tỉ trọng đóng góp của từng thành viên." → "…không cần đưa ra so sánh liên quan đến phần vấn đáp vì tôi đang chấm điểm thi giữa kì. chỉ cần đưa ra thông tin kiểu mục A: x điểm, mục B: y điểm,... mục E: xxx điểm. Điểm nhóm: xxx điểm, tỉ lệ đóng góp: xxx%; tổng hợp: xxx điểm." | Mẫu báo điểm giữa kỳ; không lẫn vấn đáp | BẮT BUỘC | TN#21, TN#22 [PHIÊN B] |
| Y49 | Định dạng (làm tròn) | Giữa kỳ thang 10: "Điểm làm tròn 1 chữ số thập phân". Thang 30: "…thang điểm 30 làm tròn không số thập phân". Cuối kỳ: "Tính lại điểm, làm tròn đến hàng đơn vị, không tính số thập phân" | Mỗi bảng có quy tắc làm tròn riêng. Hỏi trước khi xuất | BẮT BUỘC | TN#23, TN#25, TN#35 [PHIÊN B] |
| Y50 | Chấm (cuối kỳ) | "Tổng điểm: 50 / Câu 1: 100% = 20 điểm / Câu 2: 100% = 20 điểm / Câu vớt: 100% = 20 điểm (Nhóm nào không để câu vớt thì không tính) / Cá nhân: 100% = 10 điểm … Nội dung: Điểm tính theo thang 30 điểm ở trên / Trình bày: Tạm để trống…" | Thang vấn đáp | BẮT BUỘC (tiền lệ) | TN#26 (25/10) [PHIÊN B] |
| Y51 | Quy định thi | "Lưu ý: Không tính điểm cho nhóm 6 và nhóm 4 vì không upload bài thi lên LMS theo qui định nên bị đánh dấu là vắng thi." + "Không cần chấm nhóm 6 và nhóm 4" | Không nộp lên LMS thì vắng thi | BẮT BUỘC (cần ghi vào đề) | TN#26; TN giữa lượt 25/10 12:31 [PHIÊN B] |
| Y52 | Chấm (cuối kỳ) | "Tôi bổ sung lại điểm đã điều chỉnh thêm phần thuyết trình (100% = 20 điểm)…" | Thuyết trình 20 điểm | BẮT BUỘC (tiền lệ) | TN#28 [PHIÊN B] |
| Y53 | Chấm (cuối kỳ) | "1. Vẫn nhân với tỉ lệ đóng góp 2. Không lo câu vớt sẽ làm điểm quá 100 vì chỉ khi không trả lời ổn câu hỏi chung mới được hỏi câu vớt." | Không đặt trần cho câu vớt | BẮT BUỘC | TN#30 [PHIÊN B] |
| Y54 | Chấm (cuối kỳ) | "Làm lại cách tính điểm bao gồm: Nội dung (tính điểm theo tỉ lệ đóng góp) + thuyết trình (điểm chung - không chia tỉ lệ đóng góp) + câu hỏi chung (không chia theo tỉ lệ đóng góp) + điểm cá nhân (điểm riêng của mỗi sinh viên)" | Công thức cuối kỳ hiện hành | BẮT BUỘC (tiền lệ) | TN#31 [PHIÊN B] |
| Y55 | Định dạng (báo điểm) | "Cách bạn để bảng hiện giờ khó copy vào nhận xét điểm cho từng nhóm và cá nhân. Hãy trình bày kiểu / Nhóm xxx / Điểm nội dung: xxx / Điểm thuyết trình: xxx / Điểm vấn đáp nhóm: xxx / Điểm vấn đáp cá nhâ: xxx / Tổng điểm: XXX" | Báo điểm dạng khối văn bản, không dùng bảng | BẮT BUỘC | TN#32 + TN#34 [PHIÊN B] |
| Y56 | Quy trình | "Hãy tổng hợp lại tất cả bài giảng, hướng dẫn, bài thi, đề thi,... của môn học này thành tập hợp học liệu đầy đủ." | — | Đã làm | TN#36 [PHIÊN B] |
| Y57 | Quy trình | "Tôi có proposal, báo giá chi tiết của 1 sự kiện thực tế… dựng thành ví dụ / case study cho môn học này thay cho ví dụ giả định giữa Nova và An Phát không?" | Treo, chờ tài liệu | GỢI Ý (ý tưởng) | TN#37 [PHIÊN B] |
| Y58 | Quy trình | "…tổng hợp tất cả các thông tin chi tiết… để tôi có thể nạp vào một phiên trao đổi mới mà không phải đưa bối cảnh và dữ liệu lại lần nữa." + "…nạp tất cả các thông tin có ở phiên chat đó mà phiên này không có…" | Hồ sơ chuyển giao | Đã làm | TN#38, TN#40 [PHIÊN B] |
| Y59 | Quy trình | "Lưu ý tất cả những chỗ nào trong prompt tôi đang yêu cầu ghi là Phiên A thì đều sửa thàng B giúp tôi." | Nhãn hồ sơ này là [PHIÊN B] | BẮT BUỘC | TN giữa lượt 9/11 [PHIÊN B] |
| Y60 | Định dạng (chung) | Trả lời tiếng Việt; chỗ chưa chắc ghi `[VERIFY]`, thông tin GV phải cung cấp ghi `[NEEDS PROFESSOR INPUT]` | — | BẮT BUỘC | CLAUDE.md; TT1 [PHIÊN B] |
| Y61 | Điều cấm | "Never recommend AI-detection tools as an integrity mechanism" | Áp dụng cả khi chấm nghi vấn AI | BẮT BUỘC | CLAUDE.md [PHIÊN B] |
| Y62 | Điều cấm | "No invented institutional policy, calendar dates, or learner context — ask or mark `[NEEDS PROFESSOR INPUT]`." | Ví dụ: quy định nộp trễ, lịch học | BẮT BUỘC | CLAUDE.md [PHIÊN B] |
| Y63 | Điều cấm | "Person-affecting outputs… are evidence-bound, draft-only… Student data never enters the Course Passport." | Điểm, nhận xét chỉ là bản nháp; dữ liệu SV không commit | BẮT BUỘC | CLAUDE.md [PHIÊN B] |
| Y64 | Quy trình | "Checkpoints per `shared/checkpoint_protocol.md` — the professor decides; surfaced defaults; 'just proceed' respected." | Mỗi bước trình GV duyệt | BẮT BUỘC | CLAUDE.md [PHIÊN B] |

## 4. SỔ LỖI

| Mã | Loại lỗi | Mô tả lỗi | Ví dụ cụ thể (trích đoạn sai) | GV đã phản hồi (nguyên văn) | Đã sửa thế nào | Đã sửa triệt để chưa | Quy tắc phòng tránh đề xuất |
|----|----------|-----------|------|------|------|------|------|
| L01 | Sai kiến thức / đánh giá không khớp | Tài liệu môn định nghĩa chữ G trong GRASP theo hai cách. Bản chấm đầu trừ điểm nhóm hiểu theo một cách | TT1 ghi quy tắc chấm: "GRASP with G written as the client role's goal (the course defines G as the agency's goal with that person) → A3 = 1". Trong khi W03 §3.2 và đáp án S6 lại định nghĩa G là mục tiêu **của khách** | Không có (Claude tự phát hiện) | Bản chấm sau chấp nhận cả hai cách hiểu: "Bản trước em trừ điểm các nhóm hiểu theo cách thứ nhất, như vậy là không công bằng" | **Chưa**: W03 và tóm tắt LMS Buổi 3 vẫn mâu thuẫn | Trước khi dạy và trước khi chấm, đối chiếu một định nghĩa ở mọi nơi (lecture notes, đáp án phiếu, tóm tắt LMS, bảng mô tả chấm). GV chốt một định nghĩa |
| L02 | Sai kiến thức / số liệu | Claude hiểu sai "năm 1 chắc chắn" thành "không chiết khấu năm 1", rồi tính lại CLV của một nhóm sai | "môn học coi năm 1 là chắc chắn. Tính theo cách của môn thì CLV khoảng 51,3 triệu thay vì 45,79 triệu" | Không có (Claude tự phát hiện) | Đính chính: "Công thức CLV của Buổi 6 chiết khấu cả năm 1. Chỉ Nhóm 6 khớp đúng công thức". Sửa bản câu hỏi vấn đáp. Khác quy ước không bị tính là sai | **Một phần**: tài liệu vẫn dùng cụm "năm 1 coi như chắc chắn" | Viết công thức kèm 1 ví dụ số từng năm. Ghi rõ "năm 1 không nhân r nhưng vẫn chia (1+d)". Kiểm CLV bằng script trước khi kết luận |
| L03 | Đánh giá không khớp mục tiêu | Bài viết của Nhóm 6 được xếp **cao nhất** (9,71/10), dù nhóm không đi học và không trả lời được vấn đáp. Rubric Phần I chỉ chấm sản phẩm, không chấm quá trình | Bảng nháp: "6 – [Nhóm 6] / 5,83 / 9,71 / Nối liền từ phân tích → nhu cầu → giải pháp…"; "Em tính lại độc lập 26 phép tính, tất cả đều khớp… Vì vậy em không thể trừ…" | "Xem lại nhóm [Nhóm 6], nhóm này vi phạm vi qui 1 nhóm phải có 4 thành viên trở lên, các thành viên không tham gia bất kì 1 buổi học nào… tôi không tin một sinh viên không hiểu bài lại có thể tự làm ra bài tập với mức độ chính xác cao hơn cả những sinh viên thường xuyên đi học." | Áp trần chặt nhất có căn cứ: Phần I còn 4,73/6. GV ấn định điểm cuối (TN#14). Phần II được phân bổ ngược để khớp | **Chưa** (lỗi ở thiết kế đánh giá): rubric vẫn để bài viết tốt kéo điểm lên dù không bảo vệ được | Thiết kế lại: (1) điều kiện "bảo vệ không đạt thì Phần I bị trần"; (2) phụ lục truy vết trang làm trên lớp là bắt buộc và có trọng số; (3) nộp lịch sử phiên bản và tệp tính toán; (4) ghi biên bản vấn đáp. Không dùng công cụ phát hiện AI |
| L04 | Đánh giá không khớp mục tiêu | Quy tắc nới lỏng minh bạch không tạo ra được thứ tự GV muốn ("[Nhóm 3] làm tốt hơn [Nhóm 5]") | "Phần I chưa thể hiện được ý '[Nhóm 3] làm tốt hơn [Nhóm 5]'… Phần I của [Nhóm 5] (5,51)" cao hơn [Nhóm 3] (5,30) | "Nhóm [Nhóm 5] 8.5 điểm." | GV quyết theo điểm Phần I. Claude đề xuất thể hiện thứ tự ở Phần II | Đã giải quyết cho khóa trước; **chưa** có quy tắc cho khóa mới | Chốt trước khi chấm: vấn đáp chỉ ảnh hưởng Phần II, hay được phép điều chỉnh Phần I, và theo quy tắc nào |
| L05 | Agent làm đúng yêu cầu cũ, GV đổi yêu cầu | Soạn 6 câu cá nhân/người. GV yêu cầu làm lại còn 1 câu | Yêu cầu gốc: "…6 câu hỏi cá nhân cho mỗi thành viên…" | "Làm lại phần câu hỏi vấn đáp cá nhân, mỗi cá nhân chỉ cần 1 câu hỏi, làm lại phần câu hỏi cá nhân cho cả nhóm 1, 3, 5" | Soạn lại: 1 câu/người, kết hợp 2 trong 3 tiêu chí 9/10/11 | Đã sửa | Với sản phẩm hàng loạt: làm mẫu 1 nhóm, GV duyệt rồi mới làm các nhóm còn lại |
| L06 | Agent bỏ sót | Câu hỏi vấn đáp ban đầu không kèm đáp án gợi ý | [CHƯA CÓ THÔNG TIN] trích đoạn bản đầu | "Đối với các câu hỏi có thể đưa ra câu trả lời gợi ý" | Mỗi câu thêm "Gợi ý" hoặc "Cần nghe" | Đã sửa | Câu hỏi đánh giá luôn kèm "Cần nghe" (tiêu chí đạt) |
| L07 | Định dạng không đúng ý GV | Câu dự phòng/câu vớt được soạn dạng cá nhân, không phải thảo luận nhóm | "Câu dự phòng chính là câu vớt điểm 5 phút: mỗi bạn trình bày một phần không do mình viết." | "Làm lại bộ 2 câu hỏi chung, câu hỏi cá nhân cho từng người. Câu hỏi dự phòng (câu hỏi vớt) chỉ cần 1 câu với tư cách tương tự câu hỏi chung để nhóm có thể thảo luận với nhau." | Còn 1 câu dạng thảo luận nhóm, đưa tình huống mới chạm điểm yếu | Đã sửa | Câu vớt = 1 câu nhóm, cùng dạng câu chung |
| L08 | Nội dung câu hỏi không phù hợp | Một câu cá nhân cho [Nhóm 7] yêu cầu "định lượng 1 giá trị bottom-line" bị GV yêu cầu đổi | "định lượng một giá trị bottom-line cho [khách hàng của Nhóm 7]" | "Đôi câu hỏi định lượng 1 giá trị bottom-line cho [khách hàng của Nhóm 7]" | Thay bằng câu đàm phán giảm 10% nối với CLV và bảng độ nhạy của chính sinh viên | Đã sửa. Lý do GV đổi: [CHƯA CÓ THÔNG TIN] | Câu cá nhân phải gắn số liệu có trong bài và phần sinh viên đã viết hoặc phải hiểu |
| L09 | Lỗi định danh | Không xác định được bài nào là Nhóm 3. Tên file, bìa bài và số nhóm lệch nhau (một bài tên file "Nhóm 1", bìa ghi "Nhóm 3") | Câu hỏi Claude: "Trong 6 bài em nhận được, không bài nào ghi rõ là 'Nhóm 3'…" | "Nhóm 3 là nhóm [Nhóm 3]" | Đổi tên theo GV; bài kia là Nhóm 1 | Đã sửa | Trước khi chấm: lập bảng định danh nhóm (số nhóm ↔ tệp ↔ danh sách Buổi 1) và xin GV xác nhận |
| L10 | Định dạng đầu ra | Báo điểm Phần I theo thang /6,0, không theo thang 10 | "Nhóm (điểm nhóm /6) … → Phần I cá nhân /6 (thang 10)" | "Chấm điểm nhóm theo thang điểm 10" | Đổi sang thang 10 | Đã sửa | Hỏi thang điểm trước khi xuất bảng |
| L11 | Agent thêm nội dung không cần | Bảng điểm giữa kỳ có so sánh với vấn đáp và kết quả cuối kỳ | "Con số này khác điểm cuối cô đã quyết trước đó… vì điểm đó đã gồm vấn đáp (tiêu chí 9–11)…" | "Làm lại phần chấm điểm cá nhân, không cần đưa ra so sánh liên quan đến phần vấn đáp vì tôi đang chấm điểm thi giữa kì. chỉ cần đưa ra thông tin kiểu mục A: x điểm…" | Làm lại đúng mẫu, bỏ phần vấn đáp | Đã sửa | Bảng điểm của kỳ nào chỉ chứa dữ liệu của kỳ đó. Ghi chú phụ đặt ở tin nhắn riêng |
| L12 | Định dạng (làm tròn) | Giữa kỳ hiển thị 2 chữ số thập phân | "Mục A 1,71 · Mục B 1,54 … → Điểm nhóm 8,50" | "Điểm làm tròn 1 chữ số thập phân" | Làm tròn 1 chữ số; dùng largest-remainder để các mục cộng đúng tổng | Đã sửa | Hỏi quy tắc làm tròn cho từng bảng |
| L13 | Hiểu sai yêu cầu | Cuối kỳ: phần nội dung không nhân tỷ lệ đóng góp, do Claude suy diễn từ câu chữ của GV | "Phần nội dung dùng điểm nhóm /30, như nhau cho mọi thành viên. Đúng theo cô mô tả 'điểm nhóm cộng thêm điểm vấn đáp cá nhân', nên không nhân tỷ lệ đóng góp." | "1. Vẫn nhân với tỉ lệ đóng góp" | Nhân lại tỷ lệ đóng góp | Đã sửa | Khi yêu cầu mới im lặng về một quy tắc đã chốt, giữ quy tắc cũ và hỏi trước khi bỏ |
| L14 | Hiểu sai / chưa đúng công thức | GV phải nêu lại công thức đầy đủ sau bản tính trước | Bản ngay trước: "Nội dung × tỷ lệ đóng góp … + Thuyết trình + Câu hỏi chung + 10 × % câu cá nhân" | "Làm lại cách tính điểm bao gồm: Nội dung (tính điểm theo tỉ lệ đóng góp) + thuyết trình (điểm chung - không chia tỉ lệ đóng góp) + câu hỏi chung (không chia theo tỉ lệ đóng góp) + điểm cá nhân (điểm riêng của mỗi sinh viên)" | Tính lại theo công thức GV | Đã sửa. **Điểm sai cụ thể của bản trước: [CHƯA CÓ THÔNG TIN]**. Có thể tin nhắn GV đến trước khi GV đọc bản đó | Viết công thức thành một dòng có ký hiệu và xin GV xác nhận trước khi tính |
| L15 | Định dạng đầu ra | Trình bày điểm bằng bảng, khó dán vào ô nhận xét LMS | Bảng "Nhóm \| Thành viên → Tổng" | "Cách bạn để bảng hiện giờ khó copy vào nhận xét điểm cho từng nhóm và cá nhân. Hãy trình bày kiểu…" | Đổi sang khối văn bản theo mẫu GV | Đã sửa | Kết quả gửi sinh viên dùng khối văn bản thuần, mỗi người một khối |
| L16 | Định dạng (làm tròn) | Cuối kỳ còn số thập phân | "[SV] 91,6 …" | "Tính lại điểm, làm tròn đến hàng đơn vị, không tính số thập phân" | Làm tròn từng phần; tổng = tổng các phần đã làm tròn | Đã sửa | Như L12 |
| L17 | Kỹ thuật (môi trường) | Không đọc được Google Sheets của GV | "Cả hai công cụ Google Sheets và Google Drive… đều báo không có quyền truy cập" | GV tải lên `.xlsx` (TN#27, TN#29) | Đọc tệp tải lên | Đã xử lý | Xin tệp `.xlsx` ngay từ đầu, hoặc nhờ GV chia sẻ cho tài khoản đang kết nối |
| L18 | Sai góc nhìn (lệch quy tắc agency) | Bản nháp Buổi 7 đặt 7.2 ở phía phòng mua hàng **của khách hàng**; phiếu hoạt động dùng tình huống lễ hội âm nhạc và đàm phán với phòng mua hàng khách hàng | *[tệp]* "Bản nháp hiện tại… đặt mục 7.2 ở phía phòng mua hàng của khách hàng và coi phần agency-là-người-mua là phụ — không khớp với khung này." | Nguyên văn: [CHƯA CÓ THÔNG TIN] (đã mất do tóm tắt). Kết quả là 6 quyết định GV ngày 27/9 (Y08–Y13) | Soạn lại trọn gói Buổi 7; thay hai phiếu cũ | Đã sửa (27/9) | Mọi buổi kiểm "ai đang nhìn, ai đang đánh giá ai" trước khi soạn; tham chiếu `W07_khung_goc_nhin.md` |
| L19 | Sai góc nhìn tái diễn | Deck W13 trình bày Kraljic sai khung (không phải agency là bên mua) | TT1: "Kraljic mis-framed in the W13 deck → fixed slide 19 and checklist item 22" | [CHƯA CÓ THÔNG TIN] (ai phát hiện, lời GV) | Sửa slide 19 và câu 22 của checklist | Đã sửa | Có kiểm tra tự động: mọi chỗ nhắc Kraljic phải có "hạng mục" và "agency mua" |
| L20 | Nguồn không xác thực (công cụ) | NotebookLM chép tên mục đề cương thành "bằng chứng" trích từ slide bộ môn | *[tệp]* "Nhiều câu NotebookLM ghi là trích từ slide nhưng thực chất chép lại tên mục trong đề cương"; ví dụ 2.2 "Sai nguồn", 8.3 "Sai nguồn", 13.2 "Sai nguồn" | Q1–Q5 được GV duyệt 4/10 | Claude đọc trực tiếp slide gốc; bỏ chọn `Introduction.pdf` khi chạy NotebookLM | Đã sửa cho tài liệu; **cảnh báo còn hiệu lực** | Không dùng cột "Bằng chứng" của NotebookLM khi chưa đối chiếu với bản gốc |
| L21 | Nguồn sai (trích dẫn) | W01 có các trích dẫn sai | *[tệp]* "sửa trích dẫn Mendelow 1981/ICIS"; "file Events and sustainability-1.pdf là… Holmes… (2015)… không phải 'Getz & Page (2012)'"; Van Niekerk & Getz ban đầu bị gọi là giáo trình chính | QĐ GV 28/9: "cập nhật nhẹ" | Sửa trong W01 | Đã sửa trong W01. **Chưa kiểm**: `source_map.md` mục 5–6 vẫn ghi "Getz & Page 2012" | Mọi trích dẫn phải đối chiếu trang bản quyền của tệp gốc |
| L22 | Agent tự ý thêm chi tiết | Deck W13 từng ghi "ba giảng viên" trong Customer Board, trong khi đề thi chỉ ghi "giảng viên" | *[tệp]* "Bỏ 'ba giảng viên' vì đề thi chỉ ghi 'giảng viên'" | [CHƯA CÓ THÔNG TIN] | Bỏ chi tiết | Đã sửa | Không thêm chi tiết tổ chức thi khi đề thi không ghi |
| L23 | Mâu thuẫn giữa các buổi | Số năm Nova làm với An Phát lệch nhau | *[tệp]* phiếu W07 S3 ghi "3 năm"; Buổi 3–4 ghi "4 năm" | Chưa có | Chưa sửa | **Chưa** | Lập "kinh thánh tình huống" (bảng dữ kiện cố định của Nova – An Phát) và kiểm mọi buổi theo bảng |
| L24 | Sai số lượng | Nói bảng mô tả có "45 mục con" | TT1: "'45 sub-items' miscount → corrected to 44" | [CHƯA CÓ THÔNG TIN] | Sửa thành 44 | Đã sửa | Đếm bằng script trước khi ghi số |
| L25 | Lỗi hình thức | Dấu backtick hiện nguyên văn trong tài liệu tóm tắt; cũng không rõ "Try again" của GV là phản hồi cho lỗi nào | TT1: "Backticks rendered literally in a summary" | "Try again" (bối cảnh: [CHƯA CÓ THÔNG TIN]) | Bỏ backtick; thêm hỗ trợ code vào `build_html.js`/`build_docx.js` | Đã sửa | Xem bản PDF/DOCX đã dựng trước khi gửi |
| L26 | Lỗi hình thức (dựng tài liệu) | Bảng bị tách do có dòng trống; hai bảng liền nhau bị dính; danh sách số đếm lại từ 1; danh sách lồng nhau; h4 | TT2 mục 4 | Không có | Sửa bằng regex, chèn đoạn ngăn, dùng `**n.**`, làm phẳng danh sách | Đã sửa | Tuân thủ quy tắc markdown của builder (ghi ở `00_BOI_CANH_CHUYEN_GIAO.md` mục 11) |
| L27 | Agent quên cập nhật | Passport chỉ có `activities`/`artifact_refs` cho W1; W2–W13 để trống | passport `schedule` W2–W13: `activities: []` | Chưa có | Chưa sửa | **Chưa** | Mỗi lần xong một gói bài giảng thì cập nhật passport ngay trong cùng commit |
| L28 | Tài liệu đánh giá chưa hoàn thiện | Đề thi `.docx` còn chỗ trống; quy định nộp trễ lệch với passport | Đề thi: "Xử lý bài nộp trễ: [GV điền theo quy định của Khoa/Trường]", độ dài, ngôn ngữ, cách áp AM9 đều "[GV điền…]". Passport: "trễ 1 ngày trừ 20%…" | Chưa có | Chưa sửa | **Chưa** | Trước khi phát đề: rà mọi "[GV điền]" và đối chiếu với passport |
| L29 | Quy định áp dụng không có trong đề | GV áp dụng "nhóm ≥ 4 thành viên" và "không upload LMS = vắng thi", nhưng đề thi không ghi | Đề thi chỉ ghi "theo danh sách đã chia ở Buổi 1" | TN#13, TN#26 (Y40, Y51) | Chưa sửa đề | **Chưa** | Mọi quy định dùng để trừ điểm hoặc loại bài phải nằm trong đề thi hoặc đề cương |
| L30 | Đánh giá mất phân hóa | TC7 bị trần ≤4 ở 6/7 bài, nên không còn phân biệt được bài tốt và bài kém | TT2 mục 5.1 | Không có | — | **Chưa** | Hướng dẫn và kiểm phụ lục bắt buộc ngay ở Buổi 13 (checklist). Cân nhắc tách thành mục "điều kiện nộp" |
| L31 | Dữ liệu điểm lệch nhau | Ghi chú phần trăm lệch với điểm tạm tính trong tệp GV (2 trường hợp) | "ghi chú '50%' nhưng điểm tạm tính 0,7"; "ghi chú '70%' nhưng điểm tạm tính là 0,8" | Không có phản hồi riêng | Claude lấy cột điểm tạm tính và báo GV | Không rõ GV đã kiểm chưa | Khi nhập điểm vấn đáp, chỉ dùng một cột |
| L32 | Agent tạo trùng lặp | Hai tệp bối cảnh song song (`00_BOI_CANH_CHUYEN_GIAO.md` của phiên B và `00_BOI_CANH_TONG_HOP.md` của phiên khác) | — | TN#40 yêu cầu gộp | Đã gộp vào `00_BOI_CANH_CHUYEN_GIAO.md` | Tệp cũ vẫn còn, chờ GV quyết xóa | Mỗi môn chỉ giữ một tệp bối cảnh |
| L33 | Kỹ thuật | `rm -f $R/*` bị chặn; một lệnh `cat >>` treo; Read `pages:"16,34"` không hợp lệ; LibreOffice không mở được docx/html | TT1 mục 4 | Không có | Dùng `"${R:?}"/*`; dừng task; đọc từng trang; dựng PDF bằng Chromium | Đã xử lý | Dùng đúng công cụ đã ghi trong hồ sơ bối cảnh |

## 5. Những gì đã làm tốt

**Đã được GV duyệt** (theo tệp; nguyên văn lời khen: [CHƯA CÓ THÔNG TIN])
- **Buổi 1:** gói W01 được duyệt, passport ghi `confirmed_by_professor: true`.
- **Tư liệu các buổi:** tư liệu Buổi 1–13 đều có dòng "Quyết định của GV — duyệt toàn bộ đề xuất".
- **Khung góc nhìn Buổi 7:** được GV xác nhận ("Cách hiểu ở mục 3 được xác nhận").
- **Cách dạy đề xuất ở Buổi 8:** mục 7.3 "đã được GV duyệt (27/9/2026)".

**Cách làm GV dùng tiếp, không yêu cầu sửa**
- Bảng mô tả 44 mục con có trần điểm; nhận xét có bằng chứng và số trang.
- Mục riêng ghi bằng chứng "bề nổi" cho từng nhóm: câu sót, đoạn chép lặp, khung áp sai đối tượng, mâu thuẫn, số không căn cứ.
- Quy tắc nới lỏng minh bạch, có nhật ký điều chỉnh.
- Kiểm lại độc lập mọi phép tính CLV của các nhóm.
- Câu cá nhân gắn với phần sinh viên **không** viết.

**Mẫu tiêu biểu 1: câu cá nhân thay thế (L08), đã được dùng.** Lời trích, tên đã ẩn:
> **[SV] (tiêu chí 9 và 11).** Trong phần đàm phán với [khách hàng] (p17, do [SV khác] viết), giả sử [khách hàng] đòi giảm 10% trên ngân sách 387,9 triệu. Agency đổi lại điều gì? Mức giảm này ảnh hưởng thế nào đến CLV 132,4 triệu mà bạn đã tính?
>
> Câu trả lời tốt cần có:
> - 10% tương đương khoảng 38,8 triệu.
> - Agency không giảm giá vô điều kiện mà đổi lấy một điều khác: thu hẹp phạm vi, điều kiện thanh toán tốt hơn, hoặc [khách hàng] cam kết hợp tác nhiều đợt.
> - Giá giảm làm biên đóng góp m giảm, nên CLV giảm.

**Mẫu tiêu biểu 2: quyết định khung Kraljic, đã duyệt 27/9.** Trích `W07_khung_goc_nhin.md`:
> Nói rõ trình tự hai bước: (1) agency xếp hạng mục theo hai trục supply risk và profit impact; (2) suy ra cán cân quyền lực với nhà cung cấp và chọn chiến lược quan hệ.
>
> Ví dụ minh họa phải là hạng mục cụ thể gắn với sự kiện của Key Account (ví dụ "ballroom 800 khách tháng 12"), không phải tên nhà cung cấp chung chung.

## 6. Quyết định đã chốt

1. **Phạm vi, góc nhìn, thuật ngữ:** chỉ dạy bên ngoài; mọi phân tích theo góc nhìn agency; giữ thuật ngữ gốc tiếng Anh (Y07–Y13).
2. **Cấu trúc buổi học:** ½ lý thuyết, ½ thực hành; bài tập làm tại lớp, không chấm; xoay trạm tại bàn; giữa kỳ tổ chức ngoài giờ (Y01–Y05).
3. **Chính sách AI** theo nguyên văn của GV ngày 4/10/2026 (Y30); không dùng công cụ phát hiện AI.
4. **Quyết định nội dung theo từng buổi** đã ghi trong tệp (Y14–Y28).
5. **Đề thi SMP và rubric 11 tiêu chí:**
   - thang mức: Xuất sắc 9–10 · Tốt 7–8 · Trung bình 5–6 · Kém 0–4;
   - Phần I 60%, Phần II 40%;
   - TC9–11 là điểm cá nhân.
6. **Vấn đáp:** 2 câu chung + 1 câu cá nhân/người + 1 câu vớt dạng thảo luận nhóm; mỗi câu có gợi ý (Y33–Y36).
7. **Tiền lệ cách tính điểm khóa trước** (Y44–Y55):
   - giữa kỳ: thang 10, phân phối lại để nhóm cao nhất được 8,5, ×3 sang thang 30, nhân tỷ lệ đóng góp;
   - cuối kỳ: nội dung × tỷ lệ đóng góp + thuyết trình 20 + câu chung 20/20 (+ câu vớt 20) + cá nhân 10;
   - báo điểm dạng khối văn bản; làm tròn theo từng bảng.
8. **Quy định thi GV đã áp dụng:** nhóm tối thiểu 4 thành viên; không upload lên LMS thì tính vắng thi (Y40, Y51). Hai quy định này chưa có trong đề (L29).
9. **Quy định nộp trễ:** passport ghi "trễ 1 ngày trừ 20%; không nộp trễ quá 3 ngày". Đề thi `.docx` chưa điền (L28).

## 7. Việc tồn đọng và ý tưởng chưa triển khai

**Cần GV quyết định**
- [NEEDS PROFESSOR INPUT] Chốt định nghĩa chữ G trong GRASP (L01).
- [NEEDS PROFESSOR INPUT] Nova làm với An Phát 3 năm hay 4 năm (L23).
- [NEEDS PROFESSOR INPUT] Điền đề thi: độ dài, nộp trễ, ngôn ngữ, cách áp AM9, hạn nộp. Thêm nhóm ≥4 thành viên và quy định vắng thi (L28, L29).
- [NEEDS PROFESSOR INPUT] Thiết kế lại để bài viết không bảo vệ được thì không kéo điểm lên (L03); quy tắc cho phép vấn đáp ảnh hưởng điểm (L04); khả năng phân hóa của TC7 (L30).
- [NEEDS PROFESSOR INPUT] Có chấp nhận Key Account là nhà tài trợ chưa ký cho một concept hay không (phát hiện khi chấm khóa trước).
- [NEEDS PROFESSOR INPUT] Trắc nghiệm B1–8 tính vào thành phần điểm nào; công cụ cho AM1, AM2, AM3.
- [NEEDS PROFESSOR INPUT] Lịch học kỳ mới (`term_calendar`), quy định chuyên cần, liêm chính, nộp trễ cho các bài ngoài SMP.
- [NEEDS PROFESSOR INPUT] Duyệt đề cương hiệu chỉnh; gắn CLO8, CLO9 vào buổi cụ thể.
- [NEEDS PROFESSOR INPUT] Quy định của Trường về việc tải bài sinh viên lên NotebookLM.
- [NEEDS PROFESSOR INPUT] Có xóa tệp trùng `00_BOI_CANH_TONG_HOP.md` không (L32).

**Claude có thể làm khi GV yêu cầu**
- Cập nhật passport `schedule` W2–W13 (L27).
- Rà các `[VERIFY]` còn lại.
- Sửa `source_map.md` mục 5–6 (L21).
- Lập "kinh thánh tình huống" Nova – An Phát (L23).

**Ý tưởng chưa triển khai**
- **Case study từ proposal và báo giá sự kiện thật (TN#37).** Đang chờ GV:
  - gửi tài liệu;
  - xác nhận quyền sử dụng;
  - chọn ẩn danh hay giữ tên;
  - chọn phạm vi: (a) thay toàn bộ; (b) chèn vào Buổi 3, 5, 6, 7, 10; (c) bộ case độc lập.
- **Khách mời (TLM2):** chưa có kế hoạch (*[tệp]* hồ sơ bối cảnh).

## Biên bản kiểm tra

**1. Số câu chỉ đạo hoặc góp ý tìm thấy: 53**
- 38 tin nhắn của GV còn nguyên văn trong transcript (TN#2–#40, gồm 3 tin gửi giữa lượt; không tính TN#1 và TN#39 là bản tóm tắt).
- 6 câu nguyên văn TT1 còn giữ lại.
- 1 câu nguyên văn GV ngày 4/10 trong tệp.
- 1 tin giữa lượt ngày 9/11 về nhãn Phiên B.
- 7 nhóm quyết định GV mà Claude ghi trong tệp: passport, `W07_khung_goc_nhin.md`, khối "Quyết định của GV" ở 12 tệp tư liệu (gộp theo chủ đề).

**2. Số câu đã ánh xạ: 50/53**
- Mục 3 có 64 dòng yêu cầu (gồm 5 dòng từ CLAUDE.md).
- Mục 4 có 33 lỗi. Có câu nằm ở cả hai mục, ví dụ TN#13 nằm ở Y40, Y41 và L03.

**3. Số lỗi ghi nhận: 33 (L01–L33)**
- 12 lỗi do GV phản hồi trực tiếp: L03, L05–L16.
- 8 lỗi Claude tự phát hiện: L01, L02, L09, L20–L22, L24, L31.
- 9 lỗi còn tồn tại hoặc thuộc thiết kế: L23, L27–L30, L32, cùng phần chưa triệt để của L01 và L02.
- Còn lại là lỗi kỹ thuật hoặc chỉ còn dấu vết trong tệp, không còn lời GV: L18, L19, L25.

**4. Các câu bị loại hoặc không đưa vào Mục 3, 4, kèm lý do**
- TN#2 "Tiếp tục đưa ra các câu hỏi cho nhóm 3", TN giữa lượt "Đưa ra các câu hỏi cho nhóm 1 trước", TN#5 "Đặt câu hỏi chung và câu hỏi cá nhân cho nhóm 6", TN#9 "Tóm tắt lại giúp tôi…": điều hướng tiến độ, không phải quy tắc. Nội dung đã nằm trong Y33–Y35.
- TN#27 và TN#29: chỉ gửi tệp đính kèm.
- TN#33: "[Request interrupted by user]", không có nội dung.

**5. Những phần chưa chắc chắn**
- **Giai đoạn soạn bài 26/9–14/10 không còn nguyên văn.** Các dòng *[tệp]* là lời Claude ghi lại, có thể lệch câu chữ của GV. Các lần GV chê hoặc sửa trong giai đoạn này có thể đã mất, nên Sổ lỗi phần soạn bài (L18–L25) **chưa đầy đủ**.
- **L14:** không xác định được bản tính trước sai ở điểm nào.
- **L19, L22, L24, L25:** không rõ GV hay Claude phát hiện.
- **Ánh xạ PLO và mức CLO:** chưa đối chiếu với đề cương trong phiên này.
- **Nhãn:** theo chỉ đạo giữa lượt của GV, toàn bộ nhãn dùng `[PHIÊN B]`, thay cho `[PHIÊN A]` trong mẫu.
- **Ẩn danh:** tên sinh viên và tên nhóm khóa trước được thay bằng nhãn (mục 0.3). Ngoài các chỗ này, câu trích giữ nguyên văn, kể cả lỗi chính tả của GV ("vi qui", "tối nhất", "Đôi", "nhâ", "thàng").
