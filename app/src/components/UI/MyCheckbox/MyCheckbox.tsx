import { FC, ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ILoginForm } from 'src/models/IForms';
import { CheckboxIdType } from 'src/models/InputTypes';
import { MyCheckboxBox } from './MyCheckboxStyle';

interface MyCheckboxProps {
  children: ReactNode;
  id: CheckboxIdType;
  register: UseFormRegister<ILoginForm>;
}

export const MyCheckbox: FC<MyCheckboxProps> = ({
  children,
  id,
  register,
}): JSX.Element => {
  return (
    <MyCheckboxBox>
      <input type="checkbox" id={id} {...register(id)} />
      <label htmlFor={id}>{children}</label>
    </MyCheckboxBox>
  );
};
