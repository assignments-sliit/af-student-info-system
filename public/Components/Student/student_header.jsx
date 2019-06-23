import React,{Component} from 'react';
import {Link} from "react-router-dom";


export default class student_header extends Component{



    render() {
        return(
          <div>
              <div>

                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                  <Link to="/" ><b className="nav-link">Home </b></Link>
                              </li>

                              <li className="nav-item">
                                  <Link to="/course"><b className="nav-link">View Course</b></Link>
                              </li>


                          </ul>

                          <ul>
                              <li className="nav-item">
                                  <Link to="/login" className=" btn btn-outline-success my-2 my-sm-0"><b className="nav-link">Assignment</b></Link>
                              </li>

                          </ul>
                      </div>
                  </nav><br/><br/>
          </div>
        );
    }

}