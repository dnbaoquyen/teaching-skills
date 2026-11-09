# HỒ SƠ MÔN HỌC — [PHIÊN A]

**Môn:** Quản trị các mối quan hệ trong tổ chức sự kiện (EVM1110E – Stakeholders Management for Events)
**Phạm vi hồ sơ:** toàn bộ hội thoại của phiên A (session `01KLkwDpxn1QVeyYv1SKsfSs`), từ tin nhắn đầu tiên (26/9/2026) đến yêu cầu trích xuất này (9/11/2026), cùng các file đã tải lên và sản phẩm đã tạo trong phiên.
**Người lập:** Claude (agent của phiên A).

---

## 0. Ghi chú về phạm vi và độ đầy đủ

- **Không phát hiện phần nào của phiên bị tóm tắt.** Toàn bộ tin nhắn từ đầu phiên vẫn còn nguyên trong ngữ cảnh khi lập hồ sơ. Phần có thể thiếu: nội dung chi tiết của các file đã sinh ra (giáo án, ghi chú bài giảng) chỉ được tóm lược ở đây. Bản đầy đủ nằm trong repo `teaching-skills`, nhánh `claude/busy-mccarthy-wsbyzs`, thư mục `courses/EVM1110E/`.
- **Phân biệt nguồn.** Repo của môn còn chứa nhiều sản phẩm do **các phiên khác** làm: Buổi 2–13, slide, đề thi, rubric, hướng dẫn chấm NotebookLM, tóm tắt LMS. Những nội dung đó **không thuộc hội thoại phiên A**. Khi nhắc tới, hồ sơ gắn nhãn `[QUAN SÁT TỪ REPO – không thuộc hội thoại phiên A]`, để khi gộp hồ sơ không bị tính trùng hay gán nhầm nguồn.
- **Mã tin nhắn** dùng trong cột "Nguồn":

| Mã | Người gửi | Nội dung tóm tắt |
|---|---|---|
| T01 | GV | Tải đề cương `3.7_EVM1110E_QUAN_TRI_MOI_QUAN_HE_TRONG_TO_CHUC_SU_KIEN.docx`; yêu cầu đọc, ghi nhớ, trả lời "Đã hiểu" |
| T02 | GV | Trả lời 4 điểm chưa khớp của đề cương và 5 câu hỏi bối cảnh |
| T03 | GV | Trả lời 3 câu hỏi về dự án KAP, cách chia nhóm, quy định lớp |
| T04 | Hệ thống (stop hook) | Báo có file chưa commit — không phải tin nhắn của GV |
| T05 | GV | Yêu cầu hiệu chỉnh đề cương |
| T06 | GV | "Có." |
| T07 | GV | Duyệt Buổi 1; trả lời 4 câu hỏi |
| T08 | GV | Yêu cầu viết trọn bộ Buổi 7, kèm tài liệu học thuật Buổi 7 do GV soạn (gọi là **TL-GV-B7**) |
| T09 | GV | Hỏi Claude có tự tìm ví dụ trên internet được không |
| T10 | GV | Prompt quy trình tìm kiếm và tổng hợp tư liệu Buổi 7 (Bước 1–5) |
| T11 | GV | "Cách hiểu của bạn đang sai…" |
| T12 | GV | Chốt vai Customer/KAMer; bỏ góc nhìn nhà cung cấp; quy tắc agency perspective |
| T13 | GV | "Duyệt." (bảng Bước 1 đã sửa) |
| T14 | GV | Chọn mở quyền truy cập mạng, nhờ hướng dẫn |
| T15 | GV | Ảnh chụp ứng dụng điện thoại: "Thanh tiêu đề nằm chỗ nào?" |
| T16 | GV | Ảnh chụp claude.ai/code: vẫn không thấy chỗ chỉnh môi trường |
| T17 | GV | Ảnh chụp menu Local/Cloud/Remote Control: Default không chỉnh sửa được |
| T18 | GV | Hỏi có phải sang phiên mới không |
| T19 | GV | Hỏi prompt cho phiên mới; có cần nạp lại đề cương không |
| T20 | GV | Yêu cầu tổng hợp toàn bộ thông tin để nạp vào phiên mới (sắp có thêm 2 lớp) |
| T21 | GV | Yêu cầu trích xuất hồ sơ môn học này |

---

## 1. Thông tin chung `[PHIÊN A]`

*Nguồn: đề cương tải lên ở T01, trừ các mục có ghi nguồn khác.*

| Mục | Nội dung |
|---|---|
| Tên học phần | Tiếng Việt: QUẢN TRỊ MỐI QUAN HỆ TRONG TỔ CHỨC SỰ KIỆN · Tiếng Anh: STAKEHOLDERS MANAGEMENT FOR EVENTS · Mã: EVM1110E |
| Trường / khoa | Trường ĐH Kinh tế – Tài chính TP.HCM (UEF), Khoa Marketing. Mẫu đề cương BM…-QT04-UEF-PĐT23 |
| Trình độ | Đại học |
| Tín chỉ | 03 (03 lý thuyết, 00 thực hành) |
| Buổi / tiết | 15 buổi (Buổi 14 và 15 gộp một dòng). GV chốt: "Mỗi buổi học sẽ có 3 tiết" và "1 buổi dài 135 phút" (T02) |
| Học phần tiên quyết | Nhập môn quản trị sự kiện (EVM1103) |
| Hình thức học | Trực tiếp trên lớp. Bài nộp qua LMS (T03). Phương pháp TLM20 (e-learning) có trong đề cương |
| Đối tượng | Sinh viên chuyên ngành Quản trị sự kiện, đã làm dự án sự kiện ở các môn trước (T03). Sinh viên năm cuối (T10). Khoảng 40 SV, 6 nhóm tự chọn (T02, T03) |
| Ngôn ngữ | "Môn này giảng hoàn toàn bằng tiếng Việt" (T02) |
| Áp dụng | Đề cương ghi "Từ học kỳ 1A, năm học 2025 - 2026"; người biên soạn: ThS. Đinh Trần Thúy Vi; trưởng khoa: TS. Phan Bảo Giang |

**Mục tiêu học phần (CO, nguyên văn đề cương gốc):** CO1 kiến thức (vận dụng QTSK vào quản trị các mối quan hệ; truyền thông, marketing) · CO2 kỹ năng (tự nghiên cứu, tư duy phân tích – tổng hợp, hệ thống, phản biện, sáng tạo; làm việc nhóm) · CO3 tự chủ và trách nhiệm (đạo đức, kỷ luật nghề nghiệp, trách nhiệm xã hội).
Mục tiêu do GV phát biểu ở T01: "trang bị kiến thức và kỹ năng để xây dựng, duy trì, phát triển các mối quan hệ hiệu quả với tất cả các bên liên quan bên ngoài đến sự kiện."

**CLO và ánh xạ PLO** (đề cương gốc; mức năng lực / PLO):

| CLO | Nội dung tóm tắt | Mức | PLO |
|---|---|---|---|
| CLO1 | Vận dụng QTSK vào quản trị quan hệ với khách hàng (KAM) | 4/6 | PLO3 |
| CLO2 | Vận dụng QTSK để phân tích quan hệ đối tác và quan hệ khác | 4/6 | PLO3 |
| CLO3 | Giải thích kiến thức truyền thông, marketing cho quan hệ truyền thông, quảng bá | 4/6 | PLO3 |
| CLO4 | Tư duy phân tích, hệ thống, phản biện, sáng tạo trong quản lý quan hệ — gốc ghi "nội bộ tổ chức sự kiện"; **đã sửa thành "với các bên liên quan bên ngoài"** (T05) | 3/5 | PLO5 |
| CLO5 | Điều phối, phân tích, xử lý tình huống trong quan hệ đối tác và quan hệ khác | 3/5 | PLO5 |
| CLO6 | Phối hợp làm việc cùng các mối quan hệ | 3/5 | PLO6 |
| CLO7 | Ngoại ngữ chuyên môn và giao tiếp | 3/5 | PLO8 |
| CLO8 | Đạo đức, kỷ luật nghề nghiệp, trách nhiệm | 4/5 | PLO9 |
| CLO9 | Lập kế hoạch, điều phối, dẫn dắt chuyên môn | 4/5 | PLO10 |

Mức đóng góp của học phần cho PLO: PLO3 = 3, PLO5 = 3, PLO6 = 2, PLO8 = 2, PLO9 = 2, PLO10 = 2.
Ghi chú: trong đề cương, mọi buổi đều ghi đáp ứng CLO1–CLO7. **CLO8–CLO9 không gắn buổi nào**, nhưng bài thi cuối kỳ (50%) lại đánh giá CLO8–9. GV: "Tạm thời bỏ qua cái này, tôi sẽ tự cân đối sau" (T02).

**Phương pháp giảng dạy (đề cương):** TLM1 thuyết giảng · TLM2 khách mời · TLM3 câu hỏi gợi mở · TLM8 mô hình · TLM9 dự án · TLM11 học theo vấn đề · TLM12 tình huống · TLM13 brainstorm · TLM14 sơ đồ tư duy · TLM20 e-learning · TLM27 bài tập ở nhà. Khách mời: "Tạm thời chưa." (T02).

**Đánh giá và tỉ trọng (đề cương):**

| Thành phần | Nội dung | CLO |
|---|---|---|
| F1 Quá trình 30% | AM1 Chuyên cần 10% · AM2 Bài tập 20% | CLO2, CLO3 |
| F2 Giữa kỳ 20% | AM3 Thuyết trình · AM9 Đánh giá làm việc nhóm | CLO4–CLO7 |
| S Cuối kỳ 50% | AM7 Tiểu luận · AM9 | CLO8, CLO9 |

- Hình thức cuối kỳ do GV chốt: "các nhóm phải hoàn thiện được Stakeholder Management plan và phản biện trên nội dung đó" (T03).
- Rubric: phụ lục đề cương là rubric chung 6 mức (Xuất sắc 9–10 → Kém 0–3) theo nhóm năng lực.
- `[QUAN SÁT TỪ REPO – không thuộc hội thoại phiên A]`: đề thi cuối kỳ chính thức có rubric 11 tiêu chí; giữa kỳ tổ chức ngoài giờ/trên LMS; chính sách AI. Xem hồ sơ của phiên đã làm các nội dung đó.

**Giáo trình và tài liệu (đề cương):**
- Chính: tài liệu học tập nội bộ UEF *Stakeholders Management for Events*; Van Niekerk & Getz (2019) *Event Stakeholders*.
- Tham khảo: Holloway & Bryde (2016); Klikauer (2022, HRM — **đã bỏ** ở T05/T06); Getz (2019) (**bỏ vì trùng**, T06).
- Web: dspace.uef.edu.vn và 4 trang về stakeholder management.
- Tài liệu GV cung cấp trong phiên: **TL-GV-B7** (T08), với 13 nguồn kinh điển và mới (Kraljic 1983; Caniëls & Gelderman 2005, 2007; Gelderman & van Weele 2003; Homburg et al. 2002; McDonald et al. 1997; Schiele et al. 2012; Steele & Court 1996; Fontes et al. 2025; Kiambi & Zabel 2026; Papadopoulou-Kelidou et al. 2026; Pillai Sandesh et al. 2023; Vu 2025; Fakhreddin et al. 2025; Home Affairs Committee 2012; DOJ 2024; Wang 2025).

**Tự học:** đề cương gốc có 12 Topic + Review, tổng 153 giờ. GV: "Topic của phần tự học không chính xác" (T02). Đã sắp lại khớp với buổi học (xem Mục 2).

---

## 2. Cấu trúc nội dung `[PHIÊN A]`

### 2.1 Lộ trình 15 buổi theo đề cương đã hiệu chỉnh (sản phẩm phiên A, T05–T06)

| Buổi | Tên bài (đề cương hiệu chỉnh) | Trạng thái trong phiên A |
|---|---|---|
| 1 | Part 1 – Shaping the External Stakeholder Ecosystem (1.1 định nghĩa, đặc điểm; 1.2 Primary/Secondary; 1.3 Power-Interest Grid, Salience Model) | **HOÀN THÀNH** — GV "Duyệt" (T07) |
| 2 | KAM Mindset & Key Account Selection (2.1 Sales vs KAM; 2.2 ba tiêu chí: Customer Attractiveness, Supplier's Competitive Position, Willingness to co-invest) | **DỞ DANG** — mới có khung (arc) đề xuất, GV chưa duyệt, 2 câu hỏi chưa trả lời. `[QUAN SÁT TỪ REPO]` phiên khác đã soạn gói Buổi 2 |
| 3 | Understanding the Customer & Customer Journey (PESTEL & đối thủ của khách hàng; Customer Journey Mapping; DMU/GRASP) | **CHƯA LÀM** trong phiên A (`[QUAN SÁT TỪ REPO]` đã làm ở phiên khác) |
| 4 | Measuring Relationship Quality (Functional Conflict, Trust, Commitment; Transactional → Relational) | **CHƯA LÀM** trong phiên A |
| 5 | CVP & Value Co-creation (Future state, Offering 7Ps, Value appraisal; 5 nguồn giá trị; co-diagnosis, co-ideation, co-design, co-testing) | **CHƯA LÀM** trong phiên A |
| 6 | Financial Acumen in KAM (CLV; Cost-to-serve và Gross margin matrix) | **CHƯA LÀM** trong phiên A |
| 7 | Understanding Procurement & Value-based Negotiation (7.1 Kraljic; 7.2 Procurement vs Buying; 7.3 role-play Customer (Buyer) – KAMer, Risk vs Value) | **DỞ DANG** — bản nháp gói Buổi 7 `[ĐÃ THAY THẾ]`; khung góc nhìn **đã duyệt** (T12); bảng nhu cầu tư liệu Bước 1 **đã duyệt** (T13); Bước 2–5 **chưa làm được** vì mạng bị chặn. `[QUAN SÁT TỪ REPO]` phiên khác đã làm tư liệu và soạn lại gói |
| 8 | Governing the Key Account Relationship & Multi-dimensional Performance Measurement (8.1 Bow-tie → Diamond; 8.2 chỉ số results/process; 8.3 đánh giá chung, health check). **Đổi từ "KAM Team Operations"** | Đề cương: **HOÀN THÀNH** (GV "Xác nhận", T07). Giáo án: **CHƯA LÀM** trong phiên A |
| 9 | Resource Matching: Investors & Sponsors | **CHƯA LÀM** trong phiên A |
| 10 | Building Solutions: Supplier & Venue Management (RFP/RFQ, site check, phân bổ nhà cung cấp) | **CHƯA LÀM** trong phiên A |
| 11 | Spreading Value: Media & Influencers | **CHƯA LÀM** trong phiên A |
| 12 | Leverage & Resolving Network Conflicts | **CHƯA LÀM** trong phiên A |
| 13 | Building the SMP around the KAP (13.1 Value Planning Framework A–E; **13.2 mới**: tích hợp điều phối bên liên quan bên ngoài vào Value Delivery) | Đề cương: **HOÀN THÀNH** (T06 "Có"). Giáo án: **CHƯA LÀM** trong phiên A |
| 14–15 | Presentation & Plan Defense: trình bày **Stakeholder Management Plan (xây quanh KAP)** trước "Customer Board" | Đề cương: **HOÀN THÀNH**. Không có giáo án riêng |

**Bảng tự học sau hiệu chỉnh** (sản phẩm phiên A; tổng giữ 153 giờ): Topic 1–12 khớp lần lượt Buổi 1–12, REVIEW khớp Buổi 13–15. Số giờ: T1–T6 mỗi topic 9 giờ, T7 18, T8 9, T9 18, T10 9, T11 18, T12 18, REVIEW 9. Agent tự đổi giờ: T3 từ 18 xuống 9, T9 từ 9 lên 18 — xem Mục 7.

### 2.2 Buổi 1 — HOÀN THÀNH (đã duyệt T07)

- **Tên:** Định hình hệ sinh thái các bên liên quan bên ngoài.
- **Thời lượng:** 135 phút. Lý thuyết 59 phút, thực hành 65 phút, giải lao 8, dự phòng 3.
- **CLO:** CLO2, CLO4, CLO5, CLO6, CLO7 (CLO7 ở mức làm chủ thuật ngữ tiếng Anh).
- **Mục tiêu:**
  1. Định nghĩa và nêu ≥ 4 đặc điểm của hệ sinh thái bên liên quan bên ngoài.
  2. Phân loại primary/secondary có lập luận.
  3. Đặt các bên lên Grid và Salience Model, rút ra chiến lược.
  4. Áp dụng cho khách hàng dự án cũ, làm phần 1 của SMP.
- **Ý chính:**
  - Freeman (1984).
  - Hệ sinh thái so với danh sách; 6 đặc điểm (tạm thời; phụ thuộc lẫn nhau; mục tiêu xung đột; trao đổi giá trị; tầm quan trọng đổi theo giai đoạn; lây lan danh tiếng).
  - Primary/Secondary (Clarkson 1995). Lưu ý: tài liệu thường xếp nhân viên, tình nguyện viên vào primary nhưng **môn không xét**.
  - Power-Interest Grid (Mendelow) và Salience Model (Mitchell, Agle & Wood 1997; 7 loại; tính động: cư dân chuyển từ Dependent sang Definitive).

**Tiến trình (bản cuối):**

| Phút | Đoạn | Hoạt động |
|---|---|---|
| 0–5 | S1 Khởi động | "Sự kiện trục trặc vì ai, ngoài ban tổ chức?" |
| 5–17 | S2 Giới thiệu học phần | Phạm vi, bản đồ 4 phần, đánh giá, SMP, xác nhận danh sách 6 nhóm |
| 17–40 | S3 Lý thuyết 1 | 1.1 + 1.2, ví dụ mẫu An Phát |
| 40–55 | S4 Thực hành 1 | Sơ đồ tư duy phân loại các bên liên quan của tình huống giả định "Nova Events – Ngân hàng An Phát, hội nghị khách hàng thường niên" |
| 55–63 | Giải lao | |
| 63–85 | S5 Lý thuyết 2 | 1.3 |
| 85–118 | S6 Thực hành 2 | Poster Grid + Salience cho **khách hàng dự án cũ của nhóm**; xoay vòng trạm **tại bàn**; 1 câu hỏi + 1 phản biện |
| 118–125 | S7 | Sửa poster trên lớp theo phản biện (5 phút) + định hướng SMP (2 phút) |
| 125–132 | S8 | Phiếu kiểm tra cuối giờ (không chấm) |
| 132–135 | Dự phòng | |

- **File:** `lessons/W01_lesson_plan.md`, `W01_lecture_notes.md`, `W01_slides_outline.md` (25 slide), `W01_activity_S4_phan_loai_ben_lien_quan.md`, `W01_activity_S6_ban_do_quyen_luc.md`.
- `[QUAN SÁT TỪ REPO]` Phiên khác đã cập nhật nhẹ gói W01 (Mendelow 1981/ICIS, An Phát 600 khách, Van Niekerk & Getz là "tài liệu tham khảo chính") và dựng slide `.pptx`.

### 2.3 Buổi 2 — DỞ DANG (khung đề xuất, chưa duyệt)

| Phút | Đoạn | Nội dung |
|---|---|---|
| 0–5 | S1 Khởi động | "Ai đứng ở ô Manage Closely?" |
| 5–30 | S2 Lý thuyết 1 | Sales khác KAM |
| 30–45 | S3 Thực hành 1 | Phân loại 12 thẻ hành vi Sales hay KAM |
| 45–53 | Giải lao | |
| 53–80 | S4 Lý thuyết 2 | Ba tiêu chí, ma trận danh mục, ví dụ chấm An Phát |
| 80–115 | S5 Thực hành 2 | Chấm khách hàng dự án cũ; ghép cặp phản biện vai "Giám đốc kinh doanh hoài nghi" |
| 115–123 | S6 Tổng hợp | |
| 123–130 | S7 | Phiếu kiểm tra cuối giờ |

- Câu hỏi chưa được trả lời:
  1. Khách hàng dự án cũ không đủ điều kiện làm Key Account thì xử lý ra sao? Agent đề xuất (a): giữ khách hàng đó, viết kế hoạch "phát triển thành Key Account".
  2. Có dùng ví dụ thực tế của GV cho mục 2.1 không? `[CHƯA CÓ THÔNG TIN]`

### 2.4 Buổi 7 — DỞ DANG

- **Bản nháp `[ĐÃ THAY THẾ]`** (tạo sau T08, commit `1a88981`):
  - 7.1 xếp nhà cung cấp theo Kraljic.
  - **7.2 đặt ở phòng mua hàng của khách hàng** (Procurement/Buying phía client).
  - 7.3 đóng vai: phòng mua An Phát đòi giảm 15%, đội KAM Nova đàm phán; có thẻ vai, phiếu quan sát, biến cố.
  - **Có Supplier Preferencing** (Core/Development/Exploit/Nuisance) và câu hỏi cuối giờ "nhà cung cấp đó có lẽ xếp nhóm bạn vào ô nào của Supplier Preferencing".
  - Thực hành 1 dùng tình huống lễ hội âm nhạc 15.000 khách của TL-GV-B7.
  - Bị thay thế vì sai góc nhìn (Sổ lỗi L10).
- **Khung góc nhìn ĐÃ DUYỆT** (`lessons/W07_khung_goc_nhin.md`, T12):
  - Agency là chủ thể; Key Account là bên quan trọng nhất; nhà cung cấp là một nhóm bên ngoài agency quản trị.
  - 7.1: agency (người mua) dùng Kraljic để hiểu vị thế nhà cung cấp.
  - 7.2: Procurement và Buying là hai cấp **bên trong agency**. Buổi 10 mới đi sâu vào cấp thực thi.
  - 7.3: Customer (Buyer) là Key Account, KAMer là agency. Phân tích nhà cung cấp cho biết chỗ nào mang rủi ro, chỗ nào nhượng được, từ đó tách bạch Risk và Value.
- **Bảng nhu cầu tư liệu Bước 1 ĐÃ DUYỆT** (T13): các mục A, B1, B2, B3, C1, C2, D1, D2, D3, E (chi tiết ở mục 7 của file khung).
- **Bước 2–5:** không làm được trong phiên A vì công cụ đọc trang web bị proxy chặn.
- `[QUAN SÁT TỪ REPO]` Phiên khác đã làm Bước 2–5 (28 nguồn), soạn lại trọn gói Buổi 7 theo khung (commit `f511c8e`) và ghi thêm quyết định GV số 4–6 vào file khung (xếp ô theo hạng mục mua; "customer of choice" là hành động của agency; giữ thuật ngữ gốc).

### 2.5 Sản phẩm khác của phiên A

| Sản phẩm | Trạng thái |
|---|---|
| `course_passport.yaml` (hồ sơ học phần, lưu mọi quyết định) | HOÀN THÀNH, cập nhật nhiều lần |
| `syllabus/EVM1110E_De_cuong_hieu_chinh.docx` + `…_track_changes.docx` | HOÀN THÀNH. GV chưa xác nhận duyệt chính thức |
| `00_BOI_CANH_TONG_HOP.md` (hồ sơ bối cảnh cho phiên mới, T20) | HOÀN THÀNH. Gộp cả sản phẩm các phiên khác, có ghi rõ |
| Hướng dẫn mở quyền truy cập mạng (T14–T19) | Kết thúc bằng phương án mở phiên mới. Không rõ GV có sửa được môi trường không `[CHƯA CÓ THÔNG TIN]` |

---

## 3. Bộ yêu cầu cốt lõi `[PHIÊN A]`

| Mã | Nhóm | Yêu cầu (nguyên văn) | Diễn giải | Mức độ | Nguồn |
|----|------|----------------------|-----------|--------|-------|
| R01 | Nội dung chuyên môn | "trang bị kiến thức và kỹ năng để xây dựng, duy trì, phát triển các mối quan hệ hiệu quả với tất cả các bên liên quan bên ngoài đến sự kiện" | Mục tiêu môn: chỉ bên liên quan bên ngoài | BẮT BUỘC | T01 [PHIÊN A] |
| R02 | Quy trình | "Hãy đọc, ghi nhớ và trả lời 'Đã hiểu' để chúng ta bắt đầu soạn giáo án cho từng buổi." | Đọc toàn bộ đề cương trước; soạn giáo án theo từng buổi | BẮT BUỘC | T01 [PHIÊN A] |
| R03 | Quy trình | "Tạm thời bỏ qua cái này, tôi sẽ tự cân đối sau" | CLO8–9 chưa gắn buổi: GV tự xử lý; agent không tự gắn | BẮT BUỘC | T02 [PHIÊN A] |
| R04 | Nội dung chuyên môn | "Topic của phần tự học không chính xác. Nội dung của môn học này chỉ xoay quanh việc quản lí các mối quan hệ bên ngoài (External Stakeholder), tất cả những mối quan hệ bên trong sẽ được chuyển sang môn quản lí đội nhóm trong tổ chức sự kiện và những phần liên quan đến quản lí đám đông sẽ được chuyển sang môn quản trị rủi ro sự kiện." | Ranh giới với hai môn khác | BẮT BUỘC | T02 [PHIÊN A] |
| R05 | Điều cấm | "Loại bỏ tất cả nội dung liên quan đến quản lí nội bộ" | Không dạy quan hệ nội bộ (crew, nhân sự, TNV, quản lý đội KAM) | BẮT BUỘC | T02 [PHIÊN A] |
| R06 | Sư phạm | "Mỗi buổi học sẽ có 3 tiết. Ưu tiên 1 nửa thời gian là lí thuyết và 1 nửa thời gian là thực hành." | Cân đối ~50/50 | BẮT BUỘC (tỉ lệ: ƯU TIÊN) | T02 [PHIÊN A] |
| R07 | Sư phạm | "1 buổi dài 135 phút, 1 nửa thời gian là lí thuyết, 1 nửa thời gian là thực hành." | Tổng thời lượng mỗi buổi | BẮT BUỘC | T02 [PHIÊN A] |
| R08 | Sư phạm | "Môn này giảng hoàn toàn bằng tiếng Việt" | Tài liệu và lời giảng bằng tiếng Việt; thuật ngữ giữ tiếng Anh (thực hành của agent, được duyệt qua Buổi 1) | BẮT BUỘC | T02 [PHIÊN A] |
| R09 | Sư phạm | "Lớp có khoảng 40 người, 6 nhóm" | Thiết kế hoạt động cho 6 nhóm | BẮT BUỘC (theo lớp) | T02 [PHIÊN A] |
| R10 | Định dạng đầu ra | "Không có mẫu giáo án bắt buộc, miễn sao phải đảm bảo đủ cả nội dung học thuật và ứng dụng" | Mẫu tự do; mỗi buổi phải có cả học thuật lẫn ứng dụng | BẮT BUỘC | T02 [PHIÊN A] |
| R11 | Sư phạm | "Tạm thời chưa." (về khách mời TLM2) | Chưa bố trí khách mời | GỢI Ý | T02 [PHIÊN A] |
| R12 | Sư phạm | "Mỗi nhóm sẽ chọn 1 khách hàng từ dự án đã làm trong các môn học trước để phân tích, không làm dự án mới." | Dự án xuyên suốt dùng khách hàng cũ | BẮT BUỘC | T03 [PHIÊN A] |
| R13 | Đánh giá | "Hình thức thi cuối kì là các nhóm phải hoàn thiện được Stakeholder Management plan và phản biện trên nội dung đó" | Sản phẩm cuối là SMP + bảo vệ | BẮT BUỘC | T03 [PHIÊN A] |
| R14 | Sư phạm | "Sinh viên được chọn nhóm và đã chia nhóm xong." | Không dành thời gian chia nhóm | BẮT BUỘC | T03 [PHIÊN A] |
| R15 | Quy trình / đánh giá | "Lớp sẽ nộp bài trên LMS theo thời gian qui định." | Nộp bài qua LMS | BẮT BUỘC | T03 [PHIÊN A] |
| R16 | Nội dung chuyên môn | "Hiệu chỉnh lại nội dung của đề cương chi tiết, loại bỏ các nội dung còn liên quan đến internal stakeholder và quản trị rủi ro sự kiện." | Sửa đề cương theo R04–R05 | BẮT BUỘC | T05 [PHIÊN A] |
| R17 | Quy trình | "Có." | Đồng ý: sửa dòng AM7 thành SMP + bảo vệ; bỏ Getz trùng; làm bản track changes | BẮT BUỘC (đã thực hiện) | T06 [PHIÊN A] |
| R18 | Quy trình | "Duyệt" (Buổi 1) | Phê duyệt gói Buổi 1 | — (phê duyệt) | T07 [PHIÊN A] |
| R19 | Sư phạm | "Bài tập được làm trên lớp, không yêu cầu phải làm ở nhà, không tính điểm" | Không giao bài về nhà; bài tập trên lớp không tính điểm | BẮT BUỘC | T07 [PHIÊN A] |
| R20 | Sư phạm | "Phòng học không dán được poster" | Hoạt động poster làm trên bàn | BẮT BUỘC (theo phòng học) | T07 [PHIÊN A] |
| R21 | Nội dung chuyên môn | "Xác nhận" (hướng mới Buổi 8: quản trị quan hệ với Key Account thay quản lý nhân sự KAM) | Buổi 8 không có nội dung nội bộ | BẮT BUỘC | T07 [PHIÊN A] |
| R22 | Nội dung chuyên môn | "Viết trọn bộ buổi 7, sử dụng thêm nội dung bên dưới" | Dùng TL-GV-B7 làm nguồn | BẮT BUỘC (bản nháp đã thay thế, xem L10) | T08 [PHIÊN A] |
| R23 | Nội dung chuyên môn (nguồn) | "🔁 Suy luận chuyển giao: kết quả nghiên cứu ở ngành gần (khách sạn, nhà hàng, lữ hành) được người biên soạn chuyển sang ngành sự kiện." / "🔍 Lăng kính của bài giảng: tài liệu gốc không dùng Kraljic/KAM; cách đọc theo Kraljic/KAM là của người biên soạn." | Quy ước minh bạch nguồn trong TL-GV-B7; agent giữ nguyên khi dùng | ƯU TIÊN | T08 (TL-GV-B7) [PHIÊN A] |
| R24 | Nội dung chuyên môn (nguồn) | "Người biên soạn không tìm được nghiên cứu bình duyệt nào áp dụng trực tiếp ma trận Kraljic trong ngành sự kiện. Các case sự kiện trong bài là sự kiện có thật, được ghi nhận trong tài liệu, nhưng việc diễn giải chúng bằng Kraljic/KAM là công cụ sư phạm." | Minh bạch: tách sự kiện thật và cách diễn giải | ƯU TIÊN | T08 (TL-GV-B7) [PHIÊN A] |
| R25 | Nội dung chuyên môn (nguồn) | "Trước khi phát cho sinh viên, nên đối chiếu số trang và số tập với bản gốc qua thư viện, đặc biệt với ba bài đang ở dạng "Advance online publication"." | Kiểm tra trích dẫn trước khi phát | ƯU TIÊN | T08 (TL-GV-B7) [PHIÊN A] |
| R26 | Quy trình | "Ở bước này bạn chỉ tìm, chọn lọc và tổng hợp tư liệu. Không soạn nội dung bài giảng chi tiết, vì việc đó sẽ được yêu cầu ở một prompt riêng và sẽ dùng chính tài liệu tổng hợp bạn tạo ra ở đây làm đầu vào." | Tách bước tìm tư liệu và bước soạn bài | BẮT BUỘC | T10 [PHIÊN A] |
| R27 | Quy trình | "Đề cương là chuẩn duy nhất về phạm vi: chỉ tìm tư liệu phục vụ các mục tiêu học tập, nội dung và hoạt động đã ghi trong đề cương Buổi 7." | Đề cương quyết định phạm vi | BẮT BUỘC | T10 [PHIÊN A] |
| R28 | Nội dung chuyên môn | "Báo cáo ngành: báo cáo và khảo sát của hiệp hội, tổ chức nghiên cứu thị trường, công ty tư vấn, nền tảng công nghệ sự kiện về ngành sự kiện, MICE, du lịch, mua hàng và chuỗi cung ứng." | Loại tư liệu 1 | ƯU TIÊN | T10 [PHIÊN A] |
| R29 | Nội dung chuyên môn | "Bài báo và bài viết chia sẻ kiến thức: báo chí kinh doanh, tạp chí ngành, blog và bài viết của chuyên gia hoặc doanh nghiệp trong ngành." | Loại tư liệu 2 | ƯU TIÊN | T10 [PHIÊN A] |
| R30 | Nội dung chuyên môn (case) | "Case study phù hợp: tình huống có thật, cả thành công lẫn thất bại, ưu tiên ngành sự kiện, sau đó đến các ngành dịch vụ gần như khách sạn, du lịch, lễ hội, giải trí. Tìm cả case quốc tế và case tại Việt Nam." | Thứ tự ưu tiên ngành; có case Việt Nam | BẮT BUỘC | T10 [PHIÊN A] |
| R31 | Nội dung chuyên môn | "Ưu tiên thông tin từ năm 2021 đến nay. Tư liệu cũ hơn chỉ dùng khi đó là tình huống kinh điển được nhắc đến rộng rãi." | Độ mới của tư liệu | ƯU TIÊN | T10 [PHIÊN A] |
| R32 | Quy trình | "Đọc đề cương Buổi 7. Liệt kê các mục hoặc chủ đề cần tư liệu, và với mỗi mục ghi rõ cần loại tư liệu gì (khái niệm, số liệu, ví dụ, case study, tư liệu cho hoạt động trên lớp)." | Bước 1 | BẮT BUỘC | T10 [PHIÊN A] |
| R33 | Quy trình | "Với từng mục, lặp lại chu trình: xác định thông tin còn thiếu → tìm kiếm bằng từ khóa tiếng Anh và tiếng Việt → đọc nguồn → đánh giá độ phù hợp và độ tin cậy → ghi lại dữ kiện kèm nguồn. Chuyển sang mục tiếp theo khi mục hiện tại đã có đủ tư liệu, hoặc khi tìm thêm không còn cho thông tin mới." | Bước 2 | BẮT BUỘC | T10 [PHIÊN A] |
| R34 | Nội dung chuyên môn (nguồn) | "Kiểm chứng: mọi số liệu và mọi khẳng định về một sự kiện hoặc doanh nghiệp có thật phải được xác nhận bởi ít nhất hai nguồn độc lập. Nếu chỉ có một nguồn, ghi "chưa kiểm chứng chéo". Nếu các nguồn mâu thuẫn nhau, ghi rõ sự mâu thuẫn đó." | Kiểm chứng chéo ≥ 2 nguồn | BẮT BUỘC | T10 [PHIÊN A] |
| R35 | Quy trình | "Chọn lọc: giữ khoảng 12–20 nguồn chất lượng nhất cho toàn Buổi 7. Mỗi mục trong đề cương phải có ít nhất một tư liệu, trừ khi thật sự không tìm được." | Số lượng nguồn; phủ mọi mục | BẮT BUỘC | T10 [PHIÊN A] |
| R36 | Định dạng đầu ra | "Biên soạn tài liệu tổng hợp theo cấu trúc dưới đây và lưu thành một file Markdown, tên gợi ý: buoi-07_tu-lieu-tong-hop.md." + 6 mục: bảng đối chiếu đề cương – tư liệu; thẻ nguồn S01…; tóm tắt case 150–300 từ; số liệu và xu hướng; khoảng trống tư liệu; danh mục APA 7 | Cấu trúc file tư liệu | BẮT BUỘC | T10 [PHIÊN A] |
| R37 | Định dạng đầu ra | "Văn phong: tiếng Việt, súc tích, dạng ghi chú nghiên cứu để dễ tra cứu khi soạn bài. Giữ thuật ngữ tiếng Anh và giải thích tiếng Việt khi xuất hiện lần đầu." | Văn phong tư liệu | BẮT BUỘC | T10 [PHIÊN A] |
| R38 | Điều cấm | "Không soạn nội dung bài giảng, slide hoặc kịch bản giảng dạy ở bước này." | | BẮT BUỘC | T10 [PHIÊN A] |
| R39 | Điều cấm | "Không tìm tư liệu nằm ngoài phạm vi đề cương Buổi 7, và không tự thay đổi hay bổ sung mục mới vào đề cương." | | BẮT BUỘC | T10 [PHIÊN A] |
| R40 | Điều cấm | "Không bịa đặt nguồn, số liệu, trích dẫn, tên người, tên doanh nghiệp, sự kiện hoặc đường dẫn. Chỉ ghi lại những gì bạn thực sự đã tìm thấy và đọc được." | | BẮT BUỘC | T10 [PHIÊN A] |
| R41 | Điều cấm | "Không trình bày suy luận của bạn như dữ kiện. Khi tự liên hệ một tư liệu với nội dung bài giảng, ghi rõ đó là "Nhận định của người tổng hợp"." | | BẮT BUỘC | T10 [PHIÊN A] |
| R42 | Điều cấm | "Không dùng trang tổng hợp nội dung không rõ nguồn gốc hoặc bài quảng cáo trá hình làm căn cứ duy nhất cho một khẳng định." | | BẮT BUỘC | T10 [PHIÊN A] |
| R43 | Điều cấm | "Không sao chép nguyên văn các đoạn dài. Chỉ tóm tắt và dẫn đường link." | | BẮT BUỘC | T10 [PHIÊN A] |
| R44 | Quy trình | "Bây giờ hãy bắt đầu bằng việc đọc đề cương Buổi 7 và thực hiện bước 1." | Làm tuần tự, dừng sau Bước 1 để duyệt | BẮT BUỘC | T10 [PHIÊN A] |
| R45 | Nội dung chuyên môn (góc nhìn) | "góc nhìn phải xuất phát từ agency và supplier là một trong những stakeholder bên ngoài mà agency cần quản lí bên cạnh stakeholder quan trọng nhất là key account." | Agency là chủ thể; Key Account quan trọng nhất; supplier là một nhóm bên ngoài | BẮT BUỘC | T11 [PHIÊN A] |
| R46 | Quy trình | "Trước khi bắt đầu soạn thảo nội dung bài giảng, hãy ghi lại cách bạn hiểu về vai trò, góc nhìn, mối quan hệ của các bên để tôi duyệt trước." | Trình bày cách hiểu, chờ GV duyệt rồi mới soạn | BẮT BUỘC | T11 [PHIÊN A] |
| R47 | Nội dung chuyên môn (vai) | "Customer là key account (client), KAMer là event agency." | Định nghĩa vai trong 7.3 và toàn môn | BẮT BUỘC | T12 [PHIÊN A] |
| R48 | Điều cấm | "Không đưa góc nhìn nhà cung cấp đánh giá agency vào mục 7.1 vì sẽ làm sinh viên khó phân biệt." | Không dùng Supplier Preferencing | BẮT BUỘC | T12 [PHIÊN A] |
| R49 | Nội dung chuyên môn (góc nhìn) | "Do đó, mọi nội dung phải sử dụng agency perspective (nơi sinh viên sẽ làm việc) và tất cả các đánh giá phải từ gốc này mà ra." | Quy tắc góc nhìn cho toàn môn | BẮT BUỘC | T12 [PHIÊN A] |
| R50 | Quy trình | "Duyệt." (bảng nhu cầu tư liệu Bước 1 đã sửa) | Phê duyệt | — (phê duyệt) | T13 [PHIÊN A] |
| R51 | Quy trình | "Hướng dẫn tôi cách mở quyền truy cập mạng cho bạn. Tôi chọn phương án mở quyền truy cập mạng." | Muốn agent đọc được nguồn web thật, không làm ở mức tóm tắt tìm kiếm | BẮT BUỘC | T14 [PHIÊN A] |
| R52 | Quy trình | "qua môi trường mới tôi phải sử dụng câu hỏi truy vấn (prompt) như thế nào để yêu cầu bạn tiếp tục phiên làm việc? Có cần add lại đề cương môn học không?" | Cần prompt bàn giao và lưu đề cương trong repo | ƯU TIÊN | T19 [PHIÊN A] |
| R53 | Định dạng đầu ra | "Hãy tổng hợp tất cả các thông tin chi tiết liên quan đến giáo án, học liệu, bài giảng, bài tập, đề thi, rubrik chấm điểm,... có trong phiên truy vấn này để tôi có thể nạp vào một phiên trao đổi mới mà không phải đưa bối cảnh và dữ liệu lại lần nữa." | Hồ sơ bàn giao tự đủ | BẮT BUỘC | T20 [PHIÊN A] |
| R54 | Bối cảnh | "Tôi chuẩn bị có thêm 2 lớp học môn quản trị mối quan hệ trong sự kiện." | Tài liệu cần tách phần dùng chung và phần phải đặt lại theo lớp | ƯU TIÊN | T20 [PHIÊN A] |

---

## 4. SỔ LỖI `[PHIÊN A]`

| Mã | Loại lỗi | Mô tả lỗi | Ví dụ cụ thể (trích đoạn sai) | GV đã phản hồi (nguyên văn) | Đã sửa thế nào | Đã sửa triệt để chưa | Quy tắc phòng tránh đề xuất |
|----|----------|-----------|-------------------------------|-----------------------------|----------------|----------------------|-----------------------------|
| L01 | Agent tự ý thêm nội dung | GV chỉ yêu cầu trả lời "Đã hiểu", agent trả lời kèm tóm tắt, 4 điểm chưa khớp và 5 câu hỏi. GV dùng các câu hỏi đó nên tác hại thấp; ghi để trung thực | Lượt trả lời sau T01: "**Đã hiểu.** … **Một số điểm chưa khớp trong đề cương** … **Trước khi soạn giáo án Buổi 1, xin thầy/cô cho biết:**…" | [KHÔNG CÓ PHẢN HỒI — agent tự ghi nhận] | Không cần sửa | Không áp dụng | Khi GV yêu cầu xác nhận ngắn, trả lời đúng yêu cầu trước, phần đề xuất thêm để ngắn và tách riêng |
| L02 | Agent giả định thay vì hỏi | Khung Buổi 1 dành thời gian chia nhóm trong khi sinh viên đã tự chia xong | Khung Buổi 1: "S2 … giới thiệu dự án KAP xuyên suốt môn học, **sau đó chia 6 nhóm**"; quyết định: "**Chia nhóm ngay ở S2**" | "Sinh viên được chọn nhóm và đã chia nhóm xong." (T03) | S2 chỉ còn "Xác nhận danh sách 6 nhóm"; thời gian dồn cho thực hành | Có | Hỏi tình trạng nhóm trước khi xếp lịch; không mặc định buổi 1 phải chia nhóm |
| L03 | Agent tự ý thêm (khối lượng ngoài giờ) | Gói Buổi 1 giao **bài về nhà nộp LMS** và hỏi có tính AM2 không | W01_lesson_plan (bản 1): "## Bài về nhà (giao ở S7) — Mỗi nhóm nộp lên LMS **một file PDF** gồm: …"; slide 24 "Bài về nhà: hoàn thiện poster sau phản biện, nộp LMS" | "Bài tập được làm trên lớp, không yêu cầu phải làm ở nhà, không tính điểm" (T07) | Bỏ mục bài về nhà; S7 thành 5 phút sửa poster trên lớp + 2 phút định hướng; sửa slide 23–24 và phiếu S6 | Có — `[QUAN SÁT TỪ REPO]` mọi giáo án W02–W13 đều ghi "bài tập làm và hoàn thiện trên lớp, không giao về nhà, không tính điểm" | Không thiết kế bài về nhà hay bài chấm điểm nếu GV chưa yêu cầu; ghi quy tắc này vào passport (đã ghi) |
| L04 | Hoạt động không khả thi về điều kiện | Gallery walk thiết kế theo kiểu dán poster lên tường khi chưa xác nhận phòng học (có đánh dấu `[NEEDS PROFESSOR INPUT]` nhưng vẫn dựng hoạt động theo giả định đó) | Phiếu S6 (bản 1): "**Bước 3 — Gallery walk (12 phút).** Dán poster lên tường."; vật tư có "băng keo" | "Phòng học không dán được poster" (T07) | Đổi thành **xoay vòng trạm tại bàn**; bỏ băng keo; ghi điều kiện phòng vào passport | Có — `[QUAN SÁT TỪ REPO]` phiếu W07, W08 ghi "Làm trên bàn, không dán tường" | Thiết kế mặc định không phụ thuộc cơ sở vật chất chưa xác nhận; có sẵn phương án làm trên bàn |
| L05 | Nguồn không xác thực (năm công bố) | Trích Power-Interest Grid là "Mendelow (1991)", đồng thời có tham khảo ghi "2nd International Conference on Information Systems" — hội nghị này diễn ra năm 1981 | Ghi chú bài giảng W01 (bản đầu): "`[VERIFY: Power-Interest Grid thường được ghi nguồn Mendelow (1991)…]`" | [KHÔNG CÓ PHẢN HỒI — agent tự phát hiện] | Đổi thành "Mendelow (1981 — nhiều tài liệu trích nhầm là 1991)", giữ `[VERIFY]`. `[QUAN SÁT TỪ REPO]` phiên khác xác minh 1981/ICIS và gỡ `[VERIFY]` | Có | Mọi năm hoặc nơi công bố chưa đọc tận gốc phải gắn `[VERIFY]` ngay từ bản đầu |
| L06 | Lệch đề cương (vai trò tài liệu) | Ghi chú bài giảng Buổi 1 gọi Van Niekerk & Getz (2019) là "giáo trình chính" | W01_lecture_notes (bản phiên A): "(theo hướng của Van Niekerk & Getz, 2019 — giáo trình chính)" | `[QUAN SÁT TỪ REPO – phản hồi ở phiên khác]`: "Giáo trình: theo đề cương, giáo trình chính là tài liệu nội bộ UEF; Van Niekerk & Getz (2019) gọi là tài liệu tham khảo chính" (quyết định GV 28/9, ghi trong `buoi-01_tu-lieu-tong-hop.md`) | Đã sửa ở phiên khác thành "tài liệu tham khảo chính" | Có (kiểm tra file hiện tại) | Gọi tên tài liệu đúng như đề cương; giáo trình nội bộ UEF luôn đứng đầu |
| L07 | Sai góc nhìn / không hiểu đúng ý GV | Bản nháp Buổi 7 đặt 7.2 ở **phòng mua hàng của khách hàng**; coi phần agency-là-người-mua là phụ ("gần với Buổi 10"); đưa **Supplier Preferencing** (nhà cung cấp xếp agency vào Core/Nuisance) vào bài và vào phiếu cuối giờ | W07_lesson_plan (bản 1): "Phần agency-là-người-mua … Buổi 7 dùng nó để hiểu **logic** của phòng mua hàng khách hàng — trọng tâm vẫn là KAM (agency là người bán)"; ghi chú bài giảng §3.2 "Supplier Preferencing (Steele & Court, 1996)…"; phiếu cuối giờ: "**nhà cung cấp đó** có lẽ xếp nhóm bạn vào ô nào của Supplier Preferencing" | "Cách hiểu của bạn đang sai, góc nhìn phải xuất phát từ agency và supplier là một trong những stakeholder bên ngoài mà agency cần quản lí bên cạnh stakeholder quan trọng nhất là key account." (T11); "Không đưa góc nhìn nhà cung cấp đánh giá agency vào mục 7.1 vì sẽ làm sinh viên khó phân biệt. Do đó, mọi nội dung phải sử dụng agency perspective…" (T12) | Lập file khung góc nhìn (GV duyệt T12); ghi quy tắc vào passport. `[QUAN SÁT TỪ REPO]` gói Buổi 7 được soạn lại theo khung (commit `f511c8e`); giáo án hiện tại ghi "**Không** đưa Supplier Preferencing" | Có (đã kiểm tra W07 hiện tại; chỉ còn từ "exploit" với nghĩa chiến lược của Kraljic 1983, không phải Supplier Preferencing) | Trước khi soạn một buổi có nhiều bên, viết **khung góc nhìn** (chủ thể – các bên – vai) và xin duyệt. Mặc định mọi phân tích xuất phát từ agency |
| L08 | Sai góc nhìn (lặp lại ở bước tìm tư liệu) | Bảng nhu cầu tư liệu Bước 1 lấy **phòng mua hàng của client** làm trục và hỏi GV có đồng ý ưu tiên góc "agency là nhà cung cấp" không | Bước 1 bản 1: "B2 … Dịch vụ sự kiện, agency, MICE thường bị xếp vào ô nào … **trong ma trận của khách hàng**"; "C3 … Luật đấu thầu"; "**tôi đề xuất ưu tiên góc nhìn agency là nhà cung cấp**" | "Cách hiểu của bạn đang sai…" (T11) | Làm lại Bước 1 theo khung (A, B1–B3, C1–C2, D1–D3, E); GV "Duyệt." (T13) | Có | Như L07. Bài học bổ sung: đọc tên mục đề cương ("supplier's position") theo đúng chủ thể của môn, không theo nghĩa của giáo trình nguồn |
| L09 | Agent tự ý bớt hoặc sửa nội dung GV cung cấp | Khi dùng TL-GV-B7, agent đổi dòng 9 của bảng Nên/Không nên; thay câu kết luận; rút hoạt động 45 phút còn bước 1; dời 7 câu hỏi thảo luận xuống phụ lục. Có nêu trong mục "quyết định đã đưa ra" nhưng làm trước khi hỏi | TL-GV-B7 gốc: "Soạn trước kịch bản khủng hoảng chung" → bản nháp: "Thống nhất trước quy trình phối hợp khi có sự cố với nhà cung cấp then chốt"; gốc "Truyền thông khủng hoảng là một phần của quản trị quan hệ nhà cung cấp" → "Tin tưởng nhưng phải kiểm chứng" | [KHÔNG CÓ PHẢN HỒI — agent tự ghi nhận; bản nháp sau đó bị thay toàn bộ] | Bản nháp đã thay thế | Không xác định — bản thay thế làm ở phiên khác, phiên A không kiểm tra từng câu `[CHƯA CÓ THÔNG TIN]` | Với tài liệu GV tự soạn: giữ nguyên văn; chỗ nào thấy vượt phạm vi thì **hỏi trước khi sửa**, không sửa rồi mới báo |
| L10 | Vượt phạm vi môn (nguy cơ) | Bản nháp Buổi 7 giữ tình huống **lễ hội âm nhạc 15.000 khách** và nhóm "an ninh", dễ kéo sang an toàn đám đông (thuộc môn Quản trị rủi ro) | Phiếu W07 S3 (bản 1): "lễ hội âm nhạc ngoài trời hai ngày, dự kiến 15.000 khách mua vé"; bảng có dòng "An ninh" | [KHÔNG CÓ PHẢN HỒI — agent tự cảnh báo, hỏi GV có đổi tình huống không; GV chưa trả lời trong phiên A] | `[QUAN SÁT TỪ REPO]` phiếu được thay bằng `W07_activity_S3_kraljic_su_kien_key_account.md` (hạng mục sự kiện của Key Account) | Có (theo repo) | Tình huống luyện tập phải gắn sự kiện của Key Account; tránh tình huống đông người khi có thể |
| L11 | Nguồn không xác thực / agent nói quá năng lực | Agent khẳng định đọc được trang nguồn, trong khi công cụ đọc trang bị proxy chặn; "kiểm chứng" vụ Live Nation chỉ dựa trên đoạn tóm tắt của kết quả tìm kiếm, rồi ghi "đã kiểm chứng" vào file | Trả lời T09: "Tìm case, số liệu… **rồi mở trực tiếp trang nguồn để đối chiếu**"; ghi chú bài giảng W07: "*đã kiểm chứng 27/9/2026*" (dựa trên tóm tắt tìm kiếm, gồm chi tiết "33 bang") | [KHÔNG CÓ PHẢN HỒI về lỗi này — agent tự phát hiện khi WebFetch bị chặn và đính chính ở lượt trả lời trước T14: "Tôi đã nói mình 'mở trực tiếp trang nguồn để đối chiếu', nhưng thực tế…"] | Đính chính với GV; dừng tìm tư liệu, đề nghị mở mạng. `[QUAN SÁT TỪ REPO]` phiên khác đọc toàn văn NPR, CNN, Cooley và ghi **mâu thuẫn** số bang (NPR "33 bang và D.C." vs CNN "hơn hai chục bang"); câu "đã kiểm chứng 27/9/2026" không còn trong W07 | Có (theo repo) | Thử năng lực công cụ trước khi hứa; phân biệt rõ "đọc tóm tắt tìm kiếm" và "đọc toàn văn"; không ghi "đã kiểm chứng" nếu chưa đọc trang gốc |
| L12 | Hướng dẫn thao tác không chính xác | Hướng dẫn mở quyền truy cập mạng mô tả giao diện mà agent không nhìn thấy ("bấm tên môi trường trên thanh tiêu đề", "chọn Edit"); nói "mức hiện tại là Trusted" mà không kiểm tra | Trả lời T14: "Ở **thanh tiêu đề** của phiên làm việc này, bấm vào **tên môi trường**… Chọn **Edit**"; "**Mức hiện tại là Trusted** (mặc định)" | "Thanh tiêu đề nằm chỗ nào?" (T15); "Tôi đã sử dụng môi trường Claude.ai/code nhưng vẫn không thấy môi trường để điều chỉnh chỗ nào" (T16); "Bấm vào biểu tượng đám mây có ra môi trường defaut nhưng không thể chỉnh sửa…" (T17) | Hướng dẫn lại theo từng ảnh chụp (menu Cloud ›, Add environment); cuối cùng chuyển sang phương án mở phiên mới và lưu brief bàn giao vào repo | Không triệt để trong phiên A — GV không sửa được môi trường Default. `[QUAN SÁT TỪ REPO]` phiên khác đã có mạng ("Truy cập web hoạt động trong phiên này") | Khi hướng dẫn thao tác giao diện: đọc tài liệu chính thức hoặc dùng công cụ kiểm tra môi trường trước; nói rõ phần nào không chắc; nhờ GV chụp màn hình sớm |
| L13 | Lỗi quy trình kỹ thuật | Để lại file tạm `__pycache__` chưa commit sau khi chạy kiểm tra | Hook: "There are untracked files in the repository." | (hệ thống báo, T04) | Xóa file tạm | Có | Dọn file sinh ra sau khi chạy script kiểm tra |
| L14 | Nguồn không xác thực (trong hồ sơ bàn giao) | Bản đầu của `00_BOI_CANH_TONG_HOP.md` gán sai nguồn và thiếu dữ kiện | "tài trợ bắt đầu từ mục tiêu (Cornwell 2020)" — đúng là U01 = Meenaghan (1983); "quảng trường chính trị (Larson & Wikström 2001)" — đúng là Y05 = Larson (2002); thiếu ứng viên "Đại học Bright Future" | [KHÔNG CÓ PHẢN HỒI — agent tự phát hiện trước khi gửi] | Sửa 3 chỗ trước khi commit và gửi | Có | Mọi trích dẫn trong file tổng hợp phải đối chiếu lại với thẻ nguồn gốc (mã nguồn) trước khi gửi |
| L15 | Có thể vượt phạm vi yêu cầu (chưa chắc là lỗi) | GV yêu cầu tổng hợp thông tin "có trong phiên truy vấn này"; agent gộp cả sản phẩm của các phiên khác tìm thấy trong repo | Trả lời T20: "nhánh này có nhiều hơn những gì làm trong cửa sổ này… Tôi đã đọc và đưa tất cả vào bản tổng hợp" | [KHÔNG CÓ PHẢN HỒI] | Đã nói rõ trong trả lời. Hồ sơ này tách bằng nhãn `[QUAN SÁT TỪ REPO]` | Không áp dụng | Khi phạm vi là "phiên này", ghi tách bạch phần của phiên với phần quan sát từ nguồn khác |
| L16 | Agent tự ý thay đổi (đã nêu, chưa có duyệt riêng) | Khi hiệu chỉnh đề cương, agent tự đổi số giờ tự học (T3: 18 → 9; T9: 9 → 18) và tự viết lại nội dung 8.1, 8.3 | Đề cương hiệu chỉnh: "TOPIC 3 … 09"; "8.1. Structuring multi-level contacts with the Key Account: from the Bow-tie to the Diamond relationship model" | Buổi 8: "Xác nhận" (T07). Số giờ tự học: [KHÔNG CÓ PHẢN HỒI] | Hướng Buổi 8 đã được duyệt; số giờ tự học chưa được duyệt riêng | Chưa (đề cương hiệu chỉnh chưa được GV duyệt chính thức) | Thay đổi số liệu hành chính (giờ, trọng số) phải hỏi trước, không tự đổi rồi báo |

---

## 5. Những gì đã làm tốt `[PHIÊN A]`

| Sản phẩm / cách làm | Bằng chứng GV duyệt | Nguồn |
|---|---|---|
| Gói Buổi 1: giáo án, ghi chú bài giảng, dàn ý slide, 2 phiếu hoạt động (có phần riêng cho GV: lời mở đầu, mốc thời gian, tình huống thất bại, đáp án tham khảo) | "Duyệt" | T07 |
| Hướng mới Buổi 8 (Bow-tie → Diamond, chỉ số, đánh giá chung với Key Account thay cho quản lý nhân sự KAM) | "Xác nhận" | T07 |
| Đề xuất thống nhất sản phẩm cuối là SMP xây quanh KAP; sửa dòng AM7; bỏ nguồn trùng; làm bản track changes | "Có." | T06 |
| Khung góc nhìn Buổi 7 (ghi cách hiểu, chờ duyệt rồi mới làm) | GV xác nhận vai và quy tắc | T12 |
| Bảng nhu cầu tư liệu Bước 1 (bản sửa theo góc agency) | "Duyệt." | T13 |
| Cách trình bày mỗi bước theo 4 khối: Sản phẩm · Quyết định đã đưa ra thay GV · Lưu ý · Câu hỏi | GV trả lời theo đúng các câu hỏi (T02, T03, T07) | T02–T07 |
| Liệt kê các điểm chưa khớp của đề cương ngay khi đọc (CLO8–9, Topic tự học, nội bộ/bên ngoài, số tiết) | GV trả lời và ra quyết định cho cả 4 điểm | T02 |

**Mẫu tiêu biểu đã được duyệt 1 — tiến trình Buổi 1 (bản cuối):**

> 85–118 | S6 | **Thực hành 2** | 85–88: nhóm chốt khách hàng từ dự án cũ. 88–106: làm poster. 106–118: xoay vòng các trạm (poster để trên bàn nhóm) + GV chốt các vị trí gây tranh cãi. | Nhóm: áp dụng Grid + Salience cho khách hàng dự án cũ trên poster A0; xoay vòng qua bàn các nhóm khác, để lại 1 câu hỏi + 1 phản biện

**Mẫu tiêu biểu đã được duyệt 2 — khung góc nhìn Buổi 7 (đoạn cốt lõi):**

> "Trong môn này, 'KAMer' nhất quán là **người của agency** quản trị Key Account… **Customer (Buyer) = Key Account**, **KAMer = agency**… Kết quả phân tích nhà cung cấp cho agency biết **phần nào của sự kiện mang rủi ro** (hạng mục Strategic/Bottleneck…) và **phần nào có thể điều chỉnh** mà không làm giảm giá trị (hạng mục Leverage/Non-critical)… **quản trị nhà cung cấp tốt là năng lực tạo nên sức mạnh đàm phán của agency với Key Account.**"

---

## 6. Quyết định đã chốt `[PHIÊN A]`

| # | Quyết định | Trạng thái | Nguồn |
|---|---|---|---|
| Q01 | Phạm vi chỉ bên liên quan bên ngoài; nội dung nội bộ sang môn Quản lý đội nhóm; quản lý đám đông sang môn Quản trị rủi ro sự kiện | Hiện hành | T02 |
| Q02 | 3 tiết = 135 phút/buổi; khoảng 1/2 lý thuyết, 1/2 thực hành | Hiện hành | T02 |
| Q03 | Giảng hoàn toàn bằng tiếng Việt | Hiện hành | T02 |
| Q04 | ~40 SV, 6 nhóm; sinh viên đã tự chia nhóm | Hiện hành (lớp HK1A 2026–2027) | T02, T03 |
| Q05 | Không có mẫu giáo án bắt buộc; đủ học thuật và ứng dụng | Hiện hành | T02 |
| Q06 | Chưa có khách mời | Hiện hành | T02 |
| Q07 | CLO8–9: GV tự cân đối sau | Hiện hành (tồn đọng) | T02 |
| Q08 | Dự án xuyên suốt dùng 1 khách hàng từ dự án cũ, không làm dự án mới | Hiện hành | T03 |
| Q09 | Cuối kỳ: hoàn thiện SMP + phản biện | Hiện hành | T03 |
| Q10 | Nộp bài trên LMS theo thời hạn quy định | Hiện hành | T03 |
| Q11 | Đề cương hiệu chỉnh: bỏ nội dung nội bộ và quản trị rủi ro; Buổi 8 đổi hướng; SMP quanh KAP (13.2); dòng AM7 ghi SMP + bảo vệ; bỏ Klikauer và Getz trùng; có bản track changes | Đã thực hiện; **chưa được GV duyệt chính thức** | T05, T06, T07 |
| Q12 | Gói Buổi 1 được duyệt | Hiện hành | T07 |
| Q13 | Bài tập trên lớp, không giao về nhà, không tính điểm | Hiện hành. Thay thế bản Buổi 1 có bài về nhà `[ĐÃ THAY THẾ]` | T07 |
| Q14 | Phòng không dán được poster → xoay vòng trạm tại bàn | Hiện hành. Thay thế gallery walk dán tường `[ĐÃ THAY THẾ]` | T07 |
| Q15 | Buổi 8: quản trị quan hệ với Key Account thay cho quản lý nhân sự KAM | Hiện hành | T07 |
| Q16 | Buổi 7: Customer (Buyer) = Key Account (client); KAMer = event agency | Hiện hành | T12 |
| Q17 | Không dùng góc nhìn nhà cung cấp đánh giá agency (Supplier Preferencing) | Hiện hành. Thay thế bản nháp W07 có Supplier Preferencing `[ĐÃ THAY THẾ]` | T12 |
| Q18 | Mọi nội dung dùng agency perspective; mọi đánh giá xuất phát từ agency (áp cho **toàn môn**, đã ghi vào passport) | Hiện hành | T12 |
| Q19 | Quy trình 2 bước cho mỗi buổi: (1) tìm và tổng hợp tư liệu theo đề cương → GV duyệt; (2) soạn bài bằng prompt riêng | Hiện hành | T10 |
| Q20 | Bảng nhu cầu tư liệu Buổi 7 (bản agency) được duyệt | Hiện hành. Thay thế bảng Bước 1 bản đầu `[ĐÃ THAY THẾ]` | T13 |
| Q21 | Mở quyền truy cập mạng để agent đọc nguồn thật (không làm ở mức tóm tắt tìm kiếm) | Hiện hành. Thực hiện qua phiên mới | T14 |
| Q22 | Thời hạn hoàn thành Bước 2–5 Buổi 7 | `[CHƯA CÓ THÔNG TIN]` | — |

**Quyết định cũ đã bị thay thế:**
- `[ĐÃ THAY THẾ]` Khung Buổi 1 ban đầu: chia nhóm ở S2; S6 dùng tình huống giả định (agent đã tự đổi sang khách hàng dự án cũ trước khi GV trả lời).
- `[ĐÃ THAY THẾ]` Agent đề xuất KAP là sản phẩm cuối (theo đề cương gốc) → thay bằng **SMP xây quanh KAP** (T03, T06).

---

## 7. Việc tồn đọng và ý tưởng chưa triển khai `[PHIÊN A]`

| # | Việc | Ghi chú |
|---|---|---|
| V01 | GV duyệt chính thức đề cương hiệu chỉnh (bản sạch + track changes), gồm việc agent tự đổi giờ tự học T3/T9 (L16) | Phiên A không xem được bố cục trang vì LibreOffice lỗi; cần mở bằng Word để kiểm tra |
| V02 | Gắn CLO8–9 vào buổi cụ thể | GV tự cân đối (T02) |
| V03 | Buổi 2: duyệt khung và trả lời 2 câu hỏi (khách hàng không đủ điều kiện làm Key Account; ví dụ thực tế cho 2.1) | Chưa trả lời trong phiên A. `[QUAN SÁT TỪ REPO]` phiên khác đã soạn Buổi 2 |
| V04 | Buổi 7: GV chưa trả lời 2 câu hỏi của bản nháp: (1) giữ hay đổi tình huống lễ hội âm nhạc; (2) có coi đóng vai là tập dượt cho phần bảo vệ cuối kỳ không | Bản nháp đã bị thay thế; câu (2) `[CHƯA CÓ THÔNG TIN]` |
| V05 | Các `[VERIFY]` của Buổi 1: Toffler/Hanlon & Cuskelly ("pulsating organisation"); thủ tục cấp phép biểu diễn nghệ thuật trong khách sạn; số trang Clarkson | Một phần đã xử lý ở phiên khác (Mendelow) |
| V06 | Quy định chuyên cần, liêm chính, sử dụng AI cho bài khác ngoài SMP | Phiên A: `[NEEDS PROFESSOR INPUT]`. `[QUAN SÁT TỪ REPO]` chính sách AI đã chốt ở phiên khác |
| V07 | Lịch học kỳ (ngày Buổi 1, ngày bảo vệ) | `[CHƯA CÓ THÔNG TIN]` |
| V08 | Mục `schedule` của passport cho W2–W13 chưa cập nhật hoạt động và file | Quan sát khi lập hồ sơ bàn giao |
| V09 | Ý tưởng: dùng phiếu kiểm tra cuối giờ làm dữ liệu "ghi chú sau buổi học" để cải tiến lần sau | Mỗi giáo án có mục "Ghi chú sau buổi học" để trống |
| V10 | Ý tưởng chưa triển khai: tạo môi trường riêng có mạng cho việc tìm tư liệu | Không làm được trong phiên A; GV chuyển sang phiên mới |
| V11 | Với 2 lớp mới: đặt lại sĩ số, số nhóm, lịch, hạn nộp, điều kiện phòng học | Gợi ý trong `00_BOI_CANH_TONG_HOP.md`, mục 11 |

---

## Biên bản kiểm tra

**Phương pháp:** đọc lại 21 lượt tin nhắn (T01–T21), lọc mọi câu mang tính chỉ đạo, quyết định, góp ý hoặc chê (có các từ "hãy", "phải", "cần", "không", "đừng", "loại bỏ", "sai", "duyệt", "xác nhận", "ưu tiên", "chỉ"…), rồi ánh xạ từng câu vào Mục 3 hoặc Mục 4.

| Chỉ số | Kết quả |
|---|---|
| Số câu chỉ đạo, quyết định, góp ý tìm thấy trong tin nhắn của GV (T01–T20) | 58 câu khác nhau |
| Đã ánh xạ vào Mục 3 | 55 câu, trong 54 dòng R01–R54 (R23 gộp 2 câu quy ước 🔁/🔍; R36 gộp câu tên file và danh sách 6 mục cấu trúc) |
| Chỉ có ở Mục 4 (phản hồi chê/góp ý, không phải yêu cầu môn học) | 3 câu: T15, T16, T17 (L12) |
| Có ở cả Mục 3 và Mục 4 | 5 câu: T03 "Sinh viên được chọn nhóm…" (R14/L02) · T07 "Bài tập được làm trên lớp…" (R19/L03) · T07 "Phòng học không dán được poster" (R20/L04) · T11 "Cách hiểu của bạn đang sai…" (R45/L07, L08) · T12 "Không đưa góc nhìn nhà cung cấp…" (R48/L07) |
| Tổng đã ánh xạ | 58/58 |
| Số lỗi ghi nhận trong Sổ lỗi | 16 (L01–L16). GV chỉ ra trực tiếp: L02, L03, L04, L07, L08, L12 · Agent tự phát hiện: L01, L05, L09, L10, L11, L13, L14, L15, L16 · Phản hồi ở phiên khác (quan sát qua repo): L06 |
| Câu bị loại khỏi Mục 3 và Mục 4 kèm lý do | (1) T09 "Bạn có thể tự tìm…?" — câu hỏi, không chỉ đạo; đã dẫn ở L11. (2) T18 "Tức là tôi cần vô phiên bảng mới…?" — câu hỏi làm rõ. (3) T21 — yêu cầu về chính hồ sơ này; đã tuân thủ qua cấu trúc, không đưa vào Mục 3 để tránh lẫn với yêu cầu của môn học. (4) T04 — thông báo của hệ thống, không phải GV; đã ghi ở L13 |
| Câu mô tả bối cảnh (không phải chỉ đạo) nhưng vẫn ghi vào Mục 3 | R54 (2 lớp mới) |

**Những phần chưa chắc chắn:**
1. **Ranh giới phiên A và các phiên khác:** các sản phẩm Buổi 2–13, đề thi, rubric 11 tiêu chí, hướng dẫn chấm NotebookLM, trắc nghiệm, slide và LMS **không do phiên A tạo**. Hồ sơ chỉ nhắc tới để đối chiếu (nhãn `[QUAN SÁT TỪ REPO]`). Hồ sơ của phiên khác cần bổ sung phần này.
2. **L06 và L09:** đánh giá "đã sửa triệt để" dựa trên kiểm tra file hiện tại trong repo, không dựa trên hội thoại phiên A.
3. **Mức độ (BẮT BUỘC/ƯU TIÊN/GỢI Ý)** trong Mục 3 là phân loại của người lập hồ sơ theo cách dùng từ của GV ("phải", "ưu tiên", "tạm thời"…), không phải do GV gán.
4. **Kết quả việc mở mạng (T14–T19):** không rõ cuối cùng GV có sửa được môi trường không. Chỉ biết từ repo rằng phiên sau đã có mạng.
5. **Số 58 câu chỉ đạo** là số đếm của người lập hồ sơ; cách tách câu (một câu dài thành mấy chỉ đạo) có thể khác người đếm khác.
