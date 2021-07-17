import { Mongoose, Schema, connect } from 'mongoose';
import { User } from './user.d';
import fs from 'fs';

export default async function app(): Promise<void> {
  // Main application

  // Set database
  const mongoose = new Mongoose();
  mongoose.connect('mongodb://mongo:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () =>
    console.log('[mongoose]: Database connection open and working!')
  );

  const USERS_PATH = './data/users.json';
  const data = JSON.parse(fs.readFileSync(USERS_PATH, 'utf-8'));
  const userList: User[] = data['results'];
}