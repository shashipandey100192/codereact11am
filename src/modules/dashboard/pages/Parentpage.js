import React from 'react'
import Childpage from './Childpage'
const name="ravi";
const xyz =()=>{
    alert("welcome to react props");
}

const students=[
    {
        name:"kumar",
        age:20,
        phone:'87515451514',
    },
    {
        name:"mohan",
        age:25,
        phone:'87515451514',
    },
    {
        name:"rohit",
        age:21,
        phone:'87515451514',
    },
    {
        name:"pooja",
        age:26,
        phone:'87515451514',
    },
    {
        name:"pandey",
        age:24,
        phone:'87515451514',
    }
];


function Parentpage() {
  return (
   <div className='container-fluid bg-warning'>
    <div className='row'>
        <div className='col-12 bg-success p-5'>
            <h1>this is parent element {name}</h1>
            <Childpage codesquadz={name} myfunc={xyz} mydata={students}></Childpage>
        </div>
    </div>
   </div>
  )
}

export default Parentpage