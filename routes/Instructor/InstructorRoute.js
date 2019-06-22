const express = require('express');
const route = express.Router();
const checkAuthInstructor=require('../../auth/checkAuthInstructor');
const InstructorController = require('../../controllers/Instructor/InstructorController');
const keys=require('../../config/keys');
const JWT_KEY=keys.JWT_KEY;

//POST
route.post('/add', InstructorController.addInstructor);

//GET
route.get('/get/:instructorID', InstructorController.findInstructorByCode);

//GET_ALL
route.get('/get-all', InstructorController.getAllInstructor);

//DELETE
route.delete('/delete-instructor/:instructorID', InstructorController.deleteInstructorByCode);

//Sign in
route.post('/login',InstructorController.instructor_signIn);

//UPDATE
route.put('/update/:instructorID',InstructorController.instructor_update);

module.exports = route;