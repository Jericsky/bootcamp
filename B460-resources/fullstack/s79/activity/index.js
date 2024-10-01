// Question #1: Develop a function that concatenates an array of strings using a given delimiter. The function should return a single string comprised of array elements joined by the delimiter.
    // Title and author should be a string

function addBook(library, newBook) {
    const maxId = library.reduce((max, book) => Math.max(max, book.id), 0);
    newBook.id = maxId + 1;
    if (!newBook.title || !newBook.author || typeof newBook.yearPublished !== 'number' ||
        newBook.yearPublished <= 0) {
        console.error("Invalid book details.");
        return false;
    }
    newBook.isAvailable = true; // New books are available by default
    library.push(newBook);
    return true;
}

// Question #2: Retrieve either details of a specific book by its ID or an array of details for all books, optionally filtered by availability. 

function getBooks(library, id = null, filterAvailable = null) {
    if (id) {
        return library.find(book => book.id === id) || null;
    }
    return library.filter(book => filterAvailable === null || book.isAvailable === filterAvailable);
}

// Question #3: Update a book's availability status after validating the book exists and ensuring the new status differs from the current.

function updateBookAvailability(library, id, isAvailable) {
    if (typeof isAvailable !== 'boolean') {
        console.error("Availability status must be a boolean.");
        return false;
    }
    const book = library.find(book => book.id === id);
    if (!book) {
        console.error("Book not found.");
        return false;
    }
    if (book.isAvailable === isAvailable) {
        console.log(`Book availability is already set to ${isAvailable}.`);
        return false;
    }
    book.isAvailable = isAvailable;
    console.log(`Book availability updated.`);
    return true;
}

// Question #4: Remove a book by its ID only if it is marked as unavailable.
function removeBook(library, id) {
    const index = library.findIndex(book => book.id === id);
    if (index === -1) {
        console.error("Book not found.");
        return false;
    }
    if (library[index].isAvailable) {
        console.log("Book must be unavailable to be removed.");
        return false;
    }
    library.splice(index, 1);
    console.log("Book removed.");
    return true;
}

// Question #5: List all books, with an option to filter by their availability status.

function listBooks(library, filterAvailable = null) {
    if (filterAvailable !== null && typeof filterAvailable !== 'boolean') {
        console.error("Filter must be true, false, or null.");
        return [];
    }
    return library.filter(book => filterAvailable === null || book.isAvailable === filterAvailable);
    
}

try{
    module.exports = {

        addBook: typeof addBook !== 'undefined' ? addBook : null,
        getBooks: typeof getBooks !== 'undefined' ? getBooks : null,
        updateBookAvailability: typeof updateBookAvailability !== 'undefined' ? updateBookAvailability : null,
        removeBook: typeof removeBook !== 'undefined' ? removeBook : null,
        listBooks: typeof listBooks !== 'undefined' ? listBooks : null,

    }

} catch(err){

}