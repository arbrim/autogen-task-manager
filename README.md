# Autogen Task Manager

Autogen Task Manager is a **NestJS** application that integrates **TypeORM** with **PostgreSQL** for task management and utilizes **OpenAI's GPT-4** to classify tasks by priority.

## Features

- REST API for task creation.
- Database integration using **PostgreSQL** and **TypeORM**.
- AI-powered task prioritization using **OpenAI GPT-4**.
- Built with **NestJS** for modular and scalable development.

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/autogen-task-manager.git
cd autogen-task-manager
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Create a `.env` File
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_database
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

### 4. Start PostgreSQL Database
Ensure PostgreSQL is running and create the database specified in `.env`.

### 5. Running the Application

#### Development Mode
```sh
npm run dev
```

#### Production Mode
```sh
npm run build
npm run start
```

## API Endpoints

### Create a Task

**Endpoint**
```
POST /tasks
```

**Request Body**
```json
{
  "title": "Submit project report before midnight",
  "deadline": "2025-01-19"
}
```

**Expected Response**
```json
{
  "task": {
    "id": 1,
    "title": "Submit project report before midnight",
    "deadline": "2025-01-19",
    "completed": false
  },
  "priority": "Urgent"
}
```

## Technologies Used

- **NestJS** (Server)
- **TypeORM** with **PostgreSQL** (Database)
- **OpenAI API** (Task Prioritization)

## Author

Arbrim Rashiti  
Email: arbrimrashiti@gmail.com  
LinkedIn: [linkedin.com/in/arbrimrashiti](https://linkedin.com/in/arbrimrashiti)

