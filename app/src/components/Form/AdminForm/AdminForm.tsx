/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useMemo } from 'react';
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

export const AdminForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const time = useMemo(() => getLocalTime(), []);
  const methods = useForm<IAdminForm>({
    defaultValues: {
      title: '',
      description: '',
      img: '',
      start: time,
      rate: '',
    },
    mode: 'onBlur',
  });

  const { handleSubmit, reset, formState } = methods;
  const { isSubmitSuccessful } = formState;

  const onSubmit = async (data: IAdminForm) => {
    await dispatch(createLot(data));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        title: '',
        description: '',
        img: '',
        start: getLocalTime(),
        rate: '',
      });
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
