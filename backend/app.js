import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './db/connect.js';
import userRouter from './routes/user.js';
import blogRouter from './routes/blog.js';
import downloadRouter from './routes/download.js';
import contactRouter from './routes/contact.js';
import { notFound, errorHandler } from './middleware/errorMIddleware.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

dotenv.config();

const port = process.env.PORT;

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get('/', (req, res) => res.send('Server is ready'));

// Route Users
app.use('/api/users', userRouter);
app.use('/api/blog', blogRouter);
app.use('/api/download', downloadRouter);
app.use('/api/contact', contactRouter);

// CUSTOM ERROR MIDDLEWARE
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    if (connectDB && port) {
      app.listen(port, console.log(`Server listening on port ${port}`));
    } else {
      console.log('Could not connect to database or server');
    }
  } catch (err) {
    console.log(err);
  }
};

start();