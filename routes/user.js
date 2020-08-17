const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const userController = require('../controllers/user');
const passwordController = require('../controllers/password');

//Middleware
const Auth = require('../middleware/auth');

// post /user/register
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid E-mail'),
    body('password')
      .trim()
      .isLength({ min: 5 })
      .withMessage('Password must be at least 5 chars long'),
  ],
  userController.register
);

// post /user/login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid E-mail'),
    body('password')
      .trim()
      .isLength({ min: 5 })
      .withMessage('Password must be at least 5 chars long'),
  ],
  userController.login
);

// put /user/resetPassword/email
router.put('/resetPassword/:email', Auth, passwordController.resetPassword);

// put /user/forgotPassword/email
router.put('/forgotPassword/:email', passwordController.forgotPassword);

// put /user/resetForgotPassword/otp
router.put('/resetForgotPassword/:otp', passwordController.resetForgotPassword);

module.exports = router;
