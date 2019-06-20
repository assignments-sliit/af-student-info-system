const Instructor=require('../../models/Instructor/Instructor');
const mongoose=require('mongoose');


exports.getAllInstructor=(req,res,next)=>{
    Instructor.find()
        .select('instructorID name email')
        //  .populate('modules','moduleCode moduleName lecturerInCharge')
        .exec()
        .then(docs=>{
            res.status(200).json({
                count:docs.length,
                instructor:docs.map(doc=>{
                    return{
                        instructorID:doc.instructorID,
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
                const instructor =new Instructor({
                    _id:mongoose.Types.ObjectId(),
                    instructorID:req.body.instructorID,
                    name: req.body.name,
                    email:req.body.email,
                    password:req.body.password
                });

                instructor.save().then(result=>{
                    console.log(result);
                    res.status(201).json({
                        message:'Instructor added',
                        createdInstructor:result
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
