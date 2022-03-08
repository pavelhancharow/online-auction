import { FC } from 'react';
import { AlertBox } from './MyAlertStyles';

export const MyAlert: FC = ({ children }): JSX.Element => {
  return <AlertBox>{children}</AlertBox>;
};
