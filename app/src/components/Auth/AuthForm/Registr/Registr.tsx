import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MyLoader } from 'src/components/UI/MyLoader/MyLoader';
import { useAppSelector } from 'src/hooks/redux';
import { ModalFormBox } from '../../../UI/MyModal/ModalFormStyles';
import { RegistForm } from './RegistrForm';

export const Registr: FC = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.userReducer);

  if (isLoading) return <MyLoader />;

  return (
    <ModalFormBox>
      <h2>Create an account</h2>
      <span>
        Create your account, it takes less than a minute. If you already have an
        account <Link to="/">login</Link>
      </span>
      <RegistForm />
    </ModalFormBox>
  );
};
