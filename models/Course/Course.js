const mongoose=require('mongoose');

const CourseSchema=mongoose.Schema({
   _id:mongoose.Schema.Types.ObjectId,
   courseCode:{
       type:String,
       required:true
   },
   courseName:{
       type:String,
       required:true
   },
   modules:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Module'
   }]
});

module.exports=mongoose.model('Course',CourseSchema);