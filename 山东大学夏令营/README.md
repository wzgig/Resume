# 山东大学夏令营申请材料

本目录用于集中存放山东大学夏令营申请相关材料。

## 文件说明

- `wang-zicheng-sdu-summer-camp-resume.tex`：山东大学夏令营定制版 LaTeX 简历，已加入“个人陈述”章节。
- `wang-zicheng-sdu-summer-camp-resume.pdf`：由上述 LaTeX 文件编译生成的 PDF 简历。
- `wang-zicheng-sdu-summer-camp-resume.md`：定制版简历 Markdown 内容稿，便于复制与二次修改。
- `个人陈述-山东大学夏令营.md`：单独润色后的个人陈述，可用于系统填报或申请表粘贴。
- `夏令营系统填报材料-优化版.md`：根据仓库根目录 `夏令营系统填报材料.md` 优化后的系统填报文本，包含个人陈述、科研成果和备注信息。
- `photo.jpg`：简历编译使用的个人照片。

## 本地编译

```powershell
cd 山东大学夏令营
xelatex -interaction=nonstopmode -halt-on-error wang-zicheng-sdu-summer-camp-resume.tex
```
