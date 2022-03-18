import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { useAppDispatch } from 'src/hooks/redux';
import { MyButton } from '../../UI/MyButton';
import { IListFutureForm } from 'src/models/IForms';
import { getListId } from 'src/services/getListId';
import {
  removeLots,
  setActiveLots,
} from 'src/store/reducers/UserSlice/actionCreator';
import { ListFutureBtnsBox } from './ListFutureFormStyles';

export const ListFutureFormBtns: FC = (): JSX.Element => {
  const { handleSubmit } = useFormContext<IListFutureForm>();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: IListFutureForm) => {
    const result = getListId(data);
    if (!result.length) return;
    await dispatch(setActiveLots(result));
  };

  const onRemove = async (data: IListFutureForm) => {
    const result = getListId(data);
    if (!result.length) return;
    await dispatch(removeLots(result));
  };

  return (
    <ListFutureBtnsBox>
      <MyButton handleClick={handleSubmit(onSubmit)}>Start Lot</MyButton>
      <MyButton handleClick={handleSubmit(onRemove)}>Remove Lot</MyButton>
    </ListFutureBtnsBox>
  );
};
