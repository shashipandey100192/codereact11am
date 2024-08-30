import React from 'react'
import Myclasspage from './Myclasspage'

function Subchildpage(props) {
    const myred = "red";
  return (
    <div className='p-3 bg-primary'>
            <h2>Subchildpage</h2>
            <h3>{props.username}</h3>
            <select>
            {props.datalist.map((d)=>{
                return(
                    <option>{d.name}</option>
                )
            })}
            </select>
            <select>
            {props.datalist.map((d)=>{
                return(
                    <option>{d.age}</option>
                )
            })}
            </select>
            <select>
            {props.datalist.map((d)=>{
                return(
                    <option>{d.phone}</option>
                )
            })}
            </select>

            <Myclasspage mycolor={myred}></Myclasspage>
        
        </div>
  )
}

export default Subchildpage