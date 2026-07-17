# Schetti.com - простой сайт для GitHub Pages

Готовый статический лендинг без сборщика и зависимостей. В комплекте:

- немецкая и русская версии с переключателем;
- Impressum;
- Datenschutzerklärung для хостинга на GitHub Pages;
- отсутствие аналитики, сторонних шрифтов, cookie-баннера и контактной формы;
- файл `CNAME` для домена `schetti.com`.

## 1. Публикация на GitHub Pages

1. Создайте новый репозиторий на GitHub, например `schetti-site`.
2. Загрузите все файлы из этой папки в корень репозитория.
3. Откройте **Settings -> Pages**.
4. В разделе **Build and deployment** выберите **Deploy from a branch**.
5. Выберите ветку `main`, папку `/ (root)` и нажмите **Save**.
6. В **Custom domain** укажите `schetti.com` и нажмите **Save**.
7. После успешной проверки включите **Enforce HTTPS**.

## 2. DNS в Namecheap

В **Domain List -> Manage -> Advanced DNS** добавьте для сайта:

| Type | Host | Value |
|---|---|---|
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME Record | www | ВАШЕ_ИМЯ_НА_GITHUB.github.io |

**Не удаляйте MX-записи Private Email и TXT-запись SPF**, иначе перестанет работать `info@schetti.com`.

Изменения DNS могут применяться до 24 часов. После этого проверьте `https://schetti.com` и `https://www.schetti.com`.

## 3. Что проверить перед публикацией

- адрес в `impressum.html`;
- e-mail `info@schetti.com`;
- формулировки услуг;
- строку о Kleinunternehmerregelung;
- позднее добавить USt-IdNr., только если она будет выдана и её требуется публиковать.

## 4. Важно

Тексты Impressum и Datenschutz составлены для текущей минимальной версии сайта: без аналитики, внешних медиа, контактной формы и рекламы. При добавлении Google Fonts, Maps, YouTube, Calendly, формы, аналитики или cookie-файлов Datenschutzerklärung необходимо обновить.
