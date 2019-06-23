import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import AdminPage1 from'./adminpage1'
import Add_Instructor from "./instructor";
import Admin_student from "./students";
import Admin_course from "./course";
import Admins from "./admins";

export default class admin_header extends Component{


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
                                      <Link to="/admin/student"><b className="nav-link">Student</b></Link>
                                  </li>

                                  <li className="nav-item">
                                      <Link to="/admin/course"><b className="nav-link">Course</b></Link>
                                  </li>
                                  <li className="nav-item">
                                      <Link to="/admin/instructor"><b className="nav-link">Instructor</b></Link>
                                  </li>
                                  <li className="nav-item">
                                      <Link to="/admin/admins"><b className="nav-link">Admin</b></Link>
                                  </li>


                              </ul>

                          </div>
                      </nav><br/><br/>

                  </div>
                  <Route path="/" exact component={AdminPage1}/>
                  <Route path="/admin/instructor" component={Add_Instructor}/>
                  <Route path="/admin/student" component={Admin_student}/>
                  <Route path="/admin/course" component={Admin_course}/>
                  <Route path="/admin/admins" component={Admins}/>
              </Router>
          </div>
        );
    }

}