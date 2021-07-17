import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://mongo:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connection working!'));

const app = express();
const PORT = process.env.SERVER_PORT ? +process.env.SERVER_PORT : 3000;

app.get('/', (req, res) => {
  res.send('Root endpoint working!');
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
