import { FC } from 'react';
import { ModalFormBox } from 'src/components/UI/MyModal/ModalFormStyles';
import { AdminForm } from './AdminForm';

export const AdminAccount: FC = (): JSX.Element => {
  return (
    <ModalFormBox>
      <h2>Admin Panel</h2>
      <AdminForm />
    </ModalFormBox>
  );
};
