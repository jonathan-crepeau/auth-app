db = require('../models');
const ROOT = `${__dirname}/..`;

// Root (Homepage) Route
const root = (req, res) => {
    res.sendFile('/views/index.html', {
        root: ROOT
    });
};

// Profile Route
const profile = (req, res) => {
    res.sendFile('/views/profile.html', {
        root: ROOT
    });
};

// Signup Route
const signup = (req, res) => {
    res.sendFile('/views/signup.html', {
        root: ROOT
    });
};

// Login Route
const login = (req, res) => {
    res.sendFile('/views/login.html', {
        root: ROOT
    });
};


module.exports = {
    root,
    profile,
    signup,
    login
}