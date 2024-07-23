let inputField = document.getElementById('number-input');
let convertBtn = document.getElementById('convert-btn');
let result = document.getElementById('result');

function convertToRomanNumeral(input) {
    if (!input) {
        return `<p>Please enter a valid number</p>`;
    }

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ]
    let number = parseInt(input);
    let romanNumeral = '';

    if (number <= 0) {
        return `<p>Please enter a number greater than or equal to 1</p>`;
    }

    if (number > 3999) {
        return `<p>Please enter a number less than or equal to 3999</p>`;
    }

    romanNumerals.forEach(({ value, numeral }) => {
        while (number >= value) {
            romanNumeral += numeral;
            number -= value;
        };
    });

    return `<p>${romanNumeral}</p>`;
};

convertBtn.addEventListener('click', () => {
    let romanNumeral = convertToRomanNumeral(inputField.value);
    result.innerHTML = romanNumeral;
    result.style.display = 'block';
});