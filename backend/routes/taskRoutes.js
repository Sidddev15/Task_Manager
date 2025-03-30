const express = require('express');
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddlware');

const taskRouter = express.Router();

taskRouter.post("/", authMiddleware, taskController.createTask);
taskRouter.get("/", authMiddleware, taskController.getTasks);
taskRouter.put("/:id", authMiddleware, taskController.updateTask);
taskRouter.delete("/:id", authMiddleware, taskController.deleteTask);

module.exports = taskRouter;