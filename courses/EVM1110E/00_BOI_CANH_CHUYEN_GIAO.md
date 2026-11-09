# Bộ bối cảnh chuyển giao – EVM1110E (bản hợp nhất)

*Quản trị mối quan hệ trong tổ chức sự kiện (Stakeholders Management for Events). UEF – Khoa Marketing. Cập nhật 9/11/2026.*

> **Tệp này dùng để làm gì.** Tệp gộp toàn bộ bối cảnh từ hai phiên làm việc. Phiên thứ nhất soạn bài, dựng học liệu và chấm bài khóa trước. Phiên thứ hai tổng hợp lại quyết định và nội dung (tệp `00_BOI_CANH_TONG_HOP.md`). Phiên mới chỉ cần đọc tệp này cùng `course_passport.yaml`.

> ## ⚠ ĐỌC TRƯỚC: nguồn ưu tiên cao nhất (cập nhật 9/11/2026)
>
> **1. Đọc ghi chú thực tế của GV sau học kỳ trước tiên:** `ho_so_trich_xuat/GHI_CHU_THUC_TE_GV_sau_hoc_ky.md`.
> - TT-01: sinh viên nhầm lẫn các ma trận.
> - TT-02: sinh viên thấy môn không liên quan chuyên ngành.
> - TT-03: sửa chỗ thiếu nhất quán trong đề cương; giữ 13 buổi học + 2 buổi thi.
> - TT-04: thiết kế lại thực hành, giữa kỳ, cuối kỳ. GV **chưa chọn phương án**.
> - Thứ tự xử lý: **TT-04 → TT-01 → TT-02 → TT-03**. Mỗi bước phải chờ GV duyệt.
> - Khi mâu thuẫn với tệp này hoặc với bất kỳ hồ sơ nào, **ghi chú GV thắng**.
>
> **2. Hồ sơ trích xuất ba phiên** (đọc khi cần nguyên văn yêu cầu và sổ lỗi), trong thư mục `ho_so_trich_xuat/`:
> - `PHIEN_A_Ho_so_mon_hoc.md`: đề cương, Buổi 1, khung Buổi 7, quy trình tư liệu.
> - `PHIEN_B_Ho_so_mon_hoc.md`: bài giảng, đánh giá, chấm bài khóa trước.
> - `PHIEN_C_Ho_so_mon_hoc_slide.md`: 13 deck ở repo `academic-pptx-skill`, đặc tả slide, nội dung 354 slide.
>
> **3. Ma trận nguồn giá trị ưu tiên:** dùng định nghĩa GV cung cấp (Bài 5, slide 12), chép trong `ho_so_trich_xuat/GHI_CHU_THUC_TE_GV_sau_hoc_ky.md`.
>
> **4. Slide:** không chọn một trong hai bộ. Khi GV đưa yêu cầu, đối chiếu cả hai bộ (repo này và `academic-pptx-skill`) rồi tổng hợp thành một bộ hoàn chỉnh nhất (quyết định GV ngày 9/11).
>
> **5. Case minh họa bài giảng (quyết định GV 9/11/2026):** thay Nova – An Phát bằng một **case thật do GV thực hiện**, đã ẩn danh, dùng ở càng nhiều buổi càng tốt. Case này **không** được dùng làm đối tượng bài cuối kỳ. Mục giấy phép trong case chỉ dùng như tình huống đạo đức ở B12.
> - Hồ sơ case **chỉ lưu trên Google Drive riêng tư** của môn (thư mục "Quản trị mối quan hệ trong tổ chức sự kiện", ID `1RP9UW7LsLMGANPSNcIFI4F_cBXhD7dKU`). Đọc tệp `00 – Bàn giao ngữ cảnh EVM1110E` ở đó trước.
> - Repo này đang công khai: **không** đưa tên thật, ngành, số liệu hay tình huống của case vào repo (QT-13).
> - Hồ sơ danh mục Hải Đăng vẫn là dữ liệu thực hành B1–B8 và giữa kỳ (P4); bản Google Doc nằm trong thư mục "Học liệu" trên Drive.
>
> **6. Lịch và quy định nộp bài (GV duyệt 9/11/2026):**
> - Nguồn ngày tháng duy nhất: `van_hanh/D01_Lich_trinh_xuong_song.md`. 2 lớp B01E, B02E học Thứ 4 và Thứ 7, từ 18/11/2026 đến 06/01/2027. B14, B15 là thi.
> - **Không chấp nhận nộp bài trễ** (quy định của Trường). Nộp trễ = vắng thi, không chấm, mọi trường hợp.
> - **AM2 = 3 bài kiểm tra cá nhân** trên lớp (B5, B8, B13); GV yêu cầu thêm bài thứ 3 để đánh giá năng lực riêng.

> **Nguyên tắc.**
> - Tệp không chứa dữ liệu sinh viên khóa trước (tên, điểm, bài nộp). Chỉ giữ phương pháp chấm, quyết định của GV và bài học rút ra.
> - [VERIFY] = khẳng định chưa đối chiếu được nguồn gốc.
> - [NEEDS PROFESSOR INPUT] = thông tin GV phải điền.
> - Đã KCC / Chưa KCC = đã / chưa kiểm chứng chéo bằng ít nhất 2 nguồn độc lập.
> - *Nhận định của người tổng hợp* = suy luận, không phải dữ kiện.

> **Thứ tự ưu tiên khi các nguồn mâu thuẫn:**
> 1. quyết định mới nhất của GV;
> 2. đề thi chính thức (`.docx`);
> 3. đề cương hiệu chỉnh;
> 4. tệp này;
> 5. các tệp bài giảng.

## 0. Cách dùng ở phiên mới

**Phiên Claude Code trên repo** (kho `dnbaoquyen/teaching-skills`, nhánh `claude/busy-mccarthy-wsbyzs`): dán câu sau.

> Tôi tiếp tục học phần EVM1110E. Đọc `courses/EVM1110E/00_BOI_CANH_CHUYEN_GIAO.md` rồi `courses/EVM1110E/course_passport.yaml`. Tôn trọng mọi quyết định đã ghi. Việc hôm nay: [mô tả việc].

**Phiên chat Claude.ai không có repo:**
- tải bản PDF của tệp này lên, kèm các tệp cần cho việc hôm nay (đề thi `.docx`, hồ sơ bài giảng PDF của buổi cần sửa…);
- sau đó dán câu: "Đây là hồ sơ bối cảnh học phần EVM1110E. Hãy làm việc đúng các quyết định đã ghi. Việc hôm nay: …".

**Lưu ý môi trường:** phiên cloud phải bật Network access = Full thì mới đọc được trang web khi tìm tư liệu.

## 1. Thông tin học phần

| Mục | Nội dung |
|---|---|
| Mã, tên | EVM1110E – Quản trị mối quan hệ trong tổ chức sự kiện (Stakeholders Management for Events) |
| Đơn vị | Khoa Marketing, Trường ĐH Kinh tế – Tài chính TP.HCM (UEF) |
| Tín chỉ | 3 tín chỉ (3 LT, 0 TH); 15 buổi × 3 tiết (135 phút) |
| Học trước | EVM1103 Nhập môn quản trị sự kiện |
| Người học | Sinh viên năm cuối chuyên ngành Quản trị sự kiện, đã làm dự án sự kiện ở các môn trước |
| Sĩ số đã dạy | Khoảng 40 SV/lớp, 6–7 nhóm tự chọn. Khóa trước chấm 7 bài SMP; hướng dẫn chấm NotebookLM viết cho 7 nhóm |
| Ngôn ngữ | Hoàn toàn tiếng Việt. Giữ thuật ngữ tiếng Anh, giải thích tiếng Việt ở lần đầu |
| Học kỳ đã soạn | HK1A 2026–2027 |

**Tài liệu dùng cho môn**
- **Giáo trình chính:** tài liệu nội bộ UEF *Stakeholders Management for Events*.
- **Tham khảo chính:** Van Niekerk & Getz (2019), *Event Stakeholders*.
- **GV cho phép dùng thêm:**
  - Marcos, Davies, Guesalaga & Holt (2018), *Implementing Key Account Management* (Kogan Page);
  - tài liệu Cranfield KAM trên Drive của GV;
  - slide bộ môn Chương 1–5 (ThS. Trần Nguyễn Huỳnh Như).

**Chuẩn đầu ra (CLO)**

| CLO | Nội dung | Mức |
|---|---|---|
| CLO1 | Vận dụng QTSK vào quản trị quan hệ khách hàng (KAM) | 4/6 |
| CLO2 | Phân tích quan hệ đối tác và quan hệ khác trong sự kiện | 4/6 |
| CLO3 | Truyền thông, marketing cho quan hệ truyền thông, quảng bá | 4/6 |
| CLO4 | Tư duy phân tích, hệ thống, phản biện, sáng tạo (đã bỏ chữ "nội bộ") | 3/5 |
| CLO5 | Điều phối, xử lý tình huống | 3/5 |
| CLO6 | Phối hợp làm việc | 3/5 |
| CLO7 | Ngoại ngữ chuyên môn | 3/5 |
| CLO8 | Đạo đức, trách nhiệm nghề nghiệp | 4/5 |
| CLO9 | Lập kế hoạch, điều phối, dẫn dắt chuyên môn | 4/5 |

CLO8 và CLO9 chưa gắn vào buổi nào; GV sẽ tự cân đối.

**Đánh giá (theo đề cương)**
- AM1 Chuyên cần: 10%.
- AM2 Bài tập: 20%.
- Giữa kỳ (AM3 + AM9): 20%.
- Cuối kỳ (AM7 + AM9): 50%.

## 2. Quyết định nền tảng của GV (áp dụng cho mọi buổi, mọi tài liệu)

**1. Chỉ dạy bên liên quan bên ngoài.**
- Quan hệ nội bộ (nhân sự, crew, tình nguyện viên, quản lý đội KAM) thuộc môn *Quản lý đội nhóm trong tổ chức sự kiện*.
- An toàn đám đông, PCCC, kế hoạch an ninh thuộc môn *Quản trị rủi ro sự kiện*.
- Khi gặp các nội dung này, chỉ nhắc ranh giới, không dạy.

**2. Góc nhìn agency là bắt buộc.**
- Sinh viên luôn đứng ở vị trí event agency.
- Key Account (client) là bên liên quan quan trọng nhất. Các bên khác (nhà cung cấp, nhà tài trợ, báo chí/KOL…) được quản trị để phục vụ Key Account.
- KAMer là người của agency.
- Không dùng góc nhìn nhà cung cấp hoặc phòng mua hàng của client như một góc độc lập. Không dùng Supplier Preferencing.

**3. Cấu trúc buổi học.** 135 phút, khoảng ½ lý thuyết, ½ thực hành. Mẫu chung:

| Phần | Nội dung | Thời lượng |
|---|---|---|
| S1 | Khởi động | 5' |
| S2 | Lý thuyết 1 | ~25' |
| S3 | Thực hành 1 | ~20' |
| — | Giải lao | 8' |
| S4–S5 | Lý thuyết 2–3 | — |
| S6 | Thực hành 2, thường xoay trạm phản biện | ~30' |
| S7 | Tổng hợp | 3' |
| S8 | Phiếu kiểm tra cuối giờ | 6' |
| — | Dự phòng | 3' |

Buổi 13 là "buổi xưởng": 45' lý thuyết, 76' thực hành.

**4. Bài tập và phiếu trên lớp.** Làm và hoàn thiện tại lớp, không giao về nhà, không tính điểm. Phiếu kiểm tra cuối giờ cũng không chấm điểm.

**5. Phòng học không dán được poster.** Sản phẩm nhóm làm trên giấy A1/A3 đặt trên bàn. "Gallery walk" đổi thành xoay vòng trạm tại bàn: mỗi nhóm để lại 1 câu hỏi và 1 phản biện.

**6. Dự án xuyên suốt.**
- Mỗi nhóm chọn 1 khách hàng (tổ chức) từ dự án sự kiện đã làm ở môn trước, không làm dự án mới.
- Mỗi buổi thêm một "mảnh" vào Stakeholder Management Plan (SMP).
- SMP xoay quanh Key Account Plan (KAP), là phần lõi.

**7. Giáo án:** không có mẫu bắt buộc, nhưng phải đủ nội dung học thuật và ứng dụng.

**8. Nộp bài:** qua LMS theo thời hạn quy định.

**9. Chính sách AI (GV, 4/10/2026).**
- Nguyên văn: "Cho phép, chỉ cần khai báo và phải hiểu bài thông qua việc trả lời được các câu hỏi vấn đáp."
- Không dùng công cụ phát hiện AI.

**10. Giữa kỳ (AM3 + AM9):** tổ chức ngoài giờ hoặc trên LMS, không chiếm buổi học.

**11. Khách mời (TLM2):** chưa có kế hoạch.

**12. Thuật ngữ:** giữ tên gốc tiếng Anh của mô hình (Strategic, Leverage, Bottleneck, Non-critical; supply risk, profit impact…), chỉ giải nghĩa tiếng Việt ở lần đầu.

## 3. Đề cương đã hiệu chỉnh

**Tệp:** `syllabus/EVM1110E_De_cuong_hieu_chinh.docx` (bản sạch) và `…_track_changes.docx` (đánh dấu thay đổi để trình Khoa). Chưa ghi nhận GV duyệt chính thức hai tệp này.

**Đề cương gốc** do GV tải lên (`3.7_EVM1110E_QUAN_TRI_MOI_QUAN_HE_TRONG_TO_CHUC_SU_KIEN.docx`) không lưu trong repo. Bản hiệu chỉnh thay thế cho mọi mục đích soạn bài.

**Các thay đổi so với đề cương gốc**
- **Mục tiêu chung, CLO4, mô tả tóm tắt:**
  - chỉ còn bên ngoài;
  - thêm câu nêu rõ nội bộ và rủi ro/an toàn đám đông thuộc hai học phần khác;
  - sửa lỗi chính tả "phát triên".
- **Buổi 8:**
  - đổi từ "KAM Team Operations" sang *Governing the Key Account Relationship & Multi-dimensional Performance Measurement*;
  - gồm 8.1 Bow-tie → Diamond, 8.2 chỉ số results/process, 8.3 đánh giá chung định kỳ và kiểm tra sức khỏe quan hệ;
  - GV đã xác nhận.
- **Phần 4 (Buổi 13–15):**
  - sản phẩm cuối là SMP xây quanh KAP;
  - thêm mục 13.2: tích hợp điều phối bên ngoài vào phần Value Delivery.
- **Dòng điểm cuối kỳ:** "AM7 – Tiểu luận: SMP theo nhóm, bảo vệ và phản biện trực tiếp".
- **Bảng tự học:**
  - 12 Topic sắp lại khớp 1–1 với Buổi 1–12, cộng REVIEW cho Buổi 13–15;
  - bỏ Crew, Crowd safety, Security & Law-enforcement, "Risks…";
  - tổng giữ 153 giờ.
- **Tài liệu tham khảo:**
  - bỏ Klikauer (HRM);
  - bỏ mục Getz (2019) bị trùng;
  - thêm phụ đề cho giáo trình Van Niekerk & Getz.

**Lộ trình 15 buổi**

| Phần | Buổi | Chủ đề |
|---|---|---|
| 1. Nền tảng | 1 | Hệ sinh thái các bên liên quan bên ngoài |
| 2. KAM (trục chính) | 2–8 | KAM mindset và chọn Key Account · hiểu khách hàng và hành trình · chất lượng quan hệ · CVP và đồng kiến tạo · năng lực tài chính · procurement và đàm phán giá trị · quản trị quan hệ và đo lường |
| 3. Điều phối quanh hành trình khách hàng | 9–12 | Nhà đầu tư, nhà tài trợ · nhà cung cấp, địa điểm · báo chí, KOL · đòn bẩy và xung đột mạng lưới |
| 4. Đánh giá | 13–15 | Xây SMP quanh KAP (buổi xưởng) · bảo vệ SMP trước "Customer Board" (2 buổi) |

## 4. Mạch tình huống giả định xuyên suốt (giữ nhất quán khi soạn thêm)

Mọi tên và con số trong mục này là giả định sư phạm. Khi dùng phải luôn ghi nhãn "giả định".

**Hai bên chính**
- **Nova Events:** agency tổ chức sự kiện tại TP.HCM, là vai của sinh viên.
- **Anh Đức:** CEO của Nova, đóng vai hỏi vặn ở các trạm phản biện.
- **Ngân hàng An Phát:** Key Account.

**Sự kiện trục:** gala/hội nghị khách hàng ngày 12/12, cho 600 khách là lãnh đạo doanh nghiệp VIP, tại khách sạn 5 sao.
- Buổi 1 ban đầu ghi 500 khách, sau đã đổi thành 600.
- Chi phí gala vừa rồi khoảng 2,2 tỷ đồng.

**DMU của An Phát**
- **Chị Hạnh** – GĐ Marketing. Là đầu mối chính Buổi 1–7, nghỉ việc ở Buổi 8.
- **Anh Minh** – người thay chị Hạnh từ Buổi 8.
- **Ông Tuấn** – Phó TGĐ, người phê duyệt cuối.
- **Anh Khoa** – phụ trách ngân sách, mua sắm.
- **Chị Lan** – truyền thông nội bộ (livestream 80 chi nhánh).
- **Chị Vy** – thương hiệu.

**Năm ứng viên Key Account của Nova (Buổi 2)**

| Ứng viên | Doanh thu/năm | Đặc điểm |
|---|---|---|
| An Phát | ~2,3 tỷ | 4 năm hợp tác |
| Địa ốc Sông Xanh | ~3,5 tỷ | Đấu thầu theo giá, đổi agency hằng năm, trả chậm 90 ngày → không qua "cổng đồng đầu tư" |
| Dược phẩm MediPharm | ~1,2 tỷ | Biên cao, tuân thủ chặt |
| Thực phẩm Bếp Việt | ~1,8 tỷ | Đề nghị chia chi phí thí điểm |
| Đại học Bright Future | ~0,6 tỷ | Lễ tốt nghiệp; ổn định nhưng ít tiềm năng |

**Các tình tiết khác**
- **Nhà tài trợ gala năm sau (Buổi 9):** Bình An (đối tác bảo hiểm) và GlobalCard (đối tác thẻ), kèm các giới hạn pháp lý.
- **Số liệu CLV mẫu (Buổi 6):** CLV 5 năm của An Phát khoảng 926 triệu. Con số này đã được tính lại theo công thức có chiết khấu năm 1 và khớp.
- **Tình huống giá (Buổi 7, nối sang Buổi 10):** AV nội bộ của khách sạn tăng giá 30% ba tuần trước gala.

**Mâu thuẫn GV cần chốt:** phiếu W07 S3 ghi Nova đã làm với An Phát "3 năm", còn Buổi 3–4 ghi "4 năm".

**Case thật dùng ở nhiều buổi.** Chỉ nêu những gì báo chí hoặc phán quyết đã công bố, không quy lỗi cá nhân.
- Concert *"Về đây bốn cánh chim trời"* hủy phút chót (12/2025, Mỹ Đình).
- Vụ Live Nation–Ticketmaster: bồi thẩm đoàn kết luận độc quyền ngày 15/4/2026; DOJ hòa giải 3/2026.
- Vụ Kera (KOL, Buổi 11–12).
- Techcombank – Yeah1, VPBank, VIB (tài trợ, đồng kiến tạo).
- Marriott/Hilton cắt hoa hồng từ 10% xuống 7% (2018).
- DIFF 2026 (Buổi 1).

## 5. Nội dung 13 buổi học (đã soạn đủ bộ)

**Mỗi buổi gồm:**
- giáo án `lessons/WNN_lesson_plan.md`;
- ghi chú bài giảng `WNN_lecture_notes.md`;
- dàn ý slide `WNN_slides_outline.md`;
- 2 phiếu hoạt động `WNN_activity_S3/S6_*.md`, có phần riêng cho GV (lời mở đầu, mốc thời gian, tình huống thất bại, đáp án tham khảo);
- tư liệu tổng hợp `buoi-NN_tu-lieu-tong-hop.md`, có thẻ nguồn, ghi rõ số liệu đã/chưa KCC và quyết định của GV cho buổi đó;
- slide `slides/WNN_slides.pptx` và bản Roboto;
- tóm tắt cho sinh viên trong `lms/`.

### Buổi 1 – Định hình hệ sinh thái các bên liên quan bên ngoài (GV đã duyệt gói)

**Lý thuyết**
- Định nghĩa bên liên quan: Freeman (1984); Reid & Arcodia (2002) qua Holmes et al. (2015).
- Hệ sinh thái và 6 đặc điểm trong sự kiện.
- Primary/secondary: Clarkson (1995), Holmes et al.
- Một bên có thể giữ nhiều vai: Getz, Andersson & Larson.
- Power-Interest Grid: Mendelow (1981), kỷ yếu ICIS.
- Salience Model: Mitchell, Agle & Wood (1997), 7 loại.

**Thực hành**
- S4: sơ đồ tư duy phân loại bên liên quan cho tình huống An Phát.
- S6: poster Grid + Salience cho khách hàng dự án cũ của nhóm, rồi xoay trạm.
- S7: sửa poster ngay trên lớp.

**Quyết định GV (28/9)**
- Cập nhật nhẹ gói bài.
- Giáo trình chính là tài liệu nội bộ UEF.
- Dùng case DIFF 2026.

### Buổi 2 – KAM Mindset & Key Account Selection

**Lý thuyết**
- "Selling with knobs on".
- Từ key account selling sang KAM: Millman & Wilson (1995).
- KAM là quan hệ hai chiều, dài hạn: McDonald, Millman & Rogers (1997).
- Bảng so sánh Sales và KAM theo 4 khía cạnh: Homburg et al. (2002).
- Ba tiêu chí chọn Key Account theo khung Cranfield:
  - hai trục chấm có trọng số: sức hấp dẫn khách hàng × vị thế cạnh tranh của agency;
  - một cổng "sẵn sàng đồng đầu tư" ("choose me and I will choose you").

**Thực hành**
- S3: phân loại hành vi Sales hay KAM.
- S6: chấm 5 ứng viên, chọn tối đa 2 Key Account; anh Đức hỏi vặn.

**Quyết định GV:** Marcos et al. (2018) dùng làm tài liệu đọc thêm.

### Buổi 3 – Understanding the Customer & Customer Journey

**Lý thuyết**
- Stage A "analysing the customer's world" (Cranfield Value Planning Framework).
- PESTEL và đối thủ của khách hàng. Ví dụ: tín dụng ngân hàng 2026.
- Hành trình 3 giai đoạn, 4 loại điểm chạm (Lemon & Verhoef 2016).
- Hai lớp hành trình: hành trình của khách của Key Account; hành trình Key Account mua dịch vụ từ agency.
- DMU/buying center: Webster & Wind (1972).
- GRASP: Goal, Role, Appeal, State, Power. Nguồn: slide bộ môn Chương 3.

**Thực hành**
- S3: thẻ dữ kiện "thế giới An Phát".
- S6: hành trình của 600 khách VIP và GRASP cho DMU (vai chị Hạnh).

**Chữ G trong GRASP chưa thống nhất – GV cần chốt**
- W03 §3.2 và đáp án S6: G là mục tiêu và KPI **của họ**.
- Tóm tắt LMS Buổi 3 §6: G là mục tiêu và kế hoạch hành động **của chúng ta** với người đó, viết sau cùng (theo Marcos et al. 2018).
- Khi chấm khóa trước, cả hai cách hiểu đều được chấp nhận.

### Buổi 4 – Measuring Relationship Quality

**Lý thuyết**
- Ba trụ cột, theo định nghĩa nguyên văn của Morgan & Hunt (1994):
  - trust;
  - commitment;
  - functional conflict: là kết quả của trust, không có nghĩa là "ít xung đột".
- Cooperation: Anderson & Narus (1990).
- Đo bằng bộ câu hỏi đơn giản của môn:
  - 2–3 câu/trụ cột, thang 1–5, hỏi cả hai phía;
  - ghi rõ đây không phải thang đo đã kiểm định.
- Từ giao dịch sang quan hệ: Dwyer et al. (1987). Không nêu tên các giai đoạn khi chưa đọc toàn văn.
- Bối cảnh "quan hệ" ở Việt Nam: thể diện, có qua có lại.

**Thực hành**
- S3: chẩn đoán quan hệ qua thẻ bằng chứng.
- S6: đóng vai "cuộc trò chuyện sau gala".

### Buổi 5 – CVP & Value Co-creation

**Lý thuyết**
- CVP thường bị coi là "marketing puffery".
- Ba kiểu CVP: Anderson, Narus & van Rossum (2006).
- Cấu trúc Future state – Offering (7Ps) – Value appraisal: slide bộ môn Chương 4; 7Ps theo Booms & Bitner (1981).
- Năm nguồn giá trị theo đề cương: top-line, bottom-line, HSSEQ, advisory, customer's customer.
  - Slide Chương 4 có 6 nguồn. Nguồn thứ 6 "business reputation and continuity" chỉ ghi chú.
  - HSSEQ, khi áp cho agency, không đi sâu an toàn đám đông.
- Đồng kiến tạo: co-diagnosis, co-ideation, co-design, co-testing (Marcos-Cuevas et al. 2016, nguyên văn).
- Case: VPBank, Techcombank.

**Thực hành**
- S3: viết lại CVP.
- S6: thiết kế chu trình đồng kiến tạo (vai chị Hạnh).

### Buổi 6 – Financial Acumen in KAM

**Lý thuyết**
- CLV: Gupta et al. (2006), Berger & Nasr (1998).
- Công thức của môn: **CLV ≈ Σ(t=1..T) m × r^(t−1) / (1+d)^t**
  - m = lợi nhuận gộp − cost-to-serve riêng của khách hàng;
  - "năm 1 chắc chắn" nghĩa là năm 1 không nhân r nhưng **vẫn chiết khấu**. Nên ghi rõ điều này trong tài liệu;
  - đây là dạng đơn giản dùng cho học tập [VERIFY].
- Ví dụ An Phát:
  - doanh thu 2.300 triệu, biên gộp 18% → lợi nhuận gộp 414 triệu;
  - CTS 80 triệu → m = 334 triệu;
  - r = 85%, d = 12%, T = 5 → CLV ≈ 926 triệu.
- Doanh số không đồng nghĩa với lợi nhuận. Cost-to-serve của agency.
- Ma trận biên lợi nhuận gộp × cost-to-serve, biến thể của Shapiro et al. (1987). Tên 4 ô còn [VERIFY]:

| | CTS thấp | CTS cao |
|---|---|---|
| Biên gộp cao | Passive | Carriage trade |
| Biên gộp thấp | Bargain basement | Aggressive |

- Thông điệp "bilateral": không bán lỗ, không ép khách, cùng khách giảm chi phí phục vụ.

**Thực hành**
- S3: tính CLV cho 3 khách hàng.
- S6: đặt 5 khách hàng lên ma trận và đề xuất hành động.

### Buổi 7 – Understanding Procurement & Value-based Negotiation

Khung góc nhìn đã duyệt ngày 27/9/2026, xem `lessons/W07_khung_goc_nhin.md`. Agency vừa **bán** cho Key Account vừa **mua** từ nhà cung cấp.

**7.1 – Kraljic**
- Agency xếp các **hạng mục mua** theo Kraljic (profit impact × supply risk; Kraljic 1983, CIPS), rồi mới suy ra vị thế nhà cung cấp và chiến lược quan hệ.
- Một nhà cung cấp có thể nằm ở nhiều ô. Ví dụ với khách sạn:
  - phòng khối: Leverage;
  - ballroom tháng 12: Strategic/Bottleneck;
  - AV nội bộ bắt buộc: Bottleneck.
- Kết quả xếp chỉ là ảnh chụp tại một thời điểm (Gelderman & van Weele 2003).
- Ví dụ phải là hạng mục cụ thể, chẳng hạn "ballroom 800 khách tháng 12".

**7.2 – Procurement và Buying**
- Procurement (chiến lược) khác Buying (thực thi), xét bên trong agency (CIPS; Marcos et al. 2018 Ch.10).
- "Customer of choice" là hành động của agency: gom chi tiêu, thu gọn danh mục nhà cung cấp, cam kết dài hạn.
- RFP/RFQ để sang Buổi 10.

**7.3 – Đàm phán với Key Account**
- Customer (Buyer) là Key Account; KAMer là người của agency.
- Đàm phán phân phối và đàm phán tích hợp (Harvard PON).
- Tách bạch Risk và Value bằng kết quả Kraljic: hạng mục Leverage/Non-critical là chỗ có thể nhượng; hạng mục Strategic/Bottleneck là chỗ phải giữ.
- Công cụ: cost : price : value : risk; cost-plus / value-based / outcome-based pricing.
- "Dropping your price is not adding value."
- Nhượng bộ có điều kiện: đổi lấy phạm vi, thời gian, điều kiện thanh toán hoặc cam kết.

**Thực hành**
- S3: xếp Kraljic các hạng mục mua của sự kiện cho Key Account.
- S6: đóng vai đàm phán (An Phát đòi giảm giá, đội KAM của Nova), có thẻ mật và lật thẻ.

**Tư liệu:** 28 nguồn (S01–S28), bộ lõi 20 nguồn. Còn thiếu:
- case agency xây đối tác chiến lược thành công;
- thực tiễn quản lý nhà cung cấp của agency Việt Nam;
- số liệu biên lợi nhuận riêng của event agency.

### Buổi 8 – Governing the Key Account Relationship & Multi-dimensional Performance Measurement

**Lý thuyết**
- Bow-tie → Diamond là lộ trình theo giai đoạn của quan hệ, không dạy theo kiểu "Bow-tie là sai".
- Vì sao phải chuyển sang Diamond: quan hệ kéo dài 7–10 năm, trong khi nhiệm kỳ CMO trung bình khoảng 4,3 năm.
- Chỉ số results-driven và process-driven; chỉ số leading và lagging.
- ROI Methodology: giới thiệu cả bản 5 cấp (ROI Institute – Phillips) và bản 6 cấp (Event ROI Institute), kèm phân tích mức phù hợp với Việt Nam.
  - 6 cấp: 0 đúng người · 1 hài lòng · 2 learning · 3 behaviour · 4 impact · 5 ROI.
  - Agency cam kết và báo cáo cấp 0–3. Cấp 4–5 đo cùng khách hàng khi khách chia sẻ dữ liệu, thống nhất từ đầu.
- Đánh giá chung định kỳ (QBR): chương trình 5 phần, đánh giá hai chiều.
- Báo cáo sau sự kiện trở thành lịch sử quan hệ.

**Thực hành**
- S1: tin "chị Hạnh chuyển việc".
- S3: vẽ sơ đồ tiếp xúc.
- S6: họp đánh giá chung với anh Minh.

**Ranh giới:** Diamond chỉ ở mức "ai của agency gặp ai của Key Account". Không dạy quản lý đội KAM vì đó là nội bộ.

### Buổi 9 – Resource Matching: Investors & Sponsors

**Góc nhìn hai lớp**
- Nova làm sự kiện cho An Phát. Nhà tài trợ là đối tác của Key Account.
- Nova thiết kế quyền lợi, kích hoạt và đo lường thay mặt An Phát.
- Case concert chỉ dùng làm lớp tham chiếu.

**Định nghĩa làm việc**
- Nhà đầu tư: góp vốn, chia rủi ro và lợi nhuận.
- Nhà tài trợ: mua quyền lợi.

**Lý thuyết**
- Tài trợ bắt đầu từ mục tiêu (Meenaghan 1983; bổ sung Cornwell 2020).
- 7 phần của một đề xuất win-win.
- Activation và activation ratio.
- ROI kết hợp ROO, nối với khung 6 cấp ở Buổi 8. ROI âm vẫn có thể chấp nhận nếu mục tiêu là ROO.
- "Làm giàu, không làm phiền" trải nghiệm của khách.
- Giới hạn pháp lý (Luật Quảng cáo 2025); dữ liệu khách.

**Thực hành**
- S3: chọn nhà tài trợ (Bình An, GlobalCard).
- S6: bản đồ điểm chạm tài trợ trên hành trình khách VIP.

### Buổi 10 – Building Solutions: Supplier & Venue Management

**Ranh giới**
- Buổi 7 là chiến lược. Buổi 10 là tác nghiệp: RFI–RFP–RFQ, chấm điểm có trọng số (ví dụ giả định: chất lượng 60 / tổng chi phí 40), site check, space mapping.
- PCCC và an toàn đám đông chỉ nhắc "hỏi giấy phép, sức chứa chính thức".
- Dùng đơn vị m², sq ft để ở chú thích.
- Quy định mua sắm của Key Account chỉ nêu một câu, không đi sâu Luật Đấu thầu.

**10.3**
- Phân tích hành trình mua của chính An Phát với Nova.
- Nhà cung cấp và địa điểm là điểm chạm do đối tác sở hữu, được phân bổ vào giai đoạn mua và sau mua.

**Case**
- Nova chọn khách sạn và nhà cung cấp cho gala 12/12 (giả định).
- Mỹ Đình dùng để mở đầu mục 10.2.
- *Những thành phố mơ màng* làm ví dụ site check.
- GEM Center làm ví dụ vênh thông số, không nêu tên.

**Nguồn:** Dowson et al. (2023), chương 5 và 9; Silvers (2008).

**Thực hành**
- S3: chấm hồ sơ khách sạn.
- S6: phân bổ nhà cung cấp (vai anh Khoa).

### Buổi 11 – Spreading Value: Media & Influencers

**11.4:** trục là giai đoạn trước sự kiện của khách An Phát, từ lúc nhận lời mời đến trước ngày 12/12. Nova dùng báo kinh tế và KOL dạng chuyên gia/diễn giả để khuếch đại điểm chạm.

**Lý thuyết**
- Phân loại KOL:
  - theo quy mô (khoảng tham khảo);
  - theo vai trò; KOC; chuyên gia.
- Tiêu chí chọn: độ tin cậy, chất lượng nội dung, cộng hưởng.
- Quy trình booking 8 bước.
- Đưa nghĩa vụ luật định vào hợp đồng: Luật Báo chí 2025, Luật Quảng cáo 2025 (đã đối chiếu nguyên văn).
- Thanh toán và chứng từ.
- Đo lường theo Barcelona Principles 4.0 (không dùng AVE), ánh xạ gần đúng sang ROI 6 cấp.
- Một slide về nguyên tắc đạo đức khi làm việc với nhà báo.

**Ranh giới:** xử lý khủng hoảng khi KOL hoặc nhà báo gây sự cố để sang Buổi 12.

**Case thật chính:** vụ Kera; KOL tài chính và UBCKNN.

**Thực hành**
- S3: chọn diễn giả/KOL.
- S6: kế hoạch khuếch đại trước sự kiện (vai chị Vy).

### Buổi 12 – Leverage & Resolving Network Conflicts

**Khái niệm**
- Leverage là giá trị do quan hệ dài hạn tạo ra (relational rents – Dyer & Singh 1998), không phải dùng quyền lực ép đối tác.
- Định nghĩa làm việc "xung đột lợi ích": lợi ích của một bên ngoài (hoặc của các vai khác nhau của cùng một bên) đi ngược cam kết của Nova với Key Account.

**Lý thuyết**
- Commitment–trust; minh bạch thông tin; một bên giữ nhiều vai.
- "Quảng trường chính trị": Larson (2002), bổ sung Larson & Wikström (2001).
- Quy trình 5 bước bảo vệ deliverables.
- SCCT chỉ ở mức phối hợp bên liên quan: Nova khuyến nghị, không phát ngôn thay Key Account.
- Ẩn dụ bullwhip, một slide.
- Ma trận khủng hoảng (slide bộ môn).
- Luật Báo chí 2025, Điều 34 và 36.
- APEX Event Specifications Guide (ESG) là công cụ minh bạch cho cả mạng lưới. Khi có thay đổi phải cập nhật ESG cho mọi bên.

**Thực hành**
- S3: "tuần cuối trước gala", nhiều xung đột xảy ra cùng lúc.
- S6: chạy thử SMP. Nhóm vẽ mạng lưới SMP và 2 xung đột, rồi xoay trạm với vai hội đồng bảo vệ.

### Buổi 13 – Building the SMP around the KAP (buổi xưởng)

**Lý thuyết (45')**
- Giới thiệu đề thi.
- SMP = KAP + các bên ngoài.
- Value Planning Framework E–A–B–C–D (Cranfield; Marcos et al. 2018 Ch.3, đã đọc toàn văn).
- Câu hỏi của từng phần theo đề thi.
- Value proposition định lượng.
- Tích hợp bên ngoài vào phần D theo hành trình khách hàng.
- Executive Summary 5 câu.
- 10 lỗi thường gặp của key account plan (Cranfield).

**Thực hành (76')**
- S3: ráp khung A–E và bảng truy vết các trang đã làm từ Buổi 1–13.
- S6: viết phần D và phần E, xoay trạm với vai Customer Board (hỏi logic tài chính và chiến lược điểm chạm).

**Quyết định GV**
- Ví dụ An Phát chỉ trình bày bộ khung, 2–3 dòng mỗi phần; không phát bài mẫu hoàn chỉnh.
- Không dùng số liệu Z05.
- Checklist tự rà soát chỉ để sinh viên tự rà, không phải rubric.

### Buổi 14–15 – Bảo vệ SMP trước "Customer Board"

- Theo đề thi mục 5: mỗi nhóm 30 phút (15' trình bày trong vai KAM Director, 15' hỏi đáp).
- Mỗi thành viên trả lời ít nhất 1 câu; GV có thể chỉ định người trả lời.
- Không có giáo án riêng.

## 6. Đề thi cuối kỳ SMP (50%)

**Tệp:** `assessments/EVM1110E_De_thi_cuoi_ky_SMP.docx`, theo mẫu đề BM03a/QT01/KT/VN.

**Hình thức**
- Tiểu luận nhóm SMP kết hợp thuyết trình, bảo vệ, phản biện (AM7 + AM9).
- Mỗi nhóm (theo danh sách chia ở Buổi 1) chọn 1 khách hàng là tổ chức, lấy từ dự án ở học phần trước.
- Nhóm đóng vai agency. Phạm vi chỉ gồm các bên ngoài.

**Định dạng**
- A4, Times New Roman 13, giãn dòng 1,3.
- Lề trên/dưới 2 cm, trái 3 cm, phải 2 cm; có đánh số trang.
- Bìa gồm: trường, khoa; tên và mã môn; lớp; tên nhóm; họ tên và MSSV; tên khách hàng (được viết tắt); GV; ngày nộp.

**Cấu trúc:** E (tối đa 1 trang, đặt đầu) → A Value Insights → B Value Opportunities → C Value Propositions → D Value Delivery (gồm điều phối bên ngoài) → TLTK theo APA 7 → Phụ lục.

**Bốn phụ lục bắt buộc**
1. Phân công và tự đánh giá đóng góp.
2. Truy vết các trang làm trên lớp Buổi 1–13, kèm ảnh chụp.
3. Danh sách giả định chính.
4. Công bố sử dụng AI (nếu có): công cụ nào, dùng cho phần nào, nhóm đã kiểm tra và sửa gì. Mọi thành viên phải tự giải thích được mọi phần.

**Liêm chính**
- Mọi số liệu phải có nguồn hoặc ghi "Giả định: … vì …".
- Không bịa số liệu.
- Không đưa thông tin cá nhân của người thật; dùng chức danh.

**Nộp bài:** 1 tệp PDF SMP và 1 tệp slide, đặt tên `EVM1110E_Nhom[số]_SMP.pdf` và `_Slide.pdf/.pptx`.

**Câu hỏi của từng phần**
- **A:** Khách hàng là ai, đang ở hoàn cảnh nào? PESTEL và đối thủ của khách hàng tạo ra nhu cầu gì? DMU/GRASP? Hành trình của khách của khách hàng (trước – trong – sau, loại điểm chạm)? Vị trí các bên ngoài trên Grid và Salience?
- **B:** Vì sao là Key Account (ba tiêu chí)? Chất lượng quan hệ? CLV và cost-to-serve, kèm giả định? Cơ hội và rủi ro?
- **C:** Future state – Offering 7Ps – Value appraisal? Năm nguồn giá trị, có định lượng? Các bước đồng kiến tạo?
- **D:** Sơ đồ tiếp xúc nhiều cấp; chỉ số kết quả – quá trình; đánh giá chung; mua sắm và đàm phán. Nhà tài trợ, nhà cung cấp/địa điểm, báo chí/KOL gắn với điểm chạm nào, tạo giá trị gì, quản lý bằng công cụ nào? Xung đột mạng lưới và cách bảo vệ cam kết?
- **E:** Một trang đủ để Customer Board ra quyết định.

**Các chỗ đề thi `.docx` còn để trống – phải điền cho lớp mới**

| Mục trong đề | Hiện trạng | Ghi chú |
|---|---|---|
| Độ dài nội dung chính | "[GV điền, đề xuất 20–30] trang" | Khóa trước áp dụng 20–30 trang |
| Hạn nộp | 23:59 ngày 14/10/2026 (khóa trước) | [NEEDS PROFESSOR INPUT] hạn mới cho từng lớp |
| Xử lý nộp trễ | "[GV điền theo quy định của Khoa/Trường]" | Passport ghi: trễ 1 ngày trừ 20%, không nhận trễ quá 3 ngày. Cần điền vào đề cho khớp |
| Ngôn ngữ trình bày và slide | "[GV điền: tiếng Việt / tiếng Anh / song ngữ]" | [NEEDS PROFESSOR INPUT] |
| Cách áp AM9 vào điểm cá nhân | "[GV điền cách áp dụng…]" | Khóa trước dùng tỷ lệ đóng góp ở phụ lục (mục 8) |

**Nên bổ sung vào đề**
- Nhóm tối thiểu 4 thành viên (khóa trước GV áp dụng nhưng đề không ghi).
- Nộp kèm lịch sử phiên bản và tệp tính toán gốc (Excel CLV/CTS).
- Không upload bài lên LMS thì tính vắng thi.
- [NEEDS PROFESSOR INPUT] Có chấp nhận Key Account là nhà tài trợ chưa ký cho một concept hay không.

## 7. Rubric 11 tiêu chí và bảng mô tả chi tiết

**Thang mức:** Xuất sắc 9–10 · Tốt 7–8 · Trung bình 5–6 · Kém 0–4.
- Điểm tiêu chí = mức × trọng số.
- Điểm sinh viên = Phần I (chung nhóm) + TC8 (chung nhóm) + TC9–11 (cá nhân).

**Phần I – Bài viết (60%)**

| TC | Nội dung | Trọng số |
|---|---|---|
| 1 | Executive Summary (E) | 5% |
| 2 | Value Insights (A) | 12% |
| 3 | Value Opportunities (B): ba tiêu chí Key Account, chất lượng quan hệ, CLV/CTS, cơ hội – rủi ro | 10% |
| 4 | Value Propositions (C): CVP, năm nguồn, đồng kiến tạo | 10% |
| 5 | Value Delivery – Key Account: Kraljic/đàm phán, Bow-tie→Diamond, chỉ số, ROI 6 cấp, đánh giá chung | 8% |
| 6 | Value Delivery – bên ngoài (13.2): tài trợ/đầu tư, NCC/địa điểm, báo chí/KOL, mạng lưới, xung đột | 10% |
| 7 | Trình bày, nguồn, liêm chính | 5% |

**Phần II – Thuyết trình và bảo vệ (40%)**

| TC | Nội dung | Trọng số |
|---|---|---|
| 8 | Trình bày (điểm chung nhóm): vai KAM Director, cấu trúc, thời gian, slide | 10% |
| 9 | Bảo vệ logic tài chính (cá nhân): CLV, CTS, độ nhạy | 10% |
| 10 | Bảo vệ chiến lược điểm chạm (cá nhân) | 10% |
| 11 | Phản biện và làm việc nhóm (cá nhân): giải thích được cả phần không do mình viết | 10% |

**Bảng mô tả chi tiết:** `assessments/notebooklm_cham_SMP/01_Bang_mo_ta_muc_diem_chi_tiet.md`.
- 44 mục con: E1–6, A1–7, B1–6, C1–6, D1–6, X1–7, P1–6.
- Mỗi mục chấm 0/1/2, ghi trang làm bằng chứng.
- Mức tiêu chí = 10 × tổng ÷ tối đa, làm tròn 0,25, rồi áp trần theo mô tả mức Trung bình/Kém.
- Một số trần: TC2 nói về agency → ≤4; TC5 chỉ đo hài lòng → ≤6; TC7 thiếu phụ lục bắt buộc → ≤4.
- P2 (định dạng) do GV chấm.
- Khi bảng mô tả khác đề thi, lấy đề thi làm căn cứ.

**Quy tắc thống nhất khi chấm (giữ cho lớp mới)**

| Tình huống trong bài | Điểm mục con |
|---|---|
| Hành trình không phân loại điểm chạm | A4 = 1 |
| ROI 6 cấp không tách cấp agency cam kết | D4 = 1 |
| Kraljic sai góc nhìn | D1 = 1 |
| Future state viết bằng ngôn ngữ agency | C1 = 1 |
| GRASP hiểu chữ G theo một trong hai cách | Không trừ; chỉ trừ khi thiếu thành phần |

- **Kiểm tra CLV:** tính lại theo công thức của môn. Lệch hơn 5% thì ghi "tính sai". Khác quy ước (năm 1 không chiết khấu, có năm 0, perpetuity) không tính là sai.
- **Cân nhắc cho lớp mới:**
  - Khóa trước, TC7 bị trần ≤4 ở 6/7 bài nên gần như không còn phân biệt được bài tốt và bài kém.
  - Hiện bài viết tốt vẫn kéo điểm cá nhân lên dù người viết không bảo vệ được.

**Hướng dẫn chấm bằng NotebookLM:** `assessments/notebooklm_cham_SMP/00_Huong_dan_cau_hinh_va_prompt.md`.
- Cấu hình: 1 sổ NotebookLM cho mỗi nhóm, cộng 1 sổ hiệu chỉnh. Bản hiện tại viết cho 7 nhóm; đổi số sổ theo lớp mới.
- Nguồn nạp vào sổ:
  - R1: đề thi;
  - R2: bảng mô tả mức điểm;
  - R3: kiến thức môn Buổi 1–13 (`02_Kien_thuc_mon_hoc_B1-13.pdf`).
- Chuỗi prompt:
  - P0: kiểm tra nguồn;
  - P1–P7: chấm từng tiêu chí;
  - P8: tổng hợp phiếu Phần I;
  - P9: câu hỏi vấn đáp riêng cho từng nhóm và từng thành viên.
- Prompt hiệu chỉnh H1–H4: bảng tổng, kiểm tra nhất quán, tách các nhóm có điểm gần nhau, báo cáo.
- Kèm theo: phiếu ghi Phần II tại buổi bảo vệ; checklist của GV trước khi chốt điểm.
- **Nguyên tắc:**
  - NotebookLM chỉ đề xuất, GV quyết định.
  - Mọi điểm phải có trang và trích dẫn.
  - Không dùng để "phát hiện AI".
  - Ẩn danh bài trước khi tải lên.
  - [NEEDS PROFESSOR INPUT] Quy định của Trường về việc đưa bài sinh viên lên công cụ AI.

**Checklist tự rà soát SMP:** `lessons/W13_checklist_tu_ra_soat_SMP.md`, bản docx/pdf trong `hoc_lieu/`.
- 47 câu, xếp theo thứ tự 11 tiêu chí; ký hiệu ✅ ⚠️ ❌.
- Kèm mẫu Phụ lục 4 (công bố AI) và 10 lỗi KAP theo Cranfield.
- Chỉ để sinh viên tự rà, không phải công cụ chấm.

## 8. Các thành phần đánh giá khác và cách tính điểm khóa trước

**Kiểm tra trắc nghiệm cá nhân Buổi 1–8:** `assessments/EVM1110E_kiem_tra_trac_nghiem_B1-B8.md/.pptx`.
- 10 câu tình huống Nova – An Phát, 1 điểm/câu, khoảng 15 phút. Đang là bản soạn chờ GV xác nhận.
- Đáp án: 1C · 2A · 3B · 4C · 5D · 6D · 7A · 8C · 9B · 10A.
- Phân bố câu theo buổi: Buổi 1 (câu 1), 2 (câu 2), 3 (câu 3), 4 (câu 4), 5 (câu 5), 6 (câu 6–7), 7 (câu 8), 8 (câu 9–10).
- Chỉ dành cho GV. Nên xáo đáp án nếu dùng lại.
- [NEEDS PROFESSOR INPUT] Bài này tính vào thành phần nào (AM2?).

**Các thành phần chưa có công cụ riêng**
- AM1 chuyên cần, AM2 bài tập, AM3 giữa kỳ.
- [NEEDS PROFESSOR INPUT] Quy định chuyên cần, liêm chính, nộp trễ cho các bài ngoài SMP.

**Rubric chung của chương trình** (phụ lục đề cương, 6 mức theo PLO): giữ nguyên, không sửa.

**Cách tính điểm khóa trước** (chỉ là tiền lệ, GV quyết lại cho lớp mới)

*Giữa kỳ (lấy từ bài viết SMP Phần I):*
1. Đổi điểm nhóm về thang 10.
2. Nhân cùng một hệ số để nhóm cao nhất đạt 8,5.
3. Hiển thị theo mục A, B, C, D (= TC5 + TC6), E, Trình bày. Làm tròn 1 chữ số, dùng largest-remainder để các mục cộng đúng bằng tổng.
4. Nhân 3 để đổi sang thang 30.
5. Điểm cá nhân = điểm nhóm × tỷ lệ đóng góp (nhóm không ghi tỷ lệ thì mặc định 100%), làm tròn số nguyên.

*Cuối kỳ (thang 100):*
- Nội dung = điểm nhóm /30 × tỷ lệ đóng góp.
- Thuyết trình = 20 × %, điểm chung nhóm.
- Vấn đáp nhóm = 20 × câu 1 + 20 × câu 2 (+ 20 × câu vớt nếu có), điểm chung nhóm.
- Vấn đáp cá nhân = 10 × %.
- Làm tròn từng phần đến hàng đơn vị; tổng bằng tổng các phần đã làm tròn.
- Nhóm không upload bài lên LMS: tính vắng thi, không chấm.

*Mẫu trình bày kết quả.* GV yêu cầu dạng khối để dễ dán vào ô nhận xét, không dùng bảng:

```
Nhóm …
[Họ tên]
Điểm nội dung: x (tỷ lệ đóng góp y%)
Điểm thuyết trình: …
Điểm vấn đáp nhóm: …
Điểm vấn đáp cá nhân: …
Tổng điểm: …
```

*Khi GV chọn chấm nới lỏng cho một nhóm:*
- mục 1 → 2, mục 0 → 1 nếu nhóm giải thích được ở vấn đáp;
- bỏ trần do đánh giá chất lượng, giữ trần do thiếu sự kiện khách quan;
- không nới các mục hình thức;
- khuyến nghị thể hiện kết quả vấn đáp ở Phần II thay vì sửa Phần I.

**Mẫu câu hỏi vấn đáp GV ưa dùng**
- **2 câu chung:** để cả nhóm thảo luận.
- **1 câu cá nhân cho mỗi sinh viên:**
  - kết hợp 2 trong 3 tiêu chí TC9/TC10/TC11;
  - ưu tiên phần không do sinh viên đó viết (theo phụ lục phân công);
  - gắn với số liệu và trang cụ thể của bài.
- **1 câu vớt:** dạng thảo luận nhóm, đưa tình huống mới chạm vào điểm yếu. Chỉ hỏi khi nhóm trả lời câu chung chưa ổn.
- Mỗi câu kèm "Cần nghe" hoặc "Gợi ý trả lời".
- Nên ghi biên bản vấn đáp.

## 9. Lỗi phổ biến khóa trước và cách xử lý nghi vấn AI

**Lỗi cần nhấn mạnh ở Buổi 3, 6, 7, 8, 13**
- PESTEL và "đối thủ" phân tích sự kiện thay vì phân tích khách hàng.
- Lẫn cost-to-serve với chi phí thực hiện sự kiện.
- CLV có kết quả nhưng không truy được đầu vào; dùng sai quy ước năm 1.
- Kraljic xếp nhà cung cấp, hoặc xếp dịch vụ của chính agency.
- ROI 6 cấp không tách cấp cam kết.
- Future state viết bằng ngôn ngữ agency.
- "Đánh giá chung" bị hiểu sai thành quan hệ khách hàng – cư dân, thay vì đánh giá hai chiều agency – khách hàng.
- Thiếu TLTK; thiếu phụ lục truy vết kèm ảnh.
- Có tên người thật phía khách hàng.
- Đặt phần E ở cuối bài.
- Các con số ngân sách mâu thuẫn nhau.
- Câu do AI viết bị sót lại, chưa biên tập.

**Xử lý nghi vấn AI và liêm chính**
- Không trừ điểm vì "nghi dùng AI". Chỉ chấm theo rubric.
- Ghi lại các dấu hiệu "bề nổi, chưa biên tập" để hỏi lại ở vấn đáp.
- Siêu dữ liệu tệp chỉ là dấu hiệu, không phải bằng chứng.
- Khi cần xác minh:
  - yêu cầu lịch sử phiên bản, tệp tính toán, link hội thoại AI;
  - tổ chức vấn đáp bổ sung có biên bản;
  - theo quy trình của Khoa.

## 10. Quy tắc nguồn và các cảnh báo đã phát hiện

**Quy tắc chung**
- Không bịa nguồn, số liệu, trích dẫn, tên người hay tên doanh nghiệp.
- Tình huống giả định luôn ghi nhãn "giả định".
- Case thật chỉ nêu điều đã được báo chí hoặc phán quyết công bố.

**Cảnh báo về NotebookLM**
- NotebookLM trích sai nhiều nội dung slide bộ môn, chép tên mục đề cương thành "bằng chứng". Xem `source_map.md`.
- Khi chạy NotebookLM, bỏ chọn tệp đề cương và đọc trực tiếp slide Chương 1–5.
- Không dùng cột "Bằng chứng" của NotebookLM khi chưa đối chiếu.

**Cảnh báo về nguồn cụ thể**
- GRASP có nguồn ở slide bộ môn Chương 3, không phải Chương 2.
- Ba tiêu chí chọn Key Account của đề cương không có trong slide bộ môn, nên dùng khung Cranfield.
- Slide Chương 4 có 6 nguồn giá trị. Đề cương và đề thi chấm theo 5; GV quyết định giữ 5 và ghi chú nguồn thứ 6.
- Tệp "Events and sustainability-1.pdf" là Holmes, Hughes, Mair & Carlsen (2015), *Events and Sustainability*, Routledge, không phải Getz & Page (2012).
- Power-Interest Grid là của Mendelow (1981). Nhiều tài liệu ghi nhầm là 1991.
- Bản dịch tiếng Nhật bài Kraljic (1983) chỉ dùng nội bộ; người dịch đề nghị không phát lại.

**Pháp lý Việt Nam đã đối chiếu nguyên văn:** Luật Báo chí 2025 (Điều 34, 36), Luật Quảng cáo 75/2025. Cần kiểm tra lại hiệu lực trước mỗi kỳ [VERIFY].

## 11. Bản đồ tệp

Đường dẫn tính từ `courses/EVM1110E/`.

```
00_BOI_CANH_CHUYEN_GIAO.md / .pdf   ← tệp này (bản hợp nhất)
00_BOI_CANH_TONG_HOP.md             bản tổng hợp của phiên kia (đã gộp vào đây)
course_passport.yaml                quyết định, CLO, đánh giá, chính sách
syllabus/                           đề cương hiệu chỉnh (bản sạch + track changes)
lessons/                            WNN_lesson_plan | lecture_notes | slides_outline | activity_S3/S6
                                    buoi-NN_tu-lieu-tong-hop.md · W07_khung_goc_nhin.md
                                    W13_checklist_tu_ra_soat_SMP.md
slides/                             WNN_slides.pptx | WNN_slides_Roboto.pptx · src/ (mã nguồn deck)
lms/                                tóm tắt cho SV (md | docx | pdf) · build_html.js · build_docx.js
assessments/                        đề thi SMP (.docx) · trắc nghiệm B1–8 (.md | .pptx)
                                    notebooklm_cham_SMP/ (hướng dẫn, bảng 44 mục, kiến thức B1–13)
hoc_lieu/                           mục lục · hồ sơ bài giảng 13 buổi · tư liệu PDF · checklist · build_hoc_lieu.py
source_map.md · notebooklm_prompts.md
```

**Ghi chú về học liệu**
- **Slide:**
  - theo khuôn MKT1107 `W1_slides_v2`, tiêu đề là câu khẳng định;
  - mọi slide có lời giảng (Nói · GV · Hỏi lớp · Chuyển ý);
  - font Alexandria, bản dự phòng dùng Roboto;
  - 29–42 slide/buổi.
- **Tóm tắt LMS:** không chứa [VERIFY], số liệu chưa kiểm chứng hay nội dung trình chiếu.
- **Gói `hoc_lieu/`:**
  - thư mục A dành cho sinh viên;
  - thư mục B dành cho GV, có đáp án;
  - 195 tệp, khoảng 42 MB.
- **`notebooklm_prompts.md`:** quy trình 5 bước dựng deck như MKT1107.

**Lệnh dựng tài liệu**
- **PDF:**
  ```
  node lms/build_html.js in.md out.html
  CHROME --no-sandbox --no-pdf-header-footer --print-to-pdf=out.pdf out.html
  ```
  Tìm đường dẫn Chromium bằng `find /opt/pw-browsers -name chrome-headless-shell`.
- **DOCX:**
  ```
  NODE_PATH=<thư mục có docx@9> node lms/build_docx.js in.md out.docx "footer"
  ```
  Cần chạy `npm install docx@9` trong scratchpad trước.
- **Liệt kê các [VERIFY] còn lại:**
  ```
  python3 scripts/check_content_markers.py --files courses/EVM1110E/lessons/*.md
  ```
  Chạy từ gốc repo.
- **Lưu ý cú pháp markdown khi dựng:**
  - giữa các dòng bảng không để dòng trống;
  - hai bảng liền nhau phải có đoạn chữ ngăn giữa;
  - không dùng h4;
  - danh sách số đặt sau bullet phải viết dạng `**1.**`.

## 12. Quy trình làm việc đã thống nhất

1. **Nhu cầu tư liệu:** đọc đề cương của buổi → lập bảng các mục cần tư liệu → GV duyệt.
2. **Tìm và tổng hợp:**
   - tìm nguồn tiếng Anh và tiếng Việt, kiểm chứng chéo, lấy 12–20 nguồn;
   - lưu vào `buoi-NN_tu-lieu-tong-hop.md`;
   - chỉ tổng hợp, chưa soạn bài;
   - GV duyệt và ra quyết định.
3. **Soạn gói bài giảng:** giáo án, ghi chú, dàn ý slide, 2 phiếu hoạt động theo mẫu buổi ở mục 2 → GV duyệt.
4. **Dựng học liệu:** dựng deck theo khuôn MKT1107 → tóm tắt LMS → đóng gói học liệu.

**Cách trình bày mỗi lần gửi GV:**
- gồm bốn khối: Sản phẩm · Quyết định đã đưa ra thay GV · Lưu ý · Câu hỏi cho GV;
- tiếng Việt, rõ ràng, xưng "thầy/cô".

## 13. Việc còn mở cho 2 lớp mới

**Cần GV quyết định hoặc cung cấp**

| # | Việc | Ở đâu |
|---|---|---|
| 1 | Lịch học kỳ cho mỗi lớp: ngày Buổi 1, ngày bảo vệ, hạn nộp SMP | passport `term_calendar`, đề thi |
| 2 | Điền các chỗ trống trong đề thi: độ dài, nộp trễ, ngôn ngữ, cách áp AM9; thêm nhóm tối thiểu 4 người, nộp tệp tính toán, quy định vắng thi | đề thi `.docx` |
| 3 | Chốt định nghĩa chữ G trong GRASP, sửa W03 hoặc tóm tắt LMS Buổi 3 cho khớp | `lessons/W03_*`, `lms/` |
| 4 | Thống nhất Nova làm với An Phát 3 năm hay 4 năm | phiếu W07 S3 và Buổi 3–4 |
| 5 | Duyệt chính thức đề cương hiệu chỉnh | `syllabus/` |
| 6 | Gắn CLO8, CLO9 vào buổi cụ thể | đề cương, passport |
| 7 | Quy định chuyên cần, liêm chính, nộp trễ cho các bài ngoài SMP; điều kiện dự thi | passport `policies` |
| 8 | Công cụ cho AM2 và AM3; trắc nghiệm B1–8 tính vào thành phần nào | `assessments/` |
| 9 | Rubric và cách tính điểm giữa kỳ/cuối kỳ cho lớp mới (mục 8); khả năng phân biệt của TC7 | đề thi |
| 10 | Quy định của Trường về việc tải bài sinh viên lên NotebookLM | hướng dẫn chấm |
| 11 | Có chấp nhận Key Account là nhà tài trợ chưa ký không | đề thi |
| 12 | Tên gốc "Gross margin matrix" và tên 4 ô ma trận Shapiro | Buổi 6 |
| 13 | Nêu tên các giai đoạn quan hệ ở Buổi 4 hay để sang Buổi 8 | Buổi 4 |
| 14 | Các [VERIFY] còn lại trong ghi chú bài giảng và tư liệu | `lessons/` |
| 15 | Cập nhật `activities`/`artifact_refs` cho W2–W13 trong passport | `course_passport.yaml` |

**Phải đặt lại cho từng lớp**
- Sĩ số và số nhóm (6 hay 7).
  - Khi đổi số nhóm, sửa số sổ NotebookLM và số cặp đóng vai ở Buổi 7–8 (hiện là 3 cặp cho 6 nhóm).
  - Nếu số nhóm lẻ, cần một bộ ba hoặc GV đóng một vai.
- Lịch học và các mốc ngày.
- Ngôn ngữ thuyết trình.
- Phòng học có dán poster được không.
- Danh sách nhóm chia ở Buổi 1.
- Xáo đáp án trắc nghiệm.

**Dùng lại nguyên:** đề cương hiệu chỉnh, 13 gói bài giảng, slide, tóm tắt LMS, trắc nghiệm, khung đề thi, rubric, hướng dẫn chấm.

**Case study từ sự kiện thực tế** (thay hoặc bổ sung cho Nova – An Phát). Đang chờ GV:
- gửi proposal và báo giá;
- xác nhận quyền sử dụng (NDA, sự đồng ý của khách hàng);
- chọn ẩn danh hay giữ tên thật;
- chọn phạm vi:
  - (a) thay toàn bộ 13 buổi;
  - (b) giữ khung Nova – An Phát, chèn case thật vào Buổi 3, 5, 6, 7, 10 (khuyến nghị);
  - (c) làm bộ case study độc lập (khuyến nghị).

Quy trình: đọc tài liệu → gửi bảng ánh xạ "buổi ↔ phần tài liệu ↔ chỗ phải giả định" → GV duyệt → mới viết.

**Không đưa dữ liệu sinh viên** (danh sách, bài nộp, điểm) vào repo hay passport.
