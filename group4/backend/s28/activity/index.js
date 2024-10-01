// Define the grocery list
const groceryList = ["Milk", "Veggies", "Egg", "Bread", "Cheese"];

// Create an activity object to encapsulate all functions
const activity = {
    addItem: function(input) {
        groceryList[groceryList.length] = input;
    },

    getItemByIndex: function(index) {
        return groceryList[index];
    },

    deleteItem: function() {
        if (groceryList.length === 0) {
            return "The list is empty. No item to delete.";
        }

        let lastItem = groceryList[groceryList.length - 1];
        groceryList.length = groceryList.length - 1;

        return lastItem;
    },

    updateItemByIndex: function(newItem, index) {
        if (index >= 0 && index < groceryList.length) {
            groceryList[index] = newItem;
        } else {
            console.log("Index out of bounds");
        }
    },

    displayItems: function() {
        const formattedList = [];

        for (let i = 0; i < groceryList.length; i++) {
            formattedList.push(`${i + 1}. ${groceryList[i]}`);
        }

        return formattedList;
    },

    searchItem: function(itemName) {
        let index = -1;

        for (let i = 0; i < groceryList.length; i++) {
            if (groceryList[i] === itemName) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            return `Item exists in the grocery list at index ${index}.`;
        } else {
            return "The item is not in the list.";
        }
    },

    removeElement: function(index) {
        if (index < 0 || index >= groceryList.length) {
            return 'Invalid index.';
        } else {
            for (let i = index; i < groceryList.length - 1; i++) {
                groceryList[i] = groceryList[i + 1];
            }
            groceryList.length--;
            return `${groceryList[index]} removed successfully.`;
        }
    },

    deleteAll: function() {
        groceryList.length = 0;
    },

    isEmpty: function() {
        return groceryList.length === 0;
    }
};

// Adding and displaying items
console.log("Items to buy:");
console.log(groceryList);

activity.addItem("Cooking Oil");
console.log(groceryList);

// Displaying a specific item
console.log(activity.getItemByIndex(2)); // Get item at index 2

// Updating an item
activity.updateItemByIndex("Cookies", 3);
console.log(groceryList);

// Displaying the formatted list
const itemsFound = activity.displayItems();
console.log("Grocery List:");
console.log(itemsFound);

// Searching for an item
console.log(activity.searchItem("Egg"));

// Removing an element
console.log(activity.removeElement(1)); // Remove item at index 1
console.log(groceryList);

// Checking if the list is empty after removing an item
let isUsersEmpty = activity.isEmpty();
console.log(isUsersEmpty);

// Deleting all items and checking if the list is empty
activity.deleteAll();
console.log(groceryList);
isUsersEmpty = activity.isEmpty();
console.log(isUsersEmpty);


try{
    module.exports = {

        groceryList: typeof groceryList !== 'undefined' ? groceryList : null,
        addItem: typeof addItem !== 'undefined' ? addItem : null,
        getItemByIndex: typeof getItemByIndex !== 'undefined' ? getItemByIndex : null,
        deleteItem: typeof deleteItem !== 'undefined' ? deleteItem : null,
        deletedLastItem: typeof deletedLastItem !== 'undefined' ? deletedLastItem : null,
        updateItemByIndex: typeof updateItemByIndex !== 'undefined' ? updateItemByIndex : null,
        displayItems: typeof displayItems !== 'undefined' ? displayItems : null,
        itemsFound: typeof itemsFound !== 'undefined' ? itemsFound : null,
        searchItem: typeof searchItem !== 'undefined' ? searchItem : null,
        removeElement: typeof removeElement !== 'undefined' ? removeElement : null,
        isItemFound: typeof isItemFound !== 'undefined' ? isItemFound : null,
        removeElement: typeof removeElement !== 'undefined' ? removeElement : null,
        removedElement: typeof removedElement !== 'undefined' ? removedElement : null,
        deleteAll: typeof deleteAll !== 'undefined' ? deleteAll : null,
        isEmpty: typeof isEmpty !== 'undefined' ? isEmpty : null
    }
} catch(err){

}