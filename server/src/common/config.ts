import dotenv from 'dotenv';
import { join } from 'path';
import { env } from 'process';

dotenv.config({ path: join(__dirname, '../../.env') });

interface IConfig {
  PORT: string;
  MONGO_URI: string;
  SECRET_KEY: string;
  ADMIN_EMAIL: string;
  ADMIN_PASS: string;
}

enum Config {
  PORT = '5000',
  MONGO_URI = '*****',
  SECRET_KEY = 'SECRET_KEY_RANDOM',
  ADMIN_EMAIL = '*****',
  ADMIN_PASS = '*****',
}

export default <IConfig>{
  PORT: env.PORT || Config.PORT,
  MONGO_URI: env.MONGO_URI || Config.MONGO_URI,
  SECRET_KEY: env.SECRET_KEY || Config.SECRET_KEY,
  ADMIN_EMAIL: env.ADMIN_EMAIL || Config.ADMIN_EMAIL,
  ADMIN_PASS: env.ADMIN_PASS || Config.ADMIN_PASS,
};
