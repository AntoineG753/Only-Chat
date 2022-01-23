import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import HeaderCP from '../components/HeaderCP'
import Chat from '../components/Chat'
import SecretKey from '../components/secretKey'



type Props = {secretKey: string, setsecretKey: Function, user: any, listUserConnected: any}

const Home: React.FC<Props> = ({ secretKey, setsecretKey, user, listUserConnected }: Props) => {

    
    function logout() {
      console.log("loagout");
      window.location.href = "/logout/timeout";
      Cookies.set("token", "");
    }

    
    
    useEffect(() => {
     
      var inactivityTime = function () {
        var time: NodeJS.Timeout;
        resetTimer();
        // DOM Events
        document.onmousemove = resetTimer;
        document.oninput = resetTimer;
  
        function resetTimer() {
          clearTimeout(time);
          time = setTimeout(logout, 1200000);
          // 600000 milliseconds = 10 min
        }
      };
      inactivityTime();

     
     
    }, []);

    console.log(user)
    console.log(listUserConnected)
    
    return (
        <div className="home-main-container col-12 d-flex flex-column">
            {secretKey && <SecretKey secretKey={secretKey} setsecretKey={setsecretKey}/>}
            <HeaderCP/>
            <div className="home-container bg-color-darkSM">
            {user.uuid && !secretKey && <Chat user={user}/>}
            </div>
        </div>
    )
}


export default Home;