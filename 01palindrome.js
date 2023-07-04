// JavaScript source code
/*
01 Palindrome

- Given a string, check if it is a palindrome or not. You can perform in javascript and with control structures.

01 Example:

isPalindrome("otto") // return: true
isPalindrome("angel") // return: false

*/

function isPalindrome(word) {
    let inverted = word.split("").reverse.join("");

    return (inverted === word);
}

console.log(isPalindrome("otto")); // return: true
console.log(isPalindrome("angel")); //return: false