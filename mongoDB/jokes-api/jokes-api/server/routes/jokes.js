const JokeController = require('../controllers/jokes');

module.exports = app => {
    app.get('/api/joke', JokeController.allJokes);
    app.get('/api/joke/:id', JokeController.oneJokes);
    app.post('/api/joke/:id', JokeController.updateJoke);
    app.put('/api/joke', JokeController.createJoke);
    app.delete('/api/joke/:id', JokeController.deleteJoke)
}