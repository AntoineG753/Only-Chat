import React, { useState, useRef, useEffect } from "react";
import Timeout from '../components/Timeout';



const Logout: React.FC = () => {



const pathName = window.location.pathname.split('/logout/')[1].toString();;
const logOutEvent = decodeURIComponent(pathName)
console.log(logOutEvent)
  
    
  return (
    <div className="logout-main-container position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
      {logOutEvent === "timeout" && <Timeout/>}
    </div>
  );
}


export default Logout;