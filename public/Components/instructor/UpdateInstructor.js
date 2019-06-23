import React,{Component} from'react';
import axios from 'axios';
export default class update_instructor extends Component{

    constructor(props){
        super(props);

        this.state={
            instructorID:'',
            name:'',
            email:'',
            password:'',
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

    onSubmit(e) {
        e.preventDefault();

        const new_instructor = {

            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        axios.put('http://localhost:5000/api/instructors/update/'+this.props.match.params.id,new_instructor)
            .then(res => console.log(res.data));


    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/instructors/get/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    instructorID:response.data.instructor[0].instructorID,
                    name:response.data.instructor[0].name,
                    email:response.data.instructor[0].email,
                    password:response.data.instructor[0].password
                })


            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h2>Update</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Instructor ID"
                                   value={this.state.instructorID}
                                   onChange={this.onChangeID}
                                   disabled
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

                    <button type="submit" className="btn btn-success">Update Details</button>

                </form>

            </div>

        );
    }
}