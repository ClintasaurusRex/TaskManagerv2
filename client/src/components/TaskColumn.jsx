import { useState } from 'react';

function TaskColumn({ title, tasks, onDragStart, onDrop, onDragOver }) {
  const handleDragStart = (e, task) => {
    e.dataTransfer.setData('task', task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const task = e.dataTransfer.getData('task');
    onDrop(task, title);
  };

  return (
    <div
      className='main-container'
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2 className='tasks-title'>{title}</h2>
      <ul className='list-items'>
        {tasks.map((task, index) => (
          <li
            key={index}
            className='list-item'
            draggable
            onDragStart={(e) => handleDragStart(e, task)}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskColumn;
