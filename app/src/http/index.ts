import axios from 'axios';

export const $host = axios.create({
  baseURL: process.env.SERVER_URL,
});
