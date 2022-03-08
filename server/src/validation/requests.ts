import { check, ValidationChain } from 'express-validator';

export const firstname: ValidationChain = check(
  'firstname',
  'First name cannot be empty'
).notEmpty();

export const lastname: ValidationChain = check(
  'lastname',
  'Last name cannot be empty'
).notEmpty();

export const phone: ValidationChain = check('phone', 'Phone not correct')
  .notEmpty()
  .isNumeric();

export const password: ValidationChain = check(
  'password',
  'The minimum password length is at least 8 characters'
).isLength({ min: 8 });

export const email: ValidationChain = check(
  'email',
  'Incorrect email address'
).isEmail();
