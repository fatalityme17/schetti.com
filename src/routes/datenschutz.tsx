import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — Olga Schetti" },
      {
        name: "description",
        content:
          "Informationen zur Verarbeitung personenbezogener Daten auf schetti.com nach DSGVO.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Datenschutzerklärung — Olga Schetti" },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <Page>
      <article className="container-page py-20 md:py-28">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          Rechtliches
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-8 text-lg text-ink-muted">
          Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.
        </p>

        <div className="mt-16 space-y-14 text-ink">
          <Section title="1. Verantwortliche Stelle">
            <p>Olga Schetti</p>
            <p>Moritz-von-Nassau-Str. 26a</p>
            <p>46446 Emmerich am Rhein</p>
            <p>Deutschland</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@schetti.com" className="text-accent hover:underline">
                info@schetti.com
              </a>
            </p>
          </Section>

          <Section title="2. Hosting">
            <p>
              Diese Website wird bei einem externen Hosting-Anbieter bereitgestellt. Beim Aufruf der
              Website werden technisch erforderliche Verbindungsdaten verarbeitet, insbesondere die
              IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer sowie Browser-
              und Betriebssystem-Informationen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse am sicheren und stabilen Betrieb der Website).
            </p>
          </Section>

          <Section title="3. Kontaktaufnahme per E-Mail">
            <p>
              Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung der Anfrage
              und für mögliche Anschlussfragen verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
              DSGVO, soweit die Kommunikation der Anbahnung oder Durchführung eines Vertrags dient,
              andernfalls Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              Die Daten werden gelöscht, wenn die Anfrage abschließend bearbeitet wurde und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </Section>

          <Section title="4. Schriftarten">
            <p>
              Die auf dieser Website verwendeten Schriftarten werden lokal vom Server dieser Website
              ausgeliefert. Beim Laden der Schriftarten wird keine Verbindung zu Servern von
              Drittanbietern hergestellt und es werden keine Daten an Dritte übermittelt.
            </p>
          </Section>

          <Section title="5. Cookies und Analyse">
            <p>
              Diese Website setzt keine eigenen Cookies ein und verwendet keine Webanalyse-Dienste
              oder Marketing-Skripte.
            </p>
          </Section>

          <Section title="6. Ihre Rechte">
            <p>
              Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
              und Widerspruch. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde
              beschweren.
            </p>
          </Section>

          <Section title="7. Aktualisierung dieser Erklärung">
            <p>
              Diese Datenschutzerklärung wird angepasst, wenn sich die Website, die eingesetzten
              Dienste oder die rechtlichen Anforderungen ändern.
            </p>
          </Section>
        </div>

        <div className="mt-20 border-t border-line pt-8">
          <Link to="/" className="text-sm font-medium text-accent hover:text-ink">
            ← Zur Startseite
          </Link>
        </div>
      </article>
    </Page>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-lg leading-relaxed text-ink-muted">{children}</div>
    </section>
  );
}
