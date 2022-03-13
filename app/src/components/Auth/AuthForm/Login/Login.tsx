import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MyLoader } from 'src/components/UI/MyLoader/MyLoader';
import { useAppSelector } from 'src/hooks/redux';
import { ModalFormBox } from '../../../UI/MyModal/ModalFormStyles';
import { LoginForm } from './LoginForm';

export const Login: FC = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.userReducer);

  if (isLoading) return <MyLoader />;

  return (
    <ModalFormBox>
      <h2>Login</h2>
      <span>
        Don't have an account?{' '}
        <Link to="registration">Create your account</Link>, it takes less than a
        minute.
      </span>
      <LoginForm />
    </ModalFormBox>
  );
};
