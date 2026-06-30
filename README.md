# Sunwood CRM

雇主担保移民与人才服务管理系统，迭代式开发中。

## 当前版本状态

已接入数据库的表单：
- `company-form.html` — 雇主公司信息登记表
- `project-form.html` — 项目信息登记表

其余页面当前仍为前端演示框架，后续逐步接入数据库。

## 文件结构

- `index.html` — 公开官网首页（公司介绍 + 服务 + 联系信息 + 候选人评估入口 + 登录弹窗）
- `assessment.html` — 对外候选人评估表（原 index.html，已接入 Supabase）
- `company-form.html` — 雇主公司信息登记表（已接入数据库）
- `project-form.html` — 项目信息登记表（已接入数据库）
- `index-jinshuju.html` — 金数据表单嵌入版本（历史版本 1.0）
- `nav.js` — 全局导航栏与 SVG 图标库
- `supabase.min.js` — Supabase 前端 SDK（本地引用）

## CRM 模块页面（前端框架）

- `clients.html` — 客户管理
- `companies.html` — 公司管理后台
- `projects.html` — 项目管理后台
- `channels.html` — 渠道管理
- `ai-internal.html` — 对内 AI 工具
- `ai-external.html` — 对外 AI 报告
- `training.html` — 培训管理
- `performance.html` — 绩效管理
- `hr.html` — HR 管理

## 技术说明

- 前端：纯静态 HTML + CSS + JavaScript
- 后端：Supabase（PostgreSQL + REST API）
- 部署：GitHub + Vercel
