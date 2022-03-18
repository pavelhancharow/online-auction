import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormBox } from '../FormStyles';
import { IListFutureForm } from 'src/models/IForms';
import { ILot } from 'src/models/IModels';
import { ListFutureFormBtns } from './ListFutureFormBtns';
import { ListFutureFormItem } from './ListFutureFormItem';

interface FutureFormProps {
  currentLots: ILot[];
}

export const ListFutureForm: FC<FutureFormProps> = ({
  currentLots,
}): JSX.Element => {
  const methods = useForm<IListFutureForm>({ mode: 'onBlur' });

  return (
    <FormProvider {...methods}>
      <FormBox>
        <ListFutureFormBtns />
        {currentLots.map((lot: ILot) => (
          <ListFutureFormItem key={lot._id} {...lot} />
        ))}
      </FormBox>
    </FormProvider>
  );
};
