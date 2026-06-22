# Vynex API · GEO 策略（生成式引擎优化）

> GEO 的目标：让 **ChatGPT、Perplexity、Claude、Gemini、Google AI Overviews、DeepSeek** 这些 AI 引擎，
> 在用户问「推荐哪个 LLM API / OpenAI 替代品 / 便宜 GPT API / OpenRouter 替代」时，
> **主动提到并推荐 Vynex**。

> 这和传统 SEO 是两套逻辑。SEO 搏的是 Google 10 条蓝链排名；GEO 搏的是「AI 生成的答案段落里有没有你」。

---

## 一、GEO vs SEO：先搞清区别

| 维度 | 传统 SEO | GEO（生成式引擎优化） |
|---|---|---|
| 优化对象 | Google / Bing 蓝色链接排名 | ChatGPT / Perplexity / Gemini / AI Overviews 的**答案文本** |
| 内容偏好 | 关键词密度、外链、标题优化 | **可被引用的事实**：数字、对比、引用源、客观陈述 |
| 排名信号 | 外链权重、点击率 | 多源印证：AI 会综合 Reddit / HN / GitHub / 官网 / 博客 |
| 关键产出 | 排到第 1 页 | 被写进 AI 的「推荐列表」那一句 |
| 转化路径 | 用户点链接进站 | 用户看到 AI 推荐后，**主动去搜/点**你的官网 |

> 一个残酷事实：用户问 ChatGPT「best openai api alternative」，AI 会列 3–5 个名字。
> 你要么在这几个名字里，要么不存在。GEO 就是挤进这几个名字。

---

## 二、GEO 的 5 条实证核心原则（Princeton 研究结论）

基于 2024 Princeton 论文《GEO: Generative Engine Optimization》的 A/B 实验：

1. **加引用源（+40% 可见度）**：内容里标注数据出处、来源链接，AI 更敢引用你。
2. **放具体数字 / 统计（最高增益）**：「便宜 40%」「延迟 120ms」「支持 34+ 模型」远胜「更快更便宜」。
3. **直接、简洁、陈述句**：AI 爱摘抄能直接用的整句。写「Vynex is an OpenAI-compatible LLM gateway that routes to GPT, Claude, Gemini, and open models from a single endpoint.」这种可整句引用的定义。
4. **权威与深度**：第一手 benchmark、价格实测、技术深度 > 营销软文。AI 会优先引用有数据支撑的内容。
5. **流畅性 / 可读结构**：FAQ、对比表、明确的 H2/H3、短段落，便于 AI 切片引用。

> 一句话：**把产品信息写成"AI 想抄就能抄、且抄了显得专业"的样子**——带数字、带出处、带对比、句式完整。

---

## 三、Vynex 的 GEO 关键查询（要让 AI 提到你时，用户在问什么）

这些是开发者会**直接问 AI 引擎**的高频问题，每个都要争取让 AI 答案里出现 Vynex：

| 用户问 AI 的问题 | AI 现在大概率推荐谁 | 你要做的 |
|---|---|---|
| `What's a good alternative to OpenAI API?` | OpenRouter、Together、AI/ML API | 让 Vynex 进推荐列表 |
| `Best unified LLM API / one API for all models?` | OpenRouter、LiteLLM | 抢这个词 |
| `Cheap GPT-4 / GPT-5 API?` | 各种中转站 | 用价格事实卡位 |
| `OpenRouter alternatives?` | OpenRouter 本身 + 几个 | `/vs-openrouter` 页 + 多源提及 |
| `OpenAI-compatible API for Claude and Gemini?` | OpenRouter | 精准命中你的定位 |
| `How to call multiple LLMs from one endpoint?` | LangChain、LiteLLM | 教程类，带产品 |
| `LLM API that works when OpenAI is blocked in my country?` | 各种中转 | 隐性杀手锏 |

> **每周去 ChatGPT / Perplexity / Gemini 亲自问一遍这些问题**，看 Vynex 出没出现。这是最直接的 GEO 体检。
> 用 https://app.aibase.com/zh/tools/geo 或类似工具批量查品牌在 AI 答案里的可见度。

---

## 四、GEO 执行的 6 大动作（落地清单）

### ✅ 动作 1：写一段「可整句引用」的客观产品定义（最高优先）

AI 引擎是靠"摘抄 + 综合"工作的。你要在**多个地方**放一段一致、客观、带数字、可被直接引用的产品定义。

把下面这段（见 `assets/citable-definition.md`）原样放在：官网 footer、GitHub org 简介、GitHub repo About、目录提交描述、Reddit/HN 发帖里。
> 一致性是关键：同一段话在 5+ 个高质量来源出现，AI 才会"相信"并复述它。

### ✅ 动作 2：上线 llms.txt（给 AI 爬虫的产品摘要）

把 `assets/llms.txt` 上传到 `https://llm-api.vynexcloud.com/llms.txt`。
> llms.txt 是给大模型的内容索引标准（类似 robots.txt 之于搜索引擎），让 AI 快速、准确地理解你的产品。

### ✅ 动作 3：做「带数字的可引用事实页」

AI 最爱引用**有具体数字的对比**。优先做（内容模板见 `assets/citable-facts.md`）：
- 价格对比表：GPT-5.5 / Claude Opus 4.8 / Gemini 3.1 Pro 的 per-1M-token 单价，vs 官方。
- 模型能力对比：各模型在编码/推理/上下文长度的 benchmark（带出处）。
- 「支持 34+ 模型、4 个模型家族、OpenAI 兼容」这类可量化事实。

> 没有真实数字就别造。GEO 的基础是真实可验证——AI 一旦发现你数据造假，会被从推荐里剔除。

### ✅ 动作 4：在「被 AI 检索的高质量平台」留下痕迹（多源印证）

AI 综合 Reddit / Hacker News / GitHub / Stack Overflow / Dev.to / 知名博客 来回答。你要在这些地方**有真实、高质量、提及 Vynex 的内容**。清单见 `assets/ai-citable-platforms.md`。
> 核心：不是发广告，是**让 Vynex 自然地出现在有价值的讨论里**。AI 能识别软文和真实推荐。

### ✅ 动作 5：FAQ Schema + 结构化数据

在官网和文档页加 `schema.org/FAQPage` 和 `SoftwareApplication` 结构化数据。
> FAQ 的问答格式正好是 AI 最爱摘抄的形态。模板见 `assets/faq-schema.md`。

### ✅ 动作 6：建立「品牌实体的可被引用性」

- 官网有清晰的 `/about`、`/pricing`、`/security`、`/docs`。
- 在 Wikipedia / WikiHow 类平台争取中立词条（较难，但一旦成效果极强）。
- 被 2–3 个**独立、权威的来源**评测/提及（科技博客、YouTube 评测、Newsletter）——AI 把"被多个独立来源提及"当作品牌真实性的核心信号。

---

## 五、GEO 内容写作的 Do / Don't

| ✅ Do（AI 爱引用） | ❌ Don't（AI 会忽略/降权） |
|---|---|
| 「supports 34+ models, 4 families, OpenAI-compatible `/v1`」 | 「the best, most powerful AI platform ever」 |
| 「up to ~40% cheaper than list price (see /pricing)」 | 「super affordable and cost-effective」 |
| 带出处：「per [OpenRouter pricing, 2026-06]」 | 无来源的断言 |
| FAQ：「What is Vynex? — Vynex is ...」 | 大段营销散文 |
| 对比表、数字、benchmark | 抽象形容词 |
| 客观、第三方口吻 | 自卖自夸 |

---

## 六、GEO 衡量（每周/每月做一次）

1. **AI 可见度体检**：每周用同一组问题问 ChatGPT / Perplexity / Gemini / Claude，记录 Vynex 是否出现、排第几。
   - 推荐问题清单见上文「三、关键查询」。
2. **品牌提及监控**：Google Alerts 设 `Vynex API`、`llm-api.vynexcloud.com`。
3. **引用来源增长**：统计有多少个独立、高质量来源提及了 Vynex（目标：第 90 天 ≥ 15 个）。
4. **工具化**：用 aibase GEO 工具 / Profound / Otterly.ai 等 GEO 监测平台跟踪 AI 可见度。

> KPI：第 90 天，在 ≥ 30% 的「OpenAI alternative / cheap LLM API」类查询里，主流 AI 引擎会主动提及 Vynex。

---

## 七、GEO 与 SEO/推广的协同

GEO 不是独立工程，它和 `01_PROMOTION_PLAN.md` 里的动作高度重叠：
- Reddit/HN/PH 发布 → 同时是 GEO 的多源曝光（动作 4）。
- SEO 博客和对比页 → 同时是可引用的事实内容（动作 3）。
- GitHub 示例仓库 → 同时是 AI 可检索的高质量来源（动作 4）。
- 集成生态教程 → 同时增加被 AI 引用的触点（动作 3/4）。

> **一句话总结 GEO**：把产品的事实写成带数字、带出处、客观、可整句引用的样子，
> 然后让这段事实出现在 5+ 个 AI 会检索的高质量平台上。
