// Sunwood CRM 全局导航与图标库
// 每个页面在 </body> 前引入：<script src="nav.js"></script>

(function () {
  const icons = {
    migration: '<path d="M21 12l-6-3v-4l-6 3-6-3v11l6 3 6-3 6 3V9z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 9l-6 3" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    talent: '<circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11 8v3l2 2M20 20l-3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    recruitment: '<path d="M9 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9.5 16c1.5 1.5 4.5 1.5 6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    company: '<path d="M4 20V10l6-2v12M10 8h10v12H10V8z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M13 11h4M13 14h4M13 17h4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    project: '<path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 9h10M7 12h7M7 15h5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    client: '<circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    channel: '<circle cx="6" cy="12" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="18" cy="6" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="18" cy="18" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 11l8-4M8 13l8 4" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    copywriting: '<path d="M6 4h12v16H6z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 8h8M8 12h6M8 16h4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 2l3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    parsing: '<path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 9h10M7 12h10M7 15h5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 15l2 2 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    training: '<path d="M4 7l8-3 8 3-8 3-8-3z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M4 7v6l8 3 8-3V7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 22V16" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    performance: '<path d="M4 20h16M4 16h3v4H4zM9 12h3v8H9zM14 8h3v12h-3zM19 4h2v16h-2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    hr: '<circle cx="9" cy="8" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="15" cy="8" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 18c0-2.8 2.2-5 5-5s5 2.2 5 5M14 18c0-2.8 2.2-5 5-5s5 2.2 5 5" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L8.3 10a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.7 2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    clock: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 7v5l3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    location: '<path d="M12 21s-7-7.4-7-12a7 7 0 0 1 14 0c0 4.6-7 12-7 12z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    home: '<path d="M4 10l8-6 8 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 22V12h6v10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    close: '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    plus: '<path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    search: '<circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M20 20l-3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    robot: '<rect x="6" y="7" width="12" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="9.5" cy="11" r="1" fill="currentColor"/><circle cx="14.5" cy="11" r="1" fill="currentColor"/><path d="M10 15h4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M12 7V5M8 5h8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    sparkle: '<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M17 10l4-2v8l-4-2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    share: '<circle cx="18" cy="6" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="6" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="18" cy="18" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8.5 10.5l7-3M8.5 13.5l7 3" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    star: '<path d="M12 3l2.8 6.2L21 10l-5 4.5L17 21 12 17.5 7 21l1-6.5L3 10l6.2-.8z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    report: '<path d="M4 4h12l4 4v12H4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M16 4v4h4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 13h8M8 17h5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    match: '<circle cx="9" cy="8" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="15" cy="8" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 18c0-2.2 1.8-4 4-4s4 1.8 4 4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M14 18c0-2.2 1.8-4 4-4s4 1.8 4 4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 12l-1 1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    investigate: '<path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 9h3M7 12h5M7 15h2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="11" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M17.5 12.5l2 2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'
  };

  // 注入 SVG 图标库（供页面内 <use> 引用）
  const sprite = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  sprite.setAttribute('style', 'display:none;');
  sprite.setAttribute('aria-hidden', 'true');
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  Object.keys(icons).forEach(function (key) {
    const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
    symbol.setAttribute('id', 'icon-' + key);
    symbol.setAttribute('viewBox', '0 0 24 24');
    symbol.innerHTML = icons[key];
    defs.appendChild(symbol);
  });
  sprite.appendChild(defs);
  document.body.appendChild(sprite);

  // 当前页面文件名
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  // 导航链接数据
  const modules = [
    { label: '客户管理', href: 'clients.html' },
    { label: '公司管理', href: 'companies.html' },
    { label: '项目管理', href: 'projects.html' },
    { label: '渠道管理', href: 'channels.html' },
    { label: '内部 AI 工具', href: 'ai-internal.html' },
    { label: '外部 AI 报告', href: 'ai-external.html' },
    { label: '培训', href: 'training.html' },
    { label: '绩效', href: 'performance.html' },
    { label: 'HR', href: 'hr.html' }
  ];

  const activeClass = function (href) {
    return currentPage === href ? 'active' : '';
  };

  const navHtml =
    '<nav id="sunwood-nav">' +
      '<div class="nav-inner">' +
        '<div class="nav-left">' +
          '<a href="index.html" class="logo">SUNWOOD <span>CONSULTING</span></a>' +
          '<a href="index.html" class="nav-home ' + activeClass('index.html') + '">' +
            '<svg class="nav-icon"><use href="#icon-home"></use></svg>首页' +
          '</a>' +
        '</div>' +
        '<button class="nav-toggle" aria-label="菜单" onclick="window.toggleSunwoodNav()">' +
          '<svg class="nav-icon"><use href="#icon-menu"></use></svg>' +
        '</button>' +
        '<div class="nav-menu" id="sunwood-nav-menu">' +
          '<a href="index.html#about" class="nav-link">关于我们</a>' +
          '<div class="nav-group">' +
            '<span>服务产品</span>' +
            '<div class="dropdown">' +
              '<a href="index.html#services">移民与教育服务</a>' +
              '<a href="index.html#services">高管寻访</a>' +
              '<a href="index.html#services">招聘流程外包</a>' +
              '<a href="index.html#services">灵活用工</a>' +
              '<a href="index.html#services">人力资源咨询</a>' +
            '</div>' +
          '</div>' +
          '<div class="nav-group">' +
            '<span>业务模块</span>' +
            '<div class="dropdown">' +
              '<a href="clients.html">客户管理</a>' +
              '<a href="companies.html">公司管理</a>' +
              '<a href="projects.html">项目管理</a>' +
              '<a href="channels.html">渠道管理</a>' +
            '</div>' +
          '</div>' +
          '<div class="nav-group">' +
            '<span>AI 能力</span>' +
            '<div class="dropdown">' +
              '<a href="ai-internal.html">对内 AI 工具</a>' +
              '<a href="ai-external.html">对外 AI 报告</a>' +
            '</div>' +
          '</div>' +
          '<div class="nav-group">' +
            '<span>内部管理</span>' +
            '<div class="dropdown">' +
              '<a href="training.html">培训</a>' +
              '<a href="performance.html">绩效</a>' +
              '<a href="hr.html">HR</a>' +
            '</div>' +
          '</div>' +
          '<a href="index.html#contact" class="nav-link">联系</a>' +
          '<a href="assessment.html" class="nav-cta ' + activeClass('assessment.html') + '">免费评估</a>' +
          '<a href="index.html#auth" class="nav-login">登录 / 注册</a>' +
        '</div>' +
      '</div>' +
    '</nav>';

  const style = document.createElement('style');
  style.textContent =
    '#sunwood-nav{background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.06);position:sticky;top:0;z-index:100;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}' +
    '#sunwood-nav .nav-inner{max-width:1100px;margin:0 auto;padding:0 20px;display:flex;justify-content:space-between;align-items:center;height:64px}' +
    '#sunwood-nav .nav-left{display:flex;align-items:center;gap:20px}' +
    '#sunwood-nav .logo{font-size:1.1rem;font-weight:700;color:#1e3a5f;letter-spacing:1px;line-height:1.1}' +
    '#sunwood-nav .logo span{font-weight:400;color:#888;font-size:.65rem;display:block;letter-spacing:0}' +
    '#sunwood-nav .nav-home{display:flex;align-items:center;gap:6px;color:#444;font-size:.9rem;font-weight:500;padding:6px 12px;border-radius:6px}' +
    '#sunwood-nav .nav-home:hover{background:#f1f5f9;color:#1e3a5f}' +
    '#sunwood-nav .nav-home.active{background:#e0f2fe;color:#1e3a5f}' +
    '#sunwood-nav .nav-icon{width:18px;height:18px;vertical-align:middle}' +
    '#sunwood-nav .nav-menu{display:flex;align-items:center;gap:8px}' +
    '#sunwood-nav .nav-link{padding:8px 12px;color:#444;font-size:.9rem;font-weight:500;border-radius:6px}' +
    '#sunwood-nav .nav-link:hover{background:#f1f5f9;color:#1e3a5f}' +
    '#sunwood-nav .nav-group{position:relative}' +
    '#sunwood-nav .nav-group > span{display:block;padding:8px 12px;color:#444;font-size:.9rem;font-weight:500;cursor:pointer;border-radius:6px}' +
    '#sunwood-nav .nav-group > span:hover{background:#f1f5f9;color:#1e3a5f}' +
    '#sunwood-nav .dropdown{display:none;position:absolute;top:100%;left:0;background:#fff;min-width:170px;box-shadow:0 8px 20px rgba(0,0,0,.1);border-radius:8px;padding:8px 0;margin-top:4px}' +
    '#sunwood-nav .dropdown a{display:block;padding:8px 16px;color:#444;font-size:.9rem;white-space:nowrap}' +
    '#sunwood-nav .dropdown a:hover{background:#f1f5f9;color:#1e3a5f}' +
    '#sunwood-nav .nav-group:hover .dropdown{display:block}' +
    '#sunwood-nav .nav-cta,#sunwood-nav .nav-login{padding:8px 14px;border-radius:6px;font-size:.85rem;font-weight:600;white-space:nowrap}' +
    '#sunwood-nav .nav-cta{background:linear-gradient(135deg,#1e3a5f 0%,#2d5a87 100%);color:#fff;margin-left:8px}' +
    '#sunwood-nav .nav-cta:hover{opacity:.9}' +
    '#sunwood-nav .nav-login{color:#1e3a5f;border:1.5px solid #1e3a5f;margin-left:8px}' +
    '#sunwood-nav .nav-login:hover{background:#f1f5f9}' +
    '#sunwood-nav .active{font-weight:700}' +
    '#sunwood-nav .nav-toggle{display:none;background:none;border:none;padding:8px;cursor:pointer}' +
    '@media(max-width:950px){' +
      '#sunwood-nav .nav-toggle{display:block}' +
      '#sunwood-nav .nav-menu{display:none;position:absolute;top:64px;left:0;right:0;background:#fff;flex-direction:column;align-items:stretch;padding:12px 20px 20px;box-shadow:0 8px 16px rgba(0,0,0,.08);gap:4px}' +
      '#sunwood-nav .nav-menu.open{display:flex}' +
      '#sunwood-nav .nav-link{padding:12px;border-bottom:1px solid #f1f5f9}' +
      '#sunwood-nav .nav-group > span{padding:12px;border-bottom:1px solid #f1f5f9}' +
      '#sunwood-nav .dropdown{display:block;position:static;box-shadow:none;padding:0 0 0 12px}' +
      '#sunwood-nav .dropdown a{padding:8px 12px}' +
      '#sunwood-nav .nav-cta,#sunwood-nav .nav-login{margin:8px 0 0;text-align:center}' +
    '}';

  document.head.appendChild(style);

  const navWrapper = document.createElement('div');
  navWrapper.innerHTML = navHtml;
  document.body.insertBefore(navWrapper.firstElementChild, document.body.firstChild);

  // 全局菜单切换
  window.toggleSunwoodNav = function () {
    const menu = document.getElementById('sunwood-nav-menu');
    menu.classList.toggle('open');
  };
})();

// 辅助函数：创建带图标的 SVG 元素
function sunwoodIcon(name, classes) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', classes || 'icon');
  svg.setAttribute('viewBox', '0 0 24 24');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', '#icon-' + name);
  svg.appendChild(use);
  return svg;
}
