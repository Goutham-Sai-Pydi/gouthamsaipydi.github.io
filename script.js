// Array of quotes with authors
const quotes = [
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs"},
    {quote: "Stay hungry, stay foolish.", author: "Steve Jobs"},
    {quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs"},
    {quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs"},
    {quote: "It’s hard to beat a person who never gives up.", author: "Babe Ruth"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs"},
    {quote: "Stay hungry, stay foolish.", author: "Steve Jobs"},
    {quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs"},
    {quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs"},
    {quote: "It’s hard to beat a person who never gives up.", author: "Babe Ruth"},
    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi"},
    {quote: "The weak can never forgive. Forgiveness is the attribute of the strong.", author: "Mahatma Gandhi"},
    {quote: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi"},
    {quote: "Freedom is not worth having if it does not include the freedom to make mistakes.", author: "Mahatma Gandhi"},
    {quote: "A man is but the product of his thoughts. What he thinks, he becomes.", author: "Mahatma Gandhi"},
    {quote: "Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved.", author: "Mattie Stepanek"},
    {quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi"},
    {quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi"},
    {quote: "The best way to predict the future is to create it.", author: "Peter Drucker"},
    {quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr."},
    {quote: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi"},
    {quote: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke"},
    {quote: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr."},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {quote: "The mind is everything. What you think you become.", author: "Buddha"},
    {quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer"},
    {quote: "Change your thoughts and you change your world.", author: "Norman Vincent Peale"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha"},
    {quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama"},
    {quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
    {quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis"},
    {quote: "If you can dream it, you can do it.", author: "Walt Disney"},
    {quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll"},
    {quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh"},
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
    {quote: "Don't let yesterday take up too much of today.", author: "Will Rogers"},
    {quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney"},
    {quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky"},
    {quote: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.", author: "William Arthur Ward"},
    {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
    {quote: "You have to learn the rules of the game. And then you have to play better than anyone else.", author: "Albert Einstein"},
    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison"},
    {quote: "Life is what happens when you're busy making other plans.", author: "John Lennon"},
    {quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.", author: "Mark Twain"},
    {quote: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou"}
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

// script.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const clearButton = document.getElementById('clearButton');
const setButton = document.getElementById('setButton');
const coordinatesInput = document.getElementById('coordinates');

const rows = 30;
const cols = 30;
const cellSize = canvas.width / cols;
let grid = createGrid(rows, cols);
let running = false;
let interval;

canvas.addEventListener('click', handleCanvasClick);
startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);
clearButton.addEventListener('click', clearGrid);
setButton.addEventListener('click', setInitialConditions);

function createGrid(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
}

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            ctx.beginPath();
            ctx.rect(col * cellSize, row * cellSize, cellSize, cellSize);
            ctx.fillStyle = grid[row][col] ? 'black' : 'white';
            ctx.fill();
            ctx.stroke();
        }
    }
}

function handleCanvasClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    grid[row][col] = grid[row][col] ? 0 : 1;
    drawGrid();
}

function startGame() {
    if (!running) {
        running = true;
        interval = setInterval(() => {
            grid = nextGeneration(grid);
            drawGrid();
        }, 100);
    }
}

function stopGame() {
    running = false;
    clearInterval(interval);
}

function clearGrid() {
    grid = createGrid(rows, cols);
    drawGrid();
}

function setInitialConditions() {
    const coordinates = coordinatesInput.value.trim().split(/\s+/);
    clearGrid();
    coordinates.forEach(coord => {
        const [row, col] = coord.split(',').map(Number);
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
            grid[row][col] = 1;
        }
    });
    drawGrid();
}

function nextGeneration(grid) {
    const newGrid = createGrid(rows, cols);
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const neighbors = countNeighbors(grid, row, col);
            if (grid[row][col] === 1 && (neighbors === 2 || neighbors === 3)) {
                newGrid[row][col] = 1;
            } else if (grid[row][col] === 0 && neighbors === 3) {
                newGrid[row][col] = 1;
            } else {
                newGrid[row][col] = 0;
            }
        }
    }
    return newGrid;
}

function countNeighbors(grid, row, col) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                count += grid[newRow][newCol];
            }
        }
    }
    return count;
}

drawGrid();
