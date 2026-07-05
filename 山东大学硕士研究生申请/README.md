# 山东大学硕士研究生申请材料

本目录用于集中存放山东大学硕士研究生申请相关材料。

## 文件说明

- `wang-zicheng-sdu-master-application-resume.tex`：山东大学硕士研究生申请定制版 LaTeX 简历，已加入“个人陈述”章节。
- `wang-zicheng-sdu-master-application-resume.pdf`：由上述 LaTeX 文件编译生成的 PDF 简历。
- `wang-zicheng-sdu-master-application-resume.md`：定制版简历 Markdown 内容稿，便于复制与二次修改。
- `个人陈述-攻读山东大学硕士研究生.md`：单独重写后的个人陈述，可用于系统填报、申请表粘贴或继续扩展。
- `wang-zicheng-sdu-master-personal-statement.tex`：攻读山东大学硕士研究生个人陈述 LaTeX 源文件。
- `wang-zicheng-sdu-master-personal-statement.pdf`：由上述 LaTeX 文件编译生成的个人陈述 PDF。
- `硕士研究生申请系统填报材料-优化版.md`：根据仓库根目录原始系统填报材料优化后的文本，已将个人陈述改为攻读山东大学硕士研究生语境。
- `photo.jpg`：简历编译使用的个人照片。

## 本地编译

```powershell
cd 山东大学硕士研究生申请
xelatex -interaction=nonstopmode -halt-on-error wang-zicheng-sdu-master-application-resume.tex
xelatex -interaction=nonstopmode -halt-on-error wang-zicheng-sdu-master-personal-statement.tex
```
