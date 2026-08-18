# Your Business Buddy

Website von Olga Schetti auf Basis von TanStack Start, Vite, React und Tailwind CSS.

## Run locally

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
pnpm start
```

## Routes

- `/` — services for self-employed people and small businesses
- `/ru` — Russian version for self-employed people and small businesses
- `/subcontracting` — Business Analysis / Processes / AI for agencies and project teams
- `/ru/subcontracting` — Russian version for agencies and project teams
- `/impressum`
- `/datenschutz`

The legal pages remain in German. Every marketing page has a `DE / RU` language switch.

## Deployment

Der Produktions-Build erzeugt alle Seiten statisch in `.output/public`. Ein Push in den
`main`-Branch veröffentlicht diesen Ordner automatisch über GitHub Actions auf GitHub Pages.
Die Custom Domain `schetti.com` wird über `public/CNAME` beibehalten.
