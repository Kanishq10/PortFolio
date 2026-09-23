# Kanishq Sharma Portfolio

A responsive static portfolio for Kanishq Sharma, a Software Development Engineer. The site presents product builds, personal experiments, technical skills, a short working process, contact links, and a separate resume page.

## Design

The interface follows an **engineer blueprint** visual language. It combines:

- A pale drafting-grid background inspired by technical paper.
- Graphite text and thin structural dividers.
- Cobalt blue accents for annotations and system markers.
- Editorial serif typography for readable project descriptions.
- Monospace labels for categories, technologies, and metadata.
- Hand-drawn SVG diagrams and small sketch annotations.
- Generous horizontal measures and line spacing to avoid condensed text.

The design treats the portfolio as a working document rather than a conventional marketing landing page. Projects appear as entries in a notebook, while the surrounding sections explain capabilities, interests, and working habits.

## Pages

### Homepage

`index.html` contains the main portfolio experience:

- Hero introduction and navigation.
- Filterable project notebook.
- Technical capabilities grouped by discipline.
- About section and current learning focus.
- Three-part working process.
- Contact and social links.

### HTML Resume

`resume.html` is a browser-readable resume with its own layout and print stylesheet. It contains the profile, technical skills, selected projects, learning focus, and career direction.

### PDF Resume

`resume.pdf` is the supplied PDF resume linked from the homepage and HTML resume toolbar. It is kept at the repository root so static hosting can serve it directly.

## Project Structure

```text
PortFolio/
|- index.html          # Portfolio homepage
|- style.css           # Homepage layout and design system
|- resume.html         # HTML resume
|- resume.css          # Resume screen and print styles
|- resume.pdf          # PDF resume shown from the site
|- scripts/main.js     # Project data and interactions
|- assets/images/      # Project preview illustrations
|- assets/icons/       # Optional icons
|- projects/           # Optional future project material
`- README.md           # Project documentation
```

## Run Locally

From the repository root:

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000/
http://localhost:8000/resume.html
```

Stop the server with `Ctrl+C`.

## Implementation

The project uses plain HTML, CSS, JavaScript, and SVG:

- `index.html` provides the semantic homepage structure.
- `style.css` defines the blueprint grid, typography, responsive layout, visual states, and motion.
- `resume.html` and `resume.css` provide the browser-readable and printable resume.
- `scripts/main.js` stores project data and controls rendering, filters, navigation, reveal animation, profile links, and printing.
- `assets/images/` contains lightweight hand-drawn SVG project previews.

There is no framework, package manager, build pipeline, database, or server-side application.

## Project Data

The `featuredProjects` array in `scripts/main.js` is the source of truth for the project notebook. Each entry contains a title, collection, category, description, technology list, repository URL, optional live URL, preview image, and accessibility text.

The `collection` value separates product builds from personal experiments. The filter controls use this value to update the visible project rows and their accessible pressed states.

## Interaction and Accessibility

The homepage uses progressive enhancement for project rendering, collection filtering, mobile navigation, active section navigation, pointer labels, and scroll-based reveals. `prefers-reduced-motion` is respected so decorative movement can be reduced. Navigation controls expose semantic labels and state attributes, while project preview images include alternative text.

## Responsive Layout

Wide layouts use the blueprint composition with project metadata columns and supporting diagrams. Medium layouts simplify previews and hero composition. Small layouts collapse navigation, project details, capability groups, and contact content into a single readable column. Relative asset paths allow the same files to work at the repository root and under the GitHub Pages `/PortFolio/` path.

## Local Reference

The site can be served locally with:

```bash
python3 -m http.server 8000
```

Homepage: `http://localhost:8000/`

Resume: `http://localhost:8000/resume.html`

## Deployment Context

The project is suitable for GitHub Pages as a static site published from the `main` branch and repository root.

Portfolio URL: `https://kanishq10.github.io/PortFolio/`

PDF resume URL: `https://kanishq10.github.io/PortFolio/resume.pdf`
