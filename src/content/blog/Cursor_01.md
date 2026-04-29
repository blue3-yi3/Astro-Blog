---
title: "Cursor预览配置"
description: "在cursor实时预览项目的配置。"
date: "2026-04-28"
toc: false
tags:
  - cursor
---

### 下载Node.js依赖
1. 打开 Node.js 官网：[https://nodejs.org](https://nodejs.org/)，
下载并安装 LTS 版本

- 下载并安装 nvm：
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```
- 代替重启 shell
```
\. "$HOME/.nvm/nvm.sh"
```

- 下载并安装 Node.js：
```
nvm install 24
```
- 验证 Node.js 版本：
```
node -v # Should print "v24.15.0".
```
- 验证 npm 版本：
```
npm -v # Should print "11.12.1".
```

2. 安装完成后，重新打开 Cursor 的终端。
3. 验证：
```
node -v
npm -v
```

4. 回到项目目录
5. 安装依赖
```
npm install
```
6. 启动预览
```
npm run dev
```
