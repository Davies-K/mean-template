const util = require('./../util');
const queries = require("./../query");

const postUser = async (req, res, next) => {
    try {
        const hashedPassword = await util.hashPassword(req.body.password);
        const userData = {
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword // save the hashed password
        };

        const user = await queries.createUser(userData);
        return res.json({message: 'User created!'});
    } catch (err) {
        next(err);
    }
};

module.exports = {
    postUser
};
