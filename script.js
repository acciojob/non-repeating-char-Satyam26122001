function firstNonRepeatedChar(str) {
    const charCount = {}; // Object to store character counts

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeated character is found
}

const input = prompt("Enter a string:");
alert(firstNonRepeatedChar(input));
