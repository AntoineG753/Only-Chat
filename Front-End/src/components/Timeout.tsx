import React, { useEffect } from "react";



const Timeout: React.FC = () => {

  useEffect(() => {
     
    
    
  }, []);
    
  return (
    <div className="Timeout-container position-relative d-flex justify-content-center align-items-center h-100 w-100 ">
        <div className="position-absolute h-auto col-10 rounded shadow p-4 bg-color-107 border d-flex row">
            <h1 className="text-center ">ATTENTION</h1>
            <p className="text-center h4">Vous avez était deconecté pour inactivité de plus de 20<span className="h5">mins</span></p>
            <button className="btn btn-primary" onClick={() => (window.location.href = '/')}>Reconnexion</button>
        </div>
    </div>
  );
}


export default Timeout;