const categories = [
  { id: 'all', name: '全部网站', icon: '▦' },
  { id: 'favorites', name: '我的收藏', icon: '☆' },
  { id: 'adult', name: '18+', icon: '18+', description: '成人内容 · 仅限 18 岁及以上访问。', sites: [
    ['成人内容百科','成','成人内容（18+）品牌与作品资料库，记录分类、核验状态、专题与榜单；不提供播放与下载。','chengrenbaike.com','成']
  ] },
  { id: 'search', name: '搜索与资讯', icon: '⌕', description: '发现信息，看看世界。', sites: [
    ['百度','百度','中文网页与信息检索','baidu.com','百'],['Bing','Bi','网页、图片与全球信息','bing.com','Bi'],['Google','Go','探索全球网页与资料','google.com','Go'],['知乎','知','问题、经验与观点','zhihu.com','知'],['澎湃新闻','澎','时事新闻与深度报道','thepaper.cn','澎'],['少数派','少','数字生活与效率方法','sspai.com','少']
  ]},
  { id: 'ai', name: 'AI 助手', icon: '✳', description: '把好奇心交给新的可能。', sites: [
    ['ChatGPT','Ch','对话、写作与分析','chatgpt.com','Ch'],['Claude','Cl','写作与编程助手','claude.ai','Cl'],['Gemini','Ge','Google AI 助手','gemini.google.com','Ge'],['DeepSeek','De','问答与推理','chat.deepseek.com','De'],['豆包','豆','日常 AI 问答与创作','doubao.com','豆'],['通义','通','对话与效率助手','tongyi.com','通'],['Kimi','Ki','阅读与资料整理','kimi.com','Ki'],['Perplexity','Pe','AI 搜索与信息探索','perplexity.ai','Pe']
  ]},
  { id: 'office', name: '办公与邮箱', icon: '▤', description: '让协作与沟通保持简单。', sites: [
    ['腾讯文档','腾','多人协作与在线文档','docs.qq.com','腾'],['飞书','飞','文档、会议与团队协作','feishu.cn','飞'],['Notion','No','笔记与知识管理','notion.so','No'],['WPS','WP','文档、表格与演示','wps.cn','WP'],['Gmail','Gm','Google 电子邮箱','mail.google.com','Gm'],['Outlook','Ou','微软电子邮箱','outlook.live.com','Ou'],['QQ 邮箱','QQ','日常邮件收发','mail.qq.com','QQ'],['网易邮箱','网','163 电子邮箱','mail.163.com','网']
  ]},
  { id: 'learn', name: '学习与知识', icon: '▧', description: '从一堂课开始，走向更远的地方。', sites: [
    ['中国大学 MOOC','中','高校课程与在线学习','icourse163.org','中'],['国家智慧教育平台','国','公共教育与学习资源','smartedu.cn','国'],['Coursera','Co','专业课程与技能学习','coursera.org','Co'],['Khan Academy','Kh','数学、科学与基础学习','khanacademy.org','Kh'],['维基百科','维','多语言百科知识','wikipedia.org','维'],['百度百科','百','中文百科知识','baike.baidu.com','百'],['Google 学术','Go','学术论文与文献检索','scholar.google.com','Go'],['多邻国','多','语言学习与日常练习','duolingo.com','多']
  ]},
  { id: 'dev', name: '开发与技术', icon: '⌘', description: '构建、分享，把想法变成现实。', sites: [
    ['GitHub','Gi','开源代码与项目协作','github.com','Gi'],['GitLab','Gl','代码托管与研发协作','gitlab.com','Gl'],['Stack Overflow','St','编程问答与问题排查','stackoverflow.com','St'],['MDN Web Docs','MD','Web 开发文档','developer.mozilla.org/zh-CN','MD'],['掘金','掘','开发经验与技术文章','juejin.cn','掘'],['菜鸟教程','菜','编程入门与语法参考','runoob.com','菜'],['npm','np','JavaScript 软件包','npmjs.com','np'],['Vercel','Ve','前端项目部署','vercel.com','Ve']
  ]},
  { id: 'design', name: '设计与创作', icon: '◇', description: '收集灵感，让创意自由生长。', sites: [
    ['Figma','Fi','界面设计与团队协作','figma.com','Fi'],['Canva 可画','Ca','海报、演示与视觉设计','canva.cn','Ca'],['站酷','站','设计作品与创意灵感','zcool.com.cn','站'],['Dribbble','Dr','界面与视觉设计灵感','dribbble.com','Dr'],['Unsplash','Un','摄影图片素材','unsplash.com','Un'],['Pexels','Pe','图片与视频素材','pexels.com/zh-cn','Pe'],['Photopea','Ph','在线图片编辑','photopea.com','Ph'],['Coolors','Co','配色生成与色彩灵感','coolors.co','Co']
  ]},
  { id: 'media', name: '影音与阅读', icon: '▷', description: '好内容，总有时间慢慢看。', sites: [
    ['哔哩哔哩','哔','视频、知识与兴趣社区','bilibili.com','哔'],['YouTube','Yo','全球视频与创作者','youtube.com','Yo'],['腾讯视频','腾','影视与综艺','v.qq.com','腾'],['爱奇艺','爱','影视剧与综艺节目','iqiyi.com','爱'],['网易云音乐','云','音乐与歌单','music.163.com','云'],['QQ 音乐','QQ','歌曲、专辑与音乐','y.qq.com','QQ'],['豆瓣','豆','书影音记录与评价','douban.com','豆'],['微信读书','微','电子书与阅读','weread.qq.com','微']
  ]},
  { id: 'life', name: '购物与生活', icon: '▦', description: '把日常安排得更加妥帖。', sites: [
    ['淘宝','淘','日常购物与商品搜索','taobao.com','淘'],['京东','京','数码、家电与生活用品','jd.com','京'],['什么值得买','值','消费经验与购物信息','smzdm.com','值'],['美团','美','餐饮与本地生活','meituan.com','美'],['大众点评','点','餐厅与生活服务评价','dianping.com','点'],['下厨房','厨','食谱与烹饪方法','xiachufang.com','厨']
  ]},
  { id: 'travel', name: '出行与天气', icon: '⌁', description: '出发之前，先把路线想清楚。', sites: [
    ['铁路 12306','12','铁路车票与出行查询','12306.cn','12'],['携程','携','酒店、机票与旅行','ctrip.com','携'],['高德地图','高','地点搜索与路线规划','amap.com','高'],['百度地图','地','地图、路线与位置查询','map.baidu.com','地'],['中国天气网','天','天气预报与气象信息','weather.com.cn','天'],['航旅纵横','航','航班与航空出行服务','umetrip.com','航']
  ]},
  { id: 'tools', name: '工具与网盘', icon: '⚒', description: '小工具，也能省下不少时间。', sites: [
    ['DeepL','De','文本与文档翻译','deepl.com/translator','De'],['Google 翻译','Go','多语言翻译','translate.google.com','Go'],['有道翻译','有','翻译与词语查询','fanyi.youdao.com','有'],['iLovePDF','iL','PDF 合并、拆分与转换','ilovepdf.com/zh-cn','iL'],['TinyPNG','Ti','图片压缩','tinypng.com','Ti'],['Speedtest','Sp','网络速度测试','speedtest.net','Sp'],['百度网盘','盘','文件存储与分享','pan.baidu.com','盘'],['阿里云盘','阿','文件备份与管理','alipan.com','阿'],['OneDrive','On','微软云端文件存储','onedrive.live.com','On'],['Google Drive','Go','Google 云端文件管理','drive.google.com','Go']
  ]}
];

const accentPairs = [['#eef0ff','#5065d5'],['#e8f5ff','#3984ad'],['#fff1e8','#c87943'],['#e8f6ef','#398769'],['#f4ecff','#8059bd'],['#fff0f2','#c45d75']];
const categoryNav = document.querySelector('#category-nav');
const directory = document.querySelector('#directory');
const quickLinks = document.querySelector('#quick-links');
const resultCount = document.querySelector('#result-count');
const searchInput = document.querySelector('#site-search');
const emptyState = document.querySelector('#empty-state');
const clearFilter = document.querySelector('#clear-filter');
const toast = document.querySelector('#toast');
let activeCategory = 'all';
let currentQuery = '';
let toastTimer;
let favorites = readStored('shiguang-favorites', []);

function readStored(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key)); return Array.isArray(value) ? value : fallback; } catch { return fallback; } }
function allSites() { return categories.filter(category => category.sites).flatMap(category => category.sites.map(site => ({site, category}))); }
function safeUrl(domain) { return `https://${domain}`; }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function showToast(message) { toast.textContent = message; toast.classList.add('is-visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2100); }

function renderNav() {
  categoryNav.innerHTML = categories.slice(0, 2).map(category => navItem(category, category.id === activeCategory)).join('');
  const rest = categories.slice(2).map(category => navItem(category, category.id === activeCategory)).join('');
  categoryNav.insertAdjacentHTML('beforeend', rest);
  categoryNav.querySelectorAll('.nav-item').forEach(button => button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    currentQuery = '';
    searchInput.value = '';
    renderNav(); renderDirectory(); closeMobileNav();
    document.querySelector('#view-title').textContent = activeCategory === 'all' ? '全部网站' : activeCategory === 'favorites' ? '我的收藏' : categories.find(item => item.id === activeCategory)?.name || '全部网站';
    document.querySelector('.directory-section').scrollIntoView({behavior:'smooth',block:'start'});
  }));
}
function navItem(category, selected) {
  const count = category.id === 'all' ? allSites().length : category.id === 'favorites' ? favorites.length : category.sites?.length;
  return `<button class="nav-item" type="button" data-category="${category.id}" aria-current="${selected}"><span class="nav-icon" aria-hidden="true">${category.icon}</span><span>${category.name}</span>${count != null ? `<span class="nav-count">${count}</span>` : ''}</button>`;
}

function renderQuickLinks() {
  const preferred = ['百度','ChatGPT','DeepSeek','哔哩哔哩','GitHub','腾讯文档'];
  const sites = allSites().filter(({site}) => preferred.includes(site[0])).sort((a,b) => preferred.indexOf(a.site[0])-preferred.indexOf(b.site[0]));
  quickLinks.innerHTML = sites.map(({site}) => {
    const [name, , , domain, monogram] = site;
    const [bg,fg] = accentPairs[hash(name)%accentPairs.length];
    return `<a class="quick-card" href="${safeUrl(domain)}" target="_blank" rel="noopener noreferrer"><span class="quick-avatar" style="--avatar-bg:${bg};--avatar-fg:${fg}">${monogram}</span><span class="quick-name">${name}</span><span class="quick-meta">直达 ↗</span></a>`;
  }).join('');
}
function hash(value) { return [...value].reduce((total,char) => total + char.charCodeAt(0), 0); }
function siteCard(site) {
  const [name, , description, domain, monogram] = site;
  const isFavorite = favorites.includes(domain);
  const [bg,fg] = accentPairs[hash(name)%accentPairs.length];
  return `<div class="site-card-wrap"><a class="site-card" href="${safeUrl(domain)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(name)}：${escapeHtml(description)}，在新标签页打开"><span class="site-avatar" style="--avatar-bg:${bg};--avatar-fg:${fg}" aria-hidden="true">${escapeHtml(monogram)}</span><span class="site-copy"><span class="site-name">${escapeHtml(name)}</span><span class="site-description">${escapeHtml(description)}</span></span></a><button class="favorite-button" type="button" data-favorite="${escapeHtml(domain)}" aria-pressed="${isFavorite}" aria-label="${isFavorite?'取消收藏':'收藏'} ${escapeHtml(name)}">${isFavorite?'★':'☆'}</button></div>`;
}
function matchingSites() {
  let sites = allSites();
  if (activeCategory === 'favorites') sites = sites.filter(({site}) => favorites.includes(site[3]));
  else if (activeCategory !== 'all') sites = sites.filter(({category}) => category.id === activeCategory);
  if (currentQuery) {
    const query = currentQuery.toLocaleLowerCase();
    sites = sites.filter(({site,category}) => [...site.slice(0,4), category.name].join(' ').toLocaleLowerCase().includes(query));
  }
  return sites;
}
function renderDirectory() {
  const sites = matchingSites();
  const grouped = new Map();
  sites.forEach(({site,category}) => { if (!grouped.has(category.id)) grouped.set(category.id,{category,sites:[]}); grouped.get(category.id).sites.push(site); });
  directory.innerHTML = [...grouped.values()].map(({category,sites:items}) => `<section class="category-card" id="category-${category.id}" aria-labelledby="heading-${category.id}"><div class="category-title-row"><span class="category-symbol" aria-hidden="true">${category.icon}</span><h3 id="heading-${category.id}">${category.name}</h3><span class="category-count">${items.length} 个网站</span></div><p class="category-description">${category.description}</p><div class="site-list">${items.map(siteCard).join('')}</div></section>`).join('');
  directory.hidden = sites.length === 0;
  emptyState.hidden = sites.length !== 0;
  resultCount.textContent = `${sites.length} 个网站`;
  clearFilter.hidden = !currentQuery;
  directory.querySelectorAll('[data-favorite]').forEach(button => button.addEventListener('click', () => toggleFavorite(button.dataset.favorite)));
}
function toggleFavorite(domain) {
  const wasFavorite = favorites.includes(domain);
  favorites = wasFavorite ? favorites.filter(item => item !== domain) : [...favorites, domain];
  try { localStorage.setItem('shiguang-favorites', JSON.stringify(favorites)); } catch { showToast('浏览器未能保存收藏'); }
  const site = allSites().find(({site:item}) => item[3] === domain)?.site;
  showToast(wasFavorite ? `已取消收藏 ${site?.[0] || ''}` : `已收藏 ${site?.[0] || ''}`);
  renderNav(); renderDirectory();
}

document.querySelector('#search-form').addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (!query) { searchInput.focus(); showToast('输入关键词，开始寻找网站'); return; }
  const engine = document.querySelector('#search-engine').value;
  if (engine !== 'internal') { window.open(`${engine}${encodeURIComponent(query)}`, '_blank', 'noopener,noreferrer'); return; }
  currentQuery = query;
  activeCategory = 'all';
  renderNav(); renderDirectory();
  document.querySelector('#view-title').textContent = `搜索：${query}`;
  document.querySelector('.directory-section').scrollIntoView({behavior:'smooth',block:'start'});
});
document.querySelectorAll('[data-query]').forEach(button => button.addEventListener('click', () => { searchInput.value = button.dataset.query; document.querySelector('#search-engine').value = 'internal'; document.querySelector('#search-form').requestSubmit(); }));
document.querySelector('#clear-filter').addEventListener('click', resetDirectory);
document.querySelector('#empty-reset').addEventListener('click', resetDirectory);
function resetDirectory() { activeCategory = 'all'; currentQuery = ''; searchInput.value = ''; document.querySelector('#view-title').textContent = '全部网站'; renderNav(); renderDirectory(); }
document.querySelector('#theme-toggle').addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#151925' : '#f7f8fc';
  try { localStorage.setItem('shiguang-theme', dark ? 'dark' : 'light'); } catch {}
});
try { if (localStorage.getItem('shiguang-theme') === 'dark') { document.body.classList.add('dark'); document.querySelector('meta[name="theme-color"]').content = '#151925'; } } catch {}
document.addEventListener('keydown', event => { if (event.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) { event.preventDefault(); searchInput.focus(); } if (event.key === 'Escape') { searchInput.blur(); closeMobileNav(); } });
const sidebar = document.querySelector('#sidebar');
const scrim = document.querySelector('#mobile-scrim');
const menuToggle = document.querySelector('#menu-toggle');
menuToggle.addEventListener('click', () => { const open = sidebar.classList.toggle('is-open'); scrim.hidden = !open; menuToggle.setAttribute('aria-expanded', String(open)); });
scrim.addEventListener('click', closeMobileNav);
function closeMobileNav() { sidebar.classList.remove('is-open'); scrim.hidden = true; menuToggle.setAttribute('aria-expanded','false'); }

const now = new Date();
document.querySelector('#today-label').textContent = new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'long',day:'numeric',weekday:'long'}).format(now);
document.querySelector('#year').textContent = now.getFullYear();
renderNav(); renderQuickLinks(); renderDirectory();
