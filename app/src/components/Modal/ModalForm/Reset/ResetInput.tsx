import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from 'src/components/Modal/ModalForm/Form/FormInput';
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
  const { register, formState } = useFormContext<IResetForm>();
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
