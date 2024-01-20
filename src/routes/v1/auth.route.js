// modules
const router = require('express').Router();
const authController = require('../../controllers/v1/auth.controller');

// endpoint
router.post('/register', authController.register);

module.exports = router;