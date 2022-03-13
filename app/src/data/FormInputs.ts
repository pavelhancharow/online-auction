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
  { id: 'password', type: 'password', placeholder: 'New password' },
  {
    id: 'confirm',
    type: 'password',
    placeholder: 'Confirm new password',
  },
];

export const RegistFormInputs: IFormInput[] = [
  { id: 'firstname', type: 'text', placeholder: 'First name' },
  { id: 'lastname', type: 'text', placeholder: 'Last name' },
  { id: 'phone', type: 'tel', placeholder: 'Phone' },
  { id: 'email', type: 'email', placeholder: 'E-mail address' },
  { id: 'password', type: 'password', placeholder: 'Password' },
  {
    id: 'confirm',
    type: 'password',
    placeholder: 'Confirm password',
  },
];

export const AdminFormInputs: IFormInput[] = [
  { id: 'title', type: 'text', placeholder: 'Lot Title' },
  { id: 'description', type: 'text', placeholder: 'Lot Description' },
  { id: 'rate', type: 'number', placeholder: 'Starting Rate USD' },
];
