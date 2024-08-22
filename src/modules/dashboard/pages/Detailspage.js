import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detailspage() {
    const {id} = useParams();
    console.log(id);
    const [single,setseingle]=useState({})
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((d)=>{
            console.log(d.data);
            setseingle(d.data);
        },)

    },[])


  return (
    <div>
        <h1>Detailspage of Current User</h1>

        <h3>{single.id}</h3>
        <h3>{single.name}</h3>
        <h3>{single.email}</h3>
        <h3>{single.username}</h3>


    </div>

  )
}

export default Detailspage