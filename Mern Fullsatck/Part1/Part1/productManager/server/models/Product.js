const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title : {type : String},
    price : {type : Number},
    // price : {type : Integer},
    description : {type : String}
}, {timestamps : true})

module.exports.Product = mongoose.model('Product', ProductSchema);