import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import Students from '../../../image/student.jpg';
import Lecture from '../../../image/lectures.jpg';
import Course from '../../../image/course.jpg';
import Admin from '../../../image/admin.jpg';
import Adminstudent from '../Student/ViewStudent';
import Admin_course from './course_admin';
import AAdmin from'./admins';
import Add_Instructor from '../instructor/AddInstructor';


export default class adminpage1 extends Component{

    constructor(props){
        super(props);

        this.state={

        };

    }






    render() {
        console.log(this.state);
        return(
          <div>
              <Router>
              <div>

                  <div className="card-deck">
                      <div className="card">
                          <img src={Students} className="card-img-top" alt="..."/>
                              <div className="card-body" align="center">
                                  <Link to="/std"  className="btn btn-primary">Students</Link>
                              </div>
                      </div>
                      <div className="card">
                          <img src={Lecture} className="card-img-top" alt="..."/>
                              <div className="card-body" align="center">
                                  <Link to="/instructor"  className="btn btn-primary">Instructors</Link>
                              </div>
                      </div>
                  </div> <br/><br/>
                  <div className="card-deck">
                      <div className="card">
                          <img src={Course} className="card-img-top" alt="..."/>
                              <div className="card-body" align="center">
                                  <Link to="/course" className="btn btn-primary">Course</Link>
                              </div>
                      </div>

                      <div className="card">
                          <img src={Admin} className="card-img-top" alt="..."/>
                          <div className="card-body" align="center">
                              <Link to="/admin" className="btn btn-primary">Admins</Link>
                          </div>

                      </div>

                  </div>

              </div><br/><br/>
              <Route path="/std" component={Adminstudent}/>
              <Route path="/course" component={Admin_course}/>
              <Route path="/admin" component={AAdmin}/>
              <Route path="/instructor" component={Add_Instructor}/>
              </Router>

          </div>
        );
    }
}