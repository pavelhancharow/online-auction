import dotenv from 'dotenv';
import { join } from 'path';
import { env } from 'process';

dotenv.config({ path: join(__dirname, '../../.env') });

interface IConfig {
  PORT: string;
  MONGO_URL: string;
}

enum Config {
  PORT = '3000',
  MONGO_URL = '*****',
}

export default <IConfig>{
  PORT: env.PORT || Config.PORT,
  MONGO_URL: env.MONGO_URL || Config.MONGO_URL,
};
