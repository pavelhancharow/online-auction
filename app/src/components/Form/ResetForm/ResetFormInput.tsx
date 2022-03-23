import { FC, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../FormInput';
import { IResetForm } from 'src/models/IForms';
import { InputIdType, InputType } from 'src/models/InputTypes';

interface ResetFormInputProps {
  id: InputIdType;
  type: InputType;
  placeholder: string;
}

const ResetFormInputMemo: FC<ResetFormInputProps> = ({
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

export const ResetFormInput = memo(ResetFormInputMemo);
