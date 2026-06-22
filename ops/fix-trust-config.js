// Vynex — 修复 new-api 后台信任硬伤(浏览器控制台执行)
// 用法:在 https://llm-api.vynexcloud.com 任意页面按 F12 → Console → 粘贴整段 → 回车
// 需已用 root 账号登录。token 自动从 localStorage 读取,不离开你的浏览器。
(async () => {
  const uid = localStorage.getItem('vynex-user-id');
  const tok = localStorage.getItem('vynex-access-token');
  if (!uid || !tok) {
    console.error('❌ 未检测到登录凭证。请先用 root 账号登录 https://llm-api.vynexcloud.com 再运行。');
    return;
  }
  const h = {
    'Content-Type': 'application/json',
    'New-Api-User': uid,
    'Authorization': tok,
  };
  const set = (k, v) =>
    fetch('/api/option/', { method: 'PUT', headers: h, credentials: 'include', body: JSON.stringify({ key: k, value: v }) })
      .then(r => r.json());
  console.log('SystemName →', await set('SystemName', 'Vynex API'));
  console.log('Logo       →', await set('Logo', 'https://llm-api.vynexcloud.com/favicon.svg'));
  console.log('FooterHTML →', await set('FooterHTML', '<a href="https://llm-api.vynexcloud.com/" style="color:inherit;text-decoration:none">Vynex API</a> · One OpenAI-compatible endpoint for every frontier model.'));
  const v = await fetch('/api/status').then(r => r.json());
  console.log('✅ VERIFY  → system_name:', v.data.system_name, '| logo:', v.data.logo, '| footer:', (v.data.footer_html || '').slice(0, 40));
})();
