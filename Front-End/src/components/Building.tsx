import React, { useState, useRef, useEffect } from "react";
import { useForm } from 'react-hook-form';


type Props = {setbuildingCP: Function}

const Building: React.FC<Props> = ({setbuildingCP }: Props) => {
   
    
  return (
    <div className="position-absolute z-index-5 h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="bg-color-dark p-2 col-11 d-flex align-items-center flex-column rounded">
            <div className="d-flex justify-content-end col-12">
                <i className="fas fa-times close-building rounded-circle d-flex justify-content-center align-items-center shadow" onClick={() => (setbuildingCP(false))}></i>
            </div>
            <div className="col-11">
                <h1 className="color-titre">Bienvenue sur Only-Chat</h1>
                <p>Bonjour,<br/>
                Ce site est actuellement en développement.<br/>
                Son utilisation est donc restreinte.<br/>
                Des bugs et des maintenances peuvent à apparaître à tout moment.<br/>
                </p>
                <p className="text-end">Merci pour votre compréhension.</p>
            </div>
        </div>
    </div>
  );
}


export default Building;