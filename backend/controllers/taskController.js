const Task = require("../models/Task");

// Create Task 
exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newTask = new Task({ userId: req.user.id, title, description });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Get Task
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.status(201).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update task 
exports.updateTask = async (req,res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Task 
exports.deleteTask = async (req,res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Task Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};