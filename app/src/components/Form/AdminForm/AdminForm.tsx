/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAppDispatch } from 'src/hooks/redux';
import { AdminFormInputs } from 'src/data/FormInputs';
import { AdminFormFieldset } from './AdminFormFieldset';
import { AdminFormInput } from './AdminFormInput';
import { FormBox } from '../FormStyles';
import { MyButton } from '../../UI/MyButton';
import { IAdminForm } from 'src/models/IForms';
import { getLocalTime } from 'src/services/getLocalTime';
import { createLot } from 'src/store/reducers/UserSlice/actionCreator';

const time = getLocalTime();

const defaultValues = {
  title: '',
  description: '',
  img: '',
  start: time,
  finish: time,
  rate: '',
};

const AdminFormMemo: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const methods = useForm<IAdminForm>({ defaultValues, mode: 'onBlur' });

  const { handleSubmit, reset, formState } = methods;
  const { isSubmitSuccessful } = formState;

  const onSubmit = async (data: IAdminForm) => {
    await dispatch(createLot(data));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      const time = getLocalTime();
      reset({ ...defaultValues, start: time, finish: time });
    }
  }, [isSubmitSuccessful]);

  return (
    <FormProvider {...methods}>
      <FormBox onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        {AdminFormInputs.map((data) => (
          <AdminFormInput key={data.id} {...data} />
        ))}
        <AdminFormFieldset time={time} />
        <MyButton type="submit">Create Lot</MyButton>
      </FormBox>
    </FormProvider>
  );
};

export const AdminForm = memo(AdminFormMemo);
