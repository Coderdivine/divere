
import React,{useState,toLowerCase as toLowerCase,useEffect,useContext, useRef} from 'react';
import "./App.css";
import {v4 as uuidv4} from 'uuid';
import {Axios} from "./contact";
import Homepage from "./Homepage";
import Person from "./Person";
import Select from "./Select";
import Admin from "./Admin";
import {PaystackButton} from 'react-paystack';
import {create} from "./App";





 export  const Bukka=()=>{
   const Product=[{name:"Bread",   img:"./img/breaddd.jpeg",   price: 220.00,   des:"",},{name:"Spaghetti Jollof",   img:"./img/IMG_20210620_112409.jpg", price:400.00, des:"",}, {name:"Beans and rice",  img:"./img/IMG_20210620_112600.jpg", price:600.00, des:"1 portion",},
   {name:"Plain Beans", img:"./img/plianbeans.png",price:240.00,des:"1 portion",},{name:"Jollof Rice", img:"./img/IMG_20210620_112207.jpg",price:400.00,des:"",},{name:"Coconut Rice", img:"./img/coc.jpeg",price:750.00,des:"",},{name:"Spaghetti Jollof", img:"./img/IMG_20210620_112409.jpg",price:350.00,des:"1 portion",} ,{name:"Assorted meat", img:"./img/assortedmeat.png",price:550.00,des:"",},{name:"Beef", img:"./img/beef.png",price:550.00,des:"",},{name:"Water(small)", img:"./img/water.jpeg",price:250.00,des:"",},{name:"Pet bottles", img:"./img/IMG_20210620_112641.jpg",price:360.00,des:"",},{name:"Jucice", img:"./img/jucie.jpeg",price:350.00,des:"",},{name:"Malt", img:"./img/IMG_20210620_112658.jpg",price:500.00,des:"can",},{name:"Ribena", img:"./img/ribena.png",price:600.00,des:"",},
   {name:"Lucozde", img:"./img/lucozade.png",price:600.00,des:"",},{name:"Ofada sauce", img:"./img/ofada.png",price:960.00,des:"",},
 ]
// const counter=localStorage.getItem('count')? localStorage.getItem('count'):0;
const {getone}=useContext(create);
 const[one,setOne]=useState();
 const[trigger,setTrigger]=useState(false);
const [send,setSend]=useState(false);
 const[count,setCount]=useState(0);
 useEffect(() => {
  const localcounter= localStorage.setItem('count',count.toString());
      if(localcounter){
          setCount(localcounter);
      }
      
   }, [count])
 useEffect((e) => {
  if(5==localStorage.getItem("count")){
    //e.preventDefault();
    setTrigger(true);
  }else{setTrigger(false)}
}, [trigger]);   

 const selected=(e)=>{
   e.preventDefault();
    localStorage.setItem("count",0);
    setTrigger(false);
 }
     
   
   
  const [searchitem,setSearchitem]=useState("");

   
   const productList= Product.filter((lists)=>{
     if(searchitem==""){return lists}else if(lists.name.toLowerCase().includes(searchitem.toLowerCase())){return lists}
   }).map(lists =><div >
     <div>
   <div class="small-container cart-page">
   <table>
   <tr>
   ...
   </tr>
   <tr>
   <td>
   <div class="cart-info">
     <img src={lists.img} alt={lists.name}/>
          <div>
          <div class="price">
     <p>{lists.name}</p>
     <small>{lists.name}</small>
     </div>
     <br/>
     <button class="btn-danger" onClick={(e)=>addtocart(lists)}>Add To Cart</button>
      </div></div>
      
   </td>
   <td>{lists.des}</td>
   <td>₦{lists.price}</td>
   </tr>
   <tr>
   <td>
   
      </td></tr></table></div></div>
   </div>);
    const addtocart=(lists)=>{
     setIncart([...incart,{...lists}]);
     localStorage.setItem('incart',JSON.stringify(incart));

      };
      const cartlists= localStorage.getItem('incart')?JSON.parse(localStorage.getItem('incart')):[]
  
   const removefromcart=(xxxdhd)=>{
     setIncart(incart.filter (lists=>lists !== xxxdhd))   
  
    };
    
 const[incart,setIncart]=useState(cartlists);
;
let totalone = 0;
incart.forEach((list)=>{
  totalone += list.price;
})
const addup= localStorage.getItem("percento")?JSON.parse(localStorage.getItem("percento")):300;
const subtotal= totalone + 300 + addup ;


  
  const Buy= async()=>{
    const request= {
      id:uuidv4(),
      name:"bukka",
      names:incart,
      address:localStorage.getItem('address'),
      num:localStorage.getItem('num'),
      lastname:localStorage.getItem('lastname'),
      total:subtotal
    }
    const res= await Axios.post("/orders",request).catch((err)=>{console.log(err)})
    if(res)getone() 
    console.log(request);
    setSend(true);
    setCount(count+1);
    localStorage.setItem('incart',[]);
   localStorage.setItem("count",count);
  setOne();   
  }  
  useEffect(()=>{
    getone();
  },[])
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(incart));
  },[incart]);
 
  const  carted= incart.map(lists =>
       <div>
       <div class="small-container cart-page">
    <table>
    <tr>
      <td>
        <div class="cart-info">
          <img src={lists.img} alt={lists.name}/>
               <div>
               <div class="price">
          <p>{lists.des}</p>
          <small>{lists.name}</small>
          </div>
          <br/>
          <button class="btn-danger" onClick={()=>removefromcart(lists)}>Remove</button>
           </div></div>
           
      </td>
      <td><input type="number" value="1" class="cart-quantity-price"/></td>
   <td>₦{lists.price}</td>
     
    </tr>
    <tr>
    <td>
    
           </td></tr></table></div>
          
    </div>
       
       );
       
       
       const[emaill,setEmaill]=useState("");
    
     
   const amount =subtotal;
    const email = emaill;
    const addd= localStorage.getItem("address");
    const namee=localStorage.getItem("lastname");
    const phone = localStorage.getItem("num");
    const  PublicKey = "pk_test_d53fe76a869cddc316efd23cee14429669489d15";
       const componentProps={
         email,
        amount,
         metadata:{
           addd,
           namee,
           phone,
           PublicKey,
           text:"Pay Now",
           onSuccess:(e)=>Buy(e),
           onClose:()=>alert("Please try again later")
         }
       }
       const [red,setRed]=useState(false);

      const Handle=(e)=>{
        e.preventDefault();
        setRed(true);
      };

     
      const Sand=(e)=>{
        e.preventDefault();
        setRed(false);
      };
      const[done,setDone]=useState(true);
      const handledone=(e)=>{
        setDone(false)
      }
    const[num,setNum]=useState(0);
      const[lastname,setLastname]=useState("");
 
  const mapfree=localStorage.getItem("percento")*localStorage.getItem("count");
 const freemap=mapfree-350;
      const submit=(e)=>{
           e.preventDefault();
          localStorage.setItem('lastname',lastname);
          localStorage.setItem('num',num);
  if(localStorage.getItem("address")){
       if(localStorage.getItem('lastname',)){
         if(localStorage.getItem('num')){
           if(!email){
       alert("Please Enter your Email")
           }else{
            setOne(<button class="btn" onClick={(e)=>Buy(e)}>Buy</button>);
  
           }
        }else{  e.preventDefault();
          alert("Please enter your number")}
          }else{ e.preventDefault();
            alert("Please enter your Last Name")}
        }else{
          e.preventDefault();
        alert("please enter your your address before order");
        }
       
      };
   




return(<div>
   {red ?<div><button onClick={(e)=>Sand(e)} className="addr">Back</button><div><div>
       <div class="small-container cart-page">
    <table>
    <tr>
      <th>products</th>
      <th>Quantity</th>
      <th>Subtotal</th>
    </tr>
    
    </table></div>{carted}
           <div class="total-price">
    <table>
      <tr>
      <td>Subtotal</td>
      <td>₦{totalone}</td>
      </tr>
      <tr>
      <td>Fee</td>
      <td>₦300</td>
      </tr>
      <tr>
      <td>Total</td>
      <td>₦{subtotal}</td>
      </tr>
    </table>
  
    </div>
    <div className="checkout" onClick={(e)=>handledone(e)}>{<div></div>}
      <button className="a-btn">Checkout</button>
      {!done?<div><div>

        <div class="account-page">
  <div class="container">
     
<form id="Regform" onSubmit={(e)=>submit(e)} >
<input type="name" id="password" placeholder="Last Name"  onChange={(e)=>setLastname(e.target.value)} />
<input type="phone" id="conpass" placeholder="Phone Number" onChange={(e)=>setNum(e.target.value)}  />
<input type="email" id="email" placeholder="Email" onChange={(e)=>setEmaill(e.target.value)}  />

<button type="submit" class="btn" >Procede</button>
</form></div>
<div>{one}</div><div></div>{localStorage.getItem("count")}
</div>
</div></div>:<div> you have bought "{localStorage.getItem("count")}" remaining 5</div>}
    </div>
    
{!trigger?<div></div>:<div><Select>
  <h1>FREE FOOD LISTS</h1>
  <hr id="Indi" />
    <div>{Product.filter((v,s)=>v.price <= freemap).map(v=> 
 <div>
 <div class="small-container cart-page">
<table>
<tr>
<td>
  <div class="cart-info">
    <img src={v.img} alt={v.name}/>
         <div>
         <div class="price">
    <p>{v.des}</p>
    <small>{v.name}</small>
    </div>
    <br/>
    <button class="btn-danger" onClick={(e)=>selected(e)}>select</button>     </div></div>
     
</td>
<td><input type="number" value="1" class="cart-quantity-price"/></td>
<td>{v.price}</td>
</tr>
<tr>
<td>

     </td></tr></table></div>
    
</div>      )}</div>
  </Select></div>}

    
    </div></div> </div>:
<div> 
         <div className="pagein"><input value={searchitem} onChange={(e)=>setSearchitem(e.target.value)} placeholder="search..."/> <button onClick={(e)=>Handle(e)} className="addr">View Cart <br/>"Bukka Hut"({incart.length})</button></div>

<br/>
{productList}</div>}
</div>);
 
   
 };

