const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskControllers.js");

router.get("/", taskController.getAllTasks);
router.post("/add", taskController.createTask);
router.get("/complete/:id", taskController.markComplete);
router.get("/delete/:id", taskController.deleteTask);

module.exports = router;
