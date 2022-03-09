import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormBox } from 'src/components/Form/FormStyles';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { RegistFormInputs } from 'src/data/FormInputs';
import { useAppDispatch } from 'src/hooks/redux';
import { IRegistrForm } from 'src/models/IForms';
import { registrUser } from 'src/store/reducers/UserSlice/actionCreator';
import { RegistrInput } from './RegistrInput';

export const RegistForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm<IRegistrForm>({
    defaultValues: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      confirm: '',
    },
    mode: 'onBlur',
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: IRegistrForm) => {
    await dispatch(registrUser(data));
    navigate('/');
  };

  return (
    <FormProvider {...methods}>
      <FormBox onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        {RegistFormInputs.map((data) => (
          <RegistrInput key={data.id} {...data} />
        ))}
        <MyButton type="submit">Create an account</MyButton>
      </FormBox>
    </FormProvider>
  );
};
