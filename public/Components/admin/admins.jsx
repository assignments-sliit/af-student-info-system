import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Add_Admin from './add_Admin';
import View_Admin from './view_admin';
import ViewInstructor from '../instructor/ViewInstructor';
import Edit_admin from "./update_admin";

export default class admins extends Component{



    render() {
        return(
          <div>
              <h2 align="center">ADMIN'S</h2> <br/>
              <Router>
              <ul className="nav nav-tabs">
                  <li className="nav-item">
                      <Link to="/add-admin" className="nav-link active">Add</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/adminview" className="nav-link" >View's</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/instructorview" className="nav-link" >View Instructors</Link>
                  </li>

              </ul><br/>

                  <Route path="/add-admin" exact component={Add_Admin}/>
                  <Route path="/adminview" component={View_Admin}/>
                  <Route path="/instructorview" component={ViewInstructor}/>
                  <Route path="/admin-edit/:id" component={Edit_admin}/>
              </Router>
              <br/><br/>
          </div>
        );
    }
}