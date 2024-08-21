import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Servicepage() {

  const [x, y] = useState([])

  const mygetdata = () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((d) => {
      // console.log(d.json());
      return d.json();
    }).then((mydata) => {
      console.log(mydata);
      y(mydata)
    })
  }

  useEffect(()=>{
    mygetdata();
  },[])


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">userId</th>
                <th scope="col">title</th>
                <th scope="col">body text</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {x.map((d) => {
                return (
                  <tr>
                    <th scope="row">{d.id}</th>
                    <td>{d.userId}</td>
                    <td>{d.title}</td>
                    <td>{d.body}</td>
                    <td>
                      <Link to="" className='btn btn-sm btn-danger'>Del</Link>
                      <Link to="" className='btn btn-sm btn-info'>View</Link>
                      <Link to="" className='btn btn-sm btn-warning'>Edit</Link>
                    </td>
                  </tr>
                )
              })}



            </tbody>
          </table>
        </div>
      </div>
      <input type='button' value="fetchdata from api" onClick={mygetdata} />



    </div>
  )
}

export default Servicepage
