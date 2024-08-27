import React from 'react';
import { useForm } from 'react-hook-form';

function Myregistorpage() {
    const {register,handleSubmit,formState: { errors }}=useForm()

    const mysubmit = (myform)=>{
        console.log(myform);
    }


  return (
    <form onSubmit={handleSubmit(mysubmit)}>
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-md-8 bg-warning p-3 rounded shadow'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div className="mb-3">
                          <p className='h2'>Welcome to Registor Page</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" {...register("email",{required:true})}/>
                            {errors.email && <p className='text-danger'>email is requried</p>}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">FullName</label>
                            <input type="text" className="form-control" {...register("fullname",{required:true,minLength:5})}/>
                            {/* {errors.fullname && <p className='text-danger'>fullname is requried</p>} */}

                            {errors.fullname?.type==="required" && <p className='text-danger'>fullname is requried</p>}
                            {errors.fullname?.type==="minLength" && <p className='text-info'>minimum 5 length is required</p>}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Phone No</label>
                            <input type="text" className="form-control" {...register("phone",{required:true})}/>
                            {errors.phone && <p className='text-danger'>phone is requried</p>}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">DOB</label>
                            <input type="date" className="form-control" {...register("dob",{required:true})}/>
                            {errors.dob && <p className='text-danger'>dob is requried</p>}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Course</label>
                           <select className='form-select' {...register("course",{required:true})}>
                            <option>mern</option>
                            <option>mean</option>
                            <option>java</option>
                           </select>
                           {errors.course && <p className='text-danger'>course is requried</p>}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" {...register("pass",{required:true})}/>
                            {errors.pass && <p className='text-danger'>password is requried</p>}
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div className="mb-3">
                           <button type="submit" className='btn btn-success c-btn'>Registor Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</form>

  )
}

export default Myregistorpage