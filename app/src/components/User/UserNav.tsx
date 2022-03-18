import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { ModalInfoBox } from '../UI/MyModal/ModalInfoStyles';
import { UserSelect } from './UserSelect';
import { UserBtns } from './UserBtns';

export const UserNav: FC = (): JSX.Element => {
  const { currentUser } = useAppSelector(({ userReducer }) => userReducer);
  const user = currentUser.roles[0];

  return (
    <ModalInfoBox>
      <h2>Online Auction</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa magnam
        placeat, alias qui eligendi.
      </p>
      <span>{user !== 'USER' ? 'Admin' : 'User'} Panel:</span>
      <UserBtns />
      <UserSelect />
    </ModalInfoBox>
  );
};
