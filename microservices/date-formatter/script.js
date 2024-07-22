const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

// Date object that returns a string with the current date and time.
const date = new Date();
// Returns a number between 1 and 31 that represents the day of the month for that date.
const day = date.getDate();
// Returns a number between 0 and 11 that represents the month for the date provided.
const month = date.getMonth() + 1;
// Returns a number which represents the year for the provided date.
const year = date.getFullYear();
// Returns a number between 0 and 23 that represents the hour for the provided date (0 is midnight and 23 is 11pm).
const hours = date.getHours();
// Returns a number between 0 and 59 that represents the minutes for the provided date.
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        case 'yyyy-mm-dd':
            currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
            break;
        case 'mm-dd-yyyy-h-mm':
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
        default:
            currentDateParagraph.textContent = formattedDate;
            break
    }
});


