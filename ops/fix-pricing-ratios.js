// Vynex — 修正 4 个 model_ratio 计费错误(浏览器控制台执行)
// 在 https://llm-api.vynexcloud.com 任意页面按 F12 → Console → 粘贴 → 回车
// 需 root 登录。读全量 ModelRatio map → 改 4 项 → 写回全量(避免覆盖清空其他模型)
(async () => {
  const uid = localStorage.getItem('vynex-user-id');
  const tok = localStorage.getItem('vynex-access-token');
  if (!uid || !tok) { console.error('未登录 root'); return; }
  const H = { 'Content-Type': 'application/json', 'New-Api-User': uid, 'Authorization': tok };

  // 1) 读当前全部 options(含 ModelRatio / CompletionRatio 完整 JSON map)
  console.log('读取当前定价配置...');
  const opts = await fetch('/api/option/', { headers: H, credentials: 'include' })
    .then(r => r.json()).then(j => j.data || {});
  if (!opts.ModelRatio) { console.error('❌ 读不到 ModelRatio(权限不足?)'); return; }

  const modelRatio = JSON.parse(opts.ModelRatio);
  const compRatio = opts.CompletionRatio ? JSON.parse(opts.CompletionRatio) : {};

  // 2) 修正清单:模型名 → {ratio, comp}(对齐上游官方价)
  //    公式:输入$/1M = ratio×2;输出$/1M = ratio×comp×2
  const fixes = {
    'gemini-3-pro-preview':                       { ratio: 1,    comp: 6   }, // $2/$12
    'gemini-3.1-pro-preview':                     { ratio: 1,    comp: 6   }, // $2/$12
    'gemini-3.1-pro-preview-customtools':         { ratio: 1,    comp: 6   }, // $2/$12
    'deepseek/deepseek-v3.2':                     { ratio: 0.115, comp: 1.5 }, // $0.23/$0.34
    'claude-opus-4-1-20250805':                   { ratio: 2.5,  comp: 5   }, // $5/$25
  };

  console.log('=== 修正前 → 后 ===');
  for (const [m, { ratio, comp }] of Object.entries(fixes)) {
    const beforeR = modelRatio[m], beforeC = compRatio[m];
    console.log(`${m}: ratio ${beforeR}→${ratio}, comp ${beforeC}→${comp}`);
    modelRatio[m] = ratio;
    compRatio[m] = comp;
  }

  // 3) 写回全量 map(必须完整,否则 LoadFromJsonString 会覆盖清空)
  const put = (k, v) => fetch('/api/option/', {
    method: 'PUT', headers: H, credentials: 'include',
    body: JSON.stringify({ key: k, value: JSON.stringify(v) })
  }).then(r => r.json());

  console.log('写入 ModelRatio...');
  console.log(await put('ModelRatio', modelRatio));
  console.log('写入 CompletionRatio...');
  console.log(await put('CompletionRatio', compRatio));

  // 4) 验证
  const after = await fetch('/api/pricing').then(r => r.json()).then(j => j.data || []);
  console.log('=== ✅ 验证(修正后展示价) ===');
  for (const m of Object.keys(fixes)) {
    const row = after.find(x => x.model_name === m);
    if (row) {
      const in$ = (row.model_ratio * 2).toFixed(2);
      const out$ = (row.model_ratio * row.completion_ratio * 2).toFixed(2);
      console.log(`${m}: $${in$}/${out$} per 1M`);
    }
  }
})();
