const util = require('./../util');
const queries = require("./../query");

const postUser = async (req, res) => {
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
        return res
            .status(400)
            .json({message: 'There was a problem creating your account'});
    }
};

module.exports = {
    postUser
};
