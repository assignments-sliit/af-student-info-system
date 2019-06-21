import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
const port=process.env.PORT||5000;


class login extends Component {

    toggle=function(e){
        const studentID=this.refs.studentID.value;
        const password=this.refs.password.value;

            if(studentID===''|| password===''){
                alert('Email or password is empty');
            }else{
                var credentials={
                    "studentID":studentID,
                    "password":password
                };

                var count=false;

                fetch('http://localhost:'+port+'/api/students/login' +credentials.studentID+'/'+credentials.password,{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    }
                }).then(response=>{
                    return response.json();
                }).then(data=>{
                    const student = JSON.stringify(data);
                    if(student!=='[]'){
                        console.log(student);
                        count=true;
                        console.log(data);

                        for(var user of data){
                            var studentId=student.studentID;
                            var userType=student.userType;
                        }

                        //after successful login, render a component below
                        //ReactDOM.render(<App studentID={studentID} userType={userType}/>,document.getElementById('root'));

                    }else {
                        alert('Invalid name or password');
                    }
                }).catch(err=>{
                    alert(err);
                });
                if(count===true){
                    ReactDOM.render(<App/>,document.getElementById('root'));
                }else{
                    ReactDOM.render(<Login/>,document.getElementById('root'));
                }
            }
    };

    signup(){
        ReactDOM.render(<Register/>,document.getElementById('root'))
    }

    render() {
        return (
            <div className="container">
                <div className="backimg">
                    <div className="paddinglog">
                        <div class="progress">
                            <div class="progress-bar bar1" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">

                            </div>
                            <div class="progress-bar bg-success bar2"role="progressbar" aria-valuenow="30" aria-valuemin="0" ariavaluemax="100">

                            </div>
                            <div class="progress-bar bg-info bar3" role="progressbar" aria-valuenow="20" aria-valuemin="0" ariavaluemax="100">

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <form className="paddingsub">
                                <fieldset>
                                    <legend>Online Food Shopping</legend>
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputEmail1">Email address</label>
                                        <input className="form-control"
                                               id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                               type="email" ref="email"/>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="exampleInputPassword1">Password</label>
                                        <input className="form-control"
                                               id="exampleInputPassword1" placeholder="Password" type="password"
                                               ref="password"/>
                                    </div>
                                    <button type="submit" className="btn btnprimary" onClick={()=>this.toggle()}>Submit</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-md-5">
                            <div className={"leftpaddingsignup"}>
                                <button type="submit" className="btn btnprimary" onClick={()=>{this.signup()}}>Sign Up</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );

    }
}
export default Login;