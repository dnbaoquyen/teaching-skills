# Nội dung bài giảng — Buổi 10: Building Solutions: Supplier & Venue Management

EVM1110E · Buổi 10 · Dùng cho các đoạn S1, S2, S4, S5, S7 của giáo án (`W10_lesson_plan.md`)

> **Ghi chú cho GV**
> - Phần *in nghiêng trong ngoặc vuông* là lời gợi ý nói với lớp. Phần "Hiểu lầm thường gặp" để GV chủ động xử lý.
> - **Góc nhìn (quyết định GV):** sinh viên là **agency** (Nova Events) ở vị trí **bên mua**. Nova chọn địa điểm và nhà cung cấp để thực hiện lời hứa với **Key Account** (Ngân hàng An Phát). Ở 10.3, An Phát là **khách hàng của Nova**; nhà cung cấp là **điểm chạm do đối tác sở hữu** trên hành trình mua của An Phát.
> - **Ranh giới:** Buổi 7 là tầng chiến lược (Kraljic, Procurement vs Buying, customer of choice); hôm nay là tầng tác nghiệp. PCCC và an toàn đám đông thuộc môn Quản trị rủi ro sự kiện.
> - **Thuật ngữ:** giữ tiếng Anh (RFI, RFP, RFQ, tender, value for money, audit trail, site check/site inspection, floor plan, load-in, back-of-house, touchpoint, partner-owned), giải thích tiếng Việt lần đầu.
> - Mã **V01–V13** trỏ tới thẻ nguồn trong `buoi-10_tu-lieu-tong-hop.md`. Số liệu chưa kiểm chứng chéo được ghi rõ tại chỗ.
> - Tình huống **Nova Events – Ngân hàng An Phát**, các khách sạn A, B, C và mọi con số trong tình huống là **giả định**, chỉ dùng cho học tập.

---

## S1 — Khởi động (5 phút)

*[Chiếu slide 2 và nhắc: "Buổi 7, ba tuần trước gala 12/12, khách sạn báo AV nội bộ tăng giá 30% và không cho mang AV ngoài vào. Ta đã kết luận: tình huống đó **được quyết định từ lúc chọn và ký** với nhà cung cấp."]*

*[Đọc tiếp: "Hôm nay ta quay lại đúng lúc đó. Tháng 7. Anh Minh vừa duyệt concept gala 600 khách. Nova có ba tuần để chọn khách sạn và các nhà cung cấp."]*

Hỏi nhanh, cho lớp giơ tay: *"Bạn sẽ (A) gọi ba khách sạn quen hỏi giá, hay (B) gửi một bộ yêu cầu bằng văn bản giống nhau cho cả ba?"*

*[Chốt: "Gọi điện nhanh hơn. Nhưng khi anh Minh hỏi 'vì sao chọn khách sạn này', Nova cần trả lời bằng **tiêu chí và hồ sơ**, không phải bằng cảm giác. Hôm nay: quy trình mua, site check, và cách nhà cung cấp trở thành một phần trải nghiệm của An Phát."]*

---

## S2 — Lý thuyết 1 (25 phút)

### §1. 10.1 — Quy trình mua (RFP/RFQ) và chọn nhà cung cấp từ góc nhìn đơn vị tổ chức

#### 1.1 Từ Buổi 7 sang Buổi 10

| | Buổi 7 — chiến lược | Buổi 10 — tác nghiệp |
|---|---|---|
| Câu hỏi | Hạng mục này quan trọng và rủi ro đến đâu? Quan hệ với nhà cung cấp nên thế nào? | Mời ai, hỏi gì, chấm thế nào, kiểm tra tại chỗ ra sao? |
| Công cụ | Kraljic, Procurement vs Buying, customer of choice | RFI – RFP – RFQ, bảng chấm điểm, site check, sơ đồ mặt bằng |
| Đầu ra | Chiến lược cho từng hạng mục | Nhà cung cấp được chọn + hồ sơ giải thích được |

*[Nói: "Ô Kraljic quyết định **cách mua**. Hạng mục Non-critical thì hỏi giá nhanh; hạng mục Strategic như ballroom tháng 12 thì cần RFP, site check và đàm phán quan hệ."]*

#### 1.2 RFI – RFP – RFQ

| | Hỏi gì | Khi nào dùng | Ví dụ gala An Phát |
|---|---|---|---|
| **RFI** (request for information) | Nhà cung cấp là ai, làm được gì | Chưa biết thị trường; lọc danh sách | Tìm đơn vị livestream về 80 chi nhánh |
| **RFP** (request for proposal) | **Giải pháp** + giá, chấm theo nhiều tiêu chí | Hạng mục phức tạp, nhiều cách làm | Ballroom + F&B; AV và livestream |
| **RFQ** (request for quotation) | **Giá** cho thông số đã rõ | Hạng mục chuẩn, nhiều nhà cung cấp | In backdrop, thuê xe 45 chỗ, quà tặng theo mẫu |

*(Bảng do người soạn tổng hợp theo cách dùng phổ biến trong ngành; RFQ theo V01.)*

#### 1.3 Các phương thức mua (V01 — CIPS)

- **Đấu thầu rộng rãi:** mọi nhà cung cấp quan tâm đều được dự; công bằng nhưng tốn công đánh giá.
- **Hai giai đoạn:** vòng 1 nộp giải pháp **không kèm giá**; vòng 2 mới nộp đề xuất tài chính. Hữu ích khi sợ “giá rẻ che mắt” (ví dụ chọn ý tưởng sân khấu).
- **RFQ:** *“You’ll typically pick at least three suppliers to submit quotes.”* — thường mời **ít nhất ba** nhà cung cấp báo giá.
- **Đấu thầu hạn chế:** chỉ mời những bên đã được sàng lọc theo hồ sơ năng lực.
- **Một nguồn (single source):** khi chỉ một bên đủ năng lực hoặc khẩn cấp. *Ví dụ gala:* AV **độc quyền** của khách sạn — một khi đã chọn khách sạn, AV thành một nguồn. `[VERIFY: tên tiêu đề từng phương thức trên trang CIPS]`

*[Câu hỏi: "Vậy lúc nào Nova mất quyền chọn AV?" — Chốt: "Lúc ký với khách sạn. Nên câu hỏi về AV độc quyền phải nằm **trong RFP gửi khách sạn**."]*

*Một câu về Key Account (quyết định GV):* quy trình mua của Key Account có thể chịu **quy định nội bộ hoặc pháp luật**; agency cần hỏi phòng mua sắm của khách (ở An Phát là **anh Khoa**, chuyên viên ngân sách – mua sắm) ngay từ đầu.

#### 1.4 Một RFP tốt mang Key Account vào (V05, V06)

Mẫu RFP APEX của Events Industry Council có các phần như **mục tiêu sự kiện, hồ sơ người tham dự, lịch sử sự kiện**, và đề nghị đính kèm **báo cáo sau sự kiện (PER)** kỳ trước (V05). Nghĩa là: nhà cung cấp chỉ đề xuất đúng nếu họ hiểu **Key Account và khách của Key Account**.

RFP gửi khách sạn cho gala An Phát (khung rút gọn, người soạn dựng từ V05):
1. Về An Phát và mục tiêu gala (tri ân 600 lãnh đạo doanh nghiệp VIP)
2. Hồ sơ khách: độ tuổi, kỳ vọng, nhu cầu đặc biệt
3. Ngày, giờ, **giờ dựng – tháo** (load-in/load-out)
4. Bố trí: bàn tròn, sân khấu, màn LED, khu nhà tài trợ; **xin sơ đồ mặt bằng**
5. F&B, phòng ngủ (nếu có)
6. **Chính sách nhà cung cấp độc quyền** (AV, hoa, trang trí) và phụ thu mang bên ngoài vào
7. Điều khoản: cọc, hủy, thay đổi số khách
8. **Tiêu chí chấm** và hạn trả lời

*Lưu ý bảo mật (nhận định):* thông tin về khách của An Phát chỉ chia sẻ ở mức cần thiết; xin cam kết bảo mật nếu cần.

**Tốc độ:** 80% người tổ chức muốn địa điểm trả lời RFP trong **≤ 4 ngày** (V06, Cvent 2025, *chưa KCC*). *[Hỏi: "Tốc độ trả lời RFP nói gì về cách nhà cung cấp sẽ phục vụ ta sau này?"]*

#### 1.5 Chấm điểm có trọng số và nguyên tắc đánh giá (V02, V04)

Chọn nhà cung cấp là bài toán **nhiều tiêu chí** — một dòng nghiên cứu lâu đời trong mua hàng (Dickson, 1966; Weber và cộng sự, 1991; Ho và cộng sự, 2010 — V04). Cách làm phổ biến: **bảng chấm điểm có trọng số**.

**Ví dụ (GIẢ ĐỊNH — quyết định GV 6): chất lượng – năng lực 60 / tổng chi phí 40**

| Tiêu chí | Trọng số |
|---|---|
| Không gian phù hợp khách của An Phát (sức chứa, tầm nhìn, cảm giác sang trọng) | 20 |
| Kỹ thuật – AV – livestream (gồm chính sách độc quyền) | 15 |
| Điều khoản hợp đồng (hủy, thay đổi số khách, giờ dựng) | 15 |
| Dịch vụ, F&B | 10 |
| **Tổng chi phí** (không chỉ giá thuê: + AV, phụ thu) | 40 |

Điểm = Σ (điểm 1–5 × trọng số) / 5 → thang 100.

**Trước khi chấm: kiểm tra điều kiện bắt buộc (đạt / không đạt)** — ví dụ còn trống ngày 12/12, đủ **diện tích dùng được** cho 600 khách. Một hồ sơ trượt điều kiện bắt buộc thì điểm cao cũng không cứu được. *(Nhận định của người soạn, gần với bước kiểm tra kỹ thuật trong V02.)*

**Bốn nguyên tắc (V02 — CIPS):**
1. **Value for money** — không phải giá thấp nhất.
2. **Đối xử công bằng** — cùng yêu cầu, cùng hạn, cùng tiêu chí cho mọi bên.
3. **Audit trail** — giữ dấu vết: ai chấm, chấm gì, vì sao. Anh Minh và anh Khoa đều có thể hỏi lại.
4. **Phản hồi cho bên trượt** — nối Buổi 7: bên trượt hôm nay là đối tác ngày mai (**customer of choice**).

#### 1.6 Hiểu lầm thường gặp

- *"Chọn nhà cung cấp rẻ nhất là tiết kiệm cho khách."* → Sửa: tính **tổng chi phí** và rủi ro; giá thuê rẻ có thể đi kèm AV độc quyền đắt.
- *"RFP chỉ để lấy giá."* → Sửa: đó là RFQ. RFP để lấy **giải pháp**.
- *"Chấm điểm là thủ tục."* → Sửa: bảng chấm là **lời giải thích** Nova đưa cho Key Account.

→ Chuyển sang **S3 — Thực hành 1** (phiếu `W10_activity_S3_cham_ho_so_khach_san.md`).

---

## S4 — Lý thuyết 2 (22 phút)

### §2. 10.2 — Site check, tiêu chí chọn địa điểm và sơ đồ không gian

#### 2.1 Mở đầu: một địa điểm, nhiều bên thuê (V10)

*[Chiếu slide 11.]* Cuối 2024, sân vận động quốc gia Mỹ Đình tổ chức concert tối 7/12, một tuần trước trận ASEAN Cup của đội tuyển Việt Nam gặp Indonesia (15/12). VFF xin đổi sân nhà về **Việt Trì** (Tuổi Trẻ, 11/11/2024; *đã KCC*).

*[Hỏi: "Nếu Nova là agency của concert đó, ta cần hỏi địa điểm điều gì? Nếu Nova làm cho **bên thuê sau**, ta cần hỏi gì?" — Chốt: "Địa điểm phục vụ nhiều bên thuê. Luôn hỏi: **trước và sau ngày của tôi có sự kiện gì**, giờ dựng – tháo thế nào, ai chịu trách nhiệm trả lại mặt bằng."]*

#### 2.2 Chọn địa điểm trước — vì địa điểm quyết định nhà cung cấp (V07)

> *“The venue is often the first step in a search because that influences which vendors are used.”* (Blumin, trong BizBash — V07)

Khách sạn có AV độc quyền → Nova mất quyền chọn AV. Khách sạn cho mang AV ngoài → Nova tự chọn được đơn vị livestream quen.

Người tổ chức coi trọng **sơ đồ mặt bằng**: thông số phòng (50%), hình ảnh (48%), sơ đồ mặt bằng (46%) là những nguồn ảnh hưởng nhiều nhất đến quyết định gửi RFP. Và một nghịch lý đáng thảo luận: 97% sẵn sàng đổi sang địa điểm thứ hai nếu tiết kiệm ≤ 20%, nhưng 94% sẵn sàng **trả thêm** để giữ địa điểm ưu tiên (V06, Cvent, *chưa KCC*). *[Hỏi: "Hai con số này mâu thuẫn không?" — Chốt: "Không hẳn. Giá quan trọng, nhưng **quan hệ** với địa điểm cũng có giá trị."]*

#### 2.3 Tiêu chí chọn địa điểm cho sự kiện của Key Account (người soạn tổng hợp từ V06, V07)

| Nhóm tiêu chí | Hỏi gì | Vì sao quan trọng với An Phát |
|---|---|---|
| 1. Phù hợp khách của Key Account | Vị trí, đẳng cấp, cảm giác | 600 lãnh đạo doanh nghiệp VIP |
| 2. Sức chứa và bố trí | Diện tích **dùng được**, cột, trần, tầm nhìn | Không khách nào “ngồi sau cột” |
| 3. Kỹ thuật | Điện, rigging, Wi‑Fi, livestream | Chị Lan cần livestream về 80 chi nhánh |
| 4. Dịch vụ và nhà cung cấp độc quyền | AV, hoa, F&B nội bộ; phụ thu | Quyết định chi phí và chất lượng |
| 5. Lịch và điều khoản | Lịch trước – sau, giờ dựng – tháo, hủy, cọc | Rủi ro bị động sát ngày |
| 6. Tổng chi phí | Thuê + F&B + AV + phụ thu | Anh Khoa duyệt ngân sách |

#### 2.4 Site check — đi xem để hỏi, không phải đi xem cho đẹp (V07, V11)

BizBash (V07) đưa ra 11 câu “không bao giờ quên hỏi” khi khảo sát địa điểm. Việt hóa, thêm cột Key Account:

| Câu hỏi site check | Ảnh hưởng đến An Phát |
|---|---|
| Sức chứa tối đa và giấy phép là bao nhiêu? | Không vượt giới hạn chính thức *(chi tiết PCCC: môn Quản trị rủi ro)* |
| Có nhà cung cấp độc quyền không? Phụ thu mang bên ngoài? | Chi phí, chất lượng AV |
| AV, treo thiết bị (rigging), máy phát điện dự phòng? | Livestream không bị đứt |
| Khu hậu cần (back-of-house), khu chuẩn bị F&B ở đâu? | Phục vụ 600 khách đúng giờ |
| Giờ tập kết (load-in), thang hàng? | Sân khấu kịp dựng |
| Wi‑Fi cho khách và cho kỹ thuật? | Trải nghiệm khách, livestream |
| Bãi đỗ xe? | Khách VIP đến và về thuận tiện |
| Quy định gắn thương hiệu? | Nhận diện An Phát và nhà tài trợ (Buổi 9) |

**Case *Những thành phố mơ màng Summer 2026* (Hà Nội, 12/7/2026 — V11, *chưa KCC*):** mưa lớn làm khu vực ngoài trời không đảm bảo vệ sinh, khán giả lội bùn; sân khấu thấp, màn LED nhỏ, tầm nhìn hạn chế. Ban tổ chức xin lỗi và cam kết rà soát *“từ việc đánh giá điều kiện mặt bằng, xây dựng các phương án ứng phó với thời tiết đến việc chủ động cân nhắc điều chỉnh phương án tổ chức hoặc địa điểm”*. `[VERIFY: đối chiếu thêm một báo]`

*[Hỏi: "Site check trước đó thiếu câu hỏi nào?" — Gợi ý: thoát nước khi mưa, phương án B, tầm nhìn sân khấu từ cuối khán đài.]*

**Đi site check cùng Key Account** (anh Minh, chị Lan) là một điểm chạm quan trọng ở giai đoạn **trước mua** (§3).

#### 2.5 Space mapping — ước lượng diện tích (V08)

**Quy tắc ước lượng:** sức chứa ≈ **diện tích dùng được** ÷ diện tích mỗi người theo kiểu bố trí.

| Kiểu bố trí | m²/người (ước lượng) |
|---|---|
| Đứng (tiệc đứng) | ≈ 0,56 |
| Hỗn hợp đứng – ngồi | ≈ 0,74 |
| Có sàn nhảy | ≈ 0,84 |
| Bàn tròn tiệc | ≈ 1,0–1,1 *(chưa KCC)* |
| Lớp học | ≈ 1,3–1,7 |

*Nguồn: V08 (Social Tables) tính theo sq ft: đứng 6, hỗn hợp 8, sàn nhảy 9, lớp học 14–18; bàn tròn 11–12 từ blog địa điểm (chưa KCC). Quy đổi 1 m² ≈ 10,76 sq ft. Là quy tắc ước lượng, không phải tiêu chuẩn.*

**Tính cùng lớp:** 600 khách bàn tròn × 1,0–1,1 m² ≈ **610–670 m² chỉ cho khu bàn**. Cộng sân khấu, màn LED, lối đi, buffet, khu nhà tài trợ (giả định thêm ~250 m²) → cần khoảng **860–920 m² dùng được**.

**Diện tích trên brochure ≠ diện tích dùng được.** Thông số một trung tâm hội nghị lớn ở TP.HCM trên các trang khác nhau ghi từ “hơn 4.000 m²” đến khoảng 10.000 m² — có thể đo khác nhau (tổng sàn, một sảnh…). Bài học: **xin sơ đồ mặt bằng chính thức, hỏi “diện tích này là gì”, và đo khi site check.** *(Không nêu tên địa điểm — quyết định GV.)*

Sức chứa **chính thức** theo giấy phép của địa điểm và quy định PCCC → môn Quản trị rủi ro sự kiện.

#### 2.6 Hiểu lầm thường gặp

- *"Site check là đi chụp ảnh."* → Sửa: là **đánh giá nhà cung cấp tại chỗ** (V03) với danh sách câu hỏi.
- *"Ballroom 1.200 m² thì chứa thoải mái 600 khách."* → Sửa: trừ cột, sân khấu, lối đi; kiểm tra tầm nhìn.
- *"Chọn địa điểm xong mới chọn nhà cung cấp khác."* → Đúng một nửa: chọn địa điểm trước, nhưng câu hỏi về nhà cung cấp độc quyền phải có **trước khi ký**.

---

## S5 — Lý thuyết 3 (13 phút)

### §3. 10.3 — Gắn nhà cung cấp vào giai đoạn mua và sau mua của Key Account

#### 3.1 Hành trình 3 giai đoạn và 4 loại điểm chạm (V09)

Lemon & Verhoef (2016): hành trình khách hàng gồm **prepurchase – purchase – postpurchase**. Điểm chạm có bốn loại: **brand-owned** (do doanh nghiệp sở hữu), **partner-owned** (do đối tác sở hữu), **customer-owned** (do khách tự làm), **social/external** (bên ngoài). Tác giả viết: *“Partners can include marketing agencies…”*.

*[Nói: "Ở Buổi 3 và Buổi 9 ta vẽ hành trình của **khách của An Phát**. Hôm nay đổi vai: **An Phát là khách hàng của Nova**. Và khách sạn, AV, nhà in… là điểm chạm **partner-owned** trên hành trình của An Phát."]*

#### 3.2 Hành trình mua của An Phát với Nova (quyết định GV — phương án A)

| Giai đoạn | An Phát trải qua gì | Nhà cung cấp chạm An Phát ở đâu (ví dụ) |
|---|---|---|
| Trước mua *(nhắc lại)* | Brief, đề xuất, báo giá, **site check cùng Nova** | Khách sạn đón đoàn site check |
| **Mua** | Ký hợp đồng; tổng duyệt; **ngày 12/12** | Khách sạn (sảnh, F&B), AV – livestream, in ấn – backdrop, xe đưa đón, nhiếp ảnh, lễ tân thời vụ, quà tặng |
| **Sau mua** | Nghiệm thu, **báo cáo sau sự kiện (PER)**, hóa đơn – thanh toán, xử lý khiếu nại, đánh giá, đề xuất năm sau | Album ảnh, bản ghi livestream, đối soát số khách thực tế với khách sạn, hồ sơ thanh toán gửi anh Khoa |

*(Hành trình do người soạn dựng từ V09 và V05 — PER đã học ở Buổi 8.)*

#### 3.3 Trong mắt Key Account, lỗi của nhà cung cấp là lỗi của agency (nhận định)

An Phát ký với **Nova**, không ký với nhà in hay khách sạn. Backdrop in sai logo, chị Vy (thương hiệu) sẽ hỏi Nova. Hóa đơn khách sạn tính dư 30 khách, anh Khoa sẽ hỏi Nova. Vì vậy, quản lý nhà cung cấp là **quản lý trải nghiệm của Key Account**.

#### 3.4 Bốn câu hỏi phân bổ (dùng ngay ở S6)

1. Nhà cung cấp này chạm An Phát ở **giai đoạn nào** (mua / sau mua)?
2. **Ai của An Phát** nhìn thấy họ? (anh Minh, ông Tuấn, chị Lan, chị Vy, anh Khoa, hay khách của An Phát)
3. Nếu họ làm hỏng, **quan hệ Nova – An Phát** bị ảnh hưởng thế nào?
4. Nova quản lý bằng gì: **điều khoản hợp đồng**, checklist, người phụ trách, chỉ số, **đánh giá sau sự kiện**?

*[Nhấn: "Giai đoạn sau mua hay bị quên. Nhưng hồ sơ thanh toán chậm, ảnh gửi muộn cũng là trải nghiệm của An Phát — và là thứ anh Minh nhớ khi quyết định có tái ký năm sau."]*

→ Chuyển sang **S6 — Thực hành 2** (phiếu `W10_activity_S6_phan_bo_nha_cung_cap.md`).

---

## S7 — Tổng hợp (3 phút)

1. **10.1:** Chọn phương thức mua theo hạng mục (RFQ cho thông số rõ, RFP cho giải pháp). RFP tốt mang **Key Account và khách của Key Account** vào. Chọn bằng bảng chấm có trọng số: value for money, công bằng, có dấu vết, phản hồi bên trượt.
2. **10.2:** Chọn địa điểm trước vì địa điểm quyết định nhà cung cấp. Site check là **đi để hỏi**: độc quyền, giờ dựng, lịch trước – sau, diện tích **dùng được**.
3. **10.3:** Nhà cung cấp là điểm chạm **do đối tác sở hữu** trên hành trình mua của Key Account. Quản lý họ ở cả giai đoạn **mua** và **sau mua**.

**Liên hệ Stakeholder Management Plan:** với khách hàng từ dự án cũ, nhóm bổ sung một trang “nhà cung cấp và địa điểm”: hạng mục chính, phương thức mua, 3 tiêu chí chọn, bảng phân bổ theo giai đoạn của Key Account. Làm dần trên lớp, không giao về nhà.

---

## Tài liệu tham khảo cho buổi này

- Ho, W., Xu, X., & Dey, P. K. (2010). Multi-criteria decision making approaches for supplier evaluation and selection: A literature review. *European Journal of Operational Research, 202*(1), 16–24.
- Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. *Journal of Marketing, 80*(6), 69–96.
- Weber, C. A., Current, J. R., & Benton, W. C. (1991). Vendor selection criteria and methods. *European Journal of Operational Research, 50*(1), 2–18.

Trang hiệp hội, mẫu ngành, số liệu khảo sát và bài báo: xem danh mục APA đầy đủ (V01–V13) trong `buoi-10_tu-lieu-tong-hop.md`, mục 6.
