import { FC, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInput } from '../FormInput';
import { IAdminForm } from 'src/models/IForms';
import { InputIdType, InputType } from 'src/models/InputTypes';

interface AdminFormInputProps {
  id: InputIdType;
  type: InputType;
  placeholder: string;
}

const AdminFormInputMemo: FC<AdminFormInputProps> = ({
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

export const AdminFormInput = memo(AdminFormInputMemo);
