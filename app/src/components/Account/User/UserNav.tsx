import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux';
import { logOut } from 'src/store/reducers/UserSlice/actionCreator';
import { ModalInfoBox, ModalInfoBtns } from '../../UI/MyModal/ModalInfoStyles';
import { MyButton } from '../../UI/MyButton/MyButton';

export const UserNav: FC = (): JSX.Element => {
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
        <MyButton isLink={true}>
          <Link to="/">Go to an auction</Link>
        </MyButton>
      </ModalInfoBtns>
    </ModalInfoBox>
  );
};
