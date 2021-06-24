const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is a required field"]
        },
        url: {
            type: String,
            required: [true, "Image url is a required field"]
        },
        chests: {
            type: Number,
            required: [true, "Treasure Chests is a required field"]
        },
        phrase: {
            type: String,
            required: [true, "Catch Phrase is a required field"]
        },
        position: {
            type: String,
            required: [true, "Crew Position  is a required field"]
        },
        leg: {
            type: Boolean,
            default:true
        },
        eye: {
            type: Boolean,
            default:true
        },
        hand: {
            type: Boolean,
            default:true
        },
    },{timestamps:true});
    
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);