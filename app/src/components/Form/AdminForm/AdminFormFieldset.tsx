import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { MyFieldset } from '../../UI/MyFieldset';
import { IAdminForm } from 'src/models/IForms';
import { AdminFieldsetBox } from './AdminFormStyles';

interface AdminFieldsetProps {
  time: string;
}

export const AdminFormFieldset: FC<AdminFieldsetProps> = ({
  time,
}): JSX.Element => {
  const { register } = useFormContext<IAdminForm>();

  return (
    <AdminFieldsetBox>
      <MyFieldset
        id="start"
        type="datetime-local"
        time={time}
        register={register}
      >
        Auction Start:{' '}
      </MyFieldset>
      <MyFieldset
        id="finish"
        type="datetime-local"
        time={time}
        register={register}
      >
        Auction Finish:{' '}
      </MyFieldset>
      <MyFieldset id="img" type="file" register={register}>
        Lot Image:{' '}
      </MyFieldset>
    </AdminFieldsetBox>
  );
};
