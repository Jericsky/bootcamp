//Important Note: Do not change the variable names. 
//All required classes, variables and function names are listed in the exports.

// Exponent Operator
let cubedNumber = 2 ** 3;

// Template Literals
console.log(`The cube of 2 is ${cubedNumber}`);

// Array Destructuring
const address = ["258", "Washington Ave NW", "California", "90011"];

const [houseNumber, street, state, zipCode] = address;
console.log(`I live in ${houseNumber} ${street}, ${state} ${zipCode}`);

// Object Destructuring
const animal = {
    name: "Lolong",
    species: "saltwater crocodile",
    weight: "1075 kgs",
    measurement: "20 ft 3 in"
}

const {name, species, weight, measurement} = animal;
console.log(`${name} was a ${species}. He weighted at ${weight} with a measurement of ${measurement}.`)

// Arrow Functions
let numbers = [1, 2, 3, 4, 5];


numbers.forEach(number => console.log(number));

let reducedNumber = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(reducedNumber);
// Javascript Classes
class Book {
    constructor(title, author, year, status = 'Available') {
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
    }
}


const booksSortedByYear = (booksArray, ascending = true) => {
    return booksArray.toSorted((a, b) => {
        return ascending ? a.year - b.year : b.year - a.year;
    });
};


const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book4 = new Book('Moby Dick', 'Herman Melville', 1851);


let books = [book1, book2, book3, book4];


let sortedBooksAscending = booksSortedByYear(books);
console.log(sortedBooksAscending);

// ES14 Updates

// booksSortedByeYear()

// findLastBought()

// booksToReplace()

// reversedBooks()

// searchBooksByTitle()

// checkOutBook()

function findLastBought(books) {

    return books.findLast(book => book.status === "Checked Out");
}

const lastBought = findLastBought(books);
lastBought;


// 13.
function booksToReplace(books, newBook) {
  let index = books.findIndex(book => book.title === newBook.title);
  if (index !== -1) {
    books.toSpliced(index, 1, newBook);
  }
  return books;
}

// 14.
function reversedBooks(books) {
    return books.toReversed();
}
console.log(reversedBooks(books));

// member 5 searchbookbytitle
function searchBooksByTitle(books, title) {
    return books.find(book => book.title === title);
}

function checkOutBook(book) {
    with (book) {
        status = 'Checked Out';
    }
    return book;
}


function combinedTest() {
    const books = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: '1984', author: 'George Orwell' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
    ];

    // Pang search
    const foundBook = searchBooksByTitle(books, '1984');

    // pang checkout if nahanap
    if (foundBook) {
        return checkOutBook(foundBook);
    } else {
        return null;
    }
}


return combinedTest();



//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        getCube: typeof getCube !== 'undefined' ? getCube : null,
        address: typeof address !== 'undefined' ? address : null,
        houseNumber: typeof houseNumber !== 'undefined' ? houseNumber : null,
        street: typeof street !== 'undefined' ? street : null,
        state: typeof state !== 'undefined' ? state : null,
        zipCode: typeof zipCode !== 'undefined' ? zipCode : null,
        animal: typeof animal !== 'undefined' ? animal : null,
        name: typeof name !== 'undefined' ? name : null,
        species: typeof species !== 'undefined' ? species : null,
        weight: typeof weight !== 'undefined' ? weight : null,
        measurement: typeof measurement !== 'undefined' ? measurement : null,
        numbersForEach: typeof numbersForEach !== 'undefined' ? numbersForEach : null,
        reduceNumber: typeof reduceNumber !== 'undefined' ? reduceNumber : null,
        numbers: typeof numbers !== 'undefined' ? numbers : null,
        greet: typeof greet !== 'undefined' ? greet : null,
        Book: typeof Book !== 'undefined' ? Book : null,
        books: typeof books !== 'undefined' ? books : null,
        sortedBooks: typeof sortedBooks !== 'undefined' ? sortedBooks : null,
        booksSortedByYear: typeof booksSortedByYear !== 'undefined' ? booksSortedByYear : null,
        findLastBought: typeof findLastBought !== 'undefined' ? findLastBought : null,
        booksToReplace: typeof booksToReplace !== 'undefined' ? booksToReplace : null,
        replacementBook: typeof replacementBook !== 'undefined' ? replacementBook : null,
        reversedBooks: typeof reversedBooks !== 'undefined' ? reversedBooks : null,
        booksReversed: typeof booksReversed !== 'undefined' ? booksReversed : null,
        searchBooksByTitle: typeof searchBooksByTitle !== 'undefined' ? searchBooksByTitle : null,
        searchBook: typeof searchBook !== 'undefined' ? searchBook : null,
        checkOutBook: typeof checkOutBook !== 'undefined' ? checkOutBook : null,
        boughtBook: typeof boughtBook !== 'undefined' ? boughtBook : null


    }
} catch(err){

}