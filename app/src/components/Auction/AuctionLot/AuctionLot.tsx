import { FC } from 'react';
import { ModalFormBox } from '../../UI/MyModal/ModalFormStyles';

export const AuctionLot: FC = (): JSX.Element => {
  return (
    <ModalFormBox>
      <div>
        <div style={{ width: '200px', height: '200px', background: 'green' }} />
      </div>
    </ModalFormBox>
  );
};
