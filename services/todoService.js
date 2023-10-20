const todoRepo = require("../repositories/todoRepo");

class todoService {
    static getAllTodo = async (next) => {

        try {
            const data = todoRepo.all(next);
            return data;
        } catch {
            next(err)
        }
    }
}

module.exports = todoService;