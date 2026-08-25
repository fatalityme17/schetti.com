import { Link, useRouterState } from "@tanstack/react-router";
import type { MouseEvent, ReactNode } from "react";

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isSubcontracting = pathname === "/subcontracting";
  const homeHref = "/";
  const navItems = isSubcontracting
    ? [
        { href: "#sparten", label: "Leistungen" },
        { href: "#formate", label: "Formate" },
        { href: "#profil", label: "Profil" },
        { href: "#konditionen", label: "Konditionen" },
      ]
    : [
        { href: `${homeHref}#starter`, label: "Angebot" },
        { href: `${homeHref}#leistungen`, label: "Ablauf" },
        { href: `${homeHref}#ueber-mich`, label: "Über mich" },
      ];
  const contactHref = isSubcontracting ? "#kontakt" : `${homeHref}#kontakt`;
  const audienceLink = isSubcontracting
    ? { href: homeHref, label: "Für Unternehmen" }
    : {
        href: "/subcontracting",
        label: "Für Agenturen",
      };

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href={homeHref} className="flex min-w-0 items-baseline gap-3">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Olga Schetti
          </span>
          <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-muted lg:inline">
            — IT-Freiberuflerin
          </span>
        </a>
        <nav className="hidden items-center gap-5 text-sm text-ink-muted md:flex lg:gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 lg:gap-5">
          <a
            href={audienceLink.href}
            className="hidden text-sm font-medium text-ink-muted transition hover:text-ink md:inline-flex"
          >
            {audienceLink.label}
          </a>
          <a
            href={contactHref}
            className="hidden items-center border-b-2 border-accent pb-0.5 text-sm font-medium text-ink transition hover:text-accent sm:inline-flex"
          >
            Kontakt
          </a>
          <details className="group relative md:hidden">
            <summary className="cursor-pointer list-none border-b-2 border-accent pb-0.5 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
              Menü
            </summary>
            <nav className="absolute right-0 top-10 z-50 flex w-56 flex-col border border-line bg-background p-2 text-sm shadow-[0_18px_50px_rgba(42,31,23,0.14)]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 hover:bg-surface"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={audienceLink.href}
                onClick={closeMobileMenu}
                className="px-4 py-3 hover:bg-surface"
              >
                {audienceLink.label}
              </a>
              <a
                href={contactHref}
                onClick={closeMobileMenu}
                className="px-4 py-3 font-semibold text-accent hover:bg-surface"
              >
                Kontakt
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const homeHref = "/";
  const agencyHref = "/subcontracting";

  return (
    <footer className="border-t border-line/70">
      <div className="container-page flex flex-col gap-4 py-10 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display font-semibold text-ink">
            Olga Schetti — IT-Freiberuflerin
          </div>
          <div className="mt-1 text-xs">Emmerich am Rhein · DACH remote</div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
          <a href="mailto:info@schetti.com" className="hover:text-ink">
            info@schetti.com
          </a>
          <a href="tel:+4915205215760" className="hover:text-ink">
            +49 1520 5215760
          </a>
          <a
            href="https://wa.me/4915205215760"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/fatalityme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            Telegram
          </a>
          <a href={`${homeHref}#starter`} className="hover:text-ink">
            Angebot
          </a>
          <a href={`${homeHref}#leistungen`} className="hover:text-ink">
            Ablauf
          </a>
          <a href={agencyHref} className="hover:text-ink">
            Für Agenturen
          </a>
          <Link to="/impressum" className="hover:text-ink">
            Impressum
          </Link>
          <Link to="/datenschutz" className="hover:text-ink">
            Datenschutz
          </Link>
        </div>
      </div>
      <div className="container-page pb-8 text-[11px] text-ink-muted/70">
        © {new Date().getFullYear()} Olga Schetti
      </div>
    </footer>
  );
}

export function ContactLinks({
  emailSubject,
}: {
  emailSubject?: string;
}) {
  const emailHref = emailSubject
    ? `mailto:info@schetti.com?subject=${encodeURIComponent(emailSubject)}`
    : "mailto:info@schetti.com";

  const links = [
    { href: emailHref, label: "info@schetti.com" },
    { href: "tel:+4915205215760", label: "+49 1520 5215760" },
    { href: "https://wa.me/4915205215760", label: "WhatsApp", external: true },
    { href: "https://t.me/fatalityme", label: "Telegram @fatalityme", external: true },
  ];

  return (
    <div
      className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm"
      aria-label="Kontaktmöglichkeiten"
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="border-b border-ink/30 pb-0.5 font-medium text-ink transition hover:border-accent hover:text-accent"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function Page({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "folder";
}) {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-ink">
      {variant === "default" ? <SiteHeader /> : null}
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
