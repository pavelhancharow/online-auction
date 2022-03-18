import { FC } from 'react';
import { ListLotBox, ListLotImg, ListLotInfo } from './ListLotStyles';

interface ListLotProps {
  title: string;
  img: string;
  start: string;
  rate: number;
}

export const ListLot: FC<ListLotProps> = ({
  title,
  img,
  start,
  rate,
}): JSX.Element => {
  return (
    <ListLotBox>
      <ListLotImg srcSet={img} alt="image" />
      <div>
        <h3>{title}</h3>
        <ListLotInfo>
          <li>
            <b>Auction start:</b> {start}
          </li>
          <li>
            <b>Сurrent rate:</b> {rate}$
          </li>
        </ListLotInfo>
      </div>
    </ListLotBox>
  );
};
