const jwt = require('jsonwebtoken');

const createToken = user => {
    // Sign the JWT
    return jwt.sign(
        {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            algorithm: 'HS256',
            expiresIn: '1h'
        }
    );
};
module.exports = { createToken };