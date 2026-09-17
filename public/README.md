<div align="center">

# Sunwood CRM

**Recruitment & Migration Service Platform · 招聘与移民服务平台**

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)](https://sunwood.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-Supabase-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com)
[![Frontend](https://img.shields.io/badge/Frontend-Vanilla%20JS-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Auth](https://img.shields.io/badge/Auth-RLS%20%2B%20Supabase%20Auth-3ECF8E)](#-architecture--架构)

A lightweight, zero-build CRM for Sunwood Consulting — public job board & applications on the front, full headhunting pipeline (candidates, clients, matches, analytics) behind staff login.

面向 Sunwood Consulting 的轻量零构建 CRM：对外是职位发布与申请入口，对内是完整的猎头业务流（候选人、客户、流程看板、经营看板）。

</div>

---

## ✨ Features | 功能

| | Public | Internal |
|---|---|---|
| **EN** | Job listings with filters · one-click multi-apply · profile prefill by email · resume & cover-letter upload · free assessment · employer & project intake | Staff login (RLS role isolation) · job publishing · candidate pool & detail · pipeline board (sourced → hired) · client management · management dashboard |
| **中文** | 职位列表与筛选 · 多职位一键申请 · 邮箱反查资料回填 · 简历与 Cover Letter 上传 · 免费评估 · 雇主/项目登记 | 员工登录（RLS 角色隔离）· 职位发布 · 候选人库与详情 · 流程看板（sourced → hired）· 客户管理 · 管理层看板 |

## 🚀 Quick Start | 快速开始

No build step required. | 无需构建。

```bash
# serve the site locally | 本地起静态服务
cd public
python -m http.server 8137
# → http://127.0.0.1:8137
```

Database connection lives in a single file — `public/config.js`. | 数据库连接只在一个文件：`public/config.js`。

## 📁 Structure | 目录结构

```
public/
├── index.html               # Homepage 官网首页
├── jobs-public.html         # Job board 职位列表
├── job-apply.html           # Application 申请/资料完善
├── assessment.html          # Free assessment 免费评估
├── dashboard.html           # Management dashboard 管理层看板
├── candidates.html / candidate-detail.html / matches.html / clients.html
├── login.html / register.html
├── nav.js                   # Shared nav & icons 共享导航与图标
├── config.js                # Single DB connection point 唯一数据库连接点
└── supabase.min.js          # SDK (vendored) 本地 SDK
```

## 🏗 Architecture | 架构

- **Pure static frontend** — no framework, no bundler. | 纯静态前端，无框架无打包。
- **Supabase** (PostgreSQL + Auth + Storage + RLS) — anonymous visitors read public jobs and submit applications via secure RPCs; staff data is isolated by role (`superadmin / admin / manager / staff`) with row-level security.
- **Supabase**（PostgreSQL + Auth + Storage + RLS）——匿名访客通过安全 RPC 浏览职位与提交申请；内部数据按角色行级隔离。

## 📄 License | 许可

© 2026 Sunwood Consulting Group. All rights reserved.
