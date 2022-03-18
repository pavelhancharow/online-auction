import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../FormInput';
import { IRegistrForm } from 'src/models/IForms';
import { InputIdType, InputType } from 'src/models/InputTypes';

interface RegistrFormInputProps {
  id: InputIdType;
  type: InputType;
  placeholder: string;
}

export const RegistrFormInput: FC<RegistrFormInputProps> = ({
  id,
  ...props
}): JSX.Element => {
  const { register, formState, watch } = useFormContext<IRegistrForm>();
  const { errors, touchedFields } = formState;
  const password = watch('password');

  return (
    <FormInput
      id={id}
      register={register}
      errors={errors}
      touchedFields={touchedFields}
      password={password}
      {...props}
    />
  );
};
