# Dựng bộ học liệu EVM1110E từ nguồn trong repo.
# Cách chạy: OUT_DIR=/duong/dan/ra NODE_PATH_DOCX=/duong/dan/node_modules CHROME=/duong/dan/chrome-headless-shell python3 build_hoc_lieu.py
# Cần: node + gói "docx" (npm install docx), Chromium headless, pdfinfo (poppler-utils).
import re, os, shutil, subprocess, glob
C=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+'/'
WORK=os.environ.get('OUT_DIR','/tmp/evm1110e_hoc_lieu').rstrip('/')+'/'
OUT=WORK+'EVM1110E_Hoc_lieu_tong_hop/'; MD=WORK+'md/'
L=C+'lms/'; NP=os.environ.get('NODE_PATH_DOCX','node_modules'); HS=os.environ.get('CHROME','chrome-headless-shell')
shutil.rmtree(OUT,ignore_errors=True); os.makedirs(MD,exist_ok=True)
def norm(t,shift=0):
    o=[]; incode=False
    for ln in t.split('\n'):
        if ln.startswith('```'): incode=not incode; o.append(ln); continue
        if incode: o.append(ln); continue
        m=re.match(r'^(#{1,6}) (.*)',ln)
        if m: lv=min(3,len(m.group(1))+shift); o.append('#'*lv+' '+m.group(2)); continue
        if re.match(r'^\s*-{3,}\s*$',ln) or re.match(r'^\s*\*{3,}\s*$',ln): o.append(''); continue
        ln=re.sub(r'!\[([^\]]*)\]\([^)]*\)',r'[Hình: \1]',ln)
        ln=re.sub(r'\[([^\]]+)\]\((https?://[^)]+)\)',r'\1 (\2)',ln)
        ln=re.sub(r'\[([^\]]+)\]\(([^)]+)\)',r'\1',ln)
        ln=re.sub(r'^\s+[-*+] ','- ',ln); ln=re.sub(r'^[*+] ','- ',ln)
        ln=re.sub(r'^\s+(\d+)\. ',r'\1. ',ln)
        o.append(ln)
    return '\n'.join(o)
def build(md_text,name,dest,footer):
    p=MD+name+'.md'; open(p,'w').write(md_text)
    os.makedirs(dest,exist_ok=True)
    subprocess.run(['node',L+'build_html.js',p,MD+name+'.html'],check=True,capture_output=True)
    subprocess.run([HS,'--no-sandbox','--no-pdf-header-footer','--print-to-pdf='+dest+name+'.pdf',MD+name+'.html'],check=True,capture_output=True)
    subprocess.run(['node',L+'build_docx.js',p,dest+name+'.docx',footer],check=True,capture_output=True,env=dict(os.environ,NODE_PATH=NP))
def cp(src,dst): os.makedirs(os.path.dirname(dst),exist_ok=True); shutil.copy2(src,dst)
TT={}
for i in range(1,14):
    w=f'W{i:02d}'; t=open(C+f'lessons/{w}_lesson_plan.md').readline().strip('# \n').replace('Giáo án — ','')
    TT[i]=open(L+f'tom-tat-buoi/Buoi{i:02d}_tom_tat.md').readline().strip('# \n')
SV=OUT+'A_DANH_CHO_SINH_VIEN/'; GV=OUT+'B_DANH_CHO_GIANG_VIEN/'
# ---- A. Sinh viên
cp(C+'syllabus/EVM1110E_De_cuong_hieu_chinh.docx',SV+'01_De_cuong/EVM1110E_De_cuong.docx')
for f in sorted(glob.glob(L+'pdf/*.pdf'))+sorted(glob.glob(L+'docx/*.docx')): cp(f,SV+'02_Tom_tat_bai_hoc_13_buoi/'+os.path.basename(f))
cp(C+'assessments/EVM1110E_De_thi_cuoi_ky_SMP.docx',SV+'03_De_thi_va_huong_dan/EVM1110E_De_thi_cuoi_ky_SMP.docx')
build(norm(open(C+'lessons/W13_checklist_tu_ra_soat_SMP.md').read()),'EVM1110E_Checklist_tu_ra_soat_SMP',SV+'03_De_thi_va_huong_dan/','EVM1110E · Checklist tự rà soát SMP')
# ---- B. Giảng viên
for f in ['syllabus/EVM1110E_De_cuong_hieu_chinh.docx','syllabus/EVM1110E_De_cuong_hieu_chinh_track_changes.docx','course_passport.yaml','source_map.md','notebooklm_prompts.md']:
    cp(C+f,GV+'01_De_cuong_va_ho_so_mon_hoc/'+os.path.basename(f))
for i in range(1,14):
    w=f'W{i:02d}'; d=GV+f'02_Bai_giang_theo_buoi/Buoi_{i:02d}/'
    for s in [f'{w}_slides.pptx',f'{w}_slides_Roboto.pptx']: cp(C+'slides/'+s,d+s.replace('.pptx','')+'.pptx')
    parts=[('Giáo án (kế hoạch buổi học)',f'{w}_lesson_plan.md'),('Ghi chú bài giảng',f'{w}_lecture_notes.md'),('Dàn ý slide',f'{w}_slides_outline.md')]
    parts+=[('Phiếu hoạt động',os.path.basename(x)) for x in sorted(glob.glob(C+f'lessons/{w}_activity_*.md'))]
    if i==7: parts.append(('Khung góc nhìn (đã duyệt)','W07_khung_goc_nhin.md'))
    if i==13: parts.append(('Checklist tự rà soát SMP','W13_checklist_tu_ra_soat_SMP.md'))
    body=[f'# Hồ sơ bài giảng – Buổi {i}: {TT[i].split(": ",1)[-1]}',f'EVM1110E · Quản trị mối quan hệ trong tổ chức sự kiện · Tài liệu giảng viên']
    body.append('> Gồm: '+' · '.join(p[0] for p in parts)+f'. Slide: {w}_slides.pptx (bản chính) và {w}_slides_Roboto.pptx (bản font Roboto, dùng khi máy chiếu không có font Alexandria).')
    for title,fn in parts:
        body.append(f'# {title}'); body.append(norm(open(C+'lessons/'+fn).read(),shift=1))
        cp(C+'lessons/'+fn,d+'nguon_md/'+fn)
    build('\n\n'.join(body),f'EVM1110E_Buoi{i:02d}_Ho_so_bai_giang',d,f'EVM1110E · Buổi {i} · Tài liệu giảng viên')
for i in range(1,14):
    f=C+f'lessons/buoi-{i:02d}_tu-lieu-tong-hop.md'
    build(norm(open(f).read()),f'EVM1110E_Buoi{i:02d}_Tu_lieu_tong_hop',GV+'03_Tu_lieu_tong_hop_theo_buoi/',f'EVM1110E · Buổi {i} · Tư liệu tổng hợp')
for f in ['EVM1110E_De_thi_cuoi_ky_SMP.docx','EVM1110E_kiem_tra_trac_nghiem_B1-B8.md','EVM1110E_kiem_tra_trac_nghiem_B1-B8.pptx']: cp(C+'assessments/'+f,GV+'04_Kiem_tra_danh_gia/'+f)
build(norm(open(C+'assessments/EVM1110E_kiem_tra_trac_nghiem_B1-B8.md').read()),'EVM1110E_Kiem_tra_trac_nghiem_B1-B8_co_dap_an',GV+'04_Kiem_tra_danh_gia/','EVM1110E · Kiểm tra B1–B8 · CÓ ĐÁP ÁN – GV')
for f in sorted(glob.glob(C+'assessments/notebooklm_cham_SMP/*')): cp(f,GV+'04_Kiem_tra_danh_gia/Huong_dan_cham_SMP_NotebookLM/'+os.path.basename(f))
print('ok')
# ---- Mục lục
def sz(p): 
    n=sum(os.path.getsize(os.path.join(a,f)) for a,_,fs in os.walk(p) for f in fs); return f'{n/1e6:.1f} MB'.replace('.',',')
def pages(f):
    r=subprocess.run(['pdfinfo',f],capture_output=True,text=True).stdout; m=re.search(r'Pages:\s+(\d+)',r); return m.group(1) if m else '?'
o=['# EVM1110E – Bộ học liệu tổng hợp','Quản trị mối quan hệ trong tổ chức sự kiện (Stakeholders Management for Events) · UEF, Khoa Marketing · HK1A 2026–2027']
o.append('> Bộ học liệu gom toàn bộ tài liệu môn học đã soạn: đề cương, 13 buổi bài giảng (slide, giáo án, ghi chú bài giảng, phiếu hoạt động), tóm tắt kiến thức cho sinh viên, tư liệu tổng hợp, đề thi, kiểm tra và hướng dẫn chấm. **Không chứa dữ liệu sinh viên** (bài nộp, bảng điểm, phiếu chấm được giữ riêng).')
o.append('## 1. Cấu trúc thư mục')
o.append('| Thư mục | Nội dung | Đối tượng |'); o.append('|---|---|---|')
rows=[('A_DANH_CHO_SINH_VIEN/01_De_cuong','Đề cương học phần (bản hiệu chỉnh)','Sinh viên'),
('A_DANH_CHO_SINH_VIEN/02_Tom_tat_bai_hoc_13_buoi','13 tài liệu tóm tắt kiến thức trọng tâm (PDF + DOCX) để đưa lên LMS','Sinh viên'),
('A_DANH_CHO_SINH_VIEN/03_De_thi_va_huong_dan','Đề thi cuối kỳ (SMP) và checklist tự rà soát SMP','Sinh viên'),
('B_DANH_CHO_GIANG_VIEN/01_De_cuong_va_ho_so_mon_hoc','Đề cương (bản sạch và bản track changes), course passport, bản đồ nguồn, prompt NotebookLM','Giảng viên'),
('B_DANH_CHO_GIANG_VIEN/02_Bai_giang_theo_buoi/Buoi_01…13','Mỗi buổi: slide (bản chính + bản font Roboto), Hồ sơ bài giảng (PDF + DOCX gộp giáo án, ghi chú bài giảng, dàn ý slide, phiếu hoạt động), thư mục nguon_md','Giảng viên'),
('B_DANH_CHO_GIANG_VIEN/03_Tu_lieu_tong_hop_theo_buoi','13 bộ tư liệu tổng hợp (nguồn học thuật, trích dẫn, ghi chú [VERIFY]) dùng khi soạn bài','Giảng viên'),
('B_DANH_CHO_GIANG_VIEN/04_Kiem_tra_danh_gia','Đề thi cuối kỳ; kiểm tra trắc nghiệm Buổi 1–8 (CÓ ĐÁP ÁN); hướng dẫn chấm SMP bằng NotebookLM và bảng mô tả mức điểm 44 mục','Giảng viên – không phát cho SV')]
for a,b,c in rows: o.append(f'| {a} | {b} | {c} |')
o.append('## 2. Kế hoạch 13 buổi học và học liệu tương ứng')
o.append('| Buổi | Chủ đề | Hồ sơ bài giảng (GV) | Tư liệu tổng hợp | Tóm tắt cho SV |'); o.append('|---|---|---|---|---|')
for i in range(1,14):
    hp=GV+f'02_Bai_giang_theo_buoi/Buoi_{i:02d}/EVM1110E_Buoi{i:02d}_Ho_so_bai_giang.pdf'; tp=GV+f'03_Tu_lieu_tong_hop_theo_buoi/EVM1110E_Buoi{i:02d}_Tu_lieu_tong_hop.pdf'; sp=SV+f'02_Tom_tat_bai_hoc_13_buoi/EVM1110E_Buoi{i:02d}_Tom_tat.pdf'
    o.append(f'| {i} | {TT[i].split(": ",1)[-1]} | {pages(hp)} trang · 2 tệp slide | {pages(tp)} trang | {pages(sp)} trang |')
o.append('Buổi 14–15: bảo vệ SMP trước "Customer Board" theo đề thi cuối kỳ.')
o.append('## 3. Đánh giá học phần')
o.append('- **Kiểm tra cá nhân Buổi 1–8:** 10 câu trắc nghiệm tình huống (Nova Events – Ngân hàng An Phát); bản PPTX để trình chiếu, bản MD/PDF có đáp án dành cho giảng viên.')
o.append('- **Thi cuối kỳ:** tiểu luận nhóm SMP (Value Planning Framework E – A – B – C – D) và bảo vệ trước Customer Board; rubric 11 tiêu chí (Phần I bài viết 60%, Phần II thuyết trình – bảo vệ 40%).')
o.append('- **Công cụ chấm:** hướng dẫn cấu hình NotebookLM (prompt P0–P9, H1–H4), bảng mô tả mức điểm 44 mục con có trần điểm, file kiến thức gộp Buổi 1–13.')
o.append('- **Quy định AI:** sinh viên được dùng AI nếu khai báo trong phụ lục và phải tự giải thích được mọi phần khi bảo vệ. Không dùng công cụ phát hiện AI.')
o.append('## 4. Lưu ý sử dụng')
o.append('- **Slide có lời giảng (speaker notes)** ở mọi trang nên xếp vào thư mục giảng viên; sinh viên dùng bản tóm tắt ở thư mục A.')
o.append('- **Bản slide Roboto** dùng khi máy chiếu hoặc máy tính phòng học không có font Alexandria.')
o.append('- Các dấu **[VERIFY]** trong tư liệu và ghi chú bài giảng là chỗ cần đối chiếu nguồn gốc trước khi dùng làm căn cứ; **[NEEDS PROFESSOR INPUT]** là thông tin giảng viên cần bổ sung (ví dụ lịch học cụ thể).')
o.append('- Tài liệu gốc dạng Markdown và mã nguồn slide nằm trong repo `teaching-skills/courses/EVM1110E/` (lessons/, slides/src/); có thể sửa và xuất lại.')
o.append(f'## 5. Thống kê')
o.append(f'- Tổng dung lượng: {sz(OUT)} · Thư mục sinh viên: {sz(SV)} · Thư mục giảng viên: {sz(GV)}.')
o.append(f'- Số tệp: {sum(len(fs) for _,_,fs in os.walk(OUT))+3} (gồm mục lục).')
build(re.sub(r'(\|[^\n]*)\n\n(?=\|)',r'\1\n',re.sub(r'(\|[^\n]*)\n\n(?=\|)',r'\1\n','\n\n'.join(o))),'00_MUC_LUC_HOC_LIEU',OUT,'EVM1110E · Mục lục bộ học liệu')
shutil.copy(MD+'00_MUC_LUC_HOC_LIEU.md',OUT+'00_MUC_LUC_HOC_LIEU.md')
print('index ok')
