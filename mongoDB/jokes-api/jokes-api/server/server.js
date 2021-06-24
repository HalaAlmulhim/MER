const express = require('express');
// const port = 8000;
// const cors = require('cors');
const app = express();
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
require('./config/mongoose');
require('./routes/jokes')(app);

app.listen(8000, () => {console.log('server running on port 8000')}) // first way
// app.listen(port, () => {console.log('server running on port', port)}) // second way