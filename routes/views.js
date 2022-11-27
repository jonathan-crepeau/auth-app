const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Test Route
router.get('/test', ctrl.views.test);

// Root Route
router.get('/', ctrl.views.root);

// Profile Route
router.get('/profile', ctrl.views.profile);

// Signup Route
router.get('/signup', ctrl.views.signup);

// Login Route
router.get('/login', ctrl.views.login);


module.exports = router;