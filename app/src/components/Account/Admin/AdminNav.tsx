import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  ModalInfoBox,
  ModalInfoBtns,
} from 'src/components/UI/MyModal/ModalInfoStyles';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { useAppDispatch } from 'src/hooks/redux';
import { logOut } from 'src/store/reducers/UserSlice/actionCreator';

export const AdminNav: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <ModalInfoBox>
      <h2>Online Auction</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa magnam
        placeat, alias qui eligendi.
      </p>
      <ModalInfoBtns>
        <MyButton handleClick={() => dispatch(logOut())}>Logout</MyButton>
      </ModalInfoBtns>
    </ModalInfoBox>
  );
};
