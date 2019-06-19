const mongoose=require('mongoose');

const CourseSchema=mongoose.Schema({
   _id:mongoose.Schema.Types.ObjectId,
   courseCode:{
       type:String,
       required:true,
       unique:true
   },
   courseName:{
       type:String,
       required:true
   },
    courseType:{
       type:String
    }
});

module.exports=mongoose.model('Course',CourseSchema);