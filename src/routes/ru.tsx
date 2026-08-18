import { createFileRoute } from "@tanstack/react-router";
import { ContactLinks, Page } from "@/components/site-layout";

export const Route = createFileRoute("/ru")({
  head: () => ({
    meta: [
      { title: "Ольга Щетти — ИТ-фрилансер" },
      {
        name: "description",
        content:
          "Сайт, профиль компании в Google, WhatsApp Business и понятные способы связи для малого бизнеса в регионе DACH.",
      },
      {
        property: "og:title",
        content: "Ольга Щетти — Цифровая инфраструктура для малого бизнеса",
      },
      {
        property: "og:description",
        content:
          "Цифровая основа для малого бизнеса: заметность в интернете, понятная настройка и личное сопровождение.",
      },
      { property: "og:url", content: "/ru" },
    ],
    links: [
      { rel: "canonical", href: "/ru" },
      { rel: "alternate", hrefLang: "de", href: "/" },
      { rel: "alternate", hrefLang: "ru", href: "/ru" },
    ],
  }),
  component: RussianHome,
});

function RussianHome() {
  return (
    <Page>
      <article className="container-page py-14 md:py-20">
        <Hero />
        <Trust />
        <Starter />
        <Approach />
        <About />
        <Contact />
      </article>
    </Page>
  );
}

function Hero() {
  return (
    <header className="mb-20 md:mb-28">
      <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        Цифровая инфраструктура для малого бизнеса
      </p>
      <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-6xl">
        Заметный бизнес в интернете. Понятная цифровая основа.
      </h1>
      <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-ink-muted md:text-xl">
        Я настраиваю цифровую основу вашего бизнеса: сайт, профиль компании в Google, WhatsApp
        Business и понятные способы связи. Просто, напрямую и в одном месте.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <a
          href="#starter"
          className="inline-flex items-center bg-ink px-6 py-3 font-display font-medium tracking-wide text-background transition hover:bg-accent"
        >
          Цифровая основа за 490 €
        </a>
        <a
          href="#kontakt"
          className="inline-flex items-center border-b border-ink/40 pb-0.5 font-medium text-ink transition hover:border-accent hover:text-accent"
        >
          Коротко обсудить проект →
        </a>
      </div>
      <p className="mt-5 text-xs text-ink-muted">
        Сейчас доступна для проектов · удалённо в регионе DACH
      </p>
    </header>
  );
}

function Trust() {
  const items = [
    { k: "Сотрудничество", v: "Напрямую с Ольгой" },
    { k: "Квалификация", v: "Ingenieurin (IT)" },
    { k: "Ответ", v: "В течение рабочего дня" },
    { k: "Языки", v: "DE · EN · RU" },
  ];

  return (
    <section className="mb-20 border-y border-line py-8 md:mb-28">
      <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.k} className="text-center md:text-left">
            <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-muted">{item.k}</dt>
            <dd className="mt-2 font-display text-base font-semibold text-ink">{item.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Starter() {
  const included = [
    "Одностраничный сайт на немецком языке",
    "Настройка или подготовка профиля компании в Google",
    "Совместная настройка WhatsApp Business",
    "Понятные способы связи по электронной почте и WhatsApp",
    "Подготовка до двух профилей в социальных сетях",
    "До 3 часов корректировок включено",
  ];

  return (
    <section id="starter" className="mb-20 scroll-mt-24 md:mb-28">
      <div className="border border-line bg-surface-2 p-8 md:p-12">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          Цифровая основа
        </p>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Ваш бизнес заметен онлайн за одну неделю.
            </h2>
            <p className="mt-6 font-display text-5xl font-bold text-ink md:text-6xl">490 €</p>
            <p className="mt-2 text-sm text-ink-muted">
              Единоразовая цена за указанный объём работ
            </p>
            <p className="mt-1 text-xs text-ink-muted/80">
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
            </p>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center bg-ink px-6 py-3 font-display font-medium tracking-wide text-background transition hover:bg-accent"
            >
              Обсудить проект →
            </a>
          </div>
          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="flex gap-4 border-b border-line pb-3 text-ink">
                <span className="mt-3 h-px w-6 shrink-0 bg-accent/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          Условие: материалы и доступы предоставлены. Домен, хостинг и платные сторонние сервисы в
          стоимость не входят.
        </p>
        <div className="mt-8 border-t border-line pt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
            Можно дополнить
          </p>
          <div className="mt-4 grid gap-4 text-sm md:grid-cols-3">
            <div>
              <span className="font-semibold text-ink">Фирменный стиль</span>
              <span className="ml-2 text-accent">+ 290 €</span>
            </div>
            <div>
              <span className="font-semibold text-ink">ИИ-ассистент / автоматизация</span>
              <span className="ml-2 text-accent">от 390 €</span>
            </div>
            <div>
              <span className="font-semibold text-ink">Пакет сопровождения</span>
              <span className="ml-2 text-accent">от 39 €/месяц</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    { no: "01", title: "Обсуждаем", body: "Согласовываем цель, материалы и доступы." },
    { no: "02", title: "Настраиваю", body: "Создаю подходящую цифровую основу." },
    {
      no: "03",
      title: "Передаю",
      body: "Вместе проверяем, вносим корректировки и разбираем результат.",
    },
  ];

  return (
    <section id="leistungen" className="mb-20 scroll-mt-24 md:mb-28">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        Как проходит работа
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Три понятных шага.
      </h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.no} className="border-t border-line pt-6">
            <span className="font-display text-xs font-semibold italic text-accent">{step.no}</span>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber-mich" className="mb-20 scroll-mt-24 md:mb-28">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        Обо мне
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Технологии — понятно и по делу.
      </h2>
      <div className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
        <p>
          Меня зовут Ольга Щетти. Я инженер в области информационных технологий. Соединяю
          технические знания с опытом цифровизации и ИТ-проектов, чтобы малый бизнес профессионально
          выглядел в интернете и понимал собственную цифровую инфраструктуру.
        </p>
        <p className="mt-4 text-sm">
          Право использовать профессиональное наименование Ingenieurin признано в земле Северный
          Рейн — Вестфалия.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 border border-line bg-surface-2 p-8 text-center md:p-14"
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          Контакт
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Обсудим цифровую основу вашего бизнеса.
        </h2>
        <p className="mt-5 leading-relaxed text-ink-muted">
          Достаточно двух-трёх предложений о вашем бизнесе. Я отвечу в течение одного рабочего дня.
        </p>
        <ContactLinks isRussian emailSubject="Цифровая основа для бизнеса" />
        <p className="mt-5 text-xs text-ink-muted">
          Сейчас доступна для проектов · удалённо в регионе DACH
        </p>
      </div>
    </section>
  );
}
