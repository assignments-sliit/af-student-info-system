import React from 'react';
import {render} from 'react-dom' ;
import Header from './Components/admin/admin_header';

import 'bootstrap/dist/css/bootstrap.min.css';


const name='Student Information System';
const element=<h1 align="center" className="heading"><b>{name}</b></h1>;

    render(<div>
        <h1>{element}</h1> <br/>
        <Header/>

    </div>,document.getElementById('app'));
