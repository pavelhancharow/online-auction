import { FC } from 'react';
import { MyLoader } from 'src/components/UI/MyLoader/MyLoader';
import { useAppSelector } from 'src/hooks/redux';
import { ModalFormBox } from '../../../UI/MyModal/ModalFormStyles';
import { ResetForm } from './ResetForm';

export const Reset: FC = (): JSX.Element => {
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
