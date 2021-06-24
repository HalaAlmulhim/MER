const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {type: String},
    password: {type: String},
    name: {type: String}
}, {timestamps: true});

module.exports.User = mongoose.model ('User', UserSchema);