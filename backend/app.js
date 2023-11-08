import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './db/connect.js';
import userRouter from './routes/user.js';
import blogRouter from './routes/blog.js';
import { notFound, errorHandler } from './middleware/errorMIddleware.js';

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => res.send('Server is ready'));

// Route Users
app.use('/api/users', userRouter);
app.use('/api/blog', blogRouter);

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
