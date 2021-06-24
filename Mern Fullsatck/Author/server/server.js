const express = require('express');
const app = express();
const cors =require('cors');
app.use(cors ())
require('./config/mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const port = 8000;
require ("./routes/routes") (app);



app.listen(port, () => console.log('Epress Listening on port' + port))