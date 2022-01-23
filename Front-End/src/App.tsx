import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Home from './layouts/Home';
import ErreurPage from './layouts/ErreurPage';
import Cgu from './layouts/Cgu';
import Ddc from './layouts/Ddc';
import Login from './layouts/Login';
import Logout from './layouts/Logout';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {State} from './components/reducers';


const App: React.FC = () => {
  const [secretKey, setsecretKey] = useState<string>("");
  // const [loginOK, setloginOK] = useState<boolean>(false);
  let user = useSelector((state: State) => state.user);
  let listUserConnected = useSelector((state: State) => state.listUserConnected);
  const token_connect: string = Cookies.get('token')!;
  const path = window.location.pathname;
  const pathName = path.split('/')[2];
  const dispatch = useDispatch();
 
  useEffect(() => {
    

    if (!token_connect || token_connect.length !== 196) {
      if (window.location.pathname !== '/' && window.location.pathname !== `/logout/${pathName}`) {
       
        window.location.href = '/';
        
    }
   } else {
      
      axios.post(`${process.env.REACT_APP_API_URL}/api/auth/connectAuth`, { "authorization": "Bearer " + token_connect })
      .then(res => {
        Cookies.set('token', `${res.data.token}`, { expires: 1 })
       
        dispatch({ type: 'get_userInfo', payload: res.data.result[0] })
        console.log(res)



       
     
        // socket.emit('userLogged', res.data.result[0]);
        
        
        

        if(window.location.pathname === '/' || window.location.pathname === `/logout/${pathName}` ) {
          window.location.href = '/home'
        }
      })
      .catch(error => (window.location.pathname !== '/' && window.location.pathname !== `/logout/${pathName}` && (window.location.href = '/')))
   }

  }, [pathName, token_connect, dispatch]);

  

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/err" element={<ErreurPage/>} />
          {user && <Route path="/home" element={<Home secretKey={secretKey} setsecretKey={setsecretKey} user={user} listUserConnected={listUserConnected}/>} />}
          <Route path="/" element={<Login setsecretKey={setsecretKey}/>}/>
          <Route path="/logout/:id" element={<Logout/>} />
          <Route path="/cgu" element={<Cgu/>} />
          <Route path="/ddc" element={<Ddc/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
