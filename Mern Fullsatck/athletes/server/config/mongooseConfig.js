const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost/athletesproj",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() =>{
        console.log("Established a connection")
    })
    .catch( err => console.log("Something went wrong! Oh teh noes!", err))