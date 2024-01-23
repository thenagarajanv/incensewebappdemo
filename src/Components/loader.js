import React from 'react'
import 'C:/Users/Nagarajan V/incensewebsite/src/Components/loader.css';
import { Margin } from '@mui/icons-material';
const Loader = () => {
   return (
    <body>
  <div class="icon">
    <div class="bar" style={{backgroundColor: "#3498db" ,marginLeft: "-60px"}}></div>
    <div class="bar" style={{backgroundColor: "#e74c3c" ,marginLeft: "-20px"}}></div>
    <div class="bar" style={{backgroundColor: "#f1c40f" ,marginLeft: "20px"}}></div>
    <div class="bar" style={{backgroundColor: "#2eB869" ,marginLeft: "60px"}}></div>
  </div>  
</body> 
  );
}

export default Loader;