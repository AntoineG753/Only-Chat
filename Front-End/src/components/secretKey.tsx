import React, { useEffect } from "react";


type Props = {secretKey: string, setsecretKey: Function}

const SecretKey: React.FC<Props> = ({ secretKey, setsecretKey }: Props) => {
    
    useEffect(() => {
      
    
    }, [secretKey]);

  return (
    <div className="secretKey-main-container position-absolute d-flex justify-content-center align-items-center pt-0 pb-0 p-3 " style={{ height: `100vh` }}>
      <div className="d-flex flex-column bg-color-dark rounded p-2">
        <div className="col-12 d-flex justify-content-end pb-0 p-2"><i className="fas fa-times-circle text-danger shadow" onClick={() => (setsecretKey(""))}></i></div>
        <h1 className="text-center">BIENVENUE</h1>
        <p>Voici votre clé secrète : </p>
        <p className="p-1 border text-break">{secretKey}</p>
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


export default SecretKey;