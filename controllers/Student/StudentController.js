const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const StudentModel = require('../../models/Student/Student');

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
                    const new_student = new StudentModel({
                        _id : mongoose.Types.ObjectId(),
                        studentID: req.body.studentID,
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
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