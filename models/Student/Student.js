const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const studentSchema=new Schema({

    studentID: {
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
    },
    enrolledCourse:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }

});

module.exports=mongoose.model('Student',studentSchema);
