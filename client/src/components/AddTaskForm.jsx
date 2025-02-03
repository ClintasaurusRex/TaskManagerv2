import { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='add-task-form'>
      <input
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Add a new task...'
        className='task-input'
      />
      <button type='submit' className='add-button'>
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
