import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { MyFieldset } from 'src/components/UI/MyFieldset/MyFieldset';
import { IAdminForm } from 'src/models/IForms';
import { AdminFieldsetBox } from '../AdminStyles';

interface AdminFieldsetProps {
  time: string;
}

export const AdminFieldset: FC<AdminFieldsetProps> = ({
  time,
}): JSX.Element => {
  const { register } = useFormContext<IAdminForm>();

  return (
    <AdminFieldsetBox>
      <MyFieldset
        id="duration"
        type="datetime-local"
        time={time}
        register={register}
      >
        Auction Duration:{' '}
      </MyFieldset>
      <MyFieldset id="img" type="file" register={register}>
        Lot Image:{' '}
      </MyFieldset>
    </AdminFieldsetBox>
  );
};
