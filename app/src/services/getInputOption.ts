import {
  emailOptions,
  nameOptions,
  passwordOptions,
} from 'src/data/FormOptions';
import { InputIdType } from 'src/models/InputTypes';

export function getInputOption(value: InputIdType) {
  switch (value) {
    case 'name':
      return nameOptions;
    case 'email':
      return emailOptions;
    default:
      return passwordOptions;
  }
}
