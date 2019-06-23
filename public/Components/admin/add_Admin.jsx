import React,{Component} from 'react';
import axios from'axios';


export default class add_Admin extends Component{
    constructor(props){
        super(props);

        this.state={
           adminID:'',
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

    onSubmit(e){
        e.preventDefault();

        const new_admin={
            adminID:this.state.adminID,
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('/api/admins/add',new_admin)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data}));


        this.setState({
            adminID:'',
            name:'',
            email:'',
            password:''
        })

    }





    render() {
        return(
          <div>
              <h2 align="center">Add an Admin</h2> <br/>
              <form onSubmit={this.onSubmit}>
                  <div className="row">
                      <div className="col-md-6">
                          <input type="text"
                                 className="form-control"
                                 placeholder="Admin ID"
                                 value={this.state.adminID}
                                 onChange={this.onChangeID}
                          />
                      </div>
                  </div><br/>
                  <div className="row">
                      <div className="col-md-6">
                          <input type="text"
                                 className="form-control"
                                 placeholder="Admin Name"
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
                                 placeholder="Email Address"
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

                  <button type="submit" className="btn btn-success">Add Admin</button>

              </form>
          </div>
        );
    }
}