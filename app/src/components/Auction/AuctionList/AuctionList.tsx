import { FC, useEffect } from 'react';
import { AuctionItem } from './AuctionItem/AuctionItem';
import { AuctionBox } from '../AuctionStyles';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { getLots } from 'src/store/reducers/UserSlice/actionCreator';
import { ILot } from 'src/models/IModels';

export const AuctionList: FC = (): JSX.Element => {
  const { currentLots } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const uploadLots = async () => await dispatch(getLots());

    uploadLots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuctionBox>
      {currentLots.map((lot: ILot) => (
        <AuctionItem key={lot._id} {...lot} />
      ))}
    </AuctionBox>
  );
};
