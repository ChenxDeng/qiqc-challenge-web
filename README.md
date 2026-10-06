# QIQC Challenge website

The public English GaugeForge challenge website. Static HTML, CSS and JavaScript; no package dependencies, registration backend, analytics or model credentials.

## Repository and local folder

Primary remote: https://github.com/GaugeForge/qiqc-challenge (`origin`). The earlier demo repository is retained as `demo`: https://github.com/ChenxDeng/GFdemo2. Existing website commits are preserved.

On this workstation, open this folder in Fork:

`/Users/sisi/Documents/实习/GaugeForge/qiqc-challenge`

The earlier copy under `qiqc-project-context-package/output/qiqc-challenge/website` is a historical delivery copy. Make future website edits in this independent repository.

## Local preview

Requires Node.js 20 or newer. No `npm install` is needed.

```sh
npm run build
PORT=4174 npm start
```

Open http://127.0.0.1:4174/. On Windows PowerShell, use `$env:PORT='4174'` followed by `npm start`. Rebuild after source changes, then refresh the page; the server serves `dist/` and does not need restarting after a build.

## Folder layout

| Path | Purpose |
| --- | --- |
| `generate.mjs` | Editable page markup and English copy; generates `src/index.html`. |
| `src/styles.css` | Layout, theme, hover effects and animations. |
| `src/app.js` | Rabi canvas, scroll transition, counters, timeline, task tabs and other interactions. |
| `src/facts.json` | Public event facts used by the generator. |
| `src/assets/` | Public images, SVG icons and third-party notices. |
| `src/downloads/` | Public participant and partner guides (PDF, HTML and Markdown). |
| `build.mjs` | Generates HTML and copies only allowlisted public files into `dist/`. |
| `server.mjs` | Local static preview server; defaults to port 4173 unless `PORT` is set. |
| `dist/` | Generated public deployment snapshot, tracked together with its source. |
| `.github/workflows/ci.yml` | Builds and checks that committed generated files match their sources. |
| `.github/workflows/pages.yml` | Manually triggered GitHub Pages publication. |

Do not edit `dist/` or `src/index.html` directly. Edit the source, run `npm run build`, and commit source and generated changes together. No internal founder materials, hidden tasks or private answers belong in this repository. The original event-facts master lives outside this standalone website; coordinate factual changes with the event owner and keep the public guides consistent.

## Version control in Fork

1. Open the folder above using **File → Open Repository**.
2. Fetch `origin` before beginning work. Use a short feature branch for a coherent change, such as `ui/task-copy` or `fix/navigation`.
3. Edit source files, run `npm run build`, then preview the affected interactions.
4. Inspect the diff in Fork. Stage the relevant source and generated output together, then commit with a clear description.
5. Push the branch to `origin` and merge through a pull request when ready. Pull uses fast-forward only to avoid accidental merge commits.

`main` is the shared baseline. Do not force-push or rewrite shared history. No branch-protection settings are implied by this local setup; those are managed separately on GitHub. `.env` files, logs, dependency folders and OS metadata are ignored.

## Checks

```sh
node --check generate.mjs
node --check src/app.js
npm run build
git diff --check
```

CI also rebuilds and rejects stale generated files. For interaction changes, check direct clicks, keyboard operation, rapid repeated input, reduced motion and section positioning. The site has no automated browser-test dependency; build checks are not visual verification.

## Publishing

Pushing to `origin` versions the source and runs CI. Publication is a separate action: enable GitHub Pages with GitHub Actions as the source, then manually run **Publish website**. The workflow publishes only `dist/`. Publishing this new repository does not replace or redirect the existing GFdemo2 demo.

The retained `demo` remote is for explicit legacy demo updates; normal pushes target `origin`. Do not push to it unless a legacy demo update is intended.

## Current interactions

- A single title, introduction and slogan move from the centered opening into the overview as the user scrolls. The Rabi field transitions from a large background to the upper-right corner.
- The ideal two-level Rabi illustration is decorative, not experimental data. Each frame represents a separate constant-amplitude experiment. Reduced motion disables autoplay.
- Prize amounts count up only after the overview is revealed and the amounts are visible. The date-driven timeline uses the UTC+8 calendar, with a current-status tooltip.
- Task has four directly selectable, keyboard-accessible stages. Evaluation separates Rules and Results, with seven independent reading checkboxes; proposed scoring and review details are marked as proposed.
- Registration opens an information dialog until a registration URL is configured. Participant Guide opens the public PDF. Email links open the mail application and do not send automatically.
- Hover motion, FAQ disclosure, section navigation and the header cursor respect reduced-motion preferences.

## Attribution

See `THIRD-PARTY-NOTICES.md` and the icon notices in `src/assets/`. The AGPL requirement described on the website applies to submitted competition harnesses; it does not automatically relicense this website or the MIT-licensed Quantum-Harbor repository.
