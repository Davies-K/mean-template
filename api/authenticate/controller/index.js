const { getUser } = require('./../../users/query');
const { verifyPassword } = require('./../../users/util');
const { createToken } = require("../util");
const jwtDecode = require("jwt-decode");
const redis = require('redis');
const redisClient = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(redisClient.get).bind(redisClient);

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
            const redisKey = await getAsync(user.username);

            res.cookie('token', token, { maxAge: 360000, httpOnly: true, sameSite: true });

            if(redisKey) {
                redisClient.del(user.username);
            }

            redisClient.set(user.username, token, 'EX', 60* 60);

            res.json({ message: 'Authentication successful!', userInfo, expiresAt });
        } else {
            res.status(403).json({ message: 'Wrong username, email, or password.'});
        }
    } catch (err) {
        next(err);
    }
};

module.exports = { postAuthenticate };
