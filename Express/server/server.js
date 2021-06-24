const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use( express.urlencoded({ extended:true }));

//const userController = require("./controllers/user")
// userController.great();
// userController.add(2,9);

const user = [
    {name: "hala", password: "Q123wdhbjk"},
    {name: "reem", password: "h1122wreem" },
    {name: "sara", password: "Daa124mgkk"},
    {name: "layan", password: "Sdmlg124mgkk"},
    {name: "saja", password: ".........."}
] 


app.get("/api", (req, res) =>{
    res.json({message: "Hello Express!"})
})

app.get("/", (req, res) =>{
    console.log(req.method + "on port" + port);
    res.json({message: "Another Router is Awwsome!!"})
})

app.get("/api/user", (req, res) =>{
    res.json(user);
})

app.post("/api/user", (req, res) =>{
    console.log("New User:" + req.body );
    user.push (req.body);
    console.log(user)
    res.json({ status: "accepted"})
});

app.put ("/api/user/:id",(req, res) =>{
    const id = req.params.id;
    user[id] = req.body;
    res.json({ status: "your wish is my command"})
})

app.delete ("/api/user/:id",(req, res) =>{
    const id = req.params.id;
    user.splice(id, 1);
    console.log(user);
    res.json({message: "poof"})
})

app.listen( port, () => console.log (`Listening on port ${port}`) );