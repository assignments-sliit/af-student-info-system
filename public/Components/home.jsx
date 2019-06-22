import React ,{Component} from 'react';
import std1 from '../../image/home1.jpg';
import std2 from '../../image/home2.jpg';
import std3 from '../../image/home3.jpg';

export default class home extends Component{

    render() {
        return(
            <div>
                <div>
                   <home>home</home>
                </div>

                <div className="card bg-dark text-white">
                    <img src={std2} className="card-img" style={{height:600}} alt="..."/>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                </div>

            </div>
        )
    }
}
