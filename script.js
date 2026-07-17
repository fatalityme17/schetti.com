(() => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-set-lang]');

  function setLanguage(lang) {
    const safeLang = lang === 'ru' ? 'ru' : 'de';
    root.dataset.activeLang = safeLang;
    root.lang = safeLang;
    document.title = (safeLang === 'ru' ? document.body.dataset.titleRu : document.body.dataset.titleDe) || document.title;

    buttons.forEach((button) => {
      const active = button.dataset.setLang === safeLang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.setLang));
  });

  setLanguage('de');
})();
