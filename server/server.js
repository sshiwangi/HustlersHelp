import http from 'http';
import {Server} from 'socket.io';

import app from './app.js';
import connectDB from './db/conn.js';

const port = process.env.PORT || 5000;

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected with id: ' + socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected');
        });
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        });
    });



connectDB().then(() => {
    console.log('Database connected successfully');
    server.listen(port, () => {
        console.log(`App running on port ${port}...`);
    });
}).catch((error) => {
    console.log(error);
}
);
