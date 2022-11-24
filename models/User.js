const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name Is Required'],
        minLength: [2, 'Your First Name Must Be At Least 2 Characters Long'],
        maxLength: [30, 'Your First Name Cannot Be Longer Than 30 Characters Long'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [ true, 'Last Name Is Required'],
        minLength: [2, 'Your Last Name Must Be At Least 2 Characters Long'],
        maxLength: [30, 'Your Last Name Cannot Be Longer Than 30 Characters Long'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Your Email Address Is Required'],
        trim: true,
        unique: [true, 'Email Address Has Already Been Registered -- Please Try Again'],
        lowercase: true,
    },

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;