import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux';
import { MyButton } from '../../UI/MyButton';
import { MyCheckbox } from '../../UI/MyCheckbox/';
import { LoginFormInputs } from 'src/data/FormInputs';
import { FormBox } from '../FormStyles';
import { LoginFormInput } from './LoginFormInput';
import { LoginFormBox } from './LoginFormStyles';
import { ILoginForm } from 'src/models/IForms';
import { setUser } from 'src/store/reducers/UserSlice/actionCreator';

export const LoginForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const methods = useForm<ILoginForm>({
    defaultValues: { email: '', password: '', remember: false },
    mode: 'onBlur',
  });

  const { handleSubmit, register } = methods;

  const onSubmit = async (data: ILoginForm) => {
    const { password, email, remember } = data;

    if (email && password && remember !== undefined) {
      await dispatch(setUser({ password, email, remember }));
    }
  };

  return (
    <FormProvider {...methods}>
      <FormBox onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        {LoginFormInputs.map((data) => (
          <LoginFormInput key={data.id} {...data} />
        ))}
        <LoginFormBox>
          <MyCheckbox id="remember" register={register}>
            Remember Me
          </MyCheckbox>
          <Link to="reset">Forgot password?</Link>
        </LoginFormBox>
        <MyButton type="submit">Login</MyButton>
      </FormBox>
    </FormProvider>
  );
};
