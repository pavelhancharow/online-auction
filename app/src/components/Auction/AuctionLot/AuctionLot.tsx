import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MyLoader } from 'src/components/UI/MyLoader/MyLoader';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { setLot } from 'src/store/reducers/UserSlice/actionCreator';
import { AuctionBox } from '../AuctionStyles';
import { AuctionLotBtns } from './AuctionLotBtns';
import { AuctionLotInfo } from './AuctionLotInfo';
import { AuctionLotBox, AuctionLotImg } from './AuctionLotStyles';

export const AuctionLot: FC = (): JSX.Element => {
  const { lotId } = useParams();
  const dispatch = useAppDispatch();
  const {
    currentLot: { title, img },
    isLoading,
  } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const uploadLot = async () => await dispatch(setLot(lotId!));

    if (lotId) uploadLot();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <MyLoader />;

  return (
    <AuctionBox>
      <AuctionLotBox>
        <AuctionLotImg srcSet={img} alt={title} />
        <h2>{title}</h2>
        <AuctionLotInfo />
        <AuctionLotBtns />
      </AuctionLotBox>
    </AuctionBox>
  );
};
