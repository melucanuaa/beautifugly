---
title: "像素图生成器"
description: "一个简单的在线工具，可以把普通图片转换成像素风格"
date: 2026-05-04
tags: ["工具", "像素风", "Canvas"]
link: "#"
github: "https://github.com"
---

## 项目简介

这是一个基于 Canvas 的像素图生成器，可以将任意图片转换成像素风格。

## 功能特点

- 支持调整像素大小（8x8 到 64x64）
- 可选择调色板（复古、现代、单色）
- 支持导出 PNG 和 SVG 格式
- 纯前端实现，无需后端

## 技术实现

使用 HTML5 Canvas API 进行图片处理，主要步骤：

1. 加载原始图片到 Canvas
2. 按照指定的像素大小采样
3. 将每个采样区域替换为平均色
4. 输出像素化后的图片

```javascript
function pixelate(canvas, pixelSize) {
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < canvas.height; y += pixelSize) {
    for (let x = 0; x < canvas.width; x += pixelSize) {
      const color = getAverageColor(imageData, x, y, pixelSize);
      ctx.fillStyle = color;
      ctx.fillRect(x, y, pixelSize, pixelSize);
    }
  }
}
```
