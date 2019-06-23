import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Student_View from'../Student/ViewStudent';
import Student_updata from '../Student/update_student';


export default class students extends Component{

    render() {
        return(
          <div>
              <h2 align="center">STUDENTS</h2> <br/>
              <Router>
                  <ul className="nav nav-tabs">
                      <li className="nav-item">
                          <Link to="/a" className="nav-link active">View Students</Link>
                      </li>


                  </ul><br/>

                  <Route path="/a" exact component={Student_View}/>
                  <Route path="/student-edit/:id"  component={Student_updata}/>

              </Router>
          </div>
        );
    }
}
