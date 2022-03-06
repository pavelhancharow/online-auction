import { InputIdType, InputType } from 'src/models/InputTypes';

interface IFormInput {
  id: InputIdType;
  type: InputType;
  placeholder: string;
}

export const LoginFormInputs: IFormInput[] = [
  { id: 'email', type: 'email', placeholder: 'E-mail address' },
  { id: 'password', type: 'password', placeholder: 'Password' },
];

export const ResetFormInputs: IFormInput[] = [
  {
    id: 'email',
    type: 'email',
    placeholder: 'Enter e-mail address',
  },
];

export const RegistFormInputs: IFormInput[] = [
  { id: 'username', type: 'text', placeholder: 'Full name' },
  { id: 'email', type: 'email', placeholder: 'E-mail address' },
  { id: 'password', type: 'password', placeholder: 'Password' },
  {
    id: 'confirm',
    type: 'password',
    placeholder: 'Confirm password',
  },
];
