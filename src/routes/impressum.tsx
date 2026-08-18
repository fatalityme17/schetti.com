import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Olga Schetti" },
      { name: "description", content: "Angaben gemäß § 5 DDG für schetti.com." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Impressum — Olga Schetti" },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <Page>
      <article className="container-page py-20 md:py-28">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          Rechtliches
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
          Impressum
        </h1>
        <p className="mt-8 text-lg text-ink-muted">Angaben gemäß § 5 DDG.</p>

        <div className="mt-16 space-y-14 text-ink">
          <Section title="Diensteanbieterin">
            <p>Olga Schetti</p>
            <p>Freiberufliche IT-Ingenieurin</p>
            <p>Moritz-von-Nassau-Str. 26a</p>
            <p>46446 Emmerich am Rhein</p>
            <p>Deutschland</p>
          </Section>

          <Section title="Kontakt">
            <p>
              E-Mail:{" "}
              <a href="mailto:info@schetti.com" className="text-accent hover:underline">
                info@schetti.com
              </a>
            </p>
          </Section>

          <Section title="Berufsbezeichnung und berufsrechtliche Angaben">
            <p>Berufsbezeichnung: Ingenieurin</p>
            <p>
              Die Berechtigung zum Führen der Berufsbezeichnung wurde in Nordrhein-Westfalen
              anerkannt.
            </p>
            <p>Zuständige Behörde: Bezirksregierung Düsseldorf</p>
            <p>Berufsrechtliche Regelung: Ingenieurgesetz des Landes Nordrhein-Westfalen</p>
          </Section>

          <Section title="Steuerliche Angaben">
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE463807165</p>
            <p>Wirtschafts-Identifikationsnummer gemäß § 139c AO: DE463807165-00001</p>
            <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p>
          </Section>

          <Section title="Verbraucherstreitbeilegung">
            <p>
              Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
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
      <div className="mt-4 space-y-2 text-lg leading-relaxed text-ink-muted">{children}</div>
    </section>
  );
}
