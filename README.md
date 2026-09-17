# Kanishq Portfolio

A responsive personal portfolio for Kanishq Sharma, built as a zero-build static website with plain HTML, CSS, and JavaScript. The visual language is a white Notion-like notebook with text-led project rows, black SVG doodles, and restrained interactions.

The homepage currently presents two project collections:

- **Product builds**: complete applications, utilities, API projects, and automation work.
- **Personal lab**: data analysis, machine learning, mobile, game, visualization, and algorithm explorations.

Professional experience is kept separate from repository projects and should be added from the resume when the resume content is ready.

## Features

- Responsive homepage for desktop, tablet, and mobile screens.
- Project notebook with filters for all work, product builds, and personal lab work.
- GitHub links for each featured project.
- Hover previews on larger screens and a simplified layout on mobile.
- Mobile navigation menu with keyboard support.
- Scroll-based reveal motion with reduced-motion support.
- Standalone resume page at [resume.html](resume.html).
- Browser print flow for saving the resume as a PDF.
- No framework, package manager, build step, or server-side code required.

## Technology

- Semantic HTML5
- Modern CSS with responsive media queries
- Vanilla JavaScript
- SVG project illustrations
- Google Fonts loaded from the page stylesheets
- Browser APIs: `IntersectionObserver`, `matchMedia`, `requestAnimationFrame`, and `window.print`

## Requirements

You only need:

- A modern browser such as Chrome, Edge, Firefox, or Safari.
- Python 3 for the simplest local server, or another static file server.
- Git if you want to clone and publish the repository.

Node.js and `npm` are not required for this portfolio.

## Project Structure

```text
PortFolio/
|- index.html                    # Homepage content and semantic sections
|- style.css                     # Homepage layout, responsive rules, and visual system
|- resume.html                   # Editable resume page
|- resume.css                    # Resume screen and print styles
|- README.md                     # Project and deployment documentation
|- scripts/
|  `- main.js                    # Project data, profile links, and interactions
|- assets/
|  |- images/                    # Project preview SVGs
|  `- icons/                     # Optional local icons and favicon files
`- projects/                     # Optional space for future project material
```

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Kanishq10/PortFolio.git
cd PortFolio
```

If the repository is already open in VS Code, start from the workspace root instead.

### 2. Start a local static server

```bash
python3 -m http.server 8000
```

### 3. Open the site

Visit:

```text
http://localhost:8000/
```

The resume is available at:

```text
http://localhost:8000/resume.html
```

Stop the server with `Ctrl+C` in the terminal. Serving the folder over HTTP is preferred to opening `index.html` directly because it matches how the site will behave when hosted.

## Update Profile Links

The homepage profile configuration is at the top of [scripts/main.js](scripts/main.js):

```js
const profile = {
    email: "your.email@example.com",
    links: {
        linkedin: "https://www.linkedin.com/in/your-profile/",
        github: "https://github.com/your-account",
        leetcode: ""
    }
};
```

Update the email, LinkedIn URL, GitHub URL, and optional LeetCode URL. An empty social URL is rendered as unavailable instead of creating a broken link.

The contact details at the top of [resume.html](resume.html) are written directly in that file, so update those values there as well. Search for `your.email@example.com` before publishing.

## Add or Edit Projects

Project rows are generated from the `featuredProjects` array in [scripts/main.js](scripts/main.js). A project is displayed only when `featured: true`.

```js
{
    title: "Project Name",
    collection: "build",
    category: "Short project category",
    description: "Describe the useful problem the project solves.",
    technologies: ["JavaScript", "Node.js"],
    githubUrl: "https://github.com/your-account/your-project",
    featured: true,
    image: "assets/images/project-name.svg",
    imageAlt: "A short description of the project preview"
}
```

### Project fields

| Field | Purpose |
| --- | --- |
| `title` | Visible project name. |
| `collection` | Use `build` for product-minded work or `personal` for explorations. |
| `category` | Short label shown on the right side of a project row. |
| `description` | Honest one- or two-sentence explanation of what the project does. |
| `technologies` | Array of technology labels shown below the description. |
| `githubUrl` | Public repository URL. Leave empty if it is not ready. |
| `featured` | Set to `false` to keep a project in the data file but hide it from the homepage. |
| `image` | Relative path to a preview image or SVG under `assets/images/`. |
| `imageAlt` | Accessible description for the preview image. |

When adding a new preview, keep the path relative, for example `assets/images/my-project.svg`. Do not use a leading slash because the site is also hosted under the `/PortFolio/` path on GitHub Pages.

Keep descriptions accurate. Forks, tutorials, company-branded demos, and learning experiments should not be presented as original professional work.

## Update Homepage Copy and Styling

- Edit headings, biography, navigation labels, and contact copy in [index.html](index.html).
- Edit colors, spacing, typography, doodles, hover states, and responsive behavior in [style.css](style.css).
- Keep the project list in `scripts/main.js`; the HTML only provides the `#project-list` mount point.
- Keep company experience separate from the GitHub project array. Add it from verified resume information rather than inferring it from repository names.

## Resume Workflow

The resume is an editable HTML document, not a generated PDF:

1. Edit [resume.html](resume.html) for profile, skills, experience, and selected projects.
2. Edit [resume.css](resume.css) for screen and print layout changes.
3. Open `http://localhost:8000/resume.html`.
4. Select **Print / save as PDF**.
5. In the browser print dialog, choose **Save as PDF** and keep background graphics enabled if you want the complete visual treatment.

The toolbar is automatically hidden in print output, and the print stylesheet avoids splitting project entries where possible.

## Free Hosting

### Option 1: GitHub Pages (recommended)

GitHub Pages is free for this static portfolio and works directly from the existing repository.

1. Commit and push the site to GitHub:

   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. Open the repository settings: [GitHub Pages settings](https://github.com/Kanishq10/PortFolio/settings/pages).
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`.
5. Select **Save**.
6. Wait for the Pages deployment to finish. GitHub will show the public URL in the same settings panel.

The expected project-site URL is:

```text
https://kanishq10.github.io/PortFolio/
```

The first deployment may take a few minutes. Every later push to `main` triggers a new deployment automatically.

### Option 2: Netlify (free)

Netlify can deploy the same repository without a build step:

1. Open [Netlify](https://app.netlify.com/).
2. Choose **Add new project** and **Import an existing project**.
3. Connect GitHub and select `Kanishq10/PortFolio`.
4. Leave **Build command** empty.
5. Set **Publish directory** to `.` or the repository root.
6. Deploy the site.

Netlify provides a free `*.netlify.app` URL and redeploys when the connected GitHub branch changes.

### Option 3: Cloudflare Pages (free)

Cloudflare Pages also works for this zero-build site:

1. Open [Cloudflare Pages](https://pages.cloudflare.com/).
2. Create a project from the GitHub repository.
3. Select the `main` branch.
4. Leave the build command empty.
5. Use the repository root as the output directory.
6. Deploy and use the free `*.pages.dev` URL.

For all hosts, keep `index.html` at the repository root and preserve relative asset paths.

## Updating the Hosted Site

After changing files locally:

```bash
git status
git add index.html style.css scripts/main.js resume.html resume.css README.md assets/
git commit -m "Refresh portfolio"
git push origin main
```

GitHub Pages, Netlify, and Cloudflare Pages will deploy the pushed changes automatically when connected to `main`.

## Validation Checklist

Run the quick static checks before publishing:

```bash
node --check scripts/main.js

```

Then verify in a browser:

- Homepage loads at `/`.
- The project filters show All work, Product builds, and Personal lab correctly.
- GitHub links open the intended repositories.
- The mobile menu opens and closes.
- The layout has no horizontal scrolling on a narrow screen.
- The resume opens at `/resume.html`.
- Print / save as PDF opens the browser print dialog.
- The email and social URLs are real values rather than placeholders.

## Security Notes

- Never commit passwords, API keys, cookies, session tokens, or personal access tokens.
- Do not publish a project that contains exposed credentials until the credentials are revoked and removed from Git history.
- Keep public portfolio descriptions limited to work you can accurately explain.
