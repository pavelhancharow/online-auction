import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormBox } from 'src/components/Modal/ModalForm/Form/FormStyles';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { RegistFormInputs } from 'src/data/FormInputs';
import { $host } from 'src/http';
import { IRegistrForm } from 'src/models/IForms';
import { RegistrInput } from './RegistrInput';

export const RegistForm: FC = (): JSX.Element => {
  const methods = useForm<IRegistrForm>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    mode: 'onBlur',
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: IRegistrForm) => {
    await $host.post('auth/registration', {
      username: data.name,
      password: data.password,
      email: data.email,
    });
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
