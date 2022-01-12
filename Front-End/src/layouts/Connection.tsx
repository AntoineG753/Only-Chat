import React, { useState, useRef, useEffect } from "react";
import { useForm } from 'react-hook-form';


type login = { [x: string]: string }

const Connection: React.FC= () => {
    const { register, handleSubmit, reset } = useForm();
    
    

    function onSubmitLogin(data: login) {
        console.log(data)
    }
    
  return (
    <div className="connection-main-container bg-color-107 position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
      <div className="connection-container bg-color-68 rounded shadow">
        <h1>Only Chat</h1>
        <div className="d-flex justify-content-center ">
            <form className="form-loggin d-flex justify-content-center flex-column col-6" onSubmit={handleSubmit(onSubmitLogin)}>
                <label htmlFor="pseudo-loggin">Pseudo : </label>
                <input type="text" id="pseudo-loggin" className="form-control" {...register('pseudo', { required: true })}/>

                <label htmlFor="psw-loggin">Clés secraite : </label>
                <input type="password" id="psw-loggin" className="form-control" {...register('password', { required: true })} />

                <button type="submit" className="btn btn-primary">Connexion</button>
            </form>
        </div>
      </div>
    </div>
  );
}


export default Connection;