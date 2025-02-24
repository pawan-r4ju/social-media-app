import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import chatRoutes from './routes/chatRoutes';
import callRoutes from './routes/callRoutes';
import notificationRoutes from './routes/notificationRoutes';
import { config } from 'process';

const app = express();
dotenv.config()



app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/calls', callRoutes);

export default app;