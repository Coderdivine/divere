import React,{useState,useEffect,useContext} from 'react';
import Select from "./Select"
import {v4 as uuidv4} from 'uuid';
import {Axios} from "./contact";
import {create} from './App';
import axios from "axios";
import {PaystackButton} from 'react-paystack';
import Admin from './Admin';


function Kfc() {
  const productkfc= [
    {name:"Celebration Feast BucketFantasy", img:"./img/bucket.png", price: 7700.00, des:"3 Pcs chicken, 6 Pcs wings, & 6 Pcs strips",},
    {name:"5-IN-1 Meal Box (Zinger Wings)",img:"./img/in-1.png",price:400.00,   des:"1 Pc COB HC/OR, 1 Zinger Burger, 1 Reg Fries, 1 Pepsi Pet Bottle & 2 Zinger Wings ",},
    {name:"5-IN-1 Meal (Popcorn Chicken)",    img:"./img/in-1.png",   price:3700.00,   des:"1 zinger burger, 1 Pc chicken, 1 reg fries, 1 reg popcorn chicken, 1 bottle pepsi ",},
    {name:"5 IN 1 MEAL BOX (2 Strips)", img:"./img/5-in-1.png",price:3700.00,des:"1 Pc COB HC/OR, 1 Zinger Burger, 1 Reg Fries, 1 Pepsi Pet Bottle & 2 Strips",},{name:"2 Fries & 2 Drinks - Bottles ", img:"./img/kfcpepsi.png",price:2550.00,des:"2 reg fries & 2 bottle pepsi",},{name:"5-IN-1 Meal Box (Special)", img:"./img/in-1.png",price:3800.00,des:"1 Pc COB HC/OR, 1 Reg Fries, 3 Pcs zinger wings, 3 Pcs Strips, 1 Pepsi Pet Bottle",},{name:"Zinger Wings", img:"./img/zingerwings.png",price:1500.00,des:"",},
    {name:" Chicken srtipe", img:"./img/french fries.png",price:1450.00,des:"",},{name:"KFC French fries", img:"./img/french fries.png",price:900.00,des:"",},{name:"Zinger Burger", img:"./img/ziinger.jpeg",price:1850.00,des:"",},{name:"Double Zinger Burger", img:"./img/ziinger.jpeg",price:2300.00,des:"",},{name:"Yam Fries", img:"./img/friedyam.png",price:1000.00,des:"",},{name:"KFC Popcorn Chicken", img:"./img/IMG_20210620_112507.jpg",price:900.00,des:"",},{name:"Streetwise One", img:"./img/streetwisetwo.png",price:1750.00,des:"1 Pc chicken + 1 reg KFC spicy rice and 1 bottle pepsi",},{name:"Streetwise Two ", img:"./img/streetwisetwo.png",price:2500.00,des:"2 Pc chicken + 1 reg KFC spicy rice and 1 bottle pepsi",},{name:"Streetwise Three", img:"./img/streetwisetwo.png",price:3150.00,des:"3 Pc chicken + 1 reg KFC spicy rice and 1 bottle pepsi",},{name:"Zinger Burger Meals", img:"./img/IMG_20210620_112734.jpg",price:3400.00,des:"1 zinger burger, 1 Pc chicken, 1 regular fries & 1 bottle pepsi",},{name:"Double Zinger Burger Meal", img:"./img/IMG_20210620_112734.jpg",price:3350.00,des:"Regular chips and pet Pepsi",},
   {name:"Fill Up Feast", img:"./img/IMG_20210620_112808.jpg",price:5700.00,des:"Fill UP Feast (4 Pcs COB HC/OR, 4 Pcs Strips, 2 Mini Loaves & 2 Pepsi Pet Bottle)",},{name:"Fill Up One", img:"./img/IMG_20210620_112749.jpg",price:2500.00,des:"Fill Up One (1 Pc COB HC/OR, 1 KFC Spicy Rice, 1 Strip & 1 Pepsi Pet Bottle)",},{name:"Fill Up Two", img:"./img/IMG_20210620_112749.jpg",price:3250.00,des:"Fill Up Two (2 Pcs COB HC/OR, 1 KFC Spicy Rice, 2 strips, 1 Mini Loaf & 1 Pepsi Pet Bottle)",},{name:"Bucket", img:"./img/bucket.png",price:11000.00,des:"Served with pepsi",},{name:"Bucket (8 pieces)", img:"./img/bucket.png",price:7600.00,des:"Served with 1.5L Pepsi",},{name:"5 piece chicken", img:"./img/5piecechicken.png",price:3900.00,des:"",},{name:"1 piece of chicken ", img:"./img/barbeque.png",price:850.00,des:"",},{name:"Fiery fries sachet", img:"./img/fiery.jpeg",price:350.00,des:"",},{name:"Moi Moi", img:"./img/moimoi.png",price:900.00,des:"",},{name:"Dip(mayo)", img:"./img/mayo.jpeg",price:200.00,des:"",},{name:"Jollof rice", img:"./img/IMG_20210620_112300.jpg",price:900.00,des:"",}
    ,{name:"Vegetable fried rice", img:"./img/vegetable fried rice.jpeg",price:1000.00,des:"",},{name:"Pepper sauce", img:"./img/epper.jpeg",price:350.00,des:"",},{name:"Pepsi", img:"./img/pepsi.jpeg",price:350.00,des:"50cl",},{name:"Miranda", img:"./img/miranda.jpeg",price:350.00,des:"",},{name:"7Up", img:"./img/7up.jpeg",price:350.00,des:"50cl",},{name:"Teem", img:"./img/teem.jpeg",price:350.00,des:"50cl",},{name:"H2O", img:"./img/h20.jpeg",price:350.00,des:"",},{name:"Water", img:"./img/water.jpeg",price:300.00,des:"",},{name:"Lipton Ice Drink", img:"./img/liptonice.png",price:400.00,des:"",}         ,{name:"Soft Drinks ", img:"./img/soft.jpeg",price:300.00,des:"",},{name:"Cheese", img:"./img/cheese.jpeg",price:350.00,des:"",},{name:"Double Zinger Burger", img:"./img/dzinger.jpeg",price:2300.00,des:"",},{name:"Extra Large Yam Fries", img:"./img/Extra Large Yam Fries.jpeg",price:1300.00,des:"",},{name:"Fiery fries satchet", img:"./img/Fiery fries satchet.jpeg",price:350.00,des:"",},{name:"KFC Spicy rice", img:"./img/KFC Spicy rice.jpeg",price:900.00,des:"",},{name:"Large fries", img:"./img/Large fries.jpeg",price:1200.00,des:"",},{name:"Large Spicy Rice", img:"./img/Village rice.jpeg",price:1100.00,des:"",},{name:"Large Vegetable Rice", img:"./img/vegetable fried rice.jpeg",price:1200.00,des:"",},{name:"Large Yam fries", img:"./img/Extra Large Yam Fries.jpeg",price:1050.00,des:"",},
    ,{name:"Water", img:"./img/eva.jpg",price:400.00,des:"",},{name:"KFC spicy rice- large(nsba)", img:"./img/download spicy ricde- large(nsba).jpeg",price:900.00,des:"",},{name:"Regular KFC spicy rice(gfd)", img:"./img/download spicy ricde- large(nsba).jpeg",price:900.00,des:"",},{name:"Regular Vegetable fried rice(as)", img:"./img/KFC spicy rice(gfd).png",price:1000.00,des:"",},{name:"Vegetable fried rice - large(fds)", img:"./img/KFC spicy rice(gfd).png",price:1200.00,des:"",}
 
   ]
  
   const cartlists= localStorage.getItem('carting')?JSON.parse(localStorage.getItem('carting')):[]
   const {getthree}=useContext(create);
   const[carting,setCarting]=useState(cartlists);
  const [searchitem,setSearchitem]=useState("");

    const kfclist= productkfc.filter((lists)=>{
      if(searchitem==""){return lists}else if(lists.name.toLowerCase().includes(searchitem.toLowerCase())){return lists}
    }).map(listing =><div >
      <div>
   <div class="small-container cart-page">
  <table>
  <tr>
  ...
  </tr>
  <tr>
  <td>
    <div class="cart-info">
      <img src={listing.img} alt={listing.name}/>
           <div>
           <div class="price">
      <p>{listing.name}</p>
      <small>{listing.name}</small>
      </div>
      <br/>
      <button class="btn-danger" onClick={()=>addtocart(listing)}>Add To Cart</button>
       </div></div>
       
  </td>
  <td>{listing.des}</td>
  <td>₦{listing.price}</td>
  </tr>
  <tr>
  <td>
  
       </td></tr></table></div></div>
    </div>)
    


const addtocart=(listing)=>{
  setCarting([...carting,{...listing}]);
localStorage.setItem('carting',JSON.stringify(carting));

   };
   

const removefromcart=(liststoremove)=>{
  setCarting(carting.filter (listing=>listing !==liststoremove));   
};
/*const [order,setOrder]=useState([])
const get=async()=>{
  
  const res= await Axios.get("/orders").catch((err)=>{console.log(err)});
  if(res && res.data)setOrder(res.data);
}*/
const addup= localStorage.getItem("percento")?localStorage.getItem("percento"):300;

    let totalone = 0;
    carting.forEach((list)=>{
      totalone += list.price;
    })

const[one,setOne]=useState();
const[trigger,setTrigger]=useState(false);
const[counter,setCounter]=useState(0);
const[send,setSend]=useState(false);
const subtotal= totalone + 300 +addup;

 const Buy= async(e)=>{
  const request= {
    id:uuidv4(),
    name:"KFC",
    names:carting,
    address:localStorage.getItem('address'),
    num:localStorage.getItem('num'),
    lastname:localStorage.getItem('lastname'),
    total:subtotal
  }
  const res= await Axios.post("/orders",request).catch((err)=>{console.log(err)})
  if(res)getthree();

   setSend(true);
  e.preventDefault();
  setCounter(counter+1);
  setSend(true);
  localStorage.setItem('carting',[]);
 localStorage.setItem("counter",counter);
 setOne();
   
 }
 /*useEffect(()=>{
  getthree();
},[])*/


useEffect((e) => {
  if(5==localStorage.getItem("counter")){
    //e.preventDefault();
    setTrigger(true);
  }else{setTrigger(false)}
}, [trigger]);
const selected=(e)=>{
  e.preventDefault();
   localStorage.setItem("counter",0);
   setTrigger(false);
}
const data= carting.filter(list=>list.name);
const dataa= carting.filter(list=>list.price);
useEffect(()=>{
 if(send){
   axios.post("https://loaclhost:3000/orders",{
     names:data,
     prices:dataa,
     address:localStorage.getItem("address"),
     num:localStorage.getItem("num"),
     lastname:localStorage.getItem("lastname")
   
   }).then(res=>{
     console.log(res.data);});
 }
 setSend(false);
 
 },[send])
 
 useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(carting));
},[carting]);

  

const  cartedd= carting.map(listing =>
    <div>
    <div class="small-container cart-page">
 <table>
 <tr>
   <td>
     <div class="cart-info">
       <img src={listing.img} alt={listing.name}/>
            <div>
            <div class="price">
       <p>{listing.des}</p>
       <small>{listing.name}</small>
       </div>
       <br/>
       <button class="btn-danger" onClick={()=>removefromcart(listing)}>Remove</button>
        </div></div>
        
   </td>
   <td><input type="number" value="1" class="cart-quantity-price"/></td>
   
   <td>₦{listing.price}</td>
 </tr>
 <tr>
 <td>
 
        </td></tr></table></div>
       
 </div>
    
    );
    const [red,setRed]=useState(false);
    const handledone=(e)=>{
      setDone(false)
    }
    
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
    const[done,setDone]=useState(true);
    const[num,setNum]=useState()
    const[lastname,setLastname]=useState("");
    const submit=(e)=>{
      e.preventDefault();
          localStorage.setItem('lastname',lastname);
          localStorage.setItem('num',num);
  if(localStorage.getItem("address")){
       if(localStorage.getItem('lastname',)){
         if(localStorage.getItem('num')){
         setOne(<button onClick={(e)=>Buy(e)}>Buy</button>);
        }else{  e.preventDefault();
          alert("Please enter your number")}
          }else{ e.preventDefault();
            alert("Please enter your Last Name")}
        }else{
          e.preventDefault();
        alert("please enter your your address before order");
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
   const mapfree=localStorage.getItem("percento")*counter;
   const freemap=mapfree-350;

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
   <td>₦300
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
</div><div>{localStorage.getItem("counting")}{counter}</div><div>{!trigger?<div></div>:<div><Select><h1>FREE FOOD LISTS</h1>
  <hr id="Indi" />
    <div>{productkfc.filter((v,s)=>v.price <= freemap).map(v=> 
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
  </Select></div>}
</div>
</div></div>:<div>you have bought "{localStorage.getItem("counter")}" remaining 5</div>}
</div>




</div></div> </div>
 


 
 :
<div> 
      <div className="pagein"><input value={searchitem} onChange={(e)=>setSearchitem(e.target.value)} placeholder="search..."/> <button onClick={(e)=>Handle(e)} className="addr">View Cart <br/>"KFC"({carting.length})</button></div>

<br/><div class="none"></div><br/>
{kfclist}</div>}
</div>);


};

export default Kfc;
