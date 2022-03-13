import { FC } from 'react';
import { PuffLoader } from 'react-spinners';
import { ColorVars } from 'src/styles/variables';
import { MyLoaderBox } from './MyLoaderStyles';

const { primary } = ColorVars;

export const MyLoader: FC = (): JSX.Element => {
  return (
    <MyLoaderBox>
      <PuffLoader size={100} color={primary} />
    </MyLoaderBox>
  );
};
