const ROOT = `${__dirname}/..`;

// Test
const test = (req, res) => {
    res.json({
        message: 'Views Test API Route Succcessful!',
    });
};

// ROOT
const root = (req, res) => {
    res.sendFile('/views/index.html', {
        root: ROOT
    });
};

// PROFILE
const profile = (req, res) => {
    res.sendFile('/views/profile.html', {
        root: ROOT
    });
};

// SIGNUP
const signup = (req, res) => {
    res.sendFile('/views/signup.html', {
        root: ROOT
    });
};

// LOGIN
const login = (req, res) => {
    res.sendFile('/views/login.html', {
        root: ROOT
    });
};


module.exports = {
    test,
    root,
    profile,
    signup,
    login
}