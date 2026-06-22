# Vynex API 全球推广方案 · 90 天路线图与全渠道矩阵

> 配合 `00_OVERVIEW.md` 一起看。前提：英文版、定价页、信任页已就绪（见 00 的检查清单）。

---

## 一、目标用户画像（谁会用 Vynex）

| 人群 | 画像 | 痛点 | 在哪触达 |
|---|---|---|---|
| **独立开发者 / Indie Hacker** | 一个人做 SaaS / AI 小工具 | 官方 API 贵、要绑外卡、切换模型麻烦 | X、Reddit、Indie Hackers、Product Hunt |
| **AI Agent / 应用开发者** | 做 Agent、Copilot、Chatbot | 要多模型路由、要便宜、要稳定 | GitHub、Discord、X、HN、LangChain 社区 |
| **学生 / 研究者** | 预算极低、要尝鲜 | 没钱、没外卡、被地区限制 | Reddit、Discord、校园、Kaggle |
| **中小团队 / 创业公司** | 早期、控成本 | 多账号管理、要发票、要用量看板 | LinkedIn、X、SEO、邮件 outbound |
| **AI 工具客户端用户** | 用 Cursor / Cline / LobeChat 等 | 想填一个 base_url 就用最便宜模型 | 这些工具的社区、GitHub |
| **OpenAI 难触达地区开发者** | 中、俄、中东、东南亚、拉美 | 注册不了、付不了款、被限速 | 本地社区、Reddit、Telegram |

> **第一波最该抓的**：独立开发者 + AI Agent 开发者 + 被地区限制的开发者。这三类人决策快、传播强、转化高。

---

## 二、90 天路线图

### Phase 0 · 基础就绪（第 1–2 周）
目标：把官网变成「能转化全球开发者」的阵地。
- 英文版上线（默认英文）。
- 上 `/pricing` 定价页 + 控制台用量看板。
- 上 Security / Privacy / Terms / 状态页。
- 注册体验打磨：GitHub/Google 登录、≤30s 完成、新用户免费额度。
- 文档打磨：补全错误码、限流、流式、各语言示例。
- 建好官方 GitHub 组织 + 至少 1 个 SDK/示例仓库（用本素材包的 README）。
- 准备品牌资产：Logo、OG 图、截图、30s demo 视频/GIF。

### Phase 1 · 集中发布引爆（第 3–4 周）
目标：一次性在所有开发者注意力高地亮相，拿到第一波种子用户。
- **Product Hunt Launch**（周二/三上线，提前 1 周预热）——见 `launch/producthunt.md`。
- **Hacker News · Show HN**（与 PH 错开 2–3 天，避免互相分流）。
- **Reddit**：r/LocalLLaMA、r/OpenAI、r/ChatGPTCoding、r/SideProject、r/SaaS、r/ArtificialInteligence（注意各版规，别一稿多投被 ban）。
- **X / Twitter**：创始人 + 官方号连发，@关键 KOL。
- **AI 工具目录**：批量提交 20+ 目录（见 `seo/directories.md`）。
- **GitHub**：示例仓库做星标启动 + 发 release。

### Phase 2 · 内容与 SEO 沉淀（第 5–8 周）
目标：让搜「cheap openai api / openrouter alternative」的人能找到你。
- 每周 2–3 篇技术博客（选题见 `seo/content-plan.md`），英文为主。
- 建对比落地页：`/vs-openrouter`、`/openai-api-alternative`、`/cheap-claude-api`。
- 教程类内容：如何在 Cursor / Cline / LangChain / LobeChat 里接入 Vynex（带可复制代码）。
- 把博客同步到 Dev.to / Hashnode / Medium，引流回主站。
- 在 Stack Overflow / 相关 GitHub Issue 里**真诚回答**问题，签名带链接。

### Phase 3 · 生态绑定与复购（第 9–12 周）
目标：把 Vynex 嵌进开发者的工作流，形成持续流量。
- **集成生态**：争取成为主流客户端/框架的推荐 provider（清单见 `seo/integrations.md`）。
- **联盟/推荐返佣**：上线 affiliate，让现有用户带新用户。
- **Discord / 社区**：建官方 Discord，做支持 + 用户案例 + 每周新模型公告。
- **B2B outbound**：针对有 AI 需求的中小团队，LinkedIn + 邮件开发信。
- **付费投放**（验证 PMF 后再开）：Google Ads 关键词、Reddit Ads 精准定向开发者。
- 复盘 KPI，决定是否加大投入。

---

## 三、全渠道矩阵（按优先级）

### 🥇 P0 · 开发者注意力高地（转化最高）

#### 1. GitHub（最被低估的长期流量源）
- 建官方 org（如 `github.com/vynexlimited`），放：
  - `vynex-api-sdk`（或 `vynex-examples`）：官方示例 + 社区 SDK，README 用本素材包的英文版。
  - `awesome-vynex`：精选用例、接入指南。
  - `vynex-api-homepage`（你已有）：开源官网源码也能吸星标。
- 在 README 里放「Model Showcase / Playground」链接回主站。
- 主动给 LangChain / LobeChat / Open WebUI 等项目提 PR，支持 Vynex 作为 provider。

#### 2. Product Hunt（开发者产品首发标配）
- 选周二或周三上线（流量最高），提前 1 周预热邮件/社群。
- 准备：一句话 tagline、3–5 张产品图、1 个 demo 视频（≤60s）、Maker 评论。
- 上线当天全天候回复评论。文案见 `launch/producthunt.md`。

#### 3. Hacker News（Show HN）
- 标题格式：`Show HN: Vynex API – One OpenAI-compatible endpoint for GPT, Claude, Gemini`。
- 正文要**诚实、技术、不营销**，讲你为什么做、怎么做、价格。
- 时机：选太平洋时间早上 8–10 点（HN 流量峰）。

#### 4. Reddit（精准但严苛）
- **优先版块**：r/LocalLLaMA（最重要）、r/OpenAI、r/ChatGPTCoding、r/SideProject、r/SaaS、r/ArtificialInteligence。
- **铁律**：先在版块**混 1–2 周贡献**（回答问题、发干货），再发产品；否则大概率被删 + 被 ban。
- 每个版块**单独写文案**，别复制粘贴。用「我做了 X，解决了 Y，求反馈」的姿态，不是广告。
- 文案模板见 `launch/reddit.md`。

### 🥈 P1 · 社交媒体与内容（品牌 + 长尾）

#### 5. X / Twitter
- AI 开发者圈最活跃平台。策略：
  - 官方号：产品更新、新模型上线、价格对比、教程线程（thread）。
  - 创始人号：build in public，讲数据、踩坑、增长。
  - @关键 KOL（AI 开发者博主），真诚互动别硬推。
- 节奏：每天 1–2 条，每周 1 个长 thread。

#### 6. LinkedIn（B2B、企业客户）
- 面向技术决策者、CTO、创业团队。
- 发产品故事、案例、企业能力（SLA、合规、私有部署）。

#### 7. YouTube
- 录 2–3 个核心教程：「3 分钟接入 Vynex 调用所有模型」「Vynex vs OpenRouter 对比」「在 Cursor 里用最便宜模型」。
- YouTube SEO 长尾极强，一条好教程能吃几个月流量。

#### 8. 技术博客（Dev.to / Hashnode / Medium / 自建博客）
- 见 `seo/content-plan.md` 的选题。

### 🥉 P2 · 目录、SEO、生态（长期复利）

#### 9. AI 工具目录（低 effort、稳流量）
- 批量提交：There's An AI For That、Futurepedia、Toolify、AI Tool Guru、OpenTools 等（完整清单见 `seo/directories.md`）。

#### 10. SEO 内容（最稳的长期获客）
- 关键词方向：`openai api alternative` / `cheap gpt-4 api` / `openrouter alternative` / `claude api pricing` / `one api for all llms`。
- 落地页 + 博客双管齐下。选题见 `seo/content-plan.md`。

#### 11. 集成生态（放大器，最高杠杆）
- 让 Vynex 出现在这些工具的「自定义 base_url / provider」文档里：Cursor、Cline、Continue、Roo Code、LobeChat、Open WebUI、ChatBox、NextChat、Dify、FastGPT、n8n、LangChain、LlamaIndex。
- 每接通一个，就是一条持续流量管道。清单见 `seo/integrations.md`。

### P3 · 付费与联盟（PMF 验证后）

#### 12. 付费投放
- Google Ads：竞价 `cheap openai api`、`openai api alternative`、`gpt-4 api`。
- Reddit Ads：定向 r/LocalLLaMA 等版块用户。
- X/LinkedIn Ads：定向 AI 开发者。
- 注意：API 中转毛利薄，先算 LTV/CAC，别烧钱。

#### 13. 联盟 / 推荐返佣
- 上线 affiliate（如 10–20% 持续返佣）。
- 让技术博主、YouTuber、社区 KOL 推荐你。

#### 14. Outbound（B2B）
- 对有 AI 功能的中小 SaaS，LinkedIn + 个性化邮件开发信。
- 卖点：统一接入、成本可控、发票合规。

---

## 四、预算与人力的最小可行配置

### 人力（最小团队）
- **1 人 content/community**：写博客、发推、维护 Reddit/Discord、提 PR。
- **1 人 dev/ops**：官网英文版、定价页、文档、集成 SDK、稳定性。
- **创始人**：PH/HN/Reddit 首发、对外发声、谈合作。

### 预算（90 天最小启动，美元，参考量级）
| 项 | 预算 | 说明 |
|---|---|---|
| Product Hunt 营销 | $0–500 | 除非买 PH Ads，否则主要靠社群 |
| AI 目录提交 | $0–300 | 部分目录收费 |
| 内容生产（外包/工具） | $500–2000 | 博客、视频、翻译 |
| SEO 工具（Ahrefs/Semrush 之一） | ~$100–200/月 | 关键词 + 外链监控 |
| KOL / 联盟启动 | $500–3000 | 少量博主合作 + 返佣池 |
| 付费投放（可选） | $500–5000 | 验证后再放量 |
| **合计（90 天）** | **~$2k–8k** | 不含人力 |

> 真正贵的不是钱，是**持续的内容和社区投入**。API 中转这个赛道，前 6 个月内容/社区 > 付费投放。

---

## 五、效果衡量 KPI（每周看）

| 指标 | 第 30 天目标 | 第 90 天目标 |
|---|---|---|
| 注册开发者数 | 300–800 | 2000–5000 |
| 产生调用（活跃）的用户占比 | ≥25% | ≥35% |
| GitHub 星标（示例仓库） | 100+ | 500+ |
| 自然搜索月 UV | — | 1000+ |
| Product Hunt 当日排名 | 进 Top 10 | — |
| 付费/充值用户数 | 首批 | 占活跃 10%+ |
| Discord / 社区成员 | 200+ | 1000+ |

> 关键不是注册数，是**产生调用 + 充值**的活跃用户。中转站最常见的坑是注册很多、不充值、不用。

---

## 六、风险与避坑

1. **别一稿多投被 ban**：Reddit 各版块、HN 都反感广告腔。先贡献、后推广。
2. **别夸大模型能力**：如果某模型不稳定/是中转，别在推广里吹，否则试用即翻车。
3. **稳定性是生命线**：中转站一旦几次超时/掉线，口碑立刻崩。推广前先把可用性和监控做到位。
4. **合规红线**：明确与上游的关系，别做成"盗版中转"，否则全球推广会引来法务和信任风险。
5. **先内容后投放**：毛利薄，没验证 PMF 前别烧付费流量。

下一步：照 `00` 的清单补基础 → 按 Phase 0→3 执行 → 文案和素材直接用 `launch/` 和 `seo/` 里的现成模板。
