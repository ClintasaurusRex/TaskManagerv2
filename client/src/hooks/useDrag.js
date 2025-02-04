import { useState } from 'react';

export function useDrag() {
  const [todoTasks, setTodoTasks] = useState([
    'Implement User Authentication',
    'Design Database Schema',
    'Create API Documentation',
    'Set Up Unit Tests',
  ]);

  const [inProgressTasks, setInProgressTasks] = useState([
    'Develop REST API Endpoints',
    'Style Dashboard Components',
    'Integrate Payment Gateway',
  ]);

  const [completedTasks, setCompletedTasks] = useState([
    'Project Setup and Configuration',
    'Create Component Structure',
    'Initialize Git Repository',
  ]);

  const handleDragOver = (e) => {
    e.preventDefault();
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

  const handleAddTask = (newTask) => {
    setTodoTasks((prev) => [...prev, newTask]);
  };

  return {
    todoTasks,
    inProgressTasks,
    completedTasks,
    handleDragOver,
    handleDrop,
    handleDelete,
    handleAddTask,
  };
}
