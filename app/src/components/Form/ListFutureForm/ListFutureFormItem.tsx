import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ListLot } from '../../AuctionList/ListLot';
import { ListFutureItemBox } from './ListFutureFormStyles';

interface ListFutureFormItemProps {
  _id: string;
  title: string;
  img: string;
  start: string;
  rate: number;
}

export const ListFutureFormItem: FC<ListFutureFormItemProps> = ({
  _id,
  ...props
}): JSX.Element => {
  const { register } = useFormContext();

  return (
    <ListFutureItemBox>
      <input type="checkbox" id={_id} {...register(_id)} />
      <label htmlFor={_id}>
        <ListLot {...props} />
      </label>
    </ListFutureItemBox>
  );
};
