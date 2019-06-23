import React,{Component}from'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import addCourse from "./course_admin";
import Student_updata from "../Student/update_student";
import View_Course from "../instructor/ViewCourseIns";
import Add_Exam from "../instructor/AddExam";
import View_Exam from "../instructor/ViewExamIns";

export default class course extends Component{

    render() {
        return(
          <div>
              <h2 align="center">Courses</h2><br/>
              <div>
                  <Router>
                      <ul className="nav nav-tabs">
                          <li className="nav-item">
                              <Link to="/" className="nav-link active">Add a Course</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/view-course" className="nav-link" >View Courses</Link>
                          </li>



                      </ul><br/>

                      <Route path="/" exact component={addCourse}/>
                      <Route path="/view-course" exact component={View_Course}/>


                  </Router>
              </div>
          </div>
        );
    }

}