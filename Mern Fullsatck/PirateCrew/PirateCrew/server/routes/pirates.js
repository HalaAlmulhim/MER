const PirateController = require("../controllers/pirate")
module.exports = (app) => {
    app.post('/api/pirates', PirateController.createPirate);
    app.get('/api/pirates', PirateController.Pirates);
    app.get('/api/pirates/:id', PirateController.Pirate);
    app.put('/api/pirates/:id', PirateController.updatePirate);
    app.delete('/api/pirates/:id', PirateController.deletePirate);
}
