/*
    1. Create a login function which is able to receive 3 parameters called username,password and role.
        -add an if statement to check if the the username is an empty string or undefined or if the password is an empty string or undefined or if the role is an empty string or undefined.
            -if it is, return a message in console to inform the user that their input should not be empty.
        -add an else statement. Inside the else statement add a switch to check the user's role add 3 cases and a default:
                -if the user's role is admin, return the following message:
                    "Welcome back to the class portal, admin!"
                -if the user's role is teacher,return the following message:
                    "Thank you for logging in, teacher!"
                -if the user's role is a rookie,return the following message:
                    "Welcome to the class portal, student!"
                -if the user's role does not fall under any of the cases, as a default, return a message:
                    "Role out of range."
*/

function login(username, password, role) {
    if (!username || username === "" || !password || password === "" || !role || role === "") {
        return "Error: All fields are required and should not be empty.";
    } else {
        switch (role.toLowerCase()) { 
            case "admin":
                return "Welcome back to the class portal, admin!";
            case "teacher":
                return "Thank you for logging in, teacher!";
            case "student":
                return "Welcome to the class portal, student!";
            default:
                return "Role out of range.";
        }
    }
}

console.log(login("asd", "123", "admin"));    
console.log(login("asd", "123", "teacher"));
console.log(login("asd", "123", "student")); 
console.log(login("asd", "123", "unknown")); 
console.log(login("", "123", "admin"));      
console.log(login("", "123", "unknown"));



function checkAverage(num1, num2, num3, num4) {
    let average = (num1 + num2 + num3 + num4) / 4;
    average = Math.round(average);

    console.log("Rounded average:", average);


    if (average < 75) {
        return `Hello, student, your average is ${average}. The letter equivalent is F`;
    } else if (average >= 75 && average <= 79) {
        return `Hello, student, your average is ${average}. The letter equivalent is D`;
    } else if (average >= 80 && average <= 84) {
        return `Hello, student, your average is ${average}. The letter equivalent is C`;
    } else if (average >= 85 && average <= 89) {
        return `Hello, student, your average is ${average}. The letter equivalent is B`;
    } else if (average >= 90 && average <= 95) {
        return `Hello, student, your average is ${average}. The letter equivalent is A`;
    } else if (average > 96) {
        return `Hello, student, your average is ${average}. The letter equivalent is A+`;
    }
}


console.log(checkAverage(70, 80, 90, 100)); 
console.log(checkAverage(85, 85, 85, 85));
console.log(checkAverage(60, 65, 70, 75));
console.log(checkAverage(95, 97, 98, 99));

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        login: typeof login !== 'undefined' ? login : null,
        checkAverage: typeof checkAverage !== 'undefined' ? checkAverage : null

    }
} catch(err){

}