const pool = require("../config/db")

class Todo {

    static getTodo = async (next) => {
        const findQuery = `SELECT * FROM todo`

        try {
            const data = await pool.query(findQuery)

            return data.rows
        } catch (err) {
            next(err)
        }
    }

    static getDetailTodo = async (id, next) => {
        const query = `SELECT * FROM todo WHERE id = $1;`

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

    static createTodo = async (todoData, next) => {
        const { title, detail } = todoData

        if (!title || !detail) {
            return next({
                name: "paramsError"
            })
        }

        const query = `INSERT INTO todo VALUES ($1, $2);`

        try {
            const data = await pool.query(query, [title, detail])

            return data.rows[0];
        } catch {
            next(err)
        }

    }

    static update = async (id, todoData, next) => {
        const { title, detail } = todoData

        if (!title || !detail) {
            return next({
                name: "paramsError"
            })
        }

        const query = `
          UPDATE movies 
          SET title = $1, 
          detail = $2,
          WHERE id = $3;
        `
        try {
            const data = await pool.query(query, [title, detail, id])
            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }

    static delete = async (id, next) => {
        const query = `DELETE FROM todo WHERE id = $1;`

        try {
            const data = await pool.query(query, [id])
            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }
};

module.exports = Todo;
