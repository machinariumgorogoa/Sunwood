# Sunwood CRM — Agent 工作手册

> 本文件用于在新会话中快速恢复项目上下文。每次重大变更后应更新。

---

## 1. 项目基本信息

| 项 | 内容 |
|---|---|
| 项目名称 | Sunwood CRM |
| 定位 | 雇主担保移民与人才服务管理系统 |
| 工作目录 | `c:\Repohub\KimiProjects\Sunwood\Sunwood` |
| 生产环境 | https://sunwood.vercel.app |
| 代码仓库 | https://github.com/machinariumgorogoa/Sunwood |
| 部署方式 | GitHub → Vercel 自动部署（main 分支） |
| 数据库 | Supabase `isaauyxjwdkjciwweuhk.supabase.co` |
| 前端 SDK | `supabase.min.js`（本地文件，CDN 因网络问题无法解析） |

### Supabase 连接信息（仅前端使用 anon key）

```js
const SUPABASE_URL = 'https://isaauyxjwdkjciwweuhk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzYWF1eXhqd2RramNpd3dldWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MDY4NjksImV4cCI6MjA4OTk4Mjg2OX0.WvE8GkzpqJs7BPRmrayxcu7P0-nFX6rafsZQ0DA3EyY';
```

---

## 2. 版本与分支策略

| 版本 | 分支/标签 | 说明 |
|---|---|---|
| v1.0 | `v1.0-jinshuju` / `v1.0` | 金数据表单嵌入版 |
| v2.0 | `v2.0-assessment` / `v2.0` | 候选人评估表单版 |
| v3.0 | `main` / `v3.0` | CRM 主页 + 公司与项目表单（当前） |

---

## 3. 文件结构

```
Sunwood/
├── index.html              # 公开官网首页（登录/注册弹窗为前端演示）
├── assessment.html         # 对外候选人评估表（已接入 Supabase）
├── company-form.html       # 雇主公司信息登记表（已接入 Supabase）
├── project-form.html       # 内部项目登记表（已接入 Supabase）
├── index-jinshuju.html     # 历史版本 1.0
├── nav.js                  # 全局导航栏 + SVG 图标库
├── supabase.min.js         # Supabase 前端 SDK 本地副本
├── AGENTS.md               # 本文件
├── README.md               # 面向人类的项目说明
│
└── CRM 模块页面（当前为前端框架）
    ├── clients.html        # 客户管理
    ├── companies.html      # 公司管理后台
    ├── projects.html       # 项目管理后台
    ├── channels.html       # 渠道管理
    ├── ai-internal.html    # 对内 AI 工具
    ├── ai-external.html    # 对外 AI 报告
    ├── training.html       # 培训管理
    ├── performance.html    # 绩效管理
    └── hr.html             # HR 管理
```

### 待清理文件

- `ai-copywriting.html` — 已不再链接，可删除
- `ai-parsing.html` — 已不再链接，可删除

---

## 4. 已接入数据库的表

| 页面 | 表名 | Schema | 说明 |
|---|---|---|---|
| `assessment.html` | `candidate_assessments` | `public` | 候选人评估数据 |
| `company-form.html` | `companies` | `public` | 雇主公司信息 |
| `project-form.html` | `projects` | `public` | 项目信息 |

所有表当前均允许匿名 insert，authenticated 可读。待接入 Supabase Auth 后收紧 RLS。

---

## 5. 当前已知问题

1. **用户认证未实现**：`index.html` 登录/注册弹窗仅本地设置 `currentUser`，未连接 Supabase Auth。
2. **RLS 策略过宽**：匿名 insert、认证用户可读所有数据，需按角色/所有者收紧。
3. **模块页面为前端框架**：clients/companies/projects/channels/ai-internal/ai-external/training/performance/hr 暂无后端数据。
4. **首页 dashboard 为演示**：登录后展示的模块卡片和评估记录为占位内容。
5. **冗余 AI 页面**：`ai-copywriting.html`、`ai-parsing.html` 可删除。
6. **company/project 表单字段较长**，在手机上可能需要分步或折叠优化。

---

## 6. 近期任务优先级

### 当前优先（老板反馈修改）

- ✅ 已整理老板对 `assessment.html` 免费评估表的反馈
- ✅ 已修改 `assessment.html`：标题/文案、服务类型、语言成绩单项、职业评估、签证类别、多文件上传、低龄留学选项
- ✅ 已创建数据库迁移脚本 `migrations/2026-06-29-assessment-feedback.sql`
- ⏳ 等待在 Supabase SQL Editor 执行迁移脚本后验证生产环境

### 下一阶段（用户系统）

1. 集成 Supabase Auth（注册/登录/登出）
2. 设计角色：`admin`（全可见）、`staff`（内部）、`employer`（仅自己公司）、`candidate`（仅自己评估）
3. 重写 RLS 策略，按用户/角色隔离数据
4. 为 company-form/project-form 添加 `created_by` 等字段
5. 将 dashboard 模块按角色权限显示

---

## 7. 约定与规范

- 静态前端，无构建步骤
- Supabase SDK 使用本地 `supabase.min.js`
- 图标使用 SVG，不再使用 emoji
- 导航统一通过 `nav.js` 注入
- 新页面需包含 `nav.js` 和一致页头/页脚样式

---

## 8. 恢复新会话的快速步骤

1. 读取本文件 `AGENTS.md`
2. 读取 `README.md`
3. 查看需要修改的文件（通常从 `index.html`、`company-form.html`、`project-form.html`、`nav.js` 开始）
4. 查看 Supabase 表结构和 RLS 策略（如需要）

---

最后更新：2026-06-29
