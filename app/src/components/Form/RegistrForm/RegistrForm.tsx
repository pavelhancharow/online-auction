import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux';
import { FormBox } from '../FormStyles';
import { MyButton } from '../../UI/MyButton';
import { RegistFormInputs } from 'src/data/FormInputs';
import { IRegistrForm } from 'src/models/IForms';
import { registrUser } from 'src/store/reducers/UserSlice/actionCreator';
import { RegistrFormInput } from './RegistrFormInput';

const defaultValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  password: '',
  confirm: '',
};

export const RegistrForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm<IRegistrForm>({ defaultValues, mode: 'onBlur' });

  const { handleSubmit } = methods;

  const onSubmit = async (data: IRegistrForm) => {
    await dispatch(registrUser(data));
    navigate('/');
  };

  return (
    <FormProvider {...methods}>
      <FormBox onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        {RegistFormInputs.map((data) => (
          <RegistrFormInput key={data.id} {...data} />
        ))}
        <MyButton type="submit">Create an account</MyButton>
      </FormBox>
    </FormProvider>
  );
};
