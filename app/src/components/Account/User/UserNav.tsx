import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux';
import {
  clearCurrentLot,
  logOut,
} from 'src/store/reducers/UserSlice/actionCreator';
import { ModalInfoBox, ModalInfoBtns } from '../../UI/MyModal/ModalInfoStyles';
import { MyButton } from '../../UI/MyButton/MyButton';

export const UserNav: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const getLink = () =>
    location.pathname === '/account' ? (
      <Link to="/auction">Go to an auction</Link>
    ) : (
      <Link to="/account">Go to an account</Link>
    );

  const backHandler = async () => {
    await dispatch(clearCurrentLot());
    navigate(-1);
  };

  const getBack = () =>
    location.pathname !== '/auction' &&
    location.pathname !== '/account' && (
      <MyButton handleClick={backHandler}>Back</MyButton>
    );

  return (
    <ModalInfoBox>
      <h2>Online Auction</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa magnam
        placeat, alias qui eligendi.
      </p>
      <ModalInfoBtns>
        <MyButton handleClick={() => dispatch(logOut())}>Logout</MyButton>
        <MyButton isLink={true}>{getLink()}</MyButton>
      </ModalInfoBtns>
      {getBack()}
    </ModalInfoBox>
  );
};
