const bcrypt = require('bcryptjs');

const User = require('../models/user');
const sendMail = require('../utility/sendmail');

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

exports.forgotPassword = (req, res) => {
    const email = req.params.email;
    let otp;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const error = new Error('User not found');
                error.statusCode = 409;
                throw error;
            }
            otp = Math.random().toString().slice(4, 10);
            user.otpData.otp = otp;
            user.otpData.expiresIn = Date.now() + 300000;
            return user.save();
        })
        .then(user => {
            let to = user.email;
            let subject = 'Regarding password resetting';
            let body = `
                <p>Your requested for password reset</p>
                <p>If you are not please leave this mail.</p>
                <p> OTP for reseting password is ${otp}. This otp is only valid only for 5 minutes </p>
            `;
            return sendMail(to, subject, body);
        })
        .then(result => {
            res.status(200).json({
                message: 'Success',
                data: 'Mail send successfully'
            });
        })
        .catch(err => {
            console.log(err);
            if (err.statusCode) {
                return res.status(err.statusCode).json({
                    message: 'Failed',
                    error: err.message
                });
            }
            return res.status(500).json({
                message: 'Failed',
                error: '[Forgot Password] Something goes wrong'
            });
        })
}

exports.resetForgotPassword = (req, res) => {
    const otp = req.params.otp;
    const newPassword = req.body.newPassword;
    let loadedUser;

    User.findOne({ 'otpData.otp': otp, 'otpData.expiresIn': { $gt: Date.now() } })
        .then(user => {
            if (!user) {
                const error = new Error('Try again');
                error.statusCode = 409;
                throw error;
            }
            loadedUser = user;
            if (!newPassword || newPassword.length < 5) {
                const error = new Error('Password should be at least 5 characters');
                error.statusCode = 422;
                throw error;
            }
            return bcrypt.hash(newPassword, 12);
        })
        .then(hashedPassword => {
            loadedUser.password = hashedPassword;
            loadedUser.otpData = null;
            return loadedUser.save();
        })
        .then(result => {
            return res.status(200).json({ message: 'Success', data: 'Password changed successfully' });
        })
        .catch(err => {
            console.log('[Reset Forgot Password] ', err);
            if (err.statusCode) {
                return res.status(err.statusCode).json({ message: 'Failed', error: err.message });
            }
            return res.status(500).json({ message: 'Failed', error: '[Reset Forgot Password] Something goes wrong' });
        })
}