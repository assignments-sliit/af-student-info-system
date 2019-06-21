import React ,{Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Add_Instru from "../instructor/AddInstructor";



export default class instructor extends Component{


    render() {
        return(
          <div>
              <h2 align="center">INSTRUCTORS</h2> <br/>
              <Router>
                  <ul className="nav nav-tabs">
                      <li className="nav-item">
                          <Link to="/add-inst" className="nav-link active">Add</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/instrview" className="nav-link" >View's</Link>
                      </li>

                  </ul><br/>

                  <Route path="/add-inst" exact component={Add_Instru}/>

              </Router>
              <br/><br/>

          </div>
        );
    }
}