import styled from 'styled-components';
import { ColorVars } from 'src/styles/variables';

const { grey } = ColorVars;

export const MyFieldsetBox = styled.fieldset`
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${grey};
  color: ${grey};
`;
