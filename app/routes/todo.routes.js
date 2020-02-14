module.exports = (app) => {
    const todosController = require('../controllers/todo.controller.js');
    
    app.get('/todos', todosController.findAll);
    
    app.get('/todos/:id', todosController.findOne);
    
    app.post('/todos', todosController.create);

    app.put('/todos/:id', todosController.update);

    app.delete('/todos/:id', todosController.delete);
};