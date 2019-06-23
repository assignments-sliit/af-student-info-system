import React,{Component} from 'react';
import home from './admin/adminpage1';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import '../css.css'
import Edit_admin from './admin/update_admin';



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
                                        <Link to="/course"><b className="nav-link">My Course</b></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/assignment"><b className="nav-link">Assignment</b></Link>
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

                </Router>
            </div>
        )
    }

}