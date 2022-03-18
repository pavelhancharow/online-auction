import {
  email,
  password,
  firstname,
  lastname,
  phone,
  title,
  description,
  start,
  finish,
  rate,
} from '../validation/requests';

export const checkRegistration = () => [
  firstname,
  lastname,
  phone,
  password,
  email,
];

export const checkLot = () => [title, description, start, finish, rate];

export const checkLogin = () => [password, email];
