# James 的个人主页

一个放项目和近况的静态个人主页，目标地址是 <https://JamesRaoXiaoJian.github.io>。

## 本地查看

直接打开 `index.html` 就能查看。推荐启动本地服务：

```bash
cd /root/RXJ/JamesRaoXiaoJian.github.io
python3 -m http.server 4173 --bind 127.0.0.1
```

在浏览器打开 <http://localhost:4173>。从远程机器查看时，用编辑器转发 4173 端口。

## 放到 GitHub Pages

1. 在 `JamesRaoXiaoJian` 账号下创建公开仓库 `JamesRaoXiaoJian.github.io`。
2. 将这个目录中的文件推送到仓库的 `main` 分支。
3. 打开仓库的 **Settings → Pages**，Source 选 **Deploy from a branch**，分支选 **main**，目录选 **/ (root)**，保存。
4. 等待 Pages 部署完成，再打开 <https://JamesRaoXiaoJian.github.io>。

这是纯 HTML、CSS 和 JavaScript 网站，不需要 npm、构建过程或后端。`.nojekyll` 让 Pages 直接提供静态文件。

[GitHub Pages 官方快速开始](https://docs.github.com/en/pages/quickstart)

## 修改内容

- 中文介绍、项目及链接：`index.html`。
- 英文对应文案：`script.js` 中的 `en` 对象。
- 配色、排版和手机布局：`styles.css`。
- 图片：`assets/`。来源和生成提示词记录在 `assets/SOURCES.md`。
- GitHub Profile README 的简化草稿：`profile/README.md` 和 `profile/README_EN.md`。它们用于账号同名仓库，和这个网站仓库分开。

页面默认中文，支持中英切换并记住选择。`?lang=en` 可以直接打开英文页面。项目画廊支持键盘方向键切换，图片可以放大，按 Escape 关闭。

项目描述来自现有公开 README。LEAP-DexRetarget 保留了 Phase 0 的进度表述，没有将后续计划写成已经完成的成果。
