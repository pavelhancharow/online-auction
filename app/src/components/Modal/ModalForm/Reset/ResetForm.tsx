import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormBox } from 'src/components/Modal/ModalForm/Form/FormStyles';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { ResetFormInputs } from 'src/data/FormInputs';
import { IResetForm } from 'src/models/IForms';
import { ResetInput } from './ResetInput';

export const ResetForm: FC = (): JSX.Element => {
  const methods = useForm<IResetForm>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: IResetForm) => console.log(data);

  return (
    <FormProvider {...methods}>
      <FormBox onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        {ResetFormInputs.map((data) => (
          <ResetInput key={data.id} {...data} />
        ))}
        <MyButton type="submit">Create an account</MyButton>
      </FormBox>
    </FormProvider>
  );
};
