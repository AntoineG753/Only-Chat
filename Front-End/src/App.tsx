import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Home from './layouts/Home';
import ErreurPage from './layouts/ErreurPage';
import Login from './layouts/Login';
import Logout from './layouts/Logout';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';




const App: React.FC = () => {
 
  const [loginOK, setloginOK] = useState(false);
  const token_connect: string = Cookies.get('token')!;
  const path = window.location.pathname;
  const pathName = path.split('/')[2];
  const dispatch = useDispatch();
 
  useEffect(() => {
    

    if (!token_connect || token_connect.length !== 196) {
      if (window.location.pathname !== '/' && window.location.pathname !== `/logout/${pathName}`) {
       
        window.location.href = '/';
        
    }
   } else if(loginOK === false) {
      
      axios.post(`${process.env.REACT_APP_API_URL}/api/auth/connectAuth`, { "authorization": "Bearer " + token_connect })
      .then(res => {
        Cookies.set('token', `${res.data.token}`, { expires: 1 })
       
        dispatch({ type: 'get_userInfo', payload: res.data.result[0] })
        setloginOK(true)
        console.log(res)
        if(window.location.pathname === '/' || window.location.pathname === `/logout/${pathName}` ) {
          window.location.href = '/home'
        }
      })
      .catch(error => (window.location.pathname !== '/' && window.location.pathname !== `/logout/${pathName}` && (window.location.href = '/')))
   }

  }, [loginOK, pathName, token_connect, dispatch]);

  

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/err" element={<ErreurPage/>} />
          {loginOK === true && <Route path="/home" element={<Home/>} />}
          <Route path="/" element={<Login loginOK={loginOK} setloginOK={setloginOK} />} />
          {loginOK === false && <Route path="/logout/:id" element={<Logout/>} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
