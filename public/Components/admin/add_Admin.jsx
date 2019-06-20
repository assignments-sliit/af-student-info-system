import React,{Component} from 'react';


export default class add_Admin extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render() {
        return(
          <div>
              <h2>ADD Admin</h2> <br/>
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
        );
    }
}