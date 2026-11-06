# Changelog

Changes on `website-services-and-kings-bluff`. Nothing here is live until the branch is merged to `main`, which is what Netlify deploys. The owner is holding that merge until the site has been checked locally and more fixes are made.

Local hosting steps and the page checklist are in the StudioPlans vault: `wiki/Website/Website Handoff.md`.

## 2026-11-06: training page refresh

- **Demo build:** re-exported `public/training/sop-sample/` from `TrainingFactory` branch `demo/first-shift`, commit `f7f5112`. It now has seven modules, adding the pharma, EV and chilled-picking tasters.
- **Reel:** `public/training/first-shift-reel.mp4` is now v19 at 1080p (2 min 39 s, 11 MB), replacing v17. Panels now hold long enough to read, and it no longer calls illustrated defects "real".
- **One-pager:** added `public/training/first-shift-one-pager.pdf` and a download button on `/training/`. Its source and build script are in `TrainingFactory` (`docs/sales/`, `tools/build_one_pager.sh`). It has no prices, because the price card is still provisional.
- **`/training/` copy:**
  - "Judge real defects" is now "Judge the defects", matching the reel.
  - "Four procedures" is now "seven", with the three tasters listed.
  - Added a note that the new tasters show the format only and are not guidance for real work.

## 2026-11-05: contact form

- Added optional phone/WhatsApp and company fields, a honeypot, a topic-based email subject and a `/contact/thanks/` page (`noindex`, left out of the sitemap).
- Delivery still needs Netlify setup after deploy: enable form detection, redeploy, add an email notification and send a test.

## 2026-11-03: services and training

- Added `/services` and the `/training` First Shift page with its playable web build, and gave each game one Steam button.
- King's Bluff is hidden until its Steam page is public.
- Unified emails on info@nothowgamestudio.com and enriched the Organization JSON-LD.
