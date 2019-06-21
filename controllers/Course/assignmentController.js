const Assignment=require('../../models/Course/Assignment');
const mongoose=require('mongoose');



exports.getAllAssignments=(req,res,next)=>{
    Assignment.find()
        .select('assignmentName dueDate isOpen')
        .populate('module')
        .exec()
        .then(docs=>{
            res.status(200).json({
                count:docs.length,
                assignments:docs.map(doc=>{
                    return{
                        assignmentName:doc.assignmentName,
                        dueDate:doc.dueDate,
                        isOpen: doc.isOpen
                    }
                })
            })
        }).catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};


exports.addAssignment=(req,res,next)=>{

    const assignment =new Assignment({
        _id:mongoose.Types.ObjectId(),
        assignmentName:req.body.assignmentName,
        module:req.body.module,
        dueDate:req.body.dueDate,
        isOpen:req.body.isOpen

    });

    assignment.save().then(result=>{
                    console.log(result);
                    res.status(201).json({
                        message:'assignment created',
                        createdAssignment:result
                    });
                }).catch(err=>{
                    console.log(err.message);
                    res.status(500).json({
                        error:err
                    })
                })

};


//addMarks
exports.addMarks=(req,res,next)=>{
    const id=req.params.assignmentId;

    const updateOps={};

    const newMarks={
        marks:req.body.marks,
        isGraded:true
    };

    for(const ops of newMarks){
        updateOps[ops.propName]=ops.value;
    }

    Assignment.update({_id:id},{$set:updateOps})
    .exec()
    .then(result=>{
        res.send(result);
    }).catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};