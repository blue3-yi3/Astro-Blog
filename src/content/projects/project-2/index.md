---
title: "Astro Nano"
description: "使用 Astro 构建的极简作品集与博客，无需任何前端框架。"
date: "2024-03-26"
demoURL: "https://astro-nano-demo.vercel.app"
repoURL: "https://github.com/markhorn-dev/astro-nano"
---

![Astro Nano](/astro-nano.png)

Astro Nano 是一个静态、极简、轻量、极速的作品集与博客主题。

它使用 Astro、Tailwind 和 TypeScript 构建，不依赖任何前端框架。

它被设计成比 Mark Horn 的热门主题 [Astro Sphere](https://github.com/markhorn-dev/astro-sphere) 更加极简的主题。

## 🚀 部署你自己的版本

<div class="flex gap-2">
  <a target="_blank" aria-label="部署到 Vercel" href="https://vercel.com/new/clone?repository-url=https://github.com/markhorn-dev/astro-nano">
    <img src="/deploy_vercel.svg" />
  </a>
  <a target="_blank" aria-label="部署到 Netlify" href="https://app.netlify.com/start/deploy?repository=https://github.com/markhorn-dev/astro-nano">
    <img src="/deploy_netlify.svg" />
  </a>
</div>

## 📋 功能

- ✅ Lighthouse 性能评分 100/100
- ✅ 响应式设计
- ✅ 无障碍支持
- ✅ SEO 友好
- ✅ 类型安全
- ✅ 极简风格
- ✅ 浅色/深色主题
- ✅ 动效界面
- ✅ Tailwind 样式
- ✅ 自动生成站点地图
- ✅ 自动生成 RSS 订阅
- ✅ Markdown 支持
- ✅ MDX 支持（可在 Markdown 中使用组件）

## 💯 Lighthouse 评分

![Astro Nano Lighthouse 评分](/astro-nano-lighthouse.jpg)

## 🕊️ 轻量

没有框架，也没有额外负担。

## ⚡︎ 快速

本地渲染约 40ms。

## 📄 配置

演示站中的博客文章可作为文档和配置说明。

## 💻 命令

所有命令都在项目根目录的终端中运行：

可以将 npm 替换为你喜欢的包管理器，例如 `npm`、`pnpm`、`yarn`、`bun` 等。

| 命令                      | 作用                                             |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装依赖                                         |
| `npm run dev`             | 在 `localhost:4321` 启动本地开发服务器           |
| `npm run dev:network`     | 在本地网络中启动开发服务器                       |
| `npm run sync`            | 为所有 Astro 模块生成 TypeScript 类型            |
| `npm run build`           | 将生产站点构建到 `./dist/`                       |
| `npm run preview`         | 部署前在本地预览构建结果                         |
| `npm run preview:network` | 在本地网络中预览构建结果                         |
| `npm run astro ...`       | 运行 `astro add`、`astro check` 等 CLI 命令       |
| `npm run astro -- --help` | 查看 Astro CLI 帮助                              |
| `npm run lint`            | 运行 ESLint                                      |
| `npm run lint:fix`        | 自动修复 ESLint 问题                             |

## 🏛️ 许可证

MIT
