const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
app.use(cors());
require("./config/mongoose");
app.use(express.json());
app.use(express.urlencoded({extended : true}));

require("./routes/product")(app);

app.listen(port , () => console.log(`Express listening on port ${port}`));