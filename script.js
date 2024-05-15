// Array of quotes with authors
const quotes = [
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs"},
    {quote: "Stay hungry, stay foolish.", author: "Steve Jobs"},
    {quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs"},
    {quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs"},
    {quote: "It’s hard to beat a person who never gives up.", author: "Babe Ruth"},
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"}
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the quote box with a new quote
function updateQuote() {
    const quoteBox = document.getElementById('quote-box');
    const {quote, author} = getRandomQuote();
    quoteBox.innerHTML = `<p class="quote-text">${quote}</p><p class="quote-author">- ${author}</p>`;
}

// Display a random quote by default
document.addEventListener('DOMContentLoaded', function() {
    updateQuote();
});

// Add click event listener to the quote box to update the quote
document.getElementById('quote-box').addEventListener('click', updateQuote);

// Function to add typing animation class
function addTypingAnimation() {
    quoteText.classList.add('typing');
}

// Add typing animation when the page loads
window.addEventListener('load', addTypingAnimation);
