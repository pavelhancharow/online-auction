/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { MyAlert } from './components/UI/MyAlert/MyAlert';
import {
  authUser,
  clearMessages,
} from './store/reducers/UserSlice/actionCreator';
import { Auth, User } from './pages';

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
      await dispatch(authUser());
    }

    if (token) checkAuth();
  }, []);

  return (
    <BrowserRouter>
      {currentUser.roles[0] ? <User /> : <Auth />}
      {message && <MyAlert>{message}</MyAlert>}
    </BrowserRouter>
  );
};
