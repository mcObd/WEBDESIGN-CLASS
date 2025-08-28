# WEBDESIGN CLASS

This repository contains organized class exercises, examples, and assets for a web design course. Use this README to quickly find and open the examples, understand folder responsibilities, and run simple local checks.

## Quick overview
- Primary content: HTML, CSS, and JavaScript examples grouped in topic folders.
- How to view: most pages are static HTML — open the `.html` files in your browser (double-click or use a local server).
- Assets: images and fonts are stored in `Images/` and `fontawesome-free-6.5.2-web/`.

## Folder map
- `css/` — Collection of standalone CSS files and assignments. Examples include layout, flexbox, grid, tables, forms, colors, and animations. Useful files:
  - `box_model.css`, `Flexbox.css`, `Grid_Assignment.css`, `Table.css`, `css_forms.css`, `animation.css`

- `html/` — HTML pages corresponding to the CSS files and exercises. Files include:
  - `box_model.html`, `Flexbox.html`, `Grid_Assignment.html`, `Table.html`, `colors.html`, `simplebank.html`, `simplecalc.html`, etc.

- `DOM/` — Small DOM manipulation examples. Contains `index.html`, `script.js`, and `style.css` demonstrating basic DOM scripting.

- `Event-Listeners/` — Examples that demonstrate event listeners with `index.html`, `script.js`, and `style.css`.

- `fontawesome-free-6.5.2-web/` — Local copy of Font Awesome (CSS + webfonts) used by some pages. Keep this folder if you want offline icons.

- `Form -regex/` — Form validation examples using regular expressions. Contains `index.html`, `form-regex.css`, and `form-regex.js`.

- `Images/` — Image assets used across examples (JPEGs, PNG, WebP).

- `JavaScript/` — Collection of JS practice files and utilities (arrays, functions, classes, loops, objects, calculators, etc.). Files include `Array.js`, `Functions.js`, `loops.js`, `main.js`, and more.

- `Predict-Game/` — Small game/project with `index.html`, `script.js`, and `Style.css`.

- `Quiz/` — Quiz example with interactive script in `script.js` and `index.html`.

- `Web storage/` — Examples that demonstrate Web Storage APIs (localStorage/sessionStorage). Includes `index.html`, `script.js`, and `styles.css`.

## How to open and test
- Easiest: open any `.html` file in your browser (File → Open, or double-click the file in Explorer).
- Recommended (for consistent local paths and fetch/ajax usage): run a simple local server. From PowerShell in the project root run:

```powershell
# if you have Python 3 installed
python -m http.server 8000; "Open http://localhost:8000 in your browser"

# or using Node.js (if installed)
# npx http-server -p 8000
```

Then open http://localhost:8000 and navigate to the folder/page you want to view.

## Notes and tips
- If pages reference assets with relative paths, prefer serving via a local server (see above) to avoid CORS/file path issues.
- If an example uses Font Awesome and icons don't show, ensure the path `fontawesome-free-6.5.2-web/css/all.css` matches the HTML link href, or update it to the CDN.
- Use the browser devtools console to see script errors (`F12` → Console).

## Suggested next steps (low effort improvements)
- Add an index HTML at the root that links to the main demos.
- Add short READMEs inside larger folders (`css/`, `JavaScript/`) describing purpose and main files.
- Add small screenshots in `Images/` and reference them in each folder README for quick preview.

## Contact / Author
Project owner: repository workspace for class exercises.

---

Requirements coverage:
- Create a README documenting all top-level folders: Done.

If you want, I can: add per-folder README files, generate an index HTML listing all demos, or update any relative asset paths — tell me which next.
