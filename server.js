const express = require('express');
const logger = require('./middleware/utils');
const app = express();
const PORT = process.env.PORT || 3003;


// SECTION - Middleware

// Customer Logger Middleware
app.use(logger);

// SECTION - Routes

// Root (Home) Template
app.get('/', (req, res) => {
    res.send(`<h1>Root Route</h1>`);
});

// GET Signup Template
app.get('/signup', (req, res) => {
    res.send(`<h1>Signup Route</h1>`);
});

// GET Login Template
app.get('/login', (req, res) => {
    res.send(`<h1>Login Route</h1>`);
});

//  GET Profile Template
app.get('/profile', (req, res) => {
    res.send(`<h1>Profile Route</h1>`);
});



// SECTION - Start Server
app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}..`);
});