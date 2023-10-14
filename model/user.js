const pool = require("../config/db")

class Users {

    static getMovie = async (next) => {
        const findQuery = `SELECT * FROM users`

        try {
            const data = await pool.query(findQuery)

            return data.rows
        } catch (err) {
            next(err)
        }
    }

    static getMoviesById = async (id, next) => {
        const query = `SELECT * FROM users WHERE id = $1;` // $1 itu placeholder

        try {
            const data = await pool.query(query, [id])

            if (data.rows.length === 0) {
                return null
            }

            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }

    static createUsers = async (userData, next) => {
        const { email, gender, password, role } = userData

        if (!email || !gender || !password) {
            return next({
                name: "paramsError"
            })
        }

        const query = `INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3, $4);`

        try {
            const data = await pool.query(query, [email, gender, password, role])

            return data.rows[0];
        } catch {
            next(err)
        }

    }

    static update = async (id, movieData, next) => {
        const { email, gender, password, role } = movieData

        if (!email || !gender || !password) {
            return next({
                name: "paramsError"
            })
        }

        const query = `
          UPDATE users 
          SET email = $1, 
          gender = $2,
          password = $3,
          role = $4
          WHERE id = $5;
        `
        try {
            const data = await pool.query(query, [email, gender, password, role, id])
            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }

    static delete = async (id, next) => {
        const query = `DELETE FROM users WHERE id = $1;`

        try {
            const data = await pool.query(query, [id])
            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }
};

module.exports = Users;
