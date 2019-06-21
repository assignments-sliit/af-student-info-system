import React, {Component} from 'react';
import AddStudent from './AddStudent';


export default class Student extends Component{

    constructor(props){
        super(props);

        this.state = {
            message: '',
            students: [],
            studentTable: []
        }
    }

    componentDidMount(){
        fetch('api/messages', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({
                    message: jsonRes.message
                });
            })
            .catch(err => {
                this.setState({
                    message: 'An error occured'
                });
            });

        fetch('/api/students/get-all', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({students: jsonRes}, (()=> {

                }));
            })
            .catch(err => {
                this.setState({students: 'An error occured'});
            });

        fetch('', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({studentTable: jsonRes}, (() => {

                }));
            })
            .catch(err => {
                this.setState({studentTable: 'An error occurred'});
            });
    }

    handleSubmit(e){
        const student = {
            "studentID" : e.student.studentID,
            "name": e.student.name,
            "email": e.student.email,
            "password": e.student.password
        };

        alert(student.studentID + ", " + student.name + ", " + student.email + ", " + student.password);

        fetch('/api/student/add-student', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }

    handleOnChange(e){

    }

    render(){
        return(
            <div>
                <AddStudent handleSubmit={student => this.handleSubmit(student)}/>
            </div>
        );
    }

}
