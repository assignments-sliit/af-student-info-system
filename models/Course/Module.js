const mongoose=require('mongoose');

const moduleSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    moduleCode:{
        type:String,
        required:true,
        unique:true

    },
    moduleName:{
        type:String,
        required:true
    },
    grade:{
        type:Number
    },
    lecturerInCharge:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Lecturer'
    },
    assignment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Assignment'
    }]
});

module.exports=mongoose.model('Module',moduleSchema);
