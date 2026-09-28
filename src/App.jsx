import { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';

function App() {
  // Load tasks from localStorage once, when the app first starts.
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('All');

  // Whenever tasks changes, save the new list to localStorage.
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id, newTitle) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  }

  // Work out which tasks to show based on the current filter.
  let visibleTasks = tasks;
  if (filter === 'Active') {
    visibleTasks = tasks.filter((task) => !task.completed);
  } else if (filter === 'Completed') {
    visibleTasks = tasks.filter((task) => task.completed);
  }

  const remaining = tasks.filter((task) => !task.completed).length;
  const completed = tasks.filter((task) => task.completed).length;

  return (
    <div className="app">
      <Header remaining={remaining} completed={completed} />
      <TaskForm onAddTask={addTask} />
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={visibleTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
