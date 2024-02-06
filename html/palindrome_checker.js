function checkPalindrome() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const cleanText = inputText.replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
    const reversedText = cleanText.split('').reverse().join('');

    if (cleanText === reversedText) {
        document.getElementById('result').innerText = 'It is a palindrome! :)';
    } else {
        document.getElementById('result').innerText = 'It is not a palindrome. :(';
    }
}

// Add event listener for the "Enter" key press
document.getElementById('inputText').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkPalindrome();
    }
});
