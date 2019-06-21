import React,{Component} from 'react';
import home from './admin/adminpage1';
import course from './course/course';
import exam from './instructor/AddExam';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import '../css.css'


export default  class header extends Component{


    render() {
        return(
            <div>
                <div className="login_head">

                </div><br/><br/><br/>
                <Router>
                <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/home" ><b className="nav-link">Home </b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/course"><b className="nav-link">Courses</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/exam"><b className="nav-link">exam</b></Link>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav><br/><br/>
                </div>
                    <Route path="/home"  component={home}/>
                    <Route path="/course" component={course}/>
                    <Route path="/exam" component={exam}/>
                </Router>
            </div>
        )
    }

}