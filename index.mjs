import { config } from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

config();

const httpServer = createServer();
const io = new Server(httpServer);

io.on('connection', (socket) => {
  socket.on('respond', (data) => {
    io.emit(data.name, data.value);
  });
});

httpServer.listen(process.env.PORT);
