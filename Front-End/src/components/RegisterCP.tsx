import React, { useState, useRef, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';




type register = { [x: string]: any;}
type Props = {registerCP: Boolean, setregisterCP: Function, loginOK: Boolean, setloginOK: Function}

const RegisterCP: React.FC<Props> = ({ registerCP, setregisterCP, loginOK, setloginOK}: Props) => {
    const { register, handleSubmit, reset } = useForm();
    const [secretKey, setsecretKey] = useState<string>("");
    const [errStatus, seterrStatus] = useState<number>();
    let registerData : {pseudo: string};
    

    useEffect(() => {
        if(errStatus === 500) {
            const element = document.getElementById('pseudo-register') as HTMLInputElement;
            element.classList.add('is-invalid')
        }
        
    }, [errStatus]);

    function onSubmitRegister(data: register) {
        console.log(data)
        if (data.checkSignup === true && data.pseudo) {
            console.log(data.checkSignup)
            registerData = {"pseudo": data.pseudo}
            axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, registerData)
            .then(res => {
                reset();
                console.log(res);
                Cookies.set('token', `${res.data.token}`, { expires: 1 });
                setsecretKey(res.data.secretKey);
                setloginOK(true);
                window.location.href = '/home';
            })
            .catch(error => {seterrStatus(error.response.status);})  
        } else {
            if (data.checkSignup === false) {
                const element = document.getElementById('CkeckSignup') as HTMLInputElement;
                element.classList.add('is-invalid')
            }
            if (!data.pseudo) {
                const element = document.getElementById('pseudo-register') as HTMLInputElement;
                element.classList.add('is-invalid')
            }
        }
    }

    function cancelRegister() {
      console.log('dddd')
      setregisterCP(false)
    }

    

  return (
      <div className="LoginCP-container position-relative bg-color-dark rounded shadow p-4 col-10">
        <h1 className="text-center mt-1">Inscription</h1>
        <div className="d-flex justify-content-center row mt-4">
            <form className="form-LoginCP d-flex justify-content-center flex-column col-12" onSubmit={handleSubmit(onSubmitRegister)}>
                <label htmlFor="pseudo-register" className="mt-2 text-white">Pseudo : </label>
                <input type="text" id="pseudo-register" autoComplete="Pseudo" className="form-control bg-secondary" {...register('pseudo', { required: false })} onChange={(e) => {document.getElementById(`${e.target.id}`)?.classList.remove('is-invalid')}}/>
                {errStatus === 500 && <p className="font-size-text-info-sm text-danger m-0" >Le pseudo doit faire entre 4 et 17 caractères et ne doit pas contenir de caractères spéciaux</p>}
                <div className="form-check mt-2 mb-0">
                    <label htmlFor="CkeckSignup" className="text-white">J'accepte les <a href={`${process.env.REACT_APP_URL}/cgu`}>CGU</a></label>
                    <input className="form-check-input" type="checkbox" value="" id="CkeckSignup" {...register('checkSignup', { required: false })} onChange={(e) => {document.getElementById(`${e.target.id}`)?.classList.remove('is-invalid')}}/>
                </div>
                <div className="d-flex justify-content-center row">
                    
                  <button type="submit" className="btn btn-primary mt-4 col-auto">S'inscrire</button>
                </div>
            </form>
            <p className="font-size-text-info-sm text-danger mt-3">*Le mot de pass sera généré automatiquement lors de votre inscription</p>
        </div>
        <button className="mb-3 position-absolute text-danger bottom-0" onClick={cancelRegister}>Annuler</button>
      </div>
  );
}


export default RegisterCP;