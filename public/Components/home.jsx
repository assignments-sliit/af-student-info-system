import React ,{Component} from 'react';
import {Link} from "react-router-dom";
import std1 from '../../image/home1.jpg';
import std2 from '../../image/home2.jpg';
import std3 from '../../image/home3.jpg';

export default class home extends Component{

    render() {
        return(
            <div>


                <div className="card bg-dark text-white">
                    <img src={std2} className="card-img" style={{height:600}} alt="..."/>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Your path to success!</h5>
                            <p className="card-text">Use this system to keep track of your academic activities and see your success.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                </div><br/><br/>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">

                                <Link to={'/inst-login'} className="btn btn-primary">INSTRUCTORS LOGIN</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">

                                <Link to={'/admin-login'} className="btn btn-primary">ADMIN LOGIN</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
