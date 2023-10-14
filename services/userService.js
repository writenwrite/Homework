const userRepo = require("../repositories/userRepo");

class userService {
    static getAllUsers = async (next) => {

        try {
            const data = userRepo.all(next);
            return data;
        } catch {
            next(err)
        }
    }
}

module.exports = userService;