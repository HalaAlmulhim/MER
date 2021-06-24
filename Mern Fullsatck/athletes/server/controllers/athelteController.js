const {Athlete} =require('../models/Athlete');

module.exports  = {
    list: (req, res) =>{
    Athlete.find({}).sort("firstname")
    .then (athletes => res.json(athletes))
    .catch(err => res.status(400).json(err));
    },

    createAthlete: (req, res) =>{
        const {firstname, lastname, sport, team } =req.body;
        Athlete.create({
            firstname,
            lastname,
            sport,
            team,
        })
        .then(athlete =>res.json(athlete))
        .catch(err => res.status(400).json(err));
    },

    detailAthlete:(req, res) =>{
        Athlete.findOne({_id: req.params.id})
        .then(athlete =>res.json(athlete))
        .catch(err => res.status(400).json(err));
    },

    updateAthlete:(req, res) =>{
        Athlete.findOneAndUpdate({_id: req.params.id},
            req.body, {new:true, runValidators:true})
        .then(athlete =>res.json(athlete))
        .catch(err => res.status(400).json(err));
    },

    deleteAthlete:(req,res) =>{
        Athlete.deleteOne({_id: req.params.id})
        .then(deleteConfirmation  => res.json(deleteConfirmation )) 
        .catch( err => res.status(400).json(err))
    }
}