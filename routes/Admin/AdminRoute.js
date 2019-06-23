const express = require('express');
const route = express.Router();
const AdminController = require('../../controllers/admin/adminController');

const checkAuth=require('../../auth/checkAuthAdmin');

//POST
route.post('/add',checkAuth, AdminController.addAdmin);

//GET - for particular student
route.get('/get/:adminID',checkAuth, AdminController.findAdminByCode);

//LOGIN
route.post('/login',AdminController.admin_signIn);


//GET_ALL
route.get('/get-all',checkAuth, AdminController.getAllAdmin);
//GET-DELETE
route.delete('/delete/:adminID',checkAuth,AdminController.deleteAdminByCode);

//UPDATE
route.put('/update/:adminID',checkAuth,AdminController.admin_update);

module.exports = route;