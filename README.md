# 王子成 · 个人学术主页与简历

[在线主页](https://wzgig.github.io/Resume/) · [下载 PDF](resume_v2/wang-zicheng-academic-resume.pdf) · [查看 LaTeX 源码](resume_v2/wang-zicheng-academic-resume.tex)

这是王子成的个人学术主页与简历仓库。主页围绕高比例新能源电力系统和 AI+电力系统，介绍研究兴趣、精选论文、研究项目与个人经历，提供完整中英文切换和中文 PDF 简历下载。

> [!NOTE]
> 公开仓库仅保留简历展示与构建所需文件。成绩单、证明材料、营业执照等本地材料已通过 `.gitignore` 排除。

## 主页设计与使用

- 深蓝、暖白与铜色的学术编辑风格；以研究叙事和精选成果组织内容。
- 顶部 `EN / 中文` 切换整页语言，包括图注、辅助标签与网页标题。优先级为 URL 的 `?lang=en` / `?lang=zh`、上次选择、浏览器语言；本地存储不可用时仍可切换。
- 研究主题标签支持点击、左右方向键、Home / End；Tab 进入当前面板。手机端提供折叠菜单，Esc 可关闭并返回菜单按钮。
- 尊重系统“减少动态效果”设置；无第三方字体、追踪脚本或运行依赖。禁用 JavaScript 时仍能阅读完整英文正文和全部研究主题。
- 首页插图为原创概念示意，不代表实验数据。论文标题保留原文，PDF 下载明确标为中文版。
- 参考 [PENSA 主页](https://pensa.engineering.jhu.edu/) 的学术内容组织方式，使用独立设计、个人资料与原创图形。

## 项目内容

- `resume_v2/wang-zicheng-academic-resume.tex`：简历 LaTeX 源文件
- `resume_v2/wang-zicheng-academic-resume.pdf`：编译后的 PDF 简历
- `resume_v2/wang-zicheng-academic-resume.md`：Markdown 版本简历内容
- [`wang-zicheng-bilingual-self-introduction.md`](wang-zicheng-bilingual-self-introduction.md)：研究生与学术面试英文自我介绍（中英文对照）
- [`王子成-论文专利及学科竞赛填报汇总.docx`](王子成-论文专利及学科竞赛填报汇总.docx)：论文、专利及学科竞赛系统填报汇总（含无表格复制版）
- `docs/index.html`：GitHub Pages 首页
- `docs/styles.css`：视觉样式、响应式布局与减少动态效果适配
- `docs/script.js`：语言切换、可访问标签页与手机导航
- `docs/portrait.webp`：压缩后的网页照片
- `docs/favicon.svg`：个人站点图标
- `docs/wang-zicheng-academic-resume.pdf`：Pages 使用的 PDF 文件
- `docs/photo.jpg`：高清照片及网页分享预览图

## 维护与本地预览

在 `docs/index.html` 中成对维护 `data-en` 和 `data-zh` 文案，元素内默认文本同步为英文。辅助标签使用 `data-aria-en/zh`，图片说明使用 `data-alt-en/zh`。网页标题和描述在 `docs/script.js` 的 `metadata` 中维护。新增成果应先核实日期、作者身份和授权状态。

从仓库根目录在 PowerShell 运行：

```powershell
python -m http.server 8765 --bind 127.0.0.1 --directory docs
```

在浏览器打开 `http://127.0.0.1:8765/?lang=zh` 或 `?lang=en`。确认两种语言、研究标签、手机菜单和 PDF 下载均正常。停止预览服务时在终端按 Ctrl+C。

换照片时同步更新两份 LaTeX 简历目录的 `photo.jpg`，重新编译 PDF，再将综合简历 PDF 复制到 `docs/wang-zicheng-academic-resume.pdf`。网站图片使用相同照片的压缩版本，保留自然比例。

## 本地构建

需要本机安装 TeX Live 或其他支持 XeLaTeX 的发行版。

```powershell
cd resume_v2
xelatex -interaction=nonstopmode -halt-on-error wang-zicheng-academic-resume.tex
```

构建完成后，PDF 会输出到 `resume_v2/wang-zicheng-academic-resume.pdf`。

## 发布

仓库使用 GitHub Pages 的 `main` 分支 `/docs` 目录发布。推送到 GitHub 后，Pages 页面会展示最新 PDF，并提供下载入口。
