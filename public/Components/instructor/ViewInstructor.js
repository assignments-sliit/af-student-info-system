import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Instructor = props =>(
    <tr>
        <td>{props.instructor.instructorID}</td>
        <td>{props.instructor.name}</td>
        <td>{props.instructor.email}</td>
        <td>
            <Link to={"/instructor/"+props.instructor.instructorID}>edit</Link>
        </td>
    </tr>
);

export  default class ViewInstructor extends Component{

    constructor(props){
        super(props);

        this.state={
            instructors:[],
        }

    }

    componentDidMount() {
        axios.get('api/instructors/get-all')
            .then(response =>{
                this.setState({
                    instructors:response.data
                })
            }).catch(function (error) {
            console.log(error);
        });
    }

    instructorList(){
        return this.state.instructors.map(function (currentInstructors,i) {
            return <Instructor instructor={currentInstructors} key={i}/>
        });
    }



    render() {
        return(
            <div>
                <h3 align="center">View Instructors</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Instructor ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action's</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.instructorList()}
                    </tbody>

                </table>
            </div>
        );
    }

}