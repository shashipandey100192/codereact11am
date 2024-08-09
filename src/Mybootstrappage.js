import React from 'react'
import { FcCurrencyExchange,FcHome } from "react-icons/fc";


function Mybootstrappage() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 text-center border'>
                <h1> use of bootstrap</h1>
                <button className='btn btn-success'>submit</button>
                <h1><FcCurrencyExchange></FcCurrencyExchange></h1>
                <p className='h1'><FcHome></FcHome></p>

            </div>
        </div>
    </div>
  )
}

export default Mybootstrappage