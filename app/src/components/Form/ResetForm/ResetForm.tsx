import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux';
import { FormBox } from '../FormStyles';
import { MyButton } from '../../UI/MyButton';
import { ResetFormInputs } from 'src/data/FormInputs';
import { IResetForm } from 'src/models/IForms';
import { resetUserPass } from 'src/store/reducers/UserSlice/actionCreator';
import { ResetFormInput } from './ResetFormInput';

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
          <ResetFormInput key={data.id} {...data} />
        ))}
        <MyButton type="submit">Reset password</MyButton>
      </FormBox>
    </FormProvider>
  );
};
