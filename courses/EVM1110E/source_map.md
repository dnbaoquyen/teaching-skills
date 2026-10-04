# EVM1110E — Bản đồ nguồn ↔ buổi (kết quả NotebookLM Bước 1, đã rà soát)

**Ngày rà soát:** 4/10/2026 · **Trạng thái:** chờ GV duyệt.
**Đầu vào:** hai Google Sheet do GV gửi (Buổi 1–7: 18 dòng; Buổi 8–13: 17 dòng + danh mục 118 nguồn).
**Đối chiếu trực tiếp:** 5 file slide gốc trên Drive của GV — *Chương 1–5* (ThS. Trần Nguyễn Huỳnh Như,
file tạo năm 2023, bản sao lên Drive 16/9/2026).

---

## 1. Phát hiện quan trọng nhất: NotebookLM trích sai nội dung slide gốc

Claude đã đọc toàn văn 5 file *Chương 1–5* và so với các "bằng chứng nguyên văn" mà NotebookLM ghi.
**Nhiều câu NotebookLM ghi là trích từ slide nhưng thực chất chép lại tên mục trong đề cương**
(file `Introduction.pdf`, cũng đang nằm trong notebook). Vì vậy **không dùng cột "Bằng chứng" của
Bước 1 làm nguồn cho slide** khi chưa đối chiếu.

| Buổi | NotebookLM ghi | Slide gốc thực tế | Kết luận |
|---|---|---|---|
| 2.2 | Ch.1, "Slide 1.3": ba tiêu chí *Customer Attractiveness – Supplier's Competitive Position – Willingness to co-invest* | Ch.1 **không có**. Ch.2 mục 2.2.2 "Lựa chọn khách hàng" liệt kê tiêu chí khác: sự uy tín, rủi ro tài chính, chất lượng sản phẩm/dịch vụ, tính lâu dài và bền vững, hiệu suất cung cấp, dịch vụ khách hàng, giá cả và phương thức thanh toán | **Sai nguồn.** Ba tiêu chí của đề cương chưa có nguồn trong slide |
| 3.1 | Ch.2, "Mục 2.1": PESTEL và đối thủ của khách hàng | Ch.2 mục 2.1 là "Khách hàng trọng yếu trong sự kiện là ai"; không có PESTEL. Có **mẫu brief** (thông tin công ty – tổng quan dự án – thông tin chi tiết), có mục "đối thủ cạnh tranh" | **Sai nguồn** |
| 3.2 | Ch.2, "Mục 2.2": Customer journey pre/purchase/post | Hành trình khách hàng và touchpoint nằm ở **Ch.3** (mục "Yếu tố để có được MQH thành công"): ba giai đoạn, xác định mọi điểm tiếp xúc và tầm quan trọng tương đối | Đúng nội dung, **sai chương** |
| 3.3 | Ch.2, "Mục 2.3": DMU và GRASP | GRASP nằm ở **Ch.3**, có định nghĩa đủ 5 thành phần (xem mục 2). Ch.3 có thêm sơ đồ vai trò DMU: người khởi xướng, người dùng cuối, người ảnh hưởng, người quyết định, người kiểm soát (gatekeeper), người thực hiện quy trình mua | Đúng nội dung, **sai chương** — **đã có nguồn cho GRASP** |
| 4.1 | Ch.3, "Slide 3.1.2": xung đột chức năng, tin tưởng (chuyên môn & đạo đức), cam kết | Có thật trong Ch.3 mục 3.1.2 | **Đúng** |
| 4.2 | Ch.3, "Slide 3.1.1": giao dịch → hợp tác lâu dài | Có thật (sơ đồ quyền lực A–B theo Javier Marcos: cân bằng → hợp tác; không cân bằng → giao dịch) | **Đúng** |
| 5.1 | Ch.4, "Slide 4.2": Future State – Offering (7Ps) – Value Appraisal (KPIs/CPIs) | Ch.4 mục 4.2 có ba thành phần: **Mong muốn tương lai của khách hàng – Phương án cung cấp (7Ps) – Cam kết/Đánh giá giá trị (KPIs)**. Không có chữ "CPIs" | **Đúng phần lớn** — cấu trúc CVP 3 phần **đã có nguồn** |
| 5.2 | Ch.4, "Slide 4.1": năm nguồn giá trị | Ch.4 mục 4.2 liệt kê **sáu** mục: Top line, Bottom line, HSSEQ, **Business reputation and continuity**, Strategy/organizational/advisory, The customer's customer | **Lệch số lượng** (6 so với 5 của đề cương) — xem mục 3 |
| 5.3 | Ch.4, "Slide 4.3": co-diagnosis, co-ideation, co-design, co-testing | Mục lục Ch.4 có "4.4 Đồng sáng tạo cùng khách hàng trọng yếu", nhưng file PDF **không có nội dung chữ** cho mục này (có thể là hình hoặc slide bị thiếu) | **Chưa kiểm chứng được** |
| 8.1 | Ch.5, "Slide 5.3": sơ đồ đơn tuyến (bow-tie) đối lập đội liên chức năng (diamond) | Ch.5 mục 5.3 có sơ đồ Client – Account – Planner/Creatives/Operation – Supporters/Production house/Suppliers và 7 team. **Không có chữ bow-tie/diamond.** NotebookLM tự ghi chú điều này | Đúng mô tả, **không phải nguồn của mô hình bow-tie/diamond** |
| 8.3 | Ch.3, "Mục 3.3": relationship health check, joint account review | Ch.3 mục 3.3 nói về vai trò KAMgr và tổ chức nhân sự KAM; **không có** health check hay joint review | **Sai nguồn** |
| 11.1, 11.2, 11.4 | Ch.2, "Mục 2.2": dùng truyền thông, nhà báo, KOL khuếch đại pre-purchase touchpoints | Ch.2 mục 2.2.1 chỉ **liệt kê** nhóm "Truyền thông và PR" và "Đối tác nội dung (diễn giả, nghệ sĩ, KOL/KOC, livestream, mentor)"; mục 2.3.7 có quy trình làm việc với đối tác nội dung trước – trong – sau sự kiện. **Không có** câu về pre-purchase touchpoint | Câu "khuếch đại pre-purchase" **là tên mục đề cương, không phải slide** |
| 12.1 | Ch.3, "Slide 3.2": giá trị chiến lược của hợp tác dài hạn, minh bạch thông tin, chia sẻ rủi ro | Ch.3 mục 3.2 "Đặc điểm của mối quan hệ thành công": tương thích giá trị và mục tiêu, chia sẻ thông tin và giao tiếp, thiện chí giữa các cá nhân, trao đổi công bằng, song phương. **Không có** "chia sẻ rủi ro" | **Diễn giải quá mức** — dùng được phần chia sẻ thông tin |
| 13.1 | "Ch.1–Ch.5 tổng hợp 5 khối của Đồ án KAP: Khối A…E" | Không slide nào có khung A–E | **NotebookLM tự tổng hợp**, không phải nguồn |
| 13.2 | Ch.5, "Slide 5.3": đưa sơ đồ điều phối (… Media, Authorities) vào Khối D – Value Delivery | Không có "Khối D", không có "Authorities" trong sơ đồ | **Sai nguồn** |

**Hệ quả cho các bước sau:**
- Khi chạy Bước 2, **bỏ chọn `Introduction.pdf` (đề cương)** để NotebookLM không ghép tên mục đề cương
  vào nội dung slide.
- Với nguồn là slide Chương 1–5, Claude **đọc trực tiếp từ Drive**, không cần NotebookLM trích lại.
- Các trích dẫn khác chưa kiểm được (ví dụ Getz 2012 tr. 25 "Stakeholders may have conflicting
  priorities… careful trade-off management"; Boateng 2021 "noise pollution vs attendee experience")
  giữ nhãn `[VERIFY]` cho đến khi đối chiếu toàn văn.

---

## 2. Nội dung có thật trong slide gốc Chương 1–5 (đọc trực tiếp)

| Chương | Nội dung chính (đã kiểm) | Dùng cho buổi |
|---|---|---|
| **Ch.1** Tổng quan về quản lý khách hàng trong sự kiện | Định nghĩa Key account, KAM (chiến lược kinh doanh, quan hệ đối tác có lợi nhuận với khách hàng quan trọng về chiến lược; không phải quy trình biệt lập); 4 mục tiêu KAM; ý nghĩa chiến lược; tiêu đề "1.2 Sự khác nhau giữa bán hàng và KAM" (bảng là hình, không đọc được chữ); quy trình 12 bước Client brief → Monitor/report trong agency; lợi ích cho agency (4) và cho client (4); vai trò KAM; 6 khó khăn khi triển khai KAM | 2 |
| **Ch.2** Khách hàng trọng yếu trong sự kiện | Định nghĩa bên liên quan; 6 nhóm: khách mời & người tham gia, vendors, chính quyền & cơ quan thẩm quyền, nhà tài trợ, truyền thông & PR, đối tác nội dung; tiêu chí lựa chọn (7 tiêu chí — xem mục 1); cấu trúc bảng brief; Disconfirmation Theory (kỳ vọng – kết quả); Scope of Work; quy trình cụ thể hóa kỳ vọng 7 bước; cơ quan cấp phép (có chỗ gán sai cơ quan chủ quản — xem mục 4); phân loại khách tham dự; quy trình trước – trong – sau cho khách mời, vendors, nhà tài trợ, đối tác nội dung; **mục tiêu nhà tài trợ** (cơ bản: tiếp cận thị trường, hình ảnh, nhận thức; phức tạp: quan hệ khách hàng, truyền thông, tài sản thương hiệu, khác biệt); 6 nguyên tắc làm việc hiệu quả với KA | 1, 2, 3, 9, 10, 11 |
| **Ch.3** Xây dựng mối quan hệ với KA | Ba định nghĩa "mối quan hệ" (Czepiel; Buttle; Marcos); sơ đồ quyền lực cân bằng/không cân bằng (Marcos); **chất lượng quan hệ: xung đột (chức năng / rối loạn chức năng), tin tưởng (chuyên môn; trung thực, thiện chí), cam kết** kèm định nghĩa; đặc điểm quan hệ thành công; **hành trình khách hàng 3 giai đoạn + touchpoint**; **vai trò DMU (6 vai)**; **GRASP** — G: mục tiêu và kế hoạch hành động *của chúng ta* với thành viên DMU; R: vai trò trong DMU; A: điều gì hấp dẫn thành viên này về phương án; S: mối quan hệ hiện tại với thành viên này; P: trình độ và quyền lực; cấu trúc phòng marketing phía client; vai trò KAMgr | 3, 4, 8, 12 |
| **Ch.4** CVP | Định nghĩa CVP; **cấu trúc 3 phần: Mong muốn tương lai – Phương án cung cấp (7Ps) – Cam kết/Đánh giá giá trị (KPIs)**; **6 nguồn giá trị**; trích Levitt ("cái lỗ 1,4 inch"); 8 mẹo tối ưu phương án; mục 4.4 Đồng sáng tạo (không có chữ trong PDF) | 5, 9, 13 |
| **Ch.5** Đội ngũ KAM | Lý thuyết quản lý; efficiency vs effectiveness (hình trích sách — có thể là Robbins & Coulter, `[VERIFY]`); 10 vai trò quản lý của Mintzberg (3 nhóm); phân bổ thời gian KAMer; kỹ năng (nhận thức, xã hội, chính trị, kỹ thuật); 8 phẩm chất; sơ đồ tổ chức agency (Client – Account – Planner – Creatives – Operation – Production house – Suppliers – Supporters); 7 team; yếu tố giúp đội KAM thành công | 8, 13 |

---

## 3. Điểm cần GV quyết định (ảnh hưởng tư liệu đã duyệt)

| # | Vấn đề | Đề xuất của Claude |
|---|---|---|
| Q1 | **GRASP, cấu trúc CVP 3 phần, nguồn giá trị** đang ghi là "định nghĩa làm việc của môn" (không có nguồn công khai). Slide gốc Ch.3–4 của bộ môn **có đủ** các nội dung này. | Trích là **tài liệu nội bộ của bộ môn** (ThS. Trần Nguyễn Huỳnh Như, slide bài giảng, 2023). GV xác nhận được phép trích, và năm đúng là 2023 hay 2025 (NotebookLM ghi 2025). |
| Q2 | **5 hay 6 nguồn giá trị?** Đề cương: 5 (top-line, bottom-line, HSSEQ, advisory, customer's customer). Slide Ch.4: 6 (thêm *business reputation and continuity*). Value Matters (2024): 5 nhưng khác (bottom line, top line, reputation, strategy & organisation, end consumer; không có HSSEQ). | Giữ **5 theo đề cương** (vì đề thi chấm theo đề cương), thêm một dòng ghi chú "slide gốc tách thêm *uy tín và tính liên tục kinh doanh*". Hoặc GV chọn dạy 6. |
| Q3 | **Tiêu chí chọn Key Account.** Đề cương: 3 tiêu chí (attractiveness, competitive position, willingness to co-invest). Slide Ch.2: 7 tiêu chí đánh giá **nhà cung cấp/đối tác** (uy tín, rủi ro tài chính…). | Giữ 3 tiêu chí của đề cương (đã có nguồn công khai trong tư liệu Buổi 2). Không dùng 7 tiêu chí của slide cho mục này, vì đó là tiêu chí chọn đối tác, phù hợp hơn với Buổi 10 (chọn nhà cung cấp). |
| Q4 | **Vai trò DMU.** Tư liệu Buổi 3 đang chờ toàn văn Webster & Wind (1972). Slide Ch.3 có 6 vai. | Dùng 6 vai của slide gốc, ghi `[VERIFY]` khi gán cho Webster & Wind. |
| Q5 | **Ba trụ cột chất lượng quan hệ.** Slide Ch.3 định nghĩa tin tưởng gồm "chuyên môn" và "trung thực, thiện chí (lòng nhân từ)". | Đưa định nghĩa của slide vào W04, nguồn Morgan & Hunt (1994) giữ nguyên. |

---

## 4. Lỗi trong slide gốc cần sửa khi dựng deck mới

| Chương | Lỗi | Sửa |
|---|---|---|
| Ch.1 | "Client Team of Event **Egency**" | "Agency" |
| Ch.2 | Cục An toàn vệ sinh lao động ghi "thuộc Bộ VH-TT-DL… cấp phép nghệ thuật biểu diễn"; Cục Nghệ thuật biểu diễn ghi "thuộc Bộ LĐ-TB-XH… an toàn vệ sinh lao động" — **mô tả bị hoán đổi** | Hoán đổi lại; tên cơ quan sau sáp nhập bộ năm 2025 cần `[VERIFY]` (Bộ LĐ-TB-XH đã hợp nhất vào Bộ Nội vụ) — không đưa lên slide nếu không cần |
| Ch.2 | "Gợi Gợi ý ý giúp giúp…" (chữ lặp do lỗi xuất PDF) | Chỉ là lỗi trích xuất, kiểm lại trên file gốc |
| Ch.2 | Mục 2.3.3 "Vendors" đánh số trùng 2.3.3 (sau đó là 2.3.4) | Đánh số lại |
| Ch.3 | Mục 3.2 có tiêu đề con "3.1.4" | Đánh số lại |
| Ch.3, Ch.5 | Các câu trích danh nhân (Maxwell, Huffington, Hoffman) và "70% mức độ gắn kết" (Ch.5) không ghi nguồn | `[VERIFY]` hoặc bỏ; con số 70% là "chưa kiểm chứng chéo" |
| Ch.4 | "giá **tác động**", "trng CVP" | Chính tả |

---

## 5. Chất lượng 118 nguồn trong notebook

| Loại | Số lượng (ước) | Ghi chú |
|---|---|---|
| (a) Học thuật / sách / tài liệu bài giảng | ~30 | Gồm 5 chương slide gốc, `Introduction.pdf` (đề cương), Getz & Page (2012), Kaplan & Norton (1996), Gelderman & van Weele (SSE), Prahalad & Ramaswamy (2004), Cranfield KAM (2023), mẫu hợp đồng dịch vụ sự kiện |
| (b) Báo cáo ngành | ~20 | BCG (2010), Halifax (2021), SAMA (2025), SpendEdge, Planned, các báo cáo xu hướng thu mua |
| (c) Doanh nghiệp / báo chí / Wikipedia | ~65 | Phần lớn là blog phần mềm, agency có lợi ích thương mại; báo chí Việt Nam về chi phí sự kiện |
| (d) Video | 2 | Mark N (2019), Boateng (2021) |

**Nên bỏ chọn (ngoài đề cương):** #13 McKinsey assortment, #34 văn bản hành chính, #114 Vụ Thư viện,
#115 Zylo SaaS MSA, và **một trong hai bản trùng #64/#65** (Planned, July 2023).

**Nguồn có giá trị cao nhưng chưa được NotebookLM dùng:**
- **Cranfield KAM (2023)** (#66) — khả năng cao là nguồn của khung Value Planning A–E (Buổi 13) và
  các giai đoạn quan hệ (Buổi 8). Cần hỏi riêng ở Bước 2.
- **Mẫu hợp đồng cung ứng dịch vụ tổ chức sự kiện** (#61) — dùng cho Buổi 7 (back-to-back) và Buổi 10.
- Ngoài notebook, trên Drive GV còn có **`Text book - Implementing KAM.pdf`** (Marcos và cộng sự) —
  tài liệu đã được tư liệu Buổi 4–8 nhắc là "chưa đọc `[VERIFY]`". Đề xuất GV cho phép Claude đọc
  trực tiếp file này để đóng các mục `[VERIFY]` của Buổi 4, 5, 8.

**Số liệu chỉ có một nguồn thương mại:** EVEM Intelligence (2026) "88% sponsor retention with ROI
reporting" → "chưa kiểm chứng chéo"; không đưa lên slide nếu không có nguồn thứ hai.

---

## 6. Mức bao phủ theo buổi và nguồn cần tick ở Bước 2

| Buổi | Bao phủ (sau rà soát) | Tick ở Bước 2 (bỏ `Introduction.pdf` và 5 chương slide — Claude đọc trực tiếp) | Khoảng trống còn lại |
|---|---|---|---|
| 1 | Đầy đủ | Getz & Page 2012; Mark N 2019; Boateng 2021; Bazzanella et al. 2019 | Định nghĩa "hệ sinh thái" (vẫn dùng định nghĩa làm việc) |
| 2 | Một phần | Halifax 2021; SAMA 2025; BCG 2010; Cranfield KAM | Nguồn cho 3 tiêu chí chọn KA (tư liệu Buổi 2 đã có nguồn công khai) |
| 3 | Một phần | Value Matters 2024; Getz & Page 2012 | PESTEL của **khách hàng**; journey mapping chi tiết |
| 4 | Đầy đủ (với slide Ch.3) | Sadasivan et al. (AIMS); BCG 2010; Frau et al. 2024; *The Impact of Client Retention…* | Thang đo; giai đoạn quan hệ (Dwyer; McDonald) |
| 5 | Một phần | Value Matters 2024; Prahalad & Ramaswamy 2004; Vilnius Tech 2021; Chou et al. 2020; Gupea 2023 | Nội dung co-diagnosis… co-testing (slide 4.4 không có chữ) |
| 6 | Đầy đủ | Kaplan & Norton 1996; Holm et al. 2012; Arkonas; Ascarza 2018; MIT CTL; IMD; Key Insights CTS; Haus Advisors 2026 | Tên gốc "gross margin matrix" |
| 7 | Đầy đủ | SSE (Gelderman & van Weele); IEOM; Frontiers 2025; HBS Online; mẫu hợp đồng (#61); Proxima; Negotiation Training case | Case agency – nhà cung cấp (nguồn độc lập) |
| 8 | Một phần | Halifax 2021; SAMA 2025; Value Matters 2024; Cranfield KAM; Design Business Council 2021 | Nguồn của mô hình bow-tie/diamond; health check |
| 9 | Đầy đủ | Boateng 2021; Bazzanella et al. 2019; EVM Institute 2026; EVEM 2026; *The events that lost money…* | Cấu trúc đề xuất tài trợ từ nguồn uy tín |
| 10 | Một phần | Chameleon 2025; GoGather 2026; SpendEdge 2024; Planned 2023; Getz & Page 2012; mẫu hợp đồng (#61); Sustainable Event Management | "Space mapping"; site check checklist |
| 11 | **Yếu** | VietNamNet 2025 (hội chợ 6 Nhất); Lao Động 2023; David Little 2024 | Phân loại KOL; journalist mapping; booking/đo lường — **notebook thiếu nguồn**, giữ tư liệu đã duyệt (X01–X12) |
| 12 | Một phần | Mark N 2019; Boateng 2021; Getz & Page 2012; Frau et al. 2024; *Managing Supplier Relationships* | Khung giải quyết xung đột |
| 13 | Một phần | Cranfield KAM; Value Matters 2024; SAMA 2025 | Nội dung chi tiết A–E (Cranfield) |

---

## 7. Việc tiếp theo

1. **GV duyệt** mục 3 (Q1–Q5) và cho phép Claude đọc trực tiếp `Text book - Implementing KAM.pdf`
   và tài liệu Cranfield (#66) nếu có trên Drive.
2. GV chạy **Bước 2 — Buổi 1** với danh sách tick ở mục 6. Nhớ bỏ chọn `Introduction.pdf`.
3. Claude dựng **deck thử `slides/W01_slides.pptx`** theo khuôn MKT1107 sau khi có kết quả Bước 2
   Buổi 1.

---

## 8. Cập nhật 4/10/2026

- **Sửa nguồn:** *Events and sustainability-1.pdf* là Holmes, Hughes, Mair & Carlsen (2015, Routledge), không phải “Getz & Page (2012)”. Các câu NotebookLM gán “Getz & Page, 2012, tr. 24–26” thực ra ở Holmes et al. (2015) tr. 24–26; câu “analogous to an ecosystem” (tr. 192) không tìm thấy.
- **Nguồn GV bổ sung** (bài báo PDF): Reid (2011), Todd et al. (2017), Wallace & Michopoulou (2019, 2023), Andersson & Getz (2008), Reid & Arcodia (2002, bản JST), mục lục Van Niekerk & Getz (2019) — chi tiết và buổi dùng: `lessons/buoi-01_tu-lieu-tong-hop.md` mục 9. Nên tải các bài này lên NotebookLM và bỏ chọn các blog thương mại khi trích xuất Buổi 9 và 12.
- **Đọc trực tiếp trên Drive (được GV cho phép):** *Implementing KAM* (Marcos et al., 2018) — bản trích xuất đọc được đến khoảng tr. 61 (chương 1–2, đầu chương 3); các chương 4–12 (Buổi 4–8, 13) cần bản đầy đủ hơn.
- **Giáo trình đầy đủ (Drive, 1NHLunrG…):** *Implementing KAM* bản 353 trang đã tải và đọc (tr. sách = tr. PDF − 19). Đã xác nhận: định nghĩa KAM tr. 20; “intimate friends” tr. 42; Bánh xe hiểu khách hàng Hình 3.1 tr. 61; hành trình khách hàng Hình 4.5 tr. 104 + quy trình 5 bước xác định điểm chạm tr. 104–106; DMU bảy vai Hình 4.6 tr. 106–107 (thêm **Controller** so với slide bộ môn); **GRASP Bảng 4.1 tr. 107** — G = “our goals and action plans with respect to this DMU member”, khớp slide bộ môn; khuyến nghị để G sau cùng. Chương 4–6 sẵn sàng cho Buổi 4–6.

## 9. Bổ sung 4/10/2026 (lần 2) — Drakeley và Korstanje

| Tài liệu | Nội dung chính | Dùng ở |
|---|---|---|
| Drakeley (2022), *Managing event stakeholders: Expect the unexpected* (chương sách — [NEEDS PROFESSOR INPUT: tên sách, NXB, trang]) | Ma trận 2×2 với ví dụ lễ hội âm nhạc; vòng đời khách hàng (Buttle) — Sales lo tiếp cận/chuyển đổi, KAM lo giữ chân/trung thành; ca agency Anh 2016 (15 sự kiện/12 tháng, phình phạm vi, không lãi, không giữ được khách) | W01 (2×2), W02 (vòng đời, ca Drakeley) |
| Korstanje (2024), *Managing events stakeholders*, trong Raj & Griffin (Eds.), *Sustainable events management*, CABI, DOI 10.1079/9781800621381.0005 | Mô hình xung đột (can thiệp, đối kháng, thờ ơ); “quá trình chính trị = niềm tin, cam kết, giao tiếp”; xung đột do kỳ vọng quá mức. Số liệu Eventsforce 72% (COVID) chỉ một nguồn — chưa kiểm chứng chéo | Ít liên quan B1–3; để dành **B4** (chất lượng quan hệ, xung đột) và **B12** |

## 10. Cập nhật 4/10/2026 (lần 3) — Buổi 4–6 đối chiếu giáo trình đầy đủ

| Mục | Kết quả | Hệ quả |
|---|---|---|
| Q5 / Buổi 4 | Ba trụ cột của slide Ch.3 = Marcos et al. (2018) Hình 4.2, tr. 96; sơ đồ A–B = Hình 4.1 (sáu kiểu quan hệ) | Deck W04 dùng cả Morgan & Hunt và giáo trình |
| **Q2 / Buổi 5** | Giáo trình Hình 5.4: **5 nguồn**, HSSEQ là mô tả của “business reputation and continuity” | **Đề cương đúng; slide bộ môn tách nhầm thành 6** — không cần ghi chú “nguồn thứ 6” |
| Buổi 5 | Cấu trúc CVP 3 phần (Hình 5.3), CPIs (tr. 127), Bảng 6.1 co-creation | Bỏ nhãn “định nghĩa làm việc của môn” (chờ GV sửa lecture notes) |
| Buổi 6 | CLV formula tr. 197; Hình 8.6 vùng công bằng; Construmart | Nguồn trực tiếp cho 6.1 và 6.2 |
| Lỗi slide Ch.4 | “1.4 inch” → ¼ inch (Levitt) | Deck dùng ¼ inch |

**Việc tiếp theo:** GV duyệt deck W04–W06; sau đó Buổi 7–9 (giáo trình Ch.7 KAM team, Ch.8 đo hiệu quả; Kraljic từ SSE).

## 11. Cập nhật 4/10/2026 (lần 4) — Buổi 7–8; nguồn thay thế Cranfield

- Giáo trình đã thay được Cranfield KAM 2023 cho: **khung Value Planning A–E** (Ch.3, Hình 3.4–3.5, tr. 72–90 → Buổi 13), **bow-tie/diamond** (Ch.10, tr. 243–245 → Buổi 8), **Kraljic + value-based negotiation** (Ch.10 → Buổi 7), **đo hiệu quả KAM** (Ch.8 → Buổi 6, 8).
- Deck W07 (39), W08 (37) đã dựng. Còn chờ GV gửi: Kraljic (1983) toàn văn, Gelderman & van Weele (2003), mẫu hợp đồng #61; nguồn sự kiện cho Buổi 9–12 (Farrelly & Quester 2005; Cornwell; Bowdin et al.; EIC CMP-IS; Campbell & Farrell 2020; AMEC Barcelona Principles 3.0; Larson & Wikström 2001; Getz, Andersson & Larson 2007).
- Mâu thuẫn số năm Nova – An Phát: Buổi 3–4 “4 năm”, Buổi 7–8 “3 năm” `[NEEDS PROFESSOR INPUT]`.

## 12. Cập nhật 4/10/2026 (lần 5): tư liệu Drive cho Buổi 9–12

| Nguồn | Trạng thái | Dùng cho |
|---|---|---|
| Cornwell (2020), *Sponsorship in Marketing*, 2nd ed. (bản đầy đủ) | Đã đọc | B9 (ch.2, 3, 6, 8–9, 10, 11); B12 một phần |
| Silvers (2008), *Risk Management for Meetings and Events* | Đã đọc | B10 (ch.3 hợp đồng, ch.7, ch.11) |
| Dowson, Albert & Lomax (2023), *Event Planning and Management*, 3rd ed. | Chỉ đọc được phần đầu (file > 10MB) | B10: cần ch.5, ch.9 [NEEDS PROFESSOR INPUT] |
| "Events Marketing Management.pdf" | Bản scan, không trích được chữ | Chưa xác định |
| Slide môn Tài trợ (ThS. Nguyễn Quốc Vương) | Đã đọc | B9, B12: khung tiếng Việt; ambush (McKelvey & Grady 2008) |
| Slide môn PR trong TCSK, bài 1–7 (ThS. Nguyễn Quốc Vương) | Đã đọc | B11 (bài 2, 3, 6, 7); B9 (bài 4); B12 (bài 1, 6) |
| Đề án sinh viên "Đời" (2025): kế hoạch và hồ sơ tài trợ | Đã đọc. Chỉ dùng cấu trúc, đã ẩn danh. Không dùng phiếu đánh giá đóng góp, tên, SĐT, số tài khoản | B9 (gói quyền lợi; hợp đồng ngân hàng trả theo kết quả); B10 (dự trù kinh phí, điều khoản 70/30, thanh lý); B11 (kế hoạch truyền thông 5 giai đoạn) [NEEDS PROFESSOR INPUT: được phép dùng?] |

**Ghi chú khi dùng slide PR:**
- Số liệu "Marketing Report 1999" (2/3, 80%), Beamish (50%/92%), Samsung 2005 và APEC 2006 là số liệu thứ cấp, chưa kiểm chứng chéo. Chỉ dùng kèm [VERIFY].
- Slide về "sai phạm điển hình của nhà báo" (bài 2) là nội dung nhạy cảm. Nếu dùng thì chỉ đặt trong phần đạo đức quan hệ báo chí, không nêu cơ quan báo cụ thể.
- Bài 6 trích "Cẩm nang kinh doanh Harvard – Quản lý khủng hoảng" (bản dịch). Năm xuất bản cần kiểm tra [VERIFY].
- Bài 7: mô hình lập kế hoạch PR theo Parkinson & Ekachai (2006); đánh giá đầu ra và kết quả theo Paine. Cần đối chiếu với AMEC Barcelona Principles 3.0 (2020) để cập nhật.
