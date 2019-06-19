const express = require('express');
const route = express.Router();

const StudentController = require('../../controllers/Student/StudentController');

//POST
route.post('/add', StudentController.students_signup);

//GET - for particular student
route.get('/get/:studentID', StudentController.get_studentById);

//GET_ALL
route.get('/get-all', StudentController.getAllStudents);

module.exports = route;

