/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { MyLoader } from '../UI/MyLoader/MyLoader';
import { getLots } from 'src/store/reducers/UserSlice/actionCreator';
import { ModalAuctionBox } from '../UI/MyModal/ModalFormStyles';
import { ListActive } from './ListActive';
import { ListCompleted } from './ListCompleted';
import { ListFuture } from './ListFuture';

export const AuctionList: FC = (): JSX.Element => {
  const { isLoading } = useAppSelector(({ userReducer }) => userReducer);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const uploadLots = async () => await dispatch(getLots());
    uploadLots();
  }, [location.pathname]);

  const getList = () => {
    switch (location.pathname) {
      case '/activeLots':
        return <ListActive />;
      case '/completedLots':
        return <ListCompleted />;
      default:
        return <ListFuture />;
    }
  };

  if (isLoading) return <MyLoader />;

  return <ModalAuctionBox>{getList()}</ModalAuctionBox>;
};
