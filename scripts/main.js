const profile = {
    email: "kanishq301@gmail.com",
    links: {
        linkedin: "https://www.linkedin.com/in/kanishq-sharma-9b49661bb/",
        github: "https://github.com/Kanishq10",
        leetcode: "https://leetcode.com/u/kanishq301/"
    }
};

const featuredProjects = [
    {
        title: "Toque - Home Chef Booking Platform",
        collection: "build",
        category: "Web Application",
        description: "A responsive home-chef booking platform with service pages for monthly cooking, one-time bookings, party chefs, cook onboarding, and customer contact flows. Built with a structured React architecture and polished, motion-based user interactions.",
        technologies: ["React", "TypeScript", "React Router", "Tailwind CSS", "Framer Motion", "Vite", "Docker"],
        githubUrl: "https://github.com/Kanishq10/Toque_chef_hire",
        liveUrl: "https://toque-chef.vercel.app/",
        featured: true,
        image: "assets/images/project-toque.svg",
        imageAlt: "A hand-drawn chef service interface for Toque"
    },
    {
        title: "GitHub Topic Scraper",
        collection: "build",
        category: "Node.js Automation",
        description: "A Node.js web-scraping utility that collects GitHub topics, discovers repositories within each topic, extracts issue links, and organizes the results into local files and PDF reports.",
        technologies: ["Node.js", "JavaScript", "Cheerio", "Request", "PDFKit", "File System"],
        githubUrl: "https://github.com/Kanishq10/Github_Scrapper",
        featured: true,
        image: "assets/images/project-automation.svg",
        imageAlt: "A hand-drawn terminal for the GitHub Topic Scraper"
    },
    {
        title: "YouTube Playlist Analyzer",
        collection: "build",
        category: "Browser Automation",
        description: "A Puppeteer-based utility that analyzes a YouTube playlist by extracting playlist details, video titles, and durations, then exports the collected data into a PDF report.",
        technologies: ["Node.js", "JavaScript", "Puppeteer", "PDFKit", "Browser Automation"],
        githubUrl: "https://github.com/Kanishq10/Youtube_playlist_analyser",
        featured: true,
        image: "assets/images/project-data.svg",
        imageAlt: "A hand-drawn data chart for the YouTube Playlist Analyzer"
    },
    {
        title: "Meal Finder",
        collection: "build",
        category: "API Web Application",
        description: "A recipe-search web application that fetches meal data from a public API. Users can search by ingredient, view matching meals, open recipe instructions, and access related cooking videos.",
        technologies: ["JavaScript", "HTML", "CSS", "REST API", "TheMealDB API"],
        githubUrl: "https://github.com/Kanishq10/meal-search-api",
        liveUrl: "https://clinquant-tanuki-a9b352.netlify.app/",
        featured: true,
        image: "assets/images/project-recipe-search.svg",
        imageAlt: "A hand-drawn recipe search interface for Meal Finder"
    },
    {
        title: "File Organiser CLI",
        collection: "build",
        category: "Developer Utility",
        description: "A Node.js command-line utility that organizes files into categorized folders, displays directory trees, and provides command help for file-system operations.",
        technologies: ["Node.js", "JavaScript", "File System", "Path Module", "Command Line"],
        githubUrl: "https://github.com/Kanishq10/FileOrganiser",
        featured: true,
        image: "assets/images/project-file-organiser.svg",
        imageAlt: "A hand-drawn file tree for the File Organiser CLI"
    },
    {
        title: "OpenWeather",
        collection: "build",
        category: "JavaScript API Application",
        description: "A browser-based weather lookup project that connects a JavaScript interface to a public weather API and presents location-based conditions.",
        technologies: ["JavaScript", "HTML", "CSS", "REST API"],
        githubUrl: "https://github.com/Kanishq10/OpenWheather",
        featured: true,
        image: "assets/images/project-dashboard.svg",
        imageAlt: "A hand-drawn weather dashboard for OpenWeather"
    },
    {
        title: "Netflix Content Analysis",
        collection: "personal",
        category: "Python Data Analysis",
        description: "A notebook-based analysis of Netflix catalog data, exploring content types, countries, genres, release years, and duration patterns.",
        technologies: ["Python", "Pandas", "Jupyter", "Data Analysis"],
        githubUrl: "https://github.com/Kanishq10/Netflix_content_analysis",
        featured: true,
        image: "assets/images/project-data.svg",
        imageAlt: "A hand-drawn data chart for Netflix Content Analysis"
    },
    {
        title: "Deep Learning Lab",
        collection: "personal",
        category: "Machine Learning Exploration",
        description: "A collection of notebook experiments for learning data preparation, neural-network workflows, model training, and evaluation.",
        technologies: ["Python", "Jupyter", "Machine Learning", "Model Training"],
        githubUrl: "https://github.com/Kanishq10/Deep_Learning",
        featured: true,
        image: "assets/images/project-data.svg",
        imageAlt: "A hand-drawn model chart for the Deep Learning Lab"
    },
    {
        title: "World Time",
        collection: "personal",
        category: "Flutter Mobile Exploration",
        description: "A Flutter world-time application exercise for practicing Dart, asynchronous data, navigation, and mobile interface structure.",
        technologies: ["Flutter", "Dart", "Async Data", "Mobile UI"],
        githubUrl: "https://github.com/Kanishq10/world_time_flutter",
        featured: true,
        image: "assets/images/project-mobile.svg",
        imageAlt: "A hand-drawn mobile screen for the World Time app"
    },
    {
        title: "Car Sales Analysis",
        collection: "personal",
        category: "Tableau Data Visualization",
        description: "A Tableau-focused car-sales analysis that turns a sales dataset into visual comparisons and dashboard views.",
        technologies: ["Tableau", "Data Visualization", "Data Analysis"],
        githubUrl: "https://github.com/Kanishq10/Car_Sales_analysis_Tableu",
        featured: true,
        image: "assets/images/project-data.svg",
        imageAlt: "A hand-drawn dashboard chart for Car Sales Analysis"
    },
    {
        title: "Credit Card Default Analysis",
        collection: "personal",
        category: "Power BI Data Analysis",
        description: "A Power BI analysis exploring credit-card default patterns through dashboard views and customer and financial comparisons.",
        technologies: ["Power BI", "Data Modeling", "Data Visualization"],
        githubUrl: "https://github.com/Kanishq10/CreditCard_Default_Analysis_powerbi",
        featured: true,
        image: "assets/images/project-dashboard.svg",
        imageAlt: "A hand-drawn dashboard for Credit Card Default Analysis"
    },
    {
        title: "Worldometer Scraper",
        collection: "build",
        category: "JavaScript Web Scraping",
        description: "A JavaScript scraping utility that collects structured statistics from Worldometer pages and organizes the extracted results for local use.",
        technologies: ["JavaScript", "Web Scraping", "HTML Parsing", "Node.js"],
        githubUrl: "https://github.com/Kanishq10/Scrap_Worldometer",
        featured: true,
        image: "assets/images/project-automation.svg",
        imageAlt: "A hand-drawn terminal for the Worldometer Scraper"
    },
    {
        title: "Bubble Sort Visualiser",
        collection: "personal",
        category: "Algorithm Visualisation",
        description: "An interactive browser project that makes the steps of bubble sort visible through a simple visual interface and animated comparisons.",
        technologies: ["JavaScript", "HTML", "CSS", "Algorithms"],
        githubUrl: "https://github.com/Kanishq10/Bubble-Sort-Visualiser",
        featured: true,
        image: "assets/images/project-data.svg",
        imageAlt: "A hand-drawn bar chart for the Bubble Sort Visualiser"
    }
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const projectList = document.querySelector("#project-list");
const projectFilters = document.querySelectorAll("[data-project-filter]");
const projectFilterNote = document.querySelector("#project-filter-note");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

function renderProjectLinks(project) {
    const links = [];
    if (project.githubUrl) {
        links.push(`<a href="${project.githubUrl}" target="_blank" rel="noreferrer">Code <span aria-hidden="true">↗</span></a>`);
    }
    if (project.liveUrl) {
        links.push(`<a href="${project.liveUrl}" target="_blank" rel="noreferrer">Live site <span aria-hidden="true">↗</span></a>`);
    }
    return links.length ? `<div class="project-links">${links.join("")}</div>` : '<span class="project-status">Personal build</span>';
}

function renderProjects() {
    if (!projectList) {
        return;
    }

    projectList.innerHTML = featuredProjects.filter((project) => project.featured).map((project, index) => `
        <article class="project-row reveal" data-project-collection="${project.collection}" data-cursor-label="Explore ${project.title}">
            <div class="project-row-main">
                <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
                <div class="project-title-group">
                    <h3>${project.title}<span class="project-arrow" aria-hidden="true"><svg viewBox="0 0 30 20"><path d="M2 10h23m-8-7 8 7-8 7" /></svg></span></h3>
                    <p>${project.description}</p>
                </div>
                <span class="project-type">${project.category}</span>
            </div>
            <div class="project-row-footer">
                <ul class="project-tags" aria-label="Technologies used">
                    ${project.technologies.map((technology) => `<li>${technology}</li>`).join("")}
                </ul>
                ${renderProjectLinks(project)}
            </div>
            <div class="project-preview">
                <img src="${project.image}" alt="${project.imageAlt}" loading="lazy">
            </div>
        </article>
    `).join("");
}

function initializeProjectFilters() {
    if (!projectList || !projectFilters.length) {
        return;
    }

    const projectRows = projectList.querySelectorAll(".project-row");
    const filterLabels = {
        all: "All work",
        build: "Product builds",
        personal: "Personal lab"
    };

    function setProjectFilter(filter) {
        let visibleCount = 0;
        projectRows.forEach((row) => {
            const isVisible = filter === "all" || row.dataset.projectCollection === filter;
            row.hidden = !isVisible;
            if (isVisible) {
                visibleCount += 1;
            }
        });

        projectFilters.forEach((button) => {
            const isActive = button.dataset.projectFilter === filter;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        if (projectFilterNote) {
            projectFilterNote.textContent = `${String(visibleCount).padStart(2, "0")} projects / ${filterLabels[filter]}`;
        }
    }

    projectFilters.forEach((button) => {
        button.addEventListener("click", () => setProjectFilter(button.dataset.projectFilter));
    });
    setProjectFilter("all");
}

function closeMobileMenu() {
    if (!mobileNav || !menuToggle) {
        return;
    }
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.classList.remove("is-open");
}

function initializeNavigation() {
    if (!menuToggle || !mobileNav) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        mobileNav.hidden = isOpen;
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
        menuToggle.classList.toggle("is-open", !isOpen);
    });

    mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !mobileNav.hidden) {
            closeMobileMenu();
            menuToggle.focus();
        }
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            closeMobileMenu();
        }
    });
}

function initializeScrollSpy() {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("[data-nav-link]");
    if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
        });
    }, { rootMargin: "-46% 0px -46% 0px" });
    sections.forEach((section) => observer.observe(section));
}

function initializeReveals() {
    const revealElements = document.querySelectorAll(".reveal");
    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
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
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
    revealElements.forEach((element) => observer.observe(element));
}

function initializeProfileLinks() {
    document.querySelectorAll("[data-profile-link]").forEach((link) => {
        const destination = profile.links[link.dataset.profileLink];
        if (!destination) {
            link.addEventListener("click", (event) => event.preventDefault());
            link.classList.add("is-disabled");
            link.setAttribute("aria-disabled", "true");
            return;
        }
        link.href = destination;
        link.target = "_blank";
        link.rel = "noreferrer";
    });

    document.querySelectorAll("[data-contact-email]").forEach((link) => {
        link.href = `mailto:${profile.email}`;
        link.firstChild.textContent = `${profile.email} `;
    });
}

function initializeCursorNote() {
    if (!projectList || prefersReducedMotion.matches || window.innerWidth <= 760 || !window.matchMedia("(pointer: fine)").matches) {
        return;
    }

    const cursorNote = document.querySelector("#cursor-note");
    const cursorLabel = document.querySelector("#cursor-note-label");
    let frameRequested = false;
    let pointerX = 0;
    let pointerY = 0;

    function moveCursorNote() {
        cursorNote.style.transform = `translate3d(${pointerX + 18}px, ${pointerY + 18}px, 0)`;
        frameRequested = false;
    }

    window.addEventListener("pointermove", (event) => {
        pointerX = event.clientX;
        pointerY = event.clientY;
        if (!frameRequested) {
            window.requestAnimationFrame(moveCursorNote);
            frameRequested = true;
        }
    });

    projectList.querySelectorAll(".project-row").forEach((row) => {
        row.addEventListener("pointerenter", () => {
            cursorLabel.textContent = row.dataset.cursorLabel;
            document.body.classList.add("has-cursor-note");
        });
        row.addEventListener("pointerleave", () => document.body.classList.remove("has-cursor-note"));
    });
}

renderProjects();
initializeProjectFilters();
initializeNavigation();
initializeScrollSpy();
initializeReveals();
initializeProfileLinks();
initializeCursorNote();
const printResumeButton = document.querySelector("#print-resume");
if (printResumeButton) {
    printResumeButton.addEventListener("click", () => window.print());
}

const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}
