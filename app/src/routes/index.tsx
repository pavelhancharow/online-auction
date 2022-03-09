import { Navigate } from 'react-router-dom';
import { AdminAccount, UserAccount } from 'src/components/Account';
import { Login, Registr, Reset } from 'src/components/Auth/AuthForm';

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

export const privateAdminRoutes = [
  { path: '/admin', element: <AdminAccount /> },
  { path: '*', element: <Navigate to="/admin" /> },
];
