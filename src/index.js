import React from 'react';
import ReactDOM from 'react-dom/client';
import Aboutpage, { About, Aboutone } from './About';
import "./style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Aboutpage/>
<About/>
<Aboutone/>
   
  </React.StrictMode>
);

