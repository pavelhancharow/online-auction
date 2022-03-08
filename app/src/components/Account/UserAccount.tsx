import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { ModalFormBox } from '../Modal/ModalForm/ModalFormStyles';

export const UserAccount: FC = (): JSX.Element => {
  const {
    currentUser: { firstname, lastname, phone, email, id },
  } = useAppSelector((state) => state.userReducer);

  return (
    <ModalFormBox>
      <h2>Hello {firstname}!</h2>
      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
      <p>Mopile phone: {phone}</p>
      <p>Your Email: {email}</p>
      <p>Your ID: {id}</p>
    </ModalFormBox>
  );
};
