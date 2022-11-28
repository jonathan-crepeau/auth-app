const db = require('../models');
const bcrypt = require('bcrypt');

// (POST) Signup/Create User
const signup = (req, res) => {
    // NOTE - Validate Signup Form:
    if (!req.body.firstName || !req.body.lastName || !req.body.email) {
        return res.status(400).json({message: "All fields are required."});
    }

    // NOTE - Check for Existing User Account:
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.status(400).json({message: "Bad request, please try again."});

        // NOTE - Return Error if Account Already Exists:
        if (foundUser) return res.status(400).json({message: "Email has already been registered, please try again."});

        // NOTE - Generate Hash Salt
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(400).json({message: "Something went wrong, please try again."});

            // NOTE - Turn Plain Text Password Into Hash:
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) return res.status(400).json({message: "Something went wrong, please try again."});

                const { firstName, lastName, email } = req.body;

                const newUser = {
                    firstName,
                    lastName,
                    email,
                    password: hash,
                };

                db.User.create(newUser, (err, createdUser) => {
                    if (err) return res.status(400).json({message: "Bad request, please try again."});
                    res.status(201).json(createdUser);
                });
            });
        });
    });
};

// (POST) Login - Create Session
const createSession = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            status: 400,
            errors: [{message: 'Please enter your email and password'}]
        });
    }

    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.status(500).json({
            status: 500,
            errors: [{message: "Something went wrong, please try agian."}]
        });

        if (!foundUser) {
            return res.status(400).json({
                status: 400,
                errors: [{message: "Username or password is incorrect, please try again."}]
            });
        }

        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) return res.status(500).json({
                status: 500,
                errors: [{message: "Something went wrong, please try again."}]
            });

            if (isMatch) {
                req.session.loggedIn = true;
                req.session.currentUser = foundUser._id;
                return res.status(200).json({
                    status: 200,
                    data: {id: foundUser._id}
                });
            } else {
                return res.json({
                    status: 400,
                    errors: [{message: 'Username or password is incorrect'}]
                });
            }
        });
    });
};


// (GET) Verify User
const verify = (req, res) => {
    if (req.session.currentUser) {
        return res.json({
            message: "Authorized",
            userId: req.session.currentUser
        });
    }

    res.status(401).json({message: 'You are not authenticated'});
};


module.exports = {
    signup,
    createSession,
    verify
};