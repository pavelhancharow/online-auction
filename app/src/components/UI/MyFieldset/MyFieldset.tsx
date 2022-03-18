import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IAdminForm } from 'src/models/IForms';
import { InputType } from 'src/models/InputTypes';
import { MyFieldsetBox } from './MyFieldsetStyles';

interface MyDurationProps {
  id: 'start' | 'img';
  type: InputType;
  register: UseFormRegister<IAdminForm>;
  time?: string;
}

export const MyFieldset: FC<MyDurationProps> = ({
  children,
  id,
  type,
  time,
  register,
}): JSX.Element => {
  return (
    <MyFieldsetBox>
      <label htmlFor={id}>{children} </label>
      <input id={id} type={type} min={time} {...register(id)} />
    </MyFieldsetBox>
  );
};
