import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from 'src/components/Modal/ModalForm/Form/FormInput';
import { ILoginForm } from 'src/models/IForms';
import { InputIdType, InputType } from 'src/models/InputTypes';

interface LoginInputProps {
  id: InputIdType;
  type: InputType;
  placeholder: string;
}

export const LoginInput: FC<LoginInputProps> = ({
  id,
  ...props
}): JSX.Element => {
  const { register, formState } = useFormContext<ILoginForm>();
  const { errors, touchedFields } = formState;

  return (
    <FormInput
      id={id}
      register={register}
      errors={errors}
      touchedFields={touchedFields}
      {...props}
    />
  );
};
