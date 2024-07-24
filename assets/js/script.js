
const toggleMicroservicesBtn = document.getElementById('toggle-microservices-btn');
const toggleGamesBtn = document.getElementById('toggle-games-btn');
const toggleApiProjectsBtn = document.getElementById('toggle-api-projects-btn');

const microservices = document.getElementById('microservices');
const games = document.getElementById('games');
const apiProjects = document.getElementById('api-projects');

const toggleSection = (section) => {
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'grid';
    } else {
        section.style.display = 'none';
    }
}

toggleMicroservicesBtn.addEventListener('click', () => toggleSection(microservices));
toggleGamesBtn.addEventListener('click', () => toggleSection(games));
toggleApiProjectsBtn.addEventListener('click', () => toggleSection(apiProjects));

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

