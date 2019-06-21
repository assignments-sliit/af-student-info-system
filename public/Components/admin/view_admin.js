import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Admin = props =>(
    <tr>
        <td>{props.admin.adminID}</td>
        <td>{props.admin.name}</td>
        <td>{props.admin.email}</td>

        <td>
            <Link to={"/std/"+props.admin.adminID}>edit</Link>
        </td>
    </tr>
);

export  default class view_admins extends Component{

    constructor(props){
        super(props);

        this.state={
            admins:[],
        }

    }

    componentDidMount() {
        axios.get('api/admins/get-all')
            .then(response =>{
                this.setState({
                    admins:response.data
                })
            }).catch(function (error) {
            console.log(error);
        });
    }

    adminList(){
        return this.state.admins.map(function (currentAdmin,i) {
            return <Admin admin={currentAdmin} key={i}/>
        });
    }



    render() {
        return(
            <div>
                <h3 align="center">View admin</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Admin ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action's</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.adminList()}
                    </tbody>

                </table>
            </div>
        );
    }

};


