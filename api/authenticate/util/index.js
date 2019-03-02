const jwt = require('jsonwebtoken');
const keys = require('../../../config/keys');

const createToken = user => {
    // Sign the JWT
    return jwt.sign(
        {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        },
        keys.JWT_SECRET,
        {
            algorithm: 'HS256',
            expiresIn: '1h'
        }
    );
};
module.exports = { createToken };
