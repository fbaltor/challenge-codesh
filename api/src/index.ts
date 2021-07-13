import express from 'express';

const app = express();
const PORT = process.env.SERVER_PORT ? +process.env.SERVER_PORT : 3000;

app.get('/', (req, res) => {
  res.send('Root endpoint working!');
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
