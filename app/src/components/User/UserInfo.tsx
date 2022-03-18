import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { MyLoader } from '../UI/MyLoader';
import { AdminAccount, UserAccount } from '../Account';
import { ModalFormBox } from '../UI/MyModal/ModalFormStyles';

export const UserInfo: FC = (): JSX.Element => {
  const { userReducer } = useAppSelector((state) => state);
  const { isLoading, currentUser } = userReducer;
  const user = currentUser.roles[0];

  if (isLoading) return <MyLoader />;

  return (
    <ModalFormBox>
      {user !== 'USER' ? <AdminAccount /> : <UserAccount />}
    </ModalFormBox>
  );
};
