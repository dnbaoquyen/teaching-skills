# EVM1110E — Bộ prompt NotebookLM để tái cấu trúc slide 13 buổi

**Ngày soạn:** 4/10/2026 · **Trạng thái:** BẢN 1 — chờ GV duyệt.

Quy trình này dựng lại theo cách đã làm cho MKT1107 (`courses/MKT1107/notebooklm_prompts.md`,
nhánh `claude/vigilant-heisenberg-qe5n8t`). Có một điểm khác: EVM1110E **đã có** tư liệu tổng hợp
và gói bài giảng đã duyệt cho cả 13 buổi (`lessons/buoi-XX_tu-lieu-tong-hop.md`, `lessons/WXX_*`).
Vì vậy NotebookLM **không soạn lại từ đầu**. NotebookLM chỉ làm ba việc:

1. **Lấp khoảng trống** mà tư liệu hiện có còn thiếu (ký hiệu ⭐, lấy từ mục 5 của từng file tư liệu).
2. Cung cấp **định nghĩa nguyên văn, ví dụ, tình huống, câu hỏi** để viết slide và lời giảng.
3. **Đối chiếu** các điểm đang gắn `[VERIFY]` hoặc dùng "định nghĩa làm việc của môn".

## Quy trình tổng thể

| Bước | Ai làm | Việc | Đầu ra |
|---|---|---|---|
| 0 | GV | Cấu hình notebook (một lần) | — |
| 1 | GV chạy, Claude rà soát | Bản đồ nguồn ↔ buổi cho khoảng 100 nguồn | `source_map.md` |
| 1b | Claude (nếu GV gửi file) | Rà soát slide gốc UEF của môn (nếu có): mục nào sai, mục nào thiếu | `slide_review.md` |
| 2 | GV chạy | Trích xuất chi tiết từng buổi (khung chung + khối buổi) | Kết quả dán vào chat |
| 3 | GV chạy | Đối chiếu các điểm `[VERIFY]` (một lần, chọn tất cả nguồn) | Kết quả dán vào chat |
| 4 | Claude | Ghi phần bổ sung vào file tư liệu; cập nhật lời giảng và dàn ý slide | `buoi-XX_…` (mục bổ sung), `WXX_slides_outline.md` |
| 5 | Claude | Dựng `slides/WXX_slides.pptx` theo khuôn `W1_slides_v2` (lời giảng: Nói · GV · Hỏi lớp · Chuyển ý) | `.pptx` (Alexandria + bản dự phòng Roboto) |

Làm **thử Buổi 1 trước**. GV duyệt Buổi 1 xong mới làm các buổi còn lại theo lô 2–3 buổi.

---

## Bước 0 — Cấu hình notebook (làm 1 lần)

**Configure chat** → độ dài **Dài hơn (Longer)** → dán vào hướng dẫn tùy chỉnh (Custom):

```
Bạn là trợ lý trích xuất nội dung học thuật cho học phần EVM1110E Quản trị mối quan hệ trong
tổ chức sự kiện (góc nhìn của agency tổ chức sự kiện làm việc với khách hàng doanh nghiệp).
Nguyên tắc bắt buộc:
1. Chỉ dùng các nguồn đang được chọn. Không bổ sung kiến thức bên ngoài.
2. Ưu tiên đầy đủ hơn ngắn gọn: giữ nguyên định nghĩa, mô hình, công thức, số liệu, các bước,
   ví dụ như nguồn trình bày. Không tóm tắt chung chung.
3. Mỗi ý ghi [Tên nguồn, tác giả, năm, trang/chương/vị trí nếu có] + một cụm nguyên văn ngắn
   (giữ ngôn ngữ gốc) làm bằng chứng.
4. Không có trong nguồn: ghi "Không có trong nguồn". Nguồn nói không rõ: ghi "[KHÔNG RÕ]".
   Các nguồn nói khác nhau: trình bày tất cả, ghi "KHÁC NHAU GIỮA NGUỒN".
5. Phân biệt rõ: (a) nguồn học thuật/sách, (b) báo cáo ngành, (c) bài viết của doanh nghiệp có
   lợi ích thương mại (agency, phần mềm, nhà cung cấp), (d) video/bài giảng.
6. Số liệu: ghi rõ năm, phạm vi (quốc gia, ngành) và nguồn gốc mà nguồn đó dẫn lại.
7. Viết tiếng Việt, giữ thuật ngữ tiếng Anh trong ngoặc đơn. Ví dụ nước ngoài giữ nguyên tên
   doanh nghiệp, quốc gia, số liệu — không tự Việt hóa, không tự thêm ví dụ.
```

**Chọn nguồn trước mỗi lần hỏi:** sau Bước 1, chỉ tick các nguồn mà `source_map.md` gắn với buổi
đó. Bỏ chọn đề cương và các slide đã tạo bằng NotebookLM (nếu có) khi trích xuất nội dung, để
NotebookLM không diễn giải lại chính slide.

---

## Bước 1 — Bản đồ nguồn ↔ buổi (hỏi 1 lần, chọn TẤT CẢ nguồn)

```
Dựa CHỈ trên các nguồn đã tải lên, lập bảng ánh xạ giữa đề cương EVM1110E và các nguồn.

Bảng 1 — theo buổi:
| Buổi | Mục đề cương | Nguồn liên quan (tên + tác giả + năm) | Loại nguồn (học thuật / sách / báo cáo ngành / doanh nghiệp / video) | Mức bao phủ (Đầy đủ / Một phần / Không có) | Ghi chú |

Danh sách mục:
- Buổi 1: 1.1 Định nghĩa, đặc điểm hệ sinh thái bên liên quan bên ngoài trong sự kiện; 1.2 Bên liên quan chính và phụ (primary/secondary); 1.3 Power-Interest Grid và Stakeholder Salience Model
- Buổi 2: 2.1 Khác biệt Sales và KAM; 2.2 Ba tiêu chí chọn Key Account (customer attractiveness, supplier's competitive position, willingness to co-invest)
- Buổi 3: 3.1 PESTEL và đối thủ của khách hàng; 3.2 Customer journey mapping (pre-purchase, purchase, post-purchase, touchpoints); 3.3 DMU và mô hình GRASP (Goal, Role, Appeal, State, Power)
- Buổi 4: 4.1 Ba trụ cột chất lượng quan hệ KAM (functional conflict, trust, commitment); 4.2 Từ giao dịch sang quan hệ đối tác dài hạn
- Buổi 5: 5.1 Cấu trúc CVP (future state, offering 7Ps, value appraisal); 5.2 Năm nguồn giá trị (top-line, bottom-line, HSSEQ, advisory, customer's customer); 5.3 Co-diagnosis, co-ideation, co-design, co-testing
- Buổi 6: 6.1 Customer Lifetime Value (CLV); 6.2 Cost-to-serve và gross margin matrix
- Buổi 7: 7.1 Ma trận Kraljic; 7.2 Procurement và buying; 7.3 Đàm phán dựa trên giá trị, rủi ro và giá trị
- Buổi 8: 8.1 Mô hình bow-tie và diamond; 8.2 Chỉ số results-driven và process-driven; 8.3 Joint account review, relationship health check
- Buổi 9: 9.1 Vai trò, lợi ích hữu hình và vô hình của nhà đầu tư, nhà tài trợ; 9.2 Đề xuất tài trợ win-win và ROI; 9.3 Gắn nhà tài trợ vào touchpoint của khách hàng của khách hàng
- Buổi 10: 10.1 Quy trình RFP/RFQ, chọn nhà cung cấp; 10.2 Site check, tiêu chí chọn địa điểm, space mapping; 10.3 Phân bổ nhà cung cấp vào giai đoạn purchase/post-purchase
- Buổi 11: 11.1 Phân loại KOL/influencer, chất lượng nội dung, cộng hưởng cộng đồng; 11.2 Nhắm khán giả, journalist mapping; 11.3 Booking, thanh toán, báo cáo đo lường chiến dịch; 11.4 Dùng media/KOL khuếch đại touchpoint pre-purchase
- Buổi 12: 12.1 Giá trị chiến lược của hợp tác dài hạn và minh bạch thông tin; 12.2 Quản lý phức tạp, giải quyết xung đột lợi ích giữa các bên liên quan bên ngoài
- Buổi 13: 13.1 Value Planning Framework (A Value insights, B Value opportunities, C Value propositions, D Value delivery, E Executive summary); 13.2 Đưa điều phối các bên liên quan vào phần Value delivery

Bảng 2 — theo nguồn: liệt kê TẤT CẢ nguồn, mỗi nguồn một dòng:
| Nguồn | Loại | Năm | Buổi liên quan | Ngôn ngữ | Ghi chú (ví dụ: chỉ có tóm tắt, là tài liệu quảng cáo, trùng nguồn khác) |

Yêu cầu:
- Mục nào KHÔNG có nguồn nào đề cập: ghi "KHÔNG CÓ TRONG NGUỒN".
- Nguồn không thuộc mục nào của đề cương: liệt kê riêng ở cuối.
- Nếu câu trả lời quá dài, dừng ở cuối một buổi, ghi "CÒN TIẾP — buổi tiếp theo: …" và chờ tôi.
```

Khi bị cắt: `Tiếp tục từ Buổi [n], giữ nguyên cấu trúc bảng.`

---

## Bước 2 — Trích xuất chi tiết từng buổi

### Khung chung (dán cho mọi buổi, thay `[KHỐI BUỔI]`)

```
Chỉ dựa trên các NGUỒN đang được chọn, trích xuất CHI TIẾT TỐI ĐA theo yêu cầu dưới đây.

[KHỐI BUỔI]

Trình bày theo đúng thứ tự các mục trong khối trên. Trong mỗi mục, nêu lần lượt (phần nào nguồn
không có thì ghi "Không có trong nguồn"):
A. Khái niệm, định nghĩa — gần nguyên văn, kèm thuật ngữ gốc, tác giả, năm, trang.
B. Mô hình, phân loại, quy trình, công thức — đủ các bước, ký hiệu, điều kiện áp dụng; mô tả
   lại hình/sơ đồ nếu nguồn có.
C. Ví dụ và tình huống — đủ tên tổ chức, sự kiện, bối cảnh, số liệu, kết luận. Ưu tiên ví dụ
   về agency/nhà tổ chức sự kiện, MICE, sự kiện doanh nghiệp, B2B dịch vụ.
D. Ưu điểm – hạn chế, khi nào dùng / không dùng, lỗi thường gặp mà nguồn cảnh báo.
E. Câu hỏi thảo luận, bài tập, case, công cụ/biểu mẫu mà nguồn đưa ra — chép đủ đề và đáp án
   hoặc gợi ý nếu có.

Cuối câu trả lời, thêm:
F. KHOẢNG TRỐNG: những mục trong khối trên mà nguồn không đề cập.
G. KHÁC NHAU GIỮA NGUỒN: các chỗ các nguồn mâu thuẫn (định nghĩa, tên gọi, số bước, số liệu).
Nếu câu trả lời quá dài, dừng ở cuối một mục, ghi "CÒN TIẾP — mục tiếp theo: …" và chờ tôi.
```

Khi bị cắt: `Tiếp tục từ mục [tên mục], giữ nguyên cấu trúc A–G.`

### Khối riêng theo buổi

Ký hiệu: ⭐ = **khoảng trống của tư liệu hiện có**, cần lấy kỹ nhất.

**Buổi 1**
```
BUỔI 1 — HỆ SINH THÁI BÊN LIÊN QUAN BÊN NGOÀI CỦA SỰ KIỆN
⭐1. Định nghĩa "hệ sinh thái bên liên quan" (stakeholder ecosystem/network) trong sự kiện hoặc
    du lịch – MICE: chép NGUYÊN VĂN mọi định nghĩa và tác giả.
⭐2. Định nghĩa primary/secondary stakeholder của Clarkson (1995) và các tác giả khác (Freeman,
    Getz, Todd…): nguyên văn, trang.
3. Power-Interest Grid (Mendelow; Johnson & Scholes…): tên bốn ô, chiến lược cho từng ô.
4. Salience Model (Mitchell, Agle & Wood, 1997): định nghĩa power, legitimacy, urgency; tên
   bảy nhóm; tính động (bên liên quan chuyển nhóm).
5. Ví dụ phân tích bên liên quan của một sự kiện cụ thể (festival, hội nghị, sự kiện doanh
   nghiệp): danh sách bên liên quan, vai trò, "một bên nhiều vai".
6. Tình huống sự kiện gặp sự cố vì bỏ qua một bên liên quan.
```

**Buổi 2**
```
BUỔI 2 — TỪ SALES ĐẾN KEY ACCOUNT MANAGEMENT
⭐1. Bảng so sánh Sales và KAM (mục tiêu, thời gian, đối tượng, chỉ số, kỹ năng…) như nguồn trình bày.
⭐2. Các TIÊU CHÍ CON của customer attractiveness và supplier's competitive position (danh sách,
    trọng số, cách chấm điểm) và ma trận chọn khách hàng (ví dụ ma trận của McDonald, Cranfield).
3. Willingness to co-invest / "choose me and I will choose you": định nghĩa, dấu hiệu nhận biết.
4. Định nghĩa Key Account, Key Account Management: nguyên văn, tác giả.
5. Ví dụ doanh nghiệp dịch vụ (agency, B2B) chọn hoặc loại một khách hàng khỏi danh sách Key
   Account; sai lầm "khách lớn nhất = Key Account".
```

**Buổi 3**
```
BUỔI 3 — HIỂU THẾ GIỚI CỦA KEY ACCOUNT
⭐1. Nguồn gốc mô hình GRASP (Goal, Role, Appeal, State, Power): tác giả, định nghĩa từng
    thành phần, cách dùng. Nếu không có, ghi rõ "Không có trong nguồn".
⭐2. Danh sách vai trò trong buying center/DMU (Webster & Wind, 1972 và các tác giả khác):
    nguyên văn tên vai trò và định nghĩa.
⭐3. "Wheel of customer understanding" hoặc công cụ tương tự để hiểu khách hàng: các thành phần.
4. Phân tích PESTEL và đối thủ CỦA KHÁCH HÀNG (không phải của agency): cách làm, ví dụ.
5. Customer journey mapping trong B2B/sự kiện: giai đoạn, touchpoint, ví dụ bản đồ.
6. Ví dụ đề xuất bị từ chối vì bỏ qua người ra quyết định thật.
```

**Buổi 4**
```
BUỔI 4 — CHẤT LƯỢNG QUAN HỆ VỚI KEY ACCOUNT
⭐1. Thang đo hoặc bộ câu hỏi đánh giá trust, commitment, functional conflict (Morgan & Hunt,
    1994 hoặc nguồn khác): chép các mục hỏi.
⭐2. Tên và mô tả các giai đoạn quan hệ của Dwyer, Schurr & Oh (1987) và của McDonald, Millman
    & Rogers (1997) (pre-KAM, early, mid, partnership, synergistic, uncoupling…).
⭐3. Chương "Developing customer relationships" của Marcos et al. (2018) nếu có: ba trụ cột
    chất lượng quan hệ được trình bày thế nào.
4. Định nghĩa functional conflict; vì sao "không có xung đột" chưa chắc là tốt.
5. Khác biệt giao dịch (transactional) và quan hệ (relational): bảng so sánh, ví dụ.
```

**Buổi 5**
```
BUỔI 5 — ĐỀ XUẤT GIÁ TRỊ VÀ ĐỒNG KIẾN TẠO
⭐1. Nguồn gốc cấu trúc CVP gồm Future state – Offering (7Ps) – Value appraisal: tác giả, định
    nghĩa từng phần. Nếu không có, ghi rõ.
⭐2. Nguồn gốc "năm nguồn giá trị" (top-line, bottom-line, HSSEQ, advisory, customer's
    customer): định nghĩa, ví dụ từng nguồn.
⭐3. Ba kiểu value proposition của Anderson, Narus & van Rossum (2006): all benefits, favorable
    points of difference, resonating focus — nguyên văn.
4. Co-diagnosis, co-ideation, co-design, co-testing (Marcos-Cuevas et al., 2016 và nguồn khác):
   định nghĩa nguyên văn, ví dụ.
5. Ví dụ CVP viết tốt và chưa tốt cho dịch vụ B2B/sự kiện.
```

**Buổi 6**
```
BUỔI 6 — TÀI CHÍNH TRONG KAM
⭐1. Công thức CLV nguyên văn (Gupta et al., 2006 hoặc nguồn khác): ký hiệu, giả định, ví dụ tính.
⭐2. Nguồn gốc tên "gross margin matrix"; ma trận Shapiro et al. (1987): tên trục và TÊN BỐN Ô
    nguyên văn (passive, carriage trade, bargain basement, aggressive…).
3. Cost-to-serve: các loại chi phí phục vụ, whale curve, ví dụ số liệu (ghi rõ ngành, năm).
4. Chi phí phục vụ trong agency dịch vụ: trả chậm, phát sinh ngoài phạm vi, sửa nhiều vòng.
5. Hành động với từng ô ma trận; nguyên tắc quan hệ công bằng hai phía.
```

**Buổi 7**
```
BUỔI 7 — HIỂU VỊ THẾ CỦA NHÀ CUNG CẤP VÀ ĐÀM PHÁN DỰA TRÊN GIÁ TRỊ
⭐1. Ví dụ xếp các nhóm nhà cung cấp SỰ KIỆN (địa điểm, AV, F&B, vận chuyển, nghệ sĩ, in ấn,
    bán vé) vào bốn ô Kraljic.
⭐2. Case agency xây quan hệ đối tác chiến lược với nhà cung cấp (nguồn độc lập).
⭐3. Định nghĩa procurement và purchasing/buying từ nguồn học thuật.
⭐4. Value-based negotiation; chuyển điều khoản nhà cung cấp (cọc, hủy, attrition, force
    majeure) sang hợp đồng với khách hàng (back-to-back).
⭐5. Biên lợi nhuận và cơ cấu chi phí của event agency; lạm phát giá nhà cung cấp mùa cao điểm.
6. Ma trận Kraljic (1983): trục, tên ô, chiến lược từng ô.
7. Phân biệt rủi ro (risk) và giá trị (value) trong đàm phán; integrative bargaining.
```

**Buổi 8**
```
BUỔI 8 — CẤU TRÚC QUAN HỆ VÀ ĐO LƯỜNG HIỆU QUẢ VỚI KEY ACCOUNT
⭐1. Mô tả nguyên văn các giai đoạn quan hệ KAM và mô hình bow-tie/diamond (McDonald và cộng
    sự; Shapiro & Moriarty…): hình vẽ, đặc điểm, rủi ro.
⭐2. Sơ đồ tiếp xúc nhiều cấp giữa agency và khách hàng (ví dụ cụ thể).
⭐3. Phân biệt chỉ số results-driven và process-driven trong KAM (nguồn học thuật).
⭐4. Joint account review, relationship health check: quy trình, câu hỏi, tần suất, khảo sát
    agency–client.
5. Đo lường hiệu quả sự kiện: các cấp ROI (Phillips; Event ROI Institute), ví dụ chỉ số.
6. Tình huống mất khách hàng vì người liên hệ chính nghỉ việc.
```

**Buổi 9**
```
BUỔI 9 — NHÀ ĐẦU TƯ VÀ NHÀ TÀI TRỢ
⭐1. Cấu trúc đề xuất tài trợ (sponsorship proposal) từ hiệp hội hoặc nguồn uy tín.
⭐2. Số liệu thị trường tài trợ (toàn cầu, Việt Nam): ghi năm, đơn vị khảo sát, nguồn gốc.
⭐3. Case tài trợ trong sự kiện doanh nghiệp B2B (hội nghị khách hàng, gala).
⭐4. Phân biệt nhà đầu tư và nhà tài trợ trong sự kiện; chia sẻ rủi ro – lợi nhuận.
5. Lợi ích hữu hình và vô hình của tài trợ; activation; đo ROI/ROO của tài trợ.
6. Gắn nhà tài trợ vào touchpoint trải nghiệm của người tham dự.
```

**Buổi 10**
```
BUỔI 10 — NHÀ CUNG CẤP VÀ ĐỊA ĐIỂM
⭐1. Tiêu chí chọn nhà cung cấp (Dickson, 1966; Weber et al., 1991; Ho et al., 2010) và hướng
    dẫn chấm điểm có trọng số.
⭐2. Case chọn địa điểm cho sự kiện doanh nghiệp (hội nghị khách hàng, gala).
3. Quy trình RFI/RFP/RFQ: các bước, nội dung hồ sơ mời, cách so sánh báo giá.
4. Site inspection/site check: danh mục kiểm tra, space mapping, câu hỏi cho địa điểm.
5. Điều khoản hợp đồng địa điểm thường gặp (attrition, F&B minimum, dịch vụ độc quyền).
```

**Buổi 11**
```
BUỔI 11 — TRUYỀN THÔNG, BÁO CHÍ VÀ KOL
⭐1. Phân nhóm KOL/influencer theo số người theo dõi (nano, micro, macro, mega): ngưỡng và tác
    giả — ghi rõ chỗ các nguồn khác nhau.
⭐2. Số liệu thị trường influencer Việt Nam có nguồn gốc rõ.
⭐3. Cách làm việc với nhà báo (khảo sát nhà báo, journalist mapping, media list).
⭐4. Điều khoản hợp đồng booking KOL; quy định quảng cáo (Việt Nam) liên quan đến KOL, dịch vụ
    tài chính – ngân hàng.
5. Chất lượng nội dung, cộng hưởng cộng đồng, chỉ số đo chiến dịch (reach, engagement, EMV…).
6. Case dùng báo chí/KOL cho sự kiện doanh nghiệp B2B.
```

**Buổi 12**
```
BUỔI 12 — MẠNG LƯỚI VÀ XUNG ĐỘT LỢI ÍCH
⭐1. Xung đột giữa các nhà cung cấp trong sự kiện (ví dụ dịch vụ độc quyền của địa điểm và đơn
    vị bên ngoài): case, cách xử lý.
⭐2. Case xung đột mạng lưới trong sự kiện doanh nghiệp.
⭐3. Khung giải quyết xung đột (Thomas–Kilmann, joint problem solving…): định nghĩa nguyên văn.
4. Giá trị của hợp tác dài hạn và minh bạch thông tin trong mạng lưới (network, coopetition).
5. Định nghĩa "xung đột lợi ích" (conflict of interest) và cách công bố, quản lý.
```

**Buổi 13**
```
BUỔI 13 — VALUE PLANNING FRAMEWORK VÀ SMP
⭐1. Nội dung chi tiết từng phần A Value insights, B Value opportunities, C Value propositions,
    D Value delivery, E Executive summary (Cranfield; McDonald & Woodburn…): câu hỏi, công cụ,
    mẫu biểu.
⭐2. Mẫu key account plan / strategic account plan: mục lục, độ dài, lỗi thường gặp.
3. Cách đưa điều phối các bên liên quan bên ngoài vào phần Value delivery.
4. Cách viết executive summary cho lãnh đạo khách hàng.
```

---

## Bước 3 — Đối chiếu các điểm `[VERIFY]` (chọn TẤT CẢ nguồn, hỏi 1 lần)

```
Chỉ dựa trên các NGUỒN đang được chọn, cho biết nguồn nói gì về từng điểm sau. Trích nguyên
văn, ghi tên nguồn và trang; không có thì ghi "Không có trong nguồn":
1. Mendelow (1981): tên bốn ô của power-interest grid và chiến lược từng ô.
2. Clarkson (1995): định nghĩa primary và secondary stakeholder.
3. Mô hình GRASP: tác giả gốc.
4. Webster & Wind (1972): tên các vai trò trong buying center.
5. Dwyer, Schurr & Oh (1987): tên các giai đoạn phát triển quan hệ.
6. Cấu trúc CVP "Future state – Offering – Value appraisal" và "năm nguồn giá trị": tác giả gốc.
7. Công thức CLV có tỷ lệ giữ chân (retention) và chiết khấu: dạng công thức, ký hiệu.
8. Shapiro et al. (1987): tên bốn ô ma trận chi phí phục vụ – giá.
9. Kraljic (1983): tên bốn ô và hai trục.
10. Mô hình bow-tie và diamond: tác giả gốc, năm.
11. Khung ROI 5 cấp (ROI Institute) và 6 cấp (Event ROI Institute): tên từng cấp.
12. Ngưỡng số người theo dõi cho nano/micro/macro/mega influencer.
13. Value Planning Framework A–E: tác giả, nguồn gốc (Cranfield?).
14. Ba tiêu chí chọn Key Account (attractiveness, competitive position, willingness to
    co-invest): tác giả gốc.
```

---

## Gửi kết quả cho Claude

- Ghi đầu tin nhắn: `Kết quả NotebookLM — Bước 1` / `— Buổi X` / `— Đối chiếu`, rồi dán **nguyên
  văn**, giữ tên nguồn và cụm trích dẫn. Câu trả lời dài có thể lưu thành file .md hoặc .txt rồi
  tải lên.
- Thứ tự ưu tiên: **Bước 1** → **Buổi 1** (để làm thử deck) → **Bước 3** → các buổi có nhiều ⭐
  (3, 5, 6, 7, 8, 13) → các buổi còn lại.
- Nếu có slide gốc của môn (UEF hoặc bản cũ), gửi file .pptx/.pdf để Claude rà soát ở Bước 1b.

## Cách Claude xử lý kết quả (Bước 4–5)

- Kết quả NotebookLM là **dữ liệu cần kiểm**, không phải sự thật. Claude đối chiếu với tư liệu đã
  duyệt. Nội dung mới được ghi vào mục **"Bổ sung từ NotebookLM (ngày …)"** trong
  `buoi-XX_tu-lieu-tong-hop.md`, kèm nguồn. Số liệu chỉ có một nguồn giữ nhãn "chưa kiểm chứng chéo".
- Nếu nguồn trái với **quyết định GV đã duyệt** (ví dụ định nghĩa làm việc của môn), Claude không
  tự sửa mà hỏi lại GV.
- Mỗi deck theo khuôn `W1_slides_v2.pptx` của MKT1107: tiêu đề là câu khẳng định; mở bằng câu hỏi
  tình huống; định nghĩa của nhiều tác giả → định nghĩa tổng hợp; ví dụ gắn nhãn "(minh họa)" hoặc
  "(giả định)"; một hoạt động nhanh (giơ 1–4 ngón tay) kèm bảng đáp án; slide giải lao; hai slide
  thực hành S3/S6 dẫn tới file hoạt động; lỗi thường gặp; 3 câu kiểm tra nhanh; phiếu cuối giờ;
  buổi sau; tài liệu tham khảo APA 7. **Không có bài tập về nhà** (theo thiết kế môn).
- Lời giảng ở **mọi** slide: **Nói:** … · **(GV: …)** nguồn, `[VERIFY]`, `[NEEDS PROFESSOR INPUT]` ·
  **Hỏi lớp:** … · **Chuyển ý:** …
