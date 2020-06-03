const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const hasToken = req.get('x-auth-token')
    if (!hasToken) {
        return res.status(400).json({
            message: 'Failed',
            error: 'Token not found'
        });
    }
    const splitedToken = hasToken.split(' ');
    if (splitedToken.length !== 2) {
        return res.status(400).json({
            message: 'Failed',
            error: 'Invalid token'
        });
    }
    const token = splitedToken[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secret');
    } catch (err) {
        return res.status(500).json({
            message: 'Failed',
            error: 'Invalid token'
        });
    }
    if (!decodedToken) {
        return res.status(400).json({
            message: 'Failed',
            error: 'Invalid token'
        });
    }
    req.userId = decodedToken.userId;
    req.email = decodedToken.email;
    next();
}