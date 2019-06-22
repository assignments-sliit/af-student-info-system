import React,{Component} from 'react';

export default class admin_login extends  Component{


    render(){
        return(
          <div>
              <h2 align="center">ADMIN LOGIN</h2> <br/>
              <div>
                  <form>
                      <div className="form-group col-7">
                          <label htmlFor="exampleInputEmail1"><b>Admin ID</b></label>
                          <input type="email" className="form-control" id="exampleInputEmail1"
                                 aria-describedby="emailHelp" placeholder="Admin ID"/>

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