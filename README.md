# QIQC Challenge website

Public English event site for GaugeForge. No registration backend, analytics, external fonts or model credentials. Participation links open an email draft; nothing is submitted automatically.

## Run locally

Requires Node.js 20 or newer. No package installation is necessary.

```bash
npm run build
npm start
```

Open http://127.0.0.1:4173. To use a different port in PowerShell, set `$env:PORT='4174'` before `npm start`.

## Content and build

`generate.mjs` and `src/` are the complete editable public website source. `src/facts.json` is its public fact snapshot; `npm run build` regenerates the HTML from this configuration. In the founder delivery workspace, the authoritative `event-facts.json` and `tools/build.mjs` regenerate the public snapshot, documents and posters together. Synchronize any standalone fact change back to the founder master before the next complete release. Edit page copy in `generate.mjs`, not in generated `src/index.html`.

Build output is `dist/`. Only `dist/` may be deployed. It contains no internal execution manual, research checkout, hidden benchmark materials or test answers. `build.mjs` uses an explicit source allowlist and does not traverse parent folders.

## Cloudflare Pages

Connect this repository to Pages; build command `npm run build`; output directory `dist`; Node 20 or newer. Alternatively use the official Wrangler CLI for direct upload: `npx wrangler pages deploy dist --project-name qiqc-challenge` after authenticating and creating the project. Keep the project and custom-domain operation within the authorized GaugeForge event scope.

Add `challenge.r-era.ai` in Pages Custom domains before creating the corresponding CNAME at the current DNS provider. Use the actual assigned Pages hostname; never guess it. Preserve all unrelated DNS and email records. Verify DNS, HTTPS, page content and links before switching poster QR codes to the challenge domain.

## Source attribution

Original analytical Rabi calibration illustration, generated for this event. It shows a dimensionless driven two-level model, not measured data or benchmark performance. Quantum-Harbor technical interfaces checked at `1f03d78e959cf02469568250f61f9af88a53146f`; repository code remains MIT. Event AGPL requirements apply to entrant harnesses, not automatically to all website content or upstream assets.

## Design targets

Mobile 4G and desktop; public indexable static HTML. Targets: WCAG 2.2 AA, mobile p75 LCP <= 2.0 s, INP <= 200 ms, CLS <= 0.1; JS <= 30 KB uncompressed; Lighthouse accessibility >= 95 and performance >= 90. These are targets, not field measurements. Accessibility owner: event frontend maintainer. Keyboard navigation, mobile layout and link behavior are covered in the delivered Playwright verification.
