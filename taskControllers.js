const Task = require("../models/task.js");

// Show all tasks
exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find().sort("dueDate");
  res.render("index", { tasks });
};

// Add new task
exports.createTask = async (req, res) => {
  const { title, dueDate } = req.body;
  await Task.create({ title, dueDate });
  res.redirect("/");
};

// Mark task complete
exports.markComplete = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, { completed: true });
  res.redirect("/");
};

// Delete task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};
