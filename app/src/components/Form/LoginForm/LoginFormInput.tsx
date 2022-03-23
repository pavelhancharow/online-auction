import { FC, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../FormInput';
import { ILoginForm } from 'src/models/IForms';
import { InputIdType, InputType } from 'src/models/InputTypes';

interface LoginFormInputProps {
  id: InputIdType;
  type: InputType;
  placeholder: string;
}

const LoginFormInputMemo: FC<LoginFormInputProps> = ({
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

export const LoginFormInput = memo(LoginFormInputMemo);
