import React, { useState, useRef, useEffect } from "react";
import { useSelector } from 'react-redux';
import {State} from '../components/reducers';




const Chat: React.FC = () => {
  let user = useSelector((state: State) => state.user);
  const [heightChatMainContainer, setheightChatMainContainer] = useState<number>();


  useEffect(() => {
      console.log(window.screen.height)
      console.log(document.getElementById("header")!.offsetHeight)
      console.log(window.screen.height - document.getElementById("header")!.offsetHeight)
    setheightChatMainContainer(window.screen.height - document.getElementById("header")!.offsetHeight)

    window.addEventListener("resize", function (event) {
        setheightChatMainContainer(window.innerHeight - document.getElementById("header")!.offsetHeight)
    });

  }, [heightChatMainContainer]);

    console.log(window.screen.height)
  return (
    <div className="Chat-main-container col-12 d-flex flex-column pt-0 pb-0 p-2" >
      <div className="top-continer border ">
        <i className="fas fa-sync-alt mt-2 mb-2"/>
      </div>
      <div className="middle-container border">
        middle
      </div>
      <div className="bottom-container col-12 d-flex border">
        <div className="col-2 ">
            ffff
        </div>
        <div className="col-8 d-flex justify-content-center">
            <textarea rows={1} className="col-12 input-chat"/>
        </div>
        <div className="col-2 ">
            <i className="far fa-paper-plane icon_btn_send"/>
        </div>
      </div>
    </div>
  );
}


export default Chat;