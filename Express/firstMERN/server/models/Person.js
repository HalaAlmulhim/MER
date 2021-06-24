const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    name: {type: String},
    password: {type: String}
}, {timestamps: true})
module.exports.Person = mongoose.model('person', PersonSchema);