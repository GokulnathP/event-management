const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.register = (req, res) => {
    let errors = validationResult(req);
    errors = errors.array().map(error => error.msg);
    if (errors.length > 0) {
        return res.status(422).json({ message: 'Failed', error: errors });
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                const error = new Error('User already exist');
                error.statusCode = 409;
                throw error;
            }
            return bcrypt.hash(password, 12);
        })
        .then(hashedPassword => {
            const user = new User({
                email: email,
                password: hashedPassword
            });
            return user.save();
        })
        .then(user => {
            const token = jwt.sign(
                {
                    userId: user._id.toString(),
                    email: email
                },
                'secret',
                {
                    expiresIn: '10h'
                }
            );
            return res.status(200).json({
                message: 'Success',
                data: {
                    token: token,
                    id: user._id.toString(),
                    email: email
                }
            });
        })
        .catch(err => {
            console.log('[Register] ', err);
            if (err.statusCode) {
                return res.status(err.statusCode).json({
                    message: 'Failed',
                    error: err.message
                });
            }
            return res.status(500).json({
                message: 'Failed',
                error: '[Register] Server side error'
            })
        })
}

exports.login = (req, res) => {
    let errors = validationResult(req);
    errors = errors.array().map(error => error.msg);
    if (errors.length > 0) {
        return res.status(422).json({ message: 'Failed', error: errors });
    }

    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const error = new Error('Incorrect email or password');
                error.statusCode = 403;
                throw error;
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isMatch => {
            if (!isMatch) {
                const error = new Error('Incorrect email or password');
                error.statusCode = 403;
                throw error;
            }
            const token = jwt.sign(
                {
                    userId: loadedUser._id.toString(),
                    email: email
                },
                'secret',
                {
                    expiresIn: '10h'
                }
            );
            return res.status(200).json({
                message: 'Success',
                data: {
                    token: token,
                    id: loadedUser._id.toString(),
                    email: email
                }
            });
        })
        .catch(err => {
            console.log('[Login] ', err);
            if (err.statusCode) {
                return res.status(err.statusCode).json({ message: 'Failed', error: err.message });
            }
            return res.status(500).json({ message: 'Failed', error: '[Login] Server side error' });
        })
}