import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import View_course from './ViewCourseStd';
import Exam_course from './ViewExamStd';


export default class student_dashboard extends Component{



    render() {
        return(
          <div>
              <h2 align="center">STUDENTS </h2> <br/>
              <Router>
                  <ul className="nav nav-tabs">
                      <li className="nav-item">
                          <Link to="/viewCourse" className="nav-link active">View Course</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/viewAssign" className="nav-link" >View Assignment</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/viewExam" className="nav-link" >View Exam</Link>
                      </li>

                  </ul><br/>


              <Route path="/viewCourse" component={View_course}/>
              <Route path="/viewExam" component={Exam_course}/>
              </Router>
          </div>
        );
    }
}