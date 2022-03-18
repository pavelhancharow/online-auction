import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ILot } from 'src/models/IModels';
import { useAppSelector } from 'src/hooks/redux';
import { ListLot } from '../ListLot';

export const ListActive: FC = (): JSX.Element => {
  const { activeLots } = useAppSelector((state) => state.userReducer);

  return (
    <>
      <h2>Active Lots</h2>
      {!activeLots.length ? (
        <h3>No active lots</h3>
      ) : (
        activeLots.map((lot: ILot) => (
          <Link to={`/${lot._id}`} key={lot._id}>
            <ListLot {...lot} />
          </Link>
        ))
      )}
    </>
  );
};
