import { FC } from 'react';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { updateLotRate } from 'src/store/reducers/UserSlice/actionCreator';
import { AuctionLotBtnsBox } from './AuctionLotStyles';

export const AuctionLotBtns: FC = (): JSX.Element => {
  const {
    currentUser,
    currentLot: { rate, _id },
  } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const bet: number[] = [5, 10, 15];

  const raiseBet = async (value: number) => {
    const res = +(rate + (rate / 100) * value).toFixed(2);
    await dispatch(updateLotRate({ _id, res, userId: currentUser.id }));
  };

  return (
    <AuctionLotBtnsBox>
      <h3>Raise your bet:</h3>
      {bet.map((item) => (
        <MyButton key={item} handleClick={() => raiseBet(item)}>
          {item}%
        </MyButton>
      ))}
    </AuctionLotBtnsBox>
  );
};
