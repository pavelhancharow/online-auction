import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { MyCheckbox } from 'src/components/UI/MyCheckbox/MyCheckbox';
import { LoginFormInputs } from 'src/data/FormInputs';
import { FormBox } from 'src/components/Modal/ModalForm/Form/FormStyles';
import { LoginInput } from './LoginInput';
import { LoginContainer } from './LoginStyles';
import { ILoginForm } from 'src/models/IForms';

export const LoginForm: FC = (): JSX.Element => {
  const methods = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    mode: 'onBlur',
  });

  const { handleSubmit, register } = methods;

  const onSubmit = (data: ILoginForm) => console.log(data);

  return (
    <FormProvider {...methods}>
      <FormBox onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        {LoginFormInputs.map((data) => (
          <LoginInput key={data.id} {...data} />
        ))}
        <LoginContainer>
          <MyCheckbox id="remember" register={register}>
            Remember Me
          </MyCheckbox>
          <Link to="reset">Forgot password?</Link>
        </LoginContainer>
        <MyButton type="submit">Login</MyButton>
      </FormBox>
    </FormProvider>
  );
};
