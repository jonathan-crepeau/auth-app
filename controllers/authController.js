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


module.exports = {
    signup
};