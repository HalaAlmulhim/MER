const express = require('express');
const cros = require('cros')
const app =express ();
app.use(crose());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require ('./config/mongoose');
require('./routes/person')(app);

app.listen(8000, () =>
    console.log('Server runinng on port 8000')
)
