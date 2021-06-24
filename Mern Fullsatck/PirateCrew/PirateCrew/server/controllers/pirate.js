const {Pirate} = require('../models/Pirate');

module.exports = {
    createPirate: (req, res) => {
        Pirate.create(req.body)
        .then( Pirate => res.json(Pirate))
        .catch( err => res.status(400).json(err))
    },
    Pirates: (req, res) => {
        Pirate.find({}).sort('type')
            .then( Pirates => res.json(Pirates))
            .catch( err => res.status(400).json(err))
            
    },
    Pirate: (req, res) => {
        Pirate.findById({_id: req.params.id})
        .then( Pirate => res.json(Pirate))
        .catch( err => res.status(400).json(err))
    },
    deletePirate: (req, res) => {
        Pirate.findByIdAndRemove({ _id: req.params.id})
            .then(delConfirm => res.json(delConfirm))
            .catch( err => res.status(400).json(err))
    },
    updatePirate: (req, res) => {
        Pirate.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then( updatePirate => res.json(updatePirate))
            .catch( err => res.status(400).json(err))
    },
}