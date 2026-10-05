# Tài liệu tóm tắt cho sinh viên (đăng LMS)

13 tài liệu tóm tắt kiến thức trọng tâm, mỗi buổi một file (Buổi 1–13). Viết cho sinh viên đọc độc lập. Tài liệu không chứa slide, ghi chú giảng viên (speaker notes), phần giải lao hay hướng dẫn tổ chức hoạt động trên lớp.

| Thư mục | Nội dung |
|---|---|
| `tom-tat-buoi/` | Bản nguồn Markdown. Sửa nội dung ở đây. |
| `docx/` | Bản Word (`EVM1110E_BuoiNN_Tom_tat.docx`) để giảng viên chỉnh sửa |
| `pdf/` | Bản PDF (`EVM1110E_BuoiNN_Tom_tat.pdf`) để đăng LMS |

Khung mỗi tài liệu:
- mục tiêu buổi học;
- kiến thức trọng tâm, có ví dụ giả định Nova – An Phát;
- thuật ngữ;
- lỗi thường gặp;
- liên hệ với SMP cuối kỳ;
- câu hỏi tự ôn;
- tài liệu tham khảo APA 7.

Nguồn nội dung:
- `lessons/W*_lecture_notes.md`;
- phần lời giảng đã kiểm chứng trong `slides/src/w*.js`;
- tư liệu tổng hợp từng buổi.

Không đưa vào tài liệu sinh viên:
- số liệu chưa kiểm chứng chéo;
- các mục `[VERIFY]` và `[NEEDS PROFESSOR INPUT]`.

## Dựng lại sau khi sửa

```bash
NM=<thư mục node_modules có gói docx>
NODE_PATH=$NM node build_docx.js tom-tat-buoi/Buoi01_tom_tat.md docx/EVM1110E_Buoi01_Tom_tat.docx
node build_html.js tom-tat-buoi/Buoi01_tom_tat.md /tmp/b01.html
chromium --headless --no-pdf-header-footer --print-to-pdf=pdf/EVM1110E_Buoi01_Tom_tat.pdf /tmp/b01.html
```

Công cụ chuyển đổi hỗ trợ: tiêu đề `#`/`##`/`###`, đoạn văn, danh sách `-` và `1.`, khung ghi chú `>`, bảng, **đậm**, *nghiêng*.

Đây là bản nháp. Giảng viên đọc lại trước khi đăng.
