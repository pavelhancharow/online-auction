import { check, ValidationChain } from 'express-validator';

export const firstname: ValidationChain = check(
  'firstname',
  'First name cannot be empty'
).notEmpty();

export const lastname: ValidationChain = check(
  'lastname',
  'Last name cannot be empty'
).notEmpty();

export const phone: ValidationChain = check(
  'phone',
  'Phone not correct'
).notEmpty();

export const password: ValidationChain = check(
  'password',
  'The minimum password length is at least 8 characters'
).isLength({ min: 8 });

export const email: ValidationChain = check(
  'email',
  'Incorrect email address'
).isEmail();

export const title: ValidationChain = check(
  'title',
  'Title cannot be empty'
).notEmpty();

export const description: ValidationChain = check(
  'description',
  'Description cannot be empty'
).notEmpty();

export const start: ValidationChain = check(
  'start',
  'Start date cannot be empty'
).notEmpty();

export const finish: ValidationChain = check(
  'finish',
  'Finish date cannot be empty'
).notEmpty();

export const rate: ValidationChain = check(
  'rate',
  'Rate cannot be empty'
).isNumeric();
