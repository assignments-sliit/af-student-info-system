const express = require('express');
const route = express.Router();
const checkAuth=require('../../auth/checkAuthStudent');
const keys=require('../../config/keys');
const JWT_KEY=keys.JWT_KEY;

const StudentController = require('../../controllers/Student/StudentController');

//POST
route.post('/add-student',StudentController.students_signup);

//GET - for particular student
route.get('/get-student/:studentID',checkAuth, StudentController.get_studentById);

//GET_ALL
//route.get('/get-all', StudentController.getAllStudents);

//DELETE
route.delete('/delete-student/:studentID',checkAuth, StudentController.delete_byStudentID);

//UPDATE
//route.put('update-student/:studentID', StudentController.update_studentByID);

//login
route.post('/login',StudentController.student_signIn);

//student enroll
route.put('/course/enroll/:enrolledCourse',checkAuth,StudentController.student_enroll);

module.exports = route;

