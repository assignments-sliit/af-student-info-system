import React,{Component} from 'react';
import home from './admin/adminpage1';
import exam from './instructor/AddExam';
import addStd from './Student/AddStudent';
import Home from './home';

import AAdmin from'./admin/admins';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import '../css.css'
import Adminstudent from "./Student/ViewStudent";
import Admin_course from "./admin/course_admin";
import Add_Instructor from "./admin/instructor";
import Login from"./login/login";
import Admin_login from './login/admin_login';
import Instr_login from './login/instr_login';




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

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
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
                    <Route path="/course" component={Admin_course}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/instructor" component={Add_Instructor}/>
                    <Route path="/addstd" component={addStd}/>
                    <Route path="/admin-login" component={Admin_login}/>
                    <Route path="/inst-login" component={Instr_login}/>



                </Router>
            </div>
        )
    }

}