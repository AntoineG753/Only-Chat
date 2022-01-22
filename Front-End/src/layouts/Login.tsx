import React, { useState, useRef, useEffect } from "react";
import LoginCP from '../components/LoginCP';
import RegisterCP from '../components/RegisterCP';
import Building from '../components/Building'

type Props = { setsecretKey: Function}


const Connection: React.FC<Props> = ({ setsecretKey}: Props) => {

  const [registerCP, setregisterCP] = useState(false);
  const [buildingCP, setbuildingCP] = useState(true);
  
    
  return (
    <div className="login-main-container bg-color-107 position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
      {buildingCP === true && <Building setbuildingCP={setbuildingCP}/>}
      {registerCP === false && buildingCP === false && <LoginCP registerCP={registerCP} setregisterCP={setregisterCP} />}
      {registerCP === true && buildingCP === false && <RegisterCP registerCP={registerCP} setregisterCP={setregisterCP} setsecretKey={setsecretKey}/>}
    </div>
  );
}


export default Connection;