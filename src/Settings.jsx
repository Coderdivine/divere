
import React,{useState} from 'react';

function Settings() {
    const [percento,setPercento]= useState(250);
   const value=[{price:500},{price:450},{price:400},{price:300},{price:250},{price:60}];

   
    const ddd=
    
            <select value={percento} onChange={(e)=>{
              const selectedfood=e.target.value;
              setPercento(selectedfood);
              localStorage.setItem("percento",JSON.parse(percento));
            }}>
              {value.map(list=>
          
                <option value={list.price}>{list.price}%</option>
                
                )}
              </select>

              
    
      
       
     
    return (
        <div>
         {ddd}
        
        </div>
    );
};

export default Settings;
