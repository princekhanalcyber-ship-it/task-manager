function Header({ remaining, completed }) {
  return (
    <div className="app-header">
      <h1>Task Manager</h1>
      <p>{remaining} remaining · {completed} completed</p>
    </div>
  );
}

export default Header;
