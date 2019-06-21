import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Course = props =>(
    <tr>
        <td>{props.course.courseCode}</td>
        <td>{props.course.courseName}</td>
        <td>{props.course.courseType}</td>
        <td>{props.course.module}</td>
        <td>
            <Link to={"/course/"+props.course.courseCode}>Accept</Link>
        </td>
    </tr>
);

export  default class ViewCourseIns extends Component{

    constructor(props){
        super(props);

        this.state={
            courses:[],
        }

    }

    componentDidMount() {
        axios.get('api/courses/all-courses')
            .then(response =>{
                this.setState({
                    courses:response.data
                })
            }).catch(function (error) {
            console.log(error);
        });
    }

    courseList(){
        return this.state.courses.map(function (currentCourses,i) {
            return <Course course={currentCourses} key={i}/>
        });
    }



    render() {
        return(
            <div>
                <h3 align="center">View Courses</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Course Type</th>
                        <th>Module</th>
                        <th>Action's</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.courseList()}
                    </tbody>

                </table>
            </div>
        );
    }

}