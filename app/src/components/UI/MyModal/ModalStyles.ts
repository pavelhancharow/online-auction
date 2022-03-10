import styled from 'styled-components';
import { FlexBox } from 'src/styles/mixins';
import { ColorVars } from 'src/styles/variables';

const { primary, secondary, body, dark } = ColorVars;

export const ModalWrap = styled(FlexBox)`
  width: 100%;
  height: 100vh;
  background: ${primary};
  background: radial-gradient(circle, ${primary} 0%, ${secondary} 100%);
`;

export const ModalBox = styled(FlexBox)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: space-between;
  height: 600px;
  max-width: 61.25rem;
  box-shadow: 0 0 20px 3px ${dark}80;
  background: ${body};
`;
