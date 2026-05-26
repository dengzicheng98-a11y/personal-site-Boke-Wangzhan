export type ResumeSkill = {
  title: string
  desc: string
}

export type ResumeProject = {
  title: string
  subtitle?: string
  body: string
  stack?: string
}

export type ResumeEducation = {
  period: string
  school: string
  major: string
  note?: string
}

export type Resume = {
  id: string
  label: string
  role: string
  salary: string
  city: string
  email: string
  github: string
  skills: ResumeSkill[]
  projects: ResumeProject[]
  education: ResumeEducation
  summary: string
}

export const resumes: Resume[] = [
  {
    id: 'ai-product',
    label: 'AI 产品 PM',
    role: 'AI 产品经理实习 / AI 工作流设计实习',
    salary: '4–8k / 月',
    city: '广州',
    email: 'dengzicheng98@gmail.com',
    github: 'github.com/dengzicheng98-a11y',
    skills: [
      {
        title: 'AI Agent 框架实战',
        desc: 'Hermes / OpenClaw 多 LLM provider fallback、auth-profiles 体系、AGENTS.md 系统规则注入、HOT/WARM/COLD 三级记忆架构',
      },
      {
        title: 'MCP 生态',
        desc: 'Screenpipe 集成（28 工具）、桌面控制 skill 开发、xiaohongshu-auto 自动化（v2.1.0）',
      },
      {
        title: '端到端主理',
        desc: '能在工程链路任意环节定位根因——从日志驱动诊断到架构落地',
      },
      {
        title: '跨学科',
        desc: '建筑设计 5 年（视觉/空间/系统思维）+ 6 年摄影（内容审美）+ 校园新媒体运营（粉丝增长 200%）',
      },
      {
        title: '工具链',
        desc: 'Python / TypeScript / Next.js / Tailwind / Claude Code / Cursor / Vercel / Linux',
      },
    ],
    projects: [
      {
        title: '小苏哒 · Live2D 智能体',
        subtitle: '2026.5 · 主理',
        body: '问题：bot 回复质量差。常规怀疑 prompt/history，日志分析定位根因为 ASR 无差别采集环境音（35.6% 截断率）。方案：PTT 收口在 emit_llm_prediction 层覆盖 13 个调用点全标 source；嘴型同步从双队列改为 DeviceSpeakerPlayEvent 订阅，消除跨线程文件锁竞争。结果：贴题输入下 LLM 回复质量明显提升；嘴型音频时序偏差 100–300ms → <50ms。',
        stack: 'Python · live2d-py 5.x · GPT-SoVITS · pygame · webrtcvad',
      },
      {
        title: '浏览器双语字幕扩展',
        subtitle: '独立开发',
        body: '基于 Chrome MV3 架构开发流媒体双语字幕翻译扩展，覆盖 YouTube / Netflix / Disney+ / HBO Max 四大平台。规避 MV3 service worker CSP 限制，将 LLM API 调用迁移至 content.js 直连；针对 HBO Max 的 CSS 全屏特例引入心跳轮询保证字幕浮层持久化；平台检测层抽象适配不同 DOM 结构与字幕注入时机。',
        stack: 'JavaScript · Chrome MV3 · LLM API',
      },
      {
        title: '个人作品集网站',
        subtitle: '设计 + 开发',
        body: 'Next.js 16 + Tailwind v4，蒙德里安色块 Hero，65 张摄影作品分 3 组 photo essay 排版。设计 single-source-of-truth（6 个 block 类型按方向分组），MDX 博客系统。Vercel 自动部署：personal-site-boke-wangzhan.vercel.app',
        stack: 'Next.js 16 · Tailwind v4 · MDX · Vercel',
      },
    ],
    education: {
      period: '2023.9 – 2027.6',
      school: '广州科技职业技术大学',
      major: '建筑设计及其理论 · 本科',
      note: '2024 起系统投入 AI agent / MCP / 自动化方向；专业思维迁移：空间结构 → 系统架构',
    },
    summary:
      '拥有建筑设计专业背景，具备系统化思维和跨学科整合能力。熟练掌握 AI agent 框架部署、MCP 生态集成与桌面自动化开发，能独立完成从需求拆解、架构设计到工程落地的全流程。具备扎实的工程直觉，习惯通过日志驱动诊断、根因优先的方式定位复杂问题。拥有 6 年摄影经验和校园新媒体运营经历（账号粉丝增长 200%），兼具内容审美与用户共情能力。对 AI 产品方向有持续投入和深度热爱，关注行业最新动态与技术发展。',
  },
  {
    id: 'indie-dev',
    label: '独立开发',
    role: '前端开发实习 / 全栈开发实习',
    salary: '4–8k / 月',
    city: '广州',
    email: 'dengzicheng98@gmail.com',
    github: 'github.com/dengzicheng98-a11y',
    skills: [
      {
        title: '前端工程',
        desc: 'Next.js / React / TypeScript / Tailwind v4 / MDX；熟悉 Server Components / Static Generation / Vercel 部署链路',
      },
      {
        title: '设计实现',
        desc: '从设计稿到代码全流程，能独立做版式决策（single-source-of-truth、按内容类型分组的 block 系统）；CSS 编排能力扎实',
      },
      {
        title: 'AI 辅助开发',
        desc: '日常以 Claude Code / Cursor 为主力工具，能精准定位 AI 误判并人工接管；编写过多个 PowerShell / Bash 自动化 skill',
      },
      {
        title: '工具链',
        desc: 'Git / Vercel / Linux / Chrome MV3 / Python；六年摄影 + 建筑设计训练带来的视觉与空间直觉',
      },
      {
        title: '跨学科',
        desc: '建筑设计 5 年（视觉/空间/系统思维）+ 6 年摄影（内容审美）+ 校园新媒体运营（粉丝增长 200%）',
      },
    ],
    projects: [
      {
        title: '个人作品集网站',
        subtitle: '设计 + 全栈开发',
        body: 'Next.js 16 + Tailwind v4 + MDX 博客系统，独立完成设计与工程。蒙德里安色块 Hero、65 张摄影作品按方向分组的 photo essay 排版（6 种 block 类型，single source of truth）；MDX 博客系统支持 frontmatter / generateStaticParams 静态化 / 自定义 prose 样式；移动端响应式适配（窄屏 calc 负值修复等多项细节）。GitHub Actions + Vercel 30 秒自动部署。线上：personal-site-boke-wangzhan.vercel.app',
        stack: 'Next.js 16 · React · TypeScript · Tailwind v4 · MDX · Vercel',
      },
      {
        title: '浏览器双语字幕扩展',
        subtitle: '独立开发',
        body: '基于 Chrome MV3 架构开发流媒体双语字幕翻译扩展，覆盖 YouTube / Netflix / Disney+ / HBO Max 四大平台。规避 MV3 service worker CSP 限制，将 LLM API 调用迁移至 content.js 直连；针对 HBO Max 的 CSS 全屏特例引入心跳轮询保证字幕浮层持久化；平台检测层抽象适配不同 DOM 结构与字幕注入时机。',
        stack: 'JavaScript · Chrome MV3 · LLM API',
      },
      {
        title: 'Claude Code 桌面自动化 Skills',
        subtitle: 'Skill 开发',
        body: '为 Claude Code agent 框架开发桌面自动化 skill 集，覆盖窗口控制、文件操作、图文发布等多场景。攻克中文路径 key_send 静默乱码问题（改用 PowerShell Set-Clipboard + Ctrl+V），适配多种贴图与排版场景；DPI 缩放下的窗口坐标定位修复（SetProcessDPIAware）；Windows 任务计划绕 UAC 自启方案。',
        stack: 'Python · PowerShell · Claude Code Skill',
      },
    ],
    education: {
      period: '2023.9 – 2027.6',
      school: '广州科技职业技术大学',
      major: '建筑设计及其理论 · 本科',
      note: '建筑训练带来的空间思维、版式直觉、对细节的偏执直接迁移到前端工程实践。',
    },
    summary:
      '熟练掌握 Next.js / React / TypeScript / Tailwind 等现代前端技术栈，能够独立完成从需求拆解、视觉决策到工程落地的全流程。习惯将 AI 辅助开发工具（Claude Code / Cursor）融入日常工作流，显著提升开发效率，同时具备识别 AI 误判并人工接管的判断力。拥有 6 年摄影经验和校园新媒体运营经历（账号粉丝增长 200%），兼具内容审美与用户共情能力。注重代码可维护性与视觉一致性，相信好的前端工程师是设计师与工程师的合体。',
  },
  {
    id: 'mcp-dev',
    label: 'MCP Server',
    role: 'AI Agent 工程师实习 / LLM 应用开发实习',
    salary: '9–15k / 月',
    city: '广州',
    email: 'dengzicheng98@gmail.com',
    github: 'github.com/dengzicheng98-a11y',
    skills: [
      {
        title: 'MCP 生态',
        desc: 'Screenpipe MCP Server 部署与调试（28 工具集，含 Windows 调度任务自启、WSL2 跨主机访问、WebSocket 路径硬编码绕路）；Hermes 多 server 集成与工具路由',
      },
      {
        title: 'AI Agent 框架',
        desc: 'Hermes / OpenClaw 全链路实战——多 LLM provider fallback（阿里百炼 / 智谱 GLM / OpenRouter）、auth-profiles 凭证体系、AGENTS.md 系统规则注入、HOT/WARM/COLD 三级记忆架构、systemd drop-in 代理配置',
      },
      {
        title: '工程化诊断',
        desc: '日志驱动定位根因（小苏哒 ASR 污染 35.6% 截断率诊断），架构决策优先于参数调优；熟悉跨进程 / 跨线程 / 跨主机的边界问题',
      },
      {
        title: '工具链',
        desc: 'Python / TypeScript / Linux / WSL2 / systemd / PowerShell / Git',
      },
      {
        title: '跨学科',
        desc: '建筑设计 5 年（系统思维）+ 6 年摄影 + 校园新媒体运营',
      },
    ],
    projects: [
      {
        title: 'Screenpipe MCP Server 集成到 Hermes Agent',
        subtitle: '2026.5 · 主理',
        body: '将 Screenpipe（Windows 屏幕录制 + 索引引擎）以 MCP Server 形式接入 Hermes Agent 框架，对外暴露 28 个工具。WSL2 跨主机访问通过 localhostForwarding 解决；Windows 端用 Task Scheduler 注册 screenpipe-autostart 实现登录自启；Hermes 端 config.yaml 用 SCREENPIPE_HOST: 172.17.96.1 接入。识别并文档化了 screenpipe-mcp WebSocket 路径硬编码 localhost 的潜在影响。',
        stack: 'MCP Protocol · Screenpipe · WSL2 · Hermes Agent',
      },
      {
        title: '小苏哒 · Live2D 智能体 + 输入污染诊断',
        subtitle: '2026.5 · 主理',
        body: '问题：bot 回复质量差。常规怀疑 prompt/history，日志分析定位根因为 ASR 无差别采集环境音（35.6% 截断率）。方案：PTT 收口在 emit_llm_prediction 层覆盖 13 个调用点全标 source；嘴型同步从双队列改为 DeviceSpeakerPlayEvent 订阅，消除跨线程文件锁竞争。结果：贴题输入下 LLM 回复质量明显提升；嘴型音频时序偏差 100–300ms → <50ms。架构方向对标 Neuro-sama：多源高纯度输入融合。',
        stack: 'Python · live2d-py 5.x · GPT-SoVITS · pygame · webrtcvad',
      },
      {
        title: 'Claude Code 桌面自动化 Skills',
        subtitle: 'Skill 开发',
        body: '为 Claude Code agent 框架开发桌面自动化 skill 集。攻克中文路径 key_send 静默乱码问题（改用 PowerShell Set-Clipboard + Ctrl+V）；DPI 缩放下的窗口坐标定位修复；Windows 任务计划绕 UAC 自启方案。',
        stack: 'Python · PowerShell · Claude Code Skill',
      },
    ],
    education: {
      period: '2023.9 – 2027.6',
      school: '广州科技职业技术大学',
      major: '建筑设计及其理论 · 本科',
      note: '2024 起系统投入 AI agent / MCP 方向；建筑设计训练的系统化思维直接迁移到 Agent 架构与工具链设计。',
    },
    summary:
      '专注 AI Agent 框架与 MCP 生态实战，独立完成多个 Agent 框架部署、MCP Server 集成与桌面自动化项目。熟悉跨进程 / 跨线程 / 跨主机的边界问题，习惯通过日志驱动诊断、根因优先的方式定位复杂系统故障。掌握 Linux / WSL2 / systemd 等工程化基础设施，能在不确定的工具链中快速建立可复现的部署方案。拥有建筑设计背景带来的系统化思维与版式直觉，注重技术决策的可维护性与文档化。',
  },
]
