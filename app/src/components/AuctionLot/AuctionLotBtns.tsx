/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useEffect, useRef } from 'react';
import { MyButton } from '../UI/MyButton';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { ActionWSTypes, IActionWS, IDataWS } from 'src/models/IWS';
import { getNewBet } from 'src/services/getNewBet';
import {
  setMessage,
  updateLot,
} from 'src/store/reducers/UserSlice/actionCreator';
import { UserState } from 'src/store/reducers/UserSlice/UserState';
import { AuctionLotBtnsBox } from './AuctionLotStyles';

const bets: number[] = [5, 10, 15];

const AuctionLotBtnsMemo: FC = (): JSX.Element => {
  const {
    currentUser,
    currentLot: { rate, _id },
  } = useAppSelector<UserState>((state) => state.userReducer);
  const ws = useRef<WebSocket | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:5000/lot');

    ws.current.onopen = () => {
      const action: IActionWS = {
        type: ActionWSTypes.CONNECTION,
        payload: { lotId: _id, userId: currentUser.id },
      };

      ws.current?.send(JSON.stringify(action));
    };

    return () => ws.current?.close();
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = async (event: MessageEvent) => {
      const data: IDataWS = JSON.parse(event.data.toString('utf-8'));

      data.lot
        ? await dispatch(updateLot(data))
        : await dispatch(setMessage(data.message));
    };
  }, []);

  const raiseBet = async (value: number) => {
    const action: IActionWS = {
      type: ActionWSTypes.MESSAGE,
      payload: {
        lotId: _id,
        userId: currentUser.id,
        rate: getNewBet(rate, value),
      },
    };

    ws.current?.send(JSON.stringify(action));
  };

  return (
    <AuctionLotBtnsBox>
      <h3>Raise your bet:</h3>
      {bets.map((item) => (
        <MyButton key={item} handleClick={() => raiseBet(item)}>
          {item}%
        </MyButton>
      ))}
    </AuctionLotBtnsBox>
  );
};

export const AuctionLotBtns = memo(AuctionLotBtnsMemo);
