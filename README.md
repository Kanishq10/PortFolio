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

