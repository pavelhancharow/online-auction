import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { ILot } from 'src/models/IModels';
import { ListLot } from '../ListLot';

export const ListCompleted: FC = (): JSX.Element => {
  const { completedLots } = useAppSelector((state) => state.userReducer);

  return (
    <>
      <h2>Completed Lots</h2>
      {!completedLots.length ? (
        <h3>No completed lots</h3>
      ) : (
        completedLots.map((lot: ILot) => <ListLot key={lot._id} {...lot} />)
      )}
    </>
  );
};
