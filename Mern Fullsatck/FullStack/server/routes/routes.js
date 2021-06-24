const userController = require("../controllers/users");
module.exports = app =>{
    app.get('/api', userController.index);
    app.post('/api/user', userController.createUser);

}
