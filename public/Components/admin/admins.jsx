import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Add_Admin from './add_Admin';
import View_Admin from './view_admin';
import Deleted from './delete_admin';
import Edit_admin from "./update_admin";
import AddCourse from "./course_admin";
import DeleteInst from "./delete_instructor";

export default class admins extends Component{



    render() {
        return(
          <div>
              <h2 align="center">ADMINS</h2> <br/>
              <Router>
              <ul className="nav nav-tabs">
                  <li className="nav-item">
                      <Link to="/" className="nav-link active">Add Admin</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/adminview" className="nav-link" >View Admins</Link>
                  </li>


              </ul><br/>

                  <Route path="/" exact component={Add_Admin}/>
                  <Route path="/adminview" component={View_Admin}/>
                  <Route path="/admin-edit/:id" component={Edit_admin}/>
                  <Route path="/admin-delete/:id" component={Deleted}/>
                  <Route path="/admin/course/add" component={AddCourse}/>
                  <Route path="/inst-delete/:id" component={DeleteInst}/>
              </Router>
              <br/><br/>
          </div>
        );
    }
}