import React,{useState} from 'react'


function Myhomepage() {
    const [statevariable, statefunction]=useState(50)

    const mychangevalue = ()=>{
        
        statefunction(100)
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col mt-3'>
                    <div className="card mb-3 shadow bg-success text-white">
                        <div className="card-body">
                            <span className="card-title h4">Total:</span>
                            <span className='h3 c-float' onClick={mychangevalue}>{statevariable}</span>
                        </div>
                    </div>
                </div>
                <div className='col mt-3'>
                    <div className="card mb-3 shadow bg-warning text-white">
                        <div className="card-body">
                            <span className="card-title h4">Total:</span>
                            <span className='h3 c-float'>874524</span>
                        </div>
                    </div>
                </div>
                <div className='col mt-3'>
                    <div className="card mb-3 shadow bg-info text-white">
                        <div className="card-body">
                            <span className="card-title h4">Total:</span>
                            <span className='h3 c-float'>874524</span>
                        </div>
                    </div>
                </div>
                <div className='col mt-3'>
                    <div className="card mb-3 shadow bg-primary text-white">
                        <div className="card-body">
                            <span className="card-title h4">Total:</span>
                            <span className='h3 c-float'>874524</span>
                        </div>
                    </div>
                </div>
                <div className='col mt-3'>
                    <div className="card mb-3 shadow bg-danger text-white">
                        <div className="card-body">
                            <span className="card-title h4">Total:</span>
                            <span className='h3 c-float'>874524</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myhomepage