import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { ModalFormBox } from '../../UI/MyModal/ModalFormStyles';

export const UserAccount: FC = (): JSX.Element => {
  const {
    currentUser: { firstname, lastname, phone, email, id },
  } = useAppSelector((state) => state.userReducer);

  return (
    <ModalFormBox>
      <h2>Hello {firstname}!</h2>
      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
      <p>Mobile phone: {phone}</p>
      <p>Your E-mail: {email}</p>
      <p>Your ID: {id}</p>
    </ModalFormBox>
  );
};
