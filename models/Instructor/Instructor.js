const mongoose=require('mongoose');

const InstructorSchema=mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,

    instructorID: {
        type: String,
        required: true
    },

    name:{
        type:String,
        required: true
    },

    email : {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    userType:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Instructor',InstructorSchema);
