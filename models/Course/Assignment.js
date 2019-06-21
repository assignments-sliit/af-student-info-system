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
        type:Date,
        required:true
    },
    uploadTime:{
        type:Date
    },
    submittedOnTime:{
        type:Boolean,
        check:()=>{
            if (this.dueDate > this.uploadTime) {
                this.value = true;
            } else if(this.dueDate<this.uploadTime || this.uploadTime ===null){
                this.value = false;
            }

        }
    },
    file:{
        type:String
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
    },
    isOpen:{
        type:Boolean,
        required:true
    }
});


module.exports=mongoose.model('Assignment',assignmentSchema);