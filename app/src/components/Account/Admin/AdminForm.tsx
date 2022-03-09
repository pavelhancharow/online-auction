import { FC, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormBox } from 'src/components/Form/FormStyles';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { AdminFormInputs } from 'src/data/FormInputs';
import { IAdminForm } from 'src/models/IForms';
import { getLocalTime } from 'src/services/getLocalTime';
import { AdminFieldset } from './AdminFieldset';
import { AdminInput } from './AdminInput';

export const AdminForm: FC = (): JSX.Element => {
  const time = useMemo(() => getLocalTime(), []);
  const methods = useForm<IAdminForm>({
    defaultValues: {
      title: '',
      description: '',
      img: 'JPG',
      duration: time,
      rate: '',
    },
    mode: 'onBlur',
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: IAdminForm) => console.log(data);

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
