const express = require("express");

const app = express();
const PORT = 3000;

// Allow JSON request bodies
app.use(express.json());

// Temporary in-memory tasks
let tasks = [
  { id: 1, title: "Learn Express.js" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Express.js To-Do API is running!");
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  tasks = tasks.filter((task) => task.id !== id);

  res.json({
    message: "Task deleted successfully"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});