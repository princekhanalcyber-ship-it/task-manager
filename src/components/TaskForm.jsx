import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Personal');

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      category: category,
      completed: false,
    };

    onAddTask(newTask);

    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Urgent">Urgent</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
