import React,{useState,useEffect,useContext} from 'react'
import "./App.css";
import Admin from './Admin';
//import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import {Axios} from "./contact";
import Select from "./Select";
import {PaystackButton} from 'react-paystack';
import {create} from "./App";

function Theplace() {
    const productplace =[
        
        {name:"Grilled chicken",
         img:"/img/Grilled chicken.jpeg",
         price: 1200.00,
         des:"1 piece",},{name:"Asun POPULAR",
         img:"./img/asun.png",
         price:1400.00,
         des:"1 portion",},
         {name:"Special fried rice",
         img:"./img/IMG_20210620_112300.jpg",
         price:900.00,
         des:"1 portion",},
         {name:"Village rice", img:"./img/Village rice.jpeg",price:800.00,des:"1 portion",},{name:"Fried Rice Fiesta", img:"./img/Fried Rice Fiesta.jpeg",price:750.00,des:"",},{name:"Chinese Rice", img:"./img/Chinese Rice.jpeg",price:650.00,des:"",},{name:"Spagetti", img:"./img/IMG_20210620_112409.jpg",price:600.00,des:"1 portion",},
         ,{name:"Beef", img:"./img/beef.png",price:400.00,des:"1 piece",},{name:"Grilled chicken POPULAR", img:"./img/friedchicken.png",price:1300.00,des:"1 piece",},{name:"Chicken in Stew", img:"./img/Chicken in Stew.jpeg",price:600.00,des:"1 piece",},{name:"Barbeque chicken (samll)", img:"./img/barbeque.png",price:600.00,des:"1 piece",},{name:"Curry Fried Chicken", img:"./img/friedchicken.png",price:650.00,des:"1 portion",},{name:"Soft drinks (PET)", img:"./img/Soft drinks (PET.jpeg",price:300.00,des:"Plastic",},{name:"Fruity-life Parfait", img:"./img/Fruity-life Parfait.jpeg",price:2000.00,des:"",},{name:"Malta guiness (can)", img:"./img/IMG_20210620_112658.jpg",price:300.00,des:"can",},{name:"Eva water", img:"./img/eva.jpg",price:250.00,des:"75cl",},{name:"Aquafina Water", img:"./img/Aquafina Wate.jpeg",price:250.00,des:"75cl",},{name:"Ribena", img:"./img/ribena.png",price:450.00,des:"",},{name:"Lucozade Boost", img:"./img/lucozade.png",price:450.00,des:"",}
    ]
    const {gettwo}=useContext(create);
    const[one,setOne]=useState();
const[send,setSend]=useState(false);
    const[counts,setCounts]=useState(0);
    const cartlists= localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
    const[cart,setCart]=useState(cartlists);

   const[trigger,setTrigger]=useState(false);
    
   useEffect((e) => {
    if(5==localStorage.getItem("counts")){
      //e.preventDefault();
      setTrigger(true);
    }else{setTrigger(false)}
  }, [trigger]);
   
    const selected=(e)=>{
      e.preventDefault();
       localStorage.setItem("counts",0);
       setTrigger(false);
    }
        
    const [searchitem,setSearchitem]=useState("");

    const kfclist= productplace.filter((list)=>{
      if(searchitem==""){return list}else if(list.name.toLowerCase().includes(searchitem.toLowerCase())){return list}
    }).map(list =><div >
        <div>
     <div class="small-container cart-page">
    <table>
    <tr>
    ...
    </tr>
    <tr>
    <td>
      <div class="cart-info">
        <img src={list.img} alt={list.name}/>
             <div>
             <div class="price">
        <p>{list.name}</p>
        <small>{list.name}</small>
        </div>
        <br/>
        <button class="btn-danger" onClick={()=>addtocart(list)}>Add To Cart</button>
         </div></div>
         
    </td>
    <td>{list.des}</td>
    <td>₦{list.price}</td>
    </tr>
    <tr>
    <td>
    
         </td></tr></table></div></div>
      </div>)
      


 const addtocart=(list)=>{
    setCart([...cart,{...list}]);
 localStorage.setItem('cart',JSON.stringify(cart));
 
     };
     
 
  const removefromcart=(liststoremove)=>{
    setCart(cart.filter (list=>list !==liststoremove));   
  };
  
const addup= localStorage.getItem("percento")?localStorage.getItem("percento"):300;
useEffect(()=>{
  localStorage.setItem('totalone',addup);
},[addup]);
let totalone = 0;
cart.forEach((list)=>{
 totalone += list.price;
})
const subtotal= totalone + 300 + addup;

//const [order,setOrder]=useState([]);
/*const get=async()=>{
  
  const res= await Axios.get("/orders").catch((err)=>{console.log(err)});
  if(res && res.data)setOrder(res.data);
}*/
 const Buy=async(e)=>{
  const request= {
    id:uuidv4(),
    name:"THE PLACE",
    names:cart,
    address:localStorage.getItem('address'),
    num:localStorage.getItem('num'),
    lastname:localStorage.getItem('lastname'),
    total:subtotal
  }
  const res= await Axios.post("/orders",request).catch((err)=>{console.log(err)})
  if(res)gettwo()
e.preventDefault();
   setSend(true);
  setCounts(counts+1);
 localStorage.setItem("counts",counts);
  localStorage.setItem('cart',[]);
 setOne();
    
 }
 
 useEffect(()=>{
   localStorage.setItem('cart',JSON.stringify(cart));
 },[cart]);

 
 const  cartedd= cart.map(list =>
      <div>
      <div class="small-container cart-page">
   <table>
   <tr>
     <td>
       <div class="cart-info">
         <img src={list.img} alt={list.name}/>
              <div>
              <div class="price">
         <p>{list.des}</p>
         <small>{list.name}</small>
         </div>
         <br/>
         <button class="btn-danger" onClick={()=>removefromcart(list)}>Remove</button>
          </div></div>
          
     </td>
     <td><input type="number" value="1" class="cart-quantity-price"/></td>
     <td>₦{list.price}</td>
   </tr>
   <tr>
   <td>
   
          </td></tr></table></div>
         
   </div>
      
      );
      const [red,setRed]=useState(false);
    
     const amount =totalone;
      const email = localStorage.getItem("email");
      const addd= localStorage.getItem("address");
      const namee=localStorage.getItem("lastname");
      const phone = localStorage.getItem("num");
      const  PublicKey = "pk_live_363aafee589248daecbc80031e7feac0b2139eeb";
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
             onClose:()=>alert("Go")
           }
         }
      const Handle=(e)=>{
       e.preventDefault();
       setRed(true);
     };
     const Sand=(e)=>{
       e.preventDefault();
       setRed(false);
     };
     const mapfree=localStorage.getItem("percento")*counts;
     const freemap=mapfree-350;
      const handledone=(e)=>{
        setDone(false)
      }
      const[num,setNum]=useState()
      const[lastname,setLastname]=useState("");
      const submit=(e)=>{
        e.preventDefault();
        localStorage.setItem('lastname',lastname);
        localStorage.setItem('num',num);
if(localStorage.getItem("address")){
     if(localStorage.getItem('lastname',)){
       if(localStorage.getItem('num')){
       setOne(<PaystackButton {...componentProps} />);
      }else{  e.preventDefault();
        alert("Please enter your number")}
        }else{ e.preventDefault();
          alert("Please enter your Last Name")}
      }else{
        e.preventDefault();
      alert("please enter your your address before order");
      }
     
       
      };
      const[done,setDone]=useState(true);
          
return(<div>
  {red ?<div><button onClick={(e)=>Sand(e)} className="addr">Back</button><div><div>
      <div class="small-container cart-page">
   <table>
   <tr>
     <th>products</th>
     <th>Quantity</th>
     <th>Subtotal</th>
   </tr>
   
   </table></div>{cartedd}
          <div class="total-price">
   <table>
     <tr>
     <td>Subtotal</td>
     <td>₦{totalone}
</td>
     </tr>
     <tr>
     <td>Fee</td>
     <td>₦300.00
</td>
     </tr>
     <tr>
     <td>Total</td>
     <td>₦{subtotal}</td>
     </tr>
   </table>
 
   </div>
   <div className="checkout">{<div></div>}
     <button className="a-btn" onClick={(e)=>handledone(e)}>Checkout</button>
     {!done?<div><div>

<div class="account-page">
<div class="container">

<form id="Regform" >
<input type="name" id="password" placeholder="Last Name"  onChange={(e)=>setLastname(e.target.value)} />
<input type="phone" id="conpass" placeholder="Phone Number" onChange={(e)=>setNum(e.target.value)}  />
<button type="submit" class="btn" onClick={(e)=>submit(e)}>Procede</button>
</form></div>
{one}
</div><div>{localStorage.getItem("counts")}</div>
</div></div>:<div>you have bought "{localStorage.getItem("counts")}" remaining 5</div>}
</div><div>{!trigger?<div></div>:<div><Select>
  <h1>FREE FOOD LISTS</h1>
  <hr id="Indi" />
    <div>{productplace.filter((v,s)=>v.price <= freemap).map(v=> 
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
    
</div>        )}</div>
  </Select></div>}</div>




</div></div> </div>:
<div> 
        <div className="pagein"><input value={searchitem} onChange={(e)=>setSearchitem(e.target.value)} placeholder="search..."/> <button onClick={(e)=>Handle(e)} className="addr">View Cart <br/>"The Place"({cart.length})</button></div>

<br/><div class="none"></div><br/>
{kfclist}</div>}
</div>);

  
};


        
        



export default Theplace;
