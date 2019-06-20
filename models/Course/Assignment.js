const mongoose=require('mongoose');

const assignmentSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    assignmentName:{
        type:String,
        required:true
    },
    module:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Module'
    },
    dueDate:{
        type:datetime,
        required:true
    },
    uploadTime:{
        type:datetime
    },
    submittedOnTime:{
        type:Boolean
    },
    file:{
        type:File
    },
    submittedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },
    isGraded:{
        type:Boolean
    },
    marks:{
        type:Number
    }
});


module.exports=mongoose.model('Assignment',assignmentSchema);