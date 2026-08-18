import { createFileRoute } from "@tanstack/react-router";
import { ContactLinks, Page } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olga Schetti — Digitale Infrastruktur für kleine Unternehmen" },
      {
        name: "description",
        content:
          "Website, Google-Unternehmensprofil, WhatsApp Business und klare Kontaktwege für kleine Unternehmen im DACH-Raum.",
      },
      {
        property: "og:title",
        content: "Olga Schetti — Digitale Infrastruktur für kleine Unternehmen",
      },
      {
        property: "og:description",
        content:
          "Die digitale Basis für kleine Unternehmen: online sichtbar, verständlich eingerichtet und persönlich begleitet.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "de", href: "/" },
      { rel: "alternate", hrefLang: "ru", href: "/ru" },
    ],
  }),
  component: Home,
});

function Home() {
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
        Digitale Infrastruktur für kleine Unternehmen
      </p>
      <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-6xl">
        Online sichtbar. Digital gut aufgestellt.
      </h1>
      <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-ink-muted md:text-xl">
        Ich richte die digitale Basis für Ihr Unternehmen ein — Website, Google-Unternehmensprofil,
        WhatsApp Business und klare Kontaktwege. Verständlich, direkt und aus einer Hand.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <a
          href="#starter"
          className="inline-flex items-center bg-ink px-6 py-3 font-display font-medium tracking-wide text-background transition hover:bg-accent"
        >
          Digitale Basis für 490 € ansehen
        </a>
        <a
          href="#kontakt"
          className="inline-flex items-center border-b border-ink/40 pb-0.5 font-medium text-ink transition hover:border-accent hover:text-accent"
        >
          Projekt kurz besprechen →
        </a>
      </div>
      <p className="mt-5 text-xs text-ink-muted">Aktuell verfügbar · remote im DACH-Raum</p>
    </header>
  );
}

function Trust() {
  const items = [
    { k: "Zusammenarbeit", v: "Direkt mit Olga" },
    { k: "Qualifikation", v: "Ingenieurin (IT)" },
    { k: "Rückmeldung", v: "Innerhalb eines Werktages" },
    { k: "Sprachen", v: "DE · EN · RU" },
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
    "Deutschsprachige One-Page-Website",
    "Google-Unternehmensprofil eingerichtet oder vorbereitet",
    "WhatsApp Business gemeinsam eingerichtet",
    "Klare Kontaktwege für E-Mail und WhatsApp",
    "Bis zu zwei Social-Media-Profile vorbereitet",
    "Bis zu 3 Stunden Korrekturen inklusive",
  ];

  return (
    <section id="starter" className="mb-20 scroll-mt-24 md:mb-28">
      <div className="border border-line bg-surface-2 p-8 md:p-12">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          Digitale Basis
        </p>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              In einer Woche online sichtbar.
            </h2>
            <p className="mt-6 font-display text-5xl font-bold text-ink md:text-6xl">490 €</p>
            <p className="mt-2 text-sm text-ink-muted">
              Einmalpreis für den beschriebenen Leistungsumfang
            </p>
            <p className="mt-1 text-xs text-ink-muted/80">
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
            </p>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center bg-ink px-6 py-3 font-display font-medium tracking-wide text-background transition hover:bg-accent"
            >
              Erstgespräch anfragen →
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
          Voraussetzung: Inhalte und Zugänge liegen vor. Domain, Hosting und kostenpflichtige
          Drittanbieter-Dienste sind nicht enthalten.
        </p>
        <div className="mt-8 border-t border-line pt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
            Modular erweiterbar
          </p>
          <div className="mt-4 grid gap-4 text-sm md:grid-cols-3">
            <div>
              <span className="font-semibold text-ink">Corporate Design</span>
              <span className="ml-2 text-accent">+ 290 €</span>
            </div>
            <div>
              <span className="font-semibold text-ink">KI-Assistent / Automatisierung</span>
              <span className="ml-2 text-accent">ab 390 €</span>
            </div>
            <div>
              <span className="font-semibold text-ink">Care-Paket</span>
              <span className="ml-2 text-accent">ab 39 €/Monat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    { no: "01", title: "Klären", body: "Ziel, Inhalte und vorhandene Zugänge abstimmen." },
    { no: "02", title: "Einrichten", body: "Die passende digitale Basis sauber aufbauen." },
    {
      no: "03",
      title: "Übergeben",
      body: "Gemeinsam prüfen, korrigieren und verständlich übergeben.",
    },
  ];

  return (
    <section id="leistungen" className="mb-20 scroll-mt-24 md:mb-28">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
        So läuft es
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Drei klare Schritte.
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
        Über mich
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Technik verständlich umgesetzt.
      </h2>
      <div className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
        <p>
          Ich bin Olga Schetti, Ingenieurin für Informationstechnologie. Ich verbinde technisches
          Verständnis mit Erfahrung in Digitalisierung und IT-Projekten — damit kleine Unternehmen
          online professionell auftreten und ihre digitale Basis selbst verstehen.
        </p>
        <p className="mt-4 text-sm">
          Die Berechtigung zum Führen der Berufsbezeichnung Ingenieurin wurde in Nordrhein-Westfalen
          anerkannt.
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
          Kontakt
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Lassen Sie uns Ihre digitale Basis klären.
        </h2>
        <p className="mt-5 leading-relaxed text-ink-muted">
          Zwei bis drei Sätze zu Ihrem Unternehmen genügen. Ich antworte innerhalb eines Werktages.
        </p>
        <ContactLinks emailSubject="Digitale Basis für mein Unternehmen" />
        <p className="mt-5 text-xs text-ink-muted">Aktuell verfügbar · remote im DACH-Raum</p>
      </div>
    </section>
  );
}
