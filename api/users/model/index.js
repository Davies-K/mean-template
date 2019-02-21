const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: 'user' }
});

// have to add owner to the other models

module.exports = mongoose.model('user', userModel);
