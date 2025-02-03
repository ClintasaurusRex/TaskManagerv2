import { useState } from 'react';

function TaskColumn({
  title,
  tasks,
  onDragStart,
  onDrop,
  onDragOver,
  onDelete,
}) {
  const handleDragStart = (e, task) => {
    e.dataTransfer.setData('task', task);
  };

  // Runs continuously while something is being dragged over the column
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Runs when a task is dropped into the column
  const handleDrop = (e) => {
    e.preventDefault();
    const task = e.dataTransfer.getData('task');
    onDrop(task, title);
  };

  const handleDelete = (taskToDelete) => {
    onDelete(taskToDelete, title);
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
            <div className='task-content'>
              <span>{task}</span>
              <button
                className='delete-button'
                onClick={() => handleDelete(task)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskColumn;
