const port=process.env.PORT || 5000;
const Bundler=require('parcel-bundler');
const express=require('express');
const app =express();
const mongoose=require('mongoose');

const courseRouter=require('./routes/Course/courseRoutes');
const studentRouter=require('./routes/Student/StudentRoute');
const moduleRouter=require('./routes/Course/moduleRoutes');
const adminRouter=require('./routes/Admin/AdminRoute');
const instructorRouter=require('./routes/Instructor/InstructorRoute');
const examRouter=require('./routes/Instructor/ExamRoute');
const bundler=new Bundler('./public/index.html',{});
let db;

app.use(express.json());
app.use('/api/courses',courseRouter);
app.use('/api/students',studentRouter);
app.use('/api/modules',moduleRouter);
app.use('/api/admins',adminRouter);
app.use('/api/instructors',instructorRouter);
app.use('/api/exams',examRouter);

app.use(bundler.middleware());
app.use(express.static('./dist'));

//db connection
mongoose.connect("mongodb+srv://polroti:polroti123@sis-cluster-to2kk.azure.mongodb.net/student-info-system",{
    useNewUrlParser:true
}).then(() =>{
    console.log("Connected to MongoDB Cloud");
    db="Connected to MongoDB Cloud";
}).catch(()=>{
    console.log('Connection to MongoDB Cloud Failed');
    db="Cannot connect to MongoDB Cloud";
});
//test


app.get('/', function(req,res){
    // res.send('<h1>Hello Manoj Kumar!</h1> '+db);
    res.sendFile('./dist/index.html');
});

app.listen(port,()=>{
    console.log('Server is running on port: ' + port);
});

