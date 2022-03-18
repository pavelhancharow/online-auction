/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { ActionWSTypes, IActionWS, IDataWS } from 'src/models/IWS';
import {
  setMessage,
  updateLot,
} from 'src/store/reducers/UserSlice/actionCreator';
import { MyButton } from '../UI/MyButton';
import { AuctionLotBtnsBox } from './AuctionLotStyles';

export const AuctionLotBtnsAdmin: FC = (): JSX.Element => {
  const ws = useRef<WebSocket | null>(null);
  const dispatch = useAppDispatch();
  const { currentUser, currentLot } = useAppSelector(
    ({ userReducer }) => userReducer
  );
  const { _id } = currentLot;

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

  return (
    <AuctionLotBtnsBox>
      <h3>Auction options:</h3>
      <MyButton>Finish Auction</MyButton>
    </AuctionLotBtnsBox>
  );
};
