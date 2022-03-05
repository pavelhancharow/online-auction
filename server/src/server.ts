import mongoose from 'mongoose';
import { app } from './app';
import config from './common/config';

const { PORT, MONGO_URI } = config;

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    app.listen(PORT, () => {
      process.stdout.write(
        `Server is running on PORT: \x1b[32m${PORT}\x1b[0m\n`
      );
    });
  } catch (error) {
    process.stderr.write(`${error}`);
    process.exit(1);
  }
};

start();
