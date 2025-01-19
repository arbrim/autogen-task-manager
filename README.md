# Autogen Task Manager

## Just hanging around with AI

Autogen Task Manager is a **full-stack task management system** built with:
- **NestJS + TypeORM + PostgreSQL** for the **backend**.
- **Next.js + Chakra UI** for the **frontend**.
- **OpenAI's GPT-4** for **AI-powered task prioritization**.

## 🚀 Features
- **Task Management**: Create, view, and update tasks with deadlines.
- **AI Task Prioritization**: Uses GPT-4 to classify tasks by priority.
- **Database Integration**: PostgreSQL with TypeORM.
- **Full-Stack Application**: Next.js frontend + NestJS backend.

---

# 🔧 Setup Guide

## 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/autogen-task-manager.git
cd autogen-task-manager
```

## 2️⃣ Install Dependencies

### Backend
```sh
cd backend
npm install
```

### Frontend
```sh
cd ../frontend
npm install
```

---

## 3️⃣ Backend Configuration

### Create a `.env` File in `backend/`
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=taskmanager
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```
Ensure PostgreSQL is running and the database is created.

### Start Backend Server
```sh
cd backend
npm run dev
```
Backend will be running at **`http://localhost:3000`**.

---

## 4️⃣ Frontend Configuration

### Start Frontend Server
```sh
cd frontend
npm run dev
```
Frontend will be available at **`http://localhost:3001`**.

> **Note:** The frontend will communicate with the backend API at **`http://localhost:3000`**.

---

## 👤 Author
Arbrim Rashiti  
📧 Email: [arbrimrashiti@gmail.com](mailto:arbrimrashiti@gmail.com)  
🔗 LinkedIn: [linkedin.com/in/arbrimrashiti](https://linkedin.com/in/arbrimrashiti)

---
