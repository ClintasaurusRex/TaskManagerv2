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

// routes
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { task, column } = req.body;
  tasks[column].push(task);
  res.json(tasks);
});

app.listen(3000, () => {
  console.log(`App is running on port ${PORT}`);
});
