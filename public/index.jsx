import React from 'react';
import {render} from 'react-dom' ;
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Components/header';
import AdminHeader from './Components/admin/admin_header';
import 'bootstrap/dist/css/bootstrap.min.css';


const name='Student Information System';
const element=<h1 align="center" className="heading"><b>{name}</b></h1>;

    render(<div>
        <Router>
        <h1>{element}</h1> <br/>
         <Switch>
            <Route exact path="/admin_header" component={AdminHeader}/>
        <Route exact path="/a" component={Header}/>
         </Switch>
        </Router>
    </div>,document.getElementById('app'));
