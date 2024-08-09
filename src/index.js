import React from 'react';
import ReactDOM from 'react-dom/client';
import Aboutpage, { About, Aboutone } from './About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Mybootstrappage from './Mybootstrappage';
import Myreactbootstrappage from './Myreactbootstrappage';
import Mymuipage from './Mymuipage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Aboutpage/>
<About/>
<Aboutone/>
<Mybootstrappage/>
<Myreactbootstrappage></Myreactbootstrappage>
<Mymuipage/>
   
  </React.StrictMode>
);

