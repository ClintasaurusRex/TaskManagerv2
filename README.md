# Task Manager

A modern, drag-and-drop task management application built with React and Express. Features a dark theme interface for better eye comfort and real-time task updates.

## Features

- Drag and drop tasks between columns
- Add new tasks
- Delete tasks
- Dark theme UI
- Real-time updates
- RESTful API backend
- Responsive design

## Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS3

### Backend

- Express.js
- Node.js
- CORS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

2. Install dependencies for both frontend and backend

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Create environment file

```bash
# In client directory
cp .env.example .env
```

4. Start the development servers

```bash
# Start backend server (from server directory)
npm run dev

# Start frontend development server (from client directory)
npm run dev
```

## API Endpoints

### GET /tasks

- Returns all tasks grouped by columns

### POST /tasks

- Adds a new task
- Body: `{ task: string, column: string }`

### PUT /tasks/move

- Moves a task between columns
- Body: `{ task: string, fromColumn: string, toColumn: string }`

### DELETE /tasks

- Deletes a task
- Query params: `task` and `column`

## Project Structure

```
.
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/        # Custom React hooks
│   │   └── App.jsx       # Main application component
│   └── package.json
│
└── server/                # Backend Express application
    ├── server.js         # Express server setup and routes
    └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
