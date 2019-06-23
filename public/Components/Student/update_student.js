import React,{Component} from'react';
import axios from "axios";

export default class update_student extends Component{

    constructor(props){
        super(props);
        this.state = {
            studentID : '',
            name : '',
            email : '',
            password : ''
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

        const new_student = {

            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios.put('http://localhost:5000/api/students/update-student/'+this.props.match.params.id,new_student)
            .then(res => console.log(res.data));
        this.setState({
            studentID : '',
            name : '',
            email : '',
            password : ''
        });
        alert('Student Update successfully');

   }


    componentDidMount() {
        axios.get('http://localhost:5000/api/students/get-student/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    studentID:response.data.student[0].studentID,
                    name:response.data.student[0].name,
                    email:response.data.student[0].email,
                    password:response.data.student[0].password
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
              <h3 align="center">Student Update</h3><br/>
             <div>
                 <form onSubmit={this.onSubmit}>
                     <div className="row">
                         <div className="col-md-6">
                             <input type="text"
                                    className="form-control"
                                    placeholder="Student ID"
                                    value={this.state.studentID}
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

                     <button type="submit" className="btn btn-success">UPDATE</button>

                 </form>

             </div>

          </div>
        );
    }
}