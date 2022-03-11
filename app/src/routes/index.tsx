import { Navigate } from 'react-router-dom';
import { AdminAccount, UserAccount } from 'src/components/Account';
import { AuctionList, AuctionLot } from 'src/components/Auction';
import { Login, Registr, Reset } from 'src/components/Auth/AuthForm';

export const authRoutes = [
  { path: '/', element: <Login /> },
  { path: 'registration', element: <Registr /> },
  { path: 'reset', element: <Reset /> },
  { path: '*', element: <Navigate to="/" /> },
];

export const privateUserRoutes = [
  { path: '/account', element: <UserAccount /> },
  { path: '/auction', element: <AuctionList /> },
  { path: '/auction/:lotId', element: <AuctionLot /> },
  { path: '*', element: <Navigate to="/account" /> },
];

export const privateAdminRoutes = [
  { path: '/admin', element: <AdminAccount /> },
  { path: '*', element: <Navigate to="/admin" /> },
];
