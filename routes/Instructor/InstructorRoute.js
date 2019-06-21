const express = require('express');
const route = express.Router();

const InstructorController = require('../../controllers/Instructor/InstructorController');

//POST
route.post('/add', InstructorController.addInstructor);

//GET
route.get('/get/:instructorID', InstructorController.findInstructorByCode);

//GET_ALL
route.get('/get-all', InstructorController.getAllInstructor);

//DELETE
route.delete('/delete-instructor/:instructorID', InstructorController.deleteInstructorByCode);
///QQQQ
module.exports = route;