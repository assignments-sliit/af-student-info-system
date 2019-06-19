import React from 'react';
import {render} from 'react-dom' ;
import Header from './Components/header';

import 'bootstrap/dist/css/bootstrap.min.css';


//import App from './App';

//render(<App/>,document.getElementById('app'));

const name='manoj kumar';
const element=<h1>Hello {name}</h1>;


    render(<div>
        <h1>{element}</h1> <br/>
        <Header/>
    </div>,document.getElementById('app'));
