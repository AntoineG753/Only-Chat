import React, { useState, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {State} from '../components/reducers';
import io from 'socket.io-client';
import HeaderCP from '../components/HeaderCP'
import Chat from '../components/Chat'
import SecretKey from '../components/secretKey'
let socket;




const Home: React.FC = () => {
    const dispatch = useDispatch()
    let user = useSelector((state: State) => state.user);
    let listUserConnected = useSelector((state: State) => state.listUserConnected);
    const secretKey = useSelector((state: State) => state.secretKey);
    console.log(user)
    console.log(listUserConnected)
    

    
    function logout() {
      console.log("loagout");
      window.location.href = "/logout/timeout";
      Cookies.set("token", "");
    }

    
    // window.onload = function () {
    //   inactivityTime();
    // };

    useEffect(() => {
      
      var inactivityTime = function () {
        var time: NodeJS.Timeout;
        resetTimer();
        // DOM Events
        document.onmousemove = resetTimer;
        document.oninput = resetTimer;
  
        function resetTimer() {
          clearTimeout(time);
          time = setTimeout(logout, 600000);
          // 600000 milliseconds = 10 min
        }
      };
      inactivityTime();
     
      socket = io("http://192.168.1.95:5000/", { query: user.uuid });
      socket.emit('userLogged', user);
      socket.on('userConnected', (userConnected) => {
        dispatch({ type: 'receiveListConnected', payload: userConnected})
      })
      
      
    }, [user.uuid,user,dispatch,secretKey]);

    return (
        <div className="home-main-container col-12 d-flex flex-column">
            <SecretKey secretKey={secretKey}/>
            <HeaderCP/>
            <div className="home-container bg-color-darkSM">
              <Chat/>
            </div>
        </div>
    )
}


export default Home;