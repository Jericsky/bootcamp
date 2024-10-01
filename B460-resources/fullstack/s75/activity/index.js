// Question #1: Create a program to check if a given string is a palindrome or not. 
// Add validation, if the argument is not a string, return undefined. 
// Palindrome words should be 3 characters and up.

function isPalindrome(string) {
    if (typeof string !== 'string' || string.length < 3) {
        return undefined;
    }

    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string[i] !== string[j]) {
            return false;
        }
    }

    return true;
}
// Question #2: Create a program that checks an isogram. 
// An isogram is a word where there are no repeating letters.
// The function should disregard text casing before doing anything else.
// If the function finds a repeating letter, return false. Otherwise, return true.

function isIsogram(text) {

    text = text.toLowerCase();
    let letters = [];

    for (let i = 0; i < text.length; i++) {
        if (letters.indexOf(text[i]) !== -1) {
            return false;
        } else {
            letters.push(text[i]);
        }
    }

    return true;
}

// Question #3: Create a program to determine if a given year is a leap year. 
// The program should check if the input is a positive integer representing a year. If the input is not a valid year (i.e., not a positive integer), the program should return undefined.

function isLeapYear(year) {
    // Check if the input is a positive integer
    if (typeof year !== 'number' || year <= 0 || year % 1 !== 0) {
        return undefined;
    }

    // Leap year calculation
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Question #4: Create a program that checks the age to give the proper price 
// Return undefined for people aged below 13.
// Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
// Return the rounded off price for people aged 22 to 64.
// The returned value should be a string.

function purchase(age, price) {
    if (age < 13) {
        return undefined;
    } else if ((age >= 13 && age <= 21) || age >= 65) {
        return (price * 0.8).toFixed(2);
    } else {
        return price.toFixed(2);
    }
}

// Question #5: Develop a program that calculates the frequency of a specific letter's appearance within a given sentence.
// Check first whether the letter is a single character.
// If letter is a single character, count how many times a letter has occurred in a given sentence then return count.
// If letter is invalid, return undefined.

function countLetter(letter, sentence) {
    let result = 0;

    if (letter.length !== 1) {
        return "Invalid letter input";
    }

    if (sentence.length <= 1) {
        return "Invalid sentence input";
    }

    const lowercaseLetter = letter.toLowerCase();
    const lowercaseSentence = sentence.toLowerCase();

    for (let i = 0; i < lowercaseSentence.length; i++) {
        if (lowercaseSentence[i] === lowercaseLetter) {
            result++;
        }
    }

    return result > 0 ? result : undefined;
}

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        isPalindrome: typeof isPalindrome !== 'undefined' ? isPalindrome : null,
        isIsogram: typeof isIsogram !== 'undefined' ? isIsogram : null,
        isLeapYear: typeof isLeapYear !== 'undefined' ? isLeapYear : null,
        purchase: typeof purchase !== 'undefined' ? purchase : null,
        countLetter: typeof countLetter !== 'undefined' ? countLetter : null,
    }
} catch(err){

}