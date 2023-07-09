// Desc: Main entry point for the application
import express from 'express';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import bodyParser from 'body-parser';
import cors from 'cors';

import authRouter from './routes/authRoutes.js';
import productRouter from './routes/productRoutes.js';

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

app.use('/api', limiter);
app.use('/api/auth', authRouter);
app.use('api/products', productRouter)


// Set security HTTP headers
app.use(helmet());


export default app;