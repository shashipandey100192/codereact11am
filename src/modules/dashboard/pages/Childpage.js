import React from 'react'
import Subchildpage from './Subchildpage'

function Childpage(props) {
  return (
    <div className='bg-danger p-5'>
        <h1>Childpage{props.codesquadz}</h1>
        <button type='button' onClick={props.myfunc}>click to view msg</button>
        <Subchildpage username={props.codesquadz} datalist={props.mydata}></Subchildpage>
    </div>
  )
}

export default Childpage