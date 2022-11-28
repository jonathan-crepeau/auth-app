const express = require('express');
const session = require('express-session');
const logger = require('./middleware/utils');
const app = express();
const PORT = process.env.PORT || 3003;

// Require Database
const db = require('./models');

// Require Routes
const routes = require('./routes');


// SECTION - Middleware
app.use(express.static(`${__dirname}/public`))
// Customer Logger Middleware
app.use(logger);
// NOTE - With Express 4.16+ (I'm 4.18+), you no longer have the download the body-parser package. Instead of 'app.use(bodyParser.json()', use the following TO PARSE JSON BODIES:
app.use(express.json());
// NOTE - Also, instead of 'app.use(bodyParser.urlencoded({extended:true})), use the following:
app.use(express.urlencoded({extended: true}));


// SECTION - User Session
app.set('trust proxy', 1);
app.use(session({
    secret: '8dhkgjdf7ejh3o;89yf9kdjf8u3u297y1h19dj',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}));


// SECTION - HTML Routes
app.use('/', routes.views);


// SECTION - API Routes
app.use('/api/v1', routes.api);


// SECTION - Start Server
app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}..`);
});