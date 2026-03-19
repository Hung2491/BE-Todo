import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import taskRoutes from './routes/taskRoutes';

const app = express();
const port = 8000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ts-crud')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
