import { FlexBox } from 'src/styles/mixins';
import styled from 'styled-components';

export const MyLoaderBox = styled(FlexBox)`
  position: relative;
  top: 50%;
  align-items: center;
  height: 100px;
  margin: 0 auto;
  transform: translateY(-50%);
`;
