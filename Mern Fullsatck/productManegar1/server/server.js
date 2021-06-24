const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require('./config/mongoose')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
require('./routes/product')(app);

app.listen(port , () => console.log(`Express listening on port ${port}`));