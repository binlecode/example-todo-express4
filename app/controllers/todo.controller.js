
const Todo = require('../models/todo.model.js');

/**
 * GET /todos
 */
exports.findAll = (req, res) => {
    Todo.find()
        .then(todos => {
            for (const td of todos) {
                console.log('got todo: ' + td.toString());
            }
            res.send(todos);
        }).catch(err => {
            res.status(500).send({message: err.message || 'Some error occured while retrieving todos'});
        });
};

/**
 * GET /todos/:id
 */
exports.findOne = (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => {
            if (!todo) {
                return res.status(404).send({message: 'Todo not found by id ' + req.params.id});
            }
            res.send(todo);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({message: 'Todo not found by id ' + req.params.id});
            }
            return res.status(500).send({message: 'Error retrieving todo by id ' + req.params.id});
        });
};

/**
 * POST /todos
 */
exports.create = (req, res) => {
    //validate request
    if (!req.body.title) {
        return res.status(400).send({message: 'Todo title can not be empty'});
    }

    // create a todo
    const todo = new Todo({
        title: req.body.title
    });

    // save todo
    todo.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500)
            .send({message: err.message || 'Some error occured while creating this todo'});
    });

};

/**
 * PUT /todos/:id
 */
exports.update = (req, res) => {
    //validate request
    if (!req.body.title) {
        return res.status(400).send({message: 'Todo title can not be empty'});
    }

    // The {new: true} option is used to return the modified document to the then() 
    // function instead of the original.
    Todo.findByIdAndUpdate(req.params.id, {
        title: req.body.title
    }, {new: true}).then(todo => {
        if (!todo) {
            return res.status(404).send({message: 'Todo not found by id ' + req.params.id})
        }
        res.send(todo);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({message: 'Todo not found by id ' + req.params.id});
        }
        return res.status(500).send({message: 'Error updating todo by id ' + req.params.id});
    });
};

/**
 * DELETE /todos/:id
 */
exports.delete = (req, res) => {
    Todo.findByIdAndRemove(req.params.id)
        .then(todo => {
            if (!todo) {
                return res.status(404).send({message: 'Todo not found by id ' + req.params.id});
            }
            res.send({message: 'Todo deleted successfully'});
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({message: 'Todo not found by id ' + req.params.id});
            }
            return res.status(500).send({message: 'Could not delete todo by id ' + req.params.id});
        });
};

