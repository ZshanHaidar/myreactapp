import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Heading from "./Heading";

const pic1 = "https://placekitten.com/250/360";
const pic2 = "https://placekitten.com/200/360";
const pic3 = "https://placekitten.com/300/360";
const myname = "Zeeshan"

const heading={
  color: '#f1919f',
  textAlign: 'center',
textShadow:'0px 2px 4px #ffe9c5',
  fontWeight: 'bold',
  margin: '20px',
  fontFamily: '"Montserrat", sans-serif',

}

const Challenge1 =()=>{
    return(
<>
  <Heading></Heading>


  <h1 style={heading}>My Name is {myname}</h1>
  <div className="img_div">
  <img src={pic1} alt="catepic"/>
  <img src={pic2} />
  <img src={pic3} />
  </div>



</>)}
export default Challenge1