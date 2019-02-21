const User = require('./../model');

const createUser = async userData => {
    try {
        const newUser = new User(userData);
        return newUser.save();
    } catch (err) {
        return err;
    }
};

const getUser = async usernameOrEmail => {
    try {
        return await User.findOne({
            $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
        });
    } catch (err) {
        return err;
    }
};

module.exports = { createUser, getUser };
