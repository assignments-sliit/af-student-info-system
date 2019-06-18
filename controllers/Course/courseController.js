const Course=require('../../models/Course/Course');

exports.getAllCourses=(req,res,next)=>{
    Course.find()
        .select('courseCode courseName')
        .populate('modules','moduleCode moduleName lecturerInCharge')
        .exec()
        .then(docs=>{
            res.status(200).json({
                count:docs.length,
                courses:docs.map(doc=>{
                    return{
                        courseCode:doc.courseCode,
                        courseName:doc.courseName,
                        modules:doc.modules.map(mdoc=>{
                            return{
                                moduleCode:mdoc.moduleCode,
                                moduleName:mdoc.moduleName,
                                lecturerInCharge:mdoc.lecturerInCharge
                            }
                        })
                    }
                })
            })
        }).catch(err=>{
        res.status(500).json({
            error:err
        });
    });
};


// exports.addCourse=()=>{

// }