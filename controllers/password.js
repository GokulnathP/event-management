const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.resetPassword = (req, res) => {
    if (req.email !== req.params.email) {
        return res.status(409).json({
            message: 'Failed',
            error: 'Mismatched users'
        });
    }

    const newPassword = req.body.newPassword;
    const oldPassword = req.body.oldPassword;

    if (newPassword.length < 5 || !oldPassword) {
        return res.status(422).json({
            message: 'Failed',
            error: 'Password must be at least 5 chars long'
        });
    }

    let loadedUser;

    User.findOne({ email: req.email })
        .then(user => {
            if (!user) {
                const error = new Error('User not found');
                error.statusCode = 409;
                throw error;
            }
            loadedUser = user;
            return bcrypt.compare(oldPassword, user.password);
        })
        .then(isMatch => {
            if (!isMatch) {
                const error = new Error('Incorrect password');
                error.statusCode = 409;
                throw error;
            }
            return bcrypt.hash(newPassword, 12);
        })
        .then(hashedPassword => {
            loadedUser.password = hashedPassword;
            return loadedUser.save();
        })
        .then(user => {
            return res.status(200).json({
                message: 'Success',
                data: {
                    userId: user._id.toString(),
                    email: user.email
                }
            });
        })
        .catch(err => {
            console.log('[Reset Password] ', err);
            if (err.statusCode) {
                return res.status(err.statusCode).json({
                    message: 'Failed',
                    error: err.message
                });
            }
            return res.status(500).json({
                message: 'Failed',
                error: '[Reset Password] Something goes wrong'
            });
        })
}