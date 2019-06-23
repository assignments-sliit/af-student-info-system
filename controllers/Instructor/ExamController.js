const Exam=require('../../models/Instructor/Exam');
const mongoose=require('mongoose');
const nodemailer=require('nodemailer');
const Student=require('../../models/Student/Student');

exports.getAllExam=(req,res,next)=>{
    Exam.find(function (err,id) {
        if(err){
            console.log(err);
        }else{
            res.json(id);
        }
    });
};

exports.addExam=(req,res,next)=>{
    Exam.find({
        examID: req.body.examID
    }).exec()
        .then(exam =>{
            if(exam.length>=1){
                res.status(409).json({
                    message:'Exam ID already exists'
                });
            }else {
                const exam =new Exam({
                    _id:mongoose.Types.ObjectId(),
                    examID:req.body.examID,
                    moduleName: req.body.moduleName,
                    moduleCode:req.body.moduleCode,
                    examDay:req.body.examDay
                });

                exam.save().then(result=>{

                    Student.find().select('email').exec().then(results=>{
                        const transporter=nodemailer.createTransport({
                            service:'gmail',
                            auth:{
                                user:'stu2019info@gmail.com',
                                pass:'ljxgjhhfuvotignp'
                            }
                        });


                        const mailOptions={
                            from:'',
                            to: results,
                            subject:'New Exam added',
                            html:'Hi Student,<br/> A new exam has been created for the module :'+ result.moduleName+' <br/>'
                            +'Please Login to see the exam on system'
                        };

                        transporter.sendMail(mailOptions,(error,info)=>{
                            if(error){
                                console.log(error);
                            }else{
                                console.log('Email sent:'+info.response);
                            }
                        })
                        console.log(results);

                    });


                    console.log(result);
                    res.status(201).json({
                        message:'Exam added',
                        createdExam:result
                    });
                }).catch(err=>{
                    console.log(err.message);
                    res.status(500).json({
                        error:err
                    })
                })
            }
        })

};

exports.findExamByCode=(req,res,next)=>{
    Exam.find({
        examID:req.params.examID
    }).exec().then(result=>{
        if(result.length>=1){
            res.status(200).json({
                exam:result
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

// exports.deleteExamByCode=(req,res,next)=>{
//     const code=req.param.examID;
//     Exam.remove({
//         examID:code
//     }).exec()
//         .then(result=>{
//             res.status(200).json({
//                 message:'deleted',
//                 deletedExam:result
//             });
//         }).catch(err=>{
//         console.log(err.message);
//         res.status(500).json({
//             error:err
//         });
//     })
// };
exports.deleteExamByCode=(req,res,next)=>{

    Exam.remove({examID:req.params.examID},function (err,exam) {
        if(err)
            res.status(400).json(err);

        else
            res.status(200).json('Successfully removed')
    })
};
exports.exam_update=(req,res,next)=>{
    const id=req.params.examID;

    const updatedExam={
        moduleCode:req.body.moduleCode,
        moduleName:req.body.moduleName,
        examDay: req.body.examDay,
    };
    Exam.update({examID:id},updatedExam)
        .exec().then(result=>{
        res.send(result);
    }).catch(err=>{
        res.status(500).json({
            message:'Error update failed!',
            error:err
        })
    });
};
