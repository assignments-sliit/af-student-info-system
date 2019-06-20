const Admin=require('../../models/Admin/Admin');
const mongoose=require('mongoose');


exports.getAllAdmin=(req,res,next)=>{
    Admin.find()
        .select('adminID name email')
        //  .populate('modules','moduleCode moduleName lecturerInCharge')
        .exec()
        .then(docs=>{
            res.status(200).json({
                count:docs.length,
                admin:docs.map(doc=>{
                    return{
                        adminID:doc.adminID,
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

exports.addAdmin=(req,res,next)=>{
    Admin.find({
        adminID: req.body.adminID
    }).exec()
        .then(admin =>{
            if(admin.length>=1){
                res.status(409).json({
                    message:'Admin already exists'
                });
            }else {
                const admin =new Admin({
                    _id:mongoose.Types.ObjectId(),
                    adminID:req.body.adminID,
                    name: req.body.name,
                    email:req.body.email,
                    password:req.body.password
                });

                admin.save().then(result=>{
                    console.log(result);
                    res.status(201).json({
                        message:'admin added',
                        createdAdmin:result
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

exports.findAdminByCode=(req,res,next)=>{
    Admin.find({
        adminID:req.params.adminID
    }).exec().then(result=>{
        if(result.length>=1){
            res.status(200).json({
                admin:result
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

exports.deleteAdminByCode=(req,res,next)=>{
    const code=req.param.adminID;
    Admin.remove({
        courseCode:code
    }).exec()
        .then(result=>{
            res.status(200).json({
                message:'deleted',
                deletedCourse:result
            });
        }).catch(err=>{
        console.log(err.message);
        res.status(500).json({
            error:err
        });
    })
};
