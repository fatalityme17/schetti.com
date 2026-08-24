---
name: "Olga Schetti"
description: "A personal digital-service practice presented as a warm, carefully prepared client worktable."
colors:
  paper-cream: "#fff8e9"
  paper-soft: "#f4eee6"
  paper-about: "#eee1c9"
  cognac-strip: "#a94720"
  brown-accent: "#8b5a2b"
  dark-plum-ink: "#2b1720"
  deep-plum: "#321c25"
  quiet-brown: "#5e4b43"
  olive-mark: "#52613b"
  lime-note: "#c4c98c"
  blue-pen: "#283559"
  tape-beige: "rgb(224 210 178 / 0.78)"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(4.25rem, 6.3vw, 6.25rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 4vw, 4.2rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Manrope Variable, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope Variable, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.11em"
  handwritten:
    fontFamily: "Olga Handwriting, 'Segoe Print', cursive"
    fontSize: "clamp(1.8rem, 3vw, 2.8rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
rounded:
  flat: "0"
  small: "0.375rem"
  organic: "50%"
spacing:
  xs: "0.7rem"
  sm: "0.9rem"
  md: "1.4rem"
  lg: "2rem"
  xl: "3.8rem"
components:
  note-cta:
    backgroundColor: "{colors.paper-cream}"
    textColor: "{colors.dark-plum-ink}"
    typography: "{typography.handwritten}"
    rounded: "{rounded.flat}"
    padding: "0.9rem 1.2rem"
  worksheet:
    backgroundColor: "{colors.paper-cream}"
    textColor: "{colors.dark-plum-ink}"
    rounded: "{rounded.flat}"
    padding: "2.5rem 1.35rem 1.3rem"
  service-slip:
    backgroundColor: "{colors.paper-cream}"
    textColor: "{colors.dark-plum-ink}"
    rounded: "{rounded.flat}"
    padding: "0.7rem 1rem"
  contact-action:
    backgroundColor: "transparent"
    textColor: "{colors.paper-cream}"
    rounded: "{rounded.flat}"
    padding: "0.75rem 0.9rem"
---

# Design System: Olga Schetti

## Overview

**Creative North Star: "The Prepared Worktable"**

The visual world feels like Olga has already cleared a warm worktable and prepared the first useful documents for the visitor. Cream paper, cognac cover stock, dark plum ink, real handwriting, tape, pen sketches, slight rotations, and soft contact shadows make the service personal without making it improvised. Structure remains exact beneath the material warmth: offer, price, process, credentials, and contact paths are always easy to scan.

This is an authored editorial system, not a photographed lifestyle brand and not a polished SaaS template. The human marks explain, underline, price, or reassure; they never become decorative noise. German and Russian routes use the same hierarchy, materials, affordances, and content density.

**Key Characteristics:**

- Warm cream paper against cognac and plum color fields
- Real Olga handwriting used as a human annotation layer
- Square-edged documents with tape, pen marks, and restrained physical depth
- Large editorial serif headlines paired with compact Manrope utility text
- Clear website-first offer and direct contact paths
- No photography; illustrations are diagrammatic worksheet sketches

## Colors

The palette combines edible paper warmth with two decisive inks: cognac for action and offer blocks, dark plum for authority and contrast.

### Primary

- **Cognac Strip:** The expressive action color for highlight bands, the package offer, and the closing contact block.
- **Dark Plum Ink:** The principal text and deep-section color; it should read warmer and more personal than neutral black.

### Secondary

- **Brown Accent:** The quieter incumbent accent for shared site utilities, focus treatment, scrollbars, and supporting routes.
- **Olive Mark:** A sparse annotation color used for hand-drawn underlines.
- **Lime Note:** A rare handwritten aside on plum, reserved for a useful human observation.
- **Blue Pen:** The diagram ink for worksheet wireframes and structure sketches.

### Neutral

- **Paper Cream:** The main sheet, action, and inverse-text color.
- **Paper Soft:** The page-level ground outside the editorial sheet.
- **Paper About:** A quieter stock for the personal introduction.
- **Deep Plum:** The selected state of the language switcher and a deeper companion to the main ink.
- **Quiet Brown:** Supporting copy on pale paper.
- **Tape Beige:** Translucent tape applied only where a sheet is visibly attached.

### Named Rules

**The Ink, Not Black Rule.** Use dark plum wherever a generic interface would reach for pure black.

**The Cognac Closing Rule.** Direct contact belongs on cognac with cream text; the closing action should feel unmistakable without introducing a new color.

**The Sparse Marker Rule.** Olive, lime, blue pen, and tape are annotations, not competing brand colors.

## Typography

**Display Font:** Georgia (with Times New Roman and serif fallbacks)  
**Body Font:** Manrope Variable (with Manrope and system sans-serif fallbacks)  
**Handwritten Font:** Olga Handwriting (with Segoe Print and cursive fallbacks)

**Character:** Georgia provides an assured editorial voice, Manrope keeps practical details clean in both Latin and Cyrillic, and Olga's actual handwriting supplies personal emphasis. The three voices must remain visibly distinct.

### Hierarchy

- **Display:** Bold, tightly tracked, and compressed in line height. Use for the home hero only, with the second phrase allowed to sit on a torn cognac strip.
- **Headline:** Editorial serif for major section promises and the closing question. Keep lines short enough to preserve their poster-like rhythm.
- **Body:** Manrope for explanation, scope, legal detail, metadata, and contact information. Comfortable reading copy stays around 52–64 characters per line where the composition allows it.
- **Label:** Small, bold, widely tracked uppercase Manrope for navigation, worksheet titles, and section markers.
- **Handwritten:** Olga Handwriting for one-line reassurance, process verbs, the price seal, and concise notes—not for paragraphs or essential legal detail.

### Named Rules

**The Three Voices Rule.** Serif persuades, sans-serif explains, and handwriting makes a personal mark; do not blur those jobs.

**The Real Hand Rule.** Use the supplied Olga Handwriting font for authored marks. Never substitute a generic script when the asset is available.

## Layout

The durable spatial grammar is an editorial worktable inside a centered sheet up to 96rem wide. Desktop compositions are intentionally asymmetric: content blocks divide into unequal columns, and physical artifacts may rotate or overlap slightly while their reading order remains conventional. Major sections use generous 2–6rem breathing room; detail clusters use a compact 0.7–1.4rem rhythm.

At 1120px, navigation wraps into its own row, the hero balance tightens, and the process changes from four to two columns. At 820px, the system becomes a single-column document: the header sticks, navigation scrolls horizontally, paired sections stack, worksheets lose their rotation, and full-width actions replace desktop placements. At 480px, contact actions stack while essential process steps remain in a compact two-column grid. Typography uses fluid clamps rather than abrupt scale changes.

### Home Route Composition

The homepage specifically opens with a large promise beside a three-sheet workboard, then pairs the 490 € website-first offer with the four-step process. Additional services appear as physical slips on a plum field. The page ends with an asymmetric about/contact split, with all contact methods held inside the cognac closing block. This sequence is route-specific; future pages should reuse the material, typography, color, and component grammar without copying this exact collage.

### Named Rules

**The Worktable-to-Document Rule.** Desktop may feel like a composed table of artifacts; mobile must become a clean reading stack, never a squeezed miniature collage.

**The Parity Rule.** German and Russian routes keep equivalent hierarchy, component order, responsive behavior, and visual emphasis even when line lengths differ.

## Elevation & Depth

Depth is material and selective. The outer paper sheet carries a broad ambient shadow; taped worksheets and service slips carry shorter contact shadows; flat cognac, plum, and cream color fields provide the remaining separation. There is no glassmorphism, glossy 3D treatment, or depth for its own sake.

### Shadow Vocabulary

- **Outer Sheet:** A broad, warm ambient shadow around the centered editorial page.
- **Worksheet Lift:** A denser downward shadow that makes taped sheets sit above the cognac workboard.
- **Slip Contact:** A compact shadow beneath handwritten calls to action and service slips.

### Named Rules

**The Physical Cause Rule.** A shadow must explain why paper sits above another surface. Flat editorial color blocks remain flat.

## Shapes

Most structural surfaces are square-edged. Character comes from imperfect paper cuts, narrow tape strips, hand-drawn oval seals, underlines, slight rotations, and one-off sketch geometry—not from a universal rounded-card language. Small inherited radii are acceptable for generic supporting UI, but the signature paper system stays predominantly flat.

**The Imperfect Accent Rule.** Irregularity belongs to highlights, seals, notes, and loose sheets; grids, navigation, and reading columns stay precise.

## Components

### Navigation

- **Style:** A cream paper header with an editorial wordmark, compact uppercase links, an audience switch, and a bordered DE/RU control.
- **States:** Links underline and turn cognac on hover; the current language becomes deep plum with cream text. Keyboard focus uses the shared accent outline.
- **Mobile:** The header becomes sticky, the agency link hides, and the primary anchor row scrolls horizontally.

### Note CTA

- **Shape:** A square cream note with Olga Handwriting and a directional arrow.
- **States:** Hover lifts the note by 2px, warms the cream, and introduces a fraction of rotation; active presses it down by 1px. Reduced-motion removes the transition.
- **Use:** The package CTA only, or another equally direct invitation written in Olga's voice.

### Taped Worksheets

- **Shape:** Tall cream sheets with square corners, centered translucent tape, blue-pen diagrams, and small index numbers.
- **Behavior:** Desktop sheets use small independent rotations; mobile removes all rotation and stacks them in reading order.
- **Use:** Concrete project ingredients, plans, or handover artifacts—not generic feature cards.

### Process Steps

- **Style:** Hand-drawn oval numbers, thin Phosphor icons, handwritten verbs, and concise sans-serif explanations.
- **Layout:** Four linked steps on wide desktop, two columns at medium sizes, and a compact two-column mobile grid without connector lines.

### Service Slips

- **Shape:** Narrow square cream slips with a thin icon, service name, and cognac price or qualifier.
- **Depth:** A short contact shadow and alternating sub-degree rotations suggest sorted paper without harming scanability.

### Contact Actions

- **Style:** Outlined cream-on-cognac rows with icon, action label, and smaller destination detail.
- **States:** Hover adds a translucent cream wash and a 2px lift; active presses down by 1px. On narrow phones, actions become one column.

## Do's and Don'ts

### Do:

- **Do** make the website-first offer, price, scope, and next action visually concrete before introducing optional services.
- **Do** use real handwriting as brief functional annotation and preserve the editorial/sans/handwritten role split.
- **Do** keep the warm cream, cognac, and dark plum world consistent across German and Russian routes.
- **Do** turn asymmetric desktop compositions into a clear single-column document on mobile.
- **Do** use worksheet sketches, tape, paper grain, and physical shadows to express process without photography.

### Don't:

- **Don't** introduce photography, portraits, stock storefronts, testimonials, logos, or fabricated proof into this visual world.
- **Don't** convert the system into rounded SaaS cards, gradient blobs, glass panels, or generic AI-consultancy visuals.
- **Don't** use handwriting for paragraphs, legal copy, or information that must be read precisely.
- **Don't** scatter rotations, tape, underlines, or accent colors over every element; authored imperfection needs quiet structure around it.
- **Don't** copy the homepage workboard-and-closing composition onto every route; reuse the system, not the page choreography.
