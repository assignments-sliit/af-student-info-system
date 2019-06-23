const express=require('express');
const router=express.Router();
const examController=require('../../controllers/Instructor/ExamController');
const checkAuthInstructor=require('../../auth/checkAuthInstructor');


//get all
router.get('/get-all',examController.getAllExam);

//add a new exam
router.post('/add',examController.addExam);

//get a exam by code
router.get('/exam/:examID',examController.findExamByCode);

//delete a exam
router.delete('/delete-exam/:examID',examController.deleteExamByCode);

//UPDATE
router.put('/update/:examID',examController.exam_update);

module.exports=router;