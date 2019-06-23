import React,{Component}from'react';
import axios from "axios";


export default class delete_admin extends Component{

   componentDidMount() {
       axios.delete('http://localhost:5000/api/admins/delete/'+this.props.match.params.id)
           .then(res => console.log(res.data));

       alert('Admin Delete successfully');
   }

   render() {
       return(
         <div>
             <h5>delete successfully</h5>
         </div>
       );
   }
}