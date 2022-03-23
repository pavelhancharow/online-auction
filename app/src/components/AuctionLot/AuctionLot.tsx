/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, memo, useEffect } from 'react';
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

const AuctionLotMemo: FC = (): JSX.Element => {
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

  const setBtns = () => {
    if (user === 'USER' && currentLot.active) return <AuctionLotBtns />;
    if (user === 'ADMIN' && currentLot.active) return <AuctionLotBtnsAdmin />;
    return null;
  };

  return (
    <ModalAuctionBox>
      <MyButton handleClick={() => navigate(-1)}>Back</MyButton>
      <AuctionLotBox>
        <AuctionLotImg srcSet={img} alt={title} />
        <h2>{title}</h2>
        <AuctionLotInfo />
        {setBtns()}
      </AuctionLotBox>
    </ModalAuctionBox>
  );
};

export const AuctionLot = memo(AuctionLotMemo);
