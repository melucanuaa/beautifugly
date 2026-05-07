---
title: "Astro 入门：从零搭建一个博客"
date: 2026-05-06
tags: ["Astro", "教程", "前端"]
description: "Astro 是一个现代化的静态站点生成器，特别适合内容驱动的网站"
---

## Astro 是什么

Astro 是一个专为内容网站设计的静态站点生成器。它的核心理念是：**默认零 JavaScript**。

这意味着你的网站在浏览器端几乎不加载任何 JS，除非你主动需要交互功能。

## 为什么选择 Astro

对比其他方案：

| 特性 | Astro | Next.js | Hugo |
|------|-------|---------|------|
| 学习曲线 | 低 | 中 | 中 |
| 构建速度 | 快 | 中 | 极快 |
| 交互组件 | 支持 | 原生 | 不支持 |
| Markdown | 原生 | 需配置 | 原生 |

对于个人博客和内容站来说，Astro 是一个非常平衡的选择。

## 核心概念

### Content Collections

Astro 的内容集合让你可以用 Markdown 管理博客文章：

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});
```

### Islands Architecture

Astro 的岛屿架构允许你在静态页面中嵌入交互式组件：

```astro
---
import Counter from '../components/Counter.jsx';
---

<Counter client:visible />
```

只有当组件滚动到可见区域时，JS 才会加载。

## 总结

Astro 让建站变得简单。写 Markdown，推送到 Git，自动部署。就这么简单。
