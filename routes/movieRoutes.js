const express = require('express')
const router = express.Router()
const movieController = require("../controller/movieController")

router.get("/", movieController.index)
router.get("/:id", movieController.show)
router.post("/", movieController.create)
router.put("/:id", movieController.update)
router.delete("/:id", movieController.delete)

module.exports = router;