# Beautifugly 个人网站设计文档

## 概述

Beautifugly 是一个个人网站，用于分享技术博文、AI 生成作品和有趣项目。

- **域名**: www.beautifugly.com
- **托管**: Cloudflare Pages
- **技术栈**: Astro 6 + Tailwind CSS 4

## 设计风格

- 色彩简约：浅色底（米白）+ 柔和点缀色（蓝绿、淡紫、粉色）
- 像素风：标题使用 Press Start 2P 像素字体，装饰元素使用像素风格
- 干净：大量留白，内容区域窄而集中
- 可爱不俗套：圆角卡片、轻阴影、hover 微动画

## 网站结构

```
首页 (/)
├── 博客 (/blog)
│   └── 文章详情 (/blog/[slug])
├── 作品集 (/works)
│   └── 作品详情 (/works/[slug])
├── 项目 (/projects)
│   └── 项目详情 (/projects/[slug])
└── 关于 (/about)
```

## 技术架构

### 内容管理

使用 Astro Content Collections 管理内容：

- `blog` — 技术博文（Markdown）
- `works` — AI 作品展示（Markdown + 图片）
- `projects` — 项目展示（Markdown）

内容文件位于 `src/content/` 目录下，用户只需创建 `.md` 文件即可发布内容。

### 组件结构

- `Layout.astro` — 全局布局，包含导航和页脚
- `Nav.astro` — 响应式导航栏，支持移动端菜单
- `Footer.astro` — 页脚，包含版权信息和社交链接

### 样式系统

- 使用 Tailwind CSS 4 的 `@theme` 定义设计变量
- 自定义像素风组件：`.pixel-border`、`.pixel-btn`
- 卡片组件：`.card`，带 hover 动画

### 部署流程

1. `git push` 到 GitHub 仓库
2. Cloudflare Pages 自动拉取并构建
3. 构建命令：`pnpm build`
4. 输出目录：`dist/`

## 日常使用

### 发布博客文章

在 `src/content/blog/` 下创建 `.md` 文件：

```markdown
---
title: "文章标题"
date: 2026-05-07
tags: ["标签1", "标签2"]
description: "文章简介"
---

正文内容...
```

### 添加作品

1. 将图片放入 `public/images/works/`
2. 在 `src/content/works/` 下创建 `.md` 文件

### 添加项目

在 `src/content/projects/` 下创建 `.md` 文件：

```markdown
---
title: "项目名称"
description: "项目简介"
date: 2026-05-07
link: "https://项目链接"
github: "https://github.com/仓库链接"
tags: ["标签"]
---
```

## 后续扩展

- AI 工具页面（嵌入交互式 AI 功能）
- 暗色模式支持
- 评论系统
- RSS 订阅
