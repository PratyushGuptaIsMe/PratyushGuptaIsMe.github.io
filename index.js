// Project data
const projects = [
    {
        id: 1,
        title: "Bad Apple Checkerboard",
        category: "creative",
        description: "A creative visualization project using checkerboard patterns to create animated effects inspired by Bad Apple.",
        emoji: "🎨",
        link: "#"
    },
    {
        id: 2,
        title: "Soundboard",
        category: "web",
        description: "An interactive soundboard application with multiple sound effects and responsive controls.",
        emoji: "🔊",
        link: "#"
    },
    {
        id: 3,
        title: "Web Portfolio",
        category: "web",
        description: "A modern and responsive portfolio website showcasing projects and skills.",
        emoji: "💼",
        link: "#"
    },
    {
        id: 4,
        title: "Image to Array Converter",
        category: "creative",
        description: "Python script that converts images to 2D arrays for creative coding and visualization projects.",
        emoji: "🖼️",
        link: "#"
    },
    {
        id: 5,
        title: "Refresh Rate Checker",
        category: "web",
        description: "Web tool to check and display your monitor's refresh rate and visual capabilities.",
        emoji: "⚡",
        link: "#"
    },
    {
        id: 6,
        title: "Creative Coding Experiments",
        category: "creative",
        description: "A collection of experimental projects exploring creative coding with visual effects and animations.",
        emoji: "✨",
        link: "#"
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (projectsGrid) {
        renderProjects(projects);
    }
    setupSmoothScroll();
});

// Render projects
function renderProjects(projectsToRender) {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projectsToRender.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.innerHTML = `
            <div class="project-image">
                ${project.emoji}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Setup smooth scrolling
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll animation for elements
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

// Observe project cards on load
setTimeout(() => {
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
}, 100);
