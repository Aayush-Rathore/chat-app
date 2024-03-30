import { Server } from "socket.io";

const io = new Server(8000, {
  cors: {
    origin: process.env.CLIENT,
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Socket Connect", socket.id);
  socket.on("join:room", (data) => {
    io.to(data.roomId).emit("user:joined", {
      username: data.username,
      id: socket.id,
    });
    socket.join(data.roomId);
    io.to(socket.id).emit("join:room", data);
  });
});
