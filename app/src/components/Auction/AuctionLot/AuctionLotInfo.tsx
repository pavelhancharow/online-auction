import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { AuctionLotInfoBox } from './AuctionLotStyles';

export const AuctionLotInfo: FC = (): JSX.Element => {
  const { currentLot } = useAppSelector((state) => state.userReducer);
  const { title, img, description, duration, rate } = currentLot;

  return (
    <AuctionLotInfoBox>
      <p>
        <b>Description: </b>
        {description}
      </p>
      <span>
        <b>Lot duration up to: </b>
        {duration}
      </span>
      <span>
        <b>Current rate: </b>
        {rate}$
      </span>
    </AuctionLotInfoBox>
  );
};
