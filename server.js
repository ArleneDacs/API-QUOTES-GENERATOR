const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample Quotes Data
const quotes = [
    { id: 1, author: "Albert Einstein", text: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
    { id: 2, author: "Mahatma Gandhi", text: "Be the change that you wish to see in the world." },
    { id: 3, author: "Mark Twain", text: "The secret of getting ahead is getting started." }
   
];

// ✅ Root Route (Home Page)
app.get("/", (req, res) => {
    res.send("Welcome to the Quotes API! Use /quotes to get all quotes.");
});

// ✅ Route to get all quotes
app.get("/quotes", (req, res) => {
    res.json(quotes);
});

// ✅ Route to get a random quote
app.get("/quotes/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

// ✅ Route to get a specific quote by ID
app.get("/quotes/:id", (req, res) => {
    const quote = quotes.find(q => q.id === parseInt(req.params.id));
    if (!quote) return res.status(404).json({ error: "Quote not found" });
    res.json(quote);
});

// ✅ Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
