import { RegisterOptions } from 'react-hook-form';

export const nameOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required',
  },
  pattern: {
    value: /^[a-zA-Z][a-zA-Z ]{2,}$/,
    message: 'Enter your name in Latin and avoid numbers',
  },
};

export const textOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required',
  },
};

export const phoneOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required',
  },
  pattern: {
    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    message: 'Valid formats: (XXX) XXX-XXXX / XXXXXXXXXX',
  },
};

export const rateOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required',
  },
  pattern: {
    value: /^[0-9]+$/im,
    message: 'Only numbers',
  },
};

export const emailOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required',
  },
  pattern: {
    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: 'Enter a valid email',
  },
};

export const passwordOptions: RegisterOptions = {
  required: {
    value: true,
    message: 'This field is required',
  },
  minLength: {
    value: 8,
    message: 'The minimum password length is at least 8 characters',
  },
};
