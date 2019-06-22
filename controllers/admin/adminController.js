const Admin=require('../../models/Admin/Admin');
const mongoose=require('mongoose');


exports.getAllAdmin=(req,res,next)=>{
    Admin.find(function (err,id) {
        if(err){
            console.log(err);
        }else{
            res.json(id);
        }
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
                    password:req.body.password,
                    userType:'admin'
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
    })
        .exec().then(result => {
        if(result.length >= 1){
            console.log(result);
            res.status(200).send({
                admin:result
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

//update controller action
exports.admin_update=(req,res,next)=>{
    const id=req.params.adminID;

    const updatedAdmin={
        name:req.body.name,
        email:req.body.email,
        password: req.body.password,
    };
    Admin.update({adminID:id},updatedAdmin)
        .exec().then(result=>{
        res.send(result);
    }).catch(err=>{
        res.status(500).json({
            message:'Error update failed!',
            error:err
        })
    });
};

exports.deleteAdminByCode=(req,res,next)=>{

    Admin.remove({adminID:req.params.adminID},function (err,admin) {
        if(err)
            res.status(400).json(err);

        else
            res.status(200).json('Successfully removed'+admin.name)
    })
};


