const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Signup API
router.post('/signup', ctrl.auth.signup);

module.exports = router;