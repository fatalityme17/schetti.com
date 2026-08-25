import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ContactLinks, Page } from "@/components/site-layout";

export const Route = createFileRoute("/subcontracting")({
  head: () => ({
    meta: [
      { title: "Business Analysis & Prozesse für Projektteams | Olga Schetti" },
      {
        name: "description",
        content:
          "Externe Unterstützung für Projektteams bei Requirements, Prozessanalyse, User Flows und Automatisierungskonzepten.",
      },
      { property: "og:title", content: "Business Analysis & Prozesse für Projektteams" },
      {
        property: "og:description",
        content:
          "Externe Business- und Process-Analystin für Requirements, Prozesse, User Flows und Automatisierung.",
      },
      { property: "og:url", content: "/subcontracting" },
    ],
    links: [
      { rel: "canonical", href: "/subcontracting" },
      { rel: "alternate", hrefLang: "de", href: "/subcontracting" },
      { rel: "alternate", hrefLang: "ru", href: "/ru/subcontracting" },
    ],
  }),
  component: Subcontracting,
});

function Subcontracting() {
  return (
    <Page>
      <article className="agency-paper-page container-page py-10 md:py-16">
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
    <header className="agency-paper-hero mb-24 md:mb-32">
      <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        Für Agenturen, Studios & Projektteams
      </p>
      <h1 className="max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl">
        Externe Business- & Process-Analystin für digitale Projekte.
      </h1>
      <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-ink-muted md:text-2xl">
        Ich strukturiere Anforderungen, Prozesse und Entscheidungen, damit Fachbereich, Design und
        Entwicklung zügig umsetzen können.
      </p>
      <a href="#kontakt" className="agency-primary-cta mt-9 inline-flex text-sm font-medium">
        Kontakt →
      </a>
      <p className="agency-availability mt-5 text-xs text-ink-muted">
        Aktuell verfügbar · remote im DACH-Raum
      </p>
    </header>
  );
}

function Tracks() {
  const tracks = [
    {
      title: "Requirements & Product",
      subtitle: "Von der Idee zur umsetzbaren Lösung",
      items: [
        "Fachliche und technische Anforderungen strukturieren",
        "User Flows, User Stories und Akzeptanzkriterien",
        "Schnittstelle zwischen Fachbereich, Design und Entwicklung",
      ],
    },
    {
      title: "Prozesse & Automatisierung",
      subtitle: "Abläufe verstehen und vereinfachen",
      items: [
        "Ist-/Soll-Prozesse und Pain Points analysieren",
        "BPMN 2.0, Workflows und Routing",
        "Automatisierungspotenziale und Anforderungen definieren",
      ],
    },
    {
      title: "AI & GenAI",
      subtitle: "KI als sinnvoller Prozessbaustein",
      items: [
        "Use Cases bewerten und Anforderungen definieren",
        "LLM-Workflows und interne Assistenten konzipieren",
        "Human-in-the-loop, Datenzugriff und Datenschutz mitdenken",
      ],
    },
  ];

  return (
    <section id="sparten" className="agency-tracks mb-24 scroll-mt-24 md:mb-32">
      <p className="agency-eyebrow mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        01 — Leistungen
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
        Wo ich Ihr Projekt entlaste.
      </h2>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {tracks.map((track) => (
          <div key={track.title} className="agency-paper-card border border-line bg-surface p-7">
            <span className="agency-card-tape" aria-hidden="true" />
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
    { title: "Workshop", body: "Ziele, Anforderungen und nächste Schritte in kurzer Zeit klären." },
    {
      title: "Konzeptionsphase",
      body: "Prozesse und Requirements bis zur umsetzbaren Übergabe ausarbeiten.",
    },
    {
      title: "Projektbegleitung",
      body: "Ihr Team laufend bei Analyse, Abstimmung und Dokumentation unterstützen.",
    },
  ];
  const deliverables = [
    "Requirements",
    "User Flows",
    "User Stories",
    "Akzeptanzkriterien",
    "BPMN-Prozesse",
    "Automatisierungskonzept",
  ];

  return (
    <section id="formate" className="agency-formats mb-24 scroll-mt-24 md:mb-32">
      <p className="agency-eyebrow mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        02 — Zusammenarbeit
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
        Passend zur Projektphase.
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {formats.map((format) => (
          <div key={format.title} className="agency-format-note border-t border-line pt-6">
            <h3 className="font-display text-xl font-semibold text-ink">{format.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{format.body}</p>
          </div>
        ))}
      </div>
      <ul className="agency-deliverables mt-10 flex flex-wrap gap-2">
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
    <SectionHeader id="profil" no="03" title="Profil">
      <div className="agency-profile-grid grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">
            IT-Projektmanagement & Digitalisierung
          </h3>
          <p className="mt-2 text-sm text-ink-muted">Projekterfahrung seit 2017</p>
          <ul className="agency-profile-points mt-7 space-y-3 text-ink-muted">
            <li>Anforderungen, Prozesse und Automatisierungspotenziale analysieren</li>
            <li>CRM-Workflows und digitale Abläufe strukturieren</li>
            <li>Projekte von der Konzeption bis zum produktiven Einsatz begleiten</li>
          </ul>
        </div>
        <div className="border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
            Qualifikation
          </p>
          <p className="mt-5 font-display font-semibold text-ink">
            Hochschulabschluss: Informationssysteme & -technologien
          </p>
          <p className="mt-2 font-display font-semibold text-ink">Master Optotechnik & Robotik</p>
          <p className="mt-5 text-sm leading-relaxed text-ink-muted">
            Berufsbezeichnung Ingenieurin in Nordrhein-Westfalen anerkannt. DE · EN · RU.
          </p>
        </div>
      </div>
    </SectionHeader>
  );
}

function Konditionen() {
  return (
    <SectionHeader id="konditionen" no="04" title="Konditionen">
      <div className="agency-terms-grid grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="agency-rate font-display text-5xl font-bold text-ink md:text-6xl">
            ab 55 €/Std
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            Rahmen und Umfang nach Projekt · Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
          </p>
        </div>
        <div className="text-lg leading-relaxed text-ink-muted">
          <p>Stunden- oder pauschalbasiert · remote im DACH-Raum · NDA möglich.</p>
          <p className="mt-4 text-sm text-ink">Aktuell verfügbar.</p>
        </div>
      </div>
    </SectionHeader>
  );
}

function Contact() {
  return (
    <section
      id="kontakt"
      className="agency-paper-contact scroll-mt-24 border border-line bg-surface-2 p-10 text-center md:p-16"
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          05 — Kontakt
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Projekt kurz besprechen.
        </h2>
        <p className="mt-6 text-lg text-ink-muted">
          Projektphase und gewünschte Unterstützung genügen für eine erste Einschätzung.
        </p>
        <ContactLinks emailSubject="Projektanfrage über schetti.com" />
        <p className="mt-5 text-xs text-ink-muted">Aktuell verfügbar · remote im DACH-Raum</p>
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
    <section id={id} className="agency-paper-section mb-24 scroll-mt-24 md:mb-32">
      <div className="mb-10 flex items-baseline gap-6 border-b border-line pb-4">
        <span className="agency-section-number olga-hand text-accent">{no}</span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
