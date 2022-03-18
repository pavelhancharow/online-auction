/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { MyButton } from '../UI/MyButton';
import { MyLoader } from '../UI/MyLoader';
import { setLot } from 'src/store/reducers/UserSlice/actionCreator';
import { AuctionLotBox, AuctionLotImg } from './AuctionLotStyles';
import { AuctionLotBtns } from './AuctionLotBtns';
import { AuctionLotInfo } from './AuctionLotInfo';
import { ModalAuctionBox } from '../UI/MyModal/ModalFormStyles';
import { AuctionLotBtnsAdmin } from './AuctionLotBtnsAdmin';

export const AuctionLot: FC = (): JSX.Element => {
  const { lotId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentLot, currentUser, isLoading } = useAppSelector(
    ({ userReducer }) => userReducer
  );
  const { title, img } = currentLot;
  const user = currentUser.roles[0];

  useEffect(() => {
    const uploadLot = async () => await dispatch(setLot(lotId!));
    if (lotId) uploadLot();
  }, []);

  if (isLoading) return <MyLoader />;

  return (
    <ModalAuctionBox>
      <MyButton handleClick={() => navigate(-1)}>Back</MyButton>
      <AuctionLotBox>
        <AuctionLotImg srcSet={img} alt={title} />
        <h2>{title}</h2>
        <AuctionLotInfo />
        {user !== 'USER' ? (
          <AuctionLotBtnsAdmin />
        ) : currentLot.active ? (
          <AuctionLotBtns />
        ) : null}
      </AuctionLotBox>
    </ModalAuctionBox>
  );
};
