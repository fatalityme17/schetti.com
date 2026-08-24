import {
  ArrowRight,
  Browser,
  CalendarDots,
  ChatsCircle,
  Check,
  EnvelopeSimple,
  FolderOpen,
  GearSix,
  IdentificationCard,
  PaintBrush,
  PaperPlaneTilt,
  Phone,
  Robot,
  Storefront,
  Translate,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Page } from "@/components/site-layout";

type Language = "de" | "ru";

const copy = {
  de: {
    brand: "Olga Schetti",
    role: "IT-Freiberuflerin",
    nav: [
      ["#starter", "Angebot"],
      ["#leistungen", "Ablauf"],
      ["#ueber-mich", "Über mich"],
      ["#kontakt", "Kontakt"],
    ],
    agency: "Für Agenturen",
    agencyHref: "/subcontracting",
    heroTop: "Ihr Unternehmen digital —",
    heroBand: "ohne Stress.",
    heroHand: "Ich kümmere mich darum.",
    sheets: [
      {
        title: "IHRE WEBSITE",
        kind: "wireframe",
        items: [],
      },
      {
        title: "INHALTE & STRUKTUR",
        kind: "structure",
        items: [],
      },
      {
        title: "MODULE NACH BEDARF",
        kind: "modules",
        items: ["Google-Profil", "Online-Kalender", "Kontaktwege", "weitere Bausteine"],
      },
    ],
    offerLabel: "ANGEBOT",
    offerTitle: "Schnellstart — Ihre Website als Basis",
    offerIntro:
      "Wir klären gemeinsam, wie Sie Ihre Leistungen online präsentieren und welche Bausteine Sie wirklich brauchen.",
    offerItems: [
      "Onepage-Website",
      "Beratung zu Ablauf, Inhalten und Präsentation",
      "Passende Module für Ihr Unternehmen",
      "z. B. Google-Unternehmensprofil, WhatsApp Business oder Online-Terminbuchung",
    ],
    price: "490 €",
    tax: "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.",
    extras: "Hosting, Domain und kostenpflichtige Drittanbieter-Dienste werden separat berechnet.",
    cta: "Kurz erzählen, was Sie brauchen",
    processLabel: "ABLAUF",
    process: [
      ["Klären.", "Sie erzählen, ich stelle die richtigen Fragen."],
      ["Planen.", "Wir ordnen Inhalte und setzen Prioritäten."],
      ["Einrichten.", "Ich baue Ihre Lösung klar und responsiv."],
      ["Übergeben.", "Sie erhalten alles erklärt und einsatzbereit."],
    ],
    servicesTitle: "Weitere Leistungen — wenn Sie sie brauchen.",
    servicesIntro:
      "Der Schnellstart ist die Basis. Weitere Bausteine kommen nur dazu, wenn sie für Ihr Unternehmen sinnvoll sind.",
    services: [
      ["Corporate Design", "+ 290 €"],
      ["Visitenkarten & Flyer", "auf Anfrage"],
      ["KI-Assistent / Automatisierung", "ab 390 €"],
      ["IT-Hilfe & Betreuung", "ab 39 €/Stunde"],
      ["Mehrsprachige Websites", "nach Absprache"],
      ["Einfache CRM-Lösungen", "nach Absprache"],
      ["Individuelle IT-Projekte", "nach Absprache"],
    ],
    servicesNote: "Technik verstehen muss nicht Ihr Job sein. Meiner schon.",
    aboutTitle: "Technik verständlich umgesetzt.",
    about:
      "Ich bin Olga Schetti, Ingenieurin für Informationstechnologie. Ich verbinde technisches Verständnis mit Erfahrung in Digitalisierung und IT-Projekten — pragmatisch, persönlich und passend zu Ihrem tatsächlichen Bedarf.",
    aboutMeta:
      "Als Ingenieurin in Nordrhein-Westfalen anerkannt · IT-Projekte seit 2017 · DE / EN / RU",
    contactLabel: "KONTAKT",
    contactTitle: "Erzählen Sie mir kurz von Ihrem Unternehmen.",
    contactIntro:
      "Zwei bis drei Sätze genügen. Ich melde mich zeitnah und sage Ihnen offen, was sinnvoll ist.",
    email: "E-Mail schreiben",
    call: "Anrufen",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    available: "Aktuell verfügbar · remote im DACH-Raum",
  },
  ru: {
    brand: "Ольга Щетти",
    role: "ИТ-Фрилансер",
    nav: [
      ["#starter", "Предложение"],
      ["#leistungen", "Как работаем"],
      ["#ueber-mich", "Обо мне"],
      ["#kontakt", "Контакты"],
    ],
    agency: "Для агентств",
    agencyHref: "/ru/subcontracting",
    heroTop: "Ваш бизнес онлайн —",
    heroBand: "без стресса.",
    heroHand: "Я обо всём позабочусь.",
    sheets: [
      { title: "ВАШ САЙТ", kind: "wireframe", items: [] },
      { title: "СОДЕРЖАНИЕ И СТРУКТУРА", kind: "structure", items: [] },
      {
        title: "МОДУЛИ ПО ПОТРЕБНОСТИ",
        kind: "modules",
        items: ["Профиль Google", "Онлайн-календарь", "Способы связи", "другие модули"],
      },
    ],
    offerLabel: "ПРЕДЛОЖЕНИЕ",
    offerTitle: "Быстрый старт — сайт как основа",
    offerIntro:
      "Вместе определим, как представить ваши услуги онлайн и какие модули действительно нужны вашему бизнесу.",
    offerItems: [
      "Одностраничный сайт",
      "Консультация по процессу, содержанию и подаче",
      "Подходящие модули для вашего бизнеса",
      "например, профиль Google, WhatsApp Business или онлайн-запись",
    ],
    price: "490 €",
    tax: "В соответствии с § 19 UStG налог на добавленную стоимость не начисляется.",
    extras: "Хостинг, домен и платные сервисы третьих сторон оплачиваются отдельно.",
    cta: "Коротко рассказать о задаче",
    processLabel: "КАК МЫ РАБОТАЕМ",
    process: [
      ["Обсуждаем.", "Вы рассказываете, я задаю правильные вопросы."],
      ["Планируем.", "Расставляем приоритеты и собираем содержание."],
      ["Настраиваю.", "Создаю понятное и адаптивное решение."],
      ["Передаю.", "Объясняю результат и передаю всё готовым к работе."],
    ],
    servicesTitle: "Другие услуги — если они вам нужны.",
    servicesIntro:
      "Быстрый старт — это основа. Остальные модули добавляются только тогда, когда они полезны вашему бизнесу.",
    services: [
      ["Фирменный стиль", "+ 290 €"],
      ["Визитки и флаеры", "по запросу"],
      ["ИИ-ассистент / автоматизация", "от 390 €"],
      ["ИТ-помощь и сопровождение", "от 39 €/час"],
      ["Многоязычные сайты", "по договорённости"],
      ["Простые CRM-решения", "по договорённости"],
      ["Индивидуальные ИТ-проекты", "по договорённости"],
    ],
    servicesNote: "Разбираться в технологиях — не ваша работа. Это моя работа.",
    aboutTitle: "Технологии — понятно и по делу.",
    about:
      "Я Ольга Щетти, инженер в области информационных технологий. Соединяю технические знания с опытом цифровизации и ИТ-проектов — практично, лично и в соответствии с реальными потребностями вашего бизнеса.",
    aboutMeta:
      "Квалификация Ingenieurin признана в Северном Рейне — Вестфалии · ИТ-проекты с 2017 года · DE / EN / RU",
    contactLabel: "КОНТАКТЫ",
    contactTitle: "Коротко расскажите о своём бизнесе.",
    contactIntro:
      "Двух-трёх предложений достаточно. Я отвечу в ближайшее время и честно скажу, что имеет смысл.",
    email: "Написать письмо",
    call: "Позвонить",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    available: "Сейчас доступна для проектов · удалённо в регионе DACH",
  },
} as const;

const processIcons = [ChatsCircle, PaintBrush, GearSix, PaperPlaneTilt];
const serviceIcons = [
  PaintBrush,
  IdentificationCard,
  Robot,
  GearSix,
  Translate,
  Storefront,
  FolderOpen,
];

export function EditorialHome({ language }: { language: Language }) {
  const t = copy[language];
  const isRussian = language === "ru";

  return (
    <Page variant="folder">
      <article className="paper-site-shell">
        <header className="paper-site-header">
          <a href={isRussian ? "/ru" : "/"} className="paper-site-brand">
            <strong>{t.brand}</strong>
            <span>— {t.role}</span>
          </a>
          <nav className="paper-site-nav" aria-label={isRussian ? "Навигация" : "Hauptnavigation"}>
            {t.nav.map(([href, label]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="paper-site-tools">
            <a className="paper-audience-link" href={t.agencyHref}>
              {t.agency}
            </a>
            <nav
              className="paper-language"
              aria-label={isRussian ? "Выбор языка" : "Sprachauswahl"}
            >
              <a href="/" lang="de" aria-current={!isRussian ? "page" : undefined}>
                DE
              </a>
              <a href="/ru" lang="ru" aria-current={isRussian ? "page" : undefined}>
                RU
              </a>
            </nav>
          </div>
        </header>

        <main className="paper-site-main">
          <section className="paper-hero">
            <div className="paper-hero-copy">
              <h1>
                <span>{t.heroTop}</span>
                <em>{t.heroBand}</em>
              </h1>
              <p className="olga-hand paper-hero-note">{t.heroHand}</p>
            </div>
            <div
              className="paper-workboard"
              aria-label={isRussian ? "Состав проекта" : "Projektbausteine"}
            >
              {t.sheets.map((sheet, index) => (
                <article className={`project-sheet project-sheet-${sheet.kind}`} key={sheet.title}>
                  <span className="paper-tape" aria-hidden="true" />
                  <h2>{sheet.title}</h2>
                  {sheet.kind === "wireframe" ? <WebsiteSketch /> : null}
                  {sheet.kind === "structure" ? <StructureSketch /> : null}
                  {sheet.kind === "modules" ? (
                    <ul className="olga-hand">
                      {sheet.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  <span className="sheet-number">0{index + 1}</span>
                </article>
              ))}
            </div>
          </section>

          <div className="paper-offer-process">
            <section id="starter" className="paper-offer scroll-mt-24">
              <div className="paper-label">{t.offerLabel}</div>
              <h2>{t.offerTitle}</h2>
              <p className="paper-offer-intro">{t.offerIntro}</p>
              <ul>
                {t.offerItems.map((item) => (
                  <li key={item}>
                    <Check size={18} weight="bold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="paper-price olga-hand">{t.price}</div>
              <div className="paper-conditions">
                <p>{t.tax}</p>
                <p>{t.extras}</p>
              </div>
              <a href="#kontakt" className="paper-cta">
                {t.cta}
                <ArrowRight size={21} aria-hidden="true" />
              </a>
            </section>

            <section id="leistungen" className="paper-process scroll-mt-24">
              <div className="paper-label">{t.processLabel}</div>
              <div className="paper-process-grid">
                {t.process.map(([title, body], index) => {
                  const Icon = processIcons[index];
                  return (
                    <article key={title}>
                      <span className="process-number olga-hand">{index + 1}</span>
                      <Icon size={38} weight="thin" aria-hidden="true" />
                      <h3 className="olga-hand">{title}</h3>
                      <p>{body}</p>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>

          <section className="paper-services">
            <div className="paper-services-copy">
              <h2>{t.servicesTitle}</h2>
              <p>{t.servicesIntro}</p>
              <blockquote className="olga-hand">{t.servicesNote}</blockquote>
            </div>
            <div className="paper-service-slips">
              {t.services.map(([name, price], index) => {
                const Icon = serviceIcons[index];
                return (
                  <article key={name}>
                    <Icon size={24} weight="thin" aria-hidden="true" />
                    <span>{name}</span>
                    <strong>{price}</strong>
                  </article>
                );
              })}
            </div>
          </section>

          <div className="paper-closing">
            <section id="ueber-mich" className="paper-about scroll-mt-24">
              <h2>{t.aboutTitle}</h2>
              <p>{t.about}</p>
              <p className="paper-about-meta">{t.aboutMeta}</p>
            </section>

            <section id="kontakt" className="paper-contact scroll-mt-24">
              <div className="paper-label">{t.contactLabel}</div>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactIntro}</p>
              <div
                className="paper-contact-grid"
                aria-label={isRussian ? "Способы связи" : "Kontaktmöglichkeiten"}
              >
                <a
                  href={`mailto:info@schetti.com?subject=${encodeURIComponent(isRussian ? "Сайт для моего бизнеса" : "Website für mein Unternehmen")}`}
                >
                  <EnvelopeSimple size={25} aria-hidden="true" />
                  <span>
                    {t.email}
                    <small>info@schetti.com</small>
                  </span>
                </a>
                <a href="tel:+4915205215760">
                  <Phone size={25} aria-hidden="true" />
                  <span>
                    {t.call}
                    <small>+49 1520 5215760</small>
                  </span>
                </a>
                <a href="https://wa.me/4915205215760" target="_blank" rel="noopener noreferrer">
                  <WhatsappLogo size={25} aria-hidden="true" />
                  <span>
                    {t.whatsapp}
                    <small>+49 1520 5215760</small>
                  </span>
                </a>
                <a href="https://t.me/fatalityme" target="_blank" rel="noopener noreferrer">
                  <PaperPlaneTilt size={25} aria-hidden="true" />
                  <span>
                    {t.telegram}
                    <small>@fatalityme</small>
                  </span>
                </a>
              </div>
              <p className="paper-availability">{t.available}</p>
            </section>
          </div>
        </main>
      </article>
    </Page>
  );
}

function WebsiteSketch() {
  return (
    <div className="website-sketch" aria-hidden="true">
      <div className="sketch-browser">
        <span />
        <i />
        <i />
        <i />
      </div>
      <div className="sketch-hero">
        <Browser size={34} weight="thin" />
      </div>
      <div className="sketch-cards">
        <span />
        <span />
        <span />
      </div>
      <div className="sketch-lines">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function StructureSketch() {
  return (
    <div className="structure-sketch" aria-hidden="true">
      <div>
        <span />
        <i />
        <i />
      </div>
      <div>
        <span />
        <i />
      </div>
      <div>
        <span />
        <i />
        <i />
      </div>
      <div className="structure-boxes">
        <b />
        <b />
      </div>
    </div>
  );
}
