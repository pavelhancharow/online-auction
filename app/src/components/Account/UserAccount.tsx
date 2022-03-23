import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import { AccountInfoBox, AccountLotsBox } from './AccountStyles';

const UserAccountMemo: FC = (): JSX.Element => {
  const { currentUser } = useAppSelector(({ userReducer }) => userReducer);
  const { firstname, lastname, phone, email, id, lots } = currentUser;

  return (
    <>
      <h2>Hello {firstname}!</h2>
      <AccountInfoBox>
        <li>
          <b>First Name:</b> {firstname}{' '}
        </li>
        <li>
          <b>Last Name:</b> {lastname}
        </li>
        <li>
          <b>Mobile phone:</b> {phone}
        </li>
        <li>
          <b>Your E-mail:</b> {email}
        </li>
        <li>
          <b>Your ID:</b> {id}
        </li>
        <li>
          <b>Your won lots: </b>
          {!lots.length ? (
            'empty'
          ) : (
            <AccountLotsBox>
              {lots.map((lot) => (
                <li key={lot}>
                  <Link to={`/${lot}`}>- {lot}</Link>
                </li>
              ))}
            </AccountLotsBox>
          )}
        </li>
      </AccountInfoBox>
    </>
  );
};

export const UserAccount = memo(UserAccountMemo);
