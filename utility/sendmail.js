const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}));

module.exports = (to, subject, body) => {
    transporter.sendMail({
        to: to,
        from: '4gokul2000@gmail.com',
        subject: subject,
        html: body
    })
}