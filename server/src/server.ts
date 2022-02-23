import express from 'express';
import config from './common/config';

const app = express();

const { PORT } = config;

app.get('/', (_, res) => {
  res.send('GET!');
});

app.listen(PORT, () => {
  process.stdout.write(`Server is running on PORT: \x1b[32m${PORT}\x1b[0m\n`);
});
