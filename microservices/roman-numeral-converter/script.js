let inputField = document.getElementById('number-input');
let convertBtn = document.getElementById('convert-btn');
let result = document.getElementById('result');

function convertToRomanNumeral(input) {
    console.log(input);
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