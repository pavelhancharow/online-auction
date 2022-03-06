import { check, ValidationChain } from 'express-validator';

export const username: ValidationChain = check(
  'username',
  'Username cannot be empty'
).notEmpty();

export const password: ValidationChain = check(
  'password',
  'The minimum password length is at least 8 characters'
).isLength({ min: 8 });

export const email: ValidationChain = check(
  'email',
  'Incorrect email address'
).isEmail();
