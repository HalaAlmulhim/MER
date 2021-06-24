const {Jokes} = require('../models/Jokes');

module.exports = {
    allJokes : (req, res) => {
        Jokes.find()
            .then(allJokes => res.json({jokes : allJokes}))
            .catch(err => res.json({message : "something went worng"}))
    },
    oneJokes : (req, res) => {
        Jokes.fondOne({_id : req.params.id})
            .then(thisJoke => res.json({joke: thisJoke}))
            .catch(err => res.json({message : "something went worng"}))
    },
    createJoke : (req, res) => {
        Jokes.create(req.bod)
            .then(newJoke => res.json({joke : newJoke}))
            .catch(err => res.json({message : "something went worng"}))
    },
    updateJoke : (res, req) => {
        Jokes.fondOneAndUpdate(
            {_id : req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then(thisJokeUpdate => res.json({thisJoke : thisJokeUpdate}))
            .catch(err => res.json({message : "something went wrong"}))
    },
    deleteJoke : (res, req) => {
        Jokes.deleteOne({_id : req.params.id})
            .then(result => res.json({result : result}))
            .catch(err => res.json({message: "something went wrong"}))
    }

}