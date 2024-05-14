// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
    "It’s hard to beat a person who never gives up. - Babe Ruth",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the quote box with a new quote
function updateQuote() {
    const quoteBox = document.getElementById('quote-box');
    quoteBox.textContent = getRandomQuote();
}

// Add click event listener to the quote box
document.getElementById('quote-box').addEventListener('click', updateQuote);
