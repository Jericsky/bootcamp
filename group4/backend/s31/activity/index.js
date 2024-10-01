console.log("Hello World");

// Create an object using object literals
let trainer = {
    name: 'Jeric',
    age: 23,
    pokemon: ['Salandit', 'Jangmo-o', 'Frosmoth', 'Squirtle'],
    friends: {
        bestfriends: ['Goomy', 'Spritzee', 'Clobbopus'],
        fakefriends: ['Beldum', 'Wynaut', 'Surskit']
    }
};

function Pokemon(name,level) {

    // Properties
    this.name = name;
    this.level = level;
    this.health = level * 10; // put equation
    this.attack = level * 5; // put equation
    this.type = ['Normal'],
    this.skills = ['Tackle']

    // Methods
    // Will accept an object as a target and the skill to be used
    this.useSkill = function(target,skill){
        this.health -= this.attack;

        if (target.health <= 0){
            target.faint();
        } else {
            console.log(`${target.name} used Tackle!`); 
        }

    };

     //MEMBER 3 start

    this.faint = function(target){
        console.log(this.name + ' fainted' );
    }

    // Will accept an object as a target and the skill to be used

    trainer.prototype.catch = function(pokemon){
        if(pokemon.health <=10){
        trainer.pokemon.push(pokemon)
        }
    }

    Pokemon.prototype.addSkill = function(newSkill){
        if (Pokemon.skills.incluces(newSkill)){
            console.log(this.name +" already learned that "+ this.skills)
        } else {
            console.log(this.name + " will add the skill")
        };
    }

}
// Initialize/add the object properties and methods


// Properties


// Methods
trainer.talk = function() {
    return 'Pikachu! I choose you!';
}


// Check if all properties and methods were properly added
console.log(trainer);

// Access object properties using dot notation
console.log('Result of dot notation:')
console.log(trainer.name);

// Access object properties using square bracket notation
console.log('Result of square bracket notation:');
console.log(trainer["pokemon"]);

// Access the trainer "talk" method
console.log('Result of talk method');
console.log(trainer.talk());



// Create a constructor function for creating a pokemon
function Pokemon(name,level) {

    // Properties
    this.name = name;
    this.level = level;
    this.health = level * 10; // put equation
    this.attack = level * 5; // put equation
    this.type = ['Normal'],
    this.skills = ['Tackle']

    // Methods
    // Will accept an object as a target and the skill to be used
    this.useSkill = function(target,skill){
        this.health -= this.attack;

        if (target.health <= 0){
            target.faint();
        } else {
            return `${target.name} used Tackle!`; 
        }

    };


    // Method is invoked in the tackle method
    this.faint = function(){
        console.log(`${this.name} fainted`);
    }

}

// Create/instantiate a new pokemon
const jigglypuff = new Pokemon('Jigglypuff', 100);
console.log(jigglypuff);
// Create/instantiate a new pokemon
const registeel = new Pokemon('Registeel', 85);
console.log(registeel);
// Create/instantiate a new pokemon
const gible = new Pokemon('Gible', 90);
console.log(gible);
// Create/instantiate a new pokemon
const shuckle = new Pokemon('Shuckle', 72);
console.log(shuckle);
// Invoke the useSkill method and target a different object
jigglypuff.useSkill(registeel, 'Tackle');

// Invoke the useSkill method and target a different object
shuckle.faint(); 

// create catch method to catch pokemon with <= 10 health
trainer.catch 

// add a method inside the Pokemon that will allow the pokemon to add/replace skills array

// add method that will allow a pokemon to evolve. this will change the name of the pokemon as well as the attack value

// create NPC object using object Literals 
// const NPC;


// Member 4
// Pokemon Constructor Function
// function Pokemon(name, attack, type, skills = []) {
//     this.name = name;
//     this.attack = attack;
//     this.type = Array.isArray(type) ? type : [type];
//     this.skills = skills;
// }


Pokemon.prototype.addSkill = function(skill) {
    this.skills.push(skill);
};

// 15
Pokemon.prototype.evolve = function(newName, newAttack, newType, newSkill) {
    console.log(`${this.name} is about to evolve!`);
    
    this.name = newName;
    this.attack = newAttack;

    // Check if the new type is already in the Pokemon's type array
    if (!this.type.includes(newType)) {
        this.type.push(newType);
    }

    // Add the new skill to the skills array
    this.addSkill(newSkill);
    return this;
};
let pikachu = new Pokemon('Pikachu', 55, 'Electric', ['Thunderbolt']);
// 16
let evolvedPikachu = pikachu.evolve('Raichu', 90, 'Electric', 'Thunder Punch');
// 17
console.log(evolvedPikachu);


// 18
const NPC = {
    name: 'Ash Ketchum',
    pokemon: 'Pikachu'
};

// 19
Object.freeze(NPC);

NPC.name = 'Gary Oak';
console.log(NPC);

/* 

    Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.

    - Check syntax of the following code.
    - Check if the correct value is returned.
    - Check the parameters and arguments.
    - Check the if else statements
    - Check the loop statements
    - Check if the array methods used are correct.
    - Check if the objects are being accessed properly.

*/

let books = [
    { id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "Dune", author: "Frank Herbert" },
    { id: 4, title: "Harry Potter and The Sorcerer's Stone", author: "J.K. Rowling" },
    { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

function findBookByTitle(title) {
    if (books.length === 0) {
        return "Error: No books in database.";
    }

    if (typeof title !== 'string') {
        return "Error: Title must be a string.";
    }

    if (title === '') {
        return "Error: Title cannot be empty.";
    }

    let bookFound = books.filter(book => book.title === title);

    if (bookFound.length > 0) {
        return bookFound[0];
    } else {
        return "Book not found.";
    }
}

let ifTitleNotString = findBookByTitle(5);
console.log("Message if the title given is not a string:");
console.log(ifTitleNotString);

let ifTitleIsEmpty = findBookByTitle('');
console.log("Message if the title given is empty:");
console.log(ifTitleIsEmpty);

let book = findBookByTitle("The Lord of the Rings");
console.log("Book found:");
console.log(book);

function findBooksByAuthor(author) {
    if (books.length === 0) {
        return "Error: No books in database.";
    }

    if (typeof author !== 'string') {
        return "Error: Author must be a string.";
    }

    if (author === '') {
        return "Error: Author cannot be empty.";
    }

    let booksFound = books.filter(book => book.author === author);

    if (booksFound.length > 0) {
        return booksFound;
    } else {
        return "Books not found.";
    }
}

let ifAuthorNotString = findBooksByAuthor(5);
console.log("Message if the author given is not a string:");
console.log(ifAuthorNotString);

let ifAuthorIsEmpty = findBooksByAuthor('');
console.log("Message if the author given is empty:");
console.log(ifAuthorIsEmpty);

let booksByAuthor = findBooksByAuthor("J.R.R. Tolkien");
console.log("Books found: ");
console.log(booksByAuthor);


//Do not modify
//For exporting to test.js
try{
    module.exports = {

        trainer: typeof trainer !== 'undefined' ? trainer : null,
        Pokemon: typeof Pokemon !== 'undefined' ? Pokemon : null,
        NPC: typeof NPC !== 'undefined' ? NPC : null

    }
} catch(err){

}