import React, { useState, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import {State} from '../components/reducers';
import io from 'socket.io-client';
import HeaderCP from '../components/HeaderCP'
import Chat from '../components/Chat'
let socket;

const Home: React.FC = () => {
    let user = useSelector((state: State) => state.user);
    console.log(user)
    
    

    
    function logout() {
      console.log("loagout");
      window.location.href = "/logout/timeout";
      Cookies.set("token", "");
    }

    var inactivityTime = function () {
      var time: NodeJS.Timeout;
      resetTimer();
      // DOM Events
      document.onmousemove = resetTimer;
      document.oninput = resetTimer;

      function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 60000000);
        // 600000 milliseconds = 10 min
      }
    };

    // window.onload = function () {
    //   inactivityTime();
    // };

    useEffect(() => {
      inactivityTime();
     
      socket = io("http://192.168.1.95:5000/", { query: user.uuid });

      
    }, [user.uuid]);

    return (
        <div className="home-main-container col-12 d-flex flex-column">
            <HeaderCP/>
            <div className="home-container bg-color-darkSM">
              <Chat/>
            </div>
        </div>
    )
}


export default Home;