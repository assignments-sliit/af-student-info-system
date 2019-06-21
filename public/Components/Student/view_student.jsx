import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class view_student extends Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className= "container bg-dark">
                <div className='row'>
                    <div className='card' style={{margin: 'auto'}}>
                        <div className='card-header'>
                            <h1 align="center">View Student Details</h1>
                        </div>
                        <div className='card-body'>
                            <table className='table table-striped'>
                                <thead>
                                <tr>
                                    <th>Student ID</th>
                                    <th>Student Name</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.student.map(student =>
                                    <tr key={student.studentID}>
                                        <td>{student.studentID}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}