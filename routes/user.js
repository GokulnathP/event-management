const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

// Controller imports
const userController = require('../controllers/user');

router.post(
    '/register',
    [
        body('email')
            .isEmail()
            .withMessage('Invalid E-mail'),
        body('password')
            .trim()
            .isLength({ min: 5 })
            .withMessage('Password must be at least 5 chars long')
    ],
    userController.register
);

router.post(
    '/login',
    [
        body('email')
            .isEmail()
            .withMessage('Invalid E-mail'),
        body('password')
            .trim()
            .isLength({ min: 5 })
            .withMessage('Password must be at least 5 chars long')
    ],
    userController.login
);

module.exports = router;