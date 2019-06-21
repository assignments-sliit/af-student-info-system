import React from 'react';
import {render} from 'react-dom' ;
import Header from './Components/header';

import 'bootstrap/dist/css/bootstrap.min.css';



//import App from './App';

//render(<App/>,document.getElementById('app'));

const name='Students Information Systems';
const element=<h1 align="center">{name}</h1>;




    render(<div>
        <h1>{element}</h1> <br/>
        <Header/>
    </div>,document.getElementById('app'));
