import React,{Component} from 'react';


export default class instr_login extends Component {



    render(){
        return(
          <div>
              <h2 align="center">instr login</h2>
              <div>
                  <form>
                      <div className="form-group col-7">
                          <label htmlFor="exampleInputEmail1"><b>Instructor ID</b></label>
                          <input type="email" className="form-control" id="exampleInputEmail1"
                                 aria-describedby="emailHelp" placeholder="Instructor ID"/>
                              <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                  anyone else.
                              </small>
                      </div>
                      <div className="form-group col-7">
                          <label htmlFor="exampleInputPassword1"><b>Password</b></label>
                          <input type="password" className="form-control" id="exampleInputPassword1"
                                 placeholder="Password"/>
                      </div>

                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
              </div>
          </div>
        );
    }
}