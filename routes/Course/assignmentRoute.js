const express=require('express');
const router=express.Router();
const Assignment=require('../../models/Course/Assignment');
//const mongoose=require('mongoose');

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
router.put('/assignment/upload/:assignmentId',upload.single('file'),(req,res,next)=>{
    const id=req.params.assignmentId;
    const newAssignment={
        uploadTime:Date.now(),
        file:req.file.path,
        submittedBy:req.body.studentId
        // submittedOnTime:()=>{
        //    const gt= Assignment.findById({_id:id});
        //    if(gt.dueDate>this.uploadTime){
        //        this.submittedOnTime=true;
        //    }
        //    else{
        //        this.submittedOnTime=false;
        //    }
        // }

    };

    // for(const ops of newAssignment){
    //     updateOps[ops.propName]=ops.value;
    // }

    Assignment.update({_id:id},newAssignment)
        .exec()
        .then(result=>{
            res.send(result);
        }).catch(err=>{
        res.status(500).json({
            message:'Error! unable to upload assignment',
            error:err
        });
    });
});


//add assignment
router.post('/assignment/add',assignmentController.addAssignment);

module.exports=router;