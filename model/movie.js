const pool = require("../config/db")

class Movies {
    
    static getMovie = async (next) => {
        const findQuery = `SELECT * FROM movies`

        try {
          const data = await pool.query(findQuery)

          return data.rows
        } catch(err) {
            next(err)
        }
    }

    static getMoviesById = async (id, next) => {
        const query = `SELECT * FROM movies WHERE id = $1;` // $1 itu placeholder

        try {
            const data = await pool.query(query, [id])

            if (data.rows.length === 0) {
                return null
            }

            return data.rows[0]
        } catch(err) {
            next(err)
        }
    }

    static createMovies = async(movieData, next) => {
        const {title, genres, year} = movieData

        if(!title || !genres || year) {
            return next({
                name: "paramsError"
            })
        }

        const query = `INSERT INTO movies (title, genres, year) VALUES ($1, $2, $3);`

        try {
            const data = await pool.query(query, [title, genres, year])

            return data.rows[0];
        } catch{
            next(err)
        }

    }

    static update = async(id, movieData, next) => {
        const {title, genres, year} = movieData

        if(!title || !genres || !year) {
            return next({
                name: "paramsError"
            })
        }

        const query = `
          UPDATE movies 
          SET title = $1, 
          genres = $2,
          year = $3
          WHERE id = $4;
        `
        try {
            const data = await pool.query(query, [title, genres, year, id])
            return data.rows[0]
        } catch(err) {
            next(err)
        }
    }

    static delete = async(id, next) => {
        const query = `DELETE FROM movies WHERE id = $1;`

        try {
            const data = await pool.query(query, [id])
            return data.rows[0]
        } catch(err){
            next(err)
        }
    }
};

module.exports = Movies;
