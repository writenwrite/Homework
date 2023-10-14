const Users = require("../model/movie")
const userService = require("../services/userService")

class userController {
    static index = async(req, res, next) => {

        try {
            const data = await userService.getAllUsers(next)
            res.status(200).json(data)
        }catch(err) {
            next(err)
        }
    }

    static show = async(req, res, next) => {
        const id = req.params.id
        try {
            const data = await Users.getUserById(id, next)
            
            if(!data) {
                next({name: "notFound"})
            } else {
              res.status(200).json(data)
            }
        } catch(err) {
            next(err)
        }
    }

    static create = async(req, res, next) => {
        const gameData = req.body
        
        try {
            const data = await Users.createUsers(gameData, next)
            res.status(201).json(data)
        } catch(err) {
            next(err)
        }
    }

    static update = async(req, res, next) => {
        const id = req.params.id
        const gameData = req.body

        try {
            const data = await Users.update(id, gameData, next)

            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

    static delete = async(req, res, next) => {
        const id = req.params.id
        try {
            const data = await Users.delete(id, next)
            res.status(200).json({message: "Game deleted"})
        } catch(err) {
            next(err)
        }
    }

}

module.exports = userController;