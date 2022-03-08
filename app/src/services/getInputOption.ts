import {
  emailOptions,
  nameOptions,
  passwordOptions,
  phoneOptions,
} from 'src/data/FormOptions';
import { InputIdType } from 'src/models/InputTypes';

export function getInputOption(value: InputIdType) {
  switch (value) {
    case 'firstname':
      return nameOptions;
    case 'lastname':
      return nameOptions;
    case 'phone':
      return phoneOptions;
    case 'email':
      return emailOptions;
    default:
      return passwordOptions;
  }
}
