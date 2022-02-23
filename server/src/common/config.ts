import dotenv from 'dotenv';
import { join } from 'path';
import { env } from 'process';

dotenv.config({ path: join(__dirname, '../../.env') });

interface IConfig {
  PORT: string;
}

enum Config {
  PORT = '3000',
}

export default <IConfig>{
  PORT: env.PORT || Config.PORT,
};
