import {
  ArrowRight,
  ChatsCircle,
  Check,
  EnvelopeSimple,
  GearSix,
  Headphones,
  List,
  Monitor,
  PencilSimple,
  PaperPlaneTilt,
  Phone,
  ShareNetwork,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Page } from "@/components/site-layout";
import { RoughMark } from "@/components/rough-mark";

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
    heroProof: ["Website als klare Basis", "Passende Module nach Bedarf", "Persönlich umgesetzt"],
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
      { title: "Onepage-Website" },
      {
        title: "Passende Module für Ihr Unternehmen",
        detail:
          "z. B. Google-Unternehmensprofil, WhatsApp Business, Online-Terminbuchung usw.",
      },
    ],
    price: "490 €",
    tax: "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.",
    extras: "Hosting, Domain und weitere Leistungen werden separat berechnet.",
    cta: "Kurz erzählen.",
    processLabel: "ABLAUF",
    process: [
      ["Klären.", "Sie erzählen, ich stelle die richtigen Fragen."],
      ["Planen.", "Wir klären das Wesentliche und setzen Prioritäten."],
      ["Einrichten.", "Ich baue Ihre Lösung – klar, responsiv, DSGVO-konform."],
      ["Übergeben.", "Sie sind online. Ich bleibe an Ihrer Seite."],
    ],
    servicesTitle: "Weitere Leistungen — wenn Sie sie brauchen.",
    servicesIntro:
      "Der Schnellstart ist die Basis. Weitere Bausteine kommen nur dazu, wenn sie für Ihr Unternehmen sinnvoll sind.",
    servicesOptional: "Optional zubuchbar · gegen Aufpreis",
    serviceGroups: [
      {
        title: "Corporate Design & Print",
        items: [
          ["Corporate Design", "+ 290 €"],
          ["Visitenkarten & Flyer", "auf Anfrage"],
        ],
      },
      {
        title: "Automatisierung & KI",
        items: [
          ["KI-Assistent / Automatisierung", "ab 390 €"],
          ["Einfache CRM-Lösungen", "nach Absprache"],
        ],
      },
      {
        title: "Laufende IT-Hilfe",
        items: [
          ["IT-Hilfe & Betreuung", "ab 39 €/Stunde"],
          ["Mehrsprachige Websites", "nach Absprache"],
          ["Individuelle IT-Projekte", "nach Absprache"],
        ],
      },
      {
        title: "SMM-Basisbetreuung",
        note: "Gelegentliche Beiträge · keine Reichweiten- oder Influencer-Kampagnen",
        items: [
          ["Beiträge für Ihre digitale Präsenz", "nach Absprache"],
          ["Keine Reichweiten- oder Influencer-Kampagnen", ""],
        ],
      },
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
} as const;

const processIcons = [ChatsCircle, PencilSimple, Monitor, PaperPlaneTilt];
const serviceIcons = [PencilSimple, GearSix, Headphones, ShareNetwork];

export function EditorialHome() {
  const t = copy.de;

  return (
    <Page variant="folder">
      <article className="paper-site-shell">
        <header className="paper-site-header">
          <a href="/" className="paper-site-brand">
            <strong>{t.brand}</strong>
            <span> - {t.role}</span>
          </a>
          <nav className="paper-site-nav" aria-label="Hauptnavigation">
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
          </div>
          <details className="paper-mobile-menu">
            <summary aria-label="Menü öffnen">
              <List size={28} weight="regular" aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile Navigation">
              {t.nav.map(([href, label]) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
              <a href={t.agencyHref}>{t.agency}</a>
            </nav>
          </details>
        </header>

        <main className="paper-site-main">
          <section className="paper-hero">
            <div className="paper-hero-copy">
              <h1>
                <span>{t.heroTop}</span>
                <em>{t.heroBand}</em>
              </h1>
              <p className="olga-hand paper-hero-note">
                <RoughMark>{t.heroHand}</RoughMark>
              </p>
            </div>
            <aside className="paper-hero-proof" aria-label="Das Angebot auf einen Blick">
              <span className="paper-tape" aria-hidden="true" />
              <strong>SCHNELLSTART</strong>
              <ul>
                {t.heroProof.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#starter">
                Was ist dabei
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </aside>
          </section>

          <div className="paper-offer-process-services">
            <section id="starter" className="paper-offer scroll-mt-24">
              <div className="paper-label">{t.offerLabel}</div>
              <h2>{t.offerTitle}</h2>
              <p className="paper-offer-intro">{t.offerIntro}</p>
              <ul>
                {t.offerItems.map((item) => (
                  <li key={item.title}>
                    <Check size={18} weight="bold" aria-hidden="true" />
                    <span>
                      {item.title}
                      {"detail" in item ? (
                        <small className="paper-offer-module-examples">
                          {item.detail}
                        </small>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="paper-price">{t.price}</div>
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
            <section className="paper-services">
              <p className="paper-services-option-note">{t.servicesOptional}</p>
              <div className="paper-services-copy">
                <h2>{t.servicesTitle}</h2>
                <p>{t.servicesIntro}</p>
                <blockquote className="olga-hand">{t.servicesNote}</blockquote>
              </div>
              <div className="paper-service-slips">
                {t.serviceGroups.map((group, index) => {
                  const Icon = serviceIcons[index];
                  return (
                    <article key={group.title}>
                      <div className="paper-service-title">
                        <Icon size={25} weight="thin" aria-hidden="true" />
                        <div>
                          <h3 className="olga-hand">{group.title}</h3>
                          {"note" in group ? (
                            <small className="paper-service-summary">
                              {group.note}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <ul>
                        {group.items.map(([name, price]) => (
                          <li key={name}>
                            <span>{name}</span>
                            <strong>{price}</strong>
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>

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
                aria-label="Kontaktmöglichkeiten"
              >
                <a
                  href={`mailto:info@schetti.com?subject=${encodeURIComponent("Website für mein Unternehmen")}`}
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
