import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Myloginpage from './modules/auth/Myloginpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Myerror from './modules/shares/Myerror';
import Myhomepage from './modules/dashboard/Myhomepage';
import Contactpage from './modules/dashboard/pages/Contactpage';
import Servicepage from './modules/dashboard/pages/Servicepage';
import Myaxiospage from './modules/dashboard/pages/Myaxiospage';
import Detailspage from './modules/dashboard/pages/Detailspage';
import Parentpage from './modules/dashboard/pages/Parentpage';
import Chartspage from './modules/dashboard/pages/Chartspage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Myloginpage/>}></Route>
          <Route path='registor' element={<Myregistorpage/>}></Route>
          <Route path='dashboard' element={<Mylandingpage/>}>
            <Route path='' element={<Myhomepage/>}/>
            <Route path='contact' element={<Contactpage/>}/>
            <Route path='service' element={<Servicepage/>}/>
            <Route path='myaxios' element={<Myaxiospage/>}/>
            <Route path='myprops' element={<Parentpage/>}/>
            <Route path='mygraph' element={<Chartspage/>}/>
            <Route path='myaxios/detailspage/:id' element={<Detailspage/>}/>
              
            <Route path='*' element={<Myerror/>}></Route>
          
          </Route>
          <Route path='*' element={<Myerror/>}></Route>


        </Routes>
      </BrowserRouter>
   
  </React.StrictMode>
);

