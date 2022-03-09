import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from 'src/components/Form/FormInput';
import { IAdminForm } from 'src/models/IForms';
import { InputIdType, InputType } from 'src/models/InputTypes';

interface AdminInputProps {
  id: InputIdType;
  type: InputType;
  placeholder: string;
}

export const AdminInput: FC<AdminInputProps> = ({
  id,
  ...props
}): JSX.Element => {
  const { register, formState } = useFormContext<IAdminForm>();
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
