const express = require('express');
const route = express.Router();
const checkAuth=require('../../auth/checkAuthStudent');
const keys=require('../../config/keys');
const JWT_KEY=keys.JWT_KEY;

const StudentController = require('../../controllers/Student/StudentController');

//POST
route.post('/add-student',StudentController.students_signup);

//GET - for particular student
route.get('/get-student/:studentID', StudentController.get_studentById);

route.put('/update-student/:studentID',StudentController.admin_update);

//GET_ALL
route.get('/get-all', StudentController.getAllStudents);

//DELETE
route.delete('/delete-student/:studentID',checkAuth, StudentController.delete_byStudentID);

//login
route.post('/login',StudentController.student_signIn);

//student enroll
route.put('/course/enroll/:enrolledCourse',checkAuth,StudentController.student_enroll);

module.exports = route;

