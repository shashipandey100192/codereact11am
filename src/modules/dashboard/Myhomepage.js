import React, { Fragment, useState } from 'react'
import { users } from '../../Mydata'


function Myhomepage() {
    const [statevariable, statefunction] = useState(50)

    const mychangevalue = () => {

        statefunction(100)
    }

    return (
        <Fragment>
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
            <div className='cotainer-fluid'>
                <div className='row'>

                {users.map((d)=>{
                    return(
                        <div className='col-md-3'>
                        <div className={d.sno>=8 ? "card mb-3 shadow bg-info text-white" : d.sno>=4 ? "card mb-3 shadow bg-warning text-white" : "card mb-3 shadow bg-danger text-warning"}>
                            <div className="card-body">
                                <h3 className={d.sno>=5 ? "text-danger" : ""}>sno: {d.sno}</h3>
                                <h4>Name: {d.name}</h4>
                                <h4>Gender: {d.gender}</h4>
                                <h5>DOB: {d.dob}</h5>
                                <h6>Email Id: {d.email}</h6>
                            </div>
                        </div>
                    </div>
                    )
                })}


                   
                </div>
            </div>
        </Fragment>

    )
}

export default Myhomepage