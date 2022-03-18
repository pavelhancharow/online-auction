import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { AuctionLotInfoBox } from './AuctionLotStyles';

export const AuctionLotInfo: FC = (): JSX.Element => {
  const { currentLot } = useAppSelector((state) => state.userReducer);
  const { description, start, rate } = currentLot;

  return (
    <AuctionLotInfoBox>
      <p>
        <b>Description: </b>
        {description}
      </p>
      <span>
        <b>Lot start date: </b>
        {start}
      </span>
      <span>
        <b>Current rate: </b>
        {rate}$
      </span>
    </AuctionLotInfoBox>
  );
};
