import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import Students from '../../../image/student.jpg';
import Lecture from '../../../image/lectures.jpg';
import Course from '../../../image/course.jpg';
import Admin from '../../../image/admin.jpg';


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

              <div>

                  <div className="card-deck">
                      <div className="card">
                          <img src={Students} className="card-img-top" alt="..."/>
                              <div className="card-body" align="center">
                                  <Link to="/admin/student"  className="btn btn-primary">Students</Link>
                              </div>
                      </div>
                      <div className="card">
                          <img src={Lecture} className="card-img-top" alt="..."/>
                              <div className="card-body" align="center">
                                  <Link to="/admin/instructor"  className="btn btn-primary">Instructors</Link>
                              </div>
                      </div>
                  </div> <br/><br/>
                  <div className="card-deck">
                      <div className="card">
                          <img src={Course} className="card-img-top" alt="..."/>
                              <div className="card-body" align="center">
                                  <Link to="/admin/course" className="btn btn-primary">Course</Link>
                              </div>
                      </div>

                      <div className="card">
                          <img src={Admin} className="card-img-top" alt="..."/>
                          <div className="card-body" align="center">
                              <Link to="/admin/admins" className="btn btn-primary">Admins</Link>
                          </div>

                      </div>

                  </div>

              </div><br/><br/>

          </div>
        );
    }
}