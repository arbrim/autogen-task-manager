# Autogen Task Manager - Backend

This is the **backend API** of the Autogen Task Manager, built with **NestJS** and **TypeORM**, integrating **PostgreSQL** and **OpenAI GPT-4** for task prioritization.

## 🚀 Features
- REST API for **task creation and management**.
- **PostgreSQL** database integration using **TypeORM**.
- **AI-powered prioritization** using OpenAI GPT-4.
- Secure CORS-enabled backend.

---

## 📁 Project Structure
```
backend/
│── src/
│   │── tasks/        # Task Management Module
│   │── ai/           # AI Integration Module
│   │── config/       # Database Configuration
│   │── app.module.ts # Main Application Module
│   │── main.ts       # Server Entry Point
│── .env              # Environment Variables
│── package.json      # Dependencies & Scripts
│── tsconfig.json     # TypeScript Configuration
```

---

# 🔧 Setup Guide

### 1️⃣ Install Dependencies
```sh
npm install
```

### 2️⃣ Create a `.env` File
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_database
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```
Ensure **PostgreSQL** is running with the specified database.

### 3️⃣ Running the Backend Server

#### Development Mode
```sh
npm run dev
```

#### Production Mode
```sh
npm run build
npm run start
```

---

## 📌 API Endpoints

## **Create a Task**
```
POST /tasks
```
### **Request Body**
```json
{
  "title": "Submit project report",
  "deadline": "2025-01-19"
}
```
### **Response**
```json
{
  "task": {
    "id": 1,
    "title": "Submit project report",
    "deadline": "2025-01-19",
    "completed": false
  },
  "priority": "Urgent"
}
```

---

## ⚡ Technologies Used
- **NestJS** (Backend Framework)
- **TypeORM + PostgreSQL** (Database)
- **OpenAI GPT-4 API** (Task Prioritization)

---

## 👤 Author
📧 Email: [arbrimrashiti@gmail.com](mailto:arbrimrashiti@gmail.com)  
🔗 LinkedIn: [linkedin.com/in/arbrimrashiti](https://linkedin.com/in/arbrimrashiti)
