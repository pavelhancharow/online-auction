import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import { ILot } from 'src/models/IModels';
import { ListLot } from '../ListLot';
import { ListFutureForm } from '../../Form';

export const ListFuture: FC = (): JSX.Element => {
  const { currentLots, currentUser } = useAppSelector(
    (state) => state.userReducer
  );
  const user = currentUser.roles[0];

  return (
    <>
      <h2>Future Lots</h2>
      {!currentLots.length ? (
        <h3>No future lots</h3>
      ) : user !== 'USER' ? (
        <ListFutureForm currentLots={currentLots} />
      ) : (
        currentLots.map((lot: ILot) => (
          <Link to={`/${lot._id}`} key={lot._id}>
            <ListLot {...lot} />
          </Link>
        ))
      )}
    </>
  );
};
