
const toggleMicroservicesHeader = document.getElementById('toggle-microservices');
const toggleGamesHeader = document.getElementById('toggle-games');
const toggleApiProjectsHeader = document.getElementById('toggle-api-projects');

const toggleMicroservicesLink = document.getElementById('nav-and-toggle-microservices');
const toggleGamesLink = document.getElementById('nav-and-toggle-games');
const toggleApiProjectsLink = document.getElementById('nav-and-toggle-api-projects');

const microservices = document.getElementById('microservices');
const games = document.getElementById('games');
const apiProjects = document.getElementById('api-projects');

const projectSections = [microservices, games, apiProjects];

const toggleSection = (section, header) => {
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

const hideAllSections = () => {
    projectSections.map(section => section.style.display = 'none');
}

toggleMicroservicesHeader.addEventListener('click', () => toggleSection(microservices, toggleMicroservicesHeader));
toggleGamesHeader.addEventListener('click', () => toggleSection(games, toggleGamesHeader));
toggleApiProjectsHeader.addEventListener('click', () => toggleSection(apiProjects, toggleApiProjectsHeader));

toggleMicroservicesLink.addEventListener('click', () => toggleSection(microservices, toggleMicroservicesHeader));
toggleGamesLink.addEventListener('click', () => toggleSection(games, toggleGamesHeader));
toggleApiProjectsLink.addEventListener('click', () => toggleSection(apiProjects, toggleApiProjectsHeader));


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

