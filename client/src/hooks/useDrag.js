import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export function useDrag() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Fetch initial tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_URL}/tasks`);
        const { todoTasks, inProgressTasks, completedTasks } = response.data;
        setTodoTasks(todoTasks);
        setInProgressTasks(inProgressTasks);
        setCompletedTasks(completedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (task, targetColumn) => {
    try {
      // Find which column the task is coming from
      let fromColumn;
      if (todoTasks.includes(task)) fromColumn = 'todoTasks';
      else if (inProgressTasks.includes(task)) fromColumn = 'inProgressTasks';
      else fromColumn = 'completedTasks';

      const toColumn =
        targetColumn === 'To Do'
          ? 'todoTasks'
          : targetColumn === 'In Progress'
          ? 'inProgressTasks'
          : 'completedTasks';

      const response = await axios.put(`${API_URL}/tasks/move`, {
        task,
        fromColumn,
        toColumn,
      });

      const {
        todoTasks: newTodo,
        inProgressTasks: newProgress,
        completedTasks: newCompleted,
      } = response.data;
      setTodoTasks(newTodo);
      setInProgressTasks(newProgress);
      setCompletedTasks(newCompleted);
    } catch (error) {
      console.error('Error moving task:', error);
    }
  };

  const handleDelete = async (task, columnTitle) => {
    try {
      const column =
        columnTitle === 'To Do'
          ? 'todoTasks'
          : columnTitle === 'In Progress'
          ? 'inProgressTasks'
          : 'completedTasks';

      const response = await axios.delete(`${API_URL}/tasks`, {
        params: { task, column },
      });

      const {
        todoTasks: newTodo,
        inProgressTasks: newProgress,
        completedTasks: newCompleted,
      } = response.data;
      setTodoTasks(newTodo);
      setInProgressTasks(newProgress);
      setCompletedTasks(newCompleted);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleAddTask = async (newTask) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, {
        task: newTask,
        column: 'todoTasks',
      });

      const {
        todoTasks: newTodo,
        inProgressTasks: newProgress,
        completedTasks: newCompleted,
      } = response.data;
      setTodoTasks(newTodo);
      setInProgressTasks(newProgress);
      setCompletedTasks(newCompleted);
    } catch (error) {
      console.error('Error adding task:', error);
    }
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
