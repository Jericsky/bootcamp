console.log("I kinda wanna go to London");

//[SECTION] Non-Mutator Methods
/*
    - these are functions that do not modify or change an array after they are created.
    - we do not manipulate the original array but only performing various tasks such as returning elements, or combining arrays and printing output.
    Syntax:
    arrayName.method('varies')
*/

let countries = ['US', 'PH', 'CAN', 'SG', 'TH', 'PH', 'FR', 'DE'];

//indexOf()
/*
    - returns the index number of the FIRST matching element.
    - left to right
*/

let firstIndex = countries.indexOf('PH');
console.log('Result of indexof MEthod: ' + firstIndex);

let invalidCountry = countries.indexOf('BR');
console.log(invalidCountry);

//lastIndexOf()
/*
    - returns the index number of the last matching element found in an array.
    - right to left
*/

let lastIndex = countries.lastIndexOf('PH');
console.log('Result of lastindexof method: ' + lastIndex);

let lastIndexStart = countries.lastIndexOf('PH', 4);
console.log(lastIndexStart);


console.log(countries);

//slice() = portions/slices elements from an array and returns a new array
let slicedArrayA = countries.slice(2);
console.log('Result from slice method:');
console.log(slicedArrayA);

let slicedArrayB = countries.slice(2, 4);
console.log('Result from slice method:');
console.log(slicedArrayB);

let slicedArrayC = countries.slice(-3);
console.log('Result from slice method:');
console.log(slicedArrayC);


//toString() = returns an array as string

let stringArray = countries.toString();
console.log('Result from toString method: ');
console.log(stringArray);


//concat() = combines two array and returns the combined result

let tasksArrayA = ['drink html', 'eat javascript'];
let tasksArrayB = ['inhale css', 'breath sass'];
let tasksArrayC = ['get git', 'be node'];

let tasks = tasksArrayA.concat(tasksArrayB);
console.log('Result from concat method: ');
console.log(tasks);

let allTasks = tasksArrayA.concat(tasksArrayB, tasksArrayC);
console.log('Result from concat method: ');
console.log(allTasks);

let combinedTasks = tasksArrayA.concat('smell express', 'throw react');
console.log('Result from concat method: ');
console.log(combinedTasks);



//join() = returns an array as a string separated by a specified separator string

let names = ['John', 'Jane', 'Joe', 'Joshua'];

console.log(names.join());
console.log(names.join(' '));
console.log(names.join(''));



//[SECTION] Iteration Methods
/*
    - are loops designed to perform repetitive tasks on arrays
    - useful for manipulating array data resulting in complex tasks
*/

//forEach()
/*
    - similar to for loop that it goes through each of your element.
    Syntax:
    arrayName.forEach(function(indivElement){statement})
*/

let filteredTasks = [];

allTasks.forEach(function(task) {
    // console.log(task);

    if(task.length > 10) {
        filteredTasks.push(task)
    }
});

console.log("Result of filtered tasks: ");
console.log(filteredTasks);


let adminList = [];

let users = [
        {
            username: "peterSmith",
            isAdmin: false
        },
        {
            username: "andrewJones99",
            isAdmin: true
        },
        {
            username: "alexMartin",
            isAdmin: false
        },
        {
            username: "smithyS",
            isAdmin: true
        }
    ];


users.forEach(function(user) {
    console.log(user)

    if(user.isAdmin === true){
        adminList.push(user.username)
    }
});

console.log(adminList);
console.log(users);


//map()
/*
    - iterates on each element AND returns new array with different values.
    - this is useful when you want change/mutations.
    - requires the use of "return" statement
*/

let numbers = [1, 2, 3, 4, 5];
let numberMap = numbers.map(function(number) {
    return number * number;
});

console.log("Original Array:");
console.log(numbers);
console.log("Result of map method:");
console.log(numberMap);

let numberForEach = numbers.forEach(function(number) {
    return number * number;
});
console.log(numberForEach);



//every() 
/*
    = checks if ALL elements in an array meet the given condition.
    = returns in boolean form
*/

let allValid = numbers.every(function(number) {
    return (number < 3);
});

console.log('Result of every method:');
console.log(allValid);

//some()
let someValid = numbers.some(function(number) {
    return (number < 3);
});
console.log('Result of some method: ');
console.log(someValid);



//filter()
/*
    - returns new array that contains elements which meets the given condition.
    - returns an empty array if no elements were found.
*/

let filterValid = numbers.filter(function(number) {
    return (number < 3);
})

console.log('Result of filter method:');
console.log(filterValid);

let nothingFound = numbers.filter(function(number) {
    return (number = 0 );
})

console.log('Result of filter method:');
console.log(nothingFound);


let movies = [
        {
            name: "The Godfather",
            rating: 5
        },
        {
            name: "Star Wars IV: The New Hope",
            rating: 4
        },
        {
            name: "Schindler's List",
            rating: 5
        }
    ];

let fiveStarMovies = movies.filter(function(movie) {
    console.log(movie)

    return movie.rating >= 5;
})

console.log(fiveStarMovies);


//includes() = if it is included / returns in boolean

let products = ['Mouse', 'Keyboard', 'Laptop', 'Monitor', 'Amplifier'];
let productFound1 = products.includes("Mouse");
console.log(productFound1);
let productFound2 = products.includes("Headset");
console.log(productFound2);

//METHODS CAN BE "CHAINED" USING THEM ONE AFTER ANOTHER

let filteredProducts = products.filter(function(product) {
    return product.toLowerCase().includes('a');
})

console.log(filteredProducts);



//reduce()
/*
    - evaluates elements from left to right and returns/reduces the array into a single value.
    Syntax:
    - accumulator - stores the result for every iteration of the loop
    - current value - current/next element that is evaluated
*/
console.log(numbers);
let iteration = 0;

let reducedArray = numbers.reduce(function(x, y) {
    console.warn('current iteration: ' + ++iteration);
    console.log('accumulator: ' + x);
    console.log('currentValue: ' + y);

    return x + y;
});
console.log("Result of reduce method: " + reducedArray);

let list = ['Hello', 'Again', 'World'];

let reducedJoin = list.reduce(function (x, y) {
    return x + ' ' + y;
});
console.log(reducedJoin);

