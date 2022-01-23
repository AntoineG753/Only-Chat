import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import CreateChat from './CreateChat'
import io from 'socket.io-client';
let socket :any;


type ChatMsg = {[x: string]: string}
type Props = { user: any }

const Chat: React.FC<Props> = ({ user }: Props) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [NumberUserRoom, setNumberUserRoom] = useState<number>();
  const [filePreview, setfilePreview] = useState<string>();
  const [file, setfile] = useState<string>();
  console.log(user)
  // let receiveMessage = useSelector((state: State) => state.receivedMessage);
  
  

  useEffect(() => {
    console.log(user)
    const Chat_container = document.querySelector('.msg-container') as HTMLDivElement;

  
    socket = io("http://192.168.1.95:5000/", { query: user });
    
   
    socket.on('userConnected', (userConnected : any) => {
      dispatch({ type: 'receiveListConnected', payload: userConnected})
    })
    
    
    socket.on("currentRoom", (Rooms : any) => {
      console.log(Rooms)
      setNumberUserRoom(Rooms[1].length)
    })

    socket.on("received_message", (message : any) => {
      console.log(message)
     
      // dispatch({ type: 'receivedMessage', payload: message})
      const msg = `
      <div class="col-12 d-flex ${user.uuid === message.uuid && "justify-content-end" || "justify-content-start"}">
        <div class="col-9 d-flex flex-column">
          ${user.uuid === message.uuid && `<p class="text-end mb-0 mt-0 m-2">moi</p>` || `<p class="mb-0 mt-0 m-2">${message.pseudo}</p>`}
          <p class="msg-bg-color p-2 pt-1 pb-1 mt-1 rounded-msg ${user.uuid === message.uuid && "p-my-message" || "p-other-message"}" >${message.message}</p>
          <p class="font-size-date-msg pt-0 pb-0 p-2 ${user.uuid === message.uuid && "text-end"}">${message.date}</p>
        </div>
      </div>`
      Chat_container.insertAdjacentHTML('beforeend', msg)
      var Elements = document.querySelector('.msg-container') as HTMLDivElement;
      Elements.scrollTop = Elements.scrollHeight;
    })

    socket.emit('reload_chat', {
      message: 'reload'
    })
    

  }, [dispatch, user]);

  

const textAreaChat = () => {
  const textAreaChat = document.getElementById("textAreaChat")! as HTMLTextAreaElement;
  const value = textAreaChat.value;
  const rows = textAreaChat.rows;
  if (rows === 4) {
    if ((value.match(/\n/g) || []).length + 1 < 4) {
      textAreaChat.rows = (value.match(/\n/g) || []).length + 1;
    }
  } else {
    textAreaChat.rows = (value.match(/\n/g) || []).length + 1;
  }
}

const handleFilePreview = (e: any) => {
  if (!e.target.files[0]) {

  } else {
      setfile(e.target.files[0])
      setfilePreview(URL.createObjectURL(e.target.files[0]))
  }
}


function onSubmitMsg(data: ChatMsg) {
  const newDate = new Date();
  const date = newDate.toTimeString();
  
  socket.emit("chat_message", {
    uuid: user.uuid,
    pseudo: user.pseudo,
    message: data.message,
    date: date.split(" ")[0]
  })
  reset();
  textAreaChat();
  setfilePreview("");
  setfile("");
}

function ReloadChat() {
  const Chat_container = document.querySelector('.msg-container') as HTMLDivElement;
  socket.emit("ReloadChat", {})
  Chat_container.innerHTML = '';
  socket.on("ReloadChatSuccess", () => {
    dispatch({ type: 'clearMessage'})
  })
}
 


    
  return (
    <div className="Chat-main-container col-12 d-flex flex-column pt-0 pb-0 p-2 h-100" >
      {user.vip === 1 && <CreateChat/>}
      <div className="top-continer d-flex justify-content-between pt-1 pb-0 p-3 shadow">
        <p className="m-0 d-flex justify-content-center align-items-center"><i className="fas fa-user"/><span className=" m-0 pt-0 pb-0 p-1 h5">{NumberUserRoom}</span></p>
        {user.vip === 1 && <i className="fas fa-search mt-2 mb-2"/>}
        {user.vip === 1 && <i className="far fa-plus-square mt-2 mb-2"/>}
        <i className="fas fa-sync-alt mt-2 mb-2 " onClick={() => (ReloadChat())}/>
      </div>
      <div className="middle-container mt-2 d-flex flex-column justify-content-end position-relative">
        <div className=" msg-container position-absolute col-12 ">
        </div>
        {filePreview && <div id="div_imgPreview" className="col-3 position-absolute z-index-10 rounded" >
          <button className="btn_imgPreview_chat rounded-circle p-1 d-flex align-items-center justify-content-center position-absolute"><i className="fas fa-times" onClick={() => (setfile(""), setfilePreview(""))}></i></button>
          <img id="img_chat" alt="" className="w-100 h-100 shadow rounded" src={filePreview} />
        </div>}
      </div>
      <form className="bottom-container col-12 d-flex mt-2 mb-3 bg-color-107 pt-1 pb-1 rounded" onSubmit={handleSubmit(onSubmitMsg)}>
        <input type="file" className="d-none" id="input_chat_img"  {...register('file', { required: false })} onChange={(e) => (handleFilePreview(e))} />
        <div className="col-2 d-flex justify-content-center  ">
          {user.vip === 1 && <i className="fas fa-folder-plus h-100 d-flex align-items-end" onClick={() => (document.getElementById('input_chat_img')?.click())}/>}
        </div>
        <div className="col-8 d-flex justify-content-center">
          <textarea id="textAreaChat" rows={1} className="col-12 input-chat bg-color-107 rounded" {...register('message', { required: true })} onChange={textAreaChat}/>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <button type="submit" className="far fa-paper-plane icon_btn_send h-100 d-flex align-items-end"/>
        </div>
      </form>
    </div>
  );
}


export default Chat;