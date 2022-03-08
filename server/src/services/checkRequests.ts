import {
  email,
  password,
  firstname,
  lastname,
  phone,
} from '../validation/requests';

export const checkRegistration = () => [
  firstname,
  lastname,
  phone,
  password,
  email,
];
export const checkLogin = () => [password, email];
