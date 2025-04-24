const express = require('express');
const router = express.Router();
const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

// GET all students and POST new student
router.route('/').get(getStudents).post(createStudent);

// GET, PUT, DELETE student by ID
router.route('/:id').get(getStudentById).put(updateStudent).delete(deleteStudent);

module.exports = router; 