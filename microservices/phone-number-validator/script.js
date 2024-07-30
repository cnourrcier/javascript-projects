const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const validatePhoneNumber = (input) => {
    if (!input) {
        alert('Please provide a phone number');
        return '';
    }

    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
    const valid = phoneRegex.test(input);
    return `<span> ${valid ? 'Valid' : 'Invalid'} US number: <br><b>${input}</b></span>`
}

checkBtn.addEventListener('click', () => {
    const result = validatePhoneNumber(userInput.value);
    resultsDiv.innerHTML = result;
    userInput.value = '';
})

clearBtn.addEventListener('click', () => {
    resultsDiv.innerText = '';
    userInput.value = '';
})