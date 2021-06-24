const { User } = require("../models/User");

module.exports = {
    //controllers here
    index:(req, res) => {
        res.json({
            message: "Hello World!"
        });
    },

    createUser:( req, res) => {
        const {email, password , name} = req.body
        User.create({
            email,
            password,
            name
        })
        .then( user => res.json(user))
        .catch(err => console.log(err))
    },

    allUsers:( req, res) =>{
        User.find()
            .then(users => res.json(users))
            .catch(err => console.log(err))
    },

    oneUser:(req, res) =>{
        User.findOne({_id: req.params,id})
            .then( user =>res.json(user))
            .catch(err =>console.log (err))
    },

    deleteUser:(req, res) =>{
        console.log("Trying to delete")
        User.deleteOne({_id: req.params,id})
            .then( con =>res.json(con))
            .catch(err =>console.log (err))
    },

    
    updateUser:(req, res) =>{
        User.findOneAndUpdate({_id: req.params,id}, req.body, {new:true})
            .then( user =>res.json(user))
            .catch(err =>console.log (err))
    }
}