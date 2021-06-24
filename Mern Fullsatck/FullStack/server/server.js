const express = require('express');
const app = express();
const cors =require('cors');
app.use(cors ())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
require('./config/mongoose');
const port = 8000;
require ("./routes/routes") (app);



app.listen(port, () => console.log('Epress Listening on port' + port))