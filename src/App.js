import './App.css';
import React,{useState,useEffect,useContext,createContext} from 'react';
import Homepage from "./Homepage";
import {Axios} from "./contact";
export const create=createContext();
 export  function App() {
  const[order,setOrder]=useState([]);
  const[never,setNever]=useState("");
  const[error,setError]=useState(false);
  const[name,setName]=useState("");
  const[pass,setPass]=useState();
  const[sedone,setSedone]=useState();
  
 const[data,setData]=useState({
    username:"",
    email:"",
    password:"",
    conpass:""
  });
  const[dataa,setDataa]=useState([]);
  function handles(e){
    setData({...data,[e.target.id]:e.target.value});
    
  }
  const[send,setSend]=useState(false);
const[contact,setContact]=useState([]);


const getone=async()=>{
  
  const res= await Axios.get("/orders").catch((err)=>{console.log(err)});
  if(res && res.data)setOrder(res.data);
}
const gettwo=async()=>{
  
  const res= await Axios.get("/orders").catch((err)=>{console.log(err)});
  if(res && res.data)setOrder(res.data);
}
const getthree=async()=>{
  
  const res= await Axios.get("/orders").catch((err)=>{console.log(err)});
  if(res && res.data)setOrder(res.data);
}

useEffect(()=>{
  gettwo();
},[]);
useEffect(()=>{
  getone();
},[]);
useEffect(()=>{
  getthree();
},[]);

const get= async()=>{
    const res= await Axios.get("/reg").catch((err)=>{console.log(err)})
if(res && res.data)setContact(res.data);
  }

    const submit= async()=>{
          const dataai= data ;
 const res= await Axios.post("/reg",dataai).catch((err)=>{console.log(err)})
if(res)get();
      setSend(true);
      console.log(res);
 localStorage.setItem('data',JSON.stringify(data));}
   
 useEffect(()=>{
      get()
    },[])
  
 const loginlist= localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):[]
  const[cool,setCool]=useState(loginlist); 
 

  return(<div>{!localStorage.getItem('data') ?<div>
    <div class="account-page">
  <div class="container">
  <div class="row">
  <div class="col-2" >
   <img src="/storage/emulated/0/MyAlbums/image/images (19).jpeg" width="100%"/>
   </div>

   <div class="col-2" >
     <div class="form-container">
     <div class="form-btn" >
     <span onclick="login()">Register</span>
      <hr id="Indicator" />
     </div>
     <div>

     
     
     <form id="Regform" onSubmit={(e)=>submit(e)}>
     <input type="text" id="username" placeholder="Username" onChange={(e)=>handles(e)}/>
      <input type="email" id="email" placeholder="Email"  onChange={(e)=>handles(e)} />
     <input type="password" id="password" placeholder="Password"  onChange={(e)=>handles(e)} />
     <input type="password" id="conpass" placeholder="Confrim Password" onChange={(e)=>handles(e)}  />
     <button type="submit" class="btn">Register</button>
     </form>
     </div>
     </div>
  </div>
  </div>
    </div> 
     </div>
  </div>:<div>
    <create.Provider value={{contact,order,getone,gettwo,getthree}}>
    <Homepage  />
    </create.Provider>
    
    </div>}</div>);
  
};

export default App;