const express = require('express')
const router = express.Router()
const movieRouter = require("./movieRoutes")
const userRouter = require("./userRoutes")

router.use("/games", movieRouter)
router.use("/user", userRouter)

module.exports = router;