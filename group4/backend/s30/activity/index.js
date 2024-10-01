console.log('Hello World');

/* 
1. In the S30 folder, create an activity folder and an index.html and index.js file inside of it.
- Create an index.html file to attach our index.js file
- Copy the template from any code-sharing platforms given by the instructor and paste it in an index.js file.
- Update your local sessions git repository and push to git with the commit message of Add template code s28.
- Console log the message Hello World to ensure that the script file is properly associated with the html file.
*/

/*
    Create functions which can manipulate our arrays.
*/
/*
    
3. Create a function called displayValues() which is able to receive an array of numbers and display cubed values in the console.
    - Use the forEach() method to print the square of each number on a new line.
*/

function displayValues(values){
    values.forEach(function(number){
        console.log(number ** 3);
    })
};
console.log('Result of display function')
displayValues([1, 2, 3, 4, 5]);

/*
4. Write a function called celsiusToFahrenheit that takes an array of Celsius temperatures as input returns an array of converted values to Fahrenheit.
    - Create a new variable inside the function called convertedArray.
    - Use the map() method to convert each temperature to Fahrenheit and save it into the variable. 
    - return the convertedArray variable.
*/

let celsius = [32,15,26,40,8];

function celsiusToFahrenheit(celsiusArray){
    let convertedArray = celsiusArray.map(function(temp){
        return (9/5 * temp) + 32;
    });
    return convertedArray;
};

console.log('Result of celsiusToFahrenheit function');
console.log(celsiusToFahrenheit(celsius));

/*
5. Write a function called areAllEven that takes an array of numbers as input and returns a boolean which determines if all the numbers given are even or not.
    - Create a new variable inside the function called isEven.
    - Use the every() method to check if all the numbers are even and save the result into the variable. 
T   - Return the isEven variable.

*/


// function areAllEven(numbers) {
//     return numbers.every(function(number) {
//       return number % 2 === 0;
//     });
//   }

function areAllEven(numbers) {
    let isEven = numbers.every(function(number) {
        return number % 2 === 0;
    });

    return isEven;
}


console.log("Result of areAllEven funciton:")
console.log(areAllEven([2,4,6,8])); 


/*
6. Write a function called hasDivisibleBy8 that takes an array of numbers as input returns a boolean which determines if the array contains at least one number divisible by 8.
- Create a new variable called hasDivisible
- Use the some() method to check if at least one of the given values is divisible by 8, save the result in the hasDivisible variable.
- Return the hasDivisible variable.

*/

let numbersArray = [8,25,68,108,800];
function hasDivisibleBy8(numArray){
    let hasDivisible = numArray.some(function(number){
        return (number % 8 === 0)
    })
    return hasDivisible;
};

console.log('Result of hasDivisibleBy8 function')
console.log(hasDivisibleBy8(numbersArray));

/*
7. Write a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers from the original array.
    - Create a new variable called filteredNum
    - Use the filter() method to create a new array of only the even numbers from the original array save it in the filteredNum variable.
    - Return the filteredNum variable.

*/

function filterEvenNumbers(numbers) {
    let filteredNum = numbers.filter(function(number) {
        return number % 2 === 0;
    });
    return filteredNum;
}
let evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 8, 9, 10]);
console.log('result of filterEvenNumbers function ')
console.log(evenNumbers);

/* 8. Create a function joinArrays to combine the array elements into a string, with a separator.
    - Look up the use of join() in javascript arrays
    - Use the join() method to concatenate the array elements into a string, separated by the separator argument
    - Return the converted string
*/
let joinedArray = ['Hello', 'World']
console.log('Result of joinArray function ');
console.log(joinedArray.join(' '));

/* 9. Create a function isPartIncluded to check if an item exists in the array.
    - The function will receive an array of computer parts as an argument
    - Look up the use case of includes() in javascript arrays
    - Use the includes() method to check if a computer component exists in the array.
    - Return a boolean value.
*/
function isPartIncluded(partsArray, part) {
    let isIncluded = partsArray.includes(part);
    return isIncluded;
}
let isIncluded = isPartIncluded(['CPU', 'GPU', 'RAM', 'Motherboard'], 'GPU');
console.log('result of isPartIncluded function')
console.log(isIncluded);   

/* 10. Create a function sumNumbers to sum all the elements inside an array of numbers
    - The function will receive an array of numbers as an argument
    - Look up the use case of reduce() in javascript arrays
    - Use the reduce() method to add all of the numbers in the array to the sum variable.
    - Return the sum of all numbers
*/
function sumNumbers(numbers) {
    let reducedNumbers = numbers.reduce(function(sum, number) {
        return sum + number;
    }, 0);
    return reducedNumbers;
}
let reducedNumbers = sumNumbers([1, 2, 3, 4, 5]);
console.log(reducedNumbers);

/* 11. Create a function arrayToString to convert an array into string data type
    - The function will receive an array as an argument
    - Look up the use case of toString() in javascript arrays
    - Use the toString() method to convert the array to a string.
    - Return the converted string
*/

let numbers = ['1', '2', '3', '4', '5',];

let stringArray = numbers.toString();
console.log('Result of arraytoString function ');
console.log(stringArray);

/* 12. Create a function combinedCart to combine two arrays which are represented by carts of items before checking out of an online store
    - The function will receive two arrays/carts of items as arguments
    - Use the concat() method to concatenate the two carts
    - Return the combined cart
*/


// function combinedCart() {
    
// }

let cartA = ['Mouse', 'Keyboard', 'Monitor'];
let cartB = ['CPU', 'RAM', 'GPU'];

let cart = cartA.concat(cartB);
console.log('Result of concatArray function ');
console.log(cart);

/*
13. Write a function called getProductNames which is able to receive an array of product objects and return a new array of only the name values of each product.
    - Create a new variable called productNames
    - Use the map() method to return only the product names of each product object into a new array which we can save in the productNames variable.
    - Return the productNames variable.
*/

let productsArray = [
    {
        name: "Shampoo",
        price: 90
    },
    {
        name: "Toothbrush",
        price: 50
    },
    {
        name: "Soap",
        price: 25
    },
    {
        name: "Toothpaste",
        price: 45
    },
];

function getProductNames(products) {
    let productNames = products.map(product => product.name);
    return productNames;
}


console.log("Result of getProductNames function: ")
console.log(getProductNames(productsArray)); 


//Do not modify
//For exporting to test.js
try{
    module.exports = {

        displayValues: typeof displayValues !== 'undefined' ? displayValues : null,
        celsiusToFahrenheit: typeof celsiusToFahrenheit !== 'undefined' ? celsiusToFahrenheit : null,
        areAllEven: typeof areAllEven !== 'undefined' ? areAllEven : null,
        hasDivisibleBy8: typeof hasDivisibleBy8 !== 'undefined' ? hasDivisibleBy8 : null,
        filterEvenNumbers: typeof filterEvenNumbers !== 'undefined' ? filterEvenNumbers : null,
        joinArrays: typeof joinArrays !== 'undefined' ? joinArrays : null,
        isPartIncluded: typeof isPartIncluded !== 'undefined' ? isPartIncluded : null,
        sumNumbers: typeof sumNumbers !== 'undefined' ? sumNumbers : null,
        arrayToString: typeof arrayToString !== 'undefined' ? arrayToString : null,
        combinedCart: typeof combinedCart !== 'undefined' ? combinedCart : null,
        getProductNames: typeof getProductNames !== 'undefined' ? getProductNames : null

    }
} catch(err){

}