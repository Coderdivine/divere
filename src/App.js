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

    const submit= async(e)=>{
     e.preventDefault();
          const dataai= data ;
 const res= await Axios.post("/reg",dataai).catch((err)=>{console.log(err)})
if(res)get();
      setSend(true);
      console.log(res);
 //localStorage.setItem('data',JSON.stringify(data));}
 localStorage.setItem('data',"hey") }
 useEffect(()=>{
      get()
    },[])
  
 const[load,setLoad]=useState(true);
 useEffect(() => {
   setInterval(() => {
     setLoad(false);
   }, 4000);
 }, [load]);

  return(<div>{load ?<div class="load"><img src="./img/diverfoodhome.png" alt=" Divere Food..."/></div>:<div> 
    <div>
    {!localStorage.getItem('data') ?alert("Sign up first"):<div></div>}
      <create.Provider value={{contact,order,getone,gettwo,getthree,submit,handles}}>
      <Homepage  />
      </create.Provider>
       </div>
      
      </div>}
   </div>
    
    )
  
}

export default App;
