const mongoose=require('mongoose');

const ExamSchema=mongoose.Schema({

   // _id:mongoose.Schema.Types.ObjectId,

    examID: {
        type: String,
        required: true,
        unique:true
    },

    moduleCode:{
        type:String,
    },

    moduleName:{
        type:String,
        required:true
    },

    examDay:{
        type:Date,
        required:true
    }

});

module.exports=mongoose.model('Exam',ExamSchema);
