const express=require('express');
const router=express.Router();
const Assignment=require('../../models/Course/Assignment');
//const mongoose=require('mongoose');
const checkAuth=require('../../auth/checkAuthStudent');
const checkAuthIns=require('../../auth/checkAuthInstructor');
const jwt=require('jsonwebtoken');
const keys=require('../../config/keys');
const JWT_KEY=keys.JWT_KEY;
const assignmentController=require('../../controllers/Course/assignmentController');
const multer=require('multer');

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

const fileFilter=(req,file,cb)=>{
    //reject
    if(file.mimetype==='application/pdf' || file.mimetype==='application/zip'){
        cb(null,true);
    }else{
        cb(null,false);
    }
};

const upload=multer({
    storage:storage,
    //limit to 10MB
    limits:{
        fileSize:1024*1024*10
    },
    fileFilter:fileFilter
});

//get all assignment by module
router.get('/assignment/:moduleCode', assignmentController.getAllAssignments);


//upload assignment
router.put('/assignment/upload/:assignmentId',checkAuth,upload.single('file'),(req,res,next)=>{
    const id=req.params.assignmentId;
    const sid=jwt.decode(req.headers.authorization.split(" ")[1],JWT_KEY);
    const newAssignment={
        uploadTime:Date.now(),
        file:req.file.path,
        submittedBy:sid.id
    };

    Assignment.update({_id:id},newAssignment)
        .exec()
        .then(result=>{
            res.status(200).json({
                updateStatus:'File Uploaded',
                updated:result
            })
        }).catch(err=>{
        res.status(500).json({
            message:'Error! unable to upload assignment',
            error:err
        });
    });
});


//add assignment
router.post('/assignment/add',checkAuthIns,assignmentController.addAssignment);

module.exports=router;