# Vynex API · UAE / 中东蓝海推广

> 本目录是 UAE(阿联酋首发)本地化推广的全部素材。
> 与上层 `../GEO_STRATEGY.md`(全球 GEO/AI 引擎优化)是正交方向,可并行:
> - GEO_STRATEGY = 面向全球开发者(SEO/GEO/英文社区)
> - 本目录 = 面向 UAE/中东本地市场(USDT 支付/阿语/本地渠道)

## 文件
| 文件 | 用途 |
|---|---|
| `MASTER-PLAN.md` | UAE 全流程方案(七轮收敛 + Week1-4 时间线 + 验收) |
| `acquisition-channels.md` | 中东开发者获客渠道清单(TG/GitHub/X/Reddit) |
| `outreach-scripts.md` | 话术模板(4 渠道 × 多套 + 阿语) |
| `weekly-tracker.md` | Week 2-4 每日执行跟踪表 |

## 已落地到前端代码的改动(2026-06-22)
以下 UAE 本地化改动已直接落到 `vynex-api-homepage` 前端并验证(187 测试全绿 + 构建通过):
- ✅ **OFAC 制裁条款**加入 `/terms`(en/zh/ru 三语)—— UAE ToB 尽调关键
- ✅ **Hero 支付卖点条**:"No foreign credit card needed — pay with USDT, card, or bank"
- ✅ **阿拉伯语(ar)语言支持**:i18n + RTL + 关键文案翻译(hero/wallet/cta/nav/footer)

## 不在本目录(后端已实现,无需素材)
- USDT/Stripe 支付:前后端全栈已在 `vynex-api-homepage` + `new-api-b2b` 实现
- 法律页面:privacy/terms/security 已在前端 `/legal` 路由(en/zh/ru)
- 充值流程:wallet 页 `/api/user/usdt/pay` + `/api/user/stripe/pay` 已就绪

## 执行节奏(对照 MASTER-PLAN.md)
- **Week 1**:前端改动已就绪(本批提交)。你需做:NOWPayments 开户确认 + $5 免费额度机制 + TG 频道
- **Week 2-4**:按 `acquisition-channels.md` + `outreach-scripts.md` 执行,数据填 `weekly-tracker.md`
