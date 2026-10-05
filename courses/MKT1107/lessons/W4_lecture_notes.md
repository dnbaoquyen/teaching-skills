# Bài giảng — Buổi 4: Bài 3 AI hỗ trợ nghiên cứu khoa học và marketing (phần 1)

MKT1107 Nghiên cứu Marketing · Buổi 4 · 150 phút · Giảng viên: Đoàn Nguyễn Bảo Quyên

> Bài giảng viết theo các phân đoạn (S1–S8) của `W4_lesson_plan.md`. Chữ nghiêng trong ngoặc là
> **ghi chú cho giảng viên** (cách nói, lúc dừng, lúc hỏi) — không phải nội dung đọc to.
> Độ dài mỗi phần tính theo khoảng 120–140 từ/phút nói.
>
> **Nguồn:** tài liệu học tập Bài 3 (`tai_lieu_hoc_tap/Bai03.md`, mục 3.1–3.5 — nguồn chuẩn, bài giảng
> nhất quán với tài liệu này); slide UEF Bài 3 (#1–#7, #12); video "Unlock AI's Potential in Market
> Research" qua NotebookLM (ứng dụng AI trong nghiên cứu thị trường, rủi ro đạo đức — video không nêu tên
> doanh nghiệp hay số liệu); đề cương MKT1107. Tình huống ghi **(giả định)** là do Claude dựng để minh
> họa, không phải sự kiện thật. Mọi chỗ cần giảng viên kiểm tra đều gắn `[VERIFY]` và được tổng hợp ở
> cuối tài liệu.

---

## S1 · Khởi động — kiểm tra M2 (0–8')

*(M2 — danh mục tài liệu APA 7 + tổng quan tài liệu 1 trang — đã nộp trên LMS sau Buổi 3. Trước buổi
học, lướt nhanh các bài nộp để lấy 3 lỗi phổ biến nhất. Không nêu tên nhóm nào trước lớp, kể cả nhóm
chưa nộp — nhắc riêng sau giờ.)*

Trước khi vào bài mới, mình nhìn lại M2. Tôi đã lướt qua các bài nộp; phản hồi chi tiết từng nhóm sẽ có
trên LMS `[NEEDS PROFESSOR INPUT: thời điểm trả phản hồi M2 — đề xuất trước Buổi 5 để nhóm dùng cho
M3]`. Hôm nay tôi chỉ nêu **ba lỗi gặp nhiều nhất**, để các nhóm tự sửa ngay — vì danh mục này sẽ đi
tiếp vào M3.

*(Ba lỗi mặc định dưới đây lấy từ bảng "Lỗi thường gặp" của Bài 2 — thay bằng lỗi thực tế quan sát được
ở bài M2 `[NEEDS PROFESSOR INPUT]`.)*

1. **Tên tác giả Việt** — ghi đủ họ tên hoặc đảo kiểu phương Tây. Đúng: `Lê, Q. H. (2017)` trong danh
   mục, `(Lê, 2017)` trong bài.
2. **DOI kiểu cũ** — `doi:10.13106/...` phải ghi thành đường dẫn `https://doi.org/10.13106/...`.
3. **Trích trong bài và danh mục không khớp** — có tài liệu trích trong bài mà không có trong danh mục,
   hoặc ngược lại. Mỗi trích dẫn phải có đúng một mục trong danh mục.

*(Hỏi 2 nhóm, chỉ định:)* "Nhóm đã tìm tài liệu cho M2 bằng cách nào? Có ai dùng AI để tìm không?"

*(Câu trả lời thường gặp: Google Scholar, Google thường, hỏi chatbot. Nếu có nhóm nói đã dùng chatbot:
hỏi tiếp "Nhóm có mở từng bài AI đưa ra không?" — không phê phán; ghi nhận và chuyển ý.)*

Chuyển ý: Bài 2 có một dòng cuối trong bảng lỗi: **"Trích dẫn do AI gợi ý mà không kiểm tra."** Hôm nay
mình học vì sao dòng đó tồn tại.

---

## S2 · Câu đố mở đầu (8–13')

*(Chiếu đoạn trả lời AI mẫu với 3 trích dẫn — trích dẫn 1, 2, 4 của phụ lục B trong phiếu hoạt động.
Đọc câu lệnh, để lớp đọc câu trả lời khoảng 1 phút.)*

Đây là câu trả lời của một chatbot khi một nhóm sinh viên hỏi tài liệu cho đề tài về ý định mua mỹ phẩm
nội địa. Trông rất chuyên nghiệp: đủ tác giả, năm, tên tạp chí, có cả DOI.

Câu hỏi: **trong ba trích dẫn này, có bao nhiêu cái hoàn toàn đúng?** Cả lớp giơ tay cùng lúc: 0 ngón,
1, 2 hay 3 ngón. Đếm 3–2–1.

*(Đếm nhanh, ghi tỷ lệ dự đoán lên góc bảng — ví dụ "3 ngón: nhiều nhất". **Chưa công bố đáp án.** Đáp
án: chỉ 1 trích dẫn đúng hoàn toàn — xem phần giảng viên của phiếu hoạt động.)*

Tôi chưa nói đáp án. Đến cuối buổi, chính các bạn sẽ tự tìm ra — bằng cách kiểm chứng. Nhưng muốn hiểu
**vì sao** một cỗ máy lại có thể viết ra một trích dẫn trông như thật mà không thật, mình phải hiểu AI
là gì và nó "học" như thế nào. Đó là phần đầu của Bài 3.

*(Chiếu lộ trình UEF #2: ba "hồi" — hôm nay hồi I (nền tảng: khái niệm, lịch sử, chuỗi giá trị, phân
loại) và mở đầu hồi II ở phần ảo giác; Buổi 5 học hồi II–III.)*

---

## S3 · AI là gì, và đã phát triển như thế nào (13–43')

### 3.1 Trí tuệ nhân tạo là gì? (khoảng 15')

**Trí tuệ nhân tạo (Artificial Intelligence – AI)** là lĩnh vực nghiên cứu và xây dựng các hệ thống máy
tính có thể thực hiện những công việc vốn đòi hỏi trí tuệ con người: nhận diện hình ảnh và giọng nói,
hiểu và tạo ra ngôn ngữ, học từ dữ liệu, suy luận và ra quyết định.

Định nghĩa thì dài. Cách dễ hiểu nhất để thấy AI khác phần mềm thông thường ở đâu là so sánh **hai
cách "dạy" máy tính**.

**Cách thứ nhất — lập trình truyền thống.** Con người đưa vào **dữ liệu** và **quy tắc**, máy tính tạo ra
**đáp án**.

> Dữ liệu + Quy tắc → Đáp án

Ví dụ: phần mềm tính học phí. Lập trình viên viết sẵn công thức: số tín chỉ × đơn giá. Các bạn nhập số
tín chỉ (dữ liệu), máy áp công thức (quy tắc), ra số tiền (đáp án). Lần nào cũng đúng, và giải thích
được từng bước.

**Cách thứ hai — AI / học máy (machine learning).** Con người đưa vào **dữ liệu** và **đáp án mẫu**, máy
tính tự rút ra **quy tắc** — gọi là **mô hình**.

> Dữ liệu + Đáp án → Quy tắc (mô hình)

Ví dụ: bộ lọc thư rác. Không ai viết được đủ quy tắc để nhận ra mọi thư rác — kẻ gửi thư rác đổi cách
viết liên tục. Thay vào đó, người ta cho máy xem **hàng nghìn thư đã gắn nhãn** "rác / không rác". Máy tự
rút ra dấu hiệu nhận biết. Gặp thư mới, máy dùng các dấu hiệu đó để đoán.

*(Chiếu UEF #3 — hai cột "Lập trình truyền thống" / "Trí tuệ nhân tạo". Viết hai công thức lên bảng, giữ
nguyên suốt buổi.)*

| | Lập trình truyền thống | AI / học máy |
|---|---|---|
| Con người đưa vào | Dữ liệu + **quy tắc** | Dữ liệu + **đáp án mẫu** |
| Máy tính tạo ra | Đáp án | **Quy tắc** (mô hình) |
| Điểm mạnh | Chính xác, giải thích được từng bước | Xử lý được việc khó viết thành quy tắc (ngôn ngữ, hình ảnh, hành vi) |
| Điểm yếu | Không xử lý được tình huống ngoài quy tắc | Có thể sai mà không biết vì sao; phụ thuộc chất lượng dữ liệu |

*(Hỏi:)* "Vậy nếu một ngày bộ lọc thư rác xếp nhầm email báo điểm của trường vào thư rác — lỗi do ai?"

*(Mong đợi: không có "người viết sai quy tắc" để sửa; máy học từ dữ liệu, có thể dữ liệu mẫu có nhiều
thư giống email báo điểm bị gắn nhãn rác. Dẫn sang hệ quả.)*

**Hệ quả quan trọng nhất cho người làm nghiên cứu:** **AI học từ dữ liệu nên chỉ tốt bằng dữ liệu nó đã
học.**

- **Dữ liệu thiên lệch thì kết quả thiên lệch.** Video bài giảng về AI trong nghiên cứu thị trường đưa
  một ví dụ minh họa: nếu một công cụ AI dùng để phân tích xu hướng tuyển dụng được huấn luyện trên dữ
  liệu đã có định kiến, nó có thể **ưu ái một số nhóm nhân khẩu học** — và lặp lại định kiến đó một cách
  tự động. *(Video không nêu tên doanh nghiệp hay số liệu — trình bày là ví dụ minh họa.)*
- **Dữ liệu cũ thì kết quả lạc hậu.** Một mô hình học từ dữ liệu đến một thời điểm nào đó sẽ không biết
  chuyện xảy ra sau đó.

*(Hỏi, chỉ định 1–2 bạn — câu hỏi liên hệ marketing, giả định:)* "Một công cụ AI học từ bình luận về mỹ
phẩm trên mạng — mà phần lớn bình luận đến từ người ở các thành phố lớn. Dùng nó để kết luận về sở thích
của sinh viên ở tỉnh thì có vấn đề gì?"

*(Mong đợi: dữ liệu không đại diện cho sinh viên ở tỉnh → kết luận lệch. Nối với Buổi 1: "hỏi sai người
thì kết luận sai" — với AI, "học từ sai dữ liệu thì trả lời sai". Buổi 8 sẽ học kỹ về mẫu đại diện.)*

### 3.2 Lịch sử phát triển của AI (khoảng 12')

*(Chiếu UEF #4 — dòng thời gian, đã sửa theo bảng dưới. Không đọc hết; mỗi mốc 1–2 câu, nhấn vào sự
chuyển từ "viết luật" sang "học từ dữ liệu".)*

AI không phải chuyện mới của vài năm gần đây — nó có hơn 70 năm lịch sử.

| Giai đoạn | Mốc chính | Ý nghĩa |
|---|---|---|
| 1950 | Alan Turing đặt câu hỏi "Máy móc có thể suy nghĩ không?" và đề xuất phép thử Turing | Đặt nền móng tư tưởng cho AI |
| 1956 | Hội thảo Dartmouth (Mỹ); thuật ngữ "artificial intelligence" do John McCarthy đề xuất được dùng chính thức | AI trở thành một lĩnh vực nghiên cứu |
| 1960s–1980s | AI dựa trên quy tắc, **hệ chuyên gia** (máy làm theo bộ luật do chuyên gia viết) | Ứng dụng được trong phạm vi hẹp; nhiều lần kỳ vọng quá cao rồi suy giảm ("mùa đông AI") |
| 1990s–2000s | **Học máy** phát triển nhờ dữ liệu và máy tính mạnh hơn; 1997 máy Deep Blue của IBM thắng nhà vô địch cờ vua Garry Kasparov | Chuyển từ "viết luật" sang "học từ dữ liệu" |
| 2010s | **Học sâu** (mạng nơ-ron nhiều lớp) đột phá ở nhận diện hình ảnh, giọng nói, dịch máy | AI đi vào sản phẩm hằng ngày: gợi ý sản phẩm, trợ lý ảo |
| 2020s | **AI tạo sinh** và **mô hình ngôn ngữ lớn (LLM)**; cuối 2022 ChatGPT ra mắt và phổ biến rộng rãi | Ai cũng có thể dùng AI bằng ngôn ngữ tự nhiên; đặt ra câu hỏi mới về đạo đức và liêm chính học thuật |

*(Ghi chú cho giảng viên: slide UEF #4 ghi hệ chuyên gia ở "1960s–1970s" và học máy ở "1980s–1990s";
tài liệu học tập (đã sửa) ghi 1960s–1980s cho AI dựa trên quy tắc/hệ chuyên gia — hệ chuyên gia phổ biến
nhất khoảng 1970s–1980s `[VERIFY]`. Dạy theo tài liệu học tập. Slide UEF #4 có lỗi chính tả "manh nha"
và thiếu mốc Deep Blue 1997, ChatGPT 2022.)*

Ba điều cần nhớ từ dòng thời gian này:

1. **Ban đầu, AI là "viết luật".** Hệ chuyên gia (expert systems) là con người ngồi viết hàng nghìn quy
   tắc "nếu… thì…". Làm được việc hẹp, nhưng thế giới có quá nhiều tình huống ngoài luật — nên AI nhiều
   lần bị kỳ vọng quá cao rồi suy giảm, gọi là các **"mùa đông AI"**.
2. **Bước ngoặt là chuyển sang "học từ dữ liệu".** Khi có nhiều dữ liệu và máy tính mạnh hơn, học máy
   rồi **học sâu** (deep learning — mạng nơ-ron nhiều lớp) bắt đầu làm được những việc khó viết thành
   luật: nhận diện khuôn mặt, giọng nói, dịch máy. Deep Blue năm 1997 là cột mốc công chúng nhớ đến.
3. **AI tạo sinh làm AI trở nên "của mọi người".** Từ cuối 2022, ai cũng có thể ra lệnh cho AI bằng
   tiếng Việt thông thường. Đó cũng là lý do học phần này cần một bài riêng về AI.

**Thông điệp quan trọng nhất của S3** *(nói chậm, ghi lên bảng)*:

> **AI tạo sinh (như ChatGPT, Gemini, Claude) chỉ là một nhánh của AI. Nó tạo ra văn bản, hình ảnh
> "trông hợp lý" dựa trên xác suất — không phải tra cứu một kho sự thật.**

*(Vẽ 4 vòng tròn lồng nhau lên bảng: AI ⊃ học máy ⊃ học sâu ⊃ AI tạo sinh / LLM.)*

Hãy nghĩ thế này: mô hình ngôn ngữ đã "đọc" một lượng văn bản khổng lồ, trong đó có rất nhiều danh mục
tài liệu tham khảo. Nó học được rằng một trích dẫn **thường trông như thế nào**: họ tác giả, năm trong
ngoặc, tên bài, tên tạp chí in nghiêng, số tập, số trang, DOI. Khi các bạn hỏi tài liệu, nó tạo ra thứ
có **hình dạng** của một trích dẫn — có thể trùng với một bài có thật, có thể không. Liên hệ lại câu đố
đầu giờ.

*(Ghi chú cho giảng viên: một số chatbot hiện có tính năng tìm kiếm web và đưa đường link nguồn — khi
đó tỷ lệ trích dẫn bịa thường giảm, nhưng phần tóm tắt nội dung vẫn có thể sai. Đừng hứa với sinh viên
rằng "công cụ có tìm kiếm thì không cần kiểm chứng". Tính năng công cụ thay đổi nhanh — xem lưu ý đầu
Bài 3.)*

Chuyển ý: Đủ lý thuyết — kiểm tra nhanh xem các bạn đã phân biệt được "luật" và "học" chưa.

---

## S4 · Kiểm tra nhanh "Luật hay học?" (43–48')

*(Chiếu lần lượt 5 tình huống. Mỗi tình huống: cặp bạn bên cạnh 20 giây, rồi đếm 3–2–1 giơ tay: **1
ngón = lập trình truyền thống (luật)** · **2 ngón = học máy (học)**.)*

1. Ứng dụng ngân hàng tính tiền lãi tiết kiệm theo số tiền gửi, lãi suất và kỳ hạn.
2. Sàn thương mại điện tử gợi ý "Có thể bạn cũng thích" dựa trên lịch sử mua sắm của hàng triệu người.
3. Google Forms tự chuyển người trả lời "Chưa từng mua" xuống phần cuối bảng hỏi.
4. Một công cụ đọc 20.000 bình luận trên sàn thương mại điện tử và phân loại thành khen / chê theo chủ
   đề (bao bì, mùi hương, giao hàng, giá).
5. Chatbot trả lời câu hỏi "Nghiên cứu khám phá khác nghiên cứu mô tả thế nào?".

**Đáp án:**

| # | Đáp án | Dấu hiệu |
|---|---|---|
| 1 | Luật | Công thức có sẵn, con người viết; lần nào cũng ra cùng kết quả |
| 2 | Học | Không ai viết luật "người mua A thì thích B" — máy rút ra từ dữ liệu mua của nhiều người |
| 3 | Luật | Logic rẽ nhánh do chính người làm bảng hỏi cài đặt ("nếu… thì chuyển tới phần…") |
| 4 | Học | Ngôn ngữ tự nhiên, quá nhiều cách diễn đạt để viết thành luật (ví dụ giả định từ tài liệu học tập, mục 3.6.3) |
| 5 | Học | Mô hình ngôn ngữ lớn — AI tạo sinh |

*(Chữa kỹ tình huống lớp chia rẽ nhất — thường là 3: nhiều bạn nghĩ "tự động là AI". Nhấn: **tự động
không có nghĩa là AI**; câu hỏi phân biệt là "ai viết ra quy tắc — người hay máy?". Tình huống 3 chính
là việc các nhóm sẽ làm ở Buổi 11 khi dựng Google Form.)*

---

## Giải lao (48–63')

*(Trong giờ giải lao: kiểm tra wifi; mở sẵn Google Scholar trên máy chiếu cho phần demo S6.)*

---

## S5 · Chuỗi giá trị, các cấp độ AI và AI trong nghiên cứu thị trường (63–83')

### 3.3 Chuỗi giá trị của AI (khoảng 7')

Chatbot các bạn dùng hằng ngày là **điểm cuối** của cả một chuỗi nhiều tầng. Hiểu chuỗi này giúp các
bạn biết câu trả lời của AI **phụ thuộc vào đâu**.

*(Chiếu slide chuỗi 6 tầng theo tài liệu học tập — xem ghi chú về UEF #5 bên dưới. Đi từ dưới lên.)*

| Tầng | Nội dung | Ví dụ |
|---|---|---|
| 1. Phần cứng | Chip xử lý chuyên dụng (GPU, TPU) | Chip của các hãng bán dẫn |
| 2. Hạ tầng đám mây | Trung tâm dữ liệu, năng lực tính toán cho thuê | Các dịch vụ điện toán đám mây |
| 3. Dữ liệu | Dữ liệu để huấn luyện và vận hành mô hình | Văn bản trên internet, dữ liệu giao dịch, hình ảnh |
| 4. Mô hình nền tảng | Mô hình AI lớn được huấn luyện sẵn | Các mô hình ngôn ngữ lớn |
| 5. Nền tảng / công cụ phát triển | Giao diện lập trình, thư viện để doanh nghiệp xây ứng dụng | API của các nhà cung cấp mô hình |
| 6. Ứng dụng | Sản phẩm người dùng cuối sử dụng | Chatbot, công cụ tìm tài liệu, phần mềm thiết kế |

*(Ghi chú cho giảng viên: slide UEF #5 dùng một cách chia 6 tầng khác — phần cứng, đám mây, mô hình nền
tảng, kho mô hình & MLOps, ứng dụng, dịch vụ — **không có tầng dữ liệu** và kèm tên doanh nghiệp. Bài
giảng theo tài liệu học tập (có tầng dữ liệu, vì đó là ý chính cho người nghiên cứu). Nếu dùng lại UEF
#5, sửa theo bảng trên; tên doanh nghiệp không đưa lên slide — nếu nêu miệng thì `[VERIFY]` tên và vai
trò hiện hành.)*

**Ý nghĩa với người nghiên cứu:** sinh viên làm việc ở **tầng 6**. Nhưng chất lượng câu trả lời phụ
thuộc vào **dữ liệu (tầng 3)** và **mô hình (tầng 4)** mà các bạn không nhìn thấy. Vì vậy, với mỗi công cụ,
cần biết hai điều: **nó lấy thông tin từ đâu, và cập nhật đến khi nào.** Một chatbot không biết nguồn và
một công cụ tìm tài liệu học thuật có liên kết đến bài gốc là hai thứ rất khác nhau — Buổi 5 sẽ học cách
chọn công cụ theo việc.

### 3.4 Các cấp độ của AI (khoảng 7')

*(Chiếu UEF #6 — bậc thang 4 cấp.)*

Một cách phân loại phổ biến chia AI thành **bốn cấp theo khả năng** (Hintze, 2016):

| Cấp | Đặc điểm | Ví dụ | Tình trạng |
|---|---|---|---|
| 1. Máy phản ứng (reactive machines) | Chỉ phản ứng với tình huống hiện tại, không lưu trữ kinh nghiệm | Máy chơi cờ vua Deep Blue | Đã có |
| 2. Bộ nhớ hạn chế (limited memory) | Dùng dữ liệu quá khứ gần đây để ra quyết định | Xe tự lái, hệ thống gợi ý sản phẩm, chatbot hiện nay | Đã có — hầu hết AI hiện nay thuộc cấp này |
| 3. Lý thuyết tâm trí (theory of mind) | Hiểu được cảm xúc, ý định, niềm tin của con người | — | Đang nghiên cứu |
| 4. Tự nhận thức (self-aware) | Có ý thức về bản thân | — | Giả thuyết |

*(Hỏi, chỉ định 2 bạn:)* "Chatbot các bạn dùng thuộc cấp nào? Vì sao?"

*(Mong đợi: cấp 2 — dùng dữ liệu đã học và nội dung trong cuộc hội thoại để trả lời. Có bạn sẽ nói cấp 3
vì "nó trả lời rất hiểu mình" — dùng câu đó để dẫn sang lỗi hiểu bên dưới.)*

> **Lỗi hiểu thường gặp — "Chatbot trả lời đồng cảm, trôi chảy, vậy là nó hiểu mình."** Chatbot có thể
> trả lời bằng giọng đồng cảm, nhưng đó là **mô phỏng ngôn ngữ**, không phải cấp 3. **Đừng nhầm sự trôi
> chảy của câu trả lời với sự hiểu biết** — và với sự **chính xác**. Một trích dẫn bịa cũng được viết rất
> trôi chảy.

### AI trong nghiên cứu thị trường — giới thiệu (khoảng 6')

*(Phần này lấy từ video "Unlock AI's Potential in Market Research" — video nói ở mức nguyên tắc, không
nêu tên doanh nghiệp hay số liệu. Chỉ giới thiệu; Buổi 5 học đầy đủ 3.5–3.6.)*

Vậy AI làm được gì cho nghiên cứu thị trường? Video bài giảng nêu mấy nhóm việc chính:

- **Phân tích cảm xúc người tiêu dùng** (sentiment analysis) — xử lý dữ liệu mạng xã hội để biết khách
  hàng đang khen hay chê, về điều gì.
- **Phân tích dự báo** — từ lịch sử mua hàng, dự báo doanh số hoặc khả năng thành công của một sản phẩm
  mới.
- **Tự động hóa thu thập và xử lý dữ liệu** — khảo sát tự động, làm sạch dữ liệu, mã hóa, gom chủ đề ban
  đầu — giúp người nghiên cứu bớt việc thủ công để **tập trung vào diễn giải**.

Ví dụ (giả định, từ tài liệu học tập): một thương hiệu mỹ phẩm nội địa thu 20.000 bình luận trên sàn
thương mại điện tử; AI phân loại theo chủ đề và cảm xúc; **nhóm nghiên cứu đọc mẫu ngẫu nhiên vài trăm
bình luận để kiểm tra AI phân loại có đúng không**, rồi mới dùng kết quả. Để ý câu in đậm: AI làm nhanh,
con người kiểm tra.

Video cũng cảnh báo **ba rủi ro đạo đức**:

1. **Quyền riêng tư dữ liệu** — thông tin cá nhân phải được bảo vệ và dùng có đạo đức. Với dự án của các
   bạn: **không** đưa tên, số điện thoại, câu trả lời có thể nhận diện người tham gia lên công cụ AI.
2. **Thiên lệch thuật toán** — AI có thể lặp lại, thậm chí khuếch đại định kiến có sẵn trong dữ liệu
   huấn luyện (ví dụ tuyển dụng ở 3.1).
3. **Thiếu minh bạch** — khó biết vì sao AI đưa ra kết quả. Cách giảm rủi ro video đề xuất: quản lý dữ
   liệu có trách nhiệm, minh bạch quy trình, **thường xuyên kiểm tra (kiểm toán) thuật toán**.

Ở quy mô của một nhóm sinh viên, "kiểm toán thuật toán" có một phiên bản rất cụ thể: **kiểm chứng từng
kết quả AI đưa cho mình** — và ghi lại mình đã kiểm chứng thế nào. Đó là phần tiếp theo.

---

## S6 · Ảo giác và cách kiểm chứng một trích dẫn (83–95')

### Ảo giác là gì (khoảng 4')

*(Chiếu UEF #7 — chỉ ô "Ảo giác AI" trong cột Hạn chế; và ô cảnh báo của UEF #12 "Phải luôn kiểm chứng
thông tin (tránh Hallucination)". Cả slide ưu/nhược điểm học ở Buổi 5.)*

**Ảo giác (hallucination)** là khi AI **tạo ra thông tin sai nhưng trình bày rất tự tin** — kể cả bài
báo, tác giả, số liệu không tồn tại. Đây là hạn chế lớn nhất của AI với người làm nghiên cứu, và nó
xuất phát trực tiếp từ điều mình vừa học: AI tạo sinh tạo ra thứ **trông hợp lý**, không tra cứu sự
thật.

Với tài liệu tham khảo, ảo giác thường có **bốn kiểu**:

1. **Bịa hoàn toàn** — bài báo không tồn tại; hay gặp kiểu ghép một **tác giả nổi tiếng** với một tên
   bài và một tạp chí nghe rất hợp lý.
2. **Sai chi tiết** — bài có thật nhưng sai tác giả, năm, tên tạp chí, số tập, số trang.
3. **DOI sai** — DOI không tồn tại, hoặc dẫn sang một bài khác.
4. **Tóm tắt sai nội dung** — bài có thật, chi tiết đúng, nhưng AI nói bài đó kết luận một điều mà bài
   không hề nghiên cứu. Đây là kiểu **khó phát hiện nhất**, vì ba bước kiểm tra đầu đều "qua".

> **Lỗi hiểu thường gặp — "Có DOI thì chắc chắn là thật."** DOI cũng có thể bịa, hoặc là DOI thật của
> một bài khác. Phải **mở** DOI ra xem nó dẫn tới đâu.

### Quy trình kiểm chứng 4 bước — giảng viên làm mẫu (khoảng 6')

*(Demo trực tiếp trên Google Scholar với **trích dẫn 4** của câu đố — bài tiếng Việt bịa. Không demo
trích dẫn 2 để không lộ đáp án. Nếu mất mạng: dùng ảnh chụp màn hình đã chuẩn bị.)*

Với **mỗi** trích dẫn AI đưa ra, làm đủ 4 bước:

1. **Có thật không?** Gõ tên bài trong dấu ngoặc kép vào Google Scholar. Không thấy → tìm theo tác giả +
   từ khóa; tài liệu tiếng Việt → tìm thêm trên trang web của tạp chí.
2. **Đúng chi tiết không?** So tác giả, năm, tên tạp chí, tập (số), trang với bản trên Scholar / trang
   tạp chí.
3. **DOI dẫn đúng bài không?** Mở `https://doi.org/` + DOI.
4. **Nội dung có đúng như AI tóm tắt không?** Đọc phần tóm tắt (abstract) của bài gốc.

*(Trong demo, nói thành lời từng bước: "Tìm tên bài trong ngoặc kép — không có. Tìm tác giả 'Nguyễn' với
từ khóa 'TikTok mỹ phẩm' — có nhiều bài nhưng không bài nào trùng. Tìm tên tạp chí — không thấy tạp chí
này. Kết luận: **không xác minh được** — không dùng.")*

Ba kết luận có thể: **Đúng** · **Sai chi tiết** (sửa theo bản gốc, và chỉ dùng sau khi đã đọc bài) ·
**Không xác minh được** (không dùng).

> **Lưu ý:** "không tìm thấy trên Google Scholar" chưa chắc là bịa — sách, báo cáo, bài tiếng Việt có thể
> không có trên Scholar. Vì vậy kết luận là **"không xác minh được"**, và nguyên tắc là: **không xác minh
> được thì không trích.**

### Nhật ký AI (khoảng 2')

*(Chiếu mẫu nhật ký AI — phụ lục A của phiếu hoạt động.)*

Từ hôm nay, mỗi lần nhóm dùng AI cho dự án, ghi **một dòng** nhật ký, gồm 6 cột chính: **công cụ · ngày ·
câu lệnh · tóm tắt kết quả · cách kiểm chứng · phần đã sửa / loại bỏ**.

Nhật ký **không phải để bắt lỗi** các bạn. Nó là bằng chứng về **quá trình** làm việc của nhóm: nhóm đã
hỏi gì, đã tin gì, đã sửa gì. Theo quy định của học phần: được dùng AI, phải khai báo, nộp nhật ký, tự
kiểm chứng; giảng viên đánh giá qua nhật ký, các bản nháp theo mốc và khả năng nhóm giải thích bài làm —
**không dùng phần mềm "phát hiện AI"**. Nhật ký bắt đầu nộp từ M3, và dòng đầu tiên các bạn sẽ viết ngay
trong 45 phút tới.

---

## S7 · Thực hành nhóm "Kiểm chứng AI" (95–140')

*(Xem phiếu `W4_activity_kiem_chung_ai.md` — kịch bản, bốn chặng, bảng kiểm chứng, mẫu nhật ký AI, câu
trả lời AI mẫu dự phòng và đáp án.)*

*(Cuối chặng 4: kẻ bảng tổng hợp lớp — Tổng số trích dẫn · Đúng · Sai chi tiết · Không xác minh được —
từ báo cáo của 4–5 nhóm. Rồi quay lại góc bảng có dự đoán câu đố đầu giờ và công bố đáp án: chỉ trích
dẫn 1 đúng hoàn toàn; trích dẫn 2 có thật nhưng tóm tắt sai; trích dẫn 4 không xác minh được. Ghi bảng
tổng hợp vào post-class notes.)*

*(Câu chốt sau bảng tổng hợp:)* "Con số của lớp mình hôm nay phụ thuộc vào công cụ và câu lệnh — lần sau
có thể khác. Điều không đổi là: **mỗi trích dẫn trong bài của các bạn phải là bài các bạn đã mở và đã
đọc.**"

---

## S8 · Kết buổi (140–147')

*(Phát phiếu ra về — giấy nhỏ.)*

Trước khi về, mỗi bạn viết hai dòng:

1. **Một việc AI có thể làm tốt cho dự án của nhóm mình.**
2. **Một việc mình sẽ không tin AI nếu chưa tự kiểm tra.**

Không cần ghi tên. *(Thu lại; đọc trước Buổi 5 và dùng 2–3 câu trả lời tiêu biểu để mở đầu phần ưu/nhược
điểm của AI.)*

**Bài tập — M3: Tổng quan tài liệu và nhật ký AI** (nhóm, 5%), nộp sau Buổi 5
`[NEEDS PROFESSOR INPUT: hạn nộp cụ thể]`. Ba ý chính:

- Phát triển tổng quan 1 trang của M2 thành **2–3 trang, tổng hợp theo chủ đề** — không liệt kê từng bài.
- **Nhật ký AI** — dòng đầu tiên là buổi thực hành hôm nay.
- **Chọn hướng** định tính (3 chương) hay định lượng (5 chương), kèm lý do. Buổi 5 sẽ có thêm thông tin
  để chọn.

Đề bài và tiêu chí chấm: `W4_M3_tong_quan_tai_lieu_nhat_ky_ai.md` (đăng trên LMS).

**Đọc trước Buổi 5:** tài liệu học tập Bài 3, mục 3.5–3.8.

**Nối sang buổi sau:** "Hôm nay các bạn đã thấy AI có thể sai thế nào. Tuần sau học mặt còn lại: AI làm
tốt việc gì, chọn công cụ nào cho việc nào, và cách **đặt câu lệnh** để AI giúp mình nhiều hơn — kể cả
dùng AI để phản biện vấn đề nghiên cứu của nhóm."

---

## Tổng hợp [VERIFY] / [NEEDS PROFESSOR INPUT]

1. `[VERIFY]` Mốc hệ chuyên gia (slide UEF #4: 1960s–1970s; tài liệu học tập: 1960s–1980s) — đã dạy
   theo tài liệu học tập (S3, 3.2).
2. `[VERIFY]` Tên doanh nghiệp trên slide UEF #5 (nếu nêu miệng) — không đưa lên slide (S5, 3.3).
3. Ví dụ tuyển dụng thiên lệch và các ứng dụng AI trong nghiên cứu thị trường từ video — video không nêu
   tên doanh nghiệp hay số liệu; trình bày là **ví dụ minh họa** (S3, S5).
4. `[VERIFY]` Câu trả lời AI mẫu dùng cho câu đố, demo và phương án dự phòng: 3 trích dẫn thật đã đối
   chiếu Crossref, 2 trích dẫn bịa đã thử tìm không thấy (05/10/2026) — kiểm tra lại trước khi tái sử
   dụng (xem phiếu hoạt động).
5. Ví dụ "câu hỏi về bình luận mỹ phẩm ở thành phố lớn" (S3) và các tình huống "Luật hay học?" (S4) là
   **tình huống giả định**.
6. `[NEEDS PROFESSOR INPUT]` Ba lỗi APA thực tế ở bài M2 (S1); thời điểm trả phản hồi M2 (S1); hạn nộp
   M3 và quy định nộp trễ (S8).

## Tài liệu tham khảo (APA 7)

Hintze, A. (2016, November 14). *Understanding the four types of AI, from reactive robots to self-aware
beings*. The Conversation. https://theconversation.com/understanding-the-four-types-of-ai-from-reactive-robots-to-self-aware-beings-67616

McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (2006). A proposal for the Dartmouth summer
research project on artificial intelligence, August 31, 1955. *AI Magazine, 27*(4), 12–14.
https://doi.org/10.1609/aimag.v27i4.1904

Russell, S., & Norvig, P. (2021). *Artificial intelligence: A modern approach* (4th ed.). Pearson.

Turing, A. M. (1950). Computing machinery and intelligence. *Mind, 59*(236), 433–460.
https://doi.org/10.1093/mind/LIX.236.433
