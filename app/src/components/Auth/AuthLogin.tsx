import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MyLoader } from '../UI/MyLoader';
import { useAppSelector } from 'src/hooks/redux';
import { ModalFormBox } from '../UI/MyModal/ModalFormStyles';
import { LoginForm } from '../Form';

export const AuthLogin: FC = (): JSX.Element => {
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
