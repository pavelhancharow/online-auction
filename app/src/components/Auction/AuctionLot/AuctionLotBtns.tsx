import { FC } from 'react';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { AuctionLotBtnsBox } from './AuctionLotStyles';

export const AuctionLotBtns: FC = (): JSX.Element => {
  return (
    <AuctionLotBtnsBox>
      <h3>Raise your bet:</h3>
      <MyButton>5%</MyButton>
      <MyButton>10%</MyButton>
      <MyButton>15%</MyButton>
    </AuctionLotBtnsBox>
  );
};
