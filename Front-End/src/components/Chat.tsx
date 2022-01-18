import React, { useState, useRef, useEffect } from "react";
import { useSelector } from 'react-redux';
import {State} from '../components/reducers';




const Chat: React.FC = () => {
  let user = useSelector((state: State) => state.user);
  


  useEffect(() => {
  

    

  }, []);

    
  return (
    <div className="Chat-main-container col-12 d-flex flex-column pt-0 pb-0 p-2 h-100" >
      <div className="top-continer d-flex justify-content-end pt-0 pb-0 p-3">
        <i className="fas fa-sync-alt mt-2 mb-2 "/>
      </div>
      <div className="middle-container h-100">
        middle
      </div>
      <div className="bottom-container col-12 d-flex mt-2 mb-3 bg-color-107 pt-1 pb-1 rounded">
        <div className="col-2 d-flex justify-content-center align-items-center">
            <i className="fas fa-folder-plus" />
        </div>
        <div className="col-8 d-flex justify-content-center">
            <textarea rows={1} className="col-12 input-chat bg-color-107 rounded"/>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
            <i className="far fa-paper-plane icon_btn_send"/>
        </div>
      </div>
    </div>
  );
}


export default Chat;