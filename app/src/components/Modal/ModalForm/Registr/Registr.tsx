import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ModalFormBox } from '../ModalFormStyles';
import { RegistForm } from './RegistrForm';

export const Registr: FC = (): JSX.Element => {
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
