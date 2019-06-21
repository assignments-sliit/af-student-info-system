import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
const port=process.env.PORT||5000;


class login extends Component {

    // toggle=function(e){
    //     const studentID=this.refs.studentID.value;
    //     const password=this.refs.password.value;
    //
    //         if(studentID===''|| password===''){
    //             alert('Email or password is empty');
    //         }else{
    //             var credentials={
    //                 "studentID":studentID,
    //                 "password":password
    //             };
    //
    //             var count=false;
    //
    //             fetch('http://localhost:'+port+'/api/students/login' +credentials.studentID+'/'+credentials.password,{
    //                 method:'POST',
    //                 headers:{
    //                     'Content-Type':'application/json'
    //                 }
    //             }).then(response=>{
    //                 return response.json();
    //             }).then(data=>{
    //                 const student = JSON.stringify(data);
    //                 if(student!=='[]'){
    //                     console.log(student);
    //                     count=true;
    //                     console.log(data);
    //
    //                     for(var user of data){
    //                         var studentId=student.studentID;
    //                         var userType=student.userType;
    //                     }
    //
    //                     //after successful login, render a component below
    //                     //ReactDOM.render(<App studentID={studentID} userType={userType}/>,document.getElementById('root'));
    //
    //                 }else {
    //                     alert('Invalid name or password');
    //                 }
    //             }).catch(err=>{
    //                 alert(err);
    //             });
    //             if(count===true){
    //                 ReactDOM.render(<App/>,document.getElementById('root'));
    //             }else{
    //                 ReactDOM.render(<Login/>,document.getElementById('root'));
    //             }
    //         }
    // };
    //
    // signup(){
    //     ReactDOM.render(<Register/>,document.getElementById('root'))
    // }



}
export default Login;