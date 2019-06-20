const express=require('express');
const router=express.Router();
const moduleController=require('../../controllers/Course/moduleController');

//get all courses
router.get('/all-modules',moduleController.getAllModules);

//add a new course
router.post('/add-module',moduleController.addModule);

//get module by course code
router.get('/module/:courseCode',moduleController.findCourseByCode);


//delete a module by course code
router.delete('/module/:courseCode',moduleController.deleteCourseByCode);


module.exports=router;