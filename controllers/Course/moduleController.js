const Module=require('../../models/Course/Module');
const mongoose=require('mongoose');
const checkAuth=require('../../auth/check-auth');

exports.getAllModules=checkAuth,(req,res,next)=>{
    Module.find()
        .select('moduleCode moduleName lecturerInCharge grade')
        .populate('assignment')
        .exec()
        .then(docs=>{
            res.status(200).json({
                count:docs.length,
                courses:docs.map(doc=>{
                    return{
                        moduleCode:doc.moduleCode,
                        moduleName:doc.moduleName,
                        lecturerInCharge: doc.lecturerInCharge,
                        grade:doc.grade
                    }
                })
            })
        }).catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};


exports.addModule=checkAuth,(req,res,next)=>{
    Module.find({
        moduleCode: req.body.moduleCode
    }).exec()
        .then(module =>{
            if(module.length>=1){
                res.status(409).json({
                    message:'Module already exists'
                });
            }else {
                const module =new Module({
                    _id:mongoose.Types.ObjectId(),
                    moduleCode:req.body.moduleCode,
                    moduleName: req.body.moduleName,
                    lecturerInCharge:req.body.lecturerInCharge,
                    grade: req.body.grade,
                    courseCode:req.body.courseCode
                });

                module.save().then(result=>{
                    console.log(result);
                    res.status(201).json({
                        message:'module created',
                        createdCourse:result
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


exports.findCourseByCode=checkAuth,(req,res,next)=>{
    Module.find({
        courseCode:req.params.courseCode
    }).exec().then(result=>{
        if(result.length>=1){
            res.status(200).json({
                module:result
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


exports.deleteCourseByCode=checkAuth,(req,res,next)=>{
    const code=req.param.courseCode;
    Module.remove({
        courseCode:code
    }).exec()
        .then(result=>{
            res.status(200).json({
                message:'deleted',
                deletedModule:result
            });
        }).catch(err=>{
        console.log(err.message);
        res.status(500).json({
            error:err
        });
    })
};