import './App.css';
import React,{useState,useEffect,useContext,createContext} from 'react';
import Homepage from "./Homepage";
import {Axios} from "./contact";
import {Aaxios} from "./Hello";
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
  
  const res= await Aaxios.get("/employee").then((response)=>{
    setOrder(response.data);
  });
  if(res && res.data)setOrder(res.data);
}
const gettwo=async()=>{
  
  const res= await Aaxios.get("/employees").then((response)=>{
    setOrder(response.data);
  });
  if(res && res.data)setOrder(res.data);
}
const getthree=async()=>{
  
  const res= await Aaxios.get("/employees").then((response)=>{
    setOrder(response.data);
  });
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
    const res= await Aaxios.get("/employee").catch((err)=>{console.log(err)})
if(res && res.data)setContact(res.data);
  }

    const submit= async(e)=>{
     e.preventDefault();
               
     const dataai= data ;
     const res= await Axios.post("/create",dataai).then(()=>{alert("Success")})
if(res)get();
      setSend(true);
      console.log(res);
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

  return(<div>
    <div>
    
      <create.Provider value={{contact,order,getone,gettwo,getthree,submit,handles}}>
      <Homepage  />
      </create.Provider>
       </div>
      
      
   </div>
    
    )
  
}

export default App;
