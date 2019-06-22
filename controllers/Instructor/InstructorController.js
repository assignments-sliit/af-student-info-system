const Instructor=require('../../models/Instructor/Instructor');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
//const checkAuthAdmin=require('../../auth/checkAuthInstructor');
const nodemailer=require('nodemailer');
const keys=require('../../config/keys');
const JWT_KEY=keys.JWT_KEY;

exports.getAllInstructor=(req,res,next)=>{
    Instructor.find(function (err,id) {
        if(err){
            console.log(err);
        }else{
            res.json(id);
        }
    });
};

exports.addInstructor=(req,res,next)=>{
    Instructor.find({
        instructorID: req.body.instructorID
    }).exec()
        .then(instructor =>{
            if(instructor.length>=1){
                res.status(409).json({
                    message:'Instructor already exists'
                });
            }else {
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    if(err){
                        return res.status(500).json({
                            error:err
                        });
                    }else{
                        const instructor =new Instructor({
                            _id:mongoose.Types.ObjectId(),
                            instructorID:req.body.instructorID,
                            name: req.body.name,
                            email:req.body.email,
                            password:hash,
                            userType: 'instructor'
                        });

                        instructor.save().then(result=>{
                            //send email to instructor email
                            const transporter=nodemailer.createTransport({
                                service:'gmail',
                                auth:{
                                    user:'stu2019info@gmail.com',
                                    pass:'ljxgjhhfuvotignp'
                                }
                            });

                            const mailOptions={
                                from:'',
                                to:instructor.email,
                                subject:'Welcome '+ instructor.name +' to Student Information System!',
                                html:'Hi! '+instructor.name +', <br/> '+ 'Welcome to Student Information System. We warmly welcome our instructor!<br/> Thanks and Best Regards,<br/>Admin'
                            };

                            transporter.sendMail(mailOptions,(error,info)=>{
                                if(error){
                                    console.log(error);
                                }else{
                                    console.log('Email sent:'+info.response);
                                }
                            });

                            console.log(result);
                            res.status(201).json({
                                message:'Instructor added',
                                createdInstructor:result
                            });
                        }).catch(err=>{
                            console.log(err.message);
                            res.status(500).json({
                                error:err
                            });
                        });
                    }
                });

            }
        })

};

exports.findInstructorByCode=(req,res,next)=>{
    Instructor.find({
        instructorID:req.params.instructorID
    }).exec().then(result=>{
        if(result.length>=1){
            res.status(200).json({
                instructor:result
            });

        }else{
            res.status(404).json({
                message:'Nothing was found here!'
            });
        }
    }).catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};

exports.deleteInstructorByCode=(req,res,next)=>{
    const code=req.param.instructorID;
    Instructor.remove({
        instructorID:code
    }).exec()
        .then(result=>{
            res.status(200).json({
                message:'deleted',
                deletedInstructor:result
            });
        }).catch(err=>{
        console.log(err.message);
        res.status(500).json({
            error:err
        });
    })
};


//instructorLogin
exports.instructor_signIn=(req,res,next)=>{
    Instructor.find({instructorID:req.body.instructorID})
        .exec()
        .then(instructor=>{
            if(instructor.length<1){
                return res.status(401).json({
                    message:'Authorization Failed!'
                });
            }
            bcrypt.compare(req.body.password,instructor[0].password,(err,result)=>{
                if(err){
                    return res.status(401).json({
                        message:'Incorrect Password'
                    });
                }
                if(result){
                    //correct password
                    const token=jwt.sign({
                            id:instructor[0]._id,
                            instructorID:instructor[0].instructorID,
                            userType:instructor[0].userType

                        },
                        JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    console.log(instructor);
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