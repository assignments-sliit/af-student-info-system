import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import '../../css.css'


import exam from './AddExam';
import view_ins from './ViewInstructor';
import add_ins from './AddInstructor';
import view_course from './ViewCourseIns';
import view_exam from './ViewExamIns';


export default class instructor_dashboard extends Component{



    render() {
        return(
            <div>
                <h2 align="center">INSTRUCTOR</h2> <br/>
                <Router>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to="/addIns" className="nav-link active">Add Instructor</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/view_inst" className="nav-link active">View Instructor</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/viewCourse" className="nav-link active">View Course</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/exam" className="nav-link" >Add Exam</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/viewExam" className="nav-link" >View Exam</Link>
                        </li>

                    </ul><br/>


                    <Route path="/view_inst" component={view_ins}/>
                    <Route path="/addIns" component={add_ins}/>
                    <Route path="/viewCourse" component={view_course}/>
                    <Route path="/exam" component={exam}/>
                    <Route path="/viewExam" component={view_exam}/>
                </Router>
            </div>
        );
    }
}
