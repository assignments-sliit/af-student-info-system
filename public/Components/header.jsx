import React,{Component} from 'react';
import home from './admin/adminpage1';
import exam from './instructor/AddExam';
import addStd from './Student/AddStudent';
import Home from './home';
import Std_dashboard from './Student/student_dashboard';

import AAdmin from'./admin/admins';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import '../css.css'
import Adminstudent from "./Student/ViewStudent";
import Admin_course from "./admin/course_admin";
import Add_Instructor from "./admin/instructor";
import Login from"./login/login";
import Admin_login from './login/admin_login';
import Instr_login from './login/instr_login';
import AddStd from './Student/AddStudent';
import InstructorHeader from './instructor/InstructorHeader';




export default  class header extends Component{


    render() {
        return(
            <div>

                <Router>
                <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" ><b className="nav-link">Home </b></Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/course"><b className="nav-link">Course</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Instructor_Header"><b className="nav-link">Instructor</b></Link>
                            </li>

                        </ul>

                        <ul>
                            <li className="nav-item">
                                <Link to="/login" className=" btn btn-outline-success my-2 my-sm-0"><b className="nav-link">Login</b></Link>
                            </li>

                        </ul>
                    </div>
                </nav><br/><br/>
                </div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/exam" component={exam}/>
                    <Route path="/admin-01" component={AAdmin}/>
                    <Route path="/std" component={Adminstudent}/>
                    <Route path="/course" component={Std_dashboard}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/instructor" component={Add_Instructor}/>
                    <Route path="/addstd" component={addStd}/>
                    <Route path="/admin-login" component={Admin_login}/>
                    <Route path="/inst-login" component={Instr_login}/>
                    <Route path="/student_register" component={AddStd}/>
                    <Route path="/Instructor_Header" component={InstructorHeader}/>



                </Router>
            </div>
        )
    }

}