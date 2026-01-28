const projects = [
    /* images/emoji */
    {
        type: "emoji",
        title: "Bad Apple on a checkerboard",
        description: "Animating the Bad Apple music video on a checkerboard. A checkerboard is only 8x8 so it is a little unique to say the least.",
        emoji: "🎨",
        image: "",
        link: "https://pratyushguptaisme.github.io/bad-apple-checkerboard/"
    },
    {
        type: "emoji",
        title: "A shooting game",
        description: "A random shooting game I made. I learned web animation by building this. This tooke me 6 months 😵‍💫.",
        emoji: "🔫",
        link: "https://pratyushguptaisme.github.io/shooting-game/"
    },
    {
        type: "emoji",
        title: "Fractal art generator",
        description: "Use it to create your own randomly generated cool-looking fractal art. Many customizers and stuff.",
        emoji: "⏹️",
        link: "https://pratyushguptaisme.github.io/fractalgenerator"
    }
];

const projectsGrid = document.getElementById('projectsGrid');

document.addEventListener('DOMContentLoaded', () => {
    if (projectsGrid) {
        renderProjects(projectsGrid);
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
