import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from 'src/components/Form/FormInput';
import { IResetForm } from 'src/models/IForms';
import { InputIdType, InputType } from 'src/models/InputTypes';

interface ResetInputProps {
  id: InputIdType;
  type: InputType;
  placeholder: string;
}

export const ResetInput: FC<ResetInputProps> = ({
  id,
  ...props
}): JSX.Element => {
  const { register, formState, watch } = useFormContext<IResetForm>();
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
