import React,{useState,useEffect,useContext} from 'react';
import {Aaxios} from "./Hello";
import './App.css';
import Settings from "./Settings";
import App from "./App";
import Admin from "./Admin";
import {Bukka} from "./Bukka"
import {Added} from "./Bukka"
import Kfc from "./Kfc";
import Theplace from "./Theplace";
import Select from "./Select";
import {create} from "./App";
import About from './About';
//import GooglePayButton from '@google-pay/button-react';
//import {Map, InfoWindsow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import Myapp from "./Myapp";
function Homepage() {
       
  const {submit,handles}=useContext(create);
      const[sedopass]=useState("chimdinduasdasd");
      const[sedo]=useState("chimdindu");
     const [call,setCall]=useState("");
     const[ans,setAns]=useState();
    const[menu,setMenu]=useState(false);
    const[occur,setOccur]=useState(false);
    const[nextpage,setNextpage]=useState();
    const[render,setRender]=useState(true);

      const[productplace]=useState({
        "rest-1":[{name:"Grilled chicken",
         img:"",
         price: "1,200.00",
         des:"1 piece",},{name:"Asun POPULAR",
         img:"",
         price:"1,400.00",
         des:"1 portion",},
         {name:"Special fried rice",
         img:"",
         price:"900.00",
         des:"1 portion",},
         {name:"Village rice", img:"",price:"800.00",des:"1 portion",},{name:"Fried Rice Fiesta", img:"",price:"750.00",des:"",},{name:"Chinese Rice", img:"",price:"650.00",des:"",},{name:"Spagetti", img:"",price:"600.00",des:"1 portion",},
         ,{name:"Beef", img:"",price:"400.00",des:"1 piece",},{name:"Grilled chicken POPULAR", img:"",price:"1,300.00",des:"1 piece",},{name:"Chicken in Stew", img:"",price:"600.00",des:"1 piece",},{name:"Barbeque chicken (samll)", img:"",price:"600.00",des:"1 piece",},{name:"Curry Fried Chicken", img:"",price:"650.00",des:"1 portion",},{name:"Soft drinks (PET)", img:"",price:"300.00",des:"Plastic",},{name:"Fruity-life Parfait", img:"",price:"2,000.00",des:"",},{name:"Malta guiness (can)", img:"",price:"300.00",des:"can",},{name:"Eva water", img:"",price:"250.00",des:"75cl",},{name:"Aquafina Water", img:"",price:"250.00",des:"75cl",},{name:"Ribena", img:"",price:"450.00",des:"",},{name:"Lucozade Boost", img:"",price:"450.00",des:"",}
       
       ]
      });
      const[productui]=useState({
        "rest-1":[{name:"Fantasy",
         img:"",
         price: "350.00",
         des:"",},{name:"Meat Pie L/S",
         img:"",
         price:"400.00",
         des:"",},
         {name:"Beef Roll",
         img:"",
         price:"250.00",
         des:"",},
         {name:"Chicken Supreme", img:"",price:"400.00",des:"",},{name:"Doughnut", img:"",price:"200.00",des:"",},{name:"Scotch Eggs", img:"",price:"220.00",des:"",},{name:"Fried Rice +1/4 Chicken", img:"",price:"1,500.00",des:"",},
         ,{name:"Jollof Rice +1/4 Chicken", img:"",price:"1,500.00",des:"",},{name:"Fried Rice (Regular)", img:"",price:"500.00",des:"",},{name:"Jollof Rice (Regular)", img:"",price:"500.00",des:"",},{name:"Moin Moin", img:"",price:"250.00",des:"",},{name:"Stewed Fried Fish (Large)", img:"",price:"1,550.00",des:"",},{name:"Beef", img:"",price:"310.00",des:"",},{name:"1/4 Chicken Peppered", img:"",price:"1,550.00",des:"",},{name:"Nbc Drinks ", img:"",price:"200.00",des:"60cl",},{name:"Water", img:"",price:"150.00",des:"60cl",},{name:"Bread Loaf", img:"",price:"400.00",des:"",},{name:"Salad", img:"",price:"350.00",des:"",}
       
       ]
      });
     
  
      const[productsweet]=useState({
        "rest-1":[{name:"Basic meal",
         img:"",
         price: "2,000.00",
         des:"Your choice of meal + a side, twin chicken and your choice of fruit.",},{name:"Standard Meal",
         img:"",
         price:"2,500.00",
         des:"Your choice of meal, a side, proteins and your choice of fruit.",},
         {name:"Executive Meal",
         img:"",
         price:"5,500.00",
         des:"Your choice of meal, a side, proteins, fruits, and a tripple delight cake.",},
         {name:"Top Up Jollof Rice", img:"",price:"600.00",des:"",},{name:"Top Up Fried Rice", img:"",price:"700.00",des:"",},{name:"Top Up Spaghetti", img:"",price:"650.00",des:"",},{name:"Spaghetti + beef + drink", img:"",price:"750.00",des:"",},
         ,{name:"Eba/Semovita/Amala + Beef/Fish+Soup", img:"",price:"1,00.00",des:"",},{name:"SS Giveaway Combo", img:"",price:"600.00",des:"",},{name:"Sandwich", img:"",price:"300.00",des:"",},{name:"Samosa)", img:"",price:"654.00",des:"",},{name:"Jollof rice", img:"",price:"400.00",des:"1 portion",},{name:"Fried rice", img:"",price:"400.00",des:"",},{name:"Cocnut rice", img:"",price:"400.00",des:"",},{name:"Chinese Basmati rice", img:"",price:"900.00",des:"",},{name:"Bulah rice", img:"",price:"900.00",des:"",},{name:"Spaghetti", img:"",price:"440.00",des:"",},{name:"French fries", img:"",price:"550.00",des:"",},{name:"Jamboree Rice", img:"",price:"450.00",des:"A truly delicious sausage and chicken based basmati rice",}
         ,{name:"White rice per spoon", img:"",price:"400.00",des:"",},{name:"Leafy rice (ofada) + leafy sauce", img:"",price:"1,200.00",des:"",},{name:"Bulah pottage", img:"",price:"650.00",des:"Per spoon",},{name:"Dry beans", img:"",price:"200.00",des:"per spoon"},
         ,{name:"Vegetable salad", img:"",price:"300.00",des:"",},{name:"Beans cake", img:"",price:"300.00",des:"",},{name:"Dodo", img:"",price:"300.00",des:"",},{name:"Fish Picata", img:"",price:"700.56",des:""}, {name:"Healthy chicken salad", img:"",price:"700.00",des:"",},{name:"Exotic salad", img:"",price:"2,100.00",des:"",},{name:"Meat pie", img:"",price:"400.00",des:"",},{name:"Chicken pie", img:"",price:"400.00",des:""}, ,{name:"Eforiro", img:"",price:"400.00",des:"",},{name:"Egusi", img:"",price:"400.00",des:"",},{name:"Edikaikong", img:"",price:"550.00",des:"",},{name:"Healthy okoro", img:"",price:"500.00",des:""},
         ,{name:"Fish pie", img:"",price:"450.00",des:"",},{name:"SAUsage roll", img:"",price:"220.00",des:"",},{name:"Doughnut", img:"",price:"220.00",des:"",},{name:"Scotch egg", img:"",price:"220.56",des:""}, {name:"ss carmel popcorn", img:"",price:"150.00",des:"",},{name:"Beef", img:"",price:"400.00",des:"",},{name:"Promo in stew", img:"",price:"400.00",des:"",},{name:"Shaki in stew", img:"",price:"500.00",des:""}, ,{name:"Cat fish", img:"",price:"1000.00",des:"",},{name:"Fresh fish in stew", img:"",price:"1,000.00",des:"",},{name:"Cow leg in stew", img:"",price:"590.00",des:"",},{name:"Mexican chicken", img:"",price:"1,100.00",des:""},
       ]
      });
   
    const[order,setOrder]=useState([])
    const sksk=(e)=>{
      e.preventDefault();
       if(call===sedo){
        if(ans===sedopass){
         // setError(true);
          e.preventDefault();
            setNextpage(<Admin  />);
            setOccur(true);}}
       
      
    };
    const chase=(e)=>{
      e.preventDefault();
      setOccur(true)
      setRender(true);
    };
    const ordered=(e)=>{
        setOccur(true);
        setNextpage(<div class="account-page">If you've have not recieved your orders please call:<strong>08065728539</strong><br/>
        <div class="terms">Terms and Condtions Applied</div>
        </div>)
    }
    const useapp=(e)=>{
      setOccur(true);
      setNextpage(<div class="useapp"><div class="account-page">
        <h3>Welcome "{localStorage.getItem("username")}",thanks for choosing Divere food.</h3>
        <header><strong>HOW TO ORDER</strong></header>
        <div class="col-4">If you are loggedin,you would be displayed the homescreen of this app<br/>
        .You can choose any resturant but before that enter your "Address"
        <img src="./img/add.png" alt="" height="70%" width="50px"/>
        <br/>
        <header><strong>HOW TO VIEW CART</strong></header>
        Each resturant have cart.When you click on any of the resturant you would be dispalyed lists of product,Click on view cart near the search feild
        <img src="./img/search.png" alt="" height="70%" width="100px"/>
          <header><strong>HOW TO ORDER</strong></header>
          Scrll down the cart and click on checkout<br/>
          <img src="/img/check.png" alt="" height="70%" width="100px"/>
           You would be displayed a feild to enter your last name and your phone no.then click on "procede".
           <img src="./img/pro.png" alt="" height="70%" width="100p%"/>
           <br/>
           <header><strong>HOW TO RECIEVE FREE FOOD</strong></header>
           If you've order "5 times" you would be displayed lists of product ranging on your free food percent.<br/>
           <a class="terms">How to recieve free food</a>
           <br/>
           <header><strong>HOW TO ORDER FREE FOOD</strong></header>
           When you are displayed free food you need to select at most  one food ,else free food list will be removed<br/>
           <footer class="terms"><label>NOTE:</label><h4>
               All orders would be delivered by Jumia food.
             </h4></footer>
        </div>
      </div></div>)
    }
    const rate=(e)=>{
      setOccur(true);
      setNextpage(<div class="account-page"><div class="col-4"><tr>
        click on the menu button<br/>
        Click on settings<br/>
        Click on free food rate<br/>
        Click on any percent
        
        </tr></div></div>)
    }
   
    const shshs=(e)=>{
    setOccur(true);
    setNextpage(<div ><div className="help"><h>NEED HELP:</h><br/><div className="help-no"><h1>CALL: 08165728539</h1></div>
  </div>
    <div className="helplist">
      <ul>
        <li>Haven't recieved your order ?<button onClick={(e)=>ordered(e)}>&#8594;</button></li>
        <li>How to use App<button onClick={(e)=>useapp(e)}>&#8594;</button></li>
        <li>How to increase free food rate<button onClick={(e)=>rate(e)}>&#8594;</button></li>
        <li>How to recieve promo...<button>&#8594;</button></li>
      </ul></div>
    </div>
  );
    };
    const home=(e)=>{
      setOccur(false);
      };
     
    const Setting=(e)=>{
     // e.preventDefault();
      setOccur(true);
      setNextpage(<div >
    
      <div className="helplist">
        <ul>
         
          <li>Increase free food rate
            <br/><div><Settings/></div></li>
         </ul></div>
        
      </div>
    );
      
       
    };
 const[address,setAddress]=useState("");

 const[contact,setContact]=useState([]);
const get= async()=>{
    const res= await Aaxios.get("/reg").catch((err)=>{console.log(err)})
if(res && res.data)setContact(res.data);
  }

 
    useEffect(()=>{
      get()
    },[])
  
const [ok,setOk]=useState(false);
const setOks=()=>{
  setOk(true);
};
const restone=(e)=>{
  setOccur(true);
  setNextpage(
    <div><Bukka/><br/></div>);};
  
    const restwo=(e)=>{
      setOccur(true);
      setNextpage(
        <div><Kfc /></div>);
    };
    const about=(e)=>{
      setOccur(true);
      setNextpage(
        <div><About/></div>);
    };
    const restthree=(e)=>{
      setOccur(true);
      setNextpage(
        <div><Theplace /></div>);
    };
     const handle=(e)=>{
     setMenu(true);
   };
   const haha=(e)=>{setMenu(false)}; 

 const logout=(e)=>{
  setOccur(true);
  setNextpage(
    <div><div class="account-page">
    <div class="container">
    <div class="row">
    <div class="col-2" >
     </div>
  
     <div class="col-2" >
       <div class="form-container">
       <div class="form-btn" >
       <span onclick="login()">Sign up</span>
        <hr id="Indicator" />
       </div>
       <div>
  
       
       
       <form id="Regform" onSubmit={submit}>
       <input type="text" id="username" placeholder="Username" onChange={handles}/>
        <input type="email" id="email" placeholder="Email"  onChange={handles} />
       <input type="password" id="password" placeholder="Password"  onChange={handles} />
       <input type="password" id="conpass" placeholder="Confrim Password" onChange={handles}  />
       <button type="submit" class="btn">Sign up</button>
       </form>
       </div>
       </div>
    </div>
    </div>
     </div></div></div>);
};
 const greet=!localStorage.getItem("username")?"Everyone":localStorage.getItem("username");  
    return (
        <div className="popss">
            
              <div class="header">
<div class="container">
<div class="navbar">
  <div>
  <a href=""> <img src="./img/divereli.png"  width="100px" /></a>
  </div>
  <nav><nav>
    <ul><div class="li">
  <li><a onClick={(e)=>home(e)}>Home</a></li>
     <li><a onClick={(e)=>shshs(e)}>Help</a></li>
     <li><a onClick={(e)=>about(e)}>About</a></li>

     <li><a  onClick={(e)=>Setting(e)}>Settings</a></li>
     <li><a  onClick={(e)=>logout(e)}>Sign up</a></li>

    </div>  
    </ul>
  </nav>
  <div>{!menu?<div></div>:<div><div className="pointer"><ul >
     <div className="pa"><button className="x" onClick={(e)=>haha(e)}><h1>X</h1></button></div><li><a onClick={(e)=>home(e)}>Home</a></li>
     <li><a onClick={(e)=>shshs(e)}>Help</a></li>
     <li><a onClick={(e)=>about(e)}>About</a></li>
  
     <li><a  onClick={(e)=>Setting(e)}>Settings</a></li>
     <li><a  onClick={(e)=>logout(e)}>{!localStorage.getItem('data') ?<div>Sign up</div>:<div></div>}</a></li>
       </ul></div></div>}</div>
  </nav>

<img src="./img/menubtn.png"  className="menu-icon" 
  width="30px" height="90px" onClick={(e)=>handle(e)}/></div>
  </div></div>
 
     {!occur?<div><br/>
      <div class="col-2">
       </div><div className="nav"></div>
         <div className="hh1"></div>
         <div class="col-45">{!localStorage.getItem("username")?<div></div>:
          <div class="col-45">
          <h1>Good day "{greet}",your welcome to Diverefood.</h1>
          <small>Greetings from Shaw.</small>
        </div>
}
         </div>
         <div class="col-45">{!ok?<div>
          <small>Would you like to learn how<br/> to get free food from Diverefood 
              <button onClick={(e)=>shshs(e)}>YES</button> <button onClick={()=>setOks()}>NO</button> <small> Option from shaw.</small>
           </small>
         </div>:<div></div>}
          
         </div>
         <br/>
         <div className="pageinput">
           <label>Enter your Address :</label><br/>
           <input type="text" value={address} placeholder="No/Street/Town/City" onChange={(e)=>setAddress(e.target.value)}/><button className="address" onClick={(e)=>localStorage.setItem("address",address)}>Save</button></div><br/><br/>
        <div class="rest-3"><h2><i>Resturant for all</i></h2><hr/></div><br/>
        <br/>
         <div className="container-5">
           <h1>BUKKA HUT</h1>
          <hr id="Indi" />
           <div className="cont-5-img"><img src="./img/bukkahut.png" alt="" width="100%" height="250px"
            onClick={(e)=>restone(e)}
           /></div>

         </div>
         <div className="container-5">
           <h1>KFC</h1>
           <hr id="Indi" />
           <div className="cont-5-img"><img  src="./img/IMG_20210620_112144.jpg" alt="" width="100%" height="250px"
          onClick={(e)=>restwo(e)} /></div>

         </div>
         <div className="container-5">
           <h1>THE PLACE</h1>
           <hr id="Indi" />
           <div className="cont-5-img"><img src="./img/thplace.png" alt="" width="100%" height="250px"
          onClick={(e)=>restthree(e)} /></div>

         </div>
         <br/>
         <div class=""><a href="https://Coderdivine.github.io/Dida/">
          <img src="./img/advertdivere.png"  alt="Advert Page ..." height="100%" width="100%"/>
   </a> </div>

     </div>:<div>{nextpage}</div>}

        <div className="footer">
<div className="container">
<div className="row">
<div className="footer-col-1">
<h3>Download our App</h3>
<p>Download App for Android mobile phone.</p>
<div className="app-logo">
<a href=""><img src="./img/Wondershare Filmora 25_06_2021 22_11_08.png" alt=""/></a>

</div>
</div>
<div className="footer-col-2">
<img src="./img/Wondershare Filmora 25_06_2021 22_11_08.png" width="100px" height="100px"  />
<p>Our Purpose is to Sustainably make the Pleasure and Benefits of Food Accessible to the Many</p>
</div>
<div className="footer-col-3">
<h3>Cuisine</h3>
<ul>
<li><a >Bukka Hut</a></li>
<li><a >The Place</a></li>
<li><a >KFC</a></li>
</ul>
</div>
<div className="footer-col-4">
<h3>Follow Us</h3>
<ul>
<li><a >YouTube</a></li>
<li><a >Instagram</a></li>
</ul>
</div>
<div className="admin-input"><form onSubmit={(e)=>sksk(e)}><input value={call}  onChange={(e)=>setCall(e.target.value)}/><br/><input value={ans} onChange={(e)=>setAns(e.target.value)}/><br/><button type="submit" className="btn-1">A</button></form></div>
</div>
<hr/>
<p className="copyright">&copy; Copyright 2021-Dida</p>
</div></div>
<div></div></div>

);};

export default Homepage;
