const { User } = require("../models/User");

module.exports={
    //controllers here
    index: (req, res) => {
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
    }
}