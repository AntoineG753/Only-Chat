import React, { useState, useRef, useEffect } from "react";
import { useSelector } from 'react-redux';
import {State} from '../components/reducers';
const Logo = require('./pictures/logo.png');

const HeaderCP: React.FC = () => {
  let user = useSelector((state: State) => state.user);
 
    
  return (
    <div className="HeaderCP-main-container col-12 bg-color-dark d-flex p-4 pt-2 pb-2 justify-content-between">
      <img src={Logo} alt="Logo only chat" className=" col-3"/>
      
      <p className="m-0 d-flex align-items-center">Bonjour, <br/>{user.pseudo}</p>
    </div>
  );
}


export default HeaderCP;