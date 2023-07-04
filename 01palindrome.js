// JavaScript source code
/*
01 Palindrome

- Given a string, check if it is a palindrome or not. You can perform in javascript and with control structures.

01 Example:

isPalindrome("otto") // return: true
isPalindrome("angel") // return: false

*/

// Solution 1 javascript
/*
function isPalindrome(word) {
    let inverted = word.split("").reverse().join("");

    return (inverted === word);
}

console.log(isPalindrome("otto")); // return: true
console.log(isPalindrome("angel")); //return: false
*/

// Solution 2 control structures

/* 

function isPalindrome (word){
    // Split the string into an array of letters
    let letters = [];
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }

    // Invert into array with a loop
    let invertedLetters = [];
    for (let i = letters.length - 1; i >= 0; i--) {
        invertedLetters.push(letters[i]);
    }

    // Join all the array letters with a loop and save the result in a variable
    let invertedWord = "";
    for (let i = 0; i < invertedLetters.length; i++) {
        invertedWord += invertedLetters[i];
    }

    // return the result
    return (word === invertedWord);
}

console.log(isPalindrome("otto")); // return: true
console.log(isPalindrome("angel")); //return: false
*/