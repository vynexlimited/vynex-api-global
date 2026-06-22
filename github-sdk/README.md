<div align="center">

# Vynex API

### One OpenAI-compatible endpoint for every frontier model.

Call GPT, Claude, Gemini, DeepSeek, Qwen and GLM from a single `/v1` endpoint.
Keep your existing OpenAI SDK — just change the `base_url`.

[Website](https://llm-api.vynexcloud.com/) · [Docs](https://llm-api.vynexcloud.com/docs/) · [Pricing](https://llm-api.vynexcloud.com/pricing) · [Get API Key](https://llm-api.vynexcloud.com/register)

</div>

---

## Why Vynex?

- **One key, one endpoint.** GPT-5.x, Claude Opus/Sonnet/Haiku, Gemini 3.x, DeepSeek, Qwen, GLM — all behind a single OpenAI-compatible `/v1`.
- **Zero migration.** If your code works with the OpenAI SDK, it works with Vynex. Change the `base_url` and you're done.
- **Swap models in one line.** Switch providers by changing the `model` field — no re-integration.
- **Transparent per-token pricing.** See [Pricing](https://llm-api.vynexcloud.com/pricing).
- **Streaming, function/tool calling, structured output** — the OpenAI params you already know.

---

## Quick start

### 1. Get an API key

Create a key at [llm-api.vynexcloud.com/register](https://llm-api.vynexcloud.com/register).

```bash
export VYNEX_API_KEY="sk-..."
```

### 2. Point your OpenAI client at Vynex

#### Python

```bash
pip install openai
```

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-...",                       # or os.environ["VYNEX_API_KEY"]
    base_url="https://llm-api.vynexcloud.com/v1",
)

response = client.chat.completions.create(
    model="claude-opus-4-8",
    messages=[{"role": "user", "content": "Say hello in 5 languages."}],
)
print(response.choices[0].message.content)
```

#### Streaming

```python
stream = client.chat.completions.create(
    model="gpt-5.5",
    messages=[{"role": "user", "content": "Write a haiku about APIs."}],
    stream=True,
)
for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="", flush=True)
```

#### Node.js / TypeScript

```bash
npm install openai
```

```ts
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.VYNEX_API_KEY,
  baseURL: "https://llm-api.vynexcloud.com/v1",
});

const res = await client.chat.completions.create({
  model: "gemini-3.1-pro-preview",
  messages: [{ role: "user", content: "Hello!" }],
});
console.log(res.choices[0].message.content);
```

#### cURL

```bash
curl https://llm-api.vynexcloud.com/v1/chat/completions \
  -H "Authorization: Bearer $VYNEX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.5",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

---

## Function / tool calling

```python
response = client.chat.completions.create(
    model="claude-sonnet-4-6",
    messages=[{"role": "user", "content": "What's the weather in Tokyo?"}],
    tools=[{
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a city",
            "parameters": {
                "type": "object",
                "properties": {"city": {"type": "string"}},
                "required": ["city"],
            },
        },
    }],
)
```

---

## Use Vynex with your favorite tools

Because Vynex speaks the OpenAI API, it drops into most AI tools that accept a custom `base_url`:

- **Cursor / Cline / Continue / Roo Code** — set the OpenAI base URL to `https://llm-api.vynexcloud.com/v1`
- **Open WebUI / LobeChat / ChatBox / NextChat** — add as a custom OpenAI-compatible provider
- **LangChain / LlamaIndex** — use the OpenAI integration with our `base_url`
- **Dify / FastGPT / n8n** — configure as an OpenAI provider

See the [`/examples`](./examples) folder for copy-paste configs.

---

## Available models (highlights)

> Full, always-up-to-date list: `GET /v1/models` or the [Docs](https://llm-api.vynexcloud.com/docs/).

| Family | Models |
|---|---|
| OpenAI | `gpt-5.5`, `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.4-nano` |
| Anthropic | `claude-opus-4-8`, `claude-sonnet-4-6`, `claude-haiku-4-5-20251001` |
| Google | `gemini-3.1-pro-preview`, `gemini-3-pro-preview`, `gemini-2.5-pro`, `gemini-2.5-flash` |
| Open | `deepseek/deepseek-v3.2`, `qwen3.5-plus`, `GLM-5` |

> Replace model names with whatever is currently returned by `/v1/models` — new models are added frequently.

---

## Error handling & limits

Standard OpenAI-style HTTP status codes apply:

| Status | Meaning |
|---|---|
| `401` | Invalid or missing API key |
| `429` | Rate limit exceeded — retry with backoff |
| `5xx` | Upstream error — retry or fall back to another model |

Tip: build a fallback chain across model families for resilience.

---

## Security & privacy

- API keys are encrypted at rest.
- We do **not** log the content of your prompts or responses. [确认后保留，如不符请改]
- See our [Privacy Policy](https://llm-api.vynexcloud.com/privacy) and [Terms](https://llm-api.vynexcloud.com/terms).

---

## Community

- 🐛 [Report issues](../../issues) — bugs, feature requests, model requests
- 💬 [Join our Discord](https://discord.gg/your-invite) — support and updates
- 🐦 [Follow on X](https://x.com/your-handle)

## Contributing

PRs welcome — especially example configs for new tools and frameworks. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT

<div align="center">

**[Get your API key →](https://llm-api.vynexcloud.com/register)**

Built with ❤️ by the Vynex team.

</div>
