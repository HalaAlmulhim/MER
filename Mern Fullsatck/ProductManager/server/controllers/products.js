const { Product } = require('../models/products');


module.exports.index = (req, res) => {
    response.json({
        message: "Hello World"
    });
}


module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}


module.exports.getAllProduct = (req, res) => {
    Product.find({})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}


module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}


module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}


module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, useFindAndModify: false})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}