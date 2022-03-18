import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { MyLoader } from '../UI/MyLoader';
import { ModalFormBox } from '../UI/MyModal/ModalFormStyles';
import { ResetForm } from '../Form';

export const AuthReset: FC = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.userReducer);

  if (isLoading) return <MyLoader />;

  return (
    <ModalFormBox>
      <h2>Reset password</h2>
      <span>We'll e-mail you instructions on how to reset your password</span>
      <ResetForm />
    </ModalFormBox>
  );
};
