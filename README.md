# Student Management System

A full-stack web application for managing student records, built with React and Node.js.

## Live Demo

- Frontend: [https://student-management-system-frontend-8r2j.onrender.com](https://student-management-system-frontend-8r2j.onrender.com)
- Backend API: [https://student-management-system-yp7y.onrender.com](https://student-management-system-yp7y.onrender.com)

## Features

- 📱 Responsive design for all devices
- 🔍 View all student records
- ➕ Add new students
- ✏️ Edit existing student information
- 🗑️ Delete student records
- 🔄 Real-time updates
- 🎨 Modern and intuitive UI

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Bootstrap 5
- Font Awesome
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/student-management-system.git
cd student-management-system
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Create a .env file in the backend directory:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/student-management-system
```

5. Start the backend server:
```bash
cd backend
npm start
```

6. Start the frontend development server:
```bash
cd frontend
npm run dev
```

## API Endpoints

- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get a specific student
- `POST /api/students` - Create a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/student-management-system](https://github.com/yourusername/student-management-system) 