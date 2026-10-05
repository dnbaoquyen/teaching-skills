# Dàn ý slide + lời giảng — Buổi 5

MKT1107 Nghiên cứu Marketing · Buổi 5 · 36 slide (+ 1 slide tài liệu tham khảo)

> Mỗi slide gồm: **Tiêu đề** (viết thành một nhận định — đọc riêng các tiêu đề là thấy mạch bài),
> **Nội dung** (tối đa 3–4 dòng ngắn), **Hình** (mô tả + chú thích thay thế cho người dùng trình đọc
> màn hình), **Lời giảng** (gợi ý nói, câu hỏi, lúc dừng). Nội dung chi tiết nằm trong
> `W5_lecture_notes.md`.
>
> Tái sử dụng slide UEF Bài 3 ở đâu được thì ghi **[UEF #n]** (số thứ tự slide trong file Bài 3).
> Slide UEF cần sửa trước khi dùng:
> - **Tất cả các slide:** xóa chữ "NotebookLM" ở chân slide.
> - **#7** chỉ có 4 hạn chế → bổ sung đủ 7 theo tài liệu học tập; "xử lý Big Data chính xác" → "xử lý
>   nhanh khối lượng lớn".
> - **#8** thiếu ngành sản xuất (đề cương 3.6.2) → thêm ô; bỏ tên "IBM Watson" hoặc kiểm tra.
> - **#9** tiêu đề lặp chữ "Khoa Học Học"; ô "Phát hiện quy luật" lặp 2 lần → thay bằng bảng "AI hỗ trợ /
>   người nghiên cứu vẫn phải làm".
> - **#11** thêm Claude, Google Scholar, Semantic Scholar, Research Rabbit cho khớp tài liệu học tập.
> - **#13** mô tả iAsk ("tối ưu hóa câu hỏi") và Elicit ("tìm đối thủ/xu hướng") chưa chuẩn → thay bằng
>   bảng "chọn công cụ theo việc".
> - **#15** trích dẫn chỉ ghi "(OpenAI, 2023)" → thêm mục danh mục đầy đủ (slide 32).
> - **#18** ví dụ R-T-F yêu cầu AI lập bảng "tác giả, năm, trích dẫn" (dễ sinh trích dẫn bịa); **#19**
>   ví dụ T-A-G trộn vai trò vào phần Action; **#21** ví dụ C-A-R-E yêu cầu AI "tổng hợp các nghiên
>   cứu" và phần Example không phải ví dụ đầu ra → giữ khung + template, **thay ví dụ** theo tài liệu
>   học tập.
>
> Màu sắc: ô "nên/không nên", "giao cho AI/tự làm" luôn có nhãn chữ hoặc biểu tượng ✓/✗ — không chỉ
> dựa vào màu.

---

## S1 · Khởi động (0–10')

**Slide 1 — Bài 3 (tiếp): AI hỗ trợ nghiên cứu khoa học và marketing** [UEF #1]
- Nội dung: tên học phần, Buổi 5, giảng viên: **Đoàn Nguyễn Bảo Quyên**.
- Lời giảng: *(Không giảng. Chuyển ngay sang slide 2 để các nhóm báo cáo.)*

**Slide 2 — Buổi 4, AI đã đưa cho các nhóm bao nhiêu trích dẫn không tồn tại?**
- Nội dung: 3 câu cho nhóm báo cáo: Dùng công cụ gì, câu lệnh ra sao? · Bao nhiêu tài liệu đúng / có
  thật nhưng sai / không tồn tại? · Phát hiện bằng cách nào?
- Hình: bảng trống 3 cột "Đúng · Có thật nhưng sai · Không tồn tại" để GV điền trên bảng lớp. Chú thích
  thay thế: "Bảng kiểm đếm kết quả kiểm chứng trích dẫn AI của các nhóm."
- Lời giảng: Mời 1–2 nhóm, mỗi nhóm 2 phút. Hỏi cả lớp "Nhóm nào gặp ít nhất một trích dẫn không tồn
  tại?" — đếm tay. Bình luận theo **kiểu lỗi**, không theo tên nhóm.

**Slide 3 — Trôi chảy không có nghĩa là đúng: hôm nay học vì sao, và cách dùng AI cho đúng** [UEF #2
— chỉ giữ Hồi II và III]
- Nội dung: Hồi II: Ưu/hạn chế · Ứng dụng → Hồi III: Công cụ · Câu lệnh · Quy định.
- Hình: dải 2 khối nối bằng mũi tên (giữ hình UEF, làm mờ Hồi I "đã học Buổi 4"). Chú thích thay thế:
  "Lộ trình nửa sau Bài 3: từ hạn chế và ứng dụng đến công cụ và câu lệnh."
- Lời giảng: Chốt câu "Trôi chảy ≠ đúng" từ phần báo cáo; giới thiệu mạch buổi trong 30 giây.

## S2 · 3.5 Ưu điểm và hạn chế (10–28')

**Slide 4 — AI mạnh ở tốc độ và khối lượng, không phải ở sự thật** [UEF #7 — cột trái, đã sửa]
- Nội dung: 6 ưu điểm (rút gọn): nhanh với dữ liệu lớn · không mệt · tự động hóa việc lặp lại · gợi ý
  ý tưởng · phát hiện mẫu hình · giúp người không chuyên.
- Lời giảng: Đi nhanh. Một câu từ video: AI lấy đi việc xử lý thủ công để người nghiên cứu dành thời
  gian **diễn giải và suy nghĩ chiến lược**.

**Slide 5 — Bảy hạn chế; ba cái nguy hiểm nhất với người nghiên cứu** [UEF #7 — cột phải, đã bổ sung]
- Nội dung: 7 hạn chế, in đậm 3: **ảo giác · thiên lệch · quyền riêng tư**; còn lại: kiến thức có hạn
  thời gian · thiếu bối cảnh địa phương · "hộp đen" · phụ thuộc.
- Lời giảng: "Chi phí triển khai cao" trên slide gốc là chuyện của doanh nghiệp xây hệ thống AI, ít
  liên quan sinh viên. Báo trước: đi sâu 3 cái in đậm.

**Slide 6 — Ảo giác: tài liệu bịa luôn đúng định dạng APA**
- Nội dung: một trích dẫn **giả định** (tác giả Việt, tạp chí nghe hợp lý, đủ tập/số/trang, không DOI)
  có nhãn "VÍ DỤ GIẢ ĐỊNH — không tồn tại". 3 mũi chú: "trông thật" · "không tìm thấy" · "không DOI".
- Hình: trích dẫn đặt trong khung, các mũi tên chú thích. Chú thích thay thế: "Một trích dẫn do AI bịa,
  trông hoàn toàn giống trích dẫn thật."
- Lời giảng: AI ghép các mảnh "trông giống bài báo" theo xác suất. Nối lại các ví dụ nhóm vừa báo cáo.

**Slide 7 — Hai phút kiểm một trích dẫn: tìm tên bài → mở bản gốc → khớp nội dung**
- Nội dung: 3 bước đánh số. Dòng dưới: "Đừng hỏi lại chính AI 'tài liệu này có thật không?'"
- Lời giảng: Hỏi "nhóm nào đã hỏi lại AI và được AI xác nhận?" Kiểm chứng phải đi **ra ngoài** công cụ.
  Công cụ có dẫn nguồn giúp kiểm dễ hơn, không thay việc kiểm.

**Slide 8 — Dữ liệu thiên lệch thì kết quả thiên lệch: AI phân tích tuyển dụng**
- Nội dung: Dữ liệu tuyển dụng quá khứ nghiêng về một nhóm → AI "học" nhóm đó là ứng viên tốt → ưu ái
  nhóm đó → kết quả bất công. "AI không có ý phân biệt — nó lặp lại định kiến trong dữ liệu."
- Hình: sơ đồ 3 ô nối mũi tên: Dữ liệu cũ (lệch) → Mô hình AI → Gợi ý tuyển dụng (lệch). Chú thích
  thay thế: "Định kiến trong dữ liệu huấn luyện được AI lặp lại trong kết quả."
- Lời giảng: Ví dụ minh họa từ video bài giảng (không có tên doanh nghiệp, không số liệu). Hỏi: "AI lọc
  CV huấn luyện trên người được tuyển 10 năm qua — rủi ro là gì?"

**Slide 9 — Thiên lệch chạm cả dự án của bạn: AI biết thị trường Mỹ nhiều hơn thị trường Việt**
- Nội dung: Nghiêng về nguồn tiếng Anh, thị trường phương Tây · Hay đồng ý với người hỏi ("Chứng minh
  rằng…") · Cách giảm: nêu bối cảnh Việt Nam; hỏi cả ủng hộ và phản bác; đối chiếu tài liệu trong nước.
- Lời giảng: Nối Bài 1: "khảo sát để chứng minh ý sếp" — giờ là "câu lệnh để chứng minh ý mình".

**Slide 10 — Câu trả lời của người tham gia không được lên chatbot khi chưa ẩn danh**
- Nội dung: Không tải: tên, số điện thoại, email, MSSV, câu trả lời nhận diện được · Ẩn danh trước
  (PV01, PV02…) · Đọc điều khoản: dữ liệu có dùng để huấn luyện không?
- Hình: biểu tượng tờ phiếu có ô tên bị che bằng dải đen, mũi tên sang biểu tượng chatbot. Chú thích
  thay thế: "Dữ liệu được ẩn danh trước khi đưa vào công cụ AI."
- Lời giảng: Người trả lời đồng ý tham gia nghiên cứu của nhóm, không đồng ý gửi dữ liệu cho công ty
  công nghệ. Nói chung "quy định pháp luật về bảo vệ dữ liệu cá nhân" `[VERIFY: tên văn bản nếu nêu]`.

**Slide 11 — Ba cách giảm rủi ro — và quy tắc vàng: AI là trợ lý, không phải tác giả**
- Nội dung: bảng 2 cột: doanh nghiệp (video) ↔ nhóm sinh viên: dữ liệu có trách nhiệm ↔ ẩn danh · minh
  bạch ↔ khai báo + nhật ký · kiểm tra thuật toán ↔ kiểm chứng từng kết quả. Dòng dưới: quy tắc vàng.
- Lời giảng: Hỏi 1 bạn: "Dự án nhóm bạn có thể bị thiên lệch ở đâu nếu dựa vào AI?"

## S3 · 3.6 Ứng dụng (28–45')

**Slide 12 — AI có mặt ở mọi ngành có nhiều dữ liệu và việc lặp lại** [UEF #8 — đã thêm sản xuất]
- Nội dung: 7 ô: giao thông · sản xuất · y tế · tài chính – ngân hàng · truyền thông · trợ lý ảo · giáo
  dục (mỗi ô 1 dòng ví dụ).
- Hình: lưới biểu tượng ngành (giữ hình UEF, thêm ô sản xuất). Chú thích thay thế: "Bảy ngành ứng dụng
  AI, mỗi ngành một ví dụ."
- Lời giảng: Không đọc hết. "Điểm chung là gì?" → nhiều dữ liệu + nhận diện mẫu hình.

**Slide 13 — Trong sản xuất, AI nhìn lỗi, đoán hỏng máy và dự báo nhu cầu**
- Nội dung: Thị giác máy kiểm tra chất lượng · Bảo trì dự đoán · Dự báo nhu cầu · Chatbot chăm sóc
  khách hàng.
- Lời giảng: Dự báo nhu cầu là chỗ sản xuất gặp nghiên cứu marketing. Nếu trễ giờ: bỏ slide này.

**Slide 14 — Trong nghiên cứu khoa học, AI hỗ trợ từng bước; trách nhiệm vẫn là của người nghiên cứu**
  [thay UEF #9]
- Nội dung: bảng 5 giai đoạn × "AI có thể hỗ trợ" / "Người nghiên cứu vẫn phải làm" (rút gọn mỗi ô
  ≤ 6 từ).
- Lời giảng: Đọc **cột phải** trước. Dòng 1 (AI đặt câu hỏi phản biện, nhóm chọn vấn đề) chính là phần
  thực hành hôm nay.

**Slide 15 — Trong nghiên cứu marketing: AI đọc cảm xúc, dự báo và thu thập liên tục** [UEF #10 — bổ
sung]
- Nội dung: 3 ứng dụng theo video: phân tích cảm xúc (social listening) · phân tích dự báo (doanh số,
  rời bỏ, sản phẩm mới) · tự động hóa thu thập (khảo sát tự động, chatbot) và phân tích. Dòng nhỏ:
  "Quyết định cuối cùng vẫn là của doanh nghiệp."
- Hình: sơ đồ tâm "Nghiên cứu marketing" (giữ UEF #10) + vòng quy trình 3 bước: AI phân tích → đề xuất /
  mô phỏng → doanh nghiệp quyết định. Chú thích thay thế: "Các ứng dụng AI xoay quanh nghiên cứu
  marketing; doanh nghiệp vẫn là người ra quyết định."
- Lời giảng: Tình huống khảo sát tự động liên tục → AI nhận diện xu hướng mới nổi, điểm cần cải thiện.
  Video không nêu doanh nghiệp/số liệu — không thêm.

**Slide 16 — 20.000 bình luận: AI phân loại, con người kiểm tra mẫu trước khi tin**
- Nội dung: Ví dụ **(giả định)**: thương hiệu mỹ phẩm nội địa → AI phân loại chủ đề + cảm xúc → nhóm
  đọc mẫu ngẫu nhiên vài trăm bình luận → dùng để **đặt giả thuyết**, không để kết luận.
- Hình: phễu: 20.000 bình luận → 4 chủ đề × tích cực/tiêu cực → mẫu kiểm tra → giả thuyết. Chú thích
  thay thế: "Quy trình dùng AI phân tích bình luận có bước con người kiểm tra mẫu."
- Lời giảng: Hỏi về tiếng lóng, câu mỉa mai ("giao nhanh ghê, 2 tuần mới tới") → hạn chế bối cảnh địa
  phương.

**Slide 17 — Việc nào giao cho AI, việc nào nhóm phải tự làm?**
- Nội dung: 4 việc (gợi ý từ khóa · chọn hướng ĐT/ĐL · phát hiện câu hỏi kép · diễn giải bảng thống kê).
  Quy ước: 1 ngón = giao cho AI (có kiểm tra) · 2 ngón = tự làm.
- Lời giảng: Đếm 3–2–1, cả lớp giơ cùng lúc. Đáp án 1–2–1–2. Câu 2 là cầu nối sang thực hành.

## Giải lao (45–60')

**Slide 18 — Giải lao 15 phút**
- Nội dung: đồng hồ 15 phút; "Quay lại lúc …" `[giảng viên điền giờ]`. Dòng nhỏ: "Kiểm tra máy của
  nhóm đã mở được một công cụ AI chưa."
- Lời giảng: *(không giảng)*

## S4 · 3.7 Công cụ (60–70')

**Slide 19 — Hai nhóm công cụ: trợ lý đa năng để hiểu, công cụ học thuật để tìm** [UEF #11 — đã bổ sung]
- Nội dung: bảng 2 cột × 4 dòng (ví dụ · mạnh ở · rủi ro chính · không dùng để). Dòng nhỏ: "Đề cương nêu
  thêm Perplexity, iAsk — công cụ tìm kiếm có kèm nguồn; vẫn phải mở và đánh giá nguồn."
- Hình: hai khung logo/tên công cụ (giữ bố cục UEF #11). Chú thích thay thế: "Hai nhóm công cụ AI: trợ
  lý đa năng và công cụ cho tài liệu học thuật."
- Lời giảng: Gọi tên theo **chức năng** vì tên công cụ đổi nhanh `[VERIFY: tên, tính năng tại thời
  điểm dạy]`. NotebookLM: trả lời dựa trên tài liệu mình tải lên — tốt bằng bộ tài liệu đầu vào.

**Slide 20 — Chọn công cụ theo việc, và luôn biết mình sẽ kiểm chứng bằng cách nào** [thay UEF #13]
- Nội dung: bảng 6 dòng: việc cần làm · công cụ phù hợp · cách kiểm chứng.
- Lời giảng: Hỏi "Ở Buổi 4, nhóm nào lấy danh mục tài liệu từ chatbot? Lẽ ra dùng công cụ nào?"

**Slide 21 — Chatbot không thay phần mềm thống kê** [UEF #12]
- Nội dung: Nên: tổng hợp bức tranh chung · hỗ trợ định tính (sau khi ẩn danh) · gợi ý, biên tập, dịch.
  Không: phân tích dữ liệu định lượng · diễn giải kết quả thống kê. Luôn kiểm chứng.
- Hình: hai khung ✓ / ⚠ (giữ UEF #12). Chú thích thay thế: "Việc nên và không nên giao cho chatbot."
- Lời giảng: Phân tích chạy trên SPSS/Jamovi/Excel; tự giải thích được từng con số (Buổi 13).

## S5 · 3.8 Câu lệnh (70–88')

**Slide 22 — Câu lệnh mơ hồ nhận về câu trả lời chung chung — nơi ảo giác dễ xảy ra nhất** [UEF #14 —
mở rộng thành 6 nguyên tắc]
- Nội dung: 6 nguyên tắc: cụ thể · bối cảnh · định dạng · chia nhỏ, hỏi tiếp · yêu cầu nói rõ khi không
  chắc, không bịa nguồn · luôn kiểm chứng.
- Lời giảng: "Chain prompting" trên UEF = hỏi tiếp nhiều lượt. "Hàm System" chỉ nói 1 câu: hướng dẫn
  chung áp dụng cho mọi cuộc trò chuyện.

**Slide 23 — Một câu lệnh có nhiều "nút vặn": vai trò, người đọc, giọng, độ dài, cấu trúc** [UEF #16 +
#17]
- Nội dung: 4 nút: vai trò · người đọc · giọng điệu · độ dài & nền tảng. 5 cấu trúc: thời gian · so sánh
  · nguyên nhân – kết quả · vấn đề – giải pháp · tường thuật.
- Hình: 4 ô có biểu tượng nút vặn (giữ UEF #16) + dải 5 biểu tượng cấu trúc (UEF #17). Chú thích thay
  thế: "Các yếu tố có thể điều chỉnh trong một câu lệnh."
- Lời giảng: Đi nhanh 2 phút; các khung tiếp theo chỉ là cách gom các nút này lại.

**Slide 24 — Bốn khung câu lệnh, mỗi khung hợp với một kiểu việc**
- Nội dung: bảng 4 dòng: R-T-F (việc đơn giản) · T-A-G (AI cần biết mục tiêu) · B-A-B (cải thiện sản
  phẩm đã có) · C-A-R-E (việc phức tạp, cần đúng mẫu).
- Lời giảng: "Khung là danh sách kiểm tra để không quên nói với AI điều nó cần biết."

**Slide 25 — R-T-F: vai trò, nhiệm vụ, định dạng — cho việc cần nhanh** [UEF #18 — thay ví dụ]
- Nội dung: template của UEF + ví dụ: giải thích khám phá vs mô tả cho SV năm hai, bảng 4 tiêu chí, ví
  dụ trà sữa Việt Nam. Tô màu + nhãn chữ R / T / F.
- Lời giảng: Chỉ vào từng phần. Không dùng ví dụ gốc của UEF (xin bảng tác giả – năm – trích dẫn).

**Slide 26 — T-A-G: nói cho AI biết kết quả để làm gì** [UEF #19 — thay ví dụ]
- Nội dung: template + ví dụ: lý thuyết, biến, từ khóa cho đề tài mỹ phẩm nội địa; "không liệt kê bài
  báo nếu không chắc tồn tại". Nhãn T / A / G.
- Lời giảng: Câu cuối là nguyên tắc 5 viết thẳng vào câu lệnh. Xin **từ khóa để tự tìm**, không xin danh
  mục. Khung này dùng trong thực hành.

**Slide 27 — B-A-B: từ hiện trạng đến mong muốn — để sửa cái đã có** [UEF #20 — thay ví dụ]
- Nội dung: template + ví dụ: 5 câu hỏi khảo sát → rõ, trung lập, một ý → chỉ ra câu kép, câu dẫn dắt,
  đề xuất sửa. Nhãn B / A / B.
- Lời giảng: Sẽ dùng lại ở Buổi 10–11 khi sửa bảng hỏi.

**Slide 28 — C-A-R-E: bối cảnh, hành động, kết quả, ví dụ — cho việc phức tạp** [UEF #21 — thay ví dụ]
- Nội dung: template + ví dụ: hướng dẫn phỏng vấn sâu 8 SV về ứng dụng giao đồ ăn, 3 phần, kèm 1 câu
  mẫu. Nhãn C / A / R / E.
- Lời giảng: "E" là **ví dụ mẫu đầu ra** — đưa một câu mẫu để AI bắt chước đúng kiểu. Khung này dùng
  trong thực hành.

**Slide 29 — Sửa câu lệnh: "Viết bảng hỏi về trà sữa" thiếu những gì?**
- Nội dung: câu lệnh gốc · nhiệm vụ cặp (2'): chỉ ra chỗ thiếu → viết lại theo R-T-F.
- Lời giảng: Kịch bản trong `W5_activity_sua_cau_lenh.md`. Mời 2–3 cặp đọc; cả lớp gọi tên R, T, F.

## S6 · Đạo đức, quy định, trích dẫn (88–98')

**Slide 30 — Ranh giới: AI hỗ trợ bạn nghĩ, không nghĩ thay bạn** [UEF #15 — bổ sung]
- Nội dung: bảng 5 dòng Nên ✓ / Không nên ✗ (theo tài liệu học tập).
- Lời giảng: Nhấn "dùng AI tạo câu trả lời khảo sát giả" = bịa dữ liệu, vi phạm nặng nhất.

**Slide 31 — Năm quy định dùng AI của học phần**
- Nội dung: Được dùng · Khai báo · Nhật ký AI (từ M3) · Tự kiểm chứng · Đánh giá theo quá trình, không
  dùng phần mềm "phát hiện AI".
- Lời giảng: Đọc chậm. Nếu hỏi vì sao không dùng phần mềm phát hiện: không đáng tin, bắt nhầm người viết
  thật, thiên lệch với người viết không phải bản ngữ (Liang et al., 2023).

**Slide 32 — Trích dẫn AI theo APA 7 để minh bạch — AI không phải nguồn học thuật**
- Nội dung: mẫu: `OpenAI. (2023). ChatGPT (phiên bản ngày 14/3) [Mô hình ngôn ngữ lớn].
  https://chat.openai.com/chat` · trong bài `(OpenAI, 2023)` · ghi câu lệnh đã dùng.
- Lời giảng: Ghi năm, phiên bản của công cụ nhóm **thực dùng**. Lập luận vẫn dựa trên tài liệu gốc.

**Slide 33 — Nhật ký AI là bằng chứng quá trình của nhóm**
- Nội dung: 5 cột: Ngày · Công cụ · Câu lệnh chính · AI trả về (tóm tắt) · Nhóm kiểm chứng, giữ/sửa/bỏ
  gì, vì sao. Dòng dưới 2 câu kiểm tra nhanh (ẩn danh phỏng vấn · kiểm một bài báo AI gợi ý).
- Lời giảng: Cột cuối quan trọng nhất. Chỉ định 2 bạn trả lời 2 câu kiểm tra.

## S7 · Thực hành nhóm (98–143')

**Slide 34 — Xưởng câu lệnh (45'): cùng một yêu cầu, hai khung, một quyết định của nhóm**
- Nội dung: 5 chặng + thời gian: Chọn yêu cầu (5') · Viết T-A-G và C-A-R-E, so sánh (12') · AI phản
  biện vấn đề nghiên cứu (10') · Chốt định tính/định lượng (8') · Chia sẻ (10'). Ghi nhật ký AI suốt
  buổi. Không đưa dữ liệu cá nhân lên công cụ.
- Lời giảng: Kịch bản trong `W5_activity_xuong_cau_lenh.md`. Để slide này trên màn hình suốt 45 phút.

## S8 · Kết buổi (143–148')

**Slide 35 — Trước khi về: một khung câu lệnh, một lần AI sai**
- Nội dung: 2 câu phiếu ra về: Khung nhóm sẽ dùng tiếp, vì sao? · Một điều AI trả lời sai/không dùng
  được hôm nay.
- Lời giảng: Thu phiếu.

**Slide 36 — M3 và buổi sau**
- Nội dung: M3 — Tổng quan tài liệu 2–3 trang + nhật ký AI · nhóm · 5% · nộp LMS sau Buổi 5
  `[giảng viên điền hạn]`. Checklist 6 mục (tóm tắt 1 dòng). Buổi 6: Thiết kế nghiên cứu, viết đề cương
  — mang bản M3.
- Lời giảng: Không có đề mới — đề đã giao ở Buổi 4; checklist ở cuối tài liệu học tập Bài 3. Câu nối:
  "Hướng nhóm vừa chốt sẽ quyết định đề cương Buổi 6."

---

**Kiểm tra số slide:** 36 slide cho khoảng 73 phút giảng + 2 hoạt động — khoảng 0,5 slide/phút, trong
mức hợp lý. Slide UEF dùng: #1, #2, #7, #8, #10–#12, #14–#21; thay thế: #9, #13 (bằng bảng mới);
không dùng: #3–#6 (đã dạy ở Buổi 4).

## Slide bổ sung cuối bài

**Slide tài liệu tham khảo** (đặt sau slide cuối, không đánh số trong mạch giảng)
- Nội dung: 4 tài liệu theo APA 7, sắp xếp chữ cái — American Psychological Association (2020); Liang
  et al. (2023); McAdoo (2023); Russell & Norvig (2021). Danh mục đầy đủ trong `W5_lecture_notes.md`.
- Lời giảng: không giảng; nhắc đây cũng là mẫu cho danh mục tài liệu của M3.
