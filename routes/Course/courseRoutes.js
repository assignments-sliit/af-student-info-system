const express=require('express');
const router=express.Router();
const courseController=require('../../controllers/Course/courseController');

//get all courses
router.get('/all-courses',courseController.getAllCourses);

//add a new course
router.post('/add-course',courseController.addCourse);

//get a course by code
router.get('/course/:code',courseController.findCourseByCode);

//delete a course
router.delete('/course/delete/:code',courseController.deleteCourseByCode);

module.exports=router;