import React,{Component} from 'react';


export default class course_admin extends Component{

    constructor(props){
        super(props);

        this.state={
            courseCode:'',
            courseName:'',
            courseType:''
        }

        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeID=this.onChangeID.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeType=this.onChangeType.bind(this);
    }

    onChangeID(e){
        this.setState({
            courseCode:e.target.value
        });
    }

    onChangeName(e){
        this.setState({
            courseName:e.target.value
        });
    }

    onChangeType(e){
        this.setState({
            courseType:e.target.value
        });
    }

    onSubmit(e){
       e.preventDefault();

       const Course={
           courseCode:this.state.courseCode,
           courseName:this.state.courseName,
           courseType:this.state.courseType
       }
    }


    render() {
        return(
          <div>
              <h3 align="center">Course</h3> <br/>
          <div>
              <form onSubmit={this.onSubmit}>
                  <div className="row">
                      <div className="col-md-6">
                          <input type="text"
                                 className="form-control"
                                 placeholder="Course Id"
                                 value={this.state.courseCode}
                                 onChange={this.onChangeID}
                          />
                      </div>
                  </div><br/>
                  <div className="row">
                      <div className="col-md-6">
                          <input type="text"
                                 className="form-control"
                                 placeholder=" Course Name"
                                 value={this.state.courseName}
                                 onChange={this.onChangeName}
                          />
                      </div>
                  </div><br/>

                  <div className="row">
                      <div className=" col-md-6">
                          <input type="text"
                                 className="form-control"

                                 placeholder="Course Type"
                                 value={this.state.courseType}
                                 onChange={this.onChangeType}
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