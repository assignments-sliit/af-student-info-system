import React, {Component} from 'react';
import AddStudent from './Components/Student/AddStudent';

export default class Student extends Component{
    constructor(props){
        super(props);

        this.handleSubmit()
        this.state = {
            message: '',
            students: []
        }
    }

    componentDidMount(){
        fetch('/messages', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({message: jsonRes.message});
            })
            .catch(err => {
                this.setState({message: 'An error occured!'});
            });

        fetch('/get-all', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({books: jsonRes}, (() => {
                    // alert(this.state.books)
                }));
            })
            .catch(err => {
                this.setState({
                    students: 'An error occurred'
                });
            });
    }

    handleSubmit(e){
        const unreg_student = {
            "studentID": e.student.studentID,
            "name": e.student.name,
            "email": e.student.email,
            "password": e.student.password
        };

        alert(unreg_student.name);

        fetch('/api/students/add-student', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(unreg_student)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }


    render() {
        return (
            <div>
                <AddStudent handleSubmit={student => this.handleSubmit(student)}/>
            </div>

        );

    }
}