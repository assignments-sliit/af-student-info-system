const express = require('express');
const route = express.Router();

const StudentController = require('../../controllers/admin/adminController');

//POST
route.post('/add', StudentController.addAdmin);

//GET - for particular student
route.get('/get/:adminID', StudentController.findAdminByCode);

//GET_ALL
route.get('/get-all', StudentController.getAllAdmin);

module.exports = route;