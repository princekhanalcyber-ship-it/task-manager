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

<img width="983" height="1076" alt="image" src="https://github.com/user-attachments/assets/d18ea992-2345-491f-8097-26102efa3958" />

<img width="983" height="1076" alt="image" src="https://github.com/user-attachments/assets/c3f65a54-a000-421b-897a-5c383379d83e" />

<img width="983" height="1076" alt="image" src="https://github.com/user-attachments/assets/75245057-d868-4202-aeeb-14937150a1f8" />



## Known Limitations

- No due dates or reminders
- No drag-and-drop reordering
- No backend — data only lives in the browser it was created in
