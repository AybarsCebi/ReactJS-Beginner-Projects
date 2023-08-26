import React, { useState } from 'react';


const TemperatureApp =()=>{
  const [temp, settemp]=useState(10);

  return (
    <div>
      <h1 style={{textAlign:'center', color:'#2b5870'}}>Temperature App</h1>
      <div className='app-container'>
        <div className='temperature-display-container'>
          <div className='temperature-display'>{temp} °C</div>
        </div>
          <div className='button-container'>
            <button className='increasebutton' onClick={()=>{settemp(temp+1)}}>+</button>
            <button className='decreasebutton' onClick={()=>{settemp(temp-1)}}>-</button>
          </div>
      </div>
      {temp>30 ? <h2 style={{color:'rgb(163, 2, 2)', textAlign:'center'}}>Too Hot!</h2>:null}
      {temp<0 ? <h2 style={{color:'#2b5870', textAlign:'center'}}>Too Cold!</h2>:null}
    </div>
    
      
      
  );
  
}
export default TemperatureApp;