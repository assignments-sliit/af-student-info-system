import React from 'react';
import {render} from 'react-dom' ;

import 'bootstrap/dist/css/bootstrap.min.css';


//import App from './App';

//render(<App/>,document.getElementById('app'));

const name='manoj kumar';
const element=<h1>Hello {name}</h1>;


    render(element,document.getElementById('app'));