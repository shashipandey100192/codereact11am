import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mymorning from '../theams/Mymorning';
import Myevening from '../theams/Myevening';
import Mynight from '../theams/Mynight';

function Featurespage() {
    const notify = () => toast.success("Wow so easy !");
    const [x, y] = useState('this is defalt value of state');

    const changevalue = (e) => {
        y(e.target.value);
        // toast.success(e.target.value);
        if (e.target.value === "morning") {
            toast.success(e.target.value);
        }
        else if (e.target.value === "evening") {
            toast.warning(e.target.value);
        }
        else if (e.target.value === "night") {
            toast.info(e.target.value);
        }
        else {
            toast(e.target.value);
        }

    }

    return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <button onClick={notify} className='btn btn-success'>Notify !</button>
                    <ToastContainer
                        position="top-left"
                    />

                    <select onChange={changevalue}>
                        <option>select status</option>
                        <option>morning</option>
                        <option>evening</option>
                        <option>night</option>
                    </select>

                    {x === "morning" ? <Mymorning /> : x === "evening" ? <Myevening /> : x === "night" ? <Mynight /> : <h1>default</h1>}



                </div>
            </div>
        </div>
    )
}

export default Featurespage