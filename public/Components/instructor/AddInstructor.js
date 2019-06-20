import React,{Component} from 'react';
import axios from'axios';


export default class AddInstructor extends Component{
    constructor(props){
        super(props);

        this.state={
            instructorID:'',
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
            instructorID:e.target.value,
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

        const new_Instructor={
            instructorID:this.state.instructorID,
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('/api/instructors/add',new_Instructor)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data}));


        this.setState({
            instructorID:'',
            name:'',
            email:'',
            password:''
        })

    }





    render() {
        return(
            <div>
                <h2 align="center">Add Instructor</h2> <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Instructor Id"
                                   value={this.state.instructorID}
                                   onChange={this.onChangeID}
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
        );
    }
}