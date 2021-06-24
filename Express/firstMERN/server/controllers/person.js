const { response } = require("express")
const { Person } = require("../models/Person")

module.exports ={
    index: (req, res) =>{
        response.json({message: "Hello, World!"})
    },
    allPerson: (req, res) =>{
    Person.find()
        .then (allPerson => res.json ({persons: allPerson}))
        .catch(err => res.json ({message: "somthing went wrong"}))
    },
    onePerson: (req,res ) =>{
        Person.findOne({_id: req.params.id})
        .then( thisPersons => res.json({ person: thisPersons}))
        .catch(err => res.json ({message: "somthing went wrong"}))
    },
    createPerson: (req ,res) =>{
        Person.create(req.body)
        .then (newPerson => res.json ({person: newPerson}))
        .catch(err => res.json ({message: "somthing went wrong"}))
    },
    updatePerson: (req, res) =>{
        Person.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true}
        )
        .then( thisPersons => res.json({ person: thisPersons}))
        .catch(err => res.json ({message: "somthing went wrong"}))
    },
    deletePerson: (req, res) =>{
        Person.deleteOne( {_id: req.params.id})
        .then( result => res.json({ result: result}))
    }

}