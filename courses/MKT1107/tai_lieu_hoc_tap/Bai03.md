<!-- Bản sao tham chiếu của tài liệu học tập trên Claude Docs (xem ../lms_tai_lieu_hoc_tap.md). Bản trên Claude Docs là bản chính. -->

Học phần MKT1107 Nghiên cứu Marketing · Trường Đại học Kinh tế – Tài chính TP.HCM (UEF) · Giảng viên: Đoàn Nguyễn Bảo Quyên · Tài liệu dùng cho Buổi 4–5 và 18 giờ tự học của Bài 3.

## Mục tiêu bài học

Học xong bài này, bạn có thể:

1. Giải thích AI là gì, khác lập trình truyền thống ra sao, và các cấp độ AI.
2. Nêu ưu điểm, hạn chế và ứng dụng của AI trong nghiên cứu và marketing.
3. Chọn đúng công cụ AI cho từng việc trong dự án nghiên cứu.
4. Viết câu lệnh (prompt) theo một khung rõ ràng và kiểm chứng kết quả AI trả về.
5. Dùng AI đúng quy định của học phần.

**Lưu ý:** tên và tính năng các công cụ AI thay đổi rất nhanh. Những gì nói về công cụ trong tài liệu này đúng vào thời điểm biên soạn; hãy kiểm tra lại khi sử dụng. Nguyên tắc dùng AI và cách đặt câu lệnh thì ít thay đổi hơn.

## 3.1 Trí tuệ nhân tạo là gì?

**Trí tuệ nhân tạo (Artificial Intelligence – AI)** là lĩnh vực nghiên cứu và xây dựng các hệ thống máy tính có thể thực hiện những công việc vốn đòi hỏi trí tuệ con người: nhận diện hình ảnh và giọng nói, hiểu và tạo ra ngôn ngữ, học từ dữ liệu, suy luận và ra quyết định.

Cách dễ hiểu nhất để thấy AI khác gì phần mềm thông thường là so sánh hai cách “dạy” máy tính:

| | Lập trình truyền thống | AI / học máy |
|---|---|---|
| Con người đưa vào | Dữ liệu + **quy tắc** | Dữ liệu + **đáp án mẫu** |
| Máy tính tạo ra | Đáp án | **Quy tắc** (mô hình) |
| Công thức tóm tắt | Dữ liệu + Quy tắc → Đáp án | Dữ liệu + Đáp án → Quy tắc |
| Ví dụ | Phần mềm tính học phí: lập trình viên viết sẵn công thức số tín chỉ × đơn giá | Bộ lọc thư rác: cho máy xem hàng nghìn thư đã gắn nhãn “rác / không rác”, máy tự rút ra dấu hiệu nhận biết |
| Điểm mạnh | Chính xác, giải thích được từng bước | Xử lý được việc khó viết thành quy tắc (ngôn ngữ, hình ảnh, hành vi) |
| Điểm yếu | Không xử lý được tình huống ngoài quy tắc | Có thể sai mà không biết vì sao; phụ thuộc chất lượng dữ liệu |

Hệ quả quan trọng cho người làm nghiên cứu: **AI học từ dữ liệu nên chỉ tốt bằng dữ liệu nó đã học.** Dữ liệu thiên lệch thì kết quả thiên lệch; dữ liệu cũ thì kết quả lạc hậu.

## 3.2 Lịch sử phát triển của AI

| Giai đoạn | Mốc chính | Ý nghĩa |
|---|---|---|
| 1950 | Alan Turing đặt câu hỏi “Máy móc có thể suy nghĩ không?” và đề xuất phép thử Turing | Đặt nền móng tư tưởng cho AI |
| 1956 | Hội thảo Dartmouth (Mỹ); thuật ngữ “artificial intelligence” do John McCarthy đề xuất được dùng chính thức | AI trở thành một lĩnh vực nghiên cứu |
| 1960s–1980s | AI dựa trên quy tắc, **hệ chuyên gia** (máy làm theo bộ luật do chuyên gia viết) | Ứng dụng được trong phạm vi hẹp; nhiều lần kỳ vọng quá cao rồi suy giảm (“mùa đông AI”) |
| 1990s–2000s | **Học máy** phát triển nhờ dữ liệu và máy tính mạnh hơn; 1997 máy Deep Blue của IBM thắng nhà vô địch cờ vua Garry Kasparov | Chuyển từ “viết luật” sang “học từ dữ liệu” |
| 2010s | **Học sâu** (mạng nơ-ron nhiều lớp) đột phá ở nhận diện hình ảnh, giọng nói, dịch máy | AI đi vào sản phẩm hằng ngày: gợi ý sản phẩm, trợ lý ảo |
| 2020s | **AI tạo sinh** và **mô hình ngôn ngữ lớn (LLM)**; cuối 2022 ChatGPT ra mắt và phổ biến rộng rãi | Ai cũng có thể dùng AI bằng ngôn ngữ tự nhiên; đặt ra câu hỏi mới về đạo đức và liêm chính học thuật |

**Ghi nhớ:** AI tạo sinh (như ChatGPT, Gemini, Claude) chỉ là một nhánh của AI. Nó tạo ra văn bản, hình ảnh “trông hợp lý” dựa trên xác suất — không phải tra cứu một kho sự thật. Đây là lý do mọi kết quả AI đưa ra đều phải được kiểm chứng.

## 3.3 Chuỗi giá trị của AI

Một ứng dụng AI mà bạn dùng hằng ngày là điểm cuối của cả một chuỗi nhiều tầng. Hiểu chuỗi này giúp bạn biết kết quả AI phụ thuộc vào đâu.

| Tầng | Nội dung | Ví dụ |
|---|---|---|
| 1. Phần cứng | Chip xử lý chuyên dụng (GPU, TPU) | Chip của các hãng bán dẫn |
| 2. Hạ tầng đám mây | Trung tâm dữ liệu, năng lực tính toán cho thuê | Các dịch vụ điện toán đám mây |
| 3. Dữ liệu | Dữ liệu để huấn luyện và vận hành mô hình | Văn bản trên internet, dữ liệu giao dịch, hình ảnh |
| 4. Mô hình nền tảng | Mô hình AI lớn được huấn luyện sẵn | Các mô hình ngôn ngữ lớn |
| 5. Nền tảng / công cụ phát triển | Giao diện lập trình, thư viện để doanh nghiệp xây ứng dụng | API của các nhà cung cấp mô hình |
| 6. Ứng dụng | Sản phẩm người dùng cuối sử dụng | Chatbot, công cụ tìm tài liệu, phần mềm thiết kế |

**Ý nghĩa với người nghiên cứu:** sinh viên chủ yếu làm việc ở tầng 6. Chất lượng câu trả lời phụ thuộc vào dữ liệu (tầng 3) và mô hình (tầng 4) mà bạn không nhìn thấy — vì vậy cần biết công cụ mình dùng lấy thông tin từ đâu và cập nhật đến khi nào.

## 3.4 Các cấp độ của AI

Một cách phân loại phổ biến chia AI thành bốn cấp theo khả năng:

| Cấp | Đặc điểm | Ví dụ | Tình trạng |
|---|---|---|---|
| 1. Máy phản ứng (reactive machines) | Chỉ phản ứng với tình huống hiện tại, không lưu trữ kinh nghiệm | Máy chơi cờ vua Deep Blue | Đã có |
| 2. Bộ nhớ hạn chế (limited memory) | Dùng dữ liệu quá khứ gần đây để ra quyết định | Xe tự lái, hệ thống gợi ý sản phẩm, chatbot hiện nay | Đã có — hầu hết AI hiện nay thuộc cấp này |
| 3. Lý thuyết tâm trí (theory of mind) | Hiểu được cảm xúc, ý định, niềm tin của con người | — | Đang nghiên cứu |
| 4. Tự nhận thức (self-aware) | Có ý thức về bản thân | — | Giả thuyết |

**Lưu ý:** chatbot có thể trả lời bằng giọng đồng cảm nhưng đó là mô phỏng ngôn ngữ, không phải cấp 3. Đừng nhầm sự trôi chảy của câu trả lời với sự hiểu biết.

## 3.5 Ưu điểm và hạn chế của AI

| Ưu điểm | Hạn chế |
|---|---|
| Xử lý khối lượng lớn dữ liệu rất nhanh | **Ảo giác (hallucination):** tạo ra thông tin sai nhưng trình bày rất tự tin — kể cả bài báo, tác giả, số liệu không tồn tại |
| Làm việc liên tục, không mệt mỏi | **Thiên lệch** theo dữ liệu huấn luyện (ví dụ thiên về nguồn tiếng Anh, thị trường phương Tây) |
| Tự động hóa việc lặp lại: tóm tắt, dịch, định dạng | **Kiến thức có hạn thời gian**, có thể không biết sự kiện mới |
| Gợi ý ý tưởng, mở rộng góc nhìn khi bí | **Thiếu hiểu biết bối cảnh** địa phương, văn hóa, ngành cụ thể |
| Phát hiện mẫu hình trong dữ liệu mà con người dễ bỏ sót | **Khó giải thích** vì sao đưa ra kết quả (“hộp đen”) |
| Hỗ trợ người không chuyên tiếp cận kỹ thuật phức tạp | **Rủi ro bảo mật và quyền riêng tư** khi đưa dữ liệu cá nhân lên công cụ |
| | **Phụ thuộc:** dùng thay vì học làm người dùng mất kỹ năng tư duy |

**Quy tắc vàng:** AI là trợ lý, không phải tác giả. Bạn chịu trách nhiệm hoàn toàn về mọi nội dung nộp đi, kể cả phần do AI gợi ý.

## 3.6 Ứng dụng của AI

### 3.6.1 Trong sản xuất và kinh doanh

- **Kiểm tra chất lượng bằng thị giác máy:** camera và AI phát hiện sản phẩm lỗi trên dây chuyền.
- **Bảo trì dự đoán:** dự báo máy móc sắp hỏng từ dữ liệu cảm biến để sửa trước.
- **Dự báo nhu cầu:** ước lượng hàng cần sản xuất, nhập kho.
- **Chăm sóc khách hàng:** chatbot trả lời câu hỏi thường gặp.

### 3.6.2 Trong nghiên cứu khoa học

| Giai đoạn nghiên cứu | AI có thể hỗ trợ | Người nghiên cứu vẫn phải làm |
|---|---|---|
| Hình thành ý tưởng | Gợi ý hướng, đặt câu hỏi phản biện | Chọn vấn đề có ý nghĩa với quyết định quản trị |
| Tìm và đọc tài liệu | Tìm bài báo liên quan, tóm tắt, so sánh | Mở từng bài gốc, kiểm tra bài có thật và nói đúng như tóm tắt không |
| Thiết kế công cụ | Gợi ý câu hỏi, phát hiện câu hỏi kép, câu hỏi dẫn dắt | Biến đo dựa trên thang đo đã công bố; thử nghiệm trên người thật |
| Phân tích dữ liệu định tính | Gợi ý mã hóa, nhóm chủ đề ban đầu | Đọc lại dữ liệu gốc, quyết định chủ đề cuối cùng |
| Viết báo cáo | Góp ý văn phong, ngữ pháp, cấu trúc | Tự viết lập luận và diễn giải kết quả |

### 3.6.3 Trong nghiên cứu marketing

- **Lắng nghe mạng xã hội (social listening):** theo dõi và phân loại cảm xúc tích cực/tiêu cực trong bình luận về thương hiệu.
- **Phân khúc khách hàng** từ dữ liệu hành vi mua.
- **Phân tích câu trả lời mở** trong khảo sát với số lượng lớn.
- **Thử nghiệm A/B** và cá nhân hóa nội dung quảng cáo.
- **Dự báo** doanh số, khả năng khách hàng rời bỏ.

*Ví dụ (giả định):* một thương hiệu mỹ phẩm nội địa thu thập 20.000 bình luận trên sàn thương mại điện tử. AI phân loại bình luận theo chủ đề (bao bì, mùi hương, giao hàng, giá) và cảm xúc. Nhóm nghiên cứu đọc mẫu ngẫu nhiên vài trăm bình luận để kiểm tra AI phân loại có đúng không, rồi mới dùng kết quả để đặt giả thuyết cho khảo sát tiếp theo.

## 3.7 Công cụ AI hỗ trợ nghiên cứu

Có thể chia công cụ thành hai nhóm lớn:

| | Nhóm 1: Trợ lý đa năng (chatbot) | Nhóm 2: Công cụ chuyên cho tài liệu học thuật |
|---|---|---|
| Ví dụ | ChatGPT, Gemini, Claude, Copilot | Google Scholar, Semantic Scholar, Elicit, Consensus, Research Rabbit, NotebookLM |
| Mạnh ở | Giải thích khái niệm, gợi ý ý tưởng, góp ý văn phong, phản biện | Tìm bài báo có thật, liên kết đến nguồn gốc, tóm tắt từ tài liệu bạn cung cấp |
| Rủi ro chính | Bịa nguồn, bịa số liệu | Phạm vi cơ sở dữ liệu có hạn; tóm tắt vẫn có thể sai |
| Không dùng để | Lấy danh mục tài liệu tham khảo | Thay thế việc đọc bài gốc |

### Chọn công cụ theo việc cần làm

| Việc cần làm | Công cụ phù hợp | Cách kiểm chứng |
|---|---|---|
| Hiểu một khái niệm mới | Trợ lý đa năng | Đối chiếu giáo trình |
| Tìm bài báo cho tổng quan tài liệu | Google Scholar, Semantic Scholar, Elicit, Consensus | Mở bài gốc, kiểm tra DOI |
| Tìm các bài liên quan đến một bài đã có | Research Rabbit, “Cited by” trên Google Scholar | Đọc tóm tắt từng bài |
| Tóm tắt, hỏi đáp trên bộ tài liệu nhóm đã tải về | NotebookLM | Xem đoạn trích dẫn công cụ chỉ ra |
| Góp ý bảng hỏi | Trợ lý đa năng | Thử bảng hỏi với 3–5 người thật |
| Phân tích thống kê | **Phần mềm thống kê** (SPSS, Jamovi, Excel, R…) | So sánh với bảng kết quả gốc của phần mềm |

**Hai lưu ý quan trọng:**

1. **Tính năng và tên công cụ thay đổi liên tục;** có công cụ miễn phí giới hạn số lượt dùng. Hãy kiểm tra điều khoản trước khi tải dữ liệu lên.
2. **Không dùng chatbot để tự chạy phân tích số liệu định lượng hay diễn giải kết quả thống kê thay bạn.** Chatbot có thể tính sai hoặc bịa số mà trông vẫn hợp lý. Phân tích phải chạy trên phần mềm thống kê và bạn phải tự hiểu, tự giải thích được từng con số trong báo cáo (sẽ học ở Bài 9–10).

## 3.8 Cách đặt câu lệnh (prompt) hỗ trợ nghiên cứu

### 3.8.1 Nguyên tắc chung

1. **Cụ thể:** nói rõ bạn là ai, cần gì, để làm gì.
2. **Cung cấp bối cảnh:** đề tài, đối tượng nghiên cứu, thị trường Việt Nam.
3. **Yêu cầu định dạng:** bảng, gạch đầu dòng, số từ.
4. **Chia nhỏ việc lớn** thành nhiều bước và hỏi tiếp (hội thoại nhiều lượt).
5. **Yêu cầu AI nói rõ khi không chắc** và không bịa nguồn.
6. **Luôn kiểm chứng** kết quả trước khi dùng.

### 3.8.2 Các khung câu lệnh thông dụng

| Khung | Thành phần | Phù hợp khi |
|---|---|---|
| **R-T-F** | Role (vai trò) – Task (nhiệm vụ) – Format (định dạng) | Việc đơn giản, cần kết quả nhanh |
| **T-A-G** | Task (nhiệm vụ) – Action (hành động) – Goal (mục tiêu) | Cần AI hiểu kết quả dùng để làm gì |
| **B-A-B** | Before (hiện trạng) – After (mong muốn) – Bridge (cách đi từ hiện trạng đến mong muốn) | Cần cải thiện một sản phẩm đã có (bảng hỏi, đoạn văn) |
| **C-A-R-E** | Context (bối cảnh) – Action (hành động) – Result (kết quả mong đợi) – Example (ví dụ mẫu) | Việc phức tạp, muốn kết quả theo đúng mẫu |

### 3.8.3 Ví dụ áp dụng cho dự án nghiên cứu marketing

**R-T-F** — hiểu khái niệm:

> Bạn là giảng viên nghiên cứu marketing (R). Hãy giải thích sự khác nhau giữa nghiên cứu khám phá và nghiên cứu mô tả cho sinh viên năm hai (T). Trình bày bằng bảng so sánh 4 tiêu chí, mỗi loại một ví dụ về ngành trà sữa tại Việt Nam (F).

**T-A-G** — tìm hướng tổng quan tài liệu:

> Nhóm tôi nghiên cứu các yếu tố ảnh hưởng đến ý định mua mỹ phẩm nội địa của sinh viên (T). Hãy liệt kê các lý thuyết và biến thường được dùng trong chủ đề này và gợi ý từ khóa tiếng Anh để tìm trên Google Scholar (A). Mục tiêu là định hướng việc tìm tài liệu; không liệt kê bài báo cụ thể nếu bạn không chắc chắn bài đó tồn tại (G).

**B-A-B** — cải thiện bảng hỏi:

> Đây là 5 câu hỏi khảo sát nhóm tôi đang có: [dán câu hỏi] (Before). Chúng tôi muốn các câu hỏi rõ ràng, trung lập, mỗi câu chỉ hỏi một ý (After). Hãy chỉ ra câu nào là câu hỏi kép, câu nào dẫn dắt, giải thích lý do và đề xuất cách sửa (Bridge).

**C-A-R-E** — thiết kế hướng dẫn phỏng vấn:

> Nhóm tôi làm nghiên cứu định tính về lý do sinh viên chọn ứng dụng giao đồ ăn, phỏng vấn sâu 8 sinh viên (C). Hãy gợi ý 8–10 câu hỏi mở cho buổi phỏng vấn 30 phút (A). Kết quả chia 3 phần: mở đầu, nội dung chính, kết thúc; mỗi câu chính có 1 câu hỏi gợi mở thêm (R). Ví dụ một câu: “Bạn kể lại lần gần nhất bạn đặt đồ ăn qua ứng dụng?” (E).

### 3.8.4 Đạo đức khi dùng AI trong nghiên cứu

| Nên | Không nên |
|---|---|
| Dùng AI để hiểu bài, gợi ý ý tưởng, góp ý văn phong | Nộp nguyên văn nội dung AI viết như bài của mình |
| Kiểm chứng mọi nguồn, số liệu, khái niệm | Trích dẫn tài liệu chỉ vì AI nói nó tồn tại |
| Khai báo rõ công cụ và cách đã dùng | Dùng AI tạo dữ liệu khảo sát, phỏng vấn giả |
| Ẩn danh dữ liệu trước khi đưa lên công cụ | Tải tên, số điện thoại, câu trả lời có thể nhận diện người tham gia lên công cụ AI |
| Tự viết lập luận và diễn giải kết quả | Để AI quyết định kết luận nghiên cứu thay mình |

### 3.8.5 Quy định sử dụng AI trong học phần

1. **Được phép dùng AI** để hỗ trợ học tập và làm dự án, trong phạm vi gợi ý, giải thích, góp ý.
2. **Khai báo:** mỗi bài nộp có dùng AI phải ghi rõ công cụ, mục đích, phần nào có hỗ trợ của AI.
3. **Nhật ký AI:** lưu lại các câu lệnh chính và cách nhóm đã kiểm chứng, chỉnh sửa kết quả (bắt đầu nộp từ M3).
4. **Tự kiểm chứng:** bạn chịu trách nhiệm về tính chính xác của mọi nội dung; nguồn bịa hoặc số liệu bịa là vi phạm liêm chính học thuật dù do AI tạo ra.
5. **Đánh giá dựa trên quá trình:** giảng viên đánh giá qua nhật ký AI, các bản nháp theo mốc và khả năng nhóm giải thích bài làm của mình — không dùng phần mềm “phát hiện AI”.

### 3.8.6 Trích dẫn công cụ AI theo APA 7

Khi dùng nguyên văn hoặc diễn giải nội dung do AI tạo ra, ghi rõ trong bài câu lệnh đã dùng và trích dẫn như sau:

```markdown
Tác giả (nhà phát triển). (Năm phiên bản). Tên công cụ (Phiên bản) [Mô tả]. URL

Ví dụ:
OpenAI. (2023). ChatGPT (phiên bản ngày 14/3) [Mô hình ngôn ngữ lớn]. https://chat.openai.com/chat

Trong bài: (OpenAI, 2023)
```

Lưu ý: AI **không phải** là nguồn học thuật. Dùng trích dẫn AI để minh bạch về việc đã dùng công cụ; các lập luận khoa học trong bài vẫn phải dựa trên tài liệu gốc đã kiểm chứng.

## Tóm tắt bài học

- AI học quy tắc từ dữ liệu thay vì được lập trình sẵn quy tắc; vì vậy AI chỉ tốt bằng dữ liệu nó đã học.
- AI đã trải qua hơn 70 năm phát triển; AI tạo sinh và mô hình ngôn ngữ lớn là giai đoạn mới nhất.
- Hầu hết AI hiện nay thuộc cấp “bộ nhớ hạn chế”; sự trôi chảy không đồng nghĩa với sự hiểu biết.
- Hạn chế lớn nhất với người nghiên cứu là **ảo giác**: bịa nguồn, bịa số liệu.
- Chọn công cụ theo việc: chatbot để hiểu và góp ý; công cụ học thuật để tìm tài liệu; phần mềm thống kê để phân tích số liệu.
- Câu lệnh tốt có vai trò, bối cảnh, nhiệm vụ và định dạng rõ ràng (R-T-F, T-A-G, B-A-B, C-A-R-E).
- Dùng AI phải khai báo, ghi nhật ký và tự kiểm chứng; bạn chịu trách nhiệm về mọi nội dung nộp.

## Thuật ngữ chính

| Tiếng Việt | Tiếng Anh | Nghĩa ngắn gọn |
|---|---|---|
| Trí tuệ nhân tạo | Artificial intelligence (AI) | Hệ thống máy tính thực hiện việc cần trí tuệ con người |
| Học máy | Machine learning | Máy tự rút ra quy tắc từ dữ liệu |
| Học sâu | Deep learning | Học máy dùng mạng nơ-ron nhiều lớp |
| AI tạo sinh | Generative AI | AI tạo ra nội dung mới (văn bản, hình ảnh…) |
| Mô hình ngôn ngữ lớn | Large language model (LLM) | Mô hình AI tạo sinh chuyên về ngôn ngữ |
| Ảo giác | Hallucination | AI tạo thông tin sai nhưng trình bày tự tin |
| Câu lệnh | Prompt | Yêu cầu bạn gửi cho công cụ AI |
| Lắng nghe mạng xã hội | Social listening | Theo dõi, phân tích thảo luận về thương hiệu trên mạng |

## Câu hỏi ôn tập

1. Phân biệt lập trình truyền thống và học máy. Vì sao “dữ liệu thiên lệch thì kết quả thiên lệch”?
2. Chatbot bạn đang dùng thuộc cấp độ AI nào? Giải thích.
3. Ảo giác là gì? Nêu hai cách kiểm tra một tài liệu tham khảo do AI gợi ý có thật không.
4. Nhóm bạn cần tìm 10 bài báo cho phần tổng quan tài liệu. Nên dùng nhóm công cụ nào, vì sao?
5. Vì sao không nên dùng chatbot để tự tính toán và diễn giải kết quả thống kê?
6. Viết lại câu lệnh sau theo khung R-T-F: “Viết bảng hỏi về trà sữa.”
7. Nhóm bạn có file câu trả lời phỏng vấn kèm tên và số điện thoại người tham gia. Trước khi dùng AI hỗ trợ phân tích, cần làm gì?
8. Nhật ký AI gồm những thông tin gì và giúp ích gì cho chính nhóm bạn?

## Liên hệ dự án nhóm — M3

**M3 – Tổng quan tài liệu và nhật ký AI** (nhóm, 5%, nộp sau Buổi 5). Danh sách tự kiểm tra trước khi nộp:

- [ ] Phần tổng quan tài liệu dài 2–3 trang, tổng hợp theo chủ đề chứ không liệt kê từng bài
- [ ] Mọi tài liệu trích dẫn đều đã được nhóm mở và đọc bản gốc; có DOI hoặc đường dẫn kiểm tra được
- [ ] Trích dẫn và danh mục tài liệu tham khảo đúng APA 7 (Bài 2)
- [ ] Nhật ký AI: công cụ, câu lệnh chính, kết quả AI trả về, cách nhóm kiểm chứng và chỉnh sửa
- [ ] Khai báo phần nào của bài có hỗ trợ của AI
- [ ] Nhóm nêu hướng dự kiến: nghiên cứu **định tính** (báo cáo 3 chương) hay **định lượng** (báo cáo 5 chương), kèm lý do ngắn

## Tài liệu tham khảo

Hintze, A. (2016, November 14). *Understanding the four types of AI, from reactive robots to self-aware beings*. The Conversation. https://theconversation.com/understanding-the-four-types-of-ai-from-reactive-robots-to-self-aware-beings-67616

McAdoo, T. (2023, April 7). *How to cite ChatGPT*. APA Style Blog. https://apastyle.apa.org/blog/how-to-cite-chatgpt

McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (2006). A proposal for the Dartmouth summer research project on artificial intelligence, August 31, 1955. *AI Magazine, 27*(4), 12–14. https://doi.org/10.1609/aimag.v27i4.1904

Russell, S., & Norvig, P. (2021). *Artificial intelligence: A modern approach* (4th ed.). Pearson.

Turing, A. M. (1950). Computing machinery and intelligence. *Mind, 59*(236), 433–460. https://doi.org/10.1093/mind/LIX.236.433
