import { useState } from 'react';
import './App.css';
import TaskColumn from './components/TaskColumn';
import AddTaskForm from './components/AddTaskForm';
import { useDrag } from './hooks/useDrag';

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
  const {
    todoTasks,
    inProgressTasks,
    completedTasks,
    handleDragOver,
    handleAddTask,
    handleDrop,
    handleDelete,
  } = useDrag();

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
