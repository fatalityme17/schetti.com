import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import manropeFont from "@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2?url";
import soraFont from "@fontsource-variable/sora/files/sora-latin-wght-normal.woff2?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-medium text-foreground">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Diese Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-medium tracking-tight text-foreground">
          Die Seite konnte nicht geladen werden
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Etwas ist schiefgelaufen. Bitte erneut versuchen oder zur Startseite zurückkehren.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Olga Schetti — IT-Freiberuflerin" },
      {
        name: "description",
        content:
          "Freiberufliche IT-Ingenieurin für Business Analysis, Prozessdigitalisierung, Automatisierung und pragmatische AI-Lösungen im DACH-Raum.",
      },
      { name: "author", content: "Olga Schetti" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Olga Schetti" },
      { property: "og:title", content: "Olga Schetti — Digitalisierung, Prozesse & AI" },
      {
        property: "og:description",
        content:
          "Business Analysis, Prozessdigitalisierung, Automatisierung und pragmatische AI-Lösungen — für kleine Unternehmen und Projektteams im DACH-Raum.",
      },
      { property: "og:image", content: "https://schetti.com/og.png" },
      { property: "og:image:width", content: "1728" },
      { property: "og:image:height", content: "910" },
      { property: "og:image:alt", content: "Olga Schetti — Digital einfacher arbeiten." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Olga Schetti — Digital einfacher arbeiten." },
      {
        name: "twitter:description",
        content:
          "Digitalisierung, Prozesse und Automatisierung für kleine Unternehmen im DACH-Raum.",
      },
      { name: "twitter:image", content: "https://schetti.com/og.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        href: manropeFont,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: soraFont,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const language = useRouterState({
    select: (state) => (state.location.pathname.startsWith("/ru") ? "ru" : "de"),
  });

  return (
    <html lang={language}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
