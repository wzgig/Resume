# 王子成学术简历

[在线预览](https://wzgig.github.io/Resume/) · [下载 PDF](resume_v2/wang-zicheng-academic-resume.pdf) · [查看 LaTeX 源码](resume_v2/wang-zicheng-academic-resume.tex)

这是王子成的学术简历仓库，包含一份面向科研、竞赛与项目经历展示的中文 LaTeX 简历，以及可用于 GitHub Pages 发布的静态预览页面。

> [!NOTE]
> 公开仓库仅保留简历展示与构建所需文件。成绩单、证明材料、营业执照等本地材料已通过 `.gitignore` 排除。

## 项目内容

- `resume_v2/wang-zicheng-academic-resume.tex`：简历 LaTeX 源文件
- `resume_v2/wang-zicheng-academic-resume.pdf`：编译后的 PDF 简历
- `resume_v2/wang-zicheng-academic-resume.md`：Markdown 版本简历内容
- `docs/index.html`：GitHub Pages 首页
- `docs/wang-zicheng-academic-resume.pdf`：Pages 使用的 PDF 文件

## 本地构建

需要本机安装 TeX Live 或其他支持 XeLaTeX 的发行版。

```powershell
cd resume_v2
xelatex -interaction=nonstopmode -halt-on-error wang-zicheng-academic-resume.tex
```

构建完成后，PDF 会输出到 `resume_v2/wang-zicheng-academic-resume.pdf`。

## 发布

仓库使用 GitHub Pages 的 `main` 分支 `/docs` 目录发布。推送到 GitHub 后，Pages 页面会展示最新 PDF，并提供下载入口。
