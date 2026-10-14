# Planriva × Heron — reference conformance audit

Date: 2026-10-14
Reference: https://heronaiapp.com/
Production: https://dokarpov.github.io/planriva-site/
Staging: https://planriva-v44-staging.up.railway.app/

## Evidence classification
- **Observed**: publicly extracted page structure/content and current production/staging source.
- **Not verified**: exact pixel dimensions, animation timing, pointer/drag physics, breakpoint choreography, performance.
- No assumption of real BIM model writes or integrated Archicad editing. Current demonstrated integration is read-only.

## Sequence and acceptance gates

| Step | Heron reference (observed) | Planriva current | Acceptance gate |
|---|---|---|---|
| 0 Loader | Custom initialization sequence | None | Decide whether a short branded loader improves UX; reduced-motion bypass; never block content |
| 1 Hero | Architectural interactive scene; instruction to drag and reveal violations | Production: static model.svg; staging: isometric SVG with 2 clickable overlays | Original high-detail architectural scene, camera interaction or meaningful equivalent, selectable spatial elements, visible contextual evidence, keyboard/touch controls, no stock image |
| 2 Statement | Oversized editorial introduction; strong typography | Text-based manifesto | Reference-aligned proportions and typographic scale on desktop/mobile |
| 3 Problems | Four editorial scenarios with independent layouts | Four generic grid items | Each scenario individually art-directed; real pain points, not invented metrics |
| 4 Main walkthrough | Scroll-sequenced architectural model with violation cards and selection | Basic 3-tab staged interface | Multi-step persistent state: source → issue → proposed resolution → architect decision; back/forward/restart; source references |
| 5 Product modes | Distinct chat overlay and dashboard, separate product pages | One combined mock workspace | Two visually distinct demonstrators; clearly labeled concepts |
| 6 Why | Observe/Advise/Act/Learn scroll progression | Static four-step workflow | Sequential transition; no claims of automated write/learning in current product |
| 7 Use cases | Eight audience-specific visual cards | Absent | Audience scenarios grounded in architectural documentation, not blanket automation claims |
| 8 CTA | Architectural composition + direct contact | Research survey | Keep truthful CTA 'Join product research'; no 'Book demo' unless available |

## Production truth
- Current public site is an early-stage research landing page. Claims are appropriately conservative.
- The only published linked form is a research survey (Tally NpKWBN), not a pilot booking.
- The website may show simulated decision approval but must not imply persistence or Archicad model write.

## Implementation order
1. **Hero / spatial experience**: reject stock photography, low-detail SVG floorplans and decorative nonfunctional markers. Produce a genuine interactive architectural scene and validate at 1440×900, 1024×768, 390×844, 320×700, with keyboard and touch.
2. Typography, navigation, editorial intro.
3. Four problem scenarios.
4. Main multi-step spatial walkthrough.
5. Product interfaces.
6. Why / use cases / CTA.
7. Cross-browser, performance, accessibility, form-link and deploy checks.

## Test gates
- Each interactive affordance has meaningful result; keyboard support; focus visibility.
- Respect prefers-reduced-motion; no blocking loader.
- No layout overflow at 320, 390, 768, 1024, 1440 widths.
- 3D scene provides accessible non-WebGL fallback.
- No errors on navigation, state changes or direct hash links.
- Real deployment SUCCESS plus remote content verification.
- Screenshots compared side-by-side with the reference before release.
- Do not promote staging to production until user approves.
