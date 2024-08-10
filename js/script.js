document.addEventListener('DOMContentLoaded', () => {
    fetch('./script/projectsData.json')
        .then(response => response.json())
        .then(data => {
            const sectionsContainer = document.querySelector('.projects-wrapper .projects-header-container');
            const contentContainer = document.querySelector('.projects-wrapper');

            Object.keys(data).forEach(sectionId => {
                // Generate the toggle header for each section
                const header = document.createElement('h2');
                header.className = 'projects-section-header';
                header.id = `toggle-${sectionId}`;
                header.innerHTML = `<a href="#${sectionId}">${capitalizeFirstLetter(sectionId)}</a> <i class="fas fa-chevron-down" id="toggle-arrow"></i>`;
                sectionsContainer.appendChild(header);

                // Create the project section
                const section = document.createElement('section');
                section.className = 'projects';
                section.id = sectionId;
                contentContainer.appendChild(section);

                // Populate the projects within this section
                appendProjects(section, data[sectionId]);

                // Add toggle functionality to the header
                header.addEventListener('click', () => toggleSection(section, header));
            });

            // Link navigation links to the toggle functionality
            linkNavToToggle('nav-and-toggle-microservices', 'microservices');
            linkNavToToggle('nav-and-toggle-games', 'games');
            linkNavToToggle('nav-and-toggle-api-projects', 'api-projects');
        });
});

// Helper function to append projects to a section
function appendProjects(section, projects) {
    if (section && projects.length > 0) {
        const projectElements = projects.map(project => `
            <a href="${project.link}">
                <figure class="project">
                    <img src="${project.img}" alt="${project.name}">
                    <p>${project.description}</p>
                </figure>
            </a>
        `).join('');
        section.insertAdjacentHTML('beforeend', projectElements);
    }
}

// Link navigation menu items to toggle functionality
function linkNavToToggle(navLinkId, sectionId) {
    const link = document.getElementById(navLinkId);
    const section = document.getElementById(sectionId);
    const header = document.getElementById(`toggle-${sectionId}`);

    if (link && section && header) {
        link.addEventListener('click', () => toggleSection(section, header));
    }
}

// Toggle functionality
function toggleSection(section, header) {
    const icon = header.querySelector('i');
    if (section.style.display === 'none' || section.style.display === '') {
        hideAllSections();
        icon.classList.add('up');
        section.style.display = 'grid';
    } else {
        section.style.display = 'none';
        icon.classList.remove('up');
    }
}

// Hide all sections
function hideAllSections() {
    document.querySelectorAll('.projects').forEach(section => section.style.display = 'none');
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}






// Fetch quotes from the API
fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Fill _CONTENT with quotes from the API
        _CONTENT = data.map(quote =>
            `${quote.text}
            - ${quote.author.split(',')[0]}`);
        // Start the text animation
        _INTERVAL_VAL = setInterval(Type, 100);
    })
    .catch(function (error) {
        console.error("Error fetching quotes:", error);
    });

// text animation
let _CONTENT = [];

let _PART = 0;
let _PART_INDEX = 0;
let _INTERVAL_VAL;
const _ELEMENT = document.getElementById("text");
const _CURSOR = document.getElementById("cursor");

// typing effect
function Type() {
    let text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    if (text === _CONTENT[_PART]) {
        // hide the cursor
        _CURSOR.style.display = 'none';
        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

// deleting effect
function Delete() {
    let text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    if (text === '') {
        clearInterval(_INTERVAL_VAL);

        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;
        setTimeout(function () {
            _CURSOR.style.display = 'inline-block';
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}



// const microservices = document.getElementById('microservices');
// const games = document.getElementById('games');
// const apiProjects = document.getElementById('api-projects');

// const projectSections = [microservices, games, apiProjects];

// // Toggle project Sections Start
// const toggleMicroservicesHeader = document.getElementById('toggle-microservices');
// const toggleGamesHeader = document.getElementById('toggle-games');
// const toggleApiProjectsHeader = document.getElementById('toggle-api-projects');

// const toggleMicroservicesLink = document.getElementById('nav-and-toggle-microservices');
// const toggleGamesLink = document.getElementById('nav-and-toggle-games');
// const toggleApiProjectsLink = document.getElementById('nav-and-toggle-api-projects');

// const toggleSection = (section, header) => {
//     const icon = header.querySelector('i');
//     if (section.style.display === 'none' || section.style.display === '') {
//         hideAllSections();
//         icon.classList.add('up');
//         section.style.display = 'grid';
//     } else {
//         section.style.display = 'none';
//         icon.classList.remove('up');
//     }
// }

// const hideAllSections = () => {
//     projectSections.map(section => section.style.display = 'none');
// }

// toggleMicroservicesHeader.addEventListener('click', () => toggleSection(microservices, toggleMicroservicesHeader));
// toggleGamesHeader.addEventListener('click', () => toggleSection(games, toggleGamesHeader));
// toggleApiProjectsHeader.addEventListener('click', () => toggleSection(apiProjects, toggleApiProjectsHeader));

// toggleMicroservicesLink.addEventListener('click', () => toggleSection(microservices, toggleMicroservicesHeader));
// toggleGamesLink.addEventListener('click', () => toggleSection(games, toggleGamesHeader));
// toggleApiProjectsLink.addEventListener('click', () => toggleSection(apiProjects, toggleApiProjectsHeader));

// // Toggle Projects Section End


// // Fetch Projects Start
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('./script/projectsData.json')
//         .then(response => response.json())
//         .then(data => {
//             populateProjects('microservices', data.microservices);
//             populateProjects('games', data.games);
//             populateProjects('api-projects', data.apiProjects);
//         });
// });

// function populateProjects(sectionId, projects) {
//     const section = document.getElementById(sectionId);
//     if (section && projects.length > 0) {
//         section.innerHTML = projects.map(project => `
//             <a href="${project.link}">
//                 <figure class="project">
//                     <img src="${project.img}" alt="${project.name}">
//                     <p>${project.description}</p>
//                 </figure>
//             </a>
//             `).join('');
//     }
// }

