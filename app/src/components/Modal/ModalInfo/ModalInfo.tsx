import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MyButton } from '../../UI/MyButton/MyButton';
import { ModalInfoBox, ModalInfoBtns } from './ModalInfoStyles';

export const ModalInfo: FC = (): JSX.Element => {
  return (
    <ModalInfoBox>
      <h2>Online Auction</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa magnam
        placeat, alias qui eligendi.
      </p>
      <span>Login or register:</span>
      <ModalInfoBtns>
        <MyButton isLink={true}>
          <Link to="/">Login</Link>
        </MyButton>
        <MyButton isLink={true}>
          <Link to="registration">Create an account</Link>
        </MyButton>
      </ModalInfoBtns>
    </ModalInfoBox>
  );
};
