const Todo = require("../model/todo")
const todoService = require("../services/todoService")

class todoController {
    static index = async (req, res, next) => {

        try {
            const data = await todoService.getAllTodo(next)
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static show = async (req, res, next) => {
        const id = req.params.id
        try {
            const data = await Todo.getDetailTodo(id, next)

            if (!data) {
                next({ name: "notFound" })
            } else {
                res.status(200).json(data)
            }
        } catch (err) {
            next(err)
        }
    }

    static create = async (req, res, next) => {
        const gameData = req.body

        try {
            const data = await Todo.createTodo(gameData, next)
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    }

    static update = async (req, res, next) => {
        const id = req.params.id
        const gameData = req.body

        try {
            const data = await Todo.update(id, gameData, next)

            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static delete = async (req, res, next) => {
        const id = req.params.id
        try {
            const data = await Todo.delete(id, next)
            res.status(200).json({ message: "Game deleted" })
        } catch (err) {
            next(err)
        }
    }

}

module.exports = todoController;