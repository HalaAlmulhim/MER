const {Product} = require("../models/Product");

module.exports = {
    createProduct : (req, res) => {
        const {title, price, description} = req.body
        Product.create({
            title,
            price,
            description
        })
        .then( product => res.json(product))
        .catch(err => console.log(err))
    },
    allProducts: (req, res) => {
        Product.find()
            .then(products => res.json(products))
            .catch(err => console.log(err))
    },
    oneProduct : (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => console.log(err))
    },
    deleteProduct:(req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, useFindAndModify: false})
            .then(product => res.json(product))
            .catch(err => res.json(err))
    }
}