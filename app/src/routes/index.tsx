import { Navigate } from 'react-router-dom';
import { UserAccount } from 'src/components/Account/UserAccount';
import { Login, Registr, Reset } from 'src/components/Modal/ModalForm';

export const publicRoutes = [
  { path: '/', element: <Login /> },
  { path: 'registration', element: <Registr /> },
  { path: 'reset', element: <Reset /> },
  { path: '*', element: <Navigate to="/" /> },
];

export const privateUserRoutes = [
  { path: '/account', element: <UserAccount /> },
  { path: '*', element: <Navigate to="/account" /> },
];
