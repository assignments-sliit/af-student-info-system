const Exam=require('../../models/Instructor/Exam');
const mongoose=require('mongoose');


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

exports.deleteExamByCode=(req,res,next)=>{
    const code=req.param.examID;
    Exam.remove({
        examID:code
    }).exec()
        .then(result=>{
            res.status(200).json({
                message:'deleted',
                deletedExam:result
            });
        }).catch(err=>{
        console.log(err.message);
        res.status(500).json({
            error:err
        });
    })
};
