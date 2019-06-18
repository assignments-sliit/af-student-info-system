const express=require('express');
const router=express.Router();
const courseController=require('../../controllers/Course/courseController');

//get all courses
router.get('/all-courses',courseController.getAllCourses);

//add a new course
//router.post('/add-course',courseController.addCourse);

module.exports=router;