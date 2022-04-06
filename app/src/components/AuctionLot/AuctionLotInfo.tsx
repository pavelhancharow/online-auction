import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { getLocalTime } from 'src/services/getLocalTime';
import { AuctionLotInfoBox } from './AuctionLotStyles';

export const AuctionLotInfo: FC = (): JSX.Element => {
  const { currentLot } = useAppSelector((state) => state.userReducer);
  const { description, start, finish, rate, currentUser } = currentLot;

  return (
    <AuctionLotInfoBox>
      <p>
        <b>Description: </b>
        {description}
      </p>
      <span>
        <b>Lot start date: </b>
        {getLocalTime(start)}
      </span>
      <span>
        <b>Lot finish date: </b>
        {getLocalTime(finish)}
      </span>
      <span>
        <b>Current user: </b>
        {currentUser}
      </span>
      <span>
        <b>Current rate: </b>
        {rate}$
      </span>
    </AuctionLotInfoBox>
  );
};
