const Movies = require("../model/movie");

class movieRepo {

    static all = async (next) => {
        try {
            const data = await Movies.getMovie(next);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = movieRepo;