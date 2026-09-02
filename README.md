# Kanishq Portfolio

A responsive personal portfolio built with plain HTML, CSS, and JavaScript. It includes a cyberpunk-neon dark theme, a persistent light theme, project cards generated from data, and a static contact form.

## Preview Locally

Run a local static server from the project root:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```text
portfolio/
|- index.html             # Page content and semantic sections
|- style.css              # Responsive dark and light theme styles
|- scripts/
|  `- main.js             # Project data, links, theme, navigation, form behavior
|- assets/
|  |- images/             # Add your portrait and project screenshots here
|  `- icons/              # Add local icons and favicon files here
`- projects/              # Optional project-specific supporting files
```

## Update Your Links

Open [scripts/main.js](scripts/main.js) and replace the placeholder email and social URL values at the top:

```js
const profile = {
	email: "your.email@example.com",
	links: {
		github: "",
		instagram: "",
		leetcode: ""
	}
};
```

LinkedIn is already configured. Empty social URLs render as intentionally unavailable until you add them.

## Add a Project

Add a record to the `projects` array in [scripts/main.js](scripts/main.js). The gallery is rendered automatically:

```js
{
	number: "06",
	title: "Project Name",
	type: "Short project category",
	description: "Describe the useful problem the project solves.",
	technologies: ["JavaScript", "Node.js"],
	liveUrl: "https://your-live-project.example",
	sourceUrl: "https://github.com/your-account/your-project"
}
```

Leave `liveUrl` or `sourceUrl` empty when the link is not ready. To later add project screenshots, place them under `assets/images/` and extend the project markup in `scripts/main.js` with the new image path.

## Contact Form

The form uses `mailto:` so it needs no server or third-party service. Once `profile.email` has been updated, submitting the form opens the visitor's email client with the entered details prefilled.