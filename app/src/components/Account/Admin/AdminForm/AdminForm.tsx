import { FC, useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormBox } from 'src/components/Form/FormStyles';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { AdminFormInputs } from 'src/data/FormInputs';
import { useAppDispatch } from 'src/hooks/redux';
import { IAdminForm } from 'src/models/IForms';
import { getLocalTime } from 'src/services/getLocalTime';
import { createLot } from 'src/store/reducers/UserSlice/actionCreator';
import { AdminFieldset } from './AdminFieldset';
import { AdminInput } from './AdminInput';

export const AdminForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const time = useMemo(() => getLocalTime(), []);
  const methods = useForm<IAdminForm>({
    defaultValues: {
      title: '',
      description: '',
      img: '',
      duration: time,
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
        duration: getLocalTime(),
        rate: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  return (
    <FormProvider {...methods}>
      <FormBox onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        {AdminFormInputs.map((data) => (
          <AdminInput key={data.id} {...data} />
        ))}
        <AdminFieldset time={time} />
        <MyButton type="submit">Create Lot</MyButton>
      </FormBox>
    </FormProvider>
  );
};
