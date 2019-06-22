import React,{Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Exam = props =>(
    <tr>
        <td>{props.exam.examID}</td>
        <td>{props.exam.moduleName}</td>
        <td>{props.exam.examDay}</td>


    </tr>
);

export default class ViewExamStd extends Component{


    constructor(props){
        super(props);

        this.state={
            exams:[],
        }

    }

    componentDidMount() {
        axios.get('api/exams/get-all')
            .then(response =>{
                this.setState({
                    exams:response.data
                })
            }).catch(function (error) {
            console.log(error);
        });
    }

    examList(){
        return this.state.exams.map(function (currentExam,i) {
            return <Exam exam={currentExam} key={i}/>
        });
    }



    render() {
        return(
            <div>
                <h3 align="center">View Exams</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Exam ID</th>
                        <th>Module Name</th>
                        <th>Exam date</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.examList()}
                    </tbody>

                </table>
            </div>
        );
    }


}