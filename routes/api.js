const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// Signup API
router.post('/signup', ctrl.auth.signup);

// Login App (Create Session)
router.post('/login', ctrl.auth.createSession);

// Verify
router.get('/verify', ctrl.auth.verify);

// Delete Session
router.delete('/logout', ctrl.auth.deleteSession);


module.exports = router;