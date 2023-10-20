const express = require('express')
const router = express.Router()
const todoController = require("../controller/todoController")

router.get("/", todoController.index)
router.get("/:id", todoController.show)
router.post("/", todoController.create)
router.put("/:id", todoController.update)
router.delete("/:id", todoController.delete)

module.exports = router;