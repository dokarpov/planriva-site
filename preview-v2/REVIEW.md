# Planriva React preview

Review URL: https://dokarpov.github.io/planriva-site/preview/

This is a review build, separate from the public concept site. It uses React 18 and Vite; its model and review records are illustrative, not connected to Archicad.

## Acceptance checks

The preview workflow builds the React app and runs Chromium at 1440 × 900 and 390 × 844 before publishing. It fails on missing content, uncaught browser exceptions, failed requests or horizontal overflow. Full-page screenshots are retained as GitHub Actions artifacts for 14 days.

The separate release lab checks the publicly deployed URL. A build passing source tests does not establish that GitHub Pages is serving the latest version. The live URL must be checked before release approval.

## Review focus

Compare the live composition to the approved architectural editorial reference, including typography, whitespace, visual hierarchy, restrained palette, realistic imagery, mobile navigation, model markers and review tabs. No production deployment without approval.
