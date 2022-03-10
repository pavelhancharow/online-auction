import {
  email,
  password,
  firstname,
  lastname,
  phone,
  title,
  description,
  duration,
  rate,
} from '../validation/requests';

export const checkRegistration = () => [
  firstname,
  lastname,
  phone,
  password,
  email,
];

export const checkLot = () => [title, description, duration, rate];

export const checkLogin = () => [password, email];
