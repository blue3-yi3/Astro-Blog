---
title: "Astro Sphere"
description: "使用 Astro 构建的作品集与博客。"
date: "03/18/2024"
demoURL: "https://astro-sphere-demo.vercel.app"
repoURL: "https://github.com/markhorn-dev/astro-sphere"
---

![Astro Sphere](/astro-sphere.jpg)

Astro Sphere 是一个静态、极简、轻量、极速的作品集与博客主题，基于 Mark Horn 的个人网站打造。

它主要使用 Astro、Tailwind 和 TypeScript 构建，并用少量 SolidJS 实现有状态组件。

## 🚀 部署你自己的版本

<div class="flex gap-2">
  <a target="_blank" aria-label="部署到 Vercel" href="https://vercel.com/new/clone?repository-url=https://github.com/markhorn-dev/astro-sphere">
    <img src="/deploy_vercel.svg" />
  </a>
  <a target="_blank" aria-label="部署到 Netlify" href="https://app.netlify.com/start/deploy?repository=https://github.com/markhorn-dev/astro-sphere">
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
- ✅ 内容可搜索（文章和项目）

## 💯 Lighthouse 评分

![Astro Sphere Lighthouse 评分](/lighthouse-nano.jpg)

## 🕊️ 轻量

所有页面均小于 100KB（包含字体）

## ⚡︎ 快速

本地渲染约 40ms

## 📄 配置

演示站中的博客文章可作为文档和配置说明。

## 💻 命令

所有命令都在项目根目录的终端中运行：

可以将 npm 替换为你喜欢的包管理器，例如 `npm`、`pnpm`、`yarn`、`bun` 等。

| 命令                      | 作用                                             |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装依赖                                         |
| `npm run dev`             | 在 `localhost:4321` 启动本地开发服务器           |
| `npm run sync`            | 为所有 Astro 模块生成 TypeScript 类型            |
| `npm run build`           | 将生产站点构建到 `./dist/`                       |
| `npm run preview`         | 部署前在本地预览构建结果                         |
| `npm run astro ...`       | 运行 `astro add`、`astro check` 等 CLI 命令       |
| `npm run astro -- --help` | 查看 Astro CLI 帮助                              |
| `npm run lint`            | 运行 ESLint                                      |
| `npm run lint:fix`        | 自动修复 ESLint 问题                             |

## 🏛️ 许可证

MIT
