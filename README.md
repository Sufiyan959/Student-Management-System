# Student Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing student records with CRUD operations.

## Features

- Add new student records
- View a list of all students
- Edit existing student information
- Delete student records
- Validation for all fields

## Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or Atlas)
- npm or yarn

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
cd student-management-system
```

### Set up the Backend

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/student-management-system
```

4. Start the server:

```bash
npm run dev
```

The backend server will run on `http://localhost:5000`.

### Set up the Frontend

1. Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`.

## API Endpoints

- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get a specific student by ID
- `POST /api/students` - Create a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student

## Student Model

- `studentId` (String): Unique identifier for the student
- `firstName` (String): First name of the student
- `lastName` (String): Last name of the student
- `email` (String): Email address of the student
- `dob` (Date): Date of birth
- `department` (String): Department name
- `enrollmentYear` (Number): Year of enrollment
- `isActive` (Boolean): Status of enrollment

## Technologies Used

- **Frontend**: React.js, React Router, Bootstrap, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Build Tool**: Vite 