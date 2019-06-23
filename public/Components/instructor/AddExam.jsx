import React,{Component} from 'react';
import axios from'axios';


export default class AddExam extends Component{
    constructor(props){
        super(props);

        this.state={
            examID:'',
            moduleName:'',
            moduleCode:'',
            examDay:''
        }

        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeID=this.onChangeID.bind(this);
        this.onChangeModuleName=this.onChangeModuleName.bind(this);
        this.onChangeModuleCode=this.onChangeModuleCode.bind(this);
        this.onChangeExamDay=this.onChangeExamDay.bind(this);


    }
    onChangeID(e){
        this.setState({
            examID:e.target.value,
        });
    }

    onChangeModuleName(e){
        this.setState({
            moduleName:e.target.value,
        });
    }

    onChangeModuleCode(e){
        this.setState({
            moduleCode:e.target.value,
        });
    }
    onChangeExamDay(e){
        this.setState({
            examDay:e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();

        const new_Exam={
            examID:this.state.examID,
            moduleName:this.state.moduleName,
            moduleCode:this.state.moduleCode,
            examDay:this.state.examDay
        }

        axios.post('/api/exams/add',new_Exam)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data}));


        this.setState({
            examID:'',
            moduleName:'',
            moduleCode:'',
            examDay:''
        })

    }





    render() {
        return(
            <div>
                <h2 align="center">Add Exam</h2> <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Exam ID"
                                   value={this.state.examID}
                                   onChange={this.onChangeID}
                            />
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Module Name"
                                   value={this.state.moduleName}
                                   onChange={this.onChangeModuleName}
                            />
                        </div>
                    </div><br/>

                    <div className="row">
                        <div className=" col-md-6">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Module Code"
                                   value={this.state.moduleCode}
                                   onChange={this.onChangeModuleCode}
                            />
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="Date"
                                   className="form-control"
                                   placeholder="Exam Date"
                                   value={this.state.examDay}
                                   onChange={this.onChangeExamDay}
                            />
                        </div>
                    </div><br/>

                    <button type="submit" className="btn btn-success">Add Exam</button>

                </form>
            </div>
        );
    }
}