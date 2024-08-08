import { Fragment } from "react"
import xyz from './myphotos/img3.jpg'; 
const myimg = "https://img.pikbest.com/origin/09/08/90/00KpIkbEsTnFx.jpg!f305cw";

function Aboutpage()
{
    return <h1>this is heading</h1>
}
export default Aboutpage



export function About()
{
    return(<h2>this is heading two</h2>)
}


const a = 80;
let name="ravi";
let myele = <h1>this is my element  here...</h1>
const age=65;
export function Aboutone()
{
    return(
        <Fragment>
            <h1>this is heading one {a}</h1>
            <p>this is text</p>
            <h3>Name is:{name}</h3>
            <h1>{60+80}Total number</h1>
            {myele}
            {<About/>}
            <h4>{age>30 ? "overage" : "underage"}</h4>
            <h4>{age>30 ? <h2 className='first'>over</h2> : <Aboutpage/>}</h4>
            <h1>{age>60 ? "first" : age>=40 ? "second" : age>=20 ? "third" : "pass"}</h1>
            <h2 style={{color:"red",backgroundColor:"orange",fontSize:`${age}px`}}>this is inline css </h2>
            <hr/>

            <h1>display image from public folder </h1>
                <img src="images/img2.jpg" width="200" alt="imagesdfkh"/>
            <h1>display image from src folder</h1>
                <img src={xyz} alt="this is src img" width="200"/>
            <h1>CDN online </h1>
                <img src={myimg} alt="skkdhfjks" width="200"/>

        </Fragment>
        
    )
}


