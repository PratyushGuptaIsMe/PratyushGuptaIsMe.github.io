const projects = [
    {
        type: "emoji",
        title: "Bad Apple Checkerboard",
        description: "A creative visualization project using checkerboard patterns to create animated effects inspired by Bad Apple.",
        emoji: "🎨",
        link: "https://google.com"
    },
    {
        type: "emoji",
        title: "Soundboard",
        description: "An interactive soundboard application with multiple sound effects and responsive controls.",
        emoji: "🔊",
        link: "#"
    },
    {
        type: "emoji",
        title: "Web Portfolio",
        description: "A modern and responsive portfolio website showcasing projects and skills.",
        emoji: "💼",
        link: "#"
    },
    {
        type: "emoji",
        title: "Image to Array Converter",
        description: "Python script that converts images to 2D arrays for creative coding and visualization projects.",
        emoji: "🖼️",
        link: "#"
    },
    {
        type: "emoji",
        title: "Refresh Rate Checker",
        description: "Web tool to check and display your monitor's refresh rate and visual capabilities.",
        emoji: "⚡",
        link: "#"
    },
    {
        type: "emoji",
        title: "Creative Coding Experiments",
        description: "A collection of experimental projects exploring creative coding with visual effects and animations.",
        emoji: "✨",
        link: "#"
    }
];

const projectsGrid1 = document.getElementById('projectsGrid3');

document.addEventListener('DOMContentLoaded', () => {
    if (projectsGrid1) {
        renderProjects(projectsGrid1);
    }
});

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
