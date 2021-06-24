const AthleteController = require ('../controllers/athelteController');

module.exports =app =>{
    app.get("/api/athletes", AthleteController.list);
    app.post("/api/athletes", AthleteController.createAthlete);
    app.get("/api/athletes/:id", AthleteController.detailAthlete);
    app.put("/api/athletes/:id", AthleteController.updateAthlete);
    app.delete("/api/athletes/:id", AthleteController.deleteAthlete);
}