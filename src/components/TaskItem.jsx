function TaskItem({ task, onToggle, onDelete, onEdit }) {
  function handleEdit() {
    const newTitle = window.prompt('Edit task:', task.title);

    if (newTitle !== null && newTitle.trim() !== '') {
      onEdit(task.id, newTitle);
    }
  }

  return (
    <li className={task.completed ? 'task-item completed' : 'task-item'}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span className="task-title">{task.title}</span>

      <span className="category-tag">{task.category}</span>

      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
