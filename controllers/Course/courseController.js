const Course=require('../../models/Course/Course');
const mongoose=require('mongoose');

exports.getAllCourses=(req,res,next)=>{
    Course.find()
        .select('courseCode courseName')
        // .populate('modules','moduleCode moduleName lecturerInCharge')
        .exec()
        .then(docs=>{
            res.status(200).json({
                count:docs.length,
                courses:docs.map(doc=>{
                    return{
                        courseCode:doc.courseCode,
                        courseName:doc.courseName
                    }
                })
            })
        }).catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};


exports.addCourse=(req,res,next)=>{
Course.find({
    courseCode: req.body.courseCode
}).exec()
    .then(course =>{
        if(course.length>=1){
            res.status(409).json({
                message:'Course already exists'
            });
        }else {
            const course =new Course({
                _id:mongoose.Types.ObjectId(),
                courseCode:req.body.courseCode,
                courseName: req.body.courseName,
                modules:req.body.modules
            });

            course.save().then(result=>{
                console.log(result);
                res.status(201).json({
                    message:'course created',
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


exports.findCourseByCode=(req,res,next)=>{
  Course.find({
      courseCode:req.params.courseCode
  }).exec().then(result=>{
      if(result){
          res.status(200).json({
              course:result
          });
      }else{
          res.status(404).json({
              message:'No Course was found on that Code'
          });
      }
  }).catch(err=>{
      res.status(500).json({
          error:err
      });
  });
};


exports.deleteCourseByCode=(req,res,next)=>{
  const code=req.param.courseCode;
  Course.remove({
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