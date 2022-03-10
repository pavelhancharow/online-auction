import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  AuctionItemBox,
  AuctionItemImg,
  AuctionItemInfo,
} from './AuctionItemStyles';

interface AuctionItemProps {
  _id: string;
  title: string;
  img: string;
  duration: string;
  rate: number;
}

export const AuctionItem: FC<AuctionItemProps> = ({
  _id,
  title,
  img,
  duration,
  rate,
}): JSX.Element => {
  return (
    <Link to="/lot">
      <AuctionItemBox>
        <AuctionItemImg srcSet={img} alt="image" />
        <div>
          <h3>{title}</h3>
          <AuctionItemInfo>
            <li>
              <b>duration:</b> {duration}
            </li>
            <li>
              <b>current rate:</b> {rate}$
            </li>
          </AuctionItemInfo>
        </div>
      </AuctionItemBox>
    </Link>
  );
};
