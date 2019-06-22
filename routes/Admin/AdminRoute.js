const express = require('express');
const route = express.Router();

const AdminController = require('../../controllers/admin/adminController');

//POST
route.post('/add', AdminController.addAdmin);

//GET - for particular student
route.get('/get/:adminID', AdminController.findAdminByCode);

//GET_ALL
route.get('/get-all', AdminController.getAllAdmin);

//UPDATE
route.put('/update/:adminID',AdminController.admin_update);

module.exports = route;