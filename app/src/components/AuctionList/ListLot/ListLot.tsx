import { FC, memo } from 'react';
import { getLocalTime } from 'src/services/getLocalTime';
import { ListLotBox, ListLotImg, ListLotInfo } from './ListLotStyles';

interface ListLotProps {
  title: string;
  img: string;
  start: string;
  finish: string;
  rate: number;
}

const ListLotMemo: FC<ListLotProps> = ({
  title,
  img,
  start,
  finish,
  rate,
}): JSX.Element => {
  return (
    <ListLotBox>
      <ListLotImg srcSet={img} alt="image" />
      <div>
        <h3>{title}</h3>
        <ListLotInfo>
          <li>
            <b>Auction start:</b> {getLocalTime(start)}
          </li>
          <li>
            <b>Auction finish:</b> {getLocalTime(finish)}
          </li>
          <li>
            <b>Сurrent rate:</b> {rate}$
          </li>
        </ListLotInfo>
      </div>
    </ListLotBox>
  );
};

export const ListLot = memo(ListLotMemo);
