# Task Manager

A simple single-page task management app built with React. It lets a user add
tasks with a category, mark them complete, edit or delete them, filter by
status, and keeps everything saved in the browser using localStorage.

## Features

- Add a task with a title and a category (Work / Personal / Urgent)
- Mark a task complete or active
- Edit a task's title
- Delete a task
- Filter tasks by status: All / Active / Completed
- Live count of remaining and completed tasks
- Tasks are saved in localStorage, so they are still there after a refresh

## Technologies Used

- React (functional components + hooks)
- Vite (dev server and build tool)
- Plain CSS

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── TaskForm.jsx
│   ├── FilterBar.jsx
│   ├── TaskList.jsx
│   └── TaskItem.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Setup Instructions

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Screenshots

_Add 2-3 screenshots here after running the app locally._

## Known Limitations

- No due dates or reminders
- No drag-and-drop reordering
- No backend — data only lives in the browser it was created in
