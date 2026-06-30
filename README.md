# 王子成保研申请学术简历

[在线主页](https://wzgig.github.io/Resume/) · [下载 PDF](resume_v2/wang-zicheng-academic-resume.pdf) · [查看 LaTeX 源码](resume_v2/wang-zicheng-academic-resume.tex)

这是王子成的保研申请学术简历仓库，包含中文 LaTeX 简历、Markdown 内容稿、可下载 PDF，以及一个发布在 GitHub Pages 上的轻量学术主页。

> [!NOTE]
> 公开仓库仅保留简历展示与构建所需文件。成绩单、证明材料、营业执照等本地材料已通过 `.gitignore` 排除。

## 主页内容

- 研究方向：新能源设备频域建模、阻抗/导纳预测与并网稳定性分析
- 学术产出：第一作者 SCI 三区期刊论文 1 篇、IEEE 会议论文 1 篇
- 荣誉奖项：中国电机工程学会杯全国大学生电工数学建模竞赛国家一等奖；全国大学生统计建模大赛 2026 年湖南省二等奖（队长）、2025 年湖南省三等奖（队员）；阅读推广活动优秀读书报告二等奖（个人）
- PDF 预览：GitHub Pages 首页内嵌最新版简历 PDF

## 项目内容

- `resume_v2/wang-zicheng-academic-resume.tex`：简历 LaTeX 源文件
- `resume_v2/wang-zicheng-academic-resume.pdf`：编译后的 PDF 简历
- `resume_v2/wang-zicheng-academic-resume.md`：Markdown 版本简历内容
- `docs/index.html`：GitHub Pages 首页
- `docs/wang-zicheng-academic-resume.pdf`：Pages 使用的 PDF 文件
- `docs/photo.jpg`：Pages 首页使用的头像

## 本地构建

需要本机安装 TeX Live 或其他支持 XeLaTeX 的发行版。

```powershell
cd resume_v2
xelatex -interaction=nonstopmode -halt-on-error wang-zicheng-academic-resume.tex
```

构建完成后，PDF 会输出到 `resume_v2/wang-zicheng-academic-resume.pdf`。

## 发布

仓库使用 GitHub Pages 的 `main` 分支 `/docs` 目录发布。推送到 GitHub 后，Pages 页面会展示最新 PDF，并提供下载入口。
