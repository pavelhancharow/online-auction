import { FC, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { MyAlert } from 'src/components/UI/MyAlert/MyAlert';
import {
  auth,
  clearMessages,
} from 'src/store/reducers/UserSlice/actionCreator';
import { Auth } from './pages/Auth';
import { User } from './pages/User';
import { Admin } from './pages/Admin';

export const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>('');
  const { success, error, currentUser } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    if (success || error) {
      setMessage(success || error);

      setTimeout(() => {
        setMessage('');
        dispatch(clearMessages());
      }, 1500);
    }
  }, [success, error, dispatch]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    async function checkAuth() {
      await dispatch(auth());
    }

    if (token) checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showPage = () => {
    return currentUser.roles[0] === 'USER' ? (
      <User />
    ) : currentUser.roles[0] === 'ADMIN' ? (
      <Admin />
    ) : (
      <Auth />
    );
  };

  return (
    <BrowserRouter>
      {showPage()}
      {message && <MyAlert>{message}</MyAlert>}
    </BrowserRouter>
  );
};
