import { FC } from 'react';
import { MyLoader } from 'src/components/UI/MyLoader/MyLoader';
import { ModalFormBox } from 'src/components/UI/MyModal/ModalFormStyles';
import { useAppSelector } from 'src/hooks/redux';
import { AdminForm } from './AdminForm/AdminForm';

export const AdminAccount: FC = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.userReducer);

  if (isLoading) return <MyLoader />;

  return (
    <ModalFormBox>
      <h2>Admin Panel</h2>
      <AdminForm />
    </ModalFormBox>
  );
};
