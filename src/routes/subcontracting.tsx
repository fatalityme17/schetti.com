import { createFileRoute } from "@tanstack/react-router";
import { EnvelopeSimple, PaperPlaneTilt, Phone, WhatsappLogo } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { Page } from "@/components/site-layout";

export const Route = createFileRoute("/subcontracting")({
  head: () => ({
    meta: [
      { title: "Business Analyst & Prozessmanagement für Projektteams | Olga Schetti" },
      {
        name: "description",
        content:
          "Externe Business- und Process-Analystin für Requirements Engineering, BPMN, Prozessanalyse, Digitalisierung und Workflow-Automatisierung im DACH-Raum.",
      },
      {
        property: "og:title",
        content: "Business Analyst & Prozessmanagement für Projektteams",
      },
      {
        property: "og:description",
        content:
          "Externe Business- und Process-Analystin für Requirements Engineering, BPMN, Prozessanalyse, Digitalisierung und Workflow-Automatisierung im DACH-Raum.",
      },
      { property: "og:url", content: "/subcontracting" },
    ],
    links: [
      { rel: "canonical", href: "/subcontracting" },
      { rel: "alternate", hrefLang: "de", href: "/subcontracting" },
    ],
  }),
  component: Subcontracting,
});

function Subcontracting() {
  return (
    <Page>
      <article className="agency-paper-page py-10 md:py-16">
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
        Für Unternehmen, Agenturen & Projektteams
      </p>
      <h1 className="max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl">
        Externe Business- & Process-Analystin für digitale Projekte.
      </h1>
      <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-ink-muted md:text-2xl">
        Ich analysiere und strukturiere Anforderungen, Prozesse und Schnittstellen, damit
        Fachbereich und Entwicklung digitale Lösungen effizient umsetzen können.
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
      title: "Requirements & Business Analysis",
      subtitle: "Von der fachlichen Anforderung zur umsetzbaren Lösung",
      items: [
        "Fachliche und technische Anforderungen analysieren und strukturieren",
        "User Stories, Akzeptanzkriterien und fachliche Spezifikationen erstellen",
        "Schnittstellen zwischen Fachbereich, IT und externen Systemen klären",
        "Anforderungen und Entscheidungen nachvollziehbar dokumentieren",
      ],
    },
    {
      title: "Prozesse & Digitalisierung",
      subtitle: "Bestehende Abläufe verstehen, modellieren und verbessern",
      items: [
        "Ist-/Soll-Prozesse und Pain Points analysieren",
        "BPMN 2.0, Workflows, Verantwortlichkeiten und Schnittstellen modellieren",
        "Manuelle Arbeitsschritte und Digitalisierungspotenziale identifizieren",
        "CRM-, Formular- und digitale Kundenprozesse optimieren",
      ],
    },
    {
      title: "Automatisierung & fachliche Qualitätssicherung",
      subtitle: "Digitale Abläufe sinnvoll automatisieren und fachlich prüfen",
      items: [
        "Automatisierungspotenziale und Workflow-Logiken analysieren",
        "Low-Code-/No-Code- und geeignete KI-Werkzeuge in Prozesse einbeziehen",
        "Routing-, Entscheidungs- und Ausnahmefälle fachlich prüfen",
        "Testfälle und Akzeptanzkriterien für digitale Lösungen definieren",
      ],
    },
  ];

  return (
    <section id="sparten" className="agency-tracks mb-24 scroll-mt-24 md:mb-32">
      <p className="agency-eyebrow mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        Leistungen
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
        Wo ich Ihr Projekt entlaste.
      </h2>
      <div className="agency-track-grid mt-10 grid lg:grid-cols-3">
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
    {
      title: "Workshop",
      body: "Ziele, Prozesse, Anforderungen und offene Fragen strukturiert klären.",
    },
    {
      title: "Konzeptionsphase",
      body: "Prozesse und Requirements analysieren und bis zur umsetzbaren Übergabe ausarbeiten.",
    },
    {
      title: "Projektbegleitung",
      body: "Ihr Team laufend bei Analyse, Abstimmung, Testing und Dokumentation unterstützen.",
    },
  ];
  const deliverables = [
    "Requirements",
    "Prozessanalyse",
    "User Stories",
    "Akzeptanzkriterien",
    "BPMN",
    "Workflow-Konzeption",
    "Testing",
    "Automatisierung",
  ];

  return (
    <section id="formate" className="agency-formats mb-24 scroll-mt-24 md:mb-32">
      <p className="agency-eyebrow mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        Zusammenarbeit
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
        Passend zur Projektphase.
      </h2>
      <div className="agency-format-grid mt-10 grid gap-8 md:grid-cols-3">
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
    <SectionHeader id="profil" title="Profil">
      <div className="agency-profile-grid grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="agency-profile-column">
          <h3 className="font-display text-2xl font-semibold text-ink">
            Business Analysis · Prozessmanagement · Digitalisierung
          </h3>
          <p className="mt-2 text-sm text-ink-muted">
            Mehrjährige Erfahrung an der Schnittstelle zwischen Fachbereich und IT.
          </p>
          <ul className="agency-profile-points mt-7 space-y-3 text-ink-muted">
            <li>Geschäftsprozesse, Anforderungen und Automatisierungspotenziale analysieren</li>
            <li>CRM-, Formular- und Workflow-Prozesse strukturieren und weiterentwickeln</li>
            <li>Fachliche und technische Anforderungen für digitale Lösungen definieren</li>
          </ul>
        </div>
        <div className="agency-profile-column border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <h3 className="font-display text-2xl font-semibold text-ink">Fokus in der Umsetzung</h3>
          <p className="mt-2 text-sm text-ink-muted">
            Von der fachlichen Klärung bis zum produktiven Einsatz.
          </p>
          <ul className="agency-profile-points mt-7 space-y-3 text-ink-muted">
            <li>Backlogs, Tests und Einführung neuer Funktionen fachlich begleiten</li>
            <li>
              Digitale Projekte von der Konzeption bis zum produktiven Einsatz unterstützen
            </li>
            <li>
              Erfahrung mit automatisierten Chat-Lösungen, Workflow-Routing und KI-gestützten
              Werkzeugen
            </li>
          </ul>
        </div>
        <div className="agency-profile-credentials md:col-span-2">
          <span>Hochschulabschluss · Informationssysteme & -technologien</span>
          <span>Anerkannte Ingenieurin in Deutschland</span>
          <span>DE · EN · RU</span>
        </div>
      </div>
    </SectionHeader>
  );
}

function Konditionen() {
  return (
    <SectionHeader id="konditionen" title="Konditionen">
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
          Kontakt
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Projekt kurz besprechen.
        </h2>
        <p className="mt-6 text-lg text-ink-muted">
          Projektphase und gewünschte Unterstützung genügen für eine erste Einschätzung.
        </p>
        <AgencyContactLinks />
        <p className="mt-5 text-xs text-ink-muted">Aktuell verfügbar · remote im DACH-Raum</p>
      </div>
    </section>
  );
}

function SectionHeader({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="agency-paper-section mb-24 scroll-mt-24 md:mb-32">
      <div className="mb-10 flex items-baseline gap-6 border-b border-line pb-4">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function AgencyContactLinks() {
  return (
    <div className="paper-contact-grid agency-contact-grid" aria-label="Kontaktmöglichkeiten">
      <a href={`mailto:info@schetti.com?subject=${encodeURIComponent("Projektanfrage über schetti.com")}`}>
        <EnvelopeSimple size={25} aria-hidden="true" />
        <span>
          E-Mail
          <small>info@schetti.com</small>
        </span>
      </a>
      <a href="tel:+4915205215760">
        <Phone size={25} aria-hidden="true" />
        <span>
          Anrufen
          <small>+49 1520 5215760</small>
        </span>
      </a>
      <a href="https://wa.me/4915205215760" target="_blank" rel="noopener noreferrer">
        <WhatsappLogo size={25} aria-hidden="true" />
        <span>
          WhatsApp
          <small>+49 1520 5215760</small>
        </span>
      </a>
      <a href="https://t.me/fatalityme" target="_blank" rel="noopener noreferrer">
        <PaperPlaneTilt size={25} aria-hidden="true" />
        <span>
          Telegram
          <small>@fatalityme</small>
        </span>
      </a>
    </div>
  );
}
