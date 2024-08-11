const fs = require('fs');
const path = require('path');

const projectDirs = ['microservices', 'games', 'api-projects'];
const outputFilePath = path.join(__dirname, 'projectsData.json');

let projectsData = { 'microservices': [], 'games': [], 'API Projects': [] };

projectDirs.forEach((dir) => {
    const projectPath = path.join(__dirname, '..', dir);
    fs.readdirSync(projectPath).forEach((project) => {
        const projectDir = path.join(projectPath, project);

        const readmeFiles = ['README.md', 'readme.md'];
        let readmePath = null;
        for (const file of readmeFiles) {
            const fullPath = path.join(projectDir, file);
            if (fs.existsSync(fullPath)) {
                readmePath = fullPath;
                break;
            }
        }
        if (readmePath) {
            const readmeContent = fs.readFileSync(readmePath, 'utf-8');
            const imgUrl = extractImgUrl(readmeContent);
            const description = extractDescription(readmeContent);
            const projectData = {
                name: project,
                img: imgUrl,
                description: description,
                link: `./${dir}/${project}/index.html`
            };

            if (dir === 'microservices') {
                projectsData.microservices.push(projectData);
            } else if (dir === 'games') {
                projectsData.games.push(projectData);
            } else if (dir === 'api-projects') {
                projectsData.apiProjects.push(projectData);
            }
        }
    });
});

fs.writeFileSync(outputFilePath, JSON.stringify(projectsData, null, 2), 'utf-8');

function extractImgUrl(readmeContent) {
    const imgMatch = readmeContent.match(/!\[.*\]\((.*)\)/);
    return imgMatch ? imgMatch[1] : 'https://via.placeholder.com/220x170'; ////////
}

// Function to extract the description from the README
function extractDescription(readmeContent) {
    const descriptionMatch = readmeContent.match(/<!--\s*DESCRIPTION-START\s*-->([\s\S]*?)<!--\s*DESCRIPTION-END\s*-->/);
    return descriptionMatch ? descriptionMatch[1].trim() : 'No description available.';
}
