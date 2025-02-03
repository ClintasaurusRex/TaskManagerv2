import { useState } from 'react';
import './App.css';
import TaskColumn from './components/TaskColumn';
import AddTaskForm from './components/AddTaskForm';

const initialTasks = {
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

function App() {
  const [todoTasks, setTodoTasks] = useState(initialTasks.todoTasks);
  const [inProgressTasks, setInProgressTasks] = useState(
    initialTasks.inProgressTasks
  );
  const [completedTasks, setCompletedTasks] = useState(
    initialTasks.completedTasks
  );

  const handleDragOver = (e) => {
    e.preventDefault(); // This prevents the default behavior that causes items to disappear
  };

  const handleAddTask = (newTask) => {
    setTodoTasks((prev) => [...prev, newTask]);
  };

  const handleDrop = (task, targetColumn) => {
    // Remove task from its original column
    // Checks each task t in the array
    // Only keeps tasks that are NOT equal to the dragged task

    setTodoTasks((prev) => prev.filter((t) => t !== task));
    setInProgressTasks((prev) => prev.filter((t) => t !== task));
    setCompletedTasks((prev) => prev.filter((t) => t !== task));

    // Target Column
    switch (targetColumn) {
      case 'To Do':
        setTodoTasks((prev) => [...prev, task]);
        break;
      case 'In Progress':
        setInProgressTasks((prev) => [...prev, task]);
        break;
      case 'Completed':
        setCompletedTasks((prev) => [...prev, task]);
        break;
    }
  };

  const handleDelete = (task, columnTitle) => {
    switch (columnTitle) {
      case 'To Do':
        setTodoTasks((prev) => prev.filter((t) => t !== task));
        break;
      case 'In Progress':
        setInProgressTasks((prev) => prev.filter((t) => t !== task));
        break;
      case 'Completed':
        setCompletedTasks((prev) => prev.filter((t) => t !== task));
        break;
    }
  };

  return (
    <>
      <header>
        <h1>Task Manager</h1>
        <AddTaskForm onAddTask={handleAddTask} />
      </header>
      <div className='all-tasks' onDragOver={handleDragOver}>
        <TaskColumn
          title='To Do'
          tasks={todoTasks}
          onDrop={handleDrop}
          onDelete={handleDelete}
        />
        <TaskColumn
          title='In Progress'
          tasks={inProgressTasks}
          onDrop={handleDrop}
          onDelete={handleDelete}
        />
        <TaskColumn
          title='Completed'
          tasks={completedTasks}
          onDrop={handleDrop}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
