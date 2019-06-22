import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
const port=process.env.PORT||5000;


export default class login extends Component {

    render() {
        return(
          <div>
              <h2 align="center">Student Login</h2><br/>

              <div>
                  <form>
                      <div className="form-group col-7">
                          <label htmlFor="exampleInputEmail1"><b>Student ID</b></label>
                          <input type="text" className="form-control" id="exampleInputEmail1"
                                 aria-describedby="emailHelp" placeholder="Student ID"/>

                      </div>
                      <div className="form-group col-7">
                          <label htmlFor="exampleInputPassword1"><b>Password</b></label>
                          <input type="password" className="form-control" id="exampleInputPassword1"
                                 placeholder="Password"/>
                      </div>

                      <button type="submit" className="btn btn-primary">Login</button> <br/>
                      <Link to={'/student_register'} ><p>Student Register</p></Link>
                  </form>
              </div>
          </div>
        );
    }

}