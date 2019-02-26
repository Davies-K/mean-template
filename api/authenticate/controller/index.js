const { getUser } = require('./../../users/query');
const { verifyPassword } = require('./../../users/util');
const { createToken } = require("../util");
const jwtDecode = require("jwt-decode");

const postAuthenticate = async (req, res, next) => {
    try {
        const usernameOrEmail = req.body.email;
        const password = req.body.password;

        const user = await getUser(usernameOrEmail);
        const passwordValid = await verifyPassword(password, user.password);

        if (passwordValid) {
            const token = createToken(user);
            const decodedToken = jwtDecode(token);
            const expiresAt = decodedToken.exp;
            const userInfo = {
                email: user.email,
                username: user.username,
                role: user.role
            };

            res.cookie('token', token, { maxAge: 360000, httpOnly: true, sameSite: true });

            res.json({ message: 'Authentication successful!', token, userInfo, expiresAt });
        } else {
            res.status(403).json({ message: 'Wrong username, email, or password.'});
        }
    } catch (err) {
        next(err);
    }
};

module.exports = { postAuthenticate };
