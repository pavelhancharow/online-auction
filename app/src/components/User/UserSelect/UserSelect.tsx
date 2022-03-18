/* eslint-disable react-hooks/exhaustive-deps */
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import { MySelect } from '../../UI/MySelect';
import { AdminLotList, UserLotList } from 'src/data/LotList';
import { UserSelectBox } from './UserSelectStyles';

export const UserSelect: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAppSelector(({ userReducer }) => userReducer);
  const LotList = currentUser.roles[0] !== 'USER' ? AdminLotList : UserLotList;
  const [select, setSelect] = useState<string>(LotList[0].link);

  const onChange = (e: SyntheticEvent<HTMLSelectElement>) => {
    setSelect(e.currentTarget.value);
    navigate(e.currentTarget.value);
  };

  useEffect(() => {
    if (location.pathname === '/account') {
      setSelect(LotList[0].link);
    }
  }, [location.pathname]);

  return (
    <UserSelectBox>
      <span>Auction List:</span>
      <MySelect select={select} options={LotList} handleChange={onChange} />
    </UserSelectBox>
  );
};
