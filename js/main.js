console.log("Hello, World.");


// Defines the starting total of $124,000 as of March 8th, 2023 (03/08/23), and the starting date to begin adding money on
let estimatedNetWorth = 124000;
let startDate = new Date('2023-03-08');

// Defines the amount of money to add on Wednesday
const addedEveryWednesday = 300;

// Gets the current date
let currentDate = new Date();

// Calculates the number of Wednesdays that have passed since the starting date
let weeksElapsed = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 7));

// Calculates the total amount to add based on the number of Wednesdays that have passed
let amountToAdd = weeksElapsed * addedEveryWednesday;

// Adds the calculated amount to the starting total
estimatedNetWorth += amountToAdd;

// Formats the estimated net worth with commas using the toLocaleString() method
let formattedNetWorth = estimatedNetWorth.toLocaleString();

// Outputs the result to an HTML div
document.getElementById("estimatedNetWorth").innerHTML = `$ ${formattedNetWorth}`;


// FOOTER CODE
// Gets the element with the id footer
let footer = document.getElementById('footer');

// Gets the last modified date
let lastModified = new Date(document.lastModified);

// Gets the year
let year = lastModified.getFullYear();

// Gets the month
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[lastModified.getMonth()];

// Gets the day
let day = lastModified.getDate();
// Finds and gets the suffix of the day
let daySuffix;
if (day % 10 == 1) {
    daySuffix = "st";
} else if (day % 10 == 2) {
    daySuffix = "nd";
} else if (day % 10 == 3) {
    daySuffix = "rd";
} else {
    daySuffix = "th";
}

// Defines the footer text
footer.innerText = "Last modified: " + month + " " + day + daySuffix + ", " + year;

