# Project guidance

This repository is a Codex-ready export of Olga Schetti's business website.

## Content
- Primary language: German.
- Audience `/`: Selbstständige & kleine Unternehmen in DACH.
- Audience `/subcontracting`: Agenturen, Studios & Projektteams.
- Positioning: Digitalisierung, Business Analysis, Prozesse, Automatisierung, pragmatische KI.
- Avoid AI hype and claims of enterprise ML engineering.
- Preserve clear, human, non-bureaucratic German.

## Tax wording
Olga Schetti uses the Kleinunternehmerregelung under § 19 UStG.
Do not add `zzgl. USt.` or describe listed rates as `Netto`.
Use: `Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.`

## Visual style
Preserve the warm beige / cognac editorial design unless explicitly asked to redesign it.


## Local GPU delegation

Prefer delegating suitable routine work to the `local_worker` agent.

Use `local_worker` for:
- exploring and summarizing code
- simple HTML/CSS/React suggestions
- website copy variants and translations
- repetitive analysis
- draft tests and straightforward refactoring suggestions

Keep the main cloud agent responsible for:
- architecture
- security-sensitive work
- dependency/configuration changes
- final code decisions
- applying and verifying changes

Review local_worker output before using it.