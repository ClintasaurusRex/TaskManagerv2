import { useState } from 'react';
import './App.css';
import TaskColumn from './components/TaskColumn';

function App() {
  const [todoTasks, setTodoTasks] = useState([
    'Study React',
    'Build Project',
    'Write Documentation',
  ]);
  const [inProgressTasks, setInProgressTasks] = useState([
    'Learning Components',
    'Styling CSS',
  ]);
  const [completedTasks, setCompletedTasks] = useState([
    'Project Setup',
    'Initial Commit',
  ]);

  const handleDrop = (task, targetColumn) => {
    // Remove task from its original column
    setTodoTasks((prev) => prev.filter((t) => t !== task));
    setInProgressTasks((prev) => prev.filter((t) => t !== task));
    setCompletedTasks((prev) => prev.filter((t) => t !== task));

    // Add task to the target column
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

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <div className='all-tasks'>
        <TaskColumn title='To Do' tasks={todoTasks} onDrop={handleDrop} />
        <TaskColumn
          title='In Progress'
          tasks={inProgressTasks}
          onDrop={handleDrop}
        />
        <TaskColumn
          title='Completed'
          tasks={completedTasks}
          onDrop={handleDrop}
        />
      </div>
    </>
  );
}

export default App;
