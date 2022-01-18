import { Server } from "socket.io";
// import { DB } from './connectDB.js';
// import multer from 'multer';
// import jwt from "jsonwebtoken";

export const socketIO = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  let userConnected = [];
  io.engine.on("headers", (headers) => {
    headers["Access-Control-Allow-Private-Network"] = true;
  });

  io.on("connection", (socket) => {
    let _user = [];
    console.log("un utilisateru c'est connecté: " + socket.id);
    

    socket.on("userLogged", (user) => {
      
      const User = {
        uuid: user.uuid,
        pseudo: user.pseudo,
        admin: user.admin,
        ban: user.ban,
        number_connections: user.number_connections,
        creation_date: user.creation_date,
        id_socket: socket.id,
      };

      console.log(User);
      _user = User;
      console.log(socket.id);
      userConnected.push(User);
      io.emit("userConnected", userConnected);
    });

    //enter the ramdom room
    socket.on("enter_room", (room) => {

      socket.join(room)
      console.log(room)

  });

    // on ecoute les deconnexions
    socket.on("disconnect", () => {
      // console.log(_user)
      for (let i = 0; i < userConnected.length; i++) {
        if (userConnected[i].pseudo === `${_user.pseudo}`) {
          userConnected.splice(i, 1);
          io.emit("userConnected", userConnected);
        }
      }

      io.emit("userDisconnect", userConnected);

      console.log("un utilisateru c'est deconnecté: " + socket.id);
    });
  });
};
