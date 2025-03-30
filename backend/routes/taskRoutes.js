const express = require('express');
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddlware');

const router = express.Router();

router.get("/", authMiddleware, taskController.createTask);
router.get("/", authMiddleware, taskController.getTasks);
router.put("/:id", authMiddleware, taskController.updateTask);
router.delete("/:id", authMiddleware, taskController.deleteTask);