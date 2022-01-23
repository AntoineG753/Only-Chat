import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

type login = {[x: string]: string}
type Props = {registerCP: Boolean, setregisterCP: Function}

const LoginCP: React.FC<Props> = ({ registerCP, setregisterCP }: Props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const  [errorMsg, seterrorMsg] = useState<string>("");
    const [errStatus, seterrStatus] = useState<number>();
    let loginData : login;
    
    useEffect(() => {
    
    }, []);

    function onSubmitLogin(data: login) {
        console.log(data)
        if (data.pseudo && data.secretKey) {
          
          loginData = {pseudo: data.pseudo, secretKey: data.secretKey}
          axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, loginData)
          .then(res => {
              reset();
              console.log(res);
              Cookies.set('token', `${res.data.token}`, { expires: 1 });
              dispatch({ type: 'get_userInfo', payload: res.data.user })
              navigate('/home');
              
          })
          .catch(error => {seterrStatus(error.response.status); seterrorMsg(error.response.data.msg); console.log(error)})  
      } else {
          // this point is already called error if input is null is false
          if(!data.pseudo) {
            const inputPseudo = document.getElementById('pseudo-loggin') as HTMLInputElement;
            inputPseudo.classList.add('is-invalid')
          }
          if (!data.secretKey) {
            const secretKey = document.getElementById('sk-login') as HTMLInputElement;
            secretKey.classList.add('is-invalid')
          }
      }
    }


    function Register() {
      setregisterCP(true);
    }
    
  return (
      <div className="LoginCP-container position-relative bg-color-dark rounded shadow p-4 col-10">
        <h1 className="text-center color-titre">Only Chat</h1>
        <div className="d-flex justify-content-center mt-3">
            <form className="form-LoginCP d-flex justify-content-center flex-column col-12" onSubmit={handleSubmit(onSubmitLogin)}>
                <label htmlFor="pseudo-loggin" className="mt-2 text-white">Pseudo : </label>
                <input type="text" id="pseudo-loggin" autoComplete="Pseudo" className="form-control bg-secondary " {...register('pseudo', { required: false })} onChange={(e) => {document.getElementById(`${e.target.id}`)?.classList.remove('is-invalid')}}/>

                <label htmlFor="sk-login" className="mt-2 text-white">Clé secrète : </label>
                <input type="password" id="sk-login" autoComplete="current-secret-key" className="form-control bg-secondary" {...register('secretKey', { required: false })} onChange={(e) => {document.getElementById(`${e.target.id}`)?.classList.remove('is-invalid')}}/>

                <div className="d-flex justify-content-center text-center row">
                  {errStatus === 500 && <p className="font-size-text-info-sm text-danger m-0 mt-1" >Pseudo non conforme ou clé secrète manquante</p>}
                  {errStatus === 401 && <p className="m-0 text-danger">{errorMsg}</p>}
                  {errStatus === 404 && <p className="m-0 text-danger">{errorMsg}</p>}
                  <button type="submit" className="btn btn-primary mt-4 col-auto">Connexion</button>
                </div>
            </form>
        </div>
        <button className="mb-3 position-absolute bottom-0 text-warning" onClick={Register}>S'enregistrer</button>
      </div>
  );
}


export default LoginCP;