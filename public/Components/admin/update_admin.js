import React,{Component} from'react';
import axios from 'axios';
export default class update_admin extends Component{

   constructor(props){
       super(props);

       this.state={
           adminID:'',
           name:'',
           email:'',
           password:'',
           tv:[]
       }
       this.onSubmit=this.onSubmit.bind(this);
       this.onChangeID=this.onChangeID.bind(this);
       this.onChangeName=this.onChangeName.bind(this);
       this.onChangeEmail=this.onChangeEmail.bind(this);
       this.onChangePassword=this.onChangePassword.bind(this);

   }
    onChangeID(e){
        this.setState({
            adminID:e.target.value,
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

        const new_admin = {

            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        axios.put('http://localhost:5000/api/admins/update/'+this.props.match.params.id,new_admin)
            .then(res => console.log(res.data));

        alert('Admin Update successfully');

    }

   componentDidMount() {
       axios.get('http://localhost:5000/api/admins/get/'+this.props.match.params.id)
           .then(response => {
               this.setState({
                    adminID:response.data.admin[0].adminID,
                    name:response.data.admin[0].name,
                    email:response.data.admin[0].email,
                    password:response.data.admin[0].password
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
                        <h2>update</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Admin ID"
                                       value={this.state.adminID}
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