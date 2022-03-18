import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';

export const UserAccount: FC = (): JSX.Element => {
  const { currentUser } = useAppSelector(({ userReducer }) => userReducer);
  const { firstname, lastname, phone, email, id } = currentUser;

  return (
    <>
      <h2>Hello {firstname}!</h2>
      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
      <p>Mobile phone: {phone}</p>
      <p>Your E-mail: {email}</p>
      <p>Your ID: {id}</p>
    </>
  );
};
