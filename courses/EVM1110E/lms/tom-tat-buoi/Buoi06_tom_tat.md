# Buổi 6: Năng lực tài chính trong KAM

EVM1110E Quản trị mối quan hệ trong tổ chức sự kiện · Tài liệu tóm tắt kiến thức trọng tâm

> Tài liệu này giúp bạn ôn lại những ý chính của buổi học. Nó không thay thế việc tham dự lớp. Các tên “Nova Events”, “Ngân hàng An Phát”, “Địa ốc Sông Xanh” và mọi con số trong ví dụ là tình huống giả định của môn học.

## Sau buổi này, bạn cần nắm được

1. Cách tính CLV đơn giản của một Key Account và ảnh hưởng của tỷ lệ giữ chân, tỷ lệ chiết khấu.
2. Các thành phần cost-to-serve của agency sự kiện.
3. Cách đặt khách hàng lên ma trận biên lợi nhuận gộp × cost-to-serve và đề xuất hành động có lợi cho cả hai bên.

## 1. Doanh thu chưa nói lên giá trị của khách hàng

Khách hàng mang doanh thu lớn nhất chưa chắc là khách đáng giá nhất. Cần biết thêm ba điều: **lãi bao nhiêu** (biên lợi nhuận gộp), **phục vụ tốn bao nhiêu** (cost-to-serve), **ở lại bao lâu** (tỷ lệ giữ chân).

Giáo trình (Marcos et al., 2018) đo hiệu quả KAM ở cấp từng khách hàng bằng hai nhóm chỉ số:

- **Chỉ số kết quả.** Tài chính: tăng trưởng doanh thu, lợi nhuận, giá trị vòng đời. Quan hệ: hài lòng, trung thành, chất lượng quan hệ.
- **Chỉ số quá trình** (đi trước kết quả): phục vụ khách hàng (trong đó có cost-to-serve), cùng phát triển với khách, trải nghiệm khách hàng.

Buổi 6 học hai chỉ số: **giá trị vòng đời (CLV)** và **cost-to-serve**.

## 2. Giá trị vòng đời khách hàng (CLV)

**Định nghĩa.** CLV là ước lượng **giá trị hiện tại** của một quan hệ khách hàng, dựa trên doanh thu và chi phí dự kiến, quy về tiền hôm nay bằng một tỷ lệ chiết khấu (Marcos et al., 2018). Gupta et al. (2006): khi doanh thu đến từ quan hệ dài hạn, CLV dùng để **phân bổ nguồn lực**. Với KAM, CLV là thước đo tài chính **nhìn về phía trước**.

**Công thức của giáo trình:**

CLV = Σ (rₜ − eₜ) / (1 + i)ᵗ, với t = 1 … n

trong đó rₜ là doanh thu dự kiến năm t; eₜ là chi phí dự kiến năm t (kể cả chi phí phục vụ); i là tỷ lệ chiết khấu; n là số năm.

**Dạng dùng trên lớp:**

CLV ≈ Σ m × pᵗ⁻¹ / (1 + d)ᵗ, với t = 1 … T

| Ký hiệu | Ý nghĩa |
|---|---|
| m | Đóng góp ròng mỗi năm = lợi nhuận gộp − cost-to-serve riêng của khách |
| p | Tỷ lệ giữ chân (khả năng khách tái ký mỗi năm); năm 1 coi như chắc chắn |
| d | Tỷ lệ chiết khấu |
| T | Số năm xem xét (ví dụ 5) |

Hai điểm khác với tính doanh thu thông thường: tính trên **đóng góp ròng**, không trên doanh thu; và có **tỷ lệ giữ chân**, vì hợp đồng sự kiện thường ký từng năm.

*Ví dụ (giả định): An Phát.* Doanh thu 2.300 triệu/năm; biên lợi nhuận gộp 18% (414 triệu); cost-to-serve 80 triệu → m = 334 triệu. p = 85%, d = 12%, T = 5 năm.

| Năm | Cách tính | Giá trị (triệu đồng) |
|---|---|---|
| 1 | 334 / 1,12 | 298,2 |
| 2 | 334 × 0,85 / 1,12² | 226,3 |
| 3 | 334 × 0,85² / 1,12³ | 171,8 |
| 4 | 334 × 0,85³ / 1,12⁴ | 130,4 |
| 5 | 334 × 0,85⁴ / 1,12⁵ | 98,9 |
| **Tổng** | | **≈ 926** |

**Độ nhạy.** Nếu tỷ lệ giữ chân giảm từ 85% xuống 70% (mọi thứ khác giữ nguyên), CLV còn khoảng 719 triệu, mất khoảng 206 triệu. Không đổi giá, không đổi chi phí, chỉ đổi khả năng khách quay lại. **Chất lượng quan hệ (Buổi 4) là tiền thật.**

**Khách lãi nhất năm nay có thể có CLV thấp nhất.** Giáo trình kể ca một nhà cung cấp vật liệu xây dựng (Construmart, tên đã đổi) với ba nhà phân phối. Xét lợi nhuận một năm, B lãi nhất. Xét CLV 8 năm, A cao nhất, vì A đang mở rộng thành công ty toàn quốc, còn B không muốn đầu tư nâng cấp. Bài học: phân tích cả lợi nhuận tương lai, đừng chỉ “nhìn gương chiếu hậu”. Hiểu thế giới của khách hàng (Buổi 3) là đầu vào của CLV.

**Giới hạn của CLV:**

- phụ thuộc giả định, nên phải ghi rõ giả định và thử vài kịch bản;
- không đo hết giá trị vô hình như uy tín, hồ sơ năng lực, học hỏi mảng mới;
- dự báo càng xa càng kém chắc chắn, nên dùng 3–5 năm và cập nhật hằng năm.

## 3. Chi phí phục vụ (cost-to-serve)

Shapiro et al. (1987): lợi nhuận trên từng khách hàng khác nhau rất lớn, vì **giá thực nhận** khác nhau và **chi phí phục vụ** khác nhau. Doanh số cao không có nghĩa là lợi nhuận cao.

**Định nghĩa.** Cost-to-serve là chi phí gắn với việc phục vụ và quản trị quan hệ với một khách hàng hằng ngày: thăm khách, soạn tài liệu, trả lời yêu cầu, xử lý khiếu nại, mời lãnh đạo gặp khách. Chi phí này **phụ thuộc hành vi của khách** (Guerreiro et al.; Marcos et al., 2018).

Chi phí phục vụ nằm ở cả ba giai đoạn:

- **trước bán:** hiểu nhu cầu, thiết kế giải pháp, trình bày, theo đuổi đến khi ký;
- **trong bán:** yêu cầu riêng, điều kiện giao riêng;
- **sau bán:** hỗ trợ, điều chỉnh, giám sát.

**Sáu chi phí phục vụ ẩn của agency sự kiện** (không nằm trong báo giá):

1. giờ làm việc của đội KAM, số buổi họp;
2. sửa concept nhiều vòng;
3. phát sinh ngoài phạm vi không tính tiền (scope creep);
4. chi phí vốn do khách trả chậm, trong khi agency phải đặt cọc nhà cung cấp trước;
5. đấu thầu lại mỗi năm (đề xuất, pitch);
6. nhân sự cấp cao phải có mặt.

*Ví dụ (giả định):* khách trả sau 90 ngày trên doanh thu 3.500 triệu, chi phí vốn của agency 12%/năm → 3.500 × 12% × 90/365 ≈ 104 triệu mỗi năm, gần một phần ba lợi nhuận gộp của khách đó.

## 4. Ma trận biên lợi nhuận gộp × cost-to-serve

Biến thể của môn học từ Shapiro et al. (1987): trục ngang là cost-to-serve, trục dọc là biên lợi nhuận gộp.

| | Cost-to-serve thấp | Cost-to-serve cao |
|---|---|---|
| **Biên cao** | **Passive:** lợi nhất; giữ gìn, đầu tư quan hệ | **Carriage trade:** lãi nếu giá bù được chi phí; kiểm soát chi phí phục vụ |
| **Biên thấp** | **Bargain basement:** phục vụ chuẩn hóa, hiệu quả | **Aggressive:** nguy cơ lỗ; cùng khách giảm chi phí, điều chỉnh phạm vi, giá |

Cùng một mức lợi nhuận, hai khách hàng có thể đặt ra hai câu hỏi quản trị khác nhau. Khách khối lượng lớn, biên thấp, tốn công trước bán → tăng biên hay làm khâu trước bán hiệu quả hơn? Khách mua ít, biên cao, tốn công sau bán → bán thêm dịch vụ, làm hậu mãi hiệu quả hơn?

**Vùng công bằng.** Giáo trình đặt giá trung bình khách trả trên trục dọc, chi phí phục vụ trên trục ngang. Dải chéo ở giữa là **vùng công bằng**, nơi giá tương xứng với chi phí và cả hai bên cùng có lợi. Lệch xa đường chéo là dấu hiệu mất cân bằng quyền lực. Quan hệ key account dễ kéo dài hơn khi cả hai bên cùng được lợi một cách công bằng.

**Không bán lỗ, nhưng không ép khách.** KAM tốt tự nó giảm chi phí phục vụ, vì agency hiểu khách hơn. Nhiều chi phí giảm được khi **cùng khách** thay đổi cách làm:

- lịch duyệt rõ, giới hạn số vòng sửa;
- gộp sự kiện thành hợp đồng năm;
- thanh toán theo tiến độ;
- phạm vi viết rõ, phát sinh có quy trình.

**Minh bạch:** nói rõ phần nào trong giá, phần nào là phát sinh; giữ bí mật số liệu tài chính của khách. Không cắt chất lượng mà không báo, không đội giá phát sinh vì khách không biết giá.

## Thuật ngữ chính

| Thuật ngữ | Nghĩa |
|---|---|
| Customer lifetime value (CLV) | Giá trị vòng đời khách hàng |
| Retention rate | Tỷ lệ giữ chân |
| Discount rate | Tỷ lệ chiết khấu |
| Net contribution | Đóng góp ròng |
| Cost-to-serve | Chi phí phục vụ khách hàng |
| Gross margin | Biên lợi nhuận gộp |
| Scope creep | Phát sinh ngoài phạm vi |

## Lỗi thường gặp

- Xếp hạng khách theo doanh thu thay vì đóng góp ròng.
- Chỉ nhìn lợi nhuận năm nay, quên kế hoạch tương lai của khách.
- Thấy khách lỗ là tăng giá hoặc bỏ, không ngồi lại cùng khách.
- Không ghi giả định, không thử độ nhạy.

## Liên hệ với kế hoạch cuối kỳ (SMP)

CLV và vị trí trên ma trận biên lợi nhuận × cost-to-serve của khách hàng dự án cũ, **ghi rõ giả định**, thuộc **phần B (Value Opportunities)**. Đây cũng là nền cho câu hỏi về **logic tài chính** ở buổi bảo vệ (rubric tiêu chí 9 chấm cả độ nhạy giả định).

## Câu hỏi tự ôn

1. Vì sao CLV tính trên đóng góp ròng chứ không trên doanh thu?
2. Tính lại CLV 5 năm của An Phát khi tỷ lệ chiết khấu là 10% (giữ các số khác). CLV tăng hay giảm, vì sao?
3. Kể ba chi phí phục vụ ẩn của agency sự kiện, và một cách cùng khách hàng giảm mỗi chi phí.
4. Một khách hàng ở ô Aggressive. Đề xuất một hành động mà cả agency và khách đều thấy hợp lý.

## Tài liệu tham khảo

- Berger, P. D., & Nasr, N. I. (1998). Customer lifetime value: Marketing models and applications. *Journal of Interactive Marketing, 12*(1), 17–30.
- Guerreiro, R., Bio, S. R., & Merschmann, E. V. V. (n.d.). *Cost-to-serve measurement and customer profitability analysis: A case study at a food industry in Brazil* [Bài hội thảo]. Intercostos.
- Gupta, S., Hanssens, D., Hardie, B., Kahn, W., Kumar, V., Lin, N., Ravishanker, N., & Sriram, S. (2006). Modeling customer lifetime value. *Journal of Service Research, 9*(2), 139–155.
- Marcos, J., Davies, M., Guesalaga, R., & Holt, S. (2018). *Implementing key account management: Designing customer-centric processes for mutual growth*. Kogan Page.
- McDonald, M. (n.d.). *How to create financially quantified value propositions in six (actionable!) steps*. Strategic Account Management Association.
- Shapiro, B. P., Rangan, V. K., Moriarty, R. T., & Ross, E. B. (1987). Manage customers for profits (not just sales). *Harvard Business Review, 65*(5), 101–108.
