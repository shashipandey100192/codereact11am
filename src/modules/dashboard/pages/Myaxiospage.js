import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Myaxiospage() {

    const [x,y]=useState([])

    const myfunc = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((d)=>{
            console.log(d.data);
            y(d.data);
        })     

    }
useEffect(()=>{
    myfunc();
},[])



  return (
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-12'>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">phone</th>
              <th scope="col">email</th>
              <th scope="col">website</th>
              <th scope="col">city</th>
              <th scope="col">zipcode</th>
              <th scope="col">company name</th>
            </tr>
          </thead>
          <tbody>
            {x.map((d) => {
              return (
                <tr key={d.id}>
                  <th scope="row">{d.id}</th>
                  <td>{d.name}</td>
                  <td>{d.phone}</td>
                  <td>{d.email}</td>
                  <td>{d.website}</td>
                  <td>{d.address.city}</td>
                  <td>{d.address.zipcode}</td>
                  <td>{d.company.name}</td>
                  <td>
                    <Link to="" className='btn btn-sm btn-danger'>Del</Link>
                    <Link to={"detailspage/"+d.id} className='btn btn-sm btn-info'>View</Link>
                    <Link to="" className='btn btn-sm btn-warning'>Edit</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Myaxiospage