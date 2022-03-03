import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from 'src/components/Modal/ModalForm/Form/FormInput';
import { IRegistrForm } from 'src/models/IForms';
import { InputIdType, InputType } from 'src/models/InputTypes';

interface RegistrInputProps {
  id: InputIdType;
  type: InputType;
  placeholder: string;
}

export const RegistrInput: FC<RegistrInputProps> = ({
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
