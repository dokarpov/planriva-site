# Nested preview deployment

Source: this React/Vite app on `rebuild/react-v2`.

A GitHub Actions workflow on `main` builds the actual app with `/planriva-site/preview/` as its base path and copies compiled output to `main/preview/`. The public root `index.html` is never edited by this workflow. The preview is unlisted, **not private**. No automatic production promotion is configured.

This document is also the first deployment trigger. Verify workflow success, HTTP availability, assets, navigation, and responsive QA before calling the preview working.
