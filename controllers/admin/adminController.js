const Admin = require('../../models/Admin/Admin');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const JWT_KEY = keys.JWT_KEY;
const bcrypt = require('bcrypt')

exports.getAllAdmin = (req, res, next) => {
    Admin.find(function (err, id) {
        if (err) {
            console.log(err);
        } else {
            res.json(id);
        }
    });
};

exports.addAdmin = (req, res, next) => {
    Admin.find({
        adminId: req.body.adminId
    }).exec()
        .then(admin => {
            if (admin.length >= 1) {
                res.status(409).json({
                    message: 'Admin already exists'
                });
            } else {
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    if(err){
                        return res.status(500).json({
                            error:err,
                            message: 'Error while processing password'
                        });
                    }else{
                        const newAdministrator = new Admin({
                            _id: mongoose.Types.ObjectId(),
                            adminId: req.body.adminId,
                            name: req.body.name,
                            email: req.body.email,
                            password: hash,
                            userType: 'admin'
                        });
        
                        newAdministrator.save().then(result => {
                            console.log(result);
                            res.status(201).json({
                                message: 'admin added',
                                createdAdmin: result
                            });
                        }).catch(err => {
                            console.log(err.message);
                            res.status(500).json({
                                error: err
                            })
                        })
                    }
                })
            }
        })

};

exports.findAdminByCode = (req, res, next) => {
    Admin.find({
        adminId: req.params.adminId
    })
        .exec().then(result => {
            if (result.length >= 1) {
                console.log(result);
                res.status(200).send({
                    admin: result
                });
            } else {
                res.status(404).json({
                    message: 'Student ID does not match!!'
                });
            }
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

//update controller action
exports.admin_update = (req, res, next) => {
    const id = req.params.adminId;

    const updatedAdmin = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    Admin.update({ adminId: id }, updatedAdmin)
        .exec().then(result => {
            res.send(result);
        }).catch(err => {
            res.status(500).json({
                message: 'Error update failed!',
                error: err
            })
        });
};

exports.deleteAdminByCode = (req, res, next) => {

    Admin.remove({ adminId: req.params.adminId }, function (err, admin) {
        if (err)
            res.status(400).json(err);
    })
};


//login
exports.admin_signIn = (req, res, next) => {
    Admin.find({ adminId: req.body.adminId })
        .exec()
        .then(admin => {
            if (admin.length < 1) {
                return res.status(401).json({
                    message: 'Authorization Failed!'
                });
            }
            if (admin) {
                //correct password
                const token = jwt.sign({
                    id: admin[0]._id,
                    adminId: admin[0].adminId,
                    userType: admin[0].userType

                },
                    JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                );
                console.log(admin);
                return res.status(200).json({
                    message: 'Authorization Success',
                    token: token
                });
            }
            res.status(401).json({
                message: 'Authorization Failed!'
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
};


