import React ,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Add_Instru from "../instructor/AddInstructor";
import View_Instru from "../instructor/ViewInstructor";
import View_Course from "../instructor/ViewCourseIns";
import Add_Exam from "../instructor/AddExam";
import View_Exam from "../instructor/ViewExamIns";
import Edit_admin from "./update_admin";
import Edit_instructor from "../instructor/UpdateInstructor";



export default class instructor extends Component{


    render() {
        return(
          <div>
              <h2 align="center">INSTRUCTORS</h2> <br/>
              <Router>
                  <ul className="nav nav-tabs">
                      <li className="nav-item">
                          <Link to="/add-inst" className="nav-link active">Add Instructors</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/view-inst" className="nav-link" >View Instructors</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/view-course" className="nav-link" >View Courses</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/add-exam" className="nav-link" >Create Exam</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/view-exam" className="nav-link" >View Exams</Link>
                      </li>


                  </ul><br/>

                  <Route path="/add-inst" exact component={Add_Instru}/>
                  <Route path="/view-inst" exact component={View_Instru}/>
                  <Route path="/view-course" exact component={View_Course}/>
                  <Route path="/add-exam" exact component={Add_Exam}/>
                  <Route path="/view-exam" exact component={View_Exam}/>
                  <Route path="/instructor-edit/:id" component={Edit_instructor}/>

              </Router>
              <br/><br/>

          </div>
        );
    }
}