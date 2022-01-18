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
    console.log("un utilisateru c'est connecté: " + socket.id);




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
