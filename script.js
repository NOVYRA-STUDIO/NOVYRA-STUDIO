// Projects data - ЗАМІНІТЬ URL ЗОБРАЖЕНЬ НА СВОЇ!
const projects = [
    {
        id: 1,
        title: "Air Defense Ops",
        url: "#project-1",
        preview: "projects img/Air Defense Ops.jpg",
        platforms: ["windows", "macos", "android"],
        created: "27.12.2025",
        updated: "13.01.2026",
        downloadUrls: {
            windows: "https://github.com/NOVARA-STUDIO/NOVARA-STUDIO/releases/download/exe/Air.Defense.Ops.exe",
            macos: "https://github.com/NOVARA-STUDIO/NOVARA-STUDIO/releases/download/macOS/Air.Defense.Ops.zip",
            android: "https://github.com/NOVARA-STUDIO/NOVARA-STUDIO/releases/download/apk/Air.Defense.Ops.apk"
        },
        description: "Обороняй країну від повітряних загроз: дронів, ракет. Керуй радарами та ППО, виявляй цілі й знищуй їх до удару. Кожне рішення впливає на виживання країни.",
        features: [
            "Різні типи ракет та систем ППО",
            "Режим виживання"
        ],
        technologies: ["Godot"],
        screenshots: [
            "images/airdefense-screenshot1.jpg",
            "images/airdefense-screenshot2.jpg"
        ]
    }
];

// Platform icons
const platformIcons = {
    android: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/></svg>`,
    windows: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>`,
    macos: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 5.94 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82 2 .82 3.3.79 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.62-4.08z"/></svg>`
};

// Platform names
const platformNames = {
    android: "Android",
    windows: "Windows",
    macos: "macOS"
};

// Render projects
function renderProjects() {
    const grid = document.getElementById('projectsGrid');

    projects.forEach(project => {
        const card = document.createElement('a');
        card.href = project.url;
        card.className = 'project-card';
        card.rel = 'noopener';

        const platformsHTML = project.platforms.map(platform => 
            `<div class="platform-icon">${platformIcons[platform]}</div>`
        ).join('');

        card.innerHTML = `
            <div class="project-preview">
                <img src="${project.preview}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="platforms">${platformsHTML}</div>
                </div>
                <div class="project-dates">
                    <div class="date-row">
                        <span class="date-label">Створено:</span>
                        <span>${project.created}</span>
                    </div>
                    <div class="date-row">
                        <span class="date-label">Оновлено:</span>
                        <span>${project.updated}</span>
                    </div>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Initialize
renderProjects();

// Create animated particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';

        // Random animation duration between 10-20 seconds
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

        // Random delay
        particle.style.animationDelay = Math.random() * 5 + 's';

        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.2;

        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Navigation
function showProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const mainContent = document.getElementById('mainContent');
    const projectDetail = document.getElementById('projectDetail');
    const detailContent = document.getElementById('projectDetailContent');

    // Hide main content
    mainContent.classList.add('hidden');
    projectDetail.classList.add('active');

    // Build platforms HTML
    const platformsHTML = project.platforms.map(platform => 
        `<div class="platform-icon">${platformIcons[platform]}</div>`
    ).join('');

    // Build download buttons for each platform
    const downloadButtonsHTML = project.platforms.map(platform => {
        const url = project.downloadUrls[platform];
        return `
            <a href="${url}" target="_blank" rel="noopener" class="download-button download-button-${platform}">
                <div class="platform-icon">${platformIcons[platform]}</div>
                <span>Завантажити для ${platformNames[platform]}</span>
            </a>
        `;
    }).join('');

    // Build features HTML
    const featuresHTML = project.features.length > 0 ? project.features.map(feature => `
        <li class="feature-item">
            <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>${feature}</span>
        </li>
    `).join('') : '<li class="feature-item"><span>Особливості будуть додані пізніше</span></li>';

    // Build technologies HTML
    const techHTML = project.technologies.map(tech => 
        `<div class="tech-tag">${tech}</div>`
    ).join('');

    // Build screenshots HTML
    const screenshotsHTML = project.screenshots.map(screenshot => `
        <div class="screenshot">
            <img src="${screenshot}" alt="${project.title} screenshot" loading="lazy">
        </div>
    `).join('');

    // Render project detail
    detailContent.innerHTML = `
        <div class="project-detail-header">
            <h1 class="project-detail-title">${project.title}</h1>
            <div class="project-detail-meta">
                <div class="meta-item">
                    <span>Платформи:</span>
                    <div style="display: flex; gap: 8px;">
                        ${platformsHTML}
                    </div>
                </div>
                <div class="meta-item">
                    <span>Створено: ${project.created}</span>
                </div>
                <div class="meta-item">
                    <span>Оновлено: ${project.updated}</span>
                </div>
            </div>
            <p class="project-detail-description">${project.description}</p>
            <div class="download-buttons-container">
                ${downloadButtonsHTML}
            </div>
        </div>

        <div class="project-section">
            <h2 class="section-title">Особливості</h2>
            <ul class="features-list">
                ${featuresHTML}
            </ul>
        </div>

        <div class="project-section">
            <h2 class="section-title">Технології</h2>
            <div class="technologies">
                ${techHTML}
            </div>
        </div>

        <div class="project-section">
            <h2 class="section-title">Скріншоти</h2>
            <div class="screenshots-grid">
                ${screenshotsHTML}
            </div>
        </div>
    `;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMainContent() {
    const mainContent = document.getElementById('mainContent');
    const projectDetail = document.getElementById('projectDetail');

    mainContent.classList.remove('hidden');
    projectDetail.classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Back button handler
document.getElementById('backButton').addEventListener('click', (e) => {
    e.preventDefault();
    showMainContent();
    window.location.hash = '';
});

// Handle hash navigation
function handleNavigation() {
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
        const projectId = parseInt(hash.replace('#project-', ''));
        showProjectDetail(projectId);
    } else {
        showMainContent();
    }
}

window.addEventListener('hashchange', handleNavigation);
window.addEventListener('load', handleNavigation);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});