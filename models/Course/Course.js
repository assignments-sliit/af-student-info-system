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
    },
    accepted:{
        type:Boolean
    },
    module:[
       {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Module'
       }
    ],
    instructor:{
       type:mongoose.Schema.Types.ObjectId,
        ref:'Instructor'
    }
});

module.exports=mongoose.model('Course',CourseSchema);