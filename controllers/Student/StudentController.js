const StudentModel = require('../../models/Student/Student');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const checkAuth=require('../../auth/check-auth');
const keys=require('../../config/keys');
const JWT_KEY=keys.JWT_KEY;

//POST
exports.students_signup = (req, res, next)=>{
    StudentModel.find({
        studentID: req.body.studentID
    }).exec().then(student => {
        if(student.length >= 1){
            res.status(409).json({
                message: 'Student ID exists!'
            });
        }
        else {
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err){
                    return res.status(500).json({
                        error: err
                    });
                }
                else {
                    const studentType="student";
                    const new_student = new StudentModel({
                        _id : mongoose.Types.ObjectId(),
                        studentID: req.body.studentID,
                        name: req.body.name,
                        email: req.body.email,
                        password: hash,
                        userType: studentType,
                        enrolledCourse:req.body.enrolledCourse
                    });

                    new_student.save().then(result=>{
                        console.log(result);

                        res.status(201).json({
                            message:'New Student Added!'
                        });
                    }).catch(err=>{
                        console.log(err);

                        res.status(500).json({
                            error:err
                        });
                    });
                }
            })
        }
    })
};


//GET - Specified Students
exports.get_studentById= (req,res,next)=>{
    StudentModel.find({
        studentID:req.params.studentID
    })
        .exec().then(result => {
            if(result.length >= 1){
                res.status(200).json({
                    student:result
                });
            }else {
                res.status(404).json({
                    message: 'Student ID does not match!!'
                });
            }
    }).catch(err => {
        res.status(500).json({
            error:err
        });
    });
};


//GET - All Students
/*exports.getAllStudents=(req,res,next)=>{
    StudentModel.find()
        .select('studentID name email')
        //.populate('students','studentID name email')
        .exec()
        .then(docs=>{
            res.status(200).json({
                count:docs.length,

                students:docs.map(doc=>{
                    return{
                        studentID:doc.studentID,
                        name:doc.name,
                        email:doc.email

                    }
                })
            })
        }).catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};*/

exports.getAllStudents=(req,res,next)=>{
    StudentModel.find(function (err,id) {
        if(err){
            console.log(err);
        }else{
            res.json(id);
        }
    });
};

//DELETE - usingStudentID
exports.delete_byStudentID = (req,res,next)=>{
    const stuID = req.params.studentID;

    StudentModel.remove({
        studentID:stuID
    }).exec().then(result=>{
        res.status(200).json({
            message: 'Successfully deleted!!',
            deletedStuRecord: result
        });
    }).catch(err=>{
        console.log(err.message);

        res.status(500).json({
            error:err
        });
    })
};



exports.student_signIn=(req,res,next)=>{
    StudentModel.find({studentID:req.body.studentID})
        .exec()
        .then(student=>{
            if(student.length<1){
                return res.status(401).json({
                    message:'Authorization Failed!'
                });
            }
            bcrypt.compare(req.body.password,student[0].password,(err,result)=>{
                if(err){
                    return res.status(401).json({
                        message:'Incorrect Password'
                    });
                }
                if(result){
                    //correct password
                    const token=jwt.sign({
                        id:student[0]._id,
                        studentID:student[0].studentID,
                        userType:student[0].userType

                    },
                        JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    console.log(student);
                    return res.status(200).json({
                        message:'Authorization Success',
                        token:token
                    });
                }
                res.status(401).json({
                    message:'Authorization Failed!'
                });
            });
        }).catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
        });
    })
};


exports.student_enroll=(req,res,next)=>{
    const id=req.body.id;

    const enrollment={
        enrolledCourse: req.params.enrolledCourse
    };
    StudentModel.update({_id:id},enrollment)
        .exec().then(result=>{
            res.send(result);
    }).catch(err=>{
        res.status(500).json({
            message:'Error update failed!',
            error:err
        })
    });
};