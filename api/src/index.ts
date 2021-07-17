import express from 'express';
import app from './app';

// Express initialization
const expressApp = express();
const PORT = process.env.SERVER_PORT ? +process.env.SERVER_PORT : 3000;
expressApp.listen(PORT, app);

// Middlewares
expressApp.get('/', (req, res) => {
  res.send('Root endpoint working!');
});
