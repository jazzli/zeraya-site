# Amethyst refresh — design + plan

**Date:** 2026-07-11
**Context:** The app's Phase Three elevation moved the brand from gold
(#c9a961) to luminous amethyst (#A98CE0); gold survives in the app only as
`ember` (atmospheric warmth, never a brand mark). The site still used gold as
the brand color everywhere. App review of v1.0 (amethyst build) is in flight;
the site is the launch-day landing surface and must match.

## Changes

1. **Tokens** (`assets/site.css`): `--gold`/`--gold-dim` renamed to
   `--brand: #A98CE0` / `--brand-dim: rgba(169,140,224,0.55)`. Base tones
   aligned to the app exactly: `--midnight: #090A1C`, `--ivory: #F3F0E5`
   (dim at 0.60), gradient top tint `#141334` (app `midnightHigh`).
   Contrast: #A98CE0 on #090A1C ≈ 7.4:1 (AA).
2. **Marks** (inline SVGs + data-URI favicons in index.html, 404.html,
   privacy/, terms/, support/): gold hexes → amethyst; hero mark's inner
   disc uses the violet partner #4F3E8A, echoing the app's aurora pairing.
3. **Screenshot strip** (index.html, per `data-lang` block): three frames —
   core pattern, today, signals combined (the mandated derivation surface;
   no paywall on the marketing page). Localized images per language block,
   `loading="lazy"`, localized alt text. Flex row on desktop, horizontal
   scroll on mobile.
4. **Images** (`assets/screens/`): 9 JPEGs (3 frames × 3 locales), 880px
   wide (2× for ~440px display) from `zeraya-app/screenshots/store/` via
   ffmpeg `-q:v 3` (~150KB each; WebP unavailable on this machine —
   ffmpeg lacks the encoder, sips reads but does not write it).

## Unchanged

Copy and register (locked), "Coming soon" chip (App Store link swap is
launch-day work), typography, no-cookies/no-analytics footer promise —
images are self-hosted, so the no-external-resources ethos holds.

## Verification

Serve locally (`python3 -m http.server`), screenshot desktop (1280) and
mobile (375) in all three languages; check strip layout, brand contrast,
favicon rendering. Push branch → user reviews → merge to main (GitHub Pages).
