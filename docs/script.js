/* Progressive enhancement: the complete English homepage remains readable without JS. */
(() => {
  'use strict';
  const root = document.documentElement;
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  let language = 'en';
  const metadata = {
    en: {title: 'Zicheng Wang · Power Systems & AI', description: 'Zicheng Wang, an electrical engineering undergraduate at Changsha University of Science and Technology. Research interests: renewable-rich power systems and AI for power systems.'},
    zh: {title: '王子成 · 电力系统与人工智能', description: '王子成，长沙理工大学电气工程及其自动化专业本科生。研究兴趣：高比例新能源电力系统建模、控制与分析，以及 AI 在电力系统中的应用。'}
  };
  function updateMenuLabel() {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-label', language === 'zh' ? (open ? '关闭菜单' : '打开菜单') : (open ? 'Close menu' : 'Open menu'));
  }
  function setMenu(open, restoreFocus = false) {
    menuButton.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
    updateMenuLabel();
    if (restoreFocus) menuButton.focus();
  }
  function setLanguage(next, persist = false) {
    language = next === 'zh' ? 'zh' : 'en';
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(el => { el.textContent = el.dataset[language]; });
    document.querySelectorAll('[data-aria-en]').forEach(el => el.setAttribute('aria-label', el.getAttribute(`data-aria-${language}`)));
    document.querySelectorAll('[data-alt-en]').forEach(el => el.setAttribute('alt', el.getAttribute(`data-alt-${language}`)));
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    document.title = metadata[language].title;
    document.querySelector('meta[name="description"]').content = metadata[language].description;
    document.querySelector('meta[property="og:title"]').content = metadata[language].title;
    document.querySelector('meta[property="og:description"]').content = metadata[language].description;
    updateMenuLabel();
    if (persist) {
      try { localStorage.setItem('zicheng-home-language', language); } catch { /* Private browsing may disable storage. */ }
      try { const url = new URL(location.href); url.searchParams.set('lang', language); history.replaceState(null, '', url); } catch { /* Local file previews still work. */ }
    }
  }
  let saved;
  try { saved = localStorage.getItem('zicheng-home-language'); } catch { /* Use browser language. */ }
  const requested = new URLSearchParams(location.search).get('lang');
  const initial = [requested, saved].find(value => value === 'en' || value === 'zh') || (navigator.language.startsWith('zh') ? 'zh' : 'en');
  setLanguage(initial);
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language, true)));
  root.classList.add('js-ready');
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  nav.addEventListener('focusout', event => {
    if (event.relatedTarget && !nav.contains(event.relatedTarget)) setMenu(false);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    const wasOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenu(false);
    if (wasOpen) {
      const target = document.querySelector(link.hash);
      target.setAttribute('tabindex', '-1');
      target.focus({preventScroll: true});
    }
  }));
  const mobile = matchMedia('(max-width: 760px)');
  mobile.addEventListener('change', () => setMenu(false));
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  function activateTab(tab, focus = false) {
    tabs.forEach(item => { item.setAttribute('aria-selected', String(item === tab)); item.tabIndex = item === tab ? 0 : -1; });
    panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute('aria-controls'); panel.classList.remove('entering'); });
    const activePanel = document.getElementById(tab.getAttribute('aria-controls'));
    activePanel.classList.add('entering');
    document.querySelector('.research-stage').dataset.theme = tab.id.replace('tab-', '');
    if (focus) tab.focus();
  }
  document.querySelector('[role="tablist"]').hidden = false;
  activateTab(tabs[0]);
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      const targets = {ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1};
      if (!(event.key in targets)) return;
      event.preventDefault();
      activateTab(tabs[targets[event.key]], true);
    });
  });
  if ('IntersectionObserver' in window) {
    const sections = [...document.querySelectorAll('main > section[id]')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        nav.querySelectorAll('a').forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-15% 0px -60% 0px', threshold: 0});
    sections.forEach(section => observer.observe(section));
  }
})();
