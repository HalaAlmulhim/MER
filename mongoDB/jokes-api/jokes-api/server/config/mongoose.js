const mongoose = require('mongoose');
const db = "jokes-api";

mongoose.connect("mongodb://localhost/" + db, {
    useNewUrlParser : true ,
    useUnifiedTopology : true,
})
    .then(() => console.log("connected to database!"))
    .catch(err => console.log("opps! something went wrong!", err))

require("../models/Jokes");