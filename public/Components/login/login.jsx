import React,{Component} from 'react';
import {Link} from "react-router-dom";



export default class login extends Component {


    render() {
        return (
            <div className="login_back" >
                <h1 align="center"><b className="l_text">LOGIN</b></h1> <br/><br/>
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"><b className="l_text">Email</b></label>
                        <div className="col-sm-6">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"><b className="l_text">Password</b></label>
                        <div className="col-sm-6">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                    <div className="from-group row">
                        <div className="col-sm-6">
                            <Link to="/addstd"><p>Student Register</p></Link>
                        </div>
                    </div>
                </form>


            </div>
        );

    }
}