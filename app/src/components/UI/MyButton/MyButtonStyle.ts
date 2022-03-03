import styled from 'styled-components';
import { ColorVars } from 'src/styles/variables';

const { primary, light, active } = ColorVars;

interface IMyBtn {
  $link: boolean;
}

export const MyBtn = styled.button<IMyBtn>`
  padding: ${({ $link }) => ($link ? '0' : '12px 30px')};
  background-color: ${primary};
  color: ${light};
  border-radius: 16px;
  box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.3s;

  &:active {
    background-color: ${active} !important;
    box-shadow: 0px 0px 16px 5px ${active}80 !important;
  }

  a {
    display: inline-block;
    padding: 12px 30px;
    transition: 0.3s;
  }
`;
