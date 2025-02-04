import { useState } from 'react';
import './App.css';
import TaskColumn from './components/TaskColumn';
import AddTaskForm from './components/AddTaskForm';
import { useDrag } from './hooks/useDrag';

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
