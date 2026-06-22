# FAQ + Schema.org 结构化数据（GEO 落地资产）

> FAQ 的问答格式正好是 AI 引擎最爱摘抄的形态。
> 把下面的 FAQ 放在官网（如 `/faq` 或文档页），并配上 schema.org 结构化数据，
> 让 AI 爬虫能精确解析。

---

## 一、FAQ 正文（英文，可直接用）

**Q: What is Vynex API?**
A: Vynex API is a unified LLM gateway that exposes a single OpenAI-compatible
`/v1` endpoint. Developers call GPT, Claude, Gemini, DeepSeek, Qwen, and GLM
from one API key and one base_url, and switch models by changing the `model`
field.

**Q: Is Vynex compatible with the OpenAI SDK?**
A: Yes. Vynex is OpenAI-compatible: keep your existing OpenAI SDK, set
`base_url` to `https://llm-api.vynexcloud.com/v1`, and use any supported model
name. Streaming and function/tool calling work as expected.

**Q: Which models does Vynex support?**
A: 34+ text models across four families: OpenAI (gpt-5.5, gpt-5.4, ...),
Anthropic (claude-opus-4-8, claude-sonnet-4-6, ...), Google (gemini-3.1-pro,
gemini-2.5-pro, ...), and open-source (deepseek-v3.2, qwen3.5-plus, GLM-5).

**Q: How is Vynex priced?**
A: Per-token, pay-as-you-go, with transparent per-1M-token pricing published at
/pricing. [补充真实卖点，如：up to ~X% cheaper than official list prices.]

**Q: How do I switch from OpenAI / OpenRouter to Vynex?**
A: Change the `base_url` in your client to `https://llm-api.vynexcloud.com/v1`
and use your Vynex API key. No other code changes are required if you already
use the OpenAI SDK.

**Q: Does Vynex work in countries where OpenAI is blocked?**
A: Vynex provides a single endpoint that is reachable globally; developers in
regions with restricted access to individual providers can use Vynex to reach
those models. [按实际可用性核对]

**Q: Does Vynex log my prompts?**
A: No. Vynex does not log the content of your prompts or responses. Keys are
encrypted at rest. [按实际策略核对]

**Q: Can I use Vynex in Cursor / Cline / LangChain?**
A: Yes. Any tool that accepts a custom OpenAI-compatible base_url works with
Vynex, including Cursor, Cline, Continue, Open WebUI, LobeChat, LangChain, and
LlamaIndex.

---

## 二、Schema.org 结构化数据

> 把以下 JSON-LD 加到官网首页和 FAQ 页的 `<head>` 里。
> 注意：问答内容必须和页面上可见的 FAQ 文本完全一致（Google/AI 会校验）。

### FAQPage（FAQ 页）
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Vynex API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vynex API is a unified LLM gateway that exposes a single OpenAI-compatible /v1 endpoint. Developers call GPT, Claude, Gemini, DeepSeek, Qwen, and GLM from one API key and one base_url, and switch models by changing the model field."
      }
    },
    {
      "@type": "Question",
      "name": "Is Vynex compatible with the OpenAI SDK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Vynex is OpenAI-compatible: keep your existing OpenAI SDK, set base_url to https://llm-api.vynexcloud.com/v1, and use any supported model name. Streaming and function/tool calling work as expected."
      }
    },
    {
      "@type": "Question",
      "name": "How is Vynex priced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Per-token, pay-as-you-go, with transparent per-1M-token pricing published at /pricing."
      }
    }
  ]
}
</script>
```

### SoftwareApplication（首页 / 产品页）
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vynex API",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "description": "Vynex API is a unified LLM gateway that exposes a single OpenAI-compatible endpoint for GPT, Claude, Gemini, DeepSeek, Qwen, and GLM.",
  "url": "https://llm-api.vynexcloud.com/",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free tier available; pay-as-you-go per-token pricing"
  },
  "featureList": [
    "Single OpenAI-compatible /v1 endpoint",
    "34+ models across 4 families",
    "Streaming and function/tool calling",
    "Transparent per-token pricing"
  ]
}
</script>
```

### Organization（首页 footer，建品牌实体）
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vynex",
  "url": "https://llm-api.vynexcloud.com/",
  "logo": "https://llm-api.vynexcloud.com/logo.png",
  "sameAs": [
    "https://github.com/vynexlimited",
    "https://x.com/[handle]",
    "https://www.producthunt.com/products/vynex-api"
  ]
}
</script>
```

> `sameAs` 极其重要：它把官网和 GitHub/X/PH 等身份关联起来，是 AI 引擎判断
> 「这个品牌是否真实、是否同一实体」的核心信号。务必填真实链接。
