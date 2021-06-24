const mongoose = require('mongoose');
const db = "firstMERN"

mongoose.connect("mongodb://localhost/thisdb" + db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then( () =>console.log("connected to database!"))
    .catch( err => console.log("opps! something went wrong !", err))


    require("../models/Person");



