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
      <b>First Name: {firstname}</b>
      <b>Last Name: {lastname}</b>
      <b>Mobile phone: {phone}</b>
      <b>Your Email: {email}</b>
      <b>Your ID: {id}</b>
    </ModalFormBox>
  );
};
