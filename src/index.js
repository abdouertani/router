import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './comps/Body';
import Navbar from './comps/Navbar';
import {BrowserRouter , } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <BrowserRouter>
        <Navbar/>
      <div > 
            <Body  />
       </div>
   </BrowserRouter>
  
);


