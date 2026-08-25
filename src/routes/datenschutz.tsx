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
      <article className="legal-paper-page container-page py-20 md:py-28">
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
            <p>
              Telefon:{" "}
              <a href="tel:+4915205215760" className="text-accent hover:underline">
                +49 1520 5215760
              </a>
            </p>
          </Section>

          <Section title="2. Hosting über GitHub Pages">
            <p>
              Diese Website wird über den Hosting-Dienst GitHub Pages bereitgestellt. Beim Aufruf
              der Website verarbeitet GitHub insbesondere die IP-Adresse und weitere technisch
              erforderliche Verbindungsdaten. Die Verarbeitung dient der sicheren und stabilen
              Bereitstellung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das
              berechtigte Interesse liegt im sicheren, zuverlässigen und technisch fehlerfreien
              Betrieb des Online-Angebots.
            </p>
            <p>
              Eine Verarbeitung von Daten in den USA kann dabei nicht ausgeschlossen werden. GitHub
              informiert in seiner Datenschutzerklärung über Empfänger, Speicherdauer und die für
              internationale Datenübermittlungen eingesetzten Garantien:{" "}
              <a
                href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub-Datenschutzerklärung
              </a>
              .
            </p>
          </Section>

          <Section title="3. Kontaktaufnahme per E-Mail oder Telefon">
            <p>
              Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden Ihre Kontaktdaten und die
              mitgeteilten Inhalte zur Bearbeitung der Anfrage und für mögliche Anschlussfragen
              verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Kommunikation
              der Anbahnung oder Durchführung eines Vertrags dient, andernfalls Art. 6 Abs. 1 lit. f
              DSGVO. Das berechtigte Interesse liegt in der sachgerechten Beantwortung Ihrer
              Anfrage.
            </p>
            <p>
              Die Daten werden gelöscht, wenn die Anfrage abschließend bearbeitet wurde und keine
              vertraglichen oder gesetzlichen Aufbewahrungspflichten entgegenstehen. Empfänger
              können die für E-Mail und Telekommunikation eingesetzten Dienstleister sein.
            </p>
          </Section>

          <Section title="4. Kontakt über WhatsApp und Telegram">
            <p>
              Auf der Website befinden sich reine Links zu WhatsApp und Telegram. Erst wenn Sie
              einen solchen Link anklicken, wird eine Verbindung zum jeweiligen Anbieter
              hergestellt. Für die Nutzung gelten die Datenschutzbestimmungen des jeweiligen
              Anbieters.
            </p>
            <p>
              Wenn Sie über WhatsApp Kontakt aufnehmen, werden insbesondere Ihre Telefonnummer,
              Profilangaben und die von Ihnen übermittelten Kommunikationsinhalte verarbeitet. Wenn
              Sie Telegram nutzen, können insbesondere Ihr Nutzername, Profilangaben und die
              Kommunikationsinhalte verarbeitet werden. Die Nutzung dieser Kanäle ist freiwillig;
              alternativ stehen E-Mail und Telefon zur Verfügung.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn die Kommunikation der Anbahnung
              oder Durchführung eines Vertrags dient, andernfalls Art. 6 Abs. 1 lit. f DSGVO. Eine
              Verarbeitung außerhalb der EU bzw. des EWR kann nicht ausgeschlossen werden. Weitere
              Informationen finden Sie in den Datenschutzerklärungen von{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                WhatsApp
              </a>{" "}
              und{" "}
              <a
                href="https://telegram.org/privacy?setln=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Telegram
              </a>
              .
            </p>
          </Section>

          <Section title="5. Schriftarten">
            <p>
              Die auf dieser Website verwendeten Schriftarten werden lokal vom Server dieser Website
              ausgeliefert. Beim Laden der Schriftarten wird keine zusätzliche Verbindung zu
              externen Schriftarten-Anbietern wie Google Fonts hergestellt.
            </p>
          </Section>

          <Section title="6. Cookies, lokale Speicherung und Analyse">
            <p>
              Diese Website setzt keine eigenen Cookies ein, speichert keine Informationen im
              Browser und verwendet keine Webanalyse-Dienste, Marketing-Skripte oder eingebettete
              Inhalte von Drittanbietern. Daher wird derzeit kein Einwilligungsbanner eingesetzt.
              Beim Anklicken externer Links können die jeweiligen Anbieter eigene Technologien nach
              ihren Datenschutzbestimmungen verwenden.
            </p>
          </Section>

          <Section title="7. Ihre Rechte und Beschwerdemöglichkeit">
            <p>
              Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
              und Widerspruch. Sie können sich außerdem bei einer Datenschutzaufsichtsbehörde
              beschweren, insbesondere bei der für Nordrhein-Westfalen zuständigen{" "}
              <a
                href="https://www.ldi.nrw.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
              </a>
              .
            </p>
          </Section>

          <Section title="8. Aktualisierung dieser Erklärung">
            <p>
              Diese Datenschutzerklärung wird angepasst, wenn sich die Website, die eingesetzten
              Dienste oder die rechtlichen Anforderungen ändern.
            </p>
            <p>Stand: August 2026.</p>
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
    <section className="legal-paper-section">
      <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-lg leading-relaxed text-ink-muted">{children}</div>
    </section>
  );
}
