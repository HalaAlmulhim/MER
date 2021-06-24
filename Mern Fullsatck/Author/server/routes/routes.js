const userController = require("../controllers/users");
module.exports = app =>{
    app.get('/api', userController.index);
    app.post('/api/user', userController.createUser);
    app.get('/api/user', userController.allUsers);
    app.get('/api/user/:id', userController.oneUser);
    app.delete('/api/user/:id', userController.deleteUser);
    app.put('/api/user/:id', userController.updateUser);
}
