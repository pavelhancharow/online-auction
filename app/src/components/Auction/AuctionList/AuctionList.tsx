/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { AuctionItem } from './AuctionItem/AuctionItem';
import { AuctionBox } from '../AuctionStyles';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { getLots } from 'src/store/reducers/UserSlice/actionCreator';
import { ILot } from 'src/models/IModels';
import { MyLoader } from 'src/components/UI/MyLoader/MyLoader';

export const AuctionList: FC = (): JSX.Element => {
  const { currentLots, isLoading } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const uploadLots = async () => await dispatch(getLots());
    uploadLots();
  }, []);

  if (isLoading) return <MyLoader />;

  return (
    <AuctionBox>
      {currentLots.map((lot: ILot) => (
        <AuctionItem key={lot._id} {...lot} />
      ))}
    </AuctionBox>
  );
};
