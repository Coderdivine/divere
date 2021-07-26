import React,{useState} from 'react'
import './App.css';

function Home() {
    const[menu,setMenu]=useState(false);
    const Handleclick=(e)=>{
        setMenu(true);
    }
    return (
        <div>
             <div class="header">
<div class="container">
<div class="navbar">
  <div>
  <a href=""> <img src="./img/divereli.png"  width="100px" /></a>
  </div>
  <nav><nav>
    <ul><div class="li">
    <li><a onClick="">Home</a></li>
     <li><a onClick="">Orders</a></li>
     <li><a onClick="">Help</a></li>
     <li><a  onClick="">About</a></li>
     <li><a  onClick="">Settings</a></li>
</div>  
    </ul>
  </nav>
  <div>{!menu?<div></div>:<div><div className="pointer"><ul >
     <div className="pa"><button className="x" onClick=""><h1>X</h1></button></div>
     <li><a onClick="">Home</a></li>
     <li><a onClick="">Orders</a></li>
     <li><a onClick="">Help</a></li>
     <li><a  onClick="">About</a></li>
     <li><a  onClick="">Settings</a></li>
   </ul></div></div>}</div>
  </nav>

<img src="./img/menubtn.png"  className="menu-icon" 
  width="30px" height="90px" onClick={(e)=>Handleclick(e)}/></div>
  </div></div>
  <body>
  <div class="offer">
<div class="small-container">
  <div class="row">
  <div class="col-2">
  <img src="hfhfh" class="offer-img"/>
  </div>
  <div class="col-2">
  <p>Exclusively available on Chim<i>store</i></p>
  <h1> T-shirt black</h1>
  <small> Sponsored by Tonymarv and it's comes with 3more T-shirt</small>
  <a href="" class="btn">Buy Now &#8594;</a>
  </div>
  
  </div>
  </div>
  </div>
  <div class="homepage">
    <h1>this is home page</h1>
    <div class="chat">
      <h2>This is chat page</h2>
    </div>
  </div>
  </body>
  
        </div>
    )
}

export default Home;
