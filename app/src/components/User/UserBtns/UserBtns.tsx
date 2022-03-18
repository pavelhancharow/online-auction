import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux';
import { ModalInfoBtns } from '../../UI/MyModal/ModalInfoStyles';
import { MyButton } from '../../UI/MyButton';
import { logOut } from 'src/store/reducers/UserSlice/actionCreator';

export const UserBtns: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <ModalInfoBtns>
      <MyButton handleClick={() => dispatch(logOut())}>Logout</MyButton>
      <MyButton isLink={true}>
        <Link to="/account">Go to an account</Link>
      </MyButton>
    </ModalInfoBtns>
  );
};
