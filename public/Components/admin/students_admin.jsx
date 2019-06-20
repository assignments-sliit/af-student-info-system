import React,{Component} from 'react';
import axios from 'axios';


export default class students_admin extends Component{

    constructor(props){
        super(props);

        this.state={
            studentID:'',
            name:'',
            email:'',
            password:''
        };
    this.onChangeStd=this.onChangeStd.bind(this);
    this.onChangeName=this.onChangeName.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    }

    onChangeStd(e){
        this.setState({
            studentID:e.target.value
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
        const students={
            studentID:this.state.studentID,
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        };

        axios.post('/api/students/add',students)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data}));


        this.setState({
            studentID:'',
            name:'',
            email:'',
            password:''
        });

    }


    render() {
        console.log(this.state);
        return(
            <div>
                <h2 align="center">Student's</h2> <br/>
                <div >
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Student Id"
                                       value={this.state.studentID}
                                       onChange={this.onChangeStd}
                                />
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Name"
                                       value={this.state.name}
                                       onChange={this.onChangeName}
                                />
                            </div>
                        </div><br/>

                        <div className="row">
                        <div className=" col-md-6">
                            <input type="email"
                                   className="form-control"
                                   id="inputEmail4"
                                   placeholder="Email"
                                   value={this.state.email}
                                   onChange={this.onChangeEmail}
                            />
                        </div>
                        </div><br/>
                            <div className="row">
                            <div className="col-md-6">
                                <input type="password"
                                       className="form-control"
                                       id="inputPassword4"
                                       placeholder="Password"
                                       value={this.state.password}
                                       onChange={this.onChangePassword}
                                />
                            </div>
                            </div><br/>

                        <button type="submit" className="btn btn-success">ADD</button>

                    </form>
                </div>


            </div>
        );
    }
}