function convertNumber() {
    const numberInput = document.getElementById('numberInput').value.trim();
    const conversionType = document.getElementById('conversionType').value;
    const resultElement = document.getElementById('result');

    switch (conversionType) {
        case 'binary':
            convertBinary(numberInput, resultElement);
            break;
        case 'decimal':
            convertDecimal(numberInput, resultElement);
            break;
        case 'hexadecimal':
            convertHexadecimal(numberInput, resultElement);
            break;
        default:
            resultElement.innerText = 'Invalid conversion type.';
    }
}

function convertBinary(binaryInput, resultElement) {
    if (/^[01]+$/.test(binaryInput)) {
        const decimalNumber = parseInt(binaryInput, 2);
        const hexadecimalNumber = decimalNumber.toString(16).toUpperCase();
        resultElement.innerText = `Decimal: ${decimalNumber}, Hexadecimal: ${hexadecimalNumber}`;
    } else {
        resultElement.innerText = 'Invalid binary input. Please enter a valid binary number.';
    }
}

function convertDecimal(decimalInput, resultElement) {
    if (/^\d+$/.test(decimalInput)) {
        const binaryNumber = (decimalInput >>> 0).toString(2);
        const hexadecimalNumber = parseInt(decimalInput, 10).toString(16).toUpperCase();
        resultElement.innerText = `Binary: ${binaryNumber}, Hexadecimal: ${hexadecimalNumber}`;
    } else {
        resultElement.innerText = 'Invalid decimal input. Please enter a valid decimal number.';
    }
}

function convertHexadecimal(hexadecimalInput, resultElement) {
    if (/^[0-9A-Fa-f]+$/.test(hexadecimalInput)) {
        const decimalNumber = parseInt(hexadecimalInput, 16);
        const binaryNumber = decimalNumber.toString(2);
        resultElement.innerText = `Decimal: ${decimalNumber}, Binary: ${binaryNumber}`;
    } else {
        resultElement.innerText = 'Invalid hexadecimal input. Please enter a valid hexadecimal number.';
    }
}
