import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class AddStudent extends Component{
    constructor(props){
        super(props);

        this.state={
            studentID:'',
            name:'',
            email:'',
            password:''
        }

        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeID=this.onChangeID.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);


    }
    onChangeID(e){
        this.setState({
            studentID:e.target.value,
        });
    }

    onChangeName(e){
        this.setState({
            name:e.target.value,
        });
    }

    onChangeEmail(e){
        this.setState({
            email:e.target.value,
        });
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();

        const new_student={
            studentID:this.state.studentID,
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('/api/students/add-student',new_student)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data}));


        this.setState({
            studentID:'',
            name:'',
            email:'',
            password:''
        })

    }




    render(){
        return(
            <div className='container bg-dark'>
                <div className='row'>
                    <div className='card' style={{margin:'10px'} }>
                        <div className='card-header'>
                            <h1 className='modal-header'>Student Register</h1>
                        </div>
                        <div className='card-body'>
                            <center>
                                <form onSubmit={this.onSubmit} className='was-validated'>
                                    <div className='form-group'>
                                        <label htmlFor="studentID">Student ID</label>
                                        <input type="text" className='form-control' name='studentID' id='studentID' value={this.state.studentID} onChange={this.onChangeID} required />
                                        <div className="valid-feedback">Valid.</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name with Initials</label>
                                        <input type="text" className='form-control' name='name' id='name' value={this.state.name} onChange={this.onChangeName} required />
                                        <div className="valid-feedback">Valid.</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Student Email</label>
                                        <input type="email" className='form-control' name='email' id='email' value={this.state.email} onChange={this.onChangeEmail} required />
                                        <div className="valid-feedback">Valid.</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="studentID">Password</label>
                                        <input type="password" className='form-control' name='password' id='password' value={this.state.password} onChange={this.onChangePassword} required />
                                        <div className="valid-feedback">Valid.</div>
                                    </div>
                                    <br/><br/>
                                    <div className='form-group'>
                                        <button type='submit' className='btn btn-success form-control'>Register</button>
                                        <br/><br/>
                                        <button type='reset' className='btn btn-danger form-control'>Cancel</button>
                                    </div>
                                </form>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}