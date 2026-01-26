// Project data
const projects = [
    {
        type: "emoji",
        title: "Bad Apple Checkerboard",
        category: "creative",
        description: "A creative visualization project using checkerboard patterns to create animated effects inspired by Bad Apple.",
        emoji: "🎨",
        link: "https://google.com"
    },
    {
        type: "emoji",
        title: "Soundboard",
        category: "web",
        description: "An interactive soundboard application with multiple sound effects and responsive controls.",
        emoji: "🔊",
        link: "#"
    },
    {
        type: "emoji",
        title: "Web Portfolio",
        category: "web",
        description: "A modern and responsive portfolio website showcasing projects and skills.",
        emoji: "💼",
        link: "#"
    },
    {
        type: "emoji",
        title: "Image to Array Converter",
        category: "creative",
        description: "Python script that converts images to 2D arrays for creative coding and visualization projects.",
        emoji: "🖼️",
        link: "#"
    },
    {
        type: "emoji",
        title: "Refresh Rate Checker",
        category: "web",
        description: "Web tool to check and display your monitor's refresh rate and visual capabilities.",
        emoji: "⚡",
        link: "#"
    },
    {
        type: "emoji",
        title: "Creative Coding Experiments",
        category: "creative",
        description: "A collection of experimental projects exploring creative coding with visual effects and animations.",
        emoji: "✨",
        link: "#"
    }
];

// DOM Elements
const projectsGrid1 = document.getElementById('projectsGrid3');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (projectsGrid1) {
        renderProjects(projectsGrid1);
    }
});

// Render projects
function renderProjects(grid) {
    if (!grid) {
        return
    };
    
    grid.innerHTML = '';
    
    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        const mediaContent = project.type === 'emoji' 
            ? `${project.emoji}`
            : `<img src="${project.image}" alt="${project.title}" class="project-icon">`;
        projectCard.innerHTML = `
        <a href="${project.link}">
            <div class="project-image">
                ${mediaContent}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </a>
        `;
        
        grid.appendChild(projectCard);
    });
}
