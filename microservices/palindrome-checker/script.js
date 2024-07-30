
const inputFieldElement = document.getElementById('text-input');
const checkBtnElement = document.getElementById('check-btn');
const resultParagraphElement = document.getElementById('result');

function isPalindrome(input) {
    const cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let i = 0;
    let j = cleanInput.length - 1;

    while (i < j) {
        if (cleanInput[i] !== cleanInput[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

checkBtnElement.addEventListener("click", () => {
    if (inputFieldElement.value.trim() === '') {
        alert('Please input a value');
        return;
    }
    resultParagraphElement.innerText = isPalindrome(inputFieldElement.value) ?
        `${inputFieldElement.value} is a palindrome` :
        `${inputFieldElement.value} is not a palindrome`
        ;
})


// Regex Expression Notes:

// In the expression /[^a-zA-Z]/g:

// [^a-zA-Z]:
// The square brackets [] define a character set.
// a-z matches any lowercase letter from a to z.
// A-Z matches any uppercase letter from A to Z.
// The ^ inside the brackets negates the set, meaning it matches any character not in the set of a-zA-Z.

// /g:
// The g flag stands for "global," meaning the pattern will be applied to the entire string, not just the first match.

// So, str.replace(/[^a-zA-Z]/g, '') means: 
// "Replace any character that is not a letter (a-z or A-Z) with an empty string, throughout the entire string."