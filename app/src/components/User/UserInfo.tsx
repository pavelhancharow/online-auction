/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { MyLoader } from '../UI/MyLoader';
import { AdminAccount, UserAccount } from '../Account';
import { ModalFormBox } from '../UI/MyModal/ModalFormStyles';
import { authUser } from 'src/store/reducers/UserSlice/actionCreator';

export const UserInfo: FC = (): JSX.Element => {
  const { userReducer } = useAppSelector((state) => state);
  const { isLoading, currentUser } = userReducer;
  const user = currentUser.roles[0];
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    async function checkAuth() {
      await dispatch(authUser());
    }

    if (token) checkAuth();
  }, []);

  if (isLoading) return <MyLoader />;

  return (
    <ModalFormBox>
      {user !== 'USER' ? <AdminAccount /> : <UserAccount />}
    </ModalFormBox>
  );
};
