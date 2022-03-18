import styled from 'styled-components';
import { ColorVars } from 'src/styles/variables';

import chevron from 'src/assets/svg/chevron.svg';
const { primary, light } = ColorVars;

export const MySelectBox = styled.select`
  display: block;
  width: 161px;
  padding: 12px 30px;
  background-color: ${primary}ad;
  color: ${light};
  border-radius: 16px;
  box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.3s;
  background-image: url(${chevron});
  background-size: 18px;
  background-position: 93% 50%;
  background-repeat: no-repeat;
`;
