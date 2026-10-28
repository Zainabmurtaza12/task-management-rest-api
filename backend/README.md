# Task Management REST API - Backend

Backend REST API for a Task Management System built with **Node.js**, **Express.js**, and **PostgreSQL**.

---

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js                 # PostgreSQL connection pool configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication controller placeholder
│   │   ├── userController.js     # User controller placeholder
│   │   ├── projectController.js  # Project controller placeholder
│   │   ├── taskController.js     # Task controller placeholder
│   │   └── dashboardController.js# Dashboard metrics controller placeholder
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication route definitions
│   │   ├── userRoutes.js         # User route definitions
│   │   ├── projectRoutes.js      # Project route definitions
│   │   ├── taskRoutes.js         # Task route definitions
│   │   └── dashboardRoutes.js    # Dashboard route definitions
│   ├── middleware/
│   │   ├── authMiddleware.js     # Authentication middleware
│   │   ├── errorMiddleware.js    # Central error handler
│   │   └── validateMiddleware.js # Request payload validation middleware
│   ├── services/                 # Reusable business logic services
│   ├── utils/                    # Helper and utility functions
│   ├── validators/               # Input validation rules and schemas
│   ├── app.js                    # Express app initialization and route mounts
│   └── server.js                 # Server startup entry point
├── database/
│   └── schema.sql                # PostgreSQL table schema definitions
├── tests/                        # Automated unit and integration tests
├── .env.example                  # Template for environment variables
├── .gitignore                    # Git ignore file for secrets and dependencies
├── package.json                  # Dependencies and execution scripts
└── README.md                     # Backend documentation
```

---

## Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- PostgreSQL (v14 or higher)

### 2. Environment Variables
Copy `.env.example` to `.env` and fill in your local database configuration:

```bash
cp .env.example .env
```

### 3. Installation
Install project dependencies:

```bash
npm install
```

### 4. Running the Server

- **Production mode:**
  ```bash
  npm start
  ```

- **Development mode (with hot-reload):**
  ```bash
  npm run dev
  ```

---

## Current Status
- [x] Backend architecture and folder structure established
- [x] Configuration, routes, controllers, and middleware scaffolding created
- [ ] Database schema and migration implementation
- [ ] Authentication and JWT authorization
- [ ] CRUD APIs for Users, Projects, and Tasks
- [ ] Dashboard metrics and search/filter queries
