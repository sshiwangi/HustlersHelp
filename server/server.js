import http from 'http';

import app from './app.js';
import connectDB from './db/conn.js';

const server = http.createServer(app);

const port = process.env.PORT || 5000;

connectDB().then(() => {
    console.log('Database connected successfully');
    server.listen(port, () => {
        console.log(`App running on port ${port}...`);
    });
}).catch((error) => {
    console.log(error);
}
);
