// console.log("Hello World");

/* Member 1 */
/* printOddNumbers() */
/* 
    Create a JavaScript Function called printOddNumbers that takes in a number as an input and uses loops to output only odd numbers
      - Create a variable called oddNumbers with a string value of "The odd numbers found are the following: "
        - Look up Continue and Break Statements to be able to complete the output for this activity.
      - The loop should print numbers based on the given value.
      - Create an if statement to check if the number iterated is an even number.
        - If it is, use the continue statement to skip the loop to the next iteration.
        - Else If the current number is odd, concatenate the number to the oddNumbers variable to create a string with the initial value and the odd numbers found.
      - Create another if statement to check if the current value being looped/iterated is greater than 10.
        - If it is, use the break statement to stop the loop.
      - Once the loop is complete, return the variable oddNumbers.
*/
function printOddNumbers(number) {
    let oddNumbers = "The odd numbers found are the following: ";

    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            continue; 
        }
        oddNumbers += i + " ";
        if (i > 10) {
            break;
        }
    }

    return oddNumbers;
}
console.log(printOddNumbers(15)); 

/* Member 2 */
/* generateSalt() */
/* 
      Create a JavaScript function called generateSalt that takes a number as input.
      - Define a constant variable named characters that contains all the characters that can be used in the salt. This includes      
        uppercase letters, lowercase letters, and digits.
      - Inside the function, create an empty string variable named salt to store the generated salt.
      - Use a for loop to generate the salt.
        - The loop should run a number of times based on the given number input.
      - Create a variable called randomIndex
        - Generate a random number e between 0 and the length of the characters string minus 1 using Math.random() and Math.floor() and save it to the randomIndex variable.
        - Research the use of Math.floor and Math.random
      - Use the randomIndex to select a character from the characters string and add the selected character to the salt string.
      - Return the generated salt string
*/
    function generateSalt(length){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let salt = '';
        for (let i=0;i < length; i++){
            let randomIndex = Math.floor(Math.random() * characters.length);
            salt += characters[randomIndex];
            
        }
        return salt;
    }

    console.log(generateSalt(5));



/* Member 3 */
/* filterVowels() */
/* 
    Create a function called filterVowels. It should be able receive a string
    - Inside the function, create a variable called filteredString with an empty string as initial value.
    - Add a for Loop that will iterate through the individual letters of the given string variable based on it’s length.
    - In the loop, add an if statement that will check if the letter of the string is a vowel.
      - If it is, using continue, skip to the next iteration of the loop.
      - Else, add the current letter being looped to the given filteredString variable.
    - Outside the loop, return the filteredString variable.


*/
        function filterVowels(sampleString){
        let filteredString = '';

        for (let i=0; i< sampleString.length;i++){
            if ('aeiouAEIOU'.includes(sampleString[i])){
                continue;
            } else {
                filteredString += sampleString[i];
            }
        } 
        return filteredString
    }

    console.log(filterVowels('Thanks God Its Friday'));


    function countLetterAndStop(inputString) {
    let letterACount = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i].toLowerCase() === 'a') {
            letterACount += 1;
        } else if (inputString[i].toLowerCase() === 'd') {
            break;
        }
    }
    return letterACount;
}


function countLetterAndStop(inputString) {
    let letterACount = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i].toLowerCase() === 'a') {
            letterACount += 1;
        } else if (inputString[i].toLowerCase() === 'd') {
            break;
        }
    }
    return letterACount;
}

// sana tama
console.log(countLetterAndStop("Mama Mia"));     // Output: 3
console.log(countLetterAndStop("Lambda"));       // Output: 1
console.log(countLetterAndStop("Dancing Queen"));// Output: 0





function register(firstName, lastName, email, password, confirmPassword, mobileNum) {
    
    if (typeof firstName !== "string" || firstName === "") {
        return "First name must be a string and not empty";
    }

    if (typeof lastName !== "string" || lastName === "") {
        return "Last name must be a string and not empty";
    }

    if (typeof email !== "string" || email === "") {
        return "Email must be a string and not empty";
    }

    if (typeof password !== "string" || password === "") {
        return "Password must be a string and not empty";
    }

    if (typeof confirmPassword !== "string" || confirmPassword === "") {
        return "Confirm password must be a string and not empty";
    }

    if (typeof mobileNum !== "string" || mobileNum === "") {
        return "Mobile number must be a string and not empty";
    }

    
    if (mobileNum.length !== 11) {
        return "Mobile number must be 11 digits long";
    }

    
    if (password !== confirmPassword) {
        return "Password and confirm password must match";
    }

   
    return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        mobileNum: mobileNum
    };
}

let newUser = register("Nayeon", "Im", "nayeonie@gmail.com", "nayeonnie21", "nayeonnie21", "09266771400");
console.log(newUser);

function printPattern(rows) {
    let pattern = "";
    for (let i = 0; i < rows; i++) {
        pattern += "*";
        console.log(pattern);
    }
}

printPattern(5);

function checkAverage(avg) {
    if (avg >= 85 && avg <= 89) {
        return `Hello, student, your average is ${avg}. The letter equivalent is B`;
    } else if (avg >= 90 && avg <= 95) {
        return `Hello, student, your average is ${avg}. The letter equivalent is A`;
    } else if (avg > 95) {
        return `Hello, student, your average is ${avg}. The letter equivalent is A+`;
    } else {
        return `Hello, student, your average is ${avg}. The letter equivalent is below B`;
    }
}




//Do not modify
//For exporting to test.js
try{
    module.exports = {
      printOddNumbers: typeof printOddNumbers !== 'undefined' ? printOddNumbers : null,
      filterVowels: typeof filterVowels !== 'undefined' ? filterVowels : null,
      generateSalt: typeof generateSalt !== 'undefined' ? generateSalt : null,
      countLetterAndStop: typeof countLetterAndStop !== 'undefined' ? countLetterAndStop : null,
      register: typeof register !== 'undefined' ? register : null,
      printPattern: typeof printPattern !== 'undefined' ? printPattern : null
    }
} catch(err){

}