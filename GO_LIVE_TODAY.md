# Vynex API 推广作战手册 · 今天就开始执行

> 代码和落地页已就绪。这份手册是**今天、本周、本月**要在外面做的真实推广动作。
> 每条都有:去哪做、复制什么话术、填什么链接、预期效果。
> 按优先级从上到下执行,前 5 条今天就能做完。

---

## 🚨 第 0 步:先把落地页推上线(前置,未完成则其他都白做)

代码已写好(5 个 SEO 落地页 + 内链),但还没推送。在终端执行:
```bash
cd /Users/mabaojin/Desktop/vynexlimited/vynex-api-homepage
git add -A
git commit -m "feat(seo): add 5 high-intent comparison landing pages + internal links"
git push origin main
```
等 CI 跑完(~2 分钟),确认这 5 个链接能打开:
- https://llm-api.vynexcloud.com/vs-openrouter
- https://llm-api.vynexcloud.com/openai-api-alternative
- https://llm-api.vynexcloud.com/cheap-openai-api

---

## 🔥 第一梯队:今天做完(2-4 小时,直接拿流量)

### 1. 提交到 Google Search Console(让 Google 收录)
**为什么**:不提交,Google 可能要几周才自然发现你;提交 sitemap 后几天内开始收录。
**怎么做**:
1. 打开 https://search.google.com/search-console
2. 用 Google 账号登录,添加资源 → 输入 `https://llm-api.vynexcloud.com/`(带 https 和末尾斜杠)
3. 验证所有权 → 选 DNS 验证 → 在 Cloudflare 加一条 TXT 记录(页面会给你具体值)
4. 验证通过后 → 左侧"站点地图" → 提交 `https://llm-api.vynexcloud.com/sitemap.xml`
5. 等 Google 处理(通常 1-3 天开始抓取)

**预期**:1-2 周后 Google 搜 "vynex api" 能找到你;1-3 个月开始有自然搜索流量。

### 2. 提交到 Bing Webmaster Tools(微软流量 + ChatGPT 搜索靠它)
**为什么**:Bing 索引喂给 ChatGPT 搜索和 Copilot,GEO 价值高。
**怎么做**:
1. 打开 https://www.bing.com/webmasters
2. 登录 → 添加站点 `https://llm-api.vynexcloud.com/`
3. 可直接导入 GSC 验证(如果已验证)或同样用 DNS
4. 提交 sitemap: `https://llm-api.vynexcloud.com/sitemap.xml`

### 3. 提交 llms.txt 给 AI 搜索引擎(GEO 核心)
**为什么**:llms.txt 是给 AI 爬虫的索引,但 AI 引擎不会主动来抓,你要主动提交。
**怎么做**:
- **Perplexity**: https://www.perplexity.ai/hub → 提交你的站点让 Perplexity 收录
- 手动在各 AI 平台搜你的品牌词 "Vynex API",看是否被提及;没被提及时,在官网/blog 发可被引用的内容
- 每周去 ChatGPT/Perplexity/Gemini 问一遍: "best openai api alternative 2026"、"openrouter alternative" —— 看 Vynex 出没出现,这是 GEO 体检

### 4. Reddit 发帖(最快拿真实开发者反馈 + 长尾流量)
**去哪**:
- r/LocalLLaMA(30万+开发者,最对口)
- r/OpenAI(讨论 API 的主阵地)
- r/SideProject / r/SaaS(发布新品)
- r/programming(慎发,要求高质量)

**怎么发**:用 `launch/copy-bundle.md` 里的 Reddit 版话术,**重点突出"OpenAI 兼容 + 一个 key 调所有模型 + 透明定价"**。
**铁律**:别营销腔,讲"我解决了什么问题"。标题示例:
- `[I built] An OpenAI-compatible API that also calls Claude and Gemini from one key`
- `Tired of juggling multiple LLM API accounts? Here's a single-endpoint gateway`

**注意**:Reddit 各版有发帖间隔和账号 karma 要求,新号直接发广告会被删。建议先在版里互动几天(回答别人问题)再发。

### 5. Hacker News · Show HN(一波流,运气好上首页能带几百到几千 IP)
**怎么发**:用 `launch/copy-bundle.md` 里的 Show HN 话术。
**时机**:太平洋时间周二/三上午 8-10 点(HN 流量高峰)。
**注意**:HN 用户极其挑剔,任何夸大/广告腔都会被踩。务必诚实,准备好被问尖锐技术问题(延迟、怎么路由、数据合规)。如果你不想被问,就别发。

---

## 📈 第二梯队:本周做完(持续流量管道)

### 6. AI 工具目录批量提交(低 effort 稳流量)
用 `seo/directories-and-integrations.md` 里的提交模板,挨个提交到这些目录(优先级排序):
- ⭐⭐⭐ There's An AI For That (https://theresanaiforthat.com/) — 最大 AI 目录
- ⭐⭐⭐ Futurepedia (https://www.futurepedia.io/)
- ⭐⭐⭐ Toolify.ai (https://www.toolify.ai/)
- ⭐⭐ devHuntr (https://devhuntr.com/) — 开发者工具专属
- ⭐⭐ OpenTools (https://opentools.ai/)
- ⭐ AlternativeTo (https://alternativeto.net/) — 抢 "OpenAI / OpenRouter alternative" 词条
- ⭐ Product Hunt (既是发布也是目录)

**每个目录准备好的材料**:
- Name: Vynex API
- Tagline: One OpenAI-compatible endpoint for every frontier model.
- Category: Developer Tools / API / AI / LLM
- Website: https://llm-api.vynexcloud.com/
- Logo: 用 `vynex-api-homepage/public/favicon.png` 或做张 512x512 的
- 截图:首页 + 定价页 + playground 各一张

### 7. 在 AlternativeTo 抢 "alternative" 词条(高 GEO 价值)
**为什么**:用户搜 "openai alternative" 时 AlternativeTo 排很前;而且 AI 引擎爱引用它的对比。
**怎么做**:
1. 注册 https://alternativeto.net/
2. 搜 "OpenAI" → 在其 alternatives 里加 Vynex API
3. 搜 "OpenRouter" → 同样加
4. 填好描述,tagline 用: `OpenAI-compatible unified LLM API`

### 8. GitHub:完善组织/仓库主页(GEO + 开发者信任)
**为什么**:开发者搜到你会先看 GitHub;AI 引擎高度信任 GitHub 内容。
**怎么做**:
1. https://github.com/vynexlimited — org 描述放产品定义段(见 `geo/assets/citable-definition.md`)
2. 创建一个公开仓库 `vynex-api-homepage`(或 `vynex-api-docs`),README 放完整产品介绍 + 快速开始代码
3. 仓库 About 里加网站链接 + tagline
4. 用 `github-sdk/README.md` 里的内容做一个 SDK 仓库(哪怕只是 wrapper,开发者会 star)

---

## 🎯 第三梯队:本月持续做(内容 + 社区)

### 9. 每周写 1-2 篇技术博客(SEO 长尾 + GEO 引用源)
选题(见 `seo/content-plan.md`),优先这几个高价值题:
- `GPT-5.5 vs Claude Opus 4.8 vs Gemini 3.1 Pro: price & quality compared (2026)` — 带真实数字,AI 爱引用
- `How to switch from OpenAI to Claude without rewriting code` — 教程类,带产品
- `OpenAI API pricing explained (2026)` — 信息型,卡价格相关搜索

**发在哪**:
- 自己的 blog(如果没有,在 homepage 加 `/blog` 路由,或用 Hashnode/Dev.to 免费建)
- Dev.to (https://dev.to) — 开发者社区,自带流量
- Medium 转载

### 10. 每周 GEO 体检 + 调整
每周一花 15 分钟,去 ChatGPT / Perplexity / Gemini 问这些问题,记录 Vynex 是否被提及:
- `What's a good alternative to OpenAI API?`
- `Best unified LLM API?`
- `OpenRouter alternatives?`
- `Cheap GPT-5 API?`

没被提及是正常的(早期)。坚持做内容 + 目录 + 社区提及,2-3 个月后会开始被 AI 引擎"记住"。

---

## 📊 怎么衡量进展(每周看一次)

| 指标 | 去哪看 | 目标(3 个月) |
|---|---|---|
| Google 收录页数 | Search Console → 覆盖范围 | > 15 页 |
| 自然搜索点击 | Search Console → 效果 | 每周 > 50 次展示 |
| Bing 收录 | Bing Webmaster | > 10 页 |
| AI 引擎提及 | 手动问 ChatGPT/Perplexity | 至少 1 个问题里出现 |
| 目录收录数 | 各目录后台 | > 5 个 |
| 注册用户来源 | 后台(加 UTM) | 非直接流量 > 20% |

---

## ⚠️ 三条不能犯的错

1. **别造假数据**:GEO 的基础是真实。价格、模型数、延迟都要真实,AI 引擎发现造假会把你从推荐剔除,社区也会反噬。
2. **别营销腔**:开发者社区(Reddit/HN/Twitter)一眼识破广告。讲技术、讲解决的问题、诚实对比。
3. **别只发一次**:推广是持续动作。目录每月补交,内容每周产出,社区每天互动 15 分钟。一次性发帖的流量 3 天就没了。

---

## 📁 本手册用到的素材文件

- `launch/copy-bundle.md` — PH/HN/Reddit 发帖话术(已修正合规声明)
- `seo/content-plan.md` — 博客选题 + 关键词
- `seo/directories-and-integrations.md` — 目录提交清单 + 模板
- `geo/GEO_STRATEGY.md` — GEO 完整策略
- `geo/assets/citable-definition.md` — 可被 AI 整句引用的产品定义
