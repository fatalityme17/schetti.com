import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ContactLinks, Page } from "@/components/site-layout";

export const Route = createFileRoute("/ru_/subcontracting")({
  head: () => ({
    meta: [
      { title: "Бизнес-анализ и процессы для проектных команд | Ольга Щетти" },
      {
        name: "description",
        content:
          "Внешняя поддержка проектных команд: требования, анализ процессов, пользовательские сценарии и концепции автоматизации.",
      },
      {
        property: "og:title",
        content: "Бизнес-анализ и процессы для проектных команд",
      },
      {
        property: "og:description",
        content:
          "Внешний бизнес- и процесс-аналитик: требования, процессы, пользовательские сценарии и автоматизация.",
      },
      { property: "og:url", content: "/ru/subcontracting" },
    ],
    links: [
      { rel: "canonical", href: "/ru/subcontracting" },
      { rel: "alternate", hrefLang: "de", href: "/subcontracting" },
      { rel: "alternate", hrefLang: "ru", href: "/ru/subcontracting" },
    ],
  }),
  component: RussianSubcontracting,
});

function RussianSubcontracting() {
  return (
    <Page>
      <article className="container-page py-14 md:py-20">
        <Hero />
        <Tracks />
        <CollaborationFormats />
        <Profile />
        <Konditionen />
        <Contact />
      </article>
    </Page>
  );
}

function Hero() {
  return (
    <header className="mb-24 md:mb-32">
      <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        Для агентств, студий и проектных команд
      </p>
      <h1 className="max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl">
        Внешний бизнес- и процесс-аналитик для цифровых проектов.
      </h1>
      <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-ink-muted md:text-2xl">
        Я структурирую требования, процессы и решения, чтобы бизнес, дизайн и разработка быстрее
        переходили к реализации.
      </p>
      <a
        href="#kontakt"
        className="mt-9 inline-flex border-b border-ink/40 pb-0.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
      >
        Контакт →
      </a>
      <p className="mt-5 text-xs text-ink-muted">
        Сейчас доступна для проектов · удалённо в регионе DACH
      </p>
    </header>
  );
}

function Tracks() {
  const tracks = [
    {
      title: "Requirements & Product",
      subtitle: "От идеи к решению, готовому к реализации",
      items: [
        "Структурирование бизнес- и технических требований",
        "Пользовательские сценарии, User Stories и критерии приёмки",
        "Связь между бизнесом, дизайном и разработкой",
      ],
    },
    {
      title: "Процессы и автоматизация",
      subtitle: "Понять и упростить рабочие процессы",
      items: [
        "Анализ текущих и целевых процессов и проблемных мест",
        "BPMN 2.0, рабочие процессы и маршрутизация",
        "Определение возможностей и требований для автоматизации",
      ],
    },
    {
      title: "AI & GenAI",
      subtitle: "ИИ как практичная часть процесса",
      items: [
        "Оценка сценариев применения и определение требований",
        "Проектирование LLM-процессов и внутренних ассистентов",
        "Участие человека, доступ к данным и защита данных",
      ],
    },
  ];

  return (
    <section id="sparten" className="mb-24 scroll-mt-24 md:mb-32">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        01 — Услуги
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
        Где я разгружаю вашу проектную команду.
      </h2>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {tracks.map((track) => (
          <div key={track.title} className="border border-line bg-surface p-7">
            <h3 className="font-display text-2xl font-semibold text-ink">{track.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{track.subtitle}</p>
            <ul className="mt-7 space-y-3 text-sm text-ink-muted">
              {track.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-accent/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function CollaborationFormats() {
  const formats = [
    {
      title: "Воркшоп",
      body: "За короткое время прояснить цели, требования и следующие шаги.",
    },
    {
      title: "Этап концепции",
      body: "Проработать процессы и требования до передачи в реализацию.",
    },
    {
      title: "Сопровождение проекта",
      body: "Поддерживать команду в анализе, согласованиях и документации.",
    },
  ];
  const deliverables = [
    "Требования",
    "User Flows",
    "User Stories",
    "Критерии приёмки",
    "BPMN-процессы",
    "Концепция автоматизации",
  ];

  return (
    <section id="formate" className="mb-24 scroll-mt-24 md:mb-32">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        02 — Сотрудничество
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
        Формат под этап вашего проекта.
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {formats.map((format) => (
          <div key={format.title} className="border-t border-line pt-6">
            <h3 className="font-display text-xl font-semibold text-ink">{format.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{format.body}</p>
          </div>
        ))}
      </div>
      <ul className="mt-10 flex flex-wrap gap-2">
        {deliverables.map((item) => (
          <li key={item} className="border border-line bg-surface-2 px-3 py-2 text-sm text-ink">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Profile() {
  return (
    <SectionHeader id="profil" no="03" title="Профиль">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">
            Управление ИТ-проектами и цифровизация
          </h3>
          <p className="mt-2 text-sm text-ink-muted">Опыт проектов с 2021 года · Германия</p>
          <ul className="mt-7 space-y-3 text-ink-muted">
            <li>Анализ требований, процессов и возможностей автоматизации</li>
            <li>Структурирование CRM-процессов и цифровых рабочих сценариев</li>
            <li>Сопровождение проектов от концепции до рабочего запуска</li>
          </ul>
        </div>
        <div className="border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
            Квалификация
          </p>
          <p className="mt-5 font-display font-semibold text-ink">
            Высшее образование: информационные системы и технологии
          </p>
          <p className="mt-2 font-display font-semibold text-ink">
            Магистр: оптотехника и робототехника
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink-muted">
            Профессиональное наименование Ingenieurin признано в земле Северный Рейн — Вестфалия. DE
            · EN · RU.
          </p>
        </div>
      </div>
    </SectionHeader>
  );
}

function Konditionen() {
  return (
    <SectionHeader id="konditionen" no="04" title="Условия">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="font-display text-5xl font-bold text-ink md:text-6xl">от 55 €/час</p>
          <p className="mt-3 text-sm text-ink-muted">
            Объём и формат — по проекту · Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
          </p>
        </div>
        <div className="text-lg leading-relaxed text-ink-muted">
          <p>Почасовая или фиксированная оплата · удалённо в регионе DACH · возможен NDA.</p>
          <p className="mt-4 text-sm text-ink">Сейчас доступна для проектов.</p>
        </div>
      </div>
    </SectionHeader>
  );
}

function Contact() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 border border-line bg-surface-2 p-10 text-center md:p-16"
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          05 — Контакт
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Коротко обсудим проект.
        </h2>
        <p className="mt-6 text-lg text-ink-muted">
          Для первой оценки достаточно этапа проекта и ожидаемой поддержки.
        </p>
        <ContactLinks isRussian emailSubject="Запрос по проекту с schetti.com" />
        <p className="mt-5 text-xs text-ink-muted">
          Сейчас доступна для проектов · удалённо в регионе DACH
        </p>
      </div>
    </section>
  );
}

function SectionHeader({
  id,
  no,
  title,
  children,
}: {
  id: string;
  no: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-24 scroll-mt-24 md:mb-32">
      <div className="mb-10 flex items-baseline gap-6 border-b border-line pb-4">
        <span className="font-display text-sm font-semibold italic text-accent">{no}</span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
