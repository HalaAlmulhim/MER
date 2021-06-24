const mongoose = require('mongoose');
const db = "productManager";

mongoose.connect("mongodb://localhost/" + db , {
    useNewUrlParser : true,
    useUnifiedTopology : true ,
})

    .then(() => console.log("connect to database! " +db))
    .catch(err => console.log("ops! something went wrong!", err))

require("../models/Product");