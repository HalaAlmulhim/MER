const mongoose = require('mongoose');
const db = "fullstack";

mongoose.connect("mongodb://localhost/" + db, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then( () => console.log("Connected to " + db))
    .catch( err => console.log ("Somtething went wrong! oh teh noes!", err))

    require('../models/User');
