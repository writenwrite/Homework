const Todo = require("../model/todo");

class todoRepo {

    static all = async (next) => {
        try {
            const data = await Todo.getTodo(next);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = todoRepo;