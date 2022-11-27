const express = require('express');
const logger = require('./middleware/utils');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3003;

// Require Database
const db = require('./models');

// Require Routes
const routes = require('./routes');


// Require Routes


// SECTION - Middleware

app.use(express.static(`${__dirname}/public`))

// Customer Logger Middleware
app.use(logger);
// NOTE - With Express 4.16+ (I'm 4.18+), you no longer have the download the body-parser package. Instead of 'app.use(bodyParser.json()', use the following TO PARSE JSON BODIES:
app.use(express.json());
// NOTE - Also, instead of 'app.use(bodyParser.urlencoded({extended:true})), use the following:
app.use(express.urlencoded({extended: true}));


// SECTION - HTML Routes
app.use('/', routes.views.root);

app.use('/profile', routes.views.profile);

app.use('/login', routes.views.login);

app.use('/signup', routes.views.signup);

// Root (Home) Template
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/index.html'));
// });

// GET Signup Template
// app.get('/signup', (req, res) => {
//     res.send(`<h1>Signup Route</h1>`);
// });

// GET Login Template
// app.get('/login', (req, res) => {
//     res.send(`<h1>Login Route</h1>`);
// });

//  GET Profile Template
// app.get('/profile', (req, res) => {
//     res.send(`<h1>Profile Route</h1>`);
// });


// SECTION - API Routes


// SECTION - Start Server
app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}..`);
});