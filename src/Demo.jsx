import React from 'react'
import {useState,useEffect}from'react'
import Home from './Home';

function Demo() {
   const[timeout,setTimeout]=useState(0);
   const[enter,setEnter]=useState(false);
  
   useEffect(()=>{
     setInterval(() => {
     setEnter(true);
   }, 2000);
   },[timeout])
 


    return (
        <div>
         {!enter?<div class="ttt">Loading...</div>:<div><Home/></div>}   
        
        </div>
    )
}

export default Demo
