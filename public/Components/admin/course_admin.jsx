import React,{Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Instructor = props =>(

        <option>{props.instructor.instructorID}</option>



);
export default class course_admin extends Component{

    constructor(props){
        super(props);

        this.state={
            courseCode:'',
            courseName:'',
            courseType:'',
            instructor:'',
            instrType:[]
        }

        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeID=this.onChangeID.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeType=this.onChangeType.bind(this);
        this.onChangeInstr=this.onChangeInstr.bind(this);
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
    onChangeInstr(e){
        this.setState({
            instructor:e.target.value
        });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/instructors/get-all')
            .then(response =>{
                this.setState({
                    instrType:response.data
                })
            }).catch(function (error) {
            console.log(error);
        });
    }
    instructorList(){
        return this.state.instrType.map(function (currentInstructors,i) {
            return <Instructor instructor={currentInstructors} key={i}/>
        });
    }
    onSubmit(e){
       e.preventDefault();

       const Course={
           courseCode:this.state.courseCode,
           courseName:this.state.courseName,
           courseType:this.state.courseType,
           instructor:this.state.instructor
       }

       axios.post('http://localhost:5000/api/courses/add-course',Course)
           .then(res => console.log(res.data))
           .catch(err => this.setState({ errors: err.response.data}));

       alert('Course Insert Successfully');
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
                  <div className="row">
                      <div className="form-group mx-sm-3 mb-2">
                          <select className="form-control"
                                  value={this.state.instructor}
                                  onChange={this.onChangeInstr}
                          >
                              <option> select Instructor ID</option>
                              {this.instructorList()}
                          </select>
                      </div>
                  </div>


                  <button type="submit" className="btn btn-success">Add Course</button>

              </form>
          </div>

          </div>
        );
    }
}