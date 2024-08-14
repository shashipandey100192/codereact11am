import React from 'react'
import Mysidebar from '../shares/Mysidebar'
import Mynavbar from '../shares/Mynavbar'
import Myhomepage from './Myhomepage'

function Mylandingpage() {
  return (
   <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-2 g-0'>
       <Mysidebar/>
      </div>
      <div className='col-md-10 g-0'>
       <Mynavbar/>
        <div className='page'>
          <Myhomepage/>

        </div>

      </div>
    </div>
   </div>
  )
}

export default Mylandingpage