import React, { useState, useRef, useEffect } from "react";
import {State} from '../components/reducers/index';
import { useDispatch, useSelector } from 'react-redux';

type Props = {secretKey: string}

const secretKey: React.FC<Props> = ({ secretKey }: Props) => {
    
    // const secretKey = useSelector((state: State) => state.secretKey);
    const test = secretKey;

  
    console.log(test)
  return (
    <div
      className="position-absolute d-flex justify-content-center align-items-center pt-0 pb-0 p-3 " style={{ height: `100vh` }}>
      <div className="d-flex flex-column bg-color-dark rounded p-2">
        <h1 className="text-center">BIENVENUE</h1>
        <p>Voici votre clé secrète : </p>
        <p className="p-1 border text-break">{}</p>
        <p>
          Cette clé vous servira à vous reconnecter à votre compte, celle-ci est
          le seul exemplaire qui existe, elle n'est pas modifiable et personne
          ne sera en capacité de vous aider à récupérer votre compte si celle-ci
          est perdue !
        </p>
      </div>
    </div>
  );
}


export default secretKey;