const db = require('../models');

// Test
const test = (req, res) => {
    res.json({
        message: 'Views Test API Route Succcessful!',
    });
};

// Serve Root (Homepage)
const root = (req, res) => {
    res.sendFile('/views/index.html', {
        root: `${__dirname}/../`
    });
};

module.exports = {
    test,
    root
}