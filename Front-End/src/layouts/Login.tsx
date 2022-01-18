import React, { useState, useRef, useEffect } from "react";
import LoginCP from '../components/LoginCP';
import RegisterCP from '../components/RegisterCP';

type Props = {loginOK: Boolean, setloginOK: Function}


const Connection: React.FC<Props> = ({ loginOK, setloginOK}: Props) => {

  const [registerCP, setregisterCP] = useState(false);

  
    
  return (
    <div className="login-main-container bg-color-107 position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
      {registerCP === false && <LoginCP registerCP={registerCP} setregisterCP={setregisterCP} loginOK={loginOK} setloginOK={setloginOK} />}
      {registerCP === true && <RegisterCP registerCP={registerCP} setregisterCP={setregisterCP} loginOK={loginOK} setloginOK={setloginOK}/>}
    </div>
  );
}


export default Connection;