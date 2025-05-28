import React, { useState } from 'react';
import './Basicdemo.css';
const BasicDemo = () => {

    const [msg, setMsg] = useState('selection');
     // let msg= "selection";

    return (
    <div>
     <h1><span style={{color:'red'}}> {msg} </span> React Lifecycle and Components </h1>
   <button style={{margin:'10px',backgroundColor:'green'}} onClick={() =>{setMsg('protection') }}>protection</button>
   <button  onClick={() =>{setMsg('For Everyday')}}>For Everyday</button>
    </div>
    );


};
export default BasicDemo;
