(() => {
  const root = document.documentElement;
  const buttons = [...document.querySelectorAll('[data-set-lang]')];
  const allowed = new Set(['de', 'ru']);

  function setLanguage(language, persist = true) {
    const lang = allowed.has(language) ? language : 'de';
    root.dataset.activeLang = lang;
    root.lang = lang;

    buttons.forEach((button) => {
      const active = button.dataset.setLang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    const title = document.body?.dataset[`title${lang === 'de' ? 'De' : 'Ru'}`];
    if (title) document.title = title;
    if (persist) localStorage.setItem('schetti-language', lang);
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.setLang));
  });

  const saved = localStorage.getItem('schetti-language');
  const browserLang = navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'de';
  setLanguage(saved || browserLang, false);

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }
})();
