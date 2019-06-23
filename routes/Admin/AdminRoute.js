const express = require('express');
const route = express.Router();

const AdminController = require('../../controllers/admin/adminController');

//POST
route.post('/add', AdminController.addAdmin);

//GET - for particular student
route.get('/get/:adminID', AdminController.findAdminByCode);

//LOGIN
route.post('/login',AdminController.admin_signIn);


//GET_ALL
route.get('/get-all', AdminController.getAllAdmin);
//GET-DELETE
route.delete('/delete/:adminID',AdminController.deleteAdminByCode);

//UPDATE
route.put('/update/:adminID',AdminController.admin_update);

module.exports = route;