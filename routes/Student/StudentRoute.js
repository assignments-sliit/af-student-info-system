const express = require('express');
const route = express.Router();

const StudentController = require('../../controllers/Student/StudentController');

//POST
route.post('/add-student', StudentController.students_signup);

//GET - for particular student
route.get('/get-student/:studentID', StudentController.get_studentById);

//GET_ALL
route.get('/get-all', StudentController.getAllStudents);

//DELETE
route.delete('/delete-student/:studentID', StudentController.delete_byStudentID);

//UPDATE
//route.put('update-student/:studentID', StudentController.update_studentByID);

module.exports = route;

