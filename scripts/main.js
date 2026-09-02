const profile = {
    email: "your.email@example.com",
    links: {
        github: "",
        instagram: "",
        leetcode: ""
    }
};

const projects = [
    {
        number: "01",
        title: "File Organiser",
        type: "Node.js utility",
        description: "Organises files by extension and places them into clearly named folders, reducing manual sorting work.",
        technologies: ["JavaScript", "Node.js"],
        liveUrl: "",
        sourceUrl: ""
    },
    {
        number: "02",
        title: "HackerRank Automation",
        type: "Browser automation",
        description: "A Puppeteer workflow that opens HackerRank and automates code-submission steps for repetitive practice tasks.",
        technologies: ["JavaScript", "Puppeteer"],
        liveUrl: "",
        sourceUrl: ""
    },
    {
        number: "03",
        title: "Meal Recipe Search",
        type: "API web application",
        description: "Searches a public meal API to surface recipes and useful dish details from a simple, focused interface.",
        technologies: ["JavaScript", "REST API", "Web Development"],
        liveUrl: "",
        sourceUrl: ""
    },
    {
        number: "04",
        title: "WCat",
        type: "Command-line utility",
        description: "Reads file contents in the console and supports formatting operations through a lightweight JavaScript utility.",
        technologies: ["JavaScript", "Node.js"],
        liveUrl: "",
        sourceUrl: ""
    },
    {
        number: "05",
        title: "YouTube Playlist Analyser",
        type: "Data utility",
        description: "Accepts a YouTube playlist URL and retrieves video names and durations for fast playlist inspection.",
        technologies: ["JavaScript", "Web Development"],
        liveUrl: "",
        sourceUrl: ""
    }
];

const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

function externalLink(url, label, icon) {
    if (!url) {
        return `<span class="project-link is-disabled" title="${label} coming soon">${label} <i class="${icon}" aria-hidden="true"></i></span>`;
    }

    return `<a class="project-link" href="${url}" target="_blank" rel="noreferrer">${label} <i class="${icon}" aria-hidden="true"></i></a>`;
}

function renderProjects() {
    const projectGrid = document.querySelector("#project-grid");
    if (!projectGrid) {
        return;
    }

    projectGrid.innerHTML = projects.map((project) => `
        <article class="project-card reveal">
            <div class="project-card-top">
                <span class="project-number">${project.number}</span>
                <span class="project-type">${project.type}</span>
            </div>
            <div class="project-mark" aria-hidden="true">${project.title.slice(0, 2).toUpperCase()}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <ul class="project-tags" aria-label="Technologies used">
                ${project.technologies.map((technology) => `<li>${technology}</li>`).join("")}
            </ul>
            <div class="project-links">
                ${externalLink(project.liveUrl, "Live", "bx bx-arrow-up-right-stroke")}
                ${externalLink(project.sourceUrl, "Code", "bxl bx-github")}
            </div>
        </article>
    `).join("");
}

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    const isLight = theme === "light";
    themeToggle.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} theme`);
    themeToggle.innerHTML = `<i class="bx bx-${isLight ? "moon" : "sun"}" aria-hidden="true"></i>`;
}

function initializeTheme() {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    setTheme(savedTheme || preferredTheme);
}

function closeMobileMenu() {
    mobileMenu.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.innerHTML = '<i class="bx bx-menu" aria-hidden="true"></i>';
}

function initializeNavigation() {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        mobileMenu.hidden = isOpen;
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
        menuToggle.innerHTML = `<i class="bx bx-${isOpen ? "menu" : "x"}" aria-hidden="true"></i>`;
    });

    mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !mobileMenu.hidden) {
            closeMobileMenu();
            menuToggle.focus();
        }
    });

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
        });
    }, { rootMargin: "-45% 0px -45% 0px" });
    sections.forEach((section) => observer.observe(section));
}

function initializeReveals() {
    const revealElements = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealElements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, revealObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => observer.observe(element));
}

function initializeProfileLinks() {
    document.querySelectorAll("[data-profile-link]").forEach((link) => {
        const destination = profile.links[link.dataset.profileLink];
        if (!destination) {
            link.addEventListener("click", (event) => event.preventDefault());
            link.classList.add("is-disabled");
            return;
        }
        link.href = destination;
        link.target = "_blank";
        link.rel = "noreferrer";
    });
}

function initializeContactForm() {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(contactForm);
        const subject = `[Portfolio] ${data.get("subject")}`;
        const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;

        if (profile.email === "your.email@example.com") {
            formMessage.textContent = "Add your email address in scripts/main.js to activate this form.";
            return;
        }

        formMessage.textContent = "Opening your email client...";
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}

renderProjects();
initializeTheme();
initializeNavigation();
initializeReveals();
initializeProfileLinks();
initializeContactForm();
document.querySelector("#year").textContent = new Date().getFullYear();
