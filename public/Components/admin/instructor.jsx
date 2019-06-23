import React ,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Add_Instru from "../instructor/AddInstructor";
import View_Instru from "../instructor/ViewInstructor";
import View_Course from "../instructor/ViewCourseIns";
import Add_Exam from "../instructor/AddExam";
import View_Exam from "../instructor/ViewExamIns";
import Edit_admin from "./update_admin";
//import Edit_instructor from "../instructor/UpdateInstructor";
//<Route path="/instructor-edit/:id" component={Edit_instructor}/>


export default class instructor extends Component{


    render() {
        return(
          <div>
              <h2 align="center">INSTRUCTORS</h2> <br/>
              <Router>
                  <ul className="nav nav-tabs">
                      <li className="nav-item">
                          <Link to="/add-inst" className="nav-link active">Add an Instructor</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/view-inst" className="nav-link" >View all Instructors</Link>
                      </li>



                  </ul><br/>

                  <Route path="/add-inst" exact component={Add_Instru}/>
                  <Route path="/view-inst" exact component={View_Instru}/>




              </Router>
              <br/><br/>

          </div>
        );
    }
}