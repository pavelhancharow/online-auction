import { Navigate } from 'react-router-dom';
import { AuctionList } from 'src/components/AuctionList/AuctionList';
import { AuthLogin, AuthRegistr, AuthReset } from 'src/components/Auth';
import { AuctionLot } from 'src/components/AuctionLot';
import { UserInfo } from 'src/components/User';

export const authRoutes = [
  { path: '/', element: <AuthLogin /> },
  { path: 'registration', element: <AuthRegistr /> },
  { path: 'reset', element: <AuthReset /> },
  { path: '*', element: <Navigate to="/" /> },
];

export const privateUserRoutes = [
  { path: '/account', element: <UserInfo /> },
  { path: '/activeLots', element: <AuctionList /> },
  { path: '/completedLots', element: <AuctionList /> },
  { path: '/futureLots', element: <AuctionList /> },
  { path: '/:lotId', element: <AuctionLot /> },
  { path: '*', element: <Navigate to="/account" /> },
];
