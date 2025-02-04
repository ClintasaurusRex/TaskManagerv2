const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const tasks = {
  todoTasks: [
    'Implement User Authentication',
    'Design Database Schema',
    'Create API Documentation',
    'Set Up Unit Tests',
  ],
  inProgressTasks: [
    'Develop REST API Endpoints',
    'Style Dashboard Components',
    'Integrate Payment Gateway',
  ],
  completedTasks: [
    'Project Setup and Configuration',
    'Create Component Structure',
    'Initialize Git Repository',
  ],
};

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { task, column } = req.body;
  if (!task || !column) {
    return res.status(400).json({ error: 'Task and column are required' });
  }

  if (!tasks[column]) {
    return res.status(400).json({ error: 'Invalid column' });
  }

  tasks[column].push(task);
  res.status(201).json(tasks);
});

// Move a task between columns
app.put('/tasks/move', (req, res) => {
  const { task, fromColumn, toColumn } = req.body;

  if (!task || !fromColumn || !toColumn) {
    return res
      .status(400)
      .json({ error: 'Task, fromColumn, and toColumn are required' });
  }

  if (!tasks[fromColumn] || !tasks[toColumn]) {
    return res.status(400).json({ error: 'Invalid column names' });
  }

  // Remove from source column
  const taskIndex = tasks[fromColumn].indexOf(task);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found in source column' });
  }

  tasks[fromColumn].splice(taskIndex, 1);
  tasks[toColumn].push(task);

  res.json(tasks);
});

// Delete a task
app.delete('/tasks', (req, res) => {
  const { task, column } = req.query;

  if (!task || !column) {
    return res.status(400).json({ error: 'Task and column are required' });
  }

  if (!tasks[column]) {
    return res.status(400).json({ error: 'Invalid column' });
  }

  const taskIndex = tasks[column].indexOf(task);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[column].splice(taskIndex, 1);
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
