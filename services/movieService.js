const movieRepo = require("../repositories/movieRepo");

class movieService {
    static getAllMovies = async (next) => {

        try {
            const data = movieRepo.all(next);
            return data;
        } catch {
            next(err)
        }
    }
}

module.exports = movieService;