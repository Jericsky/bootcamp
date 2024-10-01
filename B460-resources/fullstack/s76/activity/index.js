// Question #1: Create a program that calculate the total order amount. 
// Input should be an array, if not an array, return undefined. 

function calculateTotalAmount(orderAmounts) {
    if (!Array.isArray(orderAmounts)) {
        console.log("Invalid input: The provided input is not an array.");
        return undefined;
    }

    let total = 0;
    for (let i = 0; i < orderAmounts.length; i++) {
        total += orderAmounts[i];
    }
    return total;
}

// Question #2: Create a program that takes an array of blog post titles and a keyword. 
// The search should be case-insensitive.
// Return undefined if the inputs are not of the expected data types

function filterTitlesByKeyword(titles, keyword) {
    // Validation: Check if titles is an array of strings and keyword is a string
    if (!Array.isArray(titles) || titles.some(title => typeof title !== 'string') || typeof keyword !== 'string') {
        console.log("Invalid input: Please provide an array of strings for titles and a string for the keyword.");
        return undefined;
    }

    // Filter titles by keyword (case-insensitive)
    let filteredTitles = titles.filter(title => title.toLowerCase().includes(keyword.toLowerCase()));

    // Check if there are no matching titles
     if (filteredTitles.length === 0) {
        return "No matching titles found.";
    }
    
    return filteredTitles;
}

// Question #3: Create a program that takes an array of usernames and returns a new array.
// Return undefined if the input is not an array.
// All array elements should be a string.
// Each username's first letter should be capitalized and prefixed by "User:".

function formatUsernames(usernames) {
    // Validation: Check if input is an array of strings
    if (!Array.isArray(usernames) || usernames.some(username => typeof username !== 'string')) {
        console.log("Invalid input: Please provide an array of strings.");
        return undefined;
    }

    let formattedUsernames = [];
    for (let i = 0; i < usernames.length; i++) {
        let capitalized = usernames[i].charAt(0).toUpperCase() + usernames[i].slice(1);
        formattedUsernames.push("User: " + capitalized);
    }
    return formattedUsernames;
}

// Question #4: Create a program that returns a sorted merged list of unique delivery dates
// Validate both inpus are arrays and contain only integers, if not return undefined

function optimizeDeliverySchedule(datesWarehouse1, datesWarehouse2) {
    // Validation: Check if both inputs are arrays of integers
    if (!Array.isArray(datesWarehouse1) || !Array.isArray(datesWarehouse2) ||
        !datesWarehouse1.every(Number.isInteger) || !datesWarehouse2.every(Number.isInteger)) {
        console.log("Invalid input: Both parameters must be arrays of integers.");
        return undefined;
    }

    let combinedDates = [];
    // Merge arrays while checking for duplicates
    let allDates = datesWarehouse1.concat(datesWarehouse2);
    for (let i = 0; i < allDates.length; i++) {
        if (combinedDates.indexOf(allDates[i]) === -1) {
            combinedDates.push(allDates[i]);
        }
    }

    // Sort the combined array in ascending order
    combinedDates.sort((a, b) => a - b);

    return combinedDates;
}

// Question #5: Develop a program that removes all scores that are below a certain threshold. 
// Calculate the average of the remaining scores.
// Validate that the array is comprised of integers.
// Return the average score rounded to two decimal places. 
// If after filtering there are no scores left or the input is invalid, return undefined

function removeLowScoresAndCalculateAverage(scores, threshold) {
    // Validation: Check if input is an array of integers
    if (!Array.isArray(scores) || !scores.every(score => typeof score === 'number' && score >= 0 && score <= 100)) {
        console.log("Invalid input: Please provide an array of integer scores between 0 and 100.");
        return undefined;
    }

    let filteredScores = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= threshold) {
            filteredScores.push(scores[i]);
        }
    }

    if (filteredScores.length === 0) return undefined; // No scores above the threshold

    let sum = filteredScores.reduce((acc, score) => acc + score, 0);
    let average = sum / filteredScores.length;

    return parseFloat(average.toFixed(2));
}

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
	module.exports = {

		calculateTotalAmount: typeof calculateTotalAmount !== 'undefined' ? calculateTotalAmount : null,
		filterTitlesByKeyword: typeof filterTitlesByKeyword !== 'undefined' ? filterTitlesByKeyword : null,
		formatUsernames: typeof formatUsernames !== 'undefined' ? formatUsernames : null,
		optimizeDeliverySchedule: typeof optimizeDeliverySchedule !== 'undefined' ? optimizeDeliverySchedule : null,
		removeLowScoresAndCalculateAverage: typeof removeLowScoresAndCalculateAverage !== 'undefined' ? removeLowScoresAndCalculateAverage : null,
	}
} catch(err){

}


