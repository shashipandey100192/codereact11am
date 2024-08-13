import React from 'react'

function Myregistorpage() {
  return (
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-md-8 bg-warning p-3 rounded shadow'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div class="mb-3">
                          <p className='h2'>Welcome to Registor Page</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">FullName</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">Phone No</label>
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">DOB</label>
                            <input type="date" class="form-control" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">Course</label>
                           <select className='form-select'>
                            <option>mern</option>
                            <option>mean</option>
                            <option>java</option>
                           </select>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" />
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div class="mb-3">
                           <button className='btn btn-success c-btn'>Registor Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

  )
}

export default Myregistorpage