import express, { Application } from 'express';
import { router } from './router';

const app: Application = express();

const PORT = 8000;

app.use('/', router);

app.listen(PORT, (): void => {
  console.log('SERVER IS UP ON PORT:', PORT);
});
