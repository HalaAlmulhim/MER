const mongoose =require('mongoose');

const AthleteSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:[ true, "First Name is required"]
    },
    lastname:{
        type: String,
        required:[ true, "Last Name is required"]
    },
    sport:{
        type: String
    },
    team:{
        type: String
    },
    like:{
        type:Number
    }
}, {timestamps:true})

module.exports.Athlete = mongoose.model("Athlete", AthleteSchema);