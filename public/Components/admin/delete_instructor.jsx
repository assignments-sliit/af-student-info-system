import React,{Component} from'react';
import axios from "axios";


export default class delete_instructor extends Component{


        componentDidMount() {
            axios.delete('http://localhost:5000/api/instructors/delete-instructor/'+this.props.match.params.id)
                .then(res => console.log(res.data));

            alert('Instructor Delete successfully');
        }

        render() {
            return(
              <div>
                  <h5>Instructor Delete Successfully</h5>
              </div>
            );
        }


}