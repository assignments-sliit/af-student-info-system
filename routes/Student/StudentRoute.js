const express = require('express');
const route = express.Router();

const StudentController = require('../../controllers/Student/StudentController');

//POST
route.post('/add', StudentController.students_signup);

module.exports = route;

