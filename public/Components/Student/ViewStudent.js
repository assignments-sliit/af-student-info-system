import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Student = props => (
    <tr>
        <td>{props.student.studentID}</td>
        <td>{props.student.name}</td>
        <td>{props.student.email}</td>
        <td><Link to={"/student-edit/"+props.student.studentID}>edit</Link></td>
    </tr>
);

export default class ViewStudent extends Component{


    constructor(props){
        super(props);

        this.state = {
            students:[]
        }
    }

    componentDidMount(){
        axios.get('api/students/get-all')
            .then(response => {
                this.setState({
                    students: response.data,

                })
            }).catch(function (error) {
                    console.log(error);
        });
    }

    studentList(){
        return this.state.students.map(function (currentStudent, i) {
            return <Student student={currentStudent} key={i}/>
        });
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <h3 align="center">View Student</h3>
                <table className='table table-striped' style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.studentList()}
                    </tbody>
                </table>
            </div>
        );
    }
}