# Planriva — accessible React review candidate

**Build:** V47, 17 October 2026  
**Candidate URL (after green GitHub Actions):** https://dokarpov.github.io/planriva-site/preview/  
**Status:** experimental public preview, not Archicad production integration.

## What changed

- Returned the page to a white architectural editorial style with darker body copy and restrained issue highlighting.
- Converted the site into a mobile-first experience, with a real navigation toggle, readable steps and non-overflowing workspace.
- A selectable architectural model leads to a separate drawing-based four-step issue review: **Source → Issue → Options → Decision**.
- Two explicit simulated outcomes; no fictional approval saved, no automatic BIM write.
- Source-linked narrative and focused disclosure of the research boundary.

## Release gates

The deployment workflow rebuilds the React app, runs Playwright at desktop (1440×900), tablet (768×1024), phone (390×844), and small phone (320×700), checks stage progression, navigation, no overflow, JS errors and contrast of major text. Deployment happens only after the tests pass, and only inside `/preview/`; the main homepage is unchanged.

**Do not call this a verified release until the workflow is green and the live URL is checked.** Automated smoke tests are not a substitute for a real architecture-team pilot or an independent visual/a11y review.

## Review request

Use the [published preview](https://dokarpov.github.io/planriva-site/preview/) to test the four-step scenario on mobile and desktop. Review architecture plausibility, clarity of source vs model data, first-screen readability and the decision handoff. Feedback should be recorded against a specific screen/step. The product remains synthetic and read-only.
