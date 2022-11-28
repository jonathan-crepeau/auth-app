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
        if (foundUser) return res.status(400).json({message: "Email has already been registered."});

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
                errors: [{message: "No user found for this email, please try again."}]
            });
        }

        // NOTE - HERE IS WHERE I LEFT OFF


    })
}


module.exports = {
    signup
};