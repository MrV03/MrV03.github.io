function convertToRoman() {
    const input = document.getElementById('decimalInput').value;
    const resultElement = document.getElementById('result');

    if (validateInput(input)) {
        const decimalNumber = parseInt(input);
        const romanNumeral = getRomanNumeral(decimalNumber);
        resultElement.innerText = `Roman Numeral: ${romanNumeral}`;
    } else {
        resultElement.innerText = 'Invalid input. Please enter a number between 1 and 3999 or a valid Roman numeral.';
    }
}

function convertToDecimal() {
    const input = document.getElementById('decimalInput').value.toUpperCase();
    const resultElement = document.getElementById('result');

    if (validateRomanNumeral(input)) {
        const decimalNumber = getDecimalNumber(input);
        resultElement.innerText = `Decimal Number: ${decimalNumber}`;
    } else {
        resultElement.innerText = 'Invalid input. Please enter a valid Roman numeral.';
    }
}

function validateInput(input) {
    const decimalNumber = parseInt(input);
    return !isNaN(decimalNumber) && decimalNumber >= 1 && decimalNumber <= 3999;
}

function validateRomanNumeral(romanNumeral) {
    return /^[IVXLCDM]+$/.test(romanNumeral);
}

function getRomanNumeral(decimalNumber) {
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
    ];

    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        while (decimalNumber >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            decimalNumber -= romanNumerals[i].value;
        }
    }

    return result;
}

function getDecimalNumber(romanNumeral) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentNumeral = romanNumeral[i];
        const nextNumeral = romanNumeral[i + 1];

        if (romanNumerals[currentNumeral] < romanNumerals[nextNumeral]) {
            result += romanNumerals[nextNumeral] - romanNumerals[currentNumeral];
            i++; // Skip the next numeral since it has already been accounted for
        } else {
            result += romanNumerals[currentNumeral];
        }
    }

    return result;
}
