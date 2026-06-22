# SEO 内容计划 · 关键词、选题与落地页

> 目标：让全球开发者在搜「openai api 替代 / 便宜 gpt api / openrouter 替代」时能找到 Vynex。
> 策略：**对比型落地页（抢高购买意图词）+ 教程型博客（抢长尾）** 双管齐下，全英文。

---

## 一、核心关键词（按购买意图排序）

### 🔥 高购买意图（优先做落地页）
| 关键词 | 月搜索量级 | 对应落地页 |
|---|---|---|
| `openai api alternative` | 高 | `/openai-api-alternative` |
| `openrouter alternative` | 中高 | `/vs-openrouter` |
| `cheap gpt-4 api` / `cheap openai api` | 高 | `/cheap-openai-api` |
| `claude api alternative` | 中 | `/claude-api-alternative` |
| `gemini api alternative` | 中 | `/gemini-api-alternative` |
| `unified llm api` / `one api for all models` | 中 | `/unified-llm-api` |
| `openai compatible api` | 中 | 首页主关键词 |
| `ai api gateway` / `llm gateway` | 中 | `/llm-gateway` |

### 📚 信息型长尾（博客选题）
- `gpt-4o vs claude sonnet vs gemini pro benchmark 2026`
- `how to switch from openai to claude without rewriting code`
- `openai api pricing explained` / `claude api pricing per 1m tokens`
- `how to use multiple llms in one app`
- `langchain multiple model providers`
- `cursor custom api base url cheap model`
- `openai api not available in my country`
- `best api for ai agents 2026`

---

## 二、必做的对比型落地页（转化最高）

这些页面是 API 中转站最赚钱的 SEO 资产，每个都针对一个明确购买意图：

### 1. `/vs-openrouter`（最重要）
- 标题：`Vynex vs OpenRouter — OpenAI-compatible LLM API compared`
- 内容：诚实对比表（模型、价格、延迟、地区、支付、中文支持）。
- **关键**：别贬低对手，客观对比 + 突出你的真实优势（价格 / 地区 / 中文 / 新模型速度）。

### 2. `/openai-api-alternative`
- 标题：`The OpenAI API alternative that also calls Claude & Gemini`
- 卖点：OpenAI 兼容、一个 key、价格优势、无地区限制。

### 3. `/cheap-openai-api`
- 标题：`Cheap OpenAI-compatible API — pay per token, no lock-in`
- 价格对比表：GPT-5.5 / Claude / Gemini 的 input/output 单价，vs 官方。

### 4. `/openai-api-not-available-in-your-country`
- 卖点：地区受限开发者的解法（隐性杀手锏，转化极高）。

---

## 三、博客 / 视频选题清单（每周 2–3 篇）

### 对比与选购类（带转化）
1. `GPT-5.5 vs Claude Opus 4.8 vs Gemini 3.1 Pro: price & quality compared (2026)`
2. `OpenRouter vs Vynex vs going direct: which LLM API in 2026?`
3. `The cheapest way to call Claude / GPT / Gemini in 2026`
4. `7 OpenAI API alternatives worth trying`

### 教程类（带代码，长尾流量王）
5. `How to call GPT, Claude, and Gemini from one endpoint (Python)`
6. `Use cheaper models in Cursor with a custom base URL`
7. `Build an LLM fallback chain across providers in 20 lines`
8. `LangChain with a custom OpenAI-compatible endpoint`
9. `Add Claude/Gemini to your app without changing your OpenAI code`

### 概念 / 趋势类（建权威）
10. `What is an LLM gateway, and when do you need one?`
11. `LLM routing: how to pick the right model per request`
12. `Per-token pricing explained for developers`

> 每篇博客：带可复制代码 + 内链到 `/pricing` 和对应落地页 + CTA「Get a free key」。
> 同步发到 Dev.to / Hashnode / Medium，末尾链接回主站。

---

## 四、YouTube 视频选题（长尾极强）
1. `Call GPT, Claude & Gemini from ONE endpoint (3 minutes)`
2. `Vynex vs OpenRouter: honest comparison`
3. `Use the cheapest AI model in Cursor (step by step)`
4. `Switch from OpenAI to any model without rewriting code`

> 一条好教程能吃几个月长尾流量，ROI 极高。

---

## 五、SEO 执行要点

- **技术 SEO**：每个页面有 title / meta description / OG 图；URL 用英文短横线；加 `schema.org` 的 SoftwareApplication / FAQ 结构化数据。
- **内链**：博客 ↔ 落地页 ↔ 文档之间互相链接。
- **外链**：GitHub README、Dev.to、AI 目录、被收录的工具文档都是外链来源。
- **速度**：首页 LCP < 2.5s（开发者对慢站零容忍）。
- **多语言（已支持 en/zh/ru，默认 en）**：关键是让爬虫索引到各语言版本 —— URL 带语言前缀 + `hreflang` + 关键页 SSR/SSG（见 `00_OVERVIEW.md` 硬伤 1）。可考虑再加西语/日语/葡萄牙语覆盖拉美与日韩市场。
- **监控**：用 Ahrefs 或 Semrush 跟踪关键词排名和竞争对手外链。
