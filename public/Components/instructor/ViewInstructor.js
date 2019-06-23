import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Instructor = props =>(
    <tr>
        <td>{props.instructor.instructorID}</td>
        <td>{props.instructor.name}</td>
        <td>{props.instructor.email}</td>
        <td>
            <Link to={"/instructor-edit/"+props.instructor.instructorID}>Edit</Link>
        </td>
        <td>
            <Link to={"/inst-delete/"+props.instructor.instructorID}>Delete</Link>
        </td>

        {/*<td>*/}
            {/*<Link color="danger" onClick={this.onDelete}>Delete</Link>*/}
            {/*<Button color="danger" onClick={()=>{*/}
                {/*axios.delete('http://localhost:5000/instructors/delete-instructor/'+props.match.params.id)*/}
                    {/*.then(*/}
                        {/*res => console.log(res.data)*/}
                    {/*)*/}
            {/*}}>Delete</Button>*/}
            {/*<Link to={"/instructor-delete/"+props.instructor.instructorID}>delete</Link>*/}
        {/*</td>*/}
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

    onDelete(){
        axios.get('http://localhost:5000/instructors/delete-instructor/'+this.props.match.params.id)
            .then(
                res => console.log(res.data)
            )
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
                        <th>Actions</th>
                        <th>Delete</th>
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