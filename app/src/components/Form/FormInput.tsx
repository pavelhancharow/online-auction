import { FC } from 'react';
import {
  FieldErrors,
  FieldNamesMarkedBoolean,
  UseFormRegister,
} from 'react-hook-form';
import { IForm } from 'src/models/IForms';
import { InputIdType, InputType } from 'src/models/InputTypes';
import { getInputOption } from 'src/services/getInputOption';
import { MyInput } from '../UI/MyInput';
import { FormInputBox, FormInputCheck, FormInputFail } from './FormStyles';

interface FormInputProps {
  id: InputIdType;
  type: InputType;
  placeholder: string;
  register: UseFormRegister<IForm>;
  errors: FieldErrors<IForm>;
  touchedFields: FieldNamesMarkedBoolean<IForm>;
  password?: string;
}

export const FormInput: FC<FormInputProps> = ({
  id,
  errors,
  touchedFields,
  ...props
}): JSX.Element => {
  return (
    <FormInputBox>
      <MyInput id={id} options={getInputOption(id)} {...props} />
      {(errors[`${id}`] || errors[`${id}`]?.type === 'validate') && (
        <FormInputFail />
      )}
      {touchedFields[`${id}`] && !errors[`${id}`] && <FormInputCheck />}
      {(errors[`${id}`] || errors[`${id}`]?.type === 'validate') && (
        <b>{errors[`${id}`]?.message || 'The password do not match'}</b>
      )}
    </FormInputBox>
  );
};
