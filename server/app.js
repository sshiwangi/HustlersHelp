// Desc: Main entry point for the application
import express from 'express';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import bodyParser from 'body-parser';
import cors from 'cors';

import authRouter from './routes/authRoutes.js';
import mentorRouter from './routes/mentorRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(cors({
    origin: '*',
    credentials: true
}));

// GLOBAL MIDDLEWARES
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
    max: 3000, // 3000 requests from same IP
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Too many requests from this IP, please try again in an hour!'
});
app.get('/', (req, res) => {
    res.send('API is running....');
});
app.use('/api', limiter);
app.use('/api/products', productRouter)
app.use('/api/mentors', mentorRouter)
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter);

app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`
    });
});

// Set security HTTP headers
app.use(helmet());


export default app;