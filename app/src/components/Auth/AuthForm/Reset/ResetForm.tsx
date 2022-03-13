import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormBox } from 'src/components/Form/FormStyles';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { ResetFormInputs } from 'src/data/FormInputs';
import { useAppDispatch } from 'src/hooks/redux';
import { IResetForm } from 'src/models/IForms';
import { resetUserPass } from 'src/store/reducers/UserSlice/actionCreator';
import { ResetInput } from './ResetInput';

export const ResetForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm<IResetForm>({
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
    },
    mode: 'onBlur',
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: IResetForm) => {
    await dispatch(resetUserPass(data));
    navigate('/');
  };

  return (
    <FormProvider {...methods}>
      <FormBox onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        {ResetFormInputs.map((data) => (
          <ResetInput key={data.id} {...data} />
        ))}
        <MyButton type="submit">Reset password</MyButton>
      </FormBox>
    </FormProvider>
  );
};
