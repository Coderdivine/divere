import axios from 'axios';
import React,{useState,useEffect,useContext} from 'react';
import './App.css';
import {create} from "./App";
import {createe} from "./App";

function Backend() {
  //const [order]=useContext(createe);

  const {contact,order}=useContext(create);

      const Person=contact;
     const orrder=order;
      
   
    const orderss= orrder && orrder.map(order=><div class="order">
      <td><strong>{order.name}</strong></td>
      <td><strong>{order.total}</strong></td>
      <td><strong>{order.address}</strong></td>
      <td><strong>{order.num}</strong></td>
      <td><strong>{order.lastname}</strong></td>
      <td><strong>{order.names.des}</strong></td>
      <td> <strong>{order.names.map(i=><div class="names"><small><ol><li>{i.name}</li></ol></small></div>)}</strong></td>
      </div>
      )
    const regs= Person && Person.map(reg=><div><div class="small-container cart-page">
    <table>
    <tr>
      <td>
        <div class="cart-info">
          
               <div>
               <div class="price">
          
          <strong>{reg.username}</strong>
          </div>
         
           </div></div>
           
      </td>
      <td><strong>{reg.email}</strong></td>
      <td><strong>{reg.password}</strong></td>
    </tr>
    <tr>
    <td>
    
           </td></tr></table></div></div>)
    const[far,setFar]=useState(true);
    return (
        <div>
            <div className="popss">
            
            <div className="ad-btn"><button className="a-btn" onClick={(e)=>setFar(false)}>Orders</button><button className="a-btn" onClick={(e)=>setFar(true)}>Registered</button></div>
           <div>
              {!far?<div> <div class="small-container cart-page">
    <table>
    <tr>
      <th>Products</th>
      <th>t.Price</th>
      <th>Address</th>
      <th>num</th>
      <th>Lastname</th>

    </tr>
    
    </table></div> <div class="small-container cart-page">
    <table>
    <tr> 
    {orderss} </tr>
    <tr>
    <td>
    
           </td></tr></table></div>
          </div>
    :<div>  <div class="small-container cart-page">
    <table>
    <tr>
      <th>Name</th>
      <th>Gmail</th>
      <th>Password</th>
    </tr>
    
    </table></div>
      
          
  {regs}
       
        </div>} 
           </div>
           
           </div>
     
   
        </div>
    );
};

export default Backend;
