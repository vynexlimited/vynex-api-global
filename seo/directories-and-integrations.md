# AI 工具目录提交清单 + 集成生态清单

> 目录 = 低 effort 稳流量；集成生态 = 最高杠杆的长期管道。两块都要做。

---

# 一、AI 工具目录提交清单（批量提交）

> 每个目录提交一次，准备好：产品名、一句 tagline、详细描述、Logo、截图、分类（Developer Tools / API / AI）。
> 打勾推进。优先级标 ⭐。

## 必交（开发者 / AI 主流目录）
- ⭐⭐⭐ [There's An AI For That](https://theresanaiforthat.com/) — 最大 AI 目录
- ⭐⭐⭐ [Futurepedia](https://www.futurepedia.io/)
- ⭐⭐⭐ [Toolify.ai](https://www.toolify.ai/)
- ⭐⭐⭐ [AI Tool Guru](https://www.aitoolguru.com/)
- ⭐⭐ [OpenTools](https://opentools.ai/)
- ⭐⭐ [TopAI.tools](https://topai.tools/)
- ⭐⭐ [AICenter](https://aicenter.ai/)
- ⭐⭐ [aitools.fyi](https://aitools.fyi/)
- ⭐ [Insidr AI](https://insidr.ai/)
- ⭐ [aitoolsclub.com](https://aitoolsclub.com/)
- ⭐ [FutureTools](https://www.futuretools.io/)
- ⭐ [Startup AI Tools](https://startupai.tools/)

## 开发者向目录
- ⭐⭐⭐ [devHuntr](https://devhuntr.com/) — 开发者工具专属
- ⭐⭐ [Awesome Self-Hosted 相关 awesome 列表]（GitHub）
- ⭐ [Product Hunt](https://www.producthunt.com/)（既是发布也是目录）
- ⭐ [Slant](https://www.slant.co/) / [AlternativeTo](https://alternativeto.net/) — 抢「OpenAI / OpenRouter alternative」词条
- ⭐ [SaaS directories: BetaList / SaasHub / Toolscout]

## 提交模板（通用）
```
Name: Vynex API
Tagline: One OpenAI-compatible endpoint for every frontier model.
Category: Developer Tools / API / AI / LLM
Description: Vynex API is a unified LLM gateway. Call GPT, Claude, Gemini,
DeepSeek, Qwen and GLM from a single OpenAI-compatible /v1 endpoint — keep
your existing OpenAI SDK, change the base_url, and switch models by name.
Per-token transparent pricing. Streaming and tool calling supported.
**Pay with USDT** (TRC20/ERC20) — no foreign credit card needed, built for
devs in MENA/SEA/LatAm where OpenAI/Anthropic cards get declined.
Website: https://llm-api.vynexcloud.com/
Pricing: [Free tier / Pay-as-you-go]
```

> 别只交一次。每月新出一批目录就补交，外链和曝光持续累积。

---

# 二、集成生态清单（最高杠杆 — 把 Vynex 嵌进开发者工作流）

> 这些工具/框架都允许「自定义 OpenAI 兼容 base_url」。让 Vynex 出现在它们的文档/配置里 = 持续免费流量。
> 策略：① 自己写接入教程（引流）② 给官方仓库提 PR 加 Vynex 为推荐 provider ③ 在文档站建 `/integrations/<tool>` 页面。

## A. AI 编程客户端（流量巨大）
| 工具 | 接入方式 | 优先级 |
|---|---|---|
| **Cursor** | Settings → Models → Override OpenAI base URL | ⭐⭐⭐ |
| **Cline** | API Provider → OpenAI Compatible → 填 base_url | ⭐⭐⭐ |
| **Continue** | config → model provider (openai) → base_url | ⭐⭐⭐ |
| **Roo Code** | OpenAI-compatible provider | ⭐⭐ |
| **Aider** | `--openai-api-base` | ⭐⭐ |

## B. AI 聊天 / 客户端
| 工具 | 接入方式 | 优先级 |
|---|---|---|
| **Open WebUI** | Settings → Connections → OpenAI API | ⭐⭐⭐ |
| **LobeChat** | 自定义 OpenAI provider | ⭐⭐⭐ |
| **ChatBox** | OpenAI API 自定义 host | ⭐⭐ |
| **NextChat** | OpenAI base URL | ⭐⭐ |
| **AnythingLLM** | OpenAI-compatible | ⭐⭐ |

## C. 框架 / Agent 平台
| 工具 | 接入方式 | 优先级 |
|---|---|---|
| **LangChain** | `ChatOpenAI(base_url=...)` | ⭐⭐⭐ |
| **LlamaIndex** | OpenAI-like 指向 base_url | ⭐⭐⭐ |
| **Dify** | 模型供应商 → OpenAI-API-compatible | ⭐⭐⭐ |
| **FastGPT** | OpenAI 兼容渠道 | ⭐⭐ |
| **n8n** | OpenAI node → custom base URL | ⭐⭐ |
| **Flowise / Langflow** | OpenAI custom endpoint | ⭐⭐ |
| **CrewAI / AutoGen** | 通过 LiteLLM/OpenAI 接入 | ⭐⭐ |

## D. 网关 / 路由层（生态卡位）
- **LiteLLM**：在 litellm 的 model cost / provider 配置里登记 Vynex。
- **Helicone / Langfuse**：可观测性工具的 provider 列表。

## 执行节奏
1. **第 1 周**：先做 Cursor / Cline / LangChain / LobeChat / Open WebUI 五个最热门的接入教程（博客 + GitHub examples），这是流量大头。
2. **第 2–4 周**：补齐其余客户端/框架的教程，逐个建 `/integrations/<tool>` 落地页。
3. **持续**：给官方仓库提 PR，争取被列进「支持的 provider」文档（这是真正的生态卡位）。

> 每接通一个主流工具，就是一条不会断的流量管道。这是 API 中转站长期能跑赢的关键。
