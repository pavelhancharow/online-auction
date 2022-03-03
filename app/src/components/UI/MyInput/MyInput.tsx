import { FC } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { IForm } from 'src/models/IForms';
import { InputIdType, InputType } from 'src/models/InputTypes';
import { MyInputElem } from './MyInputStyle';

interface MyInputProps {
  id: InputIdType;
  type: InputType;
  placeholder: string;
  register: UseFormRegister<IForm>;
  options: RegisterOptions;
  password?: string;
}

export const MyInput: FC<MyInputProps> = ({
  id,
  type,
  placeholder,
  register,
  options,
  ...props
}): JSX.Element => {
  function getRegistr() {
    if (id === 'confirm') {
      return {
        ...register(id, {
          required: {
            value: true,
            message: 'This field is required',
          },
          validate: {
            match: (v) => v === props.password,
          },
        }),
      };
    }
    return { ...register(id, options) };
  }

  return (
    <MyInputElem
      id={id}
      type={type}
      placeholder={placeholder}
      {...getRegistr()}
    />
  );
};
