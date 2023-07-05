// JavaScript source code
/*
02 Roman numberals converter

- Create a function that converts a roman numeral to decimal.

romanInteger("XVIII")   // 18
romanInteger("CXX")     // 120

*/

function romanInteger(roman){
    // Create table with corresponding numerical values

    const romanTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100;
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1

    };
    // Create a variable to store the result
    let result = 0;

    // Scroll roman numeral letter by letter
    for(let i = 0; i < roman)

    //If the current letter is the last or the value of the next character is less than or equal to the current one, then we add the value to the result


    // If not, subtract the value of the current letter from the result


    // return the result
    return result;
}