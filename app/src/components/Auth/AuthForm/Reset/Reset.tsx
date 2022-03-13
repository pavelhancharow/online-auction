import { FC } from 'react';
import { ModalFormBox } from '../../../UI/MyModal/ModalFormStyles';
import { ResetForm } from './ResetForm';

export const Reset: FC = (): JSX.Element => {
  return (
    <ModalFormBox>
      <h2>Reset password</h2>
      <span>We'll e-mail you instructions on how to reset your password</span>
      <ResetForm />
    </ModalFormBox>
  );
};
