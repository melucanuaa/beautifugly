# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

Beautifugly 是一个个人网站，用于分享技术博文、AI 生成作品和有趣项目。使用 Astro 6 + Tailwind CSS 4 构建，部署在 Cloudflare Pages。

## 常用命令

```bash
# 开发
pnpm dev          # 启动开发服务器 (localhost:4321)

# 构建与预览
pnpm build        # 构建生产版本到 ./dist/
pnpm preview      # 预览构建结果

# 其他
pnpm astro        # 运行 Astro CLI 命令
```

## 技术栈

- **框架**: Astro 6 (静态站点生成)
- **样式**: Tailwind CSS 4 (使用 `@theme` 定义设计变量)
- **语言**: TypeScript (严格模式)
- **包管理**: pnpm
- **部署**: Cloudflare Pages (自动从 GitHub 拉取构建)

## 项目结构

```
src/
├── components/     # 可复用组件 (.astro)
├── content/        # 内容集合 (Markdown)
│   ├── blog/       # 技术博文
│   ├── works/      # AI 作品展示
│   └── projects/   # 项目展示
├── layouts/        # 布局组件
├── pages/          # 路由页面
│   └── api/        # API 端点
└── styles/         # 全局样式
```

## 内容管理

使用 Astro Content Collections 管理内容，定义在 `src/content.config.ts`。

### 内容类型与 Frontmatter

**博客文章** (`src/content/blog/`):
```yaml
---
title: "文章标题"
date: 2026-05-07
tags: ["标签1", "标签2"]
description: "文章简介"  # 可选
image: "/images/xxx.jpg"  # 可选
draft: false  # 可选，默认 false
---
```

**作品** (`src/content/works/`):
```yaml
---
title: "作品标题"
date: 2026-05-07
description: "作品描述"  # 可选
image: "/images/works/xxx.jpg"  # 必填
tags: ["标签"]
draft: false
---
```

**项目** (`src/content/projects/`):
```yaml
---
title: "项目名称"
description: "项目简介"  # 必填
date: 2026-05-07
image: "/images/xxx.jpg"  # 可选
link: "https://项目链接"  # 可选
github: "https://github.com/..."  # 可选
tags: ["标签"]
draft: false
---
```

## 设计系统

### 字体
- **像素字体**: `'Press Start 2P'` - 用于标题和装饰元素
- **正文字体**: `'Inter'` - 用于正文内容

### 颜色变量 (CSS 自定义属性)
- `--color-bg`: 背景色 (浅色: #FAF8F5, 深色: #1A1A2E)
- `--color-bg-card`: 卡片背景
- `--color-text`: 主文本色
- `--color-text-light`: 次要文本色
- `--color-accent`: 主强调色 (#7EC8C8 蓝绿)
- `--color-accent-purple`: 次强调色 (#B8A9E8 淡紫)
- `--color-accent-pink`: 粉色 (#F2B5D4)
- `--color-border`: 边框色

### 像素风组件类
- `.pixel-border` / `.pixel-border-sm`: 像素风格边框 + 阴影
- `.pixel-btn`: 带 hover 动画的像素按钮
- `.card`: 圆角卡片，hover 时上浮 + 阴影

## 关键组件

- `Layout.astro`: 全局布局，包含 Nav、Footer、Analytics、BackToTop、SEO
- `Nav.astro`: 响应式导航栏，支持搜索 (Ctrl+K)、移动端菜单、主题切换
- `SEO.astro`: SEO 元标签、Open Graph、结构化数据
- `ThemeToggle.astro`: 暗色/亮色模式切换
- `Newsletter.astro`: 邮件订阅组件
- `TOC.astro`: 文章目录
- `ReadingTime.astro`: 阅读时间估算

## API 端点

- `GET /api/search.json`: 返回所有内容的搜索数据 (标题、描述、URL、标签)
- `GET /rss.xml`: RSS 订阅源

## 注意事项

- 内容文件中的 `draft: true` 会在构建时被过滤掉
- 图片放在 `public/` 目录下，引用时使用绝对路径 (如 `/images/xxx.jpg`)
- 搜索功能是客户端实现，数据从 `/api/search.json` 获取
- 评论系统使用 Giscus，配置在 `src/pages/blog/[...slug].astro`
